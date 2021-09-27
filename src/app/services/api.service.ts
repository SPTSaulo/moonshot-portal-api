import {ApisConstants} from '../../apis/ApisConstants';

export class ApiService {
  apis = [
    {
      name: 'Federation',
      description: 'Esta es la api de Federation' +
        'Esta api recoge todos los enpoints relacionados con los usuarios de Moonshot Innovation' +
        'En esta api encontrará los siguientes endpoints:' +
        '- Todos los endpoints relacionados con la sesión del usuario' +
        '- Todos los endpoints de obtención de usuarios' +
        '- Todos los endpoints de modificación de los permisos de los usuarios' +
        '- Todos los endpoints de recuperación de la contraseña',
      swagger: ApisConstants.federation
    },
    {
      name: 'Core',
      description: 'Esta es la api de Core' +
        'Esta api recoge todos los enpoints relacionados con las funcionalidades principales de la plataforma' +
        'En esta api encontrará los siguientes endpoints:' +
        '- Todos los endpoints de obtención de taxonomias' +
        '- Todos los endpoints de obtención, creación y modificación de un ecosystema' +
        '- Todos los endpoints de obtenición y creación de notificaciones',
      swagger: ApisConstants.core
    },
    {
      name: 'Community',
      description: 'Esta es la api de Community. ' +
        'Esta api recoge todos los endpoints relacionados con el modulo de Comunidades.' +
        'En esta api encontrará los siguientes endpoints:' +
        '- Todos los endpoints de obtención, creación y modificación de los eventos (eventos onlines y eventos presenciales).' +
        '- Todos los endpoints de obtención, creación y modificación de salas de comunicación (follow up rooms, direct chats y public channels)' +
        '- Todos los endpoints de obtención, creación y modificación de las publicaciones en el muro del ecosistema' +
        '- Todos los endpoints de obtención, creación y modificación de actores' +
        '- Todos los endpoints de obtención, creación y modificación de miembros' +
        '- Todos los endpoints de obtención, creación y modificación de proyectos' +
        '- Todos los endpoints de obtención, creación y modificación de ajustes del ecosistema',
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
