import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Output() clickHandler: EventEmitter<any> = new EventEmitter();
  @Input()
  @HostBinding('attr.disabled')
  public disabled: boolean | undefined;
    /* 
    @Input()
    public icon: string;
    private _type: ButtonType = 'button';
    public get type(): ButtonType {
      return this._type;
    }
    @Input() set type(value: ButtonType) {
      this._type = value;
    }
    @HostBinding('attr.styling')
    private _styling: UI_Style = 'raised';
    public get styling(): UI_Style {
      return this._styling;
    }
    @Input() set styling(value: UI_Style) {
      this._styling = value;
    }
    @HostBinding('attr.color')
    private _color: UI_Color = 'default';
    public get color(): UI_Color {
      return this._color;
    }
    @Input() set color(value: UI_Color) {
      this._color = value;
    }
    @HostBinding('attr.size')
    private _size: UI_Size = 'small';
    public get size(): UI_Size {
      return this._size;
    }
    @Input() set size(value: UI_Size) {
      this._size = value;
    } */
    constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onClick(event: Event) {
    if (!this.disabled) this.clickHandler.emit(event);
  }
}