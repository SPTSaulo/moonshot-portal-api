import {EndpointTemplate} from '../../../../app/model/EndpointTemplate';

export class DatahubJavascriptTemplates {

  public static version_get: EndpointTemplate = {
    name: "version",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/datahub/version';\n\nfetch(url)\n  .then(response => response.json())\n  .then(data => console.log(JSON.stringify(data)));",
    response: "\n\"2.0.2.r15-RC1\""
  }

  public static event_post: EndpointTemplate = {
    name: "event",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/datahub/event';\n" +
      "\n" +
      "fetch(url, {\n" +
      "  method: \"POST\",\n" +
      "  body: {\n" +
      "    \"id\": \"2d06cfa6-d5fc-4884-9da6-b6fdea8c8a1a\",\n" +
      "    \"type\": \"ONLINE_EVENT_CREATE_EVENT\",\n" +
      "    \"data\": {\n" +
      "        \"id\": \"6177efe790e2d64cb4d9d21e\",\n" +
      "        \"memberId\": \"60acae8e2f799d228a4d4a85\",\n" +
      "        \"title\": \"Directo Youtube\",\n" +
      "        \"timestamp\": 1635336540,\n" +
      "        \"description\": \"Moonshot Direct\",\n" +
      "        \"url\": \"https://www.youtube.com/\"\n" +
      "    },\n" +
      "    \"ecosystem\": \"local\",\n" +
      "    \"module\": \"community\",\n" +
      "    \"version\": \"2.0.2.r13-SNAPSHOT\",\n" +
      "    \"createdAt\": 1635250151500\n" +
      "  } \n" +
      "})\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: null
  }
}
