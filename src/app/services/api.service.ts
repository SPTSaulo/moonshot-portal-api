import {ApisConstants} from '../../apis/ApisConstants';
import {Endpoint, Method} from '../model/Endpoint';
import {Api} from '../model/Api';

export class ApiService {
  apis: Api[] = [
    {
      name: 'federation',
      endpoints: [
        {
          name: 'version',
          method: Method.GET
        },
        {
          name: 'login',
          method: Method.POST
        },
        {
          name: 'logout',
          method: Method.GET
        },
        {
          name: 'token',
          method: Method.POST
        },
        {
          name: 'communities',
          method: Method.GET
        },
        {
          name: 'modules',
          method: Method.GET
        },
        {
          name: 'users/:id',
          method: Method.GET
        },
        {
          name: 'users/by/email',
          method: Method.GET
        },
        {
          name: 'users',
          method: Method.GET
        },
        {
          name: 'users/by/roles',
          method: Method.GET
        },
        {
          name: 'users/by/perms',
          method: Method.GET
        },
        {
          name: 'users/:id/perms',
          method: Method.GET
        },
        {
          name: 'users/:id/perms',
          method: Method.PUT
        },
        {
          name: 'users/verify',
          method: Method.PUT
        },
        {
          name: 'users/verify/re-send',
          method: Method.PUT
        },
        {
          name: 'passwords/last-modification',
          method: Method.GET
        },
        {
          name: 'passwords/request',
          method: Method.POST
        },
        {
          name: 'passwords/recover/:token',
          method: Method.POST
        },
        {
          name: 'passwords/change',
          method: Method.PUT
        },
        {
          name: 'verifications',
          method: Method.GET
        }
      ],
      description: 'Esta es la api de Federation. ' +
        'Esta api recoge todos los enpoints relacionados con los usuarios de Moonshot Innovation. ' +
        'En esta api encontrará los siguientes endpoints:\n' +
        '- Todos los endpoints relacionados con la sesión del usuario\n' +
        '- Todos los endpoints de obtención de usuarios\n' +
        '- Todos los endpoints de modificación de los permisos de los usuarios\n' +
        '- Todos los endpoints de recuperación de la contraseña\n',
      swagger: ApisConstants.federation
    },
    {
      name: 'core',
      endpoints: [
        {
          name: 'version',
          method: Method.GET
        },
        {
          name: 'signed-url',
          method: Method.GET
        },
        {
          name: 'openGraph',
          method: Method.GET
        },
        {
          name: 'navbar',
          method: Method.GET
        },
        {
          name: 'industries/:id',
          method: Method.GET
        },
        {
          name: 'industries',
          method: Method.GET
        },
        {
          name: 'business-models/:id',
          method: Method.GET
        },
        {
          name: 'business-models',
          method: Method.GET
        },
        {
          name: 'social-innovations/:id',
          method: Method.GET
        },
        {
          name: 'social-innovations',
          method: Method.GET
        },
        {
          name: 'deep-techs/:id',
          method: Method.GET
        },
        {
          name: 'deep-techs',
          method: Method.GET
        },
        {
          name: 'ecosystems/initialized',
          method: Method.GET
        },
        {
          name: 'ecosystems',
          method: Method.GET
        },
        {
          name: 'ecosystems',
          method: Method.POST
        },
        {
          name: 'ecosystems/upload/original',
          method: Method.POST
        },
        {
          name: 'ecosystems/upload/thumbnail',
          method: Method.POST
        },
        {
          name: 'ecosystems/:id/upload/media',
          method: Method.PUT
        },
        {
          name: 'ecosystems/:id',
          method: Method.PUT
        },
        {
          name: 'invitations',
          method: Method.GET
        },
        {
          name: 'invitations/by/email',
          method: Method.GET
        },
        {
          name: 'invitations',
          method: Method.POST
        },
        {
          name: 'invitations/:id',
          method: Method.PUT
        },
        {
          name: 'invitations/:id',
          method: Method.DELETE
        },
        {
          name: 'notifications',
          method: Method.GET
        },
        {
          name: 'notifications/:id',
          method: Method.GET
        },
        {
          name: 'notifications/pending',
          method: Method.GET
        },
        {
          name: 'notifications',
          method: Method.POST
        },
        {
          name: 'notifications/:id',
          method: Method.PUT
        },
        {
          name: 'notifications/:id',
          method: Method.DELETE
        },
        {
          name: 'settings',
          method: Method.GET
        },
        {
          name: 'settings',
          method: Method.POST
        },
        {
          name: 'settings/upload/original',
          method: Method.POST
        },
        {
          name: 'settings/upload/thumbnail',
          method: Method.POST
        },
        {
          name: 'challenges/upload/media',
          method: Method.POST
        },
        {
          name: 'challenges/upload/news',
          method: Method.POST
        }
      ],
      description: 'Esta es la api de Core. ' +
        'Esta api recoge todos los enpoints relacionados con las funcionalidades principales de la plataforma. ' +
        'En esta api encontrará los siguientes endpoints:\n' +
        '- Todos los endpoints de obtención de taxonomias\n' +
        '- Todos los endpoints de obtención, creación y modificación de un ecosistema\n' +
        '- Todos los endpoints de obtención y creación de notificaciones\n' +
        '- Todos los endpoints de modificación de retos',
      swagger: ApisConstants.core
    },
    {
      name: 'community',
      endpoints: [
        {
          name: 'version',
          method: Method.GET
        },
        {
          name: 'online-events',
          method: Method.GET
        },
        {
          name: 'online-event/:id',
          method: Method.GET
        },
        {
          name: 'online-event',
          method: Method.POST
        },
        {
          name: 'online-event',
          method: Method.PUT
        },
        {
          name: 'online-event/:id',
          method: Method.DELETE
        },
        {
          name: 'online-event/admin',
          method: Method.PUT
        },
        {
          name: 'online-event/subscription',
          method: Method.PUT
        },
        {
          name: 'online-event/unsubscription',
          method: Method.PUT
        },
        {
          name: 'online-event/:id/admin',
          method: Method.DELETE
        },
        {
          name: 'face-to-face-events',
          method: Method.GET
        },
        {
          name: 'face-to-face-event/:id',
          method: Method.GET
        },
        {
          name: 'face-to-face-event',
          method: Method.POST
        },
        {
          name: 'face-to-face-event',
          method: Method.PUT
        },
        {
          name: 'face-to-face-event/:id',
          method: Method.DELETE
        },
        {
          name: 'face-to-face-event/admin',
          method: Method.PUT
        },
        {
          name: 'face-to-face-event/subscription',
          method: Method.PUT
        },
        {
          name: 'face-to-face-event/unsubscription',
          method: Method.PUT
        },
        {
          name: 'face-to-face-event/:id/admin',
          method: Method.DELETE
        },
        {
          name: 'room-documents/:room_id',
          method: Method.GET
        },
        {
          name: 'room-links/:room_id',
          method: Method.GET
        },
        {
          name: 'direct-chats',
          method: Method.GET
        },
        {
          name: 'direct-chats/all',
          method: Method.GET
        },
        {
          name: 'direct-chat/:id',
          method: Method.GET
        },
        {
          name: 'direct-chat',
          method: Method.POST
        },
        {
          name: 'direct-chat/:id',
          method: Method.DELETE
        },
        {
          name: 'direct-chat/message',
          method: Method.POST
        },
        {
          name: 'direct-chat/messages/:room_id',
          method: Method.GET
        },
        {
          name: 'direct-chat/message/:id',
          method: Method.DELETE
        },
        {
          name: 'follow-up-rooms',
          method: Method.GET
        },
        {
          name: 'follow-up-rooms/all',
          method: Method.GET
        },
        {
          name: 'follow-up-room/:id',
          method: Method.GET
        },
        {
          name: 'follow-up-room',
          method: Method.POST
        },
        {
          name: 'follow-up-room',
          method: Method.PUT
        },
        {
          name: 'follow-up-room/add-member',
          method: Method.PUT
        },
        {
          name: 'follow-up-room/leave-member',
          method: Method.PUT
        },
        {
          name: 'follow-up-room/open',
          method: Method.PUT
        },
        {
          name: 'follow-up-room/close',
          method: Method.PUT
        },
        {
          name: 'follow-up-room/:id',
          method: Method.DELETE
        },
        {
          name: 'follow-up-room/message',
          method: Method.POST
        },
        {
          name: 'follow-up-room/message/:id',
          method: Method.DELETE
        },
        {
          name: 'follow-up-room/message/:id/admin',
          method: Method.DELETE
        },
        {
          name: 'follow-up-room/messages/:room_id',
          method: Method.GET
        },
        {
          name: 'public-channels',
          method: Method.GET
        },
        {
          name: 'public-channel/:id',
          method: Method.GET
        },
        {
          name: 'public-channel',
          method: Method.POST
        },
        {
          name: 'public-channel',
          method: Method.PUT
        },
        {
          name: 'public-channel/:id',
          method: Method.DELETE
        },
        {
          name: 'public-channel/admin',
          method: Method.PUT
        },
        {
          name: 'public-channel/:id/admin',
          method: Method.DELETE
        },
        {
          name: 'public-channel/subscribe',
          method: Method.PUT
        },
        {
          name: 'public-channel/unsubscribe',
          method: Method.PUT
        },
        {
          name: 'public-channel/message',
          method: Method.POST
        },
        {
          name: 'public-channel/message/:id',
          method: Method.DELETE
        },
        {
          name: 'public-channel/message/:id/admin',
          method: Method.DELETE
        },
        {
          name: 'public-channel/messages/:room_id',
          method: Method.GET
        },
        {
          name: 'wall-post',
          method: Method.POST
        },
        {
          name: 'wall-post',
          method: Method.PUT
        },
        {
          name: 'wall-post/:id',
          method: Method.DELETE
        },
        {
          name: 'wall-post/admin',
          method: Method.PUT
        },
        {
          name: 'wall-post/:id/admin',
          method: Method.DELETE
        },
        {
          name: 'wall-post/like',
          method: Method.PUT
        },
        {
          name: 'wall-post/unlike',
          method: Method.PUT
        },
        {
          name: 'wall-post/comment',
          method: Method.POST
        },
        {
          name: 'wall-post/comment/like',
          method: Method.PUT
        },
        {
          name: 'wall-post/comment/unlike',
          method: Method.PUT
        },
        {
          name: 'wall-post/:id',
          method: Method.GET
        },
        {
          name: 'wall-posts',
          method: Method.GET
        },
        {
          name: 'actors',
          method: Method.GET
        },
        {
          name: 'actors/import/csv',
          method: Method.POST
        },
        {
          name: 'actors/by-name-and-state',
          method: Method.GET
        },
        {
          name: 'actors/by-type',
          method: Method.GET
        },
        {
          name: 'actors/by-state',
          method: Method.GET
        },
        {
          name: 'actors/by-member',
          method: Method.GET
        },
        {
          name: 'actor/:id',
          method: Method.GET
        },
        {
          name: 'actor',
          method: Method.POST
        },
        {
          name: 'actor',
          method: Method.PUT
        },
        {
          name: 'actor/accept',
          method: Method.PUT
        },
        {
          name: 'actor/reject',
          method: Method.PUT
        },
        {
          name: 'actor/:id',
          method: Method.DELETE
        },
        {
          name: 'fcmToken',
          method: Method.PUT
        },
        {
          name: 'member/logged-in',
          method: Method.GET
        },
        {
          name: 'members',
          method: Method.GET
        },
        {
          name: 'member/:id',
          method: Method.GET
        },
        {
          name: 'member/:id/marker',
          method: Method.GET
        },
        {
          name: 'member',
          method: Method.PUT
        },
        {
          name: 'member/:id',
          method: Method.DELETE
        },
        {
          name: 'education',
          method: Method.POST
        },
        {
          name: 'education',
          method: Method.PUT
        },
        {
          name: 'education/:id',
          method: Method.DELETE
        },
        {
          name: 'experience',
          method: Method.POST
        },
        {
          name: 'experience',
          method: Method.PUT
        },
        {
          name: 'experience/:id',
          method: Method.DELETE
        },
        {
          name: 'projects',
          method: Method.GET
        },
        {
          name: 'project/:id',
          method: Method.GET
        },
        {
          name: 'project',
          method: Method.POST
        },
        {
          name: 'project',
          method: Method.PUT
        },
        {
          name: 'project/:id',
          method: Method.DELETE
        }
      ],
      description: 'Esta es la api de Community. ' +
        'Esta api recoge todos los endpoints relacionados con el modulo de Comunidades. ' +
        'En esta api encontrará los siguientes endpoints:\n' +
        '- Todos los endpoints de obtención, creación y modificación de los eventos (eventos onlines y eventos presenciales).\n' +
        '- Todos los endpoints de obtención, creación y modificación de salas de comunicación (follow up rooms, direct chats y public channels)\n' +
        '- Todos los endpoints de obtención, creación y modificación de las publicaciones en el muro del ecosistema\n' +
        '- Todos los endpoints de obtención, creación y modificación de actores\n' +
        '- Todos los endpoints de obtención, creación y modificación de miembros\n' +
        '- Todos los endpoints de obtención, creación y modificación de proyectos\n' +
        '- Todos los endpoints de obtención, creación y modificación de ajustes del ecosistema\n',
      swagger: ApisConstants.community
    },
    {
      name: 'datahub',
      endpoints: [
        {
          name: 'version',
          method: Method.GET,
        },
        {
          name: 'event',
          method: Method.POST
        }
      ],
      description: "Esta es la api de Datahub. Esta api recoge todos los endpoints relacionados con la gestión de los eventos. En esta api encontrará los siguientes endpoints:\n" +
        "- Todos los endpoints de creación los eventos de Moonshot.\n",
      swagger: ApisConstants.datahub
    }
  ]

  public getApis() {
    return this.apis
  }

  public getSwaggerObject(apiName: string): Object {
    return this.apis.find(api => api.name === apiName).swagger
  }

  public getEndpoints(apiName: string): Endpoint[] {
    return this.apis.find(api => api.name === apiName).endpoints
  }
}
