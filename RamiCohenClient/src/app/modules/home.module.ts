import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../components/home/home.component';
import { PostInvoiceItemComponent } from '../components/invoiceItem/post-invoice-item/post-invoice-item.component';
import { PostOrdersComponent } from '../components/orders/post-orders/post-orders.component';
import { AddOrdersComponent } from '../components/orders/add-orders/add-orders.component';
import { DeleteOrdersComponent } from '../components/orders/delete-orders/delete-orders.component';
import { EditOrdersComponent } from '../components/orders/edit-orders/edit-orders.component';

import { AddInvoiceItemComponent } from '../components/invoiceItem/add-invoice-item/add-invoice-item.component';
import { DeleteInvoiceItemComponent } from '../components/invoiceItem/delete-invoice-item/delete-invoice-item.component';
import { EditInvoiceItemComponent } from '../components/invoiceItem/edit-invoice-item/edit-invoice-item.component';
import { ProductsPostComponent } from '../components/products/products-post/products-post.component';
import { AddProductsComponent } from '../components/products/add-products/add-products.component';
import { DeleteProductsComponent } from '../components/products/delete-products/delete-products.component';
import { EditProductsComponent } from '../components/products/edit-products/edit-products.component';
import { ProductsChildComponent } from '../components/products/products-child/products-child.component';

import { SalesListComponent } from '../components/sales/sales-list/sales-list.component';
import { SelasChildComponent } from '../components/sales/selas-child/selas-child.component';
import { SelasDetailsComponent } from '../components/sales/selas-details/selas-details.component';
import { JoinClubMemberComponent } from '../components/sales/join-club-member/join-club-member.component';
import { AdminsterComponent } from '../components/adminster/adminster.component';
import { SupportComponent } from '../components/support/support.component';
import { AboutComponent } from '../components/about/about.component';
import { FeaturesComponent } from '../components/features/features.component';
import { ResourcesComponent } from '../components/resources/resources.component';

@NgModule({
  declarations: [ HomeComponent,
    PostInvoiceItemComponent,AddInvoiceItemComponent,DeleteInvoiceItemComponent,EditInvoiceItemComponent,
    PostOrdersComponent,AddOrdersComponent,DeleteOrdersComponent,EditOrdersComponent,
    ProductsPostComponent,AddProductsComponent,DeleteProductsComponent,EditProductsComponent,
    ProductsChildComponent, SalesListComponent ,SelasChildComponent, SelasDetailsComponent,
    JoinClubMemberComponent, AdminsterComponent, SupportComponent, AboutComponent, FeaturesComponent,
    ResourcesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
