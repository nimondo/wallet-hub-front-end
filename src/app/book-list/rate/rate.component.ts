import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  @Output() rate = new EventEmitter<number>();

    iLoveIt() {
        this.rate.emit(5);
    }
  constructor() { }

  ngOnInit(): void {
  }

}
