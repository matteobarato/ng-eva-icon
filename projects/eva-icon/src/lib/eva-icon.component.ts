import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {icons} from 'eva-icons';

@Component({
  selector: 'eva-icon',
  template: `
    <i [innerHTML]="icon"></i>
  `,
  styles: []
})
export class EvaIconComponent implements OnInit {
    icon:SafeHtml
    _data:string
    _fill:string = '#333333'
    _height:string = '24px'
    _width:string = '24px'
    _animation:string = 'pulse'

    @Input() set data(value: string) {
      this._data = value;
    }
    @Input() set fill(value: string) {
      this._fill = value ;
    }
    @Input() set height(value: string) {
      this._height = value ;
    }
    @Input() set width(value: string) {
      this._width = value;
    }
    @Input() set animation(value: string) {
      this._animation = value;
    }

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit() {
      this.evaReplace()
    }

    evaReplace(){
      switch (this._fill){
        case 'primary':
          this._fill = getComputedStyle(document.body).getPropertyValue('--ion-color-primary')
          break;
        case 'secondary':
          this._fill = getComputedStyle(document.body).getPropertyValue('--ion-color-secondary')
          break;
        case 'tertiary':
          this._fill = getComputedStyle(document.body).getPropertyValue('--ion-color-tertiary')
          break;
        case 'success':
          this._fill = getComputedStyle(document.body).getPropertyValue('--ion-color-success')
          break;
        case 'danger':
          this._fill = getComputedStyle(document.body).getPropertyValue('--ion-color-danger')
          break;
        case 'warning':
          this._fill = getComputedStyle(document.body).getPropertyValue('--ion-color-warning')
          break;
        case 'dark':
          this._fill = getComputedStyle(document.body).getPropertyValue('--ion-color-dark')
          break;
        case 'medium':
          this._fill = getComputedStyle(document.body).getPropertyValue('--ion-color-medium')
          break;
        case 'light':
          this._fill = getComputedStyle(document.body).getPropertyValue('--ion-color-light')
          break;
        default:
          this._fill = getComputedStyle(document.body).getPropertyValue('--ion-color-primary')
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
