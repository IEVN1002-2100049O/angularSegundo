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
export default class ZodiacoComponent {
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
    let fecha_nacimiento = new Date(anio,mes -1,dia)
    const hoy = new Date();
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();
    if (mesActual < fecha_nacimiento.getMonth() || 
       (mesActual === fecha_nacimiento.getMonth() && diaActual < fecha_nacimiento.getDate())) {
        this.edad--; // Restar un año si el cumpleaños aún no ha ocurrido
    }
    if (anio == 1924 || anio == 1936 || anio == 1948 || anio == 1960 || anio == 1972 || anio == 1984 
      || anio == 1996 || anio == 2008 || anio == 2020) {
      this.signo = "Rata";
      this.url = 'https://elcomercio.pe/resizer/ouhyJzBv_HxkbRRx1UP56uCyLsg=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/VUKSU3CECFA6RILNQZYIO35ZHY.jpg';
    } else if (anio == 1925 || anio == 1937 || anio == 1949 || anio == 1961 || anio == 1973 || anio == 1985 
        || anio == 1997 || anio == 2009 || anio == 2021) {
        this.signo = "Buey";
        this.url = 'https://peopleenespanol.com/thmb/9yOzS_4WbqBfxAQOlPwffgt4d8c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165942187-2000-f810031b206d4fa7b64e5f8ad9f2bedd.jpg';
    } else if (anio == 1926 || anio == 1938 || anio == 1950 || anio == 1962 || anio == 1974 || anio == 1986 
        || anio == 1998 || anio == 2010 || anio == 2022) {
        this.signo = "Tigre";
        this.url = 'https://media.istockphoto.com/id/1346341844/es/vector/a%C3%B1o-nuevo-tiger-paperart.jpg?s=612x612&w=0&k=20&c=gWSm2OZ8DIcbX3G5aTbUd48NVQtKeJFd9pW5fl9SeeY=';
    } else if (anio == 1927 || anio == 1939 || anio == 1951 || anio == 1963 || anio == 1975 || anio == 1987 
        || anio == 1999 || anio == 2011 || anio == 2023) {
        this.signo = "Conejo";
        this.url = 'https://peopleenespanol.com/thmb/-ekXDGhFH6Baw6C29OGuDxf8iDQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165927323-2000-c6361314aab74b7485a5ea677666ba83.jpg';
    } else if (anio == 1928 || anio == 1940 || anio == 1952 || anio == 1964 || anio == 1976 || anio == 1988 
        || anio == 2000 || anio == 2012 || anio == 2024) {
        this.signo = "Dragón";
        this.url = 'https://elcomercio.pe/resizer/xxsN__44AHaor2vvb-A5wlkoubw=/620x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DRPAZEHXHFG6PJBGTV5OQJTT6U.jpg';
    } else if (anio == 1929 || anio == 1941 || anio == 1953 || anio == 1965 || anio == 1977 || anio == 1989 
        || anio == 2001 || anio == 2013 || anio == 2025) {
        this.signo = "Serpiente";
        this.url = 'https://peopleenespanol.com/thmb/Who-b06dJwjtqnuJ406zgMaq4kg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165965553-2000-e4700b87c9fd404681a502f7095c2ac5.jpg';
    } else if (anio == 1930 || anio == 1942 || anio == 1954 || anio == 1966 || anio == 1978 || anio == 1990 
        || anio == 2002 || anio == 2014 || anio == 2026) {
        this.signo = "Caballo";
        this.url = 'https://peopleenespanol.com/thmb/NmX4UUt1APhp__iVTPZtQJim9t8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165967001-2000-57bb5c0eac9247e4a6b9afe14505f364.jpg';
    } else if (anio == 1931 || anio == 1943 || anio == 1955 || anio == 1967 || anio == 1979 || anio == 1991 
        || anio == 2003 || anio == 2015 || anio == 2027) {
        this.signo = "Cabra";
        this.url = 'https://peopleenespanol.com/thmb/Fwy99mIonHJYbhmA9AOTeWCpkdU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165967741-2000-12afb4d370f14afe856f05ba36fe1693.jpg';
    } else if (anio == 1932 || anio == 1944 || anio == 1956 || anio == 1968 || anio == 1980 || anio == 1992 
        || anio == 2004 || anio == 2016 || anio == 2028) {
        this.signo = "Mono";
        this.url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36Cr-dEF7FIwGIw75wLfOweuMcIJSKMahSA&s';
    } else if (anio == 1933 || anio == 1945 || anio == 1957 || anio == 1969 || anio == 1981 || anio == 1993 
        || anio == 2005 || anio == 2017 || anio == 2029) {
        this.signo = "Gallo";
        this.url = 'https://peopleenespanol.com/thmb/Th2wLXhS9Tzh3VR7DtVB9CwgUFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165926089-2000-25a52aba2d0942679de98ba836f1ab9f.jpg';
    } else if (anio == 1934 || anio == 1946 || anio == 1958 || anio == 1970 || anio == 1982 || anio == 1994 
        || anio == 2006 || anio == 2018 || anio == 2030) {
        this.signo = "Perro";
        this.url = 'https://studycli.org/wp-content/uploads/2021/06/chinese-new-year-year-of-the-dog-paper-cutting.jpeg';
    } else if (anio == 1935 || anio == 1947 || anio == 1959 || anio == 1971 || anio == 1983 || anio == 1995 
        || anio == 2007 || anio == 2019) {
        this.signo = "Cerdo";
        this.url = 'https://peopleenespanol.com/thmb/3_4ezJWMT8DtQSEuV5vMg3X8DUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165969332-2000-eea5e27d3f4145c9b01121f4c61ccaef.jpg';
    }
  
  }

}

