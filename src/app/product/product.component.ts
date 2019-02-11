import {Component, OnInit, Inject} from '@angular/core';
import {ApiService} from "../api.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

/**
 * @title Dialog
 */
@Component({
  selector: 'purchase-dialog',
  templateUrl: 'purchase-dialog.html',
})
export class PurchaseDialogExample {

  constructor(
    public dialogRef: MatDialogRef<PurchaseDialogExample>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any;
  count: number = 0;

  constructor(private api: ApiService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.api.getProducts().subscribe(res => {
      console.log(res);
      this.products = res;
    }, err => {
      console.log(err);
    });
  }

  openDialog(product): void {
    const dialogRef = this.dialog.open(PurchaseDialogExample, {
      width: '350px',
      data: {count: 0}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed! ', result, product);
      if(result) {
        // delete product._id;
        product.stock = product.stock >= result ? product.stock - result : 0;
        this.api.updateProduct(product._id, product).subscribe(res => {
          console.log(res);
          this.getAllProducts();
        }, err => {
          console.log(err);
        });
        this.count = result;
      }
    });
  }

}
