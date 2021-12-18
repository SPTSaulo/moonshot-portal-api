import { Template } from '../../../app/model/Template';

export class FederationJavascriptTemplates {

  public static version_get: Template = {
    name: "version",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/federation/version';\n\nfetch(url)\n  .then(response => response.json())\n  .then(data => console.log(JSON.stringify(data)));",
    response: "\n\"2.0.2.r15-RC1\""
  }

  public static login_post: Template = {
    name: "login",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/federation/login';\n" +
      "const body = {\n" +
      "    \"username\": \"user1@gmail.com\",\n" +
      "    \"password\": \"hola123\"\n" +
      "}\n" +
      "\n" +
      "fetch(url , {\n" +
      "  method: \"POST\",\n" +
      "  body: JSON.stringify(body)\n" +
      "})\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: null
  }

  public static logout_get: Template = {
    name: "logout",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/federation/logout';\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: null
  }

  public static token_post: Template = {
    name: "token",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/federation/token?idToken=987012034912398417023948'\n" +
      "\n" +
      "fetch(url, {\n" +
      "  method: 'POST'\n" +
      "})\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: null
  }

  public static communities_get: Template = {
    name: "communities",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/federation/communities'\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n[\n" +
      "   {\n" +
      "      \"module\":\"Community\",\n" +
      "      \"name\":\"community\"\n" +
      "   }\n" +
      "]"
  }

  public static modules_get: Template = {
    name: "modules",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/federation/modules'\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n[\n" +
      "    \"COMMUNITY\",\n" +
      "    \"CONNECT\",\n" +
      "    \"CHALLENGES\"\n" +
      "]"
  }

  public static user_id_get: Template = {
    name: "user/:id",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/federation/user/1'\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n{\n" +
      "    \"id\": \"1\",\n" +
      "    \"email\": \"usuario1@gmail.com\",\n" +
      "    \"memberId\": \"1\",\n" +
      "    \"roles\": [\n" +
      "        \"USER\",\n" +
      "        \"DEV:ECOSYSTEM_MANAGER\"\n" +
      "    ],\n" +
      "    \"permissions\": [\n" +
      "        \"DEV:ONLINE_EVENT_CREATE\",\n" +
      "        \"DEV:ONLINE_EVENT_ANY_UPDATE\",\n" +
      "        \"DEV:ONLINE_EVENT_ANY_DELETE\",\n" +
      "        \"DEV:FACE_TO_FACE_EVENT_CREATE\",\n" +
      "        \"DEV:FACE_TO_FACE_EVENT_ANY_UPDATE\",\n" +
      "        \"DEV:FACE_TO_FACE_EVENT_ANY_DELETE\",\n" +
      "        \"DEV:DIRECT_CHAT_ANY_LIST\",\n" +
      "        \"DEV:FOLLOW_UP_ROOM_ANY_LIST\",\n" +
      "        \"DEV:PUBLIC_CHANNEL_CREATE\",\n" +
      "        \"DEV:PUBLIC_CHANNEL_ANY_UPDATE\",\n" +
      "        \"DEV:PUBLIC_CHANNEL_ANY_DELETE\",\n" +
      "        \"DEV:WALL_POST_CREATE\",\n" +
      "        \"DEV:WALL_POST_ANY_UPDATE\",\n" +
      "        \"DEV:WALL_POST_ANY_DELETE\",\n" +
      "        \"DEV:ACTOR_MANAGEMENT\",\n" +
      "        \"DEV:ACTOR_INVITE\",\n" +
      "        \"DEV:ECOSYSTEM_UPDATE\",\n" +
      "        \"DEV:PERMISSION_MANAGEMENT\"\n" +
      "    ]\n" +
      "}"
  }

  public static user_by_email_get: Template = {
    name: "user/by/email",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/federation/user/by/email?email=usuario1@gmail.com'\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n{\n" +
      "    \"id\": \"1\",\n" +
      "    \"email\": \"usuario1@gmail.com\",\n" +
      "    \"memberId\": \"2\",\n" +
      "    \"roles\": [\n" +
      "        \"USER\",\n" +
      "        \"DEV:ECOSYSTEM_MANAGER\"\n" +
      "    ],\n" +
      "    \"permissions\": [\n" +
      "        \"DEV:ONLINE_EVENT_CREATE\",\n" +
      "        \"DEV:ONLINE_EVENT_ANY_UPDATE\",\n" +
      "        \"DEV:ONLINE_EVENT_ANY_DELETE\",\n" +
      "        \"DEV:FACE_TO_FACE_EVENT_CREATE\",\n" +
      "        \"DEV:FACE_TO_FACE_EVENT_ANY_UPDATE\",\n" +
      "        \"DEV:FACE_TO_FACE_EVENT_ANY_DELETE\",\n" +
      "        \"DEV:DIRECT_CHAT_ANY_LIST\",\n" +
      "        \"DEV:FOLLOW_UP_ROOM_ANY_LIST\",\n" +
      "        \"DEV:PUBLIC_CHANNEL_CREATE\",\n" +
      "        \"DEV:PUBLIC_CHANNEL_ANY_UPDATE\",\n" +
      "        \"DEV:PUBLIC_CHANNEL_ANY_DELETE\",\n" +
      "        \"DEV:WALL_POST_CREATE\",\n" +
      "        \"DEV:WALL_POST_ANY_UPDATE\",\n" +
      "        \"DEV:WALL_POST_ANY_DELETE\",\n" +
      "        \"DEV:ACTOR_MANAGEMENT\",\n" +
      "        \"DEV:ACTOR_INVITE\",\n" +
      "        \"DEV:ECOSYSTEM_UPDATE\",\n" +
      "        \"DEV:PERMISSION_MANAGEMENT\"\n" +
      "    ]\n" +
      "}"
  }

  public static users_get: Template = {
    name: "users",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/federation/users'\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n[\n" +
      "    {\n" +
      "        \"id\": \"1\",\n" +
      "        \"email\": \"usuario1@gmail.com\",\n" +
      "        \"memberId\": \"1\",\n" +
      "        \"roles\": [\n" +
      "            \"DEV:ECOSYSTEM_USER\",\n" +
      "            \"DEV:ECOSYSTEM_MANAGER\"\n" +
      "        ],\n" +
      "        \"permissions\": [\n" +
      "            \"DEV:ONLINE_EVENT_CREATE\",\n" +
      "            \"DEV:ONLINE_EVENT_ANY_UPDATE\",\n" +
      "            \"DEV:ONLINE_EVENT_ANY_DELETE\",\n" +
      "            \"DEV:FACE_TO_FACE_EVENT_CREATE\",\n" +
      "            \"DEV:FACE_TO_FACE_EVENT_ANY_UPDATE\",\n" +
      "            \"DEV:FACE_TO_FACE_EVENT_ANY_DELETE\",\n" +
      "            \"DEV:DIRECT_CHAT_ANY_LIST\",\n" +
      "            \"DEV:FOLLOW_UP_ROOM_ANY_LIST\",\n" +
      "            \"DEV:PUBLIC_CHANNEL_CREATE\",\n" +
      "            \"DEV:PUBLIC_CHANNEL_ANY_UPDATE\",\n" +
      "            \"DEV:PUBLIC_CHANNEL_ANY_DELETE\",\n" +
      "            \"DEV:WALL_POST_CREATE\",\n" +
      "            \"DEV:WALL_POST_ANY_UPDATE\",\n" +
      "            \"DEV:WALL_POST_ANY_DELETE\",\n" +
      "            \"DEV:ACTOR_MANAGEMENT\",\n" +
      "            \"DEV:ACTOR_INVITE\",\n" +
      "            \"DEV:ECOSYSTEM_UPDATE\",\n" +
      "            \"DEV:PERMISSION_MANAGEMENT\"\n" +
      "        ]\n" +
      "    },\n" +
      "    {\n" +
      "        \"id\": \"2\",\n" +
      "        \"email\": \"usuario2@gmail.com\",\n" +
      "        \"memberId\": \"2\",\n" +
      "        \"roles\": [\n" +
      "            \"DEV:ECOSYSTEM_USER\"\n" +
      "        ],\n" +
      "        \"permissions\": [\n" +
      "            \"DEV:WALL_POST_CREATE\",\n" +
      "            \"DEV:ONLINE_EVENT_CREATE\",\n" +
      "            \"DEV:ONLINE_EVENT_ANY_UPDATE\",\n" +
      "            \"DEV:ONLINE_EVENT_ANY_DELETE\",\n" +
      "            \"DEV:FACE_TO_FACE_EVENT_CREATE\",\n" +
      "            \"DEV:FACE_TO_FACE_EVENT_ANY_UPDATE\",\n" +
      "            \"DEV:FACE_TO_FACE_EVENT_ANY_DELETE\",\n" +
      "            \"DEV:PUBLIC_CHANNEL_CREATE\",\n" +
      "            \"DEV:PUBLIC_CHANNEL_ANY_UPDATE\",\n" +
      "            \"DEV:PUBLIC_CHANNEL_ANY_DELETE\",\n" +
      "            \"DEV:FOLLOW_UP_ROOM_ANY_LIST\",\n" +
      "            \"DEV:ECOSYSTEM_UPDATE\",\n" +
      "            \"DEV:ACTOR_MANAGEMENT\",\n" +
      "            \"DEV:ACTOR_INVITE\"\n" +
      "        ]\n" +
      "    }\n" +
      "]"
  }

  public static users_by_roles_get: Template = {
    name: "users/by/roles",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/federation/users/by/roles?roles=DEV:ECOSYSTEM_USER'\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n[\n" +
      "    {\n" +
      "        \"id\": \"1\",\n" +
      "        \"email\": \"usuario1@gmail.com\",\n" +
      "        \"memberId\": \"1\",\n" +
      "        \"roles\": [\n" +
      "            \"USER\",\n" +
      "            \"DEV:ECOSYSTEM_MANAGER\"\n" +
      "        ],\n" +
      "        \"permissions\": [\n" +
      "            \"DEV:ONLINE_EVENT_CREATE\",\n" +
      "            \"DEV:ONLINE_EVENT_ANY_UPDATE\",\n" +
      "            \"DEV:ONLINE_EVENT_ANY_DELETE\",\n" +
      "            \"DEV:FACE_TO_FACE_EVENT_CREATE\",\n" +
      "            \"DEV:FACE_TO_FACE_EVENT_ANY_UPDATE\",\n" +
      "            \"DEV:FACE_TO_FACE_EVENT_ANY_DELETE\",\n" +
      "            \"DEV:DIRECT_CHAT_ANY_LIST\",\n" +
      "            \"DEV:FOLLOW_UP_ROOM_ANY_LIST\",\n" +
      "            \"DEV:PUBLIC_CHANNEL_CREATE\",\n" +
      "            \"DEV:PUBLIC_CHANNEL_ANY_UPDATE\",\n" +
      "            \"DEV:PUBLIC_CHANNEL_ANY_DELETE\",\n" +
      "            \"DEV:WALL_POST_CREATE\",\n" +
      "            \"DEV:WALL_POST_ANY_UPDATE\",\n" +
      "            \"DEV:WALL_POST_ANY_DELETE\",\n" +
      "            \"DEV:ACTOR_MANAGEMENT\",\n" +
      "            \"DEV:ACTOR_INVITE\",\n" +
      "            \"DEV:ECOSYSTEM_UPDATE\",\n" +
      "            \"DEV:PERMISSION_MANAGEMENT\"\n" +
      "        ]\n" +
      "    },\n" +
      "    {\n" +
      "        \"id\": \"2\",\n" +
      "        \"email\": \"usuario2@gmail.com\",\n" +
      "        \"memberId\": \"2\",\n" +
      "        \"roles\": [\n" +
      "            \"DEV:ECOSYSTEM_USER\"\n" +
      "        ],\n" +
      "        \"permissions\": [\n" +
      "            \"DEV:WALL_POST_CREATE\",\n" +
      "            \"DEV:ONLINE_EVENT_CREATE\",\n" +
      "            \"DEV:ONLINE_EVENT_ANY_UPDATE\",\n" +
      "            \"DEV:ONLINE_EVENT_ANY_DELETE\",\n" +
      "            \"DEV:FACE_TO_FACE_EVENT_CREATE\",\n" +
      "            \"DEV:FACE_TO_FACE_EVENT_ANY_UPDATE\",\n" +
      "            \"DEV:FACE_TO_FACE_EVENT_ANY_DELETE\",\n" +
      "            \"DEV:PUBLIC_CHANNEL_CREATE\",\n" +
      "            \"DEV:PUBLIC_CHANNEL_ANY_UPDATE\",\n" +
      "            \"DEV:PUBLIC_CHANNEL_ANY_DELETE\",\n" +
      "            \"DEV:FOLLOW_UP_ROOM_ANY_LIST\",\n" +
      "            \"DEV:ECOSYSTEM_UPDATE\",\n" +
      "            \"DEV:ACTOR_MANAGEMENT\",\n" +
      "            \"DEV:ACTOR_INVITE\"\n" +
      "        ]\n" +
      "    }\n" +
      "]"
  }

  public static users_by_perms_get: Template = {
    name: "users/by/perms",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/federation/users/by/perms?perms=DEV:WALL_POST_CREATE'\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n[\n" +
      "    {\n" +
      "        \"id\": \"1\",\n" +
      "        \"email\": \"usuario1@gmail.com\",\n" +
      "        \"memberId\": \"1\",\n" +
      "        \"roles\": [\n" +
      "            \"USER\",\n" +
      "            \"DEV:ECOSYSTEM_MANAGER\"\n" +
      "        ],\n" +
      "        \"permissions\": [\n" +
      "            \"DEV:ONLINE_EVENT_CREATE\",\n" +
      "            \"DEV:ONLINE_EVENT_ANY_UPDATE\",\n" +
      "            \"DEV:ONLINE_EVENT_ANY_DELETE\",\n" +
      "            \"DEV:FACE_TO_FACE_EVENT_CREATE\",\n" +
      "            \"DEV:FACE_TO_FACE_EVENT_ANY_UPDATE\",\n" +
      "            \"DEV:FACE_TO_FACE_EVENT_ANY_DELETE\",\n" +
      "            \"DEV:DIRECT_CHAT_ANY_LIST\",\n" +
      "            \"DEV:FOLLOW_UP_ROOM_ANY_LIST\",\n" +
      "            \"DEV:PUBLIC_CHANNEL_CREATE\",\n" +
      "            \"DEV:PUBLIC_CHANNEL_ANY_UPDATE\",\n" +
      "            \"DEV:PUBLIC_CHANNEL_ANY_DELETE\",\n" +
      "            \"DEV:WALL_POST_CREATE\",\n" +
      "            \"DEV:WALL_POST_ANY_UPDATE\",\n" +
      "            \"DEV:WALL_POST_ANY_DELETE\",\n" +
      "            \"DEV:ACTOR_MANAGEMENT\",\n" +
      "            \"DEV:ACTOR_INVITE\",\n" +
      "            \"DEV:ECOSYSTEM_UPDATE\",\n" +
      "            \"DEV:PERMISSION_MANAGEMENT\"\n" +
      "        ]\n" +
      "    },\n" +
      "    {\n" +
      "        \"id\": \"2\",\n" +
      "        \"email\": \"usuario2@gmail.com\",\n" +
      "        \"memberId\": \"2\",\n" +
      "        \"roles\": [\n" +
      "            \"DEV:ECOSYSTEM_USER\"\n" +
      "        ],\n" +
      "        \"permissions\": [\n" +
      "            \"DEV:WALL_POST_CREATE\",\n" +
      "            \"DEV:ONLINE_EVENT_CREATE\",\n" +
      "            \"DEV:ONLINE_EVENT_ANY_UPDATE\",\n" +
      "            \"DEV:ONLINE_EVENT_ANY_DELETE\",\n" +
      "            \"DEV:FACE_TO_FACE_EVENT_CREATE\",\n" +
      "            \"DEV:FACE_TO_FACE_EVENT_ANY_UPDATE\",\n" +
      "            \"DEV:FACE_TO_FACE_EVENT_ANY_DELETE\",\n" +
      "            \"DEV:PUBLIC_CHANNEL_CREATE\",\n" +
      "            \"DEV:PUBLIC_CHANNEL_ANY_UPDATE\",\n" +
      "            \"DEV:PUBLIC_CHANNEL_ANY_DELETE\",\n" +
      "            \"DEV:FOLLOW_UP_ROOM_ANY_LIST\",\n" +
      "            \"DEV:ECOSYSTEM_UPDATE\",\n" +
      "            \"DEV:ACTOR_MANAGEMENT\",\n" +
      "            \"DEV:ACTOR_INVITE\"\n" +
      "        ]\n" +
      "    }\n" +
      "]"
  }

  public static users_perms_get: Template = {
    name:"users/perms" ,
    code: "\nconst url = 'https://dev.moonshot.ceo/api/federation/users/perms?id=1'\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
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

  public static users_perms_put: Template = {
    name: "users/perms",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/federation/users/perms?id=1'\n" +
      "const body = {\n" +
      "  id: \"1\",\n" +
      "  perms: [\n" +
      "    \"DEV:WALL_POST_CREATE\"\n" +
      "  ]\n" +
      "}\n" +
      "\n" +
      "fetch(url, {\n" +
      "  method: 'PUT',\n" +
      "  body: JSON.stringify(body)\n" +
      "})\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: null
  }

  public static user_verify_put: Template = {
    name: "user/verify",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/federation/user/verify'\n" +
      "const body = {\n" +
      "  token: \"50946306-47f9-11ec-81d3-0242ac130003\",\n" +
      "  email: \"usuario1@gmail.com\",\n" +
      "  password: \"hola123\",\n" +
      "  repeatPassword: \"hola123\"\n" +
      "}\n" +
      "\n" +
      "fetch(url, {\n" +
      "  method: 'PUT',\n" +
      "  body: JSON.stringify(body)\n" +
      "})\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: null
  }

  public static user_verify_resend_put: Template = {
    name: "user/verify/re-send",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/federation/user/verify/re-send'\n" +
      "\n" +
      "const body = {\n" +
      "  \"email\": \"example1@gmail.com\"\n" +
      "}\n" +
      "\n" +
      "fetch(url, {\n" +
      "  method: 'PUT',\n" +
      "  body: JSON.stringify(body)\n" +
      "})\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: null
  }

  public static password_last_modification_get: Template = {
    name: "password/last-modification",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/federation/password/last-modification?email=example1@gmail.com'\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n2021-02-19",
  }

  public static password_request_post: Template = {
    name: "password/request",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/federation/password/request'\n" +
      "const body = {\n" +
      "  id: \"1\",\n" +
      "  token: \"50946306-47f9-11ec-81d3-0242ac130003\",\n" +
      "  email: \"usuario1@gmail.com\"\n" +
      "}\n" +
      "\n" +
      "fetch(url, {\n" +
      "  method: 'POST',\n" +
      "  body: JSON.stringify(body)\n" +
      "})\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: null
  }

  public static password_recover_post: Template = {
    name: "password/recover",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/federation/password/recover'\n" +
      "const body = {\n" +
      "  token: \"50946306-47f9-11ec-81d3-0242ac130003\",\n" +
      "  password: \"hola123\",\n" +
      "  repeatPassword: \"hola123\"\n" +
      "}\n" +
      "\n" +
      "fetch(url, {\n" +
      "  method: 'POST',\n" +
      "  body: JSON.stringify(body)\n" +
      "})\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: null
  }

  public static password_change_put: Template = {
    name: "password/change",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/federation/password/change'\n" +
      "const body = {\n" +
      "  password: \"hola123\",\n" +
      "  repeatPassword: \"casa123\",\n" +
      "  newPasswordRepeat: \"casa123\"\n" +
      "}\n" +
      "\n" +
      "fetch(url, {\n" +
      "  method: 'PUT',\n" +
      "  body: JSON.stringify(body)\n" +
      "})\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: null
  }

  public static verifications_get: Template = {
    name: "verifications",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/federation/verifications'\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
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
