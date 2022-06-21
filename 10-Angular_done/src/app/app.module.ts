import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponentComponent } from './components/notes-component/notes-component.component';
import { MainMenuComponentComponent } from './components/main-menu-component/main-menu-component.component';
import { AddNoteComponentComponent } from './components/add-note-component/add-note-component.component';
import { TasksService } from './tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponentComponent,
    MainMenuComponentComponent,
    AddNoteComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
