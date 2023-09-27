import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { Router } from '@angular/router';
import { TodosComponent } from './todos/todos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GallaryComponent,
    ContactComponent,
    ProductsComponent,
    UsersComponent,
    LoginComponent,
    StudentsComponent,
    UserComponent,
    TodosComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
