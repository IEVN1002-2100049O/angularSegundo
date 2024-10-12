import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,ReactiveFormsModule } from '@angular/forms';

interface Usuarios{
  nombre:string;
  edad:number;
  email:string;
 
}
@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.css'
})
export class Ejemplo1Component implements OnInit{
  formGroup!:FormGroup;
  materia = 'pwa';
  tem='';
  alumnos:Usuarios={
    nombre:'',
    edad:0,
    email:''
  }
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
      this.formGroup = this.initForm();
  }
  initForm():FormGroup{
    return this.fb.group({
      nombre:[''],
      edad:[''],
      email:[''],
    })

  }
  onSubmit():void{
    console.log(this.formGroup.value);
    const{nombre,edad,email}= this.formGroup.value;
    this.alumnos.nombre=nombre;
    this.alumnos.edad=edad;
    this.alumnos.email=email;
    let alumnoJSON = JSON.stringify(this.alumnos)
    localStorage.setItem('alumnos',alumnoJSON);
    localStorage.setItem('materia',this.materia);
  }
  subImprimir():void{
    this.tem = localStorage.getItem('materia')!;
    const alumnoGuardado = localStorage.getItem('alumno');
    if(alumnoGuardado){
      const alumno:Usuarios = JSON.parse(alumnoGuardado);
      console.log(alumno);
      
    }
  }
}
