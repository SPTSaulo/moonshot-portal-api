import {ApisConstants} from '../../apis/ApisConstants';

export class ApiService {
  apis = [
    {
      name: 'Federation',
      description: 'This is the federation description',
      swagger: ApisConstants.federation
    },
    {
      name: 'Core',
      description: 'This is the core description',
      swagger: ApisConstants.core
    },
    {
      name: 'Community',
      description: 'This is the community description',
      swagger: ApisConstants.community
    }
  ]

  public getApis() {
    return this.apis
  }

  public getSwaggerObject(apiName: string): Object {
    return this.apis.find(api => api.name === apiName).swagger
  }
}
