import { Component, Input, EventEmitter, Output } from '@angular/core';
import { People } from '../People';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() person: People;
  @Output() onDeletePerson: EventEmitter<People> = new EventEmitter
  @Output() onSetImportant: EventEmitter<People> = new EventEmitter

  onDelete(person: any){
    this.onDeletePerson.emit(person)
  }

  handleClick(person: any){
    this.onSetImportant.emit(person)
  }

}
