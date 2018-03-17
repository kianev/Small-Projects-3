import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from "@angular/common/http";
import { PostService } from "./services/post.service";
import {AppErrorHandler} from "./common/app-error-handler";

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
  providers: [PostService, {provide: ErrorHandler, useClass: AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
