import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from "@angular/common/http";
import { PostService } from "./services/post.service";

@NgModule({
  declarations: [
    AppComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
