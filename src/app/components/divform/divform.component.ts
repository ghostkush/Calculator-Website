import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divform',
  templateUrl: './divform.component.html',
  styleUrls: ['./divform.component.css']
})
export class DivformComponent implements OnInit {

  constructor() { }
  firstNumber!: string;
  secondNumber!: string;
  result!: number;
  ngOnInit(): void {
  }
  div(){
    this.result=parseInt(this.firstNumber)/parseInt(this.secondNumber);
  }

}
