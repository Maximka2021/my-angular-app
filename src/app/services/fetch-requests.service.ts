import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from "../People"

const header = {
  headers: new HttpHeaders({
    "Content-Type":"application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class FetchRequestsService {


  private url = "http://localhost:3000/people";

  constructor(private http: HttpClient) { }

  getPeople(): Observable<People[]>{
    return this.http.get<People[]>(this.url)
  }

  deletePerson(person: People): Observable<People>{
    return this.http.delete<People>(`${this.url}/${person.id}`)
  }

  setImportant(person: People): Observable<People>{
    const newUrl  =`${this.url}/${person.id}`
    return this.http.put<People>(newUrl, person, header)
  }

}
