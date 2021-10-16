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

  changes : number = 1236849.04;

  seleccion(){
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

  bit_a_mx(){
    let CurValue : number = parseFloat((<HTMLInputElement>document.getElementById("bit_input")).value);
    const app = document.getElementById("text_bit");
    const p = document.createElement("p");
    var bitcoin : number = CurValue * this.changes;
    p.textContent = CurValue +" Bitcoins son " + bitcoin + " Pesos mexicanos";
    app?.appendChild(p);
  }

  mx_a_bit(){
    let CurValue : number = parseFloat((<HTMLInputElement>document.getElementById("mx_input")).value);
    const app = document.getElementById("text_mx");
    const p = document.createElement("p");
    var bitcoin : number = CurValue / this.changes;
    p.textContent = CurValue +" Pesos mexicanos son " + bitcoin + " Bitcoins";
    app?.appendChild(p);
  }
}
