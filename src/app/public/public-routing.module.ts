import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { revalidate: 0 } }, // SSG
  { path: 'login', component: LoginComponent }, // SSR
  { path: 'product/:id', component: ProductComponent, data: { revalidate: 10 } },  // ISR
];
// const routes: Routes = [
//   { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
//   { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
// ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
