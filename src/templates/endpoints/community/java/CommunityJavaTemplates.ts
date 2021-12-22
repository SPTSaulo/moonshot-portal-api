import { Template } from '../../../../app/model/Template';

export class CommunityJavaTemplates {

  public static version_get: Template = {
    name: "version",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/community/version';\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n\"2.0.2.r15-SNAPSHOT\""
  }

  public static online_events_get: Template = {
    name: "online-events",
    code: "TODO",
    response: "TODO"
  }

  public static online_events_id_get: Template = {
    name: "online-event/:id",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_post: Template = {
    name: "online-event",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_put: Template = {
    name: "online-event",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_id_delete: Template = {
    name: "online-event/:id",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_admin_put: Template = {
    name: "online-event/admin",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_subscription_put: Template = {
    name: "online-event/subscription",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_unsubscription_put: Template = {
    name: "online-event/unsubscription",
    code: "TODO",
    response: "TODO"
  }

  public static online_event_id_admin_delete: Template = {
    name: "online-event/:id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_events_get: Template = {
    name: "face-to-face-events",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_id_get: Template = {
    name: "face-to-face-event/:id",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_post: Template = {
    name: "face-to-face-event",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_put: Template = {
    name: "face-to-face-event",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_id_delete: Template = {
    name: "face-to-face-event/:id",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_admin_put: Template = {
    name: "face-to-face-event/admin",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_subscription_put: Template = {
    name: "face-to-face-event/subscription",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_unsubscription_put: Template = {
    name: "face-to-face-event/unsubscription",
    code: "TODO",
    response: "TODO"
  }

  public static face_to_face_event_id_admin_delete: Template = {
    name: "face-to-face-event/:id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static room_documents_room_id_get: Template = {
    name: "room-documents/:room_id",
    code: "TODO",
    response: "TODO"
  }

  public static room_links_room_id_get: Template = {
    name: "room-links/:room_id",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chats_get: Template = {
    name: "direct-chats",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chats_all_get: Template = {
    name: "direct-chats/all",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_id_get: Template = {
    name: "direct-chat/:id",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_post: Template = {
    name: "direct-chat",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_id_delete: Template = {
    name: "direct-chat/:id",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_message_post: Template = {
    name: "direct-chat/message",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_messages_room_id_get: Template = {
    name: "direct-chat/message/:room_id",
    code: "TODO",
    response: "TODO"
  }

  public static direct_chat_message_id_delete: Template = {
    name: "direct-chat/message/:id",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_rooms_get: Template = {
    name: "follow-up-rooms",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_rooms_all_get: Template = {
    name: "follow-up-rooms/all",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_id_get: Template = {
    name: "follow-up-rooms/:id",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_post: Template = {
    name: "follow-up-rooms",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_put: Template = {
    name: "follow-up-rooms",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_add_member_put: Template = {
    name: "follow-up-rooms/add-member",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_leave_member_put: Template = {
    name: "follow-up-rooms/leave-member",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_open_put: Template = {
    name: "follow-up-room/open",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_close_put: Template = {
    name: "follow-up-room/close",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_id_delete: Template = {
    name: "follow-up-room/:id",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_message_post: Template = {
    name: "follow-up-room/message",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_message_id_delete: Template = {
    name: "follow-up-room/message/:id",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_message_id_admin_delete: Template = {
    name: "follow-up-room/message/:id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static follow_up_room_messages_room_id_get: Template = {
    name: "follow-up-room/messages/:room_id",
    code: "TODO",
    response: "TODO"
  }

  public static public_channels_get: Template = {
    name: "public-channel",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_id_get: Template = {
    name: "public-channel/:id",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_post: Template = {
    name: "public-channel",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_put: Template = {
    name: "public-channel",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_id_delete: Template = {
    name: "public-channel/:id",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_id_admin_delete: Template = {
    name: "public-channel/:id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_subscribe_put: Template = {
    name: "public-channel/subscribe",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_unsubscribe_put: Template = {
    name: "public-channel/unsubscribe",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_message_post: Template = {
    name: "public-channel/message",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_message_id_delete: Template = {
    name: "public-channel/message/:id",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_message_id_admin_delete: Template = {
    name: "public-channel/message/:id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static public_channel_messages_room_id_get: Template = {
    name: "public-channel/message/:roomId",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_post: Template = {
    name: "wall-post",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_put: Template = {
    name: "wall-post",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_id_delete: Template = {
    name: "wall-post/:id",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_admin_put: Template = {
    name: "wall-post/admin",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_id_admin_delete: Template = {
    name: "wall-post/:id/admin",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_like_put: Template = {
    name: "wall-post/like",
    code: "TODO",
    response: "TODO"
  }
  public static wall_post_unlike_put: Template = {
    name: "wall-post/unlike",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_comment_post: Template = {
    name: "wall-post/comment",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_comment_like_put: Template = {
    name: "wall-post/comment/like",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_comment_unlike_put: Template = {
    name: "wall-post/comment/unlike",
    code: "TODO",
    response: "TODO"
  }

  public static wall_post_id_get: Template = {
    name: "wall-post/:id",
    code: "TODO",
    response: "TODO"
  }

  public static wall_posts_get: Template = {
    name: "wall-posts",
    code: "TODO",
    response: "TODO"
  }

  public static actors_get: Template = {
    name: "actors",
    code: "TODO",
    response: "TODO"
  }

  public static actors_import_csv_post: Template = {
    name: "actors/import/csv",
    code: "TODO",
    response: "TODO"
  }

  public static actors_by_name_and_state_get: Template = {
    name: "actors/by-name-and-state",
    code: "TODO",
    response: "TODO"
  }

  public static actors_by_type_get: Template = {
    name: "actors/by-type",
    code: "TODO",
    response: "TODO"
  }

  public static actors_by_state_get: Template = {
    name: "actors/by-state",
    code: "TODO",
    response: "TODO"
  }

  public static actors_by_member_get: Template = {
    name: "actors/by-member",
    code: "TODO",
    response: "TODO"
  }

  public static actors_id_get: Template = {
    name: "actors/:id",
    code: "TODO",
    response: "TODO"
  }

  public static actor_post: Template = {
    name: "actor",
    code: "TODO",
    response: "TODO"
  }

  public static actor_put: Template = {
    name: "actor",
    code: "TODO",
    response: "TODO"
  }

  public static actor_accept_put: Template = {
    name: "actor/accept",
    code: "TODO",
    response: "TODO"
  }

  public static actor_reject_put: Template = {
    name: "actor/reject",
    code: "TODO",
    response: "TODO"
  }

  public static actor_id_delete: Template = {
    name: "actor/:id",
    code: "TODO",
    response: "TODO"
  }

  public static fcm_token_put: Template = {
    name: "fcmToken",
    code: "\nTODO",
    response: "\nTODO"
  }

  public static member_logged_in_get: Template = {
    name: "member/logged-in",
    code: "TODO",
    response: "TODO"
  }

  public static members_get: Template = {
    name: "members",
    code: "TODO",
    response: "TODO"
  }

  public static member_id_get: Template = {
    name: "member/:id",
    code: "TODO",
    response: "TODO"
  }

  public static member_id_marker_get: Template = {
    name: "member/:id/marker",
    code: "TODO",
    response: "TODO"
  }

  public static member_put: Template = {
    name: "member",
    code: "TODO",
    response: "TODO"
  }

  public static member_id_delete: Template = {
    name: "member/:id",
    code: "TODO",
    response: "TODO"
  }

  public static education_post: Template = {
    name: "education",
    code: "TODO",
    response: "TODO"
  }

  public static education_put: Template = {
    name: "education",
    code: "TODO",
    response: "TODO"
  }

  public static education_id_delete: Template = {
    name: "education/:id",
    code: "TODO",
    response: "TODO"
  }

  public static experience_post: Template = {
    name: "experience",
    code: "TODO",
    response: "TODO"
  }

  public static experience_put: Template = {
    name: "experience",
    code: "TODO",
    response: "TODO"
  }

  public static experience_id_delete: Template = {
    name: "experience/:id",
    code: "TODO",
    response: "TODO"
  }

  public static projects_get: Template = {
    name: "projects",
    code: "TODO",
    response: "TODO"
  }

  public static project_id_get: Template = {
    name: "project/:id",
    code: "TODO",
    response: "TODO"
  }

  public static project_post: Template = {
    name: "project",
    code: "TODO",
    response: "TODO"
  }

  public static project_put: Template = {
    name: "project",
    code: "TODO",
    response: "TODO"
  }

  public static project_delete: Template = {
    name: "project/:id",
    code: "TODO",
    response: "TODO"
  }

}
