import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfEditorRoutingModule } from './pdf-editor-routing.module';
import { PdfEditorComponent } from './pdf-editor.component';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


@NgModule({
  declarations: [PdfEditorComponent],
  imports: [
    CommonModule,
    PdfEditorRoutingModule,
    NgxExtendedPdfViewerModule,
  ]
})
export class PdfEditorModule { }
