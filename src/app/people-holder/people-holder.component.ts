import { Component } from '@angular/core';
import { People } from "../People"
import { FetchRequestsService } from '../services/fetch-requests.service';
@Component({
  selector: 'app-people-holder',
  templateUrl: './people-holder.component.html',
  styleUrls: ['./people-holder.component.css']
})
export class PeopleHolderComponent {
  constructor(private fetchRequest: FetchRequestsService){}
  people: People[] = [];

  ngOnInit(): void{
    this.fetchRequest.getPeople().subscribe((data) => this.people = data)
  }

  deletePerson(person: People){
    this.fetchRequest.deletePerson(person).subscribe(() => this.people = this.people.filter(p => p.id !== person.id))
  }

  changeImportant(person: People){
    person.isImportant = !person.isImportant
    this.fetchRequest.setImportant(person).subscribe()
  }

}
