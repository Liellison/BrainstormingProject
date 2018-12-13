import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-page-exemplo-lamp',
  templateUrl: './page-exemplo-lamp.component.html',
  styleUrls: ['./page-exemplo-lamp.component.css']
})
export class PageExemploLampComponent implements OnInit {

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
