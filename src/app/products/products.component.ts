import { Component, OnInit } from '@angular/core';
import { MockService } from './../mock.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private mockService: MockService) {}
  selectedValue: number;
  recipes: any = [];
  getRecipes() {
    this.recipes = this.mockService.getRecipes();
  }

  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }
  ngOnInit(): void {
    this.getRecipes();
  }
}
