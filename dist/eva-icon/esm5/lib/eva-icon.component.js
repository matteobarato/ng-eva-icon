/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { icons } from 'eva-icons';
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
export { EvaIconComponent };
if (false) {
    /** @type {?} */
    EvaIconComponent.prototype.icon;
    /** @type {?} */
    EvaIconComponent.prototype._data;
    /** @type {?} */
    EvaIconComponent.prototype._fill;
    /** @type {?} */
    EvaIconComponent.prototype._height;
    /** @type {?} */
    EvaIconComponent.prototype._width;
    /** @type {?} */
    EvaIconComponent.prototype._animation;
    /**
     * @type {?}
     * @private
     */
    EvaIconComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZXZhLWljb24vIiwic291cmNlcyI6WyJsaWIvZXZhLWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUVoQztJQStCSSwwQkFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQXJCM0MsVUFBSyxHQUFVLFNBQVMsQ0FBQTtRQUN4QixZQUFPLEdBQVUsTUFBTSxDQUFBO1FBQ3ZCLFdBQU0sR0FBVSxNQUFNLENBQUE7UUFDdEIsZUFBVSxHQUFVLE9BQU8sQ0FBQTtJQWtCb0IsQ0FBQztJQWhCaEQsc0JBQWEsa0NBQUk7Ozs7O1FBQWpCLFVBQWtCLEtBQWE7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYSxrQ0FBSTs7Ozs7UUFBakIsVUFBa0IsS0FBYTtZQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBRTtRQUN0QixDQUFDOzs7T0FBQTtJQUNELHNCQUFhLG9DQUFNOzs7OztRQUFuQixVQUFvQixLQUFhO1lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFFO1FBQ3hCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWEsbUNBQUs7Ozs7O1FBQWxCLFVBQW1CLEtBQWE7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYSx1Q0FBUzs7Ozs7UUFBdEIsVUFBdUIsS0FBYTtZQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFD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OztJQUN2QixrQ0FBc0I7O0lBQ3RCLHNDQUEyQjs7Ozs7SUFrQmYscUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge2ljb25zfSBmcm9tICdldmEtaWNvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdldmEtaWNvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgW2lubmVySFRNTF09XCJpY29uXCI+PC9pPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEV2YUljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGljb246U2FmZUh0bWxcbiAgICBfZGF0YTpzdHJpbmdcbiAgICBfZmlsbDpzdHJpbmcgPSAnIzMzMzMzMydcbiAgICBfaGVpZ2h0OnN0cmluZyA9ICcyNHB4J1xuICAgIF93aWR0aDpzdHJpbmcgPSAnMjRweCdcbiAgICBfYW5pbWF0aW9uOnN0cmluZyA9ICdwdWxzZSdcblxuICAgIEBJbnB1dCgpIHNldCBkYXRhKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB2YWx1ZTtcbiAgICB9XG4gICAgQElucHV0KCkgc2V0IGZpbGwodmFsdWU6IHN0cmluZykge1xuICAgICAgdGhpcy5fZmlsbCA9IHZhbHVlIDtcbiAgICB9XG4gICAgQElucHV0KCkgc2V0IGhlaWdodCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICB0aGlzLl9oZWlnaHQgPSB2YWx1ZSA7XG4gICAgfVxuICAgIEBJbnB1dCgpIHNldCB3aWR0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICB0aGlzLl93aWR0aCA9IHZhbHVlO1xuICAgIH1cbiAgICBASW5wdXQoKSBzZXQgYW5pbWF0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuX2FuaW1hdGlvbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLmV2YVJlcGxhY2UoKVxuICAgIH1cblxuICAgIGV2YVJlcGxhY2UoKXtcbiAgICAgIHN3aXRjaCAodGhpcy5fZmlsbCl7XG4gICAgICAgIGNhc2UgJ3ByaW1hcnknOlxuICAgICAgICAgIHRoaXMuX2ZpbGwgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJy0taW9uLWNvbG9yLXByaW1hcnknKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzZWNvbmRhcnknOlxuICAgICAgICAgIHRoaXMuX2ZpbGwgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJy0taW9uLWNvbG9yLXNlY29uZGFyeScpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RlcnRpYXJ5JzpcbiAgICAgICAgICB0aGlzLl9maWxsID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWlvbi1jb2xvci10ZXJ0aWFyeScpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgIHRoaXMuX2ZpbGwgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJy0taW9uLWNvbG9yLXN1Y2Nlc3MnKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkYW5nZXInOlxuICAgICAgICAgIHRoaXMuX2ZpbGwgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJy0taW9uLWNvbG9yLWRhbmdlcicpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICAgIHRoaXMuX2ZpbGwgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJy0taW9uLWNvbG9yLXdhcm5pbmcnKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkYXJrJzpcbiAgICAgICAgICB0aGlzLl9maWxsID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWlvbi1jb2xvci1kYXJrJylcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgICB0aGlzLl9maWxsID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWlvbi1jb2xvci1tZWRpdW0nKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsaWdodCc6XG4gICAgICAgICAgdGhpcy5fZmlsbCA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1pb24tY29sb3ItbGlnaHQnKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuX2ZpbGwgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJy0taW9uLWNvbG9yLXByaW1hcnknKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGhpcy5pY29uID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaWNvbnNbdGhpcy5fZGF0YV0udG9Tdmcoe1xuICAgICAgICB3aWR0aDogdGhpcy5fd2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5faGVpZ2h0LFxuICAgICAgICBmaWxsOiB0aGlzLl9maWxsLFxuICAgICAgICBhbmltYXRpb246IHRoaXMuX2FuaW1hdGlvbixcbiAgICAgIH0pKTtcbiAgICB9XG5cbn1cbiJdfQ==