import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeName, customIncrement } from 'src/app/state/counter/counter.actions';
import { getName } from 'src/app/state/counter/counter.selectors';
import { counterState } from 'src/app/state/counter/counter.state';

@Component({
  selector: 'app-custom-input-counter',
  templateUrl: './custom-input-counter.component.html',
  styleUrls: ['./custom-input-counter.component.css']
})
export class CustomInputCounterComponent implements OnInit{
value!:number;
name$!:Observable<string>;
constructor(private store:Store<{counter:counterState}>){}
  ngOnInit(): void {
   this.name$ =this.store.select(getName)
  }
add(){
this.store.dispatch(customIncrement({count: +this.value}))
}
changeName(){
  this.store.dispatch(changeName())
}
}
