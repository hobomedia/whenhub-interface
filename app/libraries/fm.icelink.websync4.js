//
// Title: IceLink for JavaScript
// Version: 3.2.1.456
// Copyright Frozen Mountain Software 2011+
//
(function (name, dependencies, definition) {
    if (typeof define === 'function' && define.amd) {
        define(name, dependencies, definition);
    } else if (typeof exports === 'object') {
        for (var i = 0; i < dependencies.length; i++) {
           require('./' + dependencies[i]);
        }
        module.exports = definition();
    } else {
        this[name] = definition();
    }
}('fm.icelink.websync4', ['fm.icelink'], function() {

if (typeof global !== 'undefined' && !global.window) { global.window = global; global.document = { cookie: '' }; }
if (typeof global !== 'undefined' && !global.navigator) { global.navigator = { userAgent: ' ' }; }
this['fm'] = this['fm'] || {};

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

(function (fm) {
    var Serializable = /** @class */ (function (_super) {
        __extends(Serializable, _super);
        function Serializable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Serializable;
    }(fm.serializable));
    fm.Serializable = Serializable;
    var Dynamic = /** @class */ (function (_super) {
        __extends(Dynamic, _super);
        function Dynamic() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Dynamic;
    }(fm.dynamic));
    fm.Dynamic = Dynamic;
})(fm || (fm = {}));
(function (fm) {
    var websync;
    (function (websync) {
        var Extensible = /** @class */ (function (_super) {
            __extends(Extensible, _super);
            function Extensible() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Extensible;
        }(websync.extensible));
        websync.Extensible = Extensible;
        var Client = /** @class */ (function (_super) {
            __extends(Client, _super);
            function Client() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Client;
        }(websync.client));
        websync.Client = Client;
        var ConnectionType;
        (function (ConnectionType) {
        })(ConnectionType = websync.ConnectionType || (websync.ConnectionType = {}));
        var Record = /** @class */ (function (_super) {
            __extends(Record, _super);
            function Record() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Record;
        }(websync.record));
        websync.Record = Record;
        var PublishingClient = /** @class */ (function (_super) {
            __extends(PublishingClient, _super);
            function PublishingClient() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PublishingClient;
        }(websync.publishingClient));
        websync.PublishingClient = PublishingClient;
        var BaseInputArgs = /** @class */ (function (_super) {
            __extends(BaseInputArgs, _super);
            function BaseInputArgs() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return BaseInputArgs;
        }(websync.baseInputArgs));
        websync.BaseInputArgs = BaseInputArgs;
        var BaseOutputArgs = /** @class */ (function (_super) {
            __extends(BaseOutputArgs, _super);
            function BaseOutputArgs() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return BaseOutputArgs;
        }(websync.baseOutputArgs));
        websync.BaseOutputArgs = BaseOutputArgs;
        var BaseSuccessArgs = /** @class */ (function (_super) {
            __extends(BaseSuccessArgs, _super);
            function BaseSuccessArgs() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return BaseSuccessArgs;
        }(websync.baseSuccessArgs));
        websync.BaseSuccessArgs = BaseSuccessArgs;
        var BaseFailureArgs = /** @class */ (function (_super) {
            __extends(BaseFailureArgs, _super);
            function BaseFailureArgs() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return BaseFailureArgs;
        }(websync.baseFailureArgs));
        websync.BaseFailureArgs = BaseFailureArgs;
        var BaseReceiveArgs = /** @class */ (function (_super) {
            __extends(BaseReceiveArgs, _super);
            function BaseReceiveArgs() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return BaseReceiveArgs;
        }(websync.baseReceiveArgs));
        websync.BaseReceiveArgs = BaseReceiveArgs;
        var StreamFailureArgs = /** @class */ (function (_super) {
            __extends(StreamFailureArgs, _super);
            function StreamFailureArgs() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return StreamFailureArgs;
        }(websync.streamFailureArgs));
        websync.StreamFailureArgs = StreamFailureArgs;
        var SubscribeArgs = /** @class */ (function (_super) {
            __extends(SubscribeArgs, _super);
            function SubscribeArgs() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SubscribeArgs;
        }(websync.subscribeArgs));
        websync.SubscribeArgs = SubscribeArgs;
        var SubscribeSuccessArgs = /** @class */ (function (_super) {
            __extends(SubscribeSuccessArgs, _super);
            function SubscribeSuccessArgs() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SubscribeSuccessArgs;
        }(websync.subscribeSuccessArgs));
        websync.SubscribeSuccessArgs = SubscribeSuccessArgs;
        var SubscribeFailureArgs = /** @class */ (function (_super) {
            __extends(SubscribeFailureArgs, _super);
            function SubscribeFailureArgs() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SubscribeFailureArgs;
        }(websync.subscribeFailureArgs));
        websync.SubscribeFailureArgs = SubscribeFailureArgs;
        var SubscribeReceiveArgs = /** @class */ (function (_super) {
            __extends(SubscribeReceiveArgs, _super);
            function SubscribeReceiveArgs() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SubscribeReceiveArgs;
        }(websync.subscribeReceiveArgs));
        websync.SubscribeReceiveArgs = SubscribeReceiveArgs;
        var PublishArgs = /** @class */ (function (_super) {
            __extends(PublishArgs, _super);
            function PublishArgs() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PublishArgs;
        }(websync.publishArgs));
        websync.PublishArgs = PublishArgs;
        var PublishSuccessArgs = /** @class */ (function (_super) {
            __extends(PublishSuccessArgs, _super);
            function PublishSuccessArgs() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PublishSuccessArgs;
        }(websync.publishSuccessArgs));
        websync.PublishSuccessArgs = PublishSuccessArgs;
        var PublishFailureArgs = /** @class */ (function (_super) {
            __extends(PublishFailureArgs, _super);
            function PublishFailureArgs() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PublishFailureArgs;
        }(websync.publishFailureArgs));
        websync.PublishFailureArgs = PublishFailureArgs;
        var ServiceArgs = /** @class */ (function (_super) {
            __extends(ServiceArgs, _super);
            function ServiceArgs() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ServiceArgs;
        }(websync.serviceArgs));
        websync.ServiceArgs = ServiceArgs;
        var ServiceSuccessArgs = /** @class */ (function (_super) {
            __extends(ServiceSuccessArgs, _super);
            function ServiceSuccessArgs() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ServiceSuccessArgs;
        }(websync.serviceSuccessArgs));
        websync.ServiceSuccessArgs = ServiceSuccessArgs;
        var ServiceFailureArgs = /** @class */ (function (_super) {
            __extends(ServiceFailureArgs, _super);
            function ServiceFailureArgs() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ServiceFailureArgs;
        }(websync.serviceFailureArgs));
        websync.ServiceFailureArgs = ServiceFailureArgs;
        var DisconnectArgs = /** @class */ (function (_super) {
            __extends(DisconnectArgs, _super);
            function DisconnectArgs() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return DisconnectArgs;
        }(websync.disconnectArgs));
        websync.DisconnectArgs = DisconnectArgs;
    })(websync = fm.websync || (fm.websync = {}));
})(fm || (fm = {}));
(function (fm) {
    var websync;
    (function (websync) {
        var chat;
        (function (chat) {
            var ClientExtensions = /** @class */ (function (_super) {
                __extends(ClientExtensions, _super);
                function ClientExtensions() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return ClientExtensions;
            }(chat.clientExtensions));
            chat.ClientExtensions = ClientExtensions;
            var ChatUser = /** @class */ (function (_super) {
                __extends(ChatUser, _super);
                function ChatUser() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return ChatUser;
            }(chat.chatUser));
            chat.ChatUser = ChatUser;
            var JoinArgs = /** @class */ (function (_super) {
                __extends(JoinArgs, _super);
                function JoinArgs() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return JoinArgs;
            }(chat.joinArgs));
            chat.JoinArgs = JoinArgs;
            var JoinFailureArgs = /** @class */ (function (_super) {
                __extends(JoinFailureArgs, _super);
                function JoinFailureArgs() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return JoinFailureArgs;
            }(chat.joinFailureArgs));
            chat.JoinFailureArgs = JoinFailureArgs;
            var JoinSuccessArgs = /** @class */ (function (_super) {
                __extends(JoinSuccessArgs, _super);
                function JoinSuccessArgs() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return JoinSuccessArgs;
            }(chat.joinSuccessArgs));
            chat.JoinSuccessArgs = JoinSuccessArgs;
            var JoinReceiveArgs = /** @class */ (function (_super) {
                __extends(JoinReceiveArgs, _super);
                function JoinReceiveArgs() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return JoinReceiveArgs;
            }(chat.joinReceiveArgs));
            chat.JoinReceiveArgs = JoinReceiveArgs;
            var UserJoinArgs = /** @class */ (function (_super) {
                __extends(UserJoinArgs, _super);
                function UserJoinArgs() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return UserJoinArgs;
            }(chat.userJoinArgs));
            chat.UserJoinArgs = UserJoinArgs;
            var UserLeaveArgs = /** @class */ (function (_super) {
                __extends(UserLeaveArgs, _super);
                function UserLeaveArgs() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return UserLeaveArgs;
            }(chat.userLeaveArgs));
            chat.UserLeaveArgs = UserLeaveArgs;
            var LeaveArgs = /** @class */ (function (_super) {
                __extends(LeaveArgs, _super);
                function LeaveArgs() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return LeaveArgs;
            }(chat.leaveArgs));
            chat.LeaveArgs = LeaveArgs;
            var LeaveFailureArgs = /** @class */ (function (_super) {
                __extends(LeaveFailureArgs, _super);
                function LeaveFailureArgs() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return LeaveFailureArgs;
            }(chat.leaveFailureArgs));
            chat.LeaveFailureArgs = LeaveFailureArgs;
            var LeaveSuccessArgs = /** @class */ (function (_super) {
                __extends(LeaveSuccessArgs, _super);
                function LeaveSuccessArgs() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return LeaveSuccessArgs;
            }(chat.leaveSuccessArgs));
            chat.LeaveSuccessArgs = LeaveSuccessArgs;
        })(chat = websync.chat || (websync.chat = {}));
    })(websync = fm.websync || (fm.websync = {}));
})(fm || (fm = {}));

(function (fm) {
    var icelink;
    (function (icelink) {
        var websync4;
        (function (websync4) {
            /**
            @internal
            */
            var PendingRenegotiationProperties = /** @class */ (function () {
                function PendingRenegotiationProperties(pendingPromise, client, channel) {
                    var __arguments = new Array(arguments.length);
                    for (var __argumentIndex = 0; __argumentIndex < __arguments.length; ++__argumentIndex) {
                        __arguments[__argumentIndex] = arguments[__argumentIndex];
                    }
                    if (__arguments.length == 3) {
                        var pendingPromise_1 = __arguments[0];
                        var client_1 = __arguments[1];
                        var channel_1 = __arguments[2];
                        //super();
                        this.setPendingPromise(pendingPromise_1);
                        this.setClient(client_1);
                        this.setChannel(channel_1);
                    }
                    else {
                        throw new icelink.Exception('Constructor overload does not exist with specified parameter count/type combination.');
                    }
                }
                PendingRenegotiationProperties.prototype.getTypeString = function () {
                    return '[fm.icelink.websync4.PendingRenegotiationProperties]';
                };
                PendingRenegotiationProperties.prototype.getChannel = function () {
                    if (arguments.length == 0) {
                        return this._channel;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                PendingRenegotiationProperties.prototype.getClient = function () {
                    if (arguments.length == 0) {
                        return this._client;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                PendingRenegotiationProperties.prototype.getPendingPromise = function () {
                    if (arguments.length == 0) {
                        return this._pendingPromise;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                PendingRenegotiationProperties.prototype.setChannel = function (value) {
                    if (arguments.length == 1) {
                        this._channel = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                PendingRenegotiationProperties.prototype.setClient = function (value) {
                    if (arguments.length == 1) {
                        this._client = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                PendingRenegotiationProperties.prototype.setPendingPromise = function (value) {
                    if (arguments.length == 1) {
                        this._pendingPromise = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                return PendingRenegotiationProperties;
            }());
            websync4.PendingRenegotiationProperties = PendingRenegotiationProperties;
        })(websync4 = icelink.websync4 || (icelink.websync4 = {}));
    })(icelink = fm.icelink || (fm.icelink = {}));
})(fm || (fm = {}));

(function (fm) {
    var icelink;
    (function (icelink) {
        var websync4;
        (function (websync4) {
            /**
            @internal
            */
            var State = /** @class */ (function () {
                function State() {
                    var __arguments = new Array(arguments.length);
                    for (var __argumentIndex = 0; __argumentIndex < __arguments.length; ++__argumentIndex) {
                        __arguments[__argumentIndex] = arguments[__argumentIndex];
                    }
                    if (__arguments.length == 0) {
                        //super();
                    }
                    else {
                        throw new icelink.Exception('Constructor overload does not exist with specified parameter count/type combination.');
                    }
                }
                State.prototype.getTypeString = function () {
                    return '[fm.icelink.websync4.State]';
                };
                State.prototype.getConnections = function () {
                    if (arguments.length == 0) {
                        return this._connections;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                State.prototype.getUnlinkAllOnLeaveSuccess = function () {
                    if (arguments.length == 0) {
                        return this._unlinkAllOnLeaveSuccess;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                State.prototype.getUnlinkExistingOnUserJoin = function () {
                    if (arguments.length == 0) {
                        return this._unlinkExistingOnUserJoin;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                State.prototype.getUnlinkOnUserLeave = function () {
                    if (arguments.length == 0) {
                        return this._unlinkOnUserLeave;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                State.prototype.setConnections = function (value) {
                    if (arguments.length == 1) {
                        this._connections = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                State.prototype.setUnlinkAllOnLeaveSuccess = function (value) {
                    if (arguments.length == 1) {
                        this._unlinkAllOnLeaveSuccess = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                State.prototype.setUnlinkExistingOnUserJoin = function (value) {
                    if (arguments.length == 1) {
                        this._unlinkExistingOnUserJoin = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                State.prototype.setUnlinkOnUserLeave = function (value) {
                    if (arguments.length == 1) {
                        this._unlinkOnUserLeave = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                return State;
            }());
            websync4.State = State;
        })(websync4 = icelink.websync4 || (icelink.websync4 = {}));
    })(icelink = fm.icelink || (fm.icelink = {}));
})(fm || (fm = {}));

(function (fm) {
    var icelink;
    (function (icelink) {
        var websync4;
        (function (websync4) {
            /**
             <div>
             Arguments for a client joining an IceLink conference.
             </div>
        
            */
            var JoinConferenceArgs = /** @class */ (function (_super) {
                __extends(JoinConferenceArgs, _super);
                function JoinConferenceArgs() {
                    var _this = this;
                    var __arguments = new Array(arguments.length);
                    for (var __argumentIndex = 0; __argumentIndex < __arguments.length; ++__argumentIndex) {
                        __arguments[__argumentIndex] = arguments[__argumentIndex];
                    }
                    if (__arguments.length == 0) {
                        _this = _super.call(this) || this;
                        _this.setUnlinkExistingOnUserJoin(true);
                        _this.setUnlinkOnUserLeave(true);
                    }
                    else if (__arguments.length == 1) {
                        var conferenceChannel = __arguments[0];
                        // chained constructor: JoinConferenceArgs.call(this);
                        __arguments = new Array(0);
                        {
                            _this = _super.call(this) || this;
                            _this.setUnlinkExistingOnUserJoin(true);
                            _this.setUnlinkOnUserLeave(true);
                        }
                        _this.setConferenceChannel(conferenceChannel);
                    }
                    else {
                        throw new icelink.Exception('Constructor overload does not exist with specified parameter count/type combination.');
                    }
                    return _this;
                }
                JoinConferenceArgs.prototype.getTypeString = function () {
                    return '[fm.icelink.websync4.JoinConferenceArgs]' + ',' + _super.prototype.getTypeString.call(this);
                };
                /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-getConferenceChannel'>&nbsp;</span>**/
                /**
                 <div>
                 Gets the conference channel.
                 </div>
        
        
                @return {string}
                */
                JoinConferenceArgs.prototype.getConferenceChannel = function () {
                    if (arguments.length == 0) {
                        return this._conferenceChannel;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-getOnFailure'>&nbsp;</span>**/
                /**
                 <div>
                 Gets the callback to invoke if the request fails.
                 See `fm.icelink.websync4.joinConferenceFailureArgs` for callback argument details.
                 </div>
        
        
                @return {fm.icelink.IAction1<fm.icelink.websync4.JoinConferenceFailureArgs>}
                */
                JoinConferenceArgs.prototype.getOnFailure = function () {
                    if (arguments.length == 0) {
                        return this._onFailure;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-getOnReceive'>&nbsp;</span>**/
                /**
                 <div>
                 Gets the callback to invoke when data is received on the channel.
                 See `fm.icelink.websync4.joinConferenceReceiveArgs` for callback argument details.
                 </div>
        
        
                @return {fm.icelink.IAction1<fm.icelink.websync4.JoinConferenceReceiveArgs>}
                */
                JoinConferenceArgs.prototype.getOnReceive = function () {
                    if (arguments.length == 0) {
                        return this._onReceive;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-getOnRemoteClient'>&nbsp;</span>**/
                /**
                 <div>
                 Gets the callback to invoke when a new remote client needs a connection.
                 </div>
        
        
                @return {fm.icelink.IFunction1<fm.icelink.websync4.PeerClient,fm.icelink.Connection>}
                */
                JoinConferenceArgs.prototype.getOnRemoteClient = function () {
                    if (arguments.length == 0) {
                        return this._onRemoteClient;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-getOnSuccess'>&nbsp;</span>**/
                /**
                 <div>
                 Gets the callback to invoke if the request succeeds.
                 See `fm.icelink.websync4.joinConferenceSuccessArgs` for callback argument details.
                 </div>
        
        
                @return {fm.icelink.IAction1<fm.icelink.websync4.JoinConferenceSuccessArgs>}
                */
                JoinConferenceArgs.prototype.getOnSuccess = function () {
                    if (arguments.length == 0) {
                        return this._onSuccess;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
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
                JoinConferenceArgs.prototype.getUnlinkExistingOnUserJoin = function () {
                    if (arguments.length == 0) {
                        return this._unlinkExistingOnUserJoin;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-getUnlinkOnUserLeave'>&nbsp;</span>**/
                /**
                 <div>
                 Gets a value indicating whether this endpoint
                 should initiate an unlink when remote peers leave the channel.
                 Defaults to <c>true</c>.
                 </div>
        
        
                @return {boolean}
                */
                JoinConferenceArgs.prototype.getUnlinkOnUserLeave = function () {
                    if (arguments.length == 0) {
                        return this._unlinkOnUserLeave;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-setConferenceChannel'>&nbsp;</span>**/
                /**
                 <div>
                 Sets the conference channel.
                 </div>
        
        
                @param {string} value
                @return {void}
                */
                JoinConferenceArgs.prototype.setConferenceChannel = function (value) {
                    if (arguments.length == 1) {
                        this._conferenceChannel = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-setOnFailure'>&nbsp;</span>**/
                /**
                 <div>
                 Sets the callback to invoke if the request fails.
                 See `fm.icelink.websync4.joinConferenceFailureArgs` for callback argument details.
                 </div>
        
        
                @param {fm.icelink.IAction1<fm.icelink.websync4.JoinConferenceFailureArgs>} value
                @return {void}
                */
                JoinConferenceArgs.prototype.setOnFailure = function (value) {
                    if (arguments.length == 1) {
                        this._onFailure = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-setOnReceive'>&nbsp;</span>**/
                /**
                 <div>
                 Sets the callback to invoke when data is received on the channel.
                 See `fm.icelink.websync4.joinConferenceReceiveArgs` for callback argument details.
                 </div>
        
        
                @param {fm.icelink.IAction1<fm.icelink.websync4.JoinConferenceReceiveArgs>} value
                @return {void}
                */
                JoinConferenceArgs.prototype.setOnReceive = function (value) {
                    if (arguments.length == 1) {
                        this._onReceive = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-setOnRemoteClient'>&nbsp;</span>**/
                /**
                 <div>
                 Sets the callback to invoke when a new remote client needs a connection.
                 </div>
        
        
                @param {fm.icelink.IFunction1<fm.icelink.websync4.PeerClient,fm.icelink.Connection>} value
                @return {void}
                */
                JoinConferenceArgs.prototype.setOnRemoteClient = function (value) {
                    if (arguments.length == 1) {
                        this._onRemoteClient = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.JoinConferenceArgs-setOnSuccess'>&nbsp;</span>**/
                /**
                 <div>
                 Sets the callback to invoke if the request succeeds.
                 See `fm.icelink.websync4.joinConferenceSuccessArgs` for callback argument details.
                 </div>
        
        
                @param {fm.icelink.IAction1<fm.icelink.websync4.JoinConferenceSuccessArgs>} value
                @return {void}
                */
                JoinConferenceArgs.prototype.setOnSuccess = function (value) {
                    if (arguments.length == 1) {
                        this._onSuccess = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
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
                JoinConferenceArgs.prototype.setUnlinkExistingOnUserJoin = function (value) {
                    if (arguments.length == 1) {
                        this._unlinkExistingOnUserJoin = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
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
                JoinConferenceArgs.prototype.setUnlinkOnUserLeave = function (value) {
                    if (arguments.length == 1) {
                        this._unlinkOnUserLeave = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                return JoinConferenceArgs;
            }(fm.websync.BaseInputArgs));
            websync4.JoinConferenceArgs = JoinConferenceArgs;
        })(websync4 = icelink.websync4 || (icelink.websync4 = {}));
    })(icelink = fm.icelink || (fm.icelink = {}));
})(fm || (fm = {}));

(function (fm) {
    var icelink;
    (function (icelink) {
        var websync4;
        (function (websync4) {
            /**
             <div>
             Arguments for join-conference failure callbacks.
             </div>
        
            */
            var JoinConferenceFailureArgs = /** @class */ (function (_super) {
                __extends(JoinConferenceFailureArgs, _super);
                function JoinConferenceFailureArgs() {
                    var _this = this;
                    var __arguments = new Array(arguments.length);
                    for (var __argumentIndex = 0; __argumentIndex < __arguments.length; ++__argumentIndex) {
                        __arguments[__argumentIndex] = arguments[__argumentIndex];
                    }
                    if (__arguments.length == 0) {
                        _this = _super.call(this) || this;
                    }
                    else {
                        throw new icelink.Exception('Constructor overload does not exist with specified parameter count/type combination.');
                    }
                    return _this;
                }
                JoinConferenceFailureArgs.prototype.getTypeString = function () {
                    return '[fm.icelink.websync4.JoinConferenceFailureArgs]' + ',' + _super.prototype.getTypeString.call(this);
                };
                /**<span id='method-fm.icelink.websync4.JoinConferenceFailureArgs-getConferenceChannel'>&nbsp;</span>**/
                /**
                 <div>
                 Gets the ID of the conference that failed to be joined.
                 </div>
        
        
                @return {string}
                */
                JoinConferenceFailureArgs.prototype.getConferenceChannel = function () {
                    if (arguments.length == 0) {
                        return this.__conferenceChannel;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                return JoinConferenceFailureArgs;
            }(fm.websync.BaseFailureArgs));
            websync4.JoinConferenceFailureArgs = JoinConferenceFailureArgs;
        })(websync4 = icelink.websync4 || (icelink.websync4 = {}));
    })(icelink = fm.icelink || (fm.icelink = {}));
})(fm || (fm = {}));

(function (fm) {
    var icelink;
    (function (icelink) {
        var websync4;
        (function (websync4) {
            /**
             <div>
             Arguments for join-conference receive callbacks.
             </div>
        
            */
            var JoinConferenceReceiveArgs = /** @class */ (function (_super) {
                __extends(JoinConferenceReceiveArgs, _super);
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
                function JoinConferenceReceiveArgs(channel, dataJson, dataBytes, connectionType, reconnectAfter) {
                    var _this = this;
                    var __arguments = new Array(arguments.length);
                    for (var __argumentIndex = 0; __argumentIndex < __arguments.length; ++__argumentIndex) {
                        __arguments[__argumentIndex] = arguments[__argumentIndex];
                    }
                    if (__arguments.length == 5) {
                        var channel_2 = __arguments[0];
                        var dataJson_1 = __arguments[1];
                        var dataBytes_1 = __arguments[2];
                        var connectionType_1 = __arguments[3];
                        var reconnectAfter_1 = __arguments[4];
                        _this = _super.call(this, channel_2, dataJson_1, dataBytes_1, connectionType_1, reconnectAfter_1) || this;
                    }
                    else {
                        throw new icelink.Exception('Constructor overload does not exist with specified parameter count/type combination.');
                    }
                    return _this;
                }
                JoinConferenceReceiveArgs.prototype.getTypeString = function () {
                    return '[fm.icelink.websync4.JoinConferenceReceiveArgs]' + ',' + _super.prototype.getTypeString.call(this);
                };
                /**<span id='method-fm.icelink.websync4.JoinConferenceReceiveArgs-getPublishingPeer'>&nbsp;</span>**/
                /**
                 <div>
                 Gets the user that published the message.
                 </div>
        
        
                @return {fm.icelink.websync4.PeerClient}
                */
                JoinConferenceReceiveArgs.prototype.getPublishingPeer = function () {
                    if (arguments.length == 0) {
                        return this.__publishingPeer;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                return JoinConferenceReceiveArgs;
            }(fm.websync.SubscribeReceiveArgs));
            websync4.JoinConferenceReceiveArgs = JoinConferenceReceiveArgs;
        })(websync4 = icelink.websync4 || (icelink.websync4 = {}));
    })(icelink = fm.icelink || (fm.icelink = {}));
})(fm || (fm = {}));

(function (fm) {
    var icelink;
    (function (icelink) {
        var websync4;
        (function (websync4) {
            /**
             <div>
             Arguments for join-conference success callbacks.
             </div>
        
            */
            var JoinConferenceSuccessArgs = /** @class */ (function (_super) {
                __extends(JoinConferenceSuccessArgs, _super);
                function JoinConferenceSuccessArgs() {
                    var _this = this;
                    var __arguments = new Array(arguments.length);
                    for (var __argumentIndex = 0; __argumentIndex < __arguments.length; ++__argumentIndex) {
                        __arguments[__argumentIndex] = arguments[__argumentIndex];
                    }
                    if (__arguments.length == 0) {
                        _this = _super.call(this) || this;
                    }
                    else {
                        throw new icelink.Exception('Constructor overload does not exist with specified parameter count/type combination.');
                    }
                    return _this;
                }
                JoinConferenceSuccessArgs.prototype.getTypeString = function () {
                    return '[fm.icelink.websync4.JoinConferenceSuccessArgs]' + ',' + _super.prototype.getTypeString.call(this);
                };
                /**<span id='method-fm.icelink.websync4.JoinConferenceSuccessArgs-getConferenceChannel'>&nbsp;</span>**/
                /**
                 <div>
                 Gets the ID of the conference that was joined.
                 </div>
        
        
                @return {string}
                */
                JoinConferenceSuccessArgs.prototype.getConferenceChannel = function () {
                    if (arguments.length == 0) {
                        return this.__conferenceChannel;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.JoinConferenceSuccessArgs-getUsers'>&nbsp;</span>**/
                /**
                 <div>
                 Gets the array of users in the channel.
                 </div>
        
        
                @return {fm.websync.chat.ChatUser[]}
                */
                JoinConferenceSuccessArgs.prototype.getUsers = function () {
                    if (arguments.length == 0) {
                        return this.__users;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                return JoinConferenceSuccessArgs;
            }(fm.websync.BaseSuccessArgs));
            websync4.JoinConferenceSuccessArgs = JoinConferenceSuccessArgs;
        })(websync4 = icelink.websync4 || (icelink.websync4 = {}));
    })(icelink = fm.icelink || (fm.icelink = {}));
})(fm || (fm = {}));

(function (fm) {
    var icelink;
    (function (icelink) {
        var websync4;
        (function (websync4) {
            /**
             <div>
             Arguments for a client leaving an IceLink conference.
             </div>
        
            */
            var LeaveConferenceArgs = /** @class */ (function (_super) {
                __extends(LeaveConferenceArgs, _super);
                function LeaveConferenceArgs() {
                    var _this = this;
                    var __arguments = new Array(arguments.length);
                    for (var __argumentIndex = 0; __argumentIndex < __arguments.length; ++__argumentIndex) {
                        __arguments[__argumentIndex] = arguments[__argumentIndex];
                    }
                    if (__arguments.length == 0) {
                        _this = _super.call(this) || this;
                        _this.setUnlinkAllOnSuccess(true);
                    }
                    else if (__arguments.length == 1) {
                        var conferenceChannel = __arguments[0];
                        // chained constructor: LeaveConferenceArgs.call(this);
                        __arguments = new Array(0);
                        {
                            _this = _super.call(this) || this;
                            _this.setUnlinkAllOnSuccess(true);
                        }
                        _this.setConferenceChannel(conferenceChannel);
                    }
                    else {
                        throw new icelink.Exception('Constructor overload does not exist with specified parameter count/type combination.');
                    }
                    return _this;
                }
                LeaveConferenceArgs.prototype.getTypeString = function () {
                    return '[fm.icelink.websync4.LeaveConferenceArgs]' + ',' + _super.prototype.getTypeString.call(this);
                };
                /**<span id='method-fm.icelink.websync4.LeaveConferenceArgs-getConferenceChannel'>&nbsp;</span>**/
                /**
                 <div>
                 Gets the conference channel.
                 </div>
        
        
                @return {string}
                */
                LeaveConferenceArgs.prototype.getConferenceChannel = function () {
                    if (arguments.length == 0) {
                        return this._conferenceChannel;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.LeaveConferenceArgs-getOnFailure'>&nbsp;</span>**/
                /**
                 <div>
                 Gets the callback to invoke if the request fails.
                 </div>
        
        
                @return {fm.icelink.IAction1<fm.icelink.websync4.LeaveConferenceFailureArgs>}
                */
                LeaveConferenceArgs.prototype.getOnFailure = function () {
                    if (arguments.length == 0) {
                        return this._onFailure;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.LeaveConferenceArgs-getOnSuccess'>&nbsp;</span>**/
                /**
                 <div>
                 Gets the callback to invoke if the request succeeds.
                 </div>
        
        
                @return {fm.icelink.IAction1<fm.icelink.websync4.LeaveConferenceSuccessArgs>}
                */
                LeaveConferenceArgs.prototype.getOnSuccess = function () {
                    if (arguments.length == 0) {
                        return this._onSuccess;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
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
                LeaveConferenceArgs.prototype.getUnlinkAllOnSuccess = function () {
                    if (arguments.length == 0) {
                        return this._unlinkAllOnSuccess;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.LeaveConferenceArgs-setConferenceChannel'>&nbsp;</span>**/
                /**
                 <div>
                 Sets the conference channel.
                 </div>
        
        
                @param {string} value
                @return {void}
                */
                LeaveConferenceArgs.prototype.setConferenceChannel = function (value) {
                    if (arguments.length == 1) {
                        this._conferenceChannel = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.LeaveConferenceArgs-setOnFailure'>&nbsp;</span>**/
                /**
                 <div>
                 Sets the callback to invoke if the request fails.
                 </div>
        
        
                @param {fm.icelink.IAction1<fm.icelink.websync4.LeaveConferenceFailureArgs>} value
                @return {void}
                */
                LeaveConferenceArgs.prototype.setOnFailure = function (value) {
                    if (arguments.length == 1) {
                        this._onFailure = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.LeaveConferenceArgs-setOnSuccess'>&nbsp;</span>**/
                /**
                 <div>
                 Sets the callback to invoke if the request succeeds.
                 </div>
        
        
                @param {fm.icelink.IAction1<fm.icelink.websync4.LeaveConferenceSuccessArgs>} value
                @return {void}
                */
                LeaveConferenceArgs.prototype.setOnSuccess = function (value) {
                    if (arguments.length == 1) {
                        this._onSuccess = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
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
                LeaveConferenceArgs.prototype.setUnlinkAllOnSuccess = function (value) {
                    if (arguments.length == 1) {
                        this._unlinkAllOnSuccess = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                return LeaveConferenceArgs;
            }(fm.websync.BaseInputArgs));
            websync4.LeaveConferenceArgs = LeaveConferenceArgs;
        })(websync4 = icelink.websync4 || (icelink.websync4 = {}));
    })(icelink = fm.icelink || (fm.icelink = {}));
})(fm || (fm = {}));

(function (fm) {
    var icelink;
    (function (icelink) {
        var websync4;
        (function (websync4) {
            /**
             <div>
             Arguments for leave-conference failure callbacks.
             </div>
        
            */
            var LeaveConferenceFailureArgs = /** @class */ (function (_super) {
                __extends(LeaveConferenceFailureArgs, _super);
                function LeaveConferenceFailureArgs() {
                    var _this = this;
                    var __arguments = new Array(arguments.length);
                    for (var __argumentIndex = 0; __argumentIndex < __arguments.length; ++__argumentIndex) {
                        __arguments[__argumentIndex] = arguments[__argumentIndex];
                    }
                    if (__arguments.length == 0) {
                        _this = _super.call(this) || this;
                    }
                    else {
                        throw new icelink.Exception('Constructor overload does not exist with specified parameter count/type combination.');
                    }
                    return _this;
                }
                LeaveConferenceFailureArgs.prototype.getTypeString = function () {
                    return '[fm.icelink.websync4.LeaveConferenceFailureArgs]' + ',' + _super.prototype.getTypeString.call(this);
                };
                /**<span id='method-fm.icelink.websync4.LeaveConferenceFailureArgs-getConferenceChannel'>&nbsp;</span>**/
                /**
                 <div>
                 Gets the ID of the conference that failed to be left.
                 </div>
        
        
                @return {string}
                */
                LeaveConferenceFailureArgs.prototype.getConferenceChannel = function () {
                    if (arguments.length == 0) {
                        return this.__conferenceChannel;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                return LeaveConferenceFailureArgs;
            }(fm.websync.BaseFailureArgs));
            websync4.LeaveConferenceFailureArgs = LeaveConferenceFailureArgs;
        })(websync4 = icelink.websync4 || (icelink.websync4 = {}));
    })(icelink = fm.icelink || (fm.icelink = {}));
})(fm || (fm = {}));

(function (fm) {
    var icelink;
    (function (icelink) {
        var websync4;
        (function (websync4) {
            /**
             <div>
             Arguments for leave-conference success callbacks.
             </div>
        
            */
            var LeaveConferenceSuccessArgs = /** @class */ (function (_super) {
                __extends(LeaveConferenceSuccessArgs, _super);
                function LeaveConferenceSuccessArgs() {
                    var _this = this;
                    var __arguments = new Array(arguments.length);
                    for (var __argumentIndex = 0; __argumentIndex < __arguments.length; ++__argumentIndex) {
                        __arguments[__argumentIndex] = arguments[__argumentIndex];
                    }
                    if (__arguments.length == 0) {
                        _this = _super.call(this) || this;
                    }
                    else {
                        throw new icelink.Exception('Constructor overload does not exist with specified parameter count/type combination.');
                    }
                    return _this;
                }
                LeaveConferenceSuccessArgs.prototype.getTypeString = function () {
                    return '[fm.icelink.websync4.LeaveConferenceSuccessArgs]' + ',' + _super.prototype.getTypeString.call(this);
                };
                /**<span id='method-fm.icelink.websync4.LeaveConferenceSuccessArgs-getConferenceChannel'>&nbsp;</span>**/
                /**
                 <div>
                 Gets the ID of the conference that was left.
                 </div>
        
        
                @return {string}
                */
                LeaveConferenceSuccessArgs.prototype.getConferenceChannel = function () {
                    if (arguments.length == 0) {
                        return this.__conferenceChannel;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                return LeaveConferenceSuccessArgs;
            }(fm.websync.BaseSuccessArgs));
            websync4.LeaveConferenceSuccessArgs = LeaveConferenceSuccessArgs;
        })(websync4 = icelink.websync4 || (icelink.websync4 = {}));
    })(icelink = fm.icelink || (fm.icelink = {}));
})(fm || (fm = {}));

(function (fm) {
    var icelink;
    (function (icelink) {
        var websync4;
        (function (websync4) {
            /**
             <div>
             Extension methods for `fm.websync.client` instances.
             </div>
        
            */
            var ClientExtensions = /** @class */ (function () {
                function ClientExtensions() {
                }
                ClientExtensions.prototype.getTypeString = function () {
                    return '[fm.icelink.websync4.ClientExtensions]';
                };
                /**
                @internal
        
                */
                ClientExtensions.acceptAnswer = function (connection, remoteDescription) {
                    if (arguments.length == 2) {
                        connection.setRemoteDescription(remoteDescription).then(function (answer) {
                        }, function (ex) {
                            fm.icelink.Log.error("Could not set remote answer.", ex);
                        });
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.acceptOfferCreateAnswerAndSend = function (connection, client, remoteDescription, userId, channel, competingOffer, boundRecords, state) {
                    if (arguments.length == 8) {
                        if (competingOffer) {
                            if (((!fm.icelink.Global.equals(remoteDescription.getTieBreaker(), null)) && (!fm.icelink.Global.equals(connection.getTieBreaker(), null)))) {
                                if (((((fm.icelink.Global.equals(connection.getState(), fm.icelink.ConnectionState.New)) || (fm.icelink.Global.equals(connection.getState(), fm.icelink.ConnectionState.Initializing))) || ((fm.icelink.Global.equals(connection.getState(), fm.icelink.ConnectionState.Connecting)) || (fm.icelink.Global.equals(connection.getState(), fm.icelink.ConnectionState.Connected)))) && (fm.icelink.StringExtensions.compareTo(connection.getTieBreaker(), remoteDescription.getTieBreaker()) > 0))) {
                                    fm.icelink.Log.debug("Received competing offer, but won the tie breaker.");
                                }
                                else {
                                    if (((((!fm.icelink.Global.equals(connection.getState(), fm.icelink.ConnectionState.Failed)) && (!fm.icelink.Global.equals(connection.getState(), fm.icelink.ConnectionState.Failing))) && (!fm.icelink.Global.equals(connection.getState(), fm.icelink.ConnectionState.Closing))) && (!fm.icelink.Global.equals(connection.getState(), fm.icelink.ConnectionState.Closed)))) {
                                        fm.icelink.Log.debug("Competing offer detected. Switching to answering role...");
                                        connection.unsetDynamicValue("fm.icelink.retriableConnection");
                                        connection.close();
                                    }
                                    fm.icelink.websync4.ClientExtensions.createNewConnectionAndSend(userId, boundRecords, state, remoteDescription, client, channel);
                                }
                            }
                            else {
                                var str = "";
                                var flag = (fm.icelink.Global.equals(remoteDescription.getTieBreaker(), null));
                                var flag2 = (fm.icelink.Global.equals(connection.getTieBreaker(), null));
                                if ((flag && flag2)) {
                                    str = "remote and local tiebreakers are ";
                                }
                                else {
                                    if (flag) {
                                        str = "remote tiebreaker is ";
                                    }
                                    else {
                                        str = "local tiebreaker is ";
                                    }
                                }
                                fm.icelink.Log.error(fm.icelink.StringExtensions.format("Received competing offer, but {0} null. Cannot resolve conflict. Will assume answering role.", str));
                                connection.unsetDynamicValue("fm.icelink.retriableConnection");
                                connection.close();
                                fm.icelink.websync4.ClientExtensions.createNewConnectionAndSend(userId, boundRecords, state, remoteDescription, client, channel);
                            }
                        }
                        else {
                            fm.icelink.websync4.ClientExtensions.setRemoteDescription(connection, remoteDescription, client, channel, userId);
                        }
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                ClientExtensions.createAndSendOffer = function () {
                    if (arguments.length == 5) {
                        var connection_1 = arguments[0];
                        var client_2 = arguments[1];
                        var channel_3 = arguments[2];
                        var userId_1 = arguments[3];
                        var promise_1 = arguments[4];
                        connection_1.createOffer().then(function (offer) {
                            return connection_1.setLocalDescription(offer);
                        }, function (ex) {
                            fm.icelink.Log.error(fm.icelink.StringExtensions.format("Could not create local offer: {0}", ex.message), ex);
                        }).then(function (localDescription) {
                            return fm.icelink.websync4.ClientExtensions.sendLocalDescription(client_2, channel_3, userId_1, localDescription, new fm.icelink.Promise());
                        }, function (ex) {
                            fm.icelink.Log.error(fm.icelink.StringExtensions.format("Could not set local offer: {0}", ex.message), ex);
                        }).then(function (localDescription) {
                            promise_1.resolve(null);
                        }, function (ex) {
                            fm.icelink.Log.error(fm.icelink.StringExtensions.format("Could not send local offer: {0}", ex.message), ex);
                            promise_1.reject(ex);
                        });
                        return promise_1;
                    }
                    else if (arguments.length == 4) {
                        var connection = arguments[0];
                        var client = arguments[1];
                        var channel = arguments[2];
                        var userId = arguments[3];
                        var promise = new fm.icelink.Promise();
                        return fm.icelink.websync4.ClientExtensions.createAndSendOffer(connection, client, channel, userId, promise);
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.createNewConnectionAndSend = function (userId, boundRecords, state, remoteDescription, client, channel) {
                    if (arguments.length == 6) {
                        var andCacheConnection = fm.icelink.websync4.ClientExtensions.getAndCacheConnection(fm.icelink.websync4.PeerClient.createPeerClient(userId, boundRecords, state));
                        if ((!fm.icelink.Global.equals(andCacheConnection, null))) {
                            fm.icelink.websync4.ClientExtensions.setRemoteDescription(andCacheConnection, remoteDescription, client, channel, userId);
                        }
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.doJoinConference = function (client, args, state) {
                    if (arguments.length == 3) {
                        var action = null;
                        var action2 = null;
                        var action3 = null;
                        var action4 = null;
                        var action5 = null;
                        var action6 = null;
                        var client2 = void 0;
                        try {
                            var clientId = client.getInstanceId().toString();
                            var instanceChannel = fm.icelink.websync4.ClientExtensions.getInstanceChannel(args.getConferenceChannel(), clientId);
                            if ((fm.icelink.Global.equals(action, null))) {
                                action = function (connection, localCandidate) {
                                    var dynamicValue = connection.getDynamicValue("fm.icelink.remoteUserId");
                                    if (!((fm.icelink.Global.equals(dynamicValue, null)) || localCandidate.getDispatched())) {
                                        fm.icelink.websync4.ClientExtensions.sendLocalCandidate(client, args.getConferenceChannel(), dynamicValue, localCandidate);
                                    }
                                };
                            }
                            state.getConnections().addOnLocalCandidate(action);
                            client.setDynamicValue(args.getConferenceChannel(), state);
                            var args3 = new fm.websync.chat.JoinArgs([args.getConferenceChannel(), instanceChannel], "fm.icelink.websync");
                            args3.setUserId(clientId);
                            args3.setUserNickname("fm.icelink.websync");
                            args3.setRequestUrl(args.getRequestUrl());
                            args3.setSynchronous(args.getSynchronous());
                            args3.setDynamicProperties(args.getDynamicProperties());
                            if ((fm.icelink.Global.equals(action2, null))) {
                                action2 = function (e) {
                                    client.unsetDynamicValue(args.getConferenceChannel());
                                    fm.icelink.websync4.ClientExtensions.raiseJoinFailure(args, e, args.getConferenceChannel());
                                };
                            }
                            args3.setOnFailure(action2);
                            if ((fm.icelink.Global.equals(action3, null))) {
                                action3 = function (e) {
                                    fm.icelink.websync4.ClientExtensions.raiseJoinSuccess(args, e, args.getConferenceChannel(), e.getUsers());
                                };
                            }
                            args3.setOnSuccess(action3);
                            if ((fm.icelink.Global.equals(action4, null))) {
                                action4 = function (e) {
                                    try {
                                        var publishingUser = e.getPublishingUser();
                                        if ((fm.icelink.Global.equals(publishingUser, null))) {
                                            throw new fm.icelink.Exception("Publishing user is null.");
                                        }
                                        var publishingClient = e.getPublishingClient();
                                        if ((fm.icelink.Global.equals(publishingClient, null))) {
                                            throw new fm.icelink.Exception("Publishing client is null.");
                                        }
                                        var remoteUserId = publishingUser.getUserId();
                                        var remoteBoundRecords = publishingClient.getBoundRecords();
                                        if ((fm.icelink.Global.equals(e.getChannel(), args.getConferenceChannel()))) {
                                            fm.icelink.websync4.ClientExtensions.raiseJoinReceive(args, e, e.getChannel(), remoteUserId, remoteBoundRecords);
                                        }
                                        else {
                                            if ((fm.icelink.Global.equals(publishingUser.getUserNickname(), "fm.icelink.websync"))) {
                                                if ((fm.icelink.Global.equals(e.getTag(), "fm.icelink.websync.offeranswer"))) {
                                                    fm.icelink.websync4.ClientExtensions.receiveRemoteDescription(e, state, remoteUserId, remoteBoundRecords, client, args.getConferenceChannel());
                                                }
                                                else {
                                                    if ((fm.icelink.Global.equals(e.getTag(), "fm.icelink.websync.candidate"))) {
                                                        fm.icelink.websync4.ClientExtensions.receiveRemoteCandidate(e, state, remoteUserId, remoteBoundRecords);
                                                    }
                                                    else {
                                                        fm.icelink.websync4.ClientExtensions.raiseJoinReceive(args, e, e.getChannel(), remoteUserId, remoteBoundRecords);
                                                    }
                                                }
                                            }
                                            else {
                                                fm.icelink.websync4.ClientExtensions.raiseJoinReceive(args, e, e.getChannel(), remoteUserId, remoteBoundRecords);
                                            }
                                        }
                                    }
                                    catch (exception) {
                                        fm.icelink.Log.error("Unexpected exception in receive handler.", exception);
                                    }
                                    finally {
                                    }
                                };
                            }
                            args3.setOnReceive(action4);
                            if ((fm.icelink.Global.equals(action5, null))) {
                                action5 = function (e) {
                                    try {
                                        var userId = e.getJoinedUser().getUserId();
                                        var boundRecords = e.getJoinedUser().getBoundRecords();
                                        if ((fm.icelink.Global.equals(e.getJoinedUser().getUserNickname(), "fm.icelink.websync"))) {
                                            var andCacheConnection = state.getConnections().getByRemoteUserId(userId);
                                            if ((!fm.icelink.Global.equals(andCacheConnection, null))) {
                                                if (state.getUnlinkExistingOnUserJoin()) {
                                                    andCacheConnection.unsetDynamicValue("fm.icelink.retriableConnection");
                                                    andCacheConnection.close();
                                                }
                                                else {
                                                    return;
                                                }
                                            }
                                            andCacheConnection = fm.icelink.websync4.ClientExtensions.getAndCacheConnection(fm.icelink.websync4.PeerClient.createPeerClient(userId, boundRecords, state));
                                            if ((!fm.icelink.Global.equals(andCacheConnection, null))) {
                                                fm.icelink.websync4.ClientExtensions.createAndSendOffer(andCacheConnection, client, args.getConferenceChannel(), userId);
                                            }
                                        }
                                    }
                                    catch (exception) {
                                        fm.icelink.Log.error("Unexpected exception in user-join handler.", exception);
                                    }
                                    finally {
                                    }
                                };
                            }
                            args3.setOnUserJoin(action5);
                            if ((fm.icelink.Global.equals(action6, null))) {
                                action6 = function (e) {
                                    try {
                                        var userId = e.getLeftUser().getUserId();
                                        if (((fm.icelink.Global.equals(e.getLeftUser().getUserNickname(), "fm.icelink.websync")) && state.getUnlinkOnUserLeave())) {
                                            var byRemoteUserId = state.getConnections().getByRemoteUserId(userId);
                                            if ((!fm.icelink.Global.equals(byRemoteUserId, null))) {
                                                byRemoteUserId.unsetDynamicValue("fm.icelink.retriableConnection");
                                                byRemoteUserId.close();
                                            }
                                        }
                                    }
                                    catch (exception) {
                                        fm.icelink.Log.error("Unexpected exception in user-leave handler.", exception);
                                    }
                                    finally {
                                    }
                                };
                            }
                            args3.setOnUserLeave(action6);
                            var joinArgs = args3;
                            joinArgs.copyExtensions(args);
                            fm.websync.chat.ClientExtensions.join(client, joinArgs);
                            client2 = client;
                        }
                        catch (exception) {
                            throw exception;
                        }
                        finally {
                        }
                        return client2;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.doLeaveConference = function (client, args, state) {
                    if (arguments.length == 3) {
                        var action = null;
                        var action2 = null;
                        var client2 = void 0;
                        try {
                            if ((fm.icelink.Global.equals(state, null))) {
                                var args3 = new fm.websync.chat.LeaveSuccessArgs();
                                args3.setClient(client);
                                args3.setDynamicProperties(args.getDynamicProperties());
                                var e = args3;
                                e.copyExtensions(args);
                                fm.icelink.websync4.ClientExtensions.raiseLeaveSuccess(args, e, args.getConferenceChannel());
                                return client;
                            }
                            state.setUnlinkAllOnLeaveSuccess(args.getUnlinkAllOnSuccess());
                            var clientId = client.getClientId().toString();
                            var instanceChannel = fm.icelink.websync4.ClientExtensions.getInstanceChannel(args.getConferenceChannel(), clientId);
                            var args5 = new fm.websync.chat.LeaveArgs([args.getConferenceChannel(), instanceChannel], "fm.icelink.websync");
                            args5.setRequestUrl(args.getRequestUrl());
                            args5.setSynchronous(args.getSynchronous());
                            args5.setDynamicProperties(args.getDynamicProperties());
                            if ((fm.icelink.Global.equals(action, null))) {
                                action = function (e) {
                                    fm.icelink.websync4.ClientExtensions.raiseLeaveFailure(args, e, args.getConferenceChannel());
                                };
                            }
                            args5.setOnFailure(action);
                            if ((fm.icelink.Global.equals(action2, null))) {
                                action2 = function (e) {
                                    client.unsetDynamicValue(args.getConferenceChannel());
                                    if (state.getUnlinkAllOnLeaveSuccess()) {
                                        for (var _i = 0, _a = state.getConnections().getValues(); _i < _a.length; _i++) {
                                            var connection = _a[_i];
                                            connection.unsetDynamicValue("fm.icelink.retriableConnection");
                                            connection.close();
                                        }
                                    }
                                    fm.icelink.websync4.ClientExtensions.raiseLeaveSuccess(args, e, args.getConferenceChannel());
                                };
                            }
                            args5.setOnSuccess(action2);
                            var leaveArgs = args5;
                            leaveArgs.copyExtensions(args);
                            fm.websync.chat.ClientExtensions.leave(client, leaveArgs);
                            client2 = client;
                        }
                        catch (exception) {
                            throw exception;
                        }
                        finally {
                        }
                        return client2;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.doRenegotiateConference = function (client, state, promise, connections) {
                    if (arguments.length == 4) {
                        if ((!fm.icelink.Global.equals(state, null))) {
                            if ((fm.icelink.Global.equals(state.getConnections(), null))) {
                                promise.reject(new fm.icelink.Exception("No connections exist. Cannot renegotiate"));
                            }
                            else {
                                var conferenceChannel = state.getConnections().getJoinArgs().getConferenceChannel();
                                var individualPromises = new Array();
                                if ((connections.length > 0)) {
                                    fm.icelink.websync4.ClientExtensions.renegotiateConnection(0, client, conferenceChannel, promise, connections, individualPromises);
                                }
                                else {
                                    promise.reject(new fm.icelink.Exception("No connections exist. Cannot renegotiate"));
                                }
                            }
                        }
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.getAndCacheConnection = function (remoteClient) {
                    if (arguments.length == 1) {
                        var state = remoteClient.getState();
                        var connection = fm.icelink.websync4.ClientExtensions.raiseJoinRemoteClient(state.getConnections().getJoinArgs(), remoteClient, remoteClient.getInstanceId());
                        if ((!fm.icelink.Global.equals(connection, null))) {
                            connection.addOnSignallingStateChange(function (c) {
                                if ((fm.icelink.Global.equals(c.getSignallingState(), fm.icelink.SignallingState.Stable))) {
                                    fm.icelink.websync4.ClientExtensions.processReadyForRenegotiation(c);
                                }
                            });
                            connection.addOnStateChange(function (c) {
                                if ((fm.icelink.Global.equals(c.getState(), fm.icelink.ConnectionState.Connected))) {
                                    fm.icelink.websync4.ClientExtensions.processReadyForRenegotiation(c);
                                }
                                else {
                                    if (((fm.icelink.Global.equals(c.getState(), fm.icelink.ConnectionState.Closed)) || (fm.icelink.Global.equals(c.getState(), fm.icelink.ConnectionState.Failed)))) {
                                        remoteClient.getState().getConnections().remove(c);
                                    }
                                }
                            });
                            if (state.getConnections().add(connection)) {
                                return connection;
                            }
                        }
                        return null;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.getInstanceChannel = function (conferenceChannel, clientId) {
                    if (arguments.length == 2) {
                        return fm.icelink.StringExtensions.concat("/fm.icelink.websync.instance", conferenceChannel, "/", clientId);
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.ClientExtensions-joinConference'>&nbsp;</span>**/
                /**
                 <div>
                 Joins an IceLink conference.
                 </div>
        
                @param {fm.websync.Client} client The WebSync client.
                @param {fm.icelink.websync4.JoinConferenceArgs} args The arguments.
                @return {fm.websync.Client} The WebSync client.
                */
                ClientExtensions.joinConference = function (client, args) {
                    if (arguments.length == 2) {
                        if (fm.icelink.StringExtensions.isNullOrEmpty(args.getConferenceChannel())) {
                            throw new fm.icelink.Exception("Conference channel cannot be null.");
                        }
                        var state2 = new fm.icelink.websync4.State();
                        state2.setConnections(new fm.icelink.websync4.ConnectionCollection(args));
                        state2.setUnlinkExistingOnUserJoin(args.getUnlinkExistingOnUserJoin());
                        state2.setUnlinkOnUserLeave(args.getUnlinkOnUserLeave());
                        var state = state2;
                        client.addOnStreamFailure(function (e) {
                            var dynamicValue = client.getDynamicValue(args.getConferenceChannel());
                            if ((!fm.icelink.Global.equals(dynamicValue, null))) {
                                for (var _i = 0, _a = dynamicValue.getConnections().getValues(); _i < _a.length; _i++) {
                                    var connection = _a[_i];
                                    connection.unsetDynamicValue("fm.icelink.retriableConnection");
                                    connection.close();
                                }
                            }
                        });
                        return fm.icelink.websync4.ClientExtensions.doJoinConference(client, args, state);
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.ClientExtensions-leaveConference'>&nbsp;</span>**/
                /**
                 <div>
                 Leaves an IceLink conference.
                 </div>
        
                @param {fm.websync.Client} client The WebSync client.
                @param {fm.icelink.websync4.LeaveConferenceArgs} args The arguments.
                @return {fm.websync.Client} The WebSync client.
                */
                ClientExtensions.leaveConference = function (client, args) {
                    if (arguments.length == 2) {
                        if (fm.icelink.StringExtensions.isNullOrEmpty(args.getConferenceChannel())) {
                            throw new fm.icelink.Exception("Conference channel cannot be null.");
                        }
                        var state = ((fm.icelink.Global.equals(client, null)) ? null : client.getDynamicValue(args.getConferenceChannel()));
                        return fm.icelink.websync4.ClientExtensions.doLeaveConference(client, args, state);
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.preparePendingRenegotiationPromise = function (connection, client, channel, individualPromises, processed) {
                    if (arguments.length == 5) {
                        var pendingPromise = new fm.icelink.Promise();
                        connection.setDynamicValue("fm.icelink.pendingRenegotiationPromise", new fm.icelink.websync4.PendingRenegotiationProperties(pendingPromise, client, channel));
                        fm.icelink.ArrayExtensions.add(individualPromises, pendingPromise);
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.processReadyForRenegotiation = function (connection) {
                    if (arguments.length == 1) {
                        var dynamicValue = connection.getDynamicValue("fm.icelink.pendingRenegotiationPromise");
                        if ((!fm.icelink.Global.equals(dynamicValue, null))) {
                            var properties = dynamicValue;
                            connection.setDynamicValue("fm.icelink.pendingRenegotiationPromise", null);
                            var userId = connection.getDynamicValue("fm.icelink.remoteUserId");
                            if ((!fm.icelink.Global.equals(userId, null))) {
                                fm.icelink.websync4.ClientExtensions.createAndSendOffer(connection, properties.getClient(), properties.getChannel(), userId, properties.getPendingPromise());
                            }
                            else {
                                properties.getPendingPromise().reject(new fm.icelink.Exception("Remote User ID is not set for connection on renegotiation. Cannot signal."));
                            }
                        }
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.raiseJoinFailure = function (args, e, conferenceChannel) {
                    if (arguments.length == 3) {
                        var exception = void 0;
                        try {
                            if ((!fm.icelink.Global.equals(args.getOnFailure(), null))) {
                                var args3 = new fm.icelink.websync4.JoinConferenceFailureArgs();
                                args3.__conferenceChannel = conferenceChannel;
                                args3.setClient(e.getClient());
                                args3.setException(e.getException());
                                args3.setTimestamp(e.getTimestamp());
                                args3.setDynamicProperties(e.getDynamicProperties());
                                var p = args3;
                                p.copyExtensions(e);
                                try {
                                    args.getOnFailure()(p);
                                }
                                catch (exception1) {
                                    exception = exception1;
                                    fm.icelink.Unhandled.logException(exception, "Client -> JoinConference -> OnFailure");
                                }
                                finally {
                                }
                            }
                        }
                        catch (exception2) {
                            exception = exception2;
                            throw exception;
                        }
                        finally {
                        }
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.raiseJoinReceive = function (args, e, channel, remoteUserId, remoteBoundRecords) {
                    if (arguments.length == 5) {
                        try {
                            if ((!fm.icelink.Global.equals(args.getOnReceive(), null))) {
                                var args3 = new fm.icelink.websync4.JoinConferenceReceiveArgs(channel, e.getDataJson(), e.getDataBytes(), e.getConnectionType(), e.getReconnectAfter());
                                args3.__publishingPeer = new fm.icelink.websync4.PeerClient(remoteUserId, remoteBoundRecords);
                                args3.setClient(e.getClient());
                                args3.setTimestamp(e.getTimestamp());
                                args3.setDynamicProperties(e.getDynamicProperties());
                                var p = args3;
                                p.copyExtensions(e);
                                args.getOnReceive()(p);
                            }
                        }
                        catch (exception) {
                            throw exception;
                        }
                        finally {
                        }
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.raiseJoinRemoteClient = function (args, remoteClient, userId) {
                    if (arguments.length == 3) {
                        if ((!fm.icelink.Global.equals(args.getOnRemoteClient(), null))) {
                            var connection = null;
                            try {
                                connection = args.getOnRemoteClient()(remoteClient);
                            }
                            catch (exception) {
                                fm.icelink.Unhandled.logException(exception, "Client -> JoinConference -> OnRemoteClient");
                            }
                            finally {
                            }
                            if ((!fm.icelink.Global.equals(connection, null))) {
                                connection.setDynamicValue("fm.icelink.remoteUserId", userId);
                                connection.setDynamicValue("fm.icelink.retriableConnection", new Object());
                            }
                            return connection;
                        }
                        return null;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.raiseJoinSuccess = function (args, e, conferenceChannel, users) {
                    if (arguments.length == 4) {
                        var exception = void 0;
                        try {
                            if ((!fm.icelink.Global.equals(args.getOnSuccess(), null))) {
                                var args3 = new fm.icelink.websync4.JoinConferenceSuccessArgs();
                                args3.__conferenceChannel = conferenceChannel;
                                args3.__users = users;
                                args3.setClient(e.getClient());
                                args3.setTimestamp(e.getTimestamp());
                                args3.setDynamicProperties(e.getDynamicProperties());
                                var p = args3;
                                p.copyExtensions(e);
                                try {
                                    args.getOnSuccess()(p);
                                }
                                catch (exception1) {
                                    exception = exception1;
                                    fm.icelink.Unhandled.logException(exception, "Client -> JoinConference -> OnSuccess");
                                }
                                finally {
                                }
                            }
                        }
                        catch (exception2) {
                            exception = exception2;
                            throw exception;
                        }
                        finally {
                        }
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.raiseLeaveFailure = function (args, e, conferenceChannel) {
                    if (arguments.length == 3) {
                        var exception = void 0;
                        try {
                            if ((!fm.icelink.Global.equals(args.getOnFailure(), null))) {
                                var args3 = new fm.icelink.websync4.LeaveConferenceFailureArgs();
                                args3.__conferenceChannel = conferenceChannel;
                                args3.setClient(e.getClient());
                                args3.setException(e.getException());
                                args3.setTimestamp(e.getTimestamp());
                                args3.setDynamicProperties(e.getDynamicProperties());
                                var p = args3;
                                p.copyExtensions(e);
                                try {
                                    args.getOnFailure()(p);
                                }
                                catch (exception1) {
                                    exception = exception1;
                                    fm.icelink.Unhandled.logException(exception, "Client -> LeaveConference -> OnFailure");
                                }
                                finally {
                                }
                            }
                        }
                        catch (exception2) {
                            exception = exception2;
                            throw exception;
                        }
                        finally {
                        }
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.raiseLeaveSuccess = function (args, e, conferenceChannel) {
                    if (arguments.length == 3) {
                        var exception = void 0;
                        try {
                            if ((!fm.icelink.Global.equals(args.getOnSuccess(), null))) {
                                var args3 = new fm.icelink.websync4.LeaveConferenceSuccessArgs();
                                args3.__conferenceChannel = conferenceChannel;
                                args3.setClient(e.getClient());
                                args3.setTimestamp(e.getTimestamp());
                                args3.setDynamicProperties(e.getDynamicProperties());
                                var p = args3;
                                p.copyExtensions(e);
                                try {
                                    args.getOnSuccess()(p);
                                }
                                catch (exception1) {
                                    exception = exception1;
                                    fm.icelink.Unhandled.logException(exception, "Client -> LeaveConference -> OnSuccess");
                                }
                                finally {
                                }
                            }
                        }
                        catch (exception2) {
                            exception = exception2;
                            throw exception;
                        }
                        finally {
                        }
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.receiveRemoteCandidate = function (e, state, userId, boundRecords) {
                    if (arguments.length == 4) {
                        var connections = state.getConnections();
                        var remoteCandidate = fm.icelink.Candidate.fromJson(e.getDataJson());
                        if ((fm.icelink.Global.equals(remoteCandidate, null))) {
                            fm.icelink.Log.error(fm.icelink.StringExtensions.format("{0}: Could not parse remote candidate: {1}", userId, e.getDataJson()));
                            return false;
                        }
                        var byRemoteUserId = connections.getByRemoteUserId(userId);
                        if ((fm.icelink.Global.equals(byRemoteUserId, null))) {
                            byRemoteUserId = fm.icelink.websync4.ClientExtensions.getAndCacheConnection(fm.icelink.websync4.PeerClient.createPeerClient(userId, boundRecords, state));
                        }
                        if ((!fm.icelink.Global.equals(byRemoteUserId, null))) {
                            byRemoteUserId.addRemoteCandidate(remoteCandidate).fail(function (ex) {
                                fm.icelink.Log.error("Could not add remote candidate.", ex);
                            });
                            return true;
                        }
                        return false;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.receiveRemoteDescription = function (e, state, userId, boundRecords, client, conferenceChannel) {
                    if (arguments.length == 6) {
                        var remoteDescription = fm.icelink.SessionDescription.fromJson(e.getDataJson());
                        if ((fm.icelink.Global.equals(remoteDescription, null))) {
                            fm.icelink.Log.error(fm.icelink.StringExtensions.format("{0}: Could not parse remote description: {1}", userId, e.getDataJson()));
                            return false;
                        }
                        var byRemoteUserId = state.getConnections().getByRemoteUserId(userId);
                        if (remoteDescription.getIsOffer()) {
                            var sessionId = remoteDescription.getSessionId();
                            var sessionVersion = remoteDescription.getSessionVersion();
                            var flag = (!fm.icelink.Global.equals(byRemoteUserId, null));
                            if (flag) {
                                var num3 = ((!fm.icelink.Global.equals(byRemoteUserId.getRemoteDescription(), null)) ? byRemoteUserId.getRemoteDescription().getSessionId() : -1);
                                var num4 = ((!fm.icelink.Global.equals(byRemoteUserId.getRemoteDescription(), null)) ? byRemoteUserId.getRemoteDescription().getSessionVersion() : -1);
                                if (((!fm.icelink.Global.equals(num3, -1)) && (!fm.icelink.Global.equals(num3, sessionId)))) {
                                    fm.icelink.Log.debug(fm.icelink.StringExtensions.format("Received remote session description with id {0} and version {1}. Current remote description has id {2} and version {3}. This is re-connection request. Shutting down existing connection.", [fm.icelink.IntExtensions.toString(sessionId), fm.icelink.IntExtensions.toString(sessionVersion), fm.icelink.IntExtensions.toString(num3), fm.icelink.IntExtensions.toString(num4)]));
                                    byRemoteUserId.unsetDynamicValue("fm.icelink.retriableConnection");
                                    byRemoteUserId.close();
                                    byRemoteUserId = null;
                                    flag = false;
                                }
                                else {
                                    if (((!fm.icelink.Global.equals(num4, -1)) && (num4 >= sessionVersion))) {
                                        fm.icelink.Log.debug(fm.icelink.StringExtensions.format("Received remote SDP description with id {0} and version {1}. Current remote description has id {2} and version {3}. Discarding stale request.", [fm.icelink.IntExtensions.toString(sessionId), fm.icelink.IntExtensions.toString(sessionVersion), fm.icelink.IntExtensions.toString(num3), fm.icelink.IntExtensions.toString(num4)]));
                                        return false;
                                    }
                                }
                            }
                            if (!flag) {
                                byRemoteUserId = fm.icelink.websync4.ClientExtensions.getAndCacheConnection(fm.icelink.websync4.PeerClient.createPeerClient(userId, boundRecords, state));
                            }
                            if ((!fm.icelink.Global.equals(byRemoteUserId, null))) {
                                var competingOffer = (fm.icelink.Global.equals(byRemoteUserId.getSignallingState(), fm.icelink.SignallingState.HaveLocalOffer));
                                fm.icelink.websync4.ClientExtensions.acceptOfferCreateAnswerAndSend(byRemoteUserId, client, remoteDescription, userId, conferenceChannel, competingOffer, boundRecords, state);
                                return true;
                            }
                            return false;
                        }
                        if ((fm.icelink.Global.equals(byRemoteUserId, null))) {
                            fm.icelink.Log.error(fm.icelink.StringExtensions.format("Answer from user {0} received, but connection does not exist: {1}", userId, e.getDataJson()));
                            return false;
                        }
                        fm.icelink.websync4.ClientExtensions.acceptAnswer(byRemoteUserId, remoteDescription);
                        return true;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
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
                ClientExtensions.reconnectRemoteClient = function (client, remoteClient, failedConnection) {
                    if (arguments.length == 3) {
                        if (((!fm.icelink.Global.equals(failedConnection, null)) && (!fm.icelink.Global.equals(failedConnection.getDynamicValue("fm.icelink.retriableConnection"), null)))) {
                            var andCacheConnection = fm.icelink.websync4.ClientExtensions.getAndCacheConnection(remoteClient);
                            if ((!fm.icelink.Global.equals(andCacheConnection, null))) {
                                if ((!fm.icelink.Global.equals(remoteClient.getState(), null))) {
                                    var conferenceChannel = remoteClient.getState().getConnections().getJoinArgs().getConferenceChannel();
                                    fm.icelink.websync4.ClientExtensions.createAndSendOffer(andCacheConnection, client, conferenceChannel, remoteClient.getInstanceId());
                                }
                                else {
                                    fm.icelink.Log.error("Cannot reconnect remote client. Null state.");
                                }
                            }
                            else {
                                fm.icelink.Log.debug(fm.icelink.StringExtensions.format("Will not reconnect connection {0} because associated websync client encountered stream failure.", andCacheConnection.getId()));
                            }
                        }
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
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
                ClientExtensions.renegotiate = function (client, conferenceChannel, connection) {
                    if (arguments.length == 3) {
                        var promise = new fm.icelink.Promise();
                        if (fm.icelink.StringExtensions.isNullOrEmpty(conferenceChannel)) {
                            throw new fm.icelink.Exception("Conference channel cannot be null.");
                        }
                        var dynamicValue = client.getDynamicValue(conferenceChannel);
                        var connections = [connection];
                        fm.icelink.websync4.ClientExtensions.doRenegotiateConference(client, dynamicValue, promise, connections);
                        return promise;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.renegotiateConnection = function (processed, client, channel, promise, connections, individualPromises) {
                    if (arguments.length == 6) {
                        try {
                            var connection = connections[processed];
                            if ((fm.icelink.Global.equals(connection.getState(), fm.icelink.ConnectionState.Connected))) {
                                if ((fm.icelink.Global.equals(connection.getSignallingState(), fm.icelink.SignallingState.Stable))) {
                                    connection.setDynamicValue("fm.icelink.pendingRenegotiationPromise", null);
                                    var dynamicValue = connection.getDynamicValue("fm.icelink.remoteUserId");
                                    if ((!fm.icelink.Global.equals(dynamicValue, null))) {
                                        fm.icelink.ArrayExtensions.add(individualPromises, fm.icelink.websync4.ClientExtensions.createAndSendOffer(connection, client, channel, dynamicValue));
                                    }
                                    else {
                                        var item = new fm.icelink.Promise();
                                        item.reject(new fm.icelink.Exception("Remote User ID is not set for connection on renegotiation. Cannot signal."));
                                        fm.icelink.ArrayExtensions.add(individualPromises, item);
                                    }
                                }
                                else {
                                    fm.icelink.websync4.ClientExtensions.preparePendingRenegotiationPromise(connection, client, channel, individualPromises, processed);
                                    if ((fm.icelink.Global.equals(connection.getSignallingState(), fm.icelink.SignallingState.Stable))) {
                                        connection.setDynamicValue("fm.icelink.pendingRenegotiationPromise", null);
                                        processed--;
                                    }
                                }
                            }
                            else {
                                if ((fm.icelink.Global.equals(connection.getState(), fm.icelink.ConnectionState.Connecting))) {
                                    fm.icelink.websync4.ClientExtensions.preparePendingRenegotiationPromise(connection, client, channel, individualPromises, processed);
                                    if ((fm.icelink.Global.equals(connection.getState(), fm.icelink.ConnectionState.Connected))) {
                                        connection.setDynamicValue("fm.icelink.pendingRenegotiationPromise", null);
                                        processed--;
                                    }
                                }
                            }
                            fm.icelink.websync4.ClientExtensions.resolveNextConnection(processed, client, channel, promise, connections, individualPromises);
                        }
                        catch (exception) {
                            promise.reject(exception);
                        }
                        finally {
                        }
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.resolveNextConnection = function (processed, client, channel, promise, connections, individualPromises) {
                    if (arguments.length == 6) {
                        var rejectAction = null;
                        var resolveAction = null;
                        processed++;
                        if ((processed >= connections.length)) {
                            if ((fm.icelink.Global.equals(resolveAction, null))) {
                                resolveAction = function (descriptions) {
                                    promise.resolve(null);
                                };
                            }
                            if ((fm.icelink.Global.equals(rejectAction, null))) {
                                rejectAction = function (ex) {
                                    promise.reject(ex);
                                };
                            }
                            fm.icelink.PromiseBase.all(fm.icelink.ArrayExtensions.toArray(individualPromises)).then(resolveAction).fail(rejectAction);
                        }
                        else {
                            fm.icelink.websync4.ClientExtensions.renegotiateConnection(processed, client, channel, promise, connections, individualPromises);
                        }
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.sendLocalCandidate = function (client, conferenceChannel, userId, localCandidate) {
                    if (arguments.length == 4) {
                        var action = null;
                        try {
                            var publishArgs = new fm.websync.PublishArgs(fm.icelink.websync4.ClientExtensions.getInstanceChannel(conferenceChannel, userId), localCandidate.toJson(), "fm.icelink.websync.candidate");
                            if ((fm.icelink.Global.equals(action, null))) {
                                action = function (e) {
                                    fm.icelink.Log.error(fm.icelink.StringExtensions.format("{0}: Could not publish local candidate.", conferenceChannel), e.getException());
                                };
                            }
                            publishArgs.setOnFailure(action);
                            client.publish(publishArgs);
                        }
                        catch (exception) {
                            throw exception;
                        }
                        finally {
                        }
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.sendLocalDescription = function (client, conferenceChannel, userId, localDescription, promise) {
                    if (arguments.length == 5) {
                        var action = null;
                        var action2 = null;
                        try {
                            var publishArgs = new fm.websync.PublishArgs(fm.icelink.websync4.ClientExtensions.getInstanceChannel(conferenceChannel, userId), localDescription.toJson(), "fm.icelink.websync.offeranswer");
                            if ((fm.icelink.Global.equals(action, null))) {
                                action = function (e) {
                                    fm.icelink.Log.error(fm.icelink.StringExtensions.format("{0}: Could not publish local description.", conferenceChannel), e.getException());
                                    promise.reject(e.getException());
                                };
                            }
                            publishArgs.setOnFailure(action);
                            if ((fm.icelink.Global.equals(action2, null))) {
                                action2 = function (e) {
                                    promise.resolve(localDescription);
                                };
                            }
                            publishArgs.setOnSuccess(action2);
                            client.publish(publishArgs);
                        }
                        catch (exception) {
                            fm.icelink.Log.error(fm.icelink.StringExtensions.format("{0}: Could not publish local description.", conferenceChannel), exception);
                            promise.reject(exception);
                        }
                        finally {
                        }
                        return promise;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ClientExtensions.setRemoteDescription = function (connection, remoteDescription, client, channel, userId) {
                    if (arguments.length == 5) {
                        connection.setRemoteDescription(remoteDescription).then(function (offer) {
                            return connection.createAnswer();
                        }, function (ex) {
                            fm.icelink.Log.error("Could not set remote offer.");
                        }).then(function (answer) {
                            return connection.setLocalDescription(answer);
                        }, function (ex) {
                            fm.icelink.Log.error("Could not create local answer.", ex);
                        }).then(function (localDescription) {
                            return fm.icelink.websync4.ClientExtensions.sendLocalDescription(client, channel, userId, localDescription, new fm.icelink.Promise());
                        }, function (ex) {
                            fm.icelink.Log.error("Could not set local answer.", ex);
                        });
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /** @internal */
                ClientExtensions.fmicelinkwebsync4ClientExtensionsInitialize = function () {
                    if (!fm.icelink.websync4.ClientExtensions.__fmicelinkwebsync4ClientExtensionsInitialized) {
                        ClientExtensions.fm_icelink_websync4_ClientExtensions__retriable = "fm.icelink.retriableConnection";
                        fm.icelink.websync4.ClientExtensions.fm_icelink_websync4_ClientExtensions___connectionRetryLock = new Object();
                    }
                    fm.icelink.websync4.ClientExtensions.__fmicelinkwebsync4ClientExtensionsInitialized = true;
                };
                /** @internal */
                ClientExtensions.__fmicelinkwebsync4ClientExtensionsInitialized = false;
                return ClientExtensions;
            }());
            websync4.ClientExtensions = ClientExtensions;
            /**<span id='method-fm.icelink.websync4.ClientExtensions-joinConference'>&nbsp;</span>**/
            /**
             <div>
             Joins an IceLink conference.
             </div>
        
            @param {fm.icelink.websync4.JoinConferenceArgs} args The arguments.
            @return {fm.websync.Client} The WebSync client.
            */
            fm.websync.Client.prototype.joinConference = function (args) {
                if (arguments.length == 1) {
                    Array.prototype.splice.call(arguments, 0, 0, this);
                    return fm.icelink.websync4.ClientExtensions.joinConference.apply(this, arguments);
                }
                else {
                    throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                }
            };
            /**<span id='method-fm.icelink.websync4.ClientExtensions-leaveConference'>&nbsp;</span>**/
            /**
             <div>
             Leaves an IceLink conference.
             </div>
        
            @param {fm.icelink.websync4.LeaveConferenceArgs} args The arguments.
            @return {fm.websync.Client} The WebSync client.
            */
            fm.websync.Client.prototype.leaveConference = function (args) {
                if (arguments.length == 1) {
                    Array.prototype.splice.call(arguments, 0, 0, this);
                    return fm.icelink.websync4.ClientExtensions.leaveConference.apply(this, arguments);
                }
                else {
                    throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                }
            };
            /**<span id='method-fm.icelink.websync4.ClientExtensions-reconnectRemoteClient'>&nbsp;</span>**/
            /**
             <div>
             Reconnects remote client.
             </div>
        
            @param {fm.icelink.websync4.PeerClient} remoteClient The remote client.
            @param {fm.icelink.Connection} failedConnection Failed connection that requires reconnection.
            @return {void}
            */
            fm.websync.Client.prototype.reconnectRemoteClient = function (remoteClient, failedConnection) {
                if (arguments.length == 2) {
                    Array.prototype.splice.call(arguments, 0, 0, this);
                    return fm.icelink.websync4.ClientExtensions.reconnectRemoteClient.apply(this, arguments);
                }
                else {
                    throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                }
            };
            /**<span id='method-fm.icelink.websync4.ClientExtensions-renegotiate'>&nbsp;</span>**/
            /**
             <div>
             Commences session description renegotiation for the specified connection.
             </div>
        
            @param {string} conferenceChannel Conference channel.
            @param {fm.icelink.Connection} connection The connection on which to renegotiate.
            @return {fm.icelink.Future<Object>}
            */
            fm.websync.Client.prototype.renegotiate = function (conferenceChannel, connection) {
                if (arguments.length == 2) {
                    Array.prototype.splice.call(arguments, 0, 0, this);
                    return fm.icelink.websync4.ClientExtensions.renegotiate.apply(this, arguments);
                }
                else {
                    throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                }
            };
        })(websync4 = icelink.websync4 || (icelink.websync4 = {}));
    })(icelink = fm.icelink || (fm.icelink = {}));
})(fm || (fm = {}));

(function (fm) {
    var icelink;
    (function (icelink) {
        var websync4;
        (function (websync4) {
            /**
            @internal
            */
            var ConnectionCollection = /** @class */ (function (_super) {
                __extends(ConnectionCollection, _super);
                function ConnectionCollection(joinArgs) {
                    var _this = this;
                    var __arguments = new Array(arguments.length);
                    for (var __argumentIndex = 0; __argumentIndex < __arguments.length; ++__argumentIndex) {
                        __arguments[__argumentIndex] = arguments[__argumentIndex];
                    }
                    if (__arguments.length == 1) {
                        var joinArgs_1 = __arguments[0];
                        _this = _super.call(this) || this;
                        _this.fmicelinkwebsync4ConnectionCollectionInit();
                        _this.__lookupByRemoteUserId = {};
                        _this.__lookupByRemoteUserIdLock = new Object();
                        _this.setJoinArgs(joinArgs_1);
                    }
                    else {
                        throw new icelink.Exception('Constructor overload does not exist with specified parameter count/type combination.');
                    }
                    return _this;
                }
                ConnectionCollection.prototype.getTypeString = function () {
                    return '[fm.icelink.websync4.ConnectionCollection]' + ',' + _super.prototype.getTypeString.call(this);
                };
                ConnectionCollection.prototype.fmicelinkwebsync4ConnectionCollectionInit = function () {
                    var _this = this;
                    this.__onLocalCandidate = [];
                    this._onLocalCandidate = function (p0, p1) { for (var _i = 0, _a = _this.__onLocalCandidate; _i < _a.length; _i++) {
                        var action = _a[_i];
                        action(p0, p1);
                    } };
                };
                ConnectionCollection.prototype.add = function (value) {
                    if (arguments.length == 1) {
                        var flag = false;
                        if ((!fm.icelink.Global.equals(value, null))) {
                            var connection = null;
                            var dynamicValue = value.getDynamicValue("fm.icelink.remoteUserId");
                            var _var0 = new fm.icelink.Holder(connection);
                            var _var1 = this.tryGetByRemoteUserId(dynamicValue, _var0);
                            connection = _var0.getValue();
                            if ((_var1 && ((((!fm.icelink.Global.equals(connection.getState(), fm.icelink.ConnectionState.Closed)) && (!fm.icelink.Global.equals(connection.getState(), fm.icelink.ConnectionState.Closing))) && (!fm.icelink.Global.equals(connection.getState(), fm.icelink.ConnectionState.Failed))) && (!fm.icelink.Global.equals(connection.getState(), fm.icelink.ConnectionState.Failing))))) {
                                if ((fm.icelink.StringExtensions.compareTo(connection.getRemoteDescription().getTieBreaker(), value.getTieBreaker()) > 0)) {
                                    fm.icelink.Log.debug(fm.icelink.StringExtensions.format("There already exists connection with Id {0} for communicating with user {1} with a remote description containing tie-breaker. Connection {2} will close.", connection.getId(), dynamicValue, value.getId()));
                                    flag = true;
                                    value.close();
                                    value.unsetDynamicValue("fm.icelink.retriableConnection");
                                }
                                else {
                                    fm.icelink.Log.debug(fm.icelink.StringExtensions.format("There already exists connection with Id {0} for communicating with user {1} but new connection with Id {2} has a winning tie-breaker. Connection {0} will close.", connection.getId(), dynamicValue, value.getId()));
                                    connection.unsetDynamicValue("fm.icelink.retriableConnection");
                                    connection.close();
                                }
                            }
                            if (!flag) {
                                _super.prototype.add.call(this, value);
                            }
                        }
                        return !flag;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                ConnectionCollection.prototype.addOnLocalCandidate = function (value) {
                    if (arguments.length == 1) {
                        fm.icelink.ArrayExtensions.add(this.__onLocalCandidate, value);
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                ConnectionCollection.prototype.addSuccess = function (value) {
                    if (arguments.length == 1) {
                        _super.prototype.addSuccess.call(this, value);
                        this.__lookupByRemoteUserId[value.getDynamicValue("fm.icelink.remoteUserId")] = value;
                        value.addOnLocalCandidate(this.processLocalCandidate.bind(this));
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                ConnectionCollection.prototype.getByRemoteUserId = function (remoteUserId) {
                    if (arguments.length == 1) {
                        var connection = null;
                        var _var0 = new fm.icelink.Holder(connection);
                        var _var1 = fm.icelink.HashExtensions.tryGetValue(this.__lookupByRemoteUserId, remoteUserId, _var0);
                        connection = _var0.getValue();
                        if (_var1) {
                            return connection;
                        }
                        return null;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                ConnectionCollection.prototype.getJoinArgs = function () {
                    if (arguments.length == 0) {
                        return this._joinArgs;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ConnectionCollection.prototype.processLocalCandidate = function (connection, localCandidate) {
                    if (arguments.length == 2) {
                        var onLocalCandidate = this._onLocalCandidate;
                        if ((!fm.icelink.Global.equals(onLocalCandidate, null))) {
                            onLocalCandidate(connection, localCandidate);
                        }
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                ConnectionCollection.prototype.removeOnLocalCandidate = function (value) {
                    if (arguments.length == 1) {
                        fm.icelink.ArrayExtensions.remove(this.__onLocalCandidate, value);
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                ConnectionCollection.prototype.removeSuccess = function (value) {
                    if (arguments.length == 1) {
                        _super.prototype.removeSuccess.call(this, value);
                        value.removeOnLocalCandidate(this.processLocalCandidate.bind(this));
                        var num = ((!fm.icelink.Global.equals(value.getRemoteDescription(), null)) ? value.getRemoteDescription().getSessionId() : -1);
                        var dynamicValue = value.getDynamicValue("fm.icelink.remoteUserId");
                        var connection = null;
                        var _var0 = new fm.icelink.Holder(connection);
                        var _var1 = fm.icelink.HashExtensions.tryGetValue(this.__lookupByRemoteUserId, dynamicValue, _var0);
                        connection = _var0.getValue();
                        if ((_var1 && (!fm.icelink.Global.equals(connection, null)))) {
                            var num2 = ((!fm.icelink.Global.equals(connection.getRemoteDescription(), null)) ? connection.getRemoteDescription().getSessionId() : -1);
                            if ((fm.icelink.Global.equals(num2, num))) {
                                fm.icelink.HashExtensions.remove(this.__lookupByRemoteUserId, dynamicValue);
                            }
                        }
                        if (((((!fm.icelink.Global.equals(value.getState(), fm.icelink.ConnectionState.Closed)) && (!fm.icelink.Global.equals(value.getState(), fm.icelink.ConnectionState.Closing))) && (!fm.icelink.Global.equals(value.getState(), fm.icelink.ConnectionState.Failing))) && (!fm.icelink.Global.equals(value.getState(), fm.icelink.ConnectionState.Failed)))) {
                            value.close();
                        }
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                ConnectionCollection.prototype.setJoinArgs = function (value) {
                    if (arguments.length == 1) {
                        this._joinArgs = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                ConnectionCollection.prototype.tryGetByRemoteUserId = function (remoteUserId, connection) {
                    if (arguments.length == 2) {
                        var _var0 = fm.icelink.HashExtensions.tryGetValue(this.__lookupByRemoteUserId, remoteUserId, connection);
                        return _var0;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /** @internal */
                ConnectionCollection.fmicelinkwebsync4ConnectionCollectionInitialize = function () {
                    if (!fm.icelink.websync4.ConnectionCollection.__fmicelinkwebsync4ConnectionCollectionInitialized) {
                        ConnectionCollection.fm_icelink_websync4_ConnectionCollection__remoteUserId = "fm.icelink.remoteUserId";
                    }
                    fm.icelink.websync4.ConnectionCollection.__fmicelinkwebsync4ConnectionCollectionInitialized = true;
                };
                /** @internal */
                ConnectionCollection.__fmicelinkwebsync4ConnectionCollectionInitialized = false;
                return ConnectionCollection;
            }(fm.icelink.ConnectionCollection));
            websync4.ConnectionCollection = ConnectionCollection;
        })(websync4 = icelink.websync4 || (icelink.websync4 = {}));
    })(icelink = fm.icelink || (fm.icelink = {}));
})(fm || (fm = {}));

(function (fm) {
    var icelink;
    (function (icelink) {
        var websync4;
        (function (websync4) {
            /**
             <div>
             Details about a remote WebSync instance.
             </div>
        
            */
            var PeerClient = /** @class */ (function () {
                /**<span id='method-fm.icelink.websync4.PeerClient-constructor'>&nbsp;</span>**/
                /**
                 <div>
                 Initializes a new instance of the `fm.icelink.websync4.peerClient` class.
                 </div>
        
                @param {string} instanceId The WebSync instance ID.
                @param {fm.icelink.Hash<string,fm.websync.Record>} boundRecords The WebSync bound records.
                @return {}
                */
                function PeerClient(instanceId, boundRecords) {
                    var __arguments = new Array(arguments.length);
                    for (var __argumentIndex = 0; __argumentIndex < __arguments.length; ++__argumentIndex) {
                        __arguments[__argumentIndex] = arguments[__argumentIndex];
                    }
                    if (__arguments.length == 2) {
                        var instanceId_1 = __arguments[0];
                        var boundRecords_1 = __arguments[1];
                        //super();
                        this.setInstanceId(instanceId_1);
                        this.setBoundRecords(boundRecords_1);
                    }
                    else {
                        throw new icelink.Exception('Constructor overload does not exist with specified parameter count/type combination.');
                    }
                }
                PeerClient.prototype.getTypeString = function () {
                    return '[fm.icelink.websync4.PeerClient]';
                };
                /**
                @internal
        
                */
                PeerClient.createPeerClient = function (instanceId, boundRecords, state) {
                    if (arguments.length == 3) {
                        var client = new fm.icelink.websync4.PeerClient(instanceId, boundRecords);
                        client.setState(state);
                        return client;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.PeerClient-getBoundRecords'>&nbsp;</span>**/
                /**
                 <div>
                 Gets the WebSync bound records.
                 </div>
        
        
                @return {fm.icelink.Hash<string,fm.websync.Record>}
                */
                PeerClient.prototype.getBoundRecords = function () {
                    if (arguments.length == 0) {
                        return this._boundRecords;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.PeerClient-getInstanceId'>&nbsp;</span>**/
                /**
                 <div>
                 Gets the WebSync instance ID.
                 </div>
        
        
                @return {string}
                */
                PeerClient.prototype.getInstanceId = function () {
                    if (arguments.length == 0) {
                        return this._instanceId;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                PeerClient.prototype.getState = function () {
                    if (arguments.length == 0) {
                        return this._state;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.PeerClient-setBoundRecords'>&nbsp;</span>**/
                /**
                 <div>
                 Sets the WebSync bound records.
                 </div>
        
        
                @param {fm.icelink.Hash<string,fm.websync.Record>} value
                @return {void}
                */
                PeerClient.prototype.setBoundRecords = function (value) {
                    if (arguments.length == 1) {
                        this._boundRecords = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**<span id='method-fm.icelink.websync4.PeerClient-setInstanceId'>&nbsp;</span>**/
                /**
                 <div>
                 Sets the WebSync instance ID.
                 </div>
        
        
                @param {string} value
                @return {void}
                */
                PeerClient.prototype.setInstanceId = function (value) {
                    if (arguments.length == 1) {
                        this._instanceId = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                /**
                @internal
        
                */
                PeerClient.prototype.setState = function (value) {
                    if (arguments.length == 1) {
                        this._state = value;
                    }
                    else {
                        throw new icelink.Exception('Method overload does not exist with specified parameter count/type combination.');
                    }
                };
                return PeerClient;
            }());
            websync4.PeerClient = PeerClient;
        })(websync4 = icelink.websync4 || (icelink.websync4 = {}));
    })(icelink = fm.icelink || (fm.icelink = {}));
})(fm || (fm = {}));
/// <reference path="ClientExtensions.ts" />

/// <reference path="ClientExtensions.ts" />
(function (fm) {
    var icelink;
    (function (icelink) {
        var websync4;
        (function (websync4) {
            fm.icelink.websync4.ClientExtensions.fmicelinkwebsync4ClientExtensionsInitialize();
        })(websync4 = icelink.websync4 || (icelink.websync4 = {}));
    })(icelink = fm.icelink || (fm.icelink = {}));
})(fm || (fm = {}));
/// <reference path="ConnectionCollection.ts" />
(function (fm) {
    var icelink;
    (function (icelink) {
        var websync4;
        (function (websync4) {
            fm.icelink.websync4.ConnectionCollection.fmicelinkwebsync4ConnectionCollectionInitialize();
        })(websync4 = icelink.websync4 || (icelink.websync4 = {}));
    })(icelink = fm.icelink || (fm.icelink = {}));
})(fm || (fm = {}));

return fm.icelink.websync4
}));
