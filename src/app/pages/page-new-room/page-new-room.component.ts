import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-page-new-room',
  templateUrl: './page-new-room.component.html',
  styleUrls: ['./page-new-room.component.css']
})
export class PageNewRoomComponent implements OnInit {

  constructor(private firebase: AngularFireDatabase) { }
  SalasList: AngularFireList<any>;

  formu = new FormGroup({
    Descricao: new FormControl('', Validators.required),
    Resumo: new FormControl('', Validators.required)
  })

  ngOnInit() {
  }
  getSalas() {
    this.SalasList = this.firebase.list('Salas');
    return this.SalasList;
  }

  public salva(){
    console.log(this.formu.value);
    if(this.formu.valid){
      this.createSalas(this.formu.valid);
    }
    alert("Salvo com sucesso");
  }

  public createSalas(sala){
    if(!this.SalasList){
      this.SalasList = this.getSalas();
    }
    
    this.SalasList.push({
      descricao: sala.Descricao,
      resumo: sala.Resumo,
      id: null,
      lamps: null
    });
  }

}
