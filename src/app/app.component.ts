import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ch0401';

  shouldShow =false ;

  score = 70;

  color:string;

  fontSize:string;

  isBordered = true;

  classObj={
    bordered:this.isBordered,
    blue:false,
    round:true
  }

  cities = ['杭州','广州','上海','南京'];

  people = [];

  peopleByCity = [];

  constructor(){
    this.people = [
      { name: 'Anderson', age: 35, city: 'Sao Paulo' },
      { name: 'John', age: 12, city: 'Miami' },
      { name: 'Peter', age: 22, city: 'New York' }
    ];

    this.peopleByCity=[
      {
        people: [
          { name: 'John', age: 12 },
          { name: 'Angel', age: 22 }
        ]
      },
      {
        city: 'Sao Paulo',
        people: [
          { name: 'Anderson', age: 35 },
          { name: 'Felipe', age: 36 }
        ]
      }
    ];
  }


  onToggle(){
    this.shouldShow = !this.shouldShow;
    return false;
  }

  giade(){
    return Math.floor( this.score/10);
  }

  onInput(evt: Event){
      const inputEle = <HTMLInputElement>evt.target;
      this.score =Number(inputEle.value);
  }

  apply(color:string,fontSize:string){
      this.color = color;
      this.fontSize = fontSize;
  }

  toggleBordered(){
      this.isBordered = !this.isBordered;
  }
}
