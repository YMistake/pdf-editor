import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfEditorComponent } from './pdf-editor.component';

const routes: Routes = [{ path: '', component: PdfEditorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfEditorRoutingModule { }
