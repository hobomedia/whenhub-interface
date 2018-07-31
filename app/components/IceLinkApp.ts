/// <reference path="../libraries/fm.icelink.d.ts" />

import { AutoSignalling, Signalling } from './Signalling';


export default class IceLinkApp {

    // This flag determines the signalling mode used.
    // Note that Manual and Auto signalling do not Interop.
    private SIGNAL_MANUALLY: boolean = false;
    private signalling: Signalling;

    private iceServers: fm.icelink.IceServer[] = [
        new fm.icelink.IceServer('stun:turn.icelink.fm:3478'),
        // NB: The URL "turn:turn.icelink.fm:443" implies that the TURN server supports both UDP and TCP.
        // If you want to restrict the network protocol, append "?transport=udp" or "?transport=tcp" to
        // the URL, per RFC 7065: https://tools.ietf.org/html/rfc7065#section-3.1.
        new fm.icelink.IceServer("turn:turn.icelink.fm:443", "test", "pa55w0rd!")
    ];

    private websyncServerUrl: string = 'https://v4.websync.fm/websync.ashx'; // WebSync Cloud

    private localMedia: fm.icelink.LocalMedia;
    private layoutManager: fm.icelink.DomLayoutManager | null;

    public sessionId: string;
    public name: string;

    // private chromeExtensionInstallButton = document.getElementById('chromeExtensionInstallButton') as HTMLButtonElement;

    // public constructor(logContainer: HTMLElement) {
    //     // Chrome screen-sharing extension registration.
    //     fm.icelink.Plugin.setChromeExtensionId('nidjnlpklmpflfmfflalpddmadlgjckn');


    //     // Log to console and the DOM.
    //     fm.icelink.Log.setLogLevel(fm.icelink.LogLevel.Debug);
    //     fm.icelink.Log.registerProvider(new fm.icelink.ConsoleLogProvider(fm.icelink.LogLevel.Debug));
    //     fm.icelink.Log.registerProvider(new fm.icelink.DomLogProvider(logContainer, fm.icelink.LogLevel.Debug));
    // }

    public startLocalMedia(videoContainer: HTMLElement, captureScreen: boolean): fm.icelink.Future<fm.icelink.LocalMedia> {
        var promise = new fm.icelink.Promise<fm.icelink.LocalMedia>();
        try {
            if (this.localMedia != null) {
                throw new Error("Local media has already been started.");
            }

            var audio = true;
            var video = captureScreen ? new fm.icelink.VideoConfig(window.screen.width, window.screen.height, 3) : new fm.icelink.VideoConfig(640, 480, 30);
            this.localMedia = new fm.icelink.LocalMedia(audio, video, captureScreen);

            // Set up the layout manager.
            this.layoutManager = new fm.icelink.DomLayoutManager(videoContainer);

            // Start the local media.
            this.localMedia.start().then((localMedia) => {

                // Audio device selection.
                // localMedia.getAudioSourceInputs().then((inputs) => {
                //     this.localMedia.changeAudioSourceInput(new fm.icelink.SourceInput(inputs[0].getId(), inputs[0].getName()));
                // });

                // Video device selection.
                localMedia.getVideoSourceInputs().then((inputs) => {
                    this.localMedia.changeVideoSourceInput(new fm.icelink.SourceInput(inputs[0].getId(), inputs[0].getName()));
                });

                // Add the local view to the layout.
                var localView = localMedia.getView();
                if (localView != null) {
                    localView.id = 'localView';
                    if (this.layoutManager != null) {
                        this.layoutManager.setLocalView(localView);
                    }
                }
                if (this.localMedia) {
                    promise.resolve(this.localMedia);
                }
            }, (ex) => {
                if (captureScreen && (navigator as any).webkitGetUserMedia && !fm.icelink.Plugin.getChromeExtensionInstalled()) {
                    promise.reject(new Error(ex + '\n\nClick "Install Screen-Sharing Extension" to install screen-sharing extension.'));
                } else {
                    promise.reject(ex);
                }
            });

        } catch (ex) {
            promise.reject(ex);
        }
        return promise;
    }

    public stopLocalMedia(): fm.icelink.Future<Object> {
        var promise = new fm.icelink.Promise();
        try {
            if (this.localMedia == null) {
                throw new Error("Local media has already been stopped.");
            }

            this.localMedia.stop().then((result) => {
                // Tear down the layout manager.
                var lm = this.layoutManager;
                if (lm != null) {
                    lm.removeRemoteViews();
                    lm.unsetLocalView();
                    this.layoutManager = null;
                }

                // Tear down the local media.

                promise.resolve(true);
            }, (ex) => {
                promise.reject(ex);
            });
        } catch (ex) {
            promise.reject(ex);
        }
        return promise;
    }

    public joinAsync(): fm.icelink.Future<Object> {
        this.signalling = this.autoSignalling();

        return this.signalling.joinAsync();
    }

    private autoSignalling(): Signalling {
        var self = this;
        return new AutoSignalling(this.websyncServerUrl, this.name, this.sessionId, (remoteClient: any): fm.icelink.Connection => {
            return self.connection(remoteClient);
        });
    }


    private connection(remoteClient: any): fm.icelink.Connection {
        var self = this;
        // if (remoteClient.getBoundRecords() && remoteClient.getBoundRecords()['userName']) {
        //     peerName = (remoteClient.getBoundRecords()['userName'] as any).getValue();
        // }

        var remoteMedia = new fm.icelink.RemoteMedia();

        // Add the remote view to the layout.
        var remoteView = remoteMedia.getView();
        if (remoteView != null) {
            remoteView.id = 'remoteView_' + remoteMedia.getId();
            remoteMedia.getViewSink().setViewScale(fm.icelink.LayoutScale.Contain);
            if (this.layoutManager) {
                this.layoutManager.addRemoteView(remoteMedia.getId(), remoteView);
            }
        }

        // Create connection to remote client.
        var audioStream = new fm.icelink.AudioStream(this.localMedia, remoteMedia);
        var videoStream = new fm.icelink.VideoStream(this.localMedia, remoteMedia);

        var connection = new fm.icelink.Connection([audioStream, videoStream]);
        connection.setIceServers(this.iceServers);
        connection.addOnStateChange((c: fm.icelink.Connection) => {
            var error = connection.getError();
            console.log(error);
            try {
                fm.icelink.Log.info('Connection state is ' + new fm.icelink.ConnectionStateWrapper(connection.getState()).toString() + '.', error.getException());
            } catch (error) {

            }


            if (connection.getState() === fm.icelink.ConnectionState.Connected) {
                console.log('Peer joined');
            }
            else if (connection.getState() === fm.icelink.ConnectionState.Closing ||
                connection.getState() === fm.icelink.ConnectionState.Failing) {
                // Remove the remote view from the layout.
                var lm = this.layoutManager;
                if (lm != null) {
                    lm.removeRemoteView(remoteMedia.getId());
                }

                remoteMedia.destroy();
            }
            else if (connection.getState() === fm.icelink.ConnectionState.Closed) {
                console.log('Peer left');
            }
            else if (connection.getState() === fm.icelink.ConnectionState.Failed) {
                console.log('Peer left');
                //Attempt to reconnect
                if (!self.SIGNAL_MANUALLY)
                    self.signalling.reconnect(remoteClient, connection);
            }
        });
        return connection;
    }


    public leaveAsync(): fm.icelink.Future<Object> {
        if (this.signalling != null) {
            return this.signalling.leaveAsync();
        } else {
            var promise = new fm.icelink.Promise();
            promise.resolve(true);
            return promise;
        }
    }

    public toggleAudioMute(): boolean {
        if (this.localMedia) {
            var audioTrack = this.localMedia.getAudioTrack();
            audioTrack.setMuted(!audioTrack.getMuted());
            return audioTrack.getMuted();
        }
        return false;
    }

    public toggleVideoMute(): boolean {
        if (this.localMedia) {
            var videoTrack = this.localMedia.getVideoTrack();
            videoTrack.setMuted(!videoTrack.getMuted());
            return videoTrack.getMuted();
        }
        return false;
    }


    public sendMessage(message: string): void {
        this.signalling.writeLine(message);
    }
}
