import { Component, OnInit } from '@angular/core';
import { OrdenDatallesService } from 'src/app/servicios/orden-datalles.service';
OrdenDatallesService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrdenDatallesService){}
  foodData: any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
    
  }

}



