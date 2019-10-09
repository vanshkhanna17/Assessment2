import { Injectable } from '@angular/core';
import { Employee } from './data.modal';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  emp: Employee[]=[];
  em: Employee;
  constructor() { }
}
