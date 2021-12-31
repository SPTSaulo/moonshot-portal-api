import { EventTemplates } from '../../templates/events/EventTemplates';
import { ObjectType } from '../model/ObjectType';
import { EventTemplate } from '../model/EventTemplate';
import { ObjectTypeTemplate } from '../model/ObjectTypeTemplate';
import { Entity } from '../model/Entity';
import { Subject } from 'rxjs';

export class EventTemplateReaderService {

  private eventTemplates: EventTemplate[] = [
    EventTemplates.OnlineEventCreateEvent,
    EventTemplates.OnlineEventUpdateEvent,
    EventTemplates.OnlineEventSubscriptionEvent,
    EventTemplates.OnlineEventUnsubscriptionEvent,
    EventTemplates.OnlineEventDeleteEvent,
    EventTemplates.FaceToFaceEventUpdateEvent,
    EventTemplates.FaceToFaceEventSubscriptionEvent,
    EventTemplates.FaceToFaceEventUnsubscriptionEvent,
    EventTemplates.FaceToFaceEventDeleteEvent,
    EventTemplates.DirectChatCreateEvent,
    EventTemplates.DirectChatDeleteEvent,
    EventTemplates.DirectChatMessageAddEvent,
    EventTemplates.DirectChatMessageDeleteEvent,
    EventTemplates.FollowUpRoomCreateEvent,
    EventTemplates.FollowUpRoomUpdateEvent,
    EventTemplates.FollowUpRoomAddMemberEvent,
    EventTemplates.FollowUpRoomLeaveMemberEvent,
    EventTemplates.FollowUpRoomCloseEvent,
    EventTemplates.FollowUpRoomOpenEvent,
    EventTemplates.FollowUpRoomDeleteEvent,
    EventTemplates.FollowUpRoomMessageAddEvent,
    EventTemplates.FollowUpRoomMessageDeleteEvent,
    EventTemplates.PublicChannelCreateEvent,
    EventTemplates.PublicChannelUpdateEvent,
    EventTemplates.PublicChannelDeleteEvent,
    EventTemplates.PublicChannelSubscribeEvent,
    EventTemplates.PublicChannelUnsubscribeEvent,
    EventTemplates.PublicChannelMessageAddEvent,
    EventTemplates.PublicChannelMessageDeleteEvent,
    EventTemplates.WallPostCreateEvent,
    EventTemplates.WallPostUpdateEvent,
    EventTemplates.WallPostDeleteEvent,
    EventTemplates.WallPostLikeEvent,
    EventTemplates.WallPostUnlikeEvent,
    EventTemplates.WallPostCommentAddEvent,
    EventTemplates.WallPostCommentLikeEvent,
    EventTemplates.WallPostCommentUnlikeEvent,
    EventTemplates.ActorCreateEvent,
    EventTemplates.ActorUpdateEvent,
    EventTemplates.ActorAddNewMemberEvent,
    EventTemplates.ActorDeleteEvent,
    EventTemplates.MemberUpdateEvent,
    EventTemplates.MemberDeleteEvent,
    EventTemplates.MemberCreateEducationEvent,
    EventTemplates.MemberUpdateEducationEvent,
    EventTemplates.MemberDeleteEducationEvent,
    EventTemplates.MemberCreateExperienceEvent,
    EventTemplates.MemberUpdateExperienceEvent,
    EventTemplates.MemberDeleteExperienceEvent,
    EventTemplates.MemberSetFcmTokenEvent,
    EventTemplates.ProjectCreateEvent,
    EventTemplates.ProjectUpdateEvent,
    EventTemplates.ProjectDeleteEvent,
    EventTemplates.EcosystemCreateEvent,
    EventTemplates.EcosystemUpdateEvent,
    EventTemplates.EcosystemInviteEvent,
    EventTemplates.InvitationUpdateEvent,
    EventTemplates.InvitationDeleteEvent,
    EventTemplates.PasswordRecoverEvent,
    EventTemplates.PasswordRequestEvent,
    EventTemplates.PasswordChangeEvent,
    EventTemplates.UserPermsUpdateEvent,
    EventTemplates.UserVerifyEvent,
    EventTemplates.ResendVerificationEmailEvent,
    EventTemplates.BusinessModelCreateEvent,
    EventTemplates.DeepTechCreateEvent,
    EventTemplates.IndustryCreateEvent,
    EventTemplates.SocialInnovationCreateEvent,
    EventTemplates.NotificationCreateEvent,
    EventTemplates.NotificationUpdateEvent,
    EventTemplates.NotificationDeleteEvent,
    EventTemplates.SettingCreateEvent,
    EventTemplates.SettingUpdateEvent
  ]

  private objectTypesTemplates: ObjectTypeTemplate[] = [
    EventTemplates.Member,
    EventTemplates.Experience,
    EventTemplates.Education,
    EventTemplates.NotificationMember,
    EventTemplates.Participant,
    EventTemplates.RoomAction,
    EventTemplates.MessageType,
    EventTemplates.Module,
    EventTemplates.Document,
    EventTemplates.DocumentCategory,
    EventTemplates.FollowUpRoomState,
    EventTemplates.WallPostAttachment,
    EventTemplates.Comment,
    EventTemplates.ActorType,
    EventTemplates.State,
    EventTemplates.ParticipantState,
    EventTemplates.Image,
    EventTemplates.Crop,
    EventTemplates.Facet,
    EventTemplates.Investment,
    EventTemplates.Financial,
    EventTemplates.Address,
    EventTemplates.AddressComponent,
    EventTemplates.AddressType,
    EventTemplates.FcmToken,
    EventTemplates.TrlStage,
    EventTemplates.StartupStage,
    EventTemplates.FundingStage,
    EventTemplates.Currency,
    EventTemplates.ProtectionMethod,
    EventTemplates.EcosystemType,
    EventTemplates.EcosystemServiceType,
    EventTemplates.Permission,
    EventTemplates.DeepTechCell,
    EventTemplates.NotificationChannel,
    EventTemplates.NotificationType,
    EventTemplates.Email,
    EventTemplates.EmailFrom,
    EventTemplates.PushData
  ]

  private modelReferences: ObjectType[] = [
    ObjectType.MEMBER,
    ObjectType.NOTIFICATION_MEMBER,
    ObjectType.PARTICIPANT,
    ObjectType.EXPERIENCE,
    ObjectType.EDUCATION,
    ObjectType.ROOM_ACTION,
    ObjectType.FOLLOW_UP_ROOM_STATE,
    ObjectType.MESSAGE_TYPE,
    ObjectType.MODULE,
    ObjectType.DOCUMENT,
    ObjectType.DOCUMENT_CATEGORY,
    ObjectType.FOLLOW_UP_ROOM_STATE,
    ObjectType.WALL_POST_ATTACHMENT,
    ObjectType.COMMENT,
    ObjectType.ACTOR_TYPE,
    ObjectType.STATE,
    ObjectType.PARTICIPANT_STATE,
    ObjectType.IMAGE,
    ObjectType.CROP,
    ObjectType.FACET,
    ObjectType.INVESTMENT,
    ObjectType.FINANCIAL,
    ObjectType.ADDRESS,
    ObjectType.ADDRESS_COMPONENT,
    ObjectType.ADDRESS_TYPE,
    ObjectType.FCM_TOKEN,
    ObjectType.TRL_STAGE,
    ObjectType.STARTUP_STAGE,
    ObjectType.FUNDING_STAGE,
    ObjectType.CURRENCY,
    ObjectType.PROTECTION_METHOD,
    ObjectType.ECOSYSTEM_TYPE,
    ObjectType.ECOSYSTEM_SERVICE_TYPE,
    ObjectType.PERMISSION,
    ObjectType.DEEP_TECH_CELL,
    ObjectType.NOTIFICATION_CHANNEL,
    ObjectType.NOTIFICATION_TYPE,
    ObjectType.EMAIL,
    ObjectType.EMAIL_FROM,
    ObjectType.PUSH_DATA
  ]

  private objectTypeStringFormat: string[] = this.modelReferences.map(objectType => objectType.toString())

  public rechargeTemplates = new Subject<Entity>();

  public getEventTemplates() {
    return this.eventTemplates
  }

  public getObjectTypesTemplates() {
    return this.objectTypesTemplates
  }

  public isModelReference(type: ObjectType) {
    let searchedType = type.toString()
    if (searchedType.includes("_array")) {
      const endTypePosition = searchedType.indexOf("_array")
      searchedType = searchedType.substring(0, endTypePosition)
    }
    return this.objectTypeStringFormat.includes(searchedType)
  }

  public parseTemplateSchemaToString(schema: Object): string {
    const schemaFormatted = {}
    for (let property in schema) {
      schemaFormatted[property] = this.parseTypeToString(schema[property])
    }
    const stringFormat = this.parseObjectToString(schemaFormatted)
    return stringFormat.replace(/\"/g, "")
  }

  public parseObjectToString(value: Object): string {
    return "\n" + JSON.stringify(value, null, 4)
  }

  public parseTypeToString(type: ObjectType): string {
    switch (type) {
      case ObjectType.STRING: return 'String'
      case ObjectType.STRING_ARRAY: return 'String[]'
      case ObjectType.STRING_STRING_MAP: return 'Map<String,String>'
      case ObjectType.NUMBER: return 'Number'
      case ObjectType.BOOLEAN: return 'Boolean'
      case ObjectType.MEMBER: return 'Member'
      case ObjectType.MEMBER_ARRAY: return 'Member[]'
      case ObjectType.EXPERIENCE: return 'Experience'
      case ObjectType.EXPERIENCE_ARRAY: return 'Experience[]'
      case ObjectType.EDUCATION: return 'Education'
      case ObjectType.EDUCATION_ARRAY: return 'Education[]'
      case ObjectType.NOTIFICATION_MEMBER: return 'NotificationMember'
      case ObjectType.NOTIFICATION_MEMBER_ARRAY: return 'NotificationMember[]'
      case ObjectType.PARTICIPANT: return 'Participant'
      case ObjectType.PARTICIPANT_ARRAY: return 'Participant[]'
      case ObjectType.ROOM_ACTION: return 'RoomAction'
      case ObjectType.ROOM_ACTION_ARRAY: return 'RoomAction[]'
      case ObjectType.MESSAGE_TYPE: return 'MessageType'
      case ObjectType.MODULE: return 'Module'
      case ObjectType.DOCUMENT: return 'Document'
      case ObjectType.DOCUMENT_ARRAY: return 'Document[]'
      case ObjectType.DOCUMENT_CATEGORY: return 'DocumentCategory'
      case ObjectType.FOLLOW_UP_ROOM_STATE: return 'FollowUpRoomState'
      case ObjectType.WALL_POST_ATTACHMENT: return 'WallPostAttachment'
      case ObjectType.COMMENT: return 'Comment'
      case ObjectType.COMMENT_ARRAY: return 'Comment[]'
      case ObjectType.ACTOR_TYPE: return 'ActorType'
      case ObjectType.STATE: return 'State'
      case ObjectType.PARTICIPANT_STATE: return 'ParticipantState'
      case ObjectType.IMAGE: return 'Image'
      case ObjectType.CROP: return 'Crop'
      case ObjectType.FACET: return 'Facet'
      case ObjectType.INVESTMENT: return 'Investment'
      case ObjectType.FINANCIAL: return 'Financial'
      case ObjectType.ADDRESS: return 'Address'
      case ObjectType.ADDRESS_COMPONENT: return 'AddressComponent'
      case ObjectType.ADDRESS_TYPE: return 'AddressType'
      case ObjectType.FCM_TOKEN: return 'FcmToken'
      case ObjectType.FCM_TOKEN_ARRAY: return 'FcmToken[]'
      case ObjectType.TRL_STAGE: return 'TrlStage'
      case ObjectType.STARTUP_STAGE: return 'StartupStage'
      case ObjectType.FUNDING_STAGE: return 'FundingStage'
      case ObjectType.PROTECTION_METHOD: return 'ProtectionMethod'
      case ObjectType.CURRENCY: return 'Currency'
      case ObjectType.ECOSYSTEM_TYPE: return 'EcosystemType'
      case ObjectType.ECOSYSTEM_SERVICE_TYPE: return 'EcosystemServiceType'
      case ObjectType.ECOSYSTEM_SERVICE_TYPE_ARRAY: return 'EcosystemServiceType[]'
      case ObjectType.PERMISSION: return 'Permission'
      case ObjectType.PERMISSION_ARRAY: return 'Permission[]'
      case ObjectType.DEEP_TECH_CELL: return 'DeepTechCell'
      case ObjectType.DEEP_TECH_CELL_ARRAY: return 'DeepTechCell[]'
      case ObjectType.NOTIFICATION_CHANNEL: return 'NotificationChannel'
      case ObjectType.NOTIFICATION_CHANNEL_ARRAY: return 'NotificationChannel[]'
      case ObjectType.NOTIFICATION_TYPE: return 'NotificationType'
      case ObjectType.EMAIL: return 'Email'
      case ObjectType.EMAIL_FROM: return 'EmailFrom'
      case ObjectType.PUSH_DATA: return 'PushData'
      default: return "null"
    }
  }

  public getEntities(): Entity[] {
    const entities: Entity[] = []
    this.eventTemplates.forEach(template => {
      if (!entities.includes(template.entity)) {
        entities.push(template.entity);
      }
    });
    return entities;
  }

  public getEventTemplatesByEntity(entity: Entity) {
    return this.eventTemplates.filter(templates => templates.entity === entity);
  }

  public recharge(entity: Entity) {
    this.rechargeTemplates.next(entity)
  }

}
