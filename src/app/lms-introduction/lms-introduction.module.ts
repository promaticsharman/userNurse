import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlyrModule } from 'ngx-plyr';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PlyrModule,
    NgxExtendedPdfViewerModule,
    PdfJsViewerModule,
    MatSelectModule,
    DragDropModule,
  ]
})
export class LmsIntroductionModule { }
