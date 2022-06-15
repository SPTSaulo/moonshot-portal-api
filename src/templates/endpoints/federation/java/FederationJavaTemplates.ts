import { EndpointTemplate } from '../../../../app/model/EndpointTemplate';

export class FederationJavaTemplates {

  public static version_get: EndpointTemplate = {
    name: "version",
    code: "\nSystem.setProperty(\"FEDERATION_HOST\", \"localhost\");\n" +
      "System.setProperty(\"FEDERATION_PORT\", \"8081\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientId = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "FederationApi federationApi = new FederationApi();\n" +
      "String version = federationApi.internal().version(app).getResponse();\n" +
      "System.out.println(version);",
    response: "\n2.0.11.r20-SNAPSHOT"
  }

  public static login_post: EndpointTemplate = {
    name: "login",
    code: "\nSystem.setProperty(\"FEDERATION_HOST\", \"localhost\");\n" +
      "System.setProperty(\"FEDERATION_PORT\", \"8081\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientId = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "FederationApi federationApi = new FederationApi();\n" +
      "federationApi.internal().login(app, \"YOUR_EMAIL\", \"YOUR_PASSWORD\");",
    response: null
  }

  public static logout_get: EndpointTemplate = {
    name: "logout",
    code: "\nSystem.setProperty(\"FEDERATION_HOST\", \"localhost\");\n" +
      "System.setProperty(\"FEDERATION_PORT\", \"8081\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientId = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "FederationApi federationApi = new FederationApi();\n" +
      "String logout = federationApi.internal().logout(app).getResponse();\n" +
      "System.out.println(logout);",
    response: "\nnull"
  }

  public static token_post: EndpointTemplate = {
    name: "token",
    code: "\nSystem.setProperty(\"FEDERATION_HOST\", \"localhost\");\n" +
      "System.setProperty(\"FEDERATION_PORT\", \"8081\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientId = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "FederationApi federationApi = new FederationApi();\n" +
      "federationApi.internal().token(app, \"YOUR_TOKEN\");",
    response: null
  }

  public static communities_get: EndpointTemplate = {
    name: "communities",
    code: "\nSystem.setProperty(\"FEDERATION_HOST\", \"localhost\");\n" +
      "System.setProperty(\"FEDERATION_PORT\", \"8081\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientId = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "FederationApi federationApi = new FederationApi();\n" +
      "List<Community> communities = federationApi.internal().communities(app).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(communities);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"module\":\"community\",\n" +
      "      \"name\":\"Community\"\n" +
      "   }\n" +
      "]"
  }

  public static modules_get: EndpointTemplate = {
    name: "modules",
    code: "\nSystem.setProperty(\"FEDERATION_HOST\", \"localhost\");\n" +
      "System.setProperty(\"FEDERATION_PORT\", \"8081\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientId = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "FederationApi federationApi = new FederationApi();\n" +
      "List<String> modules = federationApi.internal().modules(app, \"saulobach1@gmail.com\").getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(modules);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   \"COMMUNITY\",\n" +
      "   \"CONNECT\",\n" +
      "   \"CHALLENGES\"\n" +
      "]"
  }

  public static user_id_get: EndpointTemplate = {
    name: "users/:id",
    code: "\nSystem.setProperty(\"FEDERATION_HOST\", \"localhost\");\n" +
      "System.setProperty(\"FEDERATION_PORT\", \"8081\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientId = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "FederationApi federationApi = new FederationApi();\n" +
      "User user = federationApi.users().user(app, \"60acae8e2f799d228a4d4a85\").getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(user);\n" +
      "System.out.println(jsonObject);",
    response: "\n{\n" +
      "    \"id\": \"60acae8e2f799d228a4d4a85\",\n" +
      "    \"email\": \"usuario1@gmail.com\",\n" +
      "    \"memberId\": \"61445159784bca6ef764c6df\",\n" +
      "    \"roles\": [\n" +
      "\"USER\",\n" +
      "\"DEV:ECOSYSTEM_MANAGER\"\n" +
      "    ],\n" +
      "    \"permissions\": [\n" +
      "\"DEV:ONLINE_EVENT_CREATE\",\n" +
      "\"DEV:ONLINE_EVENT_ANY_UPDATE\",\n" +
      "\"DEV:ONLINE_EVENT_ANY_DELETE\",\n" +
      "\"DEV:FACE_TO_FACE_EVENT_CREATE\",\n" +
      "\"DEV:FACE_TO_FACE_EVENT_ANY_UPDATE\",\n" +
      "\"DEV:FACE_TO_FACE_EVENT_ANY_DELETE\",\n" +
      "\"DEV:DIRECT_CHAT_ANY_LIST\",\n" +
      "\"DEV:FOLLOW_UP_ROOM_ANY_LIST\",\n" +
      "\"DEV:PUBLIC_CHANNEL_CREATE\",\n" +
      "\"DEV:PUBLIC_CHANNEL_ANY_UPDATE\",\n" +
      "\"DEV:PUBLIC_CHANNEL_ANY_DELETE\",\n" +
      "\"DEV:WALL_POST_CREATE\",\n" +
      "\"DEV:WALL_POST_ANY_UPDATE\",\n" +
      "\"DEV:WALL_POST_ANY_DELETE\",\n" +
      "\"DEV:ACTOR_MANAGEMENT\",\n" +
      "\"DEV:ACTOR_INVITE\",\n" +
      "\"DEV:ECOSYSTEM_UPDATE\",\n" +
      "\"DEV:PERMISSION_MANAGEMENT\"\n" +
      "    ]\n" +
      "}"
  }

  public static user_by_email_get: EndpointTemplate = {
    name: "users/by/email",
    code: "\nSystem.setProperty(\"FEDERATION_HOST\", \"localhost\");\n" +
      "System.setProperty(\"FEDERATION_PORT\", \"8081\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientId = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "FederationApi federationApi = new FederationApi();\n" +
      "User user = federationApi.users().userByEmail(app, \"user1@gmail.com\").getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(user);\n" +
      "System.out.println(jsonObject);",
    response: "\n{\n" +
      "    \"id\": \"60acae8e2f799d228a4d4a85\",\n" +
      "    \"email\": \"usuario1@gmail.com\",\n" +
      "    \"memberId\": \"61445159784bca6ef764c6df\",\n" +
      "    \"roles\": [\n" +
      "\"USER\",\n" +
      "\"DEV:ECOSYSTEM_MANAGER\"\n" +
      "    ],\n" +
      "    \"permissions\": [\n" +
      "\"DEV:ONLINE_EVENT_CREATE\",\n" +
      "\"DEV:ONLINE_EVENT_ANY_UPDATE\",\n" +
      "\"DEV:ONLINE_EVENT_ANY_DELETE\",\n" +
      "\"DEV:FACE_TO_FACE_EVENT_CREATE\",\n" +
      "\"DEV:FACE_TO_FACE_EVENT_ANY_UPDATE\",\n" +
      "\"DEV:FACE_TO_FACE_EVENT_ANY_DELETE\",\n" +
      "\"DEV:DIRECT_CHAT_ANY_LIST\",\n" +
      "\"DEV:FOLLOW_UP_ROOM_ANY_LIST\",\n" +
      "\"DEV:PUBLIC_CHANNEL_CREATE\",\n" +
      "\"DEV:PUBLIC_CHANNEL_ANY_UPDATE\",\n" +
      "\"DEV:PUBLIC_CHANNEL_ANY_DELETE\",\n" +
      "\"DEV:WALL_POST_CREATE\",\n" +
      "\"DEV:WALL_POST_ANY_UPDATE\",\n" +
      "\"DEV:WALL_POST_ANY_DELETE\",\n" +
      "\"DEV:ACTOR_MANAGEMENT\",\n" +
      "\"DEV:ACTOR_INVITE\",\n" +
      "\"DEV:ECOSYSTEM_UPDATE\",\n" +
      "\"DEV:PERMISSION_MANAGEMENT\"\n" +
      "    ]\n" +
      "}"
  }

  public static users_get: EndpointTemplate = {
    name: "users",
    code: "\nSystem.setProperty(\"FEDERATION_HOST\", \"localhost\");\n" +
      "System.setProperty(\"FEDERATION_PORT\", \"8081\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientId = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "FederationApi federationApi = new FederationApi();\n" +
      "List<User> users = federationApi.users().all(app).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(users);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "    {\n" +
      "\"id\": \"60acae8e2f799d228a4d4a85\",\n" +
      "\"email\": \"usuario1@gmail.com\",\n" +
      "\"memberId\": \"60acae8e2f799d228a4d4a85\",\n" +
      "\"roles\": [\n" +
      "    \"DEV:ECOSYSTEM_USER\",\n" +
      "    \"DEV:ECOSYSTEM_MANAGER\"\n" +
      "],\n" +
      "\"permissions\": [\n" +
      "    \"DEV:ONLINE_EVENT_CREATE\",\n" +
      "    \"DEV:ONLINE_EVENT_ANY_UPDATE\",\n" +
      "    \"DEV:ONLINE_EVENT_ANY_DELETE\",\n" +
      "    \"DEV:FACE_TO_FACE_EVENT_CREATE\",\n" +
      "    \"DEV:FACE_TO_FACE_EVENT_ANY_UPDATE\",\n" +
      "    \"DEV:FACE_TO_FACE_EVENT_ANY_DELETE\",\n" +
      "    \"DEV:DIRECT_CHAT_ANY_LIST\",\n" +
      "    \"DEV:FOLLOW_UP_ROOM_ANY_LIST\",\n" +
      "    \"DEV:PUBLIC_CHANNEL_CREATE\",\n" +
      "    \"DEV:PUBLIC_CHANNEL_ANY_UPDATE\",\n" +
      "    \"DEV:PUBLIC_CHANNEL_ANY_DELETE\",\n" +
      "    \"DEV:WALL_POST_CREATE\",\n" +
      "    \"DEV:WALL_POST_ANY_UPDATE\",\n" +
      "    \"DEV:WALL_POST_ANY_DELETE\",\n" +
      "    \"DEV:ACTOR_MANAGEMENT\",\n" +
      "    \"DEV:ACTOR_INVITE\",\n" +
      "    \"DEV:ECOSYSTEM_UPDATE\",\n" +
      "    \"DEV:PERMISSION_MANAGEMENT\"\n" +
      "]\n" +
      "    },\n" +
      "    {\n" +
      "\"id\": \"61445159784bca6ef764c6df\",\n" +
      "\"email\": \"usuario2@gmail.com\",\n" +
      "\"memberId\": \"61445159784bca6ef764c6df\",\n" +
      "\"roles\": [\n" +
      "    \"DEV:ECOSYSTEM_USER\"\n" +
      "],\n" +
      "\"permissions\": [\n" +
      "    \"DEV:WALL_POST_CREATE\",\n" +
      "    \"DEV:ONLINE_EVENT_CREATE\",\n" +
      "    \"DEV:ONLINE_EVENT_ANY_UPDATE\",\n" +
      "    \"DEV:ONLINE_EVENT_ANY_DELETE\",\n" +
      "    \"DEV:FACE_TO_FACE_EVENT_CREATE\",\n" +
      "    \"DEV:FACE_TO_FACE_EVENT_ANY_UPDATE\",\n" +
      "    \"DEV:FACE_TO_FACE_EVENT_ANY_DELETE\",\n" +
      "    \"DEV:PUBLIC_CHANNEL_CREATE\",\n" +
      "    \"DEV:PUBLIC_CHANNEL_ANY_UPDATE\",\n" +
      "    \"DEV:PUBLIC_CHANNEL_ANY_DELETE\",\n" +
      "    \"DEV:FOLLOW_UP_ROOM_ANY_LIST\",\n" +
      "    \"DEV:ECOSYSTEM_UPDATE\",\n" +
      "    \"DEV:ACTOR_MANAGEMENT\",\n" +
      "    \"DEV:ACTOR_INVITE\"\n" +
      "]\n" +
      "    }\n" +
      "]"
  }

  public static users_by_roles_get: EndpointTemplate = {
    name: "users/by/roles",
    code: "\nSystem.setProperty(\"FEDERATION_HOST\", \"localhost\");\n" +
      "System.setProperty(\"FEDERATION_PORT\", \"8081\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientId = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "FederationApi federationApi = new FederationApi();\n" +
      "List<User> users = federationApi.users().byRoles(app, new ArrayList<Role>()).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(users);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "    {\n" +
      "\"id\": \"60acae8e2f799d228a4d4a85\",\n" +
      "\"email\": \"usuario1@gmail.com\",\n" +
      "\"memberId\": \"60acae8e2f799d228a4d4a85\",\n" +
      "\"roles\": [\n" +
      "    \"DEV:ECOSYSTEM_USER\",\n" +
      "    \"DEV:ECOSYSTEM_MANAGER\"\n" +
      "],\n" +
      "\"permissions\": [\n" +
      "    \"DEV:ONLINE_EVENT_CREATE\",\n" +
      "    \"DEV:ONLINE_EVENT_ANY_UPDATE\",\n" +
      "    \"DEV:ONLINE_EVENT_ANY_DELETE\",\n" +
      "    \"DEV:FACE_TO_FACE_EVENT_CREATE\",\n" +
      "    \"DEV:FACE_TO_FACE_EVENT_ANY_UPDATE\",\n" +
      "    \"DEV:FACE_TO_FACE_EVENT_ANY_DELETE\",\n" +
      "    \"DEV:DIRECT_CHAT_ANY_LIST\",\n" +
      "    \"DEV:FOLLOW_UP_ROOM_ANY_LIST\",\n" +
      "    \"DEV:PUBLIC_CHANNEL_CREATE\",\n" +
      "    \"DEV:PUBLIC_CHANNEL_ANY_UPDATE\",\n" +
      "    \"DEV:PUBLIC_CHANNEL_ANY_DELETE\",\n" +
      "    \"DEV:WALL_POST_CREATE\",\n" +
      "    \"DEV:WALL_POST_ANY_UPDATE\",\n" +
      "    \"DEV:WALL_POST_ANY_DELETE\",\n" +
      "    \"DEV:ACTOR_MANAGEMENT\",\n" +
      "    \"DEV:ACTOR_INVITE\",\n" +
      "    \"DEV:ECOSYSTEM_UPDATE\",\n" +
      "    \"DEV:PERMISSION_MANAGEMENT\"\n" +
      "]\n" +
      "    },\n" +
      "    {\n" +
      "\"id\": \"61445159784bca6ef764c6df\",\n" +
      "\"email\": \"usuario2@gmail.com\",\n" +
      "\"memberId\": \"61445159784bca6ef764c6df\",\n" +
      "\"roles\": [\n" +
      "    \"DEV:ECOSYSTEM_USER\"\n" +
      "],\n" +
      "\"permissions\": [\n" +
      "    \"DEV:WALL_POST_CREATE\",\n" +
      "    \"DEV:ONLINE_EVENT_CREATE\",\n" +
      "    \"DEV:ONLINE_EVENT_ANY_UPDATE\",\n" +
      "    \"DEV:ONLINE_EVENT_ANY_DELETE\",\n" +
      "    \"DEV:FACE_TO_FACE_EVENT_CREATE\",\n" +
      "    \"DEV:FACE_TO_FACE_EVENT_ANY_UPDATE\",\n" +
      "    \"DEV:FACE_TO_FACE_EVENT_ANY_DELETE\",\n" +
      "    \"DEV:PUBLIC_CHANNEL_CREATE\",\n" +
      "    \"DEV:PUBLIC_CHANNEL_ANY_UPDATE\",\n" +
      "    \"DEV:PUBLIC_CHANNEL_ANY_DELETE\",\n" +
      "    \"DEV:FOLLOW_UP_ROOM_ANY_LIST\",\n" +
      "    \"DEV:ECOSYSTEM_UPDATE\",\n" +
      "    \"DEV:ACTOR_MANAGEMENT\",\n" +
      "    \"DEV:ACTOR_INVITE\"\n" +
      "]\n" +
      "    }\n" +
      "]"
  }

  public static users_by_perms_get: EndpointTemplate = {
    name: "users/by/perms",
    code: "\nSystem.setProperty(\"FEDERATION_HOST\", \"localhost\");\n" +
      "System.setProperty(\"FEDERATION_PORT\", \"8081\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientId = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "FederationApi federationApi = new FederationApi();\n" +
      "List<User> users = federationApi.users().byPerms(app, new ArrayList<Permission>()).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(users);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "    {\n" +
      "\"id\": \"60acae8e2f799d228a4d4a85\",\n" +
      "\"email\": \"usuario1@gmail.com\",\n" +
      "\"memberId\": \"60acae8e2f799d228a4d4a85\",\n" +
      "\"roles\": [\n" +
      "    \"DEV:ECOSYSTEM_USER\",\n" +
      "    \"DEV:ECOSYSTEM_MANAGER\"\n" +
      "],\n" +
      "\"permissions\": [\n" +
      "    \"DEV:ONLINE_EVENT_CREATE\",\n" +
      "    \"DEV:ONLINE_EVENT_ANY_UPDATE\",\n" +
      "    \"DEV:ONLINE_EVENT_ANY_DELETE\",\n" +
      "    \"DEV:FACE_TO_FACE_EVENT_CREATE\",\n" +
      "    \"DEV:FACE_TO_FACE_EVENT_ANY_UPDATE\",\n" +
      "    \"DEV:FACE_TO_FACE_EVENT_ANY_DELETE\",\n" +
      "    \"DEV:DIRECT_CHAT_ANY_LIST\",\n" +
      "    \"DEV:FOLLOW_UP_ROOM_ANY_LIST\",\n" +
      "    \"DEV:PUBLIC_CHANNEL_CREATE\",\n" +
      "    \"DEV:PUBLIC_CHANNEL_ANY_UPDATE\",\n" +
      "    \"DEV:PUBLIC_CHANNEL_ANY_DELETE\",\n" +
      "    \"DEV:WALL_POST_CREATE\",\n" +
      "    \"DEV:WALL_POST_ANY_UPDATE\",\n" +
      "    \"DEV:WALL_POST_ANY_DELETE\",\n" +
      "    \"DEV:ACTOR_MANAGEMENT\",\n" +
      "    \"DEV:ACTOR_INVITE\",\n" +
      "    \"DEV:ECOSYSTEM_UPDATE\",\n" +
      "    \"DEV:PERMISSION_MANAGEMENT\"\n" +
      "]\n" +
      "    },\n" +
      "    {\n" +
      "\"id\": \"61445159784bca6ef764c6df\",\n" +
      "\"email\": \"usuario2@gmail.com\",\n" +
      "\"memberId\": \"61445159784bca6ef764c6df\",\n" +
      "\"roles\": [\n" +
      "    \"DEV:ECOSYSTEM_USER\"\n" +
      "],\n" +
      "\"permissions\": [\n" +
      "    \"DEV:WALL_POST_CREATE\",\n" +
      "    \"DEV:ONLINE_EVENT_CREATE\",\n" +
      "    \"DEV:ONLINE_EVENT_ANY_UPDATE\",\n" +
      "    \"DEV:ONLINE_EVENT_ANY_DELETE\",\n" +
      "    \"DEV:FACE_TO_FACE_EVENT_CREATE\",\n" +
      "    \"DEV:FACE_TO_FACE_EVENT_ANY_UPDATE\",\n" +
      "    \"DEV:FACE_TO_FACE_EVENT_ANY_DELETE\",\n" +
      "    \"DEV:PUBLIC_CHANNEL_CREATE\",\n" +
      "    \"DEV:PUBLIC_CHANNEL_ANY_UPDATE\",\n" +
      "    \"DEV:PUBLIC_CHANNEL_ANY_DELETE\",\n" +
      "    \"DEV:FOLLOW_UP_ROOM_ANY_LIST\",\n" +
      "    \"DEV:ECOSYSTEM_UPDATE\",\n" +
      "    \"DEV:ACTOR_MANAGEMENT\",\n" +
      "    \"DEV:ACTOR_INVITE\"\n" +
      "]\n" +
      "    }\n" +
      "]"
  }

  public static users_perms_get: EndpointTemplate = {
    name:"users/perms" ,
    code: "\nSystem.setProperty(\"FEDERATION_HOST\", \"localhost\");\n" +
      "System.setProperty(\"FEDERATION_PORT\", \"8081\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientId = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "FederationApi federationApi = new FederationApi();\n" +
      "List<Permission> permissions = federationApi.users().perms(app, \"60acae8e2f799d228a4d4a85\").getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(permissions);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "    \"ONLINE_EVENT_CREATE\",\n" +
      "    \"ONLINE_EVENT_ANY_UPDATE\",\n" +
      "    \"ONLINE_EVENT_ANY_DELETE\",\n" +
      "    \"FACE_TO_FACE_EVENT_CREATE\",\n" +
      "    \"FACE_TO_FACE_EVENT_ANY_UPDATE\",\n" +
      "    \"FACE_TO_FACE_EVENT_ANY_DELETE\",\n" +
      "    \"DIRECT_CHAT_ANY_LIST\",\n" +
      "    \"FOLLOW_UP_ROOM_ANY_LIST\",\n" +
      "    \"PUBLIC_CHANNEL_CREATE\",\n" +
      "    \"PUBLIC_CHANNEL_ANY_UPDATE\",\n" +
      "    \"PUBLIC_CHANNEL_ANY_DELETE\",\n" +
      "    \"WALL_POST_CREATE\",\n" +
      "    \"WALL_POST_ANY_UPDATE\",\n" +
      "    \"WALL_POST_ANY_DELETE\",\n" +
      "    \"ACTOR_MANAGEMENT\",\n" +
      "    \"ACTOR_INVITE\",\n" +
      "    \"ECOSYSTEM_UPDATE\",\n" +
      "    \"PERMISSION_MANAGEMENT\"\n" +
      "]"
  }

  public static users_perms_put: EndpointTemplate = {
    name: "users/perms",
    code: "\nSystem.setProperty(\"FEDERATION_HOST\", \"localhost\");\n" +
      "System.setProperty(\"FEDERATION_PORT\", \"8081\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientId = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "FederationApi federationApi = new FederationApi();\n" +
      "User user = federationApi.users().user(app, \"60acae8e2f799d228a4d4a85\").getResponse();\n" +
      "UserPermsUpdateEvent userPermsUpdateEvent = new UserPermsUpdateEvent();\n" +
      "userPermsUpdateEvent.setId(user.getId());\n" +
      "userPermsUpdateEvent.setPerms(new ArrayList<String>());\n" +
      "federationApi.users().updatePerms(app, userPermsUpdateEvent);",
    response: null
  }

  public static user_verify_put: EndpointTemplate = {
    name: "users/verify",
    code: "\nSystem.setProperty(\"FEDERATION_HOST\", \"localhost\");\n" +
      "System.setProperty(\"FEDERATION_PORT\", \"8081\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientId = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "FederationApi federationApi = new FederationApi();\n" +
      "UserVerifyEvent userVerifyEvent = new UserVerifyEvent();\n" +
      "userVerifyEvent.setEmail(\"YOUR_EMAIL\");\n" +
      "userVerifyEvent.setToken(\"YOUR_TOKEN\");\n" +
      "userVerifyEvent.setPassword(\"YOUR_PASSWORD\");\n" +
      "userVerifyEvent.setRepeatPassword(\"REPEAT_YOUR_PASSWORD\");\n" +
      "federationApi.users().verify(app, userVerifyEvent);",
    response: null
  }

  public static user_verify_resend_put: EndpointTemplate = {
    name: "users/verify/re-send",
    code: "\nSystem.setProperty(\"FEDERATION_HOST\", \"localhost\");\n" +
      "System.setProperty(\"FEDERATION_PORT\", \"8081\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientId = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "FederationApi federationApi = new FederationApi();\n" +
      "ResendVerificationEmailEvent resendVerificationEmailEvent = new ResendVerificationEmailEvent();\n" +
      "resendVerificationEmailEvent.setEmail(\"saulobach1@gmail.com\");\n" +
      "federationApi.users().verifyReSend(app, resendVerificationEmailEvent);",
    response: null
  }

  public static password_last_modification_get: EndpointTemplate = {
    name: "passwords/last-modification",
    code: "\nSystem.setProperty(\"FEDERATION_HOST\", \"localhost\");\n" +
      "System.setProperty(\"FEDERATION_PORT\", \"8081\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientId = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "FederationApi federationApi = new FederationApi();\n" +
      "LocalDate lastModificationPassword = federationApi.passwords().lastModification(app, \"YOUR_EMAIL\").getResponse();\n" +
      "System.out.println(lastModificationPassword);",
    response: "\n2021-11-30",
  }

  public static password_request_post: EndpointTemplate = {
    name: "passwords/request",
    code: "\nSystem.setProperty(\"FEDERATION_HOST\", \"localhost\");\n" +
      "System.setProperty(\"FEDERATION_PORT\", \"8081\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientId = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "FederationApi federationApi = new FederationApi();\n" +
      "User user = federationApi.users().user(app, \"60acae8e2f799d228a4d4a85\").getResponse();\n" +
      "PasswordRequestEvent passwordRequestEvent = new PasswordRequestEvent();\n" +
      "passwordRequestEvent.setId(user.getId());\n" +
      "passwordRequestEvent.setEmail(\"YOUR_EMAIL\");\n" +
      "federationApi.passwords().request(app, passwordRequestEvent);",
    response: null
  }

  public static password_recover_post: EndpointTemplate = {
    name: "passwords/recover",
    code: "\nSystem.setProperty(\"FEDERATION_HOST\", \"localhost\");\n" +
      "System.setProperty(\"FEDERATION_PORT\", \"8081\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientId = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "FederationApi federationApi = new FederationApi();\n" +
      "User user = federationApi.users().user(app, \"60acae8e2f799d228a4d4a85\").getResponse();\n" +
      "PasswordRecoverEvent passwordRecoverEvent = new PasswordRecoverEvent();\n" +
      "passwordRecoverEvent.setToken(\"EMAIL_TOKEN\");\n" +
      "passwordRecoverEvent.setPassword(\"YOUR_PASSWORD\");\n" +
      "passwordRecoverEvent.setRepeatPassword(\"REPEAT_YOUR_PASSWORD\");\n" +
      "federationApi.passwords().recover(app, passwordRecoverEvent);",
    response: null
  }

  public static password_change_put: EndpointTemplate = {
    name: "passwords/change",
    code: "\nSystem.setProperty(\"FEDERATION_HOST\", \"localhost\");\n" +
      "System.setProperty(\"FEDERATION_PORT\", \"8081\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientId = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "FederationApi federationApi = new FederationApi();\n" +
      "User user = federationApi.users().user(app, \"60acae8e2f799d228a4d4a85\").getResponse();\n" +
      "PasswordChange passwordChange = new PasswordChange();\n" +
      "passwordChange.setPassword(\"YOUR_OLD_PASSWORD\");\n" +
      "passwordChange.setNewPassword(\"YOUR_NEW_PASSWORD\");\n" +
      "passwordChange.setNewPasswordRepeat(\"REPEAT_YOUR_NEW_PASSWORD\");\n" +
      "federationApi.passwords().change(app, passwordChange);",
    response: null
  }

  public static verifications_get: EndpointTemplate = {
    name: "verifications",
    code: "\nSystem.setProperty(\"FEDERATION_HOST\", \"localhost\");\n" +
      "System.setProperty(\"FEDERATION_PORT\", \"8081\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientId = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "FederationApi federationApi = new FederationApi();\n" +
      "List<Verification> verifications = federationApi.verifications().all(app).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(verifications);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61b1ba463f3beb45b54a357e\",\n" +
      "      \"email\":\"iaramburu@moonshot.ceo\",\n" +
      "      \"token\":null,\n" +
      "      \"used\":false\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61b1ba463f3beb45b54a357f\",\n" +
      "      \"email\":\"dsuriol@gmail.com\",\n" +
      "      \"token\":null,\n" +
      "      \"used\":false\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61b1ba473f3beb45b54a3580\",\n" +
      "      \"email\":\"trujillosanchezjeremy@gmail.com\",\n" +
      "      \"token\":\"4f8e9131-7072-4bc9-926e-49ff90fba723\",\n" +
      "      \"used\":false\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61b1ba473f3beb45b54a3581\",\n" +
      "      \"email\":\"saulobach1@gmail.com\",\n" +
      "      \"token\":null,\n" +
      "      \"used\":false\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61b1ba483f3beb45b54a3582\",\n" +
      "      \"email\":\"borja.gallifrey@gmail.com\",\n" +
      "      \"token\":null,\n" +
      "      \"used\":false\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61b1ba483f3beb45b54a3583\",\n" +
      "      \"email\":\"lreina@moonshot.ceo\",\n" +
      "      \"token\":null,\n" +
      "      \"used\":false\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61b1ba483f3beb45b54a3584\",\n" +
      "      \"email\":\"amct24@hotmail.com\",\n" +
      "      \"token\":null,\n" +
      "      \"used\":false\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61b1ba493f3beb45b54a3585\",\n" +
      "      \"email\":\"calsot@calsot.com\",\n" +
      "      \"token\":null,\n" +
      "      \"used\":false\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61b1ba4a3f3beb45b54a3586\",\n" +
      "      \"email\":\"jeremy.trujillo.jt15@gmail.com\",\n" +
      "      \"token\":\"72657257-2d9d-4db5-aaa1-02f2b9cf21d5\",\n" +
      "      \"used\":false\n" +
      "   }\n" +
      "]"
  }
}
