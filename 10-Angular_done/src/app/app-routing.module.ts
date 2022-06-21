import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponentComponent } from './components/notes-component/notes-component.component';
import { AddNoteComponentComponent } from './components/add-note-component/add-note-component.component';

const routes: Routes = [
  { path: 'add', component: AddNoteComponentComponent },
  { path: 'list', component: NotesComponentComponent },
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
