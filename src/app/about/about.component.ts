import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { interval, timer, fromEvent, Observable, noop, of, concat, merge } from 'rxjs';
import { subscribeOn, map } from 'rxjs/operators';
import { createHttpObservable } from '../common/util';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const source1$ = interval(1000);
    const source2$ = source1$.pipe(map(val => 10 * val));

    const result$ = merge(source1$, source2$);

    result$.subscribe(console.log);
  }
}
