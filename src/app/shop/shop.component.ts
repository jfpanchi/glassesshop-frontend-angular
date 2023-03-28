import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlassesDataService } from './service/glasses-data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  data: Array<any> = [];
  param: number = 1;

  constructor(private glassesDataService: GlassesDataService, private router: Router,) { }

  ngOnInit() {
    this.data = this.glassesDataService.data;
  }

  

  next(){
    this.router.navigate(['/shop/glasse/4']);
  }
}
