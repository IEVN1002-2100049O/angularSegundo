import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,ReactiveFormsModule } from '@angular/forms';
interface Empleado{
  matricula:number,
  nombre:string,
  correo:string
  edad:number,
  horasT:number
}
@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './empleados.component.html',
  styles: ``
})
export default class EmpleadosComponent {
  formGroup!:FormGroup;
  eliminar!:FormGroup;
  modificar!:FormGroup;
  modificarF!:FormGroup;
  empleados:Empleado={
    matricula:0,
    nombre:'',
    correo:'',
    edad:0,
    horasT:0
  }
  nombreM:string = '';
  edadM:number = 0;
  correoM:string = '';
  horasM:number = 0;
  statustabla:string = 'none';
  empleadosG:Empleado[] = [];
  empleadosEL:Empleado[] = [];
  alertaS:string = 'none';
  alertaL:string = 'none';
  alertaW:String = 'none';
  error:String = '';
  info:String = '';
  verForm: string = 'none';
  totalpagar:number = 0;
  empleadosinfo: {
    matricula: number;
    nombre: string;
    edad: number;
    correo: string;
    horasT: number;
    horaspagar: number;
    horasextra: number;
    subtotal: number;
  }[] = []
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
      this.formGroup = this.initForm();
      this.eliminar = this.initeliminar();
      this.modificar = this.initModificar();
      this.modificarF = this.initModificarF();
  }
  initForm():FormGroup{
    return this.fb.group({
      matricula:[''],
      nombre:[''],
      correo:[''],
      edad:[''],
      horas:[''],
    })
  }
  initeliminar():FormGroup{
    return this.fb.group({
      matricula:['']
    })
  }
  initModificar():FormGroup{
    return this.fb.group({
      matricula:['']
    })
  }
  initModificarF():FormGroup{
    return this.fb.group({
      nombre:[''],
      correo:[''],
      edad:[''],
      horas:[''],
    })
  }
  onSubmit(): void {
    console.log(this.formGroup.value);
    const {matricula, nombre, correo, edad, horas} = this.formGroup.value;
    const pagar = this.calcularhoras(horas);
    this.empleados = {
      matricula: matricula,
      nombre: nombre,
      correo: correo,
      edad: edad,
      horasT: horas,
    }
    
    let empleados = localStorage.getItem('empleados') ? JSON.parse(localStorage.getItem('empleados') as string) : [];
    empleados.push(this.empleados);
    localStorage.setItem('empleados', JSON.stringify(empleados));
    if(this.statustabla === 'block'){
      this.vertabla();
    }
    this.alertaS = 'block';
    this.info = 'Se agrego al empleado'
    setTimeout(() => {
      this.alertaS = 'none';
    }, 2000);
    this.formGroup.reset();
}

  calcularhoras(horas:number){
    let pagon;
    let horasextra;
    let horasextrap
    if(horas > 40){
      horasextra = horas-40;
      horasextrap = horasextra*140;
      pagon = 40 * 70;
    }else{
      horasextrap = 0;
      pagon = horas * 70;
    }
    return { horasextrap, pagon };
  }
  vertabla(){
    this.empleadosinfo = [];
    this.statustabla = 'block';
    let datos = localStorage.getItem('empleados');
    if(datos){
      this.empleadosG= JSON.parse(datos);
      this.empleadosG.forEach(empleado => {
        let pagar  = this.calcularhoras(empleado.horasT)
        let pagarHN = pagar.pagon;
        let pagarE = pagar.horasextrap;
        let subtotal = pagarE + pagarHN;
        this.totalpagar += subtotal;
        let info ={
          matricula: empleado.matricula,
          nombre: empleado.nombre,
          edad: empleado.edad,
          correo: empleado.correo,
          horasT: empleado.horasT,
          horaspagar:  pagar.pagon,
          horasextra: pagarE,
          subtotal: subtotal
        }
        this.empleadosinfo.push(info);
      });
      console.log(this.empleadosG);
      
    }
  }
  eliminarempleado() {
    let matriculaE = this.eliminar.value.matricula;
    console.log(matriculaE);
    let datos = localStorage.getItem('empleados');
    if (datos) {
        this.empleadosEL = JSON.parse(datos);
        const empleadosFiltrados = this.empleadosEL.filter(empleado => empleado.matricula !== matriculaE);
        console.log(empleadosFiltrados);
        
        if (empleadosFiltrados.length === this.empleadosEL.length) {
            this.error = 'No se encontró el empleado con la matrícula proporcionada.'
            this.alertaW = 'block';
            setTimeout(() => {
              this.alertaW = 'none';
            }, 3000);
        } else {
            this.empleadosEL = empleadosFiltrados;
            console.log(this.empleadosEL);
            localStorage.setItem('empleados', JSON.stringify(this.empleadosEL));
            this.alertaL = 'block';
            setTimeout(() => {
              this.alertaL = 'none';
            }, 3000);
            if (this.statustabla === 'block') {
                this.vertabla();
            }
        }
    } else {
      this.error = 'No hay registros de empleados actualmente'
      this.alertaW = 'block';
      setTimeout(() => {
        this.alertaW = 'none';
      }, 2000);
    }
    this.eliminar.reset();
  }
  Modificar(){
    this.nombreM = '';
    this.correoM = '';
    this.edadM = 0;
    this.horasM = 0;
    let matriculaE = this.modificar.value.matricula;
    console.log(matriculaE);
    let datos = localStorage.getItem('empleados');
    if (datos) {
        this.empleadosG = JSON.parse(datos);
        const empleadomodificar = this.empleadosG.filter(empleado => empleado.matricula == matriculaE);
        if(empleadomodificar.length > 0){
          this.nombreM = empleadomodificar[0].nombre;
          this.correoM = empleadomodificar[0].correo;
          this.edadM = empleadomodificar[0].edad;
          this.horasM = empleadomodificar[0].horasT;
          this.verForm = 'block';
        }else{
          this.error = 'No se encontro empleado actualmente'
          this.alertaW = 'block';
          setTimeout(() => {
            this.alertaW = 'none';
          }, 3000);
          if(this.verForm === 'block'){
            this.verForm = 'none';
          }
        }
    } else {
      this.error = 'No hay registros de empleados actualmente'
      this.alertaW = 'block';
      setTimeout(() => {
        this.alertaW = 'none';
      }, 2000);
    }
  }
  actualizarDatos(){
    let matriculaE = this.modificar.value.matricula;
    const {nombre, correo, edad, horas} = this.modificarF.value;
    const pagar = this.calcularhoras(horas);
    let datos = localStorage.getItem('empleados');
    if(datos){
      this.empleadosG = JSON.parse(datos);
      const index = this.empleadosG.findIndex(empleado => empleado.matricula == matriculaE);
      if (index !== -1) {
        this.empleadosG[index] = {
        matricula: Number(matriculaE),
        nombre: nombre,
        correo: correo,
        edad: edad,
        horasT: horas,
      };
      localStorage.setItem('empleados', JSON.stringify(this.empleadosG));
      if(this.statustabla === 'block'){
        this.vertabla();
      }
      this.verForm = 'none'
      this.alertaS = 'block';
      this.info = 'Se actualizo el empleado con matricula: ' + matriculaE;
      setTimeout(() => {
        this.alertaS = 'none';
      }, 2000);
      }
    }
    this.modificarF.reset();
    this.modificar.reset();
  }
}
