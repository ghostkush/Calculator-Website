import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {

  constructor() { }
  firstNumber!: string;
  secondNumber!: string;
  result!: number;
  ngOnInit(): void {}

  add(){
    this.result=parseInt(this.firstNumber)+parseInt(this.secondNumber);
  }

}
