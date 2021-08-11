import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor() { }

  fillArrExceptFirstAndLAst(a: number[], quantity: number): number[]{
    a.length = quantity;
    for (let i = 0; i < a.length; i++) {
      if (i === 0) {
        a[i] = 1;
      }else if (i === a.length - 1){
        a[i] = 1;
        break;
      }else {
        a[i] = 0;
      }
    }
    console.log(a);
    return a;
  }

  fillArrInOrder(a: number[], quantity: number): number[]{
    a.length = quantity;
    for (let i = 0; i < a.length; i++) {
      if (i % 2 !== 0) {
        a[i] = 1;
      }else {
        a[i] = 0;
      }
    }
    console.log(a);
    return a;
  }

  fillArrWithNechetniiNumbers(a: number[], quantity: number): number[]{
    a.length = quantity;
    for (let i = 0; i < a.length; i++) {
      let number = 1;
      a[0] = number;
      if( a[0] !== 0) {
        a[i] === number + 2;
      }
    }
    console.log(a);
    return a;
  }
}
