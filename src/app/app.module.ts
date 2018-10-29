import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import{PostsService} from './services/posts.service'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { RegistrationStudentComponent } from './registration-student/registration-student.component';

const appRoutes:Routes = [
    {path: '', component: HomeComponent},
    {path: 'listStudents', component: ListStudentsComponent},
    {path: 'detailStudent/:idEst', component: DetailStudentComponent},
    {path: 'registrationStudent', component: RegistrationStudentComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        ListStudentsComponent,
        DetailStudentComponent,
        RegistrationStudentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [PostsService],//adicion del servicio
    bootstrap: [AppComponent]
})
export class AppModule { }
