import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {AppError} from "../app.errors";
import {NotFoundError} from "../not-found.error";
import {BadInput} from "../bad-input";

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
   return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  createPost(post){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(post))
      .catch((error: Response) => {
        if(error.status === 400) {
          return Observable.throw(new BadInput(error.json()));
        }
        return Observable.throw(new AppError(error.json()));
      })
  }

  updatePost(post) {
    return this.http.patch('https://jsonplaceholder.typicode.com/posts' + '/' + post.id, JSON.stringify({isRead: true}))
  }

  deletePost(id) {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts' + '/' + id)
      .catch((error: Response) => {
        if(error.status === 404) {
          return Observable.throw(new NotFoundError())
        }
        return Observable.throw(new AppError(error));
      });
  }
}
