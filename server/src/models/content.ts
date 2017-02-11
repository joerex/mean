import * as mongoose from 'mongoose';
import {db} from '../db';

export class Content {
  private name = 'restaurants';
  private schema;
  private collection;

  constructor() {

    this.schema = new mongoose.Schema({
      address: {
        type: Object
      },
      borough: {
        type:String,
        required: true
      },
      cuisine: {
        type:String,
        //required: true
      },
      grades: {
        type: Array
      },
      name: {
        type: String,
        required: true
      },
      restaurantId: {
        type: String
      }
    });

    this.collection = db.model(this.name, this.schema);
  }

  getContent(selector, callback, limit) {
    this.collection.find(selector, callback).limit(limit);
  }

  insertContent(content, callback) {
    this.collection.create(content, callback);
  }

  removeContent(selector, callback) {
    this.collection.remove(selector, callback);
  }

  updateContent(model, callback) {
    this.collection.update({_id: model._id}, {$set: model}, callback);
  }
}