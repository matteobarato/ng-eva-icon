import { DomSanitizer } from '@angular/platform-browser';
import { icons } from 'eva-icons';
import { Injectable, NgModule, Component, Input, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EvaIconService {
    constructor() { }
}
EvaIconService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EvaIconService.ctorParameters = () => [];
/** @nocollapse */ EvaIconService.ngInjectableDef = defineInjectable({ factory: function EvaIconService_Factory() { return new EvaIconService(); }, token: EvaIconService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EvaIconComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this._fill = '#333333';
        this._height = '24px';
        this._width = '24px';
        this._animation = 'pulse';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        this._data = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set fill(value) {
        this._fill = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set height(value) {
        this._height = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set width(value) {
        this._width = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set animation(value) {
        this._animation = value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.evaReplace();
    }
    /**
     * @return {?}
     */
    evaReplace() {
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
    }
}
EvaIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'eva-icon',
                template: `
    <i [innerHTML]="icon"></i>
  `
            }] }
];
/** @nocollapse */
EvaIconComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
EvaIconComponent.propDecorators = {
    data: [{ type: Input }],
    fill: [{ type: Input }],
    height: [{ type: Input }],
    width: [{ type: Input }],
    animation: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EvaIconModule {
}
EvaIconModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EvaIconComponent],
                imports: [],
                exports: [EvaIconComponent]
            },] }
];

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