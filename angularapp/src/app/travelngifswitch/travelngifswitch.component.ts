import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-travelngifswitch',
  templateUrl: './travelngifswitch.component.html',
  styleUrls: ['./travelngifswitch.component.css']
})
export class TravelngifswitchComponent implements OnInit {
@Output() fromChild:EventEmitter<any>=new EventEmitter<any>();
countries=[
  {
    id:1,
    cname:'India',
  },
  {
    id:2,
   cname:'Japan',
  },
  {
    id:3,
    cname:'London'
  }

];
cities=[
  {
    parentid:2,
    cityName:'Tokyo',
    imageUrl:'https://wallpapers.com/images/featured-full/tokyo-dxva6ho3h8x6m3xb.jpg',
    desc:'Visit- Tea Ceremony Experience in a Japanese Garden Teahouse In a teahouse within a beautiful Japanese garden,enjoy watching the tea prepared right before your eyes,then taste some tea',
    cost:'1,23,456/- per person',
    mode:true

  },
  {
    parentid:2,
    cityName:'Osaka',
    imageUrl:'https://wallpapers.com/images/featured-full/fukuoka-dn2tlesu5r8vcyng.jpg',
    desc:'Osaka is a charming, relaxed city best known for its food, fun and nightlife—with some history and culture peeking through. Osaka is only a short shinkansen ride from Tokyo, but has a very different personality to Japan capital city.',
    cost:'1,34,676/- per person',
    mode:true


  },
  {
    parentid:2,
    cityName:'Kyoto',
    imageUrl:'https://wallpapers.com/images/featured-full/japan-cupyb43e8vl4w2n7.jpg',
    desc:'Japan capital city and the emperor residence from 794 to 1868, Kyoto is known throughout the world for its stunning beauty.  Tourists are drawn year-round by the majestic palaces, statues, and villas, as well as by the carefully tended gardens; each spring, dozens of varieties of cherry trees bloom in Kyoto, and visitors are treated to time-honored hanami (blossom viewing) parties.',
    cost:'1,26,456/- per person',
        mode:true


  },
  {
    parentid:1,
    cityName:'Agra',
    imageUrl:'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1297/Agra.jpg',
    desc:'Agra is a city offering a discovery of the beautiful era. Agra has a rich history, reflected in its numerous monuments dotted in and around the city. ',
    cost:'1,23,456/- per person'

  },
  {
    parentid:1,
    cityName:'Varanasi',
    imageUrl:'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1381/River Ganga flanked by ghats.jpg',
    desc:'The land of Varanasi (Kashi) has been the ultimate pilgrimage spot for Hindus for ages. Hindus believe that one who is graced to die on the land of Varanasi would attain salvation and freedom from the cycle of birth and re-birth.',
    cost:'1,23,456/- per person'

  },
  {
    parentid:1,
    cityName:'Mumbai',
    imageUrl:'https://rimgak.mmtcdn.com/holidays/images/activitiesImages/sightseeing/1641/1950.jpg',
    desc:'Mumbai (also known as Bombay, the official name until 1995) is the capital city of the Indian state of Maharashtra. Mumbai lies on the Konkan coast on the west coast of India and has a deep natural harbour.',
    cost:'1,23,456/- per person'

  },
  {
    parentid:3
  }
  
];
arrayOfcities=[];
onChange(val){
  this.arrayOfcities=this.cities.filter(current=>current.parentid==val.target.value);
  
  
}

  constructor() { }

  ngOnInit() {
  }

}
