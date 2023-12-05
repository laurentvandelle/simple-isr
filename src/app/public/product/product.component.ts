import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  date: Date = new Date();

  constructor() {}

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   console.log(this.id);
    // }
  }
}
