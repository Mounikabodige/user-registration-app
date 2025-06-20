import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormStatusComponent } from '../form-status/form-status.component';

@Component({
  standalone:true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormStatusComponent]
})
export class RegisterComponent {
  submitted = false;

  registrationForm = this.fb.group({
    name: ['', Validators.required],
    email: ['',[Validators.required, Validators.email]],
    password: ['', [Validators.minLength(6), Validators.required]]
  })
  
  constructor(private fb: FormBuilder) { }

  onSubmit() {
    this.submitted = true;

    if(this.registrationForm.valid){
      console.log('Fotm Submitted', this.registrationForm.value);
    }
  }
}
