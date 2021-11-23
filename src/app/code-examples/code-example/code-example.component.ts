import { Component, Input, OnInit } from '@angular/core';
import { Endpoint } from '../../model/Endpoint';
import { Language } from '../../model/Language';
import { Template } from '../../model/Template';
import { TemplateReaderService } from '../../services/template-reader.service';
import { Module } from '../../model/Module';

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.css']
})
export class CodeExampleComponent implements OnInit {

  @Input('endpoint') endpoint: Endpoint
  @Input('module') module: Module
  @Input('languages') languages: Language[]

  public selectedLanguage: Language = Language.JS
  public template: Template
  public hideResponse: boolean = false

  constructor(
    private _templateReaderService: TemplateReaderService
  ) {}

  ngOnInit() {
    this.template = this._templateReaderService.getTemplate(this.endpoint, this.module, this.selectedLanguage)
  }

  changeTemplate() {
    this.loadTemplate()
  }

  private loadTemplate() {
    this.template = this._templateReaderService.getTemplate(this.endpoint, this.module, this.selectedLanguage)
  }

}
