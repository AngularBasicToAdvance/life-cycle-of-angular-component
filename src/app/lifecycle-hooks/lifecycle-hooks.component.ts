import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit {
  @Input() childnum: Number = 0 ;
  constructor() { }
  ngOnInit() {
    console.log('ngOnInit of Child Component');
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    console.log('ngOnChanges of Child Component');
  }
  // tslint:disable-next-line:use-life-cycle-interface
  /*ngDoCheck() {
    console.log('ngDoCheck');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    console.log('ngOnDestory');
  }*/
}
