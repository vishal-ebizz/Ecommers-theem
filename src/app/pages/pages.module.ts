import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { SwiperModule } from 'swiper/angular';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { NewsComponent } from './news/news.component';
import { SingleNewsComponent } from './single-news/single-news.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SliderHomeComponent } from './slider-home/slider-home.component';
import { ProductServiceService } from '../service/product-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AboutComponent,
    ShopComponent,
    NewsComponent,
    SingleNewsComponent,
    ContactComponent,
    CheckoutComponent,
    CartComponent,
    SingleProductComponent,
    HomeComponent,
    SliderHomeComponent,
  
  ],

  imports: [
    CommonModule,
    PagesRoutingModule,
    SwiperModule,
    SharedModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],

  providers: [
    ProductServiceService
  ]

})
export class PagesModule { }
