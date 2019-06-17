import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { interval, timer, fromEvent, Observable, noop } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const http$ = Observable.create(observer => {
      fetch('/api/courses')
        .then(res => {
          return res.json();
        })
        .then(body => {
          observer.next(body);
          observer.complete();
        })
        .catch(err => {
          observer.error(err);
        });
    });

    http$.subscribe(
      console.log,
      noop,
      () => console.log('completed')
    );
  }

}
