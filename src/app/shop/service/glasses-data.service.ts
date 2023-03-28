import { Injectable } from '@angular/core';
import { glasses } from 'src/app/data/Glasses.data';

@Injectable({
  providedIn: 'root',
})
export class GlassesDataService {
  
  private _data = glasses;

  constructor() {}

  get data(){
    return this._data;
  }

  getGlasse(id: number){
    let glasse = this._data[id];
    return glasse;
  }
}
