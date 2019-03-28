(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('eva-icons'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-eva-icon', ['exports', '@angular/platform-browser', 'eva-icons', '@angular/core'], factory) :
    (factory((global['ng-eva-icon'] = {}),global.ng.platformBrowser,global.evaIcons,global.ng.core));
}(this, (function (exports,platformBrowser,evaIcons,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EvaIconService = /** @class */ (function () {
        function EvaIconService() {
        }
        EvaIconService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EvaIconService.ctorParameters = function () { return []; };
        /** @nocollapse */ EvaIconService.ngInjectableDef = i0.defineInjectable({ factory: function EvaIconService_Factory() { return new EvaIconService(); }, token: EvaIconService, providedIn: "root" });
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
             */ function (value) {
                this._data = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EvaIconComponent.prototype, "fill", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._fill = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EvaIconComponent.prototype, "height", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._height = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EvaIconComponent.prototype, "width", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._width = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EvaIconComponent.prototype, "animation", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
                this.icon = this.sanitizer.bypassSecurityTrustHtml(evaIcons.icons[this._data].toSvg({
                    width: this._width,
                    height: this._height,
                    fill: this._fill,
                    animation: this._animation,
                }));
            };
        EvaIconComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'eva-icon',
                        template: "\n    <i [innerHTML]=\"icon\"></i>\n  "
                    }] }
        ];
        /** @nocollapse */
        EvaIconComponent.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer }
            ];
        };
        EvaIconComponent.propDecorators = {
            data: [{ type: i0.Input }],
            fill: [{ type: i0.Input }],
            height: [{ type: i0.Input }],
            width: [{ type: i0.Input }],
            animation: [{ type: i0.Input }]
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
            { type: i0.NgModule, args: [{
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

    exports.EvaIconService = EvaIconService;
    exports.EvaIconComponent = EvaIconComponent;
    exports.EvaIconModule = EvaIconModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-eva-icon.umd.js.map