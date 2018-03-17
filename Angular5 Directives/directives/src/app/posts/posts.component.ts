import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {PostService} from "../services/post.service";
import {AppError} from "../app.errors";
import {NotFoundError} from "../not-found.error";
import {BadInput} from "../bad-input";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  newPost;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(response => {
        this.posts = response;
      },
          error => {
        alert('An unexpected error occurred.');
        console.log(error);
      })
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    input.value = '';

      this.postService.createPost(post)
        .subscribe(response => {
           this.newPost = response;
           post['id'] = this.newPost.id;
           this.posts.splice(0, 0, post);
        },
          (error: AppError) => {
          if(error instanceof BadInput) {
             // this.form.setErrors(error.originalError);
          } else {
            alert('An unexpected error occurred.');
            console.log(error);
          }
        });
  }

  updatePost(post) {
   this.postService.updatePost(post)
      .subscribe(response => {
        console.log(response);
      },
          error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }

  deletePost(post){
   this.postService.deletePost(post.id)
     .subscribe(response => {
       let index = this.posts.indexOf(post);
       this.posts.splice(index, 1);
     },
       (error: AppError) => {
       if(error instanceof NotFoundError){
         alert('This post has already been deleted.');
       } else {
         alert('An unexpected error occurred.');
         console.log(error);
       }
     });
  }

}
