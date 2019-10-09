import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Employee } from '../data.modal';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  array: Employee[]=[];
  srch: string;
  empId:number;
  constructor(private svc: DataService,) { }

  ngOnInit() {
    this.array = this.svc.emp;
  }
  search(){
    this.array=[];
    this.svc.emp.forEach(element => {
      if(element.name==this.srch){
        this.array.push(element);
      }
      
    });
  }
}
