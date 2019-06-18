import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { interval, timer, fromEvent, Observable, noop } from 'rxjs';
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

    const http$ = createHttpObservable('/api/courses');

    const courses$ = http$.pipe(
      map(res => Object.values(res['payload']))
    );

    // http$.subscribe(
    //   console.log,
    //   noop,
    //   () => console.log('completed')
    // );

    courses$.subscribe(
      console.log,
      noop,
      () => console.log('completed')
    );
  }
}
