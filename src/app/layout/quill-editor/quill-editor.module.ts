import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuillEditorRoutingModule } from './quill-editor-routing.module';
import { QuillEditorComponent } from './quill-editor.component';

import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [QuillEditorComponent],
  imports: [
    CommonModule,
    QuillEditorRoutingModule,
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class QuillEditorModule { }
