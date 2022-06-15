import {EndpointTemplate} from '../../../../app/model/EndpointTemplate';

export class DatahubJavaTemplates {

  public static version_get: EndpointTemplate = {
    name: "version",
    code: "\nSystem.setProperty(\"DATAHUB_HOST\", \"localhost\");\n" +
      "System.setProperty(\"DATAHUB_PORT\", \"8084\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "DatahubApi datahubApi = new DatahubApi();\n" +
      "String version = datahubApi.internal().version(app).getResponse();\n" +
      "System.out.println(version);",
    response: null
  }

  public static event_post: EndpointTemplate = {
    name: "version",
    code: "\nSystem.setProperty(\"DATAHUB_HOST\", \"localhost\");\n" +
      "System.setProperty(\"DATAHUB_PORT\", \"8084\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "DatahubApi datahubApi = new DatahubApi();\n" +
      "Comment comment = new Comment();\n" +
      "comment.setContent(\"New coment\");\n" +
      "comment.setAuthorMember(new Member());\n" +
      "comment.setLikes(new HashSet<String>());\n" +
      "comment.setCreatedAt(ZonedDateTime.now());\n" +
      "WallPostCommentAddEvent wallPostCommentAddEvent = new WallPostCommentAddEvent();\n" +
      "wallPostCommentAddEvent.setComment(comment);\n" +
      "DatahubEvent event = new DatahubEvent.Builder<WallPostCommentAddEvent>()\n" +
      "    .type(EventType.WALL_POST_COMMENT_ADD_EVENT)\n" +
      "    .createAt(ZonedDateTime.now())\n" +
      "    .data(wallPostCommentAddEvent)\n" +
      "    .build();\n" +
      "datahubApi.events().create(app, event);",
    response: null
  }
}
