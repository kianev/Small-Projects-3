import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  newPost;

  constructor(private http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
       this.posts = response;
      })
  }

  ngOnInit() {
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    input.value = '';

      this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(post))
        .subscribe(response => {
           this.newPost = response;
           post['id'] = this.newPost.id;
           this.posts.splice(0, 0, post);
        });
  }

}
