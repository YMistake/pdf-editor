import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'pdf-editor', loadChildren: () => import('./pdf-editor/pdf-editor.module').then(m => m.PdfEditorModule) },
  { path: 'quill-editor', loadChildren: () => import('./quill-editor/quill-editor.module').then(m => m.QuillEditorModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
