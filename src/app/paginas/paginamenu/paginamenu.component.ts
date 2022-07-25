import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdenDatallesService } from 'src/app/servicios/orden-datalles.service';

@Component({
  selector: 'app-paginamenu',
  templateUrl: './paginamenu.component.html',
  styleUrls: ['./paginamenu.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrdenDatallesService) { }
  getMenuId:any;
  menuData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData =  this.service.foodDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.menuData,'menudata>>');
        
    }
    
  }

}
