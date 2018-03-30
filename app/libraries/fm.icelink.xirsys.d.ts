//
// Title: IceLink for JavaScript
// Version: 3.2.1.456
// Copyright Frozen Mountain Software 2011+
//
declare namespace fm.icelink.xirsys.v2 {
    /**
     <div>
     A XirSys v2 client.
     </div>

    */
    class Client {
        getTypeString(): string;
        /**
        @internal
        */
        private _application;
        /**
        @internal
        */
        private _domain;
        /**
        @internal
        */
        private _endpoint;
        /**
        @internal
        */
        private _ident;
        /**
        @internal
        */
        private _room;
        /**
        @internal
        */
        private _secret;
        /**
        @internal
        */
        private _secure;
        /**
        @internal
        */
        private static fm_icelink_xirsys_v2_Client___defaultEndpoint;
        /**<span id='method-fm.icelink.xirsys.v2.Client-constructor'>&nbsp;</span>**/
        /**
         <div>
         Initializes a new instance of the `fm.icelink.xirsys.v2.client` class.
         </div>

        @param {string} ident The "ident" value.
        @param {string} secret The "secret" value.
        @param {string} domain The "domain" value.
        @param {string} application The "application" value.
        @param {string} room The "room" value.
        @return {}
        */
        constructor(ident: string, secret: string, domain: string, application: string, room: string);
        /**<span id='method-fm.icelink.xirsys.v2.Client-constructor'>&nbsp;</span>**/
        /**
         <div>
         Initializes a new instance of the `fm.icelink.xirsys.v2.client` class.
         </div>

        @param {string} ident The "ident" value.
        @param {string} secret The "secret" value.
        @param {string} domain The "domain" value.
        @param {string} application The "application" value.
        @return {}
        */
        constructor(ident: string, secret: string, domain: string, application: string);
        /**<span id='method-fm.icelink.xirsys.v2.Client-constructor'>&nbsp;</span>**/
        /**
         <div>
         Initializes a new instance of the `fm.icelink.xirsys.v2.client` class.
         </div>

        @param {string} ident The "ident" value.
        @param {string} secret The "secret" value.
        @param {string} domain The "domain" value.
        @return {}
        */
        constructor(ident: string, secret: string, domain: string);
        /**<span id='method-fm.icelink.xirsys.v2.Client-constructor'>&nbsp;</span>**/
        /**
         <div>
         Initializes a new instance of the `fm.icelink.xirsys.v2.client` class.
         </div>

        @param {string} ident The "ident" value.
        @param {string} secret The "secret" value.
        @param {string} domain The "domain" value.
        @param {string} application The "application" value.
        @param {string} room The "room" value.
        @param {boolean} secure The "secure" value.
        @return {}
        */
        constructor(ident: string, secret: string, domain: string, application: string, room: string, secure: boolean);
        /**<span id='method-fm.icelink.xirsys.v2.Client-getDefaultEndpoint'>&nbsp;</span>**/
        /**
         <div>
         Gets the default HTTP endpoint.
         Defaults to "https://service.xirsys.com/ice".
         </div>


        @return {string}
        */
        static getDefaultEndpoint(): string;
        /**<span id='method-fm.icelink.xirsys.v2.Client-setDefaultEndpoint'>&nbsp;</span>**/
        /**
         <div>
         Sets the default HTTP endpoint.
         Defaults to "https://service.xirsys.com/ice".
         </div>


        @param {string} value
        @return {void}
        */
        static setDefaultEndpoint(value: string): void;
        /**
        @internal

        */
        private doGetIceServers(promise);
        /**<span id='method-fm.icelink.xirsys.v2.Client-getApplication'>&nbsp;</span>**/
        /**
         <div>
         Gets the "application" value.
         Defaults to "default".
         </div>


        @return {string}
        */
        getApplication(): string;
        /**<span id='method-fm.icelink.xirsys.v2.Client-getDomain'>&nbsp;</span>**/
        /**
         <div>
         Gets the "domain" value.
         </div>


        @return {string}
        */
        getDomain(): string;
        /**<span id='method-fm.icelink.xirsys.v2.Client-getEndpoint'>&nbsp;</span>**/
        /**
         <div>
         Gets the HTTP endpoint.
         </div>


        @return {string}
        */
        getEndpoint(): string;
        /**<span id='method-fm.icelink.xirsys.v2.Client-getIceServers'>&nbsp;</span>**/
        /**
         <div>
         Gets an array of XirSys ICE servers.
         </div>

        @return {fm.icelink.Future<fm.icelink.IceServer[]>}
        */
        getIceServers(): fm.icelink.Future<fm.icelink.IceServer[]>;
        /**<span id='method-fm.icelink.xirsys.v2.Client-getIdent'>&nbsp;</span>**/
        /**
         <div>
         Gets the "ident" value.
         </div>


        @return {string}
        */
        getIdent(): string;
        /**<span id='method-fm.icelink.xirsys.v2.Client-getRoom'>&nbsp;</span>**/
        /**
         <div>
         Gets the "room" value.
         Defaults to "default".
         </div>


        @return {string}
        */
        getRoom(): string;
        /**<span id='method-fm.icelink.xirsys.v2.Client-getSecret'>&nbsp;</span>**/
        /**
         <div>
         Gets the "secret" value.
         </div>


        @return {string}
        */
        getSecret(): string;
        /**<span id='method-fm.icelink.xirsys.v2.Client-getSecure'>&nbsp;</span>**/
        /**
         <div>
         Gets the "secure" value.
         Defaults to <c>true</c>.
         </div>


        @return {boolean}
        */
        getSecure(): boolean;
        /**<span id='method-fm.icelink.xirsys.v2.Client-setApplication'>&nbsp;</span>**/
        /**
         <div>
         Sets the "application" value.
         Defaults to "default".
         </div>


        @param {string} value
        @return {void}
        */
        setApplication(value: string): void;
        /**<span id='method-fm.icelink.xirsys.v2.Client-setDomain'>&nbsp;</span>**/
        /**
         <div>
         Sets the "domain" value.
         </div>


        @param {string} value
        @return {void}
        */
        setDomain(value: string): void;
        /**<span id='method-fm.icelink.xirsys.v2.Client-setEndpoint'>&nbsp;</span>**/
        /**
         <div>
         Sets the HTTP endpoint.
         </div>


        @param {string} value
        @return {void}
        */
        setEndpoint(value: string): void;
        /**<span id='method-fm.icelink.xirsys.v2.Client-setIdent'>&nbsp;</span>**/
        /**
         <div>
         Sets the "ident" value.
         </div>


        @param {string} value
        @return {void}
        */
        setIdent(value: string): void;
        /**<span id='method-fm.icelink.xirsys.v2.Client-setRoom'>&nbsp;</span>**/
        /**
         <div>
         Sets the "room" value.
         Defaults to "default".
         </div>


        @param {string} value
        @return {void}
        */
        setRoom(value: string): void;
        /**<span id='method-fm.icelink.xirsys.v2.Client-setSecret'>&nbsp;</span>**/
        /**
         <div>
         Sets the "secret" value.
         </div>


        @param {string} value
        @return {void}
        */
        setSecret(value: string): void;
        /**<span id='method-fm.icelink.xirsys.v2.Client-setSecure'>&nbsp;</span>**/
        /**
         <div>
         Sets the "secure" value.
         Defaults to <c>true</c>.
         </div>


        @param {boolean} value
        @return {void}
        */
        setSecure(value: boolean): void;
        /**
        @internal

        */
        private toFormData();
        /** @internal */
        private static __fmicelinkxirsysv2ClientInitialized;
        /** @internal */
        static fmicelinkxirsysv2ClientInitialize(): void;
    }
}
declare namespace fm.icelink.xirsys.v2 {
    /**
    @internal
    */
    class IceResponse {
        getTypeString(): string;
        /**
        @internal
        */
        private _data;
        /**
        @internal
        */
        private _error;
        /**
        @internal
        */
        private _path;
        /**
        @internal
        */
        private _status;
        constructor();
        static fromJson(iceResponseJson: string): fm.icelink.xirsys.v2.IceResponse;
        static toJson(iceResponse: fm.icelink.xirsys.v2.IceResponse): string;
        getData(): fm.icelink.xirsys.v2.IceResponseData;
        getError(): string;
        getPath(): string;
        getStatus(): number;
        setData(value: fm.icelink.xirsys.v2.IceResponseData): void;
        setError(value: string): void;
        setPath(value: string): void;
        setStatus(value: number): void;
        toJson(): string;
    }
}
declare namespace fm.icelink.xirsys.v2 {
    /**
    @internal
    */
    class IceResponseData {
        getTypeString(): string;
        /**
        @internal
        */
        private _iceServers;
        constructor();
        static fromJson(iceResponseDataJson: string): fm.icelink.xirsys.v2.IceResponseData;
        static toJson(iceResponseData: fm.icelink.xirsys.v2.IceResponseData): string;
        getIceServers(): fm.icelink.xirsys.v2.IceServer[];
        setIceServers(value: fm.icelink.xirsys.v2.IceServer[]): void;
        toJson(): string;
    }
}
declare namespace fm.icelink.xirsys.v2 {
    /**
    @internal
    */
    class IceServer extends fm.icelink.Dynamic {
        getTypeString(): string;
        /**
        @internal
        */
        private _credential;
        /**
        @internal
        */
        private _url;
        /**
        @internal
        */
        private _username;
        constructor();
        static fromJson(iceServerJson: string): fm.icelink.xirsys.v2.IceServer;
        static fromJsonMultiple(iceServersJson: string): fm.icelink.xirsys.v2.IceServer[];
        static toJson(iceServer: fm.icelink.xirsys.v2.IceServer): string;
        static toJsonMultiple(iceServers: fm.icelink.xirsys.v2.IceServer[]): string;
        getCredential(): string;
        getUrl(): string;
        getUsername(): string;
        setCredential(value: string): void;
        setUrl(value: string): void;
        setUsername(value: string): void;
        toJson(): string;
    }
}
declare namespace fm.icelink.xirsys.v3 {
    /**
     <div>
     A XirSys v3 client.
     </div>

    */
    class Client {
        getTypeString(): string;
        /**
        @internal
        */
        private _channel;
        /**
        @internal
        */
        private _endpoint;
        /**
        @internal
        */
        private _ident;
        /**
        @internal
        */
        private _secret;
        /**
        @internal
        */
        private _secure;
        /**
        @internal
        */
        private static fm_icelink_xirsys_v3_Client___defaultEndpoint;
        /**<span id='method-fm.icelink.xirsys.v3.Client-constructor'>&nbsp;</span>**/
        /**
         <div>
         Initializes a new instance of the `fm.icelink.xirsys.v3.client` class.
         </div>

        @param {string} ident The "ident" value.
        @param {string} secret The "secret" value.
        @param {string} channel The "channel" value.
        @param {boolean} secure The "secure" value.
        @return {}
        */
        constructor(ident: string, secret: string, channel: string, secure: boolean);
        /**<span id='method-fm.icelink.xirsys.v3.Client-constructor'>&nbsp;</span>**/
        /**
         <div>
         Initializes a new instance of the `fm.icelink.xirsys.v3.client` class.
         </div>

        @param {string} ident The "ident" value.
        @param {string} secret The "secret" value.
        @param {string} channel The "channel" value.
        @return {}
        */
        constructor(ident: string, secret: string, channel: string);
        /**<span id='method-fm.icelink.xirsys.v3.Client-getDefaultEndpoint'>&nbsp;</span>**/
        /**
         <div>
         Gets the default HTTP endpoint.
         Defaults to "https://global.xirsys.net/_turn".
         </div>


        @return {string}
        */
        static getDefaultEndpoint(): string;
        /**<span id='method-fm.icelink.xirsys.v3.Client-setDefaultEndpoint'>&nbsp;</span>**/
        /**
         <div>
         Sets the default HTTP endpoint.
         Defaults to "https://global.xirsys.net/_turn".
         </div>


        @param {string} value
        @return {void}
        */
        static setDefaultEndpoint(value: string): void;
        /**
        @internal

        */
        private doGetIceServers(promise);
        /**<span id='method-fm.icelink.xirsys.v3.Client-getChannel'>&nbsp;</span>**/
        /**
         <div>
         Gets the "channel" value.
         </div>


        @return {string}
        */
        getChannel(): string;
        /**<span id='method-fm.icelink.xirsys.v3.Client-getEndpoint'>&nbsp;</span>**/
        /**
         <div>
         Gets the HTTP endpoint.
         </div>


        @return {string}
        */
        getEndpoint(): string;
        /**<span id='method-fm.icelink.xirsys.v3.Client-getIceServers'>&nbsp;</span>**/
        /**
         <div>
         Gets an array of XirSys ICE servers.
         </div>

        @return {fm.icelink.Future<fm.icelink.IceServer[]>}
        */
        getIceServers(): fm.icelink.Future<fm.icelink.IceServer[]>;
        /**<span id='method-fm.icelink.xirsys.v3.Client-getIdent'>&nbsp;</span>**/
        /**
         <div>
         Gets the "ident" value.
         </div>


        @return {string}
        */
        getIdent(): string;
        /**<span id='method-fm.icelink.xirsys.v3.Client-getSecret'>&nbsp;</span>**/
        /**
         <div>
         Gets the "secret" value.
         </div>


        @return {string}
        */
        getSecret(): string;
        /**<span id='method-fm.icelink.xirsys.v3.Client-getSecure'>&nbsp;</span>**/
        /**
         <div>
         Gets the "secure" value.
         Defaults to <c>true</c>.
         </div>


        @return {boolean}
        */
        getSecure(): boolean;
        /**<span id='method-fm.icelink.xirsys.v3.Client-setChannel'>&nbsp;</span>**/
        /**
         <div>
         Sets the "channel" value.
         </div>


        @param {string} value
        @return {void}
        */
        setChannel(value: string): void;
        /**<span id='method-fm.icelink.xirsys.v3.Client-setEndpoint'>&nbsp;</span>**/
        /**
         <div>
         Sets the HTTP endpoint.
         </div>


        @param {string} value
        @return {void}
        */
        setEndpoint(value: string): void;
        /**<span id='method-fm.icelink.xirsys.v3.Client-setIdent'>&nbsp;</span>**/
        /**
         <div>
         Sets the "ident" value.
         </div>


        @param {string} value
        @return {void}
        */
        setIdent(value: string): void;
        /**<span id='method-fm.icelink.xirsys.v3.Client-setSecret'>&nbsp;</span>**/
        /**
         <div>
         Sets the "secret" value.
         </div>


        @param {string} value
        @return {void}
        */
        setSecret(value: string): void;
        /**<span id='method-fm.icelink.xirsys.v3.Client-setSecure'>&nbsp;</span>**/
        /**
         <div>
         Sets the "secure" value.
         Defaults to <c>true</c>.
         </div>


        @param {boolean} value
        @return {void}
        */
        setSecure(value: boolean): void;
        /** @internal */
        private static __fmicelinkxirsysv3ClientInitialized;
        /** @internal */
        static fmicelinkxirsysv3ClientInitialize(): void;
    }
}
declare namespace fm.icelink.xirsys.v3 {
    /**
    @internal
    */
    class IceServer extends fm.icelink.Dynamic {
        getTypeString(): string;
        /**
        @internal
        */
        private _credential;
        /**
        @internal
        */
        private _url;
        /**
        @internal
        */
        private _username;
        constructor();
        static fromJson(iceServerJson: string): fm.icelink.xirsys.v3.IceServer;
        static fromJsonMultiple(iceServersJson: string): fm.icelink.xirsys.v3.IceServer[];
        static toJson(iceServer: fm.icelink.xirsys.v3.IceServer): string;
        static toJsonMultiple(iceServers: fm.icelink.xirsys.v3.IceServer[]): string;
        getCredential(): string;
        getUrl(): string;
        getUsername(): string;
        setCredential(value: string): void;
        setUrl(value: string): void;
        setUsername(value: string): void;
        toJson(): string;
    }
}
declare namespace fm.icelink.xirsys.v3 {
    /**
    @internal
    */
    class TurnResponse {
        getTypeString(): string;
        /**
        @internal
        */
        private _status;
        /**
        @internal
        */
        private _valueJson;
        constructor();
        static fromJson(turnResponseJson: string): fm.icelink.xirsys.v3.TurnResponse;
        static toJson(turnResponse: fm.icelink.xirsys.v3.TurnResponse): string;
        getStatus(): string;
        getValueJson(): string;
        setStatus(value: string): void;
        setValueJson(value: string): void;
        toJson(): string;
        getValue(): any;
        setValue(value: any): void;
    }
}
declare namespace fm.icelink.xirsys.v3 {
    /**
    @internal
    */
    class TurnResponseData {
        getTypeString(): string;
        /**
        @internal
        */
        private _iceServers;
        constructor();
        static fromJson(turnResponseDataJson: string): fm.icelink.xirsys.v3.TurnResponseData;
        static toJson(turnResponseData: fm.icelink.xirsys.v3.TurnResponseData): string;
        getIceServers(): fm.icelink.xirsys.v3.IceServer[];
        setIceServers(value: fm.icelink.xirsys.v3.IceServer[]): void;
        toJson(): string;
    }
}
declare namespace fm.icelink.xirsys.v3 {
    /**
    @internal
    */
    class TurnResponseStatus {
        getTypeString(): string;
        constructor();
        static getError(): string;
        static getOK(): string;
    }
}
declare namespace fm.icelink.xirsys {
}
declare namespace fm.icelink.xirsys {
}
