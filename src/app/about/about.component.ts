import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { interval, timer, fromEvent } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const interval$ = timer(3000, 1000);

    const sub = interval$.subscribe(val => console.log(`ONE: ${val}`));
    // interval$.subscribe(val => console.log(`TWO: ${val}`));

    setTimeout(() => sub.unsubscribe(), 5000);

    const click$ = fromEvent(document, 'click');

    click$.subscribe(
      e => console.log(e),
      err => console.error(err),
      () => console.log('completed')
    );
  }

}
