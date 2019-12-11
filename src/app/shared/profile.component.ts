import { Component, ViewChild, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-home',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
    fName:string;
    mName:string;
    lName:string;

  constructor(private getName: ApiService) { }

  ngOnInit() {
    this.getName.getFirstName().then((data) => {
      setTimeout(()=>{
        this.fName = data;
    }, 1000);
    });
    this.getName.getMiddleName().then((data) => {
      setTimeout(()=>{
        this.mName = data;
    }, 2000)
    });
    this.getName.getLastName().then((data) => {
      setTimeout(()=>{
        this.lName = data;
    }, 3000);
  });
  }
}