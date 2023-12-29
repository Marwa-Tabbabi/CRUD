import { Injectable } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {Image} from "../models/image";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private sanitizer: DomSanitizer) { }

  public createImage(course: any){
    const courseImage: any = course.image;

    const imageFileData = courseImage;
    const imageBlob = this.dataURItoBlob(imageFileData.imageBytes, imageFileData.type);

    const imageFile = new File([imageBlob], imageFileData.nom, {type: imageFileData.type});
    const imageFinal: Image = {
      file: imageFile,
      url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
    }

    course.image = imageFinal;
    return course;

  }

  public dataURItoBlob(imageBytes: any, imageType: any){
    const byteString = window.atob(imageBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++){
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], {type: imageType});
    return blob;
  }


}
