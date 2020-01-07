import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  firstName: string;
  id: number;
  listOfEmp: employee[] = new Array();
  ngOnInit(){
    this.loadData();
  }
  loadData(){
    let emp1: employee = new employee("Sunila",1001);
    let emp2: employee = new employee("Karthika",1002);
    this.listOfEmp.push(emp1,emp2);
    //this.listOfEmp.push
  }
  printdata(){
    alert("Big one")
  }
  DataCame(data){
    alert(data);
  }
}
class employee{
  name:string;
  id:number;
  constructor(name:string,id:number){
    this.name = name;
    this.id = id;
  }
}