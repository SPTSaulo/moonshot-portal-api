import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  apis = []

  constructor(
    private _apiService: ApiService
  ) { }

  ngOnInit() {
    this.apis = this._apiService.getApis()
  }

}
