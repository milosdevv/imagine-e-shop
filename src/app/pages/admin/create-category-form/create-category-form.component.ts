import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-category-form',
  templateUrl: './create-category-form.component.html',
  styleUrl: './create-category-form.component.scss',
})
export class CreateCategoryFormComponent {
  @ViewChild('categoryForm') categoryForm: NgForm;
  onSubmit() {
    console.log('hello');
  }
}
