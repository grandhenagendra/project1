import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { UserComponent } from './user/user.component';
import { TodosComponent } from './todos/todos.component';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gallary', component: GallaryComponent },
  { path: 'users', component: UsersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'user', component: UserComponent },
  {path:'todos', component:TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
