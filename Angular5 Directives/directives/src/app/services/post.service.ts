import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from "rxjs/Observable";
import { AppError } from "../common/app.errors";
import { NotFoundError } from "../common/not-found.error";
import { BadInput } from "../common/bad-input";

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
   return this.http.get('https://jsonplaceholder.typicode.com/posts')
     .catch(this.handleError);
  }

  createPost(post){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(post))
      .catch(this.handleError);
  }

  updatePost(post) {
    return this.http.patch('https://jsonplaceholder.typicode.com/posts' + '/' + post.id, JSON.stringify({isRead: true}))
      .catch(this.handleError);
  }

  deletePost(id) {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts' + '/' + id)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if(error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }

    if (error.status === 404) {
      return Observable.throw(new NotFoundError())
    }

    return Observable.throw(new AppError(error));
  }
}
