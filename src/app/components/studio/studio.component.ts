import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})

// interface Layer {
//   name: string;
//   width: number;
//   height: number;
//   backgroundColor: string;
//   opacity: number;
// }

export class StudioComponent {

  imageSelected = false;
  isAddSourceCardBodyVisible = true
  isLocalVideoSectionVisible = false
  isUploadFileSectionVisible = false
  isGuestSourceSectionVisible = false
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

  openUploadFileSection(){
    this.isAddSourceCardBodyVisible = false
    this.isUploadFileSectionVisible = true
  }

  closeUploadFileSection(){
    this.isAddSourceCardBodyVisible = true
    this.isUploadFileSectionVisible = false
  }

  openLocalVideoSection(){
    this.isAddSourceCardBodyVisible = false
    this.isLocalVideoSectionVisible = true
  }

  closeLocalVideoSection(){
    this.isAddSourceCardBodyVisible = true
    this.isLocalVideoSectionVisible = false
    console.log('close local')
  }

  openGuestSourceSection(){
    this.isAddSourceCardBodyVisible = false
    this.isGuestSourceSectionVisible = true
  }

  closeGuestSourceSection(){
    this.isAddSourceCardBodyVisible = true
    this.isGuestSourceSectionVisible = false
  }

  openFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
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
}
