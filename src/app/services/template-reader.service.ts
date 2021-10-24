import {Template} from '../model/Template';
import {CoreJavascriptTemplates} from '../../templates/core/javascript/CoreJavascriptTemplates';
import {Endpoint} from '../model/Endpoint';
import {Language} from '../model/Language';
import {Module} from '../model/Module';
import {CoreJavaTemplates} from '../../templates/core/java/CoreJavaTemplates';

export class TemplateReaderService {

  public getTemplate(endpoint: Endpoint, module: Module, language: Language): Template {
    switch (module) {
      case Module.CORE : return this.getCoreTemplate(endpoint, language)
      case Module.COMMUNITY : return this.getCommunityTemplate(endpoint, language)
      case Module.FEDERATION : return this.getFederationTemplate(endpoint, language)
      default: return null
    }
  }

  private getCoreTemplate(endpoint: Endpoint, language: Language): Template {
    switch (language) {
      case Language.JS: return this.getCoreJavascriptTemplates(endpoint)
      case Language.JAVA: return this.getCoreJavaTemplates(endpoint)
    }
  }

  private getCoreJavascriptTemplates(endpoint: Endpoint): Template {
    const templateName = endpoint.name + '_' + endpoint.method
    console.log(templateName)
    switch (templateName) {
      case 'version_get': return CoreJavascriptTemplates.version_get
      case 'signed-url_get': return CoreJavascriptTemplates.signedUrl_get
      case 'openGraph_get': return CoreJavascriptTemplates.openGraph_get
      case 'industry/:id_get': return CoreJavascriptTemplates.industry_id_get
      case 'industries_get': return CoreJavascriptTemplates.industries_get
      case 'business-model/:id_get': return CoreJavascriptTemplates.businessModel_id_get
      case 'business-models_get': return CoreJavascriptTemplates.businessModels_get
      case 'social-innovation/:id_get': return CoreJavascriptTemplates.socialInnovation_id_get
      case 'social-innovations_get': return CoreJavascriptTemplates.socialInnovations_get
      case 'deep-tech/:id_get': return CoreJavascriptTemplates.deepTech_id_get
      case 'deep-techs_get': return  CoreJavascriptTemplates.deepTechs_get
      case 'ecosystem/initialized_get': return CoreJavascriptTemplates.ecosystemInitialized_get
      case 'ecosystem_get': return CoreJavascriptTemplates.ecosystem_get
      case 'ecosystem_post': return CoreJavascriptTemplates.ecosystem_post
      case 'ecosystem_put': return CoreJavascriptTemplates.ecosystem_put
      case 'ecosystem/invite_post': return CoreJavascriptTemplates.ecosystemInvite_post
      case 'notifications_get': return CoreJavascriptTemplates.notifications_get
      case 'notification/:id_get': return CoreJavascriptTemplates.notifications_id_get
      case 'notification_post': return CoreJavascriptTemplates.notification_post
      default: return null
    }
  }

  private getCoreJavaTemplates(endpoint: Endpoint): Template {
    const templateName = endpoint.name + '_' + endpoint.method
    switch (templateName) {
      case 'version_get': return CoreJavaTemplates.version_get
      case 'signed-url_get': return CoreJavaTemplates.signedUrl_get
      case 'openGraph_get': return CoreJavaTemplates.openGraph_get
      case 'industry/:id_get': return CoreJavaTemplates.industry_id_get
      case 'industries_get': return CoreJavaTemplates.industries_get
      case 'business-model/:id_get': return CoreJavaTemplates.businessModel_id_get
      case 'business-models_get': return CoreJavaTemplates.businessModels_get
      case 'social-innovation/:id_get': return CoreJavaTemplates.socialInnovation_id_get
      case 'social-innovations_get': return CoreJavaTemplates.socialInnovations_get
      case 'deep-tech/:id_get': return CoreJavaTemplates.deepTech_id_get
      case 'deep-techs_get': return  CoreJavaTemplates.deepTechs_get
      case 'ecosystem/initialized_get': return CoreJavaTemplates.ecosystemInitialized_get
      case 'ecosystem_get': return CoreJavaTemplates.ecosystem_get
      case 'ecosystem_post': return CoreJavaTemplates.ecosystem_post
      case 'ecosystem_put': return CoreJavaTemplates.ecosystem_put
      case 'ecosystem/invite_post': return CoreJavaTemplates.ecosystemInvite_post
      case 'notifications_get': return CoreJavaTemplates.notifications_get
      case 'notification/:id_get': return CoreJavaTemplates.notifications_id_get
      case 'notification_post': return CoreJavaTemplates.notification_post
      default: return null
    }
  }

  private getCommunityTemplate(endpoint: Endpoint, language: Language): Template {
    const templateName = endpoint.name + '_' + endpoint.method
    switch (templateName) {
      default: return null
    }
  }

  private getFederationTemplate(endpoint: Endpoint, language: Language): Template {
    const templateName = endpoint.name + '_' + endpoint.method
    switch (templateName) {
      default: return null
    }
  }
}
