import { Component, OnInit } from '@angular/core';
import { Employee } from '../data.modal';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name: string="";
  dob: string="";
  addr: string="";
  phone: string="";
  deg:string="";
  marks:string="";
  strm:string="";
  clg:string=""; 
  noerror:boolean = false;
  msg1:string="";
  msg2:string="";
  msg3:string="";
  msg4:string="";
  msg5:string="";
  msg6:string="";
  msg7:string="";
  msg8:string="";
  c:number;
  constructor(private svc : DataService) { }

  ngOnInit() {
  }
  
  add(){
    this.validate();
    if(this.noerror){
      this.svc.em = new Employee(this.name,this.dob,this.addr,this.phone,this.deg,this.marks,this.strm,this.clg)
      this.svc.emp.push(this.svc.em);
      this.svc.em.id = this.svc.emp.length;
      this.reset();
    }
  }
  validate(){
    this.c=0;
    if(this.name==""){
      this.noerror=false;
      this.msg1="This field is required";
    }
    else{
      this.msg1 = "";
      this.c++;
    }

    if(this.dob==""){
      this.noerror=false;
      this.msg2="This field is required";
    }
    else{
      this.msg2 = "";
      this.c++;
    }

    if(this.addr==""){
      this.noerror=false;
      this.msg3="This field is required";
    }
    else{
      this.msg3 = "";
      this.c++;
    }

    if(this.phone==""){
      this.noerror=false;
      this.msg4="This field is required";
    }
    else if(isNaN(parseInt(this.phone))){
      this.noerror=false;
      this.msg4="This field can only have integers";
    }
    else{
      this.msg4 = "";
      this.c++;
    }

    if(this.deg==""){
      this.noerror=false;
      this.msg5="This field is required";
    }
    else{
      this.msg5 = "";
      this.c++;
    }

    if(this.marks==""){
      this.noerror=false;
      this.msg6="This field is required";
    }
    else if(isNaN(parseInt(this.marks))){
      this.noerror=false;
      this.msg6="This field can only have integers";
    }
    else{
      this.msg6 = "";
      this.c++;
    }

    if(this.strm==""){
      this.noerror=false;
      this.msg7="This field is required";
    }
    else{
      this.msg7 = "";
      this.c++;
    }

    if(this.clg==""){
      this.noerror=false;
      this.msg8="This field is required";
    }
    else{
      this.msg8 = "";
      this.c++;
    }
    if(this.c==8){
      this.noerror = true;
    }
    else{
      this.noerror = false
    }
  }
  reset(){
    this.name="";
    this.dob="";
    this.addr="";
    this.phone="";
    this.deg="";
    this.marks="";
    this.strm="";
    this.clg="";
  }
} 
