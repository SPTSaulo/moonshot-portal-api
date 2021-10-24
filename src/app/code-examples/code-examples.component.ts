import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Endpoint} from '../model/Endpoint';
import {ApiService} from '../services/api.service';
import {Language} from '../model/Language';
import {Module} from '../model/Module';

@Component({
  selector: 'app-code-examples',
  templateUrl: './code-examples.component.html',
  styleUrls: ['./code-examples.component.css']
})
export class CodeExamplesComponent implements OnInit {

  public endpoints: Endpoint[]
  public languages: Language[]

  private module: Module = Module.COMMUNITY

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
  ) { }

  ngOnInit() {
    this.languages = [Language.JS, Language.JAVA]
    this._route.params.subscribe(params => {
      this.module = <Module>params['module']
      this.endpoints = this._apiService.getEndpoints(this.module)
    })
  }

}
