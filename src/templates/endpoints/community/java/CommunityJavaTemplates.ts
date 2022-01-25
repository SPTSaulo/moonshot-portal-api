import {EndpointTemplate} from '../../../../app/model/EndpointTemplate';


export class CommunityJavaTemplates {

  public static version_get: EndpointTemplate = {
    name: "version",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "String version = communityApi.internal().version(app).getResponse();\n" +
      "System.out.println(version);",
    response: "\n\"2.0.11.r20-SNAPSHOT\""
  }

  public static online_events_get: EndpointTemplate = {
    name: "online-events",
    code: "TODO",
    response: "TODO"
  }

  public static online_events_id_get: EndpointTemplate = {
    name: "online-events/:id",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_post: EndpointTemplate = {
    name: "online-events",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_upload_post: EndpointTemplate = {
    name: "online-events/update",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_id_put: EndpointTemplate = {
    name: "online-events/:id",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_id_delete: EndpointTemplate = {
    name: "online-events/:id",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_id_admin_put: EndpointTemplate = {
    name: "online-events/:id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_id_subscription_put: EndpointTemplate = {
    name: "online-events/:id/subscription",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_id_unsubscription_put: EndpointTemplate = {
    name: "online-events/:id/unsubscription",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_id_admin_delete: EndpointTemplate = {
    name: "online-events/:id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_events_get: EndpointTemplate = {
    name: "face-to-face-events",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_id_get: EndpointTemplate = {
    name: "face-to-face-events/:id",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_post: EndpointTemplate = {
    name: "face-to-face-events",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_id_put: EndpointTemplate = {
    name: "face-to-face-events/:id",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_id_delete: EndpointTemplate = {
    name: "face-to-face-events/:id",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_upload_post: EndpointTemplate = {
    name: "face-to-face-events/upload",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_id_admin_put: EndpointTemplate = {
    name: "face-to-face-events/:id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_id_subscription_put: EndpointTemplate = {
    name: "face-to-face-events/:id/subscription",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_id_unsubscription_put: EndpointTemplate = {
    name: "face-to-face-events/:id/unsubscription",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_id_admin_delete: EndpointTemplate = {
    name: "face-to-face-events/:id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chats_get: EndpointTemplate = {
    name: "direct-chats",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chats_all_member_participate_get: EndpointTemplate = {
    name: "direct-chats/all/member-participate",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_id_get: EndpointTemplate = {
    name: "direct-chats/:id",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_post: EndpointTemplate = {
    name: "direct-chats",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_id_delete: EndpointTemplate = {
    name: "direct-chats/:id",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_id_message_post: EndpointTemplate = {
    name: "direct-chats/:id/messages",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_id_messages_get: EndpointTemplate = {
    name: "direct-chats/:id/messages",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_id_message_id_delete: EndpointTemplate = {
    name: "direct-chats/:id/messages/:message_id",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_id_documents_get: EndpointTemplate = {
    name: "direct-chats/:id/documents",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_id_links_get: EndpointTemplate = {
    name: "direct-chats/:id/links",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_id_upload_put: EndpointTemplate = {
    name: "direct-chats/:id/upload",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_rooms_get: EndpointTemplate = {
    name: "follow-up-rooms",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_rooms_all_member_participate_get: EndpointTemplate = {
    name: "follow-up-rooms/all",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_id_get: EndpointTemplate = {
    name: "follow-up-rooms/:id",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_post: EndpointTemplate = {
    name: "follow-up-rooms",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_id_put: EndpointTemplate = {
    name: "follow-up-rooms/:id",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_id_members_add_put: EndpointTemplate = {
    name: "follow-up-rooms/:id/members/add",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_id_members_leave_put: EndpointTemplate = {
    name: "follow-up-rooms/:id/members/leave",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_id_open_put: EndpointTemplate = {
    name: "follow-up-rooms/:id/open",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_id_close_put: EndpointTemplate = {
    name: "follow-up-rooms/:id/close",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_id_delete: EndpointTemplate = {
    name: "follow-up-rooms/:id",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_id_message_post: EndpointTemplate = {
    name: "follow-up-rooms/:id/messages",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_id_message_id_delete: EndpointTemplate = {
    name: "follow-up-rooms/:id/message/:message_id",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_message_id_admin_delete: EndpointTemplate = {
    name: "follow-up-rooms/:id/messages/:message_id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_id_message_get: EndpointTemplate = {
    name: "follow-up-rooms/:id/messages",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_id_documents_get: EndpointTemplate = {
    name: "follow-up-rooms/:id/documents",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_id_links_get: EndpointTemplate = {
    name: "follow-up-rooms/:id/links",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_id_upload_put: EndpointTemplate = {
    name: "follow-up-rooms/:id/upload",
    code: "TODO",
    response: "TODO"
  }

  public static public_channels_get: EndpointTemplate = {
    name: "public-channels",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_id_get: EndpointTemplate = {
    name: "public-channels/:id",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_post: EndpointTemplate = {
    name: "public-channels",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_id_put: EndpointTemplate = {
    name: "public-channels/:id",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_id_delete: EndpointTemplate = {
    name: "public-channels/:id",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_id_admin_put: EndpointTemplate = {
    name: "public-channels/:id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_id_admin_delete: EndpointTemplate = {
    name: "public-channels/:id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_subscribe_put: EndpointTemplate = {
    name: "public-channels/:id/subscribe",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_unsubscribe_put: EndpointTemplate = {
    name: "public-channels/:id/unsubscribe",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_message_post: EndpointTemplate = {
    name: "public-channels/:id/messages",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_message_id_delete: EndpointTemplate = {
    name: "public-channels/:id/messages/:message_id",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_message_id_admin_delete: EndpointTemplate = {
    name: "public-channels/:id/messages/:message_id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_id_messages_get: EndpointTemplate = {
    name: "public-channels/:id/messages",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_id_documents_get: EndpointTemplate = {
    name: "public-channels/:id/documents",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_id_links_get: EndpointTemplate = {
    name: "public-channels/:id/links",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_id_upload_put: EndpointTemplate = {
    name: "public-channels/:id/upload",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_post: EndpointTemplate = {
    name: "wall-posts",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_id_put: EndpointTemplate = {
    name: "wall-posts/:id",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_id_delete: EndpointTemplate = {
    name: "wall-posts/:id",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_id_admin_put: EndpointTemplate = {
    name: "wall-posts/:id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_id_admin_delete: EndpointTemplate = {
    name: "wall-posts/:id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_id_like_put: EndpointTemplate = {
    name: "wall-posts/:id/like",
    code: "TODO",
    response: "TODO"
  }
  public static wall_post_id_unlike_put: EndpointTemplate = {
    name: "wall-posts/:id/unlike",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_id_comment_post: EndpointTemplate = {
    name: "wall-posts/:id/comment",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_id_comment_id_like_put: EndpointTemplate = {
    name: "wall-posts/:id/comment/:comment_id/like",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_id_comment_id_unlike_put: EndpointTemplate = {
    name: "wall-posts/:id/comment/:comment_id/unlike",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_id_get: EndpointTemplate = {
    name: "wall-posts/:id",
    code: "TODO",
    response: "TODO"
  }

  public static wall_posts_get: EndpointTemplate = {
    name: "wall-posts",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_upload_post: EndpointTemplate = {
    name: "wall-posts/upload",
    code: "TODO",
    response: "TODO"
  }

  public static actors_get: EndpointTemplate = {
    name: "actors",
    code: "TODO",
    response: "TODO"
  }

  public static actors_import_csv_post: EndpointTemplate = {
    name: "actors/import/csv",
    code: "TODO",
    response: "TODO"
  }

  public static actors_by_name_and_state_get: EndpointTemplate = {
    name: "actors/by/name-and-state",
    code: "TODO",
    response: "TODO"
  }

  public static actors_by_type_get: EndpointTemplate = {
    name: "actors/by/types",
    code: "TODO",
    response: "TODO"
  }

  public static actors_by_state_get: EndpointTemplate = {
    name: "actors/by/state",
    code: "TODO",
    response: "TODO"
  }

  public static actors_by_member_get: EndpointTemplate = {
    name: "actors/by/member",
    code: "TODO",
    response: "TODO"
  }

  public static actor_id_get: EndpointTemplate = {
    name: "actors/:id",
    code: "TODO",
    response: "TODO"
  }

  public static actor_post: EndpointTemplate = {
    name: "actors",
    code: "TODO",
    response: "TODO"
  }

  public static actor_id_put: EndpointTemplate = {
    name: "actors/:id",
    code: "TODO",
    response: "TODO"
  }

  public static actor_id_accept_put: EndpointTemplate = {
    name: "actors/:id/accept",
    code: "TODO",
    response: "TODO"
  }

  public static actor_id_reject_put: EndpointTemplate = {
    name: "actors/:id/reject",
    code: "TODO",
    response: "TODO"
  }

  public static actor_id_delete: EndpointTemplate = {
    name: "actors/:id",
    code: "TODO",
    response: "TODO"
  }

  public static actor_upload_original_post: EndpointTemplate = {
    name: 'actors/upload/original',
    code: "TODO",
    response: "TODO"
  }

  public static actor_upload_thumbnail_post: EndpointTemplate = {
    name: 'actors/upload/thumbnail',
    code: "TODO",
    response: "TODO"
  }

  public static actor_id_upload_media_put: EndpointTemplate = {
    name: 'actors/:id/upload/media',
    code: "TODO",
    response: "TODO"
  }

  public static member_fcm_token_put: EndpointTemplate = {
    name: "members/fcm-token",
    code: "\nTODO",
    response: "\nTODO"
  }

  public static member_logged_in_get: EndpointTemplate = {
    name: "members/logged-in",
    code: "TODO",
    response: "TODO"
  }

  public static members_get: EndpointTemplate = {
    name: "members",
    code: "TODO",
    response: "TODO"
  }

  public static member_id_get: EndpointTemplate = {
    name: "members/:id",
    code: "TODO",
    response: "TODO"
  }

  public static member_id_marker_get: EndpointTemplate = {
    name: "members/:id/marker",
    code: "TODO",
    response: "TODO"
  }

  public static member_upload_original_post: EndpointTemplate = {
    name: "members/upload/original",
    code: "TODO",
    response: "TODO"
  }

  public static member_upload_thumbnail_post: EndpointTemplate = {
    name: "members/upload/thumbnail",
    code: "TODO",
    response: "TODO"
  }

  public static member_id_put: EndpointTemplate = {
    name: "members/:id",
    code: "TODO",
    response: "TODO"
  }

  public static member_id_delete: EndpointTemplate = {
    name: "members/:id",
    code: "TODO",
    response: "TODO"
  }

  public static education_post: EndpointTemplate = {
    name: "members/education",
    code: "TODO",
    response: "TODO"
  }

  public static education_id_put: EndpointTemplate = {
    name: "members/education/:education_id",
    code: "TODO",
    response: "TODO"
  }

  public static education_id_delete: EndpointTemplate = {
    name: "members/education/:education_id",
    code: "TODO",
    response: "TODO"
  }

  public static experience_post: EndpointTemplate = {
    name: "members/experience",
    code: "TODO",
    response: "TODO"
  }

  public static experience_id_put: EndpointTemplate = {
    name: "members/experience/experience_id",
    code: "TODO",
    response: "TODO"
  }

  public static experience_id_delete: EndpointTemplate = {
    name: "members/experience/:experience_id",
    code: "TODO",
    response: "TODO"
  }

  public static projects_by_actor_get: EndpointTemplate = {
    name: "projects/by/actor",
    code: "TODO",
    response: "TODO"
  }

  public static project_id_get: EndpointTemplate = {
    name: "projects/:id",
    code: "TODO",
    response: "TODO"
  }

  public static project_post: EndpointTemplate = {
    name: "projects",
    code: "TODO",
    response: "TODO"
  }

  public static project_id_put: EndpointTemplate = {
    name: "projects/:id",
    code: "TODO",
    response: "TODO"
  }

  public static project_id_delete: EndpointTemplate = {
    name: "projects/:id",
    code: "TODO",
    response: "TODO"
  }

  public static project_id_upload_media_put: EndpointTemplate = {
    name: "projects/:id/upload/media",
    code: "TODO",
    response: "TODO"
  }
}
