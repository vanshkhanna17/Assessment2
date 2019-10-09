import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../data.modal';

@Component({
  selector: 'app-edite',
  templateUrl: './edite.component.html',
  styleUrls: ['./edite.component.css']
})
export class EditeComponent implements OnInit {
  eml: Employee;
  empId: number;
  deg:string;
  marks:string;
  strm:string;
  clg:string;
  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.empId =parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.emp.forEach(element => {
      if(element.id==this.empId){
        this.eml=element;
      }
    });
    this.deg=this.eml.degr;
    this.marks=this.eml.marks;
    this.strm=this.eml.strm;
    this.clg=this.eml.clg;
  }
edit(){
  this.svc.emp.forEach(element => {
    if(element.id==this.empId){
      element.degr=this.deg;
      element.marks = this.marks;
      element.strm=this.strm;
      element.clg=this.clg;
    }
  });
    this.deg="";
    this.marks="";
    this.strm="";
    this.clg="";
}
}
