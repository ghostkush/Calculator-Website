import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mulform',
  templateUrl: './mulform.component.html',
  styleUrls: ['./mulform.component.css']
})
export class MulformComponent implements OnInit {

  constructor() { }
  firstNumber!: string;
  secondNumber!: string;
  result!: number;
  ngOnInit(): void {
  }
  mul(){
    this.result=parseInt(this.firstNumber)*parseInt(this.secondNumber);
  }

}
