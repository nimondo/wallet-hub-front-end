import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() book: Book;
  
  constructor() { }

  ngOnInit(): void {
  }

}
