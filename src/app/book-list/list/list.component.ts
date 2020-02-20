import { Component, OnInit,Input,OnChanges} from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit,OnChanges {
  @Input() book: Book;
  
  constructor() { }
  ngOnChanges() {
    this.doSomething(this.book);
  }
  private doSomething(bk: Book) {
    alert("Page changed !")
  }

  ngOnInit(): void {
  }

}
