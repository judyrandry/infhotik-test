import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  products: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProducts().subscribe(res => {
      console.log(res);
      this.products = res;
    }, err => {
      console.log(err);
    });
  }

}
