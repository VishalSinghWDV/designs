import { Component } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { SaveLayoutDialogComponent } from './save-layout-dialog/save-layout-dialog.component';

@Component({
  selector: 'app-multiviewer',
  templateUrl: './multiviewer.component.html',
  styleUrls: ['./multiviewer.component.scss']
})
export class MultiviewerComponent {

  constructor(public dialog: MatDialog) {}

  inEditMode : boolean = false

  enableEditMode(){
    this.inEditMode = true
  }

  disableEditMode(){
    this.inEditMode = false
  }

  openSaveLayoutDialog(){
    this.dialog.open(SaveLayoutDialogComponent);
    this.disableEditMode()
  }
}
