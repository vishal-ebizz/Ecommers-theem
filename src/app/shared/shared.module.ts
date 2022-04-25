import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoSliderComponent } from './logo-slider/logo-slider.component';
import { SwiperModule } from 'swiper/angular';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { ProductServiceService } from '../service/product-service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoSliderComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SwiperModule,
    FormsModule
  ],
  exports :[
    HeaderComponent,
    FooterComponent,
    LogoSliderComponent
    
  ],
  providers:[
    ProductServiceService
  ]
})
export class SharedModule { }
