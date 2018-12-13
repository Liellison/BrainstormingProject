import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {
  welcome = 'Você esta logado, bem vindo!'
  Salas: any[];

  constructor(db: AngularFireDatabase) {
    db.list('/Salas').valueChanges().subscribe(Salas =>{
      this.Salas = Salas;
      console.log(this.Salas[0].Descricao);
    });
   }

  ngOnInit() {
  }

}
