import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContentComponent }  from './content.component';
import {HttpModule} from "@angular/http";
import {ContentService} from "../../services/content.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ ContentComponent ],
  exports: [ ContentComponent ],
  providers: [ ContentService ]
})
export class ContentModule { }
