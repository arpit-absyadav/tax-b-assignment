import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { CategoriesComponent } from './categories/categories.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TopNavComponent,
    CategoriesComponent,
    BottomBarComponent,
    ProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
