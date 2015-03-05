define(["exports", "components/fxos-mvc/dist/mvc", "components/gaia-tabs/gaia-tabs"], function (exports, _componentsFxosMvcDistMvc, _componentsGaiaTabsGaiaTabs) {
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

  var View = _componentsFxosMvcDistMvc.View;
  var TabsView = (function (View) {
    var TabsView = function TabsView() {
      this.el = document.createElement("div");
      this.el.id = "tabs-container";
      this.changeHandlers = [];
    };

    _extends(TabsView, View);

    TabsView.prototype.onTabChange = function (handler) {
      if (this.changeHandlers.indexOf(handler) === -1) {
        this.changeHandlers.push(handler);
      }
    };

    TabsView.prototype.onChange = function (evt) {
      var selected = this.tabs.selected === 0 ? "Apps" : "Add-ons";
      this.changeHandlers.forEach(function (handler) {
        handler(selected);
      });
    };

    TabsView.prototype.render = function () {
      View.prototype.render.call(this);
      // We can't create gaia-tabs with document.createElement
      // so we need to put gaia-tabs in template, and add event listeners
      // here, see https://github.com/gaia-components/gaia-tabs/issues/4
      this.tabs = this.el.querySelector("gaia-tabs");
      this.tabs.addEventListener("change", this.onChange.bind(this));
    };

    TabsView.prototype.template = function () {
      var string = "\n      <gaia-tabs>\n        <a select>Apps</a>\n        <a>Add-Ons</a>\n      </gaia-tabs>";
      return string;
    };

    return TabsView;
  })(View);

  exports["default"] = TabsView;
});