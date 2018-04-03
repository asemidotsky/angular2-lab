import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() {
    console.log('constructor called!');
  }

  ngOnInit() {
    console.log('ngInit called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges called!`);
    console.log(changes);
  }
}
