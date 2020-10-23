import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-test',
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.css']
})
export class FirstTestComponent implements OnInit {
  name = 'phils';
  enabled = true;
  visible = false;

  constructor() { }

  ngOnInit(): void {
  }

}
