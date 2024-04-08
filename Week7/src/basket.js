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
exports.Basket = void 0;
var sport_1 = require("./sport");
var Basket = /** @class */ (function (_super) {
    __extends(Basket, _super);
    function Basket(name, players, origin, courtType, hoops, ballType) {
        var _this = _super.call(this, name, players, origin) || this;
        _this.courtType = courtType;
        _this.hoops = hoops;
        _this.ballType = ballType;
        return _this;
    }
    Basket.prototype.displayBasketballInfo = function () {
        _super.prototype.displayInfo.call(this);
        console.log("Court Type: ".concat(this.courtType));
        console.log("Number of Hoops: ".concat(this.hoops));
        console.log("Ball Type: ".concat(this.ballType));
    };
    Basket.prototype.shoot = function () {
        console.log("Executing a shoot in ".concat(this.name, " game."));
    };
    Basket.prototype.dribble = function () {
        console.log("Executing a dribble in ".concat(this.name, " game."));
    };
    Basket.prototype.pass = function () {
        console.log("Executing a pass in ".concat(this.name, " game."));
    };
    return Basket;
}(sport_1.Sport));
exports.Basket = Basket;
