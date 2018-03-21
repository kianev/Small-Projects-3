import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo) {
    return this.http.post('...', todo).map(r => r);
  }

  getTodos() {
    return this.http.get('...').map(r => r);
  }

  getTodosPromise() {
    return this.http.get('...').map(r => r).toPromise();
  }

  delete(id) {
    return this.http.delete('...').map(r => r);
  }
}
