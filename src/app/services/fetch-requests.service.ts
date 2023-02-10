import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from "../People"

@Injectable({
  providedIn: 'root'
})
export class FetchRequestsService {

  private url = "http://localhost:5000/people";

  constructor(private http: HttpClient) { }

  getPeople(): Observable<People[]>{
    return this.http.get<People[]>(this.url)
  }

  deletePerson(person: People): Observable<People>{
    return this.http.delete<People>(`${this.url}/${person.id}`)
  }

}
