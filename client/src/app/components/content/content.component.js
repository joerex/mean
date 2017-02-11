"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var content_service_1 = require("../../services/content.service");
var ContentComponent = (function () {
    function ContentComponent(cs) {
        this.cs = cs;
        this.content = [];
        this.newItem = {};
    }
    ContentComponent.prototype.ngOnInit = function () {
        this.getContent();
    };
    ContentComponent.prototype.getContent = function () {
        var _this = this;
        this.cs.getContent().subscribe(function (content) { return _this.content = content; }, function (err) { return console.log(err); });
    };
    ContentComponent.prototype.removeContent = function (item) {
        var _this = this;
        this.cs.removeContent(item._id).subscribe(function (res) { return _this.content = _this.content.filter(function (c) { return c._id != item._id; }); }, function (err) { return console.log(err); });
    };
    ContentComponent.prototype.updateContent = function (item) {
        this.cs.updateContent(item).subscribe(function (res) { }, function (err) { return console.log(err); });
    };
    ContentComponent.prototype.addContent = function () {
        var _this = this;
        this.cs.addContent(this.newItem).subscribe(function (res) {
            _this.content.unshift(_this.newItem);
            _this.newItem = {};
        }, function (err) { return console.log(err); });
    };
    ;
    ContentComponent = __decorate([
        core_1.Component({
            selector: 'content',
            template: "\n    <div *ngIf=\"content.length === 0\">Loading Content...</div>\n    <form>\n      <h4>Add Content</h4>\n      <input name=\"name\" [(ngModel)]=\"newItem.name\" type=\"text\" /> /\n      <input name=\"borough\" [(ngModel)]=\"newItem.borough\" type=\"text\" />\n      <button (click)=\"addContent()\">Save</button>\n    </form>\n    <br><hr>\n    <div *ngFor=\"let item of content\">\n      <input name=\"name\" [(ngModel)]=\"item.name\" type=\"text\" /> /\n      <span>{{item.borough}}</span>\n      <button (click)=\"removeContent(item)\">Remove</button>\n      <button (click)=\"updateContent(item)\">Save</button>\n      <hr>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [content_service_1.ContentService])
    ], ContentComponent);
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;
//# sourceMappingURL=content.component.js.map