import { Component, OnInit } from '@angular/core';
import { User } from 'src/user.model';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
})
export class HeaderComponentComponent implements OnInit {
  activeUser : User = {
    firstName: 'Maria',
  };

  constructor() {}

  ngOnInit(): void {}
}
