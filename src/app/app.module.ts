import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { AngularFireModule} from '@angular/fire';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBWVjfpz7u-1bEgQLdJvVQAFRJY_tG66_E",
      authDomain: "uploadfile-demo-9b3a8.firebaseapp.com",
      projectId: "uploadfile-demo-9b3a8",
      storageBucket: "uploadfile-demo-9b3a8.appspot.com",
      messagingSenderId: "783119327441",
      appId: "1:783119327441:web:677f5241888babadfca5f0",
      measurementId: "G-6PY1G13W0V"
    }),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
