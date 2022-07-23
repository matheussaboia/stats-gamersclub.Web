import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  nickname: string = "Didico";
  level: string = "15";

  constructor() { }

  ngOnInit(): void {
  }

}
