import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwaggerUiComponent } from './swagger-ui/swagger-ui.component';
import { OverviewComponent } from './overview/overview.component';
import { PlatformPolicyComponent } from './platform-policy/platform-policy.component';
import {DocumentationComponent} from './documentation/documentation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/overview',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'platform-policy',
    component: PlatformPolicyComponent
  },
  {
    path: 'documentation',
    component: DocumentationComponent
  },
  {
    path: 'swagger/:apiName',
    component: SwaggerUiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
