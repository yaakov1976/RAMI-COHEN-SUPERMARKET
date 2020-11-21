import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-adminster',
  templateUrl: './adminster.component.html',
  styleUrls: ['./adminster.component.css']
})
export class AdminsterComponent implements OnInit {

  constructor(private router:Router) { }
  goToClubMember(){
    this.router.navigate(['HOME/CLUB MEMBERS']);
  }
  goToInvoiceItem(){
    this.router.navigate(['HOME/postsInvoiceItem']);
  }
  goToORDERS(){
    this.router.navigate(['HOME/ORDERS']);
  }
  goToPRODUCTS(){
    this.router.navigate(['HOME/PRODUCTS']);
  }
  goToSELAS(){
    this.router.navigate(['HOME/SELAS']);
  }
  
  ngOnInit(): void {
  }

}
