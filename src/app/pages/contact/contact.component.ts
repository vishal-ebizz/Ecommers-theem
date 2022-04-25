import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  public submitted = false;
  showForm = true;
  showForm2 = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
      mobile: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      subject: ['', Validators.required],
      address: ['', Validators.required]

    })
  }
  public contactform() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    {
      this.showForm = false;
      Swal.fire(
        'Thank you !',
        'We will replied Soon !!',
        'success'
      )
    }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

}
