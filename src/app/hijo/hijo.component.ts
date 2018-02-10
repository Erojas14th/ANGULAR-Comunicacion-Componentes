import { Persona } from './../_model/persona';
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

    // Arreglo de Objeto Persona
    nombre:string;
    listaPersonas : Persona[]=[];
   contadorId:number=1;
    constructor() { }

  ngOnInit() {
  }

  getImagen(event){
    this.imagenUrl=event;
    
 
  }

  suscribirse(){
    this.listaPersonas.push(new Persona(this.contadorId,this.nombre));
this.emisor.emit("Suscrito");
this.contadorId++;
  }

  desuscribirse(id:number){
    console.log(id);

    let index=-1;
    for(let i=0; i<this.listaPersonas.length;i++){
         if(id === this.listaPersonas[i].id){
                index=i;
                break;
         }
    }
    this.listaPersonas.splice(index,1);
    this.emisor.emit("Desuscrito");
    this.emisor.emit(`${this.nombre} Desuscrito`);
  }



}
