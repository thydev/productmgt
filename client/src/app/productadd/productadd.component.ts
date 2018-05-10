import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {
  product: any;
  message = '';
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.product = {name: '', price: '', image_url: ''};
  }

  onSubmit() {
    const obsItem = this._productService.addNew(this.product);
    obsItem.subscribe(data => {
      console.log(data);
      if (data['message'] === 'Success') {
        this.product = {name: '', price: '', image_url: ''};
      }
      this.message = data['message'];
    });
  }

}
