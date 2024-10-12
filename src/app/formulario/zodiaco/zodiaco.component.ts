import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,ReactiveFormsModule } from '@angular/forms';

interface Usuarios{
  nombre:string;
  edad:number;
  email:string;
 
}
@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styles: ``
})
export class ZodiacoComponent {
  formGroup!:FormGroup;
  materia = 'pwa';
  tem='';
  nombre:string = '';
  fano:number = 2024;
  edad:number = 0;
  signo:string = '';
  url:string = '';
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
      apaterno:[''],
      amaterno:[''],
      dia:[''],
      mes:[''],
      anio:[''],
      sexo:[''],
    })

  }
  onSubmit():void{
    console.log(this.formGroup.value);
    const{nombre,apaterno,amaterno,dia,mes,anio,sexc}= this.formGroup.value;
    this.nombre = (nombre+' '+apaterno+' '+amaterno);
    this.edad = this.fano - anio;
    if (anio == 1924 || anio == 1936 || anio == 1948 || anio == 1960 || anio == 1972 || anio == 1984 
        || anio == 1996 || anio == 2008 || anio == 2020) {
        this.signo ="Rata";
        this.url = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.vecteezy.com%2Fpng%2F24091791-rata-zodiaco-chino-animal&psig=AOvVaw3uiC36jClYHxa2PogIzOlS&ust=1728836567770000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjRhKmgiYkDFQAAAAAdAAAAABAE';
    } else if (anio == 1925 || anio == 1937 || anio == 1949 || anio == 1961 || anio == 1973 || anio == 1985 
        || anio == 1997 || anio == 2009 || anio == 2021) {
        this.signo ="Buey";
        this.url = 'https://www.google.com/imgres?q=zodiaco%20buey&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20230502%2Foriginal%2Fpngtree-zodiac-ox-year-spring-festival-transparent-png-image_9132799.png&imgrefurl=https%3A%2F%2Fes.pngtree.com%2Ffreepng%2Fzodiac-ox-year-spring-festival-transparent_9132799.html&docid=PNg5SFxChJvcSM&tbnid=2kOSYpBJYLe53M&vet=12ahUKEwiUkIixoImJAxWwEUQIHcfmD8kQM3oECBgQAA..i&w=1200&h=1200&hcb=2&itg=1&ved=2ahUKEwiUkIixoImJAxWwEUQIHcfmD8kQM3oECBgQAA';
    } else if (anio == 1926 || anio == 1938 || anio == 1950 || anio == 1962 || anio == 1974 || anio == 1986 
        || anio == 1998 || anio == 2010 || anio == 2022) {
        this.signo ="Tigre";
        this.url = 'https://www.google.com/imgres?q=zodiaco%20tigre&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1346341844%2Fes%2Fvector%2Fa%25C3%25B1o-nuevo-tiger-paperart.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DgWSm2OZ8DIcbX3G5aTbUd48NVQtKeJFd9pW5fl9SeeY%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fes%2Ffotos%2Fhoroscopo-chino-tigre&docid=6RkxKz3O7qEKXM&tbnid=IFWUjVrRKazGpM&vet=12ahUKEwit_si9oImJAxWNJ0QIHc_mAiYQM3oECFUQAA..i&w=612&h=612&hcb=2&ved=2ahUKEwit_si9oImJAxWNJ0QIHc_mAiYQM3oECFUQAA';
    } else if (anio == 1927 || anio == 1939 || anio == 1951 || anio == 1963 || anio == 1975 || anio == 1987 
        || anio == 1999 || anio == 2011 || anio == 2023) {
        this.signo ="Conej0";
    } else if (anio == 1928 || anio == 1940 || anio == 1952 || anio == 1964 || anio == 1976 || anio == 1988 
        || anio == 2000 || anio == 2012 || anio == 2024) {
        this.signo ="Dragón";
    } else if (anio == 1929 || anio == 1941 || anio == 1953 || anio == 1965 || anio == 1977 || anio == 1989 
        || anio == 2001 || anio == 2013 || anio == 2025) {
        this.signo ="Serpinte";
    } else if (anio == 1930 || anio == 1942 || anio == 1954 || anio == 1966 || anio == 1978 || anio == 1990 
        || anio == 2002 || anio == 2014 || anio == 2026) {
        this.signo ="Cabalo";
    }
  }

}
