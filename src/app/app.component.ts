import {Component} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  path: string = '';

  constructor(private af: AngularFireStorage) {

  }

  upload(event: any) {
    this.path = event.target.files[0];
  }

  uploadImage() {
    this.af.upload('/files' + Math.random() + this.path, this.path);
  }
}
