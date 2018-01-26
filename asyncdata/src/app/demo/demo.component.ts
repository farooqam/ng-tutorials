import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay, share } from 'rxjs/operators';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  user: Observable<{}>;

  constructor() { }

  ngOnInit() {
    this.user = this.getUserAsync().pipe(share());
  }

  getUserAsync(): Observable<{}> {
    return of({
      firstName: 'Farooq',
      lastName: 'Mahmud',
      age: 40,
      height: 69,
      weight: 170,
      homeTown: 'Seattle'
    }).pipe(delay(2000));
  }

}
