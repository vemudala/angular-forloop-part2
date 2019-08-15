import { Component, OnInit } from '@angular/core';
import {ITile} from '../interfaces/itile';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
tiles:Array<ITile>=[]; 
  constructor() { }

  ngOnInit() {
  }

}
