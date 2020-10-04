import { Injectable } from '@angular/core';
import data from '../assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  constructor() {}

  getCategories() {
    return data.categories;
  }
  getRecipes() {
    return data.recipes;
  }
}
