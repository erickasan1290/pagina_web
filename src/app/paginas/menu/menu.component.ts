import { Component, OnInit } from '@angular/core';
import { OrdenDatallesService } from 'src/app/servicios/orden-datalles.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:OrdenDatallesService){}
  foodData: any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
    
  }

}
