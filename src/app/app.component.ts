import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name:string ="";
  address:string ="";
  phone:string ="";
  age:number = 0;


  clients:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  save() {
      this.clients.push(
        {
        name: this.name,
        phone: this.phone,
        age: this.age
      }
    );
    this.cancel()
    console.log(this.clients);
  }
  
  cancel() {
    this.name = "";
    this.address = "";
    this.phone = "";
    this.age = 0;
  }

  delete(i:number){
    this.clients.splice(i, 1)
  }
}
