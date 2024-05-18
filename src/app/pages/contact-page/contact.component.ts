import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm: NgForm;
  onFormSubmitted() {
    this.contactForm.form.markAllAsTouched();
  }
}
