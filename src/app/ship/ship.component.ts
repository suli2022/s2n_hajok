import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {

  ships:any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getShips();
  }
  getShips() {
    this.api.getShips().subscribe({
      next: (data) => {
        console.log(data);
        this.ships = data;
      },
      error: () => {}
    });
  }

}

/*
  ships = [
    {
      name: "túra csónak",
      length: 420,
      price: 185000,
      person: 2,
      trailer: "nem"
    },
    {
      name: "kajütös hajó",
      length: 520,
      price: 999000,
      person: 2,
      trailer: "nem"
    },
    {
      name: "motoros hajó",
      length: 610,
      price: 1950000,
      person: 2,
      trailer: "nem"
    },
    {
      name: "motorcsónak",
      length: 620,
      price: 3100000,
      person: 7,
      trailer: "nem"
    },
    {
      name: "horgászcsónak",
      length: 620,
      price: 9596000,
      person: 2,
      trailer: "igen"
    },
    {
      name: "motoros hajó",
      length: 630,
      price: 6250000,
      person: 3,
      trailer: "nem"
    }
  ]

*/
