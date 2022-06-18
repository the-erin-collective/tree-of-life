import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'

//import { Item } from './item'
//import { ItemService } from './item.service'

@Component({
  selector: 'mapview',
  templateUrl: './mapview.component.html',
})
export class MapViewComponent implements OnInit {
  //items: Array<Item>
  @ViewChild("map") public mapbox: ElementRef;
  
  constructor(/*private itemService: ItemService*/) {}

  ngOnInit(): void {
   // this.items = this.itemService.getItems()
  }

  onMapReady = (event) => {

  };
}
