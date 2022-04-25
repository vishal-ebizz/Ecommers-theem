import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/service/product-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  applyCouponForm!: FormGroup;
  public submitted = false;
  public total: any
  public totalrows: any
  public cartvalue: any;
  shipping_vaue: number


  items: any

  constructor(private fb: FormBuilder,
    private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.applyCouponForm = this.fb.group({
      coupon: ['', Validators.required],
    })
    this.getItems();
    this.productService.getItems().subscribe((res: any) => {
      this.totalrows = res.length;
    })
    setTimeout(() => {
      this.countTotal();
    }, 1000);
  }

  countTotal() {
    if (this.totalrows == 0) {
      setTimeout(() => {
        let sub_total = document.getElementById('isTotal').innerHTML;
        this.shipping_vaue = 0;
        let grossTotal = Number(sub_total) + Number(this.shipping_vaue);
        let total = document.getElementById('gross-total') as any;
        total.innerHTML = grossTotal;
      }, 1000);
    }
    else {
      setTimeout(() => {
        let sub_total = document.getElementById('isTotal').innerHTML;
        this.shipping_vaue = 45;
        let grossTotal = Number(sub_total) + Number(this.shipping_vaue);
        let total = document.getElementById('gross-total') as any;
        total.innerHTML = grossTotal;
      }, 1000);

    }
  }

  isUpdateQuantity(event: any) {
    let isQuantity = event.target.value;
    let isPrice = event.target.parentElement.previousElementSibling.innerText;
    event.target.parentElement.nextElementSibling.innerHTML = isQuantity * isPrice;

    setTimeout(() => {

      let isEle = document.querySelectorAll('.product-total') as any;
      console.log(isEle);

      let isTotal: any = 0;
      isEle.forEach((element: any) => {
        isTotal = Number(isTotal) + Number(element.innerHTML);
      })

      if (document.getElementById('isTotal'))
        document.getElementById('isTotal').innerHTML = isTotal;
      let sub_total = document.getElementById('isTotal').innerHTML;
      let shipping_vaue: any = 45;
      let grossTotal = Number(sub_total) + Number(shipping_vaue);
      let total = document.getElementById('gross-total') as any;
      total.innerHTML = grossTotal;
    }, 1000);
  }

  onSubmit() {
    this.submitted = true
    if (this.applyCouponForm.invalid) {
      return
    }
    console.log(this.applyCouponForm.value);
  }

  deleteproduct(id: any) {
    Swal.fire({
      title: 'Are you sure want to delete this product',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.productService.deletetoCart(id).subscribe((res: any) => {
          this.ngOnInit();

          this.cartvalue = localStorage.getItem('items');
          let deletecart = this.cartvalue - 1
          console.log(deletecart);
          localStorage.setItem('items', deletecart + '');
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
      else if (result.dismiss == Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  //getproduct data form json-server
  getItems() {
    this.productService.getItems().subscribe((data: any) => {
      this.items = data
    })

    setTimeout(() => {
      let isEle = document.querySelectorAll('.product-total') as any;
      let isTotal: any = 0;
      isEle.forEach((element: any) => {
        isTotal = Number(isTotal) + Number(element.innerHTML);
      })
      if (document.getElementById('isTotal'))
        document.getElementById('isTotal').innerHTML = isTotal;
    }, 1000);
  }


  get f(): { [key: string]: AbstractControl } {
    return this.applyCouponForm.controls;
  }

}

