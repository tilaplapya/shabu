import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SerbisyoService } from '../serbisyo.service';
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {



constructor(private dataService: SerbisyoService){
  }

  
full_name: string = "Hatdog";
program: string = "heil hitler o/";
isVisible: boolean = false;
newMovie: string ="";
movieArray = [
  "Avengers"
 ]
 employees: any = [];


toggle(){
  this.isVisible = !this.isVisible;
}
changeName(){
  this.full_name = "akjsdgahs";
}

addMovie(){
  this.movieArray.push(this.newMovie)
}
getEmployees(){
  this.dataService.send().subscribe((result: any)=>{
    this.employees = result.payload;
    console.log(result)
  },
  er=>{
    console.log(er)
  })
}
}

