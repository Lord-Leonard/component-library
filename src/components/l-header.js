"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var template = document.createElement('template');
template.innerHTML = html(__makeTemplateObject(["\n      <div id=\"mySidenav\" class=\"sidenav\">\n      <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\"\n        >&times;</a\n      >\n      <a href=\"#\">About</a>\n      <a href=\"#\">Services</a>\n      <a href=\"#\">Clients</a>\n      <a href=\"#\">Contact</a>\n    </div>\n\n    <h2>Animated Sidenav Example</h2>\n    <p>Click on the element below to open the side navigation menu.</p>\n    <span style=\"font-size: 30px; cursor: pointer\" onclick=\"openNav()\"\n      >&#9776; open</span\n    >\n"], ["\n      <div id=\"mySidenav\" class=\"sidenav\">\n      <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\"\n        >&times;</a\n      >\n      <a href=\"#\">About</a>\n      <a href=\"#\">Services</a>\n      <a href=\"#\">Clients</a>\n      <a href=\"#\">Contact</a>\n    </div>\n\n    <h2>Animated Sidenav Example</h2>\n    <p>Click on the element below to open the side navigation menu.</p>\n    <span style=\"font-size: 30px; cursor: pointer\" onclick=\"openNav()\"\n      >&#9776; open</span\n    >\n"]));
var LSideNav = /** @class */ (function (_super) {
    __extends(LSideNav, _super);
    function LSideNav() {
        var _this = _super.call(this) || this;
        var shadowRoot = _this.attachShadow({ 'mode': 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));
        return _this;
    }
    return LSideNav;
}(HTMLElement));
window.customElements.define('l-header', LSideNav);
