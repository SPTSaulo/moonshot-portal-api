import {EndpointTemplate} from '../../../../app/model/EndpointTemplate';

export class DatahubPythonTemplates {

  public static version_get: EndpointTemplate = {
    name: "version",
    code: "\nimport requests as reqs\n" +
      "\n" +
      "URL = \"https://dev.moonshot.ceo/api/datahub/version\"\n" +
      "\n" +
      "response = reqs.get(URL)\n" +
      "print(response.text)",
    response: "\n\"2.0.2.r15-RC1\""
  }

  public static event_post: EndpointTemplate = {
    name: "event",
    code: "\nimport requests as reqs\n" +
      "\n" +
      "URL = \"https://dev.moonshot.ceo/api/datahub/event\"\n" +
      "\n" +
      "BODY = {\n" +
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
      "}\n" +
      "\n" +
      "response = reqs.post(URL, data=BODY)\n" +
      "print(response.text)",
    response: null
  }
}
