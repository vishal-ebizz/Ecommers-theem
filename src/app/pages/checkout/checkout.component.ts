import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { event } from 'jquery';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { City } from 'src/app/_helper/city';
import { State } from 'src/app/_helper/state';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public checkoutvalue: any;
  public shipping_charge: number

  shippingForm!: FormGroup;
  billingForm!: FormGroup;
  carddetailForm!: FormGroup;

  billingSubmitted = false;
  shippingSubmitted = false;
  cardSubmitted = false;

  total_strawberry: number = 0;
  total_berry: number = 0;
  total_lemon: number = 0;
  selectedCountry: State = new State(2, 'Gujarat');
  city: City[];
  states: State[];

  constructor(private productService: ProductServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getcheckoutvalue()
    setTimeout(() => {
      this.subtotal();
    }, 100);

    //shipping address form
    this.shippingForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.minLength(6)]],
    });

    //billing address fomr
    this.billingForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      billaddress: ['', Validators.required],
    });

    this.carddetailForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      cardnumber: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      cvcnumber: []
    })
  }

  subtotal() {
    let strawberry = document.getElementById("item-strawberry").innerHTML;
    let berry = document.getElementById("item-berry").innerHTML;
    let lemon = document.getElementById("item-lemon").innerHTML;
    let subtotal: any = Number(strawberry) + Number(berry) + Number(lemon);
    
    if (subtotal == "") {
      document.getElementById("sub-total").innerHTML = subtotal;
      this.shipping_charge = 0;
      let granTotal: any = Number(subtotal) + Number(this.shipping_charge)
      document.getElementById("grand-total").innerHTML = granTotal;
    }
    else {
      document.getElementById("sub-total").innerHTML = subtotal;
      this.shipping_charge = 45
      let granTotal: any = Number(subtotal) + Number(this.shipping_charge)
      document.getElementById("grand-total").innerHTML = granTotal;
    }
  }

  //calculation of cart categorywise total
  getcheckoutvalue() {
    this.productService.getItems().subscribe((res: any) => {
      this.checkoutvalue = res;
      res.forEach((ele: any) => {
        if (ele.category == "strawberry") {
          this.total_strawberry += Number(ele.price);
          document.getElementById("item-strawberry").innerHTML = this.total_strawberry + '';
        }
        if (ele.category == "berry") {
          this.total_berry += Number(ele.price);
          document.getElementById("item-berry").innerHTML = this.total_berry + '';
        }
        if (ele.category == "lemon") {
          this.total_lemon += Number(ele.price);
          document.getElementById("item-lemon").innerHTML = this.total_lemon + '';
        }
      })
    })
  }

  //submit shipping address form
  public submitshippingAddress() {
    console.log(this.shippingForm.value);
    this.shippingSubmitted = true
  }

  //billing address form
  submitBillingAddress() {
    console.log(this.billingForm.value);
    this.billingSubmitted = true;
}

  cardDetailSubmit() {
    console.log(this.carddetailForm.value);
    this.cardSubmitted = true;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.billingForm.controls;
  }
  get SAf(): { [key: string]: AbstractControl } {
    return this.shippingForm.controls;
  }
  get CDf(): { [key: string]: AbstractControl } {
    return this.carddetailForm.controls;
  }
}
