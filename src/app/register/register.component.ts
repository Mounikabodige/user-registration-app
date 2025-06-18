import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void{
    if(this.registrationForm.valid){
      alert('Success');
      console.log('Form submitted:', this.registrationForm.value);
    } else{
      console.log('Form is invalid');
    }

    this.registrationForm.reset();
  }

}
