import {Template} from '../model/Template';
import {CoreJavascriptTemplates} from '../../templates/core/javascript/CoreJavascriptTemplates';
import {Endpoint} from '../model/Endpoint';
import {Language} from '../model/Language';
import {Module} from '../model/Module';
import {CoreJavaTemplates} from '../../templates/core/java/CoreJavaTemplates';
import {FederationJavascriptTemplates} from '../../templates/federation/javascript/FederationJavascriptTemplates';
import {FederationJavaTemplates} from '../../templates/federation/java/FederationJavaTemplates';
import {CommunityJavascriptTemplates} from '../../templates/community/javascript/CommunityJavascriptTemplates';
import {CommunityJavaTemplates} from '../../templates/community/java/CommunityJavaTemplates';

export class TemplateReaderService {

  public getTemplate(endpoint: Endpoint, module: Module, language: Language): Template {
    switch (module) {
      case Module.CORE :
        return this.getCoreTemplate(endpoint, language)
      case Module.COMMUNITY :
        return this.getCommunityTemplate(endpoint, language)
      case Module.FEDERATION :
        return this.getFederationTemplate(endpoint, language)
      default:
        return null
    }
  }

  private getCoreTemplate(endpoint: Endpoint, language: Language): Template {
    switch (language) {
      case Language.JS:
        return this.getCoreJavascriptTemplate(endpoint)
      case Language.JAVA:
        return this.getCoreJavaTemplate(endpoint)
    }
  }

  private getCommunityTemplate(endpoint: Endpoint, language: Language): Template {
    switch (language) {
      case Language.JS:
        return this.getCommunityJavascriptTemplate(endpoint)
      case Language.JAVA:
        return this.getCommunityJavaTemplate(endpoint)
    }
  }

  private getFederationTemplate(endpoint: Endpoint, language: Language): Template {
    switch (language) {
      case Language.JS:
        return this.getFederationJavascriptTemplate(endpoint)
      case Language.JAVA:
        return this.getFederationJavaTemplate(endpoint)
    }
  }

  private getCoreJavascriptTemplate(endpoint: Endpoint): Template {
    const templateName = endpoint.name + '_' + endpoint.method
    switch (templateName) {
      case 'version_get':
        return CoreJavascriptTemplates.version_get
      case 'signed-url_get':
        return CoreJavascriptTemplates.signedUrl_get
      case 'openGraph_get':
        return CoreJavascriptTemplates.openGraph_get
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
      case 'ecosystem/invite_post':
        return CoreJavascriptTemplates.ecosystemInvite_post
      case 'notifications_get':
        return CoreJavascriptTemplates.notifications_get
      case 'notification/:id_get':
        return CoreJavascriptTemplates.notifications_id_get
      case 'notification_post':
        return CoreJavascriptTemplates.notification_post
      default:
        return null
    }
  }

  private getCoreJavaTemplate(endpoint: Endpoint): Template {
    const templateName = endpoint.name + '_' + endpoint.method
    switch (templateName) {
      case 'version_get':
        return CoreJavaTemplates.version_get
      case 'signed-url_get':
        return CoreJavaTemplates.signedUrl_get
      case 'openGraph_get':
        return CoreJavaTemplates.openGraph_get
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
      case 'ecosystem/invite_post':
        return CoreJavaTemplates.ecosystemInvite_post
      case 'notifications_get':
        return CoreJavaTemplates.notifications_get
      case 'notification/:id_get':
        return CoreJavaTemplates.notifications_id_get
      case 'notification_post':
        return CoreJavaTemplates.notification_post
      default:
        return null
    }
  }

  private getCommunityJavascriptTemplate(endpoint: Endpoint): Template {
    const templateName = endpoint.name + '_' + endpoint.method
    switch (templateName) {
      case 'version_get':
        return CommunityJavascriptTemplates.version_get
      case 'online-events_get':
        return CommunityJavascriptTemplates.online_events_get
      case 'online-event/:id_get':
        return CommunityJavascriptTemplates.online_events_id_get
      case 'online-event_post':
        return CommunityJavascriptTemplates.online_event_post
      case 'online-event_put':
        return CommunityJavascriptTemplates.online_event_put
      case 'online-event_delete':
        return CommunityJavascriptTemplates.online_event_delete
      case 'online-event/admin_put':
        return CommunityJavascriptTemplates.online_event_admin_put
      case 'online-event/subscription_put':
        return CommunityJavascriptTemplates.online_event_subscription_put
      case 'online-event/unsubscription_put':
        return CommunityJavascriptTemplates.online_event_unsubscription_put
      case 'online-event/admin_delete':
        return CommunityJavascriptTemplates.online_event_admin_delete
      case 'face-to-face-events_get':
        return CommunityJavascriptTemplates.face_to_face_events_get
      case 'face-to-face-event/:id_get':
        return CommunityJavascriptTemplates.face_to_face_event_id_get
      case 'face-to-face-event_post':
        return CommunityJavascriptTemplates.face_to_face_event_post
      case 'face-to-face-event_put':
        return CommunityJavascriptTemplates.face_to_face_event_put
      case 'face-to-face-event_delete':
        return CommunityJavascriptTemplates.face_to_face_event_delete
      case 'face-to-face-event/admin_put':
        return CommunityJavascriptTemplates.face_to_face_event_admin_put
      case 'face-to-face-event/subscription_put':
        return CommunityJavascriptTemplates.face_to_face_event_subscription_put
      case 'face-to-face-event/unsubscription_put':
        return CommunityJavascriptTemplates.face_to_face_event_unsubscription_put
      case 'face-to-face-event/admin_delete':
        return CommunityJavascriptTemplates.face_to_face_event_admin_delete
      case 'room-documents/:room_id_get':
        return CommunityJavascriptTemplates.room_documents_room_id_get
      case 'room-links/:room_id_get':
        return CommunityJavascriptTemplates.room_links_room_id_get
      case 'direct-chats_get':
        return CommunityJavascriptTemplates.direct_chats_get
      case 'direct-chats/all_get':
        return CommunityJavascriptTemplates.direct_chats_all_get
      case 'direct-chat/:id_get':
        return CommunityJavascriptTemplates.direct_chat_id_get
      case 'direct-chat_post':
        return CommunityJavascriptTemplates.direct_chat_post
      case 'direct-chat_delete':
        return CommunityJavascriptTemplates.direct_chat_delete
      case 'direct-chat/message_post':
        return CommunityJavascriptTemplates.direct_chat_message_post
      case 'direct-chat/messages/:room_id_get':
        return CommunityJavascriptTemplates.direct_chat_messages_room_id_get
      case 'direct-chat/message_delete':
        return CommunityJavascriptTemplates.direct_chat_message_delete
      case 'follow-up-rooms_get':
        return CommunityJavascriptTemplates.follow_up_rooms_get
      case 'follow-up-rooms/all_get':
        return CommunityJavascriptTemplates.follow_up_rooms_all_get
      case 'follow-up-room/:id_get':
        return CommunityJavascriptTemplates.follow_up_room_id_get
      case 'follow-up-room_post':
        return CommunityJavascriptTemplates.follow_up_room_post
      case 'follow-up-room_put':
        return CommunityJavascriptTemplates.follow_up_room_put
      case 'follow-up-room/add-member_put':
        return CommunityJavascriptTemplates.follow_up_room_add_member_put
      case 'follow-up-room/leave-member_put':
        return CommunityJavascriptTemplates.follow_up_room_leave_member_put
      case 'follow-up-room/open_put':
        return CommunityJavascriptTemplates.follow_up_room_open_put
      case 'follow-up-room/close_put':
        return CommunityJavascriptTemplates.follow_up_room_close_put
      case 'follow-up-room_delete':
        return CommunityJavascriptTemplates.follow_up_room_delete
      case 'follow-up-room/message_post':
        return CommunityJavascriptTemplates.follow_up_room_message_post
      case 'follow-up-room/message_delete':
        return CommunityJavascriptTemplates.follow_up_room_message_delete
      case 'follow-up-room/message/admin_delete':
        return CommunityJavascriptTemplates.follow_up_room_message_admin_delete
      case 'follow-up-room/messages/:room_id_get':
        return CommunityJavascriptTemplates.follow_up_room_messages_room_id_get
      case 'public-channels_get':
        return CommunityJavascriptTemplates.public_channels_get
      case 'public-channel/:id_get':
        return CommunityJavascriptTemplates.public_channel_id_get
      case 'public-channel_post':
        return CommunityJavascriptTemplates.public_channel_post
      case 'public-channel_put':
        return CommunityJavascriptTemplates.public_channel_put
      case 'public-channel_delete':
        return CommunityJavascriptTemplates.public_channel_delete
      case 'public-channel/admin_put':
        return CommunityJavascriptTemplates.public_channel_admin_put
      case 'public-channel/admin_delete':
        return CommunityJavascriptTemplates.public_channel_admin_delete
      case 'public-channel/subscribe_put':
        return CommunityJavascriptTemplates.public_channel_subscribe_put
      case 'public-channel/unsubscribe_put':
        return CommunityJavascriptTemplates.public_channel_unsubscribe_put
      case 'public-channel/message_post':
        return CommunityJavascriptTemplates.public_channel_message_post
      case 'public-channel/message_delete':
        return CommunityJavascriptTemplates.public_channel_message_delete
      case 'public-channel/message/admin_delete':
        return CommunityJavascriptTemplates.public_channel_message_admin_delete
      case 'public-channel/messages/:room_id_get':
        return CommunityJavascriptTemplates.public_channel_messages_room_id_get
      case 'wall-post_post':
        return CommunityJavascriptTemplates.wall_post_post
      case 'wall-post_put':
        return CommunityJavascriptTemplates.wall_post_put
      case 'wall-post_delete':
        return CommunityJavascriptTemplates.wall_post_delete
      case 'wall-post/admin_put':
        return CommunityJavascriptTemplates.wall_post_admin_put
      case 'wall-post/admin_delete':
        return CommunityJavascriptTemplates.wall_post_admin_delete
      case 'wall-post/like_put':
        return CommunityJavascriptTemplates.wall_post_like_put
      case 'wall-post/unlike_put':
        return CommunityJavascriptTemplates.wall_post_unlike_put
      case 'wall-post/comment_post':
        return CommunityJavascriptTemplates.wall_post_comment_post
      case 'wall-post/comment/like_put':
        return CommunityJavascriptTemplates.wall_post_comment_like_put
      case 'wall-post/comment/unlike_put':
        return CommunityJavascriptTemplates.wall_post_comment_unlike_put
      case 'wall-post/:id_get':
        return CommunityJavascriptTemplates.wall_post_id_get
      case 'wall-posts_get':
        return CommunityJavascriptTemplates.wall_posts_get
      case 'actors_get':
        return CommunityJavascriptTemplates.actors_get
      case 'actors/by-name-and-state_get':
        return CommunityJavascriptTemplates.actors_by_name_and_state_get
      case 'actors/by-type_get':
        return CommunityJavascriptTemplates.actors_by_type_get
      case 'actors/by-state_get':
        return CommunityJavascriptTemplates.actors_by_state_get
      case 'actors/by-member_get':
        return CommunityJavascriptTemplates.actors_by_member_get
      case 'actor/:id_get':
        return CommunityJavascriptTemplates.actor_id_get
      case 'actor_post':
        return CommunityJavascriptTemplates.actor_post
      case 'actor_put':
        return CommunityJavascriptTemplates.actor_put
      case 'actor/accept_put':
        return CommunityJavascriptTemplates.actor_accept_put
      case 'actor/reject_put':
        return CommunityJavascriptTemplates.actor_reject_put
      case 'actor_delete':
        return CommunityJavascriptTemplates.actor_delete
      case 'logged-in-member_get':
        return CommunityJavascriptTemplates.logged_in_member_get
      case 'members_get':
        return CommunityJavascriptTemplates.members_get
      case 'member/:id_get':
        return CommunityJavascriptTemplates.member_id_get
      case 'member/:id/marker_get':
        return CommunityJavascriptTemplates.member_id_marker_get
      case 'member_put':
        return CommunityJavascriptTemplates.member_put
      case 'member_delete':
        return CommunityJavascriptTemplates.member_delete
      case 'education_post':
        return CommunityJavascriptTemplates.education_post
      case 'education_put':
        return CommunityJavascriptTemplates.education_put
      case 'education_delete':
        return CommunityJavascriptTemplates.education_delete
      case 'experience_post':
        return CommunityJavascriptTemplates.experience_post
      case 'experience_put':
        return CommunityJavascriptTemplates.experience_put
      case 'experience_delete':
        return CommunityJavascriptTemplates.experience_delete
      case 'projects_get':
        return CommunityJavascriptTemplates.projects_get
      case 'project/:id_get':
        return CommunityJavascriptTemplates.project_id_get
      case 'project_post':
        return CommunityJavascriptTemplates.project_post
      case 'project_put':
        return CommunityJavascriptTemplates.project_put
      case 'project_delete':
        return CommunityJavascriptTemplates.project_delete
      case 'setting_post':
        return CommunityJavascriptTemplates.setting_post
      case 'setting_put':
        return CommunityJavascriptTemplates.setting_put
      case 'setting_get':
        return CommunityJavascriptTemplates.setting_get
      default:
        return null
    }
  }

  private getCommunityJavaTemplate(endpoint: Endpoint): Template {
    const templateName = endpoint.name + '_' + endpoint.method
    switch (templateName) {
      case 'version_get':
        return CommunityJavaTemplates.version_get
      case 'online-events_get':
        return CommunityJavaTemplates.online_events_get
      case 'online-events/:id_get':
        return CommunityJavaTemplates.online_events_id_get
      case 'online-event_post':
        return CommunityJavaTemplates.online_event_post
      case 'online-event_put':
        return CommunityJavaTemplates.online_event_put
      case 'online-event_delete':
        return CommunityJavaTemplates.online_event_delete
      case 'online-event/admin_put':
        return CommunityJavaTemplates.online_event_admin_put
      case 'online-event/subscription_put':
        return CommunityJavaTemplates.online_event_subscription_put
      case 'online-event/unsubscription_put':
        return CommunityJavaTemplates.online_event_unsubscription_put
      case 'online-event/admin_delete':
        return CommunityJavaTemplates.online_event_admin_delete
      case 'face-to-face-events_get':
        return CommunityJavaTemplates.face_to_face_events_get
      case 'face-to-face-event/:id_get':
        return CommunityJavaTemplates.face_to_face_event_id_get
      case 'face-to-face-event_post':
        return CommunityJavaTemplates.face_to_face_event_post
      case 'face-to-face-event_put':
        return CommunityJavaTemplates.face_to_face_event_put
      case 'face-to-face-event_delete':
        return CommunityJavaTemplates.face_to_face_event_delete
      case 'face-to-face-event/admin_put':
        return CommunityJavaTemplates.face_to_face_event_admin_put
      case 'face-to-face-event/subscription_put':
        return CommunityJavaTemplates.face_to_face_event_subscription_put
      case 'face-to-face-event/unsubscription_put':
        return CommunityJavaTemplates.face_to_face_event_unsubscription_put
      case 'face-to-face-event/admin_delete':
        return CommunityJavaTemplates.face_to_face_event_admin_delete
      case 'room-documents/:room_id_get':
        return CommunityJavaTemplates.room_documents_room_id_get
      case 'room-links/:room_id_get':
        return CommunityJavaTemplates.room_links_room_id_get
      case 'direct-chats_get':
        return CommunityJavaTemplates.direct_chats_get
      case 'direct-chats/all_get':
        return CommunityJavaTemplates.direct_chats_all_get
      case 'direct-chat/:id_get':
        return CommunityJavaTemplates.direct_chat_id_get
      case 'direct-chat_post':
        return CommunityJavaTemplates.direct_chat_post
      case 'direct-chat_delete':
        return CommunityJavaTemplates.direct_chat_delete
      case 'direct-chat/message_post':
        return CommunityJavaTemplates.direct_chat_message_post
      case 'direct-chat/messages/:room_id_get':
        return CommunityJavaTemplates.direct_chat_messages_room_id_get
      case 'direct-chat/message_delete':
        return CommunityJavaTemplates.direct_chat_message_delete
      case 'follow-up-rooms_get':
        return CommunityJavaTemplates.follow_up_rooms_get
      case 'follow-up-rooms/all_get':
        return CommunityJavaTemplates.follow_up_rooms_all_get
      case 'follow-up-room/:room_id_get':
        return CommunityJavaTemplates.follow_up_room_id_get
      case 'follow-up-room_post':
        return CommunityJavaTemplates.follow_up_room_post
      case 'follow_up_room_put':
        return CommunityJavaTemplates.follow_up_room_put
      case 'follow-up-room/add-member_put':
        return CommunityJavaTemplates.follow_up_room_add_member_put
      case 'follow-up-room/leave-member_put':
        return CommunityJavaTemplates.follow_up_room_leave_member_put
      case 'follow-up-room/open_put':
        return CommunityJavaTemplates.follow_up_room_open_put
      case 'follow-up-room/close_put':
        return CommunityJavaTemplates.follow_up_room_close_put
      case 'follow-up-room_delete':
        return CommunityJavaTemplates.follow_up_room_delete
      case 'follow-up-room/message_post':
        return CommunityJavaTemplates.follow_up_room_message_post
      case 'follow-up-room/message_delete':
        return CommunityJavaTemplates.follow_up_room_message_delete
      case 'follow-up-room/message/admin_delete':
        return CommunityJavaTemplates.follow_up_room_message_admin_delete
      case 'follow-up-room/messages/:room_id_get':
        return CommunityJavaTemplates.follow_up_room_messages_room_id_get
      case 'public-channels_get':
        return CommunityJavaTemplates.public_channels_get
      case 'public-channel/:id_get':
        return CommunityJavaTemplates.public_channel_id_get
      case 'public-channel_post':
        return CommunityJavaTemplates.public_channel_post
      case 'public-channel_put':
        return CommunityJavaTemplates.public_channel_put
      case 'public-channel_delete':
        return CommunityJavaTemplates.public_channel_delete
      case 'public-channel/admin/delete':
        return CommunityJavaTemplates.public_channel_admin_delete
      case 'public-channel/subscribe_put':
        return CommunityJavaTemplates.public_channel_subscribe_put
      case 'public-channel/unsubscribe_put':
        return CommunityJavaTemplates.public_channel_unsubscribe_put
      case 'public-channel/message_post':
        return CommunityJavaTemplates.public_channel_message_post
      case 'public-channel/message_delete':
        return CommunityJavaTemplates.public_channel_message_delete
      case 'public-channel/message/admin_delete':
        return CommunityJavaTemplates.public_channel_message_admin_delete
      case 'public-channel/messages/:room_id_get':
        return CommunityJavaTemplates.public_channel_messages_room_id_get
      case 'wall-post_post':
        return CommunityJavaTemplates.wall_posts_get
      case 'wall-post_delete':
        return CommunityJavaTemplates.wall_post_delete
      case 'wall-post/admin_put':
        return CommunityJavaTemplates.wall_post_admin_put
      case 'wall-post/admin_delete':
        return CommunityJavaTemplates.wall_post_admin_delete
      case 'wall-post/like_put':
        return CommunityJavaTemplates.wall_post_like_put
      case 'wall-post/unlike_put':
        return CommunityJavaTemplates.wall_post_unlike_put
      case 'wall-post/comment_post':
        return CommunityJavaTemplates.wall_post_comment_post
      case 'wall-post/comment/like_put':
        return CommunityJavaTemplates.wall_post_comment_like_put
      case 'wall-post/comment/unlike_put':
        return CommunityJavaTemplates.wall_post_comment_unlike_put
      case 'wall-post/:id_get':
        return CommunityJavaTemplates.wall_post_id_get
      case 'wall-posts_get':
        return CommunityJavaTemplates.wall_posts_get
      case 'actors_get':
        return CommunityJavaTemplates.actors_get
      case 'actors/by-name-and-state_get':
        return CommunityJavaTemplates.actors_by_name_and_state_get
      case 'actors/by-type_get':
        return CommunityJavaTemplates.actors_by_type_get
      case 'actors/by-state_get':
        return CommunityJavaTemplates.actors_by_state_get
      case 'actors/by-member_get':
        return CommunityJavaTemplates.actors_by_member_get
      case 'actor/:id_get':
        return CommunityJavaTemplates.actors_id_get
      case 'actor_post':
        return CommunityJavaTemplates.actor_post
      case 'actor_put':
        return CommunityJavaTemplates.actor_put
      case 'actor/accept_put':
        return CommunityJavaTemplates.actor_accept_put
      case 'actor/reject_put':
        return CommunityJavaTemplates.actor_reject_put
      case 'actor_delete':
        return CommunityJavaTemplates.actor_delete
      case 'logged-in-member_get':
        return CommunityJavaTemplates.logged_in_member_get
      case 'members_get':
        return CommunityJavaTemplates.members_get
      case 'member/:id_get':
        return CommunityJavaTemplates.member_id_get
      case 'member/:id/marker_get':
        return CommunityJavaTemplates.member_id_marker_get
      case 'member_put':
        return CommunityJavaTemplates.member_put
      case 'member_delete':
        return CommunityJavaTemplates.member_delete
      case 'education_post':
        return CommunityJavaTemplates.education_post
      case 'education_put':
        return CommunityJavaTemplates.education_put
      case 'education_delete':
        return CommunityJavaTemplates.education_delete
      case 'experience_post':
        return CommunityJavaTemplates.experience_post
      case 'experience_put':
        return CommunityJavaTemplates.experience_put
      case 'experience_delete':
        return CommunityJavaTemplates.experience_delete
      case 'projects_get':
        return CommunityJavaTemplates.projects_get
      case 'project/:id_get':
        return CommunityJavaTemplates.project_id_get
      case 'project_post':
        return CommunityJavaTemplates.project_post
      case 'project_put':
        return CommunityJavaTemplates.project_put
      case 'project_delete':
        return CommunityJavaTemplates.project_delete
      case 'setting_post':
        return CommunityJavaTemplates.setting_post
      case 'setting_put':
        return CommunityJavaTemplates.setting_put
      case 'setting_get':
        return CommunityJavaTemplates.setting_get
      default:
        return null
    }
  }

  private getFederationJavaTemplate(endpoint: Endpoint): Template {
    const templateName = endpoint.name + '_' + endpoint.method
    switch (templateName) {
      case 'version_get': return FederationJavaTemplates.version_get
      case 'login_post': return FederationJavaTemplates.login_post
      case 'logout_post': return FederationJavaTemplates.logout_get
      case 'token_post': return FederationJavaTemplates.token_post
      case 'communities_get': return FederationJavaTemplates.communities_get
      case 'modules_get': return FederationJavaTemplates.modules_get
      case 'user/:id_get': return FederationJavaTemplates.users_id_get
      case 'user/by/email_get': return FederationJavaTemplates.user_by_email_get
      case 'users_get': return FederationJavaTemplates.users_get
      case 'users/by/roles_get': return FederationJavaTemplates.users_by_roles_get
      case 'users/by/perms_get': return FederationJavaTemplates.users_by_perms_get
      case 'users/perms_get': return FederationJavaTemplates.users_perms_get
      case 'users/perms_put': return FederationJavaTemplates.users_perms_put
      case 'users/verify_put': return FederationJavaTemplates.user_verify_put
      case 'password/request_post': return FederationJavaTemplates.password_request_post
      case 'password/recover_post': return FederationJavaTemplates.password_recover_post
      case 'password/change_put': return FederationJavaTemplates.password_change_put
      default: return null
    }
  }


  private getFederationJavascriptTemplate(endpoint: Endpoint): Template {
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
      case 'password/request_post': return FederationJavascriptTemplates.password_request_post
      case 'password/recover_post': return FederationJavascriptTemplates.password_recover_post
      case 'password/change_put': return FederationJavascriptTemplates.password_change_put
      default: return null
    }
  }
}
