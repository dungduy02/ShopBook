import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  filesToUpload: Array<File>
  constructor() {
    this.filesToUpload = []
  }
  upload() {
    this.makeFileRequest("http://localhost:8080/public/add/image", [], this.filesToUpload).then((result) => {
      console.log(result);
    }, (error: any) => {
      console.log(error);

    });
  }
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;

  }
  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, rejects) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for (let i = 0; i < files.length; i++) {
        formData.append("upload[]",files[i],files[i].name);
      }
      xhr.onreadystatechange = function(){
        if(xhr.readyState ==4){
          if(xhr.status==200){
            console.log("image upload successfully");
          }else{
            rejects(xhr.response);
          }
        }
      }
      xhr.open("POST",url,true);
      // xhr.setRequestHeader("x-auth-token",sessionStorage.getItem(TOKEN_KEY));
      xhr.send(formData);
    });
  }
}
