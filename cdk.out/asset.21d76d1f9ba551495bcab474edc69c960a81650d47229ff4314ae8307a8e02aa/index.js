var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __addDisposableResource: () => __addDisposableResource,
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __disposeResources: () => __disposeResources,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values,
  default: () => tslib_es6_default
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_ = accept(result.get))
        descriptor.get = _;
      if (_ = accept(result.set))
        descriptor.set = _;
      if (_ = accept(result.init))
        initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field")
        initializers.unshift(_);
      else
        descriptor[key] = _;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol")
    name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __exportStar(m, o) {
  for (var p in m)
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
      __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n])
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async)
          return Promise.resolve(result).then(next, function(e) {
            fail(e);
            return next();
          });
      } catch (e) {
        fail(e);
      }
    }
    if (env.hasError)
      throw env.error;
  }
  return next();
}
var extendStatics, __assign, __createBinding, __setModuleDefault, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({
  "node_modules/tslib/tslib.es6.mjs"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign3(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    };
    __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
    _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    tslib_es6_default = {
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __metadata,
      __awaiter,
      __generator,
      __createBinding,
      __exportStar,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn,
      __addDisposableResource,
      __disposeResources
    };
  }
});

// node_modules/@smithy/protocol-http/dist-cjs/extensions/httpExtensionConfiguration.js
var require_httpExtensionConfiguration = __commonJS({
  "node_modules/@smithy/protocol-http/dist-cjs/extensions/httpExtensionConfiguration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveHttpHandlerRuntimeConfig = exports.getHttpHandlerExtensionConfiguration = void 0;
    var getHttpHandlerExtensionConfiguration = (runtimeConfig) => {
      let httpHandler = runtimeConfig.httpHandler;
      return {
        setHttpHandler(handler2) {
          httpHandler = handler2;
        },
        httpHandler() {
          return httpHandler;
        },
        updateHttpClientConfig(key, value) {
          httpHandler.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs() {
          return httpHandler.httpHandlerConfigs();
        }
      };
    };
    exports.getHttpHandlerExtensionConfiguration = getHttpHandlerExtensionConfiguration;
    var resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
      return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler()
      };
    };
    exports.resolveHttpHandlerRuntimeConfig = resolveHttpHandlerRuntimeConfig;
  }
});

// node_modules/@smithy/protocol-http/dist-cjs/extensions/index.js
var require_extensions = __commonJS({
  "node_modules/@smithy/protocol-http/dist-cjs/extensions/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_httpExtensionConfiguration(), exports);
  }
});

// node_modules/@smithy/types/dist-cjs/abort.js
var require_abort = __commonJS({
  "node_modules/@smithy/types/dist-cjs/abort.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/auth/auth.js
var require_auth = __commonJS({
  "node_modules/@smithy/types/dist-cjs/auth/auth.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpAuthLocation = void 0;
    var HttpAuthLocation;
    (function(HttpAuthLocation2) {
      HttpAuthLocation2["HEADER"] = "header";
      HttpAuthLocation2["QUERY"] = "query";
    })(HttpAuthLocation = exports.HttpAuthLocation || (exports.HttpAuthLocation = {}));
  }
});

// node_modules/@smithy/types/dist-cjs/auth/HttpApiKeyAuth.js
var require_HttpApiKeyAuth = __commonJS({
  "node_modules/@smithy/types/dist-cjs/auth/HttpApiKeyAuth.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpApiKeyAuthLocation = void 0;
    var HttpApiKeyAuthLocation;
    (function(HttpApiKeyAuthLocation2) {
      HttpApiKeyAuthLocation2["HEADER"] = "header";
      HttpApiKeyAuthLocation2["QUERY"] = "query";
    })(HttpApiKeyAuthLocation = exports.HttpApiKeyAuthLocation || (exports.HttpApiKeyAuthLocation = {}));
  }
});

// node_modules/@smithy/types/dist-cjs/auth/HttpAuthScheme.js
var require_HttpAuthScheme = __commonJS({
  "node_modules/@smithy/types/dist-cjs/auth/HttpAuthScheme.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/auth/HttpAuthSchemeProvider.js
var require_HttpAuthSchemeProvider = __commonJS({
  "node_modules/@smithy/types/dist-cjs/auth/HttpAuthSchemeProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/auth/HttpSigner.js
var require_HttpSigner = __commonJS({
  "node_modules/@smithy/types/dist-cjs/auth/HttpSigner.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/auth/IdentityProviderConfig.js
var require_IdentityProviderConfig = __commonJS({
  "node_modules/@smithy/types/dist-cjs/auth/IdentityProviderConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/auth/index.js
var require_auth2 = __commonJS({
  "node_modules/@smithy/types/dist-cjs/auth/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_auth(), exports);
    tslib_1.__exportStar(require_HttpApiKeyAuth(), exports);
    tslib_1.__exportStar(require_HttpAuthScheme(), exports);
    tslib_1.__exportStar(require_HttpAuthSchemeProvider(), exports);
    tslib_1.__exportStar(require_HttpSigner(), exports);
    tslib_1.__exportStar(require_IdentityProviderConfig(), exports);
  }
});

// node_modules/@smithy/types/dist-cjs/blob/blob-payload-input-types.js
var require_blob_payload_input_types = __commonJS({
  "node_modules/@smithy/types/dist-cjs/blob/blob-payload-input-types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/checksum.js
var require_checksum = __commonJS({
  "node_modules/@smithy/types/dist-cjs/checksum.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/client.js
var require_client = __commonJS({
  "node_modules/@smithy/types/dist-cjs/client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/command.js
var require_command = __commonJS({
  "node_modules/@smithy/types/dist-cjs/command.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/connection/config.js
var require_config = __commonJS({
  "node_modules/@smithy/types/dist-cjs/connection/config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/connection/manager.js
var require_manager = __commonJS({
  "node_modules/@smithy/types/dist-cjs/connection/manager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/connection/pool.js
var require_pool = __commonJS({
  "node_modules/@smithy/types/dist-cjs/connection/pool.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/connection/index.js
var require_connection = __commonJS({
  "node_modules/@smithy/types/dist-cjs/connection/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_config(), exports);
    tslib_1.__exportStar(require_manager(), exports);
    tslib_1.__exportStar(require_pool(), exports);
  }
});

// node_modules/@smithy/types/dist-cjs/crypto.js
var require_crypto = __commonJS({
  "node_modules/@smithy/types/dist-cjs/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/encode.js
var require_encode = __commonJS({
  "node_modules/@smithy/types/dist-cjs/encode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/endpoint.js
var require_endpoint = __commonJS({
  "node_modules/@smithy/types/dist-cjs/endpoint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EndpointURLScheme = void 0;
    var EndpointURLScheme;
    (function(EndpointURLScheme2) {
      EndpointURLScheme2["HTTP"] = "http";
      EndpointURLScheme2["HTTPS"] = "https";
    })(EndpointURLScheme = exports.EndpointURLScheme || (exports.EndpointURLScheme = {}));
  }
});

// node_modules/@smithy/types/dist-cjs/endpoints/EndpointRuleObject.js
var require_EndpointRuleObject = __commonJS({
  "node_modules/@smithy/types/dist-cjs/endpoints/EndpointRuleObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/endpoints/ErrorRuleObject.js
var require_ErrorRuleObject = __commonJS({
  "node_modules/@smithy/types/dist-cjs/endpoints/ErrorRuleObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/endpoints/RuleSetObject.js
var require_RuleSetObject = __commonJS({
  "node_modules/@smithy/types/dist-cjs/endpoints/RuleSetObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/endpoints/shared.js
var require_shared = __commonJS({
  "node_modules/@smithy/types/dist-cjs/endpoints/shared.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/endpoints/TreeRuleObject.js
var require_TreeRuleObject = __commonJS({
  "node_modules/@smithy/types/dist-cjs/endpoints/TreeRuleObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/endpoints/index.js
var require_endpoints = __commonJS({
  "node_modules/@smithy/types/dist-cjs/endpoints/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_EndpointRuleObject(), exports);
    tslib_1.__exportStar(require_ErrorRuleObject(), exports);
    tslib_1.__exportStar(require_RuleSetObject(), exports);
    tslib_1.__exportStar(require_shared(), exports);
    tslib_1.__exportStar(require_TreeRuleObject(), exports);
  }
});

// node_modules/@smithy/types/dist-cjs/eventStream.js
var require_eventStream = __commonJS({
  "node_modules/@smithy/types/dist-cjs/eventStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/extensions/checksum.js
var require_checksum2 = __commonJS({
  "node_modules/@smithy/types/dist-cjs/extensions/checksum.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveChecksumRuntimeConfig = exports.getChecksumConfiguration = exports.AlgorithmId = void 0;
    var AlgorithmId;
    (function(AlgorithmId2) {
      AlgorithmId2["MD5"] = "md5";
      AlgorithmId2["CRC32"] = "crc32";
      AlgorithmId2["CRC32C"] = "crc32c";
      AlgorithmId2["SHA1"] = "sha1";
      AlgorithmId2["SHA256"] = "sha256";
    })(AlgorithmId = exports.AlgorithmId || (exports.AlgorithmId = {}));
    var getChecksumConfiguration = (runtimeConfig) => {
      const checksumAlgorithms = [];
      if (runtimeConfig.sha256 !== void 0) {
        checksumAlgorithms.push({
          algorithmId: () => AlgorithmId.SHA256,
          checksumConstructor: () => runtimeConfig.sha256
        });
      }
      if (runtimeConfig.md5 != void 0) {
        checksumAlgorithms.push({
          algorithmId: () => AlgorithmId.MD5,
          checksumConstructor: () => runtimeConfig.md5
        });
      }
      return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm(algo) {
          this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
          return this._checksumAlgorithms;
        }
      };
    };
    exports.getChecksumConfiguration = getChecksumConfiguration;
    var resolveChecksumRuntimeConfig = (clientConfig) => {
      const runtimeConfig = {};
      clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
      });
      return runtimeConfig;
    };
    exports.resolveChecksumRuntimeConfig = resolveChecksumRuntimeConfig;
  }
});

// node_modules/@smithy/types/dist-cjs/extensions/defaultClientConfiguration.js
var require_defaultClientConfiguration = __commonJS({
  "node_modules/@smithy/types/dist-cjs/extensions/defaultClientConfiguration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveDefaultRuntimeConfig = exports.getDefaultClientConfiguration = void 0;
    var checksum_1 = require_checksum2();
    var getDefaultClientConfiguration = (runtimeConfig) => {
      return {
        ...(0, checksum_1.getChecksumConfiguration)(runtimeConfig)
      };
    };
    exports.getDefaultClientConfiguration = getDefaultClientConfiguration;
    var resolveDefaultRuntimeConfig = (config) => {
      return {
        ...(0, checksum_1.resolveChecksumRuntimeConfig)(config)
      };
    };
    exports.resolveDefaultRuntimeConfig = resolveDefaultRuntimeConfig;
  }
});

// node_modules/@smithy/types/dist-cjs/extensions/defaultExtensionConfiguration.js
var require_defaultExtensionConfiguration = __commonJS({
  "node_modules/@smithy/types/dist-cjs/extensions/defaultExtensionConfiguration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/extensions/index.js
var require_extensions2 = __commonJS({
  "node_modules/@smithy/types/dist-cjs/extensions/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AlgorithmId = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_defaultClientConfiguration(), exports);
    tslib_1.__exportStar(require_defaultExtensionConfiguration(), exports);
    var checksum_1 = require_checksum2();
    Object.defineProperty(exports, "AlgorithmId", { enumerable: true, get: function() {
      return checksum_1.AlgorithmId;
    } });
  }
});

// node_modules/@smithy/types/dist-cjs/http.js
var require_http = __commonJS({
  "node_modules/@smithy/types/dist-cjs/http.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FieldPosition = void 0;
    var FieldPosition;
    (function(FieldPosition2) {
      FieldPosition2[FieldPosition2["HEADER"] = 0] = "HEADER";
      FieldPosition2[FieldPosition2["TRAILER"] = 1] = "TRAILER";
    })(FieldPosition = exports.FieldPosition || (exports.FieldPosition = {}));
  }
});

// node_modules/@smithy/types/dist-cjs/identity/apiKeyIdentity.js
var require_apiKeyIdentity = __commonJS({
  "node_modules/@smithy/types/dist-cjs/identity/apiKeyIdentity.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/identity/awsCredentialIdentity.js
var require_awsCredentialIdentity = __commonJS({
  "node_modules/@smithy/types/dist-cjs/identity/awsCredentialIdentity.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/identity/identity.js
var require_identity = __commonJS({
  "node_modules/@smithy/types/dist-cjs/identity/identity.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/identity/tokenIdentity.js
var require_tokenIdentity = __commonJS({
  "node_modules/@smithy/types/dist-cjs/identity/tokenIdentity.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/identity/index.js
var require_identity2 = __commonJS({
  "node_modules/@smithy/types/dist-cjs/identity/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_apiKeyIdentity(), exports);
    tslib_1.__exportStar(require_awsCredentialIdentity(), exports);
    tslib_1.__exportStar(require_identity(), exports);
    tslib_1.__exportStar(require_tokenIdentity(), exports);
  }
});

// node_modules/@smithy/types/dist-cjs/logger.js
var require_logger = __commonJS({
  "node_modules/@smithy/types/dist-cjs/logger.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/middleware.js
var require_middleware = __commonJS({
  "node_modules/@smithy/types/dist-cjs/middleware.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SMITHY_CONTEXT_KEY = void 0;
    exports.SMITHY_CONTEXT_KEY = "__smithy_context";
  }
});

// node_modules/@smithy/types/dist-cjs/pagination.js
var require_pagination = __commonJS({
  "node_modules/@smithy/types/dist-cjs/pagination.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/profile.js
var require_profile = __commonJS({
  "node_modules/@smithy/types/dist-cjs/profile.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IniSectionType = void 0;
    var IniSectionType;
    (function(IniSectionType2) {
      IniSectionType2["PROFILE"] = "profile";
      IniSectionType2["SSO_SESSION"] = "sso-session";
      IniSectionType2["SERVICES"] = "services";
    })(IniSectionType = exports.IniSectionType || (exports.IniSectionType = {}));
  }
});

// node_modules/@smithy/types/dist-cjs/response.js
var require_response = __commonJS({
  "node_modules/@smithy/types/dist-cjs/response.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/retry.js
var require_retry = __commonJS({
  "node_modules/@smithy/types/dist-cjs/retry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/serde.js
var require_serde = __commonJS({
  "node_modules/@smithy/types/dist-cjs/serde.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/shapes.js
var require_shapes = __commonJS({
  "node_modules/@smithy/types/dist-cjs/shapes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/signature.js
var require_signature = __commonJS({
  "node_modules/@smithy/types/dist-cjs/signature.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/stream.js
var require_stream = __commonJS({
  "node_modules/@smithy/types/dist-cjs/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/streaming-payload/streaming-blob-common-types.js
var require_streaming_blob_common_types = __commonJS({
  "node_modules/@smithy/types/dist-cjs/streaming-payload/streaming-blob-common-types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/streaming-payload/streaming-blob-payload-input-types.js
var require_streaming_blob_payload_input_types = __commonJS({
  "node_modules/@smithy/types/dist-cjs/streaming-payload/streaming-blob-payload-input-types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/streaming-payload/streaming-blob-payload-output-types.js
var require_streaming_blob_payload_output_types = __commonJS({
  "node_modules/@smithy/types/dist-cjs/streaming-payload/streaming-blob-payload-output-types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/transfer.js
var require_transfer = __commonJS({
  "node_modules/@smithy/types/dist-cjs/transfer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RequestHandlerProtocol = void 0;
    var RequestHandlerProtocol;
    (function(RequestHandlerProtocol2) {
      RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
      RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
      RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
    })(RequestHandlerProtocol = exports.RequestHandlerProtocol || (exports.RequestHandlerProtocol = {}));
  }
});

// node_modules/@smithy/types/dist-cjs/transform/client-payload-blob-type-narrow.js
var require_client_payload_blob_type_narrow = __commonJS({
  "node_modules/@smithy/types/dist-cjs/transform/client-payload-blob-type-narrow.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/transform/type-transform.js
var require_type_transform = __commonJS({
  "node_modules/@smithy/types/dist-cjs/transform/type-transform.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/uri.js
var require_uri = __commonJS({
  "node_modules/@smithy/types/dist-cjs/uri.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/util.js
var require_util = __commonJS({
  "node_modules/@smithy/types/dist-cjs/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/waiter.js
var require_waiter = __commonJS({
  "node_modules/@smithy/types/dist-cjs/waiter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/types/dist-cjs/index.js
var require_dist_cjs = __commonJS({
  "node_modules/@smithy/types/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_abort(), exports);
    tslib_1.__exportStar(require_auth2(), exports);
    tslib_1.__exportStar(require_blob_payload_input_types(), exports);
    tslib_1.__exportStar(require_checksum(), exports);
    tslib_1.__exportStar(require_client(), exports);
    tslib_1.__exportStar(require_command(), exports);
    tslib_1.__exportStar(require_connection(), exports);
    tslib_1.__exportStar(require_crypto(), exports);
    tslib_1.__exportStar(require_encode(), exports);
    tslib_1.__exportStar(require_endpoint(), exports);
    tslib_1.__exportStar(require_endpoints(), exports);
    tslib_1.__exportStar(require_eventStream(), exports);
    tslib_1.__exportStar(require_extensions2(), exports);
    tslib_1.__exportStar(require_http(), exports);
    tslib_1.__exportStar(require_identity2(), exports);
    tslib_1.__exportStar(require_logger(), exports);
    tslib_1.__exportStar(require_middleware(), exports);
    tslib_1.__exportStar(require_pagination(), exports);
    tslib_1.__exportStar(require_profile(), exports);
    tslib_1.__exportStar(require_response(), exports);
    tslib_1.__exportStar(require_retry(), exports);
    tslib_1.__exportStar(require_serde(), exports);
    tslib_1.__exportStar(require_shapes(), exports);
    tslib_1.__exportStar(require_signature(), exports);
    tslib_1.__exportStar(require_stream(), exports);
    tslib_1.__exportStar(require_streaming_blob_common_types(), exports);
    tslib_1.__exportStar(require_streaming_blob_payload_input_types(), exports);
    tslib_1.__exportStar(require_streaming_blob_payload_output_types(), exports);
    tslib_1.__exportStar(require_transfer(), exports);
    tslib_1.__exportStar(require_client_payload_blob_type_narrow(), exports);
    tslib_1.__exportStar(require_type_transform(), exports);
    tslib_1.__exportStar(require_uri(), exports);
    tslib_1.__exportStar(require_util(), exports);
    tslib_1.__exportStar(require_waiter(), exports);
  }
});

// node_modules/@smithy/protocol-http/dist-cjs/Field.js
var require_Field = __commonJS({
  "node_modules/@smithy/protocol-http/dist-cjs/Field.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Field = void 0;
    var types_1 = require_dist_cjs();
    var Field = class {
      constructor({ name, kind = types_1.FieldPosition.HEADER, values = [] }) {
        this.name = name;
        this.kind = kind;
        this.values = values;
      }
      add(value) {
        this.values.push(value);
      }
      set(values) {
        this.values = values;
      }
      remove(value) {
        this.values = this.values.filter((v) => v !== value);
      }
      toString() {
        return this.values.map((v) => v.includes(",") || v.includes(" ") ? `"${v}"` : v).join(", ");
      }
      get() {
        return this.values;
      }
    };
    exports.Field = Field;
  }
});

// node_modules/@smithy/protocol-http/dist-cjs/Fields.js
var require_Fields = __commonJS({
  "node_modules/@smithy/protocol-http/dist-cjs/Fields.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Fields = void 0;
    var Fields = class {
      constructor({ fields = [], encoding = "utf-8" }) {
        this.entries = {};
        fields.forEach(this.setField.bind(this));
        this.encoding = encoding;
      }
      setField(field) {
        this.entries[field.name.toLowerCase()] = field;
      }
      getField(name) {
        return this.entries[name.toLowerCase()];
      }
      removeField(name) {
        delete this.entries[name.toLowerCase()];
      }
      getByType(kind) {
        return Object.values(this.entries).filter((field) => field.kind === kind);
      }
    };
    exports.Fields = Fields;
  }
});

// node_modules/@smithy/protocol-http/dist-cjs/httpHandler.js
var require_httpHandler = __commonJS({
  "node_modules/@smithy/protocol-http/dist-cjs/httpHandler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/protocol-http/dist-cjs/httpRequest.js
var require_httpRequest = __commonJS({
  "node_modules/@smithy/protocol-http/dist-cjs/httpRequest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpRequest = void 0;
    var HttpRequest = class _HttpRequest {
      constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
        this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
      }
      static isInstance(request) {
        if (!request)
          return false;
        const req = request;
        return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
      }
      clone() {
        const cloned = new _HttpRequest({
          ...this,
          headers: { ...this.headers }
        });
        if (cloned.query)
          cloned.query = cloneQuery(cloned.query);
        return cloned;
      }
    };
    exports.HttpRequest = HttpRequest;
    function cloneQuery(query) {
      return Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
          ...carry,
          [paramName]: Array.isArray(param) ? [...param] : param
        };
      }, {});
    }
  }
});

// node_modules/@smithy/protocol-http/dist-cjs/httpResponse.js
var require_httpResponse = __commonJS({
  "node_modules/@smithy/protocol-http/dist-cjs/httpResponse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpResponse = void 0;
    var HttpResponse = class {
      constructor(options) {
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
      }
      static isInstance(response) {
        if (!response)
          return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
      }
    };
    exports.HttpResponse = HttpResponse;
  }
});

// node_modules/@smithy/protocol-http/dist-cjs/isValidHostname.js
var require_isValidHostname = __commonJS({
  "node_modules/@smithy/protocol-http/dist-cjs/isValidHostname.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isValidHostname = void 0;
    function isValidHostname(hostname) {
      const hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
      return hostPattern.test(hostname);
    }
    exports.isValidHostname = isValidHostname;
  }
});

// node_modules/@smithy/protocol-http/dist-cjs/types.js
var require_types = __commonJS({
  "node_modules/@smithy/protocol-http/dist-cjs/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/protocol-http/dist-cjs/index.js
var require_dist_cjs2 = __commonJS({
  "node_modules/@smithy/protocol-http/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_extensions(), exports);
    tslib_1.__exportStar(require_Field(), exports);
    tslib_1.__exportStar(require_Fields(), exports);
    tslib_1.__exportStar(require_httpHandler(), exports);
    tslib_1.__exportStar(require_httpRequest(), exports);
    tslib_1.__exportStar(require_httpResponse(), exports);
    tslib_1.__exportStar(require_isValidHostname(), exports);
    tslib_1.__exportStar(require_types(), exports);
  }
});

// node_modules/@aws-sdk/middleware-host-header/dist-cjs/index.js
var require_dist_cjs3 = __commonJS({
  "node_modules/@aws-sdk/middleware-host-header/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getHostHeaderPlugin = exports.hostHeaderMiddlewareOptions = exports.hostHeaderMiddleware = exports.resolveHostHeaderConfig = void 0;
    var protocol_http_1 = require_dist_cjs2();
    function resolveHostHeaderConfig(input) {
      return input;
    }
    exports.resolveHostHeaderConfig = resolveHostHeaderConfig;
    var hostHeaderMiddleware = (options) => (next) => async (args) => {
      if (!protocol_http_1.HttpRequest.isInstance(args.request))
        return next(args);
      const { request } = args;
      const { handlerProtocol = "" } = options.requestHandler.metadata || {};
      if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
        delete request.headers["host"];
        request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
      } else if (!request.headers["host"]) {
        let host = request.hostname;
        if (request.port != null)
          host += `:${request.port}`;
        request.headers["host"] = host;
      }
      return next(args);
    };
    exports.hostHeaderMiddleware = hostHeaderMiddleware;
    exports.hostHeaderMiddlewareOptions = {
      name: "hostHeaderMiddleware",
      step: "build",
      priority: "low",
      tags: ["HOST"],
      override: true
    };
    var getHostHeaderPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add((0, exports.hostHeaderMiddleware)(options), exports.hostHeaderMiddlewareOptions);
      }
    });
    exports.getHostHeaderPlugin = getHostHeaderPlugin;
  }
});

// node_modules/@aws-sdk/middleware-logger/dist-cjs/loggerMiddleware.js
var require_loggerMiddleware = __commonJS({
  "node_modules/@aws-sdk/middleware-logger/dist-cjs/loggerMiddleware.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getLoggerPlugin = exports.loggerMiddlewareOptions = exports.loggerMiddleware = void 0;
    var loggerMiddleware = () => (next, context) => async (args) => {
      var _a, _b;
      try {
        const response = await next(args);
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog !== null && overrideInputFilterSensitiveLog !== void 0 ? overrideInputFilterSensitiveLog : context.inputFilterSensitiveLog;
        const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog !== null && overrideOutputFilterSensitiveLog !== void 0 ? overrideOutputFilterSensitiveLog : context.outputFilterSensitiveLog;
        const { $metadata, ...outputWithoutMetadata } = response.output;
        (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, {
          clientName,
          commandName,
          input: inputFilterSensitiveLog(args.input),
          output: outputFilterSensitiveLog(outputWithoutMetadata),
          metadata: $metadata
        });
        return response;
      } catch (error) {
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog !== null && overrideInputFilterSensitiveLog !== void 0 ? overrideInputFilterSensitiveLog : context.inputFilterSensitiveLog;
        (_b = logger === null || logger === void 0 ? void 0 : logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, {
          clientName,
          commandName,
          input: inputFilterSensitiveLog(args.input),
          error,
          metadata: error.$metadata
        });
        throw error;
      }
    };
    exports.loggerMiddleware = loggerMiddleware;
    exports.loggerMiddlewareOptions = {
      name: "loggerMiddleware",
      tags: ["LOGGER"],
      step: "initialize",
      override: true
    };
    var getLoggerPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add((0, exports.loggerMiddleware)(), exports.loggerMiddlewareOptions);
      }
    });
    exports.getLoggerPlugin = getLoggerPlugin;
  }
});

// node_modules/@aws-sdk/middleware-logger/dist-cjs/index.js
var require_dist_cjs4 = __commonJS({
  "node_modules/@aws-sdk/middleware-logger/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_loggerMiddleware(), exports);
  }
});

// node_modules/@aws-sdk/middleware-recursion-detection/dist-cjs/index.js
var require_dist_cjs5 = __commonJS({
  "node_modules/@aws-sdk/middleware-recursion-detection/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRecursionDetectionPlugin = exports.addRecursionDetectionMiddlewareOptions = exports.recursionDetectionMiddleware = void 0;
    var protocol_http_1 = require_dist_cjs2();
    var TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
    var ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
    var ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
    var recursionDetectionMiddleware = (options) => (next) => async (args) => {
      const { request } = args;
      if (!protocol_http_1.HttpRequest.isInstance(request) || options.runtime !== "node" || request.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {
        return next(args);
      }
      const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
      const traceId = process.env[ENV_TRACE_ID];
      const nonEmptyString = (str) => typeof str === "string" && str.length > 0;
      if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
        request.headers[TRACE_ID_HEADER_NAME] = traceId;
      }
      return next({
        ...args,
        request
      });
    };
    exports.recursionDetectionMiddleware = recursionDetectionMiddleware;
    exports.addRecursionDetectionMiddlewareOptions = {
      step: "build",
      tags: ["RECURSION_DETECTION"],
      name: "recursionDetectionMiddleware",
      override: true,
      priority: "low"
    };
    var getRecursionDetectionPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add((0, exports.recursionDetectionMiddleware)(options), exports.addRecursionDetectionMiddlewareOptions);
      }
    });
    exports.getRecursionDetectionPlugin = getRecursionDetectionPlugin;
  }
});

// node_modules/@smithy/property-provider/dist-cjs/ProviderError.js
var require_ProviderError = __commonJS({
  "node_modules/@smithy/property-provider/dist-cjs/ProviderError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProviderError = void 0;
    var ProviderError = class _ProviderError extends Error {
      constructor(message, tryNextLink = true) {
        super(message);
        this.tryNextLink = tryNextLink;
        this.name = "ProviderError";
        Object.setPrototypeOf(this, _ProviderError.prototype);
      }
      static from(error, tryNextLink = true) {
        return Object.assign(new this(error.message, tryNextLink), error);
      }
    };
    exports.ProviderError = ProviderError;
  }
});

// node_modules/@smithy/property-provider/dist-cjs/CredentialsProviderError.js
var require_CredentialsProviderError = __commonJS({
  "node_modules/@smithy/property-provider/dist-cjs/CredentialsProviderError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CredentialsProviderError = void 0;
    var ProviderError_1 = require_ProviderError();
    var CredentialsProviderError = class _CredentialsProviderError extends ProviderError_1.ProviderError {
      constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "CredentialsProviderError";
        Object.setPrototypeOf(this, _CredentialsProviderError.prototype);
      }
    };
    exports.CredentialsProviderError = CredentialsProviderError;
  }
});

// node_modules/@smithy/property-provider/dist-cjs/TokenProviderError.js
var require_TokenProviderError = __commonJS({
  "node_modules/@smithy/property-provider/dist-cjs/TokenProviderError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TokenProviderError = void 0;
    var ProviderError_1 = require_ProviderError();
    var TokenProviderError = class _TokenProviderError extends ProviderError_1.ProviderError {
      constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "TokenProviderError";
        Object.setPrototypeOf(this, _TokenProviderError.prototype);
      }
    };
    exports.TokenProviderError = TokenProviderError;
  }
});

// node_modules/@smithy/property-provider/dist-cjs/chain.js
var require_chain = __commonJS({
  "node_modules/@smithy/property-provider/dist-cjs/chain.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.chain = void 0;
    var ProviderError_1 = require_ProviderError();
    var chain = (...providers) => async () => {
      if (providers.length === 0) {
        throw new ProviderError_1.ProviderError("No providers in chain");
      }
      let lastProviderError;
      for (const provider of providers) {
        try {
          const credentials = await provider();
          return credentials;
        } catch (err) {
          lastProviderError = err;
          if (err === null || err === void 0 ? void 0 : err.tryNextLink) {
            continue;
          }
          throw err;
        }
      }
      throw lastProviderError;
    };
    exports.chain = chain;
  }
});

// node_modules/@smithy/property-provider/dist-cjs/fromStatic.js
var require_fromStatic = __commonJS({
  "node_modules/@smithy/property-provider/dist-cjs/fromStatic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromStatic = void 0;
    var fromStatic = (staticValue) => () => Promise.resolve(staticValue);
    exports.fromStatic = fromStatic;
  }
});

// node_modules/@smithy/property-provider/dist-cjs/memoize.js
var require_memoize = __commonJS({
  "node_modules/@smithy/property-provider/dist-cjs/memoize.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.memoize = void 0;
    var memoize = (provider, isExpired, requiresRefresh) => {
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = async () => {
        if (!pending) {
          pending = provider();
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      };
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || (options === null || options === void 0 ? void 0 : options.forceRefresh)) {
            resolved = await coalesceProvider();
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || (options === null || options === void 0 ? void 0 : options.forceRefresh)) {
          resolved = await coalesceProvider();
        }
        if (isConstant) {
          return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider();
          return resolved;
        }
        return resolved;
      };
    };
    exports.memoize = memoize;
  }
});

// node_modules/@smithy/property-provider/dist-cjs/index.js
var require_dist_cjs6 = __commonJS({
  "node_modules/@smithy/property-provider/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_CredentialsProviderError(), exports);
    tslib_1.__exportStar(require_ProviderError(), exports);
    tslib_1.__exportStar(require_TokenProviderError(), exports);
    tslib_1.__exportStar(require_chain(), exports);
    tslib_1.__exportStar(require_fromStatic(), exports);
    tslib_1.__exportStar(require_memoize(), exports);
  }
});

// node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js
var tslib_es6_exports2 = {};
__export(tslib_es6_exports2, {
  __assign: () => __assign2,
  __asyncDelegator: () => __asyncDelegator2,
  __asyncGenerator: () => __asyncGenerator2,
  __asyncValues: () => __asyncValues2,
  __await: () => __await2,
  __awaiter: () => __awaiter2,
  __classPrivateFieldGet: () => __classPrivateFieldGet2,
  __classPrivateFieldSet: () => __classPrivateFieldSet2,
  __createBinding: () => __createBinding2,
  __decorate: () => __decorate2,
  __exportStar: () => __exportStar2,
  __extends: () => __extends2,
  __generator: () => __generator2,
  __importDefault: () => __importDefault2,
  __importStar: () => __importStar2,
  __makeTemplateObject: () => __makeTemplateObject2,
  __metadata: () => __metadata2,
  __param: () => __param2,
  __read: () => __read2,
  __rest: () => __rest2,
  __spread: () => __spread2,
  __spreadArrays: () => __spreadArrays2,
  __values: () => __values2
});
function __extends2(d, b) {
  extendStatics2(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest2(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate2(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param2(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata2(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter2(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator2(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding2(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
}
function __exportStar2(m, exports) {
  for (var p in m)
    if (p !== "default" && !exports.hasOwnProperty(p))
      exports[p] = m[p];
}
function __values2(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read2(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread2() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read2(arguments[i]));
  return ar;
}
function __spreadArrays2() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __await2(v) {
  return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
}
function __asyncGenerator2(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n])
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator2(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues2(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject2(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar2(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (Object.hasOwnProperty.call(mod, k))
        result[k] = mod[k];
  }
  result.default = mod;
  return result;
}
function __importDefault2(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet2(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet2(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics2, __assign2;
var init_tslib_es62 = __esm({
  "node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js"() {
    extendStatics2 = function(d, b) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (b2.hasOwnProperty(p))
            d2[p] = b2[p];
      };
      return extendStatics2(d, b);
    };
    __assign2 = function() {
      __assign2 = Object.assign || function __assign3(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign2.apply(this, arguments);
    };
  }
});

// node_modules/@aws-sdk/util-utf8-browser/dist-cjs/pureJs.js
var require_pureJs = __commonJS({
  "node_modules/@aws-sdk/util-utf8-browser/dist-cjs/pureJs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    var fromUtf8 = (input) => {
      const bytes = [];
      for (let i = 0, len = input.length; i < len; i++) {
        const value = input.charCodeAt(i);
        if (value < 128) {
          bytes.push(value);
        } else if (value < 2048) {
          bytes.push(value >> 6 | 192, value & 63 | 128);
        } else if (i + 1 < input.length && (value & 64512) === 55296 && (input.charCodeAt(i + 1) & 64512) === 56320) {
          const surrogatePair = 65536 + ((value & 1023) << 10) + (input.charCodeAt(++i) & 1023);
          bytes.push(surrogatePair >> 18 | 240, surrogatePair >> 12 & 63 | 128, surrogatePair >> 6 & 63 | 128, surrogatePair & 63 | 128);
        } else {
          bytes.push(value >> 12 | 224, value >> 6 & 63 | 128, value & 63 | 128);
        }
      }
      return Uint8Array.from(bytes);
    };
    exports.fromUtf8 = fromUtf8;
    var toUtf8 = (input) => {
      let decoded = "";
      for (let i = 0, len = input.length; i < len; i++) {
        const byte = input[i];
        if (byte < 128) {
          decoded += String.fromCharCode(byte);
        } else if (192 <= byte && byte < 224) {
          const nextByte = input[++i];
          decoded += String.fromCharCode((byte & 31) << 6 | nextByte & 63);
        } else if (240 <= byte && byte < 365) {
          const surrogatePair = [byte, input[++i], input[++i], input[++i]];
          const encoded = "%" + surrogatePair.map((byteValue) => byteValue.toString(16)).join("%");
          decoded += decodeURIComponent(encoded);
        } else {
          decoded += String.fromCharCode((byte & 15) << 12 | (input[++i] & 63) << 6 | input[++i] & 63);
        }
      }
      return decoded;
    };
    exports.toUtf8 = toUtf8;
  }
});

// node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js
var require_whatwgEncodingApi = __commonJS({
  "node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    function fromUtf8(input) {
      return new TextEncoder().encode(input);
    }
    exports.fromUtf8 = fromUtf8;
    function toUtf8(input) {
      return new TextDecoder("utf-8").decode(input);
    }
    exports.toUtf8 = toUtf8;
  }
});

// node_modules/@aws-sdk/util-utf8-browser/dist-cjs/index.js
var require_dist_cjs7 = __commonJS({
  "node_modules/@aws-sdk/util-utf8-browser/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    var pureJs_1 = require_pureJs();
    var whatwgEncodingApi_1 = require_whatwgEncodingApi();
    var fromUtf8 = (input) => typeof TextEncoder === "function" ? (0, whatwgEncodingApi_1.fromUtf8)(input) : (0, pureJs_1.fromUtf8)(input);
    exports.fromUtf8 = fromUtf8;
    var toUtf8 = (input) => typeof TextDecoder === "function" ? (0, whatwgEncodingApi_1.toUtf8)(input) : (0, pureJs_1.toUtf8)(input);
    exports.toUtf8 = toUtf8;
  }
});

// node_modules/@aws-crypto/util/build/convertToBuffer.js
var require_convertToBuffer = __commonJS({
  "node_modules/@aws-crypto/util/build/convertToBuffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertToBuffer = void 0;
    var util_utf8_browser_1 = require_dist_cjs7();
    var fromUtf8 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
      return Buffer.from(input, "utf8");
    } : util_utf8_browser_1.fromUtf8;
    function convertToBuffer(data) {
      if (data instanceof Uint8Array)
        return data;
      if (typeof data === "string") {
        return fromUtf8(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }
    exports.convertToBuffer = convertToBuffer;
  }
});

// node_modules/@aws-crypto/util/build/isEmptyData.js
var require_isEmptyData = __commonJS({
  "node_modules/@aws-crypto/util/build/isEmptyData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmptyData = void 0;
    function isEmptyData(data) {
      if (typeof data === "string") {
        return data.length === 0;
      }
      return data.byteLength === 0;
    }
    exports.isEmptyData = isEmptyData;
  }
});

// node_modules/@aws-crypto/util/build/numToUint8.js
var require_numToUint8 = __commonJS({
  "node_modules/@aws-crypto/util/build/numToUint8.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.numToUint8 = void 0;
    function numToUint8(num) {
      return new Uint8Array([
        (num & 4278190080) >> 24,
        (num & 16711680) >> 16,
        (num & 65280) >> 8,
        num & 255
      ]);
    }
    exports.numToUint8 = numToUint8;
  }
});

// node_modules/@aws-crypto/util/build/uint32ArrayFrom.js
var require_uint32ArrayFrom = __commonJS({
  "node_modules/@aws-crypto/util/build/uint32ArrayFrom.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uint32ArrayFrom = void 0;
    function uint32ArrayFrom(a_lookUpTable) {
      if (!Uint32Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while (a_index < a_lookUpTable.length) {
          return_array[a_index] = a_lookUpTable[a_index];
          a_index += 1;
        }
        return return_array;
      }
      return Uint32Array.from(a_lookUpTable);
    }
    exports.uint32ArrayFrom = uint32ArrayFrom;
  }
});

// node_modules/@aws-crypto/util/build/index.js
var require_build = __commonJS({
  "node_modules/@aws-crypto/util/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = void 0;
    var convertToBuffer_1 = require_convertToBuffer();
    Object.defineProperty(exports, "convertToBuffer", { enumerable: true, get: function() {
      return convertToBuffer_1.convertToBuffer;
    } });
    var isEmptyData_1 = require_isEmptyData();
    Object.defineProperty(exports, "isEmptyData", { enumerable: true, get: function() {
      return isEmptyData_1.isEmptyData;
    } });
    var numToUint8_1 = require_numToUint8();
    Object.defineProperty(exports, "numToUint8", { enumerable: true, get: function() {
      return numToUint8_1.numToUint8;
    } });
    var uint32ArrayFrom_1 = require_uint32ArrayFrom();
    Object.defineProperty(exports, "uint32ArrayFrom", { enumerable: true, get: function() {
      return uint32ArrayFrom_1.uint32ArrayFrom;
    } });
  }
});

// node_modules/@aws-crypto/crc32/build/aws_crc32.js
var require_aws_crc32 = __commonJS({
  "node_modules/@aws-crypto/crc32/build/aws_crc32.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsCrc32 = void 0;
    var tslib_1 = (init_tslib_es62(), __toCommonJS(tslib_es6_exports2));
    var util_1 = require_build();
    var index_1 = require_build2();
    var AwsCrc32 = (
      /** @class */
      function() {
        function AwsCrc322() {
          this.crc32 = new index_1.Crc32();
        }
        AwsCrc322.prototype.update = function(toHash) {
          if ((0, util_1.isEmptyData)(toHash))
            return;
          this.crc32.update((0, util_1.convertToBuffer)(toHash));
        };
        AwsCrc322.prototype.digest = function() {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              return [2, (0, util_1.numToUint8)(this.crc32.digest())];
            });
          });
        };
        AwsCrc322.prototype.reset = function() {
          this.crc32 = new index_1.Crc32();
        };
        return AwsCrc322;
      }()
    );
    exports.AwsCrc32 = AwsCrc32;
  }
});

// node_modules/@aws-crypto/crc32/build/index.js
var require_build2 = __commonJS({
  "node_modules/@aws-crypto/crc32/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsCrc32 = exports.Crc32 = exports.crc32 = void 0;
    var tslib_1 = (init_tslib_es62(), __toCommonJS(tslib_es6_exports2));
    var util_1 = require_build();
    function crc32(data) {
      return new Crc32().update(data).digest();
    }
    exports.crc32 = crc32;
    var Crc32 = (
      /** @class */
      function() {
        function Crc322() {
          this.checksum = 4294967295;
        }
        Crc322.prototype.update = function(data) {
          var e_1, _a;
          try {
            for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
              var byte = data_1_1.value;
              this.checksum = this.checksum >>> 8 ^ lookupTable[(this.checksum ^ byte) & 255];
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (data_1_1 && !data_1_1.done && (_a = data_1.return))
                _a.call(data_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          return this;
        };
        Crc322.prototype.digest = function() {
          return (this.checksum ^ 4294967295) >>> 0;
        };
        return Crc322;
      }()
    );
    exports.Crc32 = Crc32;
    var a_lookUpTable = [
      0,
      1996959894,
      3993919788,
      2567524794,
      124634137,
      1886057615,
      3915621685,
      2657392035,
      249268274,
      2044508324,
      3772115230,
      2547177864,
      162941995,
      2125561021,
      3887607047,
      2428444049,
      498536548,
      1789927666,
      4089016648,
      2227061214,
      450548861,
      1843258603,
      4107580753,
      2211677639,
      325883990,
      1684777152,
      4251122042,
      2321926636,
      335633487,
      1661365465,
      4195302755,
      2366115317,
      997073096,
      1281953886,
      3579855332,
      2724688242,
      1006888145,
      1258607687,
      3524101629,
      2768942443,
      901097722,
      1119000684,
      3686517206,
      2898065728,
      853044451,
      1172266101,
      3705015759,
      2882616665,
      651767980,
      1373503546,
      3369554304,
      3218104598,
      565507253,
      1454621731,
      3485111705,
      3099436303,
      671266974,
      1594198024,
      3322730930,
      2970347812,
      795835527,
      1483230225,
      3244367275,
      3060149565,
      1994146192,
      31158534,
      2563907772,
      4023717930,
      1907459465,
      112637215,
      2680153253,
      3904427059,
      2013776290,
      251722036,
      2517215374,
      3775830040,
      2137656763,
      141376813,
      2439277719,
      3865271297,
      1802195444,
      476864866,
      2238001368,
      4066508878,
      1812370925,
      453092731,
      2181625025,
      4111451223,
      1706088902,
      314042704,
      2344532202,
      4240017532,
      1658658271,
      366619977,
      2362670323,
      4224994405,
      1303535960,
      984961486,
      2747007092,
      3569037538,
      1256170817,
      1037604311,
      2765210733,
      3554079995,
      1131014506,
      879679996,
      2909243462,
      3663771856,
      1141124467,
      855842277,
      2852801631,
      3708648649,
      1342533948,
      654459306,
      3188396048,
      3373015174,
      1466479909,
      544179635,
      3110523913,
      3462522015,
      1591671054,
      702138776,
      2966460450,
      3352799412,
      1504918807,
      783551873,
      3082640443,
      3233442989,
      3988292384,
      2596254646,
      62317068,
      1957810842,
      3939845945,
      2647816111,
      81470997,
      1943803523,
      3814918930,
      2489596804,
      225274430,
      2053790376,
      3826175755,
      2466906013,
      167816743,
      2097651377,
      4027552580,
      2265490386,
      503444072,
      1762050814,
      4150417245,
      2154129355,
      426522225,
      1852507879,
      4275313526,
      2312317920,
      282753626,
      1742555852,
      4189708143,
      2394877945,
      397917763,
      1622183637,
      3604390888,
      2714866558,
      953729732,
      1340076626,
      3518719985,
      2797360999,
      1068828381,
      1219638859,
      3624741850,
      2936675148,
      906185462,
      1090812512,
      3747672003,
      2825379669,
      829329135,
      1181335161,
      3412177804,
      3160834842,
      628085408,
      1382605366,
      3423369109,
      3138078467,
      570562233,
      1426400815,
      3317316542,
      2998733608,
      733239954,
      1555261956,
      3268935591,
      3050360625,
      752459403,
      1541320221,
      2607071920,
      3965973030,
      1969922972,
      40735498,
      2617837225,
      3943577151,
      1913087877,
      83908371,
      2512341634,
      3803740692,
      2075208622,
      213261112,
      2463272603,
      3855990285,
      2094854071,
      198958881,
      2262029012,
      4057260610,
      1759359992,
      534414190,
      2176718541,
      4139329115,
      1873836001,
      414664567,
      2282248934,
      4279200368,
      1711684554,
      285281116,
      2405801727,
      4167216745,
      1634467795,
      376229701,
      2685067896,
      3608007406,
      1308918612,
      956543938,
      2808555105,
      3495958263,
      1231636301,
      1047427035,
      2932959818,
      3654703836,
      1088359270,
      936918e3,
      2847714899,
      3736837829,
      1202900863,
      817233897,
      3183342108,
      3401237130,
      1404277552,
      615818150,
      3134207493,
      3453421203,
      1423857449,
      601450431,
      3009837614,
      3294710456,
      1567103746,
      711928724,
      3020668471,
      3272380065,
      1510334235,
      755167117
    ];
    var lookupTable = (0, util_1.uint32ArrayFrom)(a_lookUpTable);
    var aws_crc32_1 = require_aws_crc32();
    Object.defineProperty(exports, "AwsCrc32", { enumerable: true, get: function() {
      return aws_crc32_1.AwsCrc32;
    } });
  }
});

// node_modules/@smithy/util-hex-encoding/dist-cjs/index.js
var require_dist_cjs8 = __commonJS({
  "node_modules/@smithy/util-hex-encoding/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toHex = exports.fromHex = void 0;
    var SHORT_TO_HEX = {};
    var HEX_TO_SHORT = {};
    for (let i = 0; i < 256; i++) {
      let encodedByte = i.toString(16).toLowerCase();
      if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
      }
      SHORT_TO_HEX[i] = encodedByte;
      HEX_TO_SHORT[encodedByte] = i;
    }
    function fromHex(encoded) {
      if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
      }
      const out = new Uint8Array(encoded.length / 2);
      for (let i = 0; i < encoded.length; i += 2) {
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
          out[i / 2] = HEX_TO_SHORT[encodedByte];
        } else {
          throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
      }
      return out;
    }
    exports.fromHex = fromHex;
    function toHex(bytes) {
      let out = "";
      for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
      }
      return out;
    }
    exports.toHex = toHex;
  }
});

// node_modules/@smithy/eventstream-codec/dist-cjs/Int64.js
var require_Int64 = __commonJS({
  "node_modules/@smithy/eventstream-codec/dist-cjs/Int64.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Int64 = void 0;
    var util_hex_encoding_1 = require_dist_cjs8();
    var Int64 = class _Int64 {
      constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
          throw new Error("Int64 buffers must be exactly 8 bytes");
        }
      }
      static fromNumber(number) {
        if (number > 9223372036854776e3 || number < -9223372036854776e3) {
          throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {
          bytes[i] = remaining;
        }
        if (number < 0) {
          negate(bytes);
        }
        return new _Int64(bytes);
      }
      valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 128;
        if (negative) {
          negate(bytes);
        }
        return parseInt((0, util_hex_encoding_1.toHex)(bytes), 16) * (negative ? -1 : 1);
      }
      toString() {
        return String(this.valueOf());
      }
    };
    exports.Int64 = Int64;
    function negate(bytes) {
      for (let i = 0; i < 8; i++) {
        bytes[i] ^= 255;
      }
      for (let i = 7; i > -1; i--) {
        bytes[i]++;
        if (bytes[i] !== 0)
          break;
      }
    }
  }
});

// node_modules/@smithy/eventstream-codec/dist-cjs/HeaderMarshaller.js
var require_HeaderMarshaller = __commonJS({
  "node_modules/@smithy/eventstream-codec/dist-cjs/HeaderMarshaller.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HeaderMarshaller = void 0;
    var util_hex_encoding_1 = require_dist_cjs8();
    var Int64_1 = require_Int64();
    var HeaderMarshaller = class {
      constructor(toUtf8, fromUtf8) {
        this.toUtf8 = toUtf8;
        this.fromUtf8 = fromUtf8;
      }
      format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
          const bytes = this.fromUtf8(headerName);
          chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
          out.set(chunk, position);
          position += chunk.byteLength;
        }
        return out;
      }
      formatHeaderValue(header) {
        switch (header.type) {
          case "boolean":
            return Uint8Array.from([header.value ? 0 : 1]);
          case "byte":
            return Uint8Array.from([2, header.value]);
          case "short":
            const shortView = new DataView(new ArrayBuffer(3));
            shortView.setUint8(0, 3);
            shortView.setInt16(1, header.value, false);
            return new Uint8Array(shortView.buffer);
          case "integer":
            const intView = new DataView(new ArrayBuffer(5));
            intView.setUint8(0, 4);
            intView.setInt32(1, header.value, false);
            return new Uint8Array(intView.buffer);
          case "long":
            const longBytes = new Uint8Array(9);
            longBytes[0] = 5;
            longBytes.set(header.value.bytes, 1);
            return longBytes;
          case "binary":
            const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
            binView.setUint8(0, 6);
            binView.setUint16(1, header.value.byteLength, false);
            const binBytes = new Uint8Array(binView.buffer);
            binBytes.set(header.value, 3);
            return binBytes;
          case "string":
            const utf8Bytes = this.fromUtf8(header.value);
            const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
            strView.setUint8(0, 7);
            strView.setUint16(1, utf8Bytes.byteLength, false);
            const strBytes = new Uint8Array(strView.buffer);
            strBytes.set(utf8Bytes, 3);
            return strBytes;
          case "timestamp":
            const tsBytes = new Uint8Array(9);
            tsBytes[0] = 8;
            tsBytes.set(Int64_1.Int64.fromNumber(header.value.valueOf()).bytes, 1);
            return tsBytes;
          case "uuid":
            if (!UUID_PATTERN.test(header.value)) {
              throw new Error(`Invalid UUID received: ${header.value}`);
            }
            const uuidBytes = new Uint8Array(17);
            uuidBytes[0] = 9;
            uuidBytes.set((0, util_hex_encoding_1.fromHex)(header.value.replace(/\-/g, "")), 1);
            return uuidBytes;
        }
      }
      parse(headers) {
        const out = {};
        let position = 0;
        while (position < headers.byteLength) {
          const nameLength = headers.getUint8(position++);
          const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
          position += nameLength;
          switch (headers.getUint8(position++)) {
            case 0:
              out[name] = {
                type: BOOLEAN_TAG,
                value: true
              };
              break;
            case 1:
              out[name] = {
                type: BOOLEAN_TAG,
                value: false
              };
              break;
            case 2:
              out[name] = {
                type: BYTE_TAG,
                value: headers.getInt8(position++)
              };
              break;
            case 3:
              out[name] = {
                type: SHORT_TAG,
                value: headers.getInt16(position, false)
              };
              position += 2;
              break;
            case 4:
              out[name] = {
                type: INT_TAG,
                value: headers.getInt32(position, false)
              };
              position += 4;
              break;
            case 5:
              out[name] = {
                type: LONG_TAG,
                value: new Int64_1.Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
              };
              position += 8;
              break;
            case 6:
              const binaryLength = headers.getUint16(position, false);
              position += 2;
              out[name] = {
                type: BINARY_TAG,
                value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
              };
              position += binaryLength;
              break;
            case 7:
              const stringLength = headers.getUint16(position, false);
              position += 2;
              out[name] = {
                type: STRING_TAG,
                value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
              };
              position += stringLength;
              break;
            case 8:
              out[name] = {
                type: TIMESTAMP_TAG,
                value: new Date(new Int64_1.Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
              };
              position += 8;
              break;
            case 9:
              const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
              position += 16;
              out[name] = {
                type: UUID_TAG,
                value: `${(0, util_hex_encoding_1.toHex)(uuidBytes.subarray(0, 4))}-${(0, util_hex_encoding_1.toHex)(uuidBytes.subarray(4, 6))}-${(0, util_hex_encoding_1.toHex)(uuidBytes.subarray(6, 8))}-${(0, util_hex_encoding_1.toHex)(uuidBytes.subarray(8, 10))}-${(0, util_hex_encoding_1.toHex)(uuidBytes.subarray(10))}`
              };
              break;
            default:
              throw new Error(`Unrecognized header type tag`);
          }
        }
        return out;
      }
    };
    exports.HeaderMarshaller = HeaderMarshaller;
    var HEADER_VALUE_TYPE;
    (function(HEADER_VALUE_TYPE2) {
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolTrue"] = 0] = "boolTrue";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolFalse"] = 1] = "boolFalse";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byte"] = 2] = "byte";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["short"] = 3] = "short";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["integer"] = 4] = "integer";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["long"] = 5] = "long";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byteArray"] = 6] = "byteArray";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["string"] = 7] = "string";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["timestamp"] = 8] = "timestamp";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["uuid"] = 9] = "uuid";
    })(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
    var BOOLEAN_TAG = "boolean";
    var BYTE_TAG = "byte";
    var SHORT_TAG = "short";
    var INT_TAG = "integer";
    var LONG_TAG = "long";
    var BINARY_TAG = "binary";
    var STRING_TAG = "string";
    var TIMESTAMP_TAG = "timestamp";
    var UUID_TAG = "uuid";
    var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
  }
});

// node_modules/@smithy/eventstream-codec/dist-cjs/splitMessage.js
var require_splitMessage = __commonJS({
  "node_modules/@smithy/eventstream-codec/dist-cjs/splitMessage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.splitMessage = void 0;
    var crc32_1 = require_build2();
    var PRELUDE_MEMBER_LENGTH = 4;
    var PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
    var CHECKSUM_LENGTH = 4;
    var MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
    function splitMessage({ byteLength, byteOffset, buffer }) {
      if (byteLength < MINIMUM_MESSAGE_LENGTH) {
        throw new Error("Provided message too short to accommodate event stream message overhead");
      }
      const view = new DataView(buffer, byteOffset, byteLength);
      const messageLength = view.getUint32(0, false);
      if (byteLength !== messageLength) {
        throw new Error("Reported message length does not match received message length");
      }
      const headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
      const expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
      const expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);
      const checksummer = new crc32_1.Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
      if (expectedPreludeChecksum !== checksummer.digest()) {
        throw new Error(`The prelude checksum specified in the message (${expectedPreludeChecksum}) does not match the calculated CRC32 checksum (${checksummer.digest()})`);
      }
      checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
      if (expectedMessageChecksum !== checksummer.digest()) {
        throw new Error(`The message checksum (${checksummer.digest()}) did not match the expected value of ${expectedMessageChecksum}`);
      }
      return {
        headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
        body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH))
      };
    }
    exports.splitMessage = splitMessage;
  }
});

// node_modules/@smithy/eventstream-codec/dist-cjs/EventStreamCodec.js
var require_EventStreamCodec = __commonJS({
  "node_modules/@smithy/eventstream-codec/dist-cjs/EventStreamCodec.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EventStreamCodec = void 0;
    var crc32_1 = require_build2();
    var HeaderMarshaller_1 = require_HeaderMarshaller();
    var splitMessage_1 = require_splitMessage();
    var EventStreamCodec = class {
      constructor(toUtf8, fromUtf8) {
        this.headerMarshaller = new HeaderMarshaller_1.HeaderMarshaller(toUtf8, fromUtf8);
        this.messageBuffer = [];
        this.isEndOfStream = false;
      }
      feed(message) {
        this.messageBuffer.push(this.decode(message));
      }
      endOfStream() {
        this.isEndOfStream = true;
      }
      getMessage() {
        const message = this.messageBuffer.pop();
        const isEndOfStream = this.isEndOfStream;
        return {
          getMessage() {
            return message;
          },
          isEndOfStream() {
            return isEndOfStream;
          }
        };
      }
      getAvailableMessages() {
        const messages = this.messageBuffer;
        this.messageBuffer = [];
        const isEndOfStream = this.isEndOfStream;
        return {
          getMessages() {
            return messages;
          },
          isEndOfStream() {
            return isEndOfStream;
          }
        };
      }
      encode({ headers: rawHeaders, body }) {
        const headers = this.headerMarshaller.format(rawHeaders);
        const length = headers.byteLength + body.byteLength + 16;
        const out = new Uint8Array(length);
        const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
        const checksum = new crc32_1.Crc32();
        view.setUint32(0, length, false);
        view.setUint32(4, headers.byteLength, false);
        view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
        out.set(headers, 12);
        out.set(body, headers.byteLength + 12);
        view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
        return out;
      }
      decode(message) {
        const { headers, body } = (0, splitMessage_1.splitMessage)(message);
        return { headers: this.headerMarshaller.parse(headers), body };
      }
      formatHeaders(rawHeaders) {
        return this.headerMarshaller.format(rawHeaders);
      }
    };
    exports.EventStreamCodec = EventStreamCodec;
  }
});

// node_modules/@smithy/eventstream-codec/dist-cjs/Message.js
var require_Message = __commonJS({
  "node_modules/@smithy/eventstream-codec/dist-cjs/Message.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/eventstream-codec/dist-cjs/MessageDecoderStream.js
var require_MessageDecoderStream = __commonJS({
  "node_modules/@smithy/eventstream-codec/dist-cjs/MessageDecoderStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MessageDecoderStream = void 0;
    var MessageDecoderStream = class {
      constructor(options) {
        this.options = options;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (const bytes of this.options.inputStream) {
          const decoded = this.options.decoder.decode(bytes);
          yield decoded;
        }
      }
    };
    exports.MessageDecoderStream = MessageDecoderStream;
  }
});

// node_modules/@smithy/eventstream-codec/dist-cjs/MessageEncoderStream.js
var require_MessageEncoderStream = __commonJS({
  "node_modules/@smithy/eventstream-codec/dist-cjs/MessageEncoderStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MessageEncoderStream = void 0;
    var MessageEncoderStream = class {
      constructor(options) {
        this.options = options;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (const msg of this.options.messageStream) {
          const encoded = this.options.encoder.encode(msg);
          yield encoded;
        }
        if (this.options.includeEndFrame) {
          yield new Uint8Array(0);
        }
      }
    };
    exports.MessageEncoderStream = MessageEncoderStream;
  }
});

// node_modules/@smithy/eventstream-codec/dist-cjs/SmithyMessageDecoderStream.js
var require_SmithyMessageDecoderStream = __commonJS({
  "node_modules/@smithy/eventstream-codec/dist-cjs/SmithyMessageDecoderStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SmithyMessageDecoderStream = void 0;
    var SmithyMessageDecoderStream = class {
      constructor(options) {
        this.options = options;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (const message of this.options.messageStream) {
          const deserialized = await this.options.deserializer(message);
          if (deserialized === void 0)
            continue;
          yield deserialized;
        }
      }
    };
    exports.SmithyMessageDecoderStream = SmithyMessageDecoderStream;
  }
});

// node_modules/@smithy/eventstream-codec/dist-cjs/SmithyMessageEncoderStream.js
var require_SmithyMessageEncoderStream = __commonJS({
  "node_modules/@smithy/eventstream-codec/dist-cjs/SmithyMessageEncoderStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SmithyMessageEncoderStream = void 0;
    var SmithyMessageEncoderStream = class {
      constructor(options) {
        this.options = options;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (const chunk of this.options.inputStream) {
          const payloadBuf = this.options.serializer(chunk);
          yield payloadBuf;
        }
      }
    };
    exports.SmithyMessageEncoderStream = SmithyMessageEncoderStream;
  }
});

// node_modules/@smithy/eventstream-codec/dist-cjs/index.js
var require_dist_cjs9 = __commonJS({
  "node_modules/@smithy/eventstream-codec/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_EventStreamCodec(), exports);
    tslib_1.__exportStar(require_HeaderMarshaller(), exports);
    tslib_1.__exportStar(require_Int64(), exports);
    tslib_1.__exportStar(require_Message(), exports);
    tslib_1.__exportStar(require_MessageDecoderStream(), exports);
    tslib_1.__exportStar(require_MessageEncoderStream(), exports);
    tslib_1.__exportStar(require_SmithyMessageDecoderStream(), exports);
    tslib_1.__exportStar(require_SmithyMessageEncoderStream(), exports);
  }
});

// node_modules/@smithy/util-middleware/dist-cjs/getSmithyContext.js
var require_getSmithyContext = __commonJS({
  "node_modules/@smithy/util-middleware/dist-cjs/getSmithyContext.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSmithyContext = void 0;
    var types_1 = require_dist_cjs();
    var getSmithyContext = (context) => context[types_1.SMITHY_CONTEXT_KEY] || (context[types_1.SMITHY_CONTEXT_KEY] = {});
    exports.getSmithyContext = getSmithyContext;
  }
});

// node_modules/@smithy/util-middleware/dist-cjs/normalizeProvider.js
var require_normalizeProvider = __commonJS({
  "node_modules/@smithy/util-middleware/dist-cjs/normalizeProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.normalizeProvider = void 0;
    var normalizeProvider = (input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    };
    exports.normalizeProvider = normalizeProvider;
  }
});

// node_modules/@smithy/util-middleware/dist-cjs/index.js
var require_dist_cjs10 = __commonJS({
  "node_modules/@smithy/util-middleware/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_getSmithyContext(), exports);
    tslib_1.__exportStar(require_normalizeProvider(), exports);
  }
});

// node_modules/@smithy/is-array-buffer/dist-cjs/index.js
var require_dist_cjs11 = __commonJS({
  "node_modules/@smithy/is-array-buffer/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isArrayBuffer = void 0;
    var isArrayBuffer = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
    exports.isArrayBuffer = isArrayBuffer;
  }
});

// node_modules/@smithy/util-buffer-from/dist-cjs/index.js
var require_dist_cjs12 = __commonJS({
  "node_modules/@smithy/util-buffer-from/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromString = exports.fromArrayBuffer = void 0;
    var is_array_buffer_1 = require_dist_cjs11();
    var buffer_1 = require("buffer");
    var fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {
      if (!(0, is_array_buffer_1.isArrayBuffer)(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
      }
      return buffer_1.Buffer.from(input, offset, length);
    };
    exports.fromArrayBuffer = fromArrayBuffer;
    var fromString = (input, encoding) => {
      if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
      }
      return encoding ? buffer_1.Buffer.from(input, encoding) : buffer_1.Buffer.from(input);
    };
    exports.fromString = fromString;
  }
});

// node_modules/@smithy/util-utf8/dist-cjs/fromUtf8.js
var require_fromUtf8 = __commonJS({
  "node_modules/@smithy/util-utf8/dist-cjs/fromUtf8.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromUtf8 = void 0;
    var util_buffer_from_1 = require_dist_cjs12();
    var fromUtf8 = (input) => {
      const buf = (0, util_buffer_from_1.fromString)(input, "utf8");
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    };
    exports.fromUtf8 = fromUtf8;
  }
});

// node_modules/@smithy/util-utf8/dist-cjs/toUint8Array.js
var require_toUint8Array = __commonJS({
  "node_modules/@smithy/util-utf8/dist-cjs/toUint8Array.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUint8Array = void 0;
    var fromUtf8_1 = require_fromUtf8();
    var toUint8Array = (data) => {
      if (typeof data === "string") {
        return (0, fromUtf8_1.fromUtf8)(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    };
    exports.toUint8Array = toUint8Array;
  }
});

// node_modules/@smithy/util-utf8/dist-cjs/toUtf8.js
var require_toUtf8 = __commonJS({
  "node_modules/@smithy/util-utf8/dist-cjs/toUtf8.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = void 0;
    var util_buffer_from_1 = require_dist_cjs12();
    var toUtf8 = (input) => (0, util_buffer_from_1.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
    exports.toUtf8 = toUtf8;
  }
});

// node_modules/@smithy/util-utf8/dist-cjs/index.js
var require_dist_cjs13 = __commonJS({
  "node_modules/@smithy/util-utf8/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_fromUtf8(), exports);
    tslib_1.__exportStar(require_toUint8Array(), exports);
    tslib_1.__exportStar(require_toUtf8(), exports);
  }
});

// node_modules/@smithy/signature-v4/dist-cjs/constants.js
var require_constants = __commonJS({
  "node_modules/@smithy/signature-v4/dist-cjs/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MAX_PRESIGNED_TTL = exports.KEY_TYPE_IDENTIFIER = exports.MAX_CACHE_SIZE = exports.UNSIGNED_PAYLOAD = exports.EVENT_ALGORITHM_IDENTIFIER = exports.ALGORITHM_IDENTIFIER_V4A = exports.ALGORITHM_IDENTIFIER = exports.UNSIGNABLE_PATTERNS = exports.SEC_HEADER_PATTERN = exports.PROXY_HEADER_PATTERN = exports.ALWAYS_UNSIGNABLE_HEADERS = exports.HOST_HEADER = exports.TOKEN_HEADER = exports.SHA256_HEADER = exports.SIGNATURE_HEADER = exports.GENERATED_HEADERS = exports.DATE_HEADER = exports.AMZ_DATE_HEADER = exports.AUTH_HEADER = exports.REGION_SET_PARAM = exports.TOKEN_QUERY_PARAM = exports.SIGNATURE_QUERY_PARAM = exports.EXPIRES_QUERY_PARAM = exports.SIGNED_HEADERS_QUERY_PARAM = exports.AMZ_DATE_QUERY_PARAM = exports.CREDENTIAL_QUERY_PARAM = exports.ALGORITHM_QUERY_PARAM = void 0;
    exports.ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
    exports.CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
    exports.AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
    exports.SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
    exports.EXPIRES_QUERY_PARAM = "X-Amz-Expires";
    exports.SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
    exports.TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
    exports.REGION_SET_PARAM = "X-Amz-Region-Set";
    exports.AUTH_HEADER = "authorization";
    exports.AMZ_DATE_HEADER = exports.AMZ_DATE_QUERY_PARAM.toLowerCase();
    exports.DATE_HEADER = "date";
    exports.GENERATED_HEADERS = [exports.AUTH_HEADER, exports.AMZ_DATE_HEADER, exports.DATE_HEADER];
    exports.SIGNATURE_HEADER = exports.SIGNATURE_QUERY_PARAM.toLowerCase();
    exports.SHA256_HEADER = "x-amz-content-sha256";
    exports.TOKEN_HEADER = exports.TOKEN_QUERY_PARAM.toLowerCase();
    exports.HOST_HEADER = "host";
    exports.ALWAYS_UNSIGNABLE_HEADERS = {
      authorization: true,
      "cache-control": true,
      connection: true,
      expect: true,
      from: true,
      "keep-alive": true,
      "max-forwards": true,
      pragma: true,
      referer: true,
      te: true,
      trailer: true,
      "transfer-encoding": true,
      upgrade: true,
      "user-agent": true,
      "x-amzn-trace-id": true
    };
    exports.PROXY_HEADER_PATTERN = /^proxy-/;
    exports.SEC_HEADER_PATTERN = /^sec-/;
    exports.UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];
    exports.ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
    exports.ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
    exports.EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
    exports.UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
    exports.MAX_CACHE_SIZE = 50;
    exports.KEY_TYPE_IDENTIFIER = "aws4_request";
    exports.MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
  }
});

// node_modules/@smithy/signature-v4/dist-cjs/credentialDerivation.js
var require_credentialDerivation = __commonJS({
  "node_modules/@smithy/signature-v4/dist-cjs/credentialDerivation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.clearCredentialCache = exports.getSigningKey = exports.createScope = void 0;
    var util_hex_encoding_1 = require_dist_cjs8();
    var util_utf8_1 = require_dist_cjs13();
    var constants_1 = require_constants();
    var signingKeyCache = {};
    var cacheQueue = [];
    var createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${constants_1.KEY_TYPE_IDENTIFIER}`;
    exports.createScope = createScope;
    var getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
      const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
      const cacheKey = `${shortDate}:${region}:${service}:${(0, util_hex_encoding_1.toHex)(credsHash)}:${credentials.sessionToken}`;
      if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
      }
      cacheQueue.push(cacheKey);
      while (cacheQueue.length > constants_1.MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
      }
      let key = `AWS4${credentials.secretAccessKey}`;
      for (const signable of [shortDate, region, service, constants_1.KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
      }
      return signingKeyCache[cacheKey] = key;
    };
    exports.getSigningKey = getSigningKey;
    var clearCredentialCache = () => {
      cacheQueue.length = 0;
      Object.keys(signingKeyCache).forEach((cacheKey) => {
        delete signingKeyCache[cacheKey];
      });
    };
    exports.clearCredentialCache = clearCredentialCache;
    var hmac = (ctor, secret, data) => {
      const hash = new ctor(secret);
      hash.update((0, util_utf8_1.toUint8Array)(data));
      return hash.digest();
    };
  }
});

// node_modules/@smithy/signature-v4/dist-cjs/getCanonicalHeaders.js
var require_getCanonicalHeaders = __commonJS({
  "node_modules/@smithy/signature-v4/dist-cjs/getCanonicalHeaders.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getCanonicalHeaders = void 0;
    var constants_1 = require_constants();
    var getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
      const canonical = {};
      for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == void 0) {
          continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in constants_1.ALWAYS_UNSIGNABLE_HEADERS || (unsignableHeaders === null || unsignableHeaders === void 0 ? void 0 : unsignableHeaders.has(canonicalHeaderName)) || constants_1.PROXY_HEADER_PATTERN.test(canonicalHeaderName) || constants_1.SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
          if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
            continue;
          }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
      }
      return canonical;
    };
    exports.getCanonicalHeaders = getCanonicalHeaders;
  }
});

// node_modules/@smithy/util-uri-escape/dist-cjs/escape-uri.js
var require_escape_uri = __commonJS({
  "node_modules/@smithy/util-uri-escape/dist-cjs/escape-uri.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.escapeUri = void 0;
    var escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
    exports.escapeUri = escapeUri;
    var hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;
  }
});

// node_modules/@smithy/util-uri-escape/dist-cjs/escape-uri-path.js
var require_escape_uri_path = __commonJS({
  "node_modules/@smithy/util-uri-escape/dist-cjs/escape-uri-path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.escapeUriPath = void 0;
    var escape_uri_1 = require_escape_uri();
    var escapeUriPath = (uri) => uri.split("/").map(escape_uri_1.escapeUri).join("/");
    exports.escapeUriPath = escapeUriPath;
  }
});

// node_modules/@smithy/util-uri-escape/dist-cjs/index.js
var require_dist_cjs14 = __commonJS({
  "node_modules/@smithy/util-uri-escape/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_escape_uri(), exports);
    tslib_1.__exportStar(require_escape_uri_path(), exports);
  }
});

// node_modules/@smithy/signature-v4/dist-cjs/getCanonicalQuery.js
var require_getCanonicalQuery = __commonJS({
  "node_modules/@smithy/signature-v4/dist-cjs/getCanonicalQuery.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getCanonicalQuery = void 0;
    var util_uri_escape_1 = require_dist_cjs14();
    var constants_1 = require_constants();
    var getCanonicalQuery = ({ query = {} }) => {
      const keys = [];
      const serialized = {};
      for (const key of Object.keys(query).sort()) {
        if (key.toLowerCase() === constants_1.SIGNATURE_HEADER) {
          continue;
        }
        keys.push(key);
        const value = query[key];
        if (typeof value === "string") {
          serialized[key] = `${(0, util_uri_escape_1.escapeUri)(key)}=${(0, util_uri_escape_1.escapeUri)(value)}`;
        } else if (Array.isArray(value)) {
          serialized[key] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${(0, util_uri_escape_1.escapeUri)(key)}=${(0, util_uri_escape_1.escapeUri)(value2)}`]), []).sort().join("&");
        }
      }
      return keys.map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
    };
    exports.getCanonicalQuery = getCanonicalQuery;
  }
});

// node_modules/@smithy/signature-v4/dist-cjs/getPayloadHash.js
var require_getPayloadHash = __commonJS({
  "node_modules/@smithy/signature-v4/dist-cjs/getPayloadHash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getPayloadHash = void 0;
    var is_array_buffer_1 = require_dist_cjs11();
    var util_hex_encoding_1 = require_dist_cjs8();
    var util_utf8_1 = require_dist_cjs13();
    var constants_1 = require_constants();
    var getPayloadHash = async ({ headers, body }, hashConstructor) => {
      for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === constants_1.SHA256_HEADER) {
          return headers[headerName];
        }
      }
      if (body == void 0) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      } else if (typeof body === "string" || ArrayBuffer.isView(body) || (0, is_array_buffer_1.isArrayBuffer)(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update((0, util_utf8_1.toUint8Array)(body));
        return (0, util_hex_encoding_1.toHex)(await hashCtor.digest());
      }
      return constants_1.UNSIGNED_PAYLOAD;
    };
    exports.getPayloadHash = getPayloadHash;
  }
});

// node_modules/@smithy/signature-v4/dist-cjs/headerUtil.js
var require_headerUtil = __commonJS({
  "node_modules/@smithy/signature-v4/dist-cjs/headerUtil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.deleteHeader = exports.getHeaderValue = exports.hasHeader = void 0;
    var hasHeader = (soughtHeader, headers) => {
      soughtHeader = soughtHeader.toLowerCase();
      for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
          return true;
        }
      }
      return false;
    };
    exports.hasHeader = hasHeader;
    var getHeaderValue = (soughtHeader, headers) => {
      soughtHeader = soughtHeader.toLowerCase();
      for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
          return headers[headerName];
        }
      }
      return void 0;
    };
    exports.getHeaderValue = getHeaderValue;
    var deleteHeader = (soughtHeader, headers) => {
      soughtHeader = soughtHeader.toLowerCase();
      for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
          delete headers[headerName];
        }
      }
    };
    exports.deleteHeader = deleteHeader;
  }
});

// node_modules/@smithy/signature-v4/dist-cjs/cloneRequest.js
var require_cloneRequest = __commonJS({
  "node_modules/@smithy/signature-v4/dist-cjs/cloneRequest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cloneQuery = exports.cloneRequest = void 0;
    var cloneRequest = ({ headers, query, ...rest }) => ({
      ...rest,
      headers: { ...headers },
      query: query ? (0, exports.cloneQuery)(query) : void 0
    });
    exports.cloneRequest = cloneRequest;
    var cloneQuery = (query) => Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param
      };
    }, {});
    exports.cloneQuery = cloneQuery;
  }
});

// node_modules/@smithy/signature-v4/dist-cjs/moveHeadersToQuery.js
var require_moveHeadersToQuery = __commonJS({
  "node_modules/@smithy/signature-v4/dist-cjs/moveHeadersToQuery.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.moveHeadersToQuery = void 0;
    var cloneRequest_1 = require_cloneRequest();
    var moveHeadersToQuery = (request, options = {}) => {
      var _a;
      const { headers, query = {} } = typeof request.clone === "function" ? request.clone() : (0, cloneRequest_1.cloneRequest)(request);
      for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !((_a = options.unhoistableHeaders) === null || _a === void 0 ? void 0 : _a.has(lname))) {
          query[name] = headers[name];
          delete headers[name];
        }
      }
      return {
        ...request,
        headers,
        query
      };
    };
    exports.moveHeadersToQuery = moveHeadersToQuery;
  }
});

// node_modules/@smithy/signature-v4/dist-cjs/prepareRequest.js
var require_prepareRequest = __commonJS({
  "node_modules/@smithy/signature-v4/dist-cjs/prepareRequest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.prepareRequest = void 0;
    var cloneRequest_1 = require_cloneRequest();
    var constants_1 = require_constants();
    var prepareRequest = (request) => {
      request = typeof request.clone === "function" ? request.clone() : (0, cloneRequest_1.cloneRequest)(request);
      for (const headerName of Object.keys(request.headers)) {
        if (constants_1.GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
          delete request.headers[headerName];
        }
      }
      return request;
    };
    exports.prepareRequest = prepareRequest;
  }
});

// node_modules/@smithy/signature-v4/dist-cjs/utilDate.js
var require_utilDate = __commonJS({
  "node_modules/@smithy/signature-v4/dist-cjs/utilDate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toDate = exports.iso8601 = void 0;
    var iso8601 = (time) => (0, exports.toDate)(time).toISOString().replace(/\.\d{3}Z$/, "Z");
    exports.iso8601 = iso8601;
    var toDate = (time) => {
      if (typeof time === "number") {
        return new Date(time * 1e3);
      }
      if (typeof time === "string") {
        if (Number(time)) {
          return new Date(Number(time) * 1e3);
        }
        return new Date(time);
      }
      return time;
    };
    exports.toDate = toDate;
  }
});

// node_modules/@smithy/signature-v4/dist-cjs/SignatureV4.js
var require_SignatureV4 = __commonJS({
  "node_modules/@smithy/signature-v4/dist-cjs/SignatureV4.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SignatureV4 = void 0;
    var eventstream_codec_1 = require_dist_cjs9();
    var util_hex_encoding_1 = require_dist_cjs8();
    var util_middleware_1 = require_dist_cjs10();
    var util_utf8_1 = require_dist_cjs13();
    var constants_1 = require_constants();
    var credentialDerivation_1 = require_credentialDerivation();
    var getCanonicalHeaders_1 = require_getCanonicalHeaders();
    var getCanonicalQuery_1 = require_getCanonicalQuery();
    var getPayloadHash_1 = require_getPayloadHash();
    var headerUtil_1 = require_headerUtil();
    var moveHeadersToQuery_1 = require_moveHeadersToQuery();
    var prepareRequest_1 = require_prepareRequest();
    var utilDate_1 = require_utilDate();
    var SignatureV4 = class {
      constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
        this.headerMarshaller = new eventstream_codec_1.HeaderMarshaller(util_utf8_1.toUtf8, util_utf8_1.fromUtf8);
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = (0, util_middleware_1.normalizeProvider)(region);
        this.credentialProvider = (0, util_middleware_1.normalizeProvider)(credentials);
      }
      async presign(originalRequest, options = {}) {
        const { signingDate = /* @__PURE__ */ new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : await this.regionProvider();
        const { longDate, shortDate } = formatDate(signingDate);
        if (expiresIn > constants_1.MAX_PRESIGNED_TTL) {
          return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
        }
        const scope = (0, credentialDerivation_1.createScope)(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
        const request = (0, moveHeadersToQuery_1.moveHeadersToQuery)((0, prepareRequest_1.prepareRequest)(originalRequest), { unhoistableHeaders });
        if (credentials.sessionToken) {
          request.query[constants_1.TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[constants_1.ALGORITHM_QUERY_PARAM] = constants_1.ALGORITHM_IDENTIFIER;
        request.query[constants_1.CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[constants_1.AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[constants_1.EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = (0, getCanonicalHeaders_1.getCanonicalHeaders)(request, unsignableHeaders, signableHeaders);
        request.query[constants_1.SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
        request.query[constants_1.SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await (0, getPayloadHash_1.getPayloadHash)(originalRequest, this.sha256)));
        return request;
      }
      async sign(toSign, options) {
        if (typeof toSign === "string") {
          return this.signString(toSign, options);
        } else if (toSign.headers && toSign.payload) {
          return this.signEvent(toSign, options);
        } else if (toSign.message) {
          return this.signMessage(toSign, options);
        } else {
          return this.signRequest(toSign, options);
        }
      }
      async signEvent({ headers, payload }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : await this.regionProvider();
        const { shortDate, longDate } = formatDate(signingDate);
        const scope = (0, credentialDerivation_1.createScope)(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
        const hashedPayload = await (0, getPayloadHash_1.getPayloadHash)({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = (0, util_hex_encoding_1.toHex)(await hash.digest());
        const stringToSign = [
          constants_1.EVENT_ALGORITHM_IDENTIFIER,
          longDate,
          scope,
          priorSignature,
          hashedHeaders,
          hashedPayload
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
      }
      async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService }) {
        const promise = this.signEvent({
          headers: this.headerMarshaller.format(signableMessage.message.headers),
          payload: signableMessage.message.body
        }, {
          signingDate,
          signingRegion,
          signingService,
          priorSignature: signableMessage.priorSignature
        });
        return promise.then((signature) => {
          return { message: signableMessage.message, signature };
        });
      }
      async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : await this.regionProvider();
        const { shortDate } = formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update((0, util_utf8_1.toUint8Array)(stringToSign));
        return (0, util_hex_encoding_1.toHex)(await hash.digest());
      }
      async signRequest(requestToSign, { signingDate = /* @__PURE__ */ new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : await this.regionProvider();
        const request = (0, prepareRequest_1.prepareRequest)(requestToSign);
        const { longDate, shortDate } = formatDate(signingDate);
        const scope = (0, credentialDerivation_1.createScope)(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
        request.headers[constants_1.AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
          request.headers[constants_1.TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await (0, getPayloadHash_1.getPayloadHash)(request, this.sha256);
        if (!(0, headerUtil_1.hasHeader)(constants_1.SHA256_HEADER, request.headers) && this.applyChecksum) {
          request.headers[constants_1.SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = (0, getCanonicalHeaders_1.getCanonicalHeaders)(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
        request.headers[constants_1.AUTH_HEADER] = `${constants_1.ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
        return request;
      }
      createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${(0, getCanonicalQuery_1.getCanonicalQuery)(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
      }
      async createStringToSign(longDate, credentialScope, canonicalRequest) {
        const hash = new this.sha256();
        hash.update((0, util_utf8_1.toUint8Array)(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${constants_1.ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${(0, util_hex_encoding_1.toHex)(hashedRequest)}`;
      }
      getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
          const normalizedPathSegments = [];
          for (const pathSegment of path.split("/")) {
            if ((pathSegment === null || pathSegment === void 0 ? void 0 : pathSegment.length) === 0)
              continue;
            if (pathSegment === ".")
              continue;
            if (pathSegment === "..") {
              normalizedPathSegments.pop();
            } else {
              normalizedPathSegments.push(pathSegment);
            }
          }
          const normalizedPath = `${(path === null || path === void 0 ? void 0 : path.startsWith("/")) ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && (path === null || path === void 0 ? void 0 : path.endsWith("/")) ? "/" : ""}`;
          const doubleEncoded = encodeURIComponent(normalizedPath);
          return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
      }
      async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
        const hash = new this.sha256(await keyPromise);
        hash.update((0, util_utf8_1.toUint8Array)(stringToSign));
        return (0, util_hex_encoding_1.toHex)(await hash.digest());
      }
      getSigningKey(credentials, region, shortDate, service) {
        return (0, credentialDerivation_1.getSigningKey)(this.sha256, credentials, shortDate, region, service || this.service);
      }
      validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
          throw new Error("Resolved credential object is not valid");
        }
      }
    };
    exports.SignatureV4 = SignatureV4;
    var formatDate = (now) => {
      const longDate = (0, utilDate_1.iso8601)(now).replace(/[\-:]/g, "");
      return {
        longDate,
        shortDate: longDate.slice(0, 8)
      };
    };
    var getCanonicalHeaderList = (headers) => Object.keys(headers).sort().join(";");
  }
});

// node_modules/@smithy/signature-v4/dist-cjs/index.js
var require_dist_cjs15 = __commonJS({
  "node_modules/@smithy/signature-v4/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.prepareRequest = exports.moveHeadersToQuery = exports.getPayloadHash = exports.getCanonicalQuery = exports.getCanonicalHeaders = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_SignatureV4(), exports);
    var getCanonicalHeaders_1 = require_getCanonicalHeaders();
    Object.defineProperty(exports, "getCanonicalHeaders", { enumerable: true, get: function() {
      return getCanonicalHeaders_1.getCanonicalHeaders;
    } });
    var getCanonicalQuery_1 = require_getCanonicalQuery();
    Object.defineProperty(exports, "getCanonicalQuery", { enumerable: true, get: function() {
      return getCanonicalQuery_1.getCanonicalQuery;
    } });
    var getPayloadHash_1 = require_getPayloadHash();
    Object.defineProperty(exports, "getPayloadHash", { enumerable: true, get: function() {
      return getPayloadHash_1.getPayloadHash;
    } });
    var moveHeadersToQuery_1 = require_moveHeadersToQuery();
    Object.defineProperty(exports, "moveHeadersToQuery", { enumerable: true, get: function() {
      return moveHeadersToQuery_1.moveHeadersToQuery;
    } });
    var prepareRequest_1 = require_prepareRequest();
    Object.defineProperty(exports, "prepareRequest", { enumerable: true, get: function() {
      return prepareRequest_1.prepareRequest;
    } });
    tslib_1.__exportStar(require_credentialDerivation(), exports);
  }
});

// node_modules/@aws-sdk/middleware-signing/dist-cjs/awsAuthConfiguration.js
var require_awsAuthConfiguration = __commonJS({
  "node_modules/@aws-sdk/middleware-signing/dist-cjs/awsAuthConfiguration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveSigV4AuthConfig = exports.resolveAwsAuthConfig = void 0;
    var property_provider_1 = require_dist_cjs6();
    var signature_v4_1 = require_dist_cjs15();
    var util_middleware_1 = require_dist_cjs10();
    var CREDENTIAL_EXPIRE_WINDOW = 3e5;
    var resolveAwsAuthConfig = (input) => {
      const normalizedCreds = input.credentials ? normalizeCredentialProvider(input.credentials) : input.credentialDefaultProvider(input);
      const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
      let signer;
      if (input.signer) {
        signer = (0, util_middleware_1.normalizeProvider)(input.signer);
      } else if (input.regionInfoProvider) {
        signer = () => (0, util_middleware_1.normalizeProvider)(input.region)().then(async (region) => [
          await input.regionInfoProvider(region, {
            useFipsEndpoint: await input.useFipsEndpoint(),
            useDualstackEndpoint: await input.useDualstackEndpoint()
          }) || {},
          region
        ]).then(([regionInfo, region]) => {
          const { signingRegion, signingService } = regionInfo;
          input.signingRegion = input.signingRegion || signingRegion || region;
          input.signingName = input.signingName || signingService || input.serviceId;
          const params = {
            ...input,
            credentials: normalizedCreds,
            region: input.signingRegion,
            service: input.signingName,
            sha256,
            uriEscapePath: signingEscapePath
          };
          const SignerCtor = input.signerConstructor || signature_v4_1.SignatureV4;
          return new SignerCtor(params);
        });
      } else {
        signer = async (authScheme) => {
          authScheme = Object.assign({}, {
            name: "sigv4",
            signingName: input.signingName || input.defaultSigningName,
            signingRegion: await (0, util_middleware_1.normalizeProvider)(input.region)(),
            properties: {}
          }, authScheme);
          const signingRegion = authScheme.signingRegion;
          const signingService = authScheme.signingName;
          input.signingRegion = input.signingRegion || signingRegion;
          input.signingName = input.signingName || signingService || input.serviceId;
          const params = {
            ...input,
            credentials: normalizedCreds,
            region: input.signingRegion,
            service: input.signingName,
            sha256,
            uriEscapePath: signingEscapePath
          };
          const SignerCtor = input.signerConstructor || signature_v4_1.SignatureV4;
          return new SignerCtor(params);
        };
      }
      return {
        ...input,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer
      };
    };
    exports.resolveAwsAuthConfig = resolveAwsAuthConfig;
    var resolveSigV4AuthConfig = (input) => {
      const normalizedCreds = input.credentials ? normalizeCredentialProvider(input.credentials) : input.credentialDefaultProvider(input);
      const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
      let signer;
      if (input.signer) {
        signer = (0, util_middleware_1.normalizeProvider)(input.signer);
      } else {
        signer = (0, util_middleware_1.normalizeProvider)(new signature_v4_1.SignatureV4({
          credentials: normalizedCreds,
          region: input.region,
          service: input.signingName,
          sha256,
          uriEscapePath: signingEscapePath
        }));
      }
      return {
        ...input,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer
      };
    };
    exports.resolveSigV4AuthConfig = resolveSigV4AuthConfig;
    var normalizeCredentialProvider = (credentials) => {
      if (typeof credentials === "function") {
        return (0, property_provider_1.memoize)(credentials, (credentials2) => credentials2.expiration !== void 0 && credentials2.expiration.getTime() - Date.now() < CREDENTIAL_EXPIRE_WINDOW, (credentials2) => credentials2.expiration !== void 0);
      }
      return (0, util_middleware_1.normalizeProvider)(credentials);
    };
  }
});

// node_modules/@aws-sdk/middleware-signing/dist-cjs/utils/getSkewCorrectedDate.js
var require_getSkewCorrectedDate = __commonJS({
  "node_modules/@aws-sdk/middleware-signing/dist-cjs/utils/getSkewCorrectedDate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSkewCorrectedDate = void 0;
    var getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);
    exports.getSkewCorrectedDate = getSkewCorrectedDate;
  }
});

// node_modules/@aws-sdk/middleware-signing/dist-cjs/utils/isClockSkewed.js
var require_isClockSkewed = __commonJS({
  "node_modules/@aws-sdk/middleware-signing/dist-cjs/utils/isClockSkewed.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isClockSkewed = void 0;
    var getSkewCorrectedDate_1 = require_getSkewCorrectedDate();
    var isClockSkewed = (clockTime, systemClockOffset) => Math.abs((0, getSkewCorrectedDate_1.getSkewCorrectedDate)(systemClockOffset).getTime() - clockTime) >= 3e5;
    exports.isClockSkewed = isClockSkewed;
  }
});

// node_modules/@aws-sdk/middleware-signing/dist-cjs/utils/getUpdatedSystemClockOffset.js
var require_getUpdatedSystemClockOffset = __commonJS({
  "node_modules/@aws-sdk/middleware-signing/dist-cjs/utils/getUpdatedSystemClockOffset.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getUpdatedSystemClockOffset = void 0;
    var isClockSkewed_1 = require_isClockSkewed();
    var getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
      const clockTimeInMs = Date.parse(clockTime);
      if ((0, isClockSkewed_1.isClockSkewed)(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
      }
      return currentSystemClockOffset;
    };
    exports.getUpdatedSystemClockOffset = getUpdatedSystemClockOffset;
  }
});

// node_modules/@aws-sdk/middleware-signing/dist-cjs/awsAuthMiddleware.js
var require_awsAuthMiddleware = __commonJS({
  "node_modules/@aws-sdk/middleware-signing/dist-cjs/awsAuthMiddleware.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSigV4AuthPlugin = exports.getAwsAuthPlugin = exports.awsAuthMiddlewareOptions = exports.awsAuthMiddleware = void 0;
    var protocol_http_1 = require_dist_cjs2();
    var getSkewCorrectedDate_1 = require_getSkewCorrectedDate();
    var getUpdatedSystemClockOffset_1 = require_getUpdatedSystemClockOffset();
    var awsAuthMiddleware = (options) => (next, context) => async function(args) {
      var _a, _b, _c, _d;
      if (!protocol_http_1.HttpRequest.isInstance(args.request))
        return next(args);
      const authScheme = (_c = (_b = (_a = context.endpointV2) === null || _a === void 0 ? void 0 : _a.properties) === null || _b === void 0 ? void 0 : _b.authSchemes) === null || _c === void 0 ? void 0 : _c[0];
      const multiRegionOverride = (authScheme === null || authScheme === void 0 ? void 0 : authScheme.name) === "sigv4a" ? (_d = authScheme === null || authScheme === void 0 ? void 0 : authScheme.signingRegionSet) === null || _d === void 0 ? void 0 : _d.join(",") : void 0;
      const signer = await options.signer(authScheme);
      const output = await next({
        ...args,
        request: await signer.sign(args.request, {
          signingDate: (0, getSkewCorrectedDate_1.getSkewCorrectedDate)(options.systemClockOffset),
          signingRegion: multiRegionOverride || context["signing_region"],
          signingService: context["signing_service"]
        })
      }).catch((error) => {
        var _a2;
        const serverTime = (_a2 = error.ServerTime) !== null && _a2 !== void 0 ? _a2 : getDateHeader(error.$response);
        if (serverTime) {
          options.systemClockOffset = (0, getUpdatedSystemClockOffset_1.getUpdatedSystemClockOffset)(serverTime, options.systemClockOffset);
        }
        throw error;
      });
      const dateHeader = getDateHeader(output.response);
      if (dateHeader) {
        options.systemClockOffset = (0, getUpdatedSystemClockOffset_1.getUpdatedSystemClockOffset)(dateHeader, options.systemClockOffset);
      }
      return output;
    };
    exports.awsAuthMiddleware = awsAuthMiddleware;
    var getDateHeader = (response) => {
      var _a, _b, _c;
      return protocol_http_1.HttpResponse.isInstance(response) ? (_b = (_a = response.headers) === null || _a === void 0 ? void 0 : _a.date) !== null && _b !== void 0 ? _b : (_c = response.headers) === null || _c === void 0 ? void 0 : _c.Date : void 0;
    };
    exports.awsAuthMiddlewareOptions = {
      name: "awsAuthMiddleware",
      tags: ["SIGNATURE", "AWSAUTH"],
      relation: "after",
      toMiddleware: "retryMiddleware",
      override: true
    };
    var getAwsAuthPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo((0, exports.awsAuthMiddleware)(options), exports.awsAuthMiddlewareOptions);
      }
    });
    exports.getAwsAuthPlugin = getAwsAuthPlugin;
    exports.getSigV4AuthPlugin = exports.getAwsAuthPlugin;
  }
});

// node_modules/@aws-sdk/middleware-signing/dist-cjs/index.js
var require_dist_cjs16 = __commonJS({
  "node_modules/@aws-sdk/middleware-signing/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_awsAuthConfiguration(), exports);
    tslib_1.__exportStar(require_awsAuthMiddleware(), exports);
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-cjs/configurations.js
var require_configurations = __commonJS({
  "node_modules/@aws-sdk/middleware-user-agent/dist-cjs/configurations.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveUserAgentConfig = void 0;
    function resolveUserAgentConfig(input) {
      return {
        ...input,
        customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent
      };
    }
    exports.resolveUserAgentConfig = resolveUserAgentConfig;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/lib/isIpAddress.js
var require_isIpAddress = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/lib/isIpAddress.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isIpAddress = void 0;
    var IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
    var isIpAddress = (value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]");
    exports.isIpAddress = isIpAddress;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/lib/isValidHostLabel.js
var require_isValidHostLabel = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/lib/isValidHostLabel.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isValidHostLabel = void 0;
    var VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
    var isValidHostLabel = (value, allowSubDomains = false) => {
      if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
      }
      const labels = value.split(".");
      for (const label of labels) {
        if (!(0, exports.isValidHostLabel)(label)) {
          return false;
        }
      }
      return true;
    };
    exports.isValidHostLabel = isValidHostLabel;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/utils/customEndpointFunctions.js
var require_customEndpointFunctions = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/utils/customEndpointFunctions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.customEndpointFunctions = void 0;
    exports.customEndpointFunctions = {};
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/debug/debugId.js
var require_debugId = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/debug/debugId.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.debugId = void 0;
    exports.debugId = "endpoints";
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/debug/toDebugString.js
var require_toDebugString = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/debug/toDebugString.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toDebugString = void 0;
    function toDebugString(input) {
      if (typeof input !== "object" || input == null) {
        return input;
      }
      if ("ref" in input) {
        return `$${toDebugString(input.ref)}`;
      }
      if ("fn" in input) {
        return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
      }
      return JSON.stringify(input, null, 2);
    }
    exports.toDebugString = toDebugString;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/debug/index.js
var require_debug = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/debug/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_debugId(), exports);
    tslib_1.__exportStar(require_toDebugString(), exports);
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/types/EndpointError.js
var require_EndpointError = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/types/EndpointError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EndpointError = void 0;
    var EndpointError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "EndpointError";
      }
    };
    exports.EndpointError = EndpointError;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/types/EndpointFunctions.js
var require_EndpointFunctions = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/types/EndpointFunctions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/types/EndpointRuleObject.js
var require_EndpointRuleObject2 = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/types/EndpointRuleObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/types/ErrorRuleObject.js
var require_ErrorRuleObject2 = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/types/ErrorRuleObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/types/RuleSetObject.js
var require_RuleSetObject2 = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/types/RuleSetObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/types/TreeRuleObject.js
var require_TreeRuleObject2 = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/types/TreeRuleObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/types/shared.js
var require_shared2 = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/types/shared.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/types/index.js
var require_types2 = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/types/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_EndpointError(), exports);
    tslib_1.__exportStar(require_EndpointFunctions(), exports);
    tslib_1.__exportStar(require_EndpointRuleObject2(), exports);
    tslib_1.__exportStar(require_ErrorRuleObject2(), exports);
    tslib_1.__exportStar(require_RuleSetObject2(), exports);
    tslib_1.__exportStar(require_TreeRuleObject2(), exports);
    tslib_1.__exportStar(require_shared2(), exports);
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/lib/booleanEquals.js
var require_booleanEquals = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/lib/booleanEquals.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.booleanEquals = void 0;
    var booleanEquals = (value1, value2) => value1 === value2;
    exports.booleanEquals = booleanEquals;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/lib/getAttrPathList.js
var require_getAttrPathList = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/lib/getAttrPathList.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getAttrPathList = void 0;
    var types_1 = require_types2();
    var getAttrPathList = (path) => {
      const parts = path.split(".");
      const pathList = [];
      for (const part of parts) {
        const squareBracketIndex = part.indexOf("[");
        if (squareBracketIndex !== -1) {
          if (part.indexOf("]") !== part.length - 1) {
            throw new types_1.EndpointError(`Path: '${path}' does not end with ']'`);
          }
          const arrayIndex = part.slice(squareBracketIndex + 1, -1);
          if (Number.isNaN(parseInt(arrayIndex))) {
            throw new types_1.EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
          }
          if (squareBracketIndex !== 0) {
            pathList.push(part.slice(0, squareBracketIndex));
          }
          pathList.push(arrayIndex);
        } else {
          pathList.push(part);
        }
      }
      return pathList;
    };
    exports.getAttrPathList = getAttrPathList;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/lib/getAttr.js
var require_getAttr = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/lib/getAttr.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getAttr = void 0;
    var types_1 = require_types2();
    var getAttrPathList_1 = require_getAttrPathList();
    var getAttr = (value, path) => (0, getAttrPathList_1.getAttrPathList)(path).reduce((acc, index) => {
      if (typeof acc !== "object") {
        throw new types_1.EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
      } else if (Array.isArray(acc)) {
        return acc[parseInt(index)];
      }
      return acc[index];
    }, value);
    exports.getAttr = getAttr;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/lib/isSet.js
var require_isSet = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/lib/isSet.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isSet = void 0;
    var isSet = (value) => value != null;
    exports.isSet = isSet;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/lib/not.js
var require_not = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/lib/not.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.not = void 0;
    var not = (value) => !value;
    exports.not = not;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/lib/parseURL.js
var require_parseURL = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/lib/parseURL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseURL = void 0;
    var types_1 = require_dist_cjs();
    var isIpAddress_1 = require_isIpAddress();
    var DEFAULT_PORTS = {
      [types_1.EndpointURLScheme.HTTP]: 80,
      [types_1.EndpointURLScheme.HTTPS]: 443
    };
    var parseURL = (value) => {
      const whatwgURL = (() => {
        try {
          if (value instanceof URL) {
            return value;
          }
          if (typeof value === "object" && "hostname" in value) {
            const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
            const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
            url.search = Object.entries(query).map(([k, v]) => `${k}=${v}`).join("&");
            return url;
          }
          return new URL(value);
        } catch (error) {
          return null;
        }
      })();
      if (!whatwgURL) {
        console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
        return null;
      }
      const urlString = whatwgURL.href;
      const { host, hostname, pathname, protocol, search } = whatwgURL;
      if (search) {
        return null;
      }
      const scheme = protocol.slice(0, -1);
      if (!Object.values(types_1.EndpointURLScheme).includes(scheme)) {
        return null;
      }
      const isIp = (0, isIpAddress_1.isIpAddress)(hostname);
      const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
      const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
      return {
        scheme,
        authority,
        path: pathname,
        normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
        isIp
      };
    };
    exports.parseURL = parseURL;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/lib/stringEquals.js
var require_stringEquals = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/lib/stringEquals.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stringEquals = void 0;
    var stringEquals = (value1, value2) => value1 === value2;
    exports.stringEquals = stringEquals;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/lib/substring.js
var require_substring = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/lib/substring.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.substring = void 0;
    var substring = (input, start, stop, reverse) => {
      if (start >= stop || input.length < stop) {
        return null;
      }
      if (!reverse) {
        return input.substring(start, stop);
      }
      return input.substring(input.length - stop, input.length - start);
    };
    exports.substring = substring;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/lib/uriEncode.js
var require_uriEncode = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/lib/uriEncode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uriEncode = void 0;
    var uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
    exports.uriEncode = uriEncode;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/lib/index.js
var require_lib = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_booleanEquals(), exports);
    tslib_1.__exportStar(require_getAttr(), exports);
    tslib_1.__exportStar(require_isSet(), exports);
    tslib_1.__exportStar(require_isValidHostLabel(), exports);
    tslib_1.__exportStar(require_not(), exports);
    tslib_1.__exportStar(require_parseURL(), exports);
    tslib_1.__exportStar(require_stringEquals(), exports);
    tslib_1.__exportStar(require_substring(), exports);
    tslib_1.__exportStar(require_uriEncode(), exports);
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/utils/endpointFunctions.js
var require_endpointFunctions = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/utils/endpointFunctions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.endpointFunctions = void 0;
    var lib_1 = require_lib();
    exports.endpointFunctions = {
      booleanEquals: lib_1.booleanEquals,
      getAttr: lib_1.getAttr,
      isSet: lib_1.isSet,
      isValidHostLabel: lib_1.isValidHostLabel,
      not: lib_1.not,
      parseURL: lib_1.parseURL,
      stringEquals: lib_1.stringEquals,
      substring: lib_1.substring,
      uriEncode: lib_1.uriEncode
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/utils/evaluateTemplate.js
var require_evaluateTemplate = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/utils/evaluateTemplate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.evaluateTemplate = void 0;
    var lib_1 = require_lib();
    var evaluateTemplate = (template, options) => {
      const evaluatedTemplateArr = [];
      const templateContext = {
        ...options.endpointParams,
        ...options.referenceRecord
      };
      let currentIndex = 0;
      while (currentIndex < template.length) {
        const openingBraceIndex = template.indexOf("{", currentIndex);
        if (openingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(currentIndex));
          break;
        }
        evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
        const closingBraceIndex = template.indexOf("}", openingBraceIndex);
        if (closingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex));
          break;
        }
        if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
          currentIndex = closingBraceIndex + 2;
        }
        const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
        if (parameterName.includes("#")) {
          const [refName, attrName] = parameterName.split("#");
          evaluatedTemplateArr.push((0, lib_1.getAttr)(templateContext[refName], attrName));
        } else {
          evaluatedTemplateArr.push(templateContext[parameterName]);
        }
        currentIndex = closingBraceIndex + 1;
      }
      return evaluatedTemplateArr.join("");
    };
    exports.evaluateTemplate = evaluateTemplate;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/utils/getReferenceValue.js
var require_getReferenceValue = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/utils/getReferenceValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getReferenceValue = void 0;
    var getReferenceValue = ({ ref }, options) => {
      const referenceRecord = {
        ...options.endpointParams,
        ...options.referenceRecord
      };
      return referenceRecord[ref];
    };
    exports.getReferenceValue = getReferenceValue;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/utils/evaluateExpression.js
var require_evaluateExpression = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/utils/evaluateExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.evaluateExpression = void 0;
    var types_1 = require_types2();
    var callFunction_1 = require_callFunction();
    var evaluateTemplate_1 = require_evaluateTemplate();
    var getReferenceValue_1 = require_getReferenceValue();
    var evaluateExpression = (obj, keyName, options) => {
      if (typeof obj === "string") {
        return (0, evaluateTemplate_1.evaluateTemplate)(obj, options);
      } else if (obj["fn"]) {
        return (0, callFunction_1.callFunction)(obj, options);
      } else if (obj["ref"]) {
        return (0, getReferenceValue_1.getReferenceValue)(obj, options);
      }
      throw new types_1.EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
    };
    exports.evaluateExpression = evaluateExpression;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/utils/callFunction.js
var require_callFunction = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/utils/callFunction.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.callFunction = void 0;
    var customEndpointFunctions_1 = require_customEndpointFunctions();
    var endpointFunctions_1 = require_endpointFunctions();
    var evaluateExpression_1 = require_evaluateExpression();
    var callFunction = ({ fn, argv }, options) => {
      const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : (0, evaluateExpression_1.evaluateExpression)(arg, "arg", options));
      const fnSegments = fn.split(".");
      if (fnSegments[0] in customEndpointFunctions_1.customEndpointFunctions && fnSegments[1] != null) {
        return customEndpointFunctions_1.customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
      }
      return endpointFunctions_1.endpointFunctions[fn](...evaluatedArgs);
    };
    exports.callFunction = callFunction;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/utils/evaluateCondition.js
var require_evaluateCondition = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/utils/evaluateCondition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.evaluateCondition = void 0;
    var debug_1 = require_debug();
    var types_1 = require_types2();
    var callFunction_1 = require_callFunction();
    var evaluateCondition = ({ assign, ...fnArgs }, options) => {
      var _a, _b;
      if (assign && assign in options.referenceRecord) {
        throw new types_1.EndpointError(`'${assign}' is already defined in Reference Record.`);
      }
      const value = (0, callFunction_1.callFunction)(fnArgs, options);
      (_b = (_a = options.logger) === null || _a === void 0 ? void 0 : _a.debug) === null || _b === void 0 ? void 0 : _b.call(_a, debug_1.debugId, `evaluateCondition: ${(0, debug_1.toDebugString)(fnArgs)} = ${(0, debug_1.toDebugString)(value)}`);
      return {
        result: value === "" ? true : !!value,
        ...assign != null && { toAssign: { name: assign, value } }
      };
    };
    exports.evaluateCondition = evaluateCondition;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/utils/evaluateConditions.js
var require_evaluateConditions = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/utils/evaluateConditions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.evaluateConditions = void 0;
    var debug_1 = require_debug();
    var evaluateCondition_1 = require_evaluateCondition();
    var evaluateConditions = (conditions = [], options) => {
      var _a, _b;
      const conditionsReferenceRecord = {};
      for (const condition of conditions) {
        const { result, toAssign } = (0, evaluateCondition_1.evaluateCondition)(condition, {
          ...options,
          referenceRecord: {
            ...options.referenceRecord,
            ...conditionsReferenceRecord
          }
        });
        if (!result) {
          return { result };
        }
        if (toAssign) {
          conditionsReferenceRecord[toAssign.name] = toAssign.value;
          (_b = (_a = options.logger) === null || _a === void 0 ? void 0 : _a.debug) === null || _b === void 0 ? void 0 : _b.call(_a, debug_1.debugId, `assign: ${toAssign.name} := ${(0, debug_1.toDebugString)(toAssign.value)}`);
        }
      }
      return { result: true, referenceRecord: conditionsReferenceRecord };
    };
    exports.evaluateConditions = evaluateConditions;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/utils/getEndpointHeaders.js
var require_getEndpointHeaders = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/utils/getEndpointHeaders.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getEndpointHeaders = void 0;
    var types_1 = require_types2();
    var evaluateExpression_1 = require_evaluateExpression();
    var getEndpointHeaders = (headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
      ...acc,
      [headerKey]: headerVal.map((headerValEntry) => {
        const processedExpr = (0, evaluateExpression_1.evaluateExpression)(headerValEntry, "Header value entry", options);
        if (typeof processedExpr !== "string") {
          throw new types_1.EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
        }
        return processedExpr;
      })
    }), {});
    exports.getEndpointHeaders = getEndpointHeaders;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/utils/getEndpointProperty.js
var require_getEndpointProperty = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/utils/getEndpointProperty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getEndpointProperty = void 0;
    var types_1 = require_types2();
    var evaluateTemplate_1 = require_evaluateTemplate();
    var getEndpointProperties_1 = require_getEndpointProperties();
    var getEndpointProperty = (property, options) => {
      if (Array.isArray(property)) {
        return property.map((propertyEntry) => (0, exports.getEndpointProperty)(propertyEntry, options));
      }
      switch (typeof property) {
        case "string":
          return (0, evaluateTemplate_1.evaluateTemplate)(property, options);
        case "object":
          if (property === null) {
            throw new types_1.EndpointError(`Unexpected endpoint property: ${property}`);
          }
          return (0, getEndpointProperties_1.getEndpointProperties)(property, options);
        case "boolean":
          return property;
        default:
          throw new types_1.EndpointError(`Unexpected endpoint property type: ${typeof property}`);
      }
    };
    exports.getEndpointProperty = getEndpointProperty;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/utils/getEndpointProperties.js
var require_getEndpointProperties = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/utils/getEndpointProperties.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getEndpointProperties = void 0;
    var getEndpointProperty_1 = require_getEndpointProperty();
    var getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
      ...acc,
      [propertyKey]: (0, getEndpointProperty_1.getEndpointProperty)(propertyVal, options)
    }), {});
    exports.getEndpointProperties = getEndpointProperties;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/utils/getEndpointUrl.js
var require_getEndpointUrl = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/utils/getEndpointUrl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getEndpointUrl = void 0;
    var types_1 = require_types2();
    var evaluateExpression_1 = require_evaluateExpression();
    var getEndpointUrl = (endpointUrl, options) => {
      const expression = (0, evaluateExpression_1.evaluateExpression)(endpointUrl, "Endpoint URL", options);
      if (typeof expression === "string") {
        try {
          return new URL(expression);
        } catch (error) {
          console.error(`Failed to construct URL with ${expression}`, error);
          throw error;
        }
      }
      throw new types_1.EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
    };
    exports.getEndpointUrl = getEndpointUrl;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/utils/evaluateEndpointRule.js
var require_evaluateEndpointRule = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/utils/evaluateEndpointRule.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.evaluateEndpointRule = void 0;
    var debug_1 = require_debug();
    var evaluateConditions_1 = require_evaluateConditions();
    var getEndpointHeaders_1 = require_getEndpointHeaders();
    var getEndpointProperties_1 = require_getEndpointProperties();
    var getEndpointUrl_1 = require_getEndpointUrl();
    var evaluateEndpointRule = (endpointRule, options) => {
      var _a, _b;
      const { conditions, endpoint } = endpointRule;
      const { result, referenceRecord } = (0, evaluateConditions_1.evaluateConditions)(conditions, options);
      if (!result) {
        return;
      }
      const endpointRuleOptions = {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      };
      const { url, properties, headers } = endpoint;
      (_b = (_a = options.logger) === null || _a === void 0 ? void 0 : _a.debug) === null || _b === void 0 ? void 0 : _b.call(_a, debug_1.debugId, `Resolving endpoint from template: ${(0, debug_1.toDebugString)(endpoint)}`);
      return {
        ...headers != void 0 && {
          headers: (0, getEndpointHeaders_1.getEndpointHeaders)(headers, endpointRuleOptions)
        },
        ...properties != void 0 && {
          properties: (0, getEndpointProperties_1.getEndpointProperties)(properties, endpointRuleOptions)
        },
        url: (0, getEndpointUrl_1.getEndpointUrl)(url, endpointRuleOptions)
      };
    };
    exports.evaluateEndpointRule = evaluateEndpointRule;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/utils/evaluateErrorRule.js
var require_evaluateErrorRule = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/utils/evaluateErrorRule.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.evaluateErrorRule = void 0;
    var types_1 = require_types2();
    var evaluateConditions_1 = require_evaluateConditions();
    var evaluateExpression_1 = require_evaluateExpression();
    var evaluateErrorRule = (errorRule, options) => {
      const { conditions, error } = errorRule;
      const { result, referenceRecord } = (0, evaluateConditions_1.evaluateConditions)(conditions, options);
      if (!result) {
        return;
      }
      throw new types_1.EndpointError((0, evaluateExpression_1.evaluateExpression)(error, "Error", {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      }));
    };
    exports.evaluateErrorRule = evaluateErrorRule;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/utils/evaluateTreeRule.js
var require_evaluateTreeRule = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/utils/evaluateTreeRule.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.evaluateTreeRule = void 0;
    var evaluateConditions_1 = require_evaluateConditions();
    var evaluateRules_1 = require_evaluateRules();
    var evaluateTreeRule = (treeRule, options) => {
      const { conditions, rules } = treeRule;
      const { result, referenceRecord } = (0, evaluateConditions_1.evaluateConditions)(conditions, options);
      if (!result) {
        return;
      }
      return (0, evaluateRules_1.evaluateRules)(rules, {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      });
    };
    exports.evaluateTreeRule = evaluateTreeRule;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/utils/evaluateRules.js
var require_evaluateRules = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/utils/evaluateRules.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.evaluateRules = void 0;
    var types_1 = require_types2();
    var evaluateEndpointRule_1 = require_evaluateEndpointRule();
    var evaluateErrorRule_1 = require_evaluateErrorRule();
    var evaluateTreeRule_1 = require_evaluateTreeRule();
    var evaluateRules = (rules, options) => {
      for (const rule of rules) {
        if (rule.type === "endpoint") {
          const endpointOrUndefined = (0, evaluateEndpointRule_1.evaluateEndpointRule)(rule, options);
          if (endpointOrUndefined) {
            return endpointOrUndefined;
          }
        } else if (rule.type === "error") {
          (0, evaluateErrorRule_1.evaluateErrorRule)(rule, options);
        } else if (rule.type === "tree") {
          const endpointOrUndefined = (0, evaluateTreeRule_1.evaluateTreeRule)(rule, options);
          if (endpointOrUndefined) {
            return endpointOrUndefined;
          }
        } else {
          throw new types_1.EndpointError(`Unknown endpoint rule: ${rule}`);
        }
      }
      throw new types_1.EndpointError(`Rules evaluation failed`);
    };
    exports.evaluateRules = evaluateRules;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/utils/index.js
var require_utils = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_customEndpointFunctions(), exports);
    tslib_1.__exportStar(require_evaluateRules(), exports);
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/resolveEndpoint.js
var require_resolveEndpoint = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/resolveEndpoint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveEndpoint = void 0;
    var debug_1 = require_debug();
    var types_1 = require_types2();
    var utils_1 = require_utils();
    var resolveEndpoint = (ruleSetObject, options) => {
      var _a, _b, _c, _d, _e, _f;
      const { endpointParams, logger } = options;
      const { parameters, rules } = ruleSetObject;
      (_b = (_a = options.logger) === null || _a === void 0 ? void 0 : _a.debug) === null || _b === void 0 ? void 0 : _b.call(_a, `${debug_1.debugId} Initial EndpointParams: ${(0, debug_1.toDebugString)(endpointParams)}`);
      const paramsWithDefault = Object.entries(parameters).filter(([, v]) => v.default != null).map(([k, v]) => [k, v.default]);
      if (paramsWithDefault.length > 0) {
        for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
          endpointParams[paramKey] = (_c = endpointParams[paramKey]) !== null && _c !== void 0 ? _c : paramDefaultValue;
        }
      }
      const requiredParams = Object.entries(parameters).filter(([, v]) => v.required).map(([k]) => k);
      for (const requiredParam of requiredParams) {
        if (endpointParams[requiredParam] == null) {
          throw new types_1.EndpointError(`Missing required parameter: '${requiredParam}'`);
        }
      }
      const endpoint = (0, utils_1.evaluateRules)(rules, { endpointParams, logger, referenceRecord: {} });
      if ((_d = options.endpointParams) === null || _d === void 0 ? void 0 : _d.Endpoint) {
        try {
          const givenEndpoint = new URL(options.endpointParams.Endpoint);
          const { protocol, port } = givenEndpoint;
          endpoint.url.protocol = protocol;
          endpoint.url.port = port;
        } catch (e) {
        }
      }
      (_f = (_e = options.logger) === null || _e === void 0 ? void 0 : _e.debug) === null || _f === void 0 ? void 0 : _f.call(_e, `${debug_1.debugId} Resolved endpoint: ${(0, debug_1.toDebugString)(endpoint)}`);
      return endpoint;
    };
    exports.resolveEndpoint = resolveEndpoint;
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/index.js
var require_dist_cjs17 = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_isIpAddress(), exports);
    tslib_1.__exportStar(require_isValidHostLabel(), exports);
    tslib_1.__exportStar(require_customEndpointFunctions(), exports);
    tslib_1.__exportStar(require_resolveEndpoint(), exports);
    tslib_1.__exportStar(require_types2(), exports);
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-cjs/lib/isIpAddress.js
var require_isIpAddress2 = __commonJS({
  "node_modules/@aws-sdk/util-endpoints/dist-cjs/lib/isIpAddress.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isIpAddress = void 0;
    var util_endpoints_1 = require_dist_cjs17();
    Object.defineProperty(exports, "isIpAddress", { enumerable: true, get: function() {
      return util_endpoints_1.isIpAddress;
    } });
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-cjs/lib/aws/isVirtualHostableS3Bucket.js
var require_isVirtualHostableS3Bucket = __commonJS({
  "node_modules/@aws-sdk/util-endpoints/dist-cjs/lib/aws/isVirtualHostableS3Bucket.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isVirtualHostableS3Bucket = void 0;
    var util_endpoints_1 = require_dist_cjs17();
    var isIpAddress_1 = require_isIpAddress2();
    var isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
      if (allowSubDomains) {
        for (const label of value.split(".")) {
          if (!(0, exports.isVirtualHostableS3Bucket)(label)) {
            return false;
          }
        }
        return true;
      }
      if (!(0, util_endpoints_1.isValidHostLabel)(value)) {
        return false;
      }
      if (value.length < 3 || value.length > 63) {
        return false;
      }
      if (value !== value.toLowerCase()) {
        return false;
      }
      if ((0, isIpAddress_1.isIpAddress)(value)) {
        return false;
      }
      return true;
    };
    exports.isVirtualHostableS3Bucket = isVirtualHostableS3Bucket;
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-cjs/lib/aws/parseArn.js
var require_parseArn = __commonJS({
  "node_modules/@aws-sdk/util-endpoints/dist-cjs/lib/aws/parseArn.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseArn = void 0;
    var parseArn = (value) => {
      const segments = value.split(":");
      if (segments.length < 6)
        return null;
      const [arn, partition, service, region, accountId, ...resourceId] = segments;
      if (arn !== "arn" || partition === "" || service === "" || resourceId[0] === "")
        return null;
      return {
        partition,
        service,
        region,
        accountId,
        resourceId: resourceId[0].includes("/") ? resourceId[0].split("/") : resourceId
      };
    };
    exports.parseArn = parseArn;
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-cjs/lib/aws/partitions.json
var require_partitions = __commonJS({
  "node_modules/@aws-sdk/util-endpoints/dist-cjs/lib/aws/partitions.json"(exports, module2) {
    module2.exports = {
      partitions: [{
        id: "aws",
        outputs: {
          dnsSuffix: "amazonaws.com",
          dualStackDnsSuffix: "api.aws",
          implicitGlobalRegion: "us-east-1",
          name: "aws",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^(us|eu|ap|sa|ca|me|af|il)\\-\\w+\\-\\d+$",
        regions: {
          "af-south-1": {
            description: "Africa (Cape Town)"
          },
          "ap-east-1": {
            description: "Asia Pacific (Hong Kong)"
          },
          "ap-northeast-1": {
            description: "Asia Pacific (Tokyo)"
          },
          "ap-northeast-2": {
            description: "Asia Pacific (Seoul)"
          },
          "ap-northeast-3": {
            description: "Asia Pacific (Osaka)"
          },
          "ap-south-1": {
            description: "Asia Pacific (Mumbai)"
          },
          "ap-south-2": {
            description: "Asia Pacific (Hyderabad)"
          },
          "ap-southeast-1": {
            description: "Asia Pacific (Singapore)"
          },
          "ap-southeast-2": {
            description: "Asia Pacific (Sydney)"
          },
          "ap-southeast-3": {
            description: "Asia Pacific (Jakarta)"
          },
          "ap-southeast-4": {
            description: "Asia Pacific (Melbourne)"
          },
          "aws-global": {
            description: "AWS Standard global region"
          },
          "ca-central-1": {
            description: "Canada (Central)"
          },
          "eu-central-1": {
            description: "Europe (Frankfurt)"
          },
          "eu-central-2": {
            description: "Europe (Zurich)"
          },
          "eu-north-1": {
            description: "Europe (Stockholm)"
          },
          "eu-south-1": {
            description: "Europe (Milan)"
          },
          "eu-south-2": {
            description: "Europe (Spain)"
          },
          "eu-west-1": {
            description: "Europe (Ireland)"
          },
          "eu-west-2": {
            description: "Europe (London)"
          },
          "eu-west-3": {
            description: "Europe (Paris)"
          },
          "il-central-1": {
            description: "Israel (Tel Aviv)"
          },
          "me-central-1": {
            description: "Middle East (UAE)"
          },
          "me-south-1": {
            description: "Middle East (Bahrain)"
          },
          "sa-east-1": {
            description: "South America (Sao Paulo)"
          },
          "us-east-1": {
            description: "US East (N. Virginia)"
          },
          "us-east-2": {
            description: "US East (Ohio)"
          },
          "us-west-1": {
            description: "US West (N. California)"
          },
          "us-west-2": {
            description: "US West (Oregon)"
          }
        }
      }, {
        id: "aws-cn",
        outputs: {
          dnsSuffix: "amazonaws.com.cn",
          dualStackDnsSuffix: "api.amazonwebservices.com.cn",
          implicitGlobalRegion: "cn-northwest-1",
          name: "aws-cn",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^cn\\-\\w+\\-\\d+$",
        regions: {
          "aws-cn-global": {
            description: "AWS China global region"
          },
          "cn-north-1": {
            description: "China (Beijing)"
          },
          "cn-northwest-1": {
            description: "China (Ningxia)"
          }
        }
      }, {
        id: "aws-us-gov",
        outputs: {
          dnsSuffix: "amazonaws.com",
          dualStackDnsSuffix: "api.aws",
          implicitGlobalRegion: "us-gov-west-1",
          name: "aws-us-gov",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
        regions: {
          "aws-us-gov-global": {
            description: "AWS GovCloud (US) global region"
          },
          "us-gov-east-1": {
            description: "AWS GovCloud (US-East)"
          },
          "us-gov-west-1": {
            description: "AWS GovCloud (US-West)"
          }
        }
      }, {
        id: "aws-iso",
        outputs: {
          dnsSuffix: "c2s.ic.gov",
          dualStackDnsSuffix: "c2s.ic.gov",
          implicitGlobalRegion: "us-iso-east-1",
          name: "aws-iso",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-global": {
            description: "AWS ISO (US) global region"
          },
          "us-iso-east-1": {
            description: "US ISO East"
          },
          "us-iso-west-1": {
            description: "US ISO WEST"
          }
        }
      }, {
        id: "aws-iso-b",
        outputs: {
          dnsSuffix: "sc2s.sgov.gov",
          dualStackDnsSuffix: "sc2s.sgov.gov",
          implicitGlobalRegion: "us-isob-east-1",
          name: "aws-iso-b",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-b-global": {
            description: "AWS ISOB (US) global region"
          },
          "us-isob-east-1": {
            description: "US ISOB East (Ohio)"
          }
        }
      }, {
        id: "aws-iso-e",
        outputs: {
          dnsSuffix: "cloud.adc-e.uk",
          dualStackDnsSuffix: "cloud.adc-e.uk",
          implicitGlobalRegion: "eu-isoe-west-1",
          name: "aws-iso-e",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
        regions: {}
      }, {
        id: "aws-iso-f",
        outputs: {
          dnsSuffix: "csp.hci.ic.gov",
          dualStackDnsSuffix: "csp.hci.ic.gov",
          implicitGlobalRegion: "us-isof-south-1",
          name: "aws-iso-f",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
        regions: {}
      }],
      version: "1.1"
    };
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-cjs/lib/aws/partition.js
var require_partition = __commonJS({
  "node_modules/@aws-sdk/util-endpoints/dist-cjs/lib/aws/partition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getUserAgentPrefix = exports.useDefaultPartitionInfo = exports.setPartitionInfo = exports.partition = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var partitions_json_1 = tslib_1.__importDefault(require_partitions());
    var selectedPartitionsInfo = partitions_json_1.default;
    var selectedUserAgentPrefix = "";
    var partition = (value) => {
      const { partitions } = selectedPartitionsInfo;
      for (const partition2 of partitions) {
        const { regions, outputs } = partition2;
        for (const [region, regionData] of Object.entries(regions)) {
          if (region === value) {
            return {
              ...outputs,
              ...regionData
            };
          }
        }
      }
      for (const partition2 of partitions) {
        const { regionRegex, outputs } = partition2;
        if (new RegExp(regionRegex).test(value)) {
          return {
            ...outputs
          };
        }
      }
      const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
      if (!DEFAULT_PARTITION) {
        throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
      }
      return {
        ...DEFAULT_PARTITION.outputs
      };
    };
    exports.partition = partition;
    var setPartitionInfo = (partitionsInfo, userAgentPrefix = "") => {
      selectedPartitionsInfo = partitionsInfo;
      selectedUserAgentPrefix = userAgentPrefix;
    };
    exports.setPartitionInfo = setPartitionInfo;
    var useDefaultPartitionInfo = () => {
      (0, exports.setPartitionInfo)(partitions_json_1.default, "");
    };
    exports.useDefaultPartitionInfo = useDefaultPartitionInfo;
    var getUserAgentPrefix = () => selectedUserAgentPrefix;
    exports.getUserAgentPrefix = getUserAgentPrefix;
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-cjs/aws.js
var require_aws = __commonJS({
  "node_modules/@aws-sdk/util-endpoints/dist-cjs/aws.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var util_endpoints_1 = require_dist_cjs17();
    var isVirtualHostableS3Bucket_1 = require_isVirtualHostableS3Bucket();
    var parseArn_1 = require_parseArn();
    var partition_1 = require_partition();
    var awsEndpointFunctions = {
      isVirtualHostableS3Bucket: isVirtualHostableS3Bucket_1.isVirtualHostableS3Bucket,
      parseArn: parseArn_1.parseArn,
      partition: partition_1.partition
    };
    util_endpoints_1.customEndpointFunctions.aws = awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-cjs/resolveEndpoint.js
var require_resolveEndpoint2 = __commonJS({
  "node_modules/@aws-sdk/util-endpoints/dist-cjs/resolveEndpoint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveEndpoint = void 0;
    var util_endpoints_1 = require_dist_cjs17();
    Object.defineProperty(exports, "resolveEndpoint", { enumerable: true, get: function() {
      return util_endpoints_1.resolveEndpoint;
    } });
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-cjs/types/EndpointError.js
var require_EndpointError2 = __commonJS({
  "node_modules/@aws-sdk/util-endpoints/dist-cjs/types/EndpointError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EndpointError = void 0;
    var util_endpoints_1 = require_dist_cjs17();
    Object.defineProperty(exports, "EndpointError", { enumerable: true, get: function() {
      return util_endpoints_1.EndpointError;
    } });
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-cjs/types/EndpointRuleObject.js
var require_EndpointRuleObject3 = __commonJS({
  "node_modules/@aws-sdk/util-endpoints/dist-cjs/types/EndpointRuleObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-cjs/types/ErrorRuleObject.js
var require_ErrorRuleObject3 = __commonJS({
  "node_modules/@aws-sdk/util-endpoints/dist-cjs/types/ErrorRuleObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-cjs/types/RuleSetObject.js
var require_RuleSetObject3 = __commonJS({
  "node_modules/@aws-sdk/util-endpoints/dist-cjs/types/RuleSetObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-cjs/types/TreeRuleObject.js
var require_TreeRuleObject3 = __commonJS({
  "node_modules/@aws-sdk/util-endpoints/dist-cjs/types/TreeRuleObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-cjs/types/shared.js
var require_shared3 = __commonJS({
  "node_modules/@aws-sdk/util-endpoints/dist-cjs/types/shared.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-cjs/types/index.js
var require_types3 = __commonJS({
  "node_modules/@aws-sdk/util-endpoints/dist-cjs/types/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_EndpointError2(), exports);
    tslib_1.__exportStar(require_EndpointRuleObject3(), exports);
    tslib_1.__exportStar(require_ErrorRuleObject3(), exports);
    tslib_1.__exportStar(require_RuleSetObject3(), exports);
    tslib_1.__exportStar(require_TreeRuleObject3(), exports);
    tslib_1.__exportStar(require_shared3(), exports);
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-cjs/index.js
var require_dist_cjs18 = __commonJS({
  "node_modules/@aws-sdk/util-endpoints/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_aws(), exports);
    tslib_1.__exportStar(require_partition(), exports);
    tslib_1.__exportStar(require_isIpAddress2(), exports);
    tslib_1.__exportStar(require_resolveEndpoint2(), exports);
    tslib_1.__exportStar(require_types3(), exports);
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-cjs/constants.js
var require_constants2 = __commonJS({
  "node_modules/@aws-sdk/middleware-user-agent/dist-cjs/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UA_ESCAPE_CHAR = exports.UA_VALUE_ESCAPE_REGEX = exports.UA_NAME_ESCAPE_REGEX = exports.UA_NAME_SEPARATOR = exports.SPACE = exports.X_AMZ_USER_AGENT = exports.USER_AGENT = void 0;
    exports.USER_AGENT = "user-agent";
    exports.X_AMZ_USER_AGENT = "x-amz-user-agent";
    exports.SPACE = " ";
    exports.UA_NAME_SEPARATOR = "/";
    exports.UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
    exports.UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
    exports.UA_ESCAPE_CHAR = "-";
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-cjs/user-agent-middleware.js
var require_user_agent_middleware = __commonJS({
  "node_modules/@aws-sdk/middleware-user-agent/dist-cjs/user-agent-middleware.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getUserAgentPlugin = exports.getUserAgentMiddlewareOptions = exports.userAgentMiddleware = void 0;
    var util_endpoints_1 = require_dist_cjs18();
    var protocol_http_1 = require_dist_cjs2();
    var constants_1 = require_constants2();
    var userAgentMiddleware = (options) => (next, context) => async (args) => {
      var _a, _b;
      const { request } = args;
      if (!protocol_http_1.HttpRequest.isInstance(request))
        return next(args);
      const { headers } = request;
      const userAgent = ((_a = context === null || context === void 0 ? void 0 : context.userAgent) === null || _a === void 0 ? void 0 : _a.map(escapeUserAgent)) || [];
      const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
      const customUserAgent = ((_b = options === null || options === void 0 ? void 0 : options.customUserAgent) === null || _b === void 0 ? void 0 : _b.map(escapeUserAgent)) || [];
      const prefix = (0, util_endpoints_1.getUserAgentPrefix)();
      const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent, ...userAgent, ...customUserAgent]).join(constants_1.SPACE);
      const normalUAValue = [
        ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
        ...customUserAgent
      ].join(constants_1.SPACE);
      if (options.runtime !== "browser") {
        if (normalUAValue) {
          headers[constants_1.X_AMZ_USER_AGENT] = headers[constants_1.X_AMZ_USER_AGENT] ? `${headers[constants_1.USER_AGENT]} ${normalUAValue}` : normalUAValue;
        }
        headers[constants_1.USER_AGENT] = sdkUserAgentValue;
      } else {
        headers[constants_1.X_AMZ_USER_AGENT] = sdkUserAgentValue;
      }
      return next({
        ...args,
        request
      });
    };
    exports.userAgentMiddleware = userAgentMiddleware;
    var escapeUserAgent = (userAgentPair) => {
      var _a;
      const name = userAgentPair[0].split(constants_1.UA_NAME_SEPARATOR).map((part) => part.replace(constants_1.UA_NAME_ESCAPE_REGEX, constants_1.UA_ESCAPE_CHAR)).join(constants_1.UA_NAME_SEPARATOR);
      const version2 = (_a = userAgentPair[1]) === null || _a === void 0 ? void 0 : _a.replace(constants_1.UA_VALUE_ESCAPE_REGEX, constants_1.UA_ESCAPE_CHAR);
      const prefixSeparatorIndex = name.indexOf(constants_1.UA_NAME_SEPARATOR);
      const prefix = name.substring(0, prefixSeparatorIndex);
      let uaName = name.substring(prefixSeparatorIndex + 1);
      if (prefix === "api") {
        uaName = uaName.toLowerCase();
      }
      return [prefix, uaName, version2].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
        switch (index) {
          case 0:
            return item;
          case 1:
            return `${acc}/${item}`;
          default:
            return `${acc}#${item}`;
        }
      }, "");
    };
    exports.getUserAgentMiddlewareOptions = {
      name: "getUserAgentMiddleware",
      step: "build",
      priority: "low",
      tags: ["SET_USER_AGENT", "USER_AGENT"],
      override: true
    };
    var getUserAgentPlugin = (config) => ({
      applyToStack: (clientStack) => {
        clientStack.add((0, exports.userAgentMiddleware)(config), exports.getUserAgentMiddlewareOptions);
      }
    });
    exports.getUserAgentPlugin = getUserAgentPlugin;
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-cjs/index.js
var require_dist_cjs19 = __commonJS({
  "node_modules/@aws-sdk/middleware-user-agent/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_configurations(), exports);
    tslib_1.__exportStar(require_user_agent_middleware(), exports);
  }
});

// node_modules/@smithy/util-config-provider/dist-cjs/booleanSelector.js
var require_booleanSelector = __commonJS({
  "node_modules/@smithy/util-config-provider/dist-cjs/booleanSelector.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.booleanSelector = exports.SelectorType = void 0;
    var SelectorType;
    (function(SelectorType2) {
      SelectorType2["ENV"] = "env";
      SelectorType2["CONFIG"] = "shared config entry";
    })(SelectorType = exports.SelectorType || (exports.SelectorType = {}));
    var booleanSelector = (obj, key, type) => {
      if (!(key in obj))
        return void 0;
      if (obj[key] === "true")
        return true;
      if (obj[key] === "false")
        return false;
      throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
    };
    exports.booleanSelector = booleanSelector;
  }
});

// node_modules/@smithy/util-config-provider/dist-cjs/index.js
var require_dist_cjs20 = __commonJS({
  "node_modules/@smithy/util-config-provider/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_booleanSelector(), exports);
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js
var require_NodeUseDualstackEndpointConfigOptions = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = exports.DEFAULT_USE_DUALSTACK_ENDPOINT = exports.CONFIG_USE_DUALSTACK_ENDPOINT = exports.ENV_USE_DUALSTACK_ENDPOINT = void 0;
    var util_config_provider_1 = require_dist_cjs20();
    exports.ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
    exports.CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
    exports.DEFAULT_USE_DUALSTACK_ENDPOINT = false;
    exports.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => (0, util_config_provider_1.booleanSelector)(env, exports.ENV_USE_DUALSTACK_ENDPOINT, util_config_provider_1.SelectorType.ENV),
      configFileSelector: (profile) => (0, util_config_provider_1.booleanSelector)(profile, exports.CONFIG_USE_DUALSTACK_ENDPOINT, util_config_provider_1.SelectorType.CONFIG),
      default: false
    };
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/endpointsConfig/NodeUseFipsEndpointConfigOptions.js
var require_NodeUseFipsEndpointConfigOptions = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/endpointsConfig/NodeUseFipsEndpointConfigOptions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = exports.DEFAULT_USE_FIPS_ENDPOINT = exports.CONFIG_USE_FIPS_ENDPOINT = exports.ENV_USE_FIPS_ENDPOINT = void 0;
    var util_config_provider_1 = require_dist_cjs20();
    exports.ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
    exports.CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
    exports.DEFAULT_USE_FIPS_ENDPOINT = false;
    exports.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => (0, util_config_provider_1.booleanSelector)(env, exports.ENV_USE_FIPS_ENDPOINT, util_config_provider_1.SelectorType.ENV),
      configFileSelector: (profile) => (0, util_config_provider_1.booleanSelector)(profile, exports.CONFIG_USE_FIPS_ENDPOINT, util_config_provider_1.SelectorType.CONFIG),
      default: false
    };
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/endpointsConfig/resolveCustomEndpointsConfig.js
var require_resolveCustomEndpointsConfig = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/endpointsConfig/resolveCustomEndpointsConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveCustomEndpointsConfig = void 0;
    var util_middleware_1 = require_dist_cjs10();
    var resolveCustomEndpointsConfig = (input) => {
      var _a, _b;
      const { endpoint, urlParser } = input;
      return {
        ...input,
        tls: (_a = input.tls) !== null && _a !== void 0 ? _a : true,
        endpoint: (0, util_middleware_1.normalizeProvider)(typeof endpoint === "string" ? urlParser(endpoint) : endpoint),
        isCustomEndpoint: true,
        useDualstackEndpoint: (0, util_middleware_1.normalizeProvider)((_b = input.useDualstackEndpoint) !== null && _b !== void 0 ? _b : false)
      };
    };
    exports.resolveCustomEndpointsConfig = resolveCustomEndpointsConfig;
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/endpointsConfig/utils/getEndpointFromRegion.js
var require_getEndpointFromRegion = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/endpointsConfig/utils/getEndpointFromRegion.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getEndpointFromRegion = void 0;
    var getEndpointFromRegion = async (input) => {
      var _a;
      const { tls = true } = input;
      const region = await input.region();
      const dnsHostRegex = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
      if (!dnsHostRegex.test(region)) {
        throw new Error("Invalid region in client config");
      }
      const useDualstackEndpoint = await input.useDualstackEndpoint();
      const useFipsEndpoint = await input.useFipsEndpoint();
      const { hostname } = (_a = await input.regionInfoProvider(region, { useDualstackEndpoint, useFipsEndpoint })) !== null && _a !== void 0 ? _a : {};
      if (!hostname) {
        throw new Error("Cannot resolve hostname from client config");
      }
      return input.urlParser(`${tls ? "https:" : "http:"}//${hostname}`);
    };
    exports.getEndpointFromRegion = getEndpointFromRegion;
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/endpointsConfig/resolveEndpointsConfig.js
var require_resolveEndpointsConfig = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/endpointsConfig/resolveEndpointsConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveEndpointsConfig = void 0;
    var util_middleware_1 = require_dist_cjs10();
    var getEndpointFromRegion_1 = require_getEndpointFromRegion();
    var resolveEndpointsConfig = (input) => {
      var _a, _b;
      const useDualstackEndpoint = (0, util_middleware_1.normalizeProvider)((_a = input.useDualstackEndpoint) !== null && _a !== void 0 ? _a : false);
      const { endpoint, useFipsEndpoint, urlParser } = input;
      return {
        ...input,
        tls: (_b = input.tls) !== null && _b !== void 0 ? _b : true,
        endpoint: endpoint ? (0, util_middleware_1.normalizeProvider)(typeof endpoint === "string" ? urlParser(endpoint) : endpoint) : () => (0, getEndpointFromRegion_1.getEndpointFromRegion)({ ...input, useDualstackEndpoint, useFipsEndpoint }),
        isCustomEndpoint: !!endpoint,
        useDualstackEndpoint
      };
    };
    exports.resolveEndpointsConfig = resolveEndpointsConfig;
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/endpointsConfig/index.js
var require_endpointsConfig = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/endpointsConfig/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_NodeUseDualstackEndpointConfigOptions(), exports);
    tslib_1.__exportStar(require_NodeUseFipsEndpointConfigOptions(), exports);
    tslib_1.__exportStar(require_resolveCustomEndpointsConfig(), exports);
    tslib_1.__exportStar(require_resolveEndpointsConfig(), exports);
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/regionConfig/config.js
var require_config2 = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/regionConfig/config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NODE_REGION_CONFIG_FILE_OPTIONS = exports.NODE_REGION_CONFIG_OPTIONS = exports.REGION_INI_NAME = exports.REGION_ENV_NAME = void 0;
    exports.REGION_ENV_NAME = "AWS_REGION";
    exports.REGION_INI_NAME = "region";
    exports.NODE_REGION_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => env[exports.REGION_ENV_NAME],
      configFileSelector: (profile) => profile[exports.REGION_INI_NAME],
      default: () => {
        throw new Error("Region is missing");
      }
    };
    exports.NODE_REGION_CONFIG_FILE_OPTIONS = {
      preferredFile: "credentials"
    };
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/regionConfig/isFipsRegion.js
var require_isFipsRegion = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/regionConfig/isFipsRegion.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isFipsRegion = void 0;
    var isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));
    exports.isFipsRegion = isFipsRegion;
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/regionConfig/getRealRegion.js
var require_getRealRegion = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/regionConfig/getRealRegion.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRealRegion = void 0;
    var isFipsRegion_1 = require_isFipsRegion();
    var getRealRegion = (region) => (0, isFipsRegion_1.isFipsRegion)(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region;
    exports.getRealRegion = getRealRegion;
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/regionConfig/resolveRegionConfig.js
var require_resolveRegionConfig = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/regionConfig/resolveRegionConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveRegionConfig = void 0;
    var getRealRegion_1 = require_getRealRegion();
    var isFipsRegion_1 = require_isFipsRegion();
    var resolveRegionConfig = (input) => {
      const { region, useFipsEndpoint } = input;
      if (!region) {
        throw new Error("Region is missing");
      }
      return {
        ...input,
        region: async () => {
          if (typeof region === "string") {
            return (0, getRealRegion_1.getRealRegion)(region);
          }
          const providedRegion = await region();
          return (0, getRealRegion_1.getRealRegion)(providedRegion);
        },
        useFipsEndpoint: async () => {
          const providedRegion = typeof region === "string" ? region : await region();
          if ((0, isFipsRegion_1.isFipsRegion)(providedRegion)) {
            return true;
          }
          return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        }
      };
    };
    exports.resolveRegionConfig = resolveRegionConfig;
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/regionConfig/index.js
var require_regionConfig = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/regionConfig/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_config2(), exports);
    tslib_1.__exportStar(require_resolveRegionConfig(), exports);
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/regionInfo/PartitionHash.js
var require_PartitionHash = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/regionInfo/PartitionHash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/regionInfo/RegionHash.js
var require_RegionHash = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/regionInfo/RegionHash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/regionInfo/getHostnameFromVariants.js
var require_getHostnameFromVariants = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/regionInfo/getHostnameFromVariants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getHostnameFromVariants = void 0;
    var getHostnameFromVariants = (variants = [], { useFipsEndpoint, useDualstackEndpoint }) => {
      var _a;
      return (_a = variants.find(({ tags }) => useFipsEndpoint === tags.includes("fips") && useDualstackEndpoint === tags.includes("dualstack"))) === null || _a === void 0 ? void 0 : _a.hostname;
    };
    exports.getHostnameFromVariants = getHostnameFromVariants;
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/regionInfo/getResolvedHostname.js
var require_getResolvedHostname = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/regionInfo/getResolvedHostname.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getResolvedHostname = void 0;
    var getResolvedHostname = (resolvedRegion, { regionHostname, partitionHostname }) => regionHostname ? regionHostname : partitionHostname ? partitionHostname.replace("{region}", resolvedRegion) : void 0;
    exports.getResolvedHostname = getResolvedHostname;
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/regionInfo/getResolvedPartition.js
var require_getResolvedPartition = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/regionInfo/getResolvedPartition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getResolvedPartition = void 0;
    var getResolvedPartition = (region, { partitionHash }) => {
      var _a;
      return (_a = Object.keys(partitionHash || {}).find((key) => partitionHash[key].regions.includes(region))) !== null && _a !== void 0 ? _a : "aws";
    };
    exports.getResolvedPartition = getResolvedPartition;
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/regionInfo/getResolvedSigningRegion.js
var require_getResolvedSigningRegion = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/regionInfo/getResolvedSigningRegion.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getResolvedSigningRegion = void 0;
    var getResolvedSigningRegion = (hostname, { signingRegion, regionRegex, useFipsEndpoint }) => {
      if (signingRegion) {
        return signingRegion;
      } else if (useFipsEndpoint) {
        const regionRegexJs = regionRegex.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\.");
        const regionRegexmatchArray = hostname.match(regionRegexJs);
        if (regionRegexmatchArray) {
          return regionRegexmatchArray[0].slice(1, -1);
        }
      }
    };
    exports.getResolvedSigningRegion = getResolvedSigningRegion;
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/regionInfo/getRegionInfo.js
var require_getRegionInfo = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/regionInfo/getRegionInfo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRegionInfo = void 0;
    var getHostnameFromVariants_1 = require_getHostnameFromVariants();
    var getResolvedHostname_1 = require_getResolvedHostname();
    var getResolvedPartition_1 = require_getResolvedPartition();
    var getResolvedSigningRegion_1 = require_getResolvedSigningRegion();
    var getRegionInfo = (region, { useFipsEndpoint = false, useDualstackEndpoint = false, signingService, regionHash, partitionHash }) => {
      var _a, _b, _c, _d, _e, _f;
      const partition = (0, getResolvedPartition_1.getResolvedPartition)(region, { partitionHash });
      const resolvedRegion = region in regionHash ? region : (_b = (_a = partitionHash[partition]) === null || _a === void 0 ? void 0 : _a.endpoint) !== null && _b !== void 0 ? _b : region;
      const hostnameOptions = { useFipsEndpoint, useDualstackEndpoint };
      const regionHostname = (0, getHostnameFromVariants_1.getHostnameFromVariants)((_c = regionHash[resolvedRegion]) === null || _c === void 0 ? void 0 : _c.variants, hostnameOptions);
      const partitionHostname = (0, getHostnameFromVariants_1.getHostnameFromVariants)((_d = partitionHash[partition]) === null || _d === void 0 ? void 0 : _d.variants, hostnameOptions);
      const hostname = (0, getResolvedHostname_1.getResolvedHostname)(resolvedRegion, { regionHostname, partitionHostname });
      if (hostname === void 0) {
        throw new Error(`Endpoint resolution failed for: ${{ resolvedRegion, useFipsEndpoint, useDualstackEndpoint }}`);
      }
      const signingRegion = (0, getResolvedSigningRegion_1.getResolvedSigningRegion)(hostname, {
        signingRegion: (_e = regionHash[resolvedRegion]) === null || _e === void 0 ? void 0 : _e.signingRegion,
        regionRegex: partitionHash[partition].regionRegex,
        useFipsEndpoint
      });
      return {
        partition,
        signingService,
        hostname,
        ...signingRegion && { signingRegion },
        ...((_f = regionHash[resolvedRegion]) === null || _f === void 0 ? void 0 : _f.signingService) && {
          signingService: regionHash[resolvedRegion].signingService
        }
      };
    };
    exports.getRegionInfo = getRegionInfo;
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/regionInfo/index.js
var require_regionInfo = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/regionInfo/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_PartitionHash(), exports);
    tslib_1.__exportStar(require_RegionHash(), exports);
    tslib_1.__exportStar(require_getRegionInfo(), exports);
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/index.js
var require_dist_cjs21 = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_endpointsConfig(), exports);
    tslib_1.__exportStar(require_regionConfig(), exports);
    tslib_1.__exportStar(require_regionInfo(), exports);
  }
});

// node_modules/@smithy/middleware-content-length/dist-cjs/index.js
var require_dist_cjs22 = __commonJS({
  "node_modules/@smithy/middleware-content-length/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getContentLengthPlugin = exports.contentLengthMiddlewareOptions = exports.contentLengthMiddleware = void 0;
    var protocol_http_1 = require_dist_cjs2();
    var CONTENT_LENGTH_HEADER = "content-length";
    function contentLengthMiddleware(bodyLengthChecker) {
      return (next) => async (args) => {
        const request = args.request;
        if (protocol_http_1.HttpRequest.isInstance(request)) {
          const { body, headers } = request;
          if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER) === -1) {
            try {
              const length = bodyLengthChecker(body);
              request.headers = {
                ...request.headers,
                [CONTENT_LENGTH_HEADER]: String(length)
              };
            } catch (error) {
            }
          }
        }
        return next({
          ...args,
          request
        });
      };
    }
    exports.contentLengthMiddleware = contentLengthMiddleware;
    exports.contentLengthMiddlewareOptions = {
      step: "build",
      tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
      name: "contentLengthMiddleware",
      override: true
    };
    var getContentLengthPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), exports.contentLengthMiddlewareOptions);
      }
    });
    exports.getContentLengthPlugin = getContentLengthPlugin;
  }
});

// node_modules/@smithy/middleware-endpoint/dist-cjs/service-customizations/s3.js
var require_s3 = __commonJS({
  "node_modules/@smithy/middleware-endpoint/dist-cjs/service-customizations/s3.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isArnBucketName = exports.isDnsCompatibleBucketName = exports.S3_HOSTNAME_PATTERN = exports.DOT_PATTERN = exports.resolveParamsForS3 = void 0;
    var resolveParamsForS3 = async (endpointParams) => {
      const bucket = (endpointParams === null || endpointParams === void 0 ? void 0 : endpointParams.Bucket) || "";
      if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
      }
      if ((0, exports.isArnBucketName)(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
          throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
      } else if (!(0, exports.isDnsCompatibleBucketName)(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
      }
      if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
      }
      return endpointParams;
    };
    exports.resolveParamsForS3 = resolveParamsForS3;
    var DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
    var IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
    var DOTS_PATTERN = /\.\./;
    exports.DOT_PATTERN = /\./;
    exports.S3_HOSTNAME_PATTERN = /^(.+\.)?s3(-fips)?(\.dualstack)?[.-]([a-z0-9-]+)\./;
    var isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
    exports.isDnsCompatibleBucketName = isDnsCompatibleBucketName;
    var isArnBucketName = (bucketName) => {
      const [arn, partition, service, region, account, typeOrId] = bucketName.split(":");
      const isArn = arn === "arn" && bucketName.split(":").length >= 6;
      const isValidArn = [arn, partition, service, account, typeOrId].filter(Boolean).length === 5;
      if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
      }
      return arn === "arn" && !!partition && !!service && !!account && !!typeOrId;
    };
    exports.isArnBucketName = isArnBucketName;
  }
});

// node_modules/@smithy/middleware-endpoint/dist-cjs/service-customizations/index.js
var require_service_customizations = __commonJS({
  "node_modules/@smithy/middleware-endpoint/dist-cjs/service-customizations/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_s3(), exports);
  }
});

// node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/createConfigValueProvider.js
var require_createConfigValueProvider = __commonJS({
  "node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/createConfigValueProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createConfigValueProvider = void 0;
    var createConfigValueProvider = (configKey, canonicalEndpointParamKey, config) => {
      const configProvider = async () => {
        var _a;
        const configValue = (_a = config[configKey]) !== null && _a !== void 0 ? _a : config[canonicalEndpointParamKey];
        if (typeof configValue === "function") {
          return configValue();
        }
        return configValue;
      };
      if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async () => {
          const endpoint = await configProvider();
          if (endpoint && typeof endpoint === "object") {
            if ("url" in endpoint) {
              return endpoint.url.href;
            }
            if ("hostname" in endpoint) {
              const { protocol, hostname, port, path } = endpoint;
              return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
            }
          }
          return endpoint;
        };
      }
      return configProvider;
    };
    exports.createConfigValueProvider = createConfigValueProvider;
  }
});

// node_modules/@smithy/node-config-provider/dist-cjs/fromEnv.js
var require_fromEnv = __commonJS({
  "node_modules/@smithy/node-config-provider/dist-cjs/fromEnv.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromEnv = void 0;
    var property_provider_1 = require_dist_cjs6();
    var fromEnv = (envVarSelector) => async () => {
      try {
        const config = envVarSelector(process.env);
        if (config === void 0) {
          throw new Error();
        }
        return config;
      } catch (e) {
        throw new property_provider_1.CredentialsProviderError(e.message || `Cannot load config from environment variables with getter: ${envVarSelector}`);
      }
    };
    exports.fromEnv = fromEnv;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/getHomeDir.js
var require_getHomeDir = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/getHomeDir.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getHomeDir = void 0;
    var os_1 = require("os");
    var path_1 = require("path");
    var homeDirCache = {};
    var getHomeDirCacheKey = () => {
      if (process && process.geteuid) {
        return `${process.geteuid()}`;
      }
      return "DEFAULT";
    };
    var getHomeDir = () => {
      const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${path_1.sep}` } = process.env;
      if (HOME)
        return HOME;
      if (USERPROFILE)
        return USERPROFILE;
      if (HOMEPATH)
        return `${HOMEDRIVE}${HOMEPATH}`;
      const homeDirCacheKey = getHomeDirCacheKey();
      if (!homeDirCache[homeDirCacheKey])
        homeDirCache[homeDirCacheKey] = (0, os_1.homedir)();
      return homeDirCache[homeDirCacheKey];
    };
    exports.getHomeDir = getHomeDir;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/getProfileName.js
var require_getProfileName = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/getProfileName.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getProfileName = exports.DEFAULT_PROFILE = exports.ENV_PROFILE = void 0;
    exports.ENV_PROFILE = "AWS_PROFILE";
    exports.DEFAULT_PROFILE = "default";
    var getProfileName = (init) => init.profile || process.env[exports.ENV_PROFILE] || exports.DEFAULT_PROFILE;
    exports.getProfileName = getProfileName;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFilepath.js
var require_getSSOTokenFilepath = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFilepath.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSSOTokenFilepath = void 0;
    var crypto_1 = require("crypto");
    var path_1 = require("path");
    var getHomeDir_1 = require_getHomeDir();
    var getSSOTokenFilepath = (id) => {
      const hasher = (0, crypto_1.createHash)("sha1");
      const cacheName = hasher.update(id).digest("hex");
      return (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "sso", "cache", `${cacheName}.json`);
    };
    exports.getSSOTokenFilepath = getSSOTokenFilepath;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFromFile.js
var require_getSSOTokenFromFile = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFromFile.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSSOTokenFromFile = void 0;
    var fs_1 = require("fs");
    var getSSOTokenFilepath_1 = require_getSSOTokenFilepath();
    var { readFile } = fs_1.promises;
    var getSSOTokenFromFile = async (id) => {
      const ssoTokenFilepath = (0, getSSOTokenFilepath_1.getSSOTokenFilepath)(id);
      const ssoTokenText = await readFile(ssoTokenFilepath, "utf8");
      return JSON.parse(ssoTokenText);
    };
    exports.getSSOTokenFromFile = getSSOTokenFromFile;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/getConfigData.js
var require_getConfigData = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/getConfigData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getConfigData = void 0;
    var types_1 = require_dist_cjs();
    var loadSharedConfigFiles_1 = require_loadSharedConfigFiles();
    var getConfigData = (data) => Object.entries(data).filter(([key]) => {
      const sections = key.split(loadSharedConfigFiles_1.CONFIG_PREFIX_SEPARATOR);
      if (sections.length === 2 && Object.values(types_1.IniSectionType).includes(sections[0])) {
        return true;
      }
      return false;
    }).reduce((acc, [key, value]) => {
      const updatedKey = key.startsWith(types_1.IniSectionType.PROFILE) ? key.split(loadSharedConfigFiles_1.CONFIG_PREFIX_SEPARATOR)[1] : key;
      acc[updatedKey] = value;
      return acc;
    }, {
      ...data.default && { default: data.default }
    });
    exports.getConfigData = getConfigData;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/getConfigFilepath.js
var require_getConfigFilepath = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/getConfigFilepath.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getConfigFilepath = exports.ENV_CONFIG_PATH = void 0;
    var path_1 = require("path");
    var getHomeDir_1 = require_getHomeDir();
    exports.ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
    var getConfigFilepath = () => process.env[exports.ENV_CONFIG_PATH] || (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "config");
    exports.getConfigFilepath = getConfigFilepath;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/getCredentialsFilepath.js
var require_getCredentialsFilepath = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/getCredentialsFilepath.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getCredentialsFilepath = exports.ENV_CREDENTIALS_PATH = void 0;
    var path_1 = require("path");
    var getHomeDir_1 = require_getHomeDir();
    exports.ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
    var getCredentialsFilepath = () => process.env[exports.ENV_CREDENTIALS_PATH] || (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "credentials");
    exports.getCredentialsFilepath = getCredentialsFilepath;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/parseIni.js
var require_parseIni = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/parseIni.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseIni = void 0;
    var types_1 = require_dist_cjs();
    var loadSharedConfigFiles_1 = require_loadSharedConfigFiles();
    var prefixKeyRegex = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/;
    var profileNameBlockList = ["__proto__", "profile __proto__"];
    var parseIni = (iniData) => {
      const map = {};
      let currentSection;
      let currentSubSection;
      for (const iniLine of iniData.split(/\r?\n/)) {
        const trimmedLine = iniLine.split(/(^|\s)[;#]/)[0].trim();
        const isSection = trimmedLine[0] === "[" && trimmedLine[trimmedLine.length - 1] === "]";
        if (isSection) {
          currentSection = void 0;
          currentSubSection = void 0;
          const sectionName = trimmedLine.substring(1, trimmedLine.length - 1);
          const matches = prefixKeyRegex.exec(sectionName);
          if (matches) {
            const [, prefix, , name] = matches;
            if (Object.values(types_1.IniSectionType).includes(prefix)) {
              currentSection = [prefix, name].join(loadSharedConfigFiles_1.CONFIG_PREFIX_SEPARATOR);
            }
          } else {
            currentSection = sectionName;
          }
          if (profileNameBlockList.includes(sectionName)) {
            throw new Error(`Found invalid profile name "${sectionName}"`);
          }
        } else if (currentSection) {
          const indexOfEqualsSign = trimmedLine.indexOf("=");
          if (![0, -1].includes(indexOfEqualsSign)) {
            const [name, value] = [
              trimmedLine.substring(0, indexOfEqualsSign).trim(),
              trimmedLine.substring(indexOfEqualsSign + 1).trim()
            ];
            if (value === "") {
              currentSubSection = name;
            } else {
              if (currentSubSection && iniLine.trimStart() === iniLine) {
                currentSubSection = void 0;
              }
              map[currentSection] = map[currentSection] || {};
              const key = currentSubSection ? [currentSubSection, name].join(loadSharedConfigFiles_1.CONFIG_PREFIX_SEPARATOR) : name;
              map[currentSection][key] = value;
            }
          }
        }
      }
      return map;
    };
    exports.parseIni = parseIni;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/slurpFile.js
var require_slurpFile = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/slurpFile.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.slurpFile = void 0;
    var fs_1 = require("fs");
    var { readFile } = fs_1.promises;
    var filePromisesHash = {};
    var slurpFile = (path, options) => {
      if (!filePromisesHash[path] || (options === null || options === void 0 ? void 0 : options.ignoreCache)) {
        filePromisesHash[path] = readFile(path, "utf8");
      }
      return filePromisesHash[path];
    };
    exports.slurpFile = slurpFile;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/loadSharedConfigFiles.js
var require_loadSharedConfigFiles = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/loadSharedConfigFiles.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadSharedConfigFiles = exports.CONFIG_PREFIX_SEPARATOR = void 0;
    var getConfigData_1 = require_getConfigData();
    var getConfigFilepath_1 = require_getConfigFilepath();
    var getCredentialsFilepath_1 = require_getCredentialsFilepath();
    var parseIni_1 = require_parseIni();
    var slurpFile_1 = require_slurpFile();
    var swallowError = () => ({});
    exports.CONFIG_PREFIX_SEPARATOR = ".";
    var loadSharedConfigFiles = async (init = {}) => {
      const { filepath = (0, getCredentialsFilepath_1.getCredentialsFilepath)(), configFilepath = (0, getConfigFilepath_1.getConfigFilepath)() } = init;
      const parsedFiles = await Promise.all([
        (0, slurpFile_1.slurpFile)(configFilepath, {
          ignoreCache: init.ignoreCache
        }).then(parseIni_1.parseIni).then(getConfigData_1.getConfigData).catch(swallowError),
        (0, slurpFile_1.slurpFile)(filepath, {
          ignoreCache: init.ignoreCache
        }).then(parseIni_1.parseIni).catch(swallowError)
      ]);
      return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1]
      };
    };
    exports.loadSharedConfigFiles = loadSharedConfigFiles;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSsoSessionData.js
var require_getSsoSessionData = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSsoSessionData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSsoSessionData = void 0;
    var types_1 = require_dist_cjs();
    var loadSharedConfigFiles_1 = require_loadSharedConfigFiles();
    var getSsoSessionData = (data) => Object.entries(data).filter(([key]) => key.startsWith(types_1.IniSectionType.SSO_SESSION + loadSharedConfigFiles_1.CONFIG_PREFIX_SEPARATOR)).reduce((acc, [key, value]) => ({ ...acc, [key.split(loadSharedConfigFiles_1.CONFIG_PREFIX_SEPARATOR)[1]]: value }), {});
    exports.getSsoSessionData = getSsoSessionData;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/loadSsoSessionData.js
var require_loadSsoSessionData = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/loadSsoSessionData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadSsoSessionData = void 0;
    var getConfigFilepath_1 = require_getConfigFilepath();
    var getSsoSessionData_1 = require_getSsoSessionData();
    var parseIni_1 = require_parseIni();
    var slurpFile_1 = require_slurpFile();
    var swallowError = () => ({});
    var loadSsoSessionData = async (init = {}) => {
      var _a;
      return (0, slurpFile_1.slurpFile)((_a = init.configFilepath) !== null && _a !== void 0 ? _a : (0, getConfigFilepath_1.getConfigFilepath)()).then(parseIni_1.parseIni).then(getSsoSessionData_1.getSsoSessionData).catch(swallowError);
    };
    exports.loadSsoSessionData = loadSsoSessionData;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/mergeConfigFiles.js
var require_mergeConfigFiles = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/mergeConfigFiles.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeConfigFiles = void 0;
    var mergeConfigFiles = (...files) => {
      const merged = {};
      for (const file of files) {
        for (const [key, values] of Object.entries(file)) {
          if (merged[key] !== void 0) {
            Object.assign(merged[key], values);
          } else {
            merged[key] = values;
          }
        }
      }
      return merged;
    };
    exports.mergeConfigFiles = mergeConfigFiles;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/parseKnownFiles.js
var require_parseKnownFiles = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/parseKnownFiles.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseKnownFiles = void 0;
    var loadSharedConfigFiles_1 = require_loadSharedConfigFiles();
    var mergeConfigFiles_1 = require_mergeConfigFiles();
    var parseKnownFiles = async (init) => {
      const parsedFiles = await (0, loadSharedConfigFiles_1.loadSharedConfigFiles)(init);
      return (0, mergeConfigFiles_1.mergeConfigFiles)(parsedFiles.configFile, parsedFiles.credentialsFile);
    };
    exports.parseKnownFiles = parseKnownFiles;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/types.js
var require_types4 = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/index.js
var require_dist_cjs23 = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_getHomeDir(), exports);
    tslib_1.__exportStar(require_getProfileName(), exports);
    tslib_1.__exportStar(require_getSSOTokenFilepath(), exports);
    tslib_1.__exportStar(require_getSSOTokenFromFile(), exports);
    tslib_1.__exportStar(require_loadSharedConfigFiles(), exports);
    tslib_1.__exportStar(require_loadSsoSessionData(), exports);
    tslib_1.__exportStar(require_parseKnownFiles(), exports);
    tslib_1.__exportStar(require_types4(), exports);
  }
});

// node_modules/@smithy/node-config-provider/dist-cjs/fromSharedConfigFiles.js
var require_fromSharedConfigFiles = __commonJS({
  "node_modules/@smithy/node-config-provider/dist-cjs/fromSharedConfigFiles.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromSharedConfigFiles = void 0;
    var property_provider_1 = require_dist_cjs6();
    var shared_ini_file_loader_1 = require_dist_cjs23();
    var fromSharedConfigFiles = (configSelector, { preferredFile = "config", ...init } = {}) => async () => {
      const profile = (0, shared_ini_file_loader_1.getProfileName)(init);
      const { configFile, credentialsFile } = await (0, shared_ini_file_loader_1.loadSharedConfigFiles)(init);
      const profileFromCredentials = credentialsFile[profile] || {};
      const profileFromConfig = configFile[profile] || {};
      const mergedProfile = preferredFile === "config" ? { ...profileFromCredentials, ...profileFromConfig } : { ...profileFromConfig, ...profileFromCredentials };
      try {
        const cfgFile = preferredFile === "config" ? configFile : credentialsFile;
        const configValue = configSelector(mergedProfile, cfgFile);
        if (configValue === void 0) {
          throw new Error();
        }
        return configValue;
      } catch (e) {
        throw new property_provider_1.CredentialsProviderError(e.message || `Cannot load config for profile ${profile} in SDK configuration files with getter: ${configSelector}`);
      }
    };
    exports.fromSharedConfigFiles = fromSharedConfigFiles;
  }
});

// node_modules/@smithy/node-config-provider/dist-cjs/fromStatic.js
var require_fromStatic2 = __commonJS({
  "node_modules/@smithy/node-config-provider/dist-cjs/fromStatic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromStatic = void 0;
    var property_provider_1 = require_dist_cjs6();
    var isFunction = (func) => typeof func === "function";
    var fromStatic = (defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : (0, property_provider_1.fromStatic)(defaultValue);
    exports.fromStatic = fromStatic;
  }
});

// node_modules/@smithy/node-config-provider/dist-cjs/configLoader.js
var require_configLoader = __commonJS({
  "node_modules/@smithy/node-config-provider/dist-cjs/configLoader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadConfig = void 0;
    var property_provider_1 = require_dist_cjs6();
    var fromEnv_1 = require_fromEnv();
    var fromSharedConfigFiles_1 = require_fromSharedConfigFiles();
    var fromStatic_1 = require_fromStatic2();
    var loadConfig = ({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => (0, property_provider_1.memoize)((0, property_provider_1.chain)((0, fromEnv_1.fromEnv)(environmentVariableSelector), (0, fromSharedConfigFiles_1.fromSharedConfigFiles)(configFileSelector, configuration), (0, fromStatic_1.fromStatic)(defaultValue)));
    exports.loadConfig = loadConfig;
  }
});

// node_modules/@smithy/node-config-provider/dist-cjs/index.js
var require_dist_cjs24 = __commonJS({
  "node_modules/@smithy/node-config-provider/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_configLoader(), exports);
  }
});

// node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointUrlConfig.js
var require_getEndpointUrlConfig = __commonJS({
  "node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointUrlConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getEndpointUrlConfig = void 0;
    var shared_ini_file_loader_1 = require_dist_cjs23();
    var ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
    var CONFIG_ENDPOINT_URL = "endpoint_url";
    var getEndpointUrlConfig = (serviceId) => ({
      environmentVariableSelector: (env) => {
        const serviceSuffixParts = serviceId.split(" ").map((w) => w.toUpperCase());
        const serviceEndpointUrl = env[[ENV_ENDPOINT_URL, ...serviceSuffixParts].join("_")];
        if (serviceEndpointUrl)
          return serviceEndpointUrl;
        const endpointUrl = env[ENV_ENDPOINT_URL];
        if (endpointUrl)
          return endpointUrl;
        return void 0;
      },
      configFileSelector: (profile, config) => {
        if (config && profile.services) {
          const servicesSection = config[["services", profile.services].join(shared_ini_file_loader_1.CONFIG_PREFIX_SEPARATOR)];
          if (servicesSection) {
            const servicePrefixParts = serviceId.split(" ").map((w) => w.toLowerCase());
            const endpointUrl2 = servicesSection[[servicePrefixParts.join("_"), CONFIG_ENDPOINT_URL].join(shared_ini_file_loader_1.CONFIG_PREFIX_SEPARATOR)];
            if (endpointUrl2)
              return endpointUrl2;
          }
        }
        const endpointUrl = profile[CONFIG_ENDPOINT_URL];
        if (endpointUrl)
          return endpointUrl;
        return void 0;
      },
      default: void 0
    });
    exports.getEndpointUrlConfig = getEndpointUrlConfig;
  }
});

// node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointFromConfig.js
var require_getEndpointFromConfig = __commonJS({
  "node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointFromConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getEndpointFromConfig = void 0;
    var node_config_provider_1 = require_dist_cjs24();
    var getEndpointUrlConfig_1 = require_getEndpointUrlConfig();
    var getEndpointFromConfig = async (serviceId) => (0, node_config_provider_1.loadConfig)((0, getEndpointUrlConfig_1.getEndpointUrlConfig)(serviceId))();
    exports.getEndpointFromConfig = getEndpointFromConfig;
  }
});

// node_modules/@smithy/querystring-parser/dist-cjs/index.js
var require_dist_cjs25 = __commonJS({
  "node_modules/@smithy/querystring-parser/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseQueryString = void 0;
    function parseQueryString(querystring) {
      const query = {};
      querystring = querystring.replace(/^\?/, "");
      if (querystring) {
        for (const pair of querystring.split("&")) {
          let [key, value = null] = pair.split("=");
          key = decodeURIComponent(key);
          if (value) {
            value = decodeURIComponent(value);
          }
          if (!(key in query)) {
            query[key] = value;
          } else if (Array.isArray(query[key])) {
            query[key].push(value);
          } else {
            query[key] = [query[key], value];
          }
        }
      }
      return query;
    }
    exports.parseQueryString = parseQueryString;
  }
});

// node_modules/@smithy/url-parser/dist-cjs/index.js
var require_dist_cjs26 = __commonJS({
  "node_modules/@smithy/url-parser/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseUrl = void 0;
    var querystring_parser_1 = require_dist_cjs25();
    var parseUrl = (url) => {
      if (typeof url === "string") {
        return (0, exports.parseUrl)(new URL(url));
      }
      const { hostname, pathname, port, protocol, search } = url;
      let query;
      if (search) {
        query = (0, querystring_parser_1.parseQueryString)(search);
      }
      return {
        hostname,
        port: port ? parseInt(port) : void 0,
        protocol,
        path: pathname,
        query
      };
    };
    exports.parseUrl = parseUrl;
  }
});

// node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/toEndpointV1.js
var require_toEndpointV1 = __commonJS({
  "node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/toEndpointV1.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toEndpointV1 = void 0;
    var url_parser_1 = require_dist_cjs26();
    var toEndpointV1 = (endpoint) => {
      if (typeof endpoint === "object") {
        if ("url" in endpoint) {
          return (0, url_parser_1.parseUrl)(endpoint.url);
        }
        return endpoint;
      }
      return (0, url_parser_1.parseUrl)(endpoint);
    };
    exports.toEndpointV1 = toEndpointV1;
  }
});

// node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointFromInstructions.js
var require_getEndpointFromInstructions = __commonJS({
  "node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointFromInstructions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveParams = exports.getEndpointFromInstructions = void 0;
    var service_customizations_1 = require_service_customizations();
    var createConfigValueProvider_1 = require_createConfigValueProvider();
    var getEndpointFromConfig_1 = require_getEndpointFromConfig();
    var toEndpointV1_1 = require_toEndpointV1();
    var getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
      if (!clientConfig.endpoint) {
        const endpointFromConfig = await (0, getEndpointFromConfig_1.getEndpointFromConfig)(clientConfig.serviceId || "");
        if (endpointFromConfig) {
          clientConfig.endpoint = () => Promise.resolve((0, toEndpointV1_1.toEndpointV1)(endpointFromConfig));
        }
      }
      const endpointParams = await (0, exports.resolveParams)(commandInput, instructionsSupplier, clientConfig);
      if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
      }
      const endpoint = clientConfig.endpointProvider(endpointParams, context);
      return endpoint;
    };
    exports.getEndpointFromInstructions = getEndpointFromInstructions;
    var resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
      var _a;
      const endpointParams = {};
      const instructions = ((_a = instructionsSupplier === null || instructionsSupplier === void 0 ? void 0 : instructionsSupplier.getEndpointParameterInstructions) === null || _a === void 0 ? void 0 : _a.call(instructionsSupplier)) || {};
      for (const [name, instruction] of Object.entries(instructions)) {
        switch (instruction.type) {
          case "staticContextParams":
            endpointParams[name] = instruction.value;
            break;
          case "contextParams":
            endpointParams[name] = commandInput[instruction.name];
            break;
          case "clientContextParams":
          case "builtInParams":
            endpointParams[name] = await (0, createConfigValueProvider_1.createConfigValueProvider)(instruction.name, name, clientConfig)();
            break;
          default:
            throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
      }
      if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
      }
      if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await (0, service_customizations_1.resolveParamsForS3)(endpointParams);
      }
      return endpointParams;
    };
    exports.resolveParams = resolveParams;
  }
});

// node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/index.js
var require_adaptors = __commonJS({
  "node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_getEndpointFromInstructions(), exports);
    tslib_1.__exportStar(require_toEndpointV1(), exports);
  }
});

// node_modules/@smithy/middleware-endpoint/dist-cjs/endpointMiddleware.js
var require_endpointMiddleware = __commonJS({
  "node_modules/@smithy/middleware-endpoint/dist-cjs/endpointMiddleware.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.endpointMiddleware = void 0;
    var util_middleware_1 = require_dist_cjs10();
    var getEndpointFromInstructions_1 = require_getEndpointFromInstructions();
    var endpointMiddleware = ({ config, instructions }) => {
      return (next, context) => async (args) => {
        var _a, _b, _c;
        const endpoint = await (0, getEndpointFromInstructions_1.getEndpointFromInstructions)(args.input, {
          getEndpointParameterInstructions() {
            return instructions;
          }
        }, { ...config }, context);
        context.endpointV2 = endpoint;
        context.authSchemes = (_a = endpoint.properties) === null || _a === void 0 ? void 0 : _a.authSchemes;
        const authScheme = (_b = context.authSchemes) === null || _b === void 0 ? void 0 : _b[0];
        if (authScheme) {
          context["signing_region"] = authScheme.signingRegion;
          context["signing_service"] = authScheme.signingName;
          const smithyContext = (0, util_middleware_1.getSmithyContext)(context);
          const httpAuthOption = (_c = smithyContext === null || smithyContext === void 0 ? void 0 : smithyContext.selectedHttpAuthScheme) === null || _c === void 0 ? void 0 : _c.httpAuthOption;
          if (httpAuthOption) {
            httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
              signing_region: authScheme.signingRegion,
              signingRegion: authScheme.signingRegion,
              signing_service: authScheme.signingName,
              signingName: authScheme.signingName,
              signingRegionSet: authScheme.signingRegionSet
            }, authScheme.properties);
          }
        }
        return next({
          ...args
        });
      };
    };
    exports.endpointMiddleware = endpointMiddleware;
  }
});

// node_modules/@smithy/middleware-serde/dist-cjs/deserializerMiddleware.js
var require_deserializerMiddleware = __commonJS({
  "node_modules/@smithy/middleware-serde/dist-cjs/deserializerMiddleware.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.deserializerMiddleware = void 0;
    var deserializerMiddleware = (options, deserializer) => (next, context) => async (args) => {
      const { response } = await next(args);
      try {
        const parsed = await deserializer(response, options);
        return {
          response,
          output: parsed
        };
      } catch (error) {
        Object.defineProperty(error, "$response", {
          value: response
        });
        if (!("$metadata" in error)) {
          const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
          error.message += "\n  " + hint;
        }
        throw error;
      }
    };
    exports.deserializerMiddleware = deserializerMiddleware;
  }
});

// node_modules/@smithy/middleware-serde/dist-cjs/serializerMiddleware.js
var require_serializerMiddleware = __commonJS({
  "node_modules/@smithy/middleware-serde/dist-cjs/serializerMiddleware.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serializerMiddleware = void 0;
    var serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
      var _a;
      const endpoint = ((_a = context.endpointV2) === null || _a === void 0 ? void 0 : _a.url) && options.urlParser ? async () => options.urlParser(context.endpointV2.url) : options.endpoint;
      if (!endpoint) {
        throw new Error("No valid endpoint provider available.");
      }
      const request = await serializer(args.input, { ...options, endpoint });
      return next({
        ...args,
        request
      });
    };
    exports.serializerMiddleware = serializerMiddleware;
  }
});

// node_modules/@smithy/middleware-serde/dist-cjs/serdePlugin.js
var require_serdePlugin = __commonJS({
  "node_modules/@smithy/middleware-serde/dist-cjs/serdePlugin.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSerdePlugin = exports.serializerMiddlewareOption = exports.deserializerMiddlewareOption = void 0;
    var deserializerMiddleware_1 = require_deserializerMiddleware();
    var serializerMiddleware_1 = require_serializerMiddleware();
    exports.deserializerMiddlewareOption = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: true
    };
    exports.serializerMiddlewareOption = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: true
    };
    function getSerdePlugin(config, serializer, deserializer) {
      return {
        applyToStack: (commandStack) => {
          commandStack.add((0, deserializerMiddleware_1.deserializerMiddleware)(config, deserializer), exports.deserializerMiddlewareOption);
          commandStack.add((0, serializerMiddleware_1.serializerMiddleware)(config, serializer), exports.serializerMiddlewareOption);
        }
      };
    }
    exports.getSerdePlugin = getSerdePlugin;
  }
});

// node_modules/@smithy/middleware-serde/dist-cjs/index.js
var require_dist_cjs27 = __commonJS({
  "node_modules/@smithy/middleware-serde/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_deserializerMiddleware(), exports);
    tslib_1.__exportStar(require_serdePlugin(), exports);
    tslib_1.__exportStar(require_serializerMiddleware(), exports);
  }
});

// node_modules/@smithy/middleware-endpoint/dist-cjs/getEndpointPlugin.js
var require_getEndpointPlugin = __commonJS({
  "node_modules/@smithy/middleware-endpoint/dist-cjs/getEndpointPlugin.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getEndpointPlugin = exports.endpointMiddlewareOptions = void 0;
    var middleware_serde_1 = require_dist_cjs27();
    var endpointMiddleware_1 = require_endpointMiddleware();
    exports.endpointMiddlewareOptions = {
      step: "serialize",
      tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
      name: "endpointV2Middleware",
      override: true,
      relation: "before",
      toMiddleware: middleware_serde_1.serializerMiddlewareOption.name
    };
    var getEndpointPlugin = (config, instructions) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo((0, endpointMiddleware_1.endpointMiddleware)({
          config,
          instructions
        }), exports.endpointMiddlewareOptions);
      }
    });
    exports.getEndpointPlugin = getEndpointPlugin;
  }
});

// node_modules/@smithy/middleware-endpoint/dist-cjs/resolveEndpointConfig.js
var require_resolveEndpointConfig = __commonJS({
  "node_modules/@smithy/middleware-endpoint/dist-cjs/resolveEndpointConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveEndpointConfig = void 0;
    var util_middleware_1 = require_dist_cjs10();
    var toEndpointV1_1 = require_toEndpointV1();
    var resolveEndpointConfig = (input) => {
      var _a, _b, _c;
      const tls = (_a = input.tls) !== null && _a !== void 0 ? _a : true;
      const { endpoint } = input;
      const customEndpointProvider = endpoint != null ? async () => (0, toEndpointV1_1.toEndpointV1)(await (0, util_middleware_1.normalizeProvider)(endpoint)()) : void 0;
      const isCustomEndpoint = !!endpoint;
      return {
        ...input,
        endpoint: customEndpointProvider,
        tls,
        isCustomEndpoint,
        useDualstackEndpoint: (0, util_middleware_1.normalizeProvider)((_b = input.useDualstackEndpoint) !== null && _b !== void 0 ? _b : false),
        useFipsEndpoint: (0, util_middleware_1.normalizeProvider)((_c = input.useFipsEndpoint) !== null && _c !== void 0 ? _c : false)
      };
    };
    exports.resolveEndpointConfig = resolveEndpointConfig;
  }
});

// node_modules/@smithy/middleware-endpoint/dist-cjs/types.js
var require_types5 = __commonJS({
  "node_modules/@smithy/middleware-endpoint/dist-cjs/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/middleware-endpoint/dist-cjs/index.js
var require_dist_cjs28 = __commonJS({
  "node_modules/@smithy/middleware-endpoint/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_adaptors(), exports);
    tslib_1.__exportStar(require_endpointMiddleware(), exports);
    tslib_1.__exportStar(require_getEndpointPlugin(), exports);
    tslib_1.__exportStar(require_resolveEndpointConfig(), exports);
    tslib_1.__exportStar(require_types5(), exports);
  }
});

// node_modules/@smithy/util-retry/dist-cjs/config.js
var require_config3 = __commonJS({
  "node_modules/@smithy/util-retry/dist-cjs/config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_RETRY_MODE = exports.DEFAULT_MAX_ATTEMPTS = exports.RETRY_MODES = void 0;
    var RETRY_MODES;
    (function(RETRY_MODES2) {
      RETRY_MODES2["STANDARD"] = "standard";
      RETRY_MODES2["ADAPTIVE"] = "adaptive";
    })(RETRY_MODES = exports.RETRY_MODES || (exports.RETRY_MODES = {}));
    exports.DEFAULT_MAX_ATTEMPTS = 3;
    exports.DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;
  }
});

// node_modules/@smithy/service-error-classification/dist-cjs/constants.js
var require_constants3 = __commonJS({
  "node_modules/@smithy/service-error-classification/dist-cjs/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NODEJS_TIMEOUT_ERROR_CODES = exports.TRANSIENT_ERROR_STATUS_CODES = exports.TRANSIENT_ERROR_CODES = exports.THROTTLING_ERROR_CODES = exports.CLOCK_SKEW_ERROR_CODES = void 0;
    exports.CLOCK_SKEW_ERROR_CODES = [
      "AuthFailure",
      "InvalidSignatureException",
      "RequestExpired",
      "RequestInTheFuture",
      "RequestTimeTooSkewed",
      "SignatureDoesNotMatch"
    ];
    exports.THROTTLING_ERROR_CODES = [
      "BandwidthLimitExceeded",
      "EC2ThrottledException",
      "LimitExceededException",
      "PriorRequestNotComplete",
      "ProvisionedThroughputExceededException",
      "RequestLimitExceeded",
      "RequestThrottled",
      "RequestThrottledException",
      "SlowDown",
      "ThrottledException",
      "Throttling",
      "ThrottlingException",
      "TooManyRequestsException",
      "TransactionInProgressException"
    ];
    exports.TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
    exports.TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
    exports.NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
  }
});

// node_modules/@smithy/service-error-classification/dist-cjs/index.js
var require_dist_cjs29 = __commonJS({
  "node_modules/@smithy/service-error-classification/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isServerError = exports.isTransientError = exports.isThrottlingError = exports.isClockSkewError = exports.isRetryableByTrait = void 0;
    var constants_1 = require_constants3();
    var isRetryableByTrait = (error) => error.$retryable !== void 0;
    exports.isRetryableByTrait = isRetryableByTrait;
    var isClockSkewError = (error) => constants_1.CLOCK_SKEW_ERROR_CODES.includes(error.name);
    exports.isClockSkewError = isClockSkewError;
    var isThrottlingError = (error) => {
      var _a, _b;
      return ((_a = error.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) === 429 || constants_1.THROTTLING_ERROR_CODES.includes(error.name) || ((_b = error.$retryable) === null || _b === void 0 ? void 0 : _b.throttling) == true;
    };
    exports.isThrottlingError = isThrottlingError;
    var isTransientError = (error) => {
      var _a;
      return constants_1.TRANSIENT_ERROR_CODES.includes(error.name) || constants_1.NODEJS_TIMEOUT_ERROR_CODES.includes((error === null || error === void 0 ? void 0 : error.code) || "") || constants_1.TRANSIENT_ERROR_STATUS_CODES.includes(((_a = error.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) || 0);
    };
    exports.isTransientError = isTransientError;
    var isServerError = (error) => {
      var _a;
      if (((_a = error.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) !== void 0) {
        const statusCode = error.$metadata.httpStatusCode;
        if (500 <= statusCode && statusCode <= 599 && !(0, exports.isTransientError)(error)) {
          return true;
        }
        return false;
      }
      return false;
    };
    exports.isServerError = isServerError;
  }
});

// node_modules/@smithy/util-retry/dist-cjs/DefaultRateLimiter.js
var require_DefaultRateLimiter = __commonJS({
  "node_modules/@smithy/util-retry/dist-cjs/DefaultRateLimiter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultRateLimiter = void 0;
    var service_error_classification_1 = require_dist_cjs29();
    var DefaultRateLimiter = class {
      constructor(options) {
        var _a, _b, _c, _d, _e;
        this.currentCapacity = 0;
        this.enabled = false;
        this.lastMaxRate = 0;
        this.measuredTxRate = 0;
        this.requestCount = 0;
        this.lastTimestamp = 0;
        this.timeWindow = 0;
        this.beta = (_a = options === null || options === void 0 ? void 0 : options.beta) !== null && _a !== void 0 ? _a : 0.7;
        this.minCapacity = (_b = options === null || options === void 0 ? void 0 : options.minCapacity) !== null && _b !== void 0 ? _b : 1;
        this.minFillRate = (_c = options === null || options === void 0 ? void 0 : options.minFillRate) !== null && _c !== void 0 ? _c : 0.5;
        this.scaleConstant = (_d = options === null || options === void 0 ? void 0 : options.scaleConstant) !== null && _d !== void 0 ? _d : 0.4;
        this.smooth = (_e = options === null || options === void 0 ? void 0 : options.smooth) !== null && _e !== void 0 ? _e : 0.8;
        const currentTimeInSeconds = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = currentTimeInSeconds;
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
      }
      getCurrentTimeInSeconds() {
        return Date.now() / 1e3;
      }
      async getSendToken() {
        return this.acquireTokenBucket(1);
      }
      async acquireTokenBucket(amount) {
        if (!this.enabled) {
          return;
        }
        this.refillTokenBucket();
        if (amount > this.currentCapacity) {
          const delay = (amount - this.currentCapacity) / this.fillRate * 1e3;
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
        this.currentCapacity = this.currentCapacity - amount;
      }
      refillTokenBucket() {
        const timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
          this.lastTimestamp = timestamp;
          return;
        }
        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
        this.lastTimestamp = timestamp;
      }
      updateClientSendingRate(response) {
        let calculatedRate;
        this.updateMeasuredRate();
        if ((0, service_error_classification_1.isThrottlingError)(response)) {
          const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
          this.lastMaxRate = rateToUse;
          this.calculateTimeWindow();
          this.lastThrottleTime = this.getCurrentTimeInSeconds();
          calculatedRate = this.cubicThrottle(rateToUse);
          this.enableTokenBucket();
        } else {
          this.calculateTimeWindow();
          calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
      }
      calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
      }
      cubicThrottle(rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
      }
      cubicSuccess(timestamp) {
        return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
      }
      enableTokenBucket() {
        this.enabled = true;
      }
      updateTokenBucketRate(newRate) {
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
      }
      updateMeasuredRate() {
        const t = this.getCurrentTimeInSeconds();
        const timeBucket = Math.floor(t * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
          const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
          this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
          this.requestCount = 0;
          this.lastTxRateBucket = timeBucket;
        }
      }
      getPrecise(num) {
        return parseFloat(num.toFixed(8));
      }
    };
    exports.DefaultRateLimiter = DefaultRateLimiter;
  }
});

// node_modules/@smithy/util-retry/dist-cjs/constants.js
var require_constants4 = __commonJS({
  "node_modules/@smithy/util-retry/dist-cjs/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.REQUEST_HEADER = exports.INVOCATION_ID_HEADER = exports.NO_RETRY_INCREMENT = exports.TIMEOUT_RETRY_COST = exports.RETRY_COST = exports.INITIAL_RETRY_TOKENS = exports.THROTTLING_RETRY_DELAY_BASE = exports.MAXIMUM_RETRY_DELAY = exports.DEFAULT_RETRY_DELAY_BASE = void 0;
    exports.DEFAULT_RETRY_DELAY_BASE = 100;
    exports.MAXIMUM_RETRY_DELAY = 20 * 1e3;
    exports.THROTTLING_RETRY_DELAY_BASE = 500;
    exports.INITIAL_RETRY_TOKENS = 500;
    exports.RETRY_COST = 5;
    exports.TIMEOUT_RETRY_COST = 10;
    exports.NO_RETRY_INCREMENT = 1;
    exports.INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
    exports.REQUEST_HEADER = "amz-sdk-request";
  }
});

// node_modules/@smithy/util-retry/dist-cjs/defaultRetryBackoffStrategy.js
var require_defaultRetryBackoffStrategy = __commonJS({
  "node_modules/@smithy/util-retry/dist-cjs/defaultRetryBackoffStrategy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getDefaultRetryBackoffStrategy = void 0;
    var constants_1 = require_constants4();
    var getDefaultRetryBackoffStrategy = () => {
      let delayBase = constants_1.DEFAULT_RETRY_DELAY_BASE;
      const computeNextBackoffDelay = (attempts) => {
        return Math.floor(Math.min(constants_1.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
      };
      const setDelayBase = (delay) => {
        delayBase = delay;
      };
      return {
        computeNextBackoffDelay,
        setDelayBase
      };
    };
    exports.getDefaultRetryBackoffStrategy = getDefaultRetryBackoffStrategy;
  }
});

// node_modules/@smithy/util-retry/dist-cjs/defaultRetryToken.js
var require_defaultRetryToken = __commonJS({
  "node_modules/@smithy/util-retry/dist-cjs/defaultRetryToken.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDefaultRetryToken = void 0;
    var constants_1 = require_constants4();
    var createDefaultRetryToken = ({ retryDelay, retryCount, retryCost }) => {
      const getRetryCount = () => retryCount;
      const getRetryDelay = () => Math.min(constants_1.MAXIMUM_RETRY_DELAY, retryDelay);
      const getRetryCost = () => retryCost;
      return {
        getRetryCount,
        getRetryDelay,
        getRetryCost
      };
    };
    exports.createDefaultRetryToken = createDefaultRetryToken;
  }
});

// node_modules/@smithy/util-retry/dist-cjs/StandardRetryStrategy.js
var require_StandardRetryStrategy = __commonJS({
  "node_modules/@smithy/util-retry/dist-cjs/StandardRetryStrategy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StandardRetryStrategy = void 0;
    var config_1 = require_config3();
    var constants_1 = require_constants4();
    var defaultRetryBackoffStrategy_1 = require_defaultRetryBackoffStrategy();
    var defaultRetryToken_1 = require_defaultRetryToken();
    var StandardRetryStrategy = class {
      constructor(maxAttempts) {
        this.maxAttempts = maxAttempts;
        this.mode = config_1.RETRY_MODES.STANDARD;
        this.capacity = constants_1.INITIAL_RETRY_TOKENS;
        this.retryBackoffStrategy = (0, defaultRetryBackoffStrategy_1.getDefaultRetryBackoffStrategy)();
        this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
      }
      async acquireInitialRetryToken(retryTokenScope) {
        return (0, defaultRetryToken_1.createDefaultRetryToken)({
          retryDelay: constants_1.DEFAULT_RETRY_DELAY_BASE,
          retryCount: 0
        });
      }
      async refreshRetryTokenForRetry(token, errorInfo) {
        const maxAttempts = await this.getMaxAttempts();
        if (this.shouldRetry(token, errorInfo, maxAttempts)) {
          const errorType = errorInfo.errorType;
          this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? constants_1.THROTTLING_RETRY_DELAY_BASE : constants_1.DEFAULT_RETRY_DELAY_BASE);
          const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
          const retryDelay = errorInfo.retryAfterHint ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType) : delayFromErrorType;
          const capacityCost = this.getCapacityCost(errorType);
          this.capacity -= capacityCost;
          return (0, defaultRetryToken_1.createDefaultRetryToken)({
            retryDelay,
            retryCount: token.getRetryCount() + 1,
            retryCost: capacityCost
          });
        }
        throw new Error("No retry token available");
      }
      recordSuccess(token) {
        var _a;
        this.capacity = Math.max(constants_1.INITIAL_RETRY_TOKENS, this.capacity + ((_a = token.getRetryCost()) !== null && _a !== void 0 ? _a : constants_1.NO_RETRY_INCREMENT));
      }
      getCapacity() {
        return this.capacity;
      }
      async getMaxAttempts() {
        try {
          return await this.maxAttemptsProvider();
        } catch (error) {
          console.warn(`Max attempts provider could not resolve. Using default of ${config_1.DEFAULT_MAX_ATTEMPTS}`);
          return config_1.DEFAULT_MAX_ATTEMPTS;
        }
      }
      shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
        const attempts = tokenToRenew.getRetryCount() + 1;
        return attempts < maxAttempts && this.capacity >= this.getCapacityCost(errorInfo.errorType) && this.isRetryableError(errorInfo.errorType);
      }
      getCapacityCost(errorType) {
        return errorType === "TRANSIENT" ? constants_1.TIMEOUT_RETRY_COST : constants_1.RETRY_COST;
      }
      isRetryableError(errorType) {
        return errorType === "THROTTLING" || errorType === "TRANSIENT";
      }
    };
    exports.StandardRetryStrategy = StandardRetryStrategy;
  }
});

// node_modules/@smithy/util-retry/dist-cjs/AdaptiveRetryStrategy.js
var require_AdaptiveRetryStrategy = __commonJS({
  "node_modules/@smithy/util-retry/dist-cjs/AdaptiveRetryStrategy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AdaptiveRetryStrategy = void 0;
    var config_1 = require_config3();
    var DefaultRateLimiter_1 = require_DefaultRateLimiter();
    var StandardRetryStrategy_1 = require_StandardRetryStrategy();
    var AdaptiveRetryStrategy = class {
      constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = config_1.RETRY_MODES.ADAPTIVE;
        const { rateLimiter } = options !== null && options !== void 0 ? options : {};
        this.rateLimiter = rateLimiter !== null && rateLimiter !== void 0 ? rateLimiter : new DefaultRateLimiter_1.DefaultRateLimiter();
        this.standardRetryStrategy = new StandardRetryStrategy_1.StandardRetryStrategy(maxAttemptsProvider);
      }
      async acquireInitialRetryToken(retryTokenScope) {
        await this.rateLimiter.getSendToken();
        return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
      }
      async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        this.rateLimiter.updateClientSendingRate(errorInfo);
        return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
      }
      recordSuccess(token) {
        this.rateLimiter.updateClientSendingRate({});
        this.standardRetryStrategy.recordSuccess(token);
      }
    };
    exports.AdaptiveRetryStrategy = AdaptiveRetryStrategy;
  }
});

// node_modules/@smithy/util-retry/dist-cjs/ConfiguredRetryStrategy.js
var require_ConfiguredRetryStrategy = __commonJS({
  "node_modules/@smithy/util-retry/dist-cjs/ConfiguredRetryStrategy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConfiguredRetryStrategy = void 0;
    var constants_1 = require_constants4();
    var StandardRetryStrategy_1 = require_StandardRetryStrategy();
    var ConfiguredRetryStrategy = class extends StandardRetryStrategy_1.StandardRetryStrategy {
      constructor(maxAttempts, computeNextBackoffDelay = constants_1.DEFAULT_RETRY_DELAY_BASE) {
        super(typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts);
        if (typeof computeNextBackoffDelay === "number") {
          this.computeNextBackoffDelay = () => computeNextBackoffDelay;
        } else {
          this.computeNextBackoffDelay = computeNextBackoffDelay;
        }
      }
      async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        const token = await super.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
        token.getRetryDelay = () => this.computeNextBackoffDelay(token.getRetryCount());
        return token;
      }
    };
    exports.ConfiguredRetryStrategy = ConfiguredRetryStrategy;
  }
});

// node_modules/@smithy/util-retry/dist-cjs/types.js
var require_types6 = __commonJS({
  "node_modules/@smithy/util-retry/dist-cjs/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/util-retry/dist-cjs/index.js
var require_dist_cjs30 = __commonJS({
  "node_modules/@smithy/util-retry/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_AdaptiveRetryStrategy(), exports);
    tslib_1.__exportStar(require_ConfiguredRetryStrategy(), exports);
    tslib_1.__exportStar(require_DefaultRateLimiter(), exports);
    tslib_1.__exportStar(require_StandardRetryStrategy(), exports);
    tslib_1.__exportStar(require_config3(), exports);
    tslib_1.__exportStar(require_constants4(), exports);
    tslib_1.__exportStar(require_types6(), exports);
  }
});

// node_modules/uuid/dist/esm-node/rng.js
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    import_crypto.default.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }
  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
var import_crypto, rnds8Pool, poolPtr;
var init_rng = __esm({
  "node_modules/uuid/dist/esm-node/rng.js"() {
    import_crypto = __toESM(require("crypto"));
    rnds8Pool = new Uint8Array(256);
    poolPtr = rnds8Pool.length;
  }
});

// node_modules/uuid/dist/esm-node/regex.js
var regex_default;
var init_regex = __esm({
  "node_modules/uuid/dist/esm-node/regex.js"() {
    regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  }
});

// node_modules/uuid/dist/esm-node/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default;
var init_validate = __esm({
  "node_modules/uuid/dist/esm-node/validate.js"() {
    init_regex();
    validate_default = validate;
  }
});

// node_modules/uuid/dist/esm-node/stringify.js
function stringify(arr, offset = 0) {
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var byteToHex, stringify_default;
var init_stringify = __esm({
  "node_modules/uuid/dist/esm-node/stringify.js"() {
    init_validate();
    byteToHex = [];
    for (let i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).substr(1));
    }
    stringify_default = stringify;
  }
});

// node_modules/uuid/dist/esm-node/v1.js
function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || rng)();
    if (node == null) {
      node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }
    if (clockseq == null) {
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
    }
  }
  let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
  let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
  if (dt < 0 && options.clockseq === void 0) {
    clockseq = clockseq + 1 & 16383;
  }
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
    nsecs = 0;
  }
  if (nsecs >= 1e4) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }
  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;
  msecs += 122192928e5;
  const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
  b[i++] = tl >>> 24 & 255;
  b[i++] = tl >>> 16 & 255;
  b[i++] = tl >>> 8 & 255;
  b[i++] = tl & 255;
  const tmh = msecs / 4294967296 * 1e4 & 268435455;
  b[i++] = tmh >>> 8 & 255;
  b[i++] = tmh & 255;
  b[i++] = tmh >>> 24 & 15 | 16;
  b[i++] = tmh >>> 16 & 255;
  b[i++] = clockseq >>> 8 | 128;
  b[i++] = clockseq & 255;
  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }
  return buf || stringify_default(b);
}
var _nodeId, _clockseq, _lastMSecs, _lastNSecs, v1_default;
var init_v1 = __esm({
  "node_modules/uuid/dist/esm-node/v1.js"() {
    init_rng();
    init_stringify();
    _lastMSecs = 0;
    _lastNSecs = 0;
    v1_default = v1;
  }
});

// node_modules/uuid/dist/esm-node/parse.js
function parse(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID");
  }
  let v;
  const arr = new Uint8Array(16);
  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 255;
  arr[2] = v >>> 8 & 255;
  arr[3] = v & 255;
  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 255;
  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 255;
  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 255;
  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
  arr[11] = v / 4294967296 & 255;
  arr[12] = v >>> 24 & 255;
  arr[13] = v >>> 16 & 255;
  arr[14] = v >>> 8 & 255;
  arr[15] = v & 255;
  return arr;
}
var parse_default;
var init_parse = __esm({
  "node_modules/uuid/dist/esm-node/parse.js"() {
    init_validate();
    parse_default = parse;
  }
});

// node_modules/uuid/dist/esm-node/v35.js
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str));
  const bytes = [];
  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}
function v35_default(name, version2, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === "string") {
      value = stringToBytes(value);
    }
    if (typeof namespace === "string") {
      namespace = parse_default(namespace);
    }
    if (namespace.length !== 16) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    }
    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 15 | version2;
    bytes[8] = bytes[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }
      return buf;
    }
    return stringify_default(bytes);
  }
  try {
    generateUUID.name = name;
  } catch (err) {
  }
  generateUUID.DNS = DNS;
  generateUUID.URL = URL2;
  return generateUUID;
}
var DNS, URL2;
var init_v35 = __esm({
  "node_modules/uuid/dist/esm-node/v35.js"() {
    init_stringify();
    init_parse();
    DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  }
});

// node_modules/uuid/dist/esm-node/md5.js
function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === "string") {
    bytes = Buffer.from(bytes, "utf8");
  }
  return import_crypto2.default.createHash("md5").update(bytes).digest();
}
var import_crypto2, md5_default;
var init_md5 = __esm({
  "node_modules/uuid/dist/esm-node/md5.js"() {
    import_crypto2 = __toESM(require("crypto"));
    md5_default = md5;
  }
});

// node_modules/uuid/dist/esm-node/v3.js
var v3, v3_default;
var init_v3 = __esm({
  "node_modules/uuid/dist/esm-node/v3.js"() {
    init_v35();
    init_md5();
    v3 = v35_default("v3", 48, md5_default);
    v3_default = v3;
  }
});

// node_modules/uuid/dist/esm-node/v4.js
function v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify_default(rnds);
}
var v4_default;
var init_v4 = __esm({
  "node_modules/uuid/dist/esm-node/v4.js"() {
    init_rng();
    init_stringify();
    v4_default = v4;
  }
});

// node_modules/uuid/dist/esm-node/sha1.js
function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === "string") {
    bytes = Buffer.from(bytes, "utf8");
  }
  return import_crypto3.default.createHash("sha1").update(bytes).digest();
}
var import_crypto3, sha1_default;
var init_sha1 = __esm({
  "node_modules/uuid/dist/esm-node/sha1.js"() {
    import_crypto3 = __toESM(require("crypto"));
    sha1_default = sha1;
  }
});

// node_modules/uuid/dist/esm-node/v5.js
var v5, v5_default;
var init_v5 = __esm({
  "node_modules/uuid/dist/esm-node/v5.js"() {
    init_v35();
    init_sha1();
    v5 = v35_default("v5", 80, sha1_default);
    v5_default = v5;
  }
});

// node_modules/uuid/dist/esm-node/nil.js
var nil_default;
var init_nil = __esm({
  "node_modules/uuid/dist/esm-node/nil.js"() {
    nil_default = "00000000-0000-0000-0000-000000000000";
  }
});

// node_modules/uuid/dist/esm-node/version.js
function version(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID");
  }
  return parseInt(uuid.substr(14, 1), 16);
}
var version_default;
var init_version = __esm({
  "node_modules/uuid/dist/esm-node/version.js"() {
    init_validate();
    version_default = version;
  }
});

// node_modules/uuid/dist/esm-node/index.js
var esm_node_exports = {};
__export(esm_node_exports, {
  NIL: () => nil_default,
  parse: () => parse_default,
  stringify: () => stringify_default,
  v1: () => v1_default,
  v3: () => v3_default,
  v4: () => v4_default,
  v5: () => v5_default,
  validate: () => validate_default,
  version: () => version_default
});
var init_esm_node = __esm({
  "node_modules/uuid/dist/esm-node/index.js"() {
    init_v1();
    init_v3();
    init_v4();
    init_v5();
    init_nil();
    init_version();
    init_validate();
    init_stringify();
    init_parse();
  }
});

// node_modules/@smithy/middleware-retry/dist-cjs/defaultRetryQuota.js
var require_defaultRetryQuota = __commonJS({
  "node_modules/@smithy/middleware-retry/dist-cjs/defaultRetryQuota.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getDefaultRetryQuota = void 0;
    var util_retry_1 = require_dist_cjs30();
    var getDefaultRetryQuota = (initialRetryTokens, options) => {
      var _a, _b, _c;
      const MAX_CAPACITY = initialRetryTokens;
      const noRetryIncrement = (_a = options === null || options === void 0 ? void 0 : options.noRetryIncrement) !== null && _a !== void 0 ? _a : util_retry_1.NO_RETRY_INCREMENT;
      const retryCost = (_b = options === null || options === void 0 ? void 0 : options.retryCost) !== null && _b !== void 0 ? _b : util_retry_1.RETRY_COST;
      const timeoutRetryCost = (_c = options === null || options === void 0 ? void 0 : options.timeoutRetryCost) !== null && _c !== void 0 ? _c : util_retry_1.TIMEOUT_RETRY_COST;
      let availableCapacity = initialRetryTokens;
      const getCapacityAmount = (error) => error.name === "TimeoutError" ? timeoutRetryCost : retryCost;
      const hasRetryTokens = (error) => getCapacityAmount(error) <= availableCapacity;
      const retrieveRetryTokens = (error) => {
        if (!hasRetryTokens(error)) {
          throw new Error("No retry token available");
        }
        const capacityAmount = getCapacityAmount(error);
        availableCapacity -= capacityAmount;
        return capacityAmount;
      };
      const releaseRetryTokens = (capacityReleaseAmount) => {
        availableCapacity += capacityReleaseAmount !== null && capacityReleaseAmount !== void 0 ? capacityReleaseAmount : noRetryIncrement;
        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
      };
      return Object.freeze({
        hasRetryTokens,
        retrieveRetryTokens,
        releaseRetryTokens
      });
    };
    exports.getDefaultRetryQuota = getDefaultRetryQuota;
  }
});

// node_modules/@smithy/middleware-retry/dist-cjs/delayDecider.js
var require_delayDecider = __commonJS({
  "node_modules/@smithy/middleware-retry/dist-cjs/delayDecider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultDelayDecider = void 0;
    var util_retry_1 = require_dist_cjs30();
    var defaultDelayDecider = (delayBase, attempts) => Math.floor(Math.min(util_retry_1.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
    exports.defaultDelayDecider = defaultDelayDecider;
  }
});

// node_modules/@smithy/middleware-retry/dist-cjs/retryDecider.js
var require_retryDecider = __commonJS({
  "node_modules/@smithy/middleware-retry/dist-cjs/retryDecider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultRetryDecider = void 0;
    var service_error_classification_1 = require_dist_cjs29();
    var defaultRetryDecider = (error) => {
      if (!error) {
        return false;
      }
      return (0, service_error_classification_1.isRetryableByTrait)(error) || (0, service_error_classification_1.isClockSkewError)(error) || (0, service_error_classification_1.isThrottlingError)(error) || (0, service_error_classification_1.isTransientError)(error);
    };
    exports.defaultRetryDecider = defaultRetryDecider;
  }
});

// node_modules/@smithy/middleware-retry/dist-cjs/util.js
var require_util2 = __commonJS({
  "node_modules/@smithy/middleware-retry/dist-cjs/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.asSdkError = void 0;
    var asSdkError = (error) => {
      if (error instanceof Error)
        return error;
      if (error instanceof Object)
        return Object.assign(new Error(), error);
      if (typeof error === "string")
        return new Error(error);
      return new Error(`AWS SDK error wrapper for ${error}`);
    };
    exports.asSdkError = asSdkError;
  }
});

// node_modules/@smithy/middleware-retry/dist-cjs/StandardRetryStrategy.js
var require_StandardRetryStrategy2 = __commonJS({
  "node_modules/@smithy/middleware-retry/dist-cjs/StandardRetryStrategy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StandardRetryStrategy = void 0;
    var protocol_http_1 = require_dist_cjs2();
    var service_error_classification_1 = require_dist_cjs29();
    var util_retry_1 = require_dist_cjs30();
    var uuid_1 = (init_esm_node(), __toCommonJS(esm_node_exports));
    var defaultRetryQuota_1 = require_defaultRetryQuota();
    var delayDecider_1 = require_delayDecider();
    var retryDecider_1 = require_retryDecider();
    var util_1 = require_util2();
    var StandardRetryStrategy = class {
      constructor(maxAttemptsProvider, options) {
        var _a, _b, _c;
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = util_retry_1.RETRY_MODES.STANDARD;
        this.retryDecider = (_a = options === null || options === void 0 ? void 0 : options.retryDecider) !== null && _a !== void 0 ? _a : retryDecider_1.defaultRetryDecider;
        this.delayDecider = (_b = options === null || options === void 0 ? void 0 : options.delayDecider) !== null && _b !== void 0 ? _b : delayDecider_1.defaultDelayDecider;
        this.retryQuota = (_c = options === null || options === void 0 ? void 0 : options.retryQuota) !== null && _c !== void 0 ? _c : (0, defaultRetryQuota_1.getDefaultRetryQuota)(util_retry_1.INITIAL_RETRY_TOKENS);
      }
      shouldRetry(error, attempts, maxAttempts) {
        return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
      }
      async getMaxAttempts() {
        let maxAttempts;
        try {
          maxAttempts = await this.maxAttemptsProvider();
        } catch (error) {
          maxAttempts = util_retry_1.DEFAULT_MAX_ATTEMPTS;
        }
        return maxAttempts;
      }
      async retry(next, args, options) {
        let retryTokenAmount;
        let attempts = 0;
        let totalDelay = 0;
        const maxAttempts = await this.getMaxAttempts();
        const { request } = args;
        if (protocol_http_1.HttpRequest.isInstance(request)) {
          request.headers[util_retry_1.INVOCATION_ID_HEADER] = (0, uuid_1.v4)();
        }
        while (true) {
          try {
            if (protocol_http_1.HttpRequest.isInstance(request)) {
              request.headers[util_retry_1.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
            }
            if (options === null || options === void 0 ? void 0 : options.beforeRequest) {
              await options.beforeRequest();
            }
            const { response, output } = await next(args);
            if (options === null || options === void 0 ? void 0 : options.afterRequest) {
              options.afterRequest(response);
            }
            this.retryQuota.releaseRetryTokens(retryTokenAmount);
            output.$metadata.attempts = attempts + 1;
            output.$metadata.totalRetryDelay = totalDelay;
            return { response, output };
          } catch (e) {
            const err = (0, util_1.asSdkError)(e);
            attempts++;
            if (this.shouldRetry(err, attempts, maxAttempts)) {
              retryTokenAmount = this.retryQuota.retrieveRetryTokens(err);
              const delayFromDecider = this.delayDecider((0, service_error_classification_1.isThrottlingError)(err) ? util_retry_1.THROTTLING_RETRY_DELAY_BASE : util_retry_1.DEFAULT_RETRY_DELAY_BASE, attempts);
              const delayFromResponse = getDelayFromRetryAfterHeader(err.$response);
              const delay = Math.max(delayFromResponse || 0, delayFromDecider);
              totalDelay += delay;
              await new Promise((resolve) => setTimeout(resolve, delay));
              continue;
            }
            if (!err.$metadata) {
              err.$metadata = {};
            }
            err.$metadata.attempts = attempts;
            err.$metadata.totalRetryDelay = totalDelay;
            throw err;
          }
        }
      }
    };
    exports.StandardRetryStrategy = StandardRetryStrategy;
    var getDelayFromRetryAfterHeader = (response) => {
      if (!protocol_http_1.HttpResponse.isInstance(response))
        return;
      const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
      if (!retryAfterHeaderName)
        return;
      const retryAfter = response.headers[retryAfterHeaderName];
      const retryAfterSeconds = Number(retryAfter);
      if (!Number.isNaN(retryAfterSeconds))
        return retryAfterSeconds * 1e3;
      const retryAfterDate = new Date(retryAfter);
      return retryAfterDate.getTime() - Date.now();
    };
  }
});

// node_modules/@smithy/middleware-retry/dist-cjs/AdaptiveRetryStrategy.js
var require_AdaptiveRetryStrategy2 = __commonJS({
  "node_modules/@smithy/middleware-retry/dist-cjs/AdaptiveRetryStrategy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AdaptiveRetryStrategy = void 0;
    var util_retry_1 = require_dist_cjs30();
    var StandardRetryStrategy_1 = require_StandardRetryStrategy2();
    var AdaptiveRetryStrategy = class extends StandardRetryStrategy_1.StandardRetryStrategy {
      constructor(maxAttemptsProvider, options) {
        const { rateLimiter, ...superOptions } = options !== null && options !== void 0 ? options : {};
        super(maxAttemptsProvider, superOptions);
        this.rateLimiter = rateLimiter !== null && rateLimiter !== void 0 ? rateLimiter : new util_retry_1.DefaultRateLimiter();
        this.mode = util_retry_1.RETRY_MODES.ADAPTIVE;
      }
      async retry(next, args) {
        return super.retry(next, args, {
          beforeRequest: async () => {
            return this.rateLimiter.getSendToken();
          },
          afterRequest: (response) => {
            this.rateLimiter.updateClientSendingRate(response);
          }
        });
      }
    };
    exports.AdaptiveRetryStrategy = AdaptiveRetryStrategy;
  }
});

// node_modules/@smithy/middleware-retry/dist-cjs/configurations.js
var require_configurations2 = __commonJS({
  "node_modules/@smithy/middleware-retry/dist-cjs/configurations.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NODE_RETRY_MODE_CONFIG_OPTIONS = exports.CONFIG_RETRY_MODE = exports.ENV_RETRY_MODE = exports.resolveRetryConfig = exports.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = exports.CONFIG_MAX_ATTEMPTS = exports.ENV_MAX_ATTEMPTS = void 0;
    var util_middleware_1 = require_dist_cjs10();
    var util_retry_1 = require_dist_cjs30();
    exports.ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
    exports.CONFIG_MAX_ATTEMPTS = "max_attempts";
    exports.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => {
        const value = env[exports.ENV_MAX_ATTEMPTS];
        if (!value)
          return void 0;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
          throw new Error(`Environment variable ${exports.ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
      },
      configFileSelector: (profile) => {
        const value = profile[exports.CONFIG_MAX_ATTEMPTS];
        if (!value)
          return void 0;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
          throw new Error(`Shared config file entry ${exports.CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
      },
      default: util_retry_1.DEFAULT_MAX_ATTEMPTS
    };
    var resolveRetryConfig = (input) => {
      var _a;
      const { retryStrategy } = input;
      const maxAttempts = (0, util_middleware_1.normalizeProvider)((_a = input.maxAttempts) !== null && _a !== void 0 ? _a : util_retry_1.DEFAULT_MAX_ATTEMPTS);
      return {
        ...input,
        maxAttempts,
        retryStrategy: async () => {
          if (retryStrategy) {
            return retryStrategy;
          }
          const retryMode = await (0, util_middleware_1.normalizeProvider)(input.retryMode)();
          if (retryMode === util_retry_1.RETRY_MODES.ADAPTIVE) {
            return new util_retry_1.AdaptiveRetryStrategy(maxAttempts);
          }
          return new util_retry_1.StandardRetryStrategy(maxAttempts);
        }
      };
    };
    exports.resolveRetryConfig = resolveRetryConfig;
    exports.ENV_RETRY_MODE = "AWS_RETRY_MODE";
    exports.CONFIG_RETRY_MODE = "retry_mode";
    exports.NODE_RETRY_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => env[exports.ENV_RETRY_MODE],
      configFileSelector: (profile) => profile[exports.CONFIG_RETRY_MODE],
      default: util_retry_1.DEFAULT_RETRY_MODE
    };
  }
});

// node_modules/@smithy/middleware-retry/dist-cjs/omitRetryHeadersMiddleware.js
var require_omitRetryHeadersMiddleware = __commonJS({
  "node_modules/@smithy/middleware-retry/dist-cjs/omitRetryHeadersMiddleware.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getOmitRetryHeadersPlugin = exports.omitRetryHeadersMiddlewareOptions = exports.omitRetryHeadersMiddleware = void 0;
    var protocol_http_1 = require_dist_cjs2();
    var util_retry_1 = require_dist_cjs30();
    var omitRetryHeadersMiddleware = () => (next) => async (args) => {
      const { request } = args;
      if (protocol_http_1.HttpRequest.isInstance(request)) {
        delete request.headers[util_retry_1.INVOCATION_ID_HEADER];
        delete request.headers[util_retry_1.REQUEST_HEADER];
      }
      return next(args);
    };
    exports.omitRetryHeadersMiddleware = omitRetryHeadersMiddleware;
    exports.omitRetryHeadersMiddlewareOptions = {
      name: "omitRetryHeadersMiddleware",
      tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
      relation: "before",
      toMiddleware: "awsAuthMiddleware",
      override: true
    };
    var getOmitRetryHeadersPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo((0, exports.omitRetryHeadersMiddleware)(), exports.omitRetryHeadersMiddlewareOptions);
      }
    });
    exports.getOmitRetryHeadersPlugin = getOmitRetryHeadersPlugin;
  }
});

// node_modules/@smithy/middleware-retry/dist-cjs/retryMiddleware.js
var require_retryMiddleware = __commonJS({
  "node_modules/@smithy/middleware-retry/dist-cjs/retryMiddleware.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRetryAfterHint = exports.getRetryPlugin = exports.retryMiddlewareOptions = exports.retryMiddleware = void 0;
    var protocol_http_1 = require_dist_cjs2();
    var service_error_classification_1 = require_dist_cjs29();
    var util_retry_1 = require_dist_cjs30();
    var uuid_1 = (init_esm_node(), __toCommonJS(esm_node_exports));
    var util_1 = require_util2();
    var retryMiddleware = (options) => (next, context) => async (args) => {
      let retryStrategy = await options.retryStrategy();
      const maxAttempts = await options.maxAttempts();
      if (isRetryStrategyV2(retryStrategy)) {
        retryStrategy = retryStrategy;
        let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
        let lastError = new Error();
        let attempts = 0;
        let totalRetryDelay = 0;
        const { request } = args;
        if (protocol_http_1.HttpRequest.isInstance(request)) {
          request.headers[util_retry_1.INVOCATION_ID_HEADER] = (0, uuid_1.v4)();
        }
        while (true) {
          try {
            if (protocol_http_1.HttpRequest.isInstance(request)) {
              request.headers[util_retry_1.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
            }
            const { response, output } = await next(args);
            retryStrategy.recordSuccess(retryToken);
            output.$metadata.attempts = attempts + 1;
            output.$metadata.totalRetryDelay = totalRetryDelay;
            return { response, output };
          } catch (e) {
            const retryErrorInfo = getRetryErrorInfo(e);
            lastError = (0, util_1.asSdkError)(e);
            try {
              retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
            } catch (refreshError) {
              if (!lastError.$metadata) {
                lastError.$metadata = {};
              }
              lastError.$metadata.attempts = attempts + 1;
              lastError.$metadata.totalRetryDelay = totalRetryDelay;
              throw lastError;
            }
            attempts = retryToken.getRetryCount();
            const delay = retryToken.getRetryDelay();
            totalRetryDelay += delay;
            await new Promise((resolve) => setTimeout(resolve, delay));
          }
        }
      } else {
        retryStrategy = retryStrategy;
        if (retryStrategy === null || retryStrategy === void 0 ? void 0 : retryStrategy.mode)
          context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
        return retryStrategy.retry(next, args);
      }
    };
    exports.retryMiddleware = retryMiddleware;
    var isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined";
    var getRetryErrorInfo = (error) => {
      const errorInfo = {
        errorType: getRetryErrorType(error)
      };
      const retryAfterHint = (0, exports.getRetryAfterHint)(error.$response);
      if (retryAfterHint) {
        errorInfo.retryAfterHint = retryAfterHint;
      }
      return errorInfo;
    };
    var getRetryErrorType = (error) => {
      if ((0, service_error_classification_1.isThrottlingError)(error))
        return "THROTTLING";
      if ((0, service_error_classification_1.isTransientError)(error))
        return "TRANSIENT";
      if ((0, service_error_classification_1.isServerError)(error))
        return "SERVER_ERROR";
      return "CLIENT_ERROR";
    };
    exports.retryMiddlewareOptions = {
      name: "retryMiddleware",
      tags: ["RETRY"],
      step: "finalizeRequest",
      priority: "high",
      override: true
    };
    var getRetryPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add((0, exports.retryMiddleware)(options), exports.retryMiddlewareOptions);
      }
    });
    exports.getRetryPlugin = getRetryPlugin;
    var getRetryAfterHint = (response) => {
      if (!protocol_http_1.HttpResponse.isInstance(response))
        return;
      const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
      if (!retryAfterHeaderName)
        return;
      const retryAfter = response.headers[retryAfterHeaderName];
      const retryAfterSeconds = Number(retryAfter);
      if (!Number.isNaN(retryAfterSeconds))
        return new Date(retryAfterSeconds * 1e3);
      const retryAfterDate = new Date(retryAfter);
      return retryAfterDate;
    };
    exports.getRetryAfterHint = getRetryAfterHint;
  }
});

// node_modules/@smithy/middleware-retry/dist-cjs/index.js
var require_dist_cjs31 = __commonJS({
  "node_modules/@smithy/middleware-retry/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_AdaptiveRetryStrategy2(), exports);
    tslib_1.__exportStar(require_StandardRetryStrategy2(), exports);
    tslib_1.__exportStar(require_configurations2(), exports);
    tslib_1.__exportStar(require_delayDecider(), exports);
    tslib_1.__exportStar(require_omitRetryHeadersMiddleware(), exports);
    tslib_1.__exportStar(require_retryDecider(), exports);
    tslib_1.__exportStar(require_retryMiddleware(), exports);
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/NoOpLogger.js
var require_NoOpLogger = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/NoOpLogger.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NoOpLogger = void 0;
    var NoOpLogger = class {
      trace() {
      }
      debug() {
      }
      info() {
      }
      warn() {
      }
      error() {
      }
    };
    exports.NoOpLogger = NoOpLogger;
  }
});

// node_modules/@smithy/middleware-stack/dist-cjs/MiddlewareStack.js
var require_MiddlewareStack = __commonJS({
  "node_modules/@smithy/middleware-stack/dist-cjs/MiddlewareStack.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.constructStack = void 0;
    var getAllAliases = (name, aliases) => {
      const _aliases = [];
      if (name) {
        _aliases.push(name);
      }
      if (aliases) {
        for (const alias of aliases) {
          _aliases.push(alias);
        }
      }
      return _aliases;
    };
    var getMiddlewareNameWithAliases = (name, aliases) => {
      return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
    };
    var constructStack = () => {
      let absoluteEntries = [];
      let relativeEntries = [];
      let identifyOnResolve = false;
      const entriesNameSet = /* @__PURE__ */ new Set();
      const sort = (entries) => entries.sort((a, b) => stepWeights[b.step] - stepWeights[a.step] || priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]);
      const removeByName = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
          const aliases = getAllAliases(entry.name, entry.aliases);
          if (aliases.includes(toRemove)) {
            isRemoved = true;
            for (const alias of aliases) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      };
      const removeByReference = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
          if (entry.middleware === toRemove) {
            isRemoved = true;
            for (const alias of getAllAliases(entry.name, entry.aliases)) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      };
      const cloneTo = (toStack) => {
        var _a;
        absoluteEntries.forEach((entry) => {
          toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
          toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        (_a = toStack.identifyOnResolve) === null || _a === void 0 ? void 0 : _a.call(toStack, stack.identifyOnResolve());
        return toStack;
      };
      const expandRelativeMiddlewareList = (from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        return expandedMiddlewareList;
      };
      const getMiddlewareList = (debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
          if (entry.toMiddleware) {
            const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
            if (toMiddleware === void 0) {
              if (debug) {
                return;
              }
              throw new Error(`${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`);
            }
            if (entry.relation === "after") {
              toMiddleware.after.push(entry);
            }
            if (entry.relation === "before") {
              toMiddleware.before.push(entry);
            }
          }
        });
        const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
          wholeList.push(...expandedMiddlewareList);
          return wholeList;
        }, []);
        return mainChain;
      };
      const stack = {
        add: (middleware, options = {}) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            step: "initialize",
            priority: "normal",
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = absoluteEntries.findIndex((entry2) => {
                  var _a;
                  return entry2.name === alias || ((_a = entry2.aliases) === null || _a === void 0 ? void 0 : _a.some((a) => a === alias));
                });
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = absoluteEntries[toOverrideIndex];
                if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                  throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`);
                }
                absoluteEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = relativeEntries.findIndex((entry2) => {
                  var _a;
                  return entry2.name === alias || ((_a = entry2.aliases) === null || _a === void 0 ? void 0 : _a.some((a) => a === alias));
                });
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = relativeEntries[toOverrideIndex];
                if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                  throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
                }
                relativeEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          relativeEntries.push(entry);
        },
        clone: () => cloneTo((0, exports.constructStack)()),
        use: (plugin) => {
          plugin.applyToStack(stack);
        },
        remove: (toRemove) => {
          if (typeof toRemove === "string")
            return removeByName(toRemove);
          else
            return removeByReference(toRemove);
        },
        removeByTag: (toRemove) => {
          let isRemoved = false;
          const filterCb = (entry) => {
            const { tags, name, aliases: _aliases } = entry;
            if (tags && tags.includes(toRemove)) {
              const aliases = getAllAliases(name, _aliases);
              for (const alias of aliases) {
                entriesNameSet.delete(alias);
              }
              isRemoved = true;
              return false;
            }
            return true;
          };
          absoluteEntries = absoluteEntries.filter(filterCb);
          relativeEntries = relativeEntries.filter(filterCb);
          return isRemoved;
        },
        concat: (from) => {
          var _a, _b;
          const cloned = cloneTo((0, exports.constructStack)());
          cloned.use(from);
          cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || ((_b = (_a = from.identifyOnResolve) === null || _a === void 0 ? void 0 : _a.call(from)) !== null && _b !== void 0 ? _b : false));
          return cloned;
        },
        applyToStack: cloneTo,
        identify: () => {
          return getMiddlewareList(true).map((mw) => {
            var _a;
            const step = (_a = mw.step) !== null && _a !== void 0 ? _a : mw.relation + " " + mw.toMiddleware;
            return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
          });
        },
        identifyOnResolve(toggle) {
          if (typeof toggle === "boolean")
            identifyOnResolve = toggle;
          return identifyOnResolve;
        },
        resolve: (handler2, context) => {
          for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
            handler2 = middleware(handler2, context);
          }
          if (identifyOnResolve) {
            console.log(stack.identify());
          }
          return handler2;
        }
      };
      return stack;
    };
    exports.constructStack = constructStack;
    var stepWeights = {
      initialize: 5,
      serialize: 4,
      build: 3,
      finalizeRequest: 2,
      deserialize: 1
    };
    var priorityWeights = {
      high: 3,
      normal: 2,
      low: 1
    };
  }
});

// node_modules/@smithy/middleware-stack/dist-cjs/index.js
var require_dist_cjs32 = __commonJS({
  "node_modules/@smithy/middleware-stack/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_MiddlewareStack(), exports);
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/client.js
var require_client2 = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Client = void 0;
    var middleware_stack_1 = require_dist_cjs32();
    var Client = class {
      constructor(config) {
        this.middlewareStack = (0, middleware_stack_1.constructStack)();
        this.config = config;
      }
      send(command, optionsOrCb, cb) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        const handler2 = command.resolveMiddleware(this.middlewareStack, this.config, options);
        if (callback) {
          handler2(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
          });
        } else {
          return handler2(command).then((result) => result.output);
        }
      }
      destroy() {
        if (this.config.requestHandler.destroy)
          this.config.requestHandler.destroy();
      }
    };
    exports.Client = Client;
  }
});

// node_modules/@smithy/util-base64/dist-cjs/fromBase64.js
var require_fromBase64 = __commonJS({
  "node_modules/@smithy/util-base64/dist-cjs/fromBase64.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromBase64 = void 0;
    var util_buffer_from_1 = require_dist_cjs12();
    var BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
    var fromBase64 = (input) => {
      if (input.length * 3 % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
      }
      if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
      }
      const buffer = (0, util_buffer_from_1.fromString)(input, "base64");
      return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    };
    exports.fromBase64 = fromBase64;
  }
});

// node_modules/@smithy/util-base64/dist-cjs/toBase64.js
var require_toBase64 = __commonJS({
  "node_modules/@smithy/util-base64/dist-cjs/toBase64.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toBase64 = void 0;
    var util_buffer_from_1 = require_dist_cjs12();
    var toBase64 = (input) => (0, util_buffer_from_1.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("base64");
    exports.toBase64 = toBase64;
  }
});

// node_modules/@smithy/util-base64/dist-cjs/index.js
var require_dist_cjs33 = __commonJS({
  "node_modules/@smithy/util-base64/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_fromBase64(), exports);
    tslib_1.__exportStar(require_toBase64(), exports);
  }
});

// node_modules/@smithy/util-stream/dist-cjs/blob/transforms.js
var require_transforms = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/blob/transforms.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformFromString = exports.transformToString = void 0;
    var util_base64_1 = require_dist_cjs33();
    var util_utf8_1 = require_dist_cjs13();
    var Uint8ArrayBlobAdapter_1 = require_Uint8ArrayBlobAdapter();
    function transformToString(payload, encoding = "utf-8") {
      if (encoding === "base64") {
        return (0, util_base64_1.toBase64)(payload);
      }
      return (0, util_utf8_1.toUtf8)(payload);
    }
    exports.transformToString = transformToString;
    function transformFromString(str, encoding) {
      if (encoding === "base64") {
        return Uint8ArrayBlobAdapter_1.Uint8ArrayBlobAdapter.mutate((0, util_base64_1.fromBase64)(str));
      }
      return Uint8ArrayBlobAdapter_1.Uint8ArrayBlobAdapter.mutate((0, util_utf8_1.fromUtf8)(str));
    }
    exports.transformFromString = transformFromString;
  }
});

// node_modules/@smithy/util-stream/dist-cjs/blob/Uint8ArrayBlobAdapter.js
var require_Uint8ArrayBlobAdapter = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/blob/Uint8ArrayBlobAdapter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Uint8ArrayBlobAdapter = void 0;
    var transforms_1 = require_transforms();
    var Uint8ArrayBlobAdapter = class _Uint8ArrayBlobAdapter extends Uint8Array {
      static fromString(source, encoding = "utf-8") {
        switch (typeof source) {
          case "string":
            return (0, transforms_1.transformFromString)(source, encoding);
          default:
            throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
        }
      }
      static mutate(source) {
        Object.setPrototypeOf(source, _Uint8ArrayBlobAdapter.prototype);
        return source;
      }
      transformToString(encoding = "utf-8") {
        return (0, transforms_1.transformToString)(this, encoding);
      }
    };
    exports.Uint8ArrayBlobAdapter = Uint8ArrayBlobAdapter;
  }
});

// node_modules/@smithy/util-stream/dist-cjs/getAwsChunkedEncodingStream.js
var require_getAwsChunkedEncodingStream = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/getAwsChunkedEncodingStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getAwsChunkedEncodingStream = void 0;
    var stream_1 = require("stream");
    var getAwsChunkedEncodingStream = (readableStream, options) => {
      const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
      const checksumRequired = base64Encoder !== void 0 && checksumAlgorithmFn !== void 0 && checksumLocationName !== void 0 && streamHasher !== void 0;
      const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : void 0;
      const awsChunkedEncodingStream = new stream_1.Readable({ read: () => {
      } });
      readableStream.on("data", (data) => {
        const length = bodyLengthChecker(data) || 0;
        awsChunkedEncodingStream.push(`${length.toString(16)}\r
`);
        awsChunkedEncodingStream.push(data);
        awsChunkedEncodingStream.push("\r\n");
      });
      readableStream.on("end", async () => {
        awsChunkedEncodingStream.push(`0\r
`);
        if (checksumRequired) {
          const checksum = base64Encoder(await digest);
          awsChunkedEncodingStream.push(`${checksumLocationName}:${checksum}\r
`);
          awsChunkedEncodingStream.push(`\r
`);
        }
        awsChunkedEncodingStream.push(null);
      });
      return awsChunkedEncodingStream;
    };
    exports.getAwsChunkedEncodingStream = getAwsChunkedEncodingStream;
  }
});

// node_modules/@smithy/querystring-builder/dist-cjs/index.js
var require_dist_cjs34 = __commonJS({
  "node_modules/@smithy/querystring-builder/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buildQueryString = void 0;
    var util_uri_escape_1 = require_dist_cjs14();
    function buildQueryString(query) {
      const parts = [];
      for (let key of Object.keys(query).sort()) {
        const value = query[key];
        key = (0, util_uri_escape_1.escapeUri)(key);
        if (Array.isArray(value)) {
          for (let i = 0, iLen = value.length; i < iLen; i++) {
            parts.push(`${key}=${(0, util_uri_escape_1.escapeUri)(value[i])}`);
          }
        } else {
          let qsEntry = key;
          if (value || typeof value === "string") {
            qsEntry += `=${(0, util_uri_escape_1.escapeUri)(value)}`;
          }
          parts.push(qsEntry);
        }
      }
      return parts.join("&");
    }
    exports.buildQueryString = buildQueryString;
  }
});

// node_modules/@smithy/node-http-handler/dist-cjs/constants.js
var require_constants5 = __commonJS({
  "node_modules/@smithy/node-http-handler/dist-cjs/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NODEJS_TIMEOUT_ERROR_CODES = void 0;
    exports.NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
  }
});

// node_modules/@smithy/node-http-handler/dist-cjs/get-transformed-headers.js
var require_get_transformed_headers = __commonJS({
  "node_modules/@smithy/node-http-handler/dist-cjs/get-transformed-headers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getTransformedHeaders = void 0;
    var getTransformedHeaders = (headers) => {
      const transformedHeaders = {};
      for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
      }
      return transformedHeaders;
    };
    exports.getTransformedHeaders = getTransformedHeaders;
  }
});

// node_modules/@smithy/node-http-handler/dist-cjs/set-connection-timeout.js
var require_set_connection_timeout = __commonJS({
  "node_modules/@smithy/node-http-handler/dist-cjs/set-connection-timeout.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setConnectionTimeout = void 0;
    var setConnectionTimeout = (request, reject, timeoutInMs = 0) => {
      if (!timeoutInMs) {
        return;
      }
      const timeoutId = setTimeout(() => {
        request.destroy();
        reject(Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
          name: "TimeoutError"
        }));
      }, timeoutInMs);
      request.on("socket", (socket) => {
        if (socket.connecting) {
          socket.on("connect", () => {
            clearTimeout(timeoutId);
          });
        } else {
          clearTimeout(timeoutId);
        }
      });
    };
    exports.setConnectionTimeout = setConnectionTimeout;
  }
});

// node_modules/@smithy/node-http-handler/dist-cjs/set-socket-keep-alive.js
var require_set_socket_keep_alive = __commonJS({
  "node_modules/@smithy/node-http-handler/dist-cjs/set-socket-keep-alive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setSocketKeepAlive = void 0;
    var setSocketKeepAlive = (request, { keepAlive, keepAliveMsecs }) => {
      if (keepAlive !== true) {
        return;
      }
      request.on("socket", (socket) => {
        socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
      });
    };
    exports.setSocketKeepAlive = setSocketKeepAlive;
  }
});

// node_modules/@smithy/node-http-handler/dist-cjs/set-socket-timeout.js
var require_set_socket_timeout = __commonJS({
  "node_modules/@smithy/node-http-handler/dist-cjs/set-socket-timeout.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setSocketTimeout = void 0;
    var setSocketTimeout = (request, reject, timeoutInMs = 0) => {
      request.setTimeout(timeoutInMs, () => {
        request.destroy();
        reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" }));
      });
    };
    exports.setSocketTimeout = setSocketTimeout;
  }
});

// node_modules/@smithy/node-http-handler/dist-cjs/write-request-body.js
var require_write_request_body = __commonJS({
  "node_modules/@smithy/node-http-handler/dist-cjs/write-request-body.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.writeRequestBody = void 0;
    var stream_1 = require("stream");
    var MIN_WAIT_TIME = 1e3;
    async function writeRequestBody(httpRequest, request, maxContinueTimeoutMs = MIN_WAIT_TIME) {
      var _a;
      const headers = (_a = request.headers) !== null && _a !== void 0 ? _a : {};
      const expect = headers["Expect"] || headers["expect"];
      let timeoutId = -1;
      let hasError = false;
      if (expect === "100-continue") {
        await Promise.race([
          new Promise((resolve) => {
            timeoutId = Number(setTimeout(resolve, Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
          }),
          new Promise((resolve) => {
            httpRequest.on("continue", () => {
              clearTimeout(timeoutId);
              resolve();
            });
            httpRequest.on("error", () => {
              hasError = true;
              clearTimeout(timeoutId);
              resolve();
            });
          })
        ]);
      }
      if (!hasError) {
        writeBody(httpRequest, request.body);
      }
    }
    exports.writeRequestBody = writeRequestBody;
    function writeBody(httpRequest, body) {
      if (body instanceof stream_1.Readable) {
        body.pipe(httpRequest);
      } else if (body) {
        httpRequest.end(Buffer.from(body));
      } else {
        httpRequest.end();
      }
    }
  }
});

// node_modules/@smithy/node-http-handler/dist-cjs/node-http-handler.js
var require_node_http_handler = __commonJS({
  "node_modules/@smithy/node-http-handler/dist-cjs/node-http-handler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NodeHttpHandler = exports.DEFAULT_REQUEST_TIMEOUT = void 0;
    var protocol_http_1 = require_dist_cjs2();
    var querystring_builder_1 = require_dist_cjs34();
    var http_1 = require("http");
    var https_1 = require("https");
    var constants_1 = require_constants5();
    var get_transformed_headers_1 = require_get_transformed_headers();
    var set_connection_timeout_1 = require_set_connection_timeout();
    var set_socket_keep_alive_1 = require_set_socket_keep_alive();
    var set_socket_timeout_1 = require_set_socket_timeout();
    var write_request_body_1 = require_write_request_body();
    exports.DEFAULT_REQUEST_TIMEOUT = 0;
    var NodeHttpHandler = class {
      constructor(options) {
        this.metadata = { handlerProtocol: "http/1.1" };
        this.configProvider = new Promise((resolve, reject) => {
          if (typeof options === "function") {
            options().then((_options) => {
              resolve(this.resolveDefaultConfig(_options));
            }).catch(reject);
          } else {
            resolve(this.resolveDefaultConfig(options));
          }
        });
      }
      resolveDefaultConfig(options) {
        const { requestTimeout, connectionTimeout, socketTimeout, httpAgent, httpsAgent } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
          connectionTimeout,
          requestTimeout: requestTimeout !== null && requestTimeout !== void 0 ? requestTimeout : socketTimeout,
          httpAgent: httpAgent || new http_1.Agent({ keepAlive, maxSockets }),
          httpsAgent: httpsAgent || new https_1.Agent({ keepAlive, maxSockets })
        };
      }
      destroy() {
        var _a, _b, _c, _d;
        (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.httpAgent) === null || _b === void 0 ? void 0 : _b.destroy();
        (_d = (_c = this.config) === null || _c === void 0 ? void 0 : _c.httpsAgent) === null || _d === void 0 ? void 0 : _d.destroy();
      }
      async handle(request, { abortSignal } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
        }
        return new Promise((_resolve, _reject) => {
          var _a, _b;
          let writeRequestBodyPromise = void 0;
          const resolve = async (arg) => {
            await writeRequestBodyPromise;
            _resolve(arg);
          };
          const reject = async (arg) => {
            await writeRequestBodyPromise;
            _reject(arg);
          };
          if (!this.config) {
            throw new Error("Node HTTP request handler config is not resolved");
          }
          if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
            return;
          }
          const isSSL = request.protocol === "https:";
          const queryString = (0, querystring_builder_1.buildQueryString)(request.query || {});
          let auth = void 0;
          if (request.username != null || request.password != null) {
            const username = (_a = request.username) !== null && _a !== void 0 ? _a : "";
            const password = (_b = request.password) !== null && _b !== void 0 ? _b : "";
            auth = `${username}:${password}`;
          }
          let path = request.path;
          if (queryString) {
            path += `?${queryString}`;
          }
          if (request.fragment) {
            path += `#${request.fragment}`;
          }
          const nodeHttpsOptions = {
            headers: request.headers,
            host: request.hostname,
            method: request.method,
            path,
            port: request.port,
            agent: isSSL ? this.config.httpsAgent : this.config.httpAgent,
            auth
          };
          const requestFunc = isSSL ? https_1.request : http_1.request;
          const req = requestFunc(nodeHttpsOptions, (res) => {
            const httpResponse = new protocol_http_1.HttpResponse({
              statusCode: res.statusCode || -1,
              reason: res.statusMessage,
              headers: (0, get_transformed_headers_1.getTransformedHeaders)(res.headers),
              body: res
            });
            resolve({ response: httpResponse });
          });
          req.on("error", (err) => {
            if (constants_1.NODEJS_TIMEOUT_ERROR_CODES.includes(err.code)) {
              reject(Object.assign(err, { name: "TimeoutError" }));
            } else {
              reject(err);
            }
          });
          (0, set_connection_timeout_1.setConnectionTimeout)(req, reject, this.config.connectionTimeout);
          (0, set_socket_timeout_1.setSocketTimeout)(req, reject, this.config.requestTimeout);
          if (abortSignal) {
            abortSignal.onabort = () => {
              req.abort();
              const abortError = new Error("Request aborted");
              abortError.name = "AbortError";
              reject(abortError);
            };
          }
          const httpAgent = nodeHttpsOptions.agent;
          if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
            (0, set_socket_keep_alive_1.setSocketKeepAlive)(req, {
              keepAlive: httpAgent.keepAlive,
              keepAliveMsecs: httpAgent.keepAliveMsecs
            });
          }
          writeRequestBodyPromise = (0, write_request_body_1.writeRequestBody)(req, request, this.config.requestTimeout).catch(_reject);
        });
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config) => {
          return {
            ...config,
            [key]: value
          };
        });
      }
      httpHandlerConfigs() {
        var _a;
        return (_a = this.config) !== null && _a !== void 0 ? _a : {};
      }
    };
    exports.NodeHttpHandler = NodeHttpHandler;
  }
});

// node_modules/@smithy/node-http-handler/dist-cjs/node-http2-connection-pool.js
var require_node_http2_connection_pool = __commonJS({
  "node_modules/@smithy/node-http-handler/dist-cjs/node-http2-connection-pool.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NodeHttp2ConnectionPool = void 0;
    var NodeHttp2ConnectionPool = class {
      constructor(sessions) {
        this.sessions = [];
        this.sessions = sessions !== null && sessions !== void 0 ? sessions : [];
      }
      poll() {
        if (this.sessions.length > 0) {
          return this.sessions.shift();
        }
      }
      offerLast(session) {
        this.sessions.push(session);
      }
      contains(session) {
        return this.sessions.includes(session);
      }
      remove(session) {
        this.sessions = this.sessions.filter((s) => s !== session);
      }
      [Symbol.iterator]() {
        return this.sessions[Symbol.iterator]();
      }
      destroy(connection) {
        for (const session of this.sessions) {
          if (session === connection) {
            if (!session.destroyed) {
              session.destroy();
            }
          }
        }
      }
    };
    exports.NodeHttp2ConnectionPool = NodeHttp2ConnectionPool;
  }
});

// node_modules/@smithy/node-http-handler/dist-cjs/node-http2-connection-manager.js
var require_node_http2_connection_manager = __commonJS({
  "node_modules/@smithy/node-http-handler/dist-cjs/node-http2-connection-manager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NodeHttp2ConnectionManager = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var http2_1 = tslib_1.__importDefault(require("http2"));
    var node_http2_connection_pool_1 = require_node_http2_connection_pool();
    var NodeHttp2ConnectionManager = class {
      constructor(config) {
        this.sessionCache = /* @__PURE__ */ new Map();
        this.config = config;
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
          throw new RangeError("maxConcurrency must be greater than zero.");
        }
      }
      lease(requestContext, connectionConfiguration) {
        const url = this.getUrlString(requestContext);
        const existingPool = this.sessionCache.get(url);
        if (existingPool) {
          const existingSession = existingPool.poll();
          if (existingSession && !this.config.disableConcurrency) {
            return existingSession;
          }
        }
        const session = http2_1.default.connect(url);
        if (this.config.maxConcurrency) {
          session.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (err) => {
            if (err) {
              throw new Error("Fail to set maxConcurrentStreams to " + this.config.maxConcurrency + "when creating new session for " + requestContext.destination.toString());
            }
          });
        }
        session.unref();
        const destroySessionCb = () => {
          session.destroy();
          this.deleteSession(url, session);
        };
        session.on("goaway", destroySessionCb);
        session.on("error", destroySessionCb);
        session.on("frameError", destroySessionCb);
        session.on("close", () => this.deleteSession(url, session));
        if (connectionConfiguration.requestTimeout) {
          session.setTimeout(connectionConfiguration.requestTimeout, destroySessionCb);
        }
        const connectionPool = this.sessionCache.get(url) || new node_http2_connection_pool_1.NodeHttp2ConnectionPool();
        connectionPool.offerLast(session);
        this.sessionCache.set(url, connectionPool);
        return session;
      }
      deleteSession(authority, session) {
        const existingConnectionPool = this.sessionCache.get(authority);
        if (!existingConnectionPool) {
          return;
        }
        if (!existingConnectionPool.contains(session)) {
          return;
        }
        existingConnectionPool.remove(session);
        this.sessionCache.set(authority, existingConnectionPool);
      }
      release(requestContext, session) {
        var _a;
        const cacheKey = this.getUrlString(requestContext);
        (_a = this.sessionCache.get(cacheKey)) === null || _a === void 0 ? void 0 : _a.offerLast(session);
      }
      destroy() {
        for (const [key, connectionPool] of this.sessionCache) {
          for (const session of connectionPool) {
            if (!session.destroyed) {
              session.destroy();
            }
            connectionPool.remove(session);
          }
          this.sessionCache.delete(key);
        }
      }
      setMaxConcurrentStreams(maxConcurrentStreams) {
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
          throw new RangeError("maxConcurrentStreams must be greater than zero.");
        }
        this.config.maxConcurrency = maxConcurrentStreams;
      }
      setDisableConcurrentStreams(disableConcurrentStreams) {
        this.config.disableConcurrency = disableConcurrentStreams;
      }
      getUrlString(request) {
        return request.destination.toString();
      }
    };
    exports.NodeHttp2ConnectionManager = NodeHttp2ConnectionManager;
  }
});

// node_modules/@smithy/node-http-handler/dist-cjs/node-http2-handler.js
var require_node_http2_handler = __commonJS({
  "node_modules/@smithy/node-http-handler/dist-cjs/node-http2-handler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NodeHttp2Handler = void 0;
    var protocol_http_1 = require_dist_cjs2();
    var querystring_builder_1 = require_dist_cjs34();
    var http2_1 = require("http2");
    var get_transformed_headers_1 = require_get_transformed_headers();
    var node_http2_connection_manager_1 = require_node_http2_connection_manager();
    var write_request_body_1 = require_write_request_body();
    var NodeHttp2Handler = class {
      constructor(options) {
        this.metadata = { handlerProtocol: "h2" };
        this.connectionManager = new node_http2_connection_manager_1.NodeHttp2ConnectionManager({});
        this.configProvider = new Promise((resolve, reject) => {
          if (typeof options === "function") {
            options().then((opts) => {
              resolve(opts || {});
            }).catch(reject);
          } else {
            resolve(options || {});
          }
        });
      }
      destroy() {
        this.connectionManager.destroy();
      }
      async handle(request, { abortSignal } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
          this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || false);
          if (this.config.maxConcurrentStreams) {
            this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams);
          }
        }
        const { requestTimeout, disableConcurrentStreams } = this.config;
        return new Promise((_resolve, _reject) => {
          var _a, _b, _c;
          let fulfilled = false;
          let writeRequestBodyPromise = void 0;
          const resolve = async (arg) => {
            await writeRequestBodyPromise;
            _resolve(arg);
          };
          const reject = async (arg) => {
            await writeRequestBodyPromise;
            _reject(arg);
          };
          if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) {
            fulfilled = true;
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
            return;
          }
          const { hostname, method, port, protocol, query } = request;
          let auth = "";
          if (request.username != null || request.password != null) {
            const username = (_a = request.username) !== null && _a !== void 0 ? _a : "";
            const password = (_b = request.password) !== null && _b !== void 0 ? _b : "";
            auth = `${username}:${password}@`;
          }
          const authority = `${protocol}//${auth}${hostname}${port ? `:${port}` : ""}`;
          const requestContext = { destination: new URL(authority) };
          const session = this.connectionManager.lease(requestContext, {
            requestTimeout: (_c = this.config) === null || _c === void 0 ? void 0 : _c.sessionTimeout,
            disableConcurrentStreams: disableConcurrentStreams || false
          });
          const rejectWithDestroy = (err) => {
            if (disableConcurrentStreams) {
              this.destroySession(session);
            }
            fulfilled = true;
            reject(err);
          };
          const queryString = (0, querystring_builder_1.buildQueryString)(query || {});
          let path = request.path;
          if (queryString) {
            path += `?${queryString}`;
          }
          if (request.fragment) {
            path += `#${request.fragment}`;
          }
          const req = session.request({
            ...request.headers,
            [http2_1.constants.HTTP2_HEADER_PATH]: path,
            [http2_1.constants.HTTP2_HEADER_METHOD]: method
          });
          session.ref();
          req.on("response", (headers) => {
            const httpResponse = new protocol_http_1.HttpResponse({
              statusCode: headers[":status"] || -1,
              headers: (0, get_transformed_headers_1.getTransformedHeaders)(headers),
              body: req
            });
            fulfilled = true;
            resolve({ response: httpResponse });
            if (disableConcurrentStreams) {
              session.close();
              this.connectionManager.deleteSession(authority, session);
            }
          });
          if (requestTimeout) {
            req.setTimeout(requestTimeout, () => {
              req.close();
              const timeoutError = new Error(`Stream timed out because of no activity for ${requestTimeout} ms`);
              timeoutError.name = "TimeoutError";
              rejectWithDestroy(timeoutError);
            });
          }
          if (abortSignal) {
            abortSignal.onabort = () => {
              req.close();
              const abortError = new Error("Request aborted");
              abortError.name = "AbortError";
              rejectWithDestroy(abortError);
            };
          }
          req.on("frameError", (type, code, id) => {
            rejectWithDestroy(new Error(`Frame type id ${type} in stream id ${id} has failed with code ${code}.`));
          });
          req.on("error", rejectWithDestroy);
          req.on("aborted", () => {
            rejectWithDestroy(new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${req.rstCode}.`));
          });
          req.on("close", () => {
            session.unref();
            if (disableConcurrentStreams) {
              session.destroy();
            }
            if (!fulfilled) {
              rejectWithDestroy(new Error("Unexpected error: http2 request did not get a response"));
            }
          });
          writeRequestBodyPromise = (0, write_request_body_1.writeRequestBody)(req, request, requestTimeout);
        });
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config) => {
          return {
            ...config,
            [key]: value
          };
        });
      }
      httpHandlerConfigs() {
        var _a;
        return (_a = this.config) !== null && _a !== void 0 ? _a : {};
      }
      destroySession(session) {
        if (!session.destroyed) {
          session.destroy();
        }
      }
    };
    exports.NodeHttp2Handler = NodeHttp2Handler;
  }
});

// node_modules/@smithy/node-http-handler/dist-cjs/stream-collector/collector.js
var require_collector = __commonJS({
  "node_modules/@smithy/node-http-handler/dist-cjs/stream-collector/collector.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Collector = void 0;
    var stream_1 = require("stream");
    var Collector = class extends stream_1.Writable {
      constructor() {
        super(...arguments);
        this.bufferedBytes = [];
      }
      _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
      }
    };
    exports.Collector = Collector;
  }
});

// node_modules/@smithy/node-http-handler/dist-cjs/stream-collector/index.js
var require_stream_collector = __commonJS({
  "node_modules/@smithy/node-http-handler/dist-cjs/stream-collector/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.streamCollector = void 0;
    var collector_1 = require_collector();
    var streamCollector = (stream) => new Promise((resolve, reject) => {
      const collector = new collector_1.Collector();
      stream.pipe(collector);
      stream.on("error", (err) => {
        collector.end();
        reject(err);
      });
      collector.on("error", reject);
      collector.on("finish", function() {
        const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
        resolve(bytes);
      });
    });
    exports.streamCollector = streamCollector;
  }
});

// node_modules/@smithy/node-http-handler/dist-cjs/index.js
var require_dist_cjs35 = __commonJS({
  "node_modules/@smithy/node-http-handler/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_node_http_handler(), exports);
    tslib_1.__exportStar(require_node_http2_handler(), exports);
    tslib_1.__exportStar(require_stream_collector(), exports);
  }
});

// node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.js
var require_sdk_stream_mixin = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sdkStreamMixin = void 0;
    var node_http_handler_1 = require_dist_cjs35();
    var util_buffer_from_1 = require_dist_cjs12();
    var stream_1 = require("stream");
    var util_1 = require("util");
    var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
    var sdkStreamMixin = (stream) => {
      var _a, _b;
      if (!(stream instanceof stream_1.Readable)) {
        const name = ((_b = (_a = stream === null || stream === void 0 ? void 0 : stream.__proto__) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) || stream;
        throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${name}`);
      }
      let transformed = false;
      const transformToByteArray = async () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await (0, node_http_handler_1.streamCollector)(stream);
      };
      return Object.assign(stream, {
        transformToByteArray,
        transformToString: async (encoding) => {
          const buf = await transformToByteArray();
          if (encoding === void 0 || Buffer.isEncoding(encoding)) {
            return (0, util_buffer_from_1.fromArrayBuffer)(buf.buffer, buf.byteOffset, buf.byteLength).toString(encoding);
          } else {
            const decoder = new util_1.TextDecoder(encoding);
            return decoder.decode(buf);
          }
        },
        transformToWebStream: () => {
          if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
          }
          if (stream.readableFlowing !== null) {
            throw new Error("The stream has been consumed by other callbacks.");
          }
          if (typeof stream_1.Readable.toWeb !== "function") {
            throw new Error("Readable.toWeb() is not supported. Please make sure you are using Node.js >= 17.0.0, or polyfill is available.");
          }
          transformed = true;
          return stream_1.Readable.toWeb(stream);
        }
      });
    };
    exports.sdkStreamMixin = sdkStreamMixin;
  }
});

// node_modules/@smithy/util-stream/dist-cjs/index.js
var require_dist_cjs36 = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_Uint8ArrayBlobAdapter(), exports);
    tslib_1.__exportStar(require_getAwsChunkedEncodingStream(), exports);
    tslib_1.__exportStar(require_sdk_stream_mixin(), exports);
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/collect-stream-body.js
var require_collect_stream_body = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/collect-stream-body.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.collectBody = void 0;
    var util_stream_1 = require_dist_cjs36();
    var collectBody = async (streamBody = new Uint8Array(), context) => {
      if (streamBody instanceof Uint8Array) {
        return util_stream_1.Uint8ArrayBlobAdapter.mutate(streamBody);
      }
      if (!streamBody) {
        return util_stream_1.Uint8ArrayBlobAdapter.mutate(new Uint8Array());
      }
      const fromContext = context.streamCollector(streamBody);
      return util_stream_1.Uint8ArrayBlobAdapter.mutate(await fromContext);
    };
    exports.collectBody = collectBody;
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/command.js
var require_command2 = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/command.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Command = void 0;
    var middleware_stack_1 = require_dist_cjs32();
    var Command = class {
      constructor() {
        this.middlewareStack = (0, middleware_stack_1.constructStack)();
      }
    };
    exports.Command = Command;
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/constants.js
var require_constants6 = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SENSITIVE_STRING = void 0;
    exports.SENSITIVE_STRING = "***SensitiveInformation***";
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/create-aggregated-client.js
var require_create_aggregated_client = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/create-aggregated-client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createAggregatedClient = void 0;
    var createAggregatedClient = (commands, Client) => {
      for (const command of Object.keys(commands)) {
        const CommandCtor = commands[command];
        const methodImpl = async function(args, optionsOrCb, cb) {
          const command2 = new CommandCtor(args);
          if (typeof optionsOrCb === "function") {
            this.send(command2, optionsOrCb);
          } else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
              throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
            this.send(command2, optionsOrCb || {}, cb);
          } else {
            return this.send(command2, optionsOrCb);
          }
        };
        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
        Client.prototype[methodName] = methodImpl;
      }
    };
    exports.createAggregatedClient = createAggregatedClient;
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/parse-utils.js
var require_parse_utils = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/parse-utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.logger = exports.strictParseByte = exports.strictParseShort = exports.strictParseInt32 = exports.strictParseInt = exports.strictParseLong = exports.limitedParseFloat32 = exports.limitedParseFloat = exports.handleFloat = exports.limitedParseDouble = exports.strictParseFloat32 = exports.strictParseFloat = exports.strictParseDouble = exports.expectUnion = exports.expectString = exports.expectObject = exports.expectNonNull = exports.expectByte = exports.expectShort = exports.expectInt32 = exports.expectInt = exports.expectLong = exports.expectFloat32 = exports.expectNumber = exports.expectBoolean = exports.parseBoolean = void 0;
    var parseBoolean = (value) => {
      switch (value) {
        case "true":
          return true;
        case "false":
          return false;
        default:
          throw new Error(`Unable to parse boolean value "${value}"`);
      }
    };
    exports.parseBoolean = parseBoolean;
    var expectBoolean = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "number") {
        if (value === 0 || value === 1) {
          exports.logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (value === 0) {
          return false;
        }
        if (value === 1) {
          return true;
        }
      }
      if (typeof value === "string") {
        const lower = value.toLowerCase();
        if (lower === "false" || lower === "true") {
          exports.logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (lower === "false") {
          return false;
        }
        if (lower === "true") {
          return true;
        }
      }
      if (typeof value === "boolean") {
        return value;
      }
      throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
    };
    exports.expectBoolean = expectBoolean;
    var expectNumber = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
          if (String(parsed) !== String(value)) {
            exports.logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
          }
          return parsed;
        }
      }
      if (typeof value === "number") {
        return value;
      }
      throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
    };
    exports.expectNumber = expectNumber;
    var MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
    var expectFloat32 = (value) => {
      const expected = (0, exports.expectNumber)(value);
      if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
          throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
      }
      return expected;
    };
    exports.expectFloat32 = expectFloat32;
    var expectLong = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
      }
      throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
    };
    exports.expectLong = expectLong;
    exports.expectInt = exports.expectLong;
    var expectInt32 = (value) => expectSizedInt(value, 32);
    exports.expectInt32 = expectInt32;
    var expectShort = (value) => expectSizedInt(value, 16);
    exports.expectShort = expectShort;
    var expectByte = (value) => expectSizedInt(value, 8);
    exports.expectByte = expectByte;
    var expectSizedInt = (value, size) => {
      const expected = (0, exports.expectLong)(value);
      if (expected !== void 0 && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
      }
      return expected;
    };
    var castInt = (value, size) => {
      switch (size) {
        case 32:
          return Int32Array.of(value)[0];
        case 16:
          return Int16Array.of(value)[0];
        case 8:
          return Int8Array.of(value)[0];
      }
    };
    var expectNonNull = (value, location) => {
      if (value === null || value === void 0) {
        if (location) {
          throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
      }
      return value;
    };
    exports.expectNonNull = expectNonNull;
    var expectObject = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "object" && !Array.isArray(value)) {
        return value;
      }
      const receivedType = Array.isArray(value) ? "array" : typeof value;
      throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
    };
    exports.expectObject = expectObject;
    var expectString = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        return value;
      }
      if (["boolean", "number", "bigint"].includes(typeof value)) {
        exports.logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
        return String(value);
      }
      throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
    };
    exports.expectString = expectString;
    var expectUnion = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      const asObject = (0, exports.expectObject)(value);
      const setKeys = Object.entries(asObject).filter(([, v]) => v != null).map(([k]) => k);
      if (setKeys.length === 0) {
        throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
      }
      if (setKeys.length > 1) {
        throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
      }
      return asObject;
    };
    exports.expectUnion = expectUnion;
    var strictParseDouble = (value) => {
      if (typeof value == "string") {
        return (0, exports.expectNumber)(parseNumber(value));
      }
      return (0, exports.expectNumber)(value);
    };
    exports.strictParseDouble = strictParseDouble;
    exports.strictParseFloat = exports.strictParseDouble;
    var strictParseFloat32 = (value) => {
      if (typeof value == "string") {
        return (0, exports.expectFloat32)(parseNumber(value));
      }
      return (0, exports.expectFloat32)(value);
    };
    exports.strictParseFloat32 = strictParseFloat32;
    var NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
    var parseNumber = (value) => {
      const matches = value.match(NUMBER_REGEX);
      if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
      }
      return parseFloat(value);
    };
    var limitedParseDouble = (value) => {
      if (typeof value == "string") {
        return parseFloatString(value);
      }
      return (0, exports.expectNumber)(value);
    };
    exports.limitedParseDouble = limitedParseDouble;
    exports.handleFloat = exports.limitedParseDouble;
    exports.limitedParseFloat = exports.limitedParseDouble;
    var limitedParseFloat32 = (value) => {
      if (typeof value == "string") {
        return parseFloatString(value);
      }
      return (0, exports.expectFloat32)(value);
    };
    exports.limitedParseFloat32 = limitedParseFloat32;
    var parseFloatString = (value) => {
      switch (value) {
        case "NaN":
          return NaN;
        case "Infinity":
          return Infinity;
        case "-Infinity":
          return -Infinity;
        default:
          throw new Error(`Unable to parse float value: ${value}`);
      }
    };
    var strictParseLong = (value) => {
      if (typeof value === "string") {
        return (0, exports.expectLong)(parseNumber(value));
      }
      return (0, exports.expectLong)(value);
    };
    exports.strictParseLong = strictParseLong;
    exports.strictParseInt = exports.strictParseLong;
    var strictParseInt32 = (value) => {
      if (typeof value === "string") {
        return (0, exports.expectInt32)(parseNumber(value));
      }
      return (0, exports.expectInt32)(value);
    };
    exports.strictParseInt32 = strictParseInt32;
    var strictParseShort = (value) => {
      if (typeof value === "string") {
        return (0, exports.expectShort)(parseNumber(value));
      }
      return (0, exports.expectShort)(value);
    };
    exports.strictParseShort = strictParseShort;
    var strictParseByte = (value) => {
      if (typeof value === "string") {
        return (0, exports.expectByte)(parseNumber(value));
      }
      return (0, exports.expectByte)(value);
    };
    exports.strictParseByte = strictParseByte;
    var stackTraceWarning = (message) => {
      return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s) => !s.includes("stackTraceWarning")).join("\n");
    };
    exports.logger = {
      warn: console.warn
    };
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/date-utils.js
var require_date_utils = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/date-utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseEpochTimestamp = exports.parseRfc7231DateTime = exports.parseRfc3339DateTimeWithOffset = exports.parseRfc3339DateTime = exports.dateToUtcString = void 0;
    var parse_utils_1 = require_parse_utils();
    var DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    function dateToUtcString(date) {
      const year = date.getUTCFullYear();
      const month = date.getUTCMonth();
      const dayOfWeek = date.getUTCDay();
      const dayOfMonthInt = date.getUTCDate();
      const hoursInt = date.getUTCHours();
      const minutesInt = date.getUTCMinutes();
      const secondsInt = date.getUTCSeconds();
      const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
      const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
      const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
      const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
      return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
    }
    exports.dateToUtcString = dateToUtcString;
    var RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
    var parseRfc3339DateTime = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC3339.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
      const year = (0, parse_utils_1.strictParseShort)(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      return buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
    };
    exports.parseRfc3339DateTime = parseRfc3339DateTime;
    var RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
    var parseRfc3339DateTimeWithOffset = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC3339_WITH_OFFSET.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
      const year = (0, parse_utils_1.strictParseShort)(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
      if (offsetStr.toUpperCase() != "Z") {
        date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
      }
      return date;
    };
    exports.parseRfc3339DateTimeWithOffset = parseRfc3339DateTimeWithOffset;
    var IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    var RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    var ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
    var parseRfc7231DateTime = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
      }
      let match = IMF_FIXDATE.exec(value);
      if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate((0, parse_utils_1.strictParseShort)(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
      }
      match = RFC_850_DATE.exec(value);
      if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
          hours,
          minutes,
          seconds,
          fractionalMilliseconds
        }));
      }
      match = ASC_TIME.exec(value);
      if (match) {
        const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate((0, parse_utils_1.strictParseShort)(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
      }
      throw new TypeError("Invalid RFC-7231 date-time value");
    };
    exports.parseRfc7231DateTime = parseRfc7231DateTime;
    var parseEpochTimestamp = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      let valueAsDouble;
      if (typeof value === "number") {
        valueAsDouble = value;
      } else if (typeof value === "string") {
        valueAsDouble = (0, parse_utils_1.strictParseDouble)(value);
      } else {
        throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
      }
      if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
        throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
      }
      return new Date(Math.round(valueAsDouble * 1e3));
    };
    exports.parseEpochTimestamp = parseEpochTimestamp;
    var buildDate = (year, month, day, time) => {
      const adjustedMonth = month - 1;
      validateDayOfMonth(year, adjustedMonth, day);
      return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
    };
    var parseTwoDigitYear = (value) => {
      const thisYear = (/* @__PURE__ */ new Date()).getUTCFullYear();
      const valueInThisCentury = Math.floor(thisYear / 100) * 100 + (0, parse_utils_1.strictParseShort)(stripLeadingZeroes(value));
      if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
      }
      return valueInThisCentury;
    };
    var FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
    var adjustRfc850Year = (input) => {
      if (input.getTime() - (/* @__PURE__ */ new Date()).getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
      }
      return input;
    };
    var parseMonthByShortName = (value) => {
      const monthIdx = MONTHS.indexOf(value);
      if (monthIdx < 0) {
        throw new TypeError(`Invalid month: ${value}`);
      }
      return monthIdx + 1;
    };
    var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var validateDayOfMonth = (year, month, day) => {
      let maxDays = DAYS_IN_MONTH[month];
      if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
      }
      if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
      }
    };
    var isLeapYear = (year) => {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    };
    var parseDateValue = (value, type, lower, upper) => {
      const dateVal = (0, parse_utils_1.strictParseByte)(stripLeadingZeroes(value));
      if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
      }
      return dateVal;
    };
    var parseMilliseconds = (value) => {
      if (value === null || value === void 0) {
        return 0;
      }
      return (0, parse_utils_1.strictParseFloat32)("0." + value) * 1e3;
    };
    var parseOffsetToMilliseconds = (value) => {
      const directionStr = value[0];
      let direction = 1;
      if (directionStr == "+") {
        direction = 1;
      } else if (directionStr == "-") {
        direction = -1;
      } else {
        throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
      }
      const hour = Number(value.substring(1, 3));
      const minute = Number(value.substring(4, 6));
      return direction * (hour * 60 + minute) * 60 * 1e3;
    };
    var stripLeadingZeroes = (value) => {
      let idx = 0;
      while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
      }
      if (idx === 0) {
        return value;
      }
      return value.slice(idx);
    };
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/exceptions.js
var require_exceptions = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/exceptions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decorateServiceException = exports.ServiceException = void 0;
    var ServiceException = class _ServiceException extends Error {
      constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, _ServiceException.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
      }
    };
    exports.ServiceException = ServiceException;
    var decorateServiceException = (exception, additions = {}) => {
      Object.entries(additions).filter(([, v]) => v !== void 0).forEach(([k, v]) => {
        if (exception[k] == void 0 || exception[k] === "") {
          exception[k] = v;
        }
      });
      const message = exception.message || exception.Message || "UnknownError";
      exception.message = message;
      delete exception.Message;
      return exception;
    };
    exports.decorateServiceException = decorateServiceException;
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/default-error-handler.js
var require_default_error_handler = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/default-error-handler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.withBaseException = exports.throwDefaultError = void 0;
    var exceptions_1 = require_exceptions();
    var throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
      const response = new exceptionCtor({
        name: (parsedBody === null || parsedBody === void 0 ? void 0 : parsedBody.code) || (parsedBody === null || parsedBody === void 0 ? void 0 : parsedBody.Code) || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata
      });
      throw (0, exceptions_1.decorateServiceException)(response, parsedBody);
    };
    exports.throwDefaultError = throwDefaultError;
    var withBaseException = (ExceptionCtor) => {
      return ({ output, parsedBody, errorCode }) => {
        (0, exports.throwDefaultError)({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
      };
    };
    exports.withBaseException = withBaseException;
    var deserializeMetadata = (output) => {
      var _a, _b;
      return {
        httpStatusCode: output.statusCode,
        requestId: (_b = (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"]) !== null && _b !== void 0 ? _b : output.headers["x-amz-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"]
      };
    };
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/defaults-mode.js
var require_defaults_mode = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/defaults-mode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadConfigsForDefaultMode = void 0;
    var loadConfigsForDefaultMode = (mode) => {
      switch (mode) {
        case "standard":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "in-region":
          return {
            retryMode: "standard",
            connectionTimeout: 1100
          };
        case "cross-region":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "mobile":
          return {
            retryMode: "standard",
            connectionTimeout: 3e4
          };
        default:
          return {};
      }
    };
    exports.loadConfigsForDefaultMode = loadConfigsForDefaultMode;
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/emitWarningIfUnsupportedVersion.js
var require_emitWarningIfUnsupportedVersion = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/emitWarningIfUnsupportedVersion.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.emitWarningIfUnsupportedVersion = void 0;
    var warningEmitted = false;
    var emitWarningIfUnsupportedVersion = (version2) => {
      if (version2 && !warningEmitted && parseInt(version2.substring(1, version2.indexOf("."))) < 14) {
        warningEmitted = true;
      }
    };
    exports.emitWarningIfUnsupportedVersion = emitWarningIfUnsupportedVersion;
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/extensions/checksum.js
var require_checksum3 = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/extensions/checksum.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveChecksumRuntimeConfig = exports.getChecksumConfiguration = exports.AlgorithmId = void 0;
    var types_1 = require_dist_cjs();
    Object.defineProperty(exports, "AlgorithmId", { enumerable: true, get: function() {
      return types_1.AlgorithmId;
    } });
    var getChecksumConfiguration = (runtimeConfig) => {
      const checksumAlgorithms = [];
      for (const id in types_1.AlgorithmId) {
        const algorithmId = types_1.AlgorithmId[id];
        if (runtimeConfig[algorithmId] === void 0) {
          continue;
        }
        checksumAlgorithms.push({
          algorithmId: () => algorithmId,
          checksumConstructor: () => runtimeConfig[algorithmId]
        });
      }
      return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm(algo) {
          this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
          return this._checksumAlgorithms;
        }
      };
    };
    exports.getChecksumConfiguration = getChecksumConfiguration;
    var resolveChecksumRuntimeConfig = (clientConfig) => {
      const runtimeConfig = {};
      clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
      });
      return runtimeConfig;
    };
    exports.resolveChecksumRuntimeConfig = resolveChecksumRuntimeConfig;
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/extensions/retry.js
var require_retry2 = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/extensions/retry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveRetryRuntimeConfig = exports.getRetryConfiguration = void 0;
    var getRetryConfiguration = (runtimeConfig) => {
      let _retryStrategy = runtimeConfig.retryStrategy;
      return {
        setRetryStrategy(retryStrategy) {
          _retryStrategy = retryStrategy;
        },
        retryStrategy() {
          return _retryStrategy;
        }
      };
    };
    exports.getRetryConfiguration = getRetryConfiguration;
    var resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
      const runtimeConfig = {};
      runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
      return runtimeConfig;
    };
    exports.resolveRetryRuntimeConfig = resolveRetryRuntimeConfig;
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/extensions/defaultExtensionConfiguration.js
var require_defaultExtensionConfiguration2 = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/extensions/defaultExtensionConfiguration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveDefaultRuntimeConfig = exports.getDefaultClientConfiguration = exports.getDefaultExtensionConfiguration = void 0;
    var checksum_1 = require_checksum3();
    var retry_1 = require_retry2();
    var getDefaultExtensionConfiguration = (runtimeConfig) => {
      return {
        ...(0, checksum_1.getChecksumConfiguration)(runtimeConfig),
        ...(0, retry_1.getRetryConfiguration)(runtimeConfig)
      };
    };
    exports.getDefaultExtensionConfiguration = getDefaultExtensionConfiguration;
    exports.getDefaultClientConfiguration = exports.getDefaultExtensionConfiguration;
    var resolveDefaultRuntimeConfig = (config) => {
      return {
        ...(0, checksum_1.resolveChecksumRuntimeConfig)(config),
        ...(0, retry_1.resolveRetryRuntimeConfig)(config)
      };
    };
    exports.resolveDefaultRuntimeConfig = resolveDefaultRuntimeConfig;
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/extensions/index.js
var require_extensions3 = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/extensions/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_defaultExtensionConfiguration2(), exports);
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/extended-encode-uri-component.js
var require_extended_encode_uri_component = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/extended-encode-uri-component.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.extendedEncodeURIComponent = void 0;
    function extendedEncodeURIComponent(str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    exports.extendedEncodeURIComponent = extendedEncodeURIComponent;
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/get-array-if-single-item.js
var require_get_array_if_single_item = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/get-array-if-single-item.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getArrayIfSingleItem = void 0;
    var getArrayIfSingleItem = (mayBeArray) => Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray];
    exports.getArrayIfSingleItem = getArrayIfSingleItem;
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/get-value-from-text-node.js
var require_get_value_from_text_node = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/get-value-from-text-node.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getValueFromTextNode = void 0;
    var getValueFromTextNode = (obj) => {
      const textNodeName = "#text";
      for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
          obj[key] = obj[key][textNodeName];
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
          obj[key] = (0, exports.getValueFromTextNode)(obj[key]);
        }
      }
      return obj;
    };
    exports.getValueFromTextNode = getValueFromTextNode;
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/lazy-json.js
var require_lazy_json = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/lazy-json.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LazyJsonString = exports.StringWrapper = void 0;
    var StringWrapper = function() {
      const Class = Object.getPrototypeOf(this).constructor;
      const Constructor = Function.bind.apply(String, [null, ...arguments]);
      const instance = new Constructor();
      Object.setPrototypeOf(instance, Class.prototype);
      return instance;
    };
    exports.StringWrapper = StringWrapper;
    exports.StringWrapper.prototype = Object.create(String.prototype, {
      constructor: {
        value: exports.StringWrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    Object.setPrototypeOf(exports.StringWrapper, String);
    var LazyJsonString = class _LazyJsonString extends exports.StringWrapper {
      deserializeJSON() {
        return JSON.parse(super.toString());
      }
      toJSON() {
        return super.toString();
      }
      static fromObject(object) {
        if (object instanceof _LazyJsonString) {
          return object;
        } else if (object instanceof String || typeof object === "string") {
          return new _LazyJsonString(object);
        }
        return new _LazyJsonString(JSON.stringify(object));
      }
    };
    exports.LazyJsonString = LazyJsonString;
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/object-mapping.js
var require_object_mapping = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/object-mapping.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.take = exports.convertMap = exports.map = void 0;
    function map(arg0, arg1, arg2) {
      let target;
      let filter;
      let instructions;
      if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
        target = {};
        instructions = arg0;
      } else {
        target = arg0;
        if (typeof arg1 === "function") {
          filter = arg1;
          instructions = arg2;
          return mapWithFilter(target, filter, instructions);
        } else {
          instructions = arg1;
        }
      }
      for (const key of Object.keys(instructions)) {
        if (!Array.isArray(instructions[key])) {
          target[key] = instructions[key];
          continue;
        }
        applyInstruction(target, null, instructions, key);
      }
      return target;
    }
    exports.map = map;
    var convertMap = (target) => {
      const output = {};
      for (const [k, v] of Object.entries(target || {})) {
        output[k] = [, v];
      }
      return output;
    };
    exports.convertMap = convertMap;
    var take = (source, instructions) => {
      const out = {};
      for (const key in instructions) {
        applyInstruction(out, source, instructions, key);
      }
      return out;
    };
    exports.take = take;
    var mapWithFilter = (target, filter, instructions) => {
      return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
        if (Array.isArray(value)) {
          _instructions[key] = value;
        } else {
          if (typeof value === "function") {
            _instructions[key] = [filter, value()];
          } else {
            _instructions[key] = [filter, value];
          }
        }
        return _instructions;
      }, {}));
    };
    var applyInstruction = (target, source, instructions, targetKey) => {
      if (source !== null) {
        let instruction = instructions[targetKey];
        if (typeof instruction === "function") {
          instruction = [, instruction];
        }
        const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
        if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
          target[targetKey] = valueFn(source[sourceKey]);
        }
        return;
      }
      let [filter, value] = instructions[targetKey];
      if (typeof value === "function") {
        let _value;
        const defaultFilterPassed = filter === void 0 && (_value = value()) != null;
        const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed) {
          target[targetKey] = _value;
        } else if (customFilterPassed) {
          target[targetKey] = value();
        }
      } else {
        const defaultFilterPassed = filter === void 0 && value != null;
        const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed || customFilterPassed) {
          target[targetKey] = value;
        }
      }
    };
    var nonNullish = (_) => _ != null;
    var pass = (_) => _;
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/resolve-path.js
var require_resolve_path = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/resolve-path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolvedPath = void 0;
    var extended_encode_uri_component_1 = require_extended_encode_uri_component();
    var resolvedPath = (resolvedPath2, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
      if (input != null && input[memberName] !== void 0) {
        const labelValue = labelValueProvider();
        if (labelValue.length <= 0) {
          throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
        }
        resolvedPath2 = resolvedPath2.replace(uriLabel, isGreedyLabel ? labelValue.split("/").map((segment) => (0, extended_encode_uri_component_1.extendedEncodeURIComponent)(segment)).join("/") : (0, extended_encode_uri_component_1.extendedEncodeURIComponent)(labelValue));
      } else {
        throw new Error("No value provided for input HTTP label: " + memberName + ".");
      }
      return resolvedPath2;
    };
    exports.resolvedPath = resolvedPath;
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/ser-utils.js
var require_ser_utils = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/ser-utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serializeFloat = void 0;
    var serializeFloat = (value) => {
      if (value !== value) {
        return "NaN";
      }
      switch (value) {
        case Infinity:
          return "Infinity";
        case -Infinity:
          return "-Infinity";
        default:
          return value;
      }
    };
    exports.serializeFloat = serializeFloat;
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/serde-json.js
var require_serde_json = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/serde-json.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._json = void 0;
    var _json = (obj) => {
      if (obj == null) {
        return {};
      }
      if (Array.isArray(obj)) {
        return obj.filter((_) => _ != null);
      }
      if (typeof obj === "object") {
        const target = {};
        for (const key of Object.keys(obj)) {
          if (obj[key] == null) {
            continue;
          }
          target[key] = (0, exports._json)(obj[key]);
        }
        return target;
      }
      return obj;
    };
    exports._json = _json;
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/split-every.js
var require_split_every = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/split-every.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.splitEvery = void 0;
    function splitEvery(value, delimiter, numDelimiters) {
      if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
        throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
      }
      const segments = value.split(delimiter);
      if (numDelimiters === 1) {
        return segments;
      }
      const compoundSegments = [];
      let currentSegment = "";
      for (let i = 0; i < segments.length; i++) {
        if (currentSegment === "") {
          currentSegment = segments[i];
        } else {
          currentSegment += delimiter + segments[i];
        }
        if ((i + 1) % numDelimiters === 0) {
          compoundSegments.push(currentSegment);
          currentSegment = "";
        }
      }
      if (currentSegment !== "") {
        compoundSegments.push(currentSegment);
      }
      return compoundSegments;
    }
    exports.splitEvery = splitEvery;
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/index.js
var require_dist_cjs37 = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_NoOpLogger(), exports);
    tslib_1.__exportStar(require_client2(), exports);
    tslib_1.__exportStar(require_collect_stream_body(), exports);
    tslib_1.__exportStar(require_command2(), exports);
    tslib_1.__exportStar(require_constants6(), exports);
    tslib_1.__exportStar(require_create_aggregated_client(), exports);
    tslib_1.__exportStar(require_date_utils(), exports);
    tslib_1.__exportStar(require_default_error_handler(), exports);
    tslib_1.__exportStar(require_defaults_mode(), exports);
    tslib_1.__exportStar(require_emitWarningIfUnsupportedVersion(), exports);
    tslib_1.__exportStar(require_extensions3(), exports);
    tslib_1.__exportStar(require_exceptions(), exports);
    tslib_1.__exportStar(require_extended_encode_uri_component(), exports);
    tslib_1.__exportStar(require_get_array_if_single_item(), exports);
    tslib_1.__exportStar(require_get_value_from_text_node(), exports);
    tslib_1.__exportStar(require_lazy_json(), exports);
    tslib_1.__exportStar(require_object_mapping(), exports);
    tslib_1.__exportStar(require_parse_utils(), exports);
    tslib_1.__exportStar(require_resolve_path(), exports);
    tslib_1.__exportStar(require_ser_utils(), exports);
    tslib_1.__exportStar(require_serde_json(), exports);
    tslib_1.__exportStar(require_split_every(), exports);
  }
});

// node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/endpoint/EndpointParameters.js
var require_EndpointParameters = __commonJS({
  "node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/endpoint/EndpointParameters.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveClientEndpointParameters = void 0;
    var resolveClientEndpointParameters = (options) => {
      return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "execute-api"
      };
    };
    exports.resolveClientEndpointParameters = resolveClientEndpointParameters;
  }
});

// node_modules/@aws-sdk/client-apigatewaymanagementapi/package.json
var require_package = __commonJS({
  "node_modules/@aws-sdk/client-apigatewaymanagementapi/package.json"(exports, module2) {
    module2.exports = {
      name: "@aws-sdk/client-apigatewaymanagementapi",
      description: "AWS SDK for JavaScript Apigatewaymanagementapi Client for Node.js, Browser and React Native",
      version: "3.454.0",
      scripts: {
        build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "tsc -p tsconfig.cjs.json",
        "build:docs": "typedoc",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo apigatewaymanagementapi"
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: false,
      dependencies: {
        "@aws-crypto/sha256-browser": "3.0.0",
        "@aws-crypto/sha256-js": "3.0.0",
        "@aws-sdk/client-sts": "3.454.0",
        "@aws-sdk/core": "3.451.0",
        "@aws-sdk/credential-provider-node": "3.451.0",
        "@aws-sdk/middleware-host-header": "3.451.0",
        "@aws-sdk/middleware-logger": "3.451.0",
        "@aws-sdk/middleware-recursion-detection": "3.451.0",
        "@aws-sdk/middleware-signing": "3.451.0",
        "@aws-sdk/middleware-user-agent": "3.451.0",
        "@aws-sdk/region-config-resolver": "3.451.0",
        "@aws-sdk/types": "3.451.0",
        "@aws-sdk/util-endpoints": "3.451.0",
        "@aws-sdk/util-user-agent-browser": "3.451.0",
        "@aws-sdk/util-user-agent-node": "3.451.0",
        "@smithy/config-resolver": "^2.0.18",
        "@smithy/fetch-http-handler": "^2.2.6",
        "@smithy/hash-node": "^2.0.15",
        "@smithy/invalid-dependency": "^2.0.13",
        "@smithy/middleware-content-length": "^2.0.15",
        "@smithy/middleware-endpoint": "^2.2.0",
        "@smithy/middleware-retry": "^2.0.20",
        "@smithy/middleware-serde": "^2.0.13",
        "@smithy/middleware-stack": "^2.0.7",
        "@smithy/node-config-provider": "^2.1.5",
        "@smithy/node-http-handler": "^2.1.9",
        "@smithy/protocol-http": "^3.0.9",
        "@smithy/smithy-client": "^2.1.15",
        "@smithy/types": "^2.5.0",
        "@smithy/url-parser": "^2.0.13",
        "@smithy/util-base64": "^2.0.1",
        "@smithy/util-body-length-browser": "^2.0.0",
        "@smithy/util-body-length-node": "^2.1.0",
        "@smithy/util-defaults-mode-browser": "^2.0.19",
        "@smithy/util-defaults-mode-node": "^2.0.25",
        "@smithy/util-endpoints": "^1.0.4",
        "@smithy/util-retry": "^2.0.6",
        "@smithy/util-utf8": "^2.0.2",
        tslib: "^2.5.0"
      },
      devDependencies: {
        "@smithy/service-client-documentation-generator": "^2.0.0",
        "@tsconfig/node14": "1.0.3",
        "@types/node": "^14.14.31",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typedoc: "0.23.23",
        typescript: "~4.9.5"
      },
      engines: {
        node: ">=14.0.0"
      },
      typesVersions: {
        "<4.0": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "dist-*/**"
      ],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
      },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
      },
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-apigatewaymanagementapi",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-apigatewaymanagementapi"
      }
    };
  }
});

// node_modules/@aws-sdk/middleware-sdk-sts/dist-cjs/index.js
var require_dist_cjs38 = __commonJS({
  "node_modules/@aws-sdk/middleware-sdk-sts/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveStsAuthConfig = void 0;
    var middleware_signing_1 = require_dist_cjs16();
    var resolveStsAuthConfig = (input, { stsClientCtor }) => (0, middleware_signing_1.resolveAwsAuthConfig)({
      ...input,
      stsClientCtor
    });
    exports.resolveStsAuthConfig = resolveStsAuthConfig;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/endpoint/EndpointParameters.js
var require_EndpointParameters2 = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/endpoint/EndpointParameters.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveClientEndpointParameters = void 0;
    var resolveClientEndpointParameters = (options) => {
      return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        useGlobalEndpoint: options.useGlobalEndpoint ?? false,
        defaultSigningName: "sts"
      };
    };
    exports.resolveClientEndpointParameters = resolveClientEndpointParameters;
  }
});

// node_modules/@aws-sdk/client-sts/package.json
var require_package2 = __commonJS({
  "node_modules/@aws-sdk/client-sts/package.json"(exports, module2) {
    module2.exports = {
      name: "@aws-sdk/client-sts",
      description: "AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native",
      version: "3.454.0",
      scripts: {
        build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "tsc -p tsconfig.cjs.json",
        "build:docs": "typedoc",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo sts",
        test: "yarn test:unit",
        "test:unit": "jest"
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: false,
      dependencies: {
        "@aws-crypto/sha256-browser": "3.0.0",
        "@aws-crypto/sha256-js": "3.0.0",
        "@aws-sdk/core": "3.451.0",
        "@aws-sdk/credential-provider-node": "3.451.0",
        "@aws-sdk/middleware-host-header": "3.451.0",
        "@aws-sdk/middleware-logger": "3.451.0",
        "@aws-sdk/middleware-recursion-detection": "3.451.0",
        "@aws-sdk/middleware-sdk-sts": "3.451.0",
        "@aws-sdk/middleware-signing": "3.451.0",
        "@aws-sdk/middleware-user-agent": "3.451.0",
        "@aws-sdk/region-config-resolver": "3.451.0",
        "@aws-sdk/types": "3.451.0",
        "@aws-sdk/util-endpoints": "3.451.0",
        "@aws-sdk/util-user-agent-browser": "3.451.0",
        "@aws-sdk/util-user-agent-node": "3.451.0",
        "@smithy/config-resolver": "^2.0.18",
        "@smithy/fetch-http-handler": "^2.2.6",
        "@smithy/hash-node": "^2.0.15",
        "@smithy/invalid-dependency": "^2.0.13",
        "@smithy/middleware-content-length": "^2.0.15",
        "@smithy/middleware-endpoint": "^2.2.0",
        "@smithy/middleware-retry": "^2.0.20",
        "@smithy/middleware-serde": "^2.0.13",
        "@smithy/middleware-stack": "^2.0.7",
        "@smithy/node-config-provider": "^2.1.5",
        "@smithy/node-http-handler": "^2.1.9",
        "@smithy/protocol-http": "^3.0.9",
        "@smithy/smithy-client": "^2.1.15",
        "@smithy/types": "^2.5.0",
        "@smithy/url-parser": "^2.0.13",
        "@smithy/util-base64": "^2.0.1",
        "@smithy/util-body-length-browser": "^2.0.0",
        "@smithy/util-body-length-node": "^2.1.0",
        "@smithy/util-defaults-mode-browser": "^2.0.19",
        "@smithy/util-defaults-mode-node": "^2.0.25",
        "@smithy/util-endpoints": "^1.0.4",
        "@smithy/util-retry": "^2.0.6",
        "@smithy/util-utf8": "^2.0.2",
        "fast-xml-parser": "4.2.5",
        tslib: "^2.5.0"
      },
      devDependencies: {
        "@smithy/service-client-documentation-generator": "^2.0.0",
        "@tsconfig/node14": "1.0.3",
        "@types/node": "^14.14.31",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typedoc: "0.23.23",
        typescript: "~4.9.5"
      },
      engines: {
        node: ">=14.0.0"
      },
      typesVersions: {
        "<4.0": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "dist-*/**"
      ],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
      },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
      },
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sts",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-sts"
      }
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/models/STSServiceException.js
var require_STSServiceException = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/models/STSServiceException.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.STSServiceException = exports.__ServiceException = void 0;
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "__ServiceException", { enumerable: true, get: function() {
      return smithy_client_1.ServiceException;
    } });
    var STSServiceException = class _STSServiceException extends smithy_client_1.ServiceException {
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _STSServiceException.prototype);
      }
    };
    exports.STSServiceException = STSServiceException;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/models/models_0.js
var require_models_0 = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/models/models_0.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetSessionTokenResponseFilterSensitiveLog = exports.GetFederationTokenResponseFilterSensitiveLog = exports.AssumeRoleWithWebIdentityResponseFilterSensitiveLog = exports.AssumeRoleWithWebIdentityRequestFilterSensitiveLog = exports.AssumeRoleWithSAMLResponseFilterSensitiveLog = exports.AssumeRoleWithSAMLRequestFilterSensitiveLog = exports.AssumeRoleResponseFilterSensitiveLog = exports.CredentialsFilterSensitiveLog = exports.InvalidAuthorizationMessageException = exports.IDPCommunicationErrorException = exports.InvalidIdentityTokenException = exports.IDPRejectedClaimException = exports.RegionDisabledException = exports.PackedPolicyTooLargeException = exports.MalformedPolicyDocumentException = exports.ExpiredTokenException = void 0;
    var smithy_client_1 = require_dist_cjs37();
    var STSServiceException_1 = require_STSServiceException();
    var ExpiredTokenException = class _ExpiredTokenException extends STSServiceException_1.STSServiceException {
      constructor(opts) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...opts
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _ExpiredTokenException.prototype);
      }
    };
    exports.ExpiredTokenException = ExpiredTokenException;
    var MalformedPolicyDocumentException = class _MalformedPolicyDocumentException extends STSServiceException_1.STSServiceException {
      constructor(opts) {
        super({
          name: "MalformedPolicyDocumentException",
          $fault: "client",
          ...opts
        });
        this.name = "MalformedPolicyDocumentException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _MalformedPolicyDocumentException.prototype);
      }
    };
    exports.MalformedPolicyDocumentException = MalformedPolicyDocumentException;
    var PackedPolicyTooLargeException = class _PackedPolicyTooLargeException extends STSServiceException_1.STSServiceException {
      constructor(opts) {
        super({
          name: "PackedPolicyTooLargeException",
          $fault: "client",
          ...opts
        });
        this.name = "PackedPolicyTooLargeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _PackedPolicyTooLargeException.prototype);
      }
    };
    exports.PackedPolicyTooLargeException = PackedPolicyTooLargeException;
    var RegionDisabledException = class _RegionDisabledException extends STSServiceException_1.STSServiceException {
      constructor(opts) {
        super({
          name: "RegionDisabledException",
          $fault: "client",
          ...opts
        });
        this.name = "RegionDisabledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _RegionDisabledException.prototype);
      }
    };
    exports.RegionDisabledException = RegionDisabledException;
    var IDPRejectedClaimException = class _IDPRejectedClaimException extends STSServiceException_1.STSServiceException {
      constructor(opts) {
        super({
          name: "IDPRejectedClaimException",
          $fault: "client",
          ...opts
        });
        this.name = "IDPRejectedClaimException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _IDPRejectedClaimException.prototype);
      }
    };
    exports.IDPRejectedClaimException = IDPRejectedClaimException;
    var InvalidIdentityTokenException = class _InvalidIdentityTokenException extends STSServiceException_1.STSServiceException {
      constructor(opts) {
        super({
          name: "InvalidIdentityTokenException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidIdentityTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidIdentityTokenException.prototype);
      }
    };
    exports.InvalidIdentityTokenException = InvalidIdentityTokenException;
    var IDPCommunicationErrorException = class _IDPCommunicationErrorException extends STSServiceException_1.STSServiceException {
      constructor(opts) {
        super({
          name: "IDPCommunicationErrorException",
          $fault: "client",
          ...opts
        });
        this.name = "IDPCommunicationErrorException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _IDPCommunicationErrorException.prototype);
      }
    };
    exports.IDPCommunicationErrorException = IDPCommunicationErrorException;
    var InvalidAuthorizationMessageException = class _InvalidAuthorizationMessageException extends STSServiceException_1.STSServiceException {
      constructor(opts) {
        super({
          name: "InvalidAuthorizationMessageException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidAuthorizationMessageException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidAuthorizationMessageException.prototype);
      }
    };
    exports.InvalidAuthorizationMessageException = InvalidAuthorizationMessageException;
    var CredentialsFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.SecretAccessKey && { SecretAccessKey: smithy_client_1.SENSITIVE_STRING }
    });
    exports.CredentialsFilterSensitiveLog = CredentialsFilterSensitiveLog;
    var AssumeRoleResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: (0, exports.CredentialsFilterSensitiveLog)(obj.Credentials) }
    });
    exports.AssumeRoleResponseFilterSensitiveLog = AssumeRoleResponseFilterSensitiveLog;
    var AssumeRoleWithSAMLRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.SAMLAssertion && { SAMLAssertion: smithy_client_1.SENSITIVE_STRING }
    });
    exports.AssumeRoleWithSAMLRequestFilterSensitiveLog = AssumeRoleWithSAMLRequestFilterSensitiveLog;
    var AssumeRoleWithSAMLResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: (0, exports.CredentialsFilterSensitiveLog)(obj.Credentials) }
    });
    exports.AssumeRoleWithSAMLResponseFilterSensitiveLog = AssumeRoleWithSAMLResponseFilterSensitiveLog;
    var AssumeRoleWithWebIdentityRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.WebIdentityToken && { WebIdentityToken: smithy_client_1.SENSITIVE_STRING }
    });
    exports.AssumeRoleWithWebIdentityRequestFilterSensitiveLog = AssumeRoleWithWebIdentityRequestFilterSensitiveLog;
    var AssumeRoleWithWebIdentityResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: (0, exports.CredentialsFilterSensitiveLog)(obj.Credentials) }
    });
    exports.AssumeRoleWithWebIdentityResponseFilterSensitiveLog = AssumeRoleWithWebIdentityResponseFilterSensitiveLog;
    var GetFederationTokenResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: (0, exports.CredentialsFilterSensitiveLog)(obj.Credentials) }
    });
    exports.GetFederationTokenResponseFilterSensitiveLog = GetFederationTokenResponseFilterSensitiveLog;
    var GetSessionTokenResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: (0, exports.CredentialsFilterSensitiveLog)(obj.Credentials) }
    });
    exports.GetSessionTokenResponseFilterSensitiveLog = GetSessionTokenResponseFilterSensitiveLog;
  }
});

// node_modules/fast-xml-parser/src/util.js
var require_util3 = __commonJS({
  "node_modules/fast-xml-parser/src/util.js"(exports) {
    "use strict";
    var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
    var regexName = new RegExp("^" + nameRegexp + "$");
    var getAllMatches = function(string, regex) {
      const matches = [];
      let match = regex.exec(string);
      while (match) {
        const allmatches = [];
        allmatches.startIndex = regex.lastIndex - match[0].length;
        const len = match.length;
        for (let index = 0; index < len; index++) {
          allmatches.push(match[index]);
        }
        matches.push(allmatches);
        match = regex.exec(string);
      }
      return matches;
    };
    var isName = function(string) {
      const match = regexName.exec(string);
      return !(match === null || typeof match === "undefined");
    };
    exports.isExist = function(v) {
      return typeof v !== "undefined";
    };
    exports.isEmptyObject = function(obj) {
      return Object.keys(obj).length === 0;
    };
    exports.merge = function(target, a, arrayMode) {
      if (a) {
        const keys = Object.keys(a);
        const len = keys.length;
        for (let i = 0; i < len; i++) {
          if (arrayMode === "strict") {
            target[keys[i]] = [a[keys[i]]];
          } else {
            target[keys[i]] = a[keys[i]];
          }
        }
      }
    };
    exports.getValue = function(v) {
      if (exports.isExist(v)) {
        return v;
      } else {
        return "";
      }
    };
    exports.isName = isName;
    exports.getAllMatches = getAllMatches;
    exports.nameRegexp = nameRegexp;
  }
});

// node_modules/fast-xml-parser/src/validator.js
var require_validator = __commonJS({
  "node_modules/fast-xml-parser/src/validator.js"(exports) {
    "use strict";
    var util = require_util3();
    var defaultOptions = {
      allowBooleanAttributes: false,
      //A tag can have attributes without any value
      unpairedTags: []
    };
    exports.validate = function(xmlData, options) {
      options = Object.assign({}, defaultOptions, options);
      const tags = [];
      let tagFound = false;
      let reachedRoot = false;
      if (xmlData[0] === "\uFEFF") {
        xmlData = xmlData.substr(1);
      }
      for (let i = 0; i < xmlData.length; i++) {
        if (xmlData[i] === "<" && xmlData[i + 1] === "?") {
          i += 2;
          i = readPI(xmlData, i);
          if (i.err)
            return i;
        } else if (xmlData[i] === "<") {
          let tagStartPos = i;
          i++;
          if (xmlData[i] === "!") {
            i = readCommentAndCDATA(xmlData, i);
            continue;
          } else {
            let closingTag = false;
            if (xmlData[i] === "/") {
              closingTag = true;
              i++;
            }
            let tagName = "";
            for (; i < xmlData.length && xmlData[i] !== ">" && xmlData[i] !== " " && xmlData[i] !== "	" && xmlData[i] !== "\n" && xmlData[i] !== "\r"; i++) {
              tagName += xmlData[i];
            }
            tagName = tagName.trim();
            if (tagName[tagName.length - 1] === "/") {
              tagName = tagName.substring(0, tagName.length - 1);
              i--;
            }
            if (!validateTagName(tagName)) {
              let msg;
              if (tagName.trim().length === 0) {
                msg = "Invalid space after '<'.";
              } else {
                msg = "Tag '" + tagName + "' is an invalid name.";
              }
              return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i));
            }
            const result = readAttributeStr(xmlData, i);
            if (result === false) {
              return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i));
            }
            let attrStr = result.value;
            i = result.index;
            if (attrStr[attrStr.length - 1] === "/") {
              const attrStrStart = i - attrStr.length;
              attrStr = attrStr.substring(0, attrStr.length - 1);
              const isValid = validateAttributeString(attrStr, options);
              if (isValid === true) {
                tagFound = true;
              } else {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
              }
            } else if (closingTag) {
              if (!result.tagClosed) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
              } else if (attrStr.trim().length > 0) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
              } else {
                const otg = tags.pop();
                if (tagName !== otg.tagName) {
                  let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                  return getErrorObject(
                    "InvalidTag",
                    "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                    getLineNumberForPosition(xmlData, tagStartPos)
                  );
                }
                if (tags.length == 0) {
                  reachedRoot = true;
                }
              }
            } else {
              const isValid = validateAttributeString(attrStr, options);
              if (isValid !== true) {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
              }
              if (reachedRoot === true) {
                return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i));
              } else if (options.unpairedTags.indexOf(tagName) !== -1) {
              } else {
                tags.push({ tagName, tagStartPos });
              }
              tagFound = true;
            }
            for (i++; i < xmlData.length; i++) {
              if (xmlData[i] === "<") {
                if (xmlData[i + 1] === "!") {
                  i++;
                  i = readCommentAndCDATA(xmlData, i);
                  continue;
                } else if (xmlData[i + 1] === "?") {
                  i = readPI(xmlData, ++i);
                  if (i.err)
                    return i;
                } else {
                  break;
                }
              } else if (xmlData[i] === "&") {
                const afterAmp = validateAmpersand(xmlData, i);
                if (afterAmp == -1)
                  return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
                i = afterAmp;
              } else {
                if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
                  return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i));
                }
              }
            }
            if (xmlData[i] === "<") {
              i--;
            }
          }
        } else {
          if (isWhiteSpace(xmlData[i])) {
            continue;
          }
          return getErrorObject("InvalidChar", "char '" + xmlData[i] + "' is not expected.", getLineNumberForPosition(xmlData, i));
        }
      }
      if (!tagFound) {
        return getErrorObject("InvalidXml", "Start tag expected.", 1);
      } else if (tags.length == 1) {
        return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
      } else if (tags.length > 0) {
        return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t) => t.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
      }
      return true;
    };
    function isWhiteSpace(char) {
      return char === " " || char === "	" || char === "\n" || char === "\r";
    }
    function readPI(xmlData, i) {
      const start = i;
      for (; i < xmlData.length; i++) {
        if (xmlData[i] == "?" || xmlData[i] == " ") {
          const tagname = xmlData.substr(start, i - start);
          if (i > 5 && tagname === "xml") {
            return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i));
          } else if (xmlData[i] == "?" && xmlData[i + 1] == ">") {
            i++;
            break;
          } else {
            continue;
          }
        }
      }
      return i;
    }
    function readCommentAndCDATA(xmlData, i) {
      if (xmlData.length > i + 5 && xmlData[i + 1] === "-" && xmlData[i + 2] === "-") {
        for (i += 3; i < xmlData.length; i++) {
          if (xmlData[i] === "-" && xmlData[i + 1] === "-" && xmlData[i + 2] === ">") {
            i += 2;
            break;
          }
        }
      } else if (xmlData.length > i + 8 && xmlData[i + 1] === "D" && xmlData[i + 2] === "O" && xmlData[i + 3] === "C" && xmlData[i + 4] === "T" && xmlData[i + 5] === "Y" && xmlData[i + 6] === "P" && xmlData[i + 7] === "E") {
        let angleBracketsCount = 1;
        for (i += 8; i < xmlData.length; i++) {
          if (xmlData[i] === "<") {
            angleBracketsCount++;
          } else if (xmlData[i] === ">") {
            angleBracketsCount--;
            if (angleBracketsCount === 0) {
              break;
            }
          }
        }
      } else if (xmlData.length > i + 9 && xmlData[i + 1] === "[" && xmlData[i + 2] === "C" && xmlData[i + 3] === "D" && xmlData[i + 4] === "A" && xmlData[i + 5] === "T" && xmlData[i + 6] === "A" && xmlData[i + 7] === "[") {
        for (i += 8; i < xmlData.length; i++) {
          if (xmlData[i] === "]" && xmlData[i + 1] === "]" && xmlData[i + 2] === ">") {
            i += 2;
            break;
          }
        }
      }
      return i;
    }
    var doubleQuote = '"';
    var singleQuote = "'";
    function readAttributeStr(xmlData, i) {
      let attrStr = "";
      let startChar = "";
      let tagClosed = false;
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
          if (startChar === "") {
            startChar = xmlData[i];
          } else if (startChar !== xmlData[i]) {
          } else {
            startChar = "";
          }
        } else if (xmlData[i] === ">") {
          if (startChar === "") {
            tagClosed = true;
            break;
          }
        }
        attrStr += xmlData[i];
      }
      if (startChar !== "") {
        return false;
      }
      return {
        value: attrStr,
        index: i,
        tagClosed
      };
    }
    var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    function validateAttributeString(attrStr, options) {
      const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
      const attrNames = {};
      for (let i = 0; i < matches.length; i++) {
        if (matches[i][1].length === 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' has no space in starting.", getPositionFromMatch(matches[i]));
        } else if (matches[i][3] !== void 0 && matches[i][4] === void 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' is without value.", getPositionFromMatch(matches[i]));
        } else if (matches[i][3] === void 0 && !options.allowBooleanAttributes) {
          return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i][2] + "' is not allowed.", getPositionFromMatch(matches[i]));
        }
        const attrName = matches[i][2];
        if (!validateAttrName(attrName)) {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i]));
        }
        if (!attrNames.hasOwnProperty(attrName)) {
          attrNames[attrName] = 1;
        } else {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i]));
        }
      }
      return true;
    }
    function validateNumberAmpersand(xmlData, i) {
      let re = /\d/;
      if (xmlData[i] === "x") {
        i++;
        re = /[\da-fA-F]/;
      }
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === ";")
          return i;
        if (!xmlData[i].match(re))
          break;
      }
      return -1;
    }
    function validateAmpersand(xmlData, i) {
      i++;
      if (xmlData[i] === ";")
        return -1;
      if (xmlData[i] === "#") {
        i++;
        return validateNumberAmpersand(xmlData, i);
      }
      let count = 0;
      for (; i < xmlData.length; i++, count++) {
        if (xmlData[i].match(/\w/) && count < 20)
          continue;
        if (xmlData[i] === ";")
          break;
        return -1;
      }
      return i;
    }
    function getErrorObject(code, message, lineNumber) {
      return {
        err: {
          code,
          msg: message,
          line: lineNumber.line || lineNumber,
          col: lineNumber.col
        }
      };
    }
    function validateAttrName(attrName) {
      return util.isName(attrName);
    }
    function validateTagName(tagname) {
      return util.isName(tagname);
    }
    function getLineNumberForPosition(xmlData, index) {
      const lines = xmlData.substring(0, index).split(/\r?\n/);
      return {
        line: lines.length,
        // column number is last line's length + 1, because column numbering starts at 1:
        col: lines[lines.length - 1].length + 1
      };
    }
    function getPositionFromMatch(match) {
      return match.startIndex + match[1].length;
    }
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
var require_OptionsBuilder = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"(exports) {
    var defaultOptions = {
      preserveOrder: false,
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      removeNSPrefix: false,
      // remove NS from tag name or attribute name if true
      allowBooleanAttributes: false,
      //a tag can have attributes without any value
      //ignoreRootElement : false,
      parseTagValue: true,
      parseAttributeValue: false,
      trimValues: true,
      //Trim string values of tag and attributes
      cdataPropName: false,
      numberParseOptions: {
        hex: true,
        leadingZeros: true,
        eNotation: true
      },
      tagValueProcessor: function(tagName, val2) {
        return val2;
      },
      attributeValueProcessor: function(attrName, val2) {
        return val2;
      },
      stopNodes: [],
      //nested tags will not be parsed even for errors
      alwaysCreateTextNode: false,
      isArray: () => false,
      commentPropName: false,
      unpairedTags: [],
      processEntities: true,
      htmlEntities: false,
      ignoreDeclaration: false,
      ignorePiTags: false,
      transformTagName: false,
      transformAttributeName: false,
      updateTag: function(tagName, jPath, attrs) {
        return tagName;
      }
      // skipEmptyListItem: false
    };
    var buildOptions = function(options) {
      return Object.assign({}, defaultOptions, options);
    };
    exports.buildOptions = buildOptions;
    exports.defaultOptions = defaultOptions;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var require_xmlNode = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"(exports, module2) {
    "use strict";
    var XmlNode = class {
      constructor(tagname) {
        this.tagname = tagname;
        this.child = [];
        this[":@"] = {};
      }
      add(key, val2) {
        if (key === "__proto__")
          key = "#__proto__";
        this.child.push({ [key]: val2 });
      }
      addChild(node) {
        if (node.tagname === "__proto__")
          node.tagname = "#__proto__";
        if (node[":@"] && Object.keys(node[":@"]).length > 0) {
          this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
        } else {
          this.child.push({ [node.tagname]: node.child });
        }
      }
    };
    module2.exports = XmlNode;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
var require_DocTypeReader = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"(exports, module2) {
    var util = require_util3();
    function readDocType(xmlData, i) {
      const entities = {};
      if (xmlData[i + 3] === "O" && xmlData[i + 4] === "C" && xmlData[i + 5] === "T" && xmlData[i + 6] === "Y" && xmlData[i + 7] === "P" && xmlData[i + 8] === "E") {
        i = i + 9;
        let angleBracketsCount = 1;
        let hasBody = false, comment = false;
        let exp = "";
        for (; i < xmlData.length; i++) {
          if (xmlData[i] === "<" && !comment) {
            if (hasBody && isEntity(xmlData, i)) {
              i += 7;
              [entityName, val, i] = readEntityExp(xmlData, i + 1);
              if (val.indexOf("&") === -1)
                entities[validateEntityName(entityName)] = {
                  regx: RegExp(`&${entityName};`, "g"),
                  val
                };
            } else if (hasBody && isElement(xmlData, i))
              i += 8;
            else if (hasBody && isAttlist(xmlData, i))
              i += 8;
            else if (hasBody && isNotation(xmlData, i))
              i += 9;
            else if (isComment)
              comment = true;
            else
              throw new Error("Invalid DOCTYPE");
            angleBracketsCount++;
            exp = "";
          } else if (xmlData[i] === ">") {
            if (comment) {
              if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
                comment = false;
                angleBracketsCount--;
              }
            } else {
              angleBracketsCount--;
            }
            if (angleBracketsCount === 0) {
              break;
            }
          } else if (xmlData[i] === "[") {
            hasBody = true;
          } else {
            exp += xmlData[i];
          }
        }
        if (angleBracketsCount !== 0) {
          throw new Error(`Unclosed DOCTYPE`);
        }
      } else {
        throw new Error(`Invalid Tag instead of DOCTYPE`);
      }
      return { entities, i };
    }
    function readEntityExp(xmlData, i) {
      let entityName2 = "";
      for (; i < xmlData.length && (xmlData[i] !== "'" && xmlData[i] !== '"'); i++) {
        entityName2 += xmlData[i];
      }
      entityName2 = entityName2.trim();
      if (entityName2.indexOf(" ") !== -1)
        throw new Error("External entites are not supported");
      const startChar = xmlData[i++];
      let val2 = "";
      for (; i < xmlData.length && xmlData[i] !== startChar; i++) {
        val2 += xmlData[i];
      }
      return [entityName2, val2, i];
    }
    function isComment(xmlData, i) {
      if (xmlData[i + 1] === "!" && xmlData[i + 2] === "-" && xmlData[i + 3] === "-")
        return true;
      return false;
    }
    function isEntity(xmlData, i) {
      if (xmlData[i + 1] === "!" && xmlData[i + 2] === "E" && xmlData[i + 3] === "N" && xmlData[i + 4] === "T" && xmlData[i + 5] === "I" && xmlData[i + 6] === "T" && xmlData[i + 7] === "Y")
        return true;
      return false;
    }
    function isElement(xmlData, i) {
      if (xmlData[i + 1] === "!" && xmlData[i + 2] === "E" && xmlData[i + 3] === "L" && xmlData[i + 4] === "E" && xmlData[i + 5] === "M" && xmlData[i + 6] === "E" && xmlData[i + 7] === "N" && xmlData[i + 8] === "T")
        return true;
      return false;
    }
    function isAttlist(xmlData, i) {
      if (xmlData[i + 1] === "!" && xmlData[i + 2] === "A" && xmlData[i + 3] === "T" && xmlData[i + 4] === "T" && xmlData[i + 5] === "L" && xmlData[i + 6] === "I" && xmlData[i + 7] === "S" && xmlData[i + 8] === "T")
        return true;
      return false;
    }
    function isNotation(xmlData, i) {
      if (xmlData[i + 1] === "!" && xmlData[i + 2] === "N" && xmlData[i + 3] === "O" && xmlData[i + 4] === "T" && xmlData[i + 5] === "A" && xmlData[i + 6] === "T" && xmlData[i + 7] === "I" && xmlData[i + 8] === "O" && xmlData[i + 9] === "N")
        return true;
      return false;
    }
    function validateEntityName(name) {
      if (util.isName(name))
        return name;
      else
        throw new Error(`Invalid entity name ${name}`);
    }
    module2.exports = readDocType;
  }
});

// node_modules/strnum/strnum.js
var require_strnum = __commonJS({
  "node_modules/strnum/strnum.js"(exports, module2) {
    var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
    var numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
    if (!Number.parseInt && window.parseInt) {
      Number.parseInt = window.parseInt;
    }
    if (!Number.parseFloat && window.parseFloat) {
      Number.parseFloat = window.parseFloat;
    }
    var consider = {
      hex: true,
      leadingZeros: true,
      decimalPoint: ".",
      eNotation: true
      //skipLike: /regex/
    };
    function toNumber(str, options = {}) {
      options = Object.assign({}, consider, options);
      if (!str || typeof str !== "string")
        return str;
      let trimmedStr = str.trim();
      if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr))
        return str;
      else if (options.hex && hexRegex.test(trimmedStr)) {
        return Number.parseInt(trimmedStr, 16);
      } else {
        const match = numRegex.exec(trimmedStr);
        if (match) {
          const sign = match[1];
          const leadingZeros = match[2];
          let numTrimmedByZeros = trimZeros(match[3]);
          const eNotation = match[4] || match[6];
          if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".")
            return str;
          else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".")
            return str;
          else {
            const num = Number(trimmedStr);
            const numStr = "" + num;
            if (numStr.search(/[eE]/) !== -1) {
              if (options.eNotation)
                return num;
              else
                return str;
            } else if (eNotation) {
              if (options.eNotation)
                return num;
              else
                return str;
            } else if (trimmedStr.indexOf(".") !== -1) {
              if (numStr === "0" && numTrimmedByZeros === "")
                return num;
              else if (numStr === numTrimmedByZeros)
                return num;
              else if (sign && numStr === "-" + numTrimmedByZeros)
                return num;
              else
                return str;
            }
            if (leadingZeros) {
              if (numTrimmedByZeros === numStr)
                return num;
              else if (sign + numTrimmedByZeros === numStr)
                return num;
              else
                return str;
            }
            if (trimmedStr === numStr)
              return num;
            else if (trimmedStr === sign + numStr)
              return num;
            return str;
          }
        } else {
          return str;
        }
      }
    }
    function trimZeros(numStr) {
      if (numStr && numStr.indexOf(".") !== -1) {
        numStr = numStr.replace(/0+$/, "");
        if (numStr === ".")
          numStr = "0";
        else if (numStr[0] === ".")
          numStr = "0" + numStr;
        else if (numStr[numStr.length - 1] === ".")
          numStr = numStr.substr(0, numStr.length - 1);
        return numStr;
      }
      return numStr;
    }
    module2.exports = toNumber;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
var require_OrderedObjParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"(exports, module2) {
    "use strict";
    var util = require_util3();
    var xmlNode = require_xmlNode();
    var readDocType = require_DocTypeReader();
    var toNumber = require_strnum();
    var regx = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, util.nameRegexp);
    var OrderedObjParser = class {
      constructor(options) {
        this.options = options;
        this.currentNode = null;
        this.tagsNodeStack = [];
        this.docTypeEntities = {};
        this.lastEntities = {
          "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
          "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
          "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
          "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
        };
        this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
        this.htmlEntities = {
          "space": { regex: /&(nbsp|#160);/g, val: " " },
          // "lt" : { regex: /&(lt|#60);/g, val: "<" },
          // "gt" : { regex: /&(gt|#62);/g, val: ">" },
          // "amp" : { regex: /&(amp|#38);/g, val: "&" },
          // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
          // "apos" : { regex: /&(apos|#39);/g, val: "'" },
          "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
          "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
          "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
          "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
          "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
          "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
          "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" }
        };
        this.addExternalEntities = addExternalEntities;
        this.parseXml = parseXml;
        this.parseTextData = parseTextData;
        this.resolveNameSpace = resolveNameSpace;
        this.buildAttributesMap = buildAttributesMap;
        this.isItStopNode = isItStopNode;
        this.replaceEntitiesValue = replaceEntitiesValue;
        this.readStopNodeData = readStopNodeData;
        this.saveTextToParentTag = saveTextToParentTag;
        this.addChild = addChild;
      }
    };
    function addExternalEntities(externalEntities) {
      const entKeys = Object.keys(externalEntities);
      for (let i = 0; i < entKeys.length; i++) {
        const ent = entKeys[i];
        this.lastEntities[ent] = {
          regex: new RegExp("&" + ent + ";", "g"),
          val: externalEntities[ent]
        };
      }
    }
    function parseTextData(val2, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
      if (val2 !== void 0) {
        if (this.options.trimValues && !dontTrim) {
          val2 = val2.trim();
        }
        if (val2.length > 0) {
          if (!escapeEntities)
            val2 = this.replaceEntitiesValue(val2);
          const newval = this.options.tagValueProcessor(tagName, val2, jPath, hasAttributes, isLeafNode);
          if (newval === null || newval === void 0) {
            return val2;
          } else if (typeof newval !== typeof val2 || newval !== val2) {
            return newval;
          } else if (this.options.trimValues) {
            return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
          } else {
            const trimmedVal = val2.trim();
            if (trimmedVal === val2) {
              return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
            } else {
              return val2;
            }
          }
        }
      }
    }
    function resolveNameSpace(tagname) {
      if (this.options.removeNSPrefix) {
        const tags = tagname.split(":");
        const prefix = tagname.charAt(0) === "/" ? "/" : "";
        if (tags[0] === "xmlns") {
          return "";
        }
        if (tags.length === 2) {
          tagname = prefix + tags[1];
        }
      }
      return tagname;
    }
    var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
    function buildAttributesMap(attrStr, jPath, tagName) {
      if (!this.options.ignoreAttributes && typeof attrStr === "string") {
        const matches = util.getAllMatches(attrStr, attrsRegx);
        const len = matches.length;
        const attrs = {};
        for (let i = 0; i < len; i++) {
          const attrName = this.resolveNameSpace(matches[i][1]);
          let oldVal = matches[i][4];
          let aName = this.options.attributeNamePrefix + attrName;
          if (attrName.length) {
            if (this.options.transformAttributeName) {
              aName = this.options.transformAttributeName(aName);
            }
            if (aName === "__proto__")
              aName = "#__proto__";
            if (oldVal !== void 0) {
              if (this.options.trimValues) {
                oldVal = oldVal.trim();
              }
              oldVal = this.replaceEntitiesValue(oldVal);
              const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
              if (newVal === null || newVal === void 0) {
                attrs[aName] = oldVal;
              } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                attrs[aName] = newVal;
              } else {
                attrs[aName] = parseValue(
                  oldVal,
                  this.options.parseAttributeValue,
                  this.options.numberParseOptions
                );
              }
            } else if (this.options.allowBooleanAttributes) {
              attrs[aName] = true;
            }
          }
        }
        if (!Object.keys(attrs).length) {
          return;
        }
        if (this.options.attributesGroupName) {
          const attrCollection = {};
          attrCollection[this.options.attributesGroupName] = attrs;
          return attrCollection;
        }
        return attrs;
      }
    }
    var parseXml = function(xmlData) {
      xmlData = xmlData.replace(/\r\n?/g, "\n");
      const xmlObj = new xmlNode("!xml");
      let currentNode = xmlObj;
      let textData = "";
      let jPath = "";
      for (let i = 0; i < xmlData.length; i++) {
        const ch = xmlData[i];
        if (ch === "<") {
          if (xmlData[i + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
            let tagName = xmlData.substring(i + 2, closeIndex).trim();
            if (this.options.removeNSPrefix) {
              const colonIndex = tagName.indexOf(":");
              if (colonIndex !== -1) {
                tagName = tagName.substr(colonIndex + 1);
              }
            }
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode) {
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
            }
            const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
            if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
              throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
            }
            let propIndex = 0;
            if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
              propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
              this.tagsNodeStack.pop();
            } else {
              propIndex = jPath.lastIndexOf(".");
            }
            jPath = jPath.substring(0, propIndex);
            currentNode = this.tagsNodeStack.pop();
            textData = "";
            i = closeIndex;
          } else if (xmlData[i + 1] === "?") {
            let tagData = readTagExp(xmlData, i, false, "?>");
            if (!tagData)
              throw new Error("Pi Tag is not closed.");
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
            } else {
              const childNode = new xmlNode(tagData.tagName);
              childNode.add(this.options.textNodeName, "");
              if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
              }
              this.addChild(currentNode, childNode, jPath);
            }
            i = tagData.closeIndex + 1;
          } else if (xmlData.substr(i + 1, 3) === "!--") {
            const endIndex = findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
            if (this.options.commentPropName) {
              const comment = xmlData.substring(i + 4, endIndex - 2);
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
            }
            i = endIndex;
          } else if (xmlData.substr(i + 1, 2) === "!D") {
            const result = readDocType(xmlData, i);
            this.docTypeEntities = result.entities;
            i = result.i;
          } else if (xmlData.substr(i + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
            const tagExp = xmlData.substring(i + 9, closeIndex);
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.cdataPropName) {
              currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
            } else {
              let val2 = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true);
              if (val2 == void 0)
                val2 = "";
              currentNode.add(this.options.textNodeName, val2);
            }
            i = closeIndex + 2;
          } else {
            let result = readTagExp(xmlData, i, this.options.removeNSPrefix);
            let tagName = result.tagName;
            let tagExp = result.tagExp;
            let attrExpPresent = result.attrExpPresent;
            let closeIndex = result.closeIndex;
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode && textData) {
              if (currentNode.tagname !== "!xml") {
                textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
              }
            }
            const lastTag = currentNode;
            if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
              currentNode = this.tagsNodeStack.pop();
              jPath = jPath.substring(0, jPath.lastIndexOf("."));
            }
            if (tagName !== xmlObj.tagname) {
              jPath += jPath ? "." + tagName : tagName;
            }
            if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
              let tagContent = "";
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                i = result.closeIndex;
              } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                i = result.closeIndex;
              } else {
                const result2 = this.readStopNodeData(xmlData, tagName, closeIndex + 1);
                if (!result2)
                  throw new Error(`Unexpected end of ${tagName}`);
                i = result2.i;
                tagContent = result2.tagContent;
              }
              const childNode = new xmlNode(tagName);
              if (tagName !== tagExp && attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
              }
              if (tagContent) {
                tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
              }
              jPath = jPath.substr(0, jPath.lastIndexOf("."));
              childNode.add(this.options.textNodeName, tagContent);
              this.addChild(currentNode, childNode, jPath);
            } else {
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                if (this.options.transformTagName) {
                  tagName = this.options.transformTagName(tagName);
                }
                const childNode = new xmlNode(tagName);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                jPath = jPath.substr(0, jPath.lastIndexOf("."));
              } else {
                const childNode = new xmlNode(tagName);
                this.tagsNodeStack.push(currentNode);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                currentNode = childNode;
              }
              textData = "";
              i = closeIndex;
            }
          }
        } else {
          textData += xmlData[i];
        }
      }
      return xmlObj.child;
    };
    function addChild(currentNode, childNode, jPath) {
      const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
      if (result === false) {
      } else if (typeof result === "string") {
        childNode.tagname = result;
        currentNode.addChild(childNode);
      } else {
        currentNode.addChild(childNode);
      }
    }
    var replaceEntitiesValue = function(val2) {
      if (this.options.processEntities) {
        for (let entityName2 in this.docTypeEntities) {
          const entity = this.docTypeEntities[entityName2];
          val2 = val2.replace(entity.regx, entity.val);
        }
        for (let entityName2 in this.lastEntities) {
          const entity = this.lastEntities[entityName2];
          val2 = val2.replace(entity.regex, entity.val);
        }
        if (this.options.htmlEntities) {
          for (let entityName2 in this.htmlEntities) {
            const entity = this.htmlEntities[entityName2];
            val2 = val2.replace(entity.regex, entity.val);
          }
        }
        val2 = val2.replace(this.ampEntity.regex, this.ampEntity.val);
      }
      return val2;
    };
    function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
      if (textData) {
        if (isLeafNode === void 0)
          isLeafNode = Object.keys(currentNode.child).length === 0;
        textData = this.parseTextData(
          textData,
          currentNode.tagname,
          jPath,
          false,
          currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
          isLeafNode
        );
        if (textData !== void 0 && textData !== "")
          currentNode.add(this.options.textNodeName, textData);
        textData = "";
      }
      return textData;
    }
    function isItStopNode(stopNodes, jPath, currentTagName) {
      const allNodesExp = "*." + currentTagName;
      for (const stopNodePath in stopNodes) {
        const stopNodeExp = stopNodes[stopNodePath];
        if (allNodesExp === stopNodeExp || jPath === stopNodeExp)
          return true;
      }
      return false;
    }
    function tagExpWithClosingIndex(xmlData, i, closingChar = ">") {
      let attrBoundary;
      let tagExp = "";
      for (let index = i; index < xmlData.length; index++) {
        let ch = xmlData[index];
        if (attrBoundary) {
          if (ch === attrBoundary)
            attrBoundary = "";
        } else if (ch === '"' || ch === "'") {
          attrBoundary = ch;
        } else if (ch === closingChar[0]) {
          if (closingChar[1]) {
            if (xmlData[index + 1] === closingChar[1]) {
              return {
                data: tagExp,
                index
              };
            }
          } else {
            return {
              data: tagExp,
              index
            };
          }
        } else if (ch === "	") {
          ch = " ";
        }
        tagExp += ch;
      }
    }
    function findClosingIndex(xmlData, str, i, errMsg) {
      const closingIndex = xmlData.indexOf(str, i);
      if (closingIndex === -1) {
        throw new Error(errMsg);
      } else {
        return closingIndex + str.length - 1;
      }
    }
    function readTagExp(xmlData, i, removeNSPrefix, closingChar = ">") {
      const result = tagExpWithClosingIndex(xmlData, i + 1, closingChar);
      if (!result)
        return;
      let tagExp = result.data;
      const closeIndex = result.index;
      const separatorIndex = tagExp.search(/\s/);
      let tagName = tagExp;
      let attrExpPresent = true;
      if (separatorIndex !== -1) {
        tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, "");
        tagExp = tagExp.substr(separatorIndex + 1);
      }
      if (removeNSPrefix) {
        const colonIndex = tagName.indexOf(":");
        if (colonIndex !== -1) {
          tagName = tagName.substr(colonIndex + 1);
          attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
        }
      }
      return {
        tagName,
        tagExp,
        closeIndex,
        attrExpPresent
      };
    }
    function readStopNodeData(xmlData, tagName, i) {
      const startIndex = i;
      let openTagCount = 1;
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === "<") {
          if (xmlData[i + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
            let closeTagName = xmlData.substring(i + 2, closeIndex).trim();
            if (closeTagName === tagName) {
              openTagCount--;
              if (openTagCount === 0) {
                return {
                  tagContent: xmlData.substring(startIndex, i),
                  i: closeIndex
                };
              }
            }
            i = closeIndex;
          } else if (xmlData[i + 1] === "?") {
            const closeIndex = findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
            i = closeIndex;
          } else if (xmlData.substr(i + 1, 3) === "!--") {
            const closeIndex = findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
            i = closeIndex;
          } else if (xmlData.substr(i + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
            i = closeIndex;
          } else {
            const tagData = readTagExp(xmlData, i, ">");
            if (tagData) {
              const openTagName = tagData && tagData.tagName;
              if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                openTagCount++;
              }
              i = tagData.closeIndex;
            }
          }
        }
      }
    }
    function parseValue(val2, shouldParse, options) {
      if (shouldParse && typeof val2 === "string") {
        const newval = val2.trim();
        if (newval === "true")
          return true;
        else if (newval === "false")
          return false;
        else
          return toNumber(val2, options);
      } else {
        if (util.isExist(val2)) {
          return val2;
        } else {
          return "";
        }
      }
    }
    module2.exports = OrderedObjParser;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/node2json.js
var require_node2json = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/node2json.js"(exports) {
    "use strict";
    function prettify(node, options) {
      return compress(node, options);
    }
    function compress(arr, options, jPath) {
      let text;
      const compressedObj = {};
      for (let i = 0; i < arr.length; i++) {
        const tagObj = arr[i];
        const property = propName(tagObj);
        let newJpath = "";
        if (jPath === void 0)
          newJpath = property;
        else
          newJpath = jPath + "." + property;
        if (property === options.textNodeName) {
          if (text === void 0)
            text = tagObj[property];
          else
            text += "" + tagObj[property];
        } else if (property === void 0) {
          continue;
        } else if (tagObj[property]) {
          let val2 = compress(tagObj[property], options, newJpath);
          const isLeaf = isLeafTag(val2, options);
          if (tagObj[":@"]) {
            assignAttributes(val2, tagObj[":@"], newJpath, options);
          } else if (Object.keys(val2).length === 1 && val2[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
            val2 = val2[options.textNodeName];
          } else if (Object.keys(val2).length === 0) {
            if (options.alwaysCreateTextNode)
              val2[options.textNodeName] = "";
            else
              val2 = "";
          }
          if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
            if (!Array.isArray(compressedObj[property])) {
              compressedObj[property] = [compressedObj[property]];
            }
            compressedObj[property].push(val2);
          } else {
            if (options.isArray(property, newJpath, isLeaf)) {
              compressedObj[property] = [val2];
            } else {
              compressedObj[property] = val2;
            }
          }
        }
      }
      if (typeof text === "string") {
        if (text.length > 0)
          compressedObj[options.textNodeName] = text;
      } else if (text !== void 0)
        compressedObj[options.textNodeName] = text;
      return compressedObj;
    }
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key !== ":@")
          return key;
      }
    }
    function assignAttributes(obj, attrMap, jpath, options) {
      if (attrMap) {
        const keys = Object.keys(attrMap);
        const len = keys.length;
        for (let i = 0; i < len; i++) {
          const atrrName = keys[i];
          if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
            obj[atrrName] = [attrMap[atrrName]];
          } else {
            obj[atrrName] = attrMap[atrrName];
          }
        }
      }
    }
    function isLeafTag(obj, options) {
      const { textNodeName } = options;
      const propCount = Object.keys(obj).length;
      if (propCount === 0) {
        return true;
      }
      if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
        return true;
      }
      return false;
    }
    exports.prettify = prettify;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var require_XMLParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"(exports, module2) {
    var { buildOptions } = require_OptionsBuilder();
    var OrderedObjParser = require_OrderedObjParser();
    var { prettify } = require_node2json();
    var validator = require_validator();
    var XMLParser = class {
      constructor(options) {
        this.externalEntities = {};
        this.options = buildOptions(options);
      }
      /**
       * Parse XML dats to JS object 
       * @param {string|Buffer} xmlData 
       * @param {boolean|Object} validationOption 
       */
      parse(xmlData, validationOption) {
        if (typeof xmlData === "string") {
        } else if (xmlData.toString) {
          xmlData = xmlData.toString();
        } else {
          throw new Error("XML data is accepted in String or Bytes[] form.");
        }
        if (validationOption) {
          if (validationOption === true)
            validationOption = {};
          const result = validator.validate(xmlData, validationOption);
          if (result !== true) {
            throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
          }
        }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === void 0)
          return orderedResult;
        else
          return prettify(orderedResult, this.options);
      }
      /**
       * Add Entity which is not by default supported by this library
       * @param {string} key 
       * @param {string} value 
       */
      addEntity(key, value) {
        if (value.indexOf("&") !== -1) {
          throw new Error("Entity value can't have '&'");
        } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
          throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        } else if (value === "&") {
          throw new Error("An entity with value '&' is not permitted");
        } else {
          this.externalEntities[key] = value;
        }
      }
    };
    module2.exports = XMLParser;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js
var require_orderedJs2Xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js"(exports, module2) {
    var EOL = "\n";
    function toXml(jArray, options) {
      let indentation = "";
      if (options.format && options.indentBy.length > 0) {
        indentation = EOL;
      }
      return arrToStr(jArray, options, "", indentation);
    }
    function arrToStr(arr, options, jPath, indentation) {
      let xmlStr = "";
      let isPreviousElementTag = false;
      for (let i = 0; i < arr.length; i++) {
        const tagObj = arr[i];
        const tagName = propName(tagObj);
        let newJPath = "";
        if (jPath.length === 0)
          newJPath = tagName;
        else
          newJPath = `${jPath}.${tagName}`;
        if (tagName === options.textNodeName) {
          let tagText = tagObj[tagName];
          if (!isStopNode(newJPath, options)) {
            tagText = options.tagValueProcessor(tagName, tagText);
            tagText = replaceEntitiesValue(tagText, options);
          }
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += tagText;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.cdataPropName) {
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.commentPropName) {
          xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
          isPreviousElementTag = true;
          continue;
        } else if (tagName[0] === "?") {
          const attStr2 = attr_to_str(tagObj[":@"], options);
          const tempInd = tagName === "?xml" ? "" : indentation;
          let piTextNodeName = tagObj[tagName][0][options.textNodeName];
          piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
          xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
          isPreviousElementTag = true;
          continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
          newIdentation += options.indentBy;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
          if (options.suppressUnpairedNode)
            xmlStr += tagStart + ">";
          else
            xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
          xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
          xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
          xmlStr += tagStart + ">";
          if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
            xmlStr += indentation + options.indentBy + tagValue + indentation;
          } else {
            xmlStr += tagValue;
          }
          xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
      }
      return xmlStr;
    }
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key !== ":@")
          return key;
      }
    }
    function attr_to_str(attrMap, options) {
      let attrStr = "";
      if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
          let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
          attrVal = replaceEntitiesValue(attrVal, options);
          if (attrVal === true && options.suppressBooleanAttributes) {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
          } else {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
          }
        }
      }
      return attrStr;
    }
    function isStopNode(jPath, options) {
      jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
      let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
      for (let index in options.stopNodes) {
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName)
          return true;
      }
      return false;
    }
    function replaceEntitiesValue(textValue, options) {
      if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i = 0; i < options.entities.length; i++) {
          const entity = options.entities[i];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    }
    module2.exports = toXml;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js
var require_json2xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js"(exports, module2) {
    "use strict";
    var buildFromOrderedJs = require_orderedJs2Xml();
    var defaultOptions = {
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      cdataPropName: false,
      format: false,
      indentBy: "  ",
      suppressEmptyNode: false,
      suppressUnpairedNode: true,
      suppressBooleanAttributes: true,
      tagValueProcessor: function(key, a) {
        return a;
      },
      attributeValueProcessor: function(attrName, a) {
        return a;
      },
      preserveOrder: false,
      commentPropName: false,
      unpairedTags: [],
      entities: [
        { regex: new RegExp("&", "g"), val: "&amp;" },
        //it must be on top
        { regex: new RegExp(">", "g"), val: "&gt;" },
        { regex: new RegExp("<", "g"), val: "&lt;" },
        { regex: new RegExp("'", "g"), val: "&apos;" },
        { regex: new RegExp('"', "g"), val: "&quot;" }
      ],
      processEntities: true,
      stopNodes: [],
      // transformTagName: false,
      // transformAttributeName: false,
      oneListGroup: false
    };
    function Builder(options) {
      this.options = Object.assign({}, defaultOptions, options);
      if (this.options.ignoreAttributes || this.options.attributesGroupName) {
        this.isAttribute = function() {
          return false;
        };
      } else {
        this.attrPrefixLen = this.options.attributeNamePrefix.length;
        this.isAttribute = isAttribute;
      }
      this.processTextOrObjNode = processTextOrObjNode;
      if (this.options.format) {
        this.indentate = indentate;
        this.tagEndChar = ">\n";
        this.newLine = "\n";
      } else {
        this.indentate = function() {
          return "";
        };
        this.tagEndChar = ">";
        this.newLine = "";
      }
    }
    Builder.prototype.build = function(jObj) {
      if (this.options.preserveOrder) {
        return buildFromOrderedJs(jObj, this.options);
      } else {
        if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
          jObj = {
            [this.options.arrayNodeName]: jObj
          };
        }
        return this.j2x(jObj, 0).val;
      }
    };
    Builder.prototype.j2x = function(jObj, level) {
      let attrStr = "";
      let val2 = "";
      for (let key in jObj) {
        if (typeof jObj[key] === "undefined") {
        } else if (jObj[key] === null) {
          if (key[0] === "?")
            val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
          else
            val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
        } else if (jObj[key] instanceof Date) {
          val2 += this.buildTextValNode(jObj[key], key, "", level);
        } else if (typeof jObj[key] !== "object") {
          const attr = this.isAttribute(key);
          if (attr) {
            attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
          } else {
            if (key === this.options.textNodeName) {
              let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
              val2 += this.replaceEntitiesValue(newval);
            } else {
              val2 += this.buildTextValNode(jObj[key], key, "", level);
            }
          }
        } else if (Array.isArray(jObj[key])) {
          const arrLen = jObj[key].length;
          let listTagVal = "";
          for (let j = 0; j < arrLen; j++) {
            const item = jObj[key][j];
            if (typeof item === "undefined") {
            } else if (item === null) {
              if (key[0] === "?")
                val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
              else
                val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
            } else if (typeof item === "object") {
              if (this.options.oneListGroup) {
                listTagVal += this.j2x(item, level + 1).val;
              } else {
                listTagVal += this.processTextOrObjNode(item, key, level);
              }
            } else {
              listTagVal += this.buildTextValNode(item, key, "", level);
            }
          }
          if (this.options.oneListGroup) {
            listTagVal = this.buildObjectNode(listTagVal, key, "", level);
          }
          val2 += listTagVal;
        } else {
          if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
            const Ks = Object.keys(jObj[key]);
            const L = Ks.length;
            for (let j = 0; j < L; j++) {
              attrStr += this.buildAttrPairStr(Ks[j], "" + jObj[key][Ks[j]]);
            }
          } else {
            val2 += this.processTextOrObjNode(jObj[key], key, level);
          }
        }
      }
      return { attrStr, val: val2 };
    };
    Builder.prototype.buildAttrPairStr = function(attrName, val2) {
      val2 = this.options.attributeValueProcessor(attrName, "" + val2);
      val2 = this.replaceEntitiesValue(val2);
      if (this.options.suppressBooleanAttributes && val2 === "true") {
        return " " + attrName;
      } else
        return " " + attrName + '="' + val2 + '"';
    };
    function processTextOrObjNode(object, key, level) {
      const result = this.j2x(object, level + 1);
      if (object[this.options.textNodeName] !== void 0 && Object.keys(object).length === 1) {
        return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
      } else {
        return this.buildObjectNode(result.val, key, result.attrStr, level);
      }
    }
    Builder.prototype.buildObjectNode = function(val2, key, attrStr, level) {
      if (val2 === "") {
        if (key[0] === "?")
          return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        else {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        }
      } else {
        let tagEndExp = "</" + key + this.tagEndChar;
        let piClosingChar = "";
        if (key[0] === "?") {
          piClosingChar = "?";
          tagEndExp = "";
        }
        if (attrStr && val2.indexOf("<") === -1) {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val2 + tagEndExp;
        } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
          return this.indentate(level) + `<!--${val2}-->` + this.newLine;
        } else {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val2 + this.indentate(level) + tagEndExp;
        }
      }
    };
    Builder.prototype.closeTag = function(key) {
      let closeTag = "";
      if (this.options.unpairedTags.indexOf(key) !== -1) {
        if (!this.options.suppressUnpairedNode)
          closeTag = "/";
      } else if (this.options.suppressEmptyNode) {
        closeTag = "/";
      } else {
        closeTag = `></${key}`;
      }
      return closeTag;
    };
    Builder.prototype.buildTextValNode = function(val2, key, attrStr, level) {
      if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
        return this.indentate(level) + `<![CDATA[${val2}]]>` + this.newLine;
      } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
        return this.indentate(level) + `<!--${val2}-->` + this.newLine;
      } else if (key[0] === "?") {
        return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
      } else {
        let textValue = this.options.tagValueProcessor(key, val2);
        textValue = this.replaceEntitiesValue(textValue);
        if (textValue === "") {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        } else {
          return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
        }
      }
    };
    Builder.prototype.replaceEntitiesValue = function(textValue) {
      if (textValue && textValue.length > 0 && this.options.processEntities) {
        for (let i = 0; i < this.options.entities.length; i++) {
          const entity = this.options.entities[i];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    };
    function indentate(level) {
      return this.options.indentBy.repeat(level);
    }
    function isAttribute(name) {
      if (name.startsWith(this.options.attributeNamePrefix)) {
        return name.substr(this.attrPrefixLen);
      } else {
        return false;
      }
    }
    module2.exports = Builder;
  }
});

// node_modules/fast-xml-parser/src/fxp.js
var require_fxp = __commonJS({
  "node_modules/fast-xml-parser/src/fxp.js"(exports, module2) {
    "use strict";
    var validator = require_validator();
    var XMLParser = require_XMLParser();
    var XMLBuilder = require_json2xml();
    module2.exports = {
      XMLParser,
      XMLValidator: validator,
      XMLBuilder
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/protocols/Aws_query.js
var require_Aws_query = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/protocols/Aws_query.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.de_GetSessionTokenCommand = exports.de_GetFederationTokenCommand = exports.de_GetCallerIdentityCommand = exports.de_GetAccessKeyInfoCommand = exports.de_DecodeAuthorizationMessageCommand = exports.de_AssumeRoleWithWebIdentityCommand = exports.de_AssumeRoleWithSAMLCommand = exports.de_AssumeRoleCommand = exports.se_GetSessionTokenCommand = exports.se_GetFederationTokenCommand = exports.se_GetCallerIdentityCommand = exports.se_GetAccessKeyInfoCommand = exports.se_DecodeAuthorizationMessageCommand = exports.se_AssumeRoleWithWebIdentityCommand = exports.se_AssumeRoleWithSAMLCommand = exports.se_AssumeRoleCommand = void 0;
    var protocol_http_1 = require_dist_cjs2();
    var smithy_client_1 = require_dist_cjs37();
    var fast_xml_parser_1 = require_fxp();
    var models_0_1 = require_models_0();
    var STSServiceException_1 = require_STSServiceException();
    var se_AssumeRoleCommand = async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_AssumeRoleRequest(input, context),
        Action: "AssumeRole",
        Version: "2011-06-15"
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    };
    exports.se_AssumeRoleCommand = se_AssumeRoleCommand;
    var se_AssumeRoleWithSAMLCommand = async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_AssumeRoleWithSAMLRequest(input, context),
        Action: "AssumeRoleWithSAML",
        Version: "2011-06-15"
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    };
    exports.se_AssumeRoleWithSAMLCommand = se_AssumeRoleWithSAMLCommand;
    var se_AssumeRoleWithWebIdentityCommand = async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_AssumeRoleWithWebIdentityRequest(input, context),
        Action: "AssumeRoleWithWebIdentity",
        Version: "2011-06-15"
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    };
    exports.se_AssumeRoleWithWebIdentityCommand = se_AssumeRoleWithWebIdentityCommand;
    var se_DecodeAuthorizationMessageCommand = async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_DecodeAuthorizationMessageRequest(input, context),
        Action: "DecodeAuthorizationMessage",
        Version: "2011-06-15"
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    };
    exports.se_DecodeAuthorizationMessageCommand = se_DecodeAuthorizationMessageCommand;
    var se_GetAccessKeyInfoCommand = async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetAccessKeyInfoRequest(input, context),
        Action: "GetAccessKeyInfo",
        Version: "2011-06-15"
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    };
    exports.se_GetAccessKeyInfoCommand = se_GetAccessKeyInfoCommand;
    var se_GetCallerIdentityCommand = async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetCallerIdentityRequest(input, context),
        Action: "GetCallerIdentity",
        Version: "2011-06-15"
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    };
    exports.se_GetCallerIdentityCommand = se_GetCallerIdentityCommand;
    var se_GetFederationTokenCommand = async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetFederationTokenRequest(input, context),
        Action: "GetFederationToken",
        Version: "2011-06-15"
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    };
    exports.se_GetFederationTokenCommand = se_GetFederationTokenCommand;
    var se_GetSessionTokenCommand = async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetSessionTokenRequest(input, context),
        Action: "GetSessionToken",
        Version: "2011-06-15"
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    };
    exports.se_GetSessionTokenCommand = se_GetSessionTokenCommand;
    var de_AssumeRoleCommand = async (output, context) => {
      if (output.statusCode >= 300) {
        return de_AssumeRoleCommandError(output, context);
      }
      const data = await parseBody(output.body, context);
      let contents = {};
      contents = de_AssumeRoleResponse(data.AssumeRoleResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    };
    exports.de_AssumeRoleCommand = de_AssumeRoleCommand;
    var de_AssumeRoleCommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
      };
      const errorCode = loadQueryErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
          throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
          throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
          throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
          throw await de_RegionDisabledExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody: parsedBody.Error,
            errorCode
          });
      }
    };
    var de_AssumeRoleWithSAMLCommand = async (output, context) => {
      if (output.statusCode >= 300) {
        return de_AssumeRoleWithSAMLCommandError(output, context);
      }
      const data = await parseBody(output.body, context);
      let contents = {};
      contents = de_AssumeRoleWithSAMLResponse(data.AssumeRoleWithSAMLResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    };
    exports.de_AssumeRoleWithSAMLCommand = de_AssumeRoleWithSAMLCommand;
    var de_AssumeRoleWithSAMLCommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
      };
      const errorCode = loadQueryErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
          throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "IDPRejectedClaim":
        case "com.amazonaws.sts#IDPRejectedClaimException":
          throw await de_IDPRejectedClaimExceptionRes(parsedOutput, context);
        case "InvalidIdentityToken":
        case "com.amazonaws.sts#InvalidIdentityTokenException":
          throw await de_InvalidIdentityTokenExceptionRes(parsedOutput, context);
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
          throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
          throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
          throw await de_RegionDisabledExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody: parsedBody.Error,
            errorCode
          });
      }
    };
    var de_AssumeRoleWithWebIdentityCommand = async (output, context) => {
      if (output.statusCode >= 300) {
        return de_AssumeRoleWithWebIdentityCommandError(output, context);
      }
      const data = await parseBody(output.body, context);
      let contents = {};
      contents = de_AssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    };
    exports.de_AssumeRoleWithWebIdentityCommand = de_AssumeRoleWithWebIdentityCommand;
    var de_AssumeRoleWithWebIdentityCommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
      };
      const errorCode = loadQueryErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
          throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "IDPCommunicationError":
        case "com.amazonaws.sts#IDPCommunicationErrorException":
          throw await de_IDPCommunicationErrorExceptionRes(parsedOutput, context);
        case "IDPRejectedClaim":
        case "com.amazonaws.sts#IDPRejectedClaimException":
          throw await de_IDPRejectedClaimExceptionRes(parsedOutput, context);
        case "InvalidIdentityToken":
        case "com.amazonaws.sts#InvalidIdentityTokenException":
          throw await de_InvalidIdentityTokenExceptionRes(parsedOutput, context);
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
          throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
          throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
          throw await de_RegionDisabledExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody: parsedBody.Error,
            errorCode
          });
      }
    };
    var de_DecodeAuthorizationMessageCommand = async (output, context) => {
      if (output.statusCode >= 300) {
        return de_DecodeAuthorizationMessageCommandError(output, context);
      }
      const data = await parseBody(output.body, context);
      let contents = {};
      contents = de_DecodeAuthorizationMessageResponse(data.DecodeAuthorizationMessageResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    };
    exports.de_DecodeAuthorizationMessageCommand = de_DecodeAuthorizationMessageCommand;
    var de_DecodeAuthorizationMessageCommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
      };
      const errorCode = loadQueryErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "InvalidAuthorizationMessageException":
        case "com.amazonaws.sts#InvalidAuthorizationMessageException":
          throw await de_InvalidAuthorizationMessageExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody: parsedBody.Error,
            errorCode
          });
      }
    };
    var de_GetAccessKeyInfoCommand = async (output, context) => {
      if (output.statusCode >= 300) {
        return de_GetAccessKeyInfoCommandError(output, context);
      }
      const data = await parseBody(output.body, context);
      let contents = {};
      contents = de_GetAccessKeyInfoResponse(data.GetAccessKeyInfoResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    };
    exports.de_GetAccessKeyInfoCommand = de_GetAccessKeyInfoCommand;
    var de_GetAccessKeyInfoCommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
      };
      const errorCode = loadQueryErrorCode(output, parsedOutput.body);
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode
      });
    };
    var de_GetCallerIdentityCommand = async (output, context) => {
      if (output.statusCode >= 300) {
        return de_GetCallerIdentityCommandError(output, context);
      }
      const data = await parseBody(output.body, context);
      let contents = {};
      contents = de_GetCallerIdentityResponse(data.GetCallerIdentityResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    };
    exports.de_GetCallerIdentityCommand = de_GetCallerIdentityCommand;
    var de_GetCallerIdentityCommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
      };
      const errorCode = loadQueryErrorCode(output, parsedOutput.body);
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode
      });
    };
    var de_GetFederationTokenCommand = async (output, context) => {
      if (output.statusCode >= 300) {
        return de_GetFederationTokenCommandError(output, context);
      }
      const data = await parseBody(output.body, context);
      let contents = {};
      contents = de_GetFederationTokenResponse(data.GetFederationTokenResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    };
    exports.de_GetFederationTokenCommand = de_GetFederationTokenCommand;
    var de_GetFederationTokenCommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
      };
      const errorCode = loadQueryErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
          throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
          throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
          throw await de_RegionDisabledExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody: parsedBody.Error,
            errorCode
          });
      }
    };
    var de_GetSessionTokenCommand = async (output, context) => {
      if (output.statusCode >= 300) {
        return de_GetSessionTokenCommandError(output, context);
      }
      const data = await parseBody(output.body, context);
      let contents = {};
      contents = de_GetSessionTokenResponse(data.GetSessionTokenResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    };
    exports.de_GetSessionTokenCommand = de_GetSessionTokenCommand;
    var de_GetSessionTokenCommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
      };
      const errorCode = loadQueryErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
          throw await de_RegionDisabledExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody: parsedBody.Error,
            errorCode
          });
      }
    };
    var de_ExpiredTokenExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_ExpiredTokenException(body.Error, context);
      const exception = new models_0_1.ExpiredTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, smithy_client_1.decorateServiceException)(exception, body);
    };
    var de_IDPCommunicationErrorExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_IDPCommunicationErrorException(body.Error, context);
      const exception = new models_0_1.IDPCommunicationErrorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, smithy_client_1.decorateServiceException)(exception, body);
    };
    var de_IDPRejectedClaimExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_IDPRejectedClaimException(body.Error, context);
      const exception = new models_0_1.IDPRejectedClaimException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, smithy_client_1.decorateServiceException)(exception, body);
    };
    var de_InvalidAuthorizationMessageExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_InvalidAuthorizationMessageException(body.Error, context);
      const exception = new models_0_1.InvalidAuthorizationMessageException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, smithy_client_1.decorateServiceException)(exception, body);
    };
    var de_InvalidIdentityTokenExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_InvalidIdentityTokenException(body.Error, context);
      const exception = new models_0_1.InvalidIdentityTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, smithy_client_1.decorateServiceException)(exception, body);
    };
    var de_MalformedPolicyDocumentExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_MalformedPolicyDocumentException(body.Error, context);
      const exception = new models_0_1.MalformedPolicyDocumentException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, smithy_client_1.decorateServiceException)(exception, body);
    };
    var de_PackedPolicyTooLargeExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_PackedPolicyTooLargeException(body.Error, context);
      const exception = new models_0_1.PackedPolicyTooLargeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, smithy_client_1.decorateServiceException)(exception, body);
    };
    var de_RegionDisabledExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_RegionDisabledException(body.Error, context);
      const exception = new models_0_1.RegionDisabledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, smithy_client_1.decorateServiceException)(exception, body);
    };
    var se_AssumeRoleRequest = (input, context) => {
      var _a, _b, _c, _d;
      const entries = {};
      if (input.RoleArn != null) {
        entries["RoleArn"] = input.RoleArn;
      }
      if (input.RoleSessionName != null) {
        entries["RoleSessionName"] = input.RoleSessionName;
      }
      if (input.PolicyArns != null) {
        const memberEntries = se_policyDescriptorListType(input.PolicyArns, context);
        if (((_a = input.PolicyArns) == null ? void 0 : _a.length) === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input.Policy != null) {
        entries["Policy"] = input.Policy;
      }
      if (input.DurationSeconds != null) {
        entries["DurationSeconds"] = input.DurationSeconds;
      }
      if (input.Tags != null) {
        const memberEntries = se_tagListType(input.Tags, context);
        if (((_b = input.Tags) == null ? void 0 : _b.length) === 0) {
          entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Tags.${key}`;
          entries[loc] = value;
        });
      }
      if (input.TransitiveTagKeys != null) {
        const memberEntries = se_tagKeyListType(input.TransitiveTagKeys, context);
        if (((_c = input.TransitiveTagKeys) == null ? void 0 : _c.length) === 0) {
          entries.TransitiveTagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `TransitiveTagKeys.${key}`;
          entries[loc] = value;
        });
      }
      if (input.ExternalId != null) {
        entries["ExternalId"] = input.ExternalId;
      }
      if (input.SerialNumber != null) {
        entries["SerialNumber"] = input.SerialNumber;
      }
      if (input.TokenCode != null) {
        entries["TokenCode"] = input.TokenCode;
      }
      if (input.SourceIdentity != null) {
        entries["SourceIdentity"] = input.SourceIdentity;
      }
      if (input.ProvidedContexts != null) {
        const memberEntries = se_ProvidedContextsListType(input.ProvidedContexts, context);
        if (((_d = input.ProvidedContexts) == null ? void 0 : _d.length) === 0) {
          entries.ProvidedContexts = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `ProvidedContexts.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    };
    var se_AssumeRoleWithSAMLRequest = (input, context) => {
      var _a;
      const entries = {};
      if (input.RoleArn != null) {
        entries["RoleArn"] = input.RoleArn;
      }
      if (input.PrincipalArn != null) {
        entries["PrincipalArn"] = input.PrincipalArn;
      }
      if (input.SAMLAssertion != null) {
        entries["SAMLAssertion"] = input.SAMLAssertion;
      }
      if (input.PolicyArns != null) {
        const memberEntries = se_policyDescriptorListType(input.PolicyArns, context);
        if (((_a = input.PolicyArns) == null ? void 0 : _a.length) === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input.Policy != null) {
        entries["Policy"] = input.Policy;
      }
      if (input.DurationSeconds != null) {
        entries["DurationSeconds"] = input.DurationSeconds;
      }
      return entries;
    };
    var se_AssumeRoleWithWebIdentityRequest = (input, context) => {
      var _a;
      const entries = {};
      if (input.RoleArn != null) {
        entries["RoleArn"] = input.RoleArn;
      }
      if (input.RoleSessionName != null) {
        entries["RoleSessionName"] = input.RoleSessionName;
      }
      if (input.WebIdentityToken != null) {
        entries["WebIdentityToken"] = input.WebIdentityToken;
      }
      if (input.ProviderId != null) {
        entries["ProviderId"] = input.ProviderId;
      }
      if (input.PolicyArns != null) {
        const memberEntries = se_policyDescriptorListType(input.PolicyArns, context);
        if (((_a = input.PolicyArns) == null ? void 0 : _a.length) === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input.Policy != null) {
        entries["Policy"] = input.Policy;
      }
      if (input.DurationSeconds != null) {
        entries["DurationSeconds"] = input.DurationSeconds;
      }
      return entries;
    };
    var se_DecodeAuthorizationMessageRequest = (input, context) => {
      const entries = {};
      if (input.EncodedMessage != null) {
        entries["EncodedMessage"] = input.EncodedMessage;
      }
      return entries;
    };
    var se_GetAccessKeyInfoRequest = (input, context) => {
      const entries = {};
      if (input.AccessKeyId != null) {
        entries["AccessKeyId"] = input.AccessKeyId;
      }
      return entries;
    };
    var se_GetCallerIdentityRequest = (input, context) => {
      const entries = {};
      return entries;
    };
    var se_GetFederationTokenRequest = (input, context) => {
      var _a, _b;
      const entries = {};
      if (input.Name != null) {
        entries["Name"] = input.Name;
      }
      if (input.Policy != null) {
        entries["Policy"] = input.Policy;
      }
      if (input.PolicyArns != null) {
        const memberEntries = se_policyDescriptorListType(input.PolicyArns, context);
        if (((_a = input.PolicyArns) == null ? void 0 : _a.length) === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input.DurationSeconds != null) {
        entries["DurationSeconds"] = input.DurationSeconds;
      }
      if (input.Tags != null) {
        const memberEntries = se_tagListType(input.Tags, context);
        if (((_b = input.Tags) == null ? void 0 : _b.length) === 0) {
          entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Tags.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    };
    var se_GetSessionTokenRequest = (input, context) => {
      const entries = {};
      if (input.DurationSeconds != null) {
        entries["DurationSeconds"] = input.DurationSeconds;
      }
      if (input.SerialNumber != null) {
        entries["SerialNumber"] = input.SerialNumber;
      }
      if (input.TokenCode != null) {
        entries["TokenCode"] = input.TokenCode;
      }
      return entries;
    };
    var se_policyDescriptorListType = (input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_PolicyDescriptorType(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    };
    var se_PolicyDescriptorType = (input, context) => {
      const entries = {};
      if (input.arn != null) {
        entries["arn"] = input.arn;
      }
      return entries;
    };
    var se_ProvidedContext = (input, context) => {
      const entries = {};
      if (input.ProviderArn != null) {
        entries["ProviderArn"] = input.ProviderArn;
      }
      if (input.ContextAssertion != null) {
        entries["ContextAssertion"] = input.ContextAssertion;
      }
      return entries;
    };
    var se_ProvidedContextsListType = (input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_ProvidedContext(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    };
    var se_Tag = (input, context) => {
      const entries = {};
      if (input.Key != null) {
        entries["Key"] = input.Key;
      }
      if (input.Value != null) {
        entries["Value"] = input.Value;
      }
      return entries;
    };
    var se_tagKeyListType = (input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
      }
      return entries;
    };
    var se_tagListType = (input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_Tag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    };
    var de_AssumedRoleUser = (output, context) => {
      const contents = {};
      if (output["AssumedRoleId"] !== void 0) {
        contents.AssumedRoleId = (0, smithy_client_1.expectString)(output["AssumedRoleId"]);
      }
      if (output["Arn"] !== void 0) {
        contents.Arn = (0, smithy_client_1.expectString)(output["Arn"]);
      }
      return contents;
    };
    var de_AssumeRoleResponse = (output, context) => {
      const contents = {};
      if (output["Credentials"] !== void 0) {
        contents.Credentials = de_Credentials(output["Credentials"], context);
      }
      if (output["AssumedRoleUser"] !== void 0) {
        contents.AssumedRoleUser = de_AssumedRoleUser(output["AssumedRoleUser"], context);
      }
      if (output["PackedPolicySize"] !== void 0) {
        contents.PackedPolicySize = (0, smithy_client_1.strictParseInt32)(output["PackedPolicySize"]);
      }
      if (output["SourceIdentity"] !== void 0) {
        contents.SourceIdentity = (0, smithy_client_1.expectString)(output["SourceIdentity"]);
      }
      return contents;
    };
    var de_AssumeRoleWithSAMLResponse = (output, context) => {
      const contents = {};
      if (output["Credentials"] !== void 0) {
        contents.Credentials = de_Credentials(output["Credentials"], context);
      }
      if (output["AssumedRoleUser"] !== void 0) {
        contents.AssumedRoleUser = de_AssumedRoleUser(output["AssumedRoleUser"], context);
      }
      if (output["PackedPolicySize"] !== void 0) {
        contents.PackedPolicySize = (0, smithy_client_1.strictParseInt32)(output["PackedPolicySize"]);
      }
      if (output["Subject"] !== void 0) {
        contents.Subject = (0, smithy_client_1.expectString)(output["Subject"]);
      }
      if (output["SubjectType"] !== void 0) {
        contents.SubjectType = (0, smithy_client_1.expectString)(output["SubjectType"]);
      }
      if (output["Issuer"] !== void 0) {
        contents.Issuer = (0, smithy_client_1.expectString)(output["Issuer"]);
      }
      if (output["Audience"] !== void 0) {
        contents.Audience = (0, smithy_client_1.expectString)(output["Audience"]);
      }
      if (output["NameQualifier"] !== void 0) {
        contents.NameQualifier = (0, smithy_client_1.expectString)(output["NameQualifier"]);
      }
      if (output["SourceIdentity"] !== void 0) {
        contents.SourceIdentity = (0, smithy_client_1.expectString)(output["SourceIdentity"]);
      }
      return contents;
    };
    var de_AssumeRoleWithWebIdentityResponse = (output, context) => {
      const contents = {};
      if (output["Credentials"] !== void 0) {
        contents.Credentials = de_Credentials(output["Credentials"], context);
      }
      if (output["SubjectFromWebIdentityToken"] !== void 0) {
        contents.SubjectFromWebIdentityToken = (0, smithy_client_1.expectString)(output["SubjectFromWebIdentityToken"]);
      }
      if (output["AssumedRoleUser"] !== void 0) {
        contents.AssumedRoleUser = de_AssumedRoleUser(output["AssumedRoleUser"], context);
      }
      if (output["PackedPolicySize"] !== void 0) {
        contents.PackedPolicySize = (0, smithy_client_1.strictParseInt32)(output["PackedPolicySize"]);
      }
      if (output["Provider"] !== void 0) {
        contents.Provider = (0, smithy_client_1.expectString)(output["Provider"]);
      }
      if (output["Audience"] !== void 0) {
        contents.Audience = (0, smithy_client_1.expectString)(output["Audience"]);
      }
      if (output["SourceIdentity"] !== void 0) {
        contents.SourceIdentity = (0, smithy_client_1.expectString)(output["SourceIdentity"]);
      }
      return contents;
    };
    var de_Credentials = (output, context) => {
      const contents = {};
      if (output["AccessKeyId"] !== void 0) {
        contents.AccessKeyId = (0, smithy_client_1.expectString)(output["AccessKeyId"]);
      }
      if (output["SecretAccessKey"] !== void 0) {
        contents.SecretAccessKey = (0, smithy_client_1.expectString)(output["SecretAccessKey"]);
      }
      if (output["SessionToken"] !== void 0) {
        contents.SessionToken = (0, smithy_client_1.expectString)(output["SessionToken"]);
      }
      if (output["Expiration"] !== void 0) {
        contents.Expiration = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["Expiration"]));
      }
      return contents;
    };
    var de_DecodeAuthorizationMessageResponse = (output, context) => {
      const contents = {};
      if (output["DecodedMessage"] !== void 0) {
        contents.DecodedMessage = (0, smithy_client_1.expectString)(output["DecodedMessage"]);
      }
      return contents;
    };
    var de_ExpiredTokenException = (output, context) => {
      const contents = {};
      if (output["message"] !== void 0) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
      }
      return contents;
    };
    var de_FederatedUser = (output, context) => {
      const contents = {};
      if (output["FederatedUserId"] !== void 0) {
        contents.FederatedUserId = (0, smithy_client_1.expectString)(output["FederatedUserId"]);
      }
      if (output["Arn"] !== void 0) {
        contents.Arn = (0, smithy_client_1.expectString)(output["Arn"]);
      }
      return contents;
    };
    var de_GetAccessKeyInfoResponse = (output, context) => {
      const contents = {};
      if (output["Account"] !== void 0) {
        contents.Account = (0, smithy_client_1.expectString)(output["Account"]);
      }
      return contents;
    };
    var de_GetCallerIdentityResponse = (output, context) => {
      const contents = {};
      if (output["UserId"] !== void 0) {
        contents.UserId = (0, smithy_client_1.expectString)(output["UserId"]);
      }
      if (output["Account"] !== void 0) {
        contents.Account = (0, smithy_client_1.expectString)(output["Account"]);
      }
      if (output["Arn"] !== void 0) {
        contents.Arn = (0, smithy_client_1.expectString)(output["Arn"]);
      }
      return contents;
    };
    var de_GetFederationTokenResponse = (output, context) => {
      const contents = {};
      if (output["Credentials"] !== void 0) {
        contents.Credentials = de_Credentials(output["Credentials"], context);
      }
      if (output["FederatedUser"] !== void 0) {
        contents.FederatedUser = de_FederatedUser(output["FederatedUser"], context);
      }
      if (output["PackedPolicySize"] !== void 0) {
        contents.PackedPolicySize = (0, smithy_client_1.strictParseInt32)(output["PackedPolicySize"]);
      }
      return contents;
    };
    var de_GetSessionTokenResponse = (output, context) => {
      const contents = {};
      if (output["Credentials"] !== void 0) {
        contents.Credentials = de_Credentials(output["Credentials"], context);
      }
      return contents;
    };
    var de_IDPCommunicationErrorException = (output, context) => {
      const contents = {};
      if (output["message"] !== void 0) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
      }
      return contents;
    };
    var de_IDPRejectedClaimException = (output, context) => {
      const contents = {};
      if (output["message"] !== void 0) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
      }
      return contents;
    };
    var de_InvalidAuthorizationMessageException = (output, context) => {
      const contents = {};
      if (output["message"] !== void 0) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
      }
      return contents;
    };
    var de_InvalidIdentityTokenException = (output, context) => {
      const contents = {};
      if (output["message"] !== void 0) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
      }
      return contents;
    };
    var de_MalformedPolicyDocumentException = (output, context) => {
      const contents = {};
      if (output["message"] !== void 0) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
      }
      return contents;
    };
    var de_PackedPolicyTooLargeException = (output, context) => {
      const contents = {};
      if (output["message"] !== void 0) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
      }
      return contents;
    };
    var de_RegionDisabledException = (output, context) => {
      const contents = {};
      if (output["message"] !== void 0) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
      }
      return contents;
    };
    var deserializeMetadata = (output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    });
    var collectBodyString = (streamBody, context) => (0, smithy_client_1.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));
    var throwDefaultError = (0, smithy_client_1.withBaseException)(STSServiceException_1.STSServiceException);
    var buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
      const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
      const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers
      };
      if (resolvedHostname !== void 0) {
        contents.hostname = resolvedHostname;
      }
      if (body !== void 0) {
        contents.body = body;
      }
      return new protocol_http_1.HttpRequest(contents);
    };
    var SHARED_HEADERS = {
      "content-type": "application/x-www-form-urlencoded"
    };
    var parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        const parser = new fast_xml_parser_1.XMLParser({
          attributeNamePrefix: "",
          htmlEntities: true,
          ignoreAttributes: false,
          ignoreDeclaration: true,
          parseTagValue: false,
          trimValues: false,
          tagValueProcessor: (_, val2) => val2.trim() === "" && val2.includes("\n") ? "" : void 0
        });
        parser.addEntity("#xD", "\r");
        parser.addEntity("#10", "\n");
        const parsedObj = parser.parse(encoded);
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
          parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
          delete parsedObjToReturn[textNodeName];
        }
        return (0, smithy_client_1.getValueFromTextNode)(parsedObjToReturn);
      }
      return {};
    });
    var parseErrorBody = async (errorBody, context) => {
      const value = await parseBody(errorBody, context);
      if (value.Error) {
        value.Error.message = value.Error.message ?? value.Error.Message;
      }
      return value;
    };
    var buildFormUrlencodedString = (formEntries) => Object.entries(formEntries).map(([key, value]) => (0, smithy_client_1.extendedEncodeURIComponent)(key) + "=" + (0, smithy_client_1.extendedEncodeURIComponent)(value)).join("&");
    var loadQueryErrorCode = (output, data) => {
      var _a;
      if (((_a = data.Error) == null ? void 0 : _a.Code) !== void 0) {
        return data.Error.Code;
      }
      if (output.statusCode == 404) {
        return "NotFound";
      }
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/commands/AssumeRoleCommand.js
var require_AssumeRoleCommand = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/commands/AssumeRoleCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AssumeRoleCommand = exports.$Command = void 0;
    var middleware_signing_1 = require_dist_cjs16();
    var middleware_endpoint_1 = require_dist_cjs28();
    var middleware_serde_1 = require_dist_cjs27();
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "$Command", { enumerable: true, get: function() {
      return smithy_client_1.Command;
    } });
    var types_1 = require_dist_cjs();
    var models_0_1 = require_models_0();
    var Aws_query_1 = require_Aws_query();
    var AssumeRoleCommand = class _AssumeRoleCommand extends smithy_client_1.Command {
      static getEndpointParameterInstructions() {
        return {
          UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
          UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
          Endpoint: { type: "builtInParams", name: "endpoint" },
          Region: { type: "builtInParams", name: "region" },
          UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
        };
      }
      constructor(input) {
        super();
        this.input = input;
      }
      resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_1.getEndpointPlugin)(configuration, _AssumeRoleCommand.getEndpointParameterInstructions()));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "AssumeRoleCommand";
        const handlerExecutionContext = {
          logger,
          clientName,
          commandName,
          inputFilterSensitiveLog: (_) => _,
          outputFilterSensitiveLog: models_0_1.AssumeRoleResponseFilterSensitiveLog,
          [types_1.SMITHY_CONTEXT_KEY]: {
            service: "AWSSecurityTokenServiceV20110615",
            operation: "AssumeRole"
          }
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
      serialize(input, context) {
        return (0, Aws_query_1.se_AssumeRoleCommand)(input, context);
      }
      deserialize(output, context) {
        return (0, Aws_query_1.de_AssumeRoleCommand)(output, context);
      }
    };
    exports.AssumeRoleCommand = AssumeRoleCommand;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/commands/AssumeRoleWithWebIdentityCommand.js
var require_AssumeRoleWithWebIdentityCommand = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/commands/AssumeRoleWithWebIdentityCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AssumeRoleWithWebIdentityCommand = exports.$Command = void 0;
    var middleware_endpoint_1 = require_dist_cjs28();
    var middleware_serde_1 = require_dist_cjs27();
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "$Command", { enumerable: true, get: function() {
      return smithy_client_1.Command;
    } });
    var types_1 = require_dist_cjs();
    var models_0_1 = require_models_0();
    var Aws_query_1 = require_Aws_query();
    var AssumeRoleWithWebIdentityCommand = class _AssumeRoleWithWebIdentityCommand extends smithy_client_1.Command {
      static getEndpointParameterInstructions() {
        return {
          UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
          UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
          Endpoint: { type: "builtInParams", name: "endpoint" },
          Region: { type: "builtInParams", name: "region" },
          UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
        };
      }
      constructor(input) {
        super();
        this.input = input;
      }
      resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_1.getEndpointPlugin)(configuration, _AssumeRoleWithWebIdentityCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "AssumeRoleWithWebIdentityCommand";
        const handlerExecutionContext = {
          logger,
          clientName,
          commandName,
          inputFilterSensitiveLog: models_0_1.AssumeRoleWithWebIdentityRequestFilterSensitiveLog,
          outputFilterSensitiveLog: models_0_1.AssumeRoleWithWebIdentityResponseFilterSensitiveLog,
          [types_1.SMITHY_CONTEXT_KEY]: {
            service: "AWSSecurityTokenServiceV20110615",
            operation: "AssumeRoleWithWebIdentity"
          }
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
      serialize(input, context) {
        return (0, Aws_query_1.se_AssumeRoleWithWebIdentityCommand)(input, context);
      }
      deserialize(output, context) {
        return (0, Aws_query_1.de_AssumeRoleWithWebIdentityCommand)(output, context);
      }
    };
    exports.AssumeRoleWithWebIdentityCommand = AssumeRoleWithWebIdentityCommand;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/defaultStsRoleAssumers.js
var require_defaultStsRoleAssumers = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/defaultStsRoleAssumers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decorateDefaultCredentialProvider = exports.getDefaultRoleAssumerWithWebIdentity = exports.getDefaultRoleAssumer = void 0;
    var AssumeRoleCommand_1 = require_AssumeRoleCommand();
    var AssumeRoleWithWebIdentityCommand_1 = require_AssumeRoleWithWebIdentityCommand();
    var ASSUME_ROLE_DEFAULT_REGION = "us-east-1";
    var decorateDefaultRegion = (region) => {
      if (typeof region !== "function") {
        return region === void 0 ? ASSUME_ROLE_DEFAULT_REGION : region;
      }
      return async () => {
        try {
          return await region();
        } catch (e) {
          return ASSUME_ROLE_DEFAULT_REGION;
        }
      };
    };
    var getDefaultRoleAssumer = (stsOptions, stsClientCtor) => {
      let stsClient;
      let closureSourceCreds;
      return async (sourceCreds, params) => {
        closureSourceCreds = sourceCreds;
        if (!stsClient) {
          const { logger, region, requestHandler } = stsOptions;
          stsClient = new stsClientCtor({
            logger,
            credentialDefaultProvider: () => async () => closureSourceCreds,
            region: decorateDefaultRegion(region || stsOptions.region),
            ...requestHandler ? { requestHandler } : {}
          });
        }
        const { Credentials } = await stsClient.send(new AssumeRoleCommand_1.AssumeRoleCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
          throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
        }
        return {
          accessKeyId: Credentials.AccessKeyId,
          secretAccessKey: Credentials.SecretAccessKey,
          sessionToken: Credentials.SessionToken,
          expiration: Credentials.Expiration
        };
      };
    };
    exports.getDefaultRoleAssumer = getDefaultRoleAssumer;
    var getDefaultRoleAssumerWithWebIdentity = (stsOptions, stsClientCtor) => {
      let stsClient;
      return async (params) => {
        if (!stsClient) {
          const { logger, region, requestHandler } = stsOptions;
          stsClient = new stsClientCtor({
            logger,
            region: decorateDefaultRegion(region || stsOptions.region),
            ...requestHandler ? { requestHandler } : {}
          });
        }
        const { Credentials } = await stsClient.send(new AssumeRoleWithWebIdentityCommand_1.AssumeRoleWithWebIdentityCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
          throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
        }
        return {
          accessKeyId: Credentials.AccessKeyId,
          secretAccessKey: Credentials.SecretAccessKey,
          sessionToken: Credentials.SessionToken,
          expiration: Credentials.Expiration
        };
      };
    };
    exports.getDefaultRoleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity;
    var decorateDefaultCredentialProvider = (provider) => (input) => provider({
      roleAssumer: (0, exports.getDefaultRoleAssumer)(input, input.stsClientCtor),
      roleAssumerWithWebIdentity: (0, exports.getDefaultRoleAssumerWithWebIdentity)(input, input.stsClientCtor),
      ...input
    });
    exports.decorateDefaultCredentialProvider = decorateDefaultCredentialProvider;
  }
});

// node_modules/@aws-sdk/core/dist-cjs/client/emitWarningIfUnsupportedVersion.js
var require_emitWarningIfUnsupportedVersion2 = __commonJS({
  "node_modules/@aws-sdk/core/dist-cjs/client/emitWarningIfUnsupportedVersion.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.emitWarningIfUnsupportedVersion = void 0;
    var warningEmitted = false;
    var emitWarningIfUnsupportedVersion = (version2) => {
      if (version2 && !warningEmitted && parseInt(version2.substring(1, version2.indexOf("."))) < 16) {
        warningEmitted = true;
        process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 14.x on May 1, 2024.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to an active Node.js LTS version.

More information can be found at: https://a.co/dzr2AJd`);
      }
    };
    exports.emitWarningIfUnsupportedVersion = emitWarningIfUnsupportedVersion;
  }
});

// node_modules/@aws-sdk/core/dist-cjs/client/index.js
var require_client3 = __commonJS({
  "node_modules/@aws-sdk/core/dist-cjs/client/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_emitWarningIfUnsupportedVersion2(), exports);
  }
});

// node_modules/@aws-sdk/core/dist-cjs/protocols/coercing-serializers.js
var require_coercing_serializers = __commonJS({
  "node_modules/@aws-sdk/core/dist-cjs/protocols/coercing-serializers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._toNum = exports._toBool = exports._toStr = void 0;
    var _toStr = (val2) => {
      if (val2 == null) {
        return val2;
      }
      if (typeof val2 === "number" || typeof val2 === "bigint") {
        const warning = new Error(`Received number ${val2} where a string was expected.`);
        warning.name = "Warning";
        console.warn(warning);
        return String(val2);
      }
      if (typeof val2 === "boolean") {
        const warning = new Error(`Received boolean ${val2} where a string was expected.`);
        warning.name = "Warning";
        console.warn(warning);
        return String(val2);
      }
      return val2;
    };
    exports._toStr = _toStr;
    var _toBool = (val2) => {
      if (val2 == null) {
        return val2;
      }
      if (typeof val2 === "number") {
      }
      if (typeof val2 === "string") {
        const lowercase = val2.toLowerCase();
        if (val2 !== "" && lowercase !== "false" && lowercase !== "true") {
          const warning = new Error(`Received string "${val2}" where a boolean was expected.`);
          warning.name = "Warning";
          console.warn(warning);
        }
        return val2 !== "" && lowercase !== "false";
      }
      return val2;
    };
    exports._toBool = _toBool;
    var _toNum = (val2) => {
      if (val2 == null) {
        return val2;
      }
      if (typeof val2 === "boolean") {
      }
      if (typeof val2 === "string") {
        const num = Number(val2);
        if (num.toString() !== val2) {
          const warning = new Error(`Received string "${val2}" where a number was expected.`);
          warning.name = "Warning";
          console.warn(warning);
          return val2;
        }
        return num;
      }
      return val2;
    };
    exports._toNum = _toNum;
  }
});

// node_modules/@aws-sdk/core/dist-cjs/protocols/json/awsExpectUnion.js
var require_awsExpectUnion = __commonJS({
  "node_modules/@aws-sdk/core/dist-cjs/protocols/json/awsExpectUnion.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.awsExpectUnion = void 0;
    var smithy_client_1 = require_dist_cjs37();
    var awsExpectUnion = (value) => {
      if (value == null) {
        return void 0;
      }
      if (typeof value === "object" && "__type" in value) {
        delete value.__type;
      }
      return (0, smithy_client_1.expectUnion)(value);
    };
    exports.awsExpectUnion = awsExpectUnion;
  }
});

// node_modules/@aws-sdk/core/dist-cjs/protocols/index.js
var require_protocols = __commonJS({
  "node_modules/@aws-sdk/core/dist-cjs/protocols/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_coercing_serializers(), exports);
    tslib_1.__exportStar(require_awsExpectUnion(), exports);
  }
});

// node_modules/@aws-sdk/core/dist-cjs/index.js
var require_dist_cjs39 = __commonJS({
  "node_modules/@aws-sdk/core/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_client3(), exports);
    tslib_1.__exportStar(require_protocols(), exports);
  }
});

// node_modules/@aws-sdk/credential-provider-env/dist-cjs/fromEnv.js
var require_fromEnv2 = __commonJS({
  "node_modules/@aws-sdk/credential-provider-env/dist-cjs/fromEnv.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromEnv = exports.ENV_EXPIRATION = exports.ENV_SESSION = exports.ENV_SECRET = exports.ENV_KEY = void 0;
    var property_provider_1 = require_dist_cjs6();
    exports.ENV_KEY = "AWS_ACCESS_KEY_ID";
    exports.ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
    exports.ENV_SESSION = "AWS_SESSION_TOKEN";
    exports.ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
    var fromEnv = () => async () => {
      const accessKeyId = process.env[exports.ENV_KEY];
      const secretAccessKey = process.env[exports.ENV_SECRET];
      const sessionToken = process.env[exports.ENV_SESSION];
      const expiry = process.env[exports.ENV_EXPIRATION];
      if (accessKeyId && secretAccessKey) {
        return {
          accessKeyId,
          secretAccessKey,
          ...sessionToken && { sessionToken },
          ...expiry && { expiration: new Date(expiry) }
        };
      }
      throw new property_provider_1.CredentialsProviderError("Unable to find environment variable credentials.");
    };
    exports.fromEnv = fromEnv;
  }
});

// node_modules/@aws-sdk/credential-provider-env/dist-cjs/index.js
var require_dist_cjs40 = __commonJS({
  "node_modules/@aws-sdk/credential-provider-env/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_fromEnv2(), exports);
  }
});

// node_modules/@smithy/credential-provider-imds/dist-cjs/remoteProvider/httpRequest.js
var require_httpRequest2 = __commonJS({
  "node_modules/@smithy/credential-provider-imds/dist-cjs/remoteProvider/httpRequest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.httpRequest = void 0;
    var property_provider_1 = require_dist_cjs6();
    var buffer_1 = require("buffer");
    var http_1 = require("http");
    function httpRequest(options) {
      return new Promise((resolve, reject) => {
        var _a;
        const req = (0, http_1.request)({
          method: "GET",
          ...options,
          hostname: (_a = options.hostname) === null || _a === void 0 ? void 0 : _a.replace(/^\[(.+)\]$/, "$1")
        });
        req.on("error", (err) => {
          reject(Object.assign(new property_provider_1.ProviderError("Unable to connect to instance metadata service"), err));
          req.destroy();
        });
        req.on("timeout", () => {
          reject(new property_provider_1.ProviderError("TimeoutError from instance metadata service"));
          req.destroy();
        });
        req.on("response", (res) => {
          const { statusCode = 400 } = res;
          if (statusCode < 200 || 300 <= statusCode) {
            reject(Object.assign(new property_provider_1.ProviderError("Error response received from instance metadata service"), { statusCode }));
            req.destroy();
          }
          const chunks = [];
          res.on("data", (chunk) => {
            chunks.push(chunk);
          });
          res.on("end", () => {
            resolve(buffer_1.Buffer.concat(chunks));
            req.destroy();
          });
        });
        req.end();
      });
    }
    exports.httpRequest = httpRequest;
  }
});

// node_modules/@smithy/credential-provider-imds/dist-cjs/remoteProvider/ImdsCredentials.js
var require_ImdsCredentials = __commonJS({
  "node_modules/@smithy/credential-provider-imds/dist-cjs/remoteProvider/ImdsCredentials.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromImdsCredentials = exports.isImdsCredentials = void 0;
    var isImdsCredentials = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.AccessKeyId === "string" && typeof arg.SecretAccessKey === "string" && typeof arg.Token === "string" && typeof arg.Expiration === "string";
    exports.isImdsCredentials = isImdsCredentials;
    var fromImdsCredentials = (creds) => ({
      accessKeyId: creds.AccessKeyId,
      secretAccessKey: creds.SecretAccessKey,
      sessionToken: creds.Token,
      expiration: new Date(creds.Expiration)
    });
    exports.fromImdsCredentials = fromImdsCredentials;
  }
});

// node_modules/@smithy/credential-provider-imds/dist-cjs/remoteProvider/RemoteProviderInit.js
var require_RemoteProviderInit = __commonJS({
  "node_modules/@smithy/credential-provider-imds/dist-cjs/remoteProvider/RemoteProviderInit.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.providerConfigFromInit = exports.DEFAULT_MAX_RETRIES = exports.DEFAULT_TIMEOUT = void 0;
    exports.DEFAULT_TIMEOUT = 1e3;
    exports.DEFAULT_MAX_RETRIES = 0;
    var providerConfigFromInit = ({ maxRetries = exports.DEFAULT_MAX_RETRIES, timeout = exports.DEFAULT_TIMEOUT }) => ({ maxRetries, timeout });
    exports.providerConfigFromInit = providerConfigFromInit;
  }
});

// node_modules/@smithy/credential-provider-imds/dist-cjs/remoteProvider/retry.js
var require_retry3 = __commonJS({
  "node_modules/@smithy/credential-provider-imds/dist-cjs/remoteProvider/retry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.retry = void 0;
    var retry = (toRetry, maxRetries) => {
      let promise = toRetry();
      for (let i = 0; i < maxRetries; i++) {
        promise = promise.catch(toRetry);
      }
      return promise;
    };
    exports.retry = retry;
  }
});

// node_modules/@smithy/credential-provider-imds/dist-cjs/fromContainerMetadata.js
var require_fromContainerMetadata = __commonJS({
  "node_modules/@smithy/credential-provider-imds/dist-cjs/fromContainerMetadata.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromContainerMetadata = exports.ENV_CMDS_AUTH_TOKEN = exports.ENV_CMDS_RELATIVE_URI = exports.ENV_CMDS_FULL_URI = void 0;
    var property_provider_1 = require_dist_cjs6();
    var url_1 = require("url");
    var httpRequest_1 = require_httpRequest2();
    var ImdsCredentials_1 = require_ImdsCredentials();
    var RemoteProviderInit_1 = require_RemoteProviderInit();
    var retry_1 = require_retry3();
    exports.ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
    exports.ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
    exports.ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
    var fromContainerMetadata = (init = {}) => {
      const { timeout, maxRetries } = (0, RemoteProviderInit_1.providerConfigFromInit)(init);
      return () => (0, retry_1.retry)(async () => {
        const requestOptions = await getCmdsUri();
        const credsResponse = JSON.parse(await requestFromEcsImds(timeout, requestOptions));
        if (!(0, ImdsCredentials_1.isImdsCredentials)(credsResponse)) {
          throw new property_provider_1.CredentialsProviderError("Invalid response received from instance metadata service.");
        }
        return (0, ImdsCredentials_1.fromImdsCredentials)(credsResponse);
      }, maxRetries);
    };
    exports.fromContainerMetadata = fromContainerMetadata;
    var requestFromEcsImds = async (timeout, options) => {
      if (process.env[exports.ENV_CMDS_AUTH_TOKEN]) {
        options.headers = {
          ...options.headers,
          Authorization: process.env[exports.ENV_CMDS_AUTH_TOKEN]
        };
      }
      const buffer = await (0, httpRequest_1.httpRequest)({
        ...options,
        timeout
      });
      return buffer.toString();
    };
    var CMDS_IP = "169.254.170.2";
    var GREENGRASS_HOSTS = {
      localhost: true,
      "127.0.0.1": true
    };
    var GREENGRASS_PROTOCOLS = {
      "http:": true,
      "https:": true
    };
    var getCmdsUri = async () => {
      if (process.env[exports.ENV_CMDS_RELATIVE_URI]) {
        return {
          hostname: CMDS_IP,
          path: process.env[exports.ENV_CMDS_RELATIVE_URI]
        };
      }
      if (process.env[exports.ENV_CMDS_FULL_URI]) {
        const parsed = (0, url_1.parse)(process.env[exports.ENV_CMDS_FULL_URI]);
        if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
          throw new property_provider_1.CredentialsProviderError(`${parsed.hostname} is not a valid container metadata service hostname`, false);
        }
        if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
          throw new property_provider_1.CredentialsProviderError(`${parsed.protocol} is not a valid container metadata service protocol`, false);
        }
        return {
          ...parsed,
          port: parsed.port ? parseInt(parsed.port, 10) : void 0
        };
      }
      throw new property_provider_1.CredentialsProviderError(`The container metadata credential provider cannot be used unless the ${exports.ENV_CMDS_RELATIVE_URI} or ${exports.ENV_CMDS_FULL_URI} environment variable is set`, false);
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-cjs/error/InstanceMetadataV1FallbackError.js
var require_InstanceMetadataV1FallbackError = __commonJS({
  "node_modules/@smithy/credential-provider-imds/dist-cjs/error/InstanceMetadataV1FallbackError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InstanceMetadataV1FallbackError = void 0;
    var property_provider_1 = require_dist_cjs6();
    var InstanceMetadataV1FallbackError = class _InstanceMetadataV1FallbackError extends property_provider_1.CredentialsProviderError {
      constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "InstanceMetadataV1FallbackError";
        Object.setPrototypeOf(this, _InstanceMetadataV1FallbackError.prototype);
      }
    };
    exports.InstanceMetadataV1FallbackError = InstanceMetadataV1FallbackError;
  }
});

// node_modules/@smithy/credential-provider-imds/dist-cjs/config/Endpoint.js
var require_Endpoint = __commonJS({
  "node_modules/@smithy/credential-provider-imds/dist-cjs/config/Endpoint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Endpoint = void 0;
    var Endpoint;
    (function(Endpoint2) {
      Endpoint2["IPv4"] = "http://169.254.169.254";
      Endpoint2["IPv6"] = "http://[fd00:ec2::254]";
    })(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
  }
});

// node_modules/@smithy/credential-provider-imds/dist-cjs/config/EndpointConfigOptions.js
var require_EndpointConfigOptions = __commonJS({
  "node_modules/@smithy/credential-provider-imds/dist-cjs/config/EndpointConfigOptions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ENDPOINT_CONFIG_OPTIONS = exports.CONFIG_ENDPOINT_NAME = exports.ENV_ENDPOINT_NAME = void 0;
    exports.ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
    exports.CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
    exports.ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => env[exports.ENV_ENDPOINT_NAME],
      configFileSelector: (profile) => profile[exports.CONFIG_ENDPOINT_NAME],
      default: void 0
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-cjs/config/EndpointMode.js
var require_EndpointMode = __commonJS({
  "node_modules/@smithy/credential-provider-imds/dist-cjs/config/EndpointMode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EndpointMode = void 0;
    var EndpointMode;
    (function(EndpointMode2) {
      EndpointMode2["IPv4"] = "IPv4";
      EndpointMode2["IPv6"] = "IPv6";
    })(EndpointMode = exports.EndpointMode || (exports.EndpointMode = {}));
  }
});

// node_modules/@smithy/credential-provider-imds/dist-cjs/config/EndpointModeConfigOptions.js
var require_EndpointModeConfigOptions = __commonJS({
  "node_modules/@smithy/credential-provider-imds/dist-cjs/config/EndpointModeConfigOptions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ENDPOINT_MODE_CONFIG_OPTIONS = exports.CONFIG_ENDPOINT_MODE_NAME = exports.ENV_ENDPOINT_MODE_NAME = void 0;
    var EndpointMode_1 = require_EndpointMode();
    exports.ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
    exports.CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
    exports.ENDPOINT_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => env[exports.ENV_ENDPOINT_MODE_NAME],
      configFileSelector: (profile) => profile[exports.CONFIG_ENDPOINT_MODE_NAME],
      default: EndpointMode_1.EndpointMode.IPv4
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-cjs/utils/getInstanceMetadataEndpoint.js
var require_getInstanceMetadataEndpoint = __commonJS({
  "node_modules/@smithy/credential-provider-imds/dist-cjs/utils/getInstanceMetadataEndpoint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getInstanceMetadataEndpoint = void 0;
    var node_config_provider_1 = require_dist_cjs24();
    var url_parser_1 = require_dist_cjs26();
    var Endpoint_1 = require_Endpoint();
    var EndpointConfigOptions_1 = require_EndpointConfigOptions();
    var EndpointMode_1 = require_EndpointMode();
    var EndpointModeConfigOptions_1 = require_EndpointModeConfigOptions();
    var getInstanceMetadataEndpoint = async () => (0, url_parser_1.parseUrl)(await getFromEndpointConfig() || await getFromEndpointModeConfig());
    exports.getInstanceMetadataEndpoint = getInstanceMetadataEndpoint;
    var getFromEndpointConfig = async () => (0, node_config_provider_1.loadConfig)(EndpointConfigOptions_1.ENDPOINT_CONFIG_OPTIONS)();
    var getFromEndpointModeConfig = async () => {
      const endpointMode = await (0, node_config_provider_1.loadConfig)(EndpointModeConfigOptions_1.ENDPOINT_MODE_CONFIG_OPTIONS)();
      switch (endpointMode) {
        case EndpointMode_1.EndpointMode.IPv4:
          return Endpoint_1.Endpoint.IPv4;
        case EndpointMode_1.EndpointMode.IPv6:
          return Endpoint_1.Endpoint.IPv6;
        default:
          throw new Error(`Unsupported endpoint mode: ${endpointMode}. Select from ${Object.values(EndpointMode_1.EndpointMode)}`);
      }
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-cjs/utils/getExtendedInstanceMetadataCredentials.js
var require_getExtendedInstanceMetadataCredentials = __commonJS({
  "node_modules/@smithy/credential-provider-imds/dist-cjs/utils/getExtendedInstanceMetadataCredentials.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getExtendedInstanceMetadataCredentials = void 0;
    var STATIC_STABILITY_REFRESH_INTERVAL_SECONDS = 5 * 60;
    var STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS = 5 * 60;
    var STATIC_STABILITY_DOC_URL = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html";
    var getExtendedInstanceMetadataCredentials = (credentials, logger) => {
      var _a;
      const refreshInterval = STATIC_STABILITY_REFRESH_INTERVAL_SECONDS + Math.floor(Math.random() * STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS);
      const newExpiration = new Date(Date.now() + refreshInterval * 1e3);
      logger.warn("Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(newExpiration)}.\nFor more information, please visit: " + STATIC_STABILITY_DOC_URL);
      const originalExpiration = (_a = credentials.originalExpiration) !== null && _a !== void 0 ? _a : credentials.expiration;
      return {
        ...credentials,
        ...originalExpiration ? { originalExpiration } : {},
        expiration: newExpiration
      };
    };
    exports.getExtendedInstanceMetadataCredentials = getExtendedInstanceMetadataCredentials;
  }
});

// node_modules/@smithy/credential-provider-imds/dist-cjs/utils/staticStabilityProvider.js
var require_staticStabilityProvider = __commonJS({
  "node_modules/@smithy/credential-provider-imds/dist-cjs/utils/staticStabilityProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.staticStabilityProvider = void 0;
    var getExtendedInstanceMetadataCredentials_1 = require_getExtendedInstanceMetadataCredentials();
    var staticStabilityProvider = (provider, options = {}) => {
      const logger = (options === null || options === void 0 ? void 0 : options.logger) || console;
      let pastCredentials;
      return async () => {
        let credentials;
        try {
          credentials = await provider();
          if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
            credentials = (0, getExtendedInstanceMetadataCredentials_1.getExtendedInstanceMetadataCredentials)(credentials, logger);
          }
        } catch (e) {
          if (pastCredentials) {
            logger.warn("Credential renew failed: ", e);
            credentials = (0, getExtendedInstanceMetadataCredentials_1.getExtendedInstanceMetadataCredentials)(pastCredentials, logger);
          } else {
            throw e;
          }
        }
        pastCredentials = credentials;
        return credentials;
      };
    };
    exports.staticStabilityProvider = staticStabilityProvider;
  }
});

// node_modules/@smithy/credential-provider-imds/dist-cjs/fromInstanceMetadata.js
var require_fromInstanceMetadata = __commonJS({
  "node_modules/@smithy/credential-provider-imds/dist-cjs/fromInstanceMetadata.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromInstanceMetadata = void 0;
    var node_config_provider_1 = require_dist_cjs24();
    var property_provider_1 = require_dist_cjs6();
    var InstanceMetadataV1FallbackError_1 = require_InstanceMetadataV1FallbackError();
    var httpRequest_1 = require_httpRequest2();
    var ImdsCredentials_1 = require_ImdsCredentials();
    var RemoteProviderInit_1 = require_RemoteProviderInit();
    var retry_1 = require_retry3();
    var getInstanceMetadataEndpoint_1 = require_getInstanceMetadataEndpoint();
    var staticStabilityProvider_1 = require_staticStabilityProvider();
    var IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
    var IMDS_TOKEN_PATH = "/latest/api/token";
    var AWS_EC2_METADATA_V1_DISABLED = "AWS_EC2_METADATA_V1_DISABLED";
    var PROFILE_AWS_EC2_METADATA_V1_DISABLED = "ec2_metadata_v1_disabled";
    var X_AWS_EC2_METADATA_TOKEN = "x-aws-ec2-metadata-token";
    var fromInstanceMetadata = (init = {}) => (0, staticStabilityProvider_1.staticStabilityProvider)(getInstanceImdsProvider(init), { logger: init.logger });
    exports.fromInstanceMetadata = fromInstanceMetadata;
    var getInstanceImdsProvider = (init) => {
      let disableFetchToken = false;
      const { logger, profile } = init;
      const { timeout, maxRetries } = (0, RemoteProviderInit_1.providerConfigFromInit)(init);
      const getCredentials = async (maxRetries2, options) => {
        var _a;
        const isImdsV1Fallback = disableFetchToken || ((_a = options.headers) === null || _a === void 0 ? void 0 : _a[X_AWS_EC2_METADATA_TOKEN]) == null;
        if (isImdsV1Fallback) {
          let fallbackBlockedFromProfile = false;
          let fallbackBlockedFromProcessEnv = false;
          const configValue = await (0, node_config_provider_1.loadConfig)({
            environmentVariableSelector: (env) => {
              const envValue = env[AWS_EC2_METADATA_V1_DISABLED];
              fallbackBlockedFromProcessEnv = !!envValue && envValue !== "false";
              if (envValue === void 0) {
                throw new property_provider_1.CredentialsProviderError(`${AWS_EC2_METADATA_V1_DISABLED} not set in env, checking config file next.`);
              }
              return fallbackBlockedFromProcessEnv;
            },
            configFileSelector: (profile2) => {
              const profileValue = profile2[PROFILE_AWS_EC2_METADATA_V1_DISABLED];
              fallbackBlockedFromProfile = !!profileValue && profileValue !== "false";
              return fallbackBlockedFromProfile;
            },
            default: false
          }, {
            profile
          })();
          if (init.ec2MetadataV1Disabled || configValue) {
            const causes = [];
            if (init.ec2MetadataV1Disabled)
              causes.push("credential provider initialization (runtime option ec2MetadataV1Disabled)");
            if (fallbackBlockedFromProfile)
              causes.push(`config file profile (${PROFILE_AWS_EC2_METADATA_V1_DISABLED})`);
            if (fallbackBlockedFromProcessEnv)
              causes.push(`process environment variable (${AWS_EC2_METADATA_V1_DISABLED})`);
            throw new InstanceMetadataV1FallbackError_1.InstanceMetadataV1FallbackError(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${causes.join(", ")}].`);
          }
        }
        const imdsProfile = (await (0, retry_1.retry)(async () => {
          let profile2;
          try {
            profile2 = await getProfile(options);
          } catch (err) {
            if (err.statusCode === 401) {
              disableFetchToken = false;
            }
            throw err;
          }
          return profile2;
        }, maxRetries2)).trim();
        return (0, retry_1.retry)(async () => {
          let creds;
          try {
            creds = await getCredentialsFromProfile(imdsProfile, options);
          } catch (err) {
            if (err.statusCode === 401) {
              disableFetchToken = false;
            }
            throw err;
          }
          return creds;
        }, maxRetries2);
      };
      return async () => {
        const endpoint = await (0, getInstanceMetadataEndpoint_1.getInstanceMetadataEndpoint)();
        if (disableFetchToken) {
          logger === null || logger === void 0 ? void 0 : logger.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)");
          return getCredentials(maxRetries, { ...endpoint, timeout });
        } else {
          let token;
          try {
            token = (await getMetadataToken({ ...endpoint, timeout })).toString();
          } catch (error) {
            if ((error === null || error === void 0 ? void 0 : error.statusCode) === 400) {
              throw Object.assign(error, {
                message: "EC2 Metadata token request returned error"
              });
            } else if (error.message === "TimeoutError" || [403, 404, 405].includes(error.statusCode)) {
              disableFetchToken = true;
            }
            logger === null || logger === void 0 ? void 0 : logger.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)");
            return getCredentials(maxRetries, { ...endpoint, timeout });
          }
          return getCredentials(maxRetries, {
            ...endpoint,
            headers: {
              [X_AWS_EC2_METADATA_TOKEN]: token
            },
            timeout
          });
        }
      };
    };
    var getMetadataToken = async (options) => (0, httpRequest_1.httpRequest)({
      ...options,
      path: IMDS_TOKEN_PATH,
      method: "PUT",
      headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "21600"
      }
    });
    var getProfile = async (options) => (await (0, httpRequest_1.httpRequest)({ ...options, path: IMDS_PATH })).toString();
    var getCredentialsFromProfile = async (profile, options) => {
      const credsResponse = JSON.parse((await (0, httpRequest_1.httpRequest)({
        ...options,
        path: IMDS_PATH + profile
      })).toString());
      if (!(0, ImdsCredentials_1.isImdsCredentials)(credsResponse)) {
        throw new property_provider_1.CredentialsProviderError("Invalid response received from instance metadata service.");
      }
      return (0, ImdsCredentials_1.fromImdsCredentials)(credsResponse);
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-cjs/types.js
var require_types7 = __commonJS({
  "node_modules/@smithy/credential-provider-imds/dist-cjs/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@smithy/credential-provider-imds/dist-cjs/index.js
var require_dist_cjs41 = __commonJS({
  "node_modules/@smithy/credential-provider-imds/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getInstanceMetadataEndpoint = exports.httpRequest = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_fromContainerMetadata(), exports);
    tslib_1.__exportStar(require_fromInstanceMetadata(), exports);
    tslib_1.__exportStar(require_RemoteProviderInit(), exports);
    tslib_1.__exportStar(require_types7(), exports);
    var httpRequest_1 = require_httpRequest2();
    Object.defineProperty(exports, "httpRequest", { enumerable: true, get: function() {
      return httpRequest_1.httpRequest;
    } });
    var getInstanceMetadataEndpoint_1 = require_getInstanceMetadataEndpoint();
    Object.defineProperty(exports, "getInstanceMetadataEndpoint", { enumerable: true, get: function() {
      return getInstanceMetadataEndpoint_1.getInstanceMetadataEndpoint;
    } });
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-cjs/resolveCredentialSource.js
var require_resolveCredentialSource = __commonJS({
  "node_modules/@aws-sdk/credential-provider-ini/dist-cjs/resolveCredentialSource.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveCredentialSource = void 0;
    var credential_provider_env_1 = require_dist_cjs40();
    var credential_provider_imds_1 = require_dist_cjs41();
    var property_provider_1 = require_dist_cjs6();
    var resolveCredentialSource = (credentialSource, profileName) => {
      const sourceProvidersMap = {
        EcsContainer: credential_provider_imds_1.fromContainerMetadata,
        Ec2InstanceMetadata: credential_provider_imds_1.fromInstanceMetadata,
        Environment: credential_provider_env_1.fromEnv
      };
      if (credentialSource in sourceProvidersMap) {
        return sourceProvidersMap[credentialSource]();
      } else {
        throw new property_provider_1.CredentialsProviderError(`Unsupported credential source in profile ${profileName}. Got ${credentialSource}, expected EcsContainer or Ec2InstanceMetadata or Environment.`);
      }
    };
    exports.resolveCredentialSource = resolveCredentialSource;
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-cjs/resolveAssumeRoleCredentials.js
var require_resolveAssumeRoleCredentials = __commonJS({
  "node_modules/@aws-sdk/credential-provider-ini/dist-cjs/resolveAssumeRoleCredentials.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveAssumeRoleCredentials = exports.isAssumeRoleProfile = void 0;
    var property_provider_1 = require_dist_cjs6();
    var shared_ini_file_loader_1 = require_dist_cjs23();
    var resolveCredentialSource_1 = require_resolveCredentialSource();
    var resolveProfileData_1 = require_resolveProfileData();
    var isAssumeRoleProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof arg.external_id) > -1 && ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 && (isAssumeRoleWithSourceProfile(arg) || isAssumeRoleWithProviderProfile(arg));
    exports.isAssumeRoleProfile = isAssumeRoleProfile;
    var isAssumeRoleWithSourceProfile = (arg) => typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
    var isAssumeRoleWithProviderProfile = (arg) => typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
    var resolveAssumeRoleCredentials = async (profileName, profiles, options, visitedProfiles = {}) => {
      const data = profiles[profileName];
      if (!options.roleAssumer) {
        throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} requires a role to be assumed, but no role assumption callback was provided.`, false);
      }
      const { source_profile } = data;
      if (source_profile && source_profile in visitedProfiles) {
        throw new property_provider_1.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${(0, shared_ini_file_loader_1.getProfileName)(options)}. Profiles visited: ` + Object.keys(visitedProfiles).join(", "), false);
      }
      const sourceCredsProvider = source_profile ? (0, resolveProfileData_1.resolveProfileData)(source_profile, profiles, options, {
        ...visitedProfiles,
        [source_profile]: true
      }) : (0, resolveCredentialSource_1.resolveCredentialSource)(data.credential_source, profileName)();
      const params = {
        RoleArn: data.role_arn,
        RoleSessionName: data.role_session_name || `aws-sdk-js-${Date.now()}`,
        ExternalId: data.external_id,
        DurationSeconds: parseInt(data.duration_seconds || "3600", 10)
      };
      const { mfa_serial } = data;
      if (mfa_serial) {
        if (!options.mfaCodeProvider) {
          throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`, false);
        }
        params.SerialNumber = mfa_serial;
        params.TokenCode = await options.mfaCodeProvider(mfa_serial);
      }
      const sourceCreds = await sourceCredsProvider;
      return options.roleAssumer(sourceCreds, params);
    };
    exports.resolveAssumeRoleCredentials = resolveAssumeRoleCredentials;
  }
});

// node_modules/@aws-sdk/credential-provider-process/dist-cjs/getValidatedProcessCredentials.js
var require_getValidatedProcessCredentials = __commonJS({
  "node_modules/@aws-sdk/credential-provider-process/dist-cjs/getValidatedProcessCredentials.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getValidatedProcessCredentials = void 0;
    var getValidatedProcessCredentials = (profileName, data) => {
      if (data.Version !== 1) {
        throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
      }
      if (data.AccessKeyId === void 0 || data.SecretAccessKey === void 0) {
        throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
      }
      if (data.Expiration) {
        const currentTime = /* @__PURE__ */ new Date();
        const expireTime = new Date(data.Expiration);
        if (expireTime < currentTime) {
          throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
        }
      }
      return {
        accessKeyId: data.AccessKeyId,
        secretAccessKey: data.SecretAccessKey,
        ...data.SessionToken && { sessionToken: data.SessionToken },
        ...data.Expiration && { expiration: new Date(data.Expiration) }
      };
    };
    exports.getValidatedProcessCredentials = getValidatedProcessCredentials;
  }
});

// node_modules/@aws-sdk/credential-provider-process/dist-cjs/resolveProcessCredentials.js
var require_resolveProcessCredentials = __commonJS({
  "node_modules/@aws-sdk/credential-provider-process/dist-cjs/resolveProcessCredentials.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveProcessCredentials = void 0;
    var property_provider_1 = require_dist_cjs6();
    var child_process_1 = require("child_process");
    var util_1 = require("util");
    var getValidatedProcessCredentials_1 = require_getValidatedProcessCredentials();
    var resolveProcessCredentials = async (profileName, profiles) => {
      const profile = profiles[profileName];
      if (profiles[profileName]) {
        const credentialProcess = profile["credential_process"];
        if (credentialProcess !== void 0) {
          const execPromise = (0, util_1.promisify)(child_process_1.exec);
          try {
            const { stdout } = await execPromise(credentialProcess);
            let data;
            try {
              data = JSON.parse(stdout.trim());
            } catch (_a) {
              throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
            }
            return (0, getValidatedProcessCredentials_1.getValidatedProcessCredentials)(profileName, data);
          } catch (error) {
            throw new property_provider_1.CredentialsProviderError(error.message);
          }
        } else {
          throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} did not contain credential_process.`);
        }
      } else {
        throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} could not be found in shared credentials file.`);
      }
    };
    exports.resolveProcessCredentials = resolveProcessCredentials;
  }
});

// node_modules/@aws-sdk/credential-provider-process/dist-cjs/fromProcess.js
var require_fromProcess = __commonJS({
  "node_modules/@aws-sdk/credential-provider-process/dist-cjs/fromProcess.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromProcess = void 0;
    var shared_ini_file_loader_1 = require_dist_cjs23();
    var resolveProcessCredentials_1 = require_resolveProcessCredentials();
    var fromProcess = (init = {}) => async () => {
      const profiles = await (0, shared_ini_file_loader_1.parseKnownFiles)(init);
      return (0, resolveProcessCredentials_1.resolveProcessCredentials)((0, shared_ini_file_loader_1.getProfileName)(init), profiles);
    };
    exports.fromProcess = fromProcess;
  }
});

// node_modules/@aws-sdk/credential-provider-process/dist-cjs/index.js
var require_dist_cjs42 = __commonJS({
  "node_modules/@aws-sdk/credential-provider-process/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_fromProcess(), exports);
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-cjs/resolveProcessCredentials.js
var require_resolveProcessCredentials2 = __commonJS({
  "node_modules/@aws-sdk/credential-provider-ini/dist-cjs/resolveProcessCredentials.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveProcessCredentials = exports.isProcessProfile = void 0;
    var credential_provider_process_1 = require_dist_cjs42();
    var isProcessProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.credential_process === "string";
    exports.isProcessProfile = isProcessProfile;
    var resolveProcessCredentials = async (options, profile) => (0, credential_provider_process_1.fromProcess)({
      ...options,
      profile
    })();
    exports.resolveProcessCredentials = resolveProcessCredentials;
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-cjs/isSsoProfile.js
var require_isSsoProfile = __commonJS({
  "node_modules/@aws-sdk/credential-provider-sso/dist-cjs/isSsoProfile.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isSsoProfile = void 0;
    var isSsoProfile = (arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string");
    exports.isSsoProfile = isSsoProfile;
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/endpoint/EndpointParameters.js
var require_EndpointParameters3 = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/endpoint/EndpointParameters.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveClientEndpointParameters = void 0;
    var resolveClientEndpointParameters = (options) => {
      return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "awsssoportal"
      };
    };
    exports.resolveClientEndpointParameters = resolveClientEndpointParameters;
  }
});

// node_modules/@aws-sdk/client-sso/package.json
var require_package3 = __commonJS({
  "node_modules/@aws-sdk/client-sso/package.json"(exports, module2) {
    module2.exports = {
      name: "@aws-sdk/client-sso",
      description: "AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native",
      version: "3.451.0",
      scripts: {
        build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "tsc -p tsconfig.cjs.json",
        "build:docs": "typedoc",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo sso"
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: false,
      dependencies: {
        "@aws-crypto/sha256-browser": "3.0.0",
        "@aws-crypto/sha256-js": "3.0.0",
        "@aws-sdk/core": "3.451.0",
        "@aws-sdk/middleware-host-header": "3.451.0",
        "@aws-sdk/middleware-logger": "3.451.0",
        "@aws-sdk/middleware-recursion-detection": "3.451.0",
        "@aws-sdk/middleware-user-agent": "3.451.0",
        "@aws-sdk/region-config-resolver": "3.451.0",
        "@aws-sdk/types": "3.451.0",
        "@aws-sdk/util-endpoints": "3.451.0",
        "@aws-sdk/util-user-agent-browser": "3.451.0",
        "@aws-sdk/util-user-agent-node": "3.451.0",
        "@smithy/config-resolver": "^2.0.18",
        "@smithy/fetch-http-handler": "^2.2.6",
        "@smithy/hash-node": "^2.0.15",
        "@smithy/invalid-dependency": "^2.0.13",
        "@smithy/middleware-content-length": "^2.0.15",
        "@smithy/middleware-endpoint": "^2.2.0",
        "@smithy/middleware-retry": "^2.0.20",
        "@smithy/middleware-serde": "^2.0.13",
        "@smithy/middleware-stack": "^2.0.7",
        "@smithy/node-config-provider": "^2.1.5",
        "@smithy/node-http-handler": "^2.1.9",
        "@smithy/protocol-http": "^3.0.9",
        "@smithy/smithy-client": "^2.1.15",
        "@smithy/types": "^2.5.0",
        "@smithy/url-parser": "^2.0.13",
        "@smithy/util-base64": "^2.0.1",
        "@smithy/util-body-length-browser": "^2.0.0",
        "@smithy/util-body-length-node": "^2.1.0",
        "@smithy/util-defaults-mode-browser": "^2.0.19",
        "@smithy/util-defaults-mode-node": "^2.0.25",
        "@smithy/util-endpoints": "^1.0.4",
        "@smithy/util-retry": "^2.0.6",
        "@smithy/util-utf8": "^2.0.2",
        tslib: "^2.5.0"
      },
      devDependencies: {
        "@smithy/service-client-documentation-generator": "^2.0.0",
        "@tsconfig/node14": "1.0.3",
        "@types/node": "^14.14.31",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typedoc: "0.23.23",
        typescript: "~4.9.5"
      },
      engines: {
        node: ">=14.0.0"
      },
      typesVersions: {
        "<4.0": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "dist-*/**"
      ],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
      },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
      },
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-sso"
      }
    };
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-cjs/crt-availability.js
var require_crt_availability = __commonJS({
  "node_modules/@aws-sdk/util-user-agent-node/dist-cjs/crt-availability.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.crtAvailability = void 0;
    exports.crtAvailability = {
      isCrtAvailable: false
    };
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-cjs/is-crt-available.js
var require_is_crt_available = __commonJS({
  "node_modules/@aws-sdk/util-user-agent-node/dist-cjs/is-crt-available.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isCrtAvailable = void 0;
    var crt_availability_1 = require_crt_availability();
    var isCrtAvailable = () => {
      if (crt_availability_1.crtAvailability.isCrtAvailable) {
        return ["md/crt-avail"];
      }
      return null;
    };
    exports.isCrtAvailable = isCrtAvailable;
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-cjs/index.js
var require_dist_cjs43 = __commonJS({
  "node_modules/@aws-sdk/util-user-agent-node/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultUserAgent = exports.UA_APP_ID_INI_NAME = exports.UA_APP_ID_ENV_NAME = exports.crtAvailability = void 0;
    var node_config_provider_1 = require_dist_cjs24();
    var os_1 = require("os");
    var process_1 = require("process");
    var is_crt_available_1 = require_is_crt_available();
    var crt_availability_1 = require_crt_availability();
    Object.defineProperty(exports, "crtAvailability", { enumerable: true, get: function() {
      return crt_availability_1.crtAvailability;
    } });
    exports.UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
    exports.UA_APP_ID_INI_NAME = "sdk-ua-app-id";
    var defaultUserAgent = ({ serviceId, clientVersion }) => {
      const sections = [
        ["aws-sdk-js", clientVersion],
        ["ua", "2.0"],
        [`os/${(0, os_1.platform)()}`, (0, os_1.release)()],
        ["lang/js"],
        ["md/nodejs", `${process_1.versions.node}`]
      ];
      const crtAvailable = (0, is_crt_available_1.isCrtAvailable)();
      if (crtAvailable) {
        sections.push(crtAvailable);
      }
      if (serviceId) {
        sections.push([`api/${serviceId}`, clientVersion]);
      }
      if (process_1.env.AWS_EXECUTION_ENV) {
        sections.push([`exec-env/${process_1.env.AWS_EXECUTION_ENV}`]);
      }
      const appIdPromise = (0, node_config_provider_1.loadConfig)({
        environmentVariableSelector: (env) => env[exports.UA_APP_ID_ENV_NAME],
        configFileSelector: (profile) => profile[exports.UA_APP_ID_INI_NAME],
        default: void 0
      })();
      let resolvedUserAgent = void 0;
      return async () => {
        if (!resolvedUserAgent) {
          const appId = await appIdPromise;
          resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        }
        return resolvedUserAgent;
      };
    };
    exports.defaultUserAgent = defaultUserAgent;
  }
});

// node_modules/@smithy/hash-node/dist-cjs/index.js
var require_dist_cjs44 = __commonJS({
  "node_modules/@smithy/hash-node/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hash = void 0;
    var util_buffer_from_1 = require_dist_cjs12();
    var util_utf8_1 = require_dist_cjs13();
    var buffer_1 = require("buffer");
    var crypto_1 = require("crypto");
    var Hash = class {
      constructor(algorithmIdentifier, secret) {
        this.algorithmIdentifier = algorithmIdentifier;
        this.secret = secret;
        this.reset();
      }
      update(toHash, encoding) {
        this.hash.update((0, util_utf8_1.toUint8Array)(castSourceData(toHash, encoding)));
      }
      digest() {
        return Promise.resolve(this.hash.digest());
      }
      reset() {
        this.hash = this.secret ? (0, crypto_1.createHmac)(this.algorithmIdentifier, castSourceData(this.secret)) : (0, crypto_1.createHash)(this.algorithmIdentifier);
      }
    };
    exports.Hash = Hash;
    function castSourceData(toCast, encoding) {
      if (buffer_1.Buffer.isBuffer(toCast)) {
        return toCast;
      }
      if (typeof toCast === "string") {
        return (0, util_buffer_from_1.fromString)(toCast, encoding);
      }
      if (ArrayBuffer.isView(toCast)) {
        return (0, util_buffer_from_1.fromArrayBuffer)(toCast.buffer, toCast.byteOffset, toCast.byteLength);
      }
      return (0, util_buffer_from_1.fromArrayBuffer)(toCast);
    }
  }
});

// node_modules/@smithy/util-body-length-node/dist-cjs/calculateBodyLength.js
var require_calculateBodyLength = __commonJS({
  "node_modules/@smithy/util-body-length-node/dist-cjs/calculateBodyLength.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.calculateBodyLength = void 0;
    var fs_1 = require("fs");
    var calculateBodyLength = (body) => {
      if (!body) {
        return 0;
      }
      if (typeof body === "string") {
        return Buffer.from(body).length;
      } else if (typeof body.byteLength === "number") {
        return body.byteLength;
      } else if (typeof body.size === "number") {
        return body.size;
      } else if (typeof body.start === "number" && typeof body.end === "number") {
        return body.end + 1 - body.start;
      } else if (typeof body.path === "string" || Buffer.isBuffer(body.path)) {
        return (0, fs_1.lstatSync)(body.path).size;
      } else if (typeof body.fd === "number") {
        return (0, fs_1.fstatSync)(body.fd).size;
      }
      throw new Error(`Body Length computation failed for ${body}`);
    };
    exports.calculateBodyLength = calculateBodyLength;
  }
});

// node_modules/@smithy/util-body-length-node/dist-cjs/index.js
var require_dist_cjs45 = __commonJS({
  "node_modules/@smithy/util-body-length-node/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_calculateBodyLength(), exports);
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/endpoint/ruleset.js
var require_ruleset = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/endpoint/ruleset.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ruleSet = void 0;
    var u = "required";
    var v = "fn";
    var w = "argv";
    var x = "ref";
    var a = true;
    var b = "isSet";
    var c = "booleanEquals";
    var d = "error";
    var e = "endpoint";
    var f = "tree";
    var g = "PartitionResult";
    var h = "getAttr";
    var i = { [u]: false, "type": "String" };
    var j = { [u]: true, "default": false, "type": "Boolean" };
    var k = { [x]: "Endpoint" };
    var l = { [v]: c, [w]: [{ [x]: "UseFIPS" }, true] };
    var m = { [v]: c, [w]: [{ [x]: "UseDualStack" }, true] };
    var n = {};
    var o = { [v]: h, [w]: [{ [x]: g }, "supportsFIPS"] };
    var p = { [x]: g };
    var q = { [v]: c, [w]: [true, { [v]: h, [w]: [p, "supportsDualStack"] }] };
    var r = [l];
    var s = [m];
    var t = [{ [x]: "Region" }];
    var _data = { version: "1.0", parameters: { Region: i, UseDualStack: j, UseFIPS: j, Endpoint: i }, rules: [{ conditions: [{ [v]: b, [w]: [k] }], rules: [{ conditions: r, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: s, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: k, properties: n, headers: n }, type: e }], type: f }, { conditions: [{ [v]: b, [w]: t }], rules: [{ conditions: [{ [v]: "aws.partition", [w]: t, assign: g }], rules: [{ conditions: [l, m], rules: [{ conditions: [{ [v]: c, [w]: [a, o] }, q], rules: [{ endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: r, rules: [{ conditions: [{ [v]: c, [w]: [o, a] }], rules: [{ conditions: [{ [v]: "stringEquals", [w]: [{ [v]: h, [w]: [p, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://portal.sso.{Region}.amazonaws.com", properties: n, headers: n }, type: e }, { endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: s, rules: [{ conditions: [q], rules: [{ endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
    exports.ruleSet = _data;
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/endpoint/endpointResolver.js
var require_endpointResolver = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/endpoint/endpointResolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultEndpointResolver = void 0;
    var util_endpoints_1 = require_dist_cjs17();
    var ruleset_1 = require_ruleset();
    var defaultEndpointResolver = (endpointParams, context = {}) => {
      return (0, util_endpoints_1.resolveEndpoint)(ruleset_1.ruleSet, {
        endpointParams,
        logger: context.logger
      });
    };
    exports.defaultEndpointResolver = defaultEndpointResolver;
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/runtimeConfig.shared.js
var require_runtimeConfig_shared = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/runtimeConfig.shared.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRuntimeConfig = void 0;
    var smithy_client_1 = require_dist_cjs37();
    var url_parser_1 = require_dist_cjs26();
    var util_base64_1 = require_dist_cjs33();
    var util_utf8_1 = require_dist_cjs13();
    var endpointResolver_1 = require_endpointResolver();
    var getRuntimeConfig = (config) => {
      return {
        apiVersion: "2019-06-10",
        base64Decoder: (config == null ? void 0 : config.base64Decoder) ?? util_base64_1.fromBase64,
        base64Encoder: (config == null ? void 0 : config.base64Encoder) ?? util_base64_1.toBase64,
        disableHostPrefix: (config == null ? void 0 : config.disableHostPrefix) ?? false,
        endpointProvider: (config == null ? void 0 : config.endpointProvider) ?? endpointResolver_1.defaultEndpointResolver,
        extensions: (config == null ? void 0 : config.extensions) ?? [],
        logger: (config == null ? void 0 : config.logger) ?? new smithy_client_1.NoOpLogger(),
        serviceId: (config == null ? void 0 : config.serviceId) ?? "SSO",
        urlParser: (config == null ? void 0 : config.urlParser) ?? url_parser_1.parseUrl,
        utf8Decoder: (config == null ? void 0 : config.utf8Decoder) ?? util_utf8_1.fromUtf8,
        utf8Encoder: (config == null ? void 0 : config.utf8Encoder) ?? util_utf8_1.toUtf8
      };
    };
    exports.getRuntimeConfig = getRuntimeConfig;
  }
});

// node_modules/@smithy/util-defaults-mode-node/dist-cjs/constants.js
var require_constants7 = __commonJS({
  "node_modules/@smithy/util-defaults-mode-node/dist-cjs/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IMDS_REGION_PATH = exports.DEFAULTS_MODE_OPTIONS = exports.ENV_IMDS_DISABLED = exports.AWS_DEFAULT_REGION_ENV = exports.AWS_REGION_ENV = exports.AWS_EXECUTION_ENV = void 0;
    exports.AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
    exports.AWS_REGION_ENV = "AWS_REGION";
    exports.AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
    exports.ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
    exports.DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
    exports.IMDS_REGION_PATH = "/latest/meta-data/placement/region";
  }
});

// node_modules/@smithy/util-defaults-mode-node/dist-cjs/defaultsModeConfig.js
var require_defaultsModeConfig = __commonJS({
  "node_modules/@smithy/util-defaults-mode-node/dist-cjs/defaultsModeConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NODE_DEFAULTS_MODE_CONFIG_OPTIONS = void 0;
    var AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
    var AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";
    exports.NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => {
        return env[AWS_DEFAULTS_MODE_ENV];
      },
      configFileSelector: (profile) => {
        return profile[AWS_DEFAULTS_MODE_CONFIG];
      },
      default: "legacy"
    };
  }
});

// node_modules/@smithy/util-defaults-mode-node/dist-cjs/resolveDefaultsModeConfig.js
var require_resolveDefaultsModeConfig = __commonJS({
  "node_modules/@smithy/util-defaults-mode-node/dist-cjs/resolveDefaultsModeConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveDefaultsModeConfig = void 0;
    var config_resolver_1 = require_dist_cjs21();
    var credential_provider_imds_1 = require_dist_cjs41();
    var node_config_provider_1 = require_dist_cjs24();
    var property_provider_1 = require_dist_cjs6();
    var constants_1 = require_constants7();
    var defaultsModeConfig_1 = require_defaultsModeConfig();
    var resolveDefaultsModeConfig = ({ region = (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS), defaultsMode = (0, node_config_provider_1.loadConfig)(defaultsModeConfig_1.NODE_DEFAULTS_MODE_CONFIG_OPTIONS) } = {}) => (0, property_provider_1.memoize)(async () => {
      const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
      switch (mode === null || mode === void 0 ? void 0 : mode.toLowerCase()) {
        case "auto":
          return resolveNodeDefaultsModeAuto(region);
        case "in-region":
        case "cross-region":
        case "mobile":
        case "standard":
        case "legacy":
          return Promise.resolve(mode === null || mode === void 0 ? void 0 : mode.toLocaleLowerCase());
        case void 0:
          return Promise.resolve("legacy");
        default:
          throw new Error(`Invalid parameter for "defaultsMode", expect ${constants_1.DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
      }
    });
    exports.resolveDefaultsModeConfig = resolveDefaultsModeConfig;
    var resolveNodeDefaultsModeAuto = async (clientRegion) => {
      if (clientRegion) {
        const resolvedRegion = typeof clientRegion === "function" ? await clientRegion() : clientRegion;
        const inferredRegion = await inferPhysicalRegion();
        if (!inferredRegion) {
          return "standard";
        }
        if (resolvedRegion === inferredRegion) {
          return "in-region";
        } else {
          return "cross-region";
        }
      }
      return "standard";
    };
    var inferPhysicalRegion = async () => {
      var _a;
      if (process.env[constants_1.AWS_EXECUTION_ENV] && (process.env[constants_1.AWS_REGION_ENV] || process.env[constants_1.AWS_DEFAULT_REGION_ENV])) {
        return (_a = process.env[constants_1.AWS_REGION_ENV]) !== null && _a !== void 0 ? _a : process.env[constants_1.AWS_DEFAULT_REGION_ENV];
      }
      if (!process.env[constants_1.ENV_IMDS_DISABLED]) {
        try {
          const endpoint = await (0, credential_provider_imds_1.getInstanceMetadataEndpoint)();
          return (await (0, credential_provider_imds_1.httpRequest)({ ...endpoint, path: constants_1.IMDS_REGION_PATH })).toString();
        } catch (e) {
        }
      }
    };
  }
});

// node_modules/@smithy/util-defaults-mode-node/dist-cjs/index.js
var require_dist_cjs46 = __commonJS({
  "node_modules/@smithy/util-defaults-mode-node/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_resolveDefaultsModeConfig(), exports);
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/runtimeConfig.js
var require_runtimeConfig = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/runtimeConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRuntimeConfig = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var package_json_1 = tslib_1.__importDefault(require_package3());
    var core_1 = require_dist_cjs39();
    var util_user_agent_node_1 = require_dist_cjs43();
    var config_resolver_1 = require_dist_cjs21();
    var hash_node_1 = require_dist_cjs44();
    var middleware_retry_1 = require_dist_cjs31();
    var node_config_provider_1 = require_dist_cjs24();
    var node_http_handler_1 = require_dist_cjs35();
    var util_body_length_node_1 = require_dist_cjs45();
    var util_retry_1 = require_dist_cjs30();
    var runtimeConfig_shared_1 = require_runtimeConfig_shared();
    var smithy_client_1 = require_dist_cjs37();
    var util_defaults_mode_node_1 = require_dist_cjs46();
    var smithy_client_2 = require_dist_cjs37();
    var getRuntimeConfig = (config) => {
      (0, smithy_client_2.emitWarningIfUnsupportedVersion)(process.version);
      const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
      const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
      const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
      (0, core_1.emitWarningIfUnsupportedVersion)(process.version);
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: (config == null ? void 0 : config.bodyLengthChecker) ?? util_body_length_node_1.calculateBodyLength,
        defaultUserAgentProvider: (config == null ? void 0 : config.defaultUserAgentProvider) ?? (0, util_user_agent_node_1.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        maxAttempts: (config == null ? void 0 : config.maxAttempts) ?? (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: (config == null ? void 0 : config.region) ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: (config == null ? void 0 : config.requestHandler) ?? new node_http_handler_1.NodeHttpHandler(defaultConfigProvider),
        retryMode: (config == null ? void 0 : config.retryMode) ?? (0, node_config_provider_1.loadConfig)({
          ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || util_retry_1.DEFAULT_RETRY_MODE
        }),
        sha256: (config == null ? void 0 : config.sha256) ?? hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: (config == null ? void 0 : config.streamCollector) ?? node_http_handler_1.streamCollector,
        useDualstackEndpoint: (config == null ? void 0 : config.useDualstackEndpoint) ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: (config == null ? void 0 : config.useFipsEndpoint) ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      };
    };
    exports.getRuntimeConfig = getRuntimeConfig;
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-cjs/extensions/index.js
var require_extensions4 = __commonJS({
  "node_modules/@aws-sdk/region-config-resolver/dist-cjs/extensions/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveAwsRegionExtensionConfiguration = exports.getAwsRegionExtensionConfiguration = void 0;
    var getAwsRegionExtensionConfiguration = (runtimeConfig) => {
      let runtimeConfigRegion = async () => {
        if (runtimeConfig.region === void 0) {
          throw new Error("Region is missing from runtimeConfig");
        }
        const region = runtimeConfig.region;
        if (typeof region === "string") {
          return region;
        }
        return region();
      };
      return {
        setRegion(region) {
          runtimeConfigRegion = region;
        },
        region() {
          return runtimeConfigRegion;
        }
      };
    };
    exports.getAwsRegionExtensionConfiguration = getAwsRegionExtensionConfiguration;
    var resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
      return {
        region: awsRegionExtensionConfiguration.region()
      };
    };
    exports.resolveAwsRegionExtensionConfiguration = resolveAwsRegionExtensionConfiguration;
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-cjs/regionConfig/config.js
var require_config4 = __commonJS({
  "node_modules/@aws-sdk/region-config-resolver/dist-cjs/regionConfig/config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NODE_REGION_CONFIG_FILE_OPTIONS = exports.NODE_REGION_CONFIG_OPTIONS = exports.REGION_INI_NAME = exports.REGION_ENV_NAME = void 0;
    exports.REGION_ENV_NAME = "AWS_REGION";
    exports.REGION_INI_NAME = "region";
    exports.NODE_REGION_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => env[exports.REGION_ENV_NAME],
      configFileSelector: (profile) => profile[exports.REGION_INI_NAME],
      default: () => {
        throw new Error("Region is missing");
      }
    };
    exports.NODE_REGION_CONFIG_FILE_OPTIONS = {
      preferredFile: "credentials"
    };
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-cjs/regionConfig/isFipsRegion.js
var require_isFipsRegion2 = __commonJS({
  "node_modules/@aws-sdk/region-config-resolver/dist-cjs/regionConfig/isFipsRegion.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isFipsRegion = void 0;
    var isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));
    exports.isFipsRegion = isFipsRegion;
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-cjs/regionConfig/getRealRegion.js
var require_getRealRegion2 = __commonJS({
  "node_modules/@aws-sdk/region-config-resolver/dist-cjs/regionConfig/getRealRegion.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRealRegion = void 0;
    var isFipsRegion_1 = require_isFipsRegion2();
    var getRealRegion = (region) => (0, isFipsRegion_1.isFipsRegion)(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region;
    exports.getRealRegion = getRealRegion;
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-cjs/regionConfig/resolveRegionConfig.js
var require_resolveRegionConfig2 = __commonJS({
  "node_modules/@aws-sdk/region-config-resolver/dist-cjs/regionConfig/resolveRegionConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveRegionConfig = void 0;
    var getRealRegion_1 = require_getRealRegion2();
    var isFipsRegion_1 = require_isFipsRegion2();
    var resolveRegionConfig = (input) => {
      const { region, useFipsEndpoint } = input;
      if (!region) {
        throw new Error("Region is missing");
      }
      return {
        ...input,
        region: async () => {
          if (typeof region === "string") {
            return (0, getRealRegion_1.getRealRegion)(region);
          }
          const providedRegion = await region();
          return (0, getRealRegion_1.getRealRegion)(providedRegion);
        },
        useFipsEndpoint: async () => {
          const providedRegion = typeof region === "string" ? region : await region();
          if ((0, isFipsRegion_1.isFipsRegion)(providedRegion)) {
            return true;
          }
          return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        }
      };
    };
    exports.resolveRegionConfig = resolveRegionConfig;
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-cjs/regionConfig/index.js
var require_regionConfig2 = __commonJS({
  "node_modules/@aws-sdk/region-config-resolver/dist-cjs/regionConfig/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_config4(), exports);
    tslib_1.__exportStar(require_resolveRegionConfig2(), exports);
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-cjs/index.js
var require_dist_cjs47 = __commonJS({
  "node_modules/@aws-sdk/region-config-resolver/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_extensions4(), exports);
    tslib_1.__exportStar(require_regionConfig2(), exports);
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/runtimeExtensions.js
var require_runtimeExtensions = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/runtimeExtensions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveRuntimeExtensions = void 0;
    var region_config_resolver_1 = require_dist_cjs47();
    var protocol_http_1 = require_dist_cjs2();
    var smithy_client_1 = require_dist_cjs37();
    var asPartial = (t) => t;
    var resolveRuntimeExtensions = (runtimeConfig, extensions) => {
      const extensionConfiguration = {
        ...asPartial((0, region_config_resolver_1.getAwsRegionExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0, smithy_client_1.getDefaultExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0, protocol_http_1.getHttpHandlerExtensionConfiguration)(runtimeConfig))
      };
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return {
        ...runtimeConfig,
        ...(0, region_config_resolver_1.resolveAwsRegionExtensionConfiguration)(extensionConfiguration),
        ...(0, smithy_client_1.resolveDefaultRuntimeConfig)(extensionConfiguration),
        ...(0, protocol_http_1.resolveHttpHandlerRuntimeConfig)(extensionConfiguration)
      };
    };
    exports.resolveRuntimeExtensions = resolveRuntimeExtensions;
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/SSOClient.js
var require_SSOClient = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/SSOClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SSOClient = exports.__Client = void 0;
    var middleware_host_header_1 = require_dist_cjs3();
    var middleware_logger_1 = require_dist_cjs4();
    var middleware_recursion_detection_1 = require_dist_cjs5();
    var middleware_user_agent_1 = require_dist_cjs19();
    var config_resolver_1 = require_dist_cjs21();
    var middleware_content_length_1 = require_dist_cjs22();
    var middleware_endpoint_1 = require_dist_cjs28();
    var middleware_retry_1 = require_dist_cjs31();
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "__Client", { enumerable: true, get: function() {
      return smithy_client_1.Client;
    } });
    var EndpointParameters_1 = require_EndpointParameters3();
    var runtimeConfig_1 = require_runtimeConfig();
    var runtimeExtensions_1 = require_runtimeExtensions();
    var SSOClient = class extends smithy_client_1.Client {
      constructor(...[configuration]) {
        const _config_0 = (0, runtimeConfig_1.getRuntimeConfig)(configuration || {});
        const _config_1 = (0, EndpointParameters_1.resolveClientEndpointParameters)(_config_0);
        const _config_2 = (0, config_resolver_1.resolveRegionConfig)(_config_1);
        const _config_3 = (0, middleware_endpoint_1.resolveEndpointConfig)(_config_2);
        const _config_4 = (0, middleware_retry_1.resolveRetryConfig)(_config_3);
        const _config_5 = (0, middleware_host_header_1.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0, middleware_user_agent_1.resolveUserAgentConfig)(_config_5);
        const _config_7 = (0, runtimeExtensions_1.resolveRuntimeExtensions)(_config_6, (configuration == null ? void 0 : configuration.extensions) || []);
        super(_config_7);
        this.config = _config_7;
        this.middlewareStack.use((0, middleware_retry_1.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, middleware_content_length_1.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, middleware_host_header_1.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, middleware_logger_1.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, middleware_recursion_detection_1.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0, middleware_user_agent_1.getUserAgentPlugin)(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
    exports.SSOClient = SSOClient;
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/models/SSOServiceException.js
var require_SSOServiceException = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/models/SSOServiceException.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SSOServiceException = exports.__ServiceException = void 0;
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "__ServiceException", { enumerable: true, get: function() {
      return smithy_client_1.ServiceException;
    } });
    var SSOServiceException = class _SSOServiceException extends smithy_client_1.ServiceException {
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SSOServiceException.prototype);
      }
    };
    exports.SSOServiceException = SSOServiceException;
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/models/models_0.js
var require_models_02 = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/models/models_0.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogoutRequestFilterSensitiveLog = exports.ListAccountsRequestFilterSensitiveLog = exports.ListAccountRolesRequestFilterSensitiveLog = exports.GetRoleCredentialsResponseFilterSensitiveLog = exports.RoleCredentialsFilterSensitiveLog = exports.GetRoleCredentialsRequestFilterSensitiveLog = exports.UnauthorizedException = exports.TooManyRequestsException = exports.ResourceNotFoundException = exports.InvalidRequestException = void 0;
    var smithy_client_1 = require_dist_cjs37();
    var SSOServiceException_1 = require_SSOServiceException();
    var InvalidRequestException = class _InvalidRequestException extends SSOServiceException_1.SSOServiceException {
      constructor(opts) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidRequestException.prototype);
      }
    };
    exports.InvalidRequestException = InvalidRequestException;
    var ResourceNotFoundException = class _ResourceNotFoundException extends SSOServiceException_1.SSOServiceException {
      constructor(opts) {
        super({
          name: "ResourceNotFoundException",
          $fault: "client",
          ...opts
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
      }
    };
    exports.ResourceNotFoundException = ResourceNotFoundException;
    var TooManyRequestsException = class _TooManyRequestsException extends SSOServiceException_1.SSOServiceException {
      constructor(opts) {
        super({
          name: "TooManyRequestsException",
          $fault: "client",
          ...opts
        });
        this.name = "TooManyRequestsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _TooManyRequestsException.prototype);
      }
    };
    exports.TooManyRequestsException = TooManyRequestsException;
    var UnauthorizedException = class _UnauthorizedException extends SSOServiceException_1.SSOServiceException {
      constructor(opts) {
        super({
          name: "UnauthorizedException",
          $fault: "client",
          ...opts
        });
        this.name = "UnauthorizedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _UnauthorizedException.prototype);
      }
    };
    exports.UnauthorizedException = UnauthorizedException;
    var GetRoleCredentialsRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }
    });
    exports.GetRoleCredentialsRequestFilterSensitiveLog = GetRoleCredentialsRequestFilterSensitiveLog;
    var RoleCredentialsFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.secretAccessKey && { secretAccessKey: smithy_client_1.SENSITIVE_STRING },
      ...obj.sessionToken && { sessionToken: smithy_client_1.SENSITIVE_STRING }
    });
    exports.RoleCredentialsFilterSensitiveLog = RoleCredentialsFilterSensitiveLog;
    var GetRoleCredentialsResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.roleCredentials && { roleCredentials: (0, exports.RoleCredentialsFilterSensitiveLog)(obj.roleCredentials) }
    });
    exports.GetRoleCredentialsResponseFilterSensitiveLog = GetRoleCredentialsResponseFilterSensitiveLog;
    var ListAccountRolesRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }
    });
    exports.ListAccountRolesRequestFilterSensitiveLog = ListAccountRolesRequestFilterSensitiveLog;
    var ListAccountsRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }
    });
    exports.ListAccountsRequestFilterSensitiveLog = ListAccountsRequestFilterSensitiveLog;
    var LogoutRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }
    });
    exports.LogoutRequestFilterSensitiveLog = LogoutRequestFilterSensitiveLog;
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/protocols/Aws_restJson1.js
var require_Aws_restJson1 = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/protocols/Aws_restJson1.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.de_LogoutCommand = exports.de_ListAccountsCommand = exports.de_ListAccountRolesCommand = exports.de_GetRoleCredentialsCommand = exports.se_LogoutCommand = exports.se_ListAccountsCommand = exports.se_ListAccountRolesCommand = exports.se_GetRoleCredentialsCommand = void 0;
    var protocol_http_1 = require_dist_cjs2();
    var smithy_client_1 = require_dist_cjs37();
    var models_0_1 = require_models_02();
    var SSOServiceException_1 = require_SSOServiceException();
    var se_GetRoleCredentialsCommand = async (input, context) => {
      const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
      const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "x-amz-sso_bearer_token": input.accessToken
      });
      const resolvedPath = `${(basePath == null ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}/federation/credentials`;
      const query = (0, smithy_client_1.map)({
        role_name: [, (0, smithy_client_1.expectNonNull)(input.roleName, `roleName`)],
        account_id: [, (0, smithy_client_1.expectNonNull)(input.accountId, `accountId`)]
      });
      let body;
      return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body
      });
    };
    exports.se_GetRoleCredentialsCommand = se_GetRoleCredentialsCommand;
    var se_ListAccountRolesCommand = async (input, context) => {
      const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
      const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "x-amz-sso_bearer_token": input.accessToken
      });
      const resolvedPath = `${(basePath == null ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}/assignment/roles`;
      const query = (0, smithy_client_1.map)({
        next_token: [, input.nextToken],
        max_result: [() => input.maxResults !== void 0, () => input.maxResults.toString()],
        account_id: [, (0, smithy_client_1.expectNonNull)(input.accountId, `accountId`)]
      });
      let body;
      return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body
      });
    };
    exports.se_ListAccountRolesCommand = se_ListAccountRolesCommand;
    var se_ListAccountsCommand = async (input, context) => {
      const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
      const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "x-amz-sso_bearer_token": input.accessToken
      });
      const resolvedPath = `${(basePath == null ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}/assignment/accounts`;
      const query = (0, smithy_client_1.map)({
        next_token: [, input.nextToken],
        max_result: [() => input.maxResults !== void 0, () => input.maxResults.toString()]
      });
      let body;
      return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body
      });
    };
    exports.se_ListAccountsCommand = se_ListAccountsCommand;
    var se_LogoutCommand = async (input, context) => {
      const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
      const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "x-amz-sso_bearer_token": input.accessToken
      });
      const resolvedPath = `${(basePath == null ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}/logout`;
      let body;
      return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body
      });
    };
    exports.se_LogoutCommand = se_LogoutCommand;
    var de_GetRoleCredentialsCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetRoleCredentialsCommandError(output, context);
      }
      const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output)
      });
      const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
      const doc = (0, smithy_client_1.take)(data, {
        roleCredentials: smithy_client_1._json
      });
      Object.assign(contents, doc);
      return contents;
    };
    exports.de_GetRoleCredentialsCommand = de_GetRoleCredentialsCommand;
    var de_GetRoleCredentialsCommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
      };
      const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
          throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
          throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
          throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
          throw await de_UnauthorizedExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody,
            errorCode
          });
      }
    };
    var de_ListAccountRolesCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListAccountRolesCommandError(output, context);
      }
      const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output)
      });
      const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
      const doc = (0, smithy_client_1.take)(data, {
        nextToken: smithy_client_1.expectString,
        roleList: smithy_client_1._json
      });
      Object.assign(contents, doc);
      return contents;
    };
    exports.de_ListAccountRolesCommand = de_ListAccountRolesCommand;
    var de_ListAccountRolesCommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
      };
      const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
          throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
          throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
          throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
          throw await de_UnauthorizedExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody,
            errorCode
          });
      }
    };
    var de_ListAccountsCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListAccountsCommandError(output, context);
      }
      const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output)
      });
      const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
      const doc = (0, smithy_client_1.take)(data, {
        accountList: smithy_client_1._json,
        nextToken: smithy_client_1.expectString
      });
      Object.assign(contents, doc);
      return contents;
    };
    exports.de_ListAccountsCommand = de_ListAccountsCommand;
    var de_ListAccountsCommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
      };
      const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
          throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
          throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
          throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
          throw await de_UnauthorizedExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody,
            errorCode
          });
      }
    };
    var de_LogoutCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_LogoutCommandError(output, context);
      }
      const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output)
      });
      await (0, smithy_client_1.collectBody)(output.body, context);
      return contents;
    };
    exports.de_LogoutCommand = de_LogoutCommand;
    var de_LogoutCommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
      };
      const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
          throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
          throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
          throw await de_UnauthorizedExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody,
            errorCode
          });
      }
    };
    var throwDefaultError = (0, smithy_client_1.withBaseException)(SSOServiceException_1.SSOServiceException);
    var de_InvalidRequestExceptionRes = async (parsedOutput, context) => {
      const contents = (0, smithy_client_1.map)({});
      const data = parsedOutput.body;
      const doc = (0, smithy_client_1.take)(data, {
        message: smithy_client_1.expectString
      });
      Object.assign(contents, doc);
      const exception = new models_0_1.InvalidRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
    };
    var de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
      const contents = (0, smithy_client_1.map)({});
      const data = parsedOutput.body;
      const doc = (0, smithy_client_1.take)(data, {
        message: smithy_client_1.expectString
      });
      Object.assign(contents, doc);
      const exception = new models_0_1.ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
    };
    var de_TooManyRequestsExceptionRes = async (parsedOutput, context) => {
      const contents = (0, smithy_client_1.map)({});
      const data = parsedOutput.body;
      const doc = (0, smithy_client_1.take)(data, {
        message: smithy_client_1.expectString
      });
      Object.assign(contents, doc);
      const exception = new models_0_1.TooManyRequestsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
    };
    var de_UnauthorizedExceptionRes = async (parsedOutput, context) => {
      const contents = (0, smithy_client_1.map)({});
      const data = parsedOutput.body;
      const doc = (0, smithy_client_1.take)(data, {
        message: smithy_client_1.expectString
      });
      Object.assign(contents, doc);
      const exception = new models_0_1.UnauthorizedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
    };
    var deserializeMetadata = (output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    });
    var collectBodyString = (streamBody, context) => (0, smithy_client_1.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));
    var isSerializableHeaderValue = (value) => value !== void 0 && value !== null && value !== "" && (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) && (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
    var parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        return JSON.parse(encoded);
      }
      return {};
    });
    var parseErrorBody = async (errorBody, context) => {
      const value = await parseBody(errorBody, context);
      value.message = value.message ?? value.Message;
      return value;
    };
    var loadRestJsonErrorCode = (output, data) => {
      const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
      const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
          cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
          cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
          cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
          cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
      };
      const headerKey = findKey(output.headers, "x-amzn-errortype");
      if (headerKey !== void 0) {
        return sanitizeErrorCode(output.headers[headerKey]);
      }
      if (data.code !== void 0) {
        return sanitizeErrorCode(data.code);
      }
      if (data["__type"] !== void 0) {
        return sanitizeErrorCode(data["__type"]);
      }
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/commands/GetRoleCredentialsCommand.js
var require_GetRoleCredentialsCommand = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/commands/GetRoleCredentialsCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetRoleCredentialsCommand = exports.$Command = void 0;
    var middleware_endpoint_1 = require_dist_cjs28();
    var middleware_serde_1 = require_dist_cjs27();
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "$Command", { enumerable: true, get: function() {
      return smithy_client_1.Command;
    } });
    var types_1 = require_dist_cjs();
    var models_0_1 = require_models_02();
    var Aws_restJson1_1 = require_Aws_restJson1();
    var GetRoleCredentialsCommand = class _GetRoleCredentialsCommand extends smithy_client_1.Command {
      static getEndpointParameterInstructions() {
        return {
          UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
          Endpoint: { type: "builtInParams", name: "endpoint" },
          Region: { type: "builtInParams", name: "region" },
          UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
        };
      }
      constructor(input) {
        super();
        this.input = input;
      }
      resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_1.getEndpointPlugin)(configuration, _GetRoleCredentialsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOClient";
        const commandName = "GetRoleCredentialsCommand";
        const handlerExecutionContext = {
          logger,
          clientName,
          commandName,
          inputFilterSensitiveLog: models_0_1.GetRoleCredentialsRequestFilterSensitiveLog,
          outputFilterSensitiveLog: models_0_1.GetRoleCredentialsResponseFilterSensitiveLog,
          [types_1.SMITHY_CONTEXT_KEY]: {
            service: "SWBPortalService",
            operation: "GetRoleCredentials"
          }
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
      serialize(input, context) {
        return (0, Aws_restJson1_1.se_GetRoleCredentialsCommand)(input, context);
      }
      deserialize(output, context) {
        return (0, Aws_restJson1_1.de_GetRoleCredentialsCommand)(output, context);
      }
    };
    exports.GetRoleCredentialsCommand = GetRoleCredentialsCommand;
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/commands/ListAccountRolesCommand.js
var require_ListAccountRolesCommand = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/commands/ListAccountRolesCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ListAccountRolesCommand = exports.$Command = void 0;
    var middleware_endpoint_1 = require_dist_cjs28();
    var middleware_serde_1 = require_dist_cjs27();
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "$Command", { enumerable: true, get: function() {
      return smithy_client_1.Command;
    } });
    var types_1 = require_dist_cjs();
    var models_0_1 = require_models_02();
    var Aws_restJson1_1 = require_Aws_restJson1();
    var ListAccountRolesCommand = class _ListAccountRolesCommand extends smithy_client_1.Command {
      static getEndpointParameterInstructions() {
        return {
          UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
          Endpoint: { type: "builtInParams", name: "endpoint" },
          Region: { type: "builtInParams", name: "region" },
          UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
        };
      }
      constructor(input) {
        super();
        this.input = input;
      }
      resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_1.getEndpointPlugin)(configuration, _ListAccountRolesCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOClient";
        const commandName = "ListAccountRolesCommand";
        const handlerExecutionContext = {
          logger,
          clientName,
          commandName,
          inputFilterSensitiveLog: models_0_1.ListAccountRolesRequestFilterSensitiveLog,
          outputFilterSensitiveLog: (_) => _,
          [types_1.SMITHY_CONTEXT_KEY]: {
            service: "SWBPortalService",
            operation: "ListAccountRoles"
          }
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
      serialize(input, context) {
        return (0, Aws_restJson1_1.se_ListAccountRolesCommand)(input, context);
      }
      deserialize(output, context) {
        return (0, Aws_restJson1_1.de_ListAccountRolesCommand)(output, context);
      }
    };
    exports.ListAccountRolesCommand = ListAccountRolesCommand;
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/commands/ListAccountsCommand.js
var require_ListAccountsCommand = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/commands/ListAccountsCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ListAccountsCommand = exports.$Command = void 0;
    var middleware_endpoint_1 = require_dist_cjs28();
    var middleware_serde_1 = require_dist_cjs27();
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "$Command", { enumerable: true, get: function() {
      return smithy_client_1.Command;
    } });
    var types_1 = require_dist_cjs();
    var models_0_1 = require_models_02();
    var Aws_restJson1_1 = require_Aws_restJson1();
    var ListAccountsCommand = class _ListAccountsCommand extends smithy_client_1.Command {
      static getEndpointParameterInstructions() {
        return {
          UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
          Endpoint: { type: "builtInParams", name: "endpoint" },
          Region: { type: "builtInParams", name: "region" },
          UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
        };
      }
      constructor(input) {
        super();
        this.input = input;
      }
      resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_1.getEndpointPlugin)(configuration, _ListAccountsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOClient";
        const commandName = "ListAccountsCommand";
        const handlerExecutionContext = {
          logger,
          clientName,
          commandName,
          inputFilterSensitiveLog: models_0_1.ListAccountsRequestFilterSensitiveLog,
          outputFilterSensitiveLog: (_) => _,
          [types_1.SMITHY_CONTEXT_KEY]: {
            service: "SWBPortalService",
            operation: "ListAccounts"
          }
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
      serialize(input, context) {
        return (0, Aws_restJson1_1.se_ListAccountsCommand)(input, context);
      }
      deserialize(output, context) {
        return (0, Aws_restJson1_1.de_ListAccountsCommand)(output, context);
      }
    };
    exports.ListAccountsCommand = ListAccountsCommand;
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/commands/LogoutCommand.js
var require_LogoutCommand = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/commands/LogoutCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogoutCommand = exports.$Command = void 0;
    var middleware_endpoint_1 = require_dist_cjs28();
    var middleware_serde_1 = require_dist_cjs27();
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "$Command", { enumerable: true, get: function() {
      return smithy_client_1.Command;
    } });
    var types_1 = require_dist_cjs();
    var models_0_1 = require_models_02();
    var Aws_restJson1_1 = require_Aws_restJson1();
    var LogoutCommand = class _LogoutCommand extends smithy_client_1.Command {
      static getEndpointParameterInstructions() {
        return {
          UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
          Endpoint: { type: "builtInParams", name: "endpoint" },
          Region: { type: "builtInParams", name: "region" },
          UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
        };
      }
      constructor(input) {
        super();
        this.input = input;
      }
      resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_1.getEndpointPlugin)(configuration, _LogoutCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOClient";
        const commandName = "LogoutCommand";
        const handlerExecutionContext = {
          logger,
          clientName,
          commandName,
          inputFilterSensitiveLog: models_0_1.LogoutRequestFilterSensitiveLog,
          outputFilterSensitiveLog: (_) => _,
          [types_1.SMITHY_CONTEXT_KEY]: {
            service: "SWBPortalService",
            operation: "Logout"
          }
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
      serialize(input, context) {
        return (0, Aws_restJson1_1.se_LogoutCommand)(input, context);
      }
      deserialize(output, context) {
        return (0, Aws_restJson1_1.de_LogoutCommand)(output, context);
      }
    };
    exports.LogoutCommand = LogoutCommand;
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/SSO.js
var require_SSO = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/SSO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SSO = void 0;
    var smithy_client_1 = require_dist_cjs37();
    var GetRoleCredentialsCommand_1 = require_GetRoleCredentialsCommand();
    var ListAccountRolesCommand_1 = require_ListAccountRolesCommand();
    var ListAccountsCommand_1 = require_ListAccountsCommand();
    var LogoutCommand_1 = require_LogoutCommand();
    var SSOClient_1 = require_SSOClient();
    var commands = {
      GetRoleCredentialsCommand: GetRoleCredentialsCommand_1.GetRoleCredentialsCommand,
      ListAccountRolesCommand: ListAccountRolesCommand_1.ListAccountRolesCommand,
      ListAccountsCommand: ListAccountsCommand_1.ListAccountsCommand,
      LogoutCommand: LogoutCommand_1.LogoutCommand
    };
    var SSO = class extends SSOClient_1.SSOClient {
    };
    exports.SSO = SSO;
    (0, smithy_client_1.createAggregatedClient)(commands, SSO);
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/commands/index.js
var require_commands = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/commands/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_GetRoleCredentialsCommand(), exports);
    tslib_1.__exportStar(require_ListAccountRolesCommand(), exports);
    tslib_1.__exportStar(require_ListAccountsCommand(), exports);
    tslib_1.__exportStar(require_LogoutCommand(), exports);
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/pagination/Interfaces.js
var require_Interfaces = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/pagination/Interfaces.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/pagination/ListAccountRolesPaginator.js
var require_ListAccountRolesPaginator = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/pagination/ListAccountRolesPaginator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.paginateListAccountRoles = void 0;
    var ListAccountRolesCommand_1 = require_ListAccountRolesCommand();
    var SSOClient_1 = require_SSOClient();
    var makePagedClientRequest = async (client, input, ...args) => {
      return await client.send(new ListAccountRolesCommand_1.ListAccountRolesCommand(input), ...args);
    };
    async function* paginateListAccountRoles(config, input, ...additionalArguments) {
      let token = config.startingToken || void 0;
      let hasNext = true;
      let page;
      while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof SSOClient_1.SSOClient) {
          page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        } else {
          throw new Error("Invalid client, expected SSO | SSOClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
      }
      return void 0;
    }
    exports.paginateListAccountRoles = paginateListAccountRoles;
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/pagination/ListAccountsPaginator.js
var require_ListAccountsPaginator = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/pagination/ListAccountsPaginator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.paginateListAccounts = void 0;
    var ListAccountsCommand_1 = require_ListAccountsCommand();
    var SSOClient_1 = require_SSOClient();
    var makePagedClientRequest = async (client, input, ...args) => {
      return await client.send(new ListAccountsCommand_1.ListAccountsCommand(input), ...args);
    };
    async function* paginateListAccounts(config, input, ...additionalArguments) {
      let token = config.startingToken || void 0;
      let hasNext = true;
      let page;
      while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof SSOClient_1.SSOClient) {
          page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        } else {
          throw new Error("Invalid client, expected SSO | SSOClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
      }
      return void 0;
    }
    exports.paginateListAccounts = paginateListAccounts;
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/pagination/index.js
var require_pagination2 = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/pagination/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_Interfaces(), exports);
    tslib_1.__exportStar(require_ListAccountRolesPaginator(), exports);
    tslib_1.__exportStar(require_ListAccountsPaginator(), exports);
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/models/index.js
var require_models = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/models/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_models_02(), exports);
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/index.js
var require_dist_cjs48 = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SSOServiceException = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_SSOClient(), exports);
    tslib_1.__exportStar(require_SSO(), exports);
    tslib_1.__exportStar(require_commands(), exports);
    tslib_1.__exportStar(require_pagination2(), exports);
    tslib_1.__exportStar(require_models(), exports);
    require_dist_cjs18();
    var SSOServiceException_1 = require_SSOServiceException();
    Object.defineProperty(exports, "SSOServiceException", { enumerable: true, get: function() {
      return SSOServiceException_1.SSOServiceException;
    } });
  }
});

// node_modules/@aws-sdk/token-providers/dist-cjs/bundle/client-sso-oidc-node.js
var require_client_sso_oidc_node = __commonJS({
  "node_modules/@aws-sdk/token-providers/dist-cjs/bundle/client-sso-oidc-node.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UnsupportedGrantTypeException = exports.UnauthorizedClientException = exports.SlowDownException = exports.SSOOIDCClient = exports.InvalidScopeException = exports.InvalidRequestException = exports.InvalidClientException = exports.InternalServerException = exports.ExpiredTokenException = exports.CreateTokenCommand = exports.AuthorizationPendingException = exports.AccessDeniedException = void 0;
    var middleware_host_header_1 = require_dist_cjs3();
    var middleware_logger_1 = require_dist_cjs4();
    var middleware_recursion_detection_1 = require_dist_cjs5();
    var middleware_user_agent_1 = require_dist_cjs19();
    var config_resolver_1 = require_dist_cjs21();
    var middleware_content_length_1 = require_dist_cjs22();
    var middleware_endpoint_1 = require_dist_cjs28();
    var middleware_retry_1 = require_dist_cjs31();
    var smithy_client_1 = require_dist_cjs37();
    var resolveClientEndpointParameters = (options) => {
      var _a, _b;
      return {
        ...options,
        useDualstackEndpoint: (_a = options.useDualstackEndpoint) !== null && _a !== void 0 ? _a : false,
        useFipsEndpoint: (_b = options.useFipsEndpoint) !== null && _b !== void 0 ? _b : false,
        defaultSigningName: "awsssooidc"
      };
    };
    var package_default = { version: "3.429.0" };
    var util_user_agent_node_1 = require_dist_cjs43();
    var config_resolver_2 = require_dist_cjs21();
    var hash_node_1 = require_dist_cjs44();
    var middleware_retry_2 = require_dist_cjs31();
    var node_config_provider_1 = require_dist_cjs24();
    var node_http_handler_1 = require_dist_cjs35();
    var util_body_length_node_1 = require_dist_cjs45();
    var util_retry_1 = require_dist_cjs30();
    var smithy_client_2 = require_dist_cjs37();
    var url_parser_1 = require_dist_cjs26();
    var util_base64_1 = require_dist_cjs33();
    var util_utf8_1 = require_dist_cjs13();
    var util_endpoints_1 = require_dist_cjs17();
    var s = "required";
    var t = "fn";
    var u = "argv";
    var v = "ref";
    var a = "isSet";
    var b = "tree";
    var c = "error";
    var d = "endpoint";
    var e = "PartitionResult";
    var f = "getAttr";
    var g = { [s]: false, type: "String" };
    var h = { [s]: true, default: false, type: "Boolean" };
    var i = { [v]: "Endpoint" };
    var j = { [t]: "booleanEquals", [u]: [{ [v]: "UseFIPS" }, true] };
    var k = { [t]: "booleanEquals", [u]: [{ [v]: "UseDualStack" }, true] };
    var l = {};
    var m = { [t]: "booleanEquals", [u]: [true, { [t]: f, [u]: [{ [v]: e }, "supportsFIPS"] }] };
    var n = { [v]: e };
    var o = { [t]: "booleanEquals", [u]: [true, { [t]: f, [u]: [n, "supportsDualStack"] }] };
    var p = [j];
    var q = [k];
    var r = [{ [v]: "Region" }];
    var _data = {
      version: "1.0",
      parameters: { Region: g, UseDualStack: h, UseFIPS: h, Endpoint: g },
      rules: [
        {
          conditions: [{ [t]: a, [u]: [i] }],
          type: b,
          rules: [
            { conditions: p, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: c },
            { conditions: q, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: c },
            { endpoint: { url: i, properties: l, headers: l }, type: d }
          ]
        },
        {
          conditions: [{ [t]: a, [u]: r }],
          type: b,
          rules: [
            {
              conditions: [{ [t]: "aws.partition", [u]: r, assign: e }],
              type: b,
              rules: [
                {
                  conditions: [j, k],
                  type: b,
                  rules: [
                    {
                      conditions: [m, o],
                      type: b,
                      rules: [
                        {
                          endpoint: {
                            url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                            properties: l,
                            headers: l
                          },
                          type: d
                        }
                      ]
                    },
                    { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: c }
                  ]
                },
                {
                  conditions: p,
                  type: b,
                  rules: [
                    {
                      conditions: [m],
                      type: b,
                      rules: [
                        {
                          conditions: [{ [t]: "stringEquals", [u]: ["aws-us-gov", { [t]: f, [u]: [n, "name"] }] }],
                          endpoint: { url: "https://oidc.{Region}.amazonaws.com", properties: l, headers: l },
                          type: d
                        },
                        {
                          endpoint: {
                            url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}",
                            properties: l,
                            headers: l
                          },
                          type: d
                        }
                      ]
                    },
                    { error: "FIPS is enabled but this partition does not support FIPS", type: c }
                  ]
                },
                {
                  conditions: q,
                  type: b,
                  rules: [
                    {
                      conditions: [o],
                      type: b,
                      rules: [
                        {
                          endpoint: {
                            url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}",
                            properties: l,
                            headers: l
                          },
                          type: d
                        }
                      ]
                    },
                    { error: "DualStack is enabled but this partition does not support DualStack", type: c }
                  ]
                },
                {
                  endpoint: { url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}", properties: l, headers: l },
                  type: d
                }
              ]
            }
          ]
        },
        { error: "Invalid Configuration: Missing Region", type: c }
      ]
    };
    var ruleSet = _data;
    var defaultEndpointResolver = (endpointParams, context = {}) => {
      return (0, util_endpoints_1.resolveEndpoint)(ruleSet, {
        endpointParams,
        logger: context.logger
      });
    };
    var getRuntimeConfig = (config) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
      return {
        apiVersion: "2019-06-10",
        base64Decoder: (_a = config === null || config === void 0 ? void 0 : config.base64Decoder) !== null && _a !== void 0 ? _a : util_base64_1.fromBase64,
        base64Encoder: (_b = config === null || config === void 0 ? void 0 : config.base64Encoder) !== null && _b !== void 0 ? _b : util_base64_1.toBase64,
        disableHostPrefix: (_c = config === null || config === void 0 ? void 0 : config.disableHostPrefix) !== null && _c !== void 0 ? _c : false,
        endpointProvider: (_d = config === null || config === void 0 ? void 0 : config.endpointProvider) !== null && _d !== void 0 ? _d : defaultEndpointResolver,
        extensions: (_e = config === null || config === void 0 ? void 0 : config.extensions) !== null && _e !== void 0 ? _e : [],
        logger: (_f = config === null || config === void 0 ? void 0 : config.logger) !== null && _f !== void 0 ? _f : new smithy_client_2.NoOpLogger(),
        serviceId: (_g = config === null || config === void 0 ? void 0 : config.serviceId) !== null && _g !== void 0 ? _g : "SSO OIDC",
        urlParser: (_h = config === null || config === void 0 ? void 0 : config.urlParser) !== null && _h !== void 0 ? _h : url_parser_1.parseUrl,
        utf8Decoder: (_j = config === null || config === void 0 ? void 0 : config.utf8Decoder) !== null && _j !== void 0 ? _j : util_utf8_1.fromUtf8,
        utf8Encoder: (_k = config === null || config === void 0 ? void 0 : config.utf8Encoder) !== null && _k !== void 0 ? _k : util_utf8_1.toUtf8
      };
    };
    var smithy_client_3 = require_dist_cjs37();
    var util_defaults_mode_node_1 = require_dist_cjs46();
    var smithy_client_4 = require_dist_cjs37();
    var getRuntimeConfig2 = (config) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
      (0, smithy_client_4.emitWarningIfUnsupportedVersion)(process.version);
      const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
      const defaultConfigProvider = () => defaultsMode().then(smithy_client_3.loadConfigsForDefaultMode);
      const clientSharedValues = getRuntimeConfig(config);
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: (_a = config === null || config === void 0 ? void 0 : config.bodyLengthChecker) !== null && _a !== void 0 ? _a : util_body_length_node_1.calculateBodyLength,
        defaultUserAgentProvider: (_b = config === null || config === void 0 ? void 0 : config.defaultUserAgentProvider) !== null && _b !== void 0 ? _b : (0, util_user_agent_node_1.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
        maxAttempts: (_c = config === null || config === void 0 ? void 0 : config.maxAttempts) !== null && _c !== void 0 ? _c : (0, node_config_provider_1.loadConfig)(middleware_retry_2.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: (_d = config === null || config === void 0 ? void 0 : config.region) !== null && _d !== void 0 ? _d : (0, node_config_provider_1.loadConfig)(config_resolver_2.NODE_REGION_CONFIG_OPTIONS, config_resolver_2.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: (_e = config === null || config === void 0 ? void 0 : config.requestHandler) !== null && _e !== void 0 ? _e : new node_http_handler_1.NodeHttpHandler(defaultConfigProvider),
        retryMode: (_f = config === null || config === void 0 ? void 0 : config.retryMode) !== null && _f !== void 0 ? _f : (0, node_config_provider_1.loadConfig)({
          ...middleware_retry_2.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || util_retry_1.DEFAULT_RETRY_MODE
        }),
        sha256: (_g = config === null || config === void 0 ? void 0 : config.sha256) !== null && _g !== void 0 ? _g : hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: (_h = config === null || config === void 0 ? void 0 : config.streamCollector) !== null && _h !== void 0 ? _h : node_http_handler_1.streamCollector,
        useDualstackEndpoint: (_j = config === null || config === void 0 ? void 0 : config.useDualstackEndpoint) !== null && _j !== void 0 ? _j : (0, node_config_provider_1.loadConfig)(config_resolver_2.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: (_k = config === null || config === void 0 ? void 0 : config.useFipsEndpoint) !== null && _k !== void 0 ? _k : (0, node_config_provider_1.loadConfig)(config_resolver_2.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      };
    };
    var region_config_resolver_1 = require_dist_cjs47();
    var protocol_http_1 = require_dist_cjs2();
    var smithy_client_5 = require_dist_cjs37();
    var asPartial = (t2) => t2;
    var resolveRuntimeExtensions = (runtimeConfig, extensions) => {
      const extensionConfiguration = {
        ...asPartial((0, region_config_resolver_1.getAwsRegionExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0, smithy_client_5.getDefaultExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0, protocol_http_1.getHttpHandlerExtensionConfiguration)(runtimeConfig))
      };
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return {
        ...runtimeConfig,
        ...(0, region_config_resolver_1.resolveAwsRegionExtensionConfiguration)(extensionConfiguration),
        ...(0, smithy_client_5.resolveDefaultRuntimeConfig)(extensionConfiguration),
        ...(0, protocol_http_1.resolveHttpHandlerRuntimeConfig)(extensionConfiguration)
      };
    };
    var SSOOIDCClient = class extends smithy_client_1.Client {
      constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig2(configuration || {});
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = (0, config_resolver_1.resolveRegionConfig)(_config_1);
        const _config_3 = (0, middleware_endpoint_1.resolveEndpointConfig)(_config_2);
        const _config_4 = (0, middleware_retry_1.resolveRetryConfig)(_config_3);
        const _config_5 = (0, middleware_host_header_1.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0, middleware_user_agent_1.resolveUserAgentConfig)(_config_5);
        const _config_7 = resolveRuntimeExtensions(_config_6, (configuration === null || configuration === void 0 ? void 0 : configuration.extensions) || []);
        super(_config_7);
        this.config = _config_7;
        this.middlewareStack.use((0, middleware_retry_1.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, middleware_content_length_1.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, middleware_host_header_1.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, middleware_logger_1.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, middleware_recursion_detection_1.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0, middleware_user_agent_1.getUserAgentPlugin)(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
    exports.SSOOIDCClient = SSOOIDCClient;
    var smithy_client_6 = require_dist_cjs37();
    var middleware_endpoint_2 = require_dist_cjs28();
    var middleware_serde_1 = require_dist_cjs27();
    var smithy_client_7 = require_dist_cjs37();
    var types_1 = require_dist_cjs();
    var protocol_http_2 = require_dist_cjs2();
    var smithy_client_8 = require_dist_cjs37();
    var smithy_client_9 = require_dist_cjs37();
    var SSOOIDCServiceException = class _SSOOIDCServiceException extends smithy_client_9.ServiceException {
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SSOOIDCServiceException.prototype);
      }
    };
    var AccessDeniedException = class _AccessDeniedException extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "AccessDeniedException",
          $fault: "client",
          ...opts
        });
        this.name = "AccessDeniedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _AccessDeniedException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    exports.AccessDeniedException = AccessDeniedException;
    var AuthorizationPendingException = class _AuthorizationPendingException extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "AuthorizationPendingException",
          $fault: "client",
          ...opts
        });
        this.name = "AuthorizationPendingException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _AuthorizationPendingException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    exports.AuthorizationPendingException = AuthorizationPendingException;
    var ExpiredTokenException = class _ExpiredTokenException extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...opts
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _ExpiredTokenException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    exports.ExpiredTokenException = ExpiredTokenException;
    var InternalServerException = class _InternalServerException extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "InternalServerException",
          $fault: "server",
          ...opts
        });
        this.name = "InternalServerException";
        this.$fault = "server";
        Object.setPrototypeOf(this, _InternalServerException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    exports.InternalServerException = InternalServerException;
    var InvalidClientException = class _InvalidClientException extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "InvalidClientException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    exports.InvalidClientException = InvalidClientException;
    var InvalidGrantException = class _InvalidGrantException extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "InvalidGrantException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidGrantException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidGrantException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    var InvalidRequestException = class _InvalidRequestException extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidRequestException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    exports.InvalidRequestException = InvalidRequestException;
    var InvalidScopeException = class _InvalidScopeException extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "InvalidScopeException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidScopeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidScopeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    exports.InvalidScopeException = InvalidScopeException;
    var SlowDownException = class _SlowDownException extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "SlowDownException",
          $fault: "client",
          ...opts
        });
        this.name = "SlowDownException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _SlowDownException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    exports.SlowDownException = SlowDownException;
    var UnauthorizedClientException = class _UnauthorizedClientException extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "UnauthorizedClientException",
          $fault: "client",
          ...opts
        });
        this.name = "UnauthorizedClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _UnauthorizedClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    exports.UnauthorizedClientException = UnauthorizedClientException;
    var UnsupportedGrantTypeException = class _UnsupportedGrantTypeException extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "UnsupportedGrantTypeException",
          $fault: "client",
          ...opts
        });
        this.name = "UnsupportedGrantTypeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _UnsupportedGrantTypeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    exports.UnsupportedGrantTypeException = UnsupportedGrantTypeException;
    var InvalidClientMetadataException = class _InvalidClientMetadataException extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "InvalidClientMetadataException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidClientMetadataException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidClientMetadataException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    var se_CreateTokenCommand = async (input, context) => {
      const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
      const headers = {
        "content-type": "application/json"
      };
      const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}/token`;
      let body;
      body = JSON.stringify((0, smithy_client_8.take)(input, {
        clientId: [],
        clientSecret: [],
        code: [],
        deviceCode: [],
        grantType: [],
        redirectUri: [],
        refreshToken: [],
        scope: (_) => (0, smithy_client_8._json)(_)
      }));
      return new protocol_http_2.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body
      });
    };
    var se_RegisterClientCommand = async (input, context) => {
      const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
      const headers = {
        "content-type": "application/json"
      };
      const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}/client/register`;
      let body;
      body = JSON.stringify((0, smithy_client_8.take)(input, {
        clientName: [],
        clientType: [],
        scopes: (_) => (0, smithy_client_8._json)(_)
      }));
      return new protocol_http_2.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body
      });
    };
    var se_StartDeviceAuthorizationCommand = async (input, context) => {
      const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
      const headers = {
        "content-type": "application/json"
      };
      const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}/device_authorization`;
      let body;
      body = JSON.stringify((0, smithy_client_8.take)(input, {
        clientId: [],
        clientSecret: [],
        startUrl: []
      }));
      return new protocol_http_2.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body
      });
    };
    var de_CreateTokenCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CreateTokenCommandError(output, context);
      }
      const contents = (0, smithy_client_8.map)({
        $metadata: deserializeMetadata(output)
      });
      const data = (0, smithy_client_8.expectNonNull)((0, smithy_client_8.expectObject)(await parseBody(output.body, context)), "body");
      const doc = (0, smithy_client_8.take)(data, {
        accessToken: smithy_client_8.expectString,
        expiresIn: smithy_client_8.expectInt32,
        idToken: smithy_client_8.expectString,
        refreshToken: smithy_client_8.expectString,
        tokenType: smithy_client_8.expectString
      });
      Object.assign(contents, doc);
      return contents;
    };
    var de_CreateTokenCommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
      };
      const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssooidc#AccessDeniedException":
          throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "AuthorizationPendingException":
        case "com.amazonaws.ssooidc#AuthorizationPendingException":
          throw await de_AuthorizationPendingExceptionRes(parsedOutput, context);
        case "ExpiredTokenException":
        case "com.amazonaws.ssooidc#ExpiredTokenException":
          throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
          throw await de_InternalServerExceptionRes(parsedOutput, context);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
          throw await de_InvalidClientExceptionRes(parsedOutput, context);
        case "InvalidGrantException":
        case "com.amazonaws.ssooidc#InvalidGrantException":
          throw await de_InvalidGrantExceptionRes(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
          throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
          throw await de_InvalidScopeExceptionRes(parsedOutput, context);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
          throw await de_SlowDownExceptionRes(parsedOutput, context);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
          throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
        case "UnsupportedGrantTypeException":
        case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
          throw await de_UnsupportedGrantTypeExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody,
            errorCode
          });
      }
    };
    var de_RegisterClientCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_RegisterClientCommandError(output, context);
      }
      const contents = (0, smithy_client_8.map)({
        $metadata: deserializeMetadata(output)
      });
      const data = (0, smithy_client_8.expectNonNull)((0, smithy_client_8.expectObject)(await parseBody(output.body, context)), "body");
      const doc = (0, smithy_client_8.take)(data, {
        authorizationEndpoint: smithy_client_8.expectString,
        clientId: smithy_client_8.expectString,
        clientIdIssuedAt: smithy_client_8.expectLong,
        clientSecret: smithy_client_8.expectString,
        clientSecretExpiresAt: smithy_client_8.expectLong,
        tokenEndpoint: smithy_client_8.expectString
      });
      Object.assign(contents, doc);
      return contents;
    };
    var de_RegisterClientCommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
      };
      const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
          throw await de_InternalServerExceptionRes(parsedOutput, context);
        case "InvalidClientMetadataException":
        case "com.amazonaws.ssooidc#InvalidClientMetadataException":
          throw await de_InvalidClientMetadataExceptionRes(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
          throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
          throw await de_InvalidScopeExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody,
            errorCode
          });
      }
    };
    var de_StartDeviceAuthorizationCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_StartDeviceAuthorizationCommandError(output, context);
      }
      const contents = (0, smithy_client_8.map)({
        $metadata: deserializeMetadata(output)
      });
      const data = (0, smithy_client_8.expectNonNull)((0, smithy_client_8.expectObject)(await parseBody(output.body, context)), "body");
      const doc = (0, smithy_client_8.take)(data, {
        deviceCode: smithy_client_8.expectString,
        expiresIn: smithy_client_8.expectInt32,
        interval: smithy_client_8.expectInt32,
        userCode: smithy_client_8.expectString,
        verificationUri: smithy_client_8.expectString,
        verificationUriComplete: smithy_client_8.expectString
      });
      Object.assign(contents, doc);
      return contents;
    };
    var de_StartDeviceAuthorizationCommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
      };
      const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
          throw await de_InternalServerExceptionRes(parsedOutput, context);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
          throw await de_InvalidClientExceptionRes(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
          throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
          throw await de_SlowDownExceptionRes(parsedOutput, context);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
          throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody,
            errorCode
          });
      }
    };
    var throwDefaultError = (0, smithy_client_8.withBaseException)(SSOOIDCServiceException);
    var de_AccessDeniedExceptionRes = async (parsedOutput, context) => {
      const contents = (0, smithy_client_8.map)({});
      const data = parsedOutput.body;
      const doc = (0, smithy_client_8.take)(data, {
        error: smithy_client_8.expectString,
        error_description: smithy_client_8.expectString
      });
      Object.assign(contents, doc);
      const exception = new AccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, smithy_client_8.decorateServiceException)(exception, parsedOutput.body);
    };
    var de_AuthorizationPendingExceptionRes = async (parsedOutput, context) => {
      const contents = (0, smithy_client_8.map)({});
      const data = parsedOutput.body;
      const doc = (0, smithy_client_8.take)(data, {
        error: smithy_client_8.expectString,
        error_description: smithy_client_8.expectString
      });
      Object.assign(contents, doc);
      const exception = new AuthorizationPendingException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, smithy_client_8.decorateServiceException)(exception, parsedOutput.body);
    };
    var de_ExpiredTokenExceptionRes = async (parsedOutput, context) => {
      const contents = (0, smithy_client_8.map)({});
      const data = parsedOutput.body;
      const doc = (0, smithy_client_8.take)(data, {
        error: smithy_client_8.expectString,
        error_description: smithy_client_8.expectString
      });
      Object.assign(contents, doc);
      const exception = new ExpiredTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, smithy_client_8.decorateServiceException)(exception, parsedOutput.body);
    };
    var de_InternalServerExceptionRes = async (parsedOutput, context) => {
      const contents = (0, smithy_client_8.map)({});
      const data = parsedOutput.body;
      const doc = (0, smithy_client_8.take)(data, {
        error: smithy_client_8.expectString,
        error_description: smithy_client_8.expectString
      });
      Object.assign(contents, doc);
      const exception = new InternalServerException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, smithy_client_8.decorateServiceException)(exception, parsedOutput.body);
    };
    var de_InvalidClientExceptionRes = async (parsedOutput, context) => {
      const contents = (0, smithy_client_8.map)({});
      const data = parsedOutput.body;
      const doc = (0, smithy_client_8.take)(data, {
        error: smithy_client_8.expectString,
        error_description: smithy_client_8.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidClientException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, smithy_client_8.decorateServiceException)(exception, parsedOutput.body);
    };
    var de_InvalidClientMetadataExceptionRes = async (parsedOutput, context) => {
      const contents = (0, smithy_client_8.map)({});
      const data = parsedOutput.body;
      const doc = (0, smithy_client_8.take)(data, {
        error: smithy_client_8.expectString,
        error_description: smithy_client_8.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidClientMetadataException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, smithy_client_8.decorateServiceException)(exception, parsedOutput.body);
    };
    var de_InvalidGrantExceptionRes = async (parsedOutput, context) => {
      const contents = (0, smithy_client_8.map)({});
      const data = parsedOutput.body;
      const doc = (0, smithy_client_8.take)(data, {
        error: smithy_client_8.expectString,
        error_description: smithy_client_8.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidGrantException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, smithy_client_8.decorateServiceException)(exception, parsedOutput.body);
    };
    var de_InvalidRequestExceptionRes = async (parsedOutput, context) => {
      const contents = (0, smithy_client_8.map)({});
      const data = parsedOutput.body;
      const doc = (0, smithy_client_8.take)(data, {
        error: smithy_client_8.expectString,
        error_description: smithy_client_8.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, smithy_client_8.decorateServiceException)(exception, parsedOutput.body);
    };
    var de_InvalidScopeExceptionRes = async (parsedOutput, context) => {
      const contents = (0, smithy_client_8.map)({});
      const data = parsedOutput.body;
      const doc = (0, smithy_client_8.take)(data, {
        error: smithy_client_8.expectString,
        error_description: smithy_client_8.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidScopeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, smithy_client_8.decorateServiceException)(exception, parsedOutput.body);
    };
    var de_SlowDownExceptionRes = async (parsedOutput, context) => {
      const contents = (0, smithy_client_8.map)({});
      const data = parsedOutput.body;
      const doc = (0, smithy_client_8.take)(data, {
        error: smithy_client_8.expectString,
        error_description: smithy_client_8.expectString
      });
      Object.assign(contents, doc);
      const exception = new SlowDownException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, smithy_client_8.decorateServiceException)(exception, parsedOutput.body);
    };
    var de_UnauthorizedClientExceptionRes = async (parsedOutput, context) => {
      const contents = (0, smithy_client_8.map)({});
      const data = parsedOutput.body;
      const doc = (0, smithy_client_8.take)(data, {
        error: smithy_client_8.expectString,
        error_description: smithy_client_8.expectString
      });
      Object.assign(contents, doc);
      const exception = new UnauthorizedClientException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, smithy_client_8.decorateServiceException)(exception, parsedOutput.body);
    };
    var de_UnsupportedGrantTypeExceptionRes = async (parsedOutput, context) => {
      const contents = (0, smithy_client_8.map)({});
      const data = parsedOutput.body;
      const doc = (0, smithy_client_8.take)(data, {
        error: smithy_client_8.expectString,
        error_description: smithy_client_8.expectString
      });
      Object.assign(contents, doc);
      const exception = new UnsupportedGrantTypeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, smithy_client_8.decorateServiceException)(exception, parsedOutput.body);
    };
    var deserializeMetadata = (output) => {
      var _a, _b;
      return {
        httpStatusCode: output.statusCode,
        requestId: (_b = (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"]) !== null && _b !== void 0 ? _b : output.headers["x-amz-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"]
      };
    };
    var collectBodyString = (streamBody, context) => (0, smithy_client_8.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));
    var parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        return JSON.parse(encoded);
      }
      return {};
    });
    var parseErrorBody = async (errorBody, context) => {
      var _a;
      const value = await parseBody(errorBody, context);
      value.message = (_a = value.message) !== null && _a !== void 0 ? _a : value.Message;
      return value;
    };
    var loadRestJsonErrorCode = (output, data) => {
      const findKey = (object, key) => Object.keys(object).find((k2) => k2.toLowerCase() === key.toLowerCase());
      const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
          cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
          cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
          cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
          cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
      };
      const headerKey = findKey(output.headers, "x-amzn-errortype");
      if (headerKey !== void 0) {
        return sanitizeErrorCode(output.headers[headerKey]);
      }
      if (data.code !== void 0) {
        return sanitizeErrorCode(data.code);
      }
      if (data["__type"] !== void 0) {
        return sanitizeErrorCode(data["__type"]);
      }
    };
    var CreateTokenCommand = class _CreateTokenCommand extends smithy_client_7.Command {
      constructor(input) {
        super();
        this.input = input;
      }
      static getEndpointParameterInstructions() {
        return {
          UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
          Endpoint: { type: "builtInParams", name: "endpoint" },
          Region: { type: "builtInParams", name: "region" },
          UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
        };
      }
      resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_2.getEndpointPlugin)(configuration, _CreateTokenCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOOIDCClient";
        const commandName = "CreateTokenCommand";
        const handlerExecutionContext = {
          logger,
          clientName,
          commandName,
          inputFilterSensitiveLog: (_) => _,
          outputFilterSensitiveLog: (_) => _,
          [types_1.SMITHY_CONTEXT_KEY]: {
            service: "AWSSSOOIDCService",
            operation: "CreateToken"
          }
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
      serialize(input, context) {
        return se_CreateTokenCommand(input, context);
      }
      deserialize(output, context) {
        return de_CreateTokenCommand(output, context);
      }
    };
    exports.CreateTokenCommand = CreateTokenCommand;
    var middleware_endpoint_3 = require_dist_cjs28();
    var middleware_serde_2 = require_dist_cjs27();
    var smithy_client_10 = require_dist_cjs37();
    var types_2 = require_dist_cjs();
    var RegisterClientCommand = class _RegisterClientCommand extends smithy_client_10.Command {
      constructor(input) {
        super();
        this.input = input;
      }
      static getEndpointParameterInstructions() {
        return {
          UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
          Endpoint: { type: "builtInParams", name: "endpoint" },
          Region: { type: "builtInParams", name: "region" },
          UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
        };
      }
      resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_2.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_3.getEndpointPlugin)(configuration, _RegisterClientCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOOIDCClient";
        const commandName = "RegisterClientCommand";
        const handlerExecutionContext = {
          logger,
          clientName,
          commandName,
          inputFilterSensitiveLog: (_) => _,
          outputFilterSensitiveLog: (_) => _,
          [types_2.SMITHY_CONTEXT_KEY]: {
            service: "AWSSSOOIDCService",
            operation: "RegisterClient"
          }
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
      serialize(input, context) {
        return se_RegisterClientCommand(input, context);
      }
      deserialize(output, context) {
        return de_RegisterClientCommand(output, context);
      }
    };
    var middleware_endpoint_4 = require_dist_cjs28();
    var middleware_serde_3 = require_dist_cjs27();
    var smithy_client_11 = require_dist_cjs37();
    var types_3 = require_dist_cjs();
    var StartDeviceAuthorizationCommand = class _StartDeviceAuthorizationCommand extends smithy_client_11.Command {
      constructor(input) {
        super();
        this.input = input;
      }
      static getEndpointParameterInstructions() {
        return {
          UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
          Endpoint: { type: "builtInParams", name: "endpoint" },
          Region: { type: "builtInParams", name: "region" },
          UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
        };
      }
      resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_3.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_4.getEndpointPlugin)(configuration, _StartDeviceAuthorizationCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOOIDCClient";
        const commandName = "StartDeviceAuthorizationCommand";
        const handlerExecutionContext = {
          logger,
          clientName,
          commandName,
          inputFilterSensitiveLog: (_) => _,
          outputFilterSensitiveLog: (_) => _,
          [types_3.SMITHY_CONTEXT_KEY]: {
            service: "AWSSSOOIDCService",
            operation: "StartDeviceAuthorization"
          }
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
      serialize(input, context) {
        return se_StartDeviceAuthorizationCommand(input, context);
      }
      deserialize(output, context) {
        return de_StartDeviceAuthorizationCommand(output, context);
      }
    };
    var commands = {
      CreateTokenCommand,
      RegisterClientCommand,
      StartDeviceAuthorizationCommand
    };
    var SSOOIDC = class extends SSOOIDCClient {
    };
    (0, smithy_client_6.createAggregatedClient)(commands, SSOOIDC);
  }
});

// node_modules/@aws-sdk/token-providers/dist-cjs/constants.js
var require_constants8 = __commonJS({
  "node_modules/@aws-sdk/token-providers/dist-cjs/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.REFRESH_MESSAGE = exports.EXPIRE_WINDOW_MS = void 0;
    exports.EXPIRE_WINDOW_MS = 5 * 60 * 1e3;
    exports.REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;
  }
});

// node_modules/@aws-sdk/token-providers/dist-cjs/getSsoOidcClient.js
var require_getSsoOidcClient = __commonJS({
  "node_modules/@aws-sdk/token-providers/dist-cjs/getSsoOidcClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSsoOidcClient = void 0;
    var client_sso_oidc_node_1 = require_client_sso_oidc_node();
    var ssoOidcClientsHash = {};
    var getSsoOidcClient = (ssoRegion) => {
      if (ssoOidcClientsHash[ssoRegion]) {
        return ssoOidcClientsHash[ssoRegion];
      }
      const ssoOidcClient = new client_sso_oidc_node_1.SSOOIDCClient({ region: ssoRegion });
      ssoOidcClientsHash[ssoRegion] = ssoOidcClient;
      return ssoOidcClient;
    };
    exports.getSsoOidcClient = getSsoOidcClient;
  }
});

// node_modules/@aws-sdk/token-providers/dist-cjs/getNewSsoOidcToken.js
var require_getNewSsoOidcToken = __commonJS({
  "node_modules/@aws-sdk/token-providers/dist-cjs/getNewSsoOidcToken.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getNewSsoOidcToken = void 0;
    var client_sso_oidc_node_1 = require_client_sso_oidc_node();
    var getSsoOidcClient_1 = require_getSsoOidcClient();
    var getNewSsoOidcToken = (ssoToken, ssoRegion) => {
      const ssoOidcClient = (0, getSsoOidcClient_1.getSsoOidcClient)(ssoRegion);
      return ssoOidcClient.send(new client_sso_oidc_node_1.CreateTokenCommand({
        clientId: ssoToken.clientId,
        clientSecret: ssoToken.clientSecret,
        refreshToken: ssoToken.refreshToken,
        grantType: "refresh_token"
      }));
    };
    exports.getNewSsoOidcToken = getNewSsoOidcToken;
  }
});

// node_modules/@aws-sdk/token-providers/dist-cjs/validateTokenExpiry.js
var require_validateTokenExpiry = __commonJS({
  "node_modules/@aws-sdk/token-providers/dist-cjs/validateTokenExpiry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateTokenExpiry = void 0;
    var property_provider_1 = require_dist_cjs6();
    var constants_1 = require_constants8();
    var validateTokenExpiry = (token) => {
      if (token.expiration && token.expiration.getTime() < Date.now()) {
        throw new property_provider_1.TokenProviderError(`Token is expired. ${constants_1.REFRESH_MESSAGE}`, false);
      }
    };
    exports.validateTokenExpiry = validateTokenExpiry;
  }
});

// node_modules/@aws-sdk/token-providers/dist-cjs/validateTokenKey.js
var require_validateTokenKey = __commonJS({
  "node_modules/@aws-sdk/token-providers/dist-cjs/validateTokenKey.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateTokenKey = void 0;
    var property_provider_1 = require_dist_cjs6();
    var constants_1 = require_constants8();
    var validateTokenKey = (key, value, forRefresh = false) => {
      if (typeof value === "undefined") {
        throw new property_provider_1.TokenProviderError(`Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${constants_1.REFRESH_MESSAGE}`, false);
      }
    };
    exports.validateTokenKey = validateTokenKey;
  }
});

// node_modules/@aws-sdk/token-providers/dist-cjs/writeSSOTokenToFile.js
var require_writeSSOTokenToFile = __commonJS({
  "node_modules/@aws-sdk/token-providers/dist-cjs/writeSSOTokenToFile.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.writeSSOTokenToFile = void 0;
    var shared_ini_file_loader_1 = require_dist_cjs23();
    var fs_1 = require("fs");
    var { writeFile } = fs_1.promises;
    var writeSSOTokenToFile = (id, ssoToken) => {
      const tokenFilepath = (0, shared_ini_file_loader_1.getSSOTokenFilepath)(id);
      const tokenString = JSON.stringify(ssoToken, null, 2);
      return writeFile(tokenFilepath, tokenString);
    };
    exports.writeSSOTokenToFile = writeSSOTokenToFile;
  }
});

// node_modules/@aws-sdk/token-providers/dist-cjs/fromSso.js
var require_fromSso = __commonJS({
  "node_modules/@aws-sdk/token-providers/dist-cjs/fromSso.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromSso = void 0;
    var property_provider_1 = require_dist_cjs6();
    var shared_ini_file_loader_1 = require_dist_cjs23();
    var constants_1 = require_constants8();
    var getNewSsoOidcToken_1 = require_getNewSsoOidcToken();
    var validateTokenExpiry_1 = require_validateTokenExpiry();
    var validateTokenKey_1 = require_validateTokenKey();
    var writeSSOTokenToFile_1 = require_writeSSOTokenToFile();
    var lastRefreshAttemptTime = /* @__PURE__ */ new Date(0);
    var fromSso = (init = {}) => async () => {
      const profiles = await (0, shared_ini_file_loader_1.parseKnownFiles)(init);
      const profileName = (0, shared_ini_file_loader_1.getProfileName)(init);
      const profile = profiles[profileName];
      if (!profile) {
        throw new property_provider_1.TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
      } else if (!profile["sso_session"]) {
        throw new property_provider_1.TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
      }
      const ssoSessionName = profile["sso_session"];
      const ssoSessions = await (0, shared_ini_file_loader_1.loadSsoSessionData)(init);
      const ssoSession = ssoSessions[ssoSessionName];
      if (!ssoSession) {
        throw new property_provider_1.TokenProviderError(`Sso session '${ssoSessionName}' could not be found in shared credentials file.`, false);
      }
      for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
        if (!ssoSession[ssoSessionRequiredKey]) {
          throw new property_provider_1.TokenProviderError(`Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`, false);
        }
      }
      const ssoStartUrl = ssoSession["sso_start_url"];
      const ssoRegion = ssoSession["sso_region"];
      let ssoToken;
      try {
        ssoToken = await (0, shared_ini_file_loader_1.getSSOTokenFromFile)(ssoSessionName);
      } catch (e) {
        throw new property_provider_1.TokenProviderError(`The SSO session token associated with profile=${profileName} was not found or is invalid. ${constants_1.REFRESH_MESSAGE}`, false);
      }
      (0, validateTokenKey_1.validateTokenKey)("accessToken", ssoToken.accessToken);
      (0, validateTokenKey_1.validateTokenKey)("expiresAt", ssoToken.expiresAt);
      const { accessToken, expiresAt } = ssoToken;
      const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
      if (existingToken.expiration.getTime() - Date.now() > constants_1.EXPIRE_WINDOW_MS) {
        return existingToken;
      }
      if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1e3) {
        (0, validateTokenExpiry_1.validateTokenExpiry)(existingToken);
        return existingToken;
      }
      (0, validateTokenKey_1.validateTokenKey)("clientId", ssoToken.clientId, true);
      (0, validateTokenKey_1.validateTokenKey)("clientSecret", ssoToken.clientSecret, true);
      (0, validateTokenKey_1.validateTokenKey)("refreshToken", ssoToken.refreshToken, true);
      try {
        lastRefreshAttemptTime.setTime(Date.now());
        const newSsoOidcToken = await (0, getNewSsoOidcToken_1.getNewSsoOidcToken)(ssoToken, ssoRegion);
        (0, validateTokenKey_1.validateTokenKey)("accessToken", newSsoOidcToken.accessToken);
        (0, validateTokenKey_1.validateTokenKey)("expiresIn", newSsoOidcToken.expiresIn);
        const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn * 1e3);
        try {
          await (0, writeSSOTokenToFile_1.writeSSOTokenToFile)(ssoSessionName, {
            ...ssoToken,
            accessToken: newSsoOidcToken.accessToken,
            expiresAt: newTokenExpiration.toISOString(),
            refreshToken: newSsoOidcToken.refreshToken
          });
        } catch (error) {
        }
        return {
          token: newSsoOidcToken.accessToken,
          expiration: newTokenExpiration
        };
      } catch (error) {
        (0, validateTokenExpiry_1.validateTokenExpiry)(existingToken);
        return existingToken;
      }
    };
    exports.fromSso = fromSso;
  }
});

// node_modules/@aws-sdk/token-providers/dist-cjs/fromStatic.js
var require_fromStatic3 = __commonJS({
  "node_modules/@aws-sdk/token-providers/dist-cjs/fromStatic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromStatic = void 0;
    var property_provider_1 = require_dist_cjs6();
    var fromStatic = ({ token }) => async () => {
      if (!token || !token.token) {
        throw new property_provider_1.TokenProviderError(`Please pass a valid token to fromStatic`, false);
      }
      return token;
    };
    exports.fromStatic = fromStatic;
  }
});

// node_modules/@aws-sdk/token-providers/dist-cjs/nodeProvider.js
var require_nodeProvider = __commonJS({
  "node_modules/@aws-sdk/token-providers/dist-cjs/nodeProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.nodeProvider = void 0;
    var property_provider_1 = require_dist_cjs6();
    var fromSso_1 = require_fromSso();
    var nodeProvider = (init = {}) => (0, property_provider_1.memoize)((0, property_provider_1.chain)((0, fromSso_1.fromSso)(init), async () => {
      throw new property_provider_1.TokenProviderError("Could not load token from any providers", false);
    }), (token) => token.expiration !== void 0 && token.expiration.getTime() - Date.now() < 3e5, (token) => token.expiration !== void 0);
    exports.nodeProvider = nodeProvider;
  }
});

// node_modules/@aws-sdk/token-providers/dist-cjs/index.js
var require_dist_cjs49 = __commonJS({
  "node_modules/@aws-sdk/token-providers/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_client_sso_oidc_node(), exports);
    tslib_1.__exportStar(require_fromSso(), exports);
    tslib_1.__exportStar(require_fromStatic3(), exports);
    tslib_1.__exportStar(require_nodeProvider(), exports);
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-cjs/resolveSSOCredentials.js
var require_resolveSSOCredentials = __commonJS({
  "node_modules/@aws-sdk/credential-provider-sso/dist-cjs/resolveSSOCredentials.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveSSOCredentials = void 0;
    var client_sso_1 = require_dist_cjs48();
    var token_providers_1 = require_dist_cjs49();
    var property_provider_1 = require_dist_cjs6();
    var shared_ini_file_loader_1 = require_dist_cjs23();
    var SHOULD_FAIL_CREDENTIAL_CHAIN = false;
    var resolveSSOCredentials = async ({ ssoStartUrl, ssoSession, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, profile }) => {
      let token;
      const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
      if (ssoSession) {
        try {
          const _token = await (0, token_providers_1.fromSso)({ profile })();
          token = {
            accessToken: _token.token,
            expiresAt: new Date(_token.expiration).toISOString()
          };
        } catch (e) {
          throw new property_provider_1.CredentialsProviderError(e.message, SHOULD_FAIL_CREDENTIAL_CHAIN);
        }
      } else {
        try {
          token = await (0, shared_ini_file_loader_1.getSSOTokenFromFile)(ssoStartUrl);
        } catch (e) {
          throw new property_provider_1.CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
        }
      }
      if (new Date(token.expiresAt).getTime() - Date.now() <= 0) {
        throw new property_provider_1.CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
      }
      const { accessToken } = token;
      const sso = ssoClient || new client_sso_1.SSOClient({ region: ssoRegion });
      let ssoResp;
      try {
        ssoResp = await sso.send(new client_sso_1.GetRoleCredentialsCommand({
          accountId: ssoAccountId,
          roleName: ssoRoleName,
          accessToken
        }));
      } catch (e) {
        throw property_provider_1.CredentialsProviderError.from(e, SHOULD_FAIL_CREDENTIAL_CHAIN);
      }
      const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration } = {} } = ssoResp;
      if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
        throw new property_provider_1.CredentialsProviderError("SSO returns an invalid temporary credential.", SHOULD_FAIL_CREDENTIAL_CHAIN);
      }
      return { accessKeyId, secretAccessKey, sessionToken, expiration: new Date(expiration) };
    };
    exports.resolveSSOCredentials = resolveSSOCredentials;
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-cjs/validateSsoProfile.js
var require_validateSsoProfile = __commonJS({
  "node_modules/@aws-sdk/credential-provider-sso/dist-cjs/validateSsoProfile.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateSsoProfile = void 0;
    var property_provider_1 = require_dist_cjs6();
    var validateSsoProfile = (profile) => {
      const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
      if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
        throw new property_provider_1.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, false);
      }
      return profile;
    };
    exports.validateSsoProfile = validateSsoProfile;
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-cjs/fromSSO.js
var require_fromSSO = __commonJS({
  "node_modules/@aws-sdk/credential-provider-sso/dist-cjs/fromSSO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromSSO = void 0;
    var property_provider_1 = require_dist_cjs6();
    var shared_ini_file_loader_1 = require_dist_cjs23();
    var isSsoProfile_1 = require_isSsoProfile();
    var resolveSSOCredentials_1 = require_resolveSSOCredentials();
    var validateSsoProfile_1 = require_validateSsoProfile();
    var fromSSO = (init = {}) => async () => {
      const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, ssoSession } = init;
      const profileName = (0, shared_ini_file_loader_1.getProfileName)(init);
      if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        const profiles = await (0, shared_ini_file_loader_1.parseKnownFiles)(init);
        const profile = profiles[profileName];
        if (!profile) {
          throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} was not found.`);
        }
        if (!(0, isSsoProfile_1.isSsoProfile)(profile)) {
          throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`);
        }
        if (profile === null || profile === void 0 ? void 0 : profile.sso_session) {
          const ssoSessions = await (0, shared_ini_file_loader_1.loadSsoSessionData)(init);
          const session = ssoSessions[profile.sso_session];
          const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
          if (ssoRegion && ssoRegion !== session.sso_region) {
            throw new property_provider_1.CredentialsProviderError(`Conflicting SSO region` + conflictMsg, false);
          }
          if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
            throw new property_provider_1.CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, false);
          }
          profile.sso_region = session.sso_region;
          profile.sso_start_url = session.sso_start_url;
        }
        const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = (0, validateSsoProfile_1.validateSsoProfile)(profile);
        return (0, resolveSSOCredentials_1.resolveSSOCredentials)({
          ssoStartUrl: sso_start_url,
          ssoSession: sso_session,
          ssoAccountId: sso_account_id,
          ssoRegion: sso_region,
          ssoRoleName: sso_role_name,
          ssoClient,
          profile: profileName
        });
      } else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
        throw new property_provider_1.CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"');
      } else {
        return (0, resolveSSOCredentials_1.resolveSSOCredentials)({
          ssoStartUrl,
          ssoSession,
          ssoAccountId,
          ssoRegion,
          ssoRoleName,
          ssoClient,
          profile: profileName
        });
      }
    };
    exports.fromSSO = fromSSO;
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-cjs/types.js
var require_types8 = __commonJS({
  "node_modules/@aws-sdk/credential-provider-sso/dist-cjs/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-cjs/index.js
var require_dist_cjs50 = __commonJS({
  "node_modules/@aws-sdk/credential-provider-sso/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_fromSSO(), exports);
    tslib_1.__exportStar(require_isSsoProfile(), exports);
    tslib_1.__exportStar(require_types8(), exports);
    tslib_1.__exportStar(require_validateSsoProfile(), exports);
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-cjs/resolveSsoCredentials.js
var require_resolveSsoCredentials = __commonJS({
  "node_modules/@aws-sdk/credential-provider-ini/dist-cjs/resolveSsoCredentials.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveSsoCredentials = exports.isSsoProfile = void 0;
    var credential_provider_sso_1 = require_dist_cjs50();
    var credential_provider_sso_2 = require_dist_cjs50();
    Object.defineProperty(exports, "isSsoProfile", { enumerable: true, get: function() {
      return credential_provider_sso_2.isSsoProfile;
    } });
    var resolveSsoCredentials = (data) => {
      const { sso_start_url, sso_account_id, sso_session, sso_region, sso_role_name } = (0, credential_provider_sso_1.validateSsoProfile)(data);
      return (0, credential_provider_sso_1.fromSSO)({
        ssoStartUrl: sso_start_url,
        ssoAccountId: sso_account_id,
        ssoSession: sso_session,
        ssoRegion: sso_region,
        ssoRoleName: sso_role_name
      })();
    };
    exports.resolveSsoCredentials = resolveSsoCredentials;
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-cjs/resolveStaticCredentials.js
var require_resolveStaticCredentials = __commonJS({
  "node_modules/@aws-sdk/credential-provider-ini/dist-cjs/resolveStaticCredentials.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveStaticCredentials = exports.isStaticCredsProfile = void 0;
    var isStaticCredsProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.aws_access_key_id === "string" && typeof arg.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1;
    exports.isStaticCredsProfile = isStaticCredsProfile;
    var resolveStaticCredentials = (profile) => Promise.resolve({
      accessKeyId: profile.aws_access_key_id,
      secretAccessKey: profile.aws_secret_access_key,
      sessionToken: profile.aws_session_token
    });
    exports.resolveStaticCredentials = resolveStaticCredentials;
  }
});

// node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/fromWebToken.js
var require_fromWebToken = __commonJS({
  "node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/fromWebToken.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromWebToken = void 0;
    var property_provider_1 = require_dist_cjs6();
    var fromWebToken = (init) => () => {
      const { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds, roleAssumerWithWebIdentity } = init;
      if (!roleAssumerWithWebIdentity) {
        throw new property_provider_1.CredentialsProviderError(`Role Arn '${roleArn}' needs to be assumed with web identity, but no role assumption callback was provided.`, false);
      }
      return roleAssumerWithWebIdentity({
        RoleArn: roleArn,
        RoleSessionName: roleSessionName !== null && roleSessionName !== void 0 ? roleSessionName : `aws-sdk-js-session-${Date.now()}`,
        WebIdentityToken: webIdentityToken,
        ProviderId: providerId,
        PolicyArns: policyArns,
        Policy: policy,
        DurationSeconds: durationSeconds
      });
    };
    exports.fromWebToken = fromWebToken;
  }
});

// node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/fromTokenFile.js
var require_fromTokenFile = __commonJS({
  "node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/fromTokenFile.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromTokenFile = void 0;
    var property_provider_1 = require_dist_cjs6();
    var fs_1 = require("fs");
    var fromWebToken_1 = require_fromWebToken();
    var ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
    var ENV_ROLE_ARN = "AWS_ROLE_ARN";
    var ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
    var fromTokenFile = (init = {}) => async () => {
      var _a, _b, _c;
      const webIdentityTokenFile = (_a = init === null || init === void 0 ? void 0 : init.webIdentityTokenFile) !== null && _a !== void 0 ? _a : process.env[ENV_TOKEN_FILE];
      const roleArn = (_b = init === null || init === void 0 ? void 0 : init.roleArn) !== null && _b !== void 0 ? _b : process.env[ENV_ROLE_ARN];
      const roleSessionName = (_c = init === null || init === void 0 ? void 0 : init.roleSessionName) !== null && _c !== void 0 ? _c : process.env[ENV_ROLE_SESSION_NAME];
      if (!webIdentityTokenFile || !roleArn) {
        throw new property_provider_1.CredentialsProviderError("Web identity configuration not specified");
      }
      return (0, fromWebToken_1.fromWebToken)({
        ...init,
        webIdentityToken: (0, fs_1.readFileSync)(webIdentityTokenFile, { encoding: "ascii" }),
        roleArn,
        roleSessionName
      })();
    };
    exports.fromTokenFile = fromTokenFile;
  }
});

// node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/index.js
var require_dist_cjs51 = __commonJS({
  "node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_fromTokenFile(), exports);
    tslib_1.__exportStar(require_fromWebToken(), exports);
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-cjs/resolveWebIdentityCredentials.js
var require_resolveWebIdentityCredentials = __commonJS({
  "node_modules/@aws-sdk/credential-provider-ini/dist-cjs/resolveWebIdentityCredentials.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveWebIdentityCredentials = exports.isWebIdentityProfile = void 0;
    var credential_provider_web_identity_1 = require_dist_cjs51();
    var isWebIdentityProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.web_identity_token_file === "string" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1;
    exports.isWebIdentityProfile = isWebIdentityProfile;
    var resolveWebIdentityCredentials = async (profile, options) => (0, credential_provider_web_identity_1.fromTokenFile)({
      webIdentityTokenFile: profile.web_identity_token_file,
      roleArn: profile.role_arn,
      roleSessionName: profile.role_session_name,
      roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity
    })();
    exports.resolveWebIdentityCredentials = resolveWebIdentityCredentials;
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-cjs/resolveProfileData.js
var require_resolveProfileData = __commonJS({
  "node_modules/@aws-sdk/credential-provider-ini/dist-cjs/resolveProfileData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveProfileData = void 0;
    var property_provider_1 = require_dist_cjs6();
    var resolveAssumeRoleCredentials_1 = require_resolveAssumeRoleCredentials();
    var resolveProcessCredentials_1 = require_resolveProcessCredentials2();
    var resolveSsoCredentials_1 = require_resolveSsoCredentials();
    var resolveStaticCredentials_1 = require_resolveStaticCredentials();
    var resolveWebIdentityCredentials_1 = require_resolveWebIdentityCredentials();
    var resolveProfileData = async (profileName, profiles, options, visitedProfiles = {}) => {
      const data = profiles[profileName];
      if (Object.keys(visitedProfiles).length > 0 && (0, resolveStaticCredentials_1.isStaticCredsProfile)(data)) {
        return (0, resolveStaticCredentials_1.resolveStaticCredentials)(data);
      }
      if ((0, resolveAssumeRoleCredentials_1.isAssumeRoleProfile)(data)) {
        return (0, resolveAssumeRoleCredentials_1.resolveAssumeRoleCredentials)(profileName, profiles, options, visitedProfiles);
      }
      if ((0, resolveStaticCredentials_1.isStaticCredsProfile)(data)) {
        return (0, resolveStaticCredentials_1.resolveStaticCredentials)(data);
      }
      if ((0, resolveWebIdentityCredentials_1.isWebIdentityProfile)(data)) {
        return (0, resolveWebIdentityCredentials_1.resolveWebIdentityCredentials)(data, options);
      }
      if ((0, resolveProcessCredentials_1.isProcessProfile)(data)) {
        return (0, resolveProcessCredentials_1.resolveProcessCredentials)(options, profileName);
      }
      if ((0, resolveSsoCredentials_1.isSsoProfile)(data)) {
        return (0, resolveSsoCredentials_1.resolveSsoCredentials)(data);
      }
      throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} could not be found or parsed in shared credentials file.`);
    };
    exports.resolveProfileData = resolveProfileData;
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-cjs/fromIni.js
var require_fromIni = __commonJS({
  "node_modules/@aws-sdk/credential-provider-ini/dist-cjs/fromIni.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromIni = void 0;
    var shared_ini_file_loader_1 = require_dist_cjs23();
    var resolveProfileData_1 = require_resolveProfileData();
    var fromIni = (init = {}) => async () => {
      const profiles = await (0, shared_ini_file_loader_1.parseKnownFiles)(init);
      return (0, resolveProfileData_1.resolveProfileData)((0, shared_ini_file_loader_1.getProfileName)(init), profiles, init);
    };
    exports.fromIni = fromIni;
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js
var require_dist_cjs52 = __commonJS({
  "node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_fromIni(), exports);
  }
});

// node_modules/@aws-sdk/credential-provider-node/dist-cjs/remoteProvider.js
var require_remoteProvider = __commonJS({
  "node_modules/@aws-sdk/credential-provider-node/dist-cjs/remoteProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.remoteProvider = exports.ENV_IMDS_DISABLED = void 0;
    var credential_provider_imds_1 = require_dist_cjs41();
    var property_provider_1 = require_dist_cjs6();
    exports.ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
    var remoteProvider = (init) => {
      if (process.env[credential_provider_imds_1.ENV_CMDS_RELATIVE_URI] || process.env[credential_provider_imds_1.ENV_CMDS_FULL_URI]) {
        return (0, credential_provider_imds_1.fromContainerMetadata)(init);
      }
      if (process.env[exports.ENV_IMDS_DISABLED]) {
        return async () => {
          throw new property_provider_1.CredentialsProviderError("EC2 Instance Metadata Service access disabled");
        };
      }
      return (0, credential_provider_imds_1.fromInstanceMetadata)(init);
    };
    exports.remoteProvider = remoteProvider;
  }
});

// node_modules/@aws-sdk/credential-provider-node/dist-cjs/defaultProvider.js
var require_defaultProvider = __commonJS({
  "node_modules/@aws-sdk/credential-provider-node/dist-cjs/defaultProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultProvider = void 0;
    var credential_provider_env_1 = require_dist_cjs40();
    var credential_provider_ini_1 = require_dist_cjs52();
    var credential_provider_process_1 = require_dist_cjs42();
    var credential_provider_sso_1 = require_dist_cjs50();
    var credential_provider_web_identity_1 = require_dist_cjs51();
    var property_provider_1 = require_dist_cjs6();
    var shared_ini_file_loader_1 = require_dist_cjs23();
    var remoteProvider_1 = require_remoteProvider();
    var defaultProvider = (init = {}) => (0, property_provider_1.memoize)((0, property_provider_1.chain)(...init.profile || process.env[shared_ini_file_loader_1.ENV_PROFILE] ? [] : [(0, credential_provider_env_1.fromEnv)()], (0, credential_provider_sso_1.fromSSO)(init), (0, credential_provider_ini_1.fromIni)(init), (0, credential_provider_process_1.fromProcess)(init), (0, credential_provider_web_identity_1.fromTokenFile)(init), (0, remoteProvider_1.remoteProvider)(init), async () => {
      throw new property_provider_1.CredentialsProviderError("Could not load credentials from any providers", false);
    }), (credentials) => credentials.expiration !== void 0 && credentials.expiration.getTime() - Date.now() < 3e5, (credentials) => credentials.expiration !== void 0);
    exports.defaultProvider = defaultProvider;
  }
});

// node_modules/@aws-sdk/credential-provider-node/dist-cjs/index.js
var require_dist_cjs53 = __commonJS({
  "node_modules/@aws-sdk/credential-provider-node/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_defaultProvider(), exports);
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/endpoint/ruleset.js
var require_ruleset2 = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/endpoint/ruleset.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ruleSet = void 0;
    var F = "required";
    var G = "type";
    var H = "fn";
    var I = "argv";
    var J = "ref";
    var a = false;
    var b = true;
    var c = "booleanEquals";
    var d = "stringEquals";
    var e = "sigv4";
    var f = "sts";
    var g = "us-east-1";
    var h = "endpoint";
    var i = "https://sts.{Region}.{PartitionResult#dnsSuffix}";
    var j = "tree";
    var k = "error";
    var l = "getAttr";
    var m = { [F]: false, [G]: "String" };
    var n = { [F]: true, "default": false, [G]: "Boolean" };
    var o = { [J]: "Endpoint" };
    var p = { [H]: "isSet", [I]: [{ [J]: "Region" }] };
    var q = { [J]: "Region" };
    var r = { [H]: "aws.partition", [I]: [q], "assign": "PartitionResult" };
    var s = { [J]: "UseFIPS" };
    var t = { [J]: "UseDualStack" };
    var u = { "url": "https://sts.amazonaws.com", "properties": { "authSchemes": [{ "name": e, "signingName": f, "signingRegion": g }] }, "headers": {} };
    var v = {};
    var w = { "conditions": [{ [H]: d, [I]: [q, "aws-global"] }], [h]: u, [G]: h };
    var x = { [H]: c, [I]: [s, true] };
    var y = { [H]: c, [I]: [t, true] };
    var z = { [H]: l, [I]: [{ [J]: "PartitionResult" }, "supportsFIPS"] };
    var A = { [J]: "PartitionResult" };
    var B = { [H]: c, [I]: [true, { [H]: l, [I]: [A, "supportsDualStack"] }] };
    var C = [{ [H]: "isSet", [I]: [o] }];
    var D = [x];
    var E = [y];
    var _data = { version: "1.0", parameters: { Region: m, UseDualStack: n, UseFIPS: n, Endpoint: m, UseGlobalEndpoint: n }, rules: [{ conditions: [{ [H]: c, [I]: [{ [J]: "UseGlobalEndpoint" }, b] }, { [H]: "not", [I]: C }, p, r, { [H]: c, [I]: [s, a] }, { [H]: c, [I]: [t, a] }], rules: [{ conditions: [{ [H]: d, [I]: [q, "ap-northeast-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "ap-south-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "ap-southeast-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "ap-southeast-2"] }], endpoint: u, [G]: h }, w, { conditions: [{ [H]: d, [I]: [q, "ca-central-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-central-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-north-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-west-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-west-2"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-west-3"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "sa-east-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, g] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "us-east-2"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "us-west-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "us-west-2"] }], endpoint: u, [G]: h }, { endpoint: { url: i, properties: { authSchemes: [{ name: e, signingName: f, signingRegion: "{Region}" }] }, headers: v }, [G]: h }], [G]: j }, { conditions: C, rules: [{ conditions: D, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [G]: k }, { conditions: E, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [G]: k }, { endpoint: { url: o, properties: v, headers: v }, [G]: h }], [G]: j }, { conditions: [p], rules: [{ conditions: [r], rules: [{ conditions: [x, y], rules: [{ conditions: [{ [H]: c, [I]: [b, z] }, B], rules: [{ endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v, headers: v }, [G]: h }], [G]: j }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [G]: k }], [G]: j }, { conditions: D, rules: [{ conditions: [{ [H]: c, [I]: [z, b] }], rules: [{ conditions: [{ [H]: d, [I]: [{ [H]: l, [I]: [A, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://sts.{Region}.amazonaws.com", properties: v, headers: v }, [G]: h }, { endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", properties: v, headers: v }, [G]: h }], [G]: j }, { error: "FIPS is enabled but this partition does not support FIPS", [G]: k }], [G]: j }, { conditions: E, rules: [{ conditions: [B], rules: [{ endpoint: { url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v, headers: v }, [G]: h }], [G]: j }, { error: "DualStack is enabled but this partition does not support DualStack", [G]: k }], [G]: j }, w, { endpoint: { url: i, properties: v, headers: v }, [G]: h }], [G]: j }], [G]: j }, { error: "Invalid Configuration: Missing Region", [G]: k }] };
    exports.ruleSet = _data;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/endpoint/endpointResolver.js
var require_endpointResolver2 = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/endpoint/endpointResolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultEndpointResolver = void 0;
    var util_endpoints_1 = require_dist_cjs17();
    var ruleset_1 = require_ruleset2();
    var defaultEndpointResolver = (endpointParams, context = {}) => {
      return (0, util_endpoints_1.resolveEndpoint)(ruleset_1.ruleSet, {
        endpointParams,
        logger: context.logger
      });
    };
    exports.defaultEndpointResolver = defaultEndpointResolver;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/runtimeConfig.shared.js
var require_runtimeConfig_shared2 = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/runtimeConfig.shared.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRuntimeConfig = void 0;
    var smithy_client_1 = require_dist_cjs37();
    var url_parser_1 = require_dist_cjs26();
    var util_base64_1 = require_dist_cjs33();
    var util_utf8_1 = require_dist_cjs13();
    var endpointResolver_1 = require_endpointResolver2();
    var getRuntimeConfig = (config) => {
      return {
        apiVersion: "2011-06-15",
        base64Decoder: (config == null ? void 0 : config.base64Decoder) ?? util_base64_1.fromBase64,
        base64Encoder: (config == null ? void 0 : config.base64Encoder) ?? util_base64_1.toBase64,
        disableHostPrefix: (config == null ? void 0 : config.disableHostPrefix) ?? false,
        endpointProvider: (config == null ? void 0 : config.endpointProvider) ?? endpointResolver_1.defaultEndpointResolver,
        extensions: (config == null ? void 0 : config.extensions) ?? [],
        logger: (config == null ? void 0 : config.logger) ?? new smithy_client_1.NoOpLogger(),
        serviceId: (config == null ? void 0 : config.serviceId) ?? "STS",
        urlParser: (config == null ? void 0 : config.urlParser) ?? url_parser_1.parseUrl,
        utf8Decoder: (config == null ? void 0 : config.utf8Decoder) ?? util_utf8_1.fromUtf8,
        utf8Encoder: (config == null ? void 0 : config.utf8Encoder) ?? util_utf8_1.toUtf8
      };
    };
    exports.getRuntimeConfig = getRuntimeConfig;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/runtimeConfig.js
var require_runtimeConfig2 = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/runtimeConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRuntimeConfig = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var package_json_1 = tslib_1.__importDefault(require_package2());
    var defaultStsRoleAssumers_1 = require_defaultStsRoleAssumers();
    var core_1 = require_dist_cjs39();
    var credential_provider_node_1 = require_dist_cjs53();
    var util_user_agent_node_1 = require_dist_cjs43();
    var config_resolver_1 = require_dist_cjs21();
    var hash_node_1 = require_dist_cjs44();
    var middleware_retry_1 = require_dist_cjs31();
    var node_config_provider_1 = require_dist_cjs24();
    var node_http_handler_1 = require_dist_cjs35();
    var util_body_length_node_1 = require_dist_cjs45();
    var util_retry_1 = require_dist_cjs30();
    var runtimeConfig_shared_1 = require_runtimeConfig_shared2();
    var smithy_client_1 = require_dist_cjs37();
    var util_defaults_mode_node_1 = require_dist_cjs46();
    var smithy_client_2 = require_dist_cjs37();
    var getRuntimeConfig = (config) => {
      (0, smithy_client_2.emitWarningIfUnsupportedVersion)(process.version);
      const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
      const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
      const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
      (0, core_1.emitWarningIfUnsupportedVersion)(process.version);
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: (config == null ? void 0 : config.bodyLengthChecker) ?? util_body_length_node_1.calculateBodyLength,
        credentialDefaultProvider: (config == null ? void 0 : config.credentialDefaultProvider) ?? (0, defaultStsRoleAssumers_1.decorateDefaultCredentialProvider)(credential_provider_node_1.defaultProvider),
        defaultUserAgentProvider: (config == null ? void 0 : config.defaultUserAgentProvider) ?? (0, util_user_agent_node_1.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        maxAttempts: (config == null ? void 0 : config.maxAttempts) ?? (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: (config == null ? void 0 : config.region) ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: (config == null ? void 0 : config.requestHandler) ?? new node_http_handler_1.NodeHttpHandler(defaultConfigProvider),
        retryMode: (config == null ? void 0 : config.retryMode) ?? (0, node_config_provider_1.loadConfig)({
          ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || util_retry_1.DEFAULT_RETRY_MODE
        }),
        sha256: (config == null ? void 0 : config.sha256) ?? hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: (config == null ? void 0 : config.streamCollector) ?? node_http_handler_1.streamCollector,
        useDualstackEndpoint: (config == null ? void 0 : config.useDualstackEndpoint) ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: (config == null ? void 0 : config.useFipsEndpoint) ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      };
    };
    exports.getRuntimeConfig = getRuntimeConfig;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/runtimeExtensions.js
var require_runtimeExtensions2 = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/runtimeExtensions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveRuntimeExtensions = void 0;
    var region_config_resolver_1 = require_dist_cjs47();
    var protocol_http_1 = require_dist_cjs2();
    var smithy_client_1 = require_dist_cjs37();
    var asPartial = (t) => t;
    var resolveRuntimeExtensions = (runtimeConfig, extensions) => {
      const extensionConfiguration = {
        ...asPartial((0, region_config_resolver_1.getAwsRegionExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0, smithy_client_1.getDefaultExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0, protocol_http_1.getHttpHandlerExtensionConfiguration)(runtimeConfig))
      };
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return {
        ...runtimeConfig,
        ...(0, region_config_resolver_1.resolveAwsRegionExtensionConfiguration)(extensionConfiguration),
        ...(0, smithy_client_1.resolveDefaultRuntimeConfig)(extensionConfiguration),
        ...(0, protocol_http_1.resolveHttpHandlerRuntimeConfig)(extensionConfiguration)
      };
    };
    exports.resolveRuntimeExtensions = resolveRuntimeExtensions;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/STSClient.js
var require_STSClient = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/STSClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.STSClient = exports.__Client = void 0;
    var middleware_host_header_1 = require_dist_cjs3();
    var middleware_logger_1 = require_dist_cjs4();
    var middleware_recursion_detection_1 = require_dist_cjs5();
    var middleware_sdk_sts_1 = require_dist_cjs38();
    var middleware_user_agent_1 = require_dist_cjs19();
    var config_resolver_1 = require_dist_cjs21();
    var middleware_content_length_1 = require_dist_cjs22();
    var middleware_endpoint_1 = require_dist_cjs28();
    var middleware_retry_1 = require_dist_cjs31();
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "__Client", { enumerable: true, get: function() {
      return smithy_client_1.Client;
    } });
    var EndpointParameters_1 = require_EndpointParameters2();
    var runtimeConfig_1 = require_runtimeConfig2();
    var runtimeExtensions_1 = require_runtimeExtensions2();
    var STSClient = class _STSClient extends smithy_client_1.Client {
      constructor(...[configuration]) {
        const _config_0 = (0, runtimeConfig_1.getRuntimeConfig)(configuration || {});
        const _config_1 = (0, EndpointParameters_1.resolveClientEndpointParameters)(_config_0);
        const _config_2 = (0, config_resolver_1.resolveRegionConfig)(_config_1);
        const _config_3 = (0, middleware_endpoint_1.resolveEndpointConfig)(_config_2);
        const _config_4 = (0, middleware_retry_1.resolveRetryConfig)(_config_3);
        const _config_5 = (0, middleware_host_header_1.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0, middleware_sdk_sts_1.resolveStsAuthConfig)(_config_5, { stsClientCtor: _STSClient });
        const _config_7 = (0, middleware_user_agent_1.resolveUserAgentConfig)(_config_6);
        const _config_8 = (0, runtimeExtensions_1.resolveRuntimeExtensions)(_config_7, (configuration == null ? void 0 : configuration.extensions) || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use((0, middleware_retry_1.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, middleware_content_length_1.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, middleware_host_header_1.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, middleware_logger_1.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, middleware_recursion_detection_1.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0, middleware_user_agent_1.getUserAgentPlugin)(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
    exports.STSClient = STSClient;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/commands/AssumeRoleWithSAMLCommand.js
var require_AssumeRoleWithSAMLCommand = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/commands/AssumeRoleWithSAMLCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AssumeRoleWithSAMLCommand = exports.$Command = void 0;
    var middleware_endpoint_1 = require_dist_cjs28();
    var middleware_serde_1 = require_dist_cjs27();
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "$Command", { enumerable: true, get: function() {
      return smithy_client_1.Command;
    } });
    var types_1 = require_dist_cjs();
    var models_0_1 = require_models_0();
    var Aws_query_1 = require_Aws_query();
    var AssumeRoleWithSAMLCommand = class _AssumeRoleWithSAMLCommand extends smithy_client_1.Command {
      static getEndpointParameterInstructions() {
        return {
          UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
          UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
          Endpoint: { type: "builtInParams", name: "endpoint" },
          Region: { type: "builtInParams", name: "region" },
          UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
        };
      }
      constructor(input) {
        super();
        this.input = input;
      }
      resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_1.getEndpointPlugin)(configuration, _AssumeRoleWithSAMLCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "AssumeRoleWithSAMLCommand";
        const handlerExecutionContext = {
          logger,
          clientName,
          commandName,
          inputFilterSensitiveLog: models_0_1.AssumeRoleWithSAMLRequestFilterSensitiveLog,
          outputFilterSensitiveLog: models_0_1.AssumeRoleWithSAMLResponseFilterSensitiveLog,
          [types_1.SMITHY_CONTEXT_KEY]: {
            service: "AWSSecurityTokenServiceV20110615",
            operation: "AssumeRoleWithSAML"
          }
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
      serialize(input, context) {
        return (0, Aws_query_1.se_AssumeRoleWithSAMLCommand)(input, context);
      }
      deserialize(output, context) {
        return (0, Aws_query_1.de_AssumeRoleWithSAMLCommand)(output, context);
      }
    };
    exports.AssumeRoleWithSAMLCommand = AssumeRoleWithSAMLCommand;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/commands/DecodeAuthorizationMessageCommand.js
var require_DecodeAuthorizationMessageCommand = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/commands/DecodeAuthorizationMessageCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DecodeAuthorizationMessageCommand = exports.$Command = void 0;
    var middleware_signing_1 = require_dist_cjs16();
    var middleware_endpoint_1 = require_dist_cjs28();
    var middleware_serde_1 = require_dist_cjs27();
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "$Command", { enumerable: true, get: function() {
      return smithy_client_1.Command;
    } });
    var types_1 = require_dist_cjs();
    var Aws_query_1 = require_Aws_query();
    var DecodeAuthorizationMessageCommand = class _DecodeAuthorizationMessageCommand extends smithy_client_1.Command {
      static getEndpointParameterInstructions() {
        return {
          UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
          UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
          Endpoint: { type: "builtInParams", name: "endpoint" },
          Region: { type: "builtInParams", name: "region" },
          UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
        };
      }
      constructor(input) {
        super();
        this.input = input;
      }
      resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_1.getEndpointPlugin)(configuration, _DecodeAuthorizationMessageCommand.getEndpointParameterInstructions()));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "DecodeAuthorizationMessageCommand";
        const handlerExecutionContext = {
          logger,
          clientName,
          commandName,
          inputFilterSensitiveLog: (_) => _,
          outputFilterSensitiveLog: (_) => _,
          [types_1.SMITHY_CONTEXT_KEY]: {
            service: "AWSSecurityTokenServiceV20110615",
            operation: "DecodeAuthorizationMessage"
          }
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
      serialize(input, context) {
        return (0, Aws_query_1.se_DecodeAuthorizationMessageCommand)(input, context);
      }
      deserialize(output, context) {
        return (0, Aws_query_1.de_DecodeAuthorizationMessageCommand)(output, context);
      }
    };
    exports.DecodeAuthorizationMessageCommand = DecodeAuthorizationMessageCommand;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/commands/GetAccessKeyInfoCommand.js
var require_GetAccessKeyInfoCommand = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/commands/GetAccessKeyInfoCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetAccessKeyInfoCommand = exports.$Command = void 0;
    var middleware_signing_1 = require_dist_cjs16();
    var middleware_endpoint_1 = require_dist_cjs28();
    var middleware_serde_1 = require_dist_cjs27();
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "$Command", { enumerable: true, get: function() {
      return smithy_client_1.Command;
    } });
    var types_1 = require_dist_cjs();
    var Aws_query_1 = require_Aws_query();
    var GetAccessKeyInfoCommand = class _GetAccessKeyInfoCommand extends smithy_client_1.Command {
      static getEndpointParameterInstructions() {
        return {
          UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
          UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
          Endpoint: { type: "builtInParams", name: "endpoint" },
          Region: { type: "builtInParams", name: "region" },
          UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
        };
      }
      constructor(input) {
        super();
        this.input = input;
      }
      resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_1.getEndpointPlugin)(configuration, _GetAccessKeyInfoCommand.getEndpointParameterInstructions()));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "GetAccessKeyInfoCommand";
        const handlerExecutionContext = {
          logger,
          clientName,
          commandName,
          inputFilterSensitiveLog: (_) => _,
          outputFilterSensitiveLog: (_) => _,
          [types_1.SMITHY_CONTEXT_KEY]: {
            service: "AWSSecurityTokenServiceV20110615",
            operation: "GetAccessKeyInfo"
          }
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
      serialize(input, context) {
        return (0, Aws_query_1.se_GetAccessKeyInfoCommand)(input, context);
      }
      deserialize(output, context) {
        return (0, Aws_query_1.de_GetAccessKeyInfoCommand)(output, context);
      }
    };
    exports.GetAccessKeyInfoCommand = GetAccessKeyInfoCommand;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/commands/GetCallerIdentityCommand.js
var require_GetCallerIdentityCommand = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/commands/GetCallerIdentityCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetCallerIdentityCommand = exports.$Command = void 0;
    var middleware_signing_1 = require_dist_cjs16();
    var middleware_endpoint_1 = require_dist_cjs28();
    var middleware_serde_1 = require_dist_cjs27();
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "$Command", { enumerable: true, get: function() {
      return smithy_client_1.Command;
    } });
    var types_1 = require_dist_cjs();
    var Aws_query_1 = require_Aws_query();
    var GetCallerIdentityCommand = class _GetCallerIdentityCommand extends smithy_client_1.Command {
      static getEndpointParameterInstructions() {
        return {
          UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
          UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
          Endpoint: { type: "builtInParams", name: "endpoint" },
          Region: { type: "builtInParams", name: "region" },
          UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
        };
      }
      constructor(input) {
        super();
        this.input = input;
      }
      resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_1.getEndpointPlugin)(configuration, _GetCallerIdentityCommand.getEndpointParameterInstructions()));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "GetCallerIdentityCommand";
        const handlerExecutionContext = {
          logger,
          clientName,
          commandName,
          inputFilterSensitiveLog: (_) => _,
          outputFilterSensitiveLog: (_) => _,
          [types_1.SMITHY_CONTEXT_KEY]: {
            service: "AWSSecurityTokenServiceV20110615",
            operation: "GetCallerIdentity"
          }
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
      serialize(input, context) {
        return (0, Aws_query_1.se_GetCallerIdentityCommand)(input, context);
      }
      deserialize(output, context) {
        return (0, Aws_query_1.de_GetCallerIdentityCommand)(output, context);
      }
    };
    exports.GetCallerIdentityCommand = GetCallerIdentityCommand;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/commands/GetFederationTokenCommand.js
var require_GetFederationTokenCommand = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/commands/GetFederationTokenCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetFederationTokenCommand = exports.$Command = void 0;
    var middleware_signing_1 = require_dist_cjs16();
    var middleware_endpoint_1 = require_dist_cjs28();
    var middleware_serde_1 = require_dist_cjs27();
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "$Command", { enumerable: true, get: function() {
      return smithy_client_1.Command;
    } });
    var types_1 = require_dist_cjs();
    var models_0_1 = require_models_0();
    var Aws_query_1 = require_Aws_query();
    var GetFederationTokenCommand = class _GetFederationTokenCommand extends smithy_client_1.Command {
      static getEndpointParameterInstructions() {
        return {
          UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
          UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
          Endpoint: { type: "builtInParams", name: "endpoint" },
          Region: { type: "builtInParams", name: "region" },
          UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
        };
      }
      constructor(input) {
        super();
        this.input = input;
      }
      resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_1.getEndpointPlugin)(configuration, _GetFederationTokenCommand.getEndpointParameterInstructions()));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "GetFederationTokenCommand";
        const handlerExecutionContext = {
          logger,
          clientName,
          commandName,
          inputFilterSensitiveLog: (_) => _,
          outputFilterSensitiveLog: models_0_1.GetFederationTokenResponseFilterSensitiveLog,
          [types_1.SMITHY_CONTEXT_KEY]: {
            service: "AWSSecurityTokenServiceV20110615",
            operation: "GetFederationToken"
          }
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
      serialize(input, context) {
        return (0, Aws_query_1.se_GetFederationTokenCommand)(input, context);
      }
      deserialize(output, context) {
        return (0, Aws_query_1.de_GetFederationTokenCommand)(output, context);
      }
    };
    exports.GetFederationTokenCommand = GetFederationTokenCommand;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/commands/GetSessionTokenCommand.js
var require_GetSessionTokenCommand = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/commands/GetSessionTokenCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetSessionTokenCommand = exports.$Command = void 0;
    var middleware_signing_1 = require_dist_cjs16();
    var middleware_endpoint_1 = require_dist_cjs28();
    var middleware_serde_1 = require_dist_cjs27();
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "$Command", { enumerable: true, get: function() {
      return smithy_client_1.Command;
    } });
    var types_1 = require_dist_cjs();
    var models_0_1 = require_models_0();
    var Aws_query_1 = require_Aws_query();
    var GetSessionTokenCommand = class _GetSessionTokenCommand extends smithy_client_1.Command {
      static getEndpointParameterInstructions() {
        return {
          UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
          UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
          Endpoint: { type: "builtInParams", name: "endpoint" },
          Region: { type: "builtInParams", name: "region" },
          UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
        };
      }
      constructor(input) {
        super();
        this.input = input;
      }
      resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_1.getEndpointPlugin)(configuration, _GetSessionTokenCommand.getEndpointParameterInstructions()));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "GetSessionTokenCommand";
        const handlerExecutionContext = {
          logger,
          clientName,
          commandName,
          inputFilterSensitiveLog: (_) => _,
          outputFilterSensitiveLog: models_0_1.GetSessionTokenResponseFilterSensitiveLog,
          [types_1.SMITHY_CONTEXT_KEY]: {
            service: "AWSSecurityTokenServiceV20110615",
            operation: "GetSessionToken"
          }
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
      serialize(input, context) {
        return (0, Aws_query_1.se_GetSessionTokenCommand)(input, context);
      }
      deserialize(output, context) {
        return (0, Aws_query_1.de_GetSessionTokenCommand)(output, context);
      }
    };
    exports.GetSessionTokenCommand = GetSessionTokenCommand;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/STS.js
var require_STS = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/STS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.STS = void 0;
    var smithy_client_1 = require_dist_cjs37();
    var AssumeRoleCommand_1 = require_AssumeRoleCommand();
    var AssumeRoleWithSAMLCommand_1 = require_AssumeRoleWithSAMLCommand();
    var AssumeRoleWithWebIdentityCommand_1 = require_AssumeRoleWithWebIdentityCommand();
    var DecodeAuthorizationMessageCommand_1 = require_DecodeAuthorizationMessageCommand();
    var GetAccessKeyInfoCommand_1 = require_GetAccessKeyInfoCommand();
    var GetCallerIdentityCommand_1 = require_GetCallerIdentityCommand();
    var GetFederationTokenCommand_1 = require_GetFederationTokenCommand();
    var GetSessionTokenCommand_1 = require_GetSessionTokenCommand();
    var STSClient_1 = require_STSClient();
    var commands = {
      AssumeRoleCommand: AssumeRoleCommand_1.AssumeRoleCommand,
      AssumeRoleWithSAMLCommand: AssumeRoleWithSAMLCommand_1.AssumeRoleWithSAMLCommand,
      AssumeRoleWithWebIdentityCommand: AssumeRoleWithWebIdentityCommand_1.AssumeRoleWithWebIdentityCommand,
      DecodeAuthorizationMessageCommand: DecodeAuthorizationMessageCommand_1.DecodeAuthorizationMessageCommand,
      GetAccessKeyInfoCommand: GetAccessKeyInfoCommand_1.GetAccessKeyInfoCommand,
      GetCallerIdentityCommand: GetCallerIdentityCommand_1.GetCallerIdentityCommand,
      GetFederationTokenCommand: GetFederationTokenCommand_1.GetFederationTokenCommand,
      GetSessionTokenCommand: GetSessionTokenCommand_1.GetSessionTokenCommand
    };
    var STS = class extends STSClient_1.STSClient {
    };
    exports.STS = STS;
    (0, smithy_client_1.createAggregatedClient)(commands, STS);
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/commands/index.js
var require_commands2 = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/commands/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_AssumeRoleCommand(), exports);
    tslib_1.__exportStar(require_AssumeRoleWithSAMLCommand(), exports);
    tslib_1.__exportStar(require_AssumeRoleWithWebIdentityCommand(), exports);
    tslib_1.__exportStar(require_DecodeAuthorizationMessageCommand(), exports);
    tslib_1.__exportStar(require_GetAccessKeyInfoCommand(), exports);
    tslib_1.__exportStar(require_GetCallerIdentityCommand(), exports);
    tslib_1.__exportStar(require_GetFederationTokenCommand(), exports);
    tslib_1.__exportStar(require_GetSessionTokenCommand(), exports);
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/models/index.js
var require_models2 = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/models/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_models_0(), exports);
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/defaultRoleAssumers.js
var require_defaultRoleAssumers = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/defaultRoleAssumers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decorateDefaultCredentialProvider = exports.getDefaultRoleAssumerWithWebIdentity = exports.getDefaultRoleAssumer = void 0;
    var defaultStsRoleAssumers_1 = require_defaultStsRoleAssumers();
    var STSClient_1 = require_STSClient();
    var getCustomizableStsClientCtor = (baseCtor, customizations) => {
      if (!customizations)
        return baseCtor;
      else
        return class CustomizableSTSClient extends baseCtor {
          constructor(config) {
            super(config);
            for (const customization of customizations) {
              this.middlewareStack.use(customization);
            }
          }
        };
    };
    var getDefaultRoleAssumer = (stsOptions = {}, stsPlugins) => (0, defaultStsRoleAssumers_1.getDefaultRoleAssumer)(stsOptions, getCustomizableStsClientCtor(STSClient_1.STSClient, stsPlugins));
    exports.getDefaultRoleAssumer = getDefaultRoleAssumer;
    var getDefaultRoleAssumerWithWebIdentity = (stsOptions = {}, stsPlugins) => (0, defaultStsRoleAssumers_1.getDefaultRoleAssumerWithWebIdentity)(stsOptions, getCustomizableStsClientCtor(STSClient_1.STSClient, stsPlugins));
    exports.getDefaultRoleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity;
    var decorateDefaultCredentialProvider = (provider) => (input) => provider({
      roleAssumer: (0, exports.getDefaultRoleAssumer)(input),
      roleAssumerWithWebIdentity: (0, exports.getDefaultRoleAssumerWithWebIdentity)(input),
      ...input
    });
    exports.decorateDefaultCredentialProvider = decorateDefaultCredentialProvider;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/index.js
var require_dist_cjs54 = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.STSServiceException = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_STSClient(), exports);
    tslib_1.__exportStar(require_STS(), exports);
    tslib_1.__exportStar(require_commands2(), exports);
    tslib_1.__exportStar(require_models2(), exports);
    tslib_1.__exportStar(require_defaultRoleAssumers(), exports);
    require_dist_cjs18();
    var STSServiceException_1 = require_STSServiceException();
    Object.defineProperty(exports, "STSServiceException", { enumerable: true, get: function() {
      return STSServiceException_1.STSServiceException;
    } });
  }
});

// node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/endpoint/ruleset.js
var require_ruleset3 = __commonJS({
  "node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/endpoint/ruleset.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ruleSet = void 0;
    var s = "required";
    var t = "fn";
    var u = "argv";
    var v = "ref";
    var a = true;
    var b = "isSet";
    var c = "booleanEquals";
    var d = "error";
    var e = "endpoint";
    var f = "tree";
    var g = "PartitionResult";
    var h = { [s]: false, "type": "String" };
    var i = { [s]: true, "default": false, "type": "Boolean" };
    var j = { [v]: "Endpoint" };
    var k = { [t]: c, [u]: [{ [v]: "UseFIPS" }, true] };
    var l = { [t]: c, [u]: [{ [v]: "UseDualStack" }, true] };
    var m = {};
    var n = { [t]: "getAttr", [u]: [{ [v]: g }, "supportsFIPS"] };
    var o = { [t]: c, [u]: [true, { [t]: "getAttr", [u]: [{ [v]: g }, "supportsDualStack"] }] };
    var p = [k];
    var q = [l];
    var r = [{ [v]: "Region" }];
    var _data = { version: "1.0", parameters: { Region: h, UseDualStack: i, UseFIPS: i, Endpoint: h }, rules: [{ conditions: [{ [t]: b, [u]: [j] }], rules: [{ conditions: p, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: q, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: j, properties: m, headers: m }, type: e }], type: f }, { conditions: [{ [t]: b, [u]: r }], rules: [{ conditions: [{ [t]: "aws.partition", [u]: r, assign: g }], rules: [{ conditions: [k, l], rules: [{ conditions: [{ [t]: c, [u]: [a, n] }, o], rules: [{ endpoint: { url: "https://execute-api-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: m, headers: m }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: p, rules: [{ conditions: [{ [t]: c, [u]: [n, a] }], rules: [{ endpoint: { url: "https://execute-api-fips.{Region}.{PartitionResult#dnsSuffix}", properties: m, headers: m }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: q, rules: [{ conditions: [o], rules: [{ endpoint: { url: "https://execute-api.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: m, headers: m }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://execute-api.{Region}.{PartitionResult#dnsSuffix}", properties: m, headers: m }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
    exports.ruleSet = _data;
  }
});

// node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/endpoint/endpointResolver.js
var require_endpointResolver3 = __commonJS({
  "node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/endpoint/endpointResolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultEndpointResolver = void 0;
    var util_endpoints_1 = require_dist_cjs17();
    var ruleset_1 = require_ruleset3();
    var defaultEndpointResolver = (endpointParams, context = {}) => {
      return (0, util_endpoints_1.resolveEndpoint)(ruleset_1.ruleSet, {
        endpointParams,
        logger: context.logger
      });
    };
    exports.defaultEndpointResolver = defaultEndpointResolver;
  }
});

// node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/runtimeConfig.shared.js
var require_runtimeConfig_shared3 = __commonJS({
  "node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/runtimeConfig.shared.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRuntimeConfig = void 0;
    var smithy_client_1 = require_dist_cjs37();
    var url_parser_1 = require_dist_cjs26();
    var util_base64_1 = require_dist_cjs33();
    var util_utf8_1 = require_dist_cjs13();
    var endpointResolver_1 = require_endpointResolver3();
    var getRuntimeConfig = (config) => {
      return {
        apiVersion: "2018-11-29",
        base64Decoder: (config == null ? void 0 : config.base64Decoder) ?? util_base64_1.fromBase64,
        base64Encoder: (config == null ? void 0 : config.base64Encoder) ?? util_base64_1.toBase64,
        disableHostPrefix: (config == null ? void 0 : config.disableHostPrefix) ?? false,
        endpointProvider: (config == null ? void 0 : config.endpointProvider) ?? endpointResolver_1.defaultEndpointResolver,
        extensions: (config == null ? void 0 : config.extensions) ?? [],
        logger: (config == null ? void 0 : config.logger) ?? new smithy_client_1.NoOpLogger(),
        serviceId: (config == null ? void 0 : config.serviceId) ?? "ApiGatewayManagementApi",
        urlParser: (config == null ? void 0 : config.urlParser) ?? url_parser_1.parseUrl,
        utf8Decoder: (config == null ? void 0 : config.utf8Decoder) ?? util_utf8_1.fromUtf8,
        utf8Encoder: (config == null ? void 0 : config.utf8Encoder) ?? util_utf8_1.toUtf8
      };
    };
    exports.getRuntimeConfig = getRuntimeConfig;
  }
});

// node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/runtimeConfig.js
var require_runtimeConfig3 = __commonJS({
  "node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/runtimeConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRuntimeConfig = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var package_json_1 = tslib_1.__importDefault(require_package());
    var client_sts_1 = require_dist_cjs54();
    var core_1 = require_dist_cjs39();
    var credential_provider_node_1 = require_dist_cjs53();
    var util_user_agent_node_1 = require_dist_cjs43();
    var config_resolver_1 = require_dist_cjs21();
    var hash_node_1 = require_dist_cjs44();
    var middleware_retry_1 = require_dist_cjs31();
    var node_config_provider_1 = require_dist_cjs24();
    var node_http_handler_1 = require_dist_cjs35();
    var util_body_length_node_1 = require_dist_cjs45();
    var util_retry_1 = require_dist_cjs30();
    var runtimeConfig_shared_1 = require_runtimeConfig_shared3();
    var smithy_client_1 = require_dist_cjs37();
    var util_defaults_mode_node_1 = require_dist_cjs46();
    var smithy_client_2 = require_dist_cjs37();
    var getRuntimeConfig = (config) => {
      (0, smithy_client_2.emitWarningIfUnsupportedVersion)(process.version);
      const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
      const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
      const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
      (0, core_1.emitWarningIfUnsupportedVersion)(process.version);
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: (config == null ? void 0 : config.bodyLengthChecker) ?? util_body_length_node_1.calculateBodyLength,
        credentialDefaultProvider: (config == null ? void 0 : config.credentialDefaultProvider) ?? (0, client_sts_1.decorateDefaultCredentialProvider)(credential_provider_node_1.defaultProvider),
        defaultUserAgentProvider: (config == null ? void 0 : config.defaultUserAgentProvider) ?? (0, util_user_agent_node_1.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        maxAttempts: (config == null ? void 0 : config.maxAttempts) ?? (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: (config == null ? void 0 : config.region) ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: (config == null ? void 0 : config.requestHandler) ?? new node_http_handler_1.NodeHttpHandler(defaultConfigProvider),
        retryMode: (config == null ? void 0 : config.retryMode) ?? (0, node_config_provider_1.loadConfig)({
          ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || util_retry_1.DEFAULT_RETRY_MODE
        }),
        sha256: (config == null ? void 0 : config.sha256) ?? hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: (config == null ? void 0 : config.streamCollector) ?? node_http_handler_1.streamCollector,
        useDualstackEndpoint: (config == null ? void 0 : config.useDualstackEndpoint) ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: (config == null ? void 0 : config.useFipsEndpoint) ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      };
    };
    exports.getRuntimeConfig = getRuntimeConfig;
  }
});

// node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/runtimeExtensions.js
var require_runtimeExtensions3 = __commonJS({
  "node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/runtimeExtensions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveRuntimeExtensions = void 0;
    var region_config_resolver_1 = require_dist_cjs47();
    var protocol_http_1 = require_dist_cjs2();
    var smithy_client_1 = require_dist_cjs37();
    var asPartial = (t) => t;
    var resolveRuntimeExtensions = (runtimeConfig, extensions) => {
      const extensionConfiguration = {
        ...asPartial((0, region_config_resolver_1.getAwsRegionExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0, smithy_client_1.getDefaultExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0, protocol_http_1.getHttpHandlerExtensionConfiguration)(runtimeConfig))
      };
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return {
        ...runtimeConfig,
        ...(0, region_config_resolver_1.resolveAwsRegionExtensionConfiguration)(extensionConfiguration),
        ...(0, smithy_client_1.resolveDefaultRuntimeConfig)(extensionConfiguration),
        ...(0, protocol_http_1.resolveHttpHandlerRuntimeConfig)(extensionConfiguration)
      };
    };
    exports.resolveRuntimeExtensions = resolveRuntimeExtensions;
  }
});

// node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/ApiGatewayManagementApiClient.js
var require_ApiGatewayManagementApiClient = __commonJS({
  "node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/ApiGatewayManagementApiClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApiGatewayManagementApiClient = exports.__Client = void 0;
    var middleware_host_header_1 = require_dist_cjs3();
    var middleware_logger_1 = require_dist_cjs4();
    var middleware_recursion_detection_1 = require_dist_cjs5();
    var middleware_signing_1 = require_dist_cjs16();
    var middleware_user_agent_1 = require_dist_cjs19();
    var config_resolver_1 = require_dist_cjs21();
    var middleware_content_length_1 = require_dist_cjs22();
    var middleware_endpoint_1 = require_dist_cjs28();
    var middleware_retry_1 = require_dist_cjs31();
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "__Client", { enumerable: true, get: function() {
      return smithy_client_1.Client;
    } });
    var EndpointParameters_1 = require_EndpointParameters();
    var runtimeConfig_1 = require_runtimeConfig3();
    var runtimeExtensions_1 = require_runtimeExtensions3();
    var ApiGatewayManagementApiClient2 = class extends smithy_client_1.Client {
      constructor(...[configuration]) {
        const _config_0 = (0, runtimeConfig_1.getRuntimeConfig)(configuration || {});
        const _config_1 = (0, EndpointParameters_1.resolveClientEndpointParameters)(_config_0);
        const _config_2 = (0, config_resolver_1.resolveRegionConfig)(_config_1);
        const _config_3 = (0, middleware_endpoint_1.resolveEndpointConfig)(_config_2);
        const _config_4 = (0, middleware_retry_1.resolveRetryConfig)(_config_3);
        const _config_5 = (0, middleware_host_header_1.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0, middleware_signing_1.resolveAwsAuthConfig)(_config_5);
        const _config_7 = (0, middleware_user_agent_1.resolveUserAgentConfig)(_config_6);
        const _config_8 = (0, runtimeExtensions_1.resolveRuntimeExtensions)(_config_7, (configuration == null ? void 0 : configuration.extensions) || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use((0, middleware_retry_1.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, middleware_content_length_1.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, middleware_host_header_1.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, middleware_logger_1.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, middleware_recursion_detection_1.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(this.config));
        this.middlewareStack.use((0, middleware_user_agent_1.getUserAgentPlugin)(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
    exports.ApiGatewayManagementApiClient = ApiGatewayManagementApiClient2;
  }
});

// node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/models/ApiGatewayManagementApiServiceException.js
var require_ApiGatewayManagementApiServiceException = __commonJS({
  "node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/models/ApiGatewayManagementApiServiceException.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApiGatewayManagementApiServiceException = exports.__ServiceException = void 0;
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "__ServiceException", { enumerable: true, get: function() {
      return smithy_client_1.ServiceException;
    } });
    var ApiGatewayManagementApiServiceException = class _ApiGatewayManagementApiServiceException extends smithy_client_1.ServiceException {
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _ApiGatewayManagementApiServiceException.prototype);
      }
    };
    exports.ApiGatewayManagementApiServiceException = ApiGatewayManagementApiServiceException;
  }
});

// node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/models/models_0.js
var require_models_03 = __commonJS({
  "node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/models/models_0.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PayloadTooLargeException = exports.LimitExceededException = exports.GoneException = exports.ForbiddenException = void 0;
    var ApiGatewayManagementApiServiceException_1 = require_ApiGatewayManagementApiServiceException();
    var ForbiddenException = class _ForbiddenException extends ApiGatewayManagementApiServiceException_1.ApiGatewayManagementApiServiceException {
      constructor(opts) {
        super({
          name: "ForbiddenException",
          $fault: "client",
          ...opts
        });
        this.name = "ForbiddenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _ForbiddenException.prototype);
      }
    };
    exports.ForbiddenException = ForbiddenException;
    var GoneException = class _GoneException extends ApiGatewayManagementApiServiceException_1.ApiGatewayManagementApiServiceException {
      constructor(opts) {
        super({
          name: "GoneException",
          $fault: "client",
          ...opts
        });
        this.name = "GoneException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _GoneException.prototype);
      }
    };
    exports.GoneException = GoneException;
    var LimitExceededException = class _LimitExceededException extends ApiGatewayManagementApiServiceException_1.ApiGatewayManagementApiServiceException {
      constructor(opts) {
        super({
          name: "LimitExceededException",
          $fault: "client",
          ...opts
        });
        this.name = "LimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _LimitExceededException.prototype);
      }
    };
    exports.LimitExceededException = LimitExceededException;
    var PayloadTooLargeException = class _PayloadTooLargeException extends ApiGatewayManagementApiServiceException_1.ApiGatewayManagementApiServiceException {
      constructor(opts) {
        super({
          name: "PayloadTooLargeException",
          $fault: "client",
          ...opts
        });
        this.name = "PayloadTooLargeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _PayloadTooLargeException.prototype);
        this.Message = opts.Message;
      }
    };
    exports.PayloadTooLargeException = PayloadTooLargeException;
  }
});

// node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/protocols/Aws_restJson1.js
var require_Aws_restJson12 = __commonJS({
  "node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/protocols/Aws_restJson1.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.de_PostToConnectionCommand = exports.de_GetConnectionCommand = exports.de_DeleteConnectionCommand = exports.se_PostToConnectionCommand = exports.se_GetConnectionCommand = exports.se_DeleteConnectionCommand = void 0;
    var protocol_http_1 = require_dist_cjs2();
    var smithy_client_1 = require_dist_cjs37();
    var ApiGatewayManagementApiServiceException_1 = require_ApiGatewayManagementApiServiceException();
    var models_0_1 = require_models_03();
    var se_DeleteConnectionCommand = async (input, context) => {
      const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
      const headers = {};
      let resolvedPath = `${(basePath == null ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}/@connections/{ConnectionId}`;
      resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "ConnectionId", () => input.ConnectionId, "{ConnectionId}", false);
      let body;
      return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body
      });
    };
    exports.se_DeleteConnectionCommand = se_DeleteConnectionCommand;
    var se_GetConnectionCommand = async (input, context) => {
      const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
      const headers = {};
      let resolvedPath = `${(basePath == null ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}/@connections/{ConnectionId}`;
      resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "ConnectionId", () => input.ConnectionId, "{ConnectionId}", false);
      let body;
      return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body
      });
    };
    exports.se_GetConnectionCommand = se_GetConnectionCommand;
    var se_PostToConnectionCommand = async (input, context) => {
      const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
      const headers = {
        "content-type": "application/octet-stream"
      };
      let resolvedPath = `${(basePath == null ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}/@connections/{ConnectionId}`;
      resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "ConnectionId", () => input.ConnectionId, "{ConnectionId}", false);
      let body;
      if (input.Data !== void 0) {
        body = input.Data;
      }
      return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body
      });
    };
    exports.se_PostToConnectionCommand = se_PostToConnectionCommand;
    var de_DeleteConnectionCommand = async (output, context) => {
      if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteConnectionCommandError(output, context);
      }
      const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output)
      });
      await (0, smithy_client_1.collectBody)(output.body, context);
      return contents;
    };
    exports.de_DeleteConnectionCommand = de_DeleteConnectionCommand;
    var de_DeleteConnectionCommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
      };
      const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "ForbiddenException":
        case "com.amazonaws.apigatewaymanagementapi#ForbiddenException":
          throw await de_ForbiddenExceptionRes(parsedOutput, context);
        case "GoneException":
        case "com.amazonaws.apigatewaymanagementapi#GoneException":
          throw await de_GoneExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.apigatewaymanagementapi#LimitExceededException":
          throw await de_LimitExceededExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody,
            errorCode
          });
      }
    };
    var de_GetConnectionCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetConnectionCommandError(output, context);
      }
      const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output)
      });
      const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
      const doc = (0, smithy_client_1.take)(data, {
        ConnectedAt: [, (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(_)), `connectedAt`],
        Identity: [, (_) => de_Identity(_, context), `identity`],
        LastActiveAt: [, (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(_)), `lastActiveAt`]
      });
      Object.assign(contents, doc);
      return contents;
    };
    exports.de_GetConnectionCommand = de_GetConnectionCommand;
    var de_GetConnectionCommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
      };
      const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "ForbiddenException":
        case "com.amazonaws.apigatewaymanagementapi#ForbiddenException":
          throw await de_ForbiddenExceptionRes(parsedOutput, context);
        case "GoneException":
        case "com.amazonaws.apigatewaymanagementapi#GoneException":
          throw await de_GoneExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.apigatewaymanagementapi#LimitExceededException":
          throw await de_LimitExceededExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody,
            errorCode
          });
      }
    };
    var de_PostToConnectionCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_PostToConnectionCommandError(output, context);
      }
      const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output)
      });
      await (0, smithy_client_1.collectBody)(output.body, context);
      return contents;
    };
    exports.de_PostToConnectionCommand = de_PostToConnectionCommand;
    var de_PostToConnectionCommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
      };
      const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "ForbiddenException":
        case "com.amazonaws.apigatewaymanagementapi#ForbiddenException":
          throw await de_ForbiddenExceptionRes(parsedOutput, context);
        case "GoneException":
        case "com.amazonaws.apigatewaymanagementapi#GoneException":
          throw await de_GoneExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.apigatewaymanagementapi#LimitExceededException":
          throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "PayloadTooLargeException":
        case "com.amazonaws.apigatewaymanagementapi#PayloadTooLargeException":
          throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody,
            errorCode
          });
      }
    };
    var throwDefaultError = (0, smithy_client_1.withBaseException)(ApiGatewayManagementApiServiceException_1.ApiGatewayManagementApiServiceException);
    var de_ForbiddenExceptionRes = async (parsedOutput, context) => {
      const contents = (0, smithy_client_1.map)({});
      const data = parsedOutput.body;
      const doc = (0, smithy_client_1.take)(data, {});
      Object.assign(contents, doc);
      const exception = new models_0_1.ForbiddenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
    };
    var de_GoneExceptionRes = async (parsedOutput, context) => {
      const contents = (0, smithy_client_1.map)({});
      const data = parsedOutput.body;
      const doc = (0, smithy_client_1.take)(data, {});
      Object.assign(contents, doc);
      const exception = new models_0_1.GoneException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
    };
    var de_LimitExceededExceptionRes = async (parsedOutput, context) => {
      const contents = (0, smithy_client_1.map)({});
      const data = parsedOutput.body;
      const doc = (0, smithy_client_1.take)(data, {});
      Object.assign(contents, doc);
      const exception = new models_0_1.LimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
    };
    var de_PayloadTooLargeExceptionRes = async (parsedOutput, context) => {
      const contents = (0, smithy_client_1.map)({});
      const data = parsedOutput.body;
      const doc = (0, smithy_client_1.take)(data, {
        Message: [, smithy_client_1.expectString, `message`]
      });
      Object.assign(contents, doc);
      const exception = new models_0_1.PayloadTooLargeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
    };
    var de_Identity = (output, context) => {
      return (0, smithy_client_1.take)(output, {
        SourceIp: [, smithy_client_1.expectString, `sourceIp`],
        UserAgent: [, smithy_client_1.expectString, `userAgent`]
      });
    };
    var deserializeMetadata = (output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    });
    var collectBodyString = (streamBody, context) => (0, smithy_client_1.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));
    var parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        return JSON.parse(encoded);
      }
      return {};
    });
    var parseErrorBody = async (errorBody, context) => {
      const value = await parseBody(errorBody, context);
      value.message = value.message ?? value.Message;
      return value;
    };
    var loadRestJsonErrorCode = (output, data) => {
      const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
      const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
          cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
          cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
          cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
          cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
      };
      const headerKey = findKey(output.headers, "x-amzn-errortype");
      if (headerKey !== void 0) {
        return sanitizeErrorCode(output.headers[headerKey]);
      }
      if (data.code !== void 0) {
        return sanitizeErrorCode(data.code);
      }
      if (data["__type"] !== void 0) {
        return sanitizeErrorCode(data["__type"]);
      }
    };
  }
});

// node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/commands/DeleteConnectionCommand.js
var require_DeleteConnectionCommand = __commonJS({
  "node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/commands/DeleteConnectionCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DeleteConnectionCommand = exports.$Command = void 0;
    var middleware_endpoint_1 = require_dist_cjs28();
    var middleware_serde_1 = require_dist_cjs27();
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "$Command", { enumerable: true, get: function() {
      return smithy_client_1.Command;
    } });
    var types_1 = require_dist_cjs();
    var Aws_restJson1_1 = require_Aws_restJson12();
    var DeleteConnectionCommand = class _DeleteConnectionCommand extends smithy_client_1.Command {
      static getEndpointParameterInstructions() {
        return {
          UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
          Endpoint: { type: "builtInParams", name: "endpoint" },
          Region: { type: "builtInParams", name: "region" },
          UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
        };
      }
      constructor(input) {
        super();
        this.input = input;
      }
      resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_1.getEndpointPlugin)(configuration, _DeleteConnectionCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "ApiGatewayManagementApiClient";
        const commandName = "DeleteConnectionCommand";
        const handlerExecutionContext = {
          logger,
          clientName,
          commandName,
          inputFilterSensitiveLog: (_) => _,
          outputFilterSensitiveLog: (_) => _,
          [types_1.SMITHY_CONTEXT_KEY]: {
            service: "ApiGatewayManagementApi",
            operation: "DeleteConnection"
          }
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
      serialize(input, context) {
        return (0, Aws_restJson1_1.se_DeleteConnectionCommand)(input, context);
      }
      deserialize(output, context) {
        return (0, Aws_restJson1_1.de_DeleteConnectionCommand)(output, context);
      }
    };
    exports.DeleteConnectionCommand = DeleteConnectionCommand;
  }
});

// node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/commands/GetConnectionCommand.js
var require_GetConnectionCommand = __commonJS({
  "node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/commands/GetConnectionCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetConnectionCommand = exports.$Command = void 0;
    var middleware_endpoint_1 = require_dist_cjs28();
    var middleware_serde_1 = require_dist_cjs27();
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "$Command", { enumerable: true, get: function() {
      return smithy_client_1.Command;
    } });
    var types_1 = require_dist_cjs();
    var Aws_restJson1_1 = require_Aws_restJson12();
    var GetConnectionCommand = class _GetConnectionCommand extends smithy_client_1.Command {
      static getEndpointParameterInstructions() {
        return {
          UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
          Endpoint: { type: "builtInParams", name: "endpoint" },
          Region: { type: "builtInParams", name: "region" },
          UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
        };
      }
      constructor(input) {
        super();
        this.input = input;
      }
      resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_1.getEndpointPlugin)(configuration, _GetConnectionCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "ApiGatewayManagementApiClient";
        const commandName = "GetConnectionCommand";
        const handlerExecutionContext = {
          logger,
          clientName,
          commandName,
          inputFilterSensitiveLog: (_) => _,
          outputFilterSensitiveLog: (_) => _,
          [types_1.SMITHY_CONTEXT_KEY]: {
            service: "ApiGatewayManagementApi",
            operation: "GetConnection"
          }
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
      serialize(input, context) {
        return (0, Aws_restJson1_1.se_GetConnectionCommand)(input, context);
      }
      deserialize(output, context) {
        return (0, Aws_restJson1_1.de_GetConnectionCommand)(output, context);
      }
    };
    exports.GetConnectionCommand = GetConnectionCommand;
  }
});

// node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/commands/PostToConnectionCommand.js
var require_PostToConnectionCommand = __commonJS({
  "node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/commands/PostToConnectionCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PostToConnectionCommand = exports.$Command = void 0;
    var middleware_endpoint_1 = require_dist_cjs28();
    var middleware_serde_1 = require_dist_cjs27();
    var smithy_client_1 = require_dist_cjs37();
    Object.defineProperty(exports, "$Command", { enumerable: true, get: function() {
      return smithy_client_1.Command;
    } });
    var types_1 = require_dist_cjs();
    var Aws_restJson1_1 = require_Aws_restJson12();
    var PostToConnectionCommand2 = class _PostToConnectionCommand extends smithy_client_1.Command {
      static getEndpointParameterInstructions() {
        return {
          UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
          Endpoint: { type: "builtInParams", name: "endpoint" },
          Region: { type: "builtInParams", name: "region" },
          UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
        };
      }
      constructor(input) {
        super();
        this.input = input;
      }
      resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_1.getEndpointPlugin)(configuration, _PostToConnectionCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "ApiGatewayManagementApiClient";
        const commandName = "PostToConnectionCommand";
        const handlerExecutionContext = {
          logger,
          clientName,
          commandName,
          inputFilterSensitiveLog: (_) => _,
          outputFilterSensitiveLog: (_) => _,
          [types_1.SMITHY_CONTEXT_KEY]: {
            service: "ApiGatewayManagementApi",
            operation: "PostToConnection"
          }
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
      serialize(input, context) {
        return (0, Aws_restJson1_1.se_PostToConnectionCommand)(input, context);
      }
      deserialize(output, context) {
        return (0, Aws_restJson1_1.de_PostToConnectionCommand)(output, context);
      }
    };
    exports.PostToConnectionCommand = PostToConnectionCommand2;
  }
});

// node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/ApiGatewayManagementApi.js
var require_ApiGatewayManagementApi = __commonJS({
  "node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/ApiGatewayManagementApi.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApiGatewayManagementApi = void 0;
    var smithy_client_1 = require_dist_cjs37();
    var ApiGatewayManagementApiClient_1 = require_ApiGatewayManagementApiClient();
    var DeleteConnectionCommand_1 = require_DeleteConnectionCommand();
    var GetConnectionCommand_1 = require_GetConnectionCommand();
    var PostToConnectionCommand_1 = require_PostToConnectionCommand();
    var commands = {
      DeleteConnectionCommand: DeleteConnectionCommand_1.DeleteConnectionCommand,
      GetConnectionCommand: GetConnectionCommand_1.GetConnectionCommand,
      PostToConnectionCommand: PostToConnectionCommand_1.PostToConnectionCommand
    };
    var ApiGatewayManagementApi = class extends ApiGatewayManagementApiClient_1.ApiGatewayManagementApiClient {
    };
    exports.ApiGatewayManagementApi = ApiGatewayManagementApi;
    (0, smithy_client_1.createAggregatedClient)(commands, ApiGatewayManagementApi);
  }
});

// node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/commands/index.js
var require_commands3 = __commonJS({
  "node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/commands/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_DeleteConnectionCommand(), exports);
    tslib_1.__exportStar(require_GetConnectionCommand(), exports);
    tslib_1.__exportStar(require_PostToConnectionCommand(), exports);
  }
});

// node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/models/index.js
var require_models3 = __commonJS({
  "node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/models/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_models_03(), exports);
  }
});

// node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/index.js
var require_dist_cjs55 = __commonJS({
  "node_modules/@aws-sdk/client-apigatewaymanagementapi/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApiGatewayManagementApiServiceException = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_ApiGatewayManagementApiClient(), exports);
    tslib_1.__exportStar(require_ApiGatewayManagementApi(), exports);
    tslib_1.__exportStar(require_commands3(), exports);
    tslib_1.__exportStar(require_models3(), exports);
    require_dist_cjs18();
    var ApiGatewayManagementApiServiceException_1 = require_ApiGatewayManagementApiServiceException();
    Object.defineProperty(exports, "ApiGatewayManagementApiServiceException", { enumerable: true, get: function() {
      return ApiGatewayManagementApiServiceException_1.ApiGatewayManagementApiServiceException;
    } });
  }
});

// apps/example/pets/src/lambda/index.ts
var lambda_exports = {};
__export(lambda_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(lambda_exports);
var import_client_apigatewaymanagementapi = __toESM(require_dist_cjs55());
var handler = async (event) => {
  const client = new import_client_apigatewaymanagementapi.ApiGatewayManagementApiClient({
    region: "eu-central-1",
    endpoint: "https://876ro4w8qd.execute-api.eu-central-1.amazonaws.com/prod"
  });
  console.log(JSON.stringify(event));
  const color = event.detail.dynamodb.NewImage.Color.S;
  console.log(`color is: ${color}`);
  const requestParams = {
    ConnectionId: color,
    Data: `{"msg": "${event.id}"}`
  };
  const command = new import_client_apigatewaymanagementapi.PostToConnectionCommand(requestParams);
  try {
    await client.send(command);
  } catch (error) {
    console.log(error);
  }
  return {
    "status": "ok yeah"
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
