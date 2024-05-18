import { CUSTOM_ELEMENTS_SCHEMA, Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductItemComponent } from './pages/product-page/product-item/product-item.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ContactComponent } from './pages/contact-page/contact.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductItemPageComponent } from './pages/product-item-page/product-item-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { FormsModule } from '@angular/forms';
import { DescriptionSlicePipe } from './pipes/description-slice.pipe';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SwiperDirective } from './directives/swiper.directive';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegistrationComponent } from './pages/authentication/registration/registration.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CreateProductFormComponent } from './pages/admin/create-product-form/create-product-form.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CreateCategoryFormComponent } from './pages/admin/create-category-form/create-category-form.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'home',
    component: LandingPageComponent,
  },
  {
    path: 'products',
    component: ProductPageComponent,
  },
  {
    path: 'product-item-page/:id',
    component: ProductItemPageComponent,
  },
  { path: 'category/:categoryId/products', component: ProductItemComponent },
  {
    path: 'cart-page',
    component: CartPageComponent,
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  { path: 'admin', component: AdminComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProductPageComponent,
    ProductItemComponent,
    CartPageComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    NotFoundComponent,
    ProductItemPageComponent,
    CheckoutPageComponent,
    DescriptionSlicePipe,
    AboutUsComponent,
    SwiperDirective,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    CreateProductFormComponent,
    CategoriesComponent,
    CreateCategoryFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgxDropzoneModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
