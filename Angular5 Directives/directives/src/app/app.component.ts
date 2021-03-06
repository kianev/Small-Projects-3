import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  canSave = true;
  courses;
  viewMode = 'something';
  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  };

  @Input() isFavorite: boolean;
  @Output() change = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    // this.change.emit({newValue: this.isFavorite});
  }

/*  onAdd() {
    this.courses.push({id: 4, name: 'course4'})
  }

  onRemove(course) {
   let index = this.courses.indexOf(course);
   this.courses.splice(index, 1);
  }*/

 /* loadCourses() {
    this.courses = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'},
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }*/
}
