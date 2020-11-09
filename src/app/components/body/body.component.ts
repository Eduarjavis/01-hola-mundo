import { Component} from '@angular/core';
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{

    mostrar = true;

frase: any ={
        mensaje: 'Mientras el enemigo este en pie yo seguire peleando',
        autor: 'Vegueta'
    };

    personajes: string [] = ['Goku', 'Vegueta', 'Boo' ]

}