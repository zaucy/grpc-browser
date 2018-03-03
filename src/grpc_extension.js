class GrpcBrowserNotImplemented extends Error {
  constructor(c, prop) {
    let msg = "";
    if(typeof c == "string") {
      msg = c;
    } else {
      let className = c.name;
      let onPrototype = prop in c.prototype;

      msg += className + ".";

      if(onPrototype) {
        msg += "prototype." + prop + "()";
      } else {
        msg += prop + "()";
      }
    }

    super(msg + " not implemented");
  }
}

class Call {

  constructor() {
    throw new GrpcBrowserNotImplemented(Call, 'constructor');
  }

  startBatch() {
    throw new GrpcBrowserNotImplemented(Call, 'startBatch');
  }

  cancel() {
    throw new GrpcBrowserNotImplemented(Call, 'cancel');
  }

  cancelWithStatus() {
    throw new GrpcBrowserNotImplemented(Call, 'cancelWithStatus');
  }

  getPeer() {
    throw new GrpcBrowserNotImplemented(Call, 'getPeer');
  }

  setCredentials() {
    throw new GrpcBrowserNotImplemented(Call, 'setCredentials');
  }
};

class CallCredentials {

  constructor() {
    throw new GrpcBrowserNotImplemented(CallCredentials, 'constructor');
  }

  static createFromPlugin() {
    throw new GrpcBrowserNotImplemented(CallCredentials, 'createFromPlugin');
  }

  compose() {
    throw new GrpcBrowserNotImplemented(CallCredentials, 'compose');
  }
};

class Channel {
  constructor() {
    throw new GrpcBrowserNotImplemented(Channel, 'constructor');
  }

  close() {
    throw new GrpcBrowserNotImplemented(Channel, 'close');
  }

  getTarget() {
    throw new GrpcBrowserNotImplemented(Channel, 'getTarget');
  }

  getConnectivityState() {
    throw new GrpcBrowserNotImplemented(Channel, 'getConnectivityState');
  }

  watchConnectivityState() {
    throw new GrpcBrowserNotImplemented(Channel, 'watchConnectivityState');
  }
};

class ChannelCredentials {

  static createSsl() {
    throw new GrpcBrowserNotImplemented(ChannelCredentials, 'createSsl');
  }

  static createInsecure() {
    throw new GrpcBrowserNotImplemented(ChannelCredentials, 'createInsecure');
  }

  constructor() {
    throw new GrpcBrowserNotImplemented(ChannelCredentials, 'constructor');
  }

  compose() {
    throw new GrpcBrowserNotImplemented(ChannelCredentials, 'compose');
  }
};

class Server {
  constructor() {
    throw new GrpcBrowserNotImplemented(Server, 'constructor');
  }

  requestCall() {
    throw new GrpcBrowserNotImplemented(Server, 'requestCall');
  }

  addHttp2Port() {
    throw new GrpcBrowserNotImplemented(Server, 'addHttp2Port');
  }

  start() {
    throw new GrpcBrowserNotImplemented(Server, 'start');
  }

  tryShutdown() {
    throw new GrpcBrowserNotImplemented(Server, 'tryShutdown');
  }

  forceShutdown() {
    throw new GrpcBrowserNotImplemented(Server, 'forceShutdown');
  }
};

class ServerCredentials {
  static createSsl() {
    throw new GrpcBrowserNotImplemented(ServerCredentials, 'createSsl');
  }

  static createInsecure() {
    throw new GrpcBrowserNotImplemented(ServerCredentials, 'createInsecure');
  }

  constructor() {
    throw new GrpcBrowserNotImplemented(ServerCredentials, 'constructor');
  }

};

function metadataKeyIsLegal() {
  throw new GrpcBrowserNotImplemented("metadataKeyIsLegal()");
}

function metadataNonbinValueIsLegal() {
  throw new GrpcBrowserNotImplemented("metadataNonbinValueIsLegal()");
}

function metadataKeyIsBinary() {
  throw new GrpcBrowserNotImplemented("metadataKeyIsBinary()");
}

function setDefaultRootsPem() {
  throw new GrpcBrowserNotImplemented("setDefaultRootsPem()");
}

function setDefaultLoggerCallback() {
  throw new GrpcBrowserNotImplemented("setDefaultLoggerCallback()");
}

function setLogVerbosity() {
  throw new GrpcBrowserNotImplemented("setLogVerbosity()");
}

function forcePoll() {
  throw new GrpcBrowserNotImplemented("forcePoll()");
}

exports.oType = {
  SEND_INITIAL_METADATA: 0,
  SEND_MESSAGE: 1,
  SEND_CLOSE_FROM_CLIENT: 2,
  SEND_STATUS_FROM_SERVER: 3,
  RECV_INITIAL_METADATA: 4,
  RECV_MESSAGE: 5,
  RECV_STATUS_ON_CLIENT: 6,
  RECV_CLOSE_ON_SERVER: 7
};

exports.connectivityState = {
  IDLE: 0,
  CONNECTING: 1,
  READY: 2,
  TRANSIENT_FAILURE: 3,
  FATAL_FAILURE: 4
};

exports.Call = Call;
exports.CallCredentials = CallCredentials;
exports.Channel = Channel;
exports.ChannelCredentials = ChannelCredentials;
exports.Server = Server;
exports.ServerCredentials = ServerCredentials;
exports.metadataKeyIsLegal = metadataKeyIsLegal;
exports.metadataNonbinValueIsLegal = metadataNonbinValueIsLegal;
exports.metadataKeyIsBinary = metadataKeyIsBinary;
exports.setDefaultRootsPem = setDefaultRootsPem;
exports.forcePoll = forcePoll;
