import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { MoreComponent } from './more/more.component';
import { HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './product/product.component'
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserComponent,
    HomeComponent,
    GalleryComponent,
    ContactusComponent,
    LoginComponent,
    MoreComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
