import { Component } from '@angular/core';
import { EventTemplateReaderService } from '../../services/event-template-reader.service';
import { Entity } from '../../model/Entity';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  public displayModulesNavbar: boolean = false;
  public displayEntitiesNavbar: boolean = false;
  public entities: Entity[] = [];
  public activeEntity: Entity;

  constructor(
    private eventTemplateService: EventTemplateReaderService
  ) {}

  public getEntities() {
    this.displayEntitiesNavbar = !this.displayEntitiesNavbar;
    this.entities = this.eventTemplateService.getEntities();
    this.eventTemplateService.recharge(undefined);
    this.activeEntity = undefined;
    this.displayModulesNavbar = false;
  }

  public filterByEntity(entity: Entity) {
    this.eventTemplateService.recharge(entity);
    this.activeEntity = entity;
  }

}
