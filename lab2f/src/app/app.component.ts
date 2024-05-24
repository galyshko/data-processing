import { Component } from '@angular/core';
import { Entity } from './interfaces/entity';
import { Service1Service } from './services/service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lab2f';
  entityList:Entity[]=[];

  constructor(private service:Service1Service){}

  getEntities():void{
    this.service.getEntities().subscribe(
      (entities)=>{
        this.entityList=entities;
      }
    )
  }


}
