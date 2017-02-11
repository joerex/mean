import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class ContentService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getContent() {
    return this.http
      .get(`/api`)
      .map(response => response.json());
  }

  removeContent(id) {
    return this.http
      .delete(`/api/` + id)
      .map(response => response.json());
  }

  updateContent(content) {
    return this.http
      .put(`/api`, JSON.stringify(content), {headers: this.headers})
      .map(response => response.json());
  }

  addContent(content) {
    return this.http
      .post(`/api`, JSON.stringify(content), {headers: this.headers})
      .map(response => response.json());
  }
}
