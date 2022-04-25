import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShopComponent } from './shop/shop.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { SliderHomeComponent } from './slider-home/slider-home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'slider-home', component: SliderHomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: NewsComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'single-product', component: SingleProductComponent },
 
  {path: '**', pathMatch: 'full', component: PageNotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
