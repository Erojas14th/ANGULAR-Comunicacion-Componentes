import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
@Input() public mensaje:string;
@Input() public nombreBoton1:string;
@Input() public nombreBoton2:string;
         public imagenUrl:string;
  constructor() { }

  ngOnInit() {
  }

  getImagen(event){
    this.imagenUrl=event;
     console.log(event);
 
  }
}
