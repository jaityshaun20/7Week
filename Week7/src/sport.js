"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sport = void 0;
var Sport = /** @class */ (function () {
    function Sport(name, players, origin) {
        this.name = name;
        this.players = players;
        this.origin = origin;
    }
    Sport.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name));
        console.log("Players: ".concat(this.players));
        console.log("Origin: ".concat(this.origin));
    };
    Sport.prototype.play = function () {
        console.log("".concat(this.name, " is being played."));
    };
    Sport.prototype.end = function () {
        console.log("".concat(this.name, " is over."));
    };
    return Sport;
}());
exports.Sport = Sport;
