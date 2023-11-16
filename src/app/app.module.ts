import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudioComponent } from './components/studio/studio.component';
import { ProductionComponent } from './components/studio/production/production.component';
import { WebcamFeedComponent } from './components/webcam-feed/webcam-feed.component';
import { MultiviewerComponent } from './components/studio/multiviewer/multiviewer.component';
import { GalleryDialogComponent } from './components/studio/gallery-dialog/gallery-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    StudioComponent,
    ProductionComponent,
    WebcamFeedComponent,
    MultiviewerComponent,
    GalleryDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatRadioModule,
    MatSliderModule,
    FormsModule,
    DragDropModule,
    MatCheckboxModule,
    MatDialogModule,
    MatProgressBarModule,
    MatChipsModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
