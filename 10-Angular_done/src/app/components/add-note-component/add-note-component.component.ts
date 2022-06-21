import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-add-note-component',
  templateUrl: './add-note-component.component.html',
  styleUrls: ['./add-note-component.component.scss']
})
export class AddNoteComponentComponent implements OnInit {
  public task : string = ""

  setNewTaskName(taskName: string): void {
    this.task = taskName
  }

  public onSave (){
    this._tasksService.addNotes({text: this.task, date: new Date(Date.now()).toLocaleDateString()})
    this.task = ""
  }

  constructor(private _tasksService: TasksService) { }

  ngOnInit(): void {
  }

}
