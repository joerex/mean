import { Component } from '@angular/core';
import {ContentService} from "../../services/content.service";

@Component({
  selector: 'content',
  template: `
    <div *ngIf="content.length === 0">Loading Content...</div>
    <form>
      <h4>Add Content</h4>
      <input name="name" [(ngModel)]="newItem.name" type="text" /> /
      <input name="borough" [(ngModel)]="newItem.borough" type="text" />
      <button (click)="addContent()">Save</button>
    </form>
    <br><hr>
    <div *ngFor="let item of content">
      <input name="name" [(ngModel)]="item.name" type="text" /> /
      <span>{{item.borough}}</span>
      <button (click)="removeContent(item)">Remove</button>
      <button (click)="updateContent(item)">Save</button>
      <hr>
    </div>
  `,
})
export class ContentComponent {
  content = [];
  newItem = {};

  constructor(private cs: ContentService) {}

  ngOnInit() {
    this.getContent();
  }

  getContent() {
    this.cs.getContent().subscribe(
      content =>  this.content = content,
      err => console.log(err));
  }

  removeContent(item) {
    this.cs.removeContent(item._id).subscribe(
      res => this.content = this.content.filter(c => c._id != item._id),
      err => console.log(err));
  }

  updateContent(item) {
    this.cs.updateContent(item).subscribe(
      res => {},
      err => console.log(err));
  }

  addContent() {
    this.cs.addContent(this.newItem).subscribe(
      res => {
        this.content.unshift(this.newItem)
        this.newItem = {};
      },
          err => console.log(err)
      });
  }
}
