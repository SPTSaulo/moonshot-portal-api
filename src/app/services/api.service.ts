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
      description: 'This is the Federation API. ' +
        'This api collects all the enpoints related to Moonshot Innovation users. ' +
        'In this api you will find the following endpoints:\n' +
        '- All user session endpoints\n' +
        '- All user permissions modification endpoints\n' +
        '- All user acquisition endpoints\n' +
        '- All user session endpoints\n' +
        '- All password recovery endpoints\n',
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
      description: 'This is the Core API. ' +
        'This API collects all the endpoints related to the main functionalities of the platform. ' +
        'In this api you will find the following endpoints:' +
        '\n' +
        '- All taxonomy acquisition endpoints\n' +
        '- All ecosystem acquisition, creation and modifications endpoints\n' +
        '- All notifications acquisition and creation endpoints\n' +
        '- All challenges modification endpoints',
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
          name: 'online-events/:id',
          method: Method.GET
        },
        {
          name: 'online-events',
          method: Method.POST
        },
        {
          name: 'online-events/upload',
          method: Method.POST
        },
        {
          name: 'online-events/:id',
          method: Method.PUT
        },
        {
          name: 'online-events/:id',
          method: Method.DELETE
        },
        {
          name: 'online-events/:id/admin',
          method: Method.PUT
        },
        {
          name: 'online-events/:id/subscription',
          method: Method.PUT
        },
        {
          name: 'online-events/:id/unsubscription',
          method: Method.PUT
        },
        {
          name: 'online-events/:id/admin',
          method: Method.DELETE
        },
        {
          name: 'face-to-face-events',
          method: Method.GET
        },
        {
          name: 'face-to-face-events/:id',
          method: Method.GET
        },
        {
          name: 'face-to-face-events',
          method: Method.POST
        },
        {
          name: 'face-to-face-events/upload',
          method: Method.POST
        },
        {
          name: 'face-to-face-events/:id',
          method: Method.PUT
        },
        {
          name: 'face-to-face-events/:id',
          method: Method.DELETE
        },
        {
          name: 'face-to-face-events/:id/admin',
          method: Method.PUT
        },
        {
          name: 'face-to-face-events/:id/subscription',
          method: Method.PUT
        },
        {
          name: 'face-to-face-events/:id/unsubscription',
          method: Method.PUT
        },
        {
          name: 'face-to-face-events/:id/admin',
          method: Method.DELETE
        },
        {
          name: 'direct-chats',
          method: Method.GET
        },
        {
          name: 'direct-chats/all/member-participate',
          method: Method.GET
        },
        {
          name: 'direct-chats/:id',
          method: Method.GET
        },
        {
          name: 'direct-chats',
          method: Method.POST
        },
        {
          name: 'direct-chats/:id',
          method: Method.DELETE
        },
        {
          name: 'direct-chats/:id/messages',
          method: Method.POST
        },
        {
          name: 'direct-chats/:id/messages',
          method: Method.GET
        },
        {
          name: 'direct-chats/:id/messages/:message_id',
          method: Method.DELETE
        },
        {
          name: 'direct-chats/:id/documents',
          method: Method.GET
        },
        {
          name: 'direct-chats/:id/links',
          method: Method.GET
        },
        {
          name: 'direct-chats/:id/upload',
          method: Method.PUT
        },
        {
          name: 'follow-up-rooms',
          method: Method.GET
        },
        {
          name: 'follow-up-rooms/all/member-participate',
          method: Method.GET
        },
        {
          name: 'follow-up-rooms/:id',
          method: Method.GET
        },
        {
          name: 'follow-up-rooms',
          method: Method.POST
        },
        {
          name: 'follow-up-rooms/:id',
          method: Method.PUT
        },
        {
          name: 'follow-up-rooms/:id/members/add',
          method: Method.PUT
        },
        {
          name: 'follow-up-rooms/:id/members/leave',
          method: Method.PUT
        },
        {
          name: 'follow-up-rooms/:id/open',
          method: Method.PUT
        },
        {
          name: 'follow-up-rooms/:id/close',
          method: Method.PUT
        },
        {
          name: 'follow-up-rooms/:id',
          method: Method.DELETE
        },
        {
          name: 'follow-up-rooms/:id/messages',
          method: Method.POST
        },
        {
          name: 'follow-up-rooms/:id/messages/:message_id',
          method: Method.DELETE
        },
        {
          name: 'follow-up-rooms/:id/messages/:message_id/admin',
          method: Method.DELETE
        },
        {
          name: 'follow-up-rooms/:id/messages',
          method: Method.GET
        },
        {
          name: 'follow-up-rooms/:id/documents',
          method: Method.GET
        },
        {
          name: 'follow-up-rooms/:id/links',
          method: Method.GET
        },
        {
          name: 'follow-up-rooms/:id/upload',
          method: Method.PUT
        },
        {
          name: 'public-channels',
          method: Method.GET
        },
        {
          name: 'public-channels/:id',
          method: Method.GET
        },
        {
          name: 'public-channels',
          method: Method.POST
        },
        {
          name: 'public-channels/:id',
          method: Method.PUT
        },
        {
          name: 'public-channels/:id',
          method: Method.DELETE
        },
        {
          name: 'public-channels/:id/admin',
          method: Method.PUT
        },
        {
          name: 'public-channels/:id/admin',
          method: Method.DELETE
        },
        {
          name: 'public-channels/:id/subscribe',
          method: Method.PUT
        },
        {
          name: 'public-channels/:id/unsubscribe',
          method: Method.PUT
        },
        {
          name: 'public-channels/:id/messages',
          method: Method.GET
        },
        {
          name: 'public-channels/:id/messages',
          method: Method.POST
        },
        {
          name: 'public-channels/:id/messages/:message_id',
          method: Method.DELETE
        },
        {
          name: 'public-channels/:id/messages/:message_id/admin',
          method: Method.DELETE
        },
        {
          name: 'public-channels/:id/documents',
          method: Method.GET
        },
        {
          name: 'public-channels/:id/links',
          method: Method.GET
        },
        {
          name: 'public-channels/:id/upload',
          method: Method.PUT
        },
        {
          name: 'wall-posts',
          method: Method.GET
        },
        {
          name: 'wall-posts/:id',
          method: Method.GET
        },
        {
          name: 'wall-posts',
          method: Method.POST
        },
        {
          name: 'wall-posts/upload',
          method: Method.POST
        },
        {
          name: 'wall-posts/:id',
          method: Method.PUT
        },
        {
          name: 'wall-posts/:id',
          method: Method.DELETE
        },
        {
          name: 'wall-posts/:id/admin',
          method: Method.PUT
        },
        {
          name: 'wall-posts/:id/admin',
          method: Method.DELETE
        },
        {
          name: 'wall-posts/:id/like',
          method: Method.PUT
        },
        {
          name: 'wall-posts/:id/unlike',
          method: Method.PUT
        },
        {
          name: 'wall-posts/:id/comments',
          method: Method.POST
        },
        {
          name: 'wall-posts/:id/comments/:comment_id/like',
          method: Method.PUT
        },
        {
          name: 'wall-posts/:id/comments/:comment_id/unlike',
          method: Method.PUT
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
          name: 'actors/by/name-and-state',
          method: Method.GET
        },
        {
          name: 'actors/by/types',
          method: Method.GET
        },
        {
          name: 'actors/by/state',
          method: Method.GET
        },
        {
          name: 'actors/by/member',
          method: Method.GET
        },
        {
          name: 'actors/:id',
          method: Method.GET
        },
        {
          name: 'actors',
          method: Method.POST
        },
        {
          name: 'actors/:id',
          method: Method.PUT
        },
        {
          name: 'actors/:id/accept',
          method: Method.PUT
        },
        {
          name: 'actors/:id/reject',
          method: Method.PUT
        },
        {
          name: 'actors/:id',
          method: Method.DELETE
        },
        {
          name: 'actors/upload/original',
          method: Method.POST
        },
        {
          name: 'actors/upload/thumbnail',
          method: Method.POST
        },
        {
          name: 'actors/:id/upload/media',
          method: Method.PUT
        },
        {
          name: 'members/fcm-token',
          method: Method.PUT
        },
        {
          name: 'members/logged-in',
          method: Method.GET
        },
        {
          name: 'members',
          method: Method.GET
        },
        {
          name: 'members/:id',
          method: Method.GET
        },
        {
          name: 'members/:id/marker',
          method: Method.GET
        },
        {
          name: 'members/upload/original',
          method: Method.POST
        },
        {
          name: 'members/upload/thumbnail',
          method: Method.POST
        },
        {
          name: 'members/:id',
          method: Method.PUT
        },
        {
          name: 'members/:id',
          method: Method.DELETE
        },
        {
          name: 'members/education',
          method:Method.POST
        },
        {
          name: 'members/education/:education_id',
          method: Method.PUT
        },
        {
          name: 'members/education/:education_id',
          method: Method.DELETE
        },
        {
          name: 'members/experience',
          method: Method.POST
        },
        {
          name: 'members/experience/:experience_id',
          method: Method.PUT
        },
        {
          name: 'members/experience/:experience_id',
          method: Method.DELETE
        },
        {
          name: 'projects/by/actor',
          method: Method.GET
        },
        {
          name: 'projects/:id',
          method: Method.GET
        },
        {
          name: 'projects',
          method: Method.POST
        },
        {
          name: 'projects/:id',
          method: Method.PUT
        },
        {
          name: 'projects/:id',
          method: Method.DELETE
        },
        {
          name: "projects/:id/upload/media",
          method: Method.PUT
        }
      ],
      description: 'This is Community API. ' +
        'This API collects all the endpoints related to the Community module. ' +
        'In this api you will find the following endpoints:\n' +
        '- All events (online events and face to face events) acquisition, creation and modification endpoints.\n' +
        '- All rooms (follow up rooms, direct chats and public channel) acquisition, creation and modification endpoints\n' +
        '- All wall post acquisition, creation and modification endpoints\n' +
        '- All actors acquisition, creation and modification endpoints\n' +
        '- All members acquisition, creation and modification endpoints\n' +
        '- All projects acquisition, creation and modification endpoints\n' +
        '- All ecosystem settings acquisition, creation and modification endpoints\n',
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
      description: "This is Datahub API. This api collects all the endpoints related to the management of events. " +
        "In this api you will find the following endpoints:\n" +
        "- All events (Moonshot events) creation endpoints.\n",
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
