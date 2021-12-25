import { Component, OnInit } from '@angular/core';
import { EventTemplate } from '../model/EventTemplate';
import { EventTemplateReaderService } from '../services/event-template-reader.service';
import {ObjectTypeTemplate} from '../model/ObjectTypeTemplate';

@Component({
  selector: 'app-event-templates',
  templateUrl: './event-templates.component.html',
  styleUrls: ['./event-templates.component.css']
})
export class EventTemplatesComponent implements OnInit {

  public eventTemplates: EventTemplate[] = []
  public objectTypeTemplates: ObjectTypeTemplate[] = []


  constructor(
    private eventTemplateService: EventTemplateReaderService
  ) { }

  ngOnInit() {
    this.eventTemplates = this.eventTemplateService.getEventTemplates()
    this.objectTypeTemplates = this.eventTemplateService.getObjectTypesTemplates()
  }

}
