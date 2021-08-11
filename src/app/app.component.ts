import { Component, OnInit } from '@angular/core';
import {ExampleService} from './services/example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  arr: number[] = [];
  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {
    this.exampleService.fillArrWithNechetniiNumbers(this.arr, 10);
  }
}
