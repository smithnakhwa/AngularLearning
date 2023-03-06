import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  // userName = new Subject<any>();// observable;//we can't set initial value in subject //subject is a special type of observable use to pass the data from component to component when there is no relationship between them
  // smith:Observable<any>;//this is normal observer
  userName=new BehaviorSubject<any>({
    id:0,
    title:'Great Wall of China',
    content:'Great might be an understatement. One of the world’s largest building-construction projects, the Great Wall of China is widely thought to be about 5,500 miles (8,850 km) long; a disputed Chinese study, however, claims the length is 13,170 miles (21,200 km).',
    img:'https://cdn.britannica.com/82/94382-050-20CF23DB/Great-Wall-of-China-Beijing.jpg?w=600&q=60'
  });//we can set initial value in behaviourSubject....
  constructor() { }
}
