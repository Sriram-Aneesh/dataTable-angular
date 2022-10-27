import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public headers = ["ID", "Name", "Age", "Gender", "Country"];
  public rows:any = [
    {
      "ID" : "1",
      "Name" : "Rahul",
      "Age" : "21",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "2",
      "Name" : "Ajay",
      "Age" : "25",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "3",
      "Name" : "Arya",
      "Age" : "22",
      "Gender" : "Female",
      "Country" : "India"
    },
    {
      "ID" : "4",
      "Name" : "Ithu",
      "Age" : "22",
      "Gender" : "Female",
      "Country" : "India"
    },
    {
      "ID" : "5",
      "Name" : "Nanda",
      "Age" : "22",
      "Gender" : "Female",
      "Country" : "India"
    },
    {
      "ID" : "6",
      "Name" : "Azhar",
      "Age" : "22",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "7",
      "Name" : "Poosan",
      "Age" : "22",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "8",
      "Name" : "Fawax Ikka",
      "Age" : "22",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "9",
      "Name" : "Aswin",
      "Age" : "22",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "10",
      "Name" : "Mara",
      "Age" : "22",
      "Gender" : "Male",
      "Country" : "India"
    }
  ]

  
  constructor() { }

  ngOnInit(): void {
  }
  public Edit(data:string,index:number,column:any){
    let columnToChange:any = column;
    console.log(columnToChange)
    if(columnToChange=="ID")
    {
      alert("Id cannot be changed")

    }
    else if(columnToChange=="Name")
    {
      this.rows[index-1].Name = data;
    }
    else if(columnToChange=="Age")
    {
      this.rows[index-1].Age = data;
    }
    else if(columnToChange=="Gender")
    {
      this.rows[index-1].Gender = data;
    }
    else
    {
      this.rows[index-1].Country = data;
    }  
  }

  public showEdit(Id:any,column:any){
    let index:any;
    if(column=="ID")
    {
      alert("Id cannot be edited")
    }
    else if(column=="Name")
    {
      index=1;
    }
    else if(column=="Age")
    {
      index=2;
    }
    else if(column=="Gender")
    {
      index=3;
    }
    else{
      index=4;
    }
    console.log(Id)
    let wave = 'wave'+Id;
    console.log(wave)
    let p:any  = document.getElementsByClassName(wave)  ;
    console.log(p)
    let i:HTMLElement
    i=p[index]
    i.style.display="block"
  }


  public hideEdit(Id:any){
    console.log(Id)
    let wave = 'wave'+Id;
    console.log(wave)
    let p:any  = document.getElementsByClassName(wave)  ;
    console.log(p)
    let i:HTMLElement
    for(i of p)
    {
      i.style.display = 'none'
    }
  }
 }
    


