import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subform',
  templateUrl: './subform.component.html',
  styleUrls: ['./subform.component.css']
})
export class SubformComponent implements OnInit {

  constructor() { }
  firstNumber!: string;
  secondNumber!: string;
  result!: number;

  ngOnInit(): void {
  }
  sub(){
    this.result=parseInt(this.firstNumber)-parseInt(this.secondNumber);
  }

}
