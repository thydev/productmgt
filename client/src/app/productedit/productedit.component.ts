import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit {
  product: any;
  message = '';
  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute
  ) {
    this.product = {name: '', price: '', image_url: ''};
  }

  ngOnInit() {
    console.log('init');
    this._route.params.subscribe((params: Params) => {
      this.getItem(params['id']);
    });
  }

  getItem(id: string) {
    const obsItem = this._productService.getOne(id);
      obsItem.subscribe(data => {
        if (data['message'] === 'Success') {
          this.product = data['data'][0];
        } else {
          console.log(data);
        }
      });
  }

  onSubmit() {
    const obsItem = this._productService.update(this.product._id, this.product);
    obsItem.subscribe(data => {
      console.log(data);
      this.message = data['message'];
      // this.author = {name: ''};
    });
  }

}
