import {Event} from '../../app/model/Event';
import {Entity} from '../../app/model/Entity';
import {ObjectType} from '../../app/model/ObjectType';


export class EventsTemplate {

  public static OnlineEventCreateEvent: Event = {
    name: "ONLINE_EVENT_CREATE_EVENT",
    schema: {
      "title": ObjectType.STRING,
      "timestamp": ObjectType.NUMBER,
      "description": ObjectType.STRING,
      "imageUrl": ObjectType.STRING,
      "url": ObjectType.STRING
    },
    example: {
      "title": "Event to improve our programming skills",
      "timestamp": 1554477388,
      "description": "Workshop given by a java expert to learn about good programming practices",
      "imageUrl": "https://i.ytimg.com/vi/2nucjefSr6I/maxresdefault.jpg",
      "url": "https://www.microsoft.com/es-es/microsoft-teams/log-in"
    },
    entity: Entity.ONLINE_EVENT
  }

  public static OnlineEventUpdateEvent: Event = {
    name: "ONLINE_EVENT_UPDATE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "title": ObjectType.STRING,
      "timestamp": ObjectType.NUMBER,
      "description": ObjectType.STRING,
      "imageUrl": ObjectType.STRING,
      "url": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "title": "Event to improve our programming skills",
      "timestamp": 1554477388,
      "description": "Workshop given by a java expert to learn about good programming practices",
      "imageUrl": "https://i.ytimg.com/vi/2nucjefSr6I/maxresdefault.jpg",
      "url": "https://www.microsoft.com/es-es/microsoft-teams/log-in"
    },
    entity: Entity.ONLINE_EVENT
  }

  public static OnlineEventSubscriptionEvent: Event = {
    name: "ONLINE_EVENT_SUBSCRIPTION_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "participants": ObjectType.MEMBER_ARRAY
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "participants": [
        {
          "id": "61445159784bca6ef764c6df",
          "state": "ACCEPTED",
          "name": "Carlos",
          "lastname": "Guarin",
          "address": {
            "lat": 20.3,
            "lng": 14.2,
            "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
            "components": [
              {
                "name": "California",
                "shortname": "CA",
                "type": "ADMINISTRATIVE_AREA_LEVEL_1"
              }
            ]
          },
          "email": "pruebaemail@gmail.com",
          "about": "Developer",
          "image": {
            "original": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
            "thumbnail": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
            "crop": {
              "x": 100,
              "y": 20,
              "width": 1750,
              "height": 500
            }
          },
          "socialNetworks": [
            "https://www.instagram.com/user1, https://www.twitter.com/user1, https://www.linkedln.com/user1"
          ],
          "experiences": [
            {
              "id": "61445159784bca6ef764c6df",
              "title": "University practices",
              "company": "Moonshot Innovation",
              "location": {
                "lat": 20.3,
                "lng": 14.2,
                "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
                "components": [
                  {
                    "name": "California",
                    "shortname": "CA",
                    "type": "ADMINISTRATIVE_AREA_LEVEL_1"
                  }
                ]
              },
              "startDate": {},
              "endDate": {},
              "description": "I did front end development work"
            }
          ],
          "educations": [
            {
              "id": "61445159784bca6ef764c6df",
              "school": "Universidad de Navarra",
              "degree": "Licenciado en Periodismo",
              "fieldOfStudy": "Periodismo radiofónico",
              "startDate": {},
              "endDate": {},
              "grade": 8.5,
              "activitiesAndSocieties": "Equipo de rugby universitario",
              "description": "Cuatro años en la universidad de Navarra desarrollandome como periodista, incrementando mis capacidades comunicativas"
            }
          ]
        }
      ]
    },
    entity: Entity.ONLINE_EVENT
  }

  public static OnlineEventUnsubscriptionEvent: Event = {
    name: "ONLINE_EVENT_UNSUBSCRIPTION_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "participants": ObjectType.MEMBER_ARRAY
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "participants": [
        {
          "id": "61445159784bca6ef764c6df",
          "state": "ACCEPTED",
          "name": "Carlos",
          "lastname": "Guarin",
          "address": {
            "lat": 20.3,
            "lng": 14.2,
            "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
            "components": [
              {
                "name": "California",
                "shortname": "CA",
                "type": "ADMINISTRATIVE_AREA_LEVEL_1"
              }
            ]
          },
          "email": "pruebaemail@gmail.com",
          "about": "Developer",
          "image": {
            "original": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
            "thumbnail": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
            "crop": {
              "x": 100,
              "y": 20,
              "width": 1750,
              "height": 500
            }
          },
          "socialNetworks": [
            "https://www.instagram.com/user1, https://www.twitter.com/user1, https://www.linkedln.com/user1"
          ],
          "experiences": [
            {
              "id": "61445159784bca6ef764c6df",
              "title": "University practices",
              "company": "Moonshot Innovation",
              "location": {
                "lat": 20.3,
                "lng": 14.2,
                "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
                "components": [
                  {
                    "name": "California",
                    "shortname": "CA",
                    "type": "ADMINISTRATIVE_AREA_LEVEL_1"
                  }
                ]
              },
              "startDate": {},
              "endDate": {},
              "description": "I did front end development work"
            }
          ],
          "educations": [
            {
              "id": "61445159784bca6ef764c6df",
              "school": "Universidad de Navarra",
              "degree": "Licenciado en Periodismo",
              "fieldOfStudy": "Periodismo radiofónico",
              "startDate": {},
              "endDate": {},
              "grade": 8.5,
              "activitiesAndSocieties": "Equipo de rugby universitario",
              "description": "Cuatro años en la universidad de Navarra desarrollandome como periodista, incrementando mis capacidades comunicativas"
            }
          ]
        }
      ]
    },
    entity: Entity.ONLINE_EVENT
  }

  public static OnlineEventDeleteEvent: Event = {
    name: "ONLINE_EVENT_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.ONLINE_EVENT
  }

  public static FaceToFaceEventCreateEvent: Event = {
    name: "FACE_TO_FACE_EVENT_CREATE_EVENT",
    schema: {
      "title": ObjectType.STRING,
      "timestamp": ObjectType.NUMBER,
      "description": ObjectType.STRING,
      "imageUrl": ObjectType.STRING,
      "direction": ObjectType.STRING
    },
    example: {
      "title": "Event to improve our programming skills",
      "timestamp": 1554477388,
      "description": "Workshop given by a java expert to learn about good programming practices",
      "imageUrl": "https://i.ytimg.com/vi/2nucjefSr6I/maxresdefault.jpg",
      "direction": "c/Alcala de Heranez, 17"
    },
    entity: Entity.FACE_TO_FACE_EVENT
  }

  public static FaceToFaceEventUpdateEvent: Event = {
    name: "FACE_TO_FACE_EVENT_UPDATE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "title": ObjectType.STRING,
      "timestamp": ObjectType.NUMBER,
      "description": ObjectType.STRING,
      "imageUrl": ObjectType.STRING,
      "direction": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "title": "Event to improve our programming skills",
      "timestamp": 1554477388,
      "description": "Workshop given by a java expert to learn about good programming practices",
      "imageUrl": "https://i.ytimg.com/vi/2nucjefSr6I/maxresdefault.jpg",
      "direction": "c/Alcala de Heranez, 17"
    },
    entity: Entity.FACE_TO_FACE_EVENT
  }

  public static FaceToFaceEventSubscriptionEvent: Event = {
    name: "FACE_TO_FACE_EVENT_SUBSCRIPTION_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "participants": ObjectType.MEMBER_ARRAY
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "participants": [
        {
          "id": "61445159784bca6ef764c6df",
          "state": "ACCEPTED",
          "name": "Carlos",
          "lastname": "Guarin",
          "address": {
            "lat": 20.3,
            "lng": 14.2,
            "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
            "components": [
              {
                "name": "California",
                "shortname": "CA",
                "type": "ADMINISTRATIVE_AREA_LEVEL_1"
              }
            ]
          },
          "email": "pruebaemail@gmail.com",
          "about": "Developer",
          "image": {
            "original": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
            "thumbnail": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
            "crop": {
              "x": 100,
              "y": 20,
              "width": 1750,
              "height": 500
            }
          },
          "socialNetworks": [
            "https://www.instagram.com/user1, https://www.twitter.com/user1, https://www.linkedln.com/user1"
          ],
          "experiences": [
            {
              "id": "61445159784bca6ef764c6df",
              "title": "University practices",
              "company": "Moonshot Innovation",
              "location": {
                "lat": 20.3,
                "lng": 14.2,
                "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
                "components": [
                  {
                    "name": "California",
                    "shortname": "CA",
                    "type": "ADMINISTRATIVE_AREA_LEVEL_1"
                  }
                ]
              },
              "startDate": {},
              "endDate": {},
              "description": "I did front end development work"
            }
          ],
          "educations": [
            {
              "id": "61445159784bca6ef764c6df",
              "school": "Universidad de Navarra",
              "degree": "Licenciado en Periodismo",
              "fieldOfStudy": "Periodismo radiofónico",
              "startDate": {},
              "endDate": {},
              "grade": 8.5,
              "activitiesAndSocieties": "Equipo de rugby universitario",
              "description": "Cuatro años en la universidad de Navarra desarrollandome como periodista, incrementando mis capacidades comunicativas"
            }
          ]
        }
      ]
    },
    entity: Entity.FACE_TO_FACE_EVENT
  }

  public static FaceToFaceEventUnsubscriptionEvent: Event = {
    name: "FACE_TO_FACE_EVENT_UNSUBSCRIPTION_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "participants": ObjectType.MEMBER_ARRAY
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "participants": [
        {
          "id": "61445159784bca6ef764c6df",
          "state": "ACCEPTED",
          "name": "Carlos",
          "lastname": "Guarin",
          "address": {
            "lat": 20.3,
            "lng": 14.2,
            "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
            "components": [
              {
                "name": "California",
                "shortname": "CA",
                "type": "ADMINISTRATIVE_AREA_LEVEL_1"
              }
            ]
          },
          "email": "pruebaemail@gmail.com",
          "about": "Developer",
          "image": {
            "original": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
            "thumbnail": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
            "crop": {
              "x": 100,
              "y": 20,
              "width": 1750,
              "height": 500
            }
          },
          "socialNetworks": [
            "https://www.instagram.com/user1, https://www.twitter.com/user1, https://www.linkedln.com/user1"
          ],
          "experiences": [
            {
              "id": "61445159784bca6ef764c6df",
              "title": "University practices",
              "company": "Moonshot Innovation",
              "location": {
                "lat": 20.3,
                "lng": 14.2,
                "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
                "components": [
                  {
                    "name": "California",
                    "shortname": "CA",
                    "type": "ADMINISTRATIVE_AREA_LEVEL_1"
                  }
                ]
              },
              "startDate": {},
              "endDate": {},
              "description": "I did front end development work"
            }
          ],
          "educations": [
            {
              "id": "61445159784bca6ef764c6df",
              "school": "Universidad de Navarra",
              "degree": "Licenciado en Periodismo",
              "fieldOfStudy": "Periodismo radiofónico",
              "startDate": {},
              "endDate": {},
              "grade": 8.5,
              "activitiesAndSocieties": "Equipo de rugby universitario",
              "description": "Cuatro años en la universidad de Navarra desarrollandome como periodista, incrementando mis capacidades comunicativas"
            }
          ]
        }
      ]
    },
    entity: Entity.FACE_TO_FACE_EVENT
  }

  public static FaceToFaceEventDeleteEvent: Event = {
    name: "FACE_TO_FACE_EVENT_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.FACE_TO_FACE_EVENT
  }

  public static DirectChatCreateEvent: Event = {
    name: "DIRECT_CHAT_CREATE_EVENT",
    schema: {
      "participants": ObjectType.PARTICIPANT_ARRAY,
      "actions": ObjectType.ACTION_ARRAY,
      "meetStarted": ObjectType.BOOLEAN
    },
    example: {
      "participants": [
        {
          "memberId": "60acae8e2f799d228a4d4a85",
          "state": "ACTIVE"
        }
      ],
      "actions": [
        {
          "name": "Submission Form",
          "url": "dev.moonshot.com"
        }
      ],
      "meetStarted": true
    },
    entity: Entity.DIRECT_CHAT
  }

  public static DirectChatDeleteEvent: Event = {
    name: "DIRECT_CHAT_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.DIRECT_CHAT
  }

  public static DirectChatMessageAddEvent: Event = {
    name: "DIRECT_CHAT_MESSAGE_ADD_EVENT",
    schema: {
      "roomId": ObjectType.STRING,
      "content": ObjectType.STRING,
      "type": ObjectType.MESSAGE_TYPE,
      "module": ObjectType.MODULE,
      "documents": ObjectType.DOCUMENT_ARRAY
    },
    example: {
      "roomId": "60acae8e2f799d228a4d4a85",
      "content": "Hello world",
      "type": "MEMBER_MESSAGE",
      "module": "community",
      "documents": [
        {
          "link": "https://docs.google.com/viewerng/vi54473784a6a2.xlsx",
          "category": "PDF",
          "filename": "document1"
        }
      ]
    },
    entity: Entity.DIRECT_CHAT
  }

  public static DirectChatMessageDeleteEvent: Event = {
    name: "DIRECT_CHAT_MESSAGE_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.DIRECT_CHAT
  }

  public static FollowUpRoomCreateEvent: Event = {
    name: "FOLLOW_UP_ROOM_CREATE_EVENT",
    schema: {
      "participants": ObjectType.PARTICIPANT_ARRAY,
      "actions": ObjectType.ACTION_ARRAY,
      "title": ObjectType.STRING,
      "description": ObjectType.STRING,
      "state": ObjectType.ROOM_STATE,
      "meetStarted": ObjectType.BOOLEAN
    },
    example: {
      "participants": [
        {
          "memberId": "60acae8e2f799d228a4d4a85",
          "state": "ACTIVE"
        }
      ],
      "actions": [
        {
          "name": "Submission Form",
          "url": "dev.moonshot.com"
        }
      ],
      "title": "Follow up room example",
      "description": "We want to test the operation of the room",
      "state": "OPEN",
      "meetStarted": false
    },
    entity: Entity.FOLLOW_UP_ROOM
  }

  public static FollowUpRoomUpdateEvent: Event = {
    name: "FOLLOW_UP_ROOM_UPDATE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "participants": ObjectType.PARTICIPANT_ARRAY,
      "actions": ObjectType.ACTION_ARRAY,
      "title": ObjectType.STRING,
      "description": ObjectType.STRING,
      "state": ObjectType.ROOM_STATE,
      "meetStarted": ObjectType.BOOLEAN
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "participants": [
        {
          "memberId": "60acae8e2f799d228a4d4a85",
          "state": "ACTIVE"
        }
      ],
      "actions": [
        {
          "name": "Submission Form",
          "url": "dev.moonshot.com"
        }
      ],
      "title": "Follow up room example",
      "description": "We want to test the operation of the room",
      "meetStarted": true
    },
    entity: Entity.FOLLOW_UP_ROOM
  }

  public static FollowUpRoomAddMemberEvent: Event = {
    name: "FOLLOW_UP_ROOM_ADD_MEMBER_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "memberIds": ObjectType.STRING_ARRAY
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "memberIds": [
        "60acae8e2f799d228a4d4a85"
      ]
    },
    entity: Entity.FOLLOW_UP_ROOM
  }

  public static FollowUpRoomLeaveMemberEvent: Event = {
    name: "FOLLOW_UP_ROOM_LEAVE_MEMBER_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "leaveMemberIds": ObjectType.STRING_ARRAY,
      "newOwnerMemberId": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "leaveMemberIds": [
        "60acae8e2f799d228a4d4a85"
      ],
      "newOwnerMemberId": "60acae8e2f799d228a4d4a85"
    },
    entity: Entity.FOLLOW_UP_ROOM
  }

  public static FollowUpRoomCloseEvent: Event = {
    name: "FOLLOW_UP_ROOM_CLOSE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85"
    },
    entity: Entity.FOLLOW_UP_ROOM
  }

  public static FollowUpRoomOpenEvent: Event = {
    name: "FOLLOW_UP_ROOM_OPEN_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85"
    },
    entity: Entity.FOLLOW_UP_ROOM
  }

  public static FollowUpRoomDeleteEvent: Event = {
    name: "FOLLOW_UP_ROOM_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.FOLLOW_UP_ROOM
  }

  public static FollowUpRoomMessageAddEvent: Event = {
    name: "FOLLOW_UP_ROOM_MESSAGE_ADD_EVENT",
    schema: {
      "roomId": ObjectType.STRING,
      "content": ObjectType.STRING,
      "type": ObjectType.MESSAGE_TYPE,
      "module": ObjectType.MODULE,
      "documents": ObjectType.DOCUMENT_ARRAY
    },
    example: {
      "roomId": "60acae8e2f799d228a4d4a85",
      "content": "Hello world",
      "type": "MEMBER_MESSAGE",
      "module": "community",
      "documents": [
        {
          "link": "https://docs.google.com/viewerng/vi54473784a6a2.xlsx",
          "category": "PDF",
          "filename": "document1"
        }
      ]
    },
    entity: Entity.FOLLOW_UP_ROOM
  }

  public static FollowUpRoomMessageDeleteEvent: Event = {
    name: "FOLLOW_UP_ROOM_MESSAGE_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.FOLLOW_UP_ROOM
  }

  public static PublicChannelCreateEvent: Event = {
    name: "PUBLIC_CHANNEL_CREATE_EVENT",
    schema: {
      "participants": ObjectType.PARTICIPANT_ARRAY,
      "actions": ObjectType.ACTION_ARRAY,
      "title": ObjectType.STRING,
      "description": ObjectType.STRING,
      "meetStarted": ObjectType.BOOLEAN
    },
    example: {
      "participants": [
        {
          "memberId": "60acae8e2f799d228a4d4a85",
          "state": "ACTIVE"
        }
      ],
      "actions": [
        {
          "name": "Submission Form",
          "url": "dev.moonshot.com"
        }
      ],
      "title": "Follow up room example",
      "description": "We want to test the operation of the room",
      "meetStarted": false
    },
    entity: Entity.PUBLIC_CHANNEL
  }

  public static PublicChannelUpdateEvent: Event = {
    name: "PUBLIC_CHANNEL_UPDATE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "ownerMemberId": ObjectType.STRING,
      "participants": ObjectType.PARTICIPANT_ARRAY,
      "actions": ObjectType.ACTION_ARRAY,
      "title": ObjectType.STRING,
      "description": ObjectType.STRING,
      "meetStarted": ObjectType.BOOLEAN
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "ownerMemberId": "60acae8e2f799d228a4d4a85",
      "participants": [
        {
          "memberId": "60acae8e2f799d228a4d4a85",
          "state": "ACTIVE"
        }
      ],
      "actions": [
        {
          "name": "Submission Form",
          "url": "dev.moonshot.com"
        }
      ],
      "title": "Follow up room example",
      "description": "We want to test the operation of the room",
      "meetStarted": true
    },
    entity: Entity.PUBLIC_CHANNEL
  }

  public static PublicChannelDeleteEvent: Event = {
    name: "PUBLIC_CHANNEL_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.PUBLIC_CHANNEL
  }

  public static PublicChannelSubscribeEvent: Event = {
    name: "PUBLIC_CHANNEL_SUBSCRIBE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "memberId": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "memberId": "60acae8e2f799d228a4d4a85"
    },
    entity: Entity.PUBLIC_CHANNEL
  }

  public static PublicChannelUnsubscribeEvent: Event = {
    name: "PUBLIC_CHANNEL_UNSUBSCRIBE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "memberId": ObjectType.STRING,
      "newOwnerMemberId": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "memberId": "60acae8e2f799d228a4d4a85"
    },
    entity: Entity.PUBLIC_CHANNEL
  }

  public static PublicChannelMessageAddEvent: Event = {
    name: "PUBLIC_CHANNEL_MESSAGE_ADD_EVENT",
    schema: {
      "roomId": ObjectType.STRING,
      "content": ObjectType.STRING,
      "type": ObjectType.MESSAGE_TYPE,
      "module": ObjectType.MODULE,
      "documents": ObjectType.DOCUMENT_ARRAY
    },
    example: {
      "roomId": "60acae8e2f799d228a4d4a85",
      "content": "Hello world",
      "type": "MEMBER_MESSAGE",
      "module": "community",
      "documents": [
        {
          "link": "https://docs.google.com/viewerng/vi54473784a6a2.xlsx",
          "category": "PDF",
          "filename": "document1"
        }
      ]
    },
    entity: Entity.PUBLIC_CHANNEL
  }

  public static PublicChannelMessageDeleteEvent: Event = {
    name: "PUBLIC_CHANNEL_MESSAGE_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.PUBLIC_CHANNEL
  }

  public static WallPostCreateEvent: Event = {
    name: "WALL_POST_CREATE_EVENT",
    schema: {
      "content": ObjectType.STRING,
      "attachments": ObjectType.ATTACHMENT,
      "comments": ObjectType.COMMENT_ARRAY,
      "likes": ObjectType.STRING_ARRAY,
      "createdAt": ObjectType.NUMBER
    },
    example: {
      "content": "First wall post in this ecoystem",
      "attachments": [
        {
          "link": "https://docs.google.com/viewerng/vi54473784a6a2.xlsx",
          "documentCategory": "PDF"
        }
      ],
      "comments": [
        {
          "content": "First comment",
          "authorMember": {
            "id": "61445159784bca6ef764c6df",
            "state": "ACCEPTED",
            "name": "Carlos",
            "lastname": "Guarin",
            "address": {
              "lat": 20.3,
              "lng": 14.2,
              "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
              "components": [
                {
                  "name": "California",
                  "shortname": "CA",
                  "type": "ADMINISTRATIVE_AREA_LEVEL_1"
                }
              ]
            },
            "email": "pruebaemail@gmail.com",
            "about": "Developer",
            "image": {
              "original": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
              "thumbnail": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
              "crop": {
                "x": 100,
                "y": 20,
                "width": 1750,
                "height": 500
              }
            },
            "socialNetworks": [
              "https://www.instagram.com/user1, https://www.twitter.com/user1, https://www.linkedln.com/user1"
            ],
            "experiences": [
              {
                "id": "61445159784bca6ef764c6df",
                "title": "University practices",
                "company": "Moonshot Innovation",
                "location": {
                  "lat": 20.3,
                  "lng": 14.2,
                  "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
                  "components": [
                    {
                      "name": "California",
                      "shortname": "CA",
                      "type": "ADMINISTRATIVE_AREA_LEVEL_1"
                    }
                  ]
                },
                "startDate": "2020-07-30T00:00:00.000Z",
                "endDate": "2021-05-14T00:00:00.000Z",
                "description": "I did front end development work"
              }
            ],
            "educations": [
              {
                "id": "61445159784bca6ef764c6df",
                "school": "Universidad de Navarra",
                "degree": "Licenciado en Periodismo",
                "fieldOfStudy": "Periodismo radiofónico",
                "startDate": "2020-07-30T00:00:00.000Z",
                "endDate": "2021-05-14T00:00:00.000Z",
                "grade": 8.5,
                "activitiesAndSocieties": "Equipo de rugby universitario",
                "description": "Cuatro años en la universidad de Navarra desarrollandome como periodista, incrementando mis capacidades comunicativas"
              }
            ]
          },
          "likes": [
            "60acae8e2f799d228a4d4a85"
          ]
        }
      ],
      "likes": [
        "60acae8e2f799d228a4d4a85"
      ],
      "createdAt": 1624520984602
    },
    entity: Entity.WALL_POST
  }

  public static WallPostUpdateEvent: Event = {
    name: "WALL_POST_UPDATE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "content": ObjectType.STRING,
      "attachments": ObjectType.ATTACHMENT
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "content": "First wall post in this ecoystem",
      "attachments": [
        {
          "link": "https://docs.google.com/viewerng/vi54473784a6a2.xlsx",
          "documentCategory": "PDF"
        }
      ]
    },
    entity: Entity.WALL_POST
  }

  public static WallPostDeleteEvent: Event = {
    name: "WALL_POST_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.WALL_POST
  }

  public static WallPostLikeEvent: Event = {
    name: "WALL_POST_LIKE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85"
    },
    entity: Entity.WALL_POST
  }

  public static WallPostUnlikeEvent: Event = {
    name: "WALL_POST_UNLIKE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85"
    },
    entity: Entity.WALL_POST
  }

  public static WallPostCommentAddEvent: Event = {
    name: "WALL_POST_COMMENT_ADD_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "comment": ObjectType.COMMENT
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "comment": {
        "content": "First comment",
        "authorMember": {
          "id": "61445159784bca6ef764c6df",
          "state": "ACCEPTED",
          "name": "Carlos",
          "lastname": "Guarin",
          "address": {
            "lat": 20.3,
            "lng": 14.2,
            "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
            "components": [
              {
                "name": "California",
                "shortname": "CA",
                "type": "ADMINISTRATIVE_AREA_LEVEL_1"
              }
            ]
          },
          "email": "pruebaemail@gmail.com",
          "about": "Developer",
          "image": {
            "original": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
            "thumbnail": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
            "crop": {
              "x": 100,
              "y": 20,
              "width": 1750,
              "height": 500
            }
          },
          "socialNetworks": [
            "https://www.instagram.com/user1, https://www.twitter.com/user1, https://www.linkedln.com/user1"
          ],
          "experiences": [
            {
              "id": "61445159784bca6ef764c6df",
              "title": "University practices",
              "company": "Moonshot Innovation",
              "location": {
                "lat": 20.3,
                "lng": 14.2,
                "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
                "components": [
                  {
                    "name": "California",
                    "shortname": "CA",
                    "type": "ADMINISTRATIVE_AREA_LEVEL_1"
                  }
                ]
              },
              "startDate": "2020-07-30T00:00:00.000Z",
              "endDate": "2021-05-14T00:00:00.000Z",
              "description": "I did front end development work"
            }
          ],
          "educations": [
            {
              "id": "61445159784bca6ef764c6df",
              "school": "Universidad de Navarra",
              "degree": "Licenciado en Periodismo",
              "fieldOfStudy": "Periodismo radiofónico",
              "startDate": "2020-07-30T00:00:00.000Z",
              "endDate": "2021-05-14T00:00:00.000Z",
              "grade": 8.5,
              "activitiesAndSocieties": "Equipo de rugby universitario",
              "description": "Cuatro años en la universidad de Navarra desarrollandome como periodista, incrementando mis capacidades comunicativas"
            }
          ]
        },
        "likes": [
          "60acae8e2f799d228a4d4a85"
        ]
      }
    },
    entity: Entity.WALL_POST
  }

  public static WallPostCommentLikeEvent: Event = {
    name: "WALL_POST_COMMENT_LIKE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "memberId": ObjectType.STRING,
      "commentId": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "memberId": "60acae8e2f799d228a4d4a85",
      "commentId": "60acae8e2f799d228a4d4a85"
    },
    entity: Entity.WALL_POST
  }

  public static WallPostCommentUnlikeEvent: Event = {
    name: "WALL_POST_COMMENT_UNLIKE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "memberId": ObjectType.STRING,
      "commentId": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "memberId": "60acae8e2f799d228a4d4a85",
      "commentId": "60acae8e2f799d228a4d4a85"
    },
    entity: Entity.WALL_POST
  }

  public static ActorCreateEvent: Event = {
    name: "ACTOR_CREATE_EVENT",
    schema: {
      "type": ObjectType.ACTOR_TYPE,
      "state": ObjectType.ACTOR_STATE,
      "ownerMember": ObjectType.MEMBER,
      "name": ObjectType.STRING,
      "city": ObjectType.STRING,
      "country": ObjectType.STRING,
      "address": ObjectType.STRING,
      "latitude": ObjectType.NUMBER,
      "longitude": ObjectType.NUMBER,
      "description": ObjectType.STRING,
      "phone": ObjectType.STRING,
      "web": ObjectType.STRING,
      "image": ObjectType.IMAGE,
      "myFacet": ObjectType.FACET,
      "questFacet": ObjectType.FACET,
      "investment": ObjectType.INVESTMENT,
      "financial": ObjectType.FINANCIAL,
      "socialNetworks": ObjectType.STRING_ARRAY,
      "media": ObjectType.STRING_ARRAY
    },
    example: {
      "type": "STARTUP",
      "state": "ACCEPTED",
      "ownerMember": {
        "state": "ACCEPTED",
        "name": "Carlos",
        "lastname": "Guarin",
        "address": {
          "lat": 20.3,
          "lng": 14.2,
          "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
          "components": [
            {
              "name": "California",
              "shortname": "CA",
              "type": "ADMINISTRATIVE_AREA_LEVEL_1"
            }
          ]
        },
        "email": "pruebaemail@gmail.com",
        "about": "Developer",
        "image": {
          "original": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
          "thumbnail": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
          "crop": {
            "x": 100,
            "y": 20,
            "width": 1750,
            "height": 500
          }
        },
        "socialNetworks": [
          "https://www.instagram.com/user1, https://www.twitter.com/user1, https://www.linkedln.com/user1"
        ],
        "experiences": [
          {
            "id": "61445159784bca6ef764c6df",
            "title": "University practices",
            "company": "Moonshot Innovation",
            "location": {
              "lat": 20.3,
              "lng": 14.2,
              "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
              "components": [
                {
                  "name": "California",
                  "shortname": "CA",
                  "type": "ADMINISTRATIVE_AREA_LEVEL_1"
                }
              ]
            },
            "startDate": "2020-07-30T00:00:00.000Z",
            "endDate": "2021-05-14T00:00:00.000Z",
            "description": "I did front end development work"
          }
        ],
        "educations": [
          {
            "id": "61445159784bca6ef764c6df",
            "school": "Universidad de Navarra",
            "degree": "Licenciado en Periodismo",
            "fieldOfStudy": "Periodismo radiofónico",
            "startDate": "2020-07-30T00:00:00.000Z",
            "endDate": "2021-05-14T00:00:00.000Z",
            "grade": 8.5,
            "activitiesAndSocieties": "Equipo de rugby universitario",
            "description": "Cuatro años en la universidad de Navarra desarrollandome como periodista, incrementando mis capacidades comunicativas"
          }
        ]
      },
      "name": "Actor1",
      "city": "Madrid",
      "country": "Spain",
      "address": "Avenida niza, 55, Madrid",
      "latitude": 10.6,
      "longitude": 50.3,
      "description": "This is a example",
      "phone": "+34999999999",
      "web": "www.example.com",
      "image": {
        "original": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
        "thumbnail": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
        "crop": {
          "x": 100,
          "y": 20,
          "width": 1750,
          "height": 500
        }
      },
      "myFacet": {
        "industries": [
          "ELECTRICAL_EQUIPMENT, MACHINERY_AND_EQUIPMENT"
        ],
        "businessModels": [
          "CONSUMER_PRODUCTS, ECOMMERCE"
        ],
        "socialInnovations": [
          "PEACE_AND_JUSTICE_STRONG_INSTITUTIONS, REDUCED_INEQUALITIES, CLIMATE_ACTION, GENDER_EQUALITY, NO_POVERTY"
        ],
        "deepTechs": [
          "SMART_DATA_DISCOVERY, CLOUD_COMPUTING"
        ]
      },
      "questFacet": {
        "industries": [
          "ELECTRICAL_EQUIPMENT, MACHINERY_AND_EQUIPMENT"
        ],
        "businessModels": [
          "CONSUMER_PRODUCTS, ECOMMERCE"
        ],
        "socialInnovations": [
          "PEACE_AND_JUSTICE_STRONG_INSTITUTIONS, REDUCED_INEQUALITIES, CLIMATE_ACTION, GENDER_EQUALITY, NO_POVERTY"
        ],
        "deepTechs": [
          "SMART_DATA_DISCOVERY, CLOUD_COMPUTING"
        ]
      },
      "investment": {
        "stage": "GOT_DECK",
        "stagesInvestments": "Late Stage",
        "numberPastExist": 2,
        "trlStage": "BASIC_PRINCIPLES_OBSERVED",
        "numberCurrentInvestments": 5,
        "countriesInteres": [
          "Unite States, Spain, France"
        ]
      },
      "financial": {
        "stage": "GOT_DECK",
        "seekedCapital": 790000,
        "trlStage": "BASIC_PRINCIPLES_OBSERVED",
        "raisedCapital": 30000,
        "totalFunding": 50000,
        "premoneyValuation": 38000,
        "fundingStage": "PRE_SEED",
        "lastFunding": "2019-04-01T00:00:00.000Z",
        "numberEmployees": 900,
        "currency": "USD"
      },
      "socialNetworks": [
        "www.instagram.com/actor1"
      ],
      "media": [
        "www.vimeo.com/actor1"
      ]
    },
    entity: Entity.ACTOR
  }

  public static ActorUpdateEvent: Event = {
    name: "ACTOR_UPDATE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "type": ObjectType.ACTOR_TYPE,
      "name": ObjectType.STRING,
      "city": ObjectType.STRING,
      "country": ObjectType.STRING,
      "address": ObjectType.STRING,
      "latitude": ObjectType.NUMBER,
      "longitude": ObjectType.NUMBER,
      "description": ObjectType.STRING,
      "phone": ObjectType.STRING,
      "web": ObjectType.STRING,
      "image": ObjectType.IMAGE,
      "myFacet": ObjectType.FACET,
      "questFacet": ObjectType.FACET,
      "investment": ObjectType.INVESTMENT,
      "financial": ObjectType.FINANCIAL,
      "socialNetworks": ObjectType.STRING_ARRAY,
      "media": ObjectType.STRING_ARRAY
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "type": "STARTUP",
      "state": "ACCEPTED",
      "name": "Actor1",
      "city": "Madrid",
      "country": "Spain",
      "address": "Avenida niza, 55, Madrid",
      "latitude": 10.6,
      "longitude": 50.3,
      "description": "This is a example",
      "phone": "+34999999999",
      "web": "www.example.com",
      "image": {
        "original": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
        "thumbnail": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
        "crop": {
          "x": 100,
          "y": 20,
          "width": 1750,
          "height": 500
        }
      },
      "myFacet": {
        "industries": [
          "ELECTRICAL_EQUIPMENT, MACHINERY_AND_EQUIPMENT"
        ],
        "businessModels": [
          "CONSUMER_PRODUCTS, ECOMMERCE"
        ],
        "socialInnovations": [
          "PEACE_AND_JUSTICE_STRONG_INSTITUTIONS, REDUCED_INEQUALITIES, CLIMATE_ACTION, GENDER_EQUALITY, NO_POVERTY"
        ],
        "deepTechs": [
          "SMART_DATA_DISCOVERY, CLOUD_COMPUTING"
        ]
      },
      "questFacet": {
        "industries": [
          "ELECTRICAL_EQUIPMENT, MACHINERY_AND_EQUIPMENT"
        ],
        "businessModels": [
          "CONSUMER_PRODUCTS, ECOMMERCE"
        ],
        "socialInnovations": [
          "PEACE_AND_JUSTICE_STRONG_INSTITUTIONS, REDUCED_INEQUALITIES, CLIMATE_ACTION, GENDER_EQUALITY, NO_POVERTY"
        ],
        "deepTechs": [
          "SMART_DATA_DISCOVERY, CLOUD_COMPUTING"
        ]
      },
      "investment": {
        "stage": "GOT_DECK",
        "stagesInvestments": "Late Stage",
        "numberPastExist": 2,
        "trlStage": "BASIC_PRINCIPLES_OBSERVED",
        "numberCurrentInvestments": 5,
        "countriesInteres": [
          "Unite States, Spain, France"
        ]
      },
      "financial": {
        "stage": "GOT_DECK",
        "seekedCapital": 790000,
        "trlStage": "BASIC_PRINCIPLES_OBSERVED",
        "raisedCapital": 30000,
        "totalFunding": 50000,
        "premoneyValuation": 38000,
        "fundingStage": "PRE_SEED",
        "lastFunding": "2019-04-01T00:00:00.000Z",
        "numberEmployees": 900,
        "currency": "USD"
      },
      "socialNetworks": [
        "www.instagram.com/actor1"
      ],
      "media": [
        "www.vimeo.com/actor1"
      ]
    },
    entity: Entity.ACTOR
  }

  public static ActorDeleteEvent: Event = {
    name: "ACTOR_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.ACTOR
  }

  public static ActorAcceptEvent: Event = {
    name: "ACTOR_ACCEPT_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85"
    },
    entity: Entity.ACTOR
  }

  public static ActorRejectEvent: Event = {
    name: "ACTOR_REJECT_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85"
    },
    entity: Entity.ACTOR
  }

  public static MemberUpdateEvent: Event = {
    name: "MEMBER_UPDATE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "name": ObjectType.STRING,
      "lastname": ObjectType.STRING,
      "address": ObjectType.ADDRESS,
      "email": ObjectType.STRING,
      "about": ObjectType.STRING,
      "image": ObjectType.IMAGE,
      "socialNetworks": ObjectType.STRING_ARRAY
    },
    example: {
      "id": "61445159784bca6ef764c6df",
      "name": "Carlos",
      "lastname": "Guarin",
      "address": {
        "lat": 20.3,
        "lng": 14.2,
        "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
        "components": [
          {
            "name": "California",
            "shortname": "CA",
            "type": "ADMINISTRATIVE_AREA_LEVEL_1"
          }
        ]
      },
      "email": "pruebaemail@gmail.com",
      "about": "Developer",
      "image": {
        "original": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
        "thumbnail": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
        "crop": {
          "x": 100,
          "y": 20,
          "width": 1750,
          "height": 500
        }
      },
      "socialNetworks": [
        "https://www.instagram.com/user1, https://www.twitter.com/user1, https://www.linkedln.com/user1"
      ]
    },
    entity: Entity.MEMBER
  }

  public static MemberDeleteEvent: Event = {
    name: "MEMBER_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.MEMBER
  }

  public static MemberCreateEducationEvent: Event = {
    name: "MEMBER_CREATE_EDUCATION_EVENT",
    schema: {
      "school": ObjectType.STRING,
      "degree": ObjectType.STRING,
      "fieldOfStudy": ObjectType.STRING,
      "address": ObjectType.ADDRESS,
      "startDate": ObjectType.NUMBER,
      "endDate": ObjectType.NUMBER,
      "grade": ObjectType.NUMBER,
      "description": ObjectType.STRING
    },
    example: {
      "school": "Hardvard University",
      "degree": "Informatics Engineering",
      "fieldOfStudy": "Software Engineering",
      "address": {
        "lat": 20.3,
        "lng": 14.2,
        "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
        "components": [
          {
            "name": "California",
            "shortname": "CA",
            "type": "ADMINISTRATIVE_AREA_LEVEL_1"
          }
        ]
      },
      "startDate": 167999,
      "endDate": 167999,
      "grade": 8,
      "description": "Harvard University is a private institution that was founded in 1636"
    },
    entity: Entity.MEMBER
  }

  public static MemberUpdateEducationEvent: Event = {
    name: "MEMBER_UPDATE_EDUCATION_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "school": ObjectType.STRING,
      "degree": ObjectType.STRING,
      "fieldOfStudy": ObjectType.STRING,
      "address": ObjectType.ADDRESS,
      "startDate": ObjectType.NUMBER,
      "endDate": ObjectType.NUMBER,
      "grade": ObjectType.NUMBER,
      "description": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "school": "Hardvard University",
      "degree": "Informatics Engineering",
      "fieldOfStudy": "Software Engineering",
      "location": {
        "lat": 20.3,
        "lng": 14.2,
        "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
        "components": [
          {
            "name": "California",
            "shortname": "CA",
            "type": "ADMINISTRATIVE_AREA_LEVEL_1"
          }
        ]
      },
      "startDate": 167999,
      "endDate": 167999,
      "grade": 8,
      "description": "Harvard University is a private institution that was founded in 1636"
    },
    entity: Entity.MEMBER
  }

  public static MemberDeleteEducationEvent: Event = {
    name: "MEMBER_DELETE_EDUCATION_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.MEMBER
  }

  public static MemberCreateExperienceEvent: Event = {
    name: "MEMBER_CREATE_EXPERIENCE_EVENT",
    schema: {
      "title": ObjectType.STRING,
      "company": ObjectType.STRING,
      "address": ObjectType.ADDRESS,
      "startDate": ObjectType.NUMBER,
      "endDate": ObjectType.NUMBER,
      "description": ObjectType.STRING
    },
    example: {
      "title": "Back-end developer en Moonshot Innovation",
      "company": "Moonshot Innovation",
      "address": {
        "lat": 20.3,
        "lng": 14.2,
        "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
        "components": [
          {
            "name": "California",
            "shortname": "CA",
            "type": "ADMINISTRATIVE_AREA_LEVEL_1"
          }
        ]
      },
      "startDate": 167999,
      "endDate": 167999,
      "description": "Scrum manager in Moonshot Innovation"
    },
    entity: Entity.MEMBER
  }

  public static MemberUpdateExperienceEvent: Event = {
    name: "MEMBER_UPDATE_EXPERIENCE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "title": ObjectType.STRING,
      "company": ObjectType.STRING,
      "address": ObjectType.ADDRESS,
      "startDate": ObjectType.NUMBER,
      "endDate": ObjectType.NUMBER,
      "description": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "title": "Back-end developer en Moonshot Innovation",
      "company": "Moonshot Innovation",
      "address": {
        "lat": 20.3,
        "lng": 14.2,
        "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
        "components": [
          {
            "name": "California",
            "shortname": "CA",
            "type": "ADMINISTRATIVE_AREA_LEVEL_1"
          }
        ]
      },
      "startDate": "2021-03-01T00:00:00.000Z",
      "endDate": "2021-03-01T00:00:00.000Z",
      "description": "Scrum manager in Moonshot Innovation"
    },
    entity: Entity.MEMBER
  }

  public static MemberDeleteExperienceEvent: Event = {
    name: "MEMBER_DELETE_EXPERIENCE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.MEMBER
  }

  public static MemberSetFcmTokenEvent: Event = {
    name: "MEMBER_SET_FCM_TOKEN_EVENT",
    schema: {
      "memberId": ObjectType.STRING,
      "fcmTokens": ObjectType.FCM_TOKEN_ARRAY
    },
    example: {
      "memberId": "60acae8e2f799d228a4d4a85",
      "fcmTokens": [
        {
          "tokenId": "enMcvL2-3YDmhocf25g5Nk:APA91bEljU6wo1S7Bj",
          "device": "laptop/computer",
          "timestamp": 1639687246
        }
      ]
    },
    entity: Entity.MEMBER
  }

  public static ProjectCreateEvent: Event = {
    name: "PROJECT_CREATE_EVENT",
    schema: {
      "actorId": ObjectType.STRING,
      "name": ObjectType.STRING,
      "description": ObjectType.STRING,
      "trlStage": ObjectType.TRL_STAGE,
      "media": ObjectType.STRING_ARRAY,
      "protectionMethod": ObjectType.PROJECTION_METHOD,
      "projectManagerId": ObjectType.STRING,
      "teamMembersIds": ObjectType.STRING_ARRAY,
      "socialNetworks": ObjectType.STRING_ARRAY,
      "deepTechs": ObjectType.STRING_ARRAY,
      "businessModels": ObjectType.STRING_ARRAY,
      "industries": ObjectType.STRING_ARRAY,
      "socialInnovations": ObjectType.STRING_ARRAY
    },
    example: {
      "actorId": "60acae8e2f799d228a4d4a85",
      "name": null,
      "description": null,
      "trlStage": "BASIC_PRINCIPLES_OBSERVED",
      "media": [
        "www.vimeo.com/actor1"
      ],
      "protectionMethod": "PATENTS",
      "projectManagerId": "60acae8e2f799d228a4d4a85",
      "teamMembersIds": [
        "60acae8e2f799d228a4d4a85"
      ],
      "socialNetworks": [
        "https://www.instagram.com/user1, https://www.twitter.com/user1, https://www.linkedln.com/user1"
      ],
      "deepTechs": [
        "SMART_DATA_DISCOVERY, CLOUD_COMPUTING"
      ],
      "businessModels": [
        "CONSUMER_PRODUCTS, ECOMMERCE"
      ],
      "industries": [
        "ELECTRICAL_EQUIPMENT, MACHINERY_AND_EQUIPMENT"
      ],
      "socialInnovations": [
        "PEACE_AND_JUSTICE_STRONG_INSTITUTIONS, REDUCED_INEQUALITIES, CLIMATE_ACTION, GENDER_EQUALITY, NO_POVERTY"
      ]
    },
    entity: Entity.PROJECT
  }

  public static ProjectUpdateEvent: Event = {
    name: "PROJECT_UPDATE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "actorId": ObjectType.STRING,
      "name": ObjectType.STRING,
      "description": ObjectType.STRING,
      "trlStage": ObjectType.TRL_STAGE,
      "media": ObjectType.STRING_ARRAY,
      "protectionMethod": ObjectType.PROJECTION_METHOD,
      "projectManagerId": ObjectType.STRING,
      "teamMembersIds": ObjectType.STRING_ARRAY,
      "socialNetworks": ObjectType.STRING_ARRAY,
      "deepTechs": ObjectType.STRING_ARRAY,
      "businessModels": ObjectType.STRING_ARRAY,
      "industries": ObjectType.STRING_ARRAY,
      "socialInnovations": ObjectType.STRING_ARRAY
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "actorId": "60acae8e2f799d228a4d4a85",
      "name": null,
      "description": null,
      "trlStage": "BASIC_PRINCIPLES_OBSERVED",
      "media": [
        "www.vimeo.com/actor1"
      ],
      "protectionMethod": "PATENTS",
      "projectManagerId": "60acae8e2f799d228a4d4a85",
      "teamMembersIds": [
        "60acae8e2f799d228a4d4a85"
      ],
      "socialNetworks": [
        "https://www.instagram.com/user1, https://www.twitter.com/user1, https://www.linkedln.com/user1"
      ],
      "deepTechs": [
        "SMART_DATA_DISCOVERY, CLOUD_COMPUTING"
      ],
      "businessModels": [
        "CONSUMER_PRODUCTS, ECOMMERCE"
      ],
      "industries": [
        "ELECTRICAL_EQUIPMENT, MACHINERY_AND_EQUIPMENT"
      ],
      "socialInnovations": [
        "PEACE_AND_JUSTICE_STRONG_INSTITUTIONS, REDUCED_INEQUALITIES, CLIMATE_ACTION, GENDER_EQUALITY, NO_POVERTY"
      ]
    },
    entity: Entity.PROJECT
  }

  public static ProjectDeleteEvent: Event = {
    name: "PROJECT_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.PROJECT
  }

  public static EcosystemCreateEvent: Event = {
    name: "ECOSYSTEM_CREATE_EVENT",
    schema: {
      "type": ObjectType.ECOSYSTEM_TYPE,
      "name": ObjectType.STRING,
      "address": ObjectType.STRING,
      "latitude": ObjectType.NUMBER,
      "longitude": ObjectType.NUMBER,
      "city": ObjectType.STRING,
      "country": ObjectType.STRING,
      "phone": ObjectType.STRING,
      "web": ObjectType.STRING,
      "description": ObjectType.STRING,
      "objectives": ObjectType.STRING,
      "logo": ObjectType.IMAGE,
      "acceptedActors": ObjectType.STRING_ARRAY,
      "services": ObjectType.ECOSYSTEM_SERVICE_TYPE_ARRAY,
      "customServices": ObjectType.STRING_ARRAY,
      "media": ObjectType.STRING_ARRAY,
      "socialNetworks": ObjectType.STRING_ARRAY,
      "deepTechs": ObjectType.STRING_ARRAY,
      "businessModels": ObjectType.STRING_ARRAY,
      "industries": ObjectType.STRING_ARRAY,
      "socialInnovations": ObjectType.STRING_ARRAY,
      "manager": ObjectType.MEMBER,
      "password": ObjectType.STRING,
      "repeatPassword": ObjectType.STRING
    },
    example: {
      "type": "CORPORATE",
      "name": "EcosystemCore",
      "address": "3761 Coleman Plains Suite 604 - Las Cruces",
      "latitude": 16.8,
      "longitude": 90.3,
      "city": "Madrid",
      "country": "Spain",
      "phone": "+34999999999",
      "web": "www.ecosystem.com",
      "description": "Ecosystem to test",
      "objectives": "Increase the number of users, communicate through the platform",
      "logo": {
        "original": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
        "thumbnail": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
        "crop": {
          "x": 100,
          "y": 20,
          "width": 1750,
          "height": 500
        }
      },
      "acceptedActors": [
        "STARTUP"
      ],
      "services": [
        "FINANCIAL_AND_VALUATION"
      ],
      "customServices": [
        "SUPPLIER_OF_CONSTRUCTION_MATERIALS"
      ],
      "media": [
        "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png"
      ],
      "socialNetworks": [
        "https://www.instagram.com/user1, https://www.twitter.com/user1, https://www.linkedln.com/user1"
      ],
      "deepTechs": [
        "SMART_DATA_DISCOVERY, CLOUD_COMPUTING"
      ],
      "businessModels": [
        "CONSUMER_PRODUCTS, ECOMMERCE"
      ],
      "industries": [
        "ELECTRICAL_EQUIPMENT, MACHINERY_AND_EQUIPMENT"
      ],
      "socialInnovations": [
        "PEACE_AND_JUSTICE_STRONG_INSTITUTIONS, REDUCED_INEQUALITIES, CLIMATE_ACTION, GENDER_EQUALITY, NO_POVERTY"
      ],
      "manager": {
        "state": "ACCEPTED",
        "name": "Carlos",
        "lastname": "Guarin",
        "address": {
          "lat": 20.3,
          "lng": 14.2,
          "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
          "components": [
            {
              "name": "California",
              "shortname": "CA",
              "type": "ADMINISTRATIVE_AREA_LEVEL_1"
            }
          ]
        },
        "email": "pruebaemail@gmail.com",
        "about": "Developer",
        "image": {
          "original": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
          "thumbnail": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
          "crop": {
            "x": 100,
            "y": 20,
            "width": 1750,
            "height": 500
          }
        },
        "socialNetworks": [
          "https://www.instagram.com/user1, https://www.twitter.com/user1, https://www.linkedln.com/user1"
        ],
        "experiences": [
          {
            "id": "61445159784bca6ef764c6df",
            "title": "University practices",
            "company": "Moonshot Innovation",
            "location": {
              "lat": 20.3,
              "lng": 14.2,
              "formatted": "3761 Coleman Plains Suite 604 - Las Cruces",
              "components": [
                {
                  "name": "California",
                  "shortname": "CA",
                  "type": "ADMINISTRATIVE_AREA_LEVEL_1"
                }
              ]
            },
            "startDate": {},
            "endDate": {},
            "description": "I did front end development work"
          }
        ],
        "educations": [
          {
            "id": "61445159784bca6ef764c6df",
            "school": "Universidad de Navarra",
            "degree": "Licenciado en Periodismo",
            "fieldOfStudy": "Periodismo radiofónico",
            "startDate": {},
            "endDate": {},
            "grade": 8.5,
            "activitiesAndSocieties": "Equipo de rugby universitario",
            "description": "Cuatro años en la universidad de Navarra desarrollandome como periodista, incrementando mis capacidades comunicativas"
          }
        ]
      },
      "password": "hola123",
      "repeatPassword": "hola123"
    },
    entity: Entity.ECOSYSTEM
  }

  public static EcosystemUpdateEvent: Event = {
    name: "ECOSYSTEM_UPDATE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "type": ObjectType.ECOSYSTEM_TYPE,
      "name": ObjectType.STRING,
      "address": ObjectType.STRING,
      "latitude": ObjectType.NUMBER,
      "longitude": ObjectType.NUMBER,
      "city": ObjectType.STRING,
      "country": ObjectType.STRING,
      "phone": ObjectType.STRING,
      "web": ObjectType.STRING,
      "description": ObjectType.STRING,
      "objectives": ObjectType.STRING,
      "logo": ObjectType.IMAGE,
      "acceptedActors": ObjectType.STRING_ARRAY,
      "services": ObjectType.ECOSYSTEM_SERVICE_TYPE_ARRAY,
      "customServices": ObjectType.STRING_ARRAY,
      "media": ObjectType.STRING_ARRAY,
      "socialNetworks": ObjectType.STRING_ARRAY,
      "deepTechs": ObjectType.STRING_ARRAY,
      "businessModels": ObjectType.STRING_ARRAY,
      "industries": ObjectType.STRING_ARRAY,
      "socialInnovations": ObjectType.STRING_ARRAY
    },
    example: {
      "id": "61445159784bca6ef764c6df",
      "type": "CORPORATE",
      "name": "EcosystemCore",
      "address": "3761 Coleman Plains Suite 604 - Las Cruces",
      "latitude": 16.8,
      "longitude": 90.3,
      "city": "Madrid",
      "country": "Spain",
      "phone": "+34999999999",
      "web": "www.ecosystem.com",
      "description": "Ecosystem to test",
      "objectives": "Increase the number of users, communicate through the platform",
      "logo": {
        "original": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
        "thumbnail": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
        "crop": {
          "x": 100,
          "y": 20,
          "width": 1750,
          "height": 500
        }
      },
      "acceptedActors": [
        "STARTUP"
      ],
      "services": [
        "FINANCIAL_AND_VALUATION"
      ],
      "customServices": [
        "SUPPLIER_OF_CONSTRUCTION_MATERIALS"
      ],
      "media": [
        "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png"
      ],
      "socialNetworks": [
        "https://www.instagram.com/user1, https://www.twitter.com/user1, https://www.linkedln.com/user1"
      ],
      "deepTechs": [
        "SMART_DATA_DISCOVERY, CLOUD_COMPUTING"
      ],
      "businessModels": [
        "CONSUMER_PRODUCTS, ECOMMERCE"
      ],
      "industries": [
        "ELECTRICAL_EQUIPMENT, MACHINERY_AND_EQUIPMENT"
      ],
      "socialInnovations": [
        "PEACE_AND_JUSTICE_STRONG_INSTITUTIONS, REDUCED_INEQUALITIES, CLIMATE_ACTION, GENDER_EQUALITY, NO_POVERTY"
      ]
    },
    entity: Entity.ECOSYSTEM
  }

  public static EcosystemInviteEvent: Event = {
    name: "ECOSYSTEM_INVITE_EVENT",
    schema: {
      "email": ObjectType.STRING,
      "reason": ObjectType.STRING,
      "notification": ObjectType.BOOLEAN,
      "createdAt": ObjectType.NUMBER,
      "lastEmail": ObjectType.NUMBER
    },
    example: {
      "email": "example1@gmail.com",
      "reason": "Access denied",
      "notification": true,
      "createdAt": 1639590502463,
      "lastEmail": 1639590502463
    },
    entity: Entity.ECOSYSTEM
  }

  public static InvitationUpdateEvent: Event = {
    name: "INVITATION_UPDATE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "lastEmail": ObjectType.NUMBER
    },
    example: {
      "id": "61445159784bca6ef764c6df",
      "lastEmail": 1639590502463
    },
    entity: Entity.INVITATION
  }

  public static InvitationDeleteEvent: Event = {
    name: "INVITATION_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.INVITATION
  }

  public static PasswordRecoverEvent: Event = {
    name: "PASSWORD_RECOVER_EVENT",
    schema: {
      "token": ObjectType.STRING,
      "password": ObjectType.STRING,
      "repeatPassword": ObjectType.STRING
    },
    example: {
      "token": "123e4567-e89b-12d3-a456-426614174000",
      "password": "hola123",
      "repeatPassword": "hola123"
    },
    entity: Entity.PASSWORD
  }

  public static PasswordRequestEvent: Event = {
    name: "PASSWORD_REQUEST_EVENT",
    schema: {
      "email": ObjectType.STRING,
    },
    example: {
      "email": "pedrojimenez@gmail.com"
    },
    entity: Entity.PASSWORD
  }

  public static PasswordChangeEvent: Event = {
    name: "PASSWORD_CHANGE_EVENT",
    schema: {
      "password": ObjectType.STRING,
      "repeatPassword": ObjectType.STRING,
      "newPasswordRepeat": ObjectType.STRING
    },
    example: {
      "password": "hola123",
      "newPassword": "nueva123",
      "newPasswordRepeat": "hola123"
    },
    entity: Entity.PASSWORD
  }

  public static UserPermsUpdateEvent: Event = {
    name: "USER_PERMS_UPDATE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "perms": ObjectType.PERMISSION_ARRAY
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "perms": [
        "DEV:ONLINE_EVENT_CREATE"
      ]
    },
    entity: Entity.USER
  }

  public static UserVerifyEvent: Event = {
    name: "USER_VERIFY_EVENT",
    schema: {
      "token": ObjectType.STRING,
      "email": ObjectType.STRING
    },
    example: {
      "token": "eyJhbGciOiJSUzI1NiIsIn",
      "email": "example1@gmail.com"
    },
    entity: Entity.USER
  }

  public static ResendVerificationEmailEvent: Event = {
    name: "RESEND_VERIFICATION_EMAIL_EVENT",
    schema: {
      "email": ObjectType.STRING
    },
    example: {
      "email": "example1@gmail.com"
    },
    entity: Entity.VERIFICATION
  }

  public static BusinessModelCreateEvent: Event = {
    name: "BUSINESS_MODEL_CREATE_EVENT",
    schema: {
      "type": ObjectType.STRING
    },
    example: {
      "type": "TECHNOLOGY"
    },
    entity: Entity.TAXONOMY
  }

  public static DeepTechCreateEvent: Event = {
    name: "DEEP_TECH_CREATE_EVENT",
    schema: {
      "type": ObjectType.STRING,
      "cells": ObjectType.DEEP_TECH_CELL_ARRAY
    },
    example: {
      "type": "NANOTECH_AND_ROBOTICS",
      "cells": [
        {
          "type": "BIOMATERIALS",
          "kets": [
            "BIOACTIVE_MATERIALS",
            "BIOCOMPATIBLE_ALLOYS_AND_POLYMERS"
          ]
        }
      ]
    },
    entity: Entity.TAXONOMY
  }

  public static IndustryCreateEvent: Event = {
    name: "INDUSTRY_CREATE_EVENT",
    schema: {
      "type": ObjectType.STRING
    },
    example: {
      "type": "AGRICULTURE_FORESTRY_AND_FISHING"
    },
    entity: Entity.TAXONOMY
  }

  public static SocialInnovationCreateEvent: Event = {
    name: "SOCIAL_INNOVATION_CREATE_EVENT",
    schema: {
      "type": ObjectType.STRING
    },
    example: {
      "type": "NO_POVERTY"
    },
    entity: Entity.TAXONOMY
  }

  public static NotificationCreateEvent: Event = {
    name: "NOTIFICATION_CREATE_EVENT",
    schema: {
      "channels": ObjectType.NOTIFICATION_CHANNEL_ARRAY,
      "type": ObjectType.NOTIFICATION_TYPE,
      "email": ObjectType.EMAIL,
      "readed": ObjectType.BOOLEAN,
      "createdAt": ObjectType.NUMBER,
      "owner": ObjectType.NOTIFICATION_MEMBER,
      "recipients": ObjectType.NOTIFICATION_MEMBER_ARRAY,
      "followUpRoomId": ObjectType.STRING,
      "directChatRoomId": ObjectType.STRING,
      "wallPostName": ObjectType.STRING,
      "followUpRoomName": ObjectType.STRING
    },
    example: {
      "channels": [
        "EMAIL"
      ],
      "type": "ECOSYSTEM_ACCESS_REQUEST",
      "email": {
        "from": {
          "email": "example1@gmail.com",
          "name": "example1"
        },
        "to": [
          "example1@gmail.com, example2@gmail.com"
        ],
        "cc": [
          "example1@gmail.com, example2@gmail.com"
        ],
        "bcc": [
          "example1@gmail.com, example2@gmail.com"
        ],
        "subject": "Ecosystem invitation",
        "templateId": "MAIL_TEMPLATE_ECOSYSTEM_ACCESS_REQUEST",
        "attachments": [
          {
            "name": "archivo1.pdf",
            "file": {}
          }
        ],
        "inlines": [
          {
            "cid": "<foo4atfoo1atbar.net>",
            "file": {}
          }
        ],
        "params": {
          "additionalProp1": {
            "reason": "No reason",
            "image": "https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg"
          },
          "additionalProp2": {
            "reason": "No reason",
            "image": "https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg"
          },
          "additionalProp3": {
            "reason": "No reason",
            "image": "https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg"
          }
        }
      },
      "readed": true,
      "createdAt": 1639590502463,
      "owner": {
        "id": "61445159784bca6ef764c6df",
        "image": {
          "original": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
          "thumbnail": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
          "crop": {
            "x": 100,
            "y": 20,
            "width": 1750,
            "height": 500
          }
        },
        "name": "user1"
      },
      "recipients": [
        {
          "id": "61445159784bca6ef764c6df",
          "image": {
            "original": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
            "thumbnail": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
            "crop": {
              "x": 100,
              "y": 20,
              "width": 1750,
              "height": 500
            }
          },
          "name": "user1"
        }
      ],
      "followUpRoomId": "61445159784bca6ef764c6df",
      "directChatRoomId": "61445159784bca6ef764c6df",
      "wallPostName": "Wall post 1",
      "followUpRoomName": "Follow up room 1"
    },
    entity: Entity.NOTIFICATION
  }

  public static NotificationUpdateEvent: Event = {
    name: "NOTIFICATION_UPDATE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "type": ObjectType.NOTIFICATION_TYPE,
      "readed": ObjectType.BOOLEAN
    },
    example: {
      "id": "61445159784bca6ef764c6df",
      "type": "ECOSYSTEM_ACCESS_REQUEST",
      "readed": true
    },
    entity: Entity.NOTIFICATION
  }

  public static NotificationDeleteEvent: Event = {
    name: "NOTIFICATION_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.NOTIFICATION
  }

  public static SettingCreateEvent: Event = {
    name: "SETTING_CREATE_EVENT",
    schema: {
      "banner": ObjectType.IMAGE
    },
    example: {
      "banner": {
        "original": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
        "thumbnail": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
        "crop": {
          "x": 100,
          "y": 20,
          "width": 1750,
          "height": 500
        }
      }
    },
    entity: Entity.SETTING
  }

  public static SettingUpdateEvent: Event = {
    name: "SETTING_UPDATE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "banner": ObjectType.IMAGE
    },
    example: {
      "id": "61445159784bca6ef764c6df",
      "banner": {
        "original": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
        "thumbnail": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png",
        "crop": {
          "x": 100,
          "y": 20,
          "width": 1750,
          "height": 500
        }
      }
    },
    entity: Entity.SETTING
  }
}
