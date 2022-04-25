import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { NgxSpinnerService } from "ngx-spinner";
import { ProductServiceService } from 'src/app/service/product-service.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
SwiperCore.use([Autoplay]);
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.css']
})
export class SliderHomeComponent implements OnInit {
  public productsingledetail: any;
  public singlenews: any
  count: number = Number(localStorage.getItem('items')) ? Number(localStorage.getItem('items')) : 0;

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
    }
  ]

  news = [
    {
      "id": 1,
      "title": "strawerry",
      "name": "You will vainly look for fruit on it in autumn",
      "quantity": "27 December, 2019",
      "price": "latest-news-bg news-bg-1"
    },

    {
      "id": 2,
      "title": "tomato",
      "name": "A man's worth has its season, like tomato.",
      "quan": "Good thoughts bear good fresh juicy fruit",
      "quanttity": "21 April, 2022",
      "price": "latest-news-bg news-bg-2"
    },
    {
      "id": 3,
      "title": "berry juice",
      "nameity": "16  August, 2017",
      "price": "latest-news-bg news-bg-3"
    }
  ]
  config = {
    spaceBetween: 0,
    loop: true,
    speed: 2500,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  }
  @ViewChild('swiper', { static: false }) swiper?: SliderHomeComponent;

  constructor(private spinner: NgxSpinnerService, private productservice: ProductServiceService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;

  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }
  slideNext() {

  }
  slidePrev() {

  }
  addtCart(data: any) {
    this.count = this.count + 1;
    this.productservice.cartCount.next(this.count);

    localStorage.setItem('items', this.count + '');

    //add product to json-server
    this.productservice.addToCart(data).subscribe((data) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Product added to cart',
        showConfirmButton: false,
        timer: 1500
      })
    });
  }

  //for single product get data by ID
  // open(content: any, id: any) {
  //   debugger
  //   this.modalService.open(content, { size: 'xl' });
  //   this.productsingledetail = this.product.find(i => i.id === id);
  //   if (typeof this.productsingledetail === 'undefined') {
  //     return null;
  //   }
  //   return this.productsingledetail;
  // }
  //for sinle news get data from ID
  openScrollableContent(longContent: any, id: any) {
    debugger
    this.modalService.open(longContent, { scrollable: true });
    this.singlenews = this.news.find(i => i.id === id);
    if (typeof this.singlenews === 'undefined') {
      return null;
    }
    return this.singlenews;
  }

}
