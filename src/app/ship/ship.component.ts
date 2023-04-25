import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {
  adding = true;
  ships:any;

  id = new FormControl('');
  name = new FormControl('');
  length = new FormControl('');
  price = new FormControl('');
  trailer = new FormControl('');
  person = new FormControl('');

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

  deleteShip(id: number) {
    console.log('Törlés árnyékeljárás', id)
    this.api.deleteShip(id);
  }

  startEdit(ship: any) {
    console.log('Szerkesztés')
    this.id.setValue(ship.id);
    this.name.setValue(ship.name);
    this.length.setValue(ship.length);
    this.price.setValue(ship.price);
    this.trailer.setValue(ship.trailer);
    this.person.setValue(ship.person);
    this.adding = false;
  }

  startSave() {
    let ship = {
      id: this.id.value,
      name: this.name.value,
      length: this.length.value,
      price: this.price.value,
      trailer: this.trailer.value,
      person: this.person.value
    };
    
    if(this.adding) {
      this.api.addShip(ship).subscribe({
        next: (res) => {
          console.log(res)
        },
        error: (err) => {}

      });
    }else {
      this.api.updateShip(ship).subscribe({
        next: (res) => {
          console.log(res)
        },
        error: (err) => {}
      });
      this.adding = true;
    }
  }
  

  startClose() {
    this.adding = true;
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
