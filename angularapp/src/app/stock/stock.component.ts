import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
public stocks:Array<Stock>
  constructor() { }

  ngOnInit() {
    this.stocks=[new Stock('Test Stock Company','TSC',85,80),
    // new Stock('Second Stock Company','SSC',10,20),
    // new Stock('Last Stock Company','LSC',876,765)
  ];

  }
  toggleFavorite(event,index){
    console.log('We are toggling the faorite state for stock',index ,event);
    this.stocks[index].favorite=!this.stocks[index].favorite;
    
  }

}
