import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myFunc(){
    console.log("funciona");
    var e = (document.getElementById("men")) as HTMLSelectElement;
    var sel = e.selectedIndex;
    var opt = e.options[sel];
    var CurValue = (<HTMLSelectElement><unknown>opt).value;
    var op = <HTMLFormElement>document.getElementById('op');
    var bit = <HTMLFormElement>document.getElementById('bit');
    var mx = <HTMLFormElement>document.getElementById('mx');
    if(CurValue === "1"){
      op.style.display='block';
      bit.style.display='none';
      mx.style.display='none';
    }
    if(CurValue === "2"){
      op.style.display='none';
      bit.style.display='block';
      mx.style.display='none';
    }
    if(CurValue === "3"){
      op.style.display='none';
      bit.style.display='none';
      mx.style.display='block';
    }
  }
}
