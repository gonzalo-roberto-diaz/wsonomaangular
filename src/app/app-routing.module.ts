import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductContainerComponent} from './product/product-container.component';
import {ProductModelResolver} from './services/product-model-resolver.service';
import {CoverComponent} from './cover/cover.component';


const routes: Routes = [
  { path: 'organic', component: CoverComponent },
  { path: 'fair-trade', component: CoverComponent },
  { path: '', component: CoverComponent },
  {
    path: 'product/:id', component: ProductContainerComponent, resolve: { product: ProductModelResolver}},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,  {scrollPositionRestoration: 'enabled'}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
