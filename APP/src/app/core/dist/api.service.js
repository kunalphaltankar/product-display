"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiService = void 0;
var core_1 = require("@angular/core");
var ApiService = /** @class */ (function () {
    function ApiService(Http) {
        this.Http = Http;
    }
    //Register Product
    ApiService.prototype.registerProduct = function (data) {
        return this.Http.post('http://localhost/ProductDisplay/WEB/register.php', data, {
            observe: 'events',
            reportProgress: true
        });
    };
    //List Products
    ApiService.prototype.listProducts = function () {
        return this.Http.get('http://localhost/ProductDisplay/WEB/products.php');
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
