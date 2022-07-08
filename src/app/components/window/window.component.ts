import { Component, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {
  @Input('width') public width: number | undefined;
  @Input('height') public height: number | undefined;
  @Input('left') public left: number | undefined;
  @Input('top') public top: number | undefined;
  mouse: { x: number; y: number; } | undefined;
  boxSpec: any;

  constructor(private el: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    this.render.listen('window', 'load', () => {
      this.boxSpec = this.el.nativeElement.getBoundingClientRect();
    })
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouse = {
      x: event.clientX,
      y: event.clientY
    }
  }
  onChange() {
    if (this.mouse != undefined) {
      this.width = this.mouse.x - this.boxSpec.left;
      this.height = this.mouse.y - this.boxSpec.top;
    }
  }

}
