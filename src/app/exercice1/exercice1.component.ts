import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component {
  public exo1 :string = "Ceci est mon lien";

  success(): void {
    alert("Success !!");
  }

  public customLink :string = "https://www.google.fr/";
}
