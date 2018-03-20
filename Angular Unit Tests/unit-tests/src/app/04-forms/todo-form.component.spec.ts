import { TodoFormComponent } from './todo-form.component';
import { FormBuilder } from "@angular/forms";

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should create a form with two controls', () => {
    expect(component.form.contains('name')).toBe(true);
    expect(component.form.contains('email')).toBe(true);
  });

  it('should make name control required', () => {
    let control = component.form.get('name');

    control.setValue('');

    expect(control.valid).toBe(false);
  });
});
