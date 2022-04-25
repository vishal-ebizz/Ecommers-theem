import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ShopComponent implements OnInit {


  isActive: string = 'all';
  count: number = Number(localStorage.getItem('items')) ? Number(localStorage.getItem('items')) : 0;
  public page: any = 1;
  public pageSize: any = 6;
  public id: any;
  public productsingledetail: any


  matchProduct: {  image: string; name: string; category: string; price: number; }[] = [];

  product = [
    {
      
      "image": "assets/img/products/product-img-1.jpg",
      "name": "Strawberry",
      "category": "strawberry",
      "quantity": 1,
      "price": 85
    },

    {
      
      "image": "assets/img/products/product-img-2.jpg",
      "name": "Berry",
      "category": "berry",
      "quantity": 1,
      "price": 75
    },
    {
    
      "image": "assets/img/products/product-img-3.jpg",
      "name": "Lemon",
      "category": "lemon",
      "quantity": 1,
      "price": 65
    },
    {
   
      "image": "assets/img/products/product-img-6.jpg",
      "name": "Strawberry",
      "category": "strawberry",
      "quantity": 1,
      "price": 80
    },
    {

      "image": "assets/img/products/product-img-2.jpg",
      "name": "Berry",
      "category": "berry",
      "quantity": 1,
      "price": 95
    },
    {
  
      "image": "assets/img/products/product-img-3.jpg",
      "name": "Lemon",
      "category": "lemon",
      "quantity": 1,
      "price": 75
    },
    {

      "image": "assets/img/products/product-img-2.jpg",
      "name": "Berry",
      "category": "berry",
      "quantity": 1,
      "price": 55
    },
    {
      
      "image": "assets/img/products/product-img-3.jpg",
      "name": "Lemon",
      "category": "lemon",
      "quantity": 1,
      "price": 115
    },
    {
     
      "image": "assets/img/products/product-img-2.jpg",
      "name": "Berry",
      "category": "berry",
      "quantity": 1,
      "price": 105
    },
    {
  
      "image": "assets/img/products/product-img-3.jpg",
      "name": "Lemon",
      "category": "lemon",
      "quantity": 1,
      "price": 65
    },
    {
     
      "image": "assets/img/products/product-img-6.jpg",
      "name": "Strawberry",
      "category": "strawberry",
      "quantity": 1,
      "price": 80
    },
    {
     
      "image": "assets/img/products/product-img-2.jpg",
      "name": "Berry",
      "category": "berry",
      "quantity": 1,
      "price": 95
    }
  ]

  constructor(private fb: FormBuilder,
    private productservice: ProductServiceService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {

    this.isActive = 'all';
    this.matchProduct = this.product;
    // this.getproductdetail()
  }

  //add data to cart (json-server) 
  addtCart(data: any) {

    //add product to json-server
      this.productservice.addToCart(data).subscribe((data) => {
      this.count = this.count + 1;
      this.productservice.cartCount.next(this.count);
      localStorage.setItem('items', this.count + '');
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Product added to cart',
        showConfirmButton: false,
        timer: 1500
      })
    });
  }

  filterData(ele: string) {
    this.isActive = ele;
    if (ele == 'all') {
      this.matchProduct = this.product;
    } else {
      this.matchProduct = this.product.filter((el: any) => {
        return el.category == ele
      });
    }
  }

  // open(content: any, id: any) {
  //   debugger
  //   this.modalService.open(content, { size: 'xl' });
  //   this.productsingledetail = this.product.find(i => i.id === id);
  //   if (typeof this.productsingledetail === 'undefined') {
  //     return null;
  //   }
  //   return this.productsingledetail;
  // }
}

