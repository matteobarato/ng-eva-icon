import { OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
export declare class EvaIconComponent implements OnInit {
    private sanitizer;
    icon: SafeHtml;
    _data: string;
    _fill: string;
    _height: string;
    _width: string;
    _animation: string;
    data: string;
    fill: string;
    height: string;
    width: string;
    animation: string;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
    evaReplace(): void;
}
