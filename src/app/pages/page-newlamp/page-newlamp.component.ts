import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-page-newlamp',
  templateUrl: './page-newlamp.component.html',
  styleUrls: ['./page-newlamp.component.css']
})
export class PageNewlampComponent implements OnInit {

  constructor(private firebase: AngularFireDatabase) { }
  SalasList: AngularFireList<any>;

  formu = new FormGroup({
    Descricao: new FormControl('', Validators.required),
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
    alert("Lamp cadastrada com sucesso");
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
