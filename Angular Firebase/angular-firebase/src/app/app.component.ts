import {Component, OnDestroy} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Subscription} from "rxjs/Subscription";
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   courses$: Observable<any>;
   course$;
   author$;
   courses: any[];
   subscription: Subscription;

   constructor(private db: AngularFireDatabase) {
     this.courses$ = db.list('courses').valueChanges();
     this.course$ = db.object('courses/1').valueChanges();
     this.author$ = db.object('authors/1').valueChanges();

/*
     this.subscription = db.list('courses').valueChanges()
       .subscribe(courses => {
         this.courses = courses;
         //console.log(courses);
       })*/
   }

   add(course: HTMLInputElement){
     const db = this.db.object('courses');
     db.set({name: 1, value: course.value});
     course.value = '';
   }

 /*  ngOnDestroy(){
      this.subscription.unsubscribe();
   }*/
}
