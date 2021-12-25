import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SwaggerUiComponent } from './swagger-ui/swagger-ui.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OverviewComponent } from './overview/overview.component';
import { PlatformPolicyComponent } from './platform-policy/platform-policy.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ApiService } from './services/api.service';
import { CodeExamplesComponent } from './code-examples/code-examples.component';
import { EndpointTemplateReaderService } from './services/endpoint-template-reader.service';
import { CodeExampleComponent } from './code-examples/code-example/code-example.component';
import { FormsModule } from '@angular/forms';
import { EventTemplatesComponent } from './event-templates/event-templates.component';
import {EventTemplateReaderService} from './services/event-template-reader.service';
import { EventTemplateComponent } from './event-templates/event-template/event-template.component';

@NgModule({
  declarations: [
    AppComponent,
    SwaggerUiComponent,
    NavbarComponent,
    OverviewComponent,
    PlatformPolicyComponent,
    DocumentationComponent,
    CodeExamplesComponent,
    CodeExampleComponent,
    EventTemplatesComponent,
    EventTemplateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ApiService,
    EndpointTemplateReaderService,
    EventTemplateReaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
