import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  @Input() canal:string;
  @Output() emisor = new EventEmitter;
  constructor() { }

  ngOnInit() {
    this.emisor.emit('https://toddmotto.com/assets/img/categories/angularjs.svg');
  }

}
