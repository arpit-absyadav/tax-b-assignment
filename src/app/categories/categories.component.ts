import { Component, OnInit } from '@angular/core';
import { MockService } from '../mock.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: any = [];
  constructor(private mockService: MockService) {}

  getCategories() {
    this.categories = this.mockService.getCategories();
  }
  ngOnInit(): void {
    this.getCategories();
  }
}
