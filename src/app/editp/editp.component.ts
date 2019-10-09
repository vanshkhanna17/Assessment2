import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Employee } from '../data.modal';

@Component({
  selector: 'app-editp',
  templateUrl: './editp.component.html',
  styleUrls: ['./editp.component.css']
})
export class EditpComponent implements OnInit {
  eml: Employee;
  empId: number;
  name: string;
  dob: string;
  addr: string;
  phone: string;
  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.empId =parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.emp.forEach(element => {
      if(element.id==this.empId){
        this.eml=element;
      }
    });
    this.name=this.eml.name;
    this.dob=this.eml.dob;
    this.addr=this.eml.addr;
    this.phone=this.eml.phone;
  }
  edit(){
    this.svc.emp.forEach(element => {
      if(element.id==this.empId){
        element.name=this.name;
        element.dob = this.dob;
        element.addr=this.addr;
        element.phone=this.phone;
      }
    });
      this.name="";
      this.dob="";
      this.addr="";
      this.phone="";
  }
}