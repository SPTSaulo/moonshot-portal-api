import {EndpointTemplate} from '../../../../app/model/EndpointTemplate';

export class CommunityJavaTemplates {

  public static version_get: EndpointTemplate = {
    name: "version",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "String version = communityApi.internal().version(app).getResponse();\n" +
      "System.out.println(version);",
    response: "\n\"2.0.2.r15-SNAPSHOT\""
  }

  public static online_events_get: EndpointTemplate = {
    name: "online-events",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<OnlineEvent> onlineEvents = communityApi.onlineEvents().all(app).getResponse();\n" +
      "JSONArray jsonArray = new JSONArray(onlineEvents);\n" +
      "System.out.println(jsonArray);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"title\":\"Evento para conocernos\",\n" +
      "      \"timestamp\":1414281600,\n" +
      "      \"description\":\"Evento para mejorar el ambiente laboral y las relaciones con el resto de personas del ecosistema\",\n" +
      "      \"imageUrl\":null,\n" +
      "      \"ownerMember\":{\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACCEPTED\",\n" +
      " \"name\":\"Jeremy\",\n" +
      " \"lastname\":\"Trujillo\",\n" +
      " \"address\":{\n" +
      "    \"lat\":28.1245582,\n" +
      "    \"lng\":-15.4325499,\n" +
      "    \"formatted\":\"C. Pío XII, 30-32, 35005 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      " },\n" +
      " \"email\":\"trujillosanchezjeremy@gmail.com\",\n" +
      " \"about\":\"Alumno en prácticas en Moonshot y estudiante de la Universidad de Las Palmas de Gran Canaria\",\n" +
      " \"image\":null,\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken3\",\n" +
      "       \"device\":\"IPAD\",\n" +
      "       \"timestamp\":1630918457848\n" +
      "    }\n" +
      " ],\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.twitter.com/Jeremy\",\n" +
      "    \"www.facebook.com/Jeremy\"\n" +
      " ],\n" +
      " \"experiences\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Prácticas universitarias en Moonshot Innovation\",\n" +
      "       \"type\":\"APPRENTICESHIP\",\n" +
      "       \"company\":\"Moonshot Innovation\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":90.5,\n" +
      "  \"lng\":10.5,\n" +
      "  \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "       },\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":null,\n" +
      "       \"description\":\"Prácticas extracurriculares a traves de la FULP (Universidad de las Palmas de Gran Canaria)\"\n" +
      "    }\n" +
      " ],\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "       \"degree\":\"Ingeniería informática\",\n" +
      "       \"fieldOfStudy\":\"Ingeniería de software\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":null,\n" +
      "       \"grade\":7,\n" +
      "       \"address\":{\n" +
      "  \"lat\":48.5,\n" +
      "  \"lng\":19.1,\n" +
      "  \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "       },\n" +
      "       \"description\":\"Estudios universitarios realizados en la Universidad de Las Palmas de Gran Canaria\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      \"url\":\"https://moonshot.ceo/conocernos\",\n" +
      "      \"participants\":[\n" +
      " {\n" +
      "    \"id\":\"60acae8e2f799d228a4d4a85\",\n" +
      "    \"state\":\"ACCEPTED\",\n" +
      "    \"name\":\"Iñigo\",\n" +
      "    \"lastname\":\"Aramburu\",\n" +
      "    \"address\":{\n" +
      "       \"lat\":43.3038929,\n" +
      "       \"lng\":-1.9604012,\n" +
      "       \"formatted\":\"Wroclaw, 1, 20014 San Sebastián, Gipuzkoa, España\"\n" +
      "    },\n" +
      "    \"email\":\"iaramburu@moonshot.ceo\",\n" +
      "    \"about\":\"Experto en Ingeniería del Software.\",\n" +
      "    \"image\":null,\n" +
      "    \"fcmTokens\":[\n" +
      "       {\n" +
      "  \"tokenId\":\"fcmToken1\",\n" +
      "  \"device\":\"SMARTPHONE\",\n" +
      "  \"timestamp\":1622975724952\n" +
      "       }\n" +
      "    ],\n" +
      "    \"socialNetworks\":[\n" +
      "       \"www.twitter.com/Iñigo\",\n" +
      "       \"www.facebook.com/Iñigo\"\n" +
      "    ],\n" +
      "    \"experiences\":[\n" +
      "       {\n" +
      "  \"id\":\"60acae8e2f799d228a4d4a85\",\n" +
      "  \"title\":\"Back-end developer en Moonshot Innovation\",\n" +
      "  \"type\":\"FULL_TIME\",\n" +
      "  \"company\":\"Moonshot Innovation\",\n" +
      "  \"address\":{\n" +
      "     \"lat\":90.5,\n" +
      "     \"lng\":10.5,\n" +
      "     \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "  },\n" +
      "  \"startDate\":15319,\n" +
      "  \"endDate\":18718,\n" +
      "  \"description\":\"Scrum manager en Moonshot Innovation, trabajando en el equipo de back-end\"\n" +
      "       }\n" +
      "    ],\n" +
      "    \"educations\":[\n" +
      "       {\n" +
      "  \"id\":\"60acae8e2f799d228a4d4a85\",\n" +
      "  \"school\":\"Universidad del País Vasco\",\n" +
      "  \"degree\":\"Ingeniería informática\",\n" +
      "  \"fieldOfStudy\":\"Ingeniería de software\",\n" +
      "  \"startDate\":15319,\n" +
      "  \"endDate\":18687,\n" +
      "  \"grade\":8,\n" +
      "  \"address\":{\n" +
      "     \"lat\":4.5,\n" +
      "     \"lng\":110.5,\n" +
      "     \"formatted\":\"Carr. More, 17-13, 48014 Bilbao, Vizcaya\"\n" +
      "  },\n" +
      "  \"description\":\"Estudios universitarios realizados en la Universidad del País Vasco\"\n" +
      "       },\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"school\":\"Universidad del País Vasco\",\n" +
      "  \"degree\":\"Master en desarrollo web\",\n" +
      "  \"fieldOfStudy\":\"Desarrollo web\",\n" +
      "  \"startDate\":15319,\n" +
      "  \"endDate\":18687,\n" +
      "  \"grade\":9.3,\n" +
      "  \"address\":{\n" +
      "     \"lat\":4.5,\n" +
      "     \"lng\":110.5,\n" +
      "     \"formatted\":\"Carr. More, 17-13, 48014 Bilbao, Vizcaya\"\n" +
      "  },\n" +
      "  \"description\":\"Master realizado en la Universidad del País Vasco para ser full stack developer\"\n" +
      "       }\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACCEPTED\",\n" +
      "    \"name\":\"David\",\n" +
      "    \"lastname\":\"Suriol\",\n" +
      "    \"address\":{\n" +
      "       \"lat\":40.4296387,\n" +
      "       \"lng\":-3.8472284,\n" +
      "       \"formatted\":\"Calle Pte., 33, 28223 Pozuelo de Alarcón, Madrid, España\"\n" +
      "    },\n" +
      "    \"email\":\"dsuriol@moonshot.ceo\",\n" +
      "    \"about\":\"CEO de Moonshot\",\n" +
      "    \"image\":null,\n" +
      "    \"fcmTokens\":[\n" +
      "       {\n" +
      "  \"tokenId\":\"fcmToken1\",\n" +
      "  \"device\":\"SMARTPHONE\",\n" +
      "  \"timestamp\":1622975724952\n" +
      "       },\n" +
      "       {\n" +
      "  \"tokenId\":\"fcmToken2\",\n" +
      "  \"device\":\"COMPUTER\",\n" +
      "  \"timestamp\":1630918457848\n" +
      "       },\n" +
      "       {\n" +
      "  \"tokenId\":\"fcmToken3\",\n" +
      "  \"device\":\"IPAD\",\n" +
      "  \"timestamp\":1630918457848\n" +
      "       }\n" +
      "    ],\n" +
      "    \"socialNetworks\":[\n" +
      "       \"www.linkedin.com/David\",\n" +
      "       \"www.angellist.com/David\",\n" +
      "       \"www.google.com/David\"\n" +
      "    ],\n" +
      "    \"experiences\":[\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"title\":\"Fundador y CEO de Moonshot Innovation\",\n" +
      "  \"type\":\"SELF_EMPLOYED\",\n" +
      "  \"company\":\"Moonshot Innovation\",\n" +
      "  \"address\":{\n" +
      "     \"lat\":90.5,\n" +
      "     \"lng\":10.5,\n" +
      "     \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "  },\n" +
      "  \"startDate\":14545,\n" +
      "  \"endDate\":18687,\n" +
      "  \"description\":\"Fundador de Moonshot Innovation cuya version 2 esta siendo desarrollada\"\n" +
      "       }\n" +
      "    ],\n" +
      "    \"educations\":[\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"school\":\"Universidad Complutense de Madrid\",\n" +
      "  \"degree\":\"Administración y dirección de empresas\",\n" +
      "  \"fieldOfStudy\":\"Innovación\",\n" +
      "  \"startDate\":15319,\n" +
      "  \"endDate\":18687,\n" +
      "  \"grade\":9.2,\n" +
      "  \"address\":{\n" +
      "     \"lat\":-14.6,\n" +
      "     \"lng\":-119.2,\n" +
      "     \"formatted\":\"Av. Séneca, 2, 28040 Madrid\"\n" +
      "  },\n" +
      "  \"description\":\"Estudios universitarios realizados en la Universidad Complutense de Madrid\"\n" +
      "       }\n" +
      "    ]\n" +
      " }\n" +
      "      ]\n" +
      "   }\n" +
      "]"
  }

  public static online_events_id_get: EndpointTemplate = {
    name: "online-events/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "OnlineEvent onlineEvent = communityApi.onlineEvents().get(app, \"60b7ad03c54a116f0e0ca3df\").getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(onlineEvent);\n" +
      "System.out.println(jsonObject);",
    response: "\n{\n" +
      "\"id\": \"61445159784bca6ef764c6df\",\n" +
      "\"title\": \"Evento para conocernos\",\n" +
      "\"timestamp\": 1414281600,\n" +
      "\"description\": \"Evento para mejorar el ambiente laboral y las relaciones con el resto de personas del ecosistema\",\n" +
      "\"imageUrl\": null,\n" +
      "\"ownerMember\": {\n" +
      "    \"id\": \"61445159784bca6ef764c6df\",\n" +
      "    \"state\": \"ACCEPTED\",\n" +
      "    \"name\": \"Jeremy\",\n" +
      "    \"lastname\": \"Trujillo\",\n" +
      "    \"address\": {\n" +
      "\"lat\": 28.1245582,\n" +
      "\"lng\": -15.4325499,\n" +
      "\"formatted\": \"C. Pío XII, 30-32, 35005 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      "    },\n" +
      "    \"email\": \"trujillosanchezjeremy@gmail.com\",\n" +
      "    \"about\": \"Alumno en prácticas en Moonshot y estudiante de la Universidad de Las Palmas de Gran Canaria\",\n" +
      "    \"image\": null,\n" +
      "    \"fcmTokens\": [\n" +
      "{\n" +
      "    \"tokenId\": \"fcmToken3\",\n" +
      "    \"device\": \"IPAD\",\n" +
      "    \"timestamp\": 1630918457848\n" +
      "}\n" +
      "    ],\n" +
      "    \"socialNetworks\": [\n" +
      "\"www.twitter.com/Jeremy\",\n" +
      "\"www.facebook.com/Jeremy\"\n" +
      "    ],\n" +
      "    \"experiences\": [\n" +
      "{\n" +
      "    \"id\": \"61445159784bca6ef764c6df\",\n" +
      "    \"title\": \"Prácticas universitarias en Moonshot Innovation\",\n" +
      "    \"type\": \"APPRENTICESHIP\",\n" +
      "    \"company\": \"Moonshot Innovation\",\n" +
      "    \"address\": {\n" +
      "\"lat\": 90.5,\n" +
      "\"lng\": 10.5,\n" +
      "\"formatted\": \"Madrid, Puerta del Sol\"\n" +
      "    },\n" +
      "    \"startDate\": 15319,\n" +
      "    \"endDate\": null,\n" +
      "    \"description\": \"Prácticas extracurriculares a traves de la FULP (Universidad de las Palmas de Gran Canaria)\"\n" +
      "}\n" +
      "    ],\n" +
      "    \"educations\": [\n" +
      "{\n" +
      "    \"id\": \"61445159784bca6ef764c6df\",\n" +
      "    \"school\": \"Universidad de Las Palmas de Gran Canaria\",\n" +
      "    \"degree\": \"Ingeniería informática\",\n" +
      "    \"fieldOfStudy\": \"Ingeniería de software\",\n" +
      "    \"startDate\": 15319,\n" +
      "    \"endDate\": null,\n" +
      "    \"grade\": 7,\n" +
      "    \"address\": {\n" +
      "\"lat\": 48.5,\n" +
      "\"lng\": 19.1,\n" +
      "\"formatted\": \"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "    },\n" +
      "    \"description\": \"Estudios universitarios realizados en la Universidad de Las Palmas de Gran Canaria\"\n" +
      "}\n" +
      "    ]\n" +
      "},\n" +
      "\"url\": \"https://moonshot.ceo/conocernos\",\n" +
      "\"participants\": [\n" +
      "    {\n" +
      "\"id\": \"60acae8e2f799d228a4d4a85\",\n" +
      "\"state\": \"ACCEPTED\",\n" +
      "\"name\": \"Iñigo\",\n" +
      "\"lastname\": \"Aramburu\",\n" +
      "\"address\": {\n" +
      "    \"lat\": 43.3038929,\n" +
      "    \"lng\": -1.9604012,\n" +
      "    \"formatted\": \"Wroclaw, 1, 20014 San Sebastián, Gipuzkoa, España\"\n" +
      "},\n" +
      "\"email\": \"iaramburu@moonshot.ceo\",\n" +
      "\"about\": \"Experto en Ingeniería del Software.\",\n" +
      "\"image\": null,\n" +
      "\"fcmTokens\": [\n" +
      "    {\n" +
      "\"tokenId\": \"fcmToken1\",\n" +
      "\"device\": \"SMARTPHONE\",\n" +
      "\"timestamp\": 1622975724952\n" +
      "    }\n" +
      "],\n" +
      "\"socialNetworks\": [\n" +
      "    \"www.twitter.com/Iñigo\",\n" +
      "    \"www.facebook.com/Iñigo\"\n" +
      "],\n" +
      "\"experiences\": [\n" +
      "    {\n" +
      "\"id\": \"60acae8e2f799d228a4d4a85\",\n" +
      "\"title\": \"Back-end developer en Moonshot Innovation\",\n" +
      "\"type\": \"FULL_TIME\",\n" +
      "\"company\": \"Moonshot Innovation\",\n" +
      "\"address\": {\n" +
      "    \"lat\": 90.5,\n" +
      "    \"lng\": 10.5,\n" +
      "    \"formatted\": \"Madrid, Puerta del Sol\"\n" +
      "},\n" +
      "\"startDate\": 15319,\n" +
      "\"endDate\": 18718,\n" +
      "\"description\": \"Scrum manager en Moonshot Innovation, trabajando en el equipo de back-end\"\n" +
      "    }\n" +
      "],\n" +
      "\"educations\": [\n" +
      "    {\n" +
      "\"id\": \"60acae8e2f799d228a4d4a85\",\n" +
      "\"school\": \"Universidad del País Vasco\",\n" +
      "\"degree\": \"Ingeniería informática\",\n" +
      "\"fieldOfStudy\": \"Ingeniería de software\",\n" +
      "\"startDate\": 15319,\n" +
      "\"endDate\": 18687,\n" +
      "\"grade\": 8,\n" +
      "\"address\": {\n" +
      "    \"lat\": 4.5,\n" +
      "    \"lng\": 110.5,\n" +
      "    \"formatted\": \"Carr. More, 17-13, 48014 Bilbao, Vizcaya\"\n" +
      "},\n" +
      "\"description\": \"Estudios universitarios realizados en la Universidad del País Vasco\"\n" +
      "    },\n" +
      "    {\n" +
      "\"id\": \"61445159784bca6ef764c6df\",\n" +
      "\"school\": \"Universidad del País Vasco\",\n" +
      "\"degree\": \"Master en desarrollo web\",\n" +
      "\"fieldOfStudy\": \"Desarrollo web\",\n" +
      "\"startDate\": 15319,\n" +
      "\"endDate\": 18687,\n" +
      "\"grade\": 9.3,\n" +
      "\"address\": {\n" +
      "    \"lat\": 4.5,\n" +
      "    \"lng\": 110.5,\n" +
      "    \"formatted\": \"Carr. More, 17-13, 48014 Bilbao, Vizcaya\"\n" +
      "},\n" +
      "\"description\": \"Master realizado en la Universidad del País Vasco para ser full stack developer\"\n" +
      "    }\n" +
      "]\n" +
      "    },\n" +
      "    {\n" +
      "\"id\": \"61445159784bca6ef764c6df\",\n" +
      "\"state\": \"ACCEPTED\",\n" +
      "\"name\": \"David\",\n" +
      "\"lastname\": \"Suriol\",\n" +
      "\"address\": {\n" +
      "    \"lat\": 40.4296387,\n" +
      "    \"lng\": -3.8472284,\n" +
      "    \"formatted\": \"Calle Pte., 33, 28223 Pozuelo de Alarcón, Madrid, España\"\n" +
      "},\n" +
      "\"email\": \"dsuriol@moonshot.ceo\",\n" +
      "\"about\": \"CEO de Moonshot\",\n" +
      "\"image\": null,\n" +
      "\"fcmTokens\": [\n" +
      "    {\n" +
      "\"tokenId\": \"fcmToken1\",\n" +
      "\"device\": \"SMARTPHONE\",\n" +
      "\"timestamp\": 1622975724952\n" +
      "    },\n" +
      "    {\n" +
      "\"tokenId\": \"fcmToken2\",\n" +
      "\"device\": \"COMPUTER\",\n" +
      "\"timestamp\": 1630918457848\n" +
      "    },\n" +
      "    {\n" +
      "\"tokenId\": \"fcmToken3\",\n" +
      "\"device\": \"IPAD\",\n" +
      "\"timestamp\": 1630918457848\n" +
      "    }\n" +
      "],\n" +
      "\"socialNetworks\": [\n" +
      "    \"www.linkedin.com/David\",\n" +
      "    \"www.angellist.com/David\",\n" +
      "    \"www.google.com/David\"\n" +
      "],\n" +
      "\"experiences\": [\n" +
      "    {\n" +
      "\"id\": \"61445159784bca6ef764c6df\",\n" +
      "\"title\": \"Fundador y CEO de Moonshot Innovation\",\n" +
      "\"type\": \"SELF_EMPLOYED\",\n" +
      "\"company\": \"Moonshot Innovation\",\n" +
      "\"address\": {\n" +
      "    \"lat\": 90.5,\n" +
      "    \"lng\": 10.5,\n" +
      "    \"formatted\": \"Madrid, Puerta del Sol\"\n" +
      "},\n" +
      "\"startDate\": 14545,\n" +
      "\"endDate\": 18687,\n" +
      "\"description\": \"Fundador de Moonshot Innovation cuya version 2 esta siendo desarrollada\"\n" +
      "    }\n" +
      "],\n" +
      "\"educations\": [\n" +
      "    {\n" +
      "\"id\": \"61445159784bca6ef764c6df\",\n" +
      "\"school\": \"Universidad Complutense de Madrid\",\n" +
      "\"degree\": \"Administración y dirección de empresas\",\n" +
      "\"fieldOfStudy\": \"Innovación\",\n" +
      "\"startDate\": 15319,\n" +
      "\"endDate\": 18687,\n" +
      "\"grade\": 9.2,\n" +
      "\"address\": {\n" +
      "    \"lat\": -14.6,\n" +
      "    \"lng\": -119.2,\n" +
      "    \"formatted\": \"Av. Séneca, 2, 28040 Madrid\"\n" +
      "},\n" +
      "\"description\": \"Estudios universitarios realizados en la Universidad Complutense de Madrid\"\n" +
      "    }\n" +
      "]\n" +
      "    }\n" +
      "]\n" +
      "    }"
  }

  public static online_event_post: EndpointTemplate = {
    name: "online-events",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "OnlineEventCreateEvent onlineEventCreateEvent = new OnlineEventCreateEvent();\n" +
      "onlineEventCreateEvent.setTitle(\"New online event\");\n" +
      "onlineEventCreateEvent.setTimestamp(1554477388);\n" +
      "onlineEventCreateEvent.setDescription(\"Let´s see what happen\");\n" +
      "onlineEventCreateEvent.setImageUrl(\"https://eldoce.es/wp-content/uploads/2017/10/doce-estrategia-digital-difusion-de-un-evento-1-1000x668.jpg\");\n" +
      "communityApi.onlineEvents().create(app, onlineEventCreateEvent);",
    response: null
  }

  public static online_event_upload_post: EndpointTemplate = {
    name: "online-events/upload",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "File file = new File(\"C:\\Users\\saulo\\OneDrive\\Imágenes\\evento.jpg\");\n" +
      "communityApi.onlineEvents().upload(app, file).getResponse();",
    response: null
  }

  public static online_event_id_put: EndpointTemplate = {
    name: "online-events/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "OnlineEvent onlineEvent = communityApi.onlineEvents().get(app, \"60b7ad03c54a116f0e0ca3df\").getResponse();\n" +
      "OnlineEventUpdateEvent onlineEventUpdateEvent = new OnlineEventUpdateEvent();\n" +
      "onlineEventUpdateEvent.setId(onlineEvent.getId());\n" +
      "onlineEventUpdateEvent.setTitle(\"New title\");\n" +
      "onlineEventUpdateEvent.setTimestamp(onlineEvent.getTimestamp());\n" +
      "onlineEventUpdateEvent.setDescription(onlineEvent.getDescription());\n" +
      "onlineEventUpdateEvent.setImageUrl(onlineEvent.getImageUrl());\n" +
      "onlineEventUpdateEvent.setUrl(onlineEvent.getUrl());\n" +
      "communityApi.onlineEvents().update(app, onlineEventUpdateEvent, false);",
    response: null
  }

  public static online_event_id_delete: EndpointTemplate = {
    name: "online-events/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.onlineEvents().delete(app, \"60b7ad03c54a116f0e0ca3df\", false).getResponse();",
    response: null
  }

  public static online_event_id_admin_put: EndpointTemplate = {
    name: "online-events/:id/admin",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "OnlineEvent onlineEvent = communityApi.onlineEvents().get(app, \"60b7ad03c54a116f0e0ca3df\").getResponse();\n" +
      "OnlineEventUpdateEvent onlineEventUpdateEvent = new OnlineEventUpdateEvent();\n" +
      "onlineEventUpdateEvent.setId(onlineEvent.getId());\n" +
      "onlineEventUpdateEvent.setTitle(\"New title\");\n" +
      "onlineEventUpdateEvent.setTimestamp(onlineEvent.getTimestamp());\n" +
      "onlineEventUpdateEvent.setDescription(onlineEvent.getDescription());\n" +
      "onlineEventUpdateEvent.setImageUrl(onlineEvent.getImageUrl());\n" +
      "onlineEventUpdateEvent.setUrl(onlineEvent.getUrl());\n" +
      "communityApi.onlineEvents().update(app, onlineEventUpdateEvent, true);",
    response: null
  }

  public static online_event_id_subscription_put: EndpointTemplate = {
    name: "online-events/:id/subscription",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "OnlineEventSubscriptionEvent onlineEventSubscriptionEvent = new OnlineEventSubscriptionEvent();\n" +
      "List<Member> members = new ArrayList<>();\n" +
      "Member member1 = communityApi.members().member(app, \"60acae8e2f799d228a4d4a85\").getResponse();\n" +
      "Member member2 = communityApi.members().member(app, \"60accfeb97acf93f5f69e05d\").getResponse();\n" +
      "members.add(member1);\n" +
      "members.add(member2);\n" +
      "onlineEventSubscriptionEvent.setId(\"60acae8e2f799d228a4d4a85\");\n" +
      "onlineEventSubscriptionEvent.setParticipants(members);\n" +
      "communityApi.onlineEvents().subscription(app, onlineEventSubscriptionEvent).getResponse();",
    response: null
  }

  public static online_event_id_unsubscription_put: EndpointTemplate = {
    name: "online-events/:id/unsubscription",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "OnlineEventUnsubscriptionEvent onlineEventUnsubscriptionEvent = new OnlineEventUnsubscriptionEvent();\n" +
      "List<Member> members = new ArrayList<>();\n" +
      "Member member1 = communityApi.members().member(app, \"60acae8e2f799d228a4d4a85\").getResponse();\n" +
      "Member member2 = communityApi.members().member(app, \"60accfeb97acf93f5f69e05d\").getResponse();\n" +
      "members.add(member1);\n" +
      "members.add(member2);\n" +
      "onlineEventUnsubscriptionEvent.setId(\"60acae8e2f799d228a4d4a85\");\n" +
      "onlineEventUnsubscriptionEvent.setParticipants(members);\n" +
      "communityApi.onlineEvents().unsubscription(app, onlineEventUnsubscriptionEvent).getResponse();",
    response: null
  }

  public static online_event_id_admin_delete: EndpointTemplate = {
    name: "online-events/:id/admin",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.onlineEvents().delete(app, \"60b7ad03c54a116f0e0ca3df\", true).getResponse();",
    response: null
  }

  public static face_to_face_events_get: EndpointTemplate = {
    name: "face-to-face-events",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<FaceToFaceEvent> faceToFaceEvents = communityApi.faceToFaceEvents().all(app).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(faceToFaceEvents);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"60acae8e2f799d228a4d4a85\",\n" +
      "      \"title\":\"Reunion horarios Enero\",\n" +
      "      \"timestamp\":1546387200,\n" +
      "      \"description\":\"Reunion para definir los horarios de la empresa en el mes de Enero\",\n" +
      "      \"imageUrl\":null,\n" +
      "      \"ownerMember\":{\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACCEPTED\",\n" +
      " \"name\":\"Saulo\",\n" +
      " \"lastname\":\"Santana\",\n" +
      " \"address\":{\n" +
      "    \"lat\":28.1302553,\n" +
      "    \"lng\":-15.4436134,\n" +
      "    \"formatted\":\"C. Simancas, 64, 35010 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      " },\n" +
      " \"email\":\"saulobach1@gmail.com\",\n" +
      " \"about\":\"Alumno en prácticas en Moonshot y estudiante de la Universidad de Las Palmas de Gran Canaria\",\n" +
      " \"image\":null,\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken4\",\n" +
      "       \"device\":\"LAPTOP\",\n" +
      "       \"timestamp\":1631089955516\n" +
      "    }\n" +
      " ],\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.linkedin.com/Saulo\",\n" +
      "    \"www.angellist.com/Saulo\",\n" +
      "    \"www.google.com/Saulo\"\n" +
      " ],\n" +
      " \"experiences\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Prácticas universitarias en Moonshot Innovation\",\n" +
      "       \"type\":\"APPRENTICESHIP\",\n" +
      "       \"company\":\"Moonshot Innovation\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":90.5,\n" +
      "  \"lng\":10.5,\n" +
      "  \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "       },\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":null,\n" +
      "       \"description\":\"Prácticas extracurriculares a traves de la FULP (Universidad de las Palmas de Gran Canaria)\"\n" +
      "    }\n" +
      " ],\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "       \"degree\":\"Ingeniería informática\",\n" +
      "       \"fieldOfStudy\":\"Ingeniería de software\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":null,\n" +
      "       \"grade\":7,\n" +
      "       \"address\":{\n" +
      "  \"lat\":48.5,\n" +
      "  \"lng\":19.1,\n" +
      "  \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "       },\n" +
      "       \"description\":\"Estudios universitarios realizados en la Universidad de Las Palmas de Gran Canaria, con especialización en ingeniería de software\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      \"direction\":\"Aclarar la reparticion de horarios\",\n" +
      "      \"participants\":[\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACCEPTED\",\n" +
      "    \"name\":\"Jeremy\",\n" +
      "    \"lastname\":\"Trujillo\",\n" +
      "    \"address\":{\n" +
      "       \"lat\":28.1245582,\n" +
      "       \"lng\":-15.4325499,\n" +
      "       \"formatted\":\"C. Pío XII, 30-32, 35005 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      "    },\n" +
      "    \"email\":\"trujillosanchezjeremy@gmail.com\",\n" +
      "    \"about\":\"Alumno en prácticas en Moonshot y estudiante de la Universidad de Las Palmas de Gran Canaria\",\n" +
      "    \"image\":null,\n" +
      "    \"fcmTokens\":[\n" +
      "       {\n" +
      "  \"tokenId\":\"fcmToken3\",\n" +
      "  \"device\":\"IPAD\",\n" +
      "  \"timestamp\":1630918457848\n" +
      "       }\n" +
      "    ],\n" +
      "    \"socialNetworks\":[\n" +
      "       \"www.twitter.com/Jeremy\",\n" +
      "       \"www.facebook.com/Jeremy\"\n" +
      "    ],\n" +
      "    \"experiences\":[\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"title\":\"Prácticas universitarias en Moonshot Innovation\",\n" +
      "  \"type\":\"APPRENTICESHIP\",\n" +
      "  \"company\":\"Moonshot Innovation\",\n" +
      "  \"address\":{\n" +
      "     \"lat\":90.5,\n" +
      "     \"lng\":10.5,\n" +
      "     \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "  },\n" +
      "  \"startDate\":15319,\n" +
      "  \"endDate\":null,\n" +
      "  \"description\":\"Prácticas extracurriculares a traves de la FULP (Universidad de las Palmas de Gran Canaria)\"\n" +
      "       }\n" +
      "    ],\n" +
      "    \"educations\":[\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"school\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "  \"degree\":\"Ingeniería informática\",\n" +
      "  \"fieldOfStudy\":\"Ingeniería de software\",\n" +
      "  \"startDate\":15319,\n" +
      "  \"endDate\":null,\n" +
      "  \"grade\":7,\n" +
      "  \"address\":{\n" +
      "     \"lat\":48.5,\n" +
      "     \"lng\":19.1,\n" +
      "     \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "  },\n" +
      "  \"description\":\"Estudios universitarios realizados en la Universidad de Las Palmas de Gran Canaria, con especialización en ingeniería de software\"\n" +
      "       }\n" +
      "    ]\n" +
      " }\n" +
      "      ]\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"title\":\"Reunion despliegue back-end\",\n" +
      "      \"timestamp\":1542844800,\n" +
      "      \"description\":\"Reunion para desplegar la nueva version de nuestro producto\",\n" +
      "      \"imageUrl\":null,\n" +
      "      \"ownerMember\":{\n" +
      " \"id\":\"60acae8e2f799d228a4d4a85\",\n" +
      " \"state\":\"ACCEPTED\",\n" +
      " \"name\":\"Iñigo\",\n" +
      " \"lastname\":\"Aramburu\",\n" +
      " \"address\":{\n" +
      "    \"lat\":43.3038929,\n" +
      "    \"lng\":-1.9604012,\n" +
      "    \"formatted\":\"Wroclaw, 1, 20014 San Sebastián, Gipuzkoa, España\"\n" +
      " },\n" +
      " \"email\":\"iaramburu@moonshot.ceo\",\n" +
      " \"about\":\"Experto en Ingeniería del Software.\",\n" +
      " \"image\":null,\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken1\",\n" +
      "       \"device\":\"SMARTPHONE\",\n" +
      "       \"timestamp\":1622975724952\n" +
      "    }\n" +
      " ],\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.twitter.com/Iñigo\",\n" +
      "    \"www.facebook.com/Iñigo\"\n" +
      " ],\n" +
      " \"experiences\":[\n" +
      "    {\n" +
      "       \"id\":\"60acae8e2f799d228a4d4a85\",\n" +
      "       \"title\":\"Back-end developer en Moonshot Innovation\",\n" +
      "       \"type\":\"FULL_TIME\",\n" +
      "       \"company\":\"Moonshot Innovation\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":90.5,\n" +
      "  \"lng\":10.5,\n" +
      "  \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "       },\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18718,\n" +
      "       \"description\":\"Scrum manager en Moonshot Innovation, trabajando en el equipo de back-end\"\n" +
      "    }\n" +
      " ],\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"60acae8e2f799d228a4d4a85\",\n" +
      "       \"school\":\"Universidad del País Vasco\",\n" +
      "       \"degree\":\"Ingeniería informática\",\n" +
      "       \"fieldOfStudy\":\"Ingeniería de software\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18687,\n" +
      "       \"grade\":8,\n" +
      "       \"address\":{\n" +
      "  \"lat\":4.5,\n" +
      "  \"lng\":110.5,\n" +
      "  \"formatted\":\"Carr. More, 17-13, 48014 Bilbao, Vizcaya\"\n" +
      "       },\n" +
      "       \"description\":\"Estudios universitarios realizados en la Universidad del País Vasco\"\n" +
      "    },\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad del País Vasco\",\n" +
      "       \"degree\":\"Master en desarrollo web\",\n" +
      "       \"fieldOfStudy\":\"Desarrollo web\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18687,\n" +
      "       \"grade\":9.3,\n" +
      "       \"address\":{\n" +
      "  \"lat\":4.5,\n" +
      "  \"lng\":110.5,\n" +
      "  \"formatted\":\"Carr. More, 17-13, 48014 Bilbao, Vizcaya\"\n" +
      "       },\n" +
      "       \"description\":\"Master realizado en la Universidad del País Vasco para ser full stack developer\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      \"direction\":\"Terminar la version y ponerla a la vista de los clientes\",\n" +
      "      \"participants\":[\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACCEPTED\",\n" +
      "    \"name\":\"Jeremy\",\n" +
      "    \"lastname\":\"Trujillo\",\n" +
      "    \"address\":{\n" +
      "       \"lat\":28.1245582,\n" +
      "       \"lng\":-15.4325499,\n" +
      "       \"formatted\":\"C. Pío XII, 30-32, 35005 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      "    },\n" +
      "    \"email\":\"trujillosanchezjeremy@gmail.com\",\n" +
      "    \"about\":\"Alumno en prácticas en Moonshot y estudiante de la Universidad de Las Palmas de Gran Canaria\",\n" +
      "    \"image\":null,\n" +
      "    \"fcmTokens\":[\n" +
      "       {\n" +
      "  \"tokenId\":\"fcmToken3\",\n" +
      "  \"device\":\"IPAD\",\n" +
      "  \"timestamp\":1630918457848\n" +
      "       }\n" +
      "    ],\n" +
      "    \"socialNetworks\":[\n" +
      "       \"www.twitter.com/Jeremy\",\n" +
      "       \"www.facebook.com/Jeremy\"\n" +
      "    ],\n" +
      "    \"experiences\":[\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"title\":\"Prácticas universitarias en Moonshot Innovation\",\n" +
      "  \"type\":\"APPRENTICESHIP\",\n" +
      "  \"company\":\"Moonshot Innovation\",\n" +
      "  \"address\":{\n" +
      "     \"lat\":90.5,\n" +
      "     \"lng\":10.5,\n" +
      "     \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "  },\n" +
      "  \"startDate\":15319,\n" +
      "  \"endDate\":null,\n" +
      "  \"description\":\"Prácticas extracurriculares a traves de la FULP (Universidad de las Palmas de Gran Canaria)\"\n" +
      "       }\n" +
      "    ],\n" +
      "    \"educations\":[\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"school\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "  \"degree\":\"Ingeniería informática\",\n" +
      "  \"fieldOfStudy\":\"Ingeniería de software\",\n" +
      "  \"startDate\":15319,\n" +
      "  \"endDate\":null,\n" +
      "  \"grade\":7,\n" +
      "  \"address\":{\n" +
      "     \"lat\":48.5,\n" +
      "     \"lng\":19.1,\n" +
      "     \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "  },\n" +
      "  \"description\":\"Estudios universitarios realizados en la Universidad de Las Palmas de Gran Canaria, con especialización en ingeniería de software\"\n" +
      "       }\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACCEPTED\",\n" +
      "    \"name\":\"Saulo\",\n" +
      "    \"lastname\":\"Santana\",\n" +
      "    \"address\":{\n" +
      "       \"lat\":28.1302553,\n" +
      "       \"lng\":-15.4436134,\n" +
      "       \"formatted\":\"C. Simancas, 64, 35010 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      "    },\n" +
      "    \"email\":\"saulobach1@gmail.com\",\n" +
      "    \"about\":\"Alumno en prácticas en Moonshot y estudiante de la Universidad de Las Palmas de Gran Canaria\",\n" +
      "    \"image\":null,\n" +
      "    \"fcmTokens\":[\n" +
      "       {\n" +
      "  \"tokenId\":\"fcmToken4\",\n" +
      "  \"device\":\"LAPTOP\",\n" +
      "  \"timestamp\":1631089955516\n" +
      "       }\n" +
      "    ],\n" +
      "    \"socialNetworks\":[\n" +
      "       \"www.linkedin.com/Saulo\",\n" +
      "       \"www.angellist.com/Saulo\",\n" +
      "       \"www.google.com/Saulo\"\n" +
      "    ],\n" +
      "    \"experiences\":[\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"title\":\"Prácticas universitarias en Moonshot Innovation\",\n" +
      "  \"type\":\"APPRENTICESHIP\",\n" +
      "  \"company\":\"Moonshot Innovation\",\n" +
      "  \"address\":{\n" +
      "     \"lat\":90.5,\n" +
      "     \"lng\":10.5,\n" +
      "     \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "  },\n" +
      "  \"startDate\":15319,\n" +
      "  \"endDate\":null,\n" +
      "  \"description\":\"Prácticas extracurriculares a traves de la FULP (Universidad de las Palmas de Gran Canaria)\"\n" +
      "       }\n" +
      "    ],\n" +
      "    \"educations\":[\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"school\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "  \"degree\":\"Ingeniería informática\",\n" +
      "  \"fieldOfStudy\":\"Ingeniería de software\",\n" +
      "  \"startDate\":15319,\n" +
      "  \"endDate\":null,\n" +
      "  \"grade\":7,\n" +
      "  \"address\":{\n" +
      "     \"lat\":48.5,\n" +
      "     \"lng\":19.1,\n" +
      "     \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "  },\n" +
      "  \"description\":\"Estudios universitarios realizados en la Universidad de Las Palmas de Gran Canaria, con especialización en ingeniería de software\"\n" +
      "       }\n" +
      "    ]\n" +
      " }\n" +
      "      ]\n" +
      "   }\n" +
      "]"
  }

  public static face_to_face_event_id_get: EndpointTemplate = {
    name: "face-to-face-events/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "FaceToFaceEvent faceToFaceEvent = communityApi.faceToFaceEvents().get(app, \"60acae8e2f799d228a4d4a85\").getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(faceToFaceEvent);\n" +
      "System.out.println(jsonObject);",
    response: "\n{\n" +
      "\"id\": \"60acae8e2f799d228a4d4a85\",\n" +
      "\"title\": \"Reunion horarios Enero\",\n" +
      "\"timestamp\": 1546387200,\n" +
      "\"description\": \"Reunion para definir los horarios de la empresa en el mes de Enero\",\n" +
      "\"imageUrl\": null,\n" +
      "\"ownerMember\": {\n" +
      "    \"id\": \"61445159784bca6ef764c6df\",\n" +
      "    \"state\": \"ACCEPTED\",\n" +
      "    \"name\": \"Saulo\",\n" +
      "    \"lastname\": \"Santana\",\n" +
      "    \"address\": {\n" +
      "\"lat\": 28.1302553,\n" +
      "\"lng\": -15.4436134,\n" +
      "\"formatted\": \"C. Simancas, 64, 35010 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      "    },\n" +
      "    \"email\": \"saulobach1@gmail.com\",\n" +
      "    \"about\": \"Alumno en prácticas en Moonshot y estudiante de la Universidad de Las Palmas de Gran Canaria\",\n" +
      "    \"image\": null,\n" +
      "    \"fcmTokens\": [\n" +
      "{\n" +
      "    \"tokenId\": \"fcmToken4\",\n" +
      "    \"device\": \"LAPTOP\",\n" +
      "    \"timestamp\": 1631089955516\n" +
      "}\n" +
      "    ],\n" +
      "    \"socialNetworks\": [\n" +
      "\"www.linkedin.com/Saulo\",\n" +
      "\"www.angellist.com/Saulo\",\n" +
      "\"www.google.com/Saulo\"\n" +
      "    ],\n" +
      "    \"experiences\": [\n" +
      "{\n" +
      "    \"id\": \"61445159784bca6ef764c6df\",\n" +
      "    \"title\": \"Prácticas universitarias en Moonshot Innovation\",\n" +
      "    \"type\": \"APPRENTICESHIP\",\n" +
      "    \"company\": \"Moonshot Innovation\",\n" +
      "    \"address\": {\n" +
      "\"lat\": 90.5,\n" +
      "\"lng\": 10.5,\n" +
      "\"formatted\": \"Madrid, Puerta del Sol\"\n" +
      "    },\n" +
      "    \"startDate\": 15319,\n" +
      "    \"endDate\": null,\n" +
      "    \"description\": \"Prácticas extracurriculares a traves de la FULP (Universidad de las Palmas de Gran Canaria)\"\n" +
      "}\n" +
      "    ],\n" +
      "    \"educations\": [\n" +
      "{\n" +
      "    \"id\": \"61445159784bca6ef764c6df\",\n" +
      "    \"school\": \"Universidad de Las Palmas de Gran Canaria\",\n" +
      "    \"degree\": \"Ingeniería informática\",\n" +
      "    \"fieldOfStudy\": \"Ingeniería de software\",\n" +
      "    \"startDate\": 15319,\n" +
      "    \"endDate\": null,\n" +
      "    \"grade\": 7,\n" +
      "    \"address\": {\n" +
      "\"lat\": 48.5,\n" +
      "\"lng\": 19.1,\n" +
      "\"formatted\": \"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "    },\n" +
      "    \"description\": \"Estudios universitarios realizados en la Universidad de Las Palmas de Gran Canaria, con especialización en ingeniería de software\"\n" +
      "}\n" +
      "    ]\n" +
      "},\n" +
      "\"direction\": \"Aclarar la reparticion de horarios\",\n" +
      "\"participants\": [\n" +
      "    {\n" +
      "\"id\": \"61445159784bca6ef764c6df\",\n" +
      "\"state\": \"ACCEPTED\",\n" +
      "\"name\": \"Jeremy\",\n" +
      "\"lastname\": \"Trujillo\",\n" +
      "\"address\": {\n" +
      "    \"lat\": 28.1245582,\n" +
      "    \"lng\": -15.4325499,\n" +
      "    \"formatted\": \"C. Pío XII, 30-32, 35005 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      "},\n" +
      "\"email\": \"trujillosanchezjeremy@gmail.com\",\n" +
      "\"about\": \"Alumno en prácticas en Moonshot y estudiante de la Universidad de Las Palmas de Gran Canaria\",\n" +
      "\"image\": null,\n" +
      "\"fcmTokens\": [\n" +
      "    {\n" +
      "\"tokenId\": \"fcmToken3\",\n" +
      "\"device\": \"IPAD\",\n" +
      "\"timestamp\": 1630918457848\n" +
      "    }\n" +
      "],\n" +
      "\"socialNetworks\": [\n" +
      "    \"www.twitter.com/Jeremy\",\n" +
      "    \"www.facebook.com/Jeremy\"\n" +
      "],\n" +
      "\"experiences\": [\n" +
      "    {\n" +
      "\"id\": \"61445159784bca6ef764c6df\",\n" +
      "\"title\": \"Prácticas universitarias en Moonshot Innovation\",\n" +
      "\"type\": \"APPRENTICESHIP\",\n" +
      "\"company\": \"Moonshot Innovation\",\n" +
      "\"address\": {\n" +
      "    \"lat\": 90.5,\n" +
      "    \"lng\": 10.5,\n" +
      "    \"formatted\": \"Madrid, Puerta del Sol\"\n" +
      "},\n" +
      "\"startDate\": 15319,\n" +
      "\"endDate\": null,\n" +
      "\"description\": \"Prácticas extracurriculares a traves de la FULP (Universidad de las Palmas de Gran Canaria)\"\n" +
      "    }\n" +
      "],\n" +
      "\"educations\": [\n" +
      "    {\n" +
      "\"id\": \"61445159784bca6ef764c6df\",\n" +
      "\"school\": \"Universidad de Las Palmas de Gran Canaria\",\n" +
      "\"degree\": \"Ingeniería informática\",\n" +
      "\"fieldOfStudy\": \"Ingeniería de software\",\n" +
      "\"startDate\": 15319,\n" +
      "\"endDate\": null,\n" +
      "\"grade\": 7,\n" +
      "\"address\": {\n" +
      "    \"lat\": 48.5,\n" +
      "    \"lng\": 19.1,\n" +
      "    \"formatted\": \"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "},\n" +
      "\"description\": \"Estudios universitarios realizados en la Universidad de Las Palmas de Gran Canaria, con especialización en ingeniería de software\"\n" +
      "    }\n" +
      "]\n" +
      "    }\n" +
      "]\n" +
      "    }"
  }

  public static face_to_face_event_post: EndpointTemplate = {
    name: "face-to-face-events",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "FaceToFaceEventCreateEvent faceToFaceEventCreateEvent = new FaceToFaceEventCreateEvent();\n" +
      "faceToFaceEventCreateEvent.setTitle(\"New face to face event\");\n" +
      "faceToFaceEventCreateEvent.setTimestamp(1621419330);\n" +
      "faceToFaceEventCreateEvent.setDescription(\"Let´s see what happen\");\n" +
      "faceToFaceEventCreateEvent.setImageUrl(\"https://eldoce.es/wp-content/uploads/2017/10/doce-estrategia-digital-difusion-de-un-evento-1-1000x668.jpg\");\n" +
      "faceToFaceEventCreateEvent.setDirection(\"Madrid, Spain\");\n" +
      "communityApi.faceToFaceEvents().create(app, faceToFaceEventCreateEvent);",
    response: null
  }

  public static face_to_face_event_id_put: EndpointTemplate = {
    name: "face-to-face-events/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "FaceToFaceEvent faceToFaceEvent = communityApi.faceToFaceEvents().get(app, \"60b7ad03c54a116f0e0ca3df\").getResponse();\n" +
      "FaceToFaceEventUpdateEvent faceToFaceEventUpdateEvent = new FaceToFaceEventUpdateEvent();\n" +
      "faceToFaceEventUpdateEvent.setId(faceToFaceEvent.getId());\n" +
      "faceToFaceEventUpdateEvent.setTitle(\"New title\");\n" +
      "faceToFaceEventUpdateEvent.setTimestamp(faceToFaceEvent.getTimestamp());\n" +
      "faceToFaceEventUpdateEvent.setDescription(faceToFaceEvent.getDescription());\n" +
      "faceToFaceEventUpdateEvent.setImageUrl(faceToFaceEvent.getImageUrl());\n" +
      "faceToFaceEventUpdateEvent.setDirection(faceToFaceEvent.getDirection());\n" +
      "communityApi.faceToFaceEvents().update(app, faceToFaceEventUpdateEvent, false);",
    response: null
  }

  public static face_to_face_event_id_delete: EndpointTemplate = {
    name: "face-to-face-events/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.faceToFaceEvents().delete(app, \"60b7ad03c54a116f0e0ca3df\", false);",
    response: null
  }

  public static face_to_face_event_upload_post: EndpointTemplate = {
    name: "face-to-face-events/upload",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "File file = new File(\"C:\\Users\\saulo\\OneDrive\\Imágenes\\evento.jpg\");\n" +
      "communityApi.faceToFaceEvents().upload(app, file).getResponse();",
    response: "\nhttps://localhost/drive/events/images/61eaffcdad2bd12319fd4eba.png"
  }

  public static face_to_face_event_id_admin_put: EndpointTemplate = {
    name: "face-to-face-events/:id/admin",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "FaceToFaceEvent faceToFaceEvent = communityApi.faceToFaceEvents().get(app, \"60b7ad03c54a116f0e0ca3df\").getResponse();\n" +
      "FaceToFaceEventUpdateEvent faceToFaceEventUpdateEvent = new FaceToFaceEventUpdateEvent();\n" +
      "faceToFaceEventUpdateEvent.setId(faceToFaceEvent.getId());\n" +
      "faceToFaceEventUpdateEvent.setTitle(\"New title\");\n" +
      "faceToFaceEventUpdateEvent.setTimestamp(faceToFaceEvent.getTimestamp());\n" +
      "faceToFaceEventUpdateEvent.setDescription(faceToFaceEvent.getDescription());\n" +
      "faceToFaceEventUpdateEvent.setImageUrl(faceToFaceEvent.getImageUrl());\n" +
      "faceToFaceEventUpdateEvent.setDirection(faceToFaceEvent.getDirection());\n" +
      "communityApi.faceToFaceEvents().update(app, faceToFaceEventUpdateEvent, false);",
    response: null
  }

  public static face_to_face_event_id_subscription_put: EndpointTemplate = {
    name: "face-to-face-events/:id/subscription",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "FaceToFaceEventSubscriptionEvent faceToFaceEventSubscriptionEvent = new FaceToFaceEventSubscriptionEvent();\n" +
      "List<Member> members = new ArrayList<>();\n" +
      "Member member1 = communityApi.members().member(app, \"60acae8e2f799d228a4d4a85\").getResponse();\n" +
      "Member member2 = communityApi.members().member(app, \"60accfeb97acf93f5f69e05d\").getResponse();\n" +
      "members.add(member1);\n" +
      "members.add(member2);\n" +
      "faceToFaceEventSubscriptionEvent.setId(\"60acae8e2f799d228a4d4a85\");\n" +
      "faceToFaceEventSubscriptionEvent.setParticipants(members);\n" +
      "communityApi.faceToFaceEvents().subscription(app, faceToFaceEventSubscriptionEvent);",
    response: null
  }

  public static face_to_face_event_id_unsubscription_put: EndpointTemplate = {
    name: "face-to-face-events/:id/unsubscription",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "FaceToFaceEventUnsubscriptionEvent faceToFaceEventUnsubscriptionEvent = new FaceToFaceEventUnsubscriptionEvent();\n" +
      "List<Member> members = new ArrayList<>();\n" +
      "Member member1 = communityApi.members().member(app, \"60acae8e2f799d228a4d4a85\").getResponse();\n" +
      "Member member2 = communityApi.members().member(app, \"60accfeb97acf93f5f69e05d\").getResponse();\n" +
      "members.add(member1);\n" +
      "members.add(member2);\n" +
      "faceToFaceEventUnsubscriptionEvent.setId(\"60acae8e2f799d228a4d4a85\");\n" +
      "faceToFaceEventUnsubscriptionEvent.setParticipants(members);\n" +
      "communityApi.faceToFaceEvents().unsubscription(app, faceToFaceEventUnsubscriptionEvent);",
    response: null
  }

  public static face_to_face_event_id_admin_delete: EndpointTemplate = {
    name: "face-to-face-events/:id/admin",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.faceToFaceEvents().delete(app, \"60b7ad03c54a116f0e0ca3df\", true);",
    response: null
  }

  public static direct_chats_get: EndpointTemplate = {
    name: "direct-chats",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<DirectChat> directChats = communityApi.directChats().all(app).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(directChats);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"ownerMember\":{\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACCEPTED\",\n" +
      " \"name\":\"Jorge\",\n" +
      " \"lastname\":\"Perez\",\n" +
      " \"address\":{\n" +
      "    \"lat\":10.4982717,\n" +
      "    \"lng\":-66.905112,\n" +
      "    \"formatted\":\"Avenida Lecuna, Caracas 1014, Distrito Capital, Venezuela\"\n" +
      " },\n" +
      " \"email\":\"jorge@gmail.es\",\n" +
      " \"about\":\"Responsable en la tienda principal de la capital de Venezuela\",\n" +
      " \"image\":null,\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken1\",\n" +
      "       \"device\":\"SMARTPHONE\",\n" +
      "       \"timestamp\":1622975724952\n" +
      "    },\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken3\",\n" +
      "       \"device\":\"IPAD\",\n" +
      "       \"timestamp\":1630918457848\n" +
      "    }\n" +
      " ],\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.twitter.com/Jorge\",\n" +
      "    \"www.linkedin.com/Jorge\"\n" +
      " ],\n" +
      " \"experiences\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Reponedor en Mercadona\",\n" +
      "       \"type\":\"PART_TIME\",\n" +
      "       \"company\":\"Mercadona\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":34.5,\n" +
      "  \"lng\":-1.1,\n" +
      "  \"formatted\":\"C. Bruselas, s/n, 28922 Alcorcón, Madrid\"\n" +
      "       },\n" +
      "       \"startDate\":18033,\n" +
      "       \"endDate\":18654,\n" +
      "       \"description\":\"Trabajo a tiempo parcial como reponedor en el mercadona del centro comercial de Los Alisios\"\n" +
      "    }\n" +
      " ],\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de Venezuela\",\n" +
      "       \"degree\":\"Derecho\",\n" +
      "       \"fieldOfStudy\":\"Derecho mercantil\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18972,\n" +
      "       \"grade\":7.3,\n" +
      "       \"address\":{\n" +
      "  \"lat\":9.9,\n" +
      "  \"lng\":-69.7,\n" +
      "  \"formatted\":\"Caracas 1041, Distrito Capital, Venezuela\"\n" +
      "       },\n" +
      "       \"description\":null\n" +
      "    },\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de Venezuela\",\n" +
      "       \"degree\":\"Master en Derecho\",\n" +
      "       \"fieldOfStudy\":\"Derecho en el Ejercicio de la Abogacía\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18687,\n" +
      "       \"grade\":8.3,\n" +
      "       \"address\":{\n" +
      "  \"lat\":9.9,\n" +
      "  \"lng\":-69.7,\n" +
      "  \"formatted\":\"Caracas 1041, Distrito Capital, Venezuela\"\n" +
      "       },\n" +
      "       \"description\":\"Master realizado en la Universidad de Venezuela para ser abogado\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      \"participants\":[\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " },\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " }\n" +
      "      ],\n" +
      "      \"createdAt\":1621419330000\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"ownerMember\":{\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACCEPTED\",\n" +
      " \"name\":\"Jeremy\",\n" +
      " \"lastname\":\"Trujillo\",\n" +
      " \"address\":{\n" +
      "    \"lat\":28.1245582,\n" +
      "    \"lng\":-15.4325499,\n" +
      "    \"formatted\":\"C. Pío XII, 30-32, 35005 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      " },\n" +
      " \"email\":\"trujillosanchezjeremy@gmail.com\",\n" +
      " \"about\":\"Alumno en prácticas en Moonshot y estudiante de la Universidad de Las Palmas de Gran Canaria\",\n" +
      " \"image\":null,\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken3\",\n" +
      "       \"device\":\"IPAD\",\n" +
      "       \"timestamp\":1630918457848\n" +
      "    }\n" +
      " ],\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.twitter.com/Jeremy\",\n" +
      "    \"www.facebook.com/Jeremy\"\n" +
      " ],\n" +
      " \"experiences\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Prácticas universitarias en Moonshot Innovation\",\n" +
      "       \"type\":\"APPRENTICESHIP\",\n" +
      "       \"company\":\"Moonshot Innovation\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":90.5,\n" +
      "  \"lng\":10.5,\n" +
      "  \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "       },\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":null,\n" +
      "       \"description\":\"Prácticas extracurriculares a traves de la FULP (Universidad de las Palmas de Gran Canaria)\"\n" +
      "    }\n" +
      " ],\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "       \"degree\":\"Ingeniería informática\",\n" +
      "       \"fieldOfStudy\":\"Ingeniería de software\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":null,\n" +
      "       \"grade\":7,\n" +
      "       \"address\":{\n" +
      "  \"lat\":48.5,\n" +
      "  \"lng\":19.1,\n" +
      "  \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "       },\n" +
      "       \"description\":\"Estudios universitarios realizados en la Universidad de Las Palmas de Gran Canaria, con especialización en ingeniería de software\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      \"participants\":[\n" +
      " {\n" +
      "    \"memberId\":\"60acae8e2f799d228a4d4a85\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " },\n" +
      " {\n" +
      "    \"memberId\":\"60acae8e2f799d228a4d4a85\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " }\n" +
      "      ],\n" +
      "      \"createdAt\":1621422930000\n" +
      "   }\n" +
      "]"
  }

  public static direct_chats_all_member_participate_get: EndpointTemplate = {
    name: "direct-chats/all/member-participate",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<DirectChat> directChats = communityApi.directChats().allWhereMemberParticipate(app).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(directChats);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"ownerMember\":{\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACCEPTED\",\n" +
      " \"name\":\"Jorge\",\n" +
      " \"lastname\":\"Perez\",\n" +
      " \"address\":{\n" +
      "    \"lat\":10.4982717,\n" +
      "    \"lng\":-66.905112,\n" +
      "    \"formatted\":\"Avenida Lecuna, Caracas 1014, Distrito Capital, Venezuela\"\n" +
      " },\n" +
      " \"email\":\"jorge@gmail.es\",\n" +
      " \"about\":\"Responsable en la tienda principal de la capital de Venezuela\",\n" +
      " \"image\":null,\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken1\",\n" +
      "       \"device\":\"SMARTPHONE\",\n" +
      "       \"timestamp\":1622975724952\n" +
      "    },\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken3\",\n" +
      "       \"device\":\"IPAD\",\n" +
      "       \"timestamp\":1630918457848\n" +
      "    }\n" +
      " ],\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.twitter.com/Jorge\",\n" +
      "    \"www.linkedin.com/Jorge\"\n" +
      " ],\n" +
      " \"experiences\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Reponedor en Mercadona\",\n" +
      "       \"type\":\"PART_TIME\",\n" +
      "       \"company\":\"Mercadona\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":34.5,\n" +
      "  \"lng\":-1.1,\n" +
      "  \"formatted\":\"C. Bruselas, s/n, 28922 Alcorcón, Madrid\"\n" +
      "       },\n" +
      "       \"startDate\":18033,\n" +
      "       \"endDate\":18654,\n" +
      "       \"description\":\"Trabajo a tiempo parcial como reponedor en el mercadona del centro comercial de Los Alisios\"\n" +
      "    }\n" +
      " ],\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de Venezuela\",\n" +
      "       \"degree\":\"Derecho\",\n" +
      "       \"fieldOfStudy\":\"Derecho mercantil\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18972,\n" +
      "       \"grade\":7.3,\n" +
      "       \"address\":{\n" +
      "  \"lat\":9.9,\n" +
      "  \"lng\":-69.7,\n" +
      "  \"formatted\":\"Caracas 1041, Distrito Capital, Venezuela\"\n" +
      "       },\n" +
      "       \"description\":null\n" +
      "    },\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de Venezuela\",\n" +
      "       \"degree\":\"Master en Derecho\",\n" +
      "       \"fieldOfStudy\":\"Derecho en el Ejercicio de la Abogacía\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18687,\n" +
      "       \"grade\":8.3,\n" +
      "       \"address\":{\n" +
      "  \"lat\":9.9,\n" +
      "  \"lng\":-69.7,\n" +
      "  \"formatted\":\"Caracas 1041, Distrito Capital, Venezuela\"\n" +
      "       },\n" +
      "       \"description\":\"Master realizado en la Universidad de Venezuela para ser abogado\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      \"participants\":[\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " },\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " }\n" +
      "      ],\n" +
      "      \"createdAt\":1621419330000\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"ownerMember\":{\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACCEPTED\",\n" +
      " \"name\":\"Jeremy\",\n" +
      " \"lastname\":\"Trujillo\",\n" +
      " \"address\":{\n" +
      "    \"lat\":28.1245582,\n" +
      "    \"lng\":-15.4325499,\n" +
      "    \"formatted\":\"C. Pío XII, 30-32, 35005 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      " },\n" +
      " \"email\":\"trujillosanchezjeremy@gmail.com\",\n" +
      " \"about\":\"Alumno en prácticas en Moonshot y estudiante de la Universidad de Las Palmas de Gran Canaria\",\n" +
      " \"image\":null,\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken3\",\n" +
      "       \"device\":\"IPAD\",\n" +
      "       \"timestamp\":1630918457848\n" +
      "    }\n" +
      " ],\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.twitter.com/Jeremy\",\n" +
      "    \"www.facebook.com/Jeremy\"\n" +
      " ],\n" +
      " \"experiences\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Prácticas universitarias en Moonshot Innovation\",\n" +
      "       \"type\":\"APPRENTICESHIP\",\n" +
      "       \"company\":\"Moonshot Innovation\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":90.5,\n" +
      "  \"lng\":10.5,\n" +
      "  \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "       },\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":null,\n" +
      "       \"description\":\"Prácticas extracurriculares a traves de la FULP (Universidad de las Palmas de Gran Canaria)\"\n" +
      "    }\n" +
      " ],\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "       \"degree\":\"Ingeniería informática\",\n" +
      "       \"fieldOfStudy\":\"Ingeniería de software\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":null,\n" +
      "       \"grade\":7,\n" +
      "       \"address\":{\n" +
      "  \"lat\":48.5,\n" +
      "  \"lng\":19.1,\n" +
      "  \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "       },\n" +
      "       \"description\":\"Estudios universitarios realizados en la Universidad de Las Palmas de Gran Canaria, con especialización en ingeniería de software\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      \"participants\":[\n" +
      " {\n" +
      "    \"memberId\":\"60acae8e2f799d228a4d4a85\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " },\n" +
      " {\n" +
      "    \"memberId\":\"60acae8e2f799d228a4d4a85\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " }\n" +
      "      ],\n" +
      "      \"createdAt\":1621422930000\n" +
      "   }\n" +
      "]"
  }

  public static direct_chat_id_get: EndpointTemplate = {
    name: "direct-chats/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "DirectChat directChats = communityApi.directChats().get(app, \"60acd05497acf93f5f69e062\").getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(directChats);\n" +
      "System.out.println(jsonObject);",
    response: "\n{\n" +
      "\"id\": \"60acae8e2f799d228a4d4a85\",\n" +
      "\"ownerMember\": {\n" +
      "    \"id\": \"60acae8e2f799d228a4d4a85\",\n" +
      "    \"state\": \"ACCEPTED\",\n" +
      "    \"name\": \"Iñigo\",\n" +
      "    \"lastname\": \"Aramburu\",\n" +
      "    \"address\": {\n" +
      "    \"lat\": 43.3038929,\n" +
      "    \"lng\": -1.9604012,\n" +
      "    \"formatted\": \"Wroclaw, 1, 20014 San Sebastián, Gipuzkoa, España\"\n" +
      "    },\n" +
      "    \"email\": \"iaramburu@moonshot.ceo\",\n" +
      "    \"about\": \"Experto en Ingeniería del Software.\",\n" +
      "    \"image\": null,\n" +
      "    \"fcmTokens\": [\n" +
      "{\n" +
      "    \"tokenId\": \"fcmToken1\",\n" +
      "    \"device\": \"SMARTPHONE\",\n" +
      "    \"timestamp\": 1622975724952\n" +
      "}\n" +
      "    ],\n" +
      "    \"socialNetworks\": [\n" +
      "\"www.twitter.com/Iñigo\",\n" +
      "\"www.facebook.com/Iñigo\"\n" +
      "    ],\n" +
      "    \"experiences\": [\n" +
      "{\n" +
      "    \"id\": \"60acae8e2f799d228a4d4a85\",\n" +
      "    \"title\": \"Back-end developer en Moonshot Innovation\",\n" +
      "    \"type\": \"FULL_TIME\",\n" +
      "    \"company\": \"Moonshot Innovation\",\n" +
      "    \"address\": {\n" +
      "\"lat\": 90.5,\n" +
      "\"lng\": 10.5,\n" +
      "\"formatted\": \"Madrid, Puerta del Sol\"\n" +
      "    },\n" +
      "    \"startDate\": 15319,\n" +
      "    \"endDate\": 18718,\n" +
      "    \"description\": \"Scrum manager en Moonshot Innovation, trabajando en el equipo de back-end\"\n" +
      "}\n" +
      "    ],\n" +
      "    \"educations\": [\n" +
      "{\n" +
      "    \"id\": \"60acae8e2f799d228a4d4a85\",\n" +
      "    \"school\": \"Universidad del País Vasco\",\n" +
      "    \"degree\": \"Ingeniería informática\",\n" +
      "    \"fieldOfStudy\": \"Ingeniería de software\",\n" +
      "    \"startDate\": 15319,\n" +
      "    \"endDate\": 18687,\n" +
      "    \"grade\": 8,\n" +
      "    \"address\": {\n" +
      "\"lat\": 4.5,\n" +
      "\"lng\": 110.5,\n" +
      "\"formatted\": \"Carr. More, 17-13, 48014 Bilbao, Vizcaya\"\n" +
      "    },\n" +
      "    \"description\": \"Estudios universitarios realizados en la Universidad del País Vasco\"\n" +
      "},\n" +
      "{\n" +
      "    \"id\": \"61445159784bca6ef764c6df\",\n" +
      "    \"school\": \"Universidad del País Vasco\",\n" +
      "    \"degree\": \"Master en desarrollo web\",\n" +
      "    \"fieldOfStudy\": \"Desarrollo web\",\n" +
      "    \"startDate\": 15319,\n" +
      "    \"endDate\": 18687,\n" +
      "    \"grade\": 9.3,\n" +
      "    \"address\": {\n" +
      "\"lat\": 4.5,\n" +
      "\"lng\": 110.5,\n" +
      "\"formatted\": \"Carr. More, 17-13, 48014 Bilbao, Vizcaya\"\n" +
      "    },\n" +
      "    \"description\": \"Master realizado en la Universidad del País Vasco para ser full stack developer\"\n" +
      "}\n" +
      "    ]\n" +
      "},\n" +
      "\"participants\": [\n" +
      "    {\n" +
      "\"memberId\": \"61445159784bca6ef764c6df\",\n" +
      "\"state\": \"ACTIVE\"\n" +
      "    },\n" +
      "    {\n" +
      "\"memberId\": \"61445159784bca6ef764c6df\",\n" +
      "\"state\": \"INACTIVE\"\n" +
      "    }\n" +
      "],\n" +
      "\"createdAt\": 1621412130000,\n" +
      "\"actions\": [\n" +
      "    {\n" +
      "\"name\": \"Action 1\",\n" +
      "\"url\": \"https://myserver.com/action1\"\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": \"Action 2\",\n" +
      "\"url\": \"https://myserver.com/action2\"\n" +
      "    }\n" +
      "]\n" +
      "    }"
  }

  public static direct_chat_post: EndpointTemplate = {
    name: "direct-chats",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "DirectChatCreateEvent directChatCreateEvent = new DirectChatCreateEvent();\n" +
      "List<Member> members = new ArrayList<>();\n" +
      "Member member1 = communityApi.members().member(app, \"60acae8e2f799d228a4d4a85\").getResponse();\n" +
      "Member member2 = communityApi.members().member(app, \"60accfeb97acf93f5f69e05d\").getResponse();\n" +
      "members.add(member1);\n" +
      "members.add(member2);\n" +
      "List<ParticipantAnyEvent> participants = members.stream().map(member -> {\n" +
      "    ParticipantAnyEvent participantAnyEvent = new ParticipantAnyEvent();\n" +
      "    participantAnyEvent.setMemberId(member.getId());\n" +
      "    participantAnyEvent.setState(ParticipantState.ACTIVE);\n" +
      "    return participantAnyEvent;\n" +
      "}).collect(Collectors.toList());\n" +
      "directChatCreateEvent.setParticipants(participants);\n" +
      "directChatCreateEvent.setCreatedAt(ZonedDateTime.now());\n" +
      "directChatCreateEvent.setMeetStarted(false);\n" +
      "communityApi.directChats().create(app, directChatCreateEvent);",
    response: null
  }

  public static direct_chat_id_delete: EndpointTemplate = {
    name: "direct-chats/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.directChats().delete(app, \"60acae8e2f799d228a4d4a85\");",
    response: null
  }

  public static direct_chat_id_message_post: EndpointTemplate = {
    name: "direct-chats/:id/messages",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "MessageAddEvent messageAddEvent = new MemberMessageAddEvent();\n" +
      "messageAddEvent.setModule(\"community\");\n" +
      "messageAddEvent.setContent(\"New message\");\n" +
      "messageAddEvent.setDocuments(null);\n" +
      "communityApi.directChats().messageAdd(app, \"60acae8e2f799d228a4d4a85\", messageAddEvent);",
    response: null
  }

  public static direct_chat_id_messages_get: EndpointTemplate = {
    name: "direct-chats/:id/messages",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<Message> messages = communityApi.directChats().messagesByRoomId(app, \"60acae8e2f799d228a4d4a85\").getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(messages);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"authorMemberId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"content\":\"Hola, ¿Me podrías pasar el archivo?\",\n" +
      "      \"documents\":[\n" +
      " \n" +
      "      ],\n" +
      "      \"createdAt\":1621412130000\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"authorMemberId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"content\":\"Sí, claro.\",\n" +
      "      \"documents\":[\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"link\":\"https://moonshot.ceo/archivoTrabajo.pdf\",\n" +
      "    \"category\":\"PDF\",\n" +
      "    \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"filename\":\"archivoTrabajo\",\n" +
      "    \"createdAt\":1621412130000\n" +
      " }\n" +
      "      ],\n" +
      "      \"createdAt\":1621415730000\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"authorMemberId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"content\":\"Yo salgo en breve de trabajar por si te quieres tomar un cafe\",\n" +
      "      \"documents\":[],\n" +
      "      \"createdAt\":1621419330000\n" +
      "   }\n" +
      "]"
  }

  public static direct_chat_id_message_id_delete: EndpointTemplate = {
    name: "direct-chats/:id/messages/:message_id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.directChats().messageDelete(app, \"61445159784bca6ef764c6df\", \"61445159784bca6ef764c6df\");",
    response: null
  }

  public static direct_chat_id_documents_get: EndpointTemplate = {
    name: "direct-chats/:id/documents",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<Document> documents = communityApi.directChats().documents(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(documents);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"link\":\"https://moonshot.ceo/archivoTrabajo.pdf\",\n" +
      "      \"category\":\"PDF\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"filename\":\"archivoTrabajo\",\n" +
      "      \"createdAt\":1621412130000\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"link\":\"https://moonshot.ceo/planosPrimeraPlanta.pdf\",\n" +
      "      \"category\":\"PDF\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"filename\":\"planosPrimeraPlanta\",\n" +
      "      \"createdAt\":1621415730000\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"link\":\"https://moonshot.ceo/planosSegundaPlanta.image\",\n" +
      "      \"category\":\"IMAGE\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"filename\":\"planosSegundaPlanta\",\n" +
      "      \"createdAt\":1621419330000\n" +
      "   }\n" +
      "]"
  }

  public static direct_chat_id_links_get: EndpointTemplate = {
    name: "direct-chats/:id/links",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<Link> documents = communityApi.directChats().links(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(documents);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"url\":\"https://dev.moonshot.ceo/documento1.pdf\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"createdAt\":1637417185\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"url\":\"https://dev.moonshot.ceo/documento2.pdf\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"createdAt\":1637417190\n" +
      "   }\n" +
      "]"
  }

  public static direct_chat_id_upload_put: EndpointTemplate = {
    name: "direct-chats/:id/upload",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "File file = new File(\"C:\\Users\\saulo\\OneDrive\\Imágenes\\evento.jpg\");\n" +
      "communityApi.directChats().upload(app, \"61445159784bca6ef764c6df\", file);",
    response: "\nhttps://localhost/drive/direct-chats/files/1/61eaffcdad2bd12319fd4eba.png"
  }

  public static follow_up_rooms_get: EndpointTemplate = {
    name: "follow-up-rooms",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<FollowUpRoom> followUpRooms = communityApi.followUpRooms().all(app).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(followUpRooms);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"ownerMember\":{\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACCEPTED\",\n" +
      " \"name\":\"Victor\",\n" +
      " \"lastname\":\"Ceballos\",\n" +
      " \"address\":{\n" +
      "    \"lat\":28.1391538,\n" +
      "    \"lng\":-15.4316746,\n" +
      "    \"formatted\":\"C. del Gral. Vives, 73, 35007 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      " },\n" +
      " \"email\":\"vceballos@moonshot.ceo\",\n" +
      " \"about\":\"Freelance\",\n" +
      " \"image\":null,\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken1\",\n" +
      "       \"device\":\"SMARTPHONE\",\n" +
      "       \"timestamp\":1622975724952\n" +
      "    },\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken2\",\n" +
      "       \"device\":\"COMPUTER\",\n" +
      "       \"timestamp\":1630918457848\n" +
      "    }\n" +
      " ],\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.linkedin.com/Victor\",\n" +
      "    \"www.angellist.com/Victor\",\n" +
      "    \"www.google.com/Victor\"\n" +
      " ],\n" +
      " \"experiences\":null,\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "       \"degree\":\"Ingeniería industrial\",\n" +
      "       \"fieldOfStudy\":\"Diseño de instalaciones\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18687,\n" +
      "       \"grade\":7.75,\n" +
      "       \"address\":{\n" +
      "  \"lat\":48.5,\n" +
      "  \"lng\":19.1,\n" +
      "  \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "       },\n" +
      "       \"description\":\"Estudios universitarios realizados en la facultad de ingenería industrial\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      \"title\":\"Reunion general\",\n" +
      "      \"description\":\"Reunion para hablar de los objetivos a futuro\",\n" +
      "      \"participants\":[\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " },\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " },\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"INACTIVE\"\n" +
      " }\n" +
      "      ],\n" +
      "      \"state\":\"OPEN\",\n" +
      "      \"createdAt\":1621412130000,\n" +
      "      \"actions\":[\n" +
      " {\n" +
      "    \"name\":\"Action 1\",\n" +
      "    \"url\":\"https://myserver.com/action1\"\n" +
      " },\n" +
      " {\n" +
      "    \"name\":\"Action 2\",\n" +
      "    \"url\":\"https://myserver.com/action2\"\n" +
      " }\n" +
      "      ]\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"ownerMember\":{\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACCEPTED\",\n" +
      " \"name\":\"Jeremy\",\n" +
      " \"lastname\":\"Trujillo\",\n" +
      " \"address\":{\n" +
      "    \"lat\":28.1245582,\n" +
      "    \"lng\":-15.4325499,\n" +
      "    \"formatted\":\"C. Pío XII, 30-32, 35005 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      " },\n" +
      " \"email\":\"trujillosanchezjeremy@gmail.com\",\n" +
      " \"about\":\"Alumno en prácticas en Moonshot y estudiante de la Universidad de Las Palmas de Gran Canaria\",\n" +
      " \"image\":null,\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken3\",\n" +
      "       \"device\":\"IPAD\",\n" +
      "       \"timestamp\":1630918457848\n" +
      "    }\n" +
      " ],\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.twitter.com/Jeremy\",\n" +
      "    \"www.facebook.com/Jeremy\"\n" +
      " ],\n" +
      " \"experiences\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Prácticas universitarias en Moonshot Innovation\",\n" +
      "       \"type\":\"APPRENTICESHIP\",\n" +
      "       \"company\":\"Moonshot Innovation\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":90.5,\n" +
      "  \"lng\":10.5,\n" +
      "  \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "       },\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":null,\n" +
      "       \"description\":\"Prácticas extracurriculares a traves de la FULP (Universidad de las Palmas de Gran Canaria)\"\n" +
      "    }\n" +
      " ],\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "       \"degree\":\"Ingeniería informática\",\n" +
      "       \"fieldOfStudy\":\"Ingeniería de software\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":null,\n" +
      "       \"grade\":7,\n" +
      "       \"address\":{\n" +
      "  \"lat\":48.5,\n" +
      "  \"lng\":19.1,\n" +
      "  \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "       },\n" +
      "       \"description\":\"Estudios universitarios realizados en la Universidad de Las Palmas de Gran Canaria, con especialización en ingeniería de software\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      \"title\":\"Decisiones de negocio\",\n" +
      "      \"description\":\"Frente al problema sucedido esta mañana debemos tomar decisiones\",\n" +
      "      \"participants\":[\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"INACTIVE\"\n" +
      " },\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " },\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " },\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " }\n" +
      "      ],\n" +
      "      \"state\":\"OPEN\",\n" +
      "      \"createdAt\":1621415730000\n" +
      "   }\n" +
      "]"
  }

  public static follow_up_rooms_all_member_participate_get: EndpointTemplate = {
    name: "follow-up-rooms/all/member-participate",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<FollowUpRoom> followUpRooms = communityApi.followUpRooms().allWhereMemberParticipate(app).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(followUpRooms);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"ownerMember\":{\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACCEPTED\",\n" +
      " \"name\":\"Victor\",\n" +
      " \"lastname\":\"Ceballos\",\n" +
      " \"address\":{\n" +
      "    \"lat\":28.1391538,\n" +
      "    \"lng\":-15.4316746,\n" +
      "    \"formatted\":\"C. del Gral. Vives, 73, 35007 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      " },\n" +
      " \"email\":\"vceballos@moonshot.ceo\",\n" +
      " \"about\":\"Freelance\",\n" +
      " \"image\":null,\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken1\",\n" +
      "       \"device\":\"SMARTPHONE\",\n" +
      "       \"timestamp\":1622975724952\n" +
      "    },\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken2\",\n" +
      "       \"device\":\"COMPUTER\",\n" +
      "       \"timestamp\":1630918457848\n" +
      "    }\n" +
      " ],\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.linkedin.com/Victor\",\n" +
      "    \"www.angellist.com/Victor\",\n" +
      "    \"www.google.com/Victor\"\n" +
      " ],\n" +
      " \"experiences\":null,\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "       \"degree\":\"Ingeniería industrial\",\n" +
      "       \"fieldOfStudy\":\"Diseño de instalaciones\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18687,\n" +
      "       \"grade\":7.75,\n" +
      "       \"address\":{\n" +
      "  \"lat\":48.5,\n" +
      "  \"lng\":19.1,\n" +
      "  \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "       },\n" +
      "       \"description\":\"Estudios universitarios realizados en la facultad de ingenería industrial\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      \"title\":\"Reunion general\",\n" +
      "      \"description\":\"Reunion para hablar de los objetivos a futuro\",\n" +
      "      \"participants\":[\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " },\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " },\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"INACTIVE\"\n" +
      " }\n" +
      "      ],\n" +
      "      \"state\":\"OPEN\",\n" +
      "      \"createdAt\":1621412130000,\n" +
      "      \"actions\":[\n" +
      " {\n" +
      "    \"name\":\"Action 1\",\n" +
      "    \"url\":\"https://myserver.com/action1\"\n" +
      " },\n" +
      " {\n" +
      "    \"name\":\"Action 2\",\n" +
      "    \"url\":\"https://myserver.com/action2\"\n" +
      " }\n" +
      "      ]\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"ownerMember\":{\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACCEPTED\",\n" +
      " \"name\":\"Jeremy\",\n" +
      " \"lastname\":\"Trujillo\",\n" +
      " \"address\":{\n" +
      "    \"lat\":28.1245582,\n" +
      "    \"lng\":-15.4325499,\n" +
      "    \"formatted\":\"C. Pío XII, 30-32, 35005 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      " },\n" +
      " \"email\":\"trujillosanchezjeremy@gmail.com\",\n" +
      " \"about\":\"Alumno en prácticas en Moonshot y estudiante de la Universidad de Las Palmas de Gran Canaria\",\n" +
      " \"image\":null,\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken3\",\n" +
      "       \"device\":\"IPAD\",\n" +
      "       \"timestamp\":1630918457848\n" +
      "    }\n" +
      " ],\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.twitter.com/Jeremy\",\n" +
      "    \"www.facebook.com/Jeremy\"\n" +
      " ],\n" +
      " \"experiences\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Prácticas universitarias en Moonshot Innovation\",\n" +
      "       \"type\":\"APPRENTICESHIP\",\n" +
      "       \"company\":\"Moonshot Innovation\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":90.5,\n" +
      "  \"lng\":10.5,\n" +
      "  \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "       },\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":null,\n" +
      "       \"description\":\"Prácticas extracurriculares a traves de la FULP (Universidad de las Palmas de Gran Canaria)\"\n" +
      "    }\n" +
      " ],\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "       \"degree\":\"Ingeniería informática\",\n" +
      "       \"fieldOfStudy\":\"Ingeniería de software\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":null,\n" +
      "       \"grade\":7,\n" +
      "       \"address\":{\n" +
      "  \"lat\":48.5,\n" +
      "  \"lng\":19.1,\n" +
      "  \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "       },\n" +
      "       \"description\":\"Estudios universitarios realizados en la Universidad de Las Palmas de Gran Canaria, con especialización en ingeniería de software\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      \"title\":\"Decisiones de negocio\",\n" +
      "      \"description\":\"Frente al problema sucedido esta mañana debemos tomar decisiones\",\n" +
      "      \"participants\":[\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"INACTIVE\"\n" +
      " },\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " },\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " },\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " }\n" +
      "      ],\n" +
      "      \"state\":\"OPEN\",\n" +
      "      \"createdAt\":1621415730000\n" +
      "   }\n" +
      "]"
  }

  public static follow_up_room_id_get: EndpointTemplate = {
    name: "follow-up-rooms/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "FollowUpRoom followUpRoom = communityApi.followUpRooms().get(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(followUpRoom);\n" +
      "System.out.println(jsonObject);",
    response: "\n{\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"ownerMember\":{\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACCEPTED\",\n" +
      " \"name\":\"Victor\",\n" +
      " \"lastname\":\"Ceballos\",\n" +
      " \"address\":{\n" +
      "    \"lat\":28.1391538,\n" +
      "    \"lng\":-15.4316746,\n" +
      "    \"formatted\":\"C. del Gral. Vives, 73, 35007 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      " },\n" +
      " \"email\":\"vceballos@moonshot.ceo\",\n" +
      " \"about\":\"Freelance\",\n" +
      " \"image\":null,\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken1\",\n" +
      "       \"device\":\"SMARTPHONE\",\n" +
      "       \"timestamp\":1622975724952\n" +
      "    },\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken2\",\n" +
      "       \"device\":\"COMPUTER\",\n" +
      "       \"timestamp\":1630918457848\n" +
      "    }\n" +
      " ],\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.linkedin.com/Victor\",\n" +
      "    \"www.angellist.com/Victor\",\n" +
      "    \"www.google.com/Victor\"\n" +
      " ],\n" +
      " \"experiences\":null,\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "       \"degree\":\"Ingeniería industrial\",\n" +
      "       \"fieldOfStudy\":\"Diseño de instalaciones\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18687,\n" +
      "       \"grade\":7.75,\n" +
      "       \"address\":{\n" +
      "  \"lat\":48.5,\n" +
      "  \"lng\":19.1,\n" +
      "  \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "       },\n" +
      "       \"description\":\"Estudios universitarios realizados en la facultad de ingenería industrial\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      \"title\":\"Reunion general\",\n" +
      "      \"description\":\"Reunion para hablar de los objetivos a futuro\",\n" +
      "      \"participants\":[\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " },\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " },\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"INACTIVE\"\n" +
      " }\n" +
      "      ],\n" +
      "      \"state\":\"OPEN\",\n" +
      "      \"createdAt\":1621412130000,\n" +
      "      \"actions\":[\n" +
      " {\n" +
      "    \"name\":\"Action 1\",\n" +
      "    \"url\":\"https://myserver.com/action1\"\n" +
      " },\n" +
      " {\n" +
      "    \"name\":\"Action 2\",\n" +
      "    \"url\":\"https://myserver.com/action2\"\n" +
      " }\n" +
      "      ]\n" +
      "   }"
  }

  public static follow_up_room_post: EndpointTemplate = {
    name: "follow-up-rooms",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "FollowUpRoomCreateEvent followUpRoomCreateEvent = new FollowUpRoomCreateEvent();\n" +
      "List<Member> members = new ArrayList<>();\n" +
      "Member member1 = communityApi.members().member(app, \"60acae8e2f799d228a4d4a85\").getResponse();\n" +
      "Member member2 = communityApi.members().member(app, \"60accfeb97acf93f5f69e05d\").getResponse();\n" +
      "members.add(member1);\n" +
      "members.add(member2);\n" +
      "List<ParticipantAnyEvent> participants = members.stream().map(member -> {\n" +
      "    ParticipantAnyEvent participantAnyEvent = new ParticipantAnyEvent();\n" +
      "    participantAnyEvent.setMemberId(member.getId());\n" +
      "    participantAnyEvent.setState(ParticipantState.ACTIVE);\n" +
      "    return participantAnyEvent;\n" +
      "}).collect(Collectors.toList());\n" +
      "followUpRoomCreateEvent.setTitle(\"New follow up room\");\n" +
      "followUpRoomCreateEvent.setDescription(\"Let´s see what happen\");\n" +
      "followUpRoomCreateEvent.setParticipants(participants);\n" +
      "followUpRoomCreateEvent.setState(FollowUpRoomState.OPEN);\n" +
      "followUpRoomCreateEvent.setMeetStarted(false);\n" +
      "communityApi.followUpRooms().create(app, followUpRoomCreateEvent);",
    response: null
  }

  public static follow_up_room_id_put: EndpointTemplate = {
    name: "follow-up-rooms/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "FollowUpRoom followUpRoom = communityApi.followUpRooms().get(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "List<ParticipantAnyEvent> participants = followUpRoom.getParticipants().stream().map(participant -> {\n" +
      "    ParticipantAnyEvent participantAnyEvent = new ParticipantAnyEvent();\n" +
      "    participantAnyEvent.setMemberId(participant.getMemberId());\n" +
      "    participantAnyEvent.setState(participant.getState());\n" +
      "    return participantAnyEvent;\n" +
      "}).collect(Collectors.toList());\n" +
      "FollowUpRoomUpdateEvent followUpRoomUpdateEvent = new FollowUpRoomUpdateEvent();\n" +
      "followUpRoomUpdateEvent.setTitle(\"New follow up room\");\n" +
      "followUpRoomUpdateEvent.setDescription(followUpRoom.getDescription());\n" +
      "followUpRoomUpdateEvent.setParticipants(participants);\n" +
      "followUpRoomUpdateEvent.setActions(followUpRoom.getActions());\n" +
      "followUpRoomUpdateEvent.setMeetStarted(followUpRoom.isMeetStarted());\n" +
      "communityApi.followUpRooms().update(app, \"61445159784bca6ef764c6df\", followUpRoomUpdateEvent);",
    response: null
  }

  public static follow_up_room_id_members_add_put: EndpointTemplate = {
    name: "follow-up-rooms/:id/members/add",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "FollowUpRoomAddMemberEvent followUpRoomAddMemberEvent = new FollowUpRoomAddMemberEvent();\n" +
      "List<String> ids = new ArrayList<>();\n" +
      "ids.add(\"60acae8e2f799d228a4d4a85\");\n" +
      "ids.add(\"60accfeb97acf93f5f69e05d\");\n" +
      "followUpRoomAddMemberEvent.setId(\"61445159784bca6ef764c6df\");\n" +
      "followUpRoomAddMemberEvent.setMemberIds(ids);\n" +
      "communityApi.followUpRooms().addMember(app, \"61445159784bca6ef764c6df\", followUpRoomAddMemberEvent);",
    response: null
  }

  public static follow_up_room_id_members_leave_put: EndpointTemplate = {
    name: "follow-up-rooms/:id/members/leave",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "FollowUpRoomLeaveMemberEvent followUpRoomLeaveMemberEvent = new FollowUpRoomLeaveMemberEvent();\n" +
      "List<String> ids = new ArrayList<>();\n" +
      "ids.add(\"60acae8e2f799d228a4d4a85\");\n" +
      "ids.add(\"60accfeb97acf93f5f69e05d\");\n" +
      "followUpRoomLeaveMemberEvent.setId(\"61445159784bca6ef764c6df\");\n" +
      "followUpRoomLeaveMemberEvent.setLeaveMemberIds(ids);\n" +
      "followUpRoomLeaveMemberEvent.setNewOwnerMemberId(\"61ubyopc97acf93c5c69e05d\");\n" +
      "communityApi.followUpRooms().leaveMember(app, \"61445159784bca6ef764c6df\", followUpRoomLeaveMemberEvent);",
    response: null
  }

  public static follow_up_room_id_open_put: EndpointTemplate = {
    name: "follow-up-rooms/:id/open",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.followUpRooms().open(app, \"61445159784bca6ef764c6df\", new FollowUpRoomOpenEvent());",
    response: null
  }

  public static follow_up_room_id_close_put: EndpointTemplate = {
    name: "follow-up-rooms/:id/close",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.followUpRooms().close(app, \"61445159784bca6ef764c6df\", new FollowUpRoomCloseEvent());",
    response: null
  }

  public static follow_up_room_id_delete: EndpointTemplate = {
    name: "follow-up-rooms/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.followUpRooms().delete(app, \"61445159784bca6ef764c6df\");",
    response: null
  }

  public static follow_up_room_id_message_post: EndpointTemplate = {
    name: "follow-up-rooms/:id/messages",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "MessageAddEvent messageAddEvent = new MemberMessageAddEvent();\n" +
      "messageAddEvent.setModule(\"community\");\n" +
      "messageAddEvent.setContent(\"New message\");\n" +
      "messageAddEvent.setDocuments(null);\n" +
      "communityApi.followUpRooms().messageAdd(app, \"61445159784bca6ef764c6df\", messageAddEvent);",
    response: null
  }

  public static follow_up_room_id_message_id_delete: EndpointTemplate = {
    name: "follow-up-rooms/:id/messages/:message_id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.followUpRooms().messageDelete(app, \"61445159784bca6ef764c6df\", \"61445159784bca6ef764c6df\", false);",
    response: null
  }

  public static follow_up_room_message_id_admin_delete: EndpointTemplate = {
    name: "follow-up-rooms/_id/messages/:message_id/admin",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.followUpRooms().messageDelete(app, \"61445159784bca6ef764c6df\", \"61445159784bca6ef764c6df\", true);",
    response: null
  }

  public static follow_up_room_id_message_get: EndpointTemplate = {
    name: "follow-up-rooms/:id/messages",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<Message> messages = communityApi.followUpRooms().messagesByRoomId(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(messages);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"authorMemberId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"content\":\"Hola, ¿Me podrías pasar el archivo?\",\n" +
      "      \"documents\":[\n" +
      " \n" +
      "      ],\n" +
      "      \"createdAt\":1621412130000\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"authorMemberId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"content\":\"Sí, claro.\",\n" +
      "      \"documents\":[\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"link\":\"https://moonshot.ceo/archivoTrabajo.pdf\",\n" +
      "    \"category\":\"PDF\",\n" +
      "    \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"filename\":\"archivoTrabajo\",\n" +
      "    \"createdAt\":1621412130000\n" +
      " }\n" +
      "      ],\n" +
      "      \"createdAt\":1621415730000\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"authorMemberId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"content\":\"Yo salgo en breve de trabajar por si te quieres tomar un cafe\",\n" +
      "      \"documents\":[\n" +
      " \n" +
      "      ],\n" +
      "      \"createdAt\":1621419330000\n" +
      "   }\n" +
      "]"
  }

  public static follow_up_room_id_documents_get: EndpointTemplate = {
    name: "follow-up-rooms/:id/documents",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<Document> documents = communityApi.followUpRooms().documents(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(documents);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"link\":\"https://moonshot.ceo/archivoTrabajo.pdf\",\n" +
      "      \"category\":\"PDF\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"filename\":\"archivoTrabajo\",\n" +
      "      \"createdAt\":1621412130000\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"link\":\"https://moonshot.ceo/planosPrimeraPlanta.pdf\",\n" +
      "      \"category\":\"PDF\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"filename\":\"planosPrimeraPlanta\",\n" +
      "      \"createdAt\":1621415730000\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"link\":\"https://moonshot.ceo/planosSegundaPlanta.image\",\n" +
      "      \"category\":\"IMAGE\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"filename\":\"planosSegundaPlanta\",\n" +
      "      \"createdAt\":1621419330000\n" +
      "   }\n" +
      "]"
  }

  public static follow_up_room_id_links_get: EndpointTemplate = {
    name: "follow-up-rooms/:id/links",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<Link> links = communityApi.followUpRooms().links(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(links);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"url\":\"https://dev.moonshot.ceo/documento1.pdf\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"createdAt\":1637417185\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"url\":\"https://dev.moonshot.ceo/documento2.pdf\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"createdAt\":1637417190\n" +
      "   }\n" +
      "]"
  }

  public static follow_up_room_id_upload_put: EndpointTemplate = {
    name: "follow-up-rooms/:id/upload",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "File file = new File(\"C:\\Users\\saulo\\OneDrive\\Imágenes\\evento.jpg\");\n" +
      "communityApi.followUpRooms().upload(app, \"61445159784bca6ef764c6df\", file);",
    response: "\nhttps://localhost/drive/follow-up-rooms/files/1/61eaffcdad2bd12319fd4eba.png"
  }

  public static public_channels_get: EndpointTemplate = {
    name: "public-channels",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<PublicChannel> publicChannels = communityApi.publicChannels().all(app).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(publicChannels);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"ownerMember\":{\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACCEPTED\",\n" +
      " \"name\":\"Marcos\",\n" +
      " \"lastname\":\"Fernandez\",\n" +
      " \"address\":{\n" +
      "    \"lat\":35.6513383,\n" +
      "    \"lng\":139.8687196,\n" +
      "    \"formatted\":\"3-chōme-10-15 Minamikasai, Edogawa City, Tokyo 134-0085, Japan\"\n" +
      " },\n" +
      " \"city\":\"Tokio\",\n" +
      " \"country\":\"Japon\",\n" +
      " \"email\":\"marcos@outlook.es\",\n" +
      " \"about\":\"Farmaceutico trabajador para la compañia Novartis, actual desarrolladora de la vacuna Pfizer\",\n" +
      " \"image\":null,\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken1\",\n" +
      "       \"device\":\"SMARTPHONE\",\n" +
      "       \"timestamp\":1622975724952\n" +
      "    },\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken4\",\n" +
      "       \"device\":\"LAPTOP\",\n" +
      "       \"timestamp\":1631089955516\n" +
      "    }\n" +
      " ],\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.angellist.com/Marcos\",\n" +
      "    \"www.linkedin.com/Marcos\"\n" +
      " ],\n" +
      " \"experiences\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Colaboración para crear la vacuna Pfizer\",\n" +
      "       \"type\":\"FULL_TIME\",\n" +
      "       \"company\":\"Novartis\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":41.9,\n" +
      "  \"lng\":14.8,\n" +
      "  \"formatted\":\"203 Merrion Rd, Dublin 4, D04 NN12, Irlanda\"\n" +
      "       },\n" +
      "       \"startDate\":18333,\n" +
      "       \"endDate\":18706,\n" +
      "       \"description\":\"Colaborador de la vacuna Pfizer contra el COVID-19\"\n" +
      "    },\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Colaboración para crear la vacuna de la gripe A\",\n" +
      "       \"type\":\"INTERIM\",\n" +
      "       \"company\":\"Novartis\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":41.9,\n" +
      "  \"lng\":14.8,\n" +
      "  \"formatted\":\"203 Merrion Rd, Dublin 4, D04 NN12, Irlanda\"\n" +
      "       },\n" +
      "       \"startDate\":15584,\n" +
      "       \"endDate\":16355,\n" +
      "       \"description\":\"Colaborador en la vacuna para acabar contra la gripe A\"\n" +
      "    }\n" +
      " ],\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de Tokio\",\n" +
      "       \"degree\":\"Farmaceutica\",\n" +
      "       \"fieldOfStudy\":\"Pandemias\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18687,\n" +
      "       \"grade\":9.4,\n" +
      "       \"address\":{\n" +
      "  \"lat\":35.7,\n" +
      "  \"lng\":139.7,\n" +
      "  \"formatted\":\"7 Chome-3-1 Hongo, Bunkyo City, Tokyo 113-8654, Japón\"\n" +
      "       },\n" +
      "       \"description\":\"Estudiante de farmaceutica de la Universidad de Tokio\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      \"title\":\"Canal compartir conocimientos\",\n" +
      "      \"description\":\"Canal para compartir conocimientos de diversos temas\",\n" +
      "      \"participants\":[\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"INACTIVE\"\n" +
      " },\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " },\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " }\n" +
      "      ],\n" +
      "      \"createdAt\":1621412130000,\n" +
      "      \"actions\":[\n" +
      " {\n" +
      "    \"name\":\"Action 1\",\n" +
      "    \"url\":\"https://myserver.com/action1\"\n" +
      " },\n" +
      " {\n" +
      "    \"name\":\"Action 2\",\n" +
      "    \"url\":\"https://myserver.com/action2\"\n" +
      " }\n" +
      "      ]\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"ownerMember\":{\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACCEPTED\",\n" +
      " \"name\":\"Raúl\",\n" +
      " \"lastname\":\"López\",\n" +
      " \"address\":{\n" +
      "    \"lat\":37.3839934,\n" +
      "    \"lng\":-5.9694018,\n" +
      "    \"formatted\":\"C. Marques del Nervion, 25, 41005 Sevilla, España\"\n" +
      " },\n" +
      " \"email\":\"raul@outlook.es\",\n" +
      " \"about\":\"Responsable de la distribucion de la vacuna Pfizer en España\",\n" +
      " \"image\":null,\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken1\",\n" +
      "       \"device\":\"SMARTPHONE\",\n" +
      "       \"timestamp\":1622975724952\n" +
      "    },\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken2\",\n" +
      "       \"device\":\"COMPUTER\",\n" +
      "       \"timestamp\":1630918457848\n" +
      "    },\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken3\",\n" +
      "       \"device\":\"IPAD\",\n" +
      "       \"timestamp\":1630918457848\n" +
      "    },\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken4\",\n" +
      "       \"device\":\"LAPTOP\",\n" +
      "       \"timestamp\":1631089955516\n" +
      "    }\n" +
      " ],\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.google.com/Raul\",\n" +
      "    \"www.facebook.com/Raul\"\n" +
      " ],\n" +
      " \"experiences\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Distribuidor de la vacuna Pfizer\",\n" +
      "       \"type\":\"FREELANCE\",\n" +
      "       \"company\":\"Distribuciones Raul S.L\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":28.3,\n" +
      "  \"lng\":-25.9,\n" +
      "  \"formatted\":\"C. Carvajal, 2, 35004 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "       },\n" +
      "       \"startDate\":16355,\n" +
      "       \"endDate\":16488,\n" +
      "       \"description\":\"Responsable de la tienda principal de Samsung en Madrid\"\n" +
      "    }\n" +
      " ],\n" +
      " \"educations\":null\n" +
      "      },\n" +
      "      \"title\":\"Canal para trabajar de manera tranquila\",\n" +
      "      \"description\":\"Aqui todos los participantes estaran muteados y sirve para sentirse acompañado en el trabajo online\",\n" +
      "      \"participants\":[\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " },\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACTIVE\"\n" +
      " },\n" +
      " {\n" +
      "    \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"INACTIVE\"\n" +
      " }\n" +
      "      ],\n" +
      "      \"createdAt\":1621415730000\n" +
      "   }\n" +
      "]"
  }

  public static public_channel_id_get: EndpointTemplate = {
    name: "public-channels/:id_get",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "PublicChannel publicChannel = communityApi.publicChannels().get(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(publicChannel);\n" +
      "System.out.println(jsonObject);",
    response: "\n{\n" +
      "   \"id\":\"61445159784bca6ef764c6df\",\n" +
      "   \"ownerMember\":{\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"state\":\"ACCEPTED\",\n" +
      "      \"name\":\"Marcos\",\n" +
      "      \"lastname\":\"Fernandez\",\n" +
      "      \"address\":{\n" +
      " \"lat\":35.6513383,\n" +
      " \"lng\":139.8687196,\n" +
      " \"formatted\":\"3-chōme-10-15 Minamikasai, Edogawa City, Tokyo 134-0085, Japan\"\n" +
      "      },\n" +
      "      \"city\":\"Tokio\",\n" +
      "      \"country\":\"Japon\",\n" +
      "      \"email\":\"marcos@outlook.es\",\n" +
      "      \"about\":\"Farmaceutico trabajador para la compañia Novartis, actual desarrolladora de la vacuna Pfizer\",\n" +
      "      \"image\":null,\n" +
      "      \"fcmTokens\":[\n" +
      " {\n" +
      "    \"tokenId\":\"fcmToken1\",\n" +
      "    \"device\":\"SMARTPHONE\",\n" +
      "    \"timestamp\":1622975724952\n" +
      " },\n" +
      " {\n" +
      "    \"tokenId\":\"fcmToken4\",\n" +
      "    \"device\":\"LAPTOP\",\n" +
      "    \"timestamp\":1631089955516\n" +
      " }\n" +
      "      ],\n" +
      "      \"socialNetworks\":[\n" +
      " \"www.angellist.com/Marcos\",\n" +
      " \"www.linkedin.com/Marcos\"\n" +
      "      ],\n" +
      "      \"experiences\":[\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"title\":\"Colaboración para crear la vacuna Pfizer\",\n" +
      "    \"type\":\"FULL_TIME\",\n" +
      "    \"company\":\"Novartis\",\n" +
      "    \"address\":{\n" +
      "       \"lat\":41.9,\n" +
      "       \"lng\":14.8,\n" +
      "       \"formatted\":\"203 Merrion Rd, Dublin 4, D04 NN12, Irlanda\"\n" +
      "    },\n" +
      "    \"startDate\":18333,\n" +
      "    \"endDate\":18706,\n" +
      "    \"description\":\"Colaborador de la vacuna Pfizer contra el COVID-19\"\n" +
      " },\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"title\":\"Colaboración para crear la vacuna de la gripe A\",\n" +
      "    \"type\":\"INTERIM\",\n" +
      "    \"company\":\"Novartis\",\n" +
      "    \"address\":{\n" +
      "       \"lat\":41.9,\n" +
      "       \"lng\":14.8,\n" +
      "       \"formatted\":\"203 Merrion Rd, Dublin 4, D04 NN12, Irlanda\"\n" +
      "    },\n" +
      "    \"startDate\":15584,\n" +
      "    \"endDate\":16355,\n" +
      "    \"description\":\"Colaborador en la vacuna para acabar contra la gripe A\"\n" +
      " }\n" +
      "      ],\n" +
      "      \"educations\":[\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"school\":\"Universidad de Tokio\",\n" +
      "    \"degree\":\"Farmaceutica\",\n" +
      "    \"fieldOfStudy\":\"Pandemias\",\n" +
      "    \"startDate\":15319,\n" +
      "    \"endDate\":18687,\n" +
      "    \"grade\":9.4,\n" +
      "    \"address\":{\n" +
      "       \"lat\":35.7,\n" +
      "       \"lng\":139.7,\n" +
      "       \"formatted\":\"7 Chome-3-1 Hongo, Bunkyo City, Tokyo 113-8654, Japón\"\n" +
      "    },\n" +
      "    \"description\":\"Estudiante de farmaceutica de la Universidad de Tokio\"\n" +
      " }\n" +
      "      ]\n" +
      "   },\n" +
      "   \"title\":\"Canal compartir conocimientos\",\n" +
      "   \"description\":\"Canal para compartir conocimientos de diversos temas\",\n" +
      "   \"participants\":[\n" +
      "      {\n" +
      " \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"INACTIVE\"\n" +
      "      },\n" +
      "      {\n" +
      " \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACTIVE\"\n" +
      "      },\n" +
      "      {\n" +
      " \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACTIVE\"\n" +
      "      }\n" +
      "   ],\n" +
      "   \"createdAt\":1621412130000,\n" +
      "   \"actions\":[\n" +
      "      {\n" +
      " \"name\":\"Action 1\",\n" +
      " \"url\":\"https://myserver.com/action1\"\n" +
      "      },\n" +
      "      {\n" +
      " \"name\":\"Action 2\",\n" +
      " \"url\":\"https://myserver.com/action2\"\n" +
      "      }\n" +
      "   ]\n" +
      "}"
  }

  public static public_channel_post: EndpointTemplate = {
    name: "public-channels",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "PublicChannelCreateEvent publicChannelCreateEvent = new PublicChannelCreateEvent();\n" +
      "List<Member> members = new ArrayList<>();\n" +
      "Member member1 = communityApi.members().member(app, \"60acae8e2f799d228a4d4a85\").getResponse();\n" +
      "Member member2 = communityApi.members().member(app, \"60accfeb97acf93f5f69e05d\").getResponse();\n" +
      "members.add(member1);\n" +
      "members.add(member2);\n" +
      "List<ParticipantAnyEvent> participants = members.stream().map(member -> {\n" +
      "    ParticipantAnyEvent participantAnyEvent = new ParticipantAnyEvent();\n" +
      "    participantAnyEvent.setMemberId(member.getId());\n" +
      "    participantAnyEvent.setState(ParticipantState.ACTIVE);\n" +
      "    return participantAnyEvent;\n" +
      "}).collect(Collectors.toList());\n" +
      "publicChannelCreateEvent.setTitle(\"New public channel\");\n" +
      "publicChannelCreateEvent.setDescription(\"Let´s see what happen\");\n" +
      "publicChannelCreateEvent.setParticipants(participants);\n" +
      "publicChannelCreateEvent.setMeetStarted(false);\n" +
      "communityApi.publicChannels().create(app, publicChannelCreateEvent);",
    response: null
  }

  public static public_channel_id_put: EndpointTemplate = {
    name: "public-channels/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "PublicChannel publicChannel = communityApi.publicChannels().get(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "List<ParticipantAnyEvent> participants = publicChannel.getParticipants().stream().map(participant -> {\n" +
      "    ParticipantAnyEvent participantAnyEvent = new ParticipantAnyEvent();\n" +
      "    participantAnyEvent.setMemberId(participant.getMemberId());\n" +
      "    participantAnyEvent.setState(participant.getState());\n" +
      "    return participantAnyEvent;\n" +
      "}).collect(Collectors.toList());\n" +
      "PublicChannelUpdateEvent publicChannelUpdateEvent = new PublicChannelUpdateEvent();\n" +
      "publicChannelUpdateEvent.setOwnerMemberId(publicChannel.getOwnerMember().getId());\n" +
      "publicChannelUpdateEvent.setTitle(\"New title\");\n" +
      "publicChannelUpdateEvent.setDescription(publicChannel.getDescription());\n" +
      "publicChannelUpdateEvent.setParticipants(participants);\n" +
      "publicChannelUpdateEvent.setActions(publicChannel.getActions());\n" +
      "publicChannelUpdateEvent.setMeetStarted(publicChannel.isMeetStarted());\n" +
      "communityApi.publicChannels().update(app, \"61445159784bca6ef764c6df\", publicChannelUpdateEvent, false);",
    response: null
  }

  public static public_channel_id_delete: EndpointTemplate = {
    name: "public-channels/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.publicChannels().delete(app, \"61445159784bca6ef764c6df\", false);",
    response: null
  }

  public static public_channel_id_admin_put: EndpointTemplate = {
    name: "public-channels/:id/admin",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "PublicChannel publicChannel = communityApi.publicChannels().get(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "List<ParticipantAnyEvent> participants = publicChannel.getParticipants().stream().map(participant -> {\n" +
      "    ParticipantAnyEvent participantAnyEvent = new ParticipantAnyEvent();\n" +
      "    participantAnyEvent.setMemberId(participant.getMemberId());\n" +
      "    participantAnyEvent.setState(participant.getState());\n" +
      "    return participantAnyEvent;\n" +
      "}).collect(Collectors.toList());\n" +
      "PublicChannelUpdateEvent publicChannelUpdateEvent = new PublicChannelUpdateEvent();\n" +
      "publicChannelUpdateEvent.setOwnerMemberId(publicChannel.getOwnerMember().getId());\n" +
      "publicChannelUpdateEvent.setTitle(\"New title\");\n" +
      "publicChannelUpdateEvent.setDescription(publicChannel.getDescription());\n" +
      "publicChannelUpdateEvent.setParticipants(participants);\n" +
      "publicChannelUpdateEvent.setActions(publicChannel.getActions());\n" +
      "publicChannelUpdateEvent.setMeetStarted(publicChannel.isMeetStarted());\n" +
      "communityApi.publicChannels().update(app, \"61445159784bca6ef764c6df\", publicChannelUpdateEvent, true);",
    response: null
  }

  public static public_channel_id_admin_delete: EndpointTemplate = {
    name: "public-channels/:id/admin",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.publicChannels().delete(app, \"61445159784bca6ef764c6df\", false);",
    response: null
  }

  public static public_channel_subscribe_put: EndpointTemplate = {
    name: "public-channels/:id/subscribe",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "PublicChannelSubscribeEvent publicChannelSubscribeEvent = new PublicChannelSubscribeEvent();\n" +
      "publicChannelSubscribeEvent.setMemberId(\"61445159784bca6ef764c6df\");\n" +
      "communityApi.publicChannels().subscribe(app, \"61445159784bca6ef764c6df\", publicChannelSubscribeEvent);",
    response: null
  }

  public static public_channel_unsubscribe_put: EndpointTemplate = {
    name: "public-channels/:id/unsubscribe",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "PublicChannelUnsubscribeEvent publicChannelUnsubscribeEvent = new PublicChannelUnsubscribeEvent();\n" +
      "publicChannelUnsubscribeEvent.setMemberId(\"61445159784bca6ef764c6df\");\n" +
      "communityApi.publicChannels().unsubscribe(app, \"61445159784bca6ef764c6df\", publicChannelUnsubscribeEvent);",
    response: null
  }

  public static public_channel_message_post: EndpointTemplate = {
    name: "public-channels/:id/messages",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "MessageAddEvent messageAddEvent = new MemberMessageAddEvent();\n" +
      "messageAddEvent.setModule(\"community\");\n" +
      "messageAddEvent.setContent(\"New message\");\n" +
      "messageAddEvent.setDocuments(null);\n" +
      "communityApi.publicChannels().messageAdd(app, \"61445159784bca6ef764c6df\", messageAddEvent);",
    response: null
  }

  public static public_channel_message_id_delete: EndpointTemplate = {
    name: "public-channels/:id/messages/:message_id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.publicChannels().messageDelete(app, \"61445159784bca6ef764c6df\", \"61445159784bca6ef764c6df\", false);",
    response: null
  }

  public static public_channel_message_id_admin_delete: EndpointTemplate = {
    name: "public-channels/:id/messages/:message_id/admin",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.publicChannels().messageDelete(app, \"61445159784bca6ef764c6df\", \"61445159784bca6ef764c6df\", true);",
    response: null
  }

  public static public_channel_id_messages_get: EndpointTemplate = {
    name: "public-channels/:id/messages",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<Message> messages = communityApi.publicChannels().messagesByRoomId(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(messages);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "  {\n" +
      "    \"id\": \"61445159784bca6ef764c6df\",\n" +
      "    \"roomId\": \"61445159784bca6ef764c6df\",\n" +
      "    \"authorMemberId\": \"61445159784bca6ef764c6df\",\n" +
      "    \"content\": \"Yo te envio estos planos de la primera planta, tu enviame los de la segunda planta\",\n" +
      "    \"documents\": [\n" +
      "      {\n" +
      "\"id\": \"61445159784bca6ef764c6df\",\n" +
      "\"link\": \"https://moonshot.ceo/planosPrimeraPlanta.pdf\",\n" +
      "\"category\": \"PDF\",\n" +
      "\"roomId\": \"61445159784bca6ef764c6df\",\n" +
      "\"memberId\": \"61445159784bca6ef764c6df\",\n" +
      "\"filename\": \"planosPrimeraPlanta\",\n" +
      "\"createdAt\": 1621415730000\n" +
      "      }\n" +
      "    ],\n" +
      "    \"createdAt\": 1621426530000\n" +
      "  },\n" +
      "  {\n" +
      "    \"id\": \"61445159784bca6ef764c6df\",\n" +
      "    \"roomId\": \"61445159784bca6ef764c6df\",\n" +
      "    \"authorMemberId\": \"61445159784bca6ef764c6df\",\n" +
      "    \"content\": \"Okey, ahí te van.\",\n" +
      "    \"documents\": [\n" +
      "      {\n" +
      "\"id\": \"61445159784bca6ef764c6df\",\n" +
      "\"link\": \"https://moonshot.ceo/planosSegundaPlanta.image\",\n" +
      "\"category\": \"IMAGE\",\n" +
      "\"roomId\": \"61445159784bca6ef764c6df\",\n" +
      "\"memberId\": \"61445159784bca6ef764c6df\",\n" +
      "\"filename\": \"planosSegundaPlanta\",\n" +
      "\"createdAt\": 1621419330000\n" +
      "      }\n" +
      "    ],\n" +
      "    \"createdAt\": 1621430130000\n" +
      "  },\n" +
      "  {\n" +
      "    \"id\": \"61445159784bca6ef764c6df\",\n" +
      "    \"roomId\": \"61445159784bca6ef764c6df\",\n" +
      "    \"authorMemberId\": \"61445159784bca6ef764c6df\",\n" +
      "    \"content\": \"Aqui acaba la reunion de hoy\",\n" +
      "    \"documents\": [\n" +
      "    ],\n" +
      "    \"createdAt\": 1621433730000\n" +
      "  },\n" +
      "  {\n" +
      "    \"id\": \"61445159784bca6ef764c6df\",\n" +
      "    \"roomId\": \"61445159784bca6ef764c6df\",\n" +
      "    \"authorMemberId\": \"61445159784bca6ef764c6df\",\n" +
      "    \"content\": \"Gracias por convocarla, inserto un esquema que he realizado del contenido.\",\n" +
      "    \"documents\": [\n" +
      "      {\n" +
      "\"id\": \"61445159784bca6ef764c6df\",\n" +
      "\"link\": \"https://moonshot.ceo/esquema.jpg\",\n" +
      "\"category\": \"IMAGE\",\n" +
      "\"roomId\": \"61445159784bca6ef764c6df\",\n" +
      "\"memberId\": \"61445159784bca6ef764c6df\",\n" +
      "\"filename\": \"esquema\",\n" +
      "\"createdAt\": 1621422930000\n" +
      "      }\n" +
      "    ],\n" +
      "    \"createdAt\": 1621437330000\n" +
      "  }\n" +
      "]"
  }

  public static public_channel_id_documents_get: EndpointTemplate = {
    name: "public-channels/:id/documents",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<Document> documents = communityApi.publicChannels().documents(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(documents);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"link\":\"https://moonshot.ceo/archivoTrabajo.pdf\",\n" +
      "      \"category\":\"PDF\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"filename\":\"archivoTrabajo\",\n" +
      "      \"createdAt\":1621412130000\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"link\":\"https://moonshot.ceo/planosPrimeraPlanta.pdf\",\n" +
      "      \"category\":\"PDF\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"filename\":\"planosPrimeraPlanta\",\n" +
      "      \"createdAt\":1621415730000\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"link\":\"https://moonshot.ceo/planosSegundaPlanta.image\",\n" +
      "      \"category\":\"IMAGE\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"memberId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"filename\":\"planosSegundaPlanta\",\n" +
      "      \"createdAt\":1621419330000\n" +
      "   }\n" +
      "]"
  }

  public static public_channel_id_links_get: EndpointTemplate = {
    name: "public-channels/:id/links",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<Link> links = communityApi.publicChannels().links(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(links);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"url\":\"https://dev.moonshot.ceo/documento1.pdf\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"createdAt\":1637417185\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"url\":\"https://dev.moonshot.ceo/documento2.pdf\",\n" +
      "      \"roomId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"createdAt\":1637417190\n" +
      "   }\n" +
      "]"
  }

  public static public_channel_id_upload_put: EndpointTemplate = {
    name: "public-channels/:id/upload",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "File file = new File(\"C:\\Users\\saulo\\OneDrive\\Imágenes\\evento.jpg\");\n" +
      "communityApi.publicChannels().upload(app, \"61445159784bca6ef764c6df\", file);",
    response: "\nhttps://localhost/drive/public-channels/files/1/61eaffcdad2bd12319fd4eba.png"
  }

  public static wall_post_post: EndpointTemplate = {
    name: "wall-posts",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "WallPostCreateEvent wallPostCreateEvent = new WallPostCreateEvent();\n" +
      "wallPostCreateEvent.setContent(\"New wall post\");\n" +
      "wallPostCreateEvent.setAttachments(new ArrayList<WallPostAttachment>());\n" +
      "wallPostCreateEvent.setComments(new ArrayList<Comment>());\n" +
      "wallPostCreateEvent.setLikes(new HashSet<String>());\n" +
      "wallPostCreateEvent.setCreatedAt(ZonedDateTime.now());\n" +
      "communityApi.wallPosts().create(app, wallPostCreateEvent);",
    response: null
  }

  public static wall_post_id_put: EndpointTemplate = {
    name: "wall-posts/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "WallPost wallPost = communityApi.wallPosts().get(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "WallPostUpdateEvent wallPostUpdateEvent = new WallPostUpdateEvent();\n" +
      "wallPostUpdateEvent.setContent(\"New wall post content\");\n" +
      "wallPostUpdateEvent.setAttachments(wallPost.getAttachments());\n" +
      "communityApi.wallPosts().update(app, \"61445159784bca6ef764c6df\", wallPostUpdateEvent, false);",
    response: null
  }

  public static wall_post_id_delete: EndpointTemplate = {
    name: "wall-posts/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.wallPosts().delete(app, \"61445159784bca6ef764c6df\", false);",
    response: null
  }

  public static wall_post_id_admin_put: EndpointTemplate = {
    name: "wall-posts/:id/admin",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "WallPost wallPost = communityApi.wallPosts().get(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "WallPostUpdateEvent wallPostUpdateEvent = new WallPostUpdateEvent();\n" +
      "wallPostUpdateEvent.setContent(\"New wall post content\");\n" +
      "wallPostUpdateEvent.setAttachments(wallPost.getAttachments());\n" +
      "communityApi.wallPosts().update(app, \"61445159784bca6ef764c6df\", wallPostUpdateEvent, true);",
    response: null
  }

  public static wall_post_id_admin_delete: EndpointTemplate = {
    name: "wall-posts/:id/admin",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.wallPosts().delete(app, \"61445159784bca6ef764c6df\", true);",
    response: null
  }

  public static wall_post_id_like_put: EndpointTemplate = {
    name: "wall-posts/:id/like",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.wallPosts().like(app, \"61445159784bca6ef764c6df\", new WallPostLikeEvent());",
    response: null
  }

  public static wall_post_id_unlike_put: EndpointTemplate = {
    name: "wall-posts/:id/unlike",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.wallPosts().unlike(app, \"61445159784bca6ef764c6df\", new WallPostUnlikeEvent());",
    response: null
  }

  public static wall_post_id_comment_post: EndpointTemplate = {
    name: "wall-posts/:id/comments",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "Comment comment = new Comment();\n" +
      "comment.setContent(\"New coment\");\n" +
      "comment.setAuthorMember(new Member());\n" +
      "comment.setLikes(new HashSet<String>());\n" +
      "comment.setCreatedAt(ZonedDateTime.now());\n" +
      "WallPostCommentAddEvent wallPostCommentAddEvent = new WallPostCommentAddEvent();\n" +
      "wallPostCommentAddEvent.setComment(comment);\n" +
      "communityApi.wallPosts().commentAdd(app, \"61445159784bca6ef764c6df\", wallPostCommentAddEvent);",
    response: null
  }

  public static wall_post_id_comment_id_like_put: EndpointTemplate = {
    name: "wall-posts/:id/comments/:comment_id/like",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.wallPosts().commentLike(app, \"61445159784bca6ef764c6df\", \"61445159784bca6ef764c6df\", new WallPostCommentLikeEvent());",
    response: null
  }

  public static wall_post_id_comment_id_unlike_put: EndpointTemplate = {
    name: "wall-posts/:id/comments/:comment_id/unlike",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.wallPosts().commentUnlike(app, \"61445159784bca6ef764c6df\", \"61445159784bca6ef764c6df\", new WallPostCommentUnlikeEvent());",
    response: null
  }

  public static wall_post_id_get: EndpointTemplate = {
    name: "wall-posts/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "WallPost wallPost = communityApi.wallPosts().get(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(wallPost);\n" +
      "System.out.println(jsonObject);",
    response: "\n{\n" +
      "\"id\": \"61445159784bca6ef764c6df\",\n" +
      "\"content\": \"Publicación de la subida de impuestos en Canarias\",\n" +
      "\"hashtags\": [\n" +
      "    \"#subidaImpuestos\",\n" +
      "    \"#otraVez\"\n" +
      "],\n" +
      "\"attachments\": [\n" +
      "    {\n" +
      "\"link\": \"https://elpais.com/subida_impuestos_canarias\",\n" +
      "\"attachmentType\": \" OTHER\"\n" +
      "    }\n" +
      "],\n" +
      "\"comments\": [\n" +
      "    {\n" +
      "\"id\": \"61445159784bca6ef764c6df\",\n" +
      "\"content\": \"Pues a mi me parece muy mal, los subieron el otro día\",\n" +
      "\"authorMember\": {\n" +
      "    \"id\": \"61445159784bca6ef764c6df\",\n" +
      "    \"state\": \"ACCEPTED\",\n" +
      "    \"name\": \"Jorge\",\n" +
      "    \"lastname\": \"Perez\",\n" +
      "    \"address\": {\n" +
      "\"lat\": 10.4982717,\n" +
      "\"lng\": -66.905112,\n" +
      "\"formatted\": \"Avenida Lecuna, Caracas 1014, Distrito Capital, Venezuela\"\n" +
      "    },\n" +
      "    \"email\": \"jorge@gmail.es\",\n" +
      "    \"about\": \"Responsable en la tienda principal de la capital de Venezuela\",\n" +
      "    \"image\": null,\n" +
      "    \"fcmTokens\": [\n" +
      "{\n" +
      "    \"tokenId\": \"fcmToken1\",\n" +
      "    \"device\": \"SMARTPHONE\",\n" +
      "    \"timestamp\": 1622975724952\n" +
      "},\n" +
      "{\n" +
      "    \"tokenId\": \"fcmToken3\",\n" +
      "    \"device\": \"IPAD\",\n" +
      "    \"timestamp\": 1630918457848\n" +
      "}\n" +
      "    ],\n" +
      "    \"socialNetworks\": [\n" +
      "\"www.twitter.com/Jorge\",\n" +
      "\"www.linkedin.com/Jorge\"\n" +
      "    ],\n" +
      "    \"experiences\": [\n" +
      "{\n" +
      "    \"id\": \"61445159784bca6ef764c6df\",\n" +
      "    \"title\": \"Reponedor en Mercadona\",\n" +
      "    \"type\": \"PART_TIME\",\n" +
      "    \"company\": \"Mercadona\",\n" +
      "    \"address\": {\n" +
      "\"lat\": 34.5,\n" +
      "\"lng\": -1.1,\n" +
      "\"formatted\": \"C. Bruselas, s/n, 28922 Alcorcón, Madrid\"\n" +
      "    },\n" +
      "    \"startDate\": 18033,\n" +
      "    \"endDate\": 18654,\n" +
      "    \"description\": \"Trabajo a tiempo parcial como reponedor en el mercadona del centro comercial de Los Alisios\"\n" +
      "}\n" +
      "    ],\n" +
      "    \"educations\": [\n" +
      "{\n" +
      "    \"id\": \"61445159784bca6ef764c6df\",\n" +
      "    \"school\": \"Universidad de Venezuela\",\n" +
      "    \"degree\": \"Derecho\",\n" +
      "    \"fieldOfStudy\": \"Derecho mercantil\",\n" +
      "    \"startDate\": 15319,\n" +
      "    \"endDate\": 18972,\n" +
      "    \"grade\": 7.3,\n" +
      "    \"address\": {\n" +
      "\"lat\": 9.9,\n" +
      "\"lng\": -69.7,\n" +
      "\"formatted\": \"Caracas 1041, Distrito Capital, Venezuela\"\n" +
      "    },\n" +
      "    \"description\": null\n" +
      "},\n" +
      "{\n" +
      "    \"id\": \"61445159784bca6ef764c6df\",\n" +
      "    \"school\": \"Universidad de Venezuela\",\n" +
      "    \"degree\": \"Master en Derecho\",\n" +
      "    \"fieldOfStudy\": \"Derecho en el Ejercicio de la Abogacía\",\n" +
      "    \"startDate\": 15319,\n" +
      "    \"endDate\": 18687,\n" +
      "    \"grade\": 8.3,\n" +
      "    \"address\": {\n" +
      "\"lat\": 9.9,\n" +
      "\"lng\": -69.7,\n" +
      "\"formatted\": \"Caracas 1041, Distrito Capital, Venezuela\"\n" +
      "    },\n" +
      "    \"description\": \"Master realizado en la Universidad de Venezuela para ser abogado\"\n" +
      "}\n" +
      "    ]\n" +
      "},\n" +
      "\"likes\": [\n" +
      "    \"61445159784bca6ef764c6df\",\n" +
      "    \"61445159784bca6ef764c6df\",\n" +
      "    \"61445159784bca6ef764c6df\"\n" +
      "],\n" +
      "\"createdAt\": 1620259200000\n" +
      "    }\n" +
      "],\n" +
      "\"likes\": [\n" +
      "    \"61445159784bca6ef764c6df\",\n" +
      "    \"61445159784bca6ef764c6df\",\n" +
      "    \"61445159784bca6ef764c6df\"\n" +
      "],\n" +
      "\"ownerMember\": {\n" +
      "    \"id\": \"61445159784bca6ef764c6df\",\n" +
      "    \"state\": \"REJECTED\",\n" +
      "    \"name\": \"Nestor\",\n" +
      "    \"lastname\": \"Rodriguez\",\n" +
      "    \"address\": {\n" +
      "\"lat\": 28.46383,\n" +
      "\"lng\": -16.2531561,\n" +
      "\"formatted\": \"Av. de San Sebastián, 60, 38005 Santa Cruz de Tenerife, España\"\n" +
      "    },\n" +
      "    \"city\": \"Santa Cruz\",\n" +
      "    \"country\": \"España\",\n" +
      "    \"email\": \"nestor@gmail.com\",\n" +
      "    \"about\": \"Informatico responsable del equipo de ciberseguridad\",\n" +
      "    \"image\": null,\n" +
      "    \"fcmTokens\": [\n" +
      "{\n" +
      "    \"tokenId\": \"fcmToken3\",\n" +
      "    \"device\": \"IPAD\",\n" +
      "    \"timestamp\": 1630918457848\n" +
      "}\n" +
      "    ],\n" +
      "    \"socialNetworks\": [\n" +
      "\"www.twitter.com/Nestor\",\n" +
      "\"www.linkedin.com/Nestor\"\n" +
      "    ],\n" +
      "    \"experiences\": [\n" +
      "{\n" +
      "    \"id\": \"61445159784bca6ef764c6df\",\n" +
      "    \"title\": \"Ingenierio informático realizando trabajos de ciberseguridad\",\n" +
      "    \"type\": \"FULL_TIME\",\n" +
      "    \"company\": \"Movistar\",\n" +
      "    \"address\": {\n" +
      "\"lat\": 27.8,\n" +
      "\"lng\": -15.5,\n" +
      "\"formatted\": \"C. Macho Sidro, 6, 35250 Ingenio, Las Palmas\"\n" +
      "    },\n" +
      "    \"startDate\": 17941,\n" +
      "    \"endDate\": 18687,\n" +
      "    \"description\": \"Ejerciendo trabajo de ingeniero de software en Movistar\"\n" +
      "}\n" +
      "    ],\n" +
      "    \"educations\": [\n" +
      "{\n" +
      "    \"id\": \"61445159784bca6ef764c6df\",\n" +
      "    \"school\": \"Universidad de la Laguna\",\n" +
      "    \"degree\": \"Ingeniería informática\",\n" +
      "    \"fieldOfStudy\": \"Ciberseguridad\",\n" +
      "    \"startDate\": 15319,\n" +
      "    \"endDate\": 18687,\n" +
      "    \"grade\": 7.8,\n" +
      "    \"address\": {\n" +
      "\"lat\": 28.5,\n" +
      "\"lng\": -16.3,\n" +
      "\"formatted\": \"Calle Padre Herrera, s/n, 38200 San Cristóbal de La Laguna, Santa Cruz de Tenerife\"\n" +
      "    },\n" +
      "    \"description\": \"Estudiante de la Universidad de La Laguna, en la facultad de ingeniería informática\"\n" +
      "}\n" +
      "    ]\n" +
      "},\n" +
      "\"createdAt\": 1620172800000\n" +
      "    }"
  }

  public static wall_posts_get: EndpointTemplate = {
    name: "wall-posts",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<WallPost> wallposts = communityApi.wallPosts().paged(app).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(wallposts);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"content\":\"Publicación de la subida de impuestos en Canarias\",\n" +
      "      \"hashtags\":[\n" +
      " \"#subidaImpuestos\",\n" +
      " \"#otraVez\"\n" +
      "      ],\n" +
      "      \"attachments\":[\n" +
      " {\n" +
      "    \"link\":\"https://elpais.com/subida_impuestos_canarias\",\n" +
      "    \"attachmentType\":\" OTHER\"\n" +
      " }\n" +
      "      ],\n" +
      "      \"comments\":[\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"content\":\"Pues a mi me parece muy mal, los subieron el otro día\",\n" +
      "    \"authorMember\":{\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"state\":\"ACCEPTED\",\n" +
      "       \"name\":\"Jorge\",\n" +
      "       \"lastname\":\"Perez\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":10.4982717,\n" +
      "  \"lng\":-66.905112,\n" +
      "  \"formatted\":\"Avenida Lecuna, Caracas 1014, Distrito Capital, Venezuela\"\n" +
      "       },\n" +
      "       \"email\":\"jorge@gmail.es\",\n" +
      "       \"about\":\"Responsable en la tienda principal de la capital de Venezuela\",\n" +
      "       \"image\":null,\n" +
      "       \"fcmTokens\":[\n" +
      "  {\n" +
      "     \"tokenId\":\"fcmToken1\",\n" +
      "     \"device\":\"SMARTPHONE\",\n" +
      "     \"timestamp\":1622975724952\n" +
      "  },\n" +
      "  {\n" +
      "     \"tokenId\":\"fcmToken3\",\n" +
      "     \"device\":\"IPAD\",\n" +
      "     \"timestamp\":1630918457848\n" +
      "  }\n" +
      "       ],\n" +
      "       \"socialNetworks\":[\n" +
      "  \"www.twitter.com/Jorge\",\n" +
      "  \"www.linkedin.com/Jorge\"\n" +
      "       ],\n" +
      "       \"experiences\":[\n" +
      "  {\n" +
      "     \"id\":\"61445159784bca6ef764c6df\",\n" +
      "     \"title\":\"Reponedor en Mercadona\",\n" +
      "     \"type\":\"PART_TIME\",\n" +
      "     \"company\":\"Mercadona\",\n" +
      "     \"address\":{\n" +
      "\"lat\":34.5,\n" +
      "\"lng\":-1.1,\n" +
      "\"formatted\":\"C. Bruselas, s/n, 28922 Alcorcón, Madrid\"\n" +
      "     },\n" +
      "     \"startDate\":18033,\n" +
      "     \"endDate\":18654,\n" +
      "     \"description\":\"Trabajo a tiempo parcial como reponedor en el mercadona del centro comercial de Los Alisios\"\n" +
      "  }\n" +
      "       ],\n" +
      "       \"educations\":[\n" +
      "  {\n" +
      "     \"id\":\"61445159784bca6ef764c6df\",\n" +
      "     \"school\":\"Universidad de Venezuela\",\n" +
      "     \"degree\":\"Derecho\",\n" +
      "     \"fieldOfStudy\":\"Derecho mercantil\",\n" +
      "     \"startDate\":15319,\n" +
      "     \"endDate\":18972,\n" +
      "     \"grade\":7.3,\n" +
      "     \"address\":{\n" +
      "\"lat\":9.9,\n" +
      "\"lng\":-69.7,\n" +
      "\"formatted\":\"Caracas 1041, Distrito Capital, Venezuela\"\n" +
      "     },\n" +
      "     \"description\":null\n" +
      "  },\n" +
      "  {\n" +
      "     \"id\":\"61445159784bca6ef764c6df\",\n" +
      "     \"school\":\"Universidad de Venezuela\",\n" +
      "     \"degree\":\"Master en Derecho\",\n" +
      "     \"fieldOfStudy\":\"Derecho en el Ejercicio de la Abogacía\",\n" +
      "     \"startDate\":15319,\n" +
      "     \"endDate\":18687,\n" +
      "     \"grade\":8.3,\n" +
      "     \"address\":{\n" +
      "\"lat\":9.9,\n" +
      "\"lng\":-69.7,\n" +
      "\"formatted\":\"Caracas 1041, Distrito Capital, Venezuela\"\n" +
      "     },\n" +
      "     \"description\":\"Master realizado en la Universidad de Venezuela para ser abogado\"\n" +
      "  }\n" +
      "       ]\n" +
      "    },\n" +
      "    \"likes\":[\n" +
      "       \"61445159784bca6ef764c6df\",\n" +
      "       \"61445159784bca6ef764c6df\",\n" +
      "       \"61445159784bca6ef764c6df\"\n" +
      "    ],\n" +
      "    \"createdAt\":1620259200000\n" +
      " }\n" +
      "      ],\n" +
      "      \"likes\":[\n" +
      " \"61445159784bca6ef764c6df\",\n" +
      " \"61445159784bca6ef764c6df\",\n" +
      " \"61445159784bca6ef764c6df\"\n" +
      "      ],\n" +
      "      \"ownerMember\":{\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"REJECTED\",\n" +
      " \"name\":\"Nestor\",\n" +
      " \"lastname\":\"Rodriguez\",\n" +
      " \"address\":{\n" +
      "    \"lat\":28.46383,\n" +
      "    \"lng\":-16.2531561,\n" +
      "    \"formatted\":\"Av. de San Sebastián, 60, 38005 Santa Cruz de Tenerife, España\"\n" +
      " },\n" +
      " \"city\":\"Santa Cruz\",\n" +
      " \"country\":\"España\",\n" +
      " \"email\":\"nestor@gmail.com\",\n" +
      " \"about\":\"Informatico responsable del equipo de ciberseguridad\",\n" +
      " \"image\":null,\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken3\",\n" +
      "       \"device\":\"IPAD\",\n" +
      "       \"timestamp\":1630918457848\n" +
      "    }\n" +
      " ],\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.twitter.com/Nestor\",\n" +
      "    \"www.linkedin.com/Nestor\"\n" +
      " ],\n" +
      " \"experiences\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Ingenierio informático realizando trabajos de ciberseguridad\",\n" +
      "       \"type\":\"FULL_TIME\",\n" +
      "       \"company\":\"Movistar\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":27.8,\n" +
      "  \"lng\":-15.5,\n" +
      "  \"formatted\":\"C. Macho Sidro, 6, 35250 Ingenio, Las Palmas\"\n" +
      "       },\n" +
      "       \"startDate\":17941,\n" +
      "       \"endDate\":18687,\n" +
      "       \"description\":\"Ejerciendo trabajo de ingeniero de software en Movistar\"\n" +
      "    }\n" +
      " ],\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de la Laguna\",\n" +
      "       \"degree\":\"Ingeniería informática\",\n" +
      "       \"fieldOfStudy\":\"Ciberseguridad\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18687,\n" +
      "       \"grade\":7.8,\n" +
      "       \"address\":{\n" +
      "  \"lat\":28.5,\n" +
      "  \"lng\":-16.3,\n" +
      "  \"formatted\":\"Calle Padre Herrera, s/n, 38200 San Cristóbal de La Laguna, Santa Cruz de Tenerife\"\n" +
      "       },\n" +
      "       \"description\":\"Estudiante de la Universidad de La Laguna, en la facultad de ingeniería informática\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      \"createdAt\":1620172800000\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"content\":\"Las elecciones en Madrid se han celebrado el 4/5/2020. ¿Estáis contentos con los resultados?\",\n" +
      "      \"hashtags\":[\n" +
      " \n" +
      "      ],\n" +
      "      \"attachments\":[\n" +
      " {\n" +
      "    \"link\":\"https://moonshoot.ceo/imageElecciones.jpg\",\n" +
      "    \"attachmentType\":\"IMAGE\"\n" +
      " }\n" +
      "      ],\n" +
      "      \"comments\":[\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"content\":\"Pues yo estoy muy contento.\",\n" +
      "    \"authorMember\":{\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"state\":\"ACCEPTED\",\n" +
      "       \"name\":\"Marcos\",\n" +
      "       \"lastname\":\"Fernandez\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":35.6513383,\n" +
      "  \"lng\":139.8687196,\n" +
      "  \"formatted\":\"3-chōme-10-15 Minamikasai, Edogawa City, Tokyo 134-0085, Japan\"\n" +
      "       },\n" +
      "       \"city\":\"Tokio\",\n" +
      "       \"country\":\"Japon\",\n" +
      "       \"email\":\"marcos@outlook.es\",\n" +
      "       \"about\":\"Farmaceutico trabajador para la compañia Novartis, actual desarrolladora de la vacuna Pfizer\",\n" +
      "       \"image\":null,\n" +
      "       \"fcmTokens\":[\n" +
      "  {\n" +
      "     \"tokenId\":\"fcmToken1\",\n" +
      "     \"device\":\"SMARTPHONE\",\n" +
      "     \"timestamp\":1622975724952\n" +
      "  },\n" +
      "  {\n" +
      "     \"tokenId\":\"fcmToken4\",\n" +
      "     \"device\":\"LAPTOP\",\n" +
      "     \"timestamp\":1631089955516\n" +
      "  }\n" +
      "       ],\n" +
      "       \"socialNetworks\":[\n" +
      "  \"www.angellist.com/Marcos\",\n" +
      "  \"www.linkedin.com/Marcos\"\n" +
      "       ],\n" +
      "       \"experiences\":[\n" +
      "  {\n" +
      "     \"id\":\"61445159784bca6ef764c6df\",\n" +
      "     \"title\":\"Colaboración para crear la vacuna Pfizer\",\n" +
      "     \"type\":\"FULL_TIME\",\n" +
      "     \"company\":\"Novartis\",\n" +
      "     \"address\":{\n" +
      "\"lat\":41.9,\n" +
      "\"lng\":14.8,\n" +
      "\"formatted\":\"203 Merrion Rd, Dublin 4, D04 NN12, Irlanda\"\n" +
      "     },\n" +
      "     \"startDate\":18333,\n" +
      "     \"endDate\":18706,\n" +
      "     \"description\":\"Colaborador de la vacuna Pfizer contra el COVID-19\"\n" +
      "  },\n" +
      "  {\n" +
      "     \"id\":\"61445159784bca6ef764c6df\",\n" +
      "     \"title\":\"Colaboración para crear la vacuna de la gripe A\",\n" +
      "     \"type\":\"INTERIM\",\n" +
      "     \"company\":\"Novartis\",\n" +
      "     \"address\":{\n" +
      "\"lat\":41.9,\n" +
      "\"lng\":14.8,\n" +
      "\"formatted\":\"203 Merrion Rd, Dublin 4, D04 NN12, Irlanda\"\n" +
      "     },\n" +
      "     \"startDate\":15584,\n" +
      "     \"endDate\":16355,\n" +
      "     \"description\":\"Colaborador en la vacuna para acabar contra la gripe A\"\n" +
      "  }\n" +
      "       ],\n" +
      "       \"educations\":[\n" +
      "  {\n" +
      "     \"id\":\"61445159784bca6ef764c6df\",\n" +
      "     \"school\":\"Universidad de Tokio\",\n" +
      "     \"degree\":\"Farmaceutica\",\n" +
      "     \"fieldOfStudy\":\"Pandemias\",\n" +
      "     \"startDate\":15319,\n" +
      "     \"endDate\":18687,\n" +
      "     \"grade\":9.4,\n" +
      "     \"address\":{\n" +
      "\"lat\":35.7,\n" +
      "\"lng\":139.7,\n" +
      "\"formatted\":\"7 Chome-3-1 Hongo, Bunkyo City, Tokyo 113-8654, Japón\"\n" +
      "     },\n" +
      "     \"description\":\"Estudiante de farmaceutica de la Universidad de Tokio\"\n" +
      "  }\n" +
      "       ]\n" +
      "    },\n" +
      "    \"likes\":[\n" +
      "       \"61445159784bca6ef764c6df\",\n" +
      "       \"61445159784bca6ef764c6df\"\n" +
      "    ],\n" +
      "    \"createdAt\":1620345600000\n" +
      " },\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"content\":\"Pues yo pense que no ganarían estos. No me quedo conforme.\",\n" +
      "    \"authorMember\":{\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"state\":\"ACCEPTED\",\n" +
      "       \"name\":\"Cristina\",\n" +
      "       \"lastname\":\"Valdemoro\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":42.2389707,\n" +
      "  \"lng\":-8.7245708,\n" +
      "  \"formatted\":\"Praza de Compostela, 4A, 36201 Vigo, Pontevedra, España\"\n" +
      "       },\n" +
      "       \"email\":\"cristina@hotmail.es\",\n" +
      "       \"about\":\"Embajadora de Unicef en España\",\n" +
      "       \"image\":null,\n" +
      "       \"fcmTokens\":[\n" +
      "  {\n" +
      "     \"tokenId\":\"fcmToken2\",\n" +
      "     \"device\":\"COMPUTER\",\n" +
      "     \"timestamp\":1630918457848\n" +
      "  },\n" +
      "  {\n" +
      "     \"tokenId\":\"fcmToken3\",\n" +
      "     \"device\":\"IPAD\",\n" +
      "     \"timestamp\":1630918457848\n" +
      "  },\n" +
      "  {\n" +
      "     \"tokenId\":\"fcmToken4\",\n" +
      "     \"device\":\"LAPTOP\",\n" +
      "     \"timestamp\":1631089955516\n" +
      "  }\n" +
      "       ],\n" +
      "       \"socialNetworks\":[\n" +
      "  \"www.twitter.com/Cristina\",\n" +
      "  \"www.linkedin.com/Cristina\"\n" +
      "       ],\n" +
      "       \"experiences\":[\n" +
      "  {\n" +
      "     \"id\":\"61445159784bca6ef764c6df\",\n" +
      "     \"title\":\"Voluntariado de Unicef en Colombia\",\n" +
      "     \"type\":\"WORK_AND_SERVICE_CONTRACT\",\n" +
      "     \"company\":\"Unicef\",\n" +
      "     \"address\":{\n" +
      "\"lat\":4.6,\n" +
      "\"lng\":-74.06,\n" +
      "\"formatted\":\"Cl. 72 ## 10-71 piso 11, Bogotá, Colombia\"\n" +
      "     },\n" +
      "     \"startDate\":10957,\n" +
      "     \"endDate\":11707,\n" +
      "     \"description\":\"Voluntariado para repartir comida a las familias de colombia y realizar apoyo al feminismo\"\n" +
      "  }\n" +
      "       ],\n" +
      "       \"educations\":[\n" +
      "  {\n" +
      "     \"id\":\"61445159784bca6ef764c6df\",\n" +
      "     \"school\":\"Universidad de Barcelona\",\n" +
      "     \"degree\":\"Recursos Humanos y Relaciones Laborales\",\n" +
      "     \"fieldOfStudy\":\"Coaching a empresas\",\n" +
      "     \"startDate\":15319,\n" +
      "     \"endDate\":18687,\n" +
      "     \"grade\":5.5,\n" +
      "     \"address\":{\n" +
      "\"lat\":39.9,\n" +
      "\"lng\":-4.5,\n" +
      "\"formatted\":\"Gran Via de les Corts Catalanes, 585, 08007 Barcelona\"\n" +
      "     },\n" +
      "     \"description\":\"Estudios realizados en la Universidad de Barcelona\"\n" +
      "  }\n" +
      "       ]\n" +
      "    },\n" +
      "    \"likes\":[\n" +
      "       \"61445159784bca6ef764c6df\",\n" +
      "       \"61445159784bca6ef764c6df\"\n" +
      "    ],\n" +
      "    \"createdAt\":1620345600000\n" +
      " }\n" +
      "      ],\n" +
      "      \"likes\":[\n" +
      " \"61445159784bca6ef764c6df\",\n" +
      " \"61445159784bca6ef764c6df\"\n" +
      "      ],\n" +
      "      \"ownerMember\":{\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"PENDING\",\n" +
      " \"name\":\"Roberto\",\n" +
      " \"lastname\":\"Torres\",\n" +
      " \"address\":{\n" +
      "    \"lat\":28.4867273,\n" +
      "    \"lng\":-16.3172722,\n" +
      "    \"formatted\":\"C. el Juego, 7, 38204 San Cristóbal de La Laguna, Santa Cruz de Tenerife, España\"\n" +
      " },\n" +
      " \"city\":\"La Laguna\",\n" +
      " \"country\":\"España\",\n" +
      " \"email\":\"roberto@outlook.es\",\n" +
      " \"about\":\"Informatico trabajador del equipo de ciberseguridad\",\n" +
      " \"image\":null,\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken2\",\n" +
      "       \"device\":\"COMPUTER\",\n" +
      "       \"timestamp\":1630918457848\n" +
      "    }\n" +
      " ],\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.twitter.com/Roberto\",\n" +
      "    \"www.linkedin.com/Roberto\"\n" +
      " ],\n" +
      " \"experiences\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Ingenierio informático realizando trabajos de ciberseguridad\",\n" +
      "       \"type\":\"FULL_TIME\",\n" +
      "       \"company\":\"Movistar\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":27.8,\n" +
      "  \"lng\":-15.5,\n" +
      "  \"formatted\":\"C. Macho Sidro, 6, 35250 Ingenio, Las Palmas\"\n" +
      "       },\n" +
      "       \"startDate\":17941,\n" +
      "       \"endDate\":18687,\n" +
      "       \"description\":\"Ejerciendo trabajo de ingeniero de software en Movistar\"\n" +
      "    }\n" +
      " ],\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de la Laguna\",\n" +
      "       \"degree\":\"Ingeniería informática\",\n" +
      "       \"fieldOfStudy\":\"Ciberseguridad\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18687,\n" +
      "       \"grade\":7.8,\n" +
      "       \"address\":{\n" +
      "  \"lat\":28.5,\n" +
      "  \"lng\":-16.3,\n" +
      "  \"formatted\":\"Calle Padre Herrera, s/n, 38200 San Cristóbal de La Laguna, Santa Cruz de Tenerife\"\n" +
      "       },\n" +
      "       \"description\":\"Estudiante de la Universidad de La Laguna, en la facultad de ingeniería informática\"\n" +
      "    },\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de Cataluña\",\n" +
      "       \"degree\":\"Master en Ciberseguridad\",\n" +
      "       \"fieldOfStudy\":\"Encriptado\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18687,\n" +
      "       \"grade\":9,\n" +
      "       \"address\":{\n" +
      "  \"lat\":39.9,\n" +
      "  \"lng\":-4.5,\n" +
      "  \"formatted\":\"Gran Via de les Corts Catalanes, 585, 08007 Barcelona\"\n" +
      "       },\n" +
      "       \"description\":\"Master realizado en la Universidad de Cataluña despues de los estudios universitarios\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      \"createdAt\":1620086400000\n" +
      "   }\n" +
      "]"
  }

  public static wall_post_upload_post: EndpointTemplate = {
    name: "wall-posts/upload",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "File file = new File(\"C:\\Users\\saulo\\OneDrive\\Imágenes\\evento.jpg\");\n" +
      "communityApi.wallPosts().upload(app, file).getResponse();",
    response: "\nhttps://localhost/drive/posts/files/61eaffcdad2bd12319fd4eba.png"
  }

  public static actors_get: EndpointTemplate = {
    name: "actors",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<Actor> actors = communityApi.actors().all(app).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(actors);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"type\":\"EXPERT\",\n" +
      "      \"state\":\"ACCEPTED\",\n" +
      "      \"ownerMember\":{\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACCEPTED\",\n" +
      " \"name\":\"Iñigo\",\n" +
      " \"lastname\":\"Aramburu\",\n" +
      " \"address\":{\n" +
      "    \"lat\":43.3038929,\n" +
      "    \"lng\":-1.9604012,\n" +
      "    \"formatted\":\"Wroclaw, 1, 20014 San Sebastián, Gipuzkoa, España\"\n" +
      " },\n" +
      " \"email\":\"iaramburu@moonshot.ceo\",\n" +
      " \"about\":\"Experto en Ingeniería del Software.\",\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken1\",\n" +
      "       \"device\":\"SMARTPHONE\",\n" +
      "       \"timestamp\":1622975724952\n" +
      "    }\n" +
      " ],\n" +
      " \"image\":null,\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.twitter.com/Iñigo\",\n" +
      "    \"www.facebook.com/Iñigo\"\n" +
      " ],\n" +
      " \"experiences\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Back-end developer en Moonshot Innovation\",\n" +
      "       \"type\":\"FULL_TIME\",\n" +
      "       \"company\":\"Moonshot Innovation\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":90.5,\n" +
      "  \"lng\":10.5,\n" +
      "  \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "       },\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18718,\n" +
      "       \"description\":\"Scrum manager en Moonshot Innovation, trabajando en el equipo de back-end\"\n" +
      "    }\n" +
      " ],\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad del País Vasco\",\n" +
      "       \"degree\":\"Ingeniería informática\",\n" +
      "       \"fieldOfStudy\":\"Ingeniería de software\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18687,\n" +
      "       \"grade\":8,\n" +
      "       \"address\":{\n" +
      "  \"lat\":4.5,\n" +
      "  \"lng\":110.5,\n" +
      "  \"formatted\":\"Carr. More, 17-13, 48014 Bilbao, Vizcaya\"\n" +
      "       },\n" +
      "       \"description\":\"Estudios universitarios realizados en la Universidad del País Vasco\"\n" +
      "    },\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad del País Vasco\",\n" +
      "       \"degree\":\"Master en desarrollo web\",\n" +
      "       \"fieldOfStudy\":\"Desarrollo web\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18687,\n" +
      "       \"grade\":9.3,\n" +
      "       \"address\":{\n" +
      "  \"lat\":4.5,\n" +
      "  \"lng\":110.5,\n" +
      "  \"formatted\":\"Carr. More, 17-13, 48014 Bilbao, Vizcaya\"\n" +
      "       },\n" +
      "       \"description\":\"Master realizado en la Universidad del País Vasco para ser full stack developer\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      \"name\":\"Iñigo\",\n" +
      "      \"lastname\":\"Aramburu\",\n" +
      "      \"city\":\"Donostia - San Sebastián\",\n" +
      "      \"country\":\"España\",\n" +
      "      \"description\":\"Experto en Ingeniería del Software.\",\n" +
      "      \"phone\":\"+34928000001\",\n" +
      "      \"web\":\"www.personalweb1.com\",\n" +
      "      \"email\":\"iaramburu@moonshot.ceo\",\n" +
      "      \"socialNetworks\":[\n" +
      " \"www.twitter.com/Iñigo\",\n" +
      " \"www.facebook.com/Iñigo\"\n" +
      "      ],\n" +
      "      \"media\":[\n" +
      " \"www.youtube.com/IñigoAramburu\"\n" +
      "      ],\n" +
      "      \"myFacet\":{\n" +
      " \"industries\":[\n" +
      "    \n" +
      " ],\n" +
      " \"businessModels\":[\n" +
      "    \n" +
      " ],\n" +
      " \"socialInnovations\":[\n" +
      "    \n" +
      " ],\n" +
      " \"deepTechs\":[\n" +
      "    \"TABLETS_AND_SMARTPHONES_APPS\",\n" +
      "    \"VIRTUAL_REALITY\",\n" +
      "    \"DEEP_LEARNING\",\n" +
      "    \"MACHINE_LEARNING\"\n" +
      " ]\n" +
      "      },\n" +
      "      \"questFacet\":{\n" +
      " \"industries\":[\n" +
      "    \"COMPUTER_AND_ELECTRONICS\"\n" +
      " ],\n" +
      " \"businessModels\":[\n" +
      "    \"TECHNOLOGY\"\n" +
      " ],\n" +
      " \"socialInnovations\":[\n" +
      "    \n" +
      " ],\n" +
      " \"deepTechs\":[\n" +
      "    \n" +
      " ]\n" +
      "      }\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"type\":\"MENTOR\",\n" +
      "      \"state\":\"ACCEPTED\",\n" +
      "      \"ownerMember\":{\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACCEPTED\",\n" +
      " \"name\":\"Jose Juan\",\n" +
      " \"lastname\":\"Hernández\",\n" +
      " \"address\":{\n" +
      "    \"lat\":28.113549,\n" +
      "    \"lng\":-15.4366296,\n" +
      "    \"formatted\":\"C. Ing. Ramírez Doreste, 14, 35011 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      " },\n" +
      " \"email\":\"josejuan@moonshot.ceo\",\n" +
      " \"about\":\"Profesor de Ingeniería de Software de la Universidad de Las Palmas de Gran Canaria\",\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken2\",\n" +
      "       \"device\":\"COMPUTER\",\n" +
      "       \"timestamp\":1630918457848\n" +
      "    }\n" +
      " ],\n" +
      " \"image\":null,\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.twitter.com/JoseJuan\",\n" +
      "    \"www.facebook.com/JoseJuan\"\n" +
      " ],\n" +
      " \"experiences\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Back-end developer en Moonshot Innovation\",\n" +
      "       \"type\":\"FULL_TIME\",\n" +
      "       \"company\":\"Moonshot Innovation\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":90.5,\n" +
      "  \"lng\":10.5,\n" +
      "  \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "       },\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18718,\n" +
      "       \"description\":\"Scrum manager en Moonshot Innovation, trabajando en el equipo de back-end\"\n" +
      "    },\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Profesor en la facultad de Ingenería informatica\",\n" +
      "       \"type\":\"OFFICIAL\",\n" +
      "       \"company\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":48.5,\n" +
      "  \"lng\":19.1,\n" +
      "  \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "       },\n" +
      "       \"startDate\":11422,\n" +
      "       \"endDate\":15319,\n" +
      "       \"description\":\"Profesor de la especialización de Ingeniería del Software\"\n" +
      "    }\n" +
      " ],\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "       \"degree\":\"Ingeniería en telecomunicaciones\",\n" +
      "       \"fieldOfStudy\":\"Big data\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18687,\n" +
      "       \"grade\":9,\n" +
      "       \"address\":{\n" +
      "  \"lat\":48.5,\n" +
      "  \"lng\":19.1,\n" +
      "  \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "       },\n" +
      "       \"description\":\"Estudios universitarios realizados en la Universidad de Las Palmas de Gran Canaria, con especialización en BigData\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      \"name\":\"Jose Juan\",\n" +
      "      \"lastname\":\"Hernández\",\n" +
      "      \"city\":\"Las Palmas\",\n" +
      "      \"country\":\"España\",\n" +
      "      \"email\":\"josejuan@moonshot.ceo\",\n" +
      "      \"description\":\"Profesor de Ingeniería de Software de la Universidad de Las Palmas de Gran Canaria\",\n" +
      "      \"phone\":\"+34928000002\",\n" +
      "      \"web\":\"www.personalweb2.com\",\n" +
      "      \"socialNetworks\":[\n" +
      " \"www.twitter.com/JoseJuan\",\n" +
      " \"www.facebook.com/JoseJuan\"\n" +
      "      ],\n" +
      "      \"media\":[\n" +
      " \"www.youtube.com/JoseJuanULPGC\",\n" +
      " \"www.vimeo.com/JoseJuanULPGC\"\n" +
      "      ],\n" +
      "      \"myFacet\":{\n" +
      " \"industries\":[\n" +
      "    \"EDUCATION\",\n" +
      "    \"INTERNET_OF_THINGS\"\n" +
      " ],\n" +
      " \"businessModels\":[\n" +
      "    \n" +
      " ],\n" +
      " \"socialInnovations\":[\n" +
      "    \n" +
      " ],\n" +
      " \"deepTechs\":[\n" +
      "    \"E_LEARNING\",\n" +
      "    \"CONVERSATIONAL_USER_INTERFACES\"\n" +
      " ]\n" +
      "      },\n" +
      "      \"questFacet\":{\n" +
      " \"industries\":[\n" +
      "    \n" +
      " ],\n" +
      " \"businessModels\":[\n" +
      "    \"TECHNOLOGY\"\n" +
      " ],\n" +
      " \"socialInnovations\":[\n" +
      "    \n" +
      " ],\n" +
      " \"deepTechs\":[\n" +
      "    \"VIRTUAL_PERSONAL_ASSISTANTS\",\n" +
      "    \"GESTURE_CONTROL_DEVICES\",\n" +
      "    \"SMART_HOME\"\n" +
      " ]\n" +
      "      }\n" +
      "   }\n" +
      "]"
  }

  public static actors_import_csv_post: EndpointTemplate = {
    name: "actors/import/csv",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "File file = new File(\"C:\\Users\\saulo\\Downloads\\test.csv\");\n" +
      "communityApi.actors().importCsv(app, file);",
    response: null
  }

  public static actors_by_name_and_state_get: EndpointTemplate = {
    name: "actors/by/name-and-state",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<Actor> actors = communityApi.actors().listByNameAndState(app, \"Iñigo\", State.ACCEPTED).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(actors);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "    {\n" +
      "\"id\": \"60accfec97acf93f5f69e05f\",\n" +
      "\"type\": \"EXPERT\",\n" +
      "\"state\": \"ACCEPTED\",\n" +
      "\"ownerMember\": {\n" +
      "    \"id\": \"60accfeb97acf93f5f69e05d\",\n" +
      "    \"state\": \"ACCEPTED\",\n" +
      "    \"name\": \"Iñigo\",\n" +
      "    \"lastname\": \"Aramburu\",\n" +
      "    \"address\": {\n" +
      "\"lat\": 43.3039298,\n" +
      "\"lng\": -1.959635,\n" +
      "\"formatted\": \"Wroclaw, 1, 20014 San Sebastián, Gipuzkoa, Spain\",\n" +
      "\"components\": [\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    }\n" +
      "]\n" +
      "    },\n" +
      "    \"email\": \"iaramburu@moonshot.ceo\",\n" +
      "    \"about\": \"Moonshot CTO\",\n" +
      "    \"image\": {\n" +
      "\"original\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60accfeb97acf93f5f69e05d/image/f5a27710-1f57-4c52-b256-3c35efd5bc19.jpg\",\n" +
      "\"thumbnail\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60accfeb97acf93f5f69e05d/image/353ac5c6-1ace-4180-933e-3b3d5a9a9f85.jpg\",\n" +
      "\"crop\": {\n" +
      "    \"x\": 63,\n" +
      "    \"y\": 42,\n" +
      "    \"width\": 210,\n" +
      "    \"height\": 210\n" +
      "}\n" +
      "    },\n" +
      "    \"fcmTokens\": null,\n" +
      "    \"socialNetworks\": [],\n" +
      "    \"experiences\": null,\n" +
      "    \"educations\": null\n" +
      "},\n" +
      "\"name\": \"Iñigo\",\n" +
      "\"city\": null,\n" +
      "\"country\": \"Spain\",\n" +
      "\"address\": null,\n" +
      "\"latitude\": null,\n" +
      "\"longitude\": null,\n" +
      "\"description\": \"Lorem ipsum...\",\n" +
      "\"phone\": null,\n" +
      "\"web\": null,\n" +
      "\"image\": {\n" +
      "    \"original\": \"/assets/img/default/actor.jpg\",\n" +
      "    \"thumbnail\": null,\n" +
      "    \"crop\": null\n" +
      "},\n" +
      "\"myFacet\": {\n" +
      "    \"industries\": null,\n" +
      "    \"businessModels\": null,\n" +
      "    \"socialInnovations\": null,\n" +
      "    \"deepTechs\": null\n" +
      "},\n" +
      "\"questFacet\": {\n" +
      "    \"industries\": null,\n" +
      "    \"businessModels\": null,\n" +
      "    \"socialInnovations\": null,\n" +
      "    \"deepTechs\": null\n" +
      "},\n" +
      "\"investment\": {\n" +
      "    \"stage\": null,\n" +
      "    \"stagesInvestments\": null,\n" +
      "    \"numberPastExist\": 0,\n" +
      "    \"trlStage\": null,\n" +
      "    \"numberCurrentInvestments\": 0,\n" +
      "    \"countriesInteres\": null\n" +
      "},\n" +
      "\"financial\": {\n" +
      "    \"stage\": null,\n" +
      "    \"seekedCapital\": 0,\n" +
      "    \"trlStage\": null,\n" +
      "    \"raisedCapital\": 0,\n" +
      "    \"totalFunding\": 0,\n" +
      "    \"premoneyValuation\": 0,\n" +
      "    \"fundingStage\": null,\n" +
      "    \"lastFunding\": null,\n" +
      "    \"numbersEmployees\": 0,\n" +
      "    \"currency\": null\n" +
      "},\n" +
      "\"socialNetworks\": [],\n" +
      "\"media\": null,\n" +
      "\"lastname\": \"Aramburu\",\n" +
      "\"email\": \"iaramburu@moonshot.ceo\"\n" +
      "    },\n" +
      "    {\n" +
      "\"id\": \"60ebe7a09b1ae06a0bb88678\",\n" +
      "\"type\": \"TALENT\",\n" +
      "\"state\": \"ACCEPTED\",\n" +
      "\"ownerMember\": {\n" +
      "    \"id\": \"60accfeb97acf93f5f69e05d\",\n" +
      "    \"state\": \"ACCEPTED\",\n" +
      "    \"name\": \"Iñigo\",\n" +
      "    \"lastname\": \"Aramburu\",\n" +
      "    \"address\": {\n" +
      "\"lat\": 43.3039298,\n" +
      "\"lng\": -1.959635,\n" +
      "\"formatted\": \"Wroclaw, 1, 20014 San Sebastián, Gipuzkoa, Spain\",\n" +
      "\"components\": [\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    }\n" +
      "]\n" +
      "    },\n" +
      "    \"email\": \"iaramburu@moonshot.ceo\",\n" +
      "    \"about\": \"Moonshot CTO\",\n" +
      "    \"image\": {\n" +
      "\"original\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60accfeb97acf93f5f69e05d/image/f5a27710-1f57-4c52-b256-3c35efd5bc19.jpg\",\n" +
      "\"thumbnail\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60accfeb97acf93f5f69e05d/image/353ac5c6-1ace-4180-933e-3b3d5a9a9f85.jpg\",\n" +
      "\"crop\": {\n" +
      "    \"x\": 63,\n" +
      "    \"y\": 42,\n" +
      "    \"width\": 210,\n" +
      "    \"height\": 210\n" +
      "}\n" +
      "    },\n" +
      "    \"fcmTokens\": null,\n" +
      "    \"socialNetworks\": [],\n" +
      "    \"experiences\": null,\n" +
      "    \"educations\": null\n" +
      "},\n" +
      "\"name\": \"Iñigo\",\n" +
      "\"city\": \"Gipuzkoa\",\n" +
      "\"country\": \"Spain\",\n" +
      "\"address\": \"Plaza Wroclaw\",\n" +
      "\"latitude\": 43.3035576,\n" +
      "\"longitude\": -1.9590747,\n" +
      "\"description\": \"asdfa\",\n" +
      "\"phone\": null,\n" +
      "\"web\": null,\n" +
      "\"image\": {\n" +
      "    \"original\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60accfeb97acf93f5f69e05d/image/f5a27710-1f57-4c52-b256-3c35efd5bc19.jpg\",\n" +
      "    \"thumbnail\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60accfeb97acf93f5f69e05d/image/58568682-5545-4dfa-ad9c-8a2541ff05d6.jpg\",\n" +
      "    \"crop\": {\n" +
      "\"x\": 102,\n" +
      "\"y\": 64,\n" +
      "\"width\": 397,\n" +
      "\"height\": 397\n" +
      "    }\n" +
      "},\n" +
      "\"myFacet\": null,\n" +
      "\"questFacet\": null,\n" +
      "\"investment\": null,\n" +
      "\"financial\": null,\n" +
      "\"socialNetworks\": [],\n" +
      "\"media\": null,\n" +
      "\"lastname\": null,\n" +
      "\"email\": \"iaramburu@moonshot.ceo\"\n" +
      "    }\n" +
      "]"
  }

  public static actors_by_type_get: EndpointTemplate = {
    name: "actors/by/types",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<String> types = new ArrayList<>();\n" +
      "types.add(\"COMPANY\");\n" +
      "types.add(\"TALENT\");\n" +
      "types.add(\"STARTUP\");\n" +
      "List<Actor> actors = communityApi.actors().listByTypes(app, types).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(actors);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "    {\n" +
      "\"id\": \"60bca44d4eacd81a28cff65c\",\n" +
      "\"type\": \"STARTUP\",\n" +
      "\"state\": \"ACCEPTED\",\n" +
      "\"ownerMember\": {\n" +
      "    \"id\": \"60bca44d4eacd81a28cff65b\",\n" +
      "    \"state\": \"ACCEPTED\",\n" +
      "    \"name\": \"David\",\n" +
      "    \"lastname\": \"Suriol\",\n" +
      "    \"address\": {\n" +
      "\"lat\": null,\n" +
      "\"lng\": null,\n" +
      "\"formatted\": \"Madrid, Spain\",\n" +
      "\"components\": null\n" +
      "    },\n" +
      "    \"email\": \"dsuriol@gmail.com\",\n" +
      "    \"about\": \"US president\",\n" +
      "    \"image\": {\n" +
      "\"original\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60acae8e2f799d228a4d4a86/image/aeb5d299-1eb0-47ce-bf15-dfc3e25250f4.png\",\n" +
      "\"thumbnail\": null,\n" +
      "\"crop\": null\n" +
      "    },\n" +
      "    \"fcmTokens\": null,\n" +
      "    \"socialNetworks\": [],\n" +
      "    \"experiences\": null,\n" +
      "    \"educations\": null\n" +
      "},\n" +
      "\"name\": \"Google Maps\",\n" +
      "\"city\": \"Santa Clara County\",\n" +
      "\"country\": \"United States\",\n" +
      "\"address\": null,\n" +
      "\"latitude\": 40.4167754,\n" +
      "\"longitude\": -3.7037902,\n" +
      "\"description\": \"information company \",\n" +
      "\"phone\": null,\n" +
      "\"web\": \"www.google.com\",\n" +
      "\"image\": {\n" +
      "    \"original\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60acae8e2f799d228a4d4a86/image/6bd7ad4a-3557-4b23-8762-f4abef2f7720.png\",\n" +
      "    \"thumbnail\": null,\n" +
      "    \"crop\": null\n" +
      "},\n" +
      "\"myFacet\": {\n" +
      "    \"industries\": null,\n" +
      "    \"businessModels\": [\n" +
      "\"SAAS\",\n" +
      "\"SERVICES\"\n" +
      "    ],\n" +
      "    \"socialInnovations\": null,\n" +
      "    \"deepTechs\": [\n" +
      "\"BRAIN_COMPUTER_INTERFACE\",\n" +
      "\"COGNITIVE_EXPERT_ADVISORS\",\n" +
      "\"DEEP_LEARNING\",\n" +
      "\"EDGE_INTELLIGENCE\",\n" +
      "\"ENTERPRISE_TAXONOMY_AND_ONTOLOGY_MANAGEMENT\",\n" +
      "\"GENERAL_PURPOSE_MACHINE_INTELLIGENCE\",\n" +
      "\"HUMAN_COMPUTER_INTERACTION\",\n" +
      "\"MACHINE_LEARNING\",\n" +
      "\"NATURAL_LANGUAGE_QUESTION_ANSWERING\",\n" +
      "\"NEURAL_NETWORKS_AND_SEMANTIC_SEARCH_ENGINES\",\n" +
      "\"QUANTUM_COMPUTING\",\n" +
      "\"SENTIMENTAL_ANALYSIS\",\n" +
      "\"CONVOLUTIONAL_NEURAL_NETWORK\",\n" +
      "\"COMPUTER_VISION\"\n" +
      "    ]\n" +
      "},\n" +
      "\"questFacet\": {\n" +
      "    \"industries\": [\n" +
      "\"COMPUTER_AND_ELECTRONICS\",\n" +
      "\"INFORMATION_TECHNOLOGY\"\n" +
      "    ],\n" +
      "    \"businessModels\": null,\n" +
      "    \"socialInnovations\": null,\n" +
      "    \"deepTechs\": null\n" +
      "},\n" +
      "\"investment\": {\n" +
      "    \"stage\": null,\n" +
      "    \"stagesInvestments\": null,\n" +
      "    \"numberPastExist\": 0,\n" +
      "    \"trlStage\": null,\n" +
      "    \"numberCurrentInvestments\": 0,\n" +
      "    \"countriesInteres\": null\n" +
      "},\n" +
      "\"financial\": {\n" +
      "    \"stage\": null,\n" +
      "    \"seekedCapital\": 0,\n" +
      "    \"trlStage\": null,\n" +
      "    \"raisedCapital\": 0,\n" +
      "    \"totalFunding\": 0,\n" +
      "    \"premoneyValuation\": 0,\n" +
      "    \"fundingStage\": null,\n" +
      "    \"lastFunding\": null,\n" +
      "    \"numbersEmployees\": 0,\n" +
      "    \"currency\": null\n" +
      "},\n" +
      "\"socialNetworks\": [],\n" +
      "\"media\": null,\n" +
      "\"members\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"id\": \"60d6095a71ca73649a03239a\",\n" +
      "\"type\": \"STARTUP\",\n" +
      "\"state\": \"ACCEPTED\",\n" +
      "\"ownerMember\": {\n" +
      "    \"id\": \"60d6095a71ca73649a03239b\",\n" +
      "    \"state\": \"ACCEPTED\",\n" +
      "    \"name\": \"Borja\",\n" +
      "    \"lastname\": \"Álvarez\",\n" +
      "    \"address\": {\n" +
      "\"lat\": null,\n" +
      "\"lng\": null,\n" +
      "\"formatted\": \"Las Palmas de G.C., Spain\",\n" +
      "\"components\": null\n" +
      "    },\n" +
      "    \"email\": \"borja.gallifrey@gmail.com\",\n" +
      "    \"about\": \"Estudiante de ingeniería informática de la ULPGC.\",\n" +
      "    \"image\": {\n" +
      "\"original\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60d6095a71ca73649a03239b/image/7add0635-42c7-40a8-8e8f-5a5c4161e1e2.jpg\",\n" +
      "\"thumbnail\": null,\n" +
      "\"crop\": null\n" +
      "    },\n" +
      "    \"fcmTokens\": null,\n" +
      "    \"socialNetworks\": [],\n" +
      "    \"experiences\": null,\n" +
      "    \"educations\": null\n" +
      "},\n" +
      "\"name\": \"GamingVR\",\n" +
      "\"city\": \"Las Palmas de G.C.\",\n" +
      "\"country\": \"ES\",\n" +
      "\"address\": \"C/ Triana 12\",\n" +
      "\"latitude\": null,\n" +
      "\"longitude\": null,\n" +
      "\"description\": \"Desarrollamos tecnologías  relacionadas con la realidad virtual aplicadas al mundo gaming.\",\n" +
      "\"phone\": null,\n" +
      "\"web\": \"www.gamingVR.com\",\n" +
      "\"image\": {\n" +
      "    \"original\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/null/image/868ceb01-741e-4439-bed7-32fc13e617eb.jpg\",\n" +
      "    \"thumbnail\": null,\n" +
      "    \"crop\": null\n" +
      "},\n" +
      "\"myFacet\": {\n" +
      "    \"industries\": null,\n" +
      "    \"businessModels\": [\n" +
      "\"TECHNOLOGY\"\n" +
      "    ],\n" +
      "    \"socialInnovations\": null,\n" +
      "    \"deepTechs\": [\n" +
      "\"HUMAN_COMPUTER_INTERACTION\",\n" +
      "\"COMPUTER_VISION\",\n" +
      "\"AUGMENTED_REALITY\",\n" +
      "\"VIRTUAL_REALITY\"\n" +
      "    ]\n" +
      "},\n" +
      "\"questFacet\": {\n" +
      "    \"industries\": [\n" +
      "\"COMPUTER_AND_ELECTRONICS\"\n" +
      "    ],\n" +
      "    \"businessModels\": null,\n" +
      "    \"socialInnovations\": null,\n" +
      "    \"deepTechs\": null\n" +
      "},\n" +
      "\"investment\": null,\n" +
      "\"financial\": {\n" +
      "    \"stage\": null,\n" +
      "    \"seekedCapital\": 0,\n" +
      "    \"trlStage\": null,\n" +
      "    \"raisedCapital\": 0,\n" +
      "    \"totalFunding\": 0,\n" +
      "    \"premoneyValuation\": 0,\n" +
      "    \"fundingStage\": null,\n" +
      "    \"lastFunding\": null,\n" +
      "    \"numbersEmployees\": 0,\n" +
      "    \"currency\": null\n" +
      "},\n" +
      "\"socialNetworks\": [],\n" +
      "\"media\": null,\n" +
      "\"members\": null\n" +
      "    }\n" +
      "]"
  }

  public static actors_by_state_get: EndpointTemplate = {
    name: "actors/by/state",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<Actor> actors = communityApi.actors().listByState(app, State.REJECTED).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(actors);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"type\":\"HUB\",\n" +
      "      \"state\":\"REJECTED\",\n" +
      "      \"ownerMember\":{\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"REJECTED\",\n" +
      " \"name\":\"Nestor\",\n" +
      " \"lastname\":\"Rodriguez\",\n" +
      " \"address\":{\n" +
      "    \"lat\":28.46383,\n" +
      "    \"lng\":-16.2531561,\n" +
      "    \"formatted\":\"Av. de San Sebastián, 60, 38005 Santa Cruz de Tenerife, España\"\n" +
      " },\n" +
      " \"email\":\"nestor@gmail.com\",\n" +
      " \"about\":\"Informatico responsable del equipo de ciberseguridad\",\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken3\",\n" +
      "       \"device\":\"IPAD\",\n" +
      "       \"timestamp\":1630918457848\n" +
      "    }\n" +
      " ],\n" +
      " \"image\":null,\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.twitter.com/Nestor\",\n" +
      "    \"www.linkedin.com/Nestor\"\n" +
      " ],\n" +
      " \"experiences\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Ingenierio informático realizando trabajos de ciberseguridad\",\n" +
      "       \"type\":\"FULL_TIME\",\n" +
      "       \"company\":\"Movistar\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":27.8,\n" +
      "  \"lng\":-15.5,\n" +
      "  \"formatted\":\"C. Macho Sidro, 6, 35250 Ingenio, Las Palmas\"\n" +
      "       },\n" +
      "       \"startDate\":17941,\n" +
      "       \"endDate\":18687,\n" +
      "       \"description\":\"Ejerciendo trabajo de ingeniero de software en Movistar\"\n" +
      "    }\n" +
      " ],\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de la Laguna\",\n" +
      "       \"degree\":\"Ingeniería informática\",\n" +
      "       \"fieldOfStudy\":\"Ciberseguridad\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18687,\n" +
      "       \"grade\":7.8,\n" +
      "       \"address\":{\n" +
      "  \"lat\":28.5,\n" +
      "  \"lng\":-16.3,\n" +
      "  \"formatted\":\"Calle Padre Herrera, s/n, 38200 San Cristóbal de La Laguna, Santa Cruz de Tenerife\"\n" +
      "       },\n" +
      "       \"description\":\"Estudiante de la Universidad de La Laguna, en la facultad de ingeniería informática\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      \"name\":\"Canarias Seguridad De La Informacion\",\n" +
      "      \"address\":\"Santa Cruz, Tenerife, 24\",\n" +
      "      \"city\":\"Tenerife\",\n" +
      "      \"country\":\"España\",\n" +
      "      \"description\":\"Pyme creada por un grupo de amigos para la seguridad de la informacion\",\n" +
      "      \"phone\":\"+34928776644\",\n" +
      "      \"web\":\"www.seguridadCanaria.com\",\n" +
      "      \"socialNetworks\":[\n" +
      " \"www.twitter.com\"\n" +
      "      ],\n" +
      "      \"media\":[\n" +
      " \n" +
      "      ],\n" +
      "      \"members\":[\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACCEPTED\",\n" +
      "    \"name\":\"Fernando\",\n" +
      "    \"lastname\":\"Oliveiro\",\n" +
      "    \"address\":{\n" +
      "       \"lat\":-22.9082975,\n" +
      "       \"lng\":-43.177856,\n" +
      "       \"formatted\":\"Av. Rio Branco, 193-191 - Centro, Rio de Janeiro - RJ, 20040-008, Brazil\"\n" +
      "    },\n" +
      "    \"email\":\"fernando@hotmail.com\",\n" +
      "    \"about\":\"Profesor doctorado de la Universidad de Hardvard. Actualmente impartiendo asignaturas de matematica basica\",\n" +
      "    \"image\":null,\n" +
      "    \"fcmTokens\":[\n" +
      "       {\n" +
      "  \"tokenId\":\"fcmToken4\",\n" +
      "  \"device\":\"LAPTOP\",\n" +
      "  \"timestamp\":1631089955516\n" +
      "       }\n" +
      "    ],\n" +
      "    \"socialNetworks\":[\n" +
      "       \"www.twitter.com/Oliveiro\",\n" +
      "       \"www.linkedin.com/Oliveiro\",\n" +
      "       \"www.google.com/Oliveiro\"\n" +
      "    ],\n" +
      "    \"experiences\":[\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"title\":\"Profesor en la Universidad de Hardvard\",\n" +
      "  \"type\":\"OFFICIAL\",\n" +
      "  \"company\":\"Universidad de Hardvard\",\n" +
      "  \"address\":{\n" +
      "     \"lat\":42.3,\n" +
      "     \"lng\":-71.1,\n" +
      "     \"formatted\":\"Cambridge, MA, Estados Unidos\"\n" +
      "  },\n" +
      "  \"startDate\":14156,\n" +
      "  \"endDate\":18687,\n" +
      "  \"description\":\"Profesor de Ingenieria Informática en la universidad de Hardvard\"\n" +
      "       },\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"title\":\"Investigador a tiempo parcial para la universidad de Hardvard\",\n" +
      "  \"type\":\"PART_TIME\",\n" +
      "  \"company\":\"Universidad de Hardvard\",\n" +
      "  \"address\":{\n" +
      "     \"lat\":42.3,\n" +
      "     \"lng\":-71.1,\n" +
      "     \"formatted\":\"Cambridge, MA, Estados Unidos\"\n" +
      "  },\n" +
      "  \"startDate\":15319,\n" +
      "  \"endDate\":null,\n" +
      "  \"description\":\"Realizando trabajos de investigación en el área de los ordenadores cuánticos\"\n" +
      "       }\n" +
      "    ],\n" +
      "    \"educations\":[\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"school\":\"Universidad de Brasil\",\n" +
      "  \"degree\":\"Matemáticas\",\n" +
      "  \"fieldOfStudy\":\"Matemáticas computacionales\",\n" +
      "  \"startDate\":15319,\n" +
      "  \"endDate\":18687,\n" +
      "  \"grade\":7.2,\n" +
      "  \"address\":{\n" +
      "     \"lat\":-10.1,\n" +
      "     \"lng\":-84.4,\n" +
      "     \"formatted\":\"UnB - Brasilia, Federal District, 70910-900, Brasil\"\n" +
      "  },\n" +
      "  \"description\":\"Estudiante de la Universidad de Brasil, especializado en las matemáticas computacionales\"\n" +
      "       }\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"PENDING\",\n" +
      "    \"name\":\"Roberto\",\n" +
      "    \"lastname\":\"Torres\",\n" +
      "    \"address\":{\n" +
      "       \"lat\":28.4867273,\n" +
      "       \"lng\":-16.3172722,\n" +
      "       \"formatted\":\"C. el Juego, 7, 38204 San Cristóbal de La Laguna, Santa Cruz de Tenerife, España\"\n" +
      "    },\n" +
      "    \"email\":\"roberto@outlook.es\",\n" +
      "    \"about\":\"Informatico trabajador del equipo de ciberseguridad\",\n" +
      "    \"fcmTokens\":[\n" +
      "       {\n" +
      "  \"tokenId\":\"fcmToken2\",\n" +
      "  \"device\":\"COMPUTER\",\n" +
      "  \"timestamp\":1630918457848\n" +
      "       }\n" +
      "    ],\n" +
      "    \"image\":null,\n" +
      "    \"socialNetworks\":[\n" +
      "       \"www.twitter.com/Roberto\",\n" +
      "       \"www.linkedin.com/Roberto\"\n" +
      "    ],\n" +
      "    \"experiences\":[\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"title\":\"Ingenierio informático realizando trabajos de ciberseguridad\",\n" +
      "  \"type\":\"FULL_TIME\",\n" +
      "  \"company\":\"Movistar\",\n" +
      "  \"address\":{\n" +
      "     \"lat\":27.8,\n" +
      "     \"lng\":-15.5,\n" +
      "     \"formatted\":\"C. Macho Sidro, 6, 35250 Ingenio, Las Palmas\"\n" +
      "  },\n" +
      "  \"startDate\":17941,\n" +
      "  \"endDate\":18687,\n" +
      "  \"description\":\"Ejerciendo trabajo de ingeniero de software en Movistar\"\n" +
      "       }\n" +
      "    ],\n" +
      "    \"educations\":[\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"school\":\"Universidad de la Laguna\",\n" +
      "  \"degree\":\"Ingeniería informática\",\n" +
      "  \"fieldOfStudy\":\"Ciberseguridad\",\n" +
      "  \"startDate\":15319,\n" +
      "  \"endDate\":18687,\n" +
      "  \"grade\":7.8,\n" +
      "  \"address\":{\n" +
      "     \"lat\":28.5,\n" +
      "     \"lng\":-16.3,\n" +
      "     \"formatted\":\"Calle Padre Herrera, s/n, 38200 San Cristóbal de La Laguna, Santa Cruz de Tenerife\"\n" +
      "  },\n" +
      "  \"description\":\"Estudiante de la Universidad de La Laguna, en la facultad de ingeniería informática\"\n" +
      "       },\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"school\":\"Universidad de Cataluña\",\n" +
      "  \"degree\":\"Master en Ciberseguridad\",\n" +
      "  \"fieldOfStudy\":\"Encriptado\",\n" +
      "  \"startDate\":15319,\n" +
      "  \"endDate\":18687,\n" +
      "  \"grade\":9,\n" +
      "  \"address\":{\n" +
      "     \"lat\":39.9,\n" +
      "     \"lng\":-4.5,\n" +
      "     \"formatted\":\"Gran Via de les Corts Catalanes, 585, 08007 Barcelona\"\n" +
      "  },\n" +
      "  \"description\":\"Master realizado en la Universidad de Cataluña despues de los estudios universitarios\"\n" +
      "       }\n" +
      "    ]\n" +
      " }\n" +
      "      ],\n" +
      "      \"myFacet\":{\n" +
      " \"industries\":[\n" +
      "    \"INFORMATION_TECHNOLOGY\"\n" +
      " ],\n" +
      " \"businessModels\":[\n" +
      "    \"TECHNOLOGY\"\n" +
      " ],\n" +
      " \"socialInnovations\":[\n" +
      "    \n" +
      " ],\n" +
      " \"deepTechs\":[\n" +
      "    \"CREDENTIAL_MANAGEMENT\",\n" +
      "    \"DEVICE_AUTHENTICATION\",\n" +
      "    \"DECEPTION_SECURITY\",\n" +
      "    \"CYBER_RISK_MANAGEMENT\",\n" +
      "    \"MOBILITY\"\n" +
      " ]\n" +
      "      },\n" +
      "      \"questFacet\":{\n" +
      " \"industries\":[\n" +
      "    \n" +
      " ],\n" +
      " \"businessModels\":[\n" +
      "    \"TECHNOLOGY\"\n" +
      " ],\n" +
      " \"socialInnovations\":[\n" +
      "    \n" +
      " ],\n" +
      " \"deepTechs\":[\n" +
      "    \"CLOUD_COMPUTING\",\n" +
      "    \"DATA_ANALYTICS\"\n" +
      " ]\n" +
      "      },\n" +
      "      \"investment\":{\n" +
      " \"stage\":\"INITIAL_INTEREST\",\n" +
      " \"stagesInvestments\":\"Growth Stage\",\n" +
      " \"numberPastExist\":2,\n" +
      " \"trlStage\":\"SYSTEM_PROTOTYPE_DEMONSTRATION_IN_OPERATIONAL_ENVIRONMENT\",\n" +
      " \"numberCurrentInvestments\":1,\n" +
      " \"countriesInteres\":[\n" +
      "    \"Spain\",\n" +
      "    \"Germany\"\n" +
      " ]\n" +
      "      },\n" +
      "      \"financial\":{\n" +
      " \"stage\":\"INITIAL_INTEREST\",\n" +
      " \"seekedCapital\":80000,\n" +
      " \"trlStage\":\"SYSTEM_PROTOTYPE_DEMONSTRATION_IN_OPERATIONAL_ENVIRONMENT\",\n" +
      " \"raisedCapital\":79000,\n" +
      " \"totalFunding\":82000,\n" +
      " \"premoneyValuation\":75000,\n" +
      " \"fundingStage\":\"SERIES_C\",\n" +
      " \"lastFunding\":17956,\n" +
      " \"numbersEmployees\":19,\n" +
      " \"currency\":\"EUR\"\n" +
      "      },\n" +
      "      \"hubType\":\"ACCELERATOR\"\n" +
      "   }\n" +
      "]"
  }

  public static actors_by_member_get: EndpointTemplate = {
    name: "actors/by/member",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<Actor> actors = communityApi.actors().listByMember(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(actors);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "    {\n" +
      "\"id\": \"60accfec97acf93f5f69e05f\",\n" +
      "\"type\": \"EXPERT\",\n" +
      "\"state\": \"ACCEPTED\",\n" +
      "\"ownerMember\": {\n" +
      "    \"id\": \"60accfeb97acf93f5f69e05d\",\n" +
      "    \"state\": \"ACCEPTED\",\n" +
      "    \"name\": \"Iñigo\",\n" +
      "    \"lastname\": \"Aramburu\",\n" +
      "    \"address\": {\n" +
      "\"lat\": 43.3039298,\n" +
      "\"lng\": -1.959635,\n" +
      "\"formatted\": \"Wroclaw, 1, 20014 San Sebastián, Gipuzkoa, Spain\",\n" +
      "\"components\": [\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    }\n" +
      "]\n" +
      "    },\n" +
      "    \"email\": \"iaramburu@moonshot.ceo\",\n" +
      "    \"about\": \"Moonshot CTO\",\n" +
      "    \"image\": {\n" +
      "\"original\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60accfeb97acf93f5f69e05d/image/f5a27710-1f57-4c52-b256-3c35efd5bc19.jpg\",\n" +
      "\"thumbnail\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60accfeb97acf93f5f69e05d/image/353ac5c6-1ace-4180-933e-3b3d5a9a9f85.jpg\",\n" +
      "\"crop\": {\n" +
      "    \"x\": 63,\n" +
      "    \"y\": 42,\n" +
      "    \"width\": 210,\n" +
      "    \"height\": 210\n" +
      "}\n" +
      "    },\n" +
      "    \"fcmTokens\": null,\n" +
      "    \"socialNetworks\": [],\n" +
      "    \"experiences\": null,\n" +
      "    \"educations\": null\n" +
      "},\n" +
      "\"name\": \"Iñigo\",\n" +
      "\"city\": null,\n" +
      "\"country\": \"Spain\",\n" +
      "\"address\": null,\n" +
      "\"latitude\": null,\n" +
      "\"longitude\": null,\n" +
      "\"description\": \"Lorem ipsum...\",\n" +
      "\"phone\": null,\n" +
      "\"web\": null,\n" +
      "\"image\": {\n" +
      "    \"original\": \"/assets/img/default/actor.jpg\",\n" +
      "    \"thumbnail\": null,\n" +
      "    \"crop\": null\n" +
      "},\n" +
      "\"myFacet\": {\n" +
      "    \"industries\": null,\n" +
      "    \"businessModels\": null,\n" +
      "    \"socialInnovations\": null,\n" +
      "    \"deepTechs\": null\n" +
      "},\n" +
      "\"questFacet\": {\n" +
      "    \"industries\": null,\n" +
      "    \"businessModels\": null,\n" +
      "    \"socialInnovations\": null,\n" +
      "    \"deepTechs\": null\n" +
      "},\n" +
      "\"investment\": {\n" +
      "    \"stage\": null,\n" +
      "    \"stagesInvestments\": null,\n" +
      "    \"numberPastExist\": 0,\n" +
      "    \"trlStage\": null,\n" +
      "    \"numberCurrentInvestments\": 0,\n" +
      "    \"countriesInteres\": null\n" +
      "},\n" +
      "\"financial\": {\n" +
      "    \"stage\": null,\n" +
      "    \"seekedCapital\": 0,\n" +
      "    \"trlStage\": null,\n" +
      "    \"raisedCapital\": 0,\n" +
      "    \"totalFunding\": 0,\n" +
      "    \"premoneyValuation\": 0,\n" +
      "    \"fundingStage\": null,\n" +
      "    \"lastFunding\": null,\n" +
      "    \"numbersEmployees\": 0,\n" +
      "    \"currency\": null\n" +
      "},\n" +
      "\"socialNetworks\": [],\n" +
      "\"media\": null,\n" +
      "\"lastname\": \"Aramburu\",\n" +
      "\"email\": \"iaramburu@moonshot.ceo\"\n" +
      "    },\n" +
      "    {\n" +
      "\"id\": \"60ebe7a09b1ae06a0bb88678\",\n" +
      "\"type\": \"TALENT\",\n" +
      "\"state\": \"ACCEPTED\",\n" +
      "\"ownerMember\": {\n" +
      "    \"id\": \"60accfeb97acf93f5f69e05d\",\n" +
      "    \"state\": \"ACCEPTED\",\n" +
      "    \"name\": \"Iñigo\",\n" +
      "    \"lastname\": \"Aramburu\",\n" +
      "    \"address\": {\n" +
      "\"lat\": 43.3039298,\n" +
      "\"lng\": -1.959635,\n" +
      "\"formatted\": \"Wroclaw, 1, 20014 San Sebastián, Gipuzkoa, Spain\",\n" +
      "\"components\": [\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    }\n" +
      "]\n" +
      "    },\n" +
      "    \"email\": \"iaramburu@moonshot.ceo\",\n" +
      "    \"about\": \"Moonshot CTO\",\n" +
      "    \"image\": {\n" +
      "\"original\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60accfeb97acf93f5f69e05d/image/f5a27710-1f57-4c52-b256-3c35efd5bc19.jpg\",\n" +
      "\"thumbnail\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60accfeb97acf93f5f69e05d/image/353ac5c6-1ace-4180-933e-3b3d5a9a9f85.jpg\",\n" +
      "\"crop\": {\n" +
      "    \"x\": 63,\n" +
      "    \"y\": 42,\n" +
      "    \"width\": 210,\n" +
      "    \"height\": 210\n" +
      "}\n" +
      "    },\n" +
      "    \"fcmTokens\": null,\n" +
      "    \"socialNetworks\": [],\n" +
      "    \"experiences\": null,\n" +
      "    \"educations\": null\n" +
      "},\n" +
      "\"name\": \"Iñigo\",\n" +
      "\"city\": \"Gipuzkoa\",\n" +
      "\"country\": \"Spain\",\n" +
      "\"address\": \"Plaza Wroclaw\",\n" +
      "\"latitude\": 43.3035576,\n" +
      "\"longitude\": -1.9590747,\n" +
      "\"description\": \"asdfa\",\n" +
      "\"phone\": null,\n" +
      "\"web\": null,\n" +
      "\"image\": {\n" +
      "    \"original\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60accfeb97acf93f5f69e05d/image/f5a27710-1f57-4c52-b256-3c35efd5bc19.jpg\",\n" +
      "    \"thumbnail\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60accfeb97acf93f5f69e05d/image/58568682-5545-4dfa-ad9c-8a2541ff05d6.jpg\",\n" +
      "    \"crop\": {\n" +
      "\"x\": 102,\n" +
      "\"y\": 64,\n" +
      "\"width\": 397,\n" +
      "\"height\": 397\n" +
      "    }\n" +
      "},\n" +
      "\"myFacet\": null,\n" +
      "\"questFacet\": null,\n" +
      "\"investment\": null,\n" +
      "\"financial\": null,\n" +
      "\"socialNetworks\": [],\n" +
      "\"media\": null,\n" +
      "\"lastname\": null,\n" +
      "\"email\": \"iaramburu@moonshot.ceo\"\n" +
      "    },\n" +
      "    {\n" +
      "\"id\": \"60ebe92b9b1ae06a0bb8867b\",\n" +
      "\"type\": \"CLUSTER\",\n" +
      "\"state\": \"ACCEPTED\",\n" +
      "\"ownerMember\": {\n" +
      "    \"id\": \"60accfeb97acf93f5f69e05d\",\n" +
      "    \"state\": \"ACCEPTED\",\n" +
      "    \"name\": \"Iñigo\",\n" +
      "    \"lastname\": \"Aramburu\",\n" +
      "    \"address\": {\n" +
      "\"lat\": 43.3039298,\n" +
      "\"lng\": -1.959635,\n" +
      "\"formatted\": \"Wroclaw, 1, 20014 San Sebastián, Gipuzkoa, Spain\",\n" +
      "\"components\": [\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    }\n" +
      "]\n" +
      "    },\n" +
      "    \"email\": \"iaramburu@moonshot.ceo\",\n" +
      "    \"about\": \"Moonshot CTO\",\n" +
      "    \"image\": {\n" +
      "\"original\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60accfeb97acf93f5f69e05d/image/f5a27710-1f57-4c52-b256-3c35efd5bc19.jpg\",\n" +
      "\"thumbnail\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60accfeb97acf93f5f69e05d/image/353ac5c6-1ace-4180-933e-3b3d5a9a9f85.jpg\",\n" +
      "\"crop\": {\n" +
      "    \"x\": 63,\n" +
      "    \"y\": 42,\n" +
      "    \"width\": 210,\n" +
      "    \"height\": 210\n" +
      "}\n" +
      "    },\n" +
      "    \"fcmTokens\": null,\n" +
      "    \"socialNetworks\": [],\n" +
      "    \"experiences\": null,\n" +
      "    \"educations\": null\n" +
      "},\n" +
      "\"name\": \"ABC\",\n" +
      "\"city\": \"Gipuzkoa\",\n" +
      "\"country\": \"Spain\",\n" +
      "\"address\": \"Plaza Wroclaw\",\n" +
      "\"latitude\": 43.3035576,\n" +
      "\"longitude\": -1.9590747,\n" +
      "\"description\": \"123\",\n" +
      "\"phone\": null,\n" +
      "\"web\": null,\n" +
      "\"image\": {\n" +
      "    \"original\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/null/image/40423cd7-ca54-49bb-a6dc-873366d9224c.jpg\",\n" +
      "    \"thumbnail\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/null/image/40154b0c-6a46-4f3f-9c5c-e8105acc2988.jpg\",\n" +
      "    \"crop\": {\n" +
      "\"x\": 163,\n" +
      "\"y\": 163,\n" +
      "\"width\": 1078,\n" +
      "\"height\": 1078\n" +
      "    }\n" +
      "},\n" +
      "\"myFacet\": null,\n" +
      "\"questFacet\": null,\n" +
      "\"investment\": null,\n" +
      "\"financial\": null,\n" +
      "\"socialNetworks\": [],\n" +
      "\"media\": null,\n" +
      "\"members\": null,\n" +
      "\"clusterType\": \"DEEP_TECH_CLUSTER\"\n" +
      "    }\n" +
      "]"
  }

  public static actor_id_get: EndpointTemplate = {
    name: "actors/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "Actor actor = communityApi.actors().get(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(actor);\n" +
      "System.out.println(jsonObject);",
    response: "\n{\n" +
      "    \"type\": \"EXPERT\",\n" +
      "    \"id\": \"60accfec97acf93f5f69e05f\",\n" +
      "    \"type\": \"EXPERT\",\n" +
      "    \"state\": \"ACCEPTED\",\n" +
      "    \"ownerMember\": {\n" +
      "\"id\": \"60accfeb97acf93f5f69e05d\",\n" +
      "\"state\": \"ACCEPTED\",\n" +
      "\"name\": \"Iñigo\",\n" +
      "\"lastname\": \"Aramburu\",\n" +
      "\"address\": {\n" +
      "    \"lat\": 43.3039298,\n" +
      "    \"lng\": -1.959635,\n" +
      "    \"formatted\": \"Wroclaw, 1, 20014 San Sebastián, Gipuzkoa, Spain\",\n" +
      "    \"components\": [\n" +
      "{\n" +
      "    \"name\": null,\n" +
      "    \"shortName\": null,\n" +
      "    \"type\": null\n" +
      "},\n" +
      "{\n" +
      "    \"name\": null,\n" +
      "    \"shortName\": null,\n" +
      "    \"type\": null\n" +
      "},\n" +
      "{\n" +
      "    \"name\": null,\n" +
      "    \"shortName\": null,\n" +
      "    \"type\": null\n" +
      "},\n" +
      "{\n" +
      "    \"name\": null,\n" +
      "    \"shortName\": null,\n" +
      "    \"type\": null\n" +
      "},\n" +
      "{\n" +
      "    \"name\": null,\n" +
      "    \"shortName\": null,\n" +
      "    \"type\": null\n" +
      "},\n" +
      "{\n" +
      "    \"name\": null,\n" +
      "    \"shortName\": null,\n" +
      "    \"type\": null\n" +
      "},\n" +
      "{\n" +
      "    \"name\": null,\n" +
      "    \"shortName\": null,\n" +
      "    \"type\": null\n" +
      "}\n" +
      "    ]\n" +
      "},\n" +
      "\"email\": \"iaramburu@moonshot.ceo\",\n" +
      "\"about\": \"Moonshot CTO\",\n" +
      "\"image\": {\n" +
      "    \"original\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60accfeb97acf93f5f69e05d/image/f5a27710-1f57-4c52-b256-3c35efd5bc19.jpg\",\n" +
      "    \"thumbnail\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60accfeb97acf93f5f69e05d/image/353ac5c6-1ace-4180-933e-3b3d5a9a9f85.jpg\",\n" +
      "    \"crop\": {\n" +
      "\"x\": 63,\n" +
      "\"y\": 42,\n" +
      "\"width\": 210,\n" +
      "\"height\": 210\n" +
      "    }\n" +
      "},\n" +
      "\"fcmTokens\": null,\n" +
      "\"socialNetworks\": [],\n" +
      "\"experiences\": null,\n" +
      "\"educations\": null\n" +
      "    },\n" +
      "    \"name\": \"Iñigo\",\n" +
      "    \"city\": null,\n" +
      "    \"country\": \"Spain\",\n" +
      "    \"address\": null,\n" +
      "    \"latitude\": null,\n" +
      "    \"longitude\": null,\n" +
      "    \"description\": \"Lorem ipsum...\",\n" +
      "    \"phone\": null,\n" +
      "    \"web\": null,\n" +
      "    \"image\": {\n" +
      "\"original\": \"/assets/img/default/actor.jpg\",\n" +
      "\"thumbnail\": null,\n" +
      "\"crop\": null\n" +
      "    },\n" +
      "    \"myFacet\": {\n" +
      "\"industries\": null,\n" +
      "\"businessModels\": null,\n" +
      "\"socialInnovations\": null,\n" +
      "\"deepTechs\": null\n" +
      "    },\n" +
      "    \"questFacet\": {\n" +
      "\"industries\": null,\n" +
      "\"businessModels\": null,\n" +
      "\"socialInnovations\": null,\n" +
      "\"deepTechs\": null\n" +
      "    },\n" +
      "    \"investment\": {\n" +
      "\"stage\": null,\n" +
      "\"stagesInvestments\": null,\n" +
      "\"numberPastExist\": 0,\n" +
      "\"trlStage\": null,\n" +
      "\"numberCurrentInvestments\": 0,\n" +
      "\"countriesInteres\": null\n" +
      "    },\n" +
      "    \"financial\": {\n" +
      "\"stage\": null,\n" +
      "\"seekedCapital\": 0,\n" +
      "\"trlStage\": null,\n" +
      "\"raisedCapital\": 0,\n" +
      "\"totalFunding\": 0,\n" +
      "\"premoneyValuation\": 0,\n" +
      "\"fundingStage\": null,\n" +
      "\"lastFunding\": null,\n" +
      "\"numbersEmployees\": 0,\n" +
      "\"currency\": null\n" +
      "    },\n" +
      "    \"socialNetworks\": [],\n" +
      "    \"media\": null,\n" +
      "    \"lastname\": \"Aramburu\",\n" +
      "    \"email\": \"iaramburu@moonshot.ceo\"\n" +
      "}"
  }

  public static actor_post: EndpointTemplate = {
    name: "actors",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "TalentCreateEvent actorCreateEvent = new TalentCreateEvent();\n" +
      "actorCreateEvent.setName(\"Rodolfo\");\n" +
      "actorCreateEvent.setCity(\"Madrid\");\n" +
      "actorCreateEvent.setCountry(\"Spain\");\n" +
      "actorCreateEvent.setAddress(\"c/Las Rozas, 33\");\n" +
      "actorCreateEvent.setLatitude(10.6);\n" +
      "actorCreateEvent.setLongitude(20.1);\n" +
      "actorCreateEvent.setDescription(\"Active back-end programmer\");\n" +
      "actorCreateEvent.setPhone(\"+34222222222\");\n" +
      "actorCreateEvent.setWeb(\"https://dev.moonshot.ceo\");\n" +
      "actorCreateEvent.setImage(new Image());\n" +
      "actorCreateEvent.setMyFacet(new Facet());\n" +
      "actorCreateEvent.setQuestFacet(new Facet());\n" +
      "actorCreateEvent.setInvestment(new Investment());\n" +
      "actorCreateEvent.setFinancial(new Financial());\n" +
      "actorCreateEvent.setSocialNetworks(new ArrayList<String>());\n" +
      "actorCreateEvent.setMedia(new ArrayList<String>());\n" +
      "actorCreateEvent.setLastname(\"Martinez\");\n" +
      "actorCreateEvent.setEmail(\"rodolfo_martinez@gmail.com\");\n" +
      "communityApi.actors().create(app, actorCreateEvent);",
    response: null
  }

  public static actor_id_put: EndpointTemplate = {
    name: "actors/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "Actor actor = communityApi.actors().get(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "TalentUpdateEvent actorUpdateEvent = new TalentUpdateEvent();\n" +
      "actorUpdateEvent.setName(\"Rodolfo\");\n" +
      "actorUpdateEvent.setCity(\"Madrid\");\n" +
      "actorUpdateEvent.setCountry(\"Spain\");\n" +
      "actorUpdateEvent.setAddress(\"c/Las Rozas, 33\");\n" +
      "actorUpdateEvent.setLatitude(10.6);\n" +
      "actorUpdateEvent.setLongitude(20.1);\n" +
      "actorUpdateEvent.setDescription(\"Active back-end programmer\");\n" +
      "actorUpdateEvent.setPhone(\"+34222222222\");\n" +
      "actorUpdateEvent.setWeb(\"https://dev.moonshot.ceo\");\n" +
      "actorUpdateEvent.setImage(new Image());\n" +
      "actorUpdateEvent.setMyFacet(new Facet());\n" +
      "actorUpdateEvent.setQuestFacet(new Facet());\n" +
      "actorUpdateEvent.setInvestment(new Investment());\n" +
      "actorUpdateEvent.setFinancial(new Financial());\n" +
      "actorUpdateEvent.setSocialNetworks(new ArrayList<String>());\n" +
      "actorUpdateEvent.setMedia(new ArrayList<String>());\n" +
      "actorUpdateEvent.setLastname(\"Martinez\");\n" +
      "actorUpdateEvent.setEmail(\"rodolfo_martinez@gmail.com\");\n" +
      "communityApi.actors().update(app, \"61445159784bca6ef764c6df\", actorUpdateEvent);",
    response: null
  }

  public static actor_id_accept_put: EndpointTemplate = {
    name: "actors/:id/accept",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.actors().accept(app, \"61445159784bca6ef764c6df\", new ActorAcceptEvent());",
    response: null
  }

  public static actor_id_reject_put: EndpointTemplate = {
    name: "actors/:id/reject",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.actors().reject(app, \"61445159784bca6ef764c6df\", new ActorRejectEvent());",
    response: null
  }

  public static actor_id_delete: EndpointTemplate = {
    name: "actors/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.actors().delete(app, \"61445159784bca6ef764c6df\");",
    response: null
  }

  public static actor_upload_original_post: EndpointTemplate = {
    name: 'actors/upload/original',
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "File file = new File(\"C:\\Users\\saulo\\OneDrive\\Imágenes\\evento.jpg\");\n" +
      "communityApi.actors().uploadOriginal(app, file);",
    response: null
  }

  public static actor_upload_thumbnail_post: EndpointTemplate = {
    name: 'actors/upload/thumbnail',
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "File file = new File(\"C:\\Users\\saulo\\OneDrive\\Imágenes\\evento.jpg\");\n" +
      "communityApi.actors().uploadThumbnail(app, file);",
    response: null
  }

  public static actor_id_upload_media_put: EndpointTemplate = {
    name: 'actors/:id/upload/media',
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "File file = new File(\"C:\\Users\\saulo\\OneDrive\\Imágenes\\evento.jpg\");\n" +
      "communityApi.actors().uploadMedia(app, \"61445159784bca6ef764c6df\", file);",
    response: "\nhttps://localhost/drive/actors/media/1/61eaffcdad2bd12319fd4eba.png"
  }

  public static member_fcm_token_put: EndpointTemplate = {
    name: "members/fcm-token",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "MemberSetFcmTokenEvent memberSetFcmTokenEvent = new MemberSetFcmTokenEvent();\n" +
      "FcmToken fcmToken = new FcmToken();\n" +
      "fcmToken.setTokenId(\"enMcvL2-3YDmhocf25g5Nk:APA91bEljU6wo1S7B\");\n" +
      "fcmToken.setDevice(\"laptop\");\n" +
      "fcmToken.setTimestamp((long) 1639687246);\n" +
      "memberSetFcmTokenEvent.setFcmToken(fcmToken);\n" +
      "communityApi.members().fcmToken(app, memberSetFcmTokenEvent);",
    response: null
  }

  public static member_logged_in_get: EndpointTemplate = {
    name: "members/logged-in",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.members().loggedIn(app, \"61445159784bca6ef764c6df\");",
    response: "\n{\n" +
      "    \"id\": \"60acae8e2f799d228a4d4a85\",\n" +
      "    \"state\": \"ACCEPTED\",\n" +
      "    \"name\": \"David\",\n" +
      "    \"lastname\": \"Suriol Puigvert\",\n" +
      "    \"address\": {\n" +
      "\"lat\": 40.4475272,\n" +
      "\"lng\": -3.8074152,\n" +
      "\"formatted\": \"Pozuelo de Alarcón, Madrid, Spain\",\n" +
      "\"components\": [\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    },\n" +
      "    {\n" +
      "\"name\": null,\n" +
      "\"shortName\": null,\n" +
      "\"type\": null\n" +
      "    }\n" +
      "]\n" +
      "    },\n" +
      "    \"email\": \"dsuriol@moonshot.ceo\",\n" +
      "    \"about\": \"Entrepreneur:  Moonshot, Vortex, Calsot, Deutecno. Father of 4th. Writer. Happy man\",\n" +
      "    \"image\": {\n" +
      "\"original\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60acae8e2f799d228a4d4a86/image/d6f9ece8-8d15-43a0-aa2a-1a87f443cfa0.jpg\",\n" +
      "\"thumbnail\": \"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60acae8e2f799d228a4d4a85/image/ee0be6bb-763a-4b93-bdfd-0e5a49682100.jpg\",\n" +
      "\"crop\": {\n" +
      "    \"x\": 0,\n" +
      "    \"y\": 0,\n" +
      "    \"width\": 340,\n" +
      "    \"height\": 340\n" +
      "}\n" +
      "    },\n" +
      "    \"fcmTokens\": [\n" +
      "{\n" +
      "    \"tokenId\": \"eDSOrsU7LO5nB5lk4AOy_E:APA91bFxx8hZElysyxvC8Dg1VEfTDDFHLo_QlB5jqtfXlatWdZL_KnWlUUAB5a5PHKNcTaQTkJiiMXdDEMX9e4u4AheteyueNV97Z5LehWXocbF6TKmi9GIDm8MnNyFvc1i9z8aJAuJK\",\n" +
      "    \"device\": \"laptop/computer\",\n" +
      "    \"timestamp\": 1636106048442\n" +
      "},\n" +
      "{\n" +
      "    \"tokenId\": \"ccdZB88GwWONAt1zIQ1O8n:APA91bFo8V6PmNv64zUq2fvslPpuCUoXEmElz1QQcZHYbj0sQYfATHbT4h-Xrq9HNjVJLOfMJdpVf3T0xGFUw_QUFSUkFsR3LbN9j9tmsH7ykzrAv9OAvA23ZwePG044vq7TgeutdCdR\",\n" +
      "    \"device\": \"laptop/computer\",\n" +
      "    \"timestamp\": 1636538591540\n" +
      "},\n" +
      "{\n" +
      "    \"tokenId\": \"ccdZB88GwWONAt1zIQ1O8n:APA91bH2Fa4Gfn9ttJ6MCYxPRBmWWfxlEvTuTCz9hN1qMBnlYxRWMT0kEf0w3JdqBR3RWeiLa2o4M4xH9SkVhbNCjBpUOVX6lF0_tabYEs-dpjyF2eG0pKrqI482vatDUoj7OjlvTLxZ\",\n" +
      "    \"device\": \"laptop/computer\",\n" +
      "    \"timestamp\": 1637157466929\n" +
      "},\n" +
      "{\n" +
      "    \"tokenId\": \"e9OjFeeUZAQSD1Oz-dTymA:APA91bG512la_cxdyJAvRWlUnJ7IF-Jg5IP3bOo-ypTARxojrLl21ZaWCgJcZZTn6CJgVIQYkCQ6ULTunVn4ikcZmIkT0yo7TziATaZtTA51JQWZGob_CmZeKqb7CNp5j4qvrX1Qmmuv\",\n" +
      "    \"device\": \"laptop/computer\",\n" +
      "    \"timestamp\": 1637224753241\n" +
      "}\n" +
      "    ],\n" +
      "    \"socialNetworks\": [\n" +
      "\"https://www.linkedin.com/in/davidsuriol/\"\n" +
      "    ],\n" +
      "    \"experiences\": [\n" +
      "{\n" +
      "    \"id\": \"6103b12f9aaabb647616a0d5\",\n" +
      "    \"title\": \"Co-Founder & Co-CEO\",\n" +
      "    \"type\": \"FULL_TIME\",\n" +
      "    \"company\": \"Vortex Bladeless\",\n" +
      "    \"address\": null,\n" +
      "    \"startDate\": 17649,\n" +
      "    \"endDate\": null,\n" +
      "    \"description\": \"\"\n" +
      "},\n" +
      "{\n" +
      "    \"id\": \"6103b12f9aaabb647616a0d6\",\n" +
      "    \"title\": \"Key Account Manager\",\n" +
      "    \"type\": \"FULL_TIME\",\n" +
      "    \"company\": \"Weber Shandwick\",\n" +
      "    \"address\": null,\n" +
      "    \"startDate\": 10407,\n" +
      "    \"endDate\": null,\n" +
      "    \"description\": \"\"\n" +
      "},\n" +
      "{\n" +
      "    \"id\": \"6103b12f9aaabb647616a0d8\",\n" +
      "    \"title\": \"CEO\",\n" +
      "    \"type\": \"FULL_TIME\",\n" +
      "    \"company\": \"Moonshot Innovation Sl\",\n" +
      "    \"address\": null,\n" +
      "    \"startDate\": 18838,\n" +
      "    \"endDate\": null,\n" +
      "    \"description\": \"\"\n" +
      "},\n" +
      "{\n" +
      "    \"id\": \"6103b12f9aaabb647616a0d9\",\n" +
      "    \"title\": \"Co-Founder & Co-CEO\",\n" +
      "    \"type\": \"FULL_TIME\",\n" +
      "    \"company\": \"Deutecno Noses & Sensors\",\n" +
      "    \"address\": null,\n" +
      "    \"startDate\": 16220,\n" +
      "    \"endDate\": null,\n" +
      "    \"description\": \"\"\n" +
      "},\n" +
      "{\n" +
      "    \"id\": \"6103b12f9aaabb647616a0da\",\n" +
      "    \"title\": \"Owner\",\n" +
      "    \"type\": \"FULL_TIME\",\n" +
      "    \"company\": \"Life C Comunicación\",\n" +
      "    \"address\": null,\n" +
      "    \"startDate\": 18838,\n" +
      "    \"endDate\": null,\n" +
      "    \"description\": \"\"\n" +
      "},\n" +
      "{\n" +
      "    \"id\": \"6103b12f9aaabb647616a0db\",\n" +
      "    \"title\": \"Owner\",\n" +
      "    \"type\": \"FULL_TIME\",\n" +
      "    \"company\": \"Calsot\",\n" +
      "    \"address\": null,\n" +
      "    \"startDate\": 18838,\n" +
      "    \"endDate\": null,\n" +
      "    \"description\": \"\"\n" +
      "},\n" +
      "{\n" +
      "    \"id\": \"6103b1d69aaabb647616a0e0\",\n" +
      "    \"title\": \"Account Assistant\",\n" +
      "    \"type\": \"FULL_TIME\",\n" +
      "    \"company\": \"Rogers & Cowan\",\n" +
      "    \"address\": null,\n" +
      "    \"startDate\": 9860,\n" +
      "    \"endDate\": null,\n" +
      "    \"description\": \"\"\n" +
      "},\n" +
      "{\n" +
      "    \"id\": \"6103b6e39aaabb647616a0e1\",\n" +
      "    \"title\": \"International Observer\",\n" +
      "    \"type\": \"FULL_TIME\",\n" +
      "    \"company\": \"OSCE-UN in Bosnia\",\n" +
      "    \"address\": null,\n" +
      "    \"startDate\": 10225,\n" +
      "    \"endDate\": null,\n" +
      "    \"description\": \"\"\n" +
      "}\n" +
      "    ],\n" +
      "    \"educations\": [\n" +
      "{\n" +
      "    \"id\": \"6103b12f9aaabb647616a0d4\",\n" +
      "    \"school\": \"Universidad de Navarra\",\n" +
      "    \"degree\": \"Licenciado en Periodismo\",\n" +
      "    \"fieldOfStudy\": \"\",\n" +
      "    \"address\": null,\n" +
      "    \"startDate\": 9677,\n" +
      "    \"endDate\": null,\n" +
      "    \"grade\": null,\n" +
      "    \"description\": \"\"\n" +
      "},\n" +
      "{\n" +
      "    \"id\": \"6103b12f9aaabb647616a0dc\",\n" +
      "    \"school\": \"IE\",\n" +
      "    \"degree\": \"MDCM\",\n" +
      "    \"fieldOfStudy\": \"\",\n" +
      "    \"address\": null,\n" +
      "    \"startDate\": 10772,\n" +
      "    \"endDate\": null,\n" +
      "    \"grade\": null,\n" +
      "    \"description\": \"\"\n" +
      "},\n" +
      "{\n" +
      "    \"id\": \"6103b19d9aaabb647616a0df\",\n" +
      "    \"school\": \"Harvard University\",\n" +
      "    \"degree\": \"Sustainability\",\n" +
      "    \"fieldOfStudy\": \"\",\n" +
      "    \"address\": null,\n" +
      "    \"startDate\": 16585,\n" +
      "    \"endDate\": null,\n" +
      "    \"grade\": null,\n" +
      "    \"description\": \"\"\n" +
      "},\n" +
      "{\n" +
      "    \"id\": \"6107d3fa2cee6f0b930f9434\",\n" +
      "    \"school\": \"Chicago Booth-Fundación NUMA\",\n" +
      "    \"degree\": \"Private Wealth Management\",\n" +
      "    \"fieldOfStudy\": \"\",\n" +
      "    \"address\": null,\n" +
      "    \"startDate\": 16923,\n" +
      "    \"endDate\": null,\n" +
      "    \"grade\": null,\n" +
      "    \"description\": \"\"\n" +
      "}\n" +
      "    ],\n" +
      "    \"user\": {\n" +
      "\"id\": \"60acae8e2f799d228a4d4a85\",\n" +
      "\"email\": \"dsuriol@moonshot.ceo\",\n" +
      "\"memberId\": \"60acae8e2f799d228a4d4a85\",\n" +
      "\"roles\": [\n" +
      "    \"USER\",\n" +
      "    \"ECOSYSTEM_MANAGER\"\n" +
      "],\n" +
      "\"permissions\": [\n" +
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
      "]\n" +
      "    }\n" +
      "}"
  }

  public static members_get: EndpointTemplate = {
    name: "members",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<Member> members = communityApi.members().listByIds(app, new ArrayList<String>()).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(members);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"state\":\"ACCEPTED\",\n" +
      "      \"name\":\"Iñigo\",\n" +
      "      \"lastname\":\"Aramburu\",\n" +
      "      \"address\":{\n" +
      " \"lat\":43.3038929,\n" +
      " \"lng\":-1.9604012,\n" +
      " \"formatted\":\"Wroclaw, 1, 20014 San Sebastián, Gipuzkoa, España\"\n" +
      "      },\n" +
      "      \"email\":\"iaramburu@moonshot.ceo\",\n" +
      "      \"about\":\"Experto en Ingeniería del Software.\",\n" +
      "      \"image\":null,\n" +
      "      \"fcmTokens\":[\n" +
      " {\n" +
      "    \"tokenId\":\"fcmToken1\",\n" +
      "    \"device\":\"SMARTPHONE\",\n" +
      "    \"timestamp\":1622975724952\n" +
      " }\n" +
      "      ],\n" +
      "      \"socialNetworks\":[\n" +
      " \"www.twitter.com/Iñigo\",\n" +
      " \"www.facebook.com/Iñigo\"\n" +
      "      ],\n" +
      "      \"experiences\":[\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"title\":\"Back-end developer en Moonshot Innovation\",\n" +
      "    \"type\":\"FULL_TIME\",\n" +
      "    \"company\":\"Moonshot Innovation\",\n" +
      "    \"address\":{\n" +
      "       \"lat\":90.5,\n" +
      "       \"lng\":10.5,\n" +
      "       \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "    },\n" +
      "    \"startDate\":15319,\n" +
      "    \"endDate\":18718,\n" +
      "    \"description\":\"Scrum manager en Moonshot Innovation, trabajando en el equipo de back-end\"\n" +
      " }\n" +
      "      ],\n" +
      "      \"educations\":[\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"school\":\"Universidad del País Vasco\",\n" +
      "    \"degree\":\"Ingeniería informática\",\n" +
      "    \"fieldOfStudy\":\"Ingeniería de software\",\n" +
      "    \"startDate\":15319,\n" +
      "    \"endDate\":18687,\n" +
      "    \"grade\":8,\n" +
      "    \"address\":{\n" +
      "       \"lat\":4.5,\n" +
      "       \"lng\":110.5,\n" +
      "       \"formatted\":\"Carr. More, 17-13, 48014 Bilbao, Vizcaya\"\n" +
      "    },\n" +
      "    \"description\":\"Estudios universitarios realizados en la Universidad del País Vasco\"\n" +
      " },\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"school\":\"Universidad del País Vasco\",\n" +
      "    \"degree\":\"Master en desarrollo web\",\n" +
      "    \"fieldOfStudy\":\"Desarrollo web\",\n" +
      "    \"startDate\":15319,\n" +
      "    \"endDate\":18687,\n" +
      "    \"grade\":9.3,\n" +
      "    \"address\":{\n" +
      "       \"lat\":4.5,\n" +
      "       \"lng\":110.5,\n" +
      "       \"formatted\":\"Carr. More, 17-13, 48014 Bilbao, Vizcaya\"\n" +
      "    },\n" +
      "    \"description\":\"Master realizado en la Universidad del País Vasco para ser full stack developer\"\n" +
      " }\n" +
      "      ]\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"state\":\"ACCEPTED\",\n" +
      "      \"name\":\"Jose Juan\",\n" +
      "      \"lastname\":\"Hernández\",\n" +
      "      \"address\":{\n" +
      " \"lat\":28.113549,\n" +
      " \"lng\":-15.4366296,\n" +
      " \"formatted\":\"C. Ing. Ramírez Doreste, 14, 35011 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      "      },\n" +
      "      \"city\":\"Las Palmas\",\n" +
      "      \"country\":\"España\",\n" +
      "      \"email\":\"josejuan@moonshot.ceo\",\n" +
      "      \"about\":\"Profesor de Ingeniería de Software de la Universidad de Las Palmas de Gran Canaria\",\n" +
      "      \"image\":null,\n" +
      "      \"fcmTokens\":[\n" +
      " {\n" +
      "    \"tokenId\":\"fcmToken2\",\n" +
      "    \"device\":\"COMPUTER\",\n" +
      "    \"timestamp\":1630918457848\n" +
      " }\n" +
      "      ],\n" +
      "      \"socialNetworks\":[\n" +
      " \"www.twitter.com/JoseJuan\",\n" +
      " \"www.facebook.com/JoseJuan\"\n" +
      "      ],\n" +
      "      \"experiences\":[\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"title\":\"Back-end developer en Moonshot Innovation\",\n" +
      "    \"type\":\"FULL_TIME\",\n" +
      "    \"company\":\"Moonshot Innovation\",\n" +
      "    \"address\":{\n" +
      "       \"lat\":90.5,\n" +
      "       \"lng\":10.5,\n" +
      "       \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "    },\n" +
      "    \"startDate\":15319,\n" +
      "    \"endDate\":18718,\n" +
      "    \"description\":\"Scrum manager en Moonshot Innovation, trabajando en el equipo de back-end\"\n" +
      " },\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"title\":\"Profesor en la facultad de Ingenería informatica\",\n" +
      "    \"type\":\"OFFICIAL\",\n" +
      "    \"company\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "    \"address\":{\n" +
      "       \"lat\":48.5,\n" +
      "       \"lng\":19.1,\n" +
      "       \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "    },\n" +
      "    \"startDate\":11422,\n" +
      "    \"endDate\":15319,\n" +
      "    \"description\":\"Profesor de la especialización de Ingeniería del Software\"\n" +
      " }\n" +
      "      ],\n" +
      "      \"educations\":[\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"school\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "    \"degree\":\"Ingeniería en telecomunicaciones\",\n" +
      "    \"fieldOfStudy\":\"Big data\",\n" +
      "    \"startDate\":15319,\n" +
      "    \"endDate\":18687,\n" +
      "    \"grade\":9,\n" +
      "    \"address\":{\n" +
      "       \"lat\":48.5,\n" +
      "       \"lng\":19.1,\n" +
      "       \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "    },\n" +
      "    \"description\":\"Estudios universitarios realizados en la Universidad de Las Palmas de Gran Canaria, con especialización en BigData\"\n" +
      " }\n" +
      "      ]\n" +
      "   }\n" +
      "]"
  }

  public static member_id_get: EndpointTemplate = {
    name: "members/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "Member member = communityApi.members().member(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(member);\n" +
      "System.out.println(jsonObject);",
    response: "\n{\n" +
      "\"id\": \"61445159784bca6ef764c6df\",\n" +
      "\"state\": \"ACCEPTED\",\n" +
      "\"name\": \"Jose Juan\",\n" +
      "\"lastname\": \"Hernández\",\n" +
      "\"address\": {\n" +
      "    \"lat\": 28.113549,\n" +
      "    \"lng\": -15.4366296,\n" +
      "    \"formatted\": \"C. Ing. Ramírez Doreste, 14, 35011 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      "},\n" +
      "\"city\": \"Las Palmas\",\n" +
      "\"country\": \"España\",\n" +
      "\"email\": \"josejuan@moonshot.ceo\",\n" +
      "\"about\": \"Profesor de Ingeniería de Software de la Universidad de Las Palmas de Gran Canaria\",\n" +
      "\"image\": null,\n" +
      "\"fcmTokens\": [\n" +
      "    {\n" +
      "\"tokenId\": \"fcmToken2\",\n" +
      "\"device\": \"COMPUTER\",\n" +
      "\"timestamp\": 1630918457848\n" +
      "    }\n" +
      "],\n" +
      "\"socialNetworks\": [\n" +
      "    \"www.twitter.com/JoseJuan\",\n" +
      "    \"www.facebook.com/JoseJuan\"\n" +
      "],\n" +
      "\"experiences\": [\n" +
      "    {\n" +
      "\"id\": \"61445159784bca6ef764c6df\",\n" +
      "\"title\": \"Back-end developer en Moonshot Innovation\",\n" +
      "\"type\": \"FULL_TIME\",\n" +
      "\"company\": \"Moonshot Innovation\",\n" +
      "\"address\": {\n" +
      "    \"lat\": 90.5,\n" +
      "    \"lng\": 10.5,\n" +
      "    \"formatted\": \"Madrid, Puerta del Sol\"\n" +
      "},\n" +
      "\"startDate\": 15319,\n" +
      "\"endDate\": 18718,\n" +
      "\"description\": \"Scrum manager en Moonshot Innovation, trabajando en el equipo de back-end\"\n" +
      "    },\n" +
      "    {\n" +
      "\"id\": \"61445159784bca6ef764c6df\",\n" +
      "\"title\": \"Profesor en la facultad de Ingenería informatica\",\n" +
      "\"type\": \"OFFICIAL\",\n" +
      "\"company\": \"Universidad de Las Palmas de Gran Canaria\",\n" +
      "\"address\": {\n" +
      "    \"lat\": 48.5,\n" +
      "    \"lng\": 19.1,\n" +
      "    \"formatted\": \"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "},\n" +
      "\"startDate\": 11422,\n" +
      "\"endDate\": 15319,\n" +
      "\"description\": \"Profesor de la especialización de Ingeniería del Software\"\n" +
      "    }\n" +
      "],\n" +
      "\"educations\": [\n" +
      "    {\n" +
      "\"id\": \"61445159784bca6ef764c6df\",\n" +
      "\"school\": \"Universidad de Las Palmas de Gran Canaria\",\n" +
      "\"degree\": \"Ingeniería en telecomunicaciones\",\n" +
      "\"fieldOfStudy\": \"Big data\",\n" +
      "\"startDate\": 15319,\n" +
      "\"endDate\": 18687,\n" +
      "\"grade\": 9,\n" +
      "\"address\": {\n" +
      "    \"lat\": 48.5,\n" +
      "    \"lng\": 19.1,\n" +
      "    \"formatted\": \"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "},\n" +
      "\"description\": \"Estudios universitarios realizados en la Universidad de Las Palmas de Gran Canaria, con especialización en BigData\"\n" +
      "    }\n" +
      "]\n" +
      "    }"
  }

  public static member_id_marker_get: EndpointTemplate = {
    name: "members/:id/marker",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "byte[] marker = communityApi.members().marker(app, \"61445159784bca6ef764c6df\").getResponse();",
    response: "This endpoint download a svg file"
  }

  public static member_upload_original_post: EndpointTemplate = {
    name: "members/upload/original",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "File file = new File(\"C:\\\\Users\\\\saulo\\\\OneDrive\\\\Imágenes\\\\evento.jpg\");\n" +
      "communityApi.members().uploadOriginal(app, file);",
    response: null
  }

  public static member_upload_thumbnail_post: EndpointTemplate = {
    name: "members/upload/thumbnail",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "File file = new File(\"C:\\Users\\saulo\\OneDrive\\Imágenes\\evento.jpg\");\n" +
      "communityApi.members().uploadThumbnail(app, file);",
    response: null
  }

  public static member_id_put: EndpointTemplate = {
    name: "members/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "Member member = communityApi.members().member(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "MemberUpdateEvent memberUpdateEvent = new MemberUpdateEvent();\n" +
      "memberUpdateEvent.setName(member.getName());\n" +
      "memberUpdateEvent.setLastname(member.getLastname());\n" +
      "memberUpdateEvent.setAddress(new Address());\n" +
      "memberUpdateEvent.setEmail(\"new_email@gmail.com\");\n" +
      "memberUpdateEvent.setSocialNetworks(new ArrayList<String>());\n" +
      "communityApi.members().update(app, \"61445159784bca6ef764c6df\", memberUpdateEvent);",
    response: null
  }

  public static member_id_delete: EndpointTemplate = {
    name: "members/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.members().delete(app, \"61445159784bca6ef764c6df\");",
    response: null
  }

  public static education_post: EndpointTemplate = {
    name: "members/education",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "MemberEducationCreateEvent memberEducationCreateEvent = new MemberEducationCreateEvent();\n" +
      "memberEducationCreateEvent.setSchool(\"Universidad de Las Palmas de Gran Canaria\");\n" +
      "memberEducationCreateEvent.setDegree(\"Software engineer\");\n" +
      "memberEducationCreateEvent.setFieldOfStudy(\"Programming\");\n" +
      "memberEducationCreateEvent.setAddress(new Address());\n" +
      "memberEducationCreateEvent.setStartDate(LocalDate.now());\n" +
      "memberEducationCreateEvent.setEndDate(LocalDate.now());\n" +
      "memberEducationCreateEvent.setGrade(10.0);\n" +
      "memberEducationCreateEvent.setDescription(\"New description\");\n" +
      "communityApi.members().educationCreate(app, memberEducationCreateEvent);",
    response: null
  }

  public static education_id_put: EndpointTemplate = {
    name: "members/education/:education_id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "Member member = communityApi.members().member(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "Education educationBase = member.getEducations()\n" +
      "    .stream()\n" +
      "    .filter(education -> education.getId().equals(\"61445159784bca6ef764c6df\"))\n" +
      "    .collect(Collectors.toList()).get(0);\n" +
      "MemberEducationUpdateEvent memberEducationUpdateEvent = new MemberEducationUpdateEvent();\n" +
      "memberEducationUpdateEvent.setSchool(educationBase.getSchool());\n" +
      "memberEducationUpdateEvent.setDegree(educationBase.getDegree());\n" +
      "memberEducationUpdateEvent.setFieldOfStudy(educationBase.getFieldOfStudy());\n" +
      "memberEducationUpdateEvent.setAddress(educationBase.getAddress());\n" +
      "memberEducationUpdateEvent.setStartDate(educationBase.getStartDate());\n" +
      "memberEducationUpdateEvent.setEndDate(educationBase.getEndDate());\n" +
      "memberEducationUpdateEvent.setGrade(10.0);\n" +
      "memberEducationUpdateEvent.setDescription(\"New description\");\n" +
      "communityApi.members().educationUpdate(app, \"61445159784bca6ef764c6df\", memberEducationUpdateEvent);",
    response: null
  }

  public static education_id_delete: EndpointTemplate = {
    name: "members/education/:education_id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.members().educationDelete(app, \"61445159784bca6ef764c6df\");",
    response: null
  }

  public static experience_post: EndpointTemplate = {
    name: "members/experience",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "MemberExperienceCreateEvent memberExperienceCreateEvent = new MemberExperienceCreateEvent();\n" +
      "memberExperienceCreateEvent.setTitle(\"Back end developer\");\n" +
      "memberExperienceCreateEvent.setCompany(\"Moonshot\");\n" +
      "memberExperienceCreateEvent.setType(EmploymentType.FULL_TIME);\n" +
      "memberExperienceCreateEvent.setAddress(new Address());\n" +
      "memberExperienceCreateEvent.setStartDate(LocalDate.now());\n" +
      "memberExperienceCreateEvent.setEndDate(LocalDate.now());\n" +
      "memberExperienceCreateEvent.setDescription(\"Java programmer... 50%\");\n" +
      "communityApi.members().experienceCreate(app, memberExperienceCreateEvent);",
    response: null
  }

  public static experience_id_put: EndpointTemplate = {
    name: "/members/experience/:experience_id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "Member member = communityApi.members().member(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "Experience experienceBase = member.getExperiences()\n" +
      "    .stream()\n" +
      "    .filter(experience -> experience.getId().equals(\"61445159784bca6ef764c6df\"))\n" +
      "    .collect(Collectors.toList()).get(0);\n" +
      "MemberExperienceUpdateEvent memberExperienceUpdateEvent = new MemberExperienceUpdateEvent();\n" +
      "memberExperienceUpdateEvent.setTitle(experienceBase.getTitle());\n" +
      "memberExperienceUpdateEvent.setCompany(experienceBase.getCompany());\n" +
      "memberExperienceUpdateEvent.setType(experienceBase.getType());\n" +
      "memberExperienceUpdateEvent.setAddress(experienceBase.getAddress());\n" +
      "memberExperienceUpdateEvent.setStartDate(experienceBase.getStartDate());\n" +
      "memberExperienceUpdateEvent.setEndDate(experienceBase.getEndDate());\n" +
      "memberExperienceUpdateEvent.setDescription(\"New description\");\n" +
      "communityApi.members().experienceUpdate(app, \"61445159784bca6ef764c6df\", memberExperienceUpdateEvent);",
    response: null
  }

  public static experience_id_delete: EndpointTemplate = {
    name: "members/experience/:experience_id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.members().experienceDelete(app, \"61445159784bca6ef764c6df\");",
    response: null
  }

  public static projects_by_actor_get: EndpointTemplate = {
    name: "projects/by/actor",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "List<Project> projects = communityApi.projects().listByActor(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(projects);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"actorId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"name\":\"Patents\",\n" +
      "      \"description\":\"Patents\",\n" +
      "      \"trlStage\":\"BASIC_PRINCIPLES_OBSERVED\",\n" +
      "      \"media\":[\n" +
      " \"www.youtube.com/aems83sd\",\n" +
      " \"www.youtube.com/gwqm92ms\"\n" +
      "      ],\n" +
      "      \"protectionMethod\":\"PATENTS\",\n" +
      "      \"projectManager\":{\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACCEPTED\",\n" +
      " \"name\":\"Iñigo\",\n" +
      " \"lastname\":\"Aramburu\",\n" +
      " \"address\":{\n" +
      "    \"lat\":43.3038929,\n" +
      "    \"lng\":-1.9604012,\n" +
      "    \"formatted\":\"Wroclaw, 1, 20014 San Sebastián, Gipuzkoa, España\"\n" +
      " },\n" +
      " \"email\":\"iaramburu@moonshot.ceo\",\n" +
      " \"about\":\"Experto en Ingeniería del Software.\",\n" +
      " \"image\":null,\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken1\",\n" +
      "       \"device\":\"SMARTPHONE\",\n" +
      "       \"timestamp\":1622975724952\n" +
      "    }\n" +
      " ],\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.twitter.com/Iñigo\",\n" +
      "    \"www.facebook.com/Iñigo\"\n" +
      " ],\n" +
      " \"experiences\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Back-end developer en Moonshot Innovation\",\n" +
      "       \"type\":\"FULL_TIME\",\n" +
      "       \"company\":\"Moonshot Innovation\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":90.5,\n" +
      "  \"lng\":10.5,\n" +
      "  \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "       },\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18718,\n" +
      "       \"description\":\"Scrum manager en Moonshot Innovation, trabajando en el equipo de back-end\"\n" +
      "    }\n" +
      " ],\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad del País Vasco\",\n" +
      "       \"degree\":\"Ingeniería informática\",\n" +
      "       \"fieldOfStudy\":\"Ingeniería de software\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18687,\n" +
      "       \"grade\":8,\n" +
      "       \"address\":{\n" +
      "  \"lat\":4.5,\n" +
      "  \"lng\":110.5,\n" +
      "  \"formatted\":\"Carr. More, 17-13, 48014 Bilbao, Vizcaya\"\n" +
      "       },\n" +
      "       \"description\":\"Estudios universitarios realizados en la Universidad del País Vasco\"\n" +
      "    },\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad del País Vasco\",\n" +
      "       \"degree\":\"Master en desarrollo web\",\n" +
      "       \"fieldOfStudy\":\"Desarrollo web\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18687,\n" +
      "       \"grade\":9.3,\n" +
      "       \"address\":{\n" +
      "  \"lat\":4.5,\n" +
      "  \"lng\":110.5,\n" +
      "  \"formatted\":\"Carr. More, 17-13, 48014 Bilbao, Vizcaya\"\n" +
      "       },\n" +
      "       \"description\":\"Master realizado en la Universidad del País Vasco para ser full stack developer\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      \"teamMembers\":[\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACCEPTED\",\n" +
      "    \"name\":\"Jose Juan\",\n" +
      "    \"lastname\":\"Hernández\",\n" +
      "    \"address\":{\n" +
      "       \"lat\":28.113549,\n" +
      "       \"lng\":-15.4366296,\n" +
      "       \"formatted\":\"C. Ing. Ramírez Doreste, 14, 35011 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      "    },\n" +
      "    \"city\":\"Las Palmas\",\n" +
      "    \"country\":\"España\",\n" +
      "    \"email\":\"josejuan@moonshot.ceo\",\n" +
      "    \"about\":\"Profesor de Ingeniería de Software de la Universidad de Las Palmas de Gran Canaria\",\n" +
      "    \"image\":null,\n" +
      "    \"fcmTokens\":[\n" +
      "       {\n" +
      "  \"tokenId\":\"fcmToken2\",\n" +
      "  \"device\":\"COMPUTER\",\n" +
      "  \"timestamp\":1630918457848\n" +
      "       }\n" +
      "    ],\n" +
      "    \"socialNetworks\":[\n" +
      "       \"www.twitter.com/JoseJuan\",\n" +
      "       \"www.facebook.com/JoseJuan\"\n" +
      "    ],\n" +
      "    \"experiences\":[\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"title\":\"Back-end developer en Moonshot Innovation\",\n" +
      "  \"type\":\"FULL_TIME\",\n" +
      "  \"company\":\"Moonshot Innovation\",\n" +
      "  \"address\":{\n" +
      "     \"lat\":90.5,\n" +
      "     \"lng\":10.5,\n" +
      "     \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "  },\n" +
      "  \"startDate\":15319,\n" +
      "  \"endDate\":18718,\n" +
      "  \"description\":\"Scrum manager en Moonshot Innovation, trabajando en el equipo de back-end\"\n" +
      "       },\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"title\":\"Profesor en la facultad de Ingenería informatica\",\n" +
      "  \"type\":\"OFFICIAL\",\n" +
      "  \"company\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "  \"address\":{\n" +
      "     \"lat\":48.5,\n" +
      "     \"lng\":19.1,\n" +
      "     \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "  },\n" +
      "  \"startDate\":11422,\n" +
      "  \"endDate\":15319,\n" +
      "  \"description\":\"Profesor de la especialización de Ingeniería del Software\"\n" +
      "       }\n" +
      "    ],\n" +
      "    \"educations\":[\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"school\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "  \"degree\":\"Ingeniería en telecomunicaciones\",\n" +
      "  \"fieldOfStudy\":\"Big data\",\n" +
      "  \"startDate\":15319,\n" +
      "  \"endDate\":18687,\n" +
      "  \"grade\":9,\n" +
      "  \"address\":{\n" +
      "     \"lat\":48.5,\n" +
      "     \"lng\":19.1,\n" +
      "     \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "  },\n" +
      "  \"description\":\"Estudios universitarios realizados en la Universidad de Las Palmas de Gran Canaria, con especialización en BigData\"\n" +
      "       }\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACCEPTED\",\n" +
      "    \"name\":\"Jeremy\",\n" +
      "    \"lastname\":\"Trujillo\",\n" +
      "    \"address\":{\n" +
      "       \"lat\":28.1245582,\n" +
      "       \"lng\":-15.4325499,\n" +
      "       \"formatted\":\"C. Pío XII, 30-32, 35005 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      "    },\n" +
      "    \"email\":\"trujillosanchezjeremy@gmail.com\",\n" +
      "    \"about\":\"Alumno en prácticas en Moonshot y estudiante de la Universidad de Las Palmas de Gran Canaria\",\n" +
      "    \"image\":null,\n" +
      "    \"fcmTokens\":[\n" +
      "       {\n" +
      "  \"tokenId\":\"fcmToken3\",\n" +
      "  \"device\":\"IPAD\",\n" +
      "  \"timestamp\":1630918457848\n" +
      "       }\n" +
      "    ],\n" +
      "    \"socialNetworks\":[\n" +
      "       \"www.twitter.com/Jeremy\",\n" +
      "       \"www.facebook.com/Jeremy\"\n" +
      "    ],\n" +
      "    \"experiences\":[\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"title\":\"Prácticas universitarias en Moonshot Innovation\",\n" +
      "  \"type\":\"APPRENTICESHIP\",\n" +
      "  \"company\":\"Moonshot Innovation\",\n" +
      "  \"address\":{\n" +
      "     \"lat\":90.5,\n" +
      "     \"lng\":10.5,\n" +
      "     \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "  },\n" +
      "  \"startDate\":15319,\n" +
      "  \"endDate\":null,\n" +
      "  \"description\":\"Prácticas extracurriculares a traves de la FULP (Universidad de las Palmas de Gran Canaria)\"\n" +
      "       }\n" +
      "    ],\n" +
      "    \"educations\":[\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"school\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "  \"degree\":\"Ingeniería informática\",\n" +
      "  \"fieldOfStudy\":\"Ingeniería de software\",\n" +
      "  \"startDate\":15319,\n" +
      "  \"endDate\":null,\n" +
      "  \"grade\":7,\n" +
      "  \"address\":{\n" +
      "     \"lat\":48.5,\n" +
      "     \"lng\":19.1,\n" +
      "     \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "  },\n" +
      "  \"description\":\"Estudios universitarios realizados en la Universidad de Las Palmas de Gran Canaria, con especialización en ingeniería de software\"\n" +
      "       }\n" +
      "    ]\n" +
      " }\n" +
      "      ],\n" +
      "      \"socialNetworks\":[\n" +
      " \"www.twitter.com/Patents\",\n" +
      " \"www.facebook.com/Patents\"\n" +
      "      ],\n" +
      "      \"deepTechs\":[\n" +
      " \"MACHINE_LEARNING\",\n" +
      " \"GENERAL_PURPOSE_MACHINE_INTELLIGENCE\",\n" +
      " \"SMART_DATA_DISCOVERY\"\n" +
      "      ],\n" +
      "      \"socialInnovations\":[\n" +
      " \n" +
      "      ],\n" +
      "      \"businessModels\":[\n" +
      " \"TECHNOLOGY\"\n" +
      "      ],\n" +
      "      \"industries\":[\n" +
      " \"INFORMATION_TECHNOLOGY\"\n" +
      "      ]\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"actorId\":\"61445159784bca6ef764c6df\",\n" +
      "      \"name\":\"Trade secret\",\n" +
      "      \"description\":\"Trade secret\",\n" +
      "      \"trlStage\":\"TECHNOLOGY_CONCEPT_FORMULATED\",\n" +
      "      \"media\":[\n" +
      " \"www.youtube.com/mnw83ki\"\n" +
      "      ],\n" +
      "      \"protectionMethod\":\"TRADE_SECRETS\",\n" +
      "      \"projectManager\":{\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACCEPTED\",\n" +
      " \"name\":\"Saulo\",\n" +
      " \"lastname\":\"Santana\",\n" +
      " \"address\":{\n" +
      "    \"lat\":28.1302553,\n" +
      "    \"lng\":-15.4436134,\n" +
      "    \"formatted\":\"C. Simancas, 64, 35010 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      " },\n" +
      " \"email\":\"saulobach1@gmail.com\",\n" +
      " \"about\":\"Alumno en prácticas en Moonshot y estudiante de la Universidad de Las Palmas de Gran Canaria\",\n" +
      " \"image\":null,\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken4\",\n" +
      "       \"device\":\"LAPTOP\",\n" +
      "       \"timestamp\":1631089955516\n" +
      "    }\n" +
      " ],\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.linkedin.com/Saulo\",\n" +
      "    \"www.angellist.com/Saulo\",\n" +
      "    \"www.google.com/Saulo\"\n" +
      " ],\n" +
      " \"experiences\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Prácticas universitarias en Moonshot Innovation\",\n" +
      "       \"type\":\"APPRENTICESHIP\",\n" +
      "       \"company\":\"Moonshot Innovation\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":90.5,\n" +
      "  \"lng\":10.5,\n" +
      "  \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "       },\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":null,\n" +
      "       \"description\":\"Prácticas extracurriculares a traves de la FULP (Universidad de las Palmas de Gran Canaria)\"\n" +
      "    }\n" +
      " ],\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "       \"degree\":\"Ingeniería informática\",\n" +
      "       \"fieldOfStudy\":\"Ingeniería de software\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":null,\n" +
      "       \"grade\":7,\n" +
      "       \"address\":{\n" +
      "  \"lat\":48.5,\n" +
      "  \"lng\":19.1,\n" +
      "  \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "       },\n" +
      "       \"description\":\"Estudios universitarios realizados en la Universidad de Las Palmas de Gran Canaria, con especialización en ingeniería de software\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      \"teamMembers\":[\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"state\":\"ACCEPTED\",\n" +
      "    \"name\":\"Marcos\",\n" +
      "    \"lastname\":\"Fernandez\",\n" +
      "    \"address\":{\n" +
      "       \"lat\":35.6513383,\n" +
      "       \"lng\":139.8687196,\n" +
      "       \"formatted\":\"3-chōme-10-15 Minamikasai, Edogawa City, Tokyo 134-0085, Japan\"\n" +
      "    },\n" +
      "    \"city\":\"Tokio\",\n" +
      "    \"country\":\"Japon\",\n" +
      "    \"email\":\"marcos@outlook.es\",\n" +
      "    \"about\":\"Farmaceutico trabajador para la compañia Novartis, actual desarrolladora de la vacuna Pfizer\",\n" +
      "    \"image\":null,\n" +
      "    \"fcmTokens\":[\n" +
      "       {\n" +
      "  \"tokenId\":\"fcmToken1\",\n" +
      "  \"device\":\"SMARTPHONE\",\n" +
      "  \"timestamp\":1622975724952\n" +
      "       },\n" +
      "       {\n" +
      "  \"tokenId\":\"fcmToken4\",\n" +
      "  \"device\":\"LAPTOP\",\n" +
      "  \"timestamp\":1631089955516\n" +
      "       }\n" +
      "    ],\n" +
      "    \"socialNetworks\":[\n" +
      "       \"www.angellist.com/Marcos\",\n" +
      "       \"www.linkedin.com/Marcos\"\n" +
      "    ],\n" +
      "    \"experiences\":[\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"title\":\"Colaboración para crear la vacuna Pfizer\",\n" +
      "  \"type\":\"FULL_TIME\",\n" +
      "  \"company\":\"Novartis\",\n" +
      "  \"address\":{\n" +
      "     \"lat\":41.9,\n" +
      "     \"lng\":14.8,\n" +
      "     \"formatted\":\"203 Merrion Rd, Dublin 4, D04 NN12, Irlanda\"\n" +
      "  },\n" +
      "  \"startDate\":18333,\n" +
      "  \"endDate\":18706,\n" +
      "  \"description\":\"Colaborador de la vacuna Pfizer contra el COVID-19\"\n" +
      "       },\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"title\":\"Colaboración para crear la vacuna de la gripe A\",\n" +
      "  \"type\":\"INTERIM\",\n" +
      "  \"company\":\"Novartis\",\n" +
      "  \"address\":{\n" +
      "     \"lat\":41.9,\n" +
      "     \"lng\":14.8,\n" +
      "     \"formatted\":\"203 Merrion Rd, Dublin 4, D04 NN12, Irlanda\"\n" +
      "  },\n" +
      "  \"startDate\":15584,\n" +
      "  \"endDate\":16355,\n" +
      "  \"description\":\"Colaborador en la vacuna para acabar contra la gripe A\"\n" +
      "       }\n" +
      "    ],\n" +
      "    \"educations\":[\n" +
      "       {\n" +
      "  \"id\":\"61445159784bca6ef764c6df\",\n" +
      "  \"school\":\"Universidad de Tokio\",\n" +
      "  \"degree\":\"Farmaceutica\",\n" +
      "  \"fieldOfStudy\":\"Pandemias\",\n" +
      "  \"startDate\":15319,\n" +
      "  \"endDate\":18687,\n" +
      "  \"grade\":9.4,\n" +
      "  \"address\":{\n" +
      "     \"lat\":35.7,\n" +
      "     \"lng\":139.7,\n" +
      "     \"formatted\":\"7 Chome-3-1 Hongo, Bunkyo City, Tokyo 113-8654, Japón\"\n" +
      "  },\n" +
      "  \"description\":\"Estudiante de farmaceutica de la Universidad de Tokio\"\n" +
      "       }\n" +
      "    ]\n" +
      " }\n" +
      "      ],\n" +
      "      \"socialNetworks\":[\n" +
      " \"www.twitter.com/Trade_Secret\",\n" +
      " \"www.facebook.com/Trade_Secret\"\n" +
      "      ],\n" +
      "      \"deepTechs\":[\n" +
      " \"BIOPHARMACEUTICALS_AND_VACCINE_ENGINEERING\",\n" +
      " \"DRUG_DEVELOPMENT\",\n" +
      " \"PHARMA_NANOTECHNOLOGY\",\n" +
      " \"PHARMACEUTICAL_TOXICITY\"\n" +
      "      ],\n" +
      "      \"socialInnovations\":[\n" +
      " \"GOOD_HEALTH_AND_WELLBEING\"\n" +
      "      ],\n" +
      "      \"businessModels\":[\n" +
      " \"SERVICES\"\n" +
      "      ],\n" +
      "      \"industries\":[\n" +
      " \"HEALTH_CARE\",\n" +
      " \"PHARMACEUTICALS\"\n" +
      "      ]\n" +
      "   }\n" +
      "]"
  }

  public static project_id_get: EndpointTemplate = {
    name: "projects/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "Project project = communityApi.projects().get(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(project);\n" +
      "System.out.println(jsonObject);",
    response: "\n{\n" +
      "   \"id\":\"61445159784bca6ef764c6df\",\n" +
      "   \"actorId\":\"61445159784bca6ef764c6df\",\n" +
      "   \"name\":\"Patents\",\n" +
      "   \"description\":\"Patents\",\n" +
      "   \"trlStage\":\"BASIC_PRINCIPLES_OBSERVED\",\n" +
      "   \"media\":[\n" +
      "      \"www.youtube.com/aems83sd\",\n" +
      "      \"www.youtube.com/gwqm92ms\"\n" +
      "   ],\n" +
      "   \"protectionMethod\":\"PATENTS\",\n" +
      "   \"projectManager\":{\n" +
      "      \"id\":\"61445159784bca6ef764c6df\",\n" +
      "      \"state\":\"ACCEPTED\",\n" +
      "      \"name\":\"Iñigo\",\n" +
      "      \"lastname\":\"Aramburu\",\n" +
      "      \"address\":{\n" +
      " \"lat\":43.3038929,\n" +
      " \"lng\":-1.9604012,\n" +
      " \"formatted\":\"Wroclaw, 1, 20014 San Sebastián, Gipuzkoa, España\"\n" +
      "      },\n" +
      "      \"email\":\"iaramburu@moonshot.ceo\",\n" +
      "      \"about\":\"Experto en Ingeniería del Software.\",\n" +
      "      \"image\":null,\n" +
      "      \"fcmTokens\":[\n" +
      " {\n" +
      "    \"tokenId\":\"fcmToken1\",\n" +
      "    \"device\":\"SMARTPHONE\",\n" +
      "    \"timestamp\":1622975724952\n" +
      " }\n" +
      "      ],\n" +
      "      \"socialNetworks\":[\n" +
      " \"www.twitter.com/Iñigo\",\n" +
      " \"www.facebook.com/Iñigo\"\n" +
      "      ],\n" +
      "      \"experiences\":[\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"title\":\"Back-end developer en Moonshot Innovation\",\n" +
      "    \"type\":\"FULL_TIME\",\n" +
      "    \"company\":\"Moonshot Innovation\",\n" +
      "    \"address\":{\n" +
      "       \"lat\":90.5,\n" +
      "       \"lng\":10.5,\n" +
      "       \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "    },\n" +
      "    \"startDate\":15319,\n" +
      "    \"endDate\":18718,\n" +
      "    \"description\":\"Scrum manager en Moonshot Innovation, trabajando en el equipo de back-end\"\n" +
      " }\n" +
      "      ],\n" +
      "      \"educations\":[\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"school\":\"Universidad del País Vasco\",\n" +
      "    \"degree\":\"Ingeniería informática\",\n" +
      "    \"fieldOfStudy\":\"Ingeniería de software\",\n" +
      "    \"startDate\":15319,\n" +
      "    \"endDate\":18687,\n" +
      "    \"grade\":8,\n" +
      "    \"address\":{\n" +
      "       \"lat\":4.5,\n" +
      "       \"lng\":110.5,\n" +
      "       \"formatted\":\"Carr. More, 17-13, 48014 Bilbao, Vizcaya\"\n" +
      "    },\n" +
      "    \"description\":\"Estudios universitarios realizados en la Universidad del País Vasco\"\n" +
      " },\n" +
      " {\n" +
      "    \"id\":\"61445159784bca6ef764c6df\",\n" +
      "    \"school\":\"Universidad del País Vasco\",\n" +
      "    \"degree\":\"Master en desarrollo web\",\n" +
      "    \"fieldOfStudy\":\"Desarrollo web\",\n" +
      "    \"startDate\":15319,\n" +
      "    \"endDate\":18687,\n" +
      "    \"grade\":9.3,\n" +
      "    \"address\":{\n" +
      "       \"lat\":4.5,\n" +
      "       \"lng\":110.5,\n" +
      "       \"formatted\":\"Carr. More, 17-13, 48014 Bilbao, Vizcaya\"\n" +
      "    },\n" +
      "    \"description\":\"Master realizado en la Universidad del País Vasco para ser full stack developer\"\n" +
      " }\n" +
      "      ]\n" +
      "   },\n" +
      "   \"teamMembers\":[\n" +
      "      {\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACCEPTED\",\n" +
      " \"name\":\"Jose Juan\",\n" +
      " \"lastname\":\"Hernández\",\n" +
      " \"address\":{\n" +
      "    \"lat\":28.113549,\n" +
      "    \"lng\":-15.4366296,\n" +
      "    \"formatted\":\"C. Ing. Ramírez Doreste, 14, 35011 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      " },\n" +
      " \"city\":\"Las Palmas\",\n" +
      " \"country\":\"España\",\n" +
      " \"email\":\"josejuan@moonshot.ceo\",\n" +
      " \"about\":\"Profesor de Ingeniería de Software de la Universidad de Las Palmas de Gran Canaria\",\n" +
      " \"image\":null,\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken2\",\n" +
      "       \"device\":\"COMPUTER\",\n" +
      "       \"timestamp\":1630918457848\n" +
      "    }\n" +
      " ],\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.twitter.com/JoseJuan\",\n" +
      "    \"www.facebook.com/JoseJuan\"\n" +
      " ],\n" +
      " \"experiences\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Back-end developer en Moonshot Innovation\",\n" +
      "       \"type\":\"FULL_TIME\",\n" +
      "       \"company\":\"Moonshot Innovation\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":90.5,\n" +
      "  \"lng\":10.5,\n" +
      "  \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "       },\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18718,\n" +
      "       \"description\":\"Scrum manager en Moonshot Innovation, trabajando en el equipo de back-end\"\n" +
      "    },\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Profesor en la facultad de Ingenería informatica\",\n" +
      "       \"type\":\"OFFICIAL\",\n" +
      "       \"company\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":48.5,\n" +
      "  \"lng\":19.1,\n" +
      "  \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "       },\n" +
      "       \"startDate\":11422,\n" +
      "       \"endDate\":15319,\n" +
      "       \"description\":\"Profesor de la especialización de Ingeniería del Software\"\n" +
      "    }\n" +
      " ],\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "       \"degree\":\"Ingeniería en telecomunicaciones\",\n" +
      "       \"fieldOfStudy\":\"Big data\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":18687,\n" +
      "       \"grade\":9,\n" +
      "       \"address\":{\n" +
      "  \"lat\":48.5,\n" +
      "  \"lng\":19.1,\n" +
      "  \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "       },\n" +
      "       \"description\":\"Estudios universitarios realizados en la Universidad de Las Palmas de Gran Canaria, con especialización en BigData\"\n" +
      "    }\n" +
      " ]\n" +
      "      },\n" +
      "      {\n" +
      " \"id\":\"61445159784bca6ef764c6df\",\n" +
      " \"state\":\"ACCEPTED\",\n" +
      " \"name\":\"Jeremy\",\n" +
      " \"lastname\":\"Trujillo\",\n" +
      " \"address\":{\n" +
      "    \"lat\":28.1245582,\n" +
      "    \"lng\":-15.4325499,\n" +
      "    \"formatted\":\"C. Pío XII, 30-32, 35005 Las Palmas de Gran Canaria, Las Palmas, España\"\n" +
      " },\n" +
      " \"email\":\"trujillosanchezjeremy@gmail.com\",\n" +
      " \"about\":\"Alumno en prácticas en Moonshot y estudiante de la Universidad de Las Palmas de Gran Canaria\",\n" +
      " \"image\":null,\n" +
      " \"fcmTokens\":[\n" +
      "    {\n" +
      "       \"tokenId\":\"fcmToken3\",\n" +
      "       \"device\":\"IPAD\",\n" +
      "       \"timestamp\":1630918457848\n" +
      "    }\n" +
      " ],\n" +
      " \"socialNetworks\":[\n" +
      "    \"www.twitter.com/Jeremy\",\n" +
      "    \"www.facebook.com/Jeremy\"\n" +
      " ],\n" +
      " \"experiences\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"title\":\"Prácticas universitarias en Moonshot Innovation\",\n" +
      "       \"type\":\"APPRENTICESHIP\",\n" +
      "       \"company\":\"Moonshot Innovation\",\n" +
      "       \"address\":{\n" +
      "  \"lat\":90.5,\n" +
      "  \"lng\":10.5,\n" +
      "  \"formatted\":\"Madrid, Puerta del Sol\"\n" +
      "       },\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":null,\n" +
      "       \"description\":\"Prácticas extracurriculares a traves de la FULP (Universidad de las Palmas de Gran Canaria)\"\n" +
      "    }\n" +
      " ],\n" +
      " \"educations\":[\n" +
      "    {\n" +
      "       \"id\":\"61445159784bca6ef764c6df\",\n" +
      "       \"school\":\"Universidad de Las Palmas de Gran Canaria\",\n" +
      "       \"degree\":\"Ingeniería informática\",\n" +
      "       \"fieldOfStudy\":\"Ingeniería de software\",\n" +
      "       \"startDate\":15319,\n" +
      "       \"endDate\":null,\n" +
      "       \"grade\":7,\n" +
      "       \"address\":{\n" +
      "  \"lat\":48.5,\n" +
      "  \"lng\":19.1,\n" +
      "  \"formatted\":\"Plaza de Tafira Alta, 0, 35017 Las Palmas de Gran Canaria, Las Palmas\"\n" +
      "       },\n" +
      "       \"description\":\"Estudios universitarios realizados en la Universidad de Las Palmas de Gran Canaria, con especialización en ingeniería de software\"\n" +
      "    }\n" +
      " ]\n" +
      "      }\n" +
      "   ],\n" +
      "   \"socialNetworks\":[\n" +
      "      \"www.twitter.com/Patents\",\n" +
      "      \"www.facebook.com/Patents\"\n" +
      "   ],\n" +
      "   \"deepTechs\":[\n" +
      "      \"MACHINE_LEARNING\",\n" +
      "      \"GENERAL_PURPOSE_MACHINE_INTELLIGENCE\",\n" +
      "      \"SMART_DATA_DISCOVERY\"\n" +
      "   ],\n" +
      "   \"socialInnovations\":[\n" +
      "      \n" +
      "   ],\n" +
      "   \"businessModels\":[\n" +
      "      \"TECHNOLOGY\"\n" +
      "   ],\n" +
      "   \"industries\":[\n" +
      "      \"INFORMATION_TECHNOLOGY\"\n" +
      "   ]\n" +
      "}"
  }

  public static project_post: EndpointTemplate = {
    name: "projects",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "ProjectCreateEvent projectCreateEvent = new ProjectCreateEvent();\n" +
      "projectCreateEvent.setActorId(\"61445159784bca6ef764c6df\");\n" +
      "projectCreateEvent.setName(\"New project\");\n" +
      "projectCreateEvent.setDescription(\"New project description\");\n" +
      "projectCreateEvent.setTrlStage(TrlStage.BASIC_PRINCIPLES_OBSERVED);\n" +
      "projectCreateEvent.setMedia(new ArrayList<String>());\n" +
      "projectCreateEvent.setProtectionMethod(ProtectionMethod.COPYRIGHT);\n" +
      "projectCreateEvent.setTeamMembersIds(new ArrayList<String>());\n" +
      "projectCreateEvent.setSocialNetworks(new ArrayList<String>());\n" +
      "projectCreateEvent.setDeepTechs(new ArrayList<String>());\n" +
      "projectCreateEvent.setBusinessModels(new ArrayList<String>());\n" +
      "projectCreateEvent.setIndustries(new ArrayList<String>());\n" +
      "projectCreateEvent.setSocialInnovations(new ArrayList<String>());\n" +
      "communityApi.projects().create(app, projectCreateEvent);",
    response: null
  }

  public static project_id_put: EndpointTemplate = {
    name: "projects/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "Project project = communityApi.projects().get(app, \"61445159784bca6ef764c6df\").getResponse();\n" +
      "List<String> memberIds = project.getTeamMembers().stream().map(member -> member.getId()).collect(Collectors.toList());\n" +
      "ProjectUpdateEvent projectUpdateEvent = new ProjectUpdateEvent();\n" +
      "projectUpdateEvent.setActorId(project.getActorId());\n" +
      "projectUpdateEvent.setName(\"New name\");\n" +
      "projectUpdateEvent.setDescription(\"New description\");\n" +
      "projectUpdateEvent.setTrlStage(project.getTrlStage());\n" +
      "projectUpdateEvent.setMedia(project.getMedia());\n" +
      "projectUpdateEvent.setProtectionMethod(project.getProtectionMethod());\n" +
      "projectUpdateEvent.setProjectManagerId(project.getProjectManager().getId());\n" +
      "projectUpdateEvent.setTeamMembersIds(memberIds);\n" +
      "projectUpdateEvent.setSocialNetworks(project.getSocialNetworks());\n" +
      "projectUpdateEvent.setDeepTechs(project.getDeepTechs());\n" +
      "projectUpdateEvent.setBusinessModels(project.getBusinessModels());\n" +
      "projectUpdateEvent.setBusinessModels(project.getBusinessModels());\n" +
      "projectUpdateEvent.setSocialInnovations(project.getSocialInnovations());\n" +
      "communityApi.projects().update(app, \"61445159784bca6ef764c6df\", projectUpdateEvent);",
    response: null
  }

  public static project_id_delete: EndpointTemplate = {
    name: "projects/:id",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "communityApi.projects().delete(app, \"61445159784bca6ef764c6df\");",
    response: null
  }

  public static project_id_upload_media_put: EndpointTemplate = {
    name: "projects/:id/upload/media",
    code: "\nSystem.setProperty(\"COMMUNITY_HOST\", \"localhost\");\n" +
      "System.setProperty(\"COMMUNITY_PORT\", \"8083\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"YOUR_CLIENT_ID\";\n" +
      "String clientSecret = \"YOUR_CLIENT_SECRET\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CommunityApi communityApi = new CommunityApi();\n" +
      "File file = new File(\"C:\\\\Users\\\\saulo\\\\OneDrive\\\\Imágenes\\\\evento.jpg\");\n" +
      "communityApi.projects().uploadMedia(app, \"61445159784bca6ef764c6df\", file);",
    response: null
  }
}
