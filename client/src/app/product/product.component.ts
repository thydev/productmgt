import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    const obsItem = this._productService.getAll();
    obsItem.subscribe(data => {
      console.log(data);
      this.products = data['data'];
    });
  }

  onDelete(id: string) {
    console.log(id);
    const obsItem = this._productService.delete(id);
    obsItem.subscribe(data => {
      console.log(data);
      this.getAll();
    });
  }
}
