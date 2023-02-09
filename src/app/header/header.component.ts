import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

@Output() btnClick = new EventEmitter()
@Input() text: string;

  onClick(){
    this.btnClick.emit()
  }

}
