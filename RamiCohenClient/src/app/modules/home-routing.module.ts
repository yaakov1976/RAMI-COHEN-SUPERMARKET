import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '..//components/home/home.component';

import { PostInvoiceItemComponent } from '../components/invoiceItem/post-invoice-item/post-invoice-item.component';
import { AddInvoiceItemComponent } from '../components/invoiceItem/add-invoice-item/add-invoice-item.component';
import { DeleteInvoiceItemComponent } from '../components/invoiceItem/delete-invoice-item/delete-invoice-item.component';
import { EditInvoiceItemComponent } from '../components/invoiceItem/edit-invoice-item/edit-invoice-item.component';

import { PostOrdersComponent } from '../components/orders/post-orders/post-orders.component';
import { AddOrdersComponent } from '../components/orders/add-orders/add-orders.component';
import { DeleteOrdersComponent } from '../components/orders/delete-orders/delete-orders.component';
import { EditOrdersComponent } from '../components/orders/edit-orders/edit-orders.component';

import { ProductsPostComponent } from '../components/products/products-post/products-post.component';
import { AddProductsComponent } from '../components/products/add-products/add-products.component';
import { DeleteProductsComponent } from '../components/products/delete-products/delete-products.component';
import { EditProductsComponent } from '../components/products/edit-products/edit-products.component';

import { SalesListComponent } from '../components/sales/sales-list/sales-list.component';
import { SelasDetailsComponent } from '../components/sales/selas-details/selas-details.component';
import { JoinClubMemberComponent } from '../components/sales/join-club-member/join-club-member.component';
import { AdminsterComponent } from '../components/adminster/adminster.component';
import { SupportComponent } from '../components/support/support.component';
import { AboutComponent } from '../components/about/about.component';
import { FeaturesComponent } from '../components/features/features.component';
import { ResourcesComponent } from '../components/resources/resources.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'HOME',component:HomeComponent},
{path: 'HOME/CLUB MEMBERS',loadChildren: () => import('./user.module').then(m => m.UserModule)},

{path:'HOME/postsInvoiceItem',component: PostInvoiceItemComponent},
{path:'/postsInvoiceItem',component: PostInvoiceItemComponent},
{path:'HOME/postsInvoiceItem/addInvoiceItem',component: AddInvoiceItemComponent},
{path:'HOME/postsInvoiceItem/deleteInvoiceItem',component: DeleteInvoiceItemComponent},
{path:'HOME/postsInvoiceItem/editInvoiceItem',component: EditInvoiceItemComponent},

{path:'HOME/ORDERS',component:PostOrdersComponent},
{path:'HOME/ORDERS/addOrders',component:AddOrdersComponent},
{path:'HOME/ORDERS/DeleteOrders',component:DeleteOrdersComponent},
{path:'HOME/ORDERS/editOrders',component:EditOrdersComponent},

{path:'HOME/PRODUCTS',component:ProductsPostComponent},
{path:'/PRODUCTS',component:ProductsPostComponent},
{path:'HOME/PRODUCTS/AddProducts',component:AddProductsComponent},
{path:'HOME/PRODUCTS/DeleteProducts',component:DeleteProductsComponent},
{path:'HOME/PRODUCTS/EditProducts',component:EditProductsComponent},

{path:'SELAS',component:SalesListComponent},
{path:'selasDetails',component:SelasDetailsComponent},
{path:'JoinClubMember',component:JoinClubMemberComponent},
{path:'Adminster',component:AdminsterComponent},
{path:'HOME/SELAS/HOME/Adminster',component:AdminsterComponent},
{path:'HOME/Adminster',component:AdminsterComponent},
{path:'Support',component:SupportComponent},
{path:'About',component:AboutComponent},
{path:'Features',component:FeaturesComponent},
{path:'Resources',component:ResourcesComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
