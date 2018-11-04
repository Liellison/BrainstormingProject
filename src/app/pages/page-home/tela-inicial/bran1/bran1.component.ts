import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-bran1',
  templateUrl: './bran1.component.html',
  styleUrls: ['./bran1.component.css']
})
export class Bran1Component implements OnInit {
  Salas: any[];

  constructor(db: AngularFireDatabase) {
    db.list('/Salas').valueChanges().subscribe(Salas =>{
      this.Salas = Salas;
      console.log(this.Salas);
    });
   }

  ngOnInit() {
  }

}
