import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.page.html',
  styleUrls: ['./clicker.page.scss'],
})
export class ClickerPage implements OnInit {

  counter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  increase(){
    this.counter+=1;
  }

  decrease(){
    this.counter-=1;
  }

  reset(){
    this.counter=0;
  }

}
