import {EventTemplate} from '../../app/model/EventTemplate';
import {Entity} from '../../app/model/Entity';
import {ObjectType} from '../../app/model/ObjectType';
import {ObjectTypeTemplate} from '../../app/model/ObjectTypeTemplate';


export class EventTemplates {

  public static OnlineEventCreateEvent: EventTemplate = {
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

  public static OnlineEventUpdateEvent: EventTemplate = {
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

  public static OnlineEventSubscriptionEvent: EventTemplate = {
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
              "startDate": {},
              "endDate": {},
              "grade": 8.5,
              "description": "Cuatro años en la universidad de Navarra desarrollandome como periodista, incrementando mis capacidades comunicativas"
            }
          ]
        }
      ]
    },
    entity: Entity.ONLINE_EVENT
  }

  public static OnlineEventUnsubscriptionEvent: EventTemplate = {
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
              "startDate": {},
              "endDate": {},
              "grade": 8.5,
              "description": "Cuatro años en la universidad de Navarra desarrollandome como periodista, incrementando mis capacidades comunicativas"
            }
          ]
        }
      ]
    },
    entity: Entity.ONLINE_EVENT
  }

  public static OnlineEventDeleteEvent: EventTemplate = {
    name: "ONLINE_EVENT_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.ONLINE_EVENT
  }

  public static FaceToFaceEventCreateEvent: EventTemplate = {
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

  public static FaceToFaceEventUpdateEvent: EventTemplate = {
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

  public static FaceToFaceEventSubscriptionEvent: EventTemplate = {
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
              "startDate": {},
              "endDate": {},
              "grade": 8.5,
              "description": "Cuatro años en la universidad de Navarra desarrollandome como periodista, incrementando mis capacidades comunicativas"
            }
          ]
        }
      ]
    },
    entity: Entity.FACE_TO_FACE_EVENT
  }

  public static FaceToFaceEventUnsubscriptionEvent: EventTemplate = {
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
              "startDate": {},
              "endDate": {},
              "grade": 8.5,
              "description": "Cuatro años en la universidad de Navarra desarrollandome como periodista, incrementando mis capacidades comunicativas"
            }
          ]
        }
      ]
    },
    entity: Entity.FACE_TO_FACE_EVENT
  }

  public static FaceToFaceEventDeleteEvent: EventTemplate = {
    name: "FACE_TO_FACE_EVENT_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.FACE_TO_FACE_EVENT
  }

  public static DirectChatCreateEvent: EventTemplate = {
    name: "DIRECT_CHAT_CREATE_EVENT",
    schema: {
      "participants": ObjectType.PARTICIPANT_ARRAY,
      "actions": ObjectType.ROOM_ACTION_ARRAY,
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

  public static DirectChatDeleteEvent: EventTemplate = {
    name: "DIRECT_CHAT_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.DIRECT_CHAT
  }

  public static DirectChatMessageAddEvent: EventTemplate = {
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

  public static DirectChatMessageDeleteEvent: EventTemplate = {
    name: "DIRECT_CHAT_MESSAGE_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.DIRECT_CHAT
  }

  public static FollowUpRoomCreateEvent: EventTemplate = {
    name: "FOLLOW_UP_ROOM_CREATE_EVENT",
    schema: {
      "participants": ObjectType.PARTICIPANT_ARRAY,
      "actions": ObjectType.ROOM_ACTION_ARRAY,
      "title": ObjectType.STRING,
      "description": ObjectType.STRING,
      "state": ObjectType.FOLLOW_UP_ROOM_STATE,
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

  public static FollowUpRoomUpdateEvent: EventTemplate = {
    name: "FOLLOW_UP_ROOM_UPDATE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "participants": ObjectType.PARTICIPANT_ARRAY,
      "actions": ObjectType.ROOM_ACTION_ARRAY,
      "title": ObjectType.STRING,
      "description": ObjectType.STRING,
      "state": ObjectType.FOLLOW_UP_ROOM_STATE,
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

  public static FollowUpRoomAddMemberEvent: EventTemplate = {
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

  public static FollowUpRoomLeaveMemberEvent: EventTemplate = {
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

  public static FollowUpRoomCloseEvent: EventTemplate = {
    name: "FOLLOW_UP_ROOM_CLOSE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85"
    },
    entity: Entity.FOLLOW_UP_ROOM
  }

  public static FollowUpRoomOpenEvent: EventTemplate = {
    name: "FOLLOW_UP_ROOM_OPEN_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85"
    },
    entity: Entity.FOLLOW_UP_ROOM
  }

  public static FollowUpRoomDeleteEvent: EventTemplate = {
    name: "FOLLOW_UP_ROOM_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.FOLLOW_UP_ROOM
  }

  public static FollowUpRoomMessageAddEvent: EventTemplate = {
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

  public static FollowUpRoomMessageDeleteEvent: EventTemplate = {
    name: "FOLLOW_UP_ROOM_MESSAGE_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.FOLLOW_UP_ROOM
  }

  public static PublicChannelCreateEvent: EventTemplate = {
    name: "PUBLIC_CHANNEL_CREATE_EVENT",
    schema: {
      "participants": ObjectType.PARTICIPANT_ARRAY,
      "actions": ObjectType.ROOM_ACTION_ARRAY,
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

  public static PublicChannelUpdateEvent: EventTemplate = {
    name: "PUBLIC_CHANNEL_UPDATE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "ownerMemberId": ObjectType.STRING,
      "participants": ObjectType.PARTICIPANT_ARRAY,
      "actions": ObjectType.ROOM_ACTION_ARRAY,
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

  public static PublicChannelDeleteEvent: EventTemplate = {
    name: "PUBLIC_CHANNEL_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.PUBLIC_CHANNEL
  }

  public static PublicChannelSubscribeEvent: EventTemplate = {
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

  public static PublicChannelUnsubscribeEvent: EventTemplate = {
    name: "PUBLIC_CHANNEL_UNSUBSCRIBE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "memberId": ObjectType.STRING,
      "newOwnerMemberId": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "memberId": "60acae8e2f799d228a4d4a85",
      "newOwnerMemberId": "60acae8e2f799d228a4d4a85"
    },
    entity: Entity.PUBLIC_CHANNEL
  }

  public static PublicChannelMessageAddEvent: EventTemplate = {
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

  public static PublicChannelMessageDeleteEvent: EventTemplate = {
    name: "PUBLIC_CHANNEL_MESSAGE_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.PUBLIC_CHANNEL
  }

  public static WallPostCreateEvent: EventTemplate = {
    name: "WALL_POST_CREATE_EVENT",
    schema: {
      "content": ObjectType.STRING,
      "attachments": ObjectType.WALL_POST_ATTACHMENT,
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
                "startDate": "2020-07-30T00:00:00.000Z",
                "endDate": "2021-05-14T00:00:00.000Z",
                "grade": 8.5,
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

  public static WallPostUpdateEvent: EventTemplate = {
    name: "WALL_POST_UPDATE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "content": ObjectType.STRING,
      "attachments": ObjectType.WALL_POST_ATTACHMENT
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

  public static WallPostDeleteEvent: EventTemplate = {
    name: "WALL_POST_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.WALL_POST
  }

  public static WallPostLikeEvent: EventTemplate = {
    name: "WALL_POST_LIKE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85"
    },
    entity: Entity.WALL_POST
  }

  public static WallPostUnlikeEvent: EventTemplate = {
    name: "WALL_POST_UNLIKE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85"
    },
    entity: Entity.WALL_POST
  }

  public static WallPostCommentAddEvent: EventTemplate = {
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
              "startDate": "2020-07-30T00:00:00.000Z",
              "endDate": "2021-05-14T00:00:00.000Z",
              "grade": 8.5,
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

  public static WallPostCommentLikeEvent: EventTemplate = {
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

  public static WallPostCommentUnlikeEvent: EventTemplate = {
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

  public static ActorCreateEvent: EventTemplate = {
    name: "ACTOR_CREATE_EVENT",
    schema: {
      "type": ObjectType.ACTOR_TYPE,
      "state": ObjectType.STATE,
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
            "startDate": "2020-07-30T00:00:00.000Z",
            "endDate": "2021-05-14T00:00:00.000Z",
            "grade": 8.5,
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

  public static ActorUpdateEvent: EventTemplate = {
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

  public static ActorAddNewMemberEvent: EventTemplate = {
    name: 'ACTOR_ADD_NEW_MEMBER_EVENT',
    schema: {
      "id": ObjectType.STRING,
      "member": ObjectType.MEMBER,
      "verificationToken": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85",
      "member": {
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
            "startDate": "2020-07-30T00:00:00.000Z",
            "endDate": "2021-05-14T00:00:00.000Z",
            "grade": 8.5,
            "description": "Cuatro años en la universidad de Navarra desarrollandome como periodista, incrementando mis capacidades comunicativas"
          }
        ]
      },
      "verificationToken": "509d5555-d9e8-4576-8e2d-d1c509e61954"
    },
    entity: Entity.ACTOR
  }

  public static ActorDeleteEvent: EventTemplate = {
    name: "ACTOR_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.ACTOR
  }

  public static ActorAcceptEvent: EventTemplate = {
    name: "ACTOR_ACCEPT_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85"
    },
    entity: Entity.ACTOR
  }

  public static ActorRejectEvent: EventTemplate = {
    name: "ACTOR_REJECT_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "60acae8e2f799d228a4d4a85"
    },
    entity: Entity.ACTOR
  }

  public static MemberUpdateEvent: EventTemplate = {
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

  public static MemberDeleteEvent: EventTemplate = {
    name: "MEMBER_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.MEMBER
  }

  public static MemberCreateEducationEvent: EventTemplate = {
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

  public static MemberUpdateEducationEvent: EventTemplate = {
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

  public static MemberDeleteEducationEvent: EventTemplate = {
    name: "MEMBER_DELETE_EDUCATION_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.MEMBER
  }

  public static MemberCreateExperienceEvent: EventTemplate = {
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

  public static MemberUpdateExperienceEvent: EventTemplate = {
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
      "startDate": 17410,
      "endDate": 18813,
      "description": "Scrum manager in Moonshot Innovation"
    },
    entity: Entity.MEMBER
  }

  public static MemberDeleteExperienceEvent: EventTemplate = {
    name: "MEMBER_DELETE_EXPERIENCE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.MEMBER
  }

  public static MemberSetFcmTokenEvent: EventTemplate = {
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

  public static ProjectCreateEvent: EventTemplate = {
    name: "PROJECT_CREATE_EVENT",
    schema: {
      "actorId": ObjectType.STRING,
      "name": ObjectType.STRING,
      "description": ObjectType.STRING,
      "trlStage": ObjectType.TRL_STAGE,
      "media": ObjectType.STRING_ARRAY,
      "protectionMethod": ObjectType.PROTECTION_METHOD,
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

  public static ProjectUpdateEvent: EventTemplate = {
    name: "PROJECT_UPDATE_EVENT",
    schema: {
      "id": ObjectType.STRING,
      "actorId": ObjectType.STRING,
      "name": ObjectType.STRING,
      "description": ObjectType.STRING,
      "trlStage": ObjectType.TRL_STAGE,
      "media": ObjectType.STRING_ARRAY,
      "protectionMethod": ObjectType.PROTECTION_METHOD,
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

  public static ProjectDeleteEvent: EventTemplate = {
    name: "PROJECT_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.PROJECT
  }

  public static EcosystemCreateEvent: EventTemplate = {
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
            "startDate": {},
            "endDate": {},
            "grade": 8.5,
            "description": "Cuatro años en la universidad de Navarra desarrollandome como periodista, incrementando mis capacidades comunicativas"
          }
        ]
      },
      "password": "hola123",
      "repeatPassword": "hola123"
    },
    entity: Entity.ECOSYSTEM
  }

  public static EcosystemUpdateEvent: EventTemplate = {
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

  public static EcosystemInviteEvent: EventTemplate = {
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

  public static InvitationUpdateEvent: EventTemplate = {
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

  public static InvitationDeleteEvent: EventTemplate = {
    name: "INVITATION_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.INVITATION
  }

  public static PasswordRecoverEvent: EventTemplate = {
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

  public static PasswordRequestEvent: EventTemplate = {
    name: "PASSWORD_REQUEST_EVENT",
    schema: {
      "email": ObjectType.STRING,
    },
    example: {
      "email": "pedrojimenez@gmail.com"
    },
    entity: Entity.PASSWORD
  }

  public static PasswordChangeEvent: EventTemplate = {
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

  public static UserPermsUpdateEvent: EventTemplate = {
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

  public static UserVerifyEvent: EventTemplate = {
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

  public static ResendVerificationEmailEvent: EventTemplate = {
    name: "RESEND_VERIFICATION_EMAIL_EVENT",
    schema: {
      "email": ObjectType.STRING
    },
    example: {
      "email": "example1@gmail.com"
    },
    entity: Entity.VERIFICATION
  }

  public static BusinessModelCreateEvent: EventTemplate = {
    name: "BUSINESS_MODEL_CREATE_EVENT",
    schema: {
      "type": ObjectType.STRING
    },
    example: {
      "type": "TECHNOLOGY"
    },
    entity: Entity.TAXONOMY
  }

  public static DeepTechCreateEvent: EventTemplate = {
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

  public static IndustryCreateEvent: EventTemplate = {
    name: "INDUSTRY_CREATE_EVENT",
    schema: {
      "type": ObjectType.STRING
    },
    example: {
      "type": "AGRICULTURE_FORESTRY_AND_FISHING"
    },
    entity: Entity.TAXONOMY
  }

  public static SocialInnovationCreateEvent: EventTemplate = {
    name: "SOCIAL_INNOVATION_CREATE_EVENT",
    schema: {
      "type": ObjectType.STRING
    },
    example: {
      "type": "NO_POVERTY"
    },
    entity: Entity.TAXONOMY
  }

  public static NotificationCreateEvent: EventTemplate = {
    name: "NOTIFICATION_CREATE_EVENT",
    schema: {
      "channels": ObjectType.NOTIFICATION_CHANNEL_ARRAY,
      "type": ObjectType.NOTIFICATION_TYPE,
      "push": ObjectType.PUSH_DATA,
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

  public static NotificationUpdateEvent: EventTemplate = {
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

  public static NotificationDeleteEvent: EventTemplate = {
    name: "NOTIFICATION_DELETE_EVENT",
    schema: {
      "id": ObjectType.STRING
    },
    example: {
      "id": "1"
    },
    entity: Entity.NOTIFICATION
  }

  public static SettingCreateEvent: EventTemplate = {
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

  public static SettingUpdateEvent: EventTemplate = {
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

  public static Member: ObjectTypeTemplate = {
    name: "Member",
    schema: {
      "id": ObjectType.STRING,
      "state": ObjectType.STATE,
      "name": ObjectType.STRING,
      "lastname": ObjectType.STRING,
      "address": ObjectType.ADDRESS,
      "email": ObjectType.STRING,
      "about": ObjectType.STRING,
      "image": ObjectType.IMAGE,
      "socialNetworks": ObjectType.STRING_ARRAY,
      "experiences": ObjectType.EXPERIENCE_ARRAY,
      "educations": ObjectType.EDUCATION_ARRAY
    },
    example: {
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
          "startDate": "2020-07-30T00:00:00.000Z",
          "endDate": "2021-05-14T00:00:00.000Z",
          "grade": 8.5,
          "description": "Cuatro años en la universidad de Navarra desarrollandome como periodista, incrementando mis capacidades comunicativas"
        }
      ]
    }
  }

  public static Experience: ObjectTypeTemplate = {
    name: "Experience",
    schema: {
      "id": ObjectType.STRING,
      "title": ObjectType.STRING,
      "company": ObjectType.STRING,
      "address": ObjectType.ADDRESS,
      "startDate": ObjectType.STRING,
      "endDate": ObjectType.STRING,
      "description": ObjectType.STRING
    },
    example: {
      "id": "61445159784bca6ef764c6df",
      "title": "University practices",
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
      "startDate": 17410,
      "endDate": 18813,
      "description": "I did front end development work"
    }
  }

  public static Education: ObjectTypeTemplate = {
    name: "Education",
    schema: {
      "id": ObjectType.STRING,
      "school": ObjectType.STRING,
      "degree": ObjectType.STRING,
      "fieldOfStudy": ObjectType.STRING,
      "address": ObjectType.ADDRESS,
      "startDate": ObjectType.STRING,
      "endDate": ObjectType.STRING,
      "grade": ObjectType.NUMBER,
      "description": ObjectType.STRING
    },
    example: {
      "id": "6107b2a29aaabb647616a0ea",
      "school": "Universidad de Las Palmas de Gran Canaria",
      "degree": "Grado en Ingeniería Informática",
      "fieldOfStudy": "Ingeniería Informática",
      "address":{
        "lat": 28.07313522866477,
        "lng": -15.451412200927734,
        "formatted": "Informática, 35017 Tafira Baja, Las Palmas, Spain",
        "components":[
          {
            "name": "Informática",
            "shortName": "Informática",
            "type": "ESTABLISHMENT"
          }
        ]
      },
      "startDate": 17410,
      "endDate": 18813,
      "grade": 8.0,
      "description": "Especialización en Ingeniería del Software."
    }
  }

  public static NotificationMember: ObjectTypeTemplate = {
    name: "NotificationMember",
    schema: {
      "id": ObjectType.STRING,
      "image": ObjectType.IMAGE,
      "name": ObjectType.STRING
    },
    example: {
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
      "name": "Pedro Gonzales"
    }
  }

  public static Participant: ObjectTypeTemplate = {
    name: "Participant",
    schema: {
      "memberId": ObjectType.STRING,
      "state": ObjectType.PARTICIPANT_STATE
    },
    example: {
      "memberId": "61445159784bca6ef764c6df",
      "state": "ACTIVE"
    }
  }

  public static ParticipantState: ObjectTypeTemplate = {
    name: "ParticipantState",
    options: ["ACTIVE", "INACTIVE"]
  }



  public static RoomAction: ObjectTypeTemplate = {
    name: "RoomAction",
    schema: {
      "name": ObjectType.STRING,
      "url": ObjectType.STRING
    },
    example: {
      "name": "Submission form",
      "url": "https://dev.moonshot.ceo/submission-form"
    }
  }

  public static MessageType: ObjectTypeTemplate = {
    name: "MessageType",
    options: ["MEMBER_MESSAGE", "MEET_START", "MEET_END"]
  }

  public static Module: ObjectTypeTemplate = {
    name: "Module",
    options: ["COMMUNITY", "CONNECT", "DISCOVERY", "CHALLENGES"]
  }

  public static Document: ObjectTypeTemplate = {
    name: "Document",
    schema: {
      "id": ObjectType.STRING,
      "link": ObjectType.STRING,
      "category": ObjectType.DOCUMENT_CATEGORY,
      "roomId": ObjectType.STRING,
      "memberId": ObjectType.STRING,
      "filename": ObjectType.STRING,
      "createdAt": ObjectType.NUMBER
    },
    example: {
      "id": "61a9e29a770a830753a85e10",
      "link": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/44e667b1-9c58-457d-8481-9899faa6554e.png",
      "category": "IMAGE",
      "roomId": "60c7808acb43760a967eda7c",
      "memberId": "60b53ce23a28bb702667cbe6",
      "filename": "Captura de pantalla 2021-12-03 a las 10.10.23.png",
      "createdAt": 1638523546392
    }
  }

  public static DocumentCategory: ObjectTypeTemplate = {
    name: "DocumentCategory",
    options: ["PDF", "WORD", "IMAGE", "VIDEO", "OTHER"]
  }

  public static FollowUpRoomState: ObjectTypeTemplate = {
    name: "FollowUpRoomState",
    options: ["OPEN", "CLOSED"]
  }

  public static WallPostAttachment: ObjectTypeTemplate = {
    name: "WallPostAttachment",
    schema: {
      "link": ObjectType.STRING,
      "documentCategory": ObjectType.DOCUMENT_CATEGORY
    },
    example: {
      "link": "https://dev.moonshot.ceo/document1.pdf",
      "documentCategory": "PDF"
    }
  }

  public static Comment: ObjectTypeTemplate = {
    name: "Comment",
    schema: {
      "id": ObjectType.STRING,
      "content": ObjectType.STRING,
      "authorMember": ObjectType.MEMBER,
      "likes": ObjectType.STRING_ARRAY,
      "createdAt": ObjectType.NUMBER
    },
    example: {
      "id": "6183cadf4d48703e9bf370e3",
      "content": "2",
      "authorMember":{
        "id": "60d6031b0d5a16054411a570",
        "state": "ACCEPTED",
        "name": "Jeremy",
        "lastname": "Trujillo Sánchez",
        "address":{
          "lat": 28.1235459,
          "lng": -15.4362574,
          "formatted": "Las Palmas de Gran Canaria, Las Palmas, Spain",
          "components":[
            {
              "name": "Las Palmas de Gran Canaria",
              "shortName": "Las Palmas de Gran Canaria",
              "type": "LOCALITY"
            }
          ]
        },
        "email": "trujillosanchezjeremy@gmail.com",
        "about": "Programador junior actualmente trabajando para Moonshot",
        "image":{
          "original": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60d6031b0d5a16054411a570/image/09d2b4e2-6a3d-431c-8434-5a96ae5a5a9e.jpeg",
          "thumbnail": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60d6031b0d5a16054411a570/image/54cee717-eb9f-4576-bce0-7f68b5518d57.jpeg",
          "crop":{
            "x": 74,
            "y": 19,
            "width": 199,
            "height": 199
          }
        },
        "fcmTokens": null,
        "socialNetworks":[
          "https://www.linkedin.com/in/jeremy-trujillo-sanchez/"
        ],
        "experiences":[
          {
            "id": "6107b2a29aaabb647616a0e9",
            "title": "Prácticas Extracurriculares",
            "type": "FULL_TIME",
            "company": "Moonshot Inc.",
            "address":{
              "lat": 40.4475272,
              "lng": -3.8074152,
              "formatted": "Pozuelo de Alarcón, Madrid, Spain",
              "components":[
                {
                  "name": "Pozuelo de Alarcón",
                  "shortName": "Pozuelo de Alarcón",
                  "type": "LOCALITY"
                }
              ]
            },
            "startDate": 18696,
            "endDate": 18813,
            "description": "Participé en el desarrollo de la versión 2 de la plataforma Moonshot."
          },
          {
            "id": "6180f142623f840701944b2e",
            "title": "Programador Junior",
            "type": null,
            "company": "Moonshot Inc.",
            "address":{
              "lat": 40.4475272,
              "lng": -3.8074152,
              "formatted": "Pozuelo de Alarcón, Madrid, Spain",
              "components":[
                {
                  "name": "Pozuelo de Alarcón",
                  "shortName": "Pozuelo de Alarcón",
                  "type": "LOCALITY"
                }
              ]
            },
            "startDate": 18857,
            "endDate": null,
            "description": "Además de labores de programador Full-Stack, recientemente comencé a realizar tareas de QA. "
          }
        ],
        "educations":[
          {
            "id": "6107b2a29aaabb647616a0ea",
            "school": "Universidad de Las Palmas de Gran Canaria",
            "degree": "Grado en Ingeniería Informática",
            "fieldOfStudy": "Ingeniería Informática",
            "address":{
              "lat": 28.07313522866477,
              "lng": -15.451412200927734,
              "formatted": "Informática, 35017 Tafira Baja, Las Palmas, Spain",
              "components":[
                {
                  "name": "Informática",
                  "shortName": "Informática",
                  "type": "ESTABLISHMENT"
                },
                {
                  "name": "Tafira Baja",
                  "shortName": "Tafira Baja",
                  "type": "LOCALITY"
                },
                {
                  "name": "Las Palmas",
                  "shortName": "GC",
                  "type": "ADMINISTRATIVE_AREA_LEVEL_2"
                },
                {
                  "name": "Canarias",
                  "shortName": "CN",
                  "type": "ADMINISTRATIVE_AREA_LEVEL_1"
                },
                {
                  "name": "Spain",
                  "shortName": "ES",
                  "type": "COUNTRY"
                },
                {
                  "name": "35017",
                  "shortName": "35017",
                  "type": "POSTAL_CODE"
                }
              ]
            },
            "startDate": 17410,
            "endDate": 18813,
            "grade": 8.0,
            "description": "Especialización en Ingeniería del Software."
          }
        ]
      },
      "likes":[
        "60d6081e71ca73649a032391"
      ],
      "createdAt": 1636027103779
    }
  }

  public static ActorType: ObjectTypeTemplate = {
    name: "ActorType",
    options: [
      "STARTUP",
      "COMPANY",
      "EXPERT",
      "PERSON_INVESTOR",
      "ORGANIZATION_INVESTOR",
      "MENTOR",
      "PUBLIC_ENTITY",
      "RESEARCH_GROUP",
      "TALENT",
      "UNIVERSITY",
      "NGO",
      "HUB",
      "CLUSTER"
    ]
  }

  public static State: ObjectTypeTemplate = {
    name: "State",
    options: ["ACCEPTED", "PENDING", "REJECTED"]
  }

  public static Image: ObjectTypeTemplate = {
    name: "Image",
    schema: {
      "original": ObjectType.STRING,
      "thumbnail": ObjectType.STRING,
      "crop": ObjectType.CROP
    },
    example: {
      "original": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60d6081e71ca73649a032391/image/e68b0bcc-9f37-41c5-b193-d8a218e55096.png",
      "thumbnail": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60d6081e71ca73649a032391/image/80f8c6dc-4043-4b55-a3ad-a10b680c6a54.png",
      "crop":{
        "x": 0,
        "y": 0,
        "width": 340,
        "height": 340
      }
    }
  }

  public static Crop: ObjectTypeTemplate = {
    name: "Crop",
    schema: {
      "x": ObjectType.STRING,
      "Y": ObjectType.STRING,
      "width": ObjectType.STRING,
      "height": ObjectType.STRING
    },
    example: {
      "x": 0,
      "y": 0,
      "width": 340,
      "height": 340
    }
  }

  public static Facet: ObjectTypeTemplate = {
    name: "Facet",
    schema: {
      "industries": ObjectType.STRING_ARRAY,
      "businessModels": ObjectType.STRING_ARRAY,
      "socialInnovations": ObjectType.STRING_ARRAY,
      "deepTechs": ObjectType.STRING_ARRAY
    },
    example: {
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
    }
}


  public static Investment: ObjectTypeTemplate = {
    name: "Investment",
    schema: {
      "stage": ObjectType.STARTUP_STAGE,
      "stagesInvestments": ObjectType.STRING,
      "numberPastExist": ObjectType.NUMBER,
      "trlStage": ObjectType.TRL_STAGE,
      "numberCurrentInvestments": ObjectType.NUMBER,
      "countriesInteres": ObjectType.STRING_ARRAY
    },
    example: {
      "stage": "FIRST_PROTOTYPE",
      "stagesInvestments": "Start-up",
      "numberPastExist": 6,
      "trlStage": "BASIC_PRINCIPLES_OBSERVED",
      "numberCurrentInvestments": 3,
      "countriesInteres": [
        "Colombia", "Ecuador"
      ]
    }
  }

  public static Financial: ObjectTypeTemplate = {
    name: "Financial",
    schema: {
      "stage": ObjectType.STARTUP_STAGE,
      "seekedCapital": ObjectType.NUMBER,
      "trlStage": ObjectType.TRL_STAGE,
      "raisedCapital": ObjectType.NUMBER,
      "totalFunding": ObjectType.NUMBER,
      "premoneyValuation": ObjectType.NUMBER,
      "fundingStage": ObjectType.FUNDING_STAGE,
      "lastFunding": ObjectType.NUMBER,
      "numbersEmployees": ObjectType.NUMBER,
      "currency": ObjectType.CURRENCY
    },
    example: {
      "stage": "FIRST_PROTOTYPE",
      "seekedCapital": 10000,
      "trlStage": "BASIC_PRINCIPLES_OBSERVED",
      "raisedCapital": 5000,
      "totalFunding": 15000,
      "premoneyValuation": 120000,
      "fundingStage": "SEED",
      "lastFunding": 18231,
      "numbersEmployees": 1,
      "currency": "EUR"
    }
  }

  public static StartupStage: ObjectTypeTemplate = {
    name: "StartupStage",
    options: [
      "GOT_DECK",
      "BUSINESS_PLAN",
      "FIRST_PROTOTYPE",
      "INITIAL_INTEREST",
      "GOT_BETA",
      "VIRALITY_SCALABILITY",
      "FIXED_BETA",
      "STARTED_INVOICE",
      "RUNNING_BUSINESS"
    ]
  }

  public static TrlStage: ObjectTypeTemplate = {
    name: "TrlStage",
    options: [
      "BASIC_PRINCIPLES_OBSERVED",
      "TECHNOLOGY_CONCEPT_FORMULATED",
      "EXPERIMENTAL_PROOF_OF_CONCEPT",
      "TECHNOLOGY_VALIDATED_IN_LAB",
      "TECHNOLOGY_VALIDATED_IN_RELEVANT_ENVIRONMENT",
      "TECHNOLOGY_DEMONSTRATED_IN_RELEVANT_ENVIRONMENT",
      "SYSTEM_PROTOTYPE_DEMONSTRATION_IN_OPERATIONAL_ENVIRONMENT",
      "SYSTEM_COMPLETE_AND_QUALIFIED",
      "ACTUAL_SYSTEM_PROVEN_IN_OPERATIONAL_ENVIRONMENT"
    ]
  }

  public static FundingStage: ObjectTypeTemplate = {
    name: "FundingStage",
    options: [
      "PRE_SEED",
      "SEED",
      "GROWTH_CAPITAL",
      "SERIES_A",
      "SERIES_B",
      "SERIES_C",
      "SERIES_D_E_F",
      "GRANT"
    ]
  }

  public static Currency: ObjectTypeTemplate = {
    name: "Currency",
    options: ["EUR", "USD"]
  }

  public static Address: ObjectTypeTemplate = {
    name: "Address",
    schema: {
      "lat": ObjectType.NUMBER,
      "lng": ObjectType.NUMBER,
      "formatted": ObjectType.STRING,
      "components": ObjectType.ADDRESS_COMPONENT
    },
    example: {
      "lat": 28.1201412,
      "lng": -15.5210607,
      "formatted": "35400 Arucas, Las Palmas, Las Palmas, Spain",
      "components": [
        {
          "name": "Arucas",
          "shortName": "Arucas",
          "type": "LOCALITY"
        }
      ]
    }
  }

  public static AddressComponent: ObjectTypeTemplate = {
    name: "AddressComponent",
    schema: {
      "name": ObjectType.STRING,
      "shortName": ObjectType.STRING,
      "type": ObjectType.ADDRESS_TYPE,
    },
    example: {
      "name": "Arucas",
      "shortName": "Arucas",
      "type": "LOCALITY"
    }
  }

  public static AddressType: ObjectTypeTemplate = {
    name: "AddressType",
    options: [
      "ADMINISTRATIVE_AREA_LEVEL_1",
      "ADMINISTRATIVE_AREA_LEVEL_2",
      "ADMINISTRATIVE_AREA_LEVEL_3",
      "ADMINISTRATIVE_AREA_LEVEL_4",
      "ADMINISTRATIVE_AREA_LEVEL_5",
      "ARCHIPELAGO",
      "COLLOQUIAL_AREA",
      "CONTINENT",
      "COUNTRY",
      "ESTABLISHMENT",
      "FINANCE",
      "FLOOR",
      "FOOD",
      "GENERAL_CONTRACTOR",
      "GEOCODE",
      "HEALTH",
      "INTERSECTION",
      "LANDMARK",
      "LOCALITY",
      "NATURAL_FEATURE",
      "NEIGHBORHOOD",
      "PLACE_OF_WORSHIP",
      "PLUS_CODE",
      "POINT_OF_INTEREST",
      "POLITICAL",
      "POST_BOX",
      "POSTAL_CODE",
      "POSTAL_CODE_PREFIX",
      "POSTAL_CODE_SUFFIX",
      "POSTAL_TOWN",
      "PREMISE",
      "ROOM",
      "ROUTE",
      "STREET_ADDRESS",
      "STREET_NUMBER",
      "SUBLOCALITY",
      "SUBLOCALITY_LEVEL_1",
      "SUBLOCALITY_LEVEL_2",
      "SUBLOCALITY_LEVEL_3",
      "SUBLOCALITY_LEVEL_4",
      "SUBLOCALITY_LEVEL_5",
      "SUBPREMISE",
      "TOWN_SQUARE"
    ]
  }

  public static FcmToken: ObjectTypeTemplate = {
    name: "FcmToken",
    schema: {
      "tokenId": ObjectType.STRING,
      "device": ObjectType.STRING,
      "timestamp": ObjectType.NUMBER
    },
    example: {
      "tokenId": "enMcvL2-3YDmhocf25g5Nk:APA91bEljU6wo1S7Bj",
      "device": "laptop/computer",
      "timestamp": 1639687246
    }
  }

  public static ProtectionMethod: ObjectTypeTemplate = {
    name: "ProtectionMethod",
    options: [
      "PATENTS",
      "TRADE_SECRETS",
      "COMPUTER_ALGORITHMS",
      "DESIGN",
      "DATABASE",
      "TRADEMARK",
      "COPYRIGHT",
      "INDUSTRIAL_DESIGN"
    ]
  }

  public static EcosystemType: ObjectTypeTemplate = {
    name: "EcosystemType",
    options: [
      "CORPORATE",
      "SOCIAL_IMPACT",
      "THEMATIC",
      "NATIONAL_AND_REGIONAL",
      "DIGITAL_INNOVATION"
    ]
  }

  public static EcosystemServiceType: ObjectTypeTemplate = {
    name: "EcosystemServiceType",
    options: [
      "FINANCIAL_AND_VALUATION",
      "FACILITIES",
      "MARKETING_AND_DESIGN_THINKING",
      "COMMERCIAL_SERVICES",
      "MANAGEMENT_SERVICES",
      "PROTOTYPES_AND_TESTING",
      "BACKEND_SERVICES",
      "IP_PROTECTION_AND_PATENTS",
      "SMART_DATA_AND_AI_SERVICES",
      "BUSINESS_AND_STRATEGY",
      "CHALLENGES",
      "LEGAL_SERVICES",
      "TECHNOLOGY_ACCELERATION",
      "DEMO_DAY",
      "ENGINEERING_SERVICES",
      "WORKSHOPS_AND_EVENTS",
      "OTHER"
    ]
  }

  public static Permission: ObjectTypeTemplate = {
    name: "Permission",
    schema: {
      "ecosystem": ObjectType.STRING,
      "name": ObjectType.STRING
    },
    example: {
      "ecosystem": "DEV",
      "name": "WALL_POST_CREATE"
    }
  }

  public static DeepTechCell: ObjectTypeTemplate = {
    name: "DeepTechCell",
    schema: {
      "type": ObjectType.STRING,
      "kets": ObjectType.STRING_ARRAY
    },
    example: {
      "type": "BIOMATERIALS",
      "kets": [
        "BIOACTIVE_MATERIALS",
        "BIOCOMPATIBLE_ALLOYS_AND_POLYMERS",
        "BIOMIMETICS",
        "BIOSENSING_MATERIALS",
        "DRUG_RELEASING_POLYMERS"
      ]
    }
  }

  public static NotificationChannel: ObjectTypeTemplate = {
    name: "NotificationChannel",
    options: ["EMAIL", "PUSH"]
  }

  public static NotificationType: ObjectTypeTemplate = {
    name: "NotificationType",
    options: [
      "ECOSYSTEM_ACCESS_REQUEST",
      "ECOSYSTEM_WELCOME",
      "ECOSYSTEM_INVITATION",
      "ACTOR_REJECTED",
      "EMAIL_VERIFICATION",
      "AUTOMATIC_PASSWORD_CREATION",
      "WALL_POST_LIKE",
      "WALL_POST_COMMENT",
      "EVENT_CREATE",
      "EVENT_UPDATED",
      "EVENT_ABOUT_TO_START",
      "FOLLOW_UP_ROOM_INVITED",
      "FOLLOW_UP_ROOM_NEWS",
      "FOLLOW_UP_ROOM_MISSED_CALL",
      "FOLLOW_UP_ROOM_NEW_MESSAGE",
      "DIRECT_CHAT_NEW_MESSAGE",
      "DIRECT_CHAT_MISSED_CALL",
      "PUBLIC_CHANNEL_NEWS",
      "PUBLIC_CHANNEL_NEW_MESSAGE",
      "DISCOVERY_NEW_TIPS",
      "DISCOVERY_SEARCHES",
      "CONNECT_VIEWS",
      "RECOVER_PASSWORD"
    ]
  }

  public static PushData: ObjectTypeTemplate = {
    name: "PushData",
    schema: {
      "title": ObjectType.STRING,
      "body": ObjectType.STRING,
      "icon": ObjectType.STRING,
      "fcmTokens": ObjectType.FCM_TOKEN_ARRAY,
      "parameters": ObjectType.STRING_STRING_MAP
    },
    example: {
      "title": "David Suriol has sent you a direct chat message.",
      "body":"Bien!",
      "icon": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg",
      "fcmTokens":[
        {
          "tokenId": "eL0_glBb1BMsdvVGaoMG-t:APA91bFpu39O4PRY3YJDHeRn4RI5Mtp0iDRkq_uQ-oVD4eLgHdjWaiKKI1vCus0dO7trnn7svtg2jGcqaOS67pomwDTzoDljBsACPrLRT6IWhry-dJYksFdWxzmMGQYOZY0Nwb6TFYVP",
          "device": "laptop/computer",
          "timestamp": 1636449280970
        },
        {
          "tokenId": "cfXVHXJ13nqzf6heSBNFBC:APA91bE1UH4habWeaBJZKwrpB2XRZShMKBxdJ_p45r4d46N5f0lT35EDpET-irLIlv9e4uQIs_M0T4KEso0CqCTwjzYM4UrFploqliO0jOvAQCkLK3vfYKxIMh_Q0Xp8aGHsA_j3tx_v",
          "device": "laptop/computer",
          "timestamp": 1638522251181
        }
      ],
      "parameters": {
        "action_url": "https://demo.moonshot.ceo/community/direct/60c7808acb43760a967eda7c",
        "current_chat": "60c7808acb43760a967eda7c",
        "action": "new-tab"
      }
    }
  }

  public static Email: ObjectTypeTemplate = {
    name: "Email",
    schema: {
      "from": ObjectType.EMAIL_FROM,
      "to": ObjectType.STRING,
      "cc": ObjectType.STRING_ARRAY,
      "bcc": ObjectType.STRING_ARRAY,
      "subject": ObjectType.STRING,
      "templateId": ObjectType.STRING,
      "params": ObjectType.STRING_STRING_MAP
    },
    example: {
      "from":{
        "email":null,
        "name":"David Suriol"
      },
      "to":"saulobach1@gmail.com",
      "cc":null,
      "bcc":null,
      "subject":"You have a new message",
      "templateId":"direct_chat_message",
      "params":{
        "image":"https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg",
        "link":"https://demo.moonshot.ceo/community/direct/60c7808acb43760a967eda7c",
        "actorName":"David Suriol"
      }
    }
  }

  public static EmailFrom: ObjectTypeTemplate = {
    name: "EmailFrom",
    schema: {
      "email": ObjectType.STRING,
      "name": ObjectType.STRING
    },
    example: {
      "email": "dsuriol@moonshot.ceo",
      "name": "David Suriol"
    }
  }
}
