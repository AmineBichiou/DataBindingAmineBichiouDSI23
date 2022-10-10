import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: [
  ]
})
export class BindingComponent implements OnInit {
titre : string ="Apprendre le Databinding dans Angular 13";
status : boolean =true;
nom : string="Amine Bichiou"
changerTitre()
{
  this.titre="Mon nouveau titre";
}
  constructor() { }

  ngOnInit(): void {
  }

}
