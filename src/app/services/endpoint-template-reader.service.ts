import {EndpointTemplate} from '../model/EndpointTemplate';
import {CoreJavascriptTemplates} from '../../templates/endpoints/core/javascript/CoreJavascriptTemplates';
import {Endpoint} from '../model/Endpoint';
import {Language} from '../model/Language';
import {Module} from '../model/Module';
import {CoreJavaTemplates} from '../../templates/endpoints/core/java/CoreJavaTemplates';
import {FederationJavascriptTemplates} from '../../templates/endpoints/federation/javascript/FederationJavascriptTemplates';
import {FederationJavaTemplates} from '../../templates/endpoints/federation/java/FederationJavaTemplates';
import {CommunityJavascriptTemplates} from '../../templates/endpoints/community/javascript/CommunityJavascriptTemplates';
import {CommunityJavaTemplates} from '../../templates/endpoints/community/java/CommunityJavaTemplates';
import {CorePythonTemplates} from '../../templates/endpoints/core/python/CorePythonTemplates';
import {FederationPythonTemplates} from '../../templates/endpoints/federation/python/FederationPythonTemplates';
import {CommunityPythonTemplates} from '../../templates/endpoints/community/python/CommunityPythonTemplates';
import {DatahubJavascriptTemplates} from '../../templates/endpoints/datahub/javascript/DatahubJavascriptTemplates';
import {DatahubJavaTemplates} from '../../templates/endpoints/datahub/java/DatahubJavaTemplates';
import {DatahubPythonTemplates} from '../../templates/endpoints/datahub/python/DatahubPythonTemplates';

export class EndpointTemplateReaderService {

  public getTemplate(endpoint: Endpoint, module: Module, language: Language): EndpointTemplate {
    switch (module) {
      case Module.CORE :
        return this.getCoreTemplate(endpoint, language)
      case Module.COMMUNITY :
        return this.getCommunityTemplate(endpoint, language)
      case Module.FEDERATION :
        return this.getFederationTemplate(endpoint, language)
      case Module.DATAHUB :
        return this.getDatahubTemplate(endpoint, language)
    }
  }

  private getCoreTemplate(endpoint: Endpoint, language: Language): EndpointTemplate {
    switch (language) {
      case Language.JS:
        return this.getCoreJavascriptTemplate(endpoint)
      case Language.JAVA:
        return this.getCoreJavaTemplate(endpoint)
      case Language.PYTHON:
        return this.getCorePythonTemplate(endpoint)
    }
  }

  private getCommunityTemplate(endpoint: Endpoint, language: Language): EndpointTemplate {
    switch (language) {
      case Language.JS:
        return this.getCommunityJavascriptTemplate(endpoint)
      case Language.JAVA:
        return this.getCommunityJavaTemplate(endpoint)
      case Language.PYTHON:
        return this.getCommunityPythonTemplate(endpoint)
    }
  }

  private getFederationTemplate(endpoint: Endpoint, language: Language): EndpointTemplate {
    switch (language) {
      case Language.JS:
        return this.getFederationJavascriptTemplate(endpoint)
      case Language.JAVA:
        return this.getFederationJavaTemplate(endpoint)
      case Language.PYTHON:
        return this.getFederationPythonTemplate(endpoint)
    }
  }

  private getDatahubTemplate(endpoint: Endpoint, language: Language): EndpointTemplate {
    switch (language) {
      case Language.JS:
        return this.getDatahubJavascriptTemplate(endpoint)
      case Language.JAVA:
        return this.getDatahubJavaTemplate(endpoint)
      case Language.PYTHON:
        return this.getDatahubPythonTemplate(endpoint)
    }
  }

  private getCoreJavascriptTemplate(endpoint: Endpoint): EndpointTemplate {
    const templateName = endpoint.name + '_' + endpoint.method
    switch (templateName) {
      case 'version_get':
        return CoreJavascriptTemplates.version_get
      case 'signed-url_get':
        return CoreJavascriptTemplates.signedUrl_get
      case 'openGraph_get':
        return CoreJavascriptTemplates.openGraph_get
      case 'navbar_get':
        return CoreJavascriptTemplates.navbar_get
      case 'industry/:id_get':
        return CoreJavascriptTemplates.industry_id_get
      case 'industries_get':
        return CoreJavascriptTemplates.industries_get
      case 'business-model/:id_get':
        return CoreJavascriptTemplates.businessModel_id_get
      case 'business-models_get':
        return CoreJavascriptTemplates.businessModels_get
      case 'social-innovation/:id_get':
        return CoreJavascriptTemplates.socialInnovation_id_get
      case 'social-innovations_get':
        return CoreJavascriptTemplates.socialInnovations_get
      case 'deep-tech/:id_get':
        return CoreJavascriptTemplates.deepTech_id_get
      case 'deep-techs_get':
        return CoreJavascriptTemplates.deepTechs_get
      case 'ecosystem/initialized_get':
        return CoreJavascriptTemplates.ecosystemInitialized_get
      case 'ecosystem_get':
        return CoreJavascriptTemplates.ecosystem_get
      case 'ecosystem_post':
        return CoreJavascriptTemplates.ecosystem_post
      case 'ecosystem_put':
        return CoreJavascriptTemplates.ecosystem_put
      case 'invitations_get':
        return CoreJavascriptTemplates.invitations_get
      case 'invitation_get':
        return CoreJavascriptTemplates.invitation_get
      case 'invitation_post':
        return CoreJavascriptTemplates.invitation_post
      case 'invitation_put':
        return CoreJavascriptTemplates.invitation_put
      case 'invitation/:id_delete':
        return CoreJavascriptTemplates.invitation_id_delete
      case 'notifications_get':
        return CoreJavascriptTemplates.notifications_get
      case 'notification/:id_get':
        return CoreJavascriptTemplates.notifications_id_get
      case 'notifications/pending_get':
        return CoreJavascriptTemplates.notifications_pending_get
      case 'notification_post':
        return CoreJavascriptTemplates.notification_post
      case 'notification_put':
        return CoreJavascriptTemplates.notification_put
      case 'notification/:id_delete':
        return CoreJavascriptTemplates.notification_id_delete
      case 'setting_post':
        return CoreJavascriptTemplates.setting_post
      case 'setting_put':
        return CoreJavascriptTemplates.setting_put
      case 'setting_get':
        return CoreJavascriptTemplates.setting_get
      default:
        return null
    }
  }

  private getCoreJavaTemplate(endpoint: Endpoint): EndpointTemplate {
    const templateName = endpoint.name + '_' + endpoint.method
    switch (templateName) {
      case 'version_get':
        return CoreJavaTemplates.version_get
      case 'signed-url_get':
        return CoreJavaTemplates.signedUrl_get
      case 'openGraph_get':
        return CoreJavaTemplates.openGraph_get
      case 'navbar_get':
        return CoreJavaTemplates.navbar_get
      case 'industry/:id_get':
        return CoreJavaTemplates.industry_id_get
      case 'industries_get':
        return CoreJavaTemplates.industries_get
      case 'business-model/:id_get':
        return CoreJavaTemplates.businessModel_id_get
      case 'business-models_get':
        return CoreJavaTemplates.businessModels_get
      case 'social-innovation/:id_get':
        return CoreJavaTemplates.socialInnovation_id_get
      case 'social-innovations_get':
        return CoreJavaTemplates.socialInnovations_get
      case 'deep-tech/:id_get':
        return CoreJavaTemplates.deepTech_id_get
      case 'deep-techs_get':
        return CoreJavaTemplates.deepTechs_get
      case 'ecosystem/initialized_get':
        return CoreJavaTemplates.ecosystemInitialized_get
      case 'ecosystem_get':
        return CoreJavaTemplates.ecosystem_get
      case 'ecosystem_post':
        return CoreJavaTemplates.ecosystem_post
      case 'ecosystem_put':
        return CoreJavaTemplates.ecosystem_put
      case 'invitations_get':
        return CoreJavaTemplates.invitations_get
      case 'invitation_get':
        return CoreJavaTemplates.invitation_get
      case 'invitation_post':
        return CoreJavaTemplates.invitation_post
      case 'invitation_put':
        return CoreJavaTemplates.invitation_put
      case 'invitation/:id_delete':
        return CoreJavaTemplates.invitation_id_delete
      case 'notifications_get':
        return CoreJavaTemplates.notifications_get
      case 'notification/:id_get':
        return CoreJavaTemplates.notifications_id_get
      case 'notifications/pending_get':
        return CoreJavaTemplates.notifications_pending_get
      case 'notification_post':
        return CoreJavaTemplates.notification_post
      case 'notification_put':
        return CoreJavaTemplates.notification_put
      case 'notification/:id_delete':
        return CoreJavaTemplates.notification_id_delete
      case 'setting_post':
        return CoreJavaTemplates.setting_post
      case 'setting_put':
        return CoreJavaTemplates.setting_put
      case 'setting_get':
        return CoreJavaTemplates.setting_get
      default:
        return null
    }
  }

  private getCorePythonTemplate(endpoint: Endpoint): EndpointTemplate {
    const templateName = endpoint.name + '_' + endpoint.method
    switch (templateName) {
      case 'version_get':
        return CorePythonTemplates.version_get
      case 'signed-url_get':
        return CorePythonTemplates.signedUrl_get
      case 'openGraph_get':
        return CorePythonTemplates.openGraph_get
      case 'navbar_get':
        return CorePythonTemplates.navbar_get
      case 'industry/:id_get':
        return CorePythonTemplates.industry_id_get
      case 'industries_get':
        return CorePythonTemplates.industries_get
      case 'business-model/:id_get':
        return CorePythonTemplates.businessModel_id_get
      case 'business-models_get':
        return CorePythonTemplates.businessModels_get
      case 'social-innovation/:id_get':
        return CorePythonTemplates.socialInnovation_id_get
      case 'social-innovations_get':
        return CorePythonTemplates.socialInnovations_get
      case 'deep-tech/:id_get':
        return CorePythonTemplates.deepTech_id_get
      case 'deep-techs_get':
        return CorePythonTemplates.deepTechs_get
      case 'ecosystem/initialized_get':
        return CorePythonTemplates.ecosystemInitialized_get
      case 'ecosystem_get':
        return CorePythonTemplates.ecosystem_get
      case 'ecosystem_post':
        return CorePythonTemplates.ecosystem_post
      case 'ecosystem_put':
        return CorePythonTemplates.ecosystem_put
      case 'invitations_get':
        return CorePythonTemplates.invitations_get
      case 'invitation_get':
        return CorePythonTemplates.invitation_get
      case 'invitation_post':
        return CorePythonTemplates.invitation_post
      case 'invitation_put':
        return CorePythonTemplates.invitation_put
      case 'invitation/:id_delete':
        return CorePythonTemplates.invitation_id_delete
      case 'notifications_get':
        return CorePythonTemplates.notifications_get
      case 'notification/:id_get':
        return CorePythonTemplates.notifications_id_get
      case 'notifications/pending_get':
        return CorePythonTemplates.notifications_pending_get
      case 'notification_post':
        return CorePythonTemplates.notification_post
      case 'notification_put':
        return CorePythonTemplates.notification_put
      case 'notification/:id_delete':
        return CorePythonTemplates.notification_id_delete
      case 'setting_post':
        return CorePythonTemplates.setting_post
      case 'setting_put':
        return CorePythonTemplates.setting_put
      case 'setting_get':
        return CorePythonTemplates.setting_get
      default:
        return null
    }
  }

  private getCommunityJavascriptTemplate(endpoint: Endpoint): EndpointTemplate {
    const templateName = endpoint.name + '_' + endpoint.method
    switch (templateName) {
      case 'version_get': return CommunityJavascriptTemplates.version_get
      case 'online-events_get': return CommunityJavascriptTemplates.online_events_get
      case 'online-event/:id_get': return CommunityJavascriptTemplates.online_events_id_get
      case 'online-event_post': return CommunityJavascriptTemplates.online_event_post
      case 'online-event_put': return CommunityJavascriptTemplates.online_event_put
      case 'online-event/:id_delete': return CommunityJavascriptTemplates.online_event_id_delete
      case 'online-event/admin_put': return CommunityJavascriptTemplates.online_event_admin_put
      case 'online-event/subscription_put': return CommunityJavascriptTemplates.online_event_subscription_put
      case 'online-event/unsubscription_put': return CommunityJavascriptTemplates.online_event_unsubscription_put
      case 'online-event/:id/admin_delete': return CommunityJavascriptTemplates.online_event_id_admin_delete
      case 'face-to-face-events_get': return CommunityJavascriptTemplates.face_to_face_events_get
      case 'face-to-face-event/:id_get': return CommunityJavascriptTemplates.face_to_face_event_id_get
      case 'face-to-face-event_post': return CommunityJavascriptTemplates.face_to_face_event_post
      case 'face-to-face-event_put': return CommunityJavascriptTemplates.face_to_face_event_put
      case 'face-to-face-event/:id_delete': return CommunityJavascriptTemplates.face_to_face_event_id_delete
      case 'face-to-face-event/admin_put': return CommunityJavascriptTemplates.face_to_face_event_admin_put
      case 'face-to-face-event/subscription_put': return CommunityJavascriptTemplates.face_to_face_event_subscription_put
      case 'face-to-face-event/unsubscription_put': return CommunityJavascriptTemplates.face_to_face_event_unsubscription_put
      case 'face-to-face-event/:id/admin_delete': return CommunityJavascriptTemplates.face_to_face_event_id_admin_delete
      case 'room-documents/:room_id_get': return CommunityJavascriptTemplates.room_documents_room_id_get
      case 'room-links/:room_id_get': return CommunityJavascriptTemplates.room_links_room_id_get
      case 'direct-chats_get': return CommunityJavascriptTemplates.direct_chats_get
      case 'direct-chats/all_get': return CommunityJavascriptTemplates.direct_chats_all_get
      case 'direct-chat/:id_get': return CommunityJavascriptTemplates.direct_chat_id_get
      case 'direct-chat_post': return CommunityJavascriptTemplates.direct_chat_post
      case 'direct-chat/:id_delete': return CommunityJavascriptTemplates.direct_chat_id_delete
      case 'direct-chat/message_post': return CommunityJavascriptTemplates.direct_chat_message_post
      case 'direct-chat/messages/:room_id_get': return CommunityJavascriptTemplates.direct_chat_messages_room_id_get
      case 'direct-chat/message/:id_delete': return CommunityJavascriptTemplates.direct_chat_message_id_delete
      case 'follow-up-rooms_get': return CommunityJavascriptTemplates.follow_up_rooms_get
      case 'follow-up-rooms/all_get': return CommunityJavascriptTemplates.follow_up_rooms_all_get
      case 'follow-up-room/:id_get': return CommunityJavascriptTemplates.follow_up_room_id_get
      case 'follow-up-room_post': return CommunityJavascriptTemplates.follow_up_room_post
      case 'follow-up-room_put': return CommunityJavascriptTemplates.follow_up_room_put
      case 'follow-up-room/add-member_put': return CommunityJavascriptTemplates.follow_up_room_add_member_put
      case 'follow-up-room/leave-member_put': return CommunityJavascriptTemplates.follow_up_room_leave_member_put
      case 'follow-up-room/open_put': return CommunityJavascriptTemplates.follow_up_room_open_put
      case 'follow-up-room/close_put': return CommunityJavascriptTemplates.follow_up_room_close_put
      case 'follow-up-room/:id_delete': return CommunityJavascriptTemplates.follow_up_room_id_delete
      case 'follow-up-room/message_post': return CommunityJavascriptTemplates.follow_up_room_message_post
      case 'follow-up-room/message/:id_delete': return CommunityJavascriptTemplates.follow_up_room_message_id_delete
      case 'follow-up-room/message/:id/admin_delete': return CommunityJavascriptTemplates.follow_up_room_message_id_admin_delete
      case 'follow-up-room/messages/:room_id_get': return CommunityJavascriptTemplates.follow_up_room_messages_room_id_get
      case 'public-channels_get': return CommunityJavascriptTemplates.public_channels_get
      case 'public-channel/:id_get': return CommunityJavascriptTemplates.public_channel_id_get
      case 'public-channel_post': return CommunityJavascriptTemplates.public_channel_post
      case 'public-channel_put': return CommunityJavascriptTemplates.public_channel_put
      case 'public-channel/:id_delete': return CommunityJavascriptTemplates.public_channel_id_delete
      case 'public-channel/admin_put': return CommunityJavascriptTemplates.public_channel_admin_put
      case 'public-channel/:id/admin_delete': return CommunityJavascriptTemplates.public_channel_id_admin_delete
      case 'public-channel/subscribe_put': return CommunityJavascriptTemplates.public_channel_subscribe_put
      case 'public-channel/unsubscribe_put': return CommunityJavascriptTemplates.public_channel_unsubscribe_put
      case 'public-channel/message_post': return CommunityJavascriptTemplates.public_channel_message_post
      case 'public-channel/message/:id_delete': return CommunityJavascriptTemplates.public_channel_message_id_delete
      case 'public-channel/message/:id/admin_delete': return CommunityJavascriptTemplates.public_channel_message_id_admin_delete
      case 'public-channel/messages/:room_id_get': return CommunityJavascriptTemplates.public_channel_messages_room_id_get
      case 'wall-post_post': return CommunityJavascriptTemplates.wall_post_post
      case 'wall-post_put': return CommunityJavascriptTemplates.wall_post_put
      case 'wall-post/:id_delete': return CommunityJavascriptTemplates.wall_post_id_delete
      case 'wall-post/admin_put': return CommunityJavascriptTemplates.wall_post_admin_put
      case 'wall-post/:id/admin_delete': return CommunityJavascriptTemplates.wall_post_id_admin_delete
      case 'wall-post/like_put': return CommunityJavascriptTemplates.wall_post_like_put
      case 'wall-post/unlike_put': return CommunityJavascriptTemplates.wall_post_unlike_put
      case 'wall-post/comment_post': return CommunityJavascriptTemplates.wall_post_comment_post
      case 'wall-post/comment/like_put': return CommunityJavascriptTemplates.wall_post_comment_like_put
      case 'wall-post/comment/unlike_put': return CommunityJavascriptTemplates.wall_post_comment_unlike_put
      case 'wall-post/:id_get': return CommunityJavascriptTemplates.wall_post_id_get
      case 'wall-posts_get': return CommunityJavascriptTemplates.wall_posts_get
      case 'actors_get': return CommunityJavascriptTemplates.actors_get
      case 'actors/import/csv_post': return CommunityJavascriptTemplates.actors_import_csv_post
      case 'actors/by-name-and-state_get': return CommunityJavascriptTemplates.actors_by_name_and_state_get
      case 'actors/by-type_get': return CommunityJavascriptTemplates.actors_by_type_get
      case 'actors/by-state_get': return CommunityJavascriptTemplates.actors_by_state_get
      case 'actors/by-member_get': return CommunityJavascriptTemplates.actors_by_member_get
      case 'actor/:id_get': return CommunityJavascriptTemplates.actor_id_get
      case 'actor_post': return CommunityJavascriptTemplates.actor_post
      case 'actor_put': return CommunityJavascriptTemplates.actor_put
      case 'actor/accept_put': return CommunityJavascriptTemplates.actor_accept_put
      case 'actor/reject_put': return CommunityJavascriptTemplates.actor_reject_put
      case 'actor/:id_delete': return CommunityJavascriptTemplates.actor_id_delete
      case 'fcmToken_put': return CommunityJavascriptTemplates.fcm_token_put
      case 'member/logged-in_get': return CommunityJavascriptTemplates.member_logged_in_get
      case 'members_get': return CommunityJavascriptTemplates.members_get
      case 'member/:id_get': return CommunityJavascriptTemplates.member_id_get
      case 'member/:id/marker_get': return CommunityJavascriptTemplates.member_id_marker_get
      case 'member_put': return CommunityJavascriptTemplates.member_put
      case 'member/:id_delete': return CommunityJavascriptTemplates.member_id_delete
      case 'education_post': return CommunityJavascriptTemplates.education_post
      case 'education_put': return CommunityJavascriptTemplates.education_put
      case 'education/:id_delete': return CommunityJavascriptTemplates.education_id_delete
      case 'experience_post': return CommunityJavascriptTemplates.experience_post
      case 'experience_put': return CommunityJavascriptTemplates.experience_put
      case 'experience/:id_delete': return CommunityJavascriptTemplates.experience_id_delete
      case 'projects_get': return CommunityJavascriptTemplates.projects_get
      case 'project/:id_get': return CommunityJavascriptTemplates.project_id_get
      case 'project_post': return CommunityJavascriptTemplates.project_post
      case 'project_put': return CommunityJavascriptTemplates.project_put
      case 'project/:id_delete': return CommunityJavascriptTemplates.project_id_delete
      default: return null
    }
  }

  private getCommunityJavaTemplate(endpoint: Endpoint): EndpointTemplate {
    const templateName = endpoint.name + '_' + endpoint.method
    switch (templateName) {
      case 'version_get': return CommunityJavaTemplates.version_get
      case 'online-events_get': return CommunityJavaTemplates.online_events_get
      case 'online-events/:id_get': return CommunityJavaTemplates.online_events_id_get
      case 'online-event_post': return CommunityJavaTemplates.online_event_post
      case 'online-event_put': return CommunityJavaTemplates.online_event_put
      case 'online-event/:id_delete': return CommunityJavaTemplates.online_event_id_delete
      case 'online-event/admin_put': return CommunityJavaTemplates.online_event_admin_put
      case 'online-event/subscription_put': return CommunityJavaTemplates.online_event_subscription_put
      case 'online-event/unsubscription_put': return CommunityJavaTemplates.online_event_unsubscription_put
      case 'online-event/:id/admin_delete': return CommunityJavaTemplates.online_event_id_admin_delete
      case 'face-to-face-events_get': return CommunityJavaTemplates.face_to_face_events_get
      case 'face-to-face-event/:id_get': return CommunityJavaTemplates.face_to_face_event_id_get
      case 'face-to-face-event_post': return CommunityJavaTemplates.face_to_face_event_post
      case 'face-to-face-event_put': return CommunityJavaTemplates.face_to_face_event_put
      case 'face-to-face-event/:id_delete': return CommunityJavaTemplates.face_to_face_event_id_delete
      case 'face-to-face-event/admin_put': return CommunityJavaTemplates.face_to_face_event_admin_put
      case 'face-to-face-event/subscription_put': return CommunityJavaTemplates.face_to_face_event_subscription_put
      case 'face-to-face-event/unsubscription_put': return CommunityJavaTemplates.face_to_face_event_unsubscription_put
      case 'face-to-face-event/:id/admin_delete': return CommunityJavaTemplates.face_to_face_event_id_admin_delete
      case 'room-documents/:room_id_get': return CommunityJavaTemplates.room_documents_room_id_get
      case 'room-links/:room_id_get': return CommunityJavaTemplates.room_links_room_id_get
      case 'direct-chats_get': return CommunityJavaTemplates.direct_chats_get
      case 'direct-chats/all_get': return CommunityJavaTemplates.direct_chats_all_get
      case 'direct-chat/:id_get': return CommunityJavaTemplates.direct_chat_id_get
      case 'direct-chat_post': return CommunityJavaTemplates.direct_chat_post
      case 'direct-chat/:id_delete': return CommunityJavaTemplates.direct_chat_id_delete
      case 'direct-chat/message_post': return CommunityJavaTemplates.direct_chat_message_post
      case 'direct-chat/messages/:room_id_get': return CommunityJavaTemplates.direct_chat_messages_room_id_get
      case 'direct-chat/message/:id_delete': return CommunityJavaTemplates.direct_chat_message_id_delete
      case 'follow-up-rooms_get': return CommunityJavaTemplates.follow_up_rooms_get
      case 'follow-up-rooms/all_get': return CommunityJavaTemplates.follow_up_rooms_all_get
      case 'follow-up-room/:room_id_get': return CommunityJavaTemplates.follow_up_room_id_get
      case 'follow-up-room_post': return CommunityJavaTemplates.follow_up_room_post
      case 'follow_up_room_put': return CommunityJavaTemplates.follow_up_room_put
      case 'follow-up-room/add-member_put': return CommunityJavaTemplates.follow_up_room_add_member_put
      case 'follow-up-room/leave-member_put': return CommunityJavaTemplates.follow_up_room_leave_member_put
      case 'follow-up-room/open_put': return CommunityJavaTemplates.follow_up_room_open_put
      case 'follow-up-room/close_put': return CommunityJavaTemplates.follow_up_room_close_put
      case 'follow-up-room/:id_delete': return CommunityJavaTemplates.follow_up_room_id_delete
      case 'follow-up-room/message_post': return CommunityJavaTemplates.follow_up_room_message_post
      case 'follow-up-room/message/:id_delete': return CommunityJavaTemplates.follow_up_room_message_id_delete
      case 'follow-up-room/message/:id/admin_delete': return CommunityJavaTemplates.follow_up_room_message_id_admin_delete
      case 'follow-up-room/messages/:room_id_get': return CommunityJavaTemplates.follow_up_room_messages_room_id_get
      case 'public-channels_get': return CommunityJavaTemplates.public_channels_get
      case 'public-channel/:id_get': return CommunityJavaTemplates.public_channel_id_get
      case 'public-channel_post': return CommunityJavaTemplates.public_channel_post
      case 'public-channel_put': return CommunityJavaTemplates.public_channel_put
      case 'public-channel/:id_delete': return CommunityJavaTemplates.public_channel_id_delete
      case 'public-channel/:id/admin/delete': return CommunityJavaTemplates.public_channel_id_admin_delete
      case 'public-channel/subscribe_put': return CommunityJavaTemplates.public_channel_subscribe_put
      case 'public-channel/unsubscribe_put': return CommunityJavaTemplates.public_channel_unsubscribe_put
      case 'public-channel/message_post': return CommunityJavaTemplates.public_channel_message_post
      case 'public-channel/message/:id_delete': return CommunityJavaTemplates.public_channel_message_id_delete
      case 'public-channel/message/:id/admin_delete': return CommunityJavaTemplates.public_channel_message_id_admin_delete
      case 'public-channel/messages/:room_id_get': return CommunityJavaTemplates.public_channel_messages_room_id_get
      case 'wall-post_post': return CommunityJavaTemplates.wall_posts_get
      case 'wall-post/:id_delete': return CommunityJavaTemplates.wall_post_id_delete
      case 'wall-post/admin_put': return CommunityJavaTemplates.wall_post_admin_put
      case 'wall-post/:id/admin_delete': return CommunityJavaTemplates.wall_post_id_admin_delete
      case 'wall-post/like_put': return CommunityJavaTemplates.wall_post_like_put
      case 'wall-post/unlike_put': return CommunityJavaTemplates.wall_post_unlike_put
      case 'wall-post/comment_post': return CommunityJavaTemplates.wall_post_comment_post
      case 'wall-post/comment/like_put': return CommunityJavaTemplates.wall_post_comment_like_put
      case 'wall-post/comment/unlike_put': return CommunityJavaTemplates.wall_post_comment_unlike_put
      case 'wall-post/:id_get': return CommunityJavaTemplates.wall_post_id_get
      case 'wall-posts_get': return CommunityJavaTemplates.wall_posts_get
      case 'actors_get': return CommunityJavaTemplates.actors_get
      case 'actors/import/csv_post': return CommunityJavaTemplates.actors_import_csv_post
      case 'actors/by-name-and-state_get': return CommunityJavaTemplates.actors_by_name_and_state_get
      case 'actors/by-type_get': return CommunityJavaTemplates.actors_by_type_get
      case 'actors/by-state_get': return CommunityJavaTemplates.actors_by_state_get
      case 'actors/by-member_get': return CommunityJavaTemplates.actors_by_member_get
      case 'actor/:id_get': return CommunityJavaTemplates.actors_id_get
      case 'actor_post': return CommunityJavaTemplates.actor_post
      case 'actor_put': return CommunityJavaTemplates.actor_put
      case 'actor/accept_put': return CommunityJavaTemplates.actor_accept_put
      case 'actor/reject_put': return CommunityJavaTemplates.actor_reject_put
      case 'actor/:id_delete': return CommunityJavaTemplates.actor_id_delete
      case 'fcmToken_put': return CommunityJavaTemplates.fcm_token_put
      case 'member/logged-in_get': return CommunityJavaTemplates.member_logged_in_get
      case 'members_get': return CommunityJavaTemplates.members_get
      case 'member/:id_get': return CommunityJavaTemplates.member_id_get
      case 'member/:id/marker_get': return CommunityJavaTemplates.member_id_marker_get
      case 'member_put': return CommunityJavaTemplates.member_put
      case 'member/:id_delete': return CommunityJavaTemplates.member_id_delete
      case 'education_post': return CommunityJavaTemplates.education_post
      case 'education_put': return CommunityJavaTemplates.education_put
      case 'education/:id_delete': return CommunityJavaTemplates.education_id_delete
      case 'experience_post': return CommunityJavaTemplates.experience_post
      case 'experience_put': return CommunityJavaTemplates.experience_put
      case 'experience/:id_delete': return CommunityJavaTemplates.experience_id_delete
      case 'projects_get': return CommunityJavaTemplates.projects_get
      case 'project/:id_get': return CommunityJavaTemplates.project_id_get
      case 'project_post': return CommunityJavaTemplates.project_post
      case 'project_put': return CommunityJavaTemplates.project_put
      case 'project/:id_delete': return CommunityJavaTemplates.project_delete
      default: return null
    }
  }

  private getCommunityPythonTemplate(endpoint: Endpoint): EndpointTemplate {
    const templateName = endpoint.name + '_' + endpoint.method
    switch (templateName) {
      case 'version_get':
        return CommunityPythonTemplates.version_get
      case 'online-events_get':
        return CommunityPythonTemplates.online_events_get
      case 'online-event/:id_get':
        return CommunityPythonTemplates.online_events_id_get
      case 'online-event_post':
        return CommunityPythonTemplates.online_event_post
      case 'online-event_put':
        return CommunityPythonTemplates.online_event_put
      case 'online-event/:id_delete':
        return CommunityPythonTemplates.online_event_id_delete
      case 'online-event/admin_put':
        return CommunityPythonTemplates.online_event_admin_put
      case 'online-event/subscription_put':
        return CommunityPythonTemplates.online_event_subscription_put
      case 'online-event/unsubscription_put':
        return CommunityPythonTemplates.online_event_unsubscription_put
      case 'online-event/:id/admin_delete':
        return CommunityPythonTemplates.online_event_id_admin_delete
      case 'face-to-face-events_get':
        return CommunityPythonTemplates.face_to_face_events_get
      case 'face-to-face-event/:id_get':
        return CommunityPythonTemplates.face_to_face_event_id_get
      case 'face-to-face-event_post':
        return CommunityPythonTemplates.face_to_face_event_post
      case 'face-to-face-event_put':
        return CommunityPythonTemplates.face_to_face_event_put
      case 'face-to-face-event/:id_delete':
        return CommunityPythonTemplates.face_to_face_event_id_delete
      case 'face-to-face-event/admin_put':
        return CommunityPythonTemplates.face_to_face_event_admin_put
      case 'face-to-face-event/subscription_put':
        return CommunityPythonTemplates.face_to_face_event_subscription_put
      case 'face-to-face-event/unsubscription_put':
        return CommunityPythonTemplates.face_to_face_event_unsubscription_put
      case 'face-to-face-event/:id/admin_delete':
        return CommunityPythonTemplates.face_to_face_event_id_admin_delete
      case 'room-documents/:room_id_get':
        return CommunityPythonTemplates.room_documents_room_id_get
      case 'room-links/:room_id_get':
        return CommunityPythonTemplates.room_links_room_id_get
      case 'direct-chats_get':
        return CommunityPythonTemplates.direct_chats_get
      case 'direct-chats/all_get':
        return CommunityPythonTemplates.direct_chats_all_get
      case 'direct-chat/:id_get':
        return CommunityPythonTemplates.direct_chat_id_get
      case 'direct-chat_post':
        return CommunityPythonTemplates.direct_chat_post
      case 'direct-chat/:id_delete':
        return CommunityPythonTemplates.direct_chat_id_delete
      case 'direct-chat/message_post':
        return CommunityPythonTemplates.direct_chat_message_post
      case 'direct-chat/messages/:room_id_get':
        return CommunityPythonTemplates.direct_chat_messages_room_id_get
      case 'direct-chat/message/:id_delete':
        return CommunityPythonTemplates.direct_chat_message_id_delete
      case 'follow-up-rooms_get':
        return CommunityPythonTemplates.follow_up_rooms_get
      case 'follow-up-rooms/all_get':
        return CommunityPythonTemplates.follow_up_rooms_all_get
      case 'follow-up-room/:id_get':
        return CommunityPythonTemplates.follow_up_room_id_get
      case 'follow-up-room_post':
        return CommunityPythonTemplates.follow_up_room_post
      case 'follow-up-room_put':
        return CommunityPythonTemplates.follow_up_room_put
      case 'follow-up-room/add-member_put':
        return CommunityPythonTemplates.follow_up_room_add_member_put
      case 'follow-up-room/leave-member_put':
        return CommunityPythonTemplates.follow_up_room_leave_member_put
      case 'follow-up-room/open_put':
        return CommunityPythonTemplates.follow_up_room_open_put
      case 'follow-up-room/close_put':
        return CommunityPythonTemplates.follow_up_room_close_put
      case 'follow-up-room/:id_delete':
        return CommunityPythonTemplates.follow_up_room_id_delete
      case 'follow-up-room/message_post':
        return CommunityPythonTemplates.follow_up_room_message_post
      case 'follow-up-room/message/:id_delete':
        return CommunityPythonTemplates.follow_up_room_message_id_delete
      case 'follow-up-room/message/:id/admin_delete':
        return CommunityPythonTemplates.follow_up_room_message_id_admin_delete
      case 'follow-up-room/messages/:room_id_get':
        return CommunityPythonTemplates.follow_up_room_messages_room_id_get
      case 'public-channels_get':
        return CommunityPythonTemplates.public_channels_get
      case 'public-channel/:id_get':
        return CommunityPythonTemplates.public_channel_id_get
      case 'public-channel_post':
        return CommunityPythonTemplates.public_channel_post
      case 'public-channel_put':
        return CommunityPythonTemplates.public_channel_put
      case 'public-channel/:id_delete':
        return CommunityPythonTemplates.public_channel_id_delete
      case 'public-channel/admin_put':
        return CommunityPythonTemplates.public_channel_admin_put
      case 'public-channel/:id/admin_delete':
        return CommunityPythonTemplates.public_channel_id_admin_delete
      case 'public-channel/subscribe_put':
        return CommunityPythonTemplates.public_channel_subscribe_put
      case 'public-channel/unsubscribe_put':
        return CommunityPythonTemplates.public_channel_unsubscribe_put
      case 'public-channel/message_post':
        return CommunityPythonTemplates.public_channel_message_post
      case 'public-channel/message/:id_delete':
        return CommunityPythonTemplates.public_channel_message_id_delete
      case 'public-channel/message/:id/admin_delete':
        return CommunityPythonTemplates.public_channel_message_id_admin_delete
      case 'public-channel/messages/:room_id_get':
        return CommunityPythonTemplates.public_channel_messages_room_id_get
      case 'wall-post_post':
        return CommunityPythonTemplates.wall_post_post
      case 'wall-post_put':
        return CommunityPythonTemplates.wall_post_put
      case 'wall-post/:id_delete':
        return CommunityPythonTemplates.wall_post_id_delete
      case 'wall-post/admin_put':
        return CommunityPythonTemplates.wall_post_admin_put
      case 'wall-post/:id/admin_delete':
        return CommunityPythonTemplates.wall_post_id_admin_delete
      case 'wall-post/like_put':
        return CommunityPythonTemplates.wall_post_like_put
      case 'wall-post/unlike_put':
        return CommunityPythonTemplates.wall_post_unlike_put
      case 'wall-post/comment_post':
        return CommunityPythonTemplates.wall_post_comment_post
      case 'wall-post/comment/like_put':
        return CommunityPythonTemplates.wall_post_comment_like_put
      case 'wall-post/comment/unlike_put':
        return CommunityPythonTemplates.wall_post_comment_unlike_put
      case 'wall-post/:id_get':
        return CommunityPythonTemplates.wall_post_id_get
      case 'wall-posts_get':
        return CommunityPythonTemplates.wall_posts_get
      case 'actors_get':
        return CommunityPythonTemplates.actors_get
      case 'actors/import/csv_post':
        return CommunityPythonTemplates.actors_import_csv_post
      case 'actors/by-name-and-state_get':
        return CommunityPythonTemplates.actors_by_name_and_state_get
      case 'actors/by-type_get':
        return CommunityPythonTemplates.actors_by_type_get
      case 'actors/by-state_get':
        return CommunityPythonTemplates.actors_by_state_get
      case 'actors/by-member_get':
        return CommunityPythonTemplates.actors_by_member_get
      case 'actor/:id_get':
        return CommunityPythonTemplates.actor_id_get
      case 'actor_post':
        return CommunityPythonTemplates.actor_post
      case 'actor_put':
        return CommunityPythonTemplates.actor_put
      case 'actor/accept_put':
        return CommunityPythonTemplates.actor_accept_put
      case 'actor/reject_put':
        return CommunityPythonTemplates.actor_reject_put
      case 'actor/:id_delete':
        return CommunityPythonTemplates.actor_id_delete
      case 'fcmToken_put':
        return CommunityPythonTemplates.fcm_token_put
      case 'member/logged-in_get':
        return CommunityPythonTemplates.member_logged_in_get
      case 'members_get':
        return CommunityPythonTemplates.members_get
      case 'member/:id_get':
        return CommunityPythonTemplates.member_id_get
      case 'member/:id/marker_get':
        return CommunityPythonTemplates.member_id_marker_get
      case 'member_put':
        return CommunityPythonTemplates.member_put
      case 'member/:id_delete':
        return CommunityPythonTemplates.member_id_delete
      case 'education_post':
        return CommunityPythonTemplates.education_post
      case 'education_put':
        return CommunityPythonTemplates.education_put
      case 'education/:id_delete':
        return CommunityPythonTemplates.education_id_delete
      case 'experience_post':
        return CommunityPythonTemplates.experience_post
      case 'experience_put':
        return CommunityPythonTemplates.experience_put
      case 'experience/:id_delete':
        return CommunityPythonTemplates.experience_id_delete
      case 'projects_get':
        return CommunityPythonTemplates.projects_get
      case 'project/:id_get':
        return CommunityPythonTemplates.project_id_get
      case 'project_post':
        return CommunityPythonTemplates.project_post
      case 'project_put':
        return CommunityPythonTemplates.project_put
      case 'project/:id_delete':
        return CommunityPythonTemplates.project_id_delete
      default:
        return null
    }
  }

  private getFederationJavaTemplate(endpoint: Endpoint): EndpointTemplate {
    const templateName = endpoint.name + '_' + endpoint.method
    switch (templateName) {
      case 'version_get': return FederationJavaTemplates.version_get
      case 'login_post': return FederationJavaTemplates.login_post
      case 'logout_post': return FederationJavaTemplates.logout_get
      case 'token_post': return FederationJavaTemplates.token_post
      case 'communities_get': return FederationJavaTemplates.communities_get
      case 'modules_get': return FederationJavaTemplates.modules_get
      case 'user/:id_get': return FederationJavaTemplates.user_id_get
      case 'user/by/email_get': return FederationJavaTemplates.user_by_email_get
      case 'users_get': return FederationJavaTemplates.users_get
      case 'users/by/roles_get': return FederationJavaTemplates.users_by_roles_get
      case 'users/by/perms_get': return FederationJavaTemplates.users_by_perms_get
      case 'users/perms_get': return FederationJavaTemplates.users_perms_get
      case 'users/perms_put': return FederationJavaTemplates.users_perms_put
      case 'users/verify_put': return FederationJavaTemplates.user_verify_put
      case 'user/verify/re-send_put': return FederationJavaTemplates.user_verify_resend_put
      case 'password/last-modification_get': return FederationJavaTemplates.password_last_modification_get
      case 'password/request_post': return FederationJavaTemplates.password_request_post
      case 'password/recover_post': return FederationJavaTemplates.password_recover_post
      case 'password/change_put': return FederationJavaTemplates.password_change_put
      case 'verifications_get': return FederationJavaTemplates.verifications_get
      default: return null
    }
  }


  private getFederationJavascriptTemplate(endpoint: Endpoint): EndpointTemplate {
    const templateName = endpoint.name + '_' + endpoint.method
    switch (templateName) {
      case 'version_get': return FederationJavascriptTemplates.version_get
      case 'login_post': return FederationJavascriptTemplates.login_post
      case 'logout_get': return FederationJavascriptTemplates.logout_get
      case 'token_post': return FederationJavascriptTemplates.token_post
      case 'communities_get': return FederationJavascriptTemplates.communities_get
      case 'modules_get': return FederationJavascriptTemplates.modules_get
      case 'user/:id_get': return FederationJavascriptTemplates.user_id_get
      case 'user/by/email_get': return FederationJavascriptTemplates.user_by_email_get
      case 'users_get': return FederationJavascriptTemplates.users_get
      case 'users/by/roles_get': return FederationJavascriptTemplates.users_by_roles_get
      case 'users/by/perms_get': return FederationJavascriptTemplates.users_by_perms_get
      case 'users/perms_get': return FederationJavascriptTemplates.users_perms_get
      case 'users/perms_put': return FederationJavascriptTemplates.users_perms_put
      case 'user/verify_put': return FederationJavascriptTemplates.user_verify_put
      case 'user/verify/re-send_put': return FederationJavascriptTemplates.user_verify_resend_put
      case 'password/last-modification_get': return FederationJavascriptTemplates.password_last_modification_get
      case 'password/request_post': return FederationJavascriptTemplates.password_request_post
      case 'password/recover_post': return FederationJavascriptTemplates.password_recover_post
      case 'password/change_put': return FederationJavascriptTemplates.password_change_put
      case 'verifications_get': return FederationJavascriptTemplates.verifications_get
      default: return null
    }
  }

  public getFederationPythonTemplate(endpoint: Endpoint): EndpointTemplate {
    const templateName = endpoint.name + '_' + endpoint.method
    switch (templateName) {
      case 'version_get': return FederationPythonTemplates.version_get
      case 'login_post': return FederationPythonTemplates.login_post
      case 'logout_get': return FederationPythonTemplates.logout_get
      case 'token_post': return FederationPythonTemplates.token_post
      case 'communities_get': return FederationPythonTemplates.communities_get
      case 'modules_get': return FederationPythonTemplates.modules_get
      case 'user/:id_get': return FederationPythonTemplates.user_id_get
      case 'user/by/email_get': return FederationPythonTemplates.user_by_email_get
      case 'users_get': return FederationPythonTemplates.users_get
      case 'users/by/roles_get': return FederationPythonTemplates.users_by_roles_get
      case 'users/by/perms_get': return FederationPythonTemplates.users_by_perms_get
      case 'users/perms_get': return FederationPythonTemplates.users_perms_get
      case 'users/perms_put': return FederationPythonTemplates.users_perms_put
      case 'user/verify_put': return FederationPythonTemplates.user_verify_put
      case 'user/verify/re-send_put': return FederationPythonTemplates.user_verify_resend_put
      case 'password/last-modification_get': return FederationPythonTemplates.password_last_modification_get
      case 'password/request_post': return FederationPythonTemplates.password_request_post
      case 'password/recover_post': return FederationPythonTemplates.password_recover_post
      case 'password/change_put': return FederationPythonTemplates.password_change_put
      case 'verifications_get': return FederationPythonTemplates.verifications_get
      default: return null
    }
  }

  public getDatahubJavascriptTemplate(endpoint: Endpoint): EndpointTemplate {
    const templateName = endpoint.name + '_' + endpoint.method
    switch (templateName) {
      case 'version_get': return DatahubJavascriptTemplates.version_get
      case 'event_post': return DatahubJavascriptTemplates.event_post
    }
  }

  public getDatahubJavaTemplate(endpoint: Endpoint): EndpointTemplate {
    const templateName = endpoint.name + '_' + endpoint.method
    switch (templateName) {
      case 'version_get': return DatahubJavaTemplates.version_get
      case 'event_post': return DatahubJavaTemplates.event_post
    }
  }

  public getDatahubPythonTemplate(endpoint: Endpoint): EndpointTemplate {
    const templateName = endpoint.name + '_' + endpoint.method
    switch (templateName) {
      case 'version_get': return DatahubPythonTemplates.version_get
      case 'event_post': return DatahubPythonTemplates.event_post
    }
  }
}
