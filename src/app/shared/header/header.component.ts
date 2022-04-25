import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/service/product-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalrows: any


  totalCart: number;
  constructor(private productService: ProductServiceService) {
    this.productService.cartCount.subscribe(res => {
      this.totalCart = res;
    })

  }

  ngOnInit(): void {

  }

  get cartValue() {
    return localStorage.getItem('items');
  }

  windowScroll() {
    const navbar = document.getElementById('sticker-sticky-wrapper');
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
      navbar.classList.add('is-sticky')
      document.getElementById("sticker").style.backgroundColor = "#051922";
      document.getElementById("sticker").style.position = "fixed";
      document.getElementById("sticker").style.top = "0px"
      document.getElementById("sticker").style.zIndex = "inherit";

    } else {
      navbar.classList.remove('is-sticky');
      document.getElementById("sticker").style.backgroundColor = "transparent";
    }
  }

  toggle(event: any) {
    let val = document.getElementsByClassName('search-area')[0] as any;
    val.classList.toggle('search-active');
  }

  removeToggle() {
    let val = document.getElementsByClassName('search-area')[0] as any;
    val.classList.remove('search-active')
  }

}
