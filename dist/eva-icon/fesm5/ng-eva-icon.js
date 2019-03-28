import { DomSanitizer } from '@angular/platform-browser';
import { icons } from 'eva-icons';
import { Injectable, NgModule, Component, Input, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EvaIconService = /** @class */ (function () {
    function EvaIconService() {
    }
    EvaIconService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EvaIconService.ctorParameters = function () { return []; };
    /** @nocollapse */ EvaIconService.ngInjectableDef = defineInjectable({ factory: function EvaIconService_Factory() { return new EvaIconService(); }, token: EvaIconService, providedIn: "root" });
    return EvaIconService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EvaIconComponent = /** @class */ (function () {
    function EvaIconComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this._fill = '#333333';
        this._height = '24px';
        this._width = '24px';
        this._animation = 'pulse';
    }
    Object.defineProperty(EvaIconComponent.prototype, "data", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._data = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EvaIconComponent.prototype, "fill", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._fill = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EvaIconComponent.prototype, "height", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._height = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EvaIconComponent.prototype, "width", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EvaIconComponent.prototype, "animation", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._animation = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    EvaIconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.evaReplace();
    };
    /**
     * @return {?}
     */
    EvaIconComponent.prototype.evaReplace = /**
     * @return {?}
     */
    function () {
        switch (this._fill) {
            case 'primary':
                this._fill = getComputedStyle(document.body).getPropertyValue('--ion-color-primary');
                break;
            case 'secondary':
                this._fill = getComputedStyle(document.body).getPropertyValue('--ion-color-secondary');
                break;
            case 'tertiary':
                this._fill = getComputedStyle(document.body).getPropertyValue('--ion-color-tertiary');
                break;
            case 'success':
                this._fill = getComputedStyle(document.body).getPropertyValue('--ion-color-success');
                break;
            case 'danger':
                this._fill = getComputedStyle(document.body).getPropertyValue('--ion-color-danger');
                break;
            case 'warning':
                this._fill = getComputedStyle(document.body).getPropertyValue('--ion-color-warning');
                break;
            case 'dark':
                this._fill = getComputedStyle(document.body).getPropertyValue('--ion-color-dark');
                break;
            case 'medium':
                this._fill = getComputedStyle(document.body).getPropertyValue('--ion-color-medium');
                break;
            case 'light':
                this._fill = getComputedStyle(document.body).getPropertyValue('--ion-color-light');
                break;
            default:
                this._fill = getComputedStyle(document.body).getPropertyValue('--ion-color-primary');
                break;
        }
        this.icon = this.sanitizer.bypassSecurityTrustHtml(icons[this._data].toSvg({
            width: this._width,
            height: this._height,
            fill: this._fill,
            animation: this._animation,
        }));
    };
    EvaIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'eva-icon',
                    template: "\n    <i [innerHTML]=\"icon\"></i>\n  "
                }] }
    ];
    /** @nocollapse */
    EvaIconComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    EvaIconComponent.propDecorators = {
        data: [{ type: Input }],
        fill: [{ type: Input }],
        height: [{ type: Input }],
        width: [{ type: Input }],
        animation: [{ type: Input }]
    };
    return EvaIconComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EvaIconModule = /** @class */ (function () {
    function EvaIconModule() {
    }
    EvaIconModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [EvaIconComponent],
                    imports: [],
                    exports: [EvaIconComponent]
                },] }
    ];
    return EvaIconModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { EvaIconService, EvaIconComponent, EvaIconModule };

//# sourceMappingURL=ng-eva-icon.js.map