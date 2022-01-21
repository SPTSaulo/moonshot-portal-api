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
    name: "online-event/:id",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_post: EndpointTemplate = {
    name: "online-event",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_put: EndpointTemplate = {
    name: "online-event",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_id_delete: EndpointTemplate = {
    name: "online-event/:id",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_admin_put: EndpointTemplate = {
    name: "online-event/admin",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_subscription_put: EndpointTemplate = {
    name: "online-event/subscription",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_unsubscription_put: EndpointTemplate = {
    name: "online-event/unsubscription",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_id_admin_delete: EndpointTemplate = {
    name: "online-event/:id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_events_get: EndpointTemplate = {
    name: "face-to-face-events",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_id_get: EndpointTemplate = {
    name: "face-to-face-event/:id",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_post: EndpointTemplate = {
    name: "face-to-face-event",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_put: EndpointTemplate = {
    name: "face-to-face-event",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_id_delete: EndpointTemplate = {
    name: "face-to-face-event/:id",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_admin_put: EndpointTemplate = {
    name: "face-to-face-event/admin",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_subscription_put: EndpointTemplate = {
    name: "face-to-face-event/subscription",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_unsubscription_put: EndpointTemplate = {
    name: "face-to-face-event/unsubscription",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_id_admin_delete: EndpointTemplate = {
    name: "face-to-face-event/:id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static room_documents_room_id_get: EndpointTemplate = {
    name: "room-documents/:room_id",
    code: "TODO",
    response: "TODO"
  }

  public static room_links_room_id_get: EndpointTemplate = {
    name: "room-links/:room_id",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chats_get: EndpointTemplate = {
    name: "direct-chats",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chats_all_get: EndpointTemplate = {
    name: "direct-chats/all",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_id_get: EndpointTemplate = {
    name: "direct-chat/:id",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_post: EndpointTemplate = {
    name: "direct-chat",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_id_delete: EndpointTemplate = {
    name: "direct-chat/:id",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_message_post: EndpointTemplate = {
    name: "direct-chat/message",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_messages_room_id_get: EndpointTemplate = {
    name: "direct-chat/message/:room_id",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_message_id_delete: EndpointTemplate = {
    name: "direct-chat/message/:id",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_rooms_get: EndpointTemplate = {
    name: "follow-up-rooms",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_rooms_all_get: EndpointTemplate = {
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

  public static follow_up_room_put: EndpointTemplate = {
    name: "follow-up-rooms",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_add_member_put: EndpointTemplate = {
    name: "follow-up-rooms/add-member",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_leave_member_put: EndpointTemplate = {
    name: "follow-up-rooms/leave-member",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_open_put: EndpointTemplate = {
    name: "follow-up-room/open",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_close_put: EndpointTemplate = {
    name: "follow-up-room/close",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_id_delete: EndpointTemplate = {
    name: "follow-up-room/:id",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_message_post: EndpointTemplate = {
    name: "follow-up-room/message",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_message_id_delete: EndpointTemplate = {
    name: "follow-up-room/message/:id",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_message_id_admin_delete: EndpointTemplate = {
    name: "follow-up-room/message/:id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_messages_room_id_get: EndpointTemplate = {
    name: "follow-up-room/messages/:room_id",
    code: "TODO",
    response: "TODO"
  }

  public static public_channels_get: EndpointTemplate = {
    name: "public-channel",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_id_get: EndpointTemplate = {
    name: "public-channel/:id",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_post: EndpointTemplate = {
    name: "public-channel",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_put: EndpointTemplate = {
    name: "public-channel",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_id_delete: EndpointTemplate = {
    name: "public-channel/:id",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_id_admin_delete: EndpointTemplate = {
    name: "public-channel/:id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_subscribe_put: EndpointTemplate = {
    name: "public-channel/subscribe",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_unsubscribe_put: EndpointTemplate = {
    name: "public-channel/unsubscribe",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_message_post: EndpointTemplate = {
    name: "public-channel/message",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_message_id_delete: EndpointTemplate = {
    name: "public-channel/message/:id",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_message_id_admin_delete: EndpointTemplate = {
    name: "public-channel/message/:id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_messages_room_id_get: EndpointTemplate = {
    name: "public-channel/message/:roomId",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_post: EndpointTemplate = {
    name: "wall-post",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_put: EndpointTemplate = {
    name: "wall-post",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_id_delete: EndpointTemplate = {
    name: "wall-post/:id",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_admin_put: EndpointTemplate = {
    name: "wall-post/admin",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_id_admin_delete: EndpointTemplate = {
    name: "wall-post/:id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_like_put: EndpointTemplate = {
    name: "wall-post/like",
    code: "TODO",
    response: "TODO"
  }
  public static wall_post_unlike_put: EndpointTemplate = {
    name: "wall-post/unlike",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_comment_post: EndpointTemplate = {
    name: "wall-post/comment",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_comment_like_put: EndpointTemplate = {
    name: "wall-post/comment/like",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_comment_unlike_put: EndpointTemplate = {
    name: "wall-post/comment/unlike",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_id_get: EndpointTemplate = {
    name: "wall-post/:id",
    code: "TODO",
    response: "TODO"
  }

  public static wall_posts_get: EndpointTemplate = {
    name: "wall-posts",
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
    name: "actors/by-name-and-state",
    code: "TODO",
    response: "TODO"
  }

  public static actors_by_type_get: EndpointTemplate = {
    name: "actors/by-type",
    code: "TODO",
    response: "TODO"
  }

  public static actors_by_state_get: EndpointTemplate = {
    name: "actors/by-state",
    code: "TODO",
    response: "TODO"
  }

  public static actors_by_member_get: EndpointTemplate = {
    name: "actors/by-member",
    code: "TODO",
    response: "TODO"
  }

  public static actors_id_get: EndpointTemplate = {
    name: "actors/:id",
    code: "TODO",
    response: "TODO"
  }

  public static actor_post: EndpointTemplate = {
    name: "actor",
    code: "TODO",
    response: "TODO"
  }

  public static actor_put: EndpointTemplate = {
    name: "actor",
    code: "TODO",
    response: "TODO"
  }

  public static actor_accept_put: EndpointTemplate = {
    name: "actor/accept",
    code: "TODO",
    response: "TODO"
  }

  public static actor_reject_put: EndpointTemplate = {
    name: "actor/reject",
    code: "TODO",
    response: "TODO"
  }

  public static actor_id_delete: EndpointTemplate = {
    name: "actor/:id",
    code: "TODO",
    response: "TODO"
  }

  public static fcm_token_put: EndpointTemplate = {
    name: "fcmToken",
    code: "\nTODO",
    response: "\nTODO"
  }

  public static member_logged_in_get: EndpointTemplate = {
    name: "member/logged-in",
    code: "TODO",
    response: "TODO"
  }

  public static members_get: EndpointTemplate = {
    name: "members",
    code: "TODO",
    response: "TODO"
  }

  public static member_id_get: EndpointTemplate = {
    name: "member/:id",
    code: "TODO",
    response: "TODO"
  }

  public static member_id_marker_get: EndpointTemplate = {
    name: "member/:id/marker",
    code: "TODO",
    response: "TODO"
  }

  public static member_put: EndpointTemplate = {
    name: "member",
    code: "TODO",
    response: "TODO"
  }

  public static member_id_delete: EndpointTemplate = {
    name: "member/:id",
    code: "TODO",
    response: "TODO"
  }

  public static education_post: EndpointTemplate = {
    name: "education",
    code: "TODO",
    response: "TODO"
  }

  public static education_put: EndpointTemplate = {
    name: "education",
    code: "TODO",
    response: "TODO"
  }

  public static education_id_delete: EndpointTemplate = {
    name: "education/:id",
    code: "TODO",
    response: "TODO"
  }

  public static experience_post: EndpointTemplate = {
    name: "experience",
    code: "TODO",
    response: "TODO"
  }

  public static experience_put: EndpointTemplate = {
    name: "experience",
    code: "TODO",
    response: "TODO"
  }

  public static experience_id_delete: EndpointTemplate = {
    name: "experience/:id",
    code: "TODO",
    response: "TODO"
  }

  public static projects_get: EndpointTemplate = {
    name: "projects",
    code: "TODO",
    response: "TODO"
  }

  public static project_id_get: EndpointTemplate = {
    name: "project/:id",
    code: "TODO",
    response: "TODO"
  }

  public static project_post: EndpointTemplate = {
    name: "project",
    code: "TODO",
    response: "TODO"
  }

  public static project_put: EndpointTemplate = {
    name: "project",
    code: "TODO",
    response: "TODO"
  }

  public static project_delete: EndpointTemplate = {
    name: "project/:id",
    code: "TODO",
    response: "TODO"
  }

}
