import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {AppError} from "../common/app.errors";
import {NotFoundError} from "../common/not-found.error";
import {BadInput} from "../common/bad-input";

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
    this.postService.getAll()
      .subscribe(response => {
        this.posts = response;
      })
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    input.value = '';

      this.postService.create(post)
        .subscribe(response => {
           this.newPost = response;
           post['id'] = this.newPost.id;
           this.posts.splice(0, 0, post);
        },
          (error: AppError) => {
          if(error instanceof BadInput) {
             // this.form.setErrors(error.originalError);
          } else {
            throw error;
          }
        });
  }

  updatePost(post) {
   this.postService.update(post)
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post){
   this.postService.delete(post.id)
     .subscribe(response => {
       let index = this.posts.indexOf(post);
       this.posts.splice(index, 1);
     },
       (error: AppError) => {
       if(error instanceof NotFoundError){
         alert('This post has already been deleted.');
       } else {
        throw error;
       }
     });
  }

}
