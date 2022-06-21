import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-notes-component',
  templateUrl: './notes-component.component.html',
  styleUrls: ['./notes-component.component.scss']
})
export class NotesComponentComponent implements OnInit {
  public notes : { text: string; date: string; }[] = [];

  constructor(private _tasksService: TasksService) { }

  

  ngOnInit(): void {
    this.notes = this._tasksService.getNotes()
  }

}
