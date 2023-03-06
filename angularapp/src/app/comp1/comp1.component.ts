import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
 userName;
 wonders=[{},
{
  id:1,
  title:'Taj Mahal',
  content:'This mausoleum complex in Agra, India, is regarded as one of the world’s most iconic monuments and is perhaps the finest example of Mughal architecture. ',
  img:'https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg?w=600&q=60'
},
{
  id:2,
  title:'Colosseum',
  content:'The Colosseum in Rome was built in the first century by order of the Emperor Vespasian. A feat of engineering, the amphitheater measures 620 by 513 feet (189 by 156 meters) and features a complex system of vaults.',
  img:'https://cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg?w=600&q=60'
},
{
  id:3,
  title:'Christ the Redeemer',
  content:'Christ the Redeemer, a colossal statue of Jesus, stands atop Mount Corcovado in Rio de Janeiro. Its origins date to just after World War I, when some Brazilians feared a “tide of godlessness.”',
  img:'https://cdn.britannica.com/54/150754-050-5B93A950/statue-Christ-the-Redeemer-Rio-de-Janeiro.jpg?w=600&q=60'
},
{
  id:4,
  title:'Chichén Itzá',
  content:'Chichén Itzá is a Mayan city on the Yucatán Peninsula in Mexico, which flourished in the 9th and 10th centuries CE. Under the Mayan tribe Itzá—who were strongly influenced by the Toltecs—a number of important monuments and temples were built. ',
  img:'https://cdn.britannica.com/49/61349-050-9FFBEB28/El-Castillo-pyramid-plaza-Toltec-state-Yucatan.jpg?w=600&q=60'
},
];
 //Dependence injection
  constructor(private _utilityService: UtilityService) {
    this._utilityService.userName.subscribe(res =>{
      console.log('data coming from subject comp1',res);
      this.wonder=res;
      
    },err =>{
      console.log('error occured',err);
      
    })
   }

  ngOnInit() {

  }
  wonder;
  updateUsername(uname){

    this.wonder=this.wonders[uname.value];
    console.log(this.wonder);
    
    this._utilityService.userName.next(this.wonder);

    
  }
}
