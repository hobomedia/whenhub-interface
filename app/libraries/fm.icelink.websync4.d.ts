//
// Title: IceLink for JavaScript
// Version: 3.2.1.456
// Copyright Frozen Mountain Software 2011+
//
declare namespace fm {
    interface singleAction<T> {
    }
    class serializable {
        getTypeString(): string;
        constructor(...params: any[]);
    }
    class dynamic extends serializable {
        getTypeString(): string;
        constructor(...params: any[]);
        getDynamicProperties(): any;
        setDynamicProperties(value: any): void;
        getDynamicValue(key: string): any;
        setDynamicValue(key: string, value: any): void;
        unsetDynamicValue(key: string): boolean;
    }
}
declare namespace fm {
    interface SingleAction<T> extends singleAction<T> {
    }
    class Serializable extends serializable {
    }
    class Dynamic extends dynamic {
    }
}
declare namespace fm.websync {
    class extensible extends dynamic {
        getTypeString(): string;
        constructor(...params: any[]);
        getExtensions(): any;
        setExtensions(value: any): void;
        getExtensionCount(): number;
        getExtensionNames(): string[];
        copyExtensions(extensible: extensible): void;
        setExtensionValueJson(name: string, valueJson: string): void;
        setExtensionValueJson(name: string, valueJson: string, validate: boolean): void;
        getExtensionValueJson(name: string): string;
        getMetaJson(): any;
        setMetaJson(value: any): void;
    }
    class client extends dynamic {
        getTypeString(): string;
        constructor(...params: any[]);
        getInstanceId(): any;
        getClientId(): any;
        publish(...params: any[]): any;
        joinConference(...params: any[]): any;
        leaveConference(...params: any[]): any;
        renegotiate(...params: any[]): any;
        reconnectRemoteClient(...params: any[]): any;
        addOnStreamFailure(...params: any[]): any;
    }
    enum connectionType {
    }
    class record {
        getTypeString(): string;
        constructor(...params: any[]);
    }
    class publishingClient extends serializable {
        getBoundRecords(): any;
    }
    class baseInputArgs extends extensible {
        getTypeString(): string;
        constructor(...params: any[]);
        getRequestUrl(): any;
        setRequestUrl(value: any): void;
        getRequestTimeout(): any;
        setRequestTimeout(value: any): void;
        getIsRetry(): any;
        setIsRetry(value: any): void;
        getSynchronous(): any;
        setSynchronous(value: any): void;
    }
    class baseOutputArgs extends extensible {
        getTypeString(): string;
        constructor(...params: any[]);
        getTimestamp(): any;
        setTimestamp(value: any): void;
        getClient(): any;
        setClient(value: any): void;
    }
    class baseSuccessArgs extends baseOutputArgs {
        getTypeString(): string;
        constructor(...params: any[]);
    }
    class baseFailureArgs extends baseOutputArgs {
        getTypeString(): string;
        constructor(...params: any[]);
        getException(): any;
        setException(value: any): void;
        getErrorCode(): any;
        getErrorMessage(): any;
        getRetry(): any;
        setRetry(value: any): void;
    }
    class baseReceiveArgs extends baseSuccessArgs {
        getTypeString(): string;
        constructor(...params: any[]);
        getDataJson(): any;
        getDataBytes(): any;
        getIsBinary(): any;
        getTag(): any;
        getConnectionType(): any;
        getReconnectAfter(): any;
        setReconnectAfter(value: any): void;
    }
    class streamFailureArgs extends baseFailureArgs {
    }
    class subscribeArgs extends baseInputArgs {
        getTypeString(): string;
        constructor(...params: any[]);
        setChannel(channel: string): void;
        getOnSuccess(): any;
        setOnSuccess(value: any): void;
        getOnFailure(): any;
        setOnFailure(value: any): void;
        getOnReceive(): any;
        setOnReceive(value: any): void;
    }
    class subscribeSuccessArgs extends baseSuccessArgs {
        getTypeString(): string;
        constructor(...params: any[]);
    }
    class subscribeFailureArgs extends baseFailureArgs {
        getTypeString(): string;
        constructor(...params: any[]);
    }
    class subscribeReceiveArgs extends baseReceiveArgs {
        getTypeString(): string;
        constructor(...params: any[]);
        getChannel(): any;
        getWasSentByMe(): any;
        getPublishingClient(): any;
    }
    class publishArgs extends baseInputArgs {
        getTypeString(): string;
        constructor(...params: any[]);
        setChannel(channel: string): void;
        getOnSuccess(): any;
        setOnSuccess(value: any): void;
        getOnFailure(): any;
        setOnFailure(value: any): void;
    }
    class publishSuccessArgs extends baseSuccessArgs {
        getTypeString(): string;
        constructor(...params: any[]);
    }
    class publishFailureArgs extends baseFailureArgs {
        getTypeString(): string;
        constructor(...params: any[]);
    }
    class serviceArgs extends baseInputArgs {
        getTypeString(): string;
        constructor(...params: any[]);
        setChannel(channel: string): void;
        getOnSuccess(): any;
        setOnSuccess(value: any): void;
        getOnFailure(): any;
        setOnFailure(value: any): void;
    }
    class serviceSuccessArgs extends baseSuccessArgs {
        getTypeString(): string;
        constructor(...params: any[]);
    }
    class serviceFailureArgs extends baseFailureArgs {
        getTypeString(): string;
        constructor(...params: any[]);
    }
    class disconnectArgs extends baseInputArgs {
        constructor(...params: any[]);
        setOnComplete(value: any): void;
    }
}
declare namespace fm.websync {
    class Extensible extends extensible {
    }
    class Client extends client {
    }
    enum ConnectionType {
    }
    class Record extends record {
    }
    class PublishingClient extends publishingClient {
    }
    class BaseInputArgs extends baseInputArgs {
    }
    class BaseOutputArgs extends baseOutputArgs {
    }
    class BaseSuccessArgs extends baseSuccessArgs {
    }
    class BaseFailureArgs extends baseFailureArgs {
    }
    class BaseReceiveArgs extends baseReceiveArgs {
    }
    class StreamFailureArgs extends streamFailureArgs {
    }
    class SubscribeArgs extends subscribeArgs {
    }
    class SubscribeSuccessArgs extends subscribeSuccessArgs {
    }
    class SubscribeFailureArgs extends subscribeFailureArgs {
    }
    class SubscribeReceiveArgs extends subscribeReceiveArgs {
    }
    class PublishArgs extends publishArgs {
    }
    class PublishSuccessArgs extends publishSuccessArgs {
    }
    class PublishFailureArgs extends publishFailureArgs {
    }
    class ServiceArgs extends serviceArgs {
    }
    class ServiceSuccessArgs extends serviceSuccessArgs {
    }
    class ServiceFailureArgs extends serviceFailureArgs {
    }
    class DisconnectArgs extends disconnectArgs {
    }
}
declare namespace fm.websync.chat {
    class clientExtensions {
        getTypeString(): string;
        constructor(...params: any[]);
        static join(...params: any[]): any;
        static leave(...params: any[]): any;
    }
    class chatUser {
        getTypeString(): string;
        constructor(...params: any[]);
        getUserId(): any;
        getUserNickname(): any;
    }
    class joinArgs extends baseInputArgs {
        getTypeString(): string;
        constructor(...params: any[]);
        getUserId(): any;
        setUserId(value: any): void;
        getUserNickname(): any;
        setUserNickname(value: any): void;
        getOnSuccess(): any;
        setOnSuccess(value: any): void;
        getOnFailure(): any;
        setOnFailure(value: any): void;
        getOnReceive(): any;
        setOnReceive(value: any): void;
        getOnUserJoin(): any;
        setOnUserJoin(value: any): void;
        getOnUserLeave(): any;
        setOnUserLeave(value: any): void;
    }
    class joinFailureArgs extends baseFailureArgs {
        getTypeString(): string;
        constructor(...params: any[]);
    }
    class joinSuccessArgs extends baseSuccessArgs {
        getTypeString(): string;
        constructor(...params: any[]);
        getUsers(): any;
    }
    class joinReceiveArgs extends subscribeReceiveArgs {
        getTypeString(): string;
        constructor(...params: any[]);
        getUserId(): any;
        getUserNickname(): any;
        getPublishingUser(): any;
    }
    class userJoinArgs extends baseSuccessArgs {
        getTypeString(): string;
        constructor(...params: any[]);
        getJoinedUser(): any;
    }
    class userLeaveArgs extends baseSuccessArgs {
        getTypeString(): string;
        constructor(...params: any[]);
        getLeftUser(): any;
    }
    class leaveArgs extends baseInputArgs {
        getTypeString(): string;
        constructor(...params: any[]);
        getOnSuccess(): any;
        setOnSuccess(value: any): void;
        getOnFailure(): any;
        setOnFailure(value: any): void;
    }
    class leaveFailureArgs extends baseFailureArgs {
        getTypeString(): string;
        constructor(...params: any[]);
    }
    class leaveSuccessArgs extends baseSuccessArgs {
        getTypeString(): string;
        constructor(...params: any[]);
    }
}
declare namespace fm.websync.chat {
    class ClientExtensions extends clientExtensions {
    }
    class ChatUser extends chatUser {
    }
    class JoinArgs extends joinArgs {
    }
    class JoinFailureArgs extends joinFailureArgs {
    }
    class JoinSuccessArgs extends joinSuccessArgs {
    }
    class JoinReceiveArgs extends joinReceiveArgs {
    }
    class UserJoinArgs extends userJoinArgs {
    }
    class UserLeaveArgs extends userLeaveArgs {
    }
    class LeaveArgs extends leaveArgs {
    }
    class LeaveFailureArgs extends leaveFailureArgs {
    }
    class LeaveSuccessArgs extends leaveSuccessArgs {
    }
}
declare namespace fm.icelink.websync4 {
    /**
    @internal
    */
    class PendingRenegotiationProperties {
        getTypeString(): string;
        /**
        @internal
        */
        private _channel;
        /**
        @internal
        */
        private _client;
        /**
        @internal
        */
        private _pendingPromise;
        constructor(pendingPromise: fm.icelink.Promise<fm.icelink.SessionDescription>, client: fm.websync.Client, channel: string);
        getChannel(): string;
        getClient(): fm.websync.Client;
        getPendingPromise(): fm.icelink.Promise<fm.icelink.SessionDescription>;
        /**
        @internal

        */
        private setChannel(value);
        /**
        @internal

        */
        private setClient(value);
        /**
        @internal

        */
        private setPendingPromise(value);
    }
}
declare namespace fm.icelink.websync4 {
    /**
    @internal
    */
    class State {
        getTypeString(): string;
        /**
        @internal
        */
        private _connections;
        /**
        @internal
        */
        private _unlinkAllOnLeaveSuccess;
        /**
        @internal
        */
        private _unlinkExistingOnUserJoin;
        /**
        @internal
        */
        private _unlinkOnUserLeave;
        constructor();
        getConnections(): fm.icelink.websync4.ConnectionCollection;
        getUnlinkAllOnLeaveSuccess(): boolean;
        getUnlinkExistingOnUserJoin(): boolean;
        getUnlinkOnUserLeave(): boolean;
        setConnections(value: fm.icelink.websync4.ConnectionCollection): void;
        setUnlinkAllOnLeaveSuccess(value: boolean): void;
        setUnlinkExistingOnUserJoin(value: boolean): void;
        setUnlinkOnUserLeave(value: boolean): void;
    }
}
declare namespace fm.icelink.websync4 {
    /**
     <div>
     Arguments for a client joining an IceLink conference.
     </div>

    */
    class JoinConferenceArgs extends fm.websync.BaseInputArgs {
        getTypeString(): string;
        /**
        @internal
        */
        private _conferenceChannel;
        /**
        @internal
        */
        private _onFailure;
        /**
        @internal
        */
        private _onReceive;
        /**
        @internal
        */
        private _onRemoteClient;
        /**
        @internal
        */
        private _onSuccess;
        /**
        @internal
        */
        private _unlinkExistingOnUserJoin;
        /**
        @internal
        */
        private _unlinkOnUserLeave;
        constructor();
        /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-constructor'>&nbsp;</span>**/
        /**
         <div>
         Initializes a new instance of the `fm.icelink.websync4.joinConferenceArgs` class.
         </div>

        @param {string} conferenceChannel The conference channel.
        @return {}
        */
        constructor(conferenceChannel: string);
        /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-getConferenceChannel'>&nbsp;</span>**/
        /**
         <div>
         Gets the conference channel.
         </div>


        @return {string}
        */
        getConferenceChannel(): string;
        /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-getOnFailure'>&nbsp;</span>**/
        /**
         <div>
         Gets the callback to invoke if the request fails.
         See `fm.icelink.websync4.joinConferenceFailureArgs` for callback argument details.
         </div>


        @return {fm.icelink.IAction1<fm.icelink.websync4.JoinConferenceFailureArgs>}
        */
        getOnFailure(): fm.icelink.IAction1<fm.icelink.websync4.JoinConferenceFailureArgs>;
        /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-getOnReceive'>&nbsp;</span>**/
        /**
         <div>
         Gets the callback to invoke when data is received on the channel.
         See `fm.icelink.websync4.joinConferenceReceiveArgs` for callback argument details.
         </div>


        @return {fm.icelink.IAction1<fm.icelink.websync4.JoinConferenceReceiveArgs>}
        */
        getOnReceive(): fm.icelink.IAction1<fm.icelink.websync4.JoinConferenceReceiveArgs>;
        /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-getOnRemoteClient'>&nbsp;</span>**/
        /**
         <div>
         Gets the callback to invoke when a new remote client needs a connection.
         </div>


        @return {fm.icelink.IFunction1<fm.icelink.websync4.PeerClient,fm.icelink.Connection>}
        */
        getOnRemoteClient(): fm.icelink.IFunction1<fm.icelink.websync4.PeerClient, fm.icelink.Connection>;
        /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-getOnSuccess'>&nbsp;</span>**/
        /**
         <div>
         Gets the callback to invoke if the request succeeds.
         See `fm.icelink.websync4.joinConferenceSuccessArgs` for callback argument details.
         </div>


        @return {fm.icelink.IAction1<fm.icelink.websync4.JoinConferenceSuccessArgs>}
        */
        getOnSuccess(): fm.icelink.IAction1<fm.icelink.websync4.JoinConferenceSuccessArgs>;
        /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-getUnlinkExistingOnUserJoin'>&nbsp;</span>**/
        /**
         <div>
         Gets a value indicating whether this endpoint
         should drop existing links in favour of new ones
         when remote peers join the channel.
         Defaults to <c>true</c>.
         </div>


        @return {boolean}
        */
        getUnlinkExistingOnUserJoin(): boolean;
        /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-getUnlinkOnUserLeave'>&nbsp;</span>**/
        /**
         <div>
         Gets a value indicating whether this endpoint
         should initiate an unlink when remote peers leave the channel.
         Defaults to <c>true</c>.
         </div>


        @return {boolean}
        */
        getUnlinkOnUserLeave(): boolean;
        /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-setConferenceChannel'>&nbsp;</span>**/
        /**
         <div>
         Sets the conference channel.
         </div>


        @param {string} value
        @return {void}
        */
        setConferenceChannel(value: string): void;
        /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-setOnFailure'>&nbsp;</span>**/
        /**
         <div>
         Sets the callback to invoke if the request fails.
         See `fm.icelink.websync4.joinConferenceFailureArgs` for callback argument details.
         </div>


        @param {fm.icelink.IAction1<fm.icelink.websync4.JoinConferenceFailureArgs>} value
        @return {void}
        */
        setOnFailure(value: fm.icelink.IAction1<fm.icelink.websync4.JoinConferenceFailureArgs>): void;
        /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-setOnReceive'>&nbsp;</span>**/
        /**
         <div>
         Sets the callback to invoke when data is received on the channel.
         See `fm.icelink.websync4.joinConferenceReceiveArgs` for callback argument details.
         </div>


        @param {fm.icelink.IAction1<fm.icelink.websync4.JoinConferenceReceiveArgs>} value
        @return {void}
        */
        setOnReceive(value: fm.icelink.IAction1<fm.icelink.websync4.JoinConferenceReceiveArgs>): void;
        /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-setOnRemoteClient'>&nbsp;</span>**/
        /**
         <div>
         Sets the callback to invoke when a new remote client needs a connection.
         </div>


        @param {fm.icelink.IFunction1<fm.icelink.websync4.PeerClient,fm.icelink.Connection>} value
        @return {void}
        */
        setOnRemoteClient(value: fm.icelink.IFunction1<fm.icelink.websync4.PeerClient, fm.icelink.Connection>): void;
        /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-setOnSuccess'>&nbsp;</span>**/
        /**
         <div>
         Sets the callback to invoke if the request succeeds.
         See `fm.icelink.websync4.joinConferenceSuccessArgs` for callback argument details.
         </div>


        @param {fm.icelink.IAction1<fm.icelink.websync4.JoinConferenceSuccessArgs>} value
        @return {void}
        */
        setOnSuccess(value: fm.icelink.IAction1<fm.icelink.websync4.JoinConferenceSuccessArgs>): void;
        /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-setUnlinkExistingOnUserJoin'>&nbsp;</span>**/
        /**
         <div>
         Sets a value indicating whether this endpoint
         should drop existing links in favour of new ones
         when remote peers join the channel.
         Defaults to <c>true</c>.
         </div>


        @param {boolean} value
        @return {void}
        */
        setUnlinkExistingOnUserJoin(value: boolean): void;
        /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-setUnlinkOnUserLeave'>&nbsp;</span>**/
        /**
         <div>
         Sets a value indicating whether this endpoint
         should initiate an unlink when remote peers leave the channel.
         Defaults to <c>true</c>.
         </div>


        @param {boolean} value
        @return {void}
        */
        setUnlinkOnUserLeave(value: boolean): void;
    }
}
declare namespace fm.icelink.websync4 {
    /**
     <div>
     Arguments for join-conference failure callbacks.
     </div>

    */
    class JoinConferenceFailureArgs extends fm.websync.BaseFailureArgs {
        getTypeString(): string;
        /**
        @internal
        */
        __conferenceChannel: string;
        constructor();
        /**<span id='method-fm.icelink.websync4.JoinConferenceFailureArgs-getConferenceChannel'>&nbsp;</span>**/
        /**
         <div>
         Gets the ID of the conference that failed to be joined.
         </div>


        @return {string}
        */
        getConferenceChannel(): string;
    }
}
declare namespace fm.icelink.websync4 {
    /**
     <div>
     Arguments for join-conference receive callbacks.
     </div>

    */
    class JoinConferenceReceiveArgs extends fm.websync.SubscribeReceiveArgs {
        getTypeString(): string;
        /**
        @internal
        */
        __publishingPeer: fm.icelink.websync4.PeerClient;
        /**<span id='method-fm.icelink.websync4.JoinConferenceReceiveArgs-constructor'>&nbsp;</span>**/
        /**
         <div>
         Initializes a new instance of the `fm.icelink.websync4.joinConferenceReceiveArgs` class.
         </div>

        @param {string} channel The channel over which data was received.
        @param {string} dataJson The data in JSON format.
        @param {Uint8Array} dataBytes The data in binary format.
        @param {fm.websync.ConnectionType} connectionType The current connection type.
        @param {number} reconnectAfter The amount of time in milliseconds to pause before reconnecting to the server.
        @return {}
        */
        constructor(channel: string, dataJson: string, dataBytes: Uint8Array, connectionType: fm.websync.ConnectionType, reconnectAfter: number);
        /**<span id='method-fm.icelink.websync4.JoinConferenceReceiveArgs-getPublishingPeer'>&nbsp;</span>**/
        /**
         <div>
         Gets the user that published the message.
         </div>


        @return {fm.icelink.websync4.PeerClient}
        */
        getPublishingPeer(): fm.icelink.websync4.PeerClient;
    }
}
declare namespace fm.icelink.websync4 {
    /**
     <div>
     Arguments for join-conference success callbacks.
     </div>

    */
    class JoinConferenceSuccessArgs extends fm.websync.BaseSuccessArgs {
        getTypeString(): string;
        /**
        @internal
        */
        __conferenceChannel: string;
        /**
        @internal
        */
        __users: fm.websync.chat.ChatUser[];
        constructor();
        /**<span id='method-fm.icelink.websync4.JoinConferenceSuccessArgs-getConferenceChannel'>&nbsp;</span>**/
        /**
         <div>
         Gets the ID of the conference that was joined.
         </div>


        @return {string}
        */
        getConferenceChannel(): string;
        /**<span id='method-fm.icelink.websync4.JoinConferenceSuccessArgs-getUsers'>&nbsp;</span>**/
        /**
         <div>
         Gets the array of users in the channel.
         </div>


        @return {fm.websync.chat.ChatUser[]}
        */
        getUsers(): fm.websync.chat.ChatUser[];
    }
}
declare namespace fm.icelink.websync4 {
    /**
     <div>
     Arguments for a client leaving an IceLink conference.
     </div>

    */
    class LeaveConferenceArgs extends fm.websync.BaseInputArgs {
        getTypeString(): string;
        /**
        @internal
        */
        private _conferenceChannel;
        /**
        @internal
        */
        private _onFailure;
        /**
        @internal
        */
        private _onSuccess;
        /**
        @internal
        */
        private _unlinkAllOnSuccess;
        constructor();
        /**<span id='method-fm.icelink.websync4.LeaveConferenceArgs-constructor'>&nbsp;</span>**/
        /**
         <div>
         Initializes a new instance of the `fm.icelink.websync4.leaveConferenceArgs` class.
         </div>

        @param {string} conferenceChannel The conference ID.
        @return {}
        */
        constructor(conferenceChannel: string);
        /**<span id='method-fm.icelink.websync4.LeaveConferenceArgs-getConferenceChannel'>&nbsp;</span>**/
        /**
         <div>
         Gets the conference channel.
         </div>


        @return {string}
        */
        getConferenceChannel(): string;
        /**<span id='method-fm.icelink.websync4.LeaveConferenceArgs-getOnFailure'>&nbsp;</span>**/
        /**
         <div>
         Gets the callback to invoke if the request fails.
         </div>


        @return {fm.icelink.IAction1<fm.icelink.websync4.LeaveConferenceFailureArgs>}
        */
        getOnFailure(): fm.icelink.IAction1<fm.icelink.websync4.LeaveConferenceFailureArgs>;
        /**<span id='method-fm.icelink.websync4.LeaveConferenceArgs-getOnSuccess'>&nbsp;</span>**/
        /**
         <div>
         Gets the callback to invoke if the request succeeds.
         </div>


        @return {fm.icelink.IAction1<fm.icelink.websync4.LeaveConferenceSuccessArgs>}
        */
        getOnSuccess(): fm.icelink.IAction1<fm.icelink.websync4.LeaveConferenceSuccessArgs>;
        /**<span id='method-fm.icelink.websync4.LeaveConferenceArgs-getUnlinkAllOnSuccess'>&nbsp;</span>**/
        /**
         <div>
         Gets a value indicating whether this endpoint
         should initiate an unlink from everyone after leaving
         the channel successfully.
         Defaults to <c>true</c>.
         </div>


        @return {boolean}
        */
        getUnlinkAllOnSuccess(): boolean;
        /**<span id='method-fm.icelink.websync4.LeaveConferenceArgs-setConferenceChannel'>&nbsp;</span>**/
        /**
         <div>
         Sets the conference channel.
         </div>


        @param {string} value
        @return {void}
        */
        setConferenceChannel(value: string): void;
        /**<span id='method-fm.icelink.websync4.LeaveConferenceArgs-setOnFailure'>&nbsp;</span>**/
        /**
         <div>
         Sets the callback to invoke if the request fails.
         </div>


        @param {fm.icelink.IAction1<fm.icelink.websync4.LeaveConferenceFailureArgs>} value
        @return {void}
        */
        setOnFailure(value: fm.icelink.IAction1<fm.icelink.websync4.LeaveConferenceFailureArgs>): void;
        /**<span id='method-fm.icelink.websync4.LeaveConferenceArgs-setOnSuccess'>&nbsp;</span>**/
        /**
         <div>
         Sets the callback to invoke if the request succeeds.
         </div>


        @param {fm.icelink.IAction1<fm.icelink.websync4.LeaveConferenceSuccessArgs>} value
        @return {void}
        */
        setOnSuccess(value: fm.icelink.IAction1<fm.icelink.websync4.LeaveConferenceSuccessArgs>): void;
        /**<span id='method-fm.icelink.websync4.LeaveConferenceArgs-setUnlinkAllOnSuccess'>&nbsp;</span>**/
        /**
         <div>
         Sets a value indicating whether this endpoint
         should initiate an unlink from everyone after leaving
         the channel successfully.
         Defaults to <c>true</c>.
         </div>


        @param {boolean} value
        @return {void}
        */
        setUnlinkAllOnSuccess(value: boolean): void;
    }
}
declare namespace fm.icelink.websync4 {
    /**
     <div>
     Arguments for leave-conference failure callbacks.
     </div>

    */
    class LeaveConferenceFailureArgs extends fm.websync.BaseFailureArgs {
        getTypeString(): string;
        /**
        @internal
        */
        __conferenceChannel: string;
        constructor();
        /**<span id='method-fm.icelink.websync4.LeaveConferenceFailureArgs-getConferenceChannel'>&nbsp;</span>**/
        /**
         <div>
         Gets the ID of the conference that failed to be left.
         </div>


        @return {string}
        */
        getConferenceChannel(): string;
    }
}
declare namespace fm.icelink.websync4 {
    /**
     <div>
     Arguments for leave-conference success callbacks.
     </div>

    */
    class LeaveConferenceSuccessArgs extends fm.websync.BaseSuccessArgs {
        getTypeString(): string;
        /**
        @internal
        */
        __conferenceChannel: string;
        constructor();
        /**<span id='method-fm.icelink.websync4.LeaveConferenceSuccessArgs-getConferenceChannel'>&nbsp;</span>**/
        /**
         <div>
         Gets the ID of the conference that was left.
         </div>


        @return {string}
        */
        getConferenceChannel(): string;
    }
}
declare namespace fm.icelink.websync4 {
    /**
     <div>
     Extension methods for `fm.websync.client` instances.
     </div>

    */
    abstract class ClientExtensions {
        getTypeString(): string;
        /**
        @internal
        */
        private static fm_icelink_websync4_ClientExtensions___connectionRetryLock;
        /**
        @internal
        */
        static fm_icelink_websync4_ClientExtensions__retriable: string;
        /**
        @internal

        */
        private static acceptAnswer(connection, remoteDescription);
        /**
        @internal

        */
        private static acceptOfferCreateAnswerAndSend(connection, client, remoteDescription, userId, channel, competingOffer, boundRecords, state);
        /**
        @internal

        */
        private static createAndSendOffer(connection, client, channel, userId, promise);
        /**
        @internal

        */
        private static createAndSendOffer(connection, client, channel, userId);
        /**
        @internal

        */
        private static createNewConnectionAndSend(userId, boundRecords, state, remoteDescription, client, channel);
        /**
        @internal

        */
        private static doJoinConference(client, args, state);
        /**
        @internal

        */
        private static doLeaveConference(client, args, state);
        /**
        @internal

        */
        private static doRenegotiateConference(client, state, promise, connections);
        /**
        @internal

        */
        private static getAndCacheConnection(remoteClient);
        /**
        @internal

        */
        private static getInstanceChannel(conferenceChannel, clientId);
        /**<span id='method-fm.icelink.websync4.ClientExtensions-joinConference'>&nbsp;</span>**/
        /**
         <div>
         Joins an IceLink conference.
         </div>

        @param {fm.websync.Client} client The WebSync client.
        @param {fm.icelink.websync4.JoinConferenceArgs} args The arguments.
        @return {fm.websync.Client} The WebSync client.
        */
        static joinConference(client: fm.websync.Client, args: fm.icelink.websync4.JoinConferenceArgs): fm.websync.Client;
        /**<span id='method-fm.icelink.websync4.ClientExtensions-leaveConference'>&nbsp;</span>**/
        /**
         <div>
         Leaves an IceLink conference.
         </div>

        @param {fm.websync.Client} client The WebSync client.
        @param {fm.icelink.websync4.LeaveConferenceArgs} args The arguments.
        @return {fm.websync.Client} The WebSync client.
        */
        static leaveConference(client: fm.websync.Client, args: fm.icelink.websync4.LeaveConferenceArgs): fm.websync.Client;
        /**
        @internal

        */
        private static preparePendingRenegotiationPromise(connection, client, channel, individualPromises, processed);
        /**
        @internal

        */
        private static processReadyForRenegotiation(connection);
        /**
        @internal

        */
        private static raiseJoinFailure(args, e, conferenceChannel);
        /**
        @internal

        */
        private static raiseJoinReceive(args, e, channel, remoteUserId, remoteBoundRecords);
        /**
        @internal

        */
        private static raiseJoinRemoteClient(args, remoteClient, userId);
        /**
        @internal

        */
        private static raiseJoinSuccess(args, e, conferenceChannel, users);
        /**
        @internal

        */
        private static raiseLeaveFailure(args, e, conferenceChannel);
        /**
        @internal

        */
        private static raiseLeaveSuccess(args, e, conferenceChannel);
        /**
        @internal

        */
        private static receiveRemoteCandidate(e, state, userId, boundRecords);
        /**
        @internal

        */
        private static receiveRemoteDescription(e, state, userId, boundRecords, client, conferenceChannel);
        /**<span id='method-fm.icelink.websync4.ClientExtensions-reconnectRemoteClient'>&nbsp;</span>**/
        /**
         <div>
         Reconnects remote client.
         </div>

        @param {fm.websync.Client} client The WebSync client.
        @param {fm.icelink.websync4.PeerClient} remoteClient The remote client.
        @param {fm.icelink.Connection} failedConnection Failed connection that requires reconnection.
        @return {void}
        */
        static reconnectRemoteClient(client: fm.websync.Client, remoteClient: fm.icelink.websync4.PeerClient, failedConnection: fm.icelink.Connection): void;
        /**<span id='method-fm.icelink.websync4.ClientExtensions-renegotiate'>&nbsp;</span>**/
        /**
         <div>
         Commences session description renegotiation for the specified connection.
         </div>

        @param {fm.websync.Client} client The WebSync client.
        @param {string} conferenceChannel Conference channel.
        @param {fm.icelink.Connection} connection The connection on which to renegotiate.
        @return {fm.icelink.Future<Object>}
        */
        static renegotiate(client: fm.websync.Client, conferenceChannel: string, connection: fm.icelink.Connection): fm.icelink.Future<Object>;
        /**
        @internal

        */
        private static renegotiateConnection(processed, client, channel, promise, connections, individualPromises);
        /**
        @internal

        */
        private static resolveNextConnection(processed, client, channel, promise, connections, individualPromises);
        /**
        @internal

        */
        private static sendLocalCandidate(client, conferenceChannel, userId, localCandidate);
        /**
        @internal

        */
        private static sendLocalDescription(client, conferenceChannel, userId, localDescription, promise);
        /**
        @internal

        */
        private static setRemoteDescription(connection, remoteDescription, client, channel, userId);
        /** @internal */
        private static __fmicelinkwebsync4ClientExtensionsInitialized;
        /** @internal */
        static fmicelinkwebsync4ClientExtensionsInitialize(): void;
    }
}
declare namespace fm.icelink.websync4 {
    /**
    @internal
    */
    class ConnectionCollection extends fm.icelink.ConnectionCollection {
        getTypeString(): string;
        /**
        @internal
        */
        private __lookupByRemoteUserId;
        /**
        @internal
        */
        private __lookupByRemoteUserIdLock;
        /**
        @internal
        */
        private __onLocalCandidate;
        /**
        @internal
        */
        private _joinArgs;
        /**
        @internal
        */
        private _onLocalCandidate;
        /**
        @internal
        */
        static fm_icelink_websync4_ConnectionCollection__remoteUserId: string;
        private fmicelinkwebsync4ConnectionCollectionInit();
        constructor(joinArgs: fm.icelink.websync4.JoinConferenceArgs);
        add(value: fm.icelink.Connection): boolean;
        addOnLocalCandidate(value: fm.icelink.IAction2<fm.icelink.Connection, fm.icelink.Candidate>): void;
        protected addSuccess(value: fm.icelink.Connection): void;
        getByRemoteUserId(remoteUserId: string): fm.icelink.Connection;
        getJoinArgs(): fm.icelink.websync4.JoinConferenceArgs;
        /**
        @internal

        */
        private processLocalCandidate(connection, localCandidate);
        removeOnLocalCandidate(value: fm.icelink.IAction2<fm.icelink.Connection, fm.icelink.Candidate>): void;
        protected removeSuccess(value: fm.icelink.Connection): void;
        /**
        @internal

        */
        private setJoinArgs(value);
        tryGetByRemoteUserId(remoteUserId: string, connection: fm.icelink.Holder<fm.icelink.Connection>): boolean;
        /** @internal */
        private static __fmicelinkwebsync4ConnectionCollectionInitialized;
        /** @internal */
        static fmicelinkwebsync4ConnectionCollectionInitialize(): void;
    }
}
declare namespace fm.icelink.websync4 {
    /**
     <div>
     Details about a remote WebSync instance.
     </div>

    */
    class PeerClient {
        getTypeString(): string;
        /**
        @internal
        */
        private _boundRecords;
        /**
        @internal
        */
        private _instanceId;
        /**
        @internal
        */
        private _state;
        /**<span id='method-fm.icelink.websync4.PeerClient-constructor'>&nbsp;</span>**/
        /**
         <div>
         Initializes a new instance of the `fm.icelink.websync4.peerClient` class.
         </div>

        @param {string} instanceId The WebSync instance ID.
        @param {fm.icelink.Hash<string,fm.websync.Record>} boundRecords The WebSync bound records.
        @return {}
        */
        constructor(instanceId: string, boundRecords: fm.icelink.Hash<string, fm.websync.Record>);
        /**
        @internal

        */
        static createPeerClient(instanceId: string, boundRecords: fm.icelink.Hash<string, fm.websync.Record>, state: fm.icelink.websync4.State): fm.icelink.websync4.PeerClient;
        /**<span id='method-fm.icelink.websync4.PeerClient-getBoundRecords'>&nbsp;</span>**/
        /**
         <div>
         Gets the WebSync bound records.
         </div>


        @return {fm.icelink.Hash<string,fm.websync.Record>}
        */
        getBoundRecords(): fm.icelink.Hash<string, fm.websync.Record>;
        /**<span id='method-fm.icelink.websync4.PeerClient-getInstanceId'>&nbsp;</span>**/
        /**
         <div>
         Gets the WebSync instance ID.
         </div>


        @return {string}
        */
        getInstanceId(): string;
        /**
        @internal

        */
        getState(): fm.icelink.websync4.State;
        /**<span id='method-fm.icelink.websync4.PeerClient-setBoundRecords'>&nbsp;</span>**/
        /**
         <div>
         Sets the WebSync bound records.
         </div>


        @param {fm.icelink.Hash<string,fm.websync.Record>} value
        @return {void}
        */
        setBoundRecords(value: fm.icelink.Hash<string, fm.websync.Record>): void;
        /**<span id='method-fm.icelink.websync4.PeerClient-setInstanceId'>&nbsp;</span>**/
        /**
         <div>
         Sets the WebSync instance ID.
         </div>


        @param {string} value
        @return {void}
        */
        setInstanceId(value: string): void;
        /**
        @internal

        */
        private setState(value);
    }
}
declare namespace fm.icelink.websync4 {
}
declare namespace fm.icelink.websync4 {
}
