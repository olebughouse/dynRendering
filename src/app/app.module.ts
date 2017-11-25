import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { AnotherChildComponent } from './another-child/another-child.component';
import {ImageZoom} from './image-zoom.directive';
import {ImageZoomLens} from './image-zoom-lens.component';
import {ImageZoomContainer} from './image-zoom-container.component';

import { HiddenDirective } from './hidden.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AnotherChildComponent,
    ImageZoom, ImageZoomContainer, ImageZoomLens,
    HiddenDirective 
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  exports: [HiddenDirective, ImageZoom],
  providers: [],
  entryComponents: [AppComponent, ChildComponent, AnotherChildComponent,
    ImageZoomContainer, ImageZoomLens],
  bootstrap: [AppComponent]
})
export class AppModule { }
