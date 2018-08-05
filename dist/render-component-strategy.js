'use strict';
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, '__esModule', { value: true });
var React = require('react');
exports.RenderComponentStrategy = function(_a) {
  var _b = _a.componentStrategy,
    componentStrategy = _b === void 0 ? {} : _b,
    _c = _a.componentKey,
    componentKey = _c === void 0 ? '' : _c,
    _d = _a.componentProps,
    componentProps = _d === void 0 ? {} : _d,
    _e = _a.renderDefault,
    renderDefault = _e === void 0 ? null : _e;
  var Component = componentStrategy[componentKey] || renderDefault;
  return Component ? React.createElement(Component, __assign({}, componentProps)) : null;
};
