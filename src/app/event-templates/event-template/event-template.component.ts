import { Component, Input, OnInit } from '@angular/core';
import { EventTemplate } from '../../model/EventTemplate';
import { EventTemplateReaderService } from '../../services/event-template-reader.service';
import { ObjectTypeTemplate } from '../../model/ObjectTypeTemplate';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-template',
  templateUrl: './event-template.component.html',
  styleUrls: ['./event-template.component.css']
})
export class EventTemplateComponent implements OnInit {

  @Input('template') template: EventTemplate | ObjectTypeTemplate

  public active: string
  public modelReferences: string[] = []

  constructor(
    private eventTemplateService: EventTemplateReaderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.active = 'example'
    for (let property in this.template.schema) {
      if (this.eventTemplateService.isModelReference(this.template.schema[property])) {
        const typeStringFormat = this.eventTemplateService.parseTypeToString(this.template.schema[property])
        this.modelReferences.push(typeStringFormat)
      }
    }
  }

  public changeActiveLink(active: string) {
    this.active = active
  }

  getIdFromModelReference(modelReference: string) {
    let id = modelReference
    if (modelReference.endsWith('[]')) {
      id = modelReference.substring(0, modelReference.length - 2)
    }
    return id
  }
}
