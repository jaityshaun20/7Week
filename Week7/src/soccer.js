"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soccer = void 0;
var sport_1 = require("./sport");
var Soccer = /** @class */ (function (_super) {
    __extends(Soccer, _super);
    function Soccer(name, players, origin, fieldType, goalSize, ballType) {
        var _this = _super.call(this, name, players, origin) || this;
        _this.fieldType = fieldType;
        _this.goalSize = goalSize;
        _this.ballType = ballType;
        return _this;
    }
    Soccer.prototype.displaySoccerInfo = function () {
        _super.prototype.displayInfo.call(this);
        console.log("Field Type: ".concat(this.fieldType));
        console.log("Goal Size: ".concat(this.goalSize));
        console.log("Ball Type: ".concat(this.ballType));
    };
    Soccer.prototype.shoot = function () {
        console.log("Executing a shoot in ".concat(this.name, " game."));
    };
    Soccer.prototype.pass = function () {
        console.log("Executing a pass in ".concat(this.name, " game."));
    };
    Soccer.prototype.tackle = function () {
        console.log("Executing a tackle in ".concat(this.name, " game."));
    };
    return Soccer;
}(sport_1.Sport));
exports.Soccer = Soccer;
