define(["exports", "components/fxos-mvc/dist/mvc"], function (exports, _componentsFxosMvcDistMvc) {
  "use strict";

  var _extends = function (child, parent) {
    child.prototype = Object.create(parent.prototype, {
      constructor: {
        value: child,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    child.__proto__ = parent;
  };

  var Model = _componentsFxosMvcDistMvc.Model;
  var ListModel = (function (Model) {
    var ListModel = function ListModel() {
      Model.apply(this, arguments);
    };

    _extends(ListModel, Model);

    ListModel.prototype.getAppList = function () {
      return {
        "http://fxos.github.io/camera/dist/app/manifest.webapp": {
          manifestURL: "http://fxos.github.io/camera/dist/app/manifest.webapp",
          name: "camera",
          type: "hosted",
          url: "https://github.com/fxos/camera",
          revision: "8b5a7d9061a0d0210f24ff253110a8ce935104ca"
        },
        "http://fxos.github.io/video/app/manifest.webapp": {
          manifestURL: "http://fxos.github.io/video/app/manifest.webapp",
          name: "video",
          type: "hosted",
          url: "https://github.com/fxos/video",
          revision: "b3c913669bc7039e980586bd9d319a0ca2ac6003"
        },
        "http://fxos.github.io/dialer/dist/app/manifest.webapp": {
          manifestURL: "http://fxos.github.io/dialer/dist/app/manifest.webapp",
          name: "dialer",
          type: "hosted",
          url: "https://github.com/fxos/dialer",
          revision: "835af6ccf608a51bc87711d1c40fc4f33a1fc12b"
        },
        "http://henretty.us/manifest.webapp": {
          manifestURL: "http://henretty.us/manifest.webapp",
          name: "clock",
          type: "packaged",
          url: "https://github.com/mozilla-b2g/gaia/tree/apps/clock/",
          revision: "5f0dd37917c4a6d8fa8724715d4d3797419f9013"
        }
      };
    };

    return ListModel;
  })(Model);

  exports["default"] = ListModel;
});