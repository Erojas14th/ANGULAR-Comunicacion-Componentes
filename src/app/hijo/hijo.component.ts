import { Component, OnInit , Input,Output,EventEmitter} from '@angular/core';

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

    @Output()     emisor = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  getImagen(event){
    this.imagenUrl=event;
    
 
  }

  suscribirse(){
this.emisor.emit("Suscrito");
  }

  desuscribirse(){
    this.emisor.emit("Desuscrito");
  }
}
