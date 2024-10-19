import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import ZodiacoComponent from './formulario/zodiaco/zodiaco.component';
import Ejemplo1Component from './formulario/ejemplo1/ejemplo1.component';
import EmpleadosComponent from './formulario/empleados/empleados.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ejemplo1Component,ZodiacoComponent,EmpleadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'angularSegundo';
  
}
