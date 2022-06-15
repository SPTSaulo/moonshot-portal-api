import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Endpoint } from '../../model/Endpoint';
import { Language } from '../../model/Language';
import { EndpointTemplate } from '../../model/EndpointTemplate';
import { EndpointTemplateReaderService } from '../../services/endpoint-template-reader.service';
import { Module } from '../../model/Module';

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.css']
})
export class CodeExampleComponent implements OnInit {

  @ViewChild('copy_button') copyButton: ElementRef
  @ViewChild('code') code: ElementRef

  @Input('endpoint') endpoint: Endpoint
  @Input('module') module: Module
  @Input('languages') languages: Language[]

  public selectedLanguage: Language = Language.JS
  public template: EndpointTemplate
  public hideResponse: boolean = false

  constructor(
    private _templateReaderService: EndpointTemplateReaderService
  ) {}

  ngOnInit() {
    this.loadTemplate();
  }

  public copyCode() {
    this.copyButton.nativeElement.textContent = "Copied"
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.template.code;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    setTimeout(() => this.copyButton.nativeElement.textContent = "Copy code", 1000)
  }

  public changeTemplate() {
    this.loadTemplate()
  }

  private loadTemplate() {
    this.template = this._templateReaderService.getTemplate(this.endpoint, this.module, this.selectedLanguage)
  }

}
