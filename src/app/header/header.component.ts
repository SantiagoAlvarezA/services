import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    home:string = 'Inicio';
    listStudents:string = 'Lista de estudiantes';
    registrationStudent:string = 'Registro de estudiantes';
    search:string = 'Buscar';
    constructor() { }
    ngOnInit() { }
}