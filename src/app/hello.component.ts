import { Component, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>hi this is {{name}} and id is : {{id}}</h1> <a href="#" (click)="passData()">Click</a>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  @Input() id:number;
  @Output() sendingData = new EventEmitter();
  passData(){
    this.sendingData.emit("Hello this from child");
  }
}
