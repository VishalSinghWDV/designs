import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Clipboard } from '@angular/cdk/clipboard';

import { MatDrawer } from '@angular/material/sidenav';
import {MatDialog} from '@angular/material/dialog';
import { GalleryDialogComponent } from '../gallery-dialog/gallery-dialog.component';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent {

  // @Input() allStudioLayers: any[] = []
  imageSelected = false;
  isAddSourceCardBodyVisible = true
  isLocalVideoSectionVisible = false
  isUploadFileSectionVisible = false
  isGuestSourceSectionVisible = false
  isGuestSettingsVisible = false
  isPlaylistSectionVisible = false
  isNewPlaylistSectionVisible = false
  isBroadcastSectionVisible = false
  imageUrl: string | ArrayBuffer | null = '';
  selectedFilter = 'fill';

  onUploadButtonClick() {
    // This could be used to open a file input dialog for image selection.
    // For simplicity, we'll just set imageSelected to true in this example.
    this.imageSelected = true;
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageSelected = true;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }

  deleteImage() {
    this.imageSelected = false;
    this.imageUrl = '';
  }

  changeImage() {
  }

  allStudioLayers: any[] = []
  layerName: string = '';
  layerWidth: number = 100;
  layerHeight: number = 100;
  layerWidthUnit: string = '%';
  layerHeightUnit: string = '%';
  layerBackgroundOption: string = 'Color';
  layerBackgroundColor: string = '#007bff';
  layerOpacity: number = 100;
  isAddSourceDrawerContentVisible: boolean = false
  isNewLayerDrawerContentVisible: boolean = false

  backendLink = 'https://example.com';

  assetName: string = ''

  @ViewChild('sideDrawer') sideDrawer!: MatDrawer

  addLayer() {
    const newLayer = {
      name: this.layerName,
      width: this.layerWidth + this.layerWidthUnit,
      height: this.layerHeight + this.layerHeightUnit,
      background: this.layerBackgroundOption === 'Color' ? this.layerBackgroundColor : 'Image URL', // Adjust as needed
      opacity: this.layerOpacity + '%',
      isLayerContainerBodyVisible: false
    };

    this.allStudioLayers.push(newLayer);
    this.clearForm();
  }

  clearForm() {
    this.layerName = '';
    this.layerWidth = 100;
    this.layerHeight = 100;
    this.layerWidthUnit = '%';
    this.layerHeightUnit = '%';
    this.layerBackgroundOption = 'Color';
    this.layerBackgroundColor = '#007bff';
    this.layerOpacity = 100;
  }

  updateLayerBackgroundColorInput() {

  }

  updateLayerBackgroundColorPickerInput() {

  }

  openUploadFileSection() {
    this.isAddSourceCardBodyVisible = false
    this.isUploadFileSectionVisible = true
  }

  closeUploadFileSection() {
    this.isAddSourceCardBodyVisible = true
    this.isUploadFileSectionVisible = false
  }

  openLocalVideoSection() {
    this.isAddSourceCardBodyVisible = false
    this.isLocalVideoSectionVisible = true
  }

  closeLocalVideoSection() {
    this.isAddSourceCardBodyVisible = true
    this.isLocalVideoSectionVisible = false
    console.log('close local')
  }

  openGuestSourceSection() {
    this.isAddSourceCardBodyVisible = false
    this.isGuestSourceSectionVisible = true
  }

  closeGuestSourceSection() {
    this.isAddSourceCardBodyVisible = true
    this.isGuestSourceSectionVisible = false
  }

  openPlaylistSection() {
    this.isAddSourceCardBodyVisible = false
    this.isPlaylistSectionVisible = true
  }

  closePlaylistSection() {
    this.isAddSourceCardBodyVisible = true
    this.isPlaylistSectionVisible = false
  }

  openNewPlaylistSection(){
    this.isPlaylistSectionVisible = false
    this.isNewPlaylistSectionVisible = true
  }

  closeNewPlaylistSection(){
    this.isPlaylistSectionVisible = true
    this.isNewPlaylistSectionVisible = false
  }

  openFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  openGuestSettings() {
    this.openSideDrawer('source')
    this.isAddSourceDrawerContentVisible = true
    this.isAddSourceCardBodyVisible = false
    this.isGuestSettingsVisible = true
  }

  openBroadcastSection() {
    this.sideDrawer.open()
    this.isBroadcastSectionVisible = true
    // this.openSideDrawer('source')
    // this.isAddSourceDrawerContentVisible = true
    // this.isAddSourceCardBodyVisible = false
    // this.isGuestSettingsVisible = true
  }

  openSideDrawer(event: any) {
    console.log('event', event)
    if (event == 'source') {
      this.isNewLayerDrawerContentVisible = false
      this.isAddSourceDrawerContentVisible = true
    }
    else if (event == 'layer') {
      this.isNewLayerDrawerContentVisible = true
      this.isAddSourceDrawerContentVisible = false
    }
    this.sideDrawer.open()
  }

  onFileSelected(event: any) {
    // Handle the selected file here
    const selectedFile = event.target.files[0];
    // You can access the selected file using 'selectedFile'
  }
  // onFileSelected(event: Event) {
  //   const inputElement = event.target as HTMLInputElement;
  //   const file = inputElement.files[0]; // Get the selected file
  //   if (file) {
  //     // Do something with the selected file
  //     console.log('Selected file:', file);
  //   }
  // }

  arrowRotation: boolean[] = new Array(this.allStudioLayers.length).fill(false);

  // isLayerContainerBodyVisible:boolean = false
  toggleArrowPos: boolean = false

  // @Input() isSourceDrawerOpen!:boolean;
  @Output() sideDrawerOpen = new EventEmitter<string>()

  // openSideDrawer(val: any) {
  //   this.sideDrawerOpen.emit(val)
  //   // this.isSourceDrawerOpen = !this.isSourceDrawerOpen
  // }

  toggleLayerContainerBodyVisibility(index: number) {
    this.allStudioLayers[index].isLayerContainerBodyVisible = !this.allStudioLayers[index].isLayerContainerBodyVisible
    this.arrowRotation[index] = !this.arrowRotation[index];
    // this.toggleArrowPos = !this.toggleArrowPos
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.allStudioLayers, event.previousIndex, event.currentIndex);
  }

  constructor(public dialog: MatDialog, private clipboard: Clipboard) {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    console.log('Window Width: ' + windowWidth + 'px');
    console.log('Window Height: ' + windowHeight + 'px');
  }

  copyToClipboard(input: HTMLInputElement) {
    if (input) {
      this.clipboard.copy(input.value);
    }
  }

  openGalleryDialog() {
    const dialogRef = this.dialog.open(GalleryDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
