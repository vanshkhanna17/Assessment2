import { Component, OnInit } from '@angular/core';
import { Employee } from '../data.modal';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  array: Employee[]=[];
  eml: Employee;
  empId: number;
  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.empId =parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.emp.forEach(element => {
      if(element.id==this.empId){
        this.eml=element;
      }
    });
    this.array = this.svc.emp;
  }
  remv(i){
    this.array.splice(i,1);
  }
 
}
