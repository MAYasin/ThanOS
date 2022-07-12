import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'desktop-item',
  templateUrl: './desktop-item.component.html',
  styleUrls: ['./desktop-item.component.scss']
})
export class DesktopItemComponent implements OnInit {

  @Input() data: any;

  title!: string;

  constructor() {
  }

  ngOnInit(): void {
    let arrname = (this.data.name as string).split('/');
    this.title = arrname[arrname.length-1];
    console.log(this.data)
  }

}
