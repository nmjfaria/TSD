import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public notes = [
    {
      text:"Nota 1",
      date: new Date(Date.now()).toLocaleDateString()
    },
    {
      text:"Nota 2",
      date: new Date(Date.now()).toLocaleDateString()
    },
    {
      text:"Nota 3",
      date: new Date(Date.now()).toLocaleDateString()
    },
    
  ]
  constructor() { }

  getNotes() {
    return this.notes
  }

  addNotes(note: any){
    this.notes.push(note)
  }

}
