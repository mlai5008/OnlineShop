import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryList } from './Core/Features/Category/category-list/category-list';

const routes: Routes = [
  {
    path: "admin/categories",
    component: CategoryList
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
