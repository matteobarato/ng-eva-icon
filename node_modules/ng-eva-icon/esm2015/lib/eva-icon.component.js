/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { icons } from 'eva-icons';
export class EvaIconComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZXZhLWljb24vIiwic291cmNlcyI6WyJsaWIvZXZhLWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLFdBQVcsQ0FBQztBQVNoQyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBd0J6QixZQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBckIzQyxVQUFLLEdBQVUsU0FBUyxDQUFBO1FBQ3hCLFlBQU8sR0FBVSxNQUFNLENBQUE7UUFDdkIsV0FBTSxHQUFVLE1BQU0sQ0FBQTtRQUN0QixlQUFVLEdBQVUsT0FBTyxDQUFBO0lBa0JvQixDQUFDOzs7OztJQWhCaEQsSUFBYSxJQUFJLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7OztJQUNELElBQWEsSUFBSSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUU7SUFDdEIsQ0FBQzs7Ozs7SUFDRCxJQUFhLE1BQU0sQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFFO0lBQ3hCLENBQUM7Ozs7O0lBQ0QsSUFBYSxLQUFLLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELElBQWEsU0FBUyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQUlELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDbkIsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDakIsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLENBQUE7Z0JBQ3BGLE1BQU07WUFDUixLQUFLLFdBQVc7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtnQkFDdEYsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO2dCQUNyRixNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLENBQUE7Z0JBQ3BGLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtnQkFDbkYsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO2dCQUNwRixNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUE7Z0JBQ2pGLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtnQkFDbkYsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO2dCQUNsRixNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsQ0FBQTtnQkFDcEYsTUFBTTtTQUNUO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3pFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2hCLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUMzQixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7OztZQTVFSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7R0FFVDthQUVGOzs7O1lBVFEsWUFBWTs7O21CQWtCaEIsS0FBSzttQkFHTCxLQUFLO3FCQUdMLEtBQUs7b0JBR0wsS0FBSzt3QkFHTCxLQUFLOzs7O0lBbkJOLGdDQUFhOztJQUNiLGlDQUFZOztJQUNaLGlDQUF3Qjs7SUFDeEIsbUNBQXVCOztJQUN2QixrQ0FBc0I7O0lBQ3RCLHNDQUEyQjs7Ozs7SUFrQmYscUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge2ljb25zfSBmcm9tICdldmEtaWNvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdldmEtaWNvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgW2lubmVySFRNTF09XCJpY29uXCI+PC9pPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEV2YUljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGljb246U2FmZUh0bWxcbiAgICBfZGF0YTpzdHJpbmdcbiAgICBfZmlsbDpzdHJpbmcgPSAnIzMzMzMzMydcbiAgICBfaGVpZ2h0OnN0cmluZyA9ICcyNHB4J1xuICAgIF93aWR0aDpzdHJpbmcgPSAnMjRweCdcbiAgICBfYW5pbWF0aW9uOnN0cmluZyA9ICdwdWxzZSdcblxuICAgIEBJbnB1dCgpIHNldCBkYXRhKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB2YWx1ZTtcbiAgICB9XG4gICAgQElucHV0KCkgc2V0IGZpbGwodmFsdWU6IHN0cmluZykge1xuICAgICAgdGhpcy5fZmlsbCA9IHZhbHVlIDtcbiAgICB9XG4gICAgQElucHV0KCkgc2V0IGhlaWdodCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICB0aGlzLl9oZWlnaHQgPSB2YWx1ZSA7XG4gICAgfVxuICAgIEBJbnB1dCgpIHNldCB3aWR0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICB0aGlzLl93aWR0aCA9IHZhbHVlO1xuICAgIH1cbiAgICBASW5wdXQoKSBzZXQgYW5pbWF0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuX2FuaW1hdGlvbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLmV2YVJlcGxhY2UoKVxuICAgIH1cblxuICAgIGV2YVJlcGxhY2UoKXtcbiAgICAgIHN3aXRjaCAodGhpcy5fZmlsbCl7XG4gICAgICAgIGNhc2UgJ3ByaW1hcnknOlxuICAgICAgICAgIHRoaXMuX2ZpbGwgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJy0taW9uLWNvbG9yLXByaW1hcnknKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzZWNvbmRhcnknOlxuICAgICAgICAgIHRoaXMuX2ZpbGwgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJy0taW9uLWNvbG9yLXNlY29uZGFyeScpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RlcnRpYXJ5JzpcbiAgICAgICAgICB0aGlzLl9maWxsID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWlvbi1jb2xvci10ZXJ0aWFyeScpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgIHRoaXMuX2ZpbGwgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJy0taW9uLWNvbG9yLXN1Y2Nlc3MnKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkYW5nZXInOlxuICAgICAgICAgIHRoaXMuX2ZpbGwgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJy0taW9uLWNvbG9yLWRhbmdlcicpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICAgIHRoaXMuX2ZpbGwgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJy0taW9uLWNvbG9yLXdhcm5pbmcnKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkYXJrJzpcbiAgICAgICAgICB0aGlzLl9maWxsID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWlvbi1jb2xvci1kYXJrJylcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgICB0aGlzLl9maWxsID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWlvbi1jb2xvci1tZWRpdW0nKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsaWdodCc6XG4gICAgICAgICAgdGhpcy5fZmlsbCA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1pb24tY29sb3ItbGlnaHQnKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuX2ZpbGwgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJy0taW9uLWNvbG9yLXByaW1hcnknKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGhpcy5pY29uID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaWNvbnNbdGhpcy5fZGF0YV0udG9Tdmcoe1xuICAgICAgICB3aWR0aDogdGhpcy5fd2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5faGVpZ2h0LFxuICAgICAgICBmaWxsOiB0aGlzLl9maWxsLFxuICAgICAgICBhbmltYXRpb246IHRoaXMuX2FuaW1hdGlvbixcbiAgICAgIH0pKTtcbiAgICB9XG5cbn1cbiJdfQ==