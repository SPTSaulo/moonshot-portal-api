import { EndpointTemplate } from '../../../../app/model/EndpointTemplate';

export class CoreJavaTemplates {

  public static version_get: EndpointTemplate = {
    name: "version",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "String version = coreApi.internal().version(app).getResponse();\n" +
      "System.out.println(version);",
    response: "\n\"2.0.11.r20-SNAPSHOT\""
  }

  public static signedUrl_get: EndpointTemplate = {
    name: "signed-url",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "String signedUrl = coreApi.internal().signedUrl(app, \"ejemplo1.pdf\", \"application/pdf\").getResponse();\n" +
      "System.out.println(signedUrl);",
    response: "\n\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/null/application/4a7ec6be-3691-4814-adf6-916bcef13ab9.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220119T183611Z&X-Amz-SignedHeaders=host&X-Amz-Expires=899&X-Amz-Credential=%2F20220119%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=32e418f10689259d85235b485fbe7a34f43cfea65cdcfee099f1bd98e22dd0ee\""
  }

  public static openGraph_get: EndpointTemplate = {
    name: "openGraph",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "String opengraph = coreApi.internal().openGraph(app, \"https://youtu.be/k3zoVAMuW5w\").getResponse();\n" +
      "System.out.println(opengraph);",
    response: "\n{\n" +
      "   \"title\":\"Tutorial RECYCLERVIEW DEFINITIVO en ANDROID \uD83D\uDCF1 con KOTLIN en español + GRID [Android en Kotlin 2022]\",\n" +
      "   \"description\":\"La guía DEFINITIVA para crear RECYCLERVIEWS en Android y AndroidX. Además aprenderás sobre como añadir DividerItemDecorator, data class, gestión de permisos,...\",\n" +
      "   \"imageURL\":\"https://i.ytimg.com/vi/k3zoVAMuW5w/maxresdefault.jpg\",\n" +
      "   \"url\":\"https://www.youtube.com/watch?v=k3zoVAMuW5w\"\n" +
      "}"
  }

  public static navbar_get: EndpointTemplate = {
    name: "navbar",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "Navbar navbar = coreApi.internal().navbar(app).getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(navbar);\n" +
      "System.out.println(jsonObject);",
    response: "\n{\n" +
      "   \"numNotifications\":0,\n" +
      "   \"modules\":[\n" +
      "      \"COMMUNITY\",\n" +
      "      \"CONNECT\",\n" +
      "      \"CHALLENGES\"\n" +
      "   ]\n" +
      "}"
  }

  public static industry_id_get: EndpointTemplate = {
    name: "industries/:id",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "Taxonomy industry = coreApi.industries().industry(app, \"61e81133a0f21a79320fcacb\").getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(industry);\n" +
      "System.out.println(jsonObject);",
    response: "\n{\n" +
      "   \"id\":\"61e81133a0f21a79320fcacb\",\n" +
      "   \"type\":\"AGRICULTURE_FORESTRY_AND_FISHING\"\n" +
      "}"
  }

  public static industries_get: EndpointTemplate = {
    name: "industries",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "List<Taxonomy> industries = coreApi.industries().all(app).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(industries);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcacb\",\n" +
      "      \"type\":\"AGRICULTURE_FORESTRY_AND_FISHING\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcacc\",\n" +
      "      \"type\":\"ARTS_AND_ENTERTAINMENT\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcacd\",\n" +
      "      \"type\":\"BIOTECHNOLOGY\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcace\",\n" +
      "      \"type\":\"CHEMICALS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcacf\",\n" +
      "      \"type\":\"COMPUTER_AND_ELECTRONICS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcad0\",\n" +
      "      \"type\":\"CONSTRUCTION\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcad1\",\n" +
      "      \"type\":\"DEFENSE_AND_SECURITY\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcad2\",\n" +
      "      \"type\":\"DISTRIBUTION_AND_LOGISTICS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcad3\",\n" +
      "      \"type\":\"EDUCATION\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcad4\",\n" +
      "      \"type\":\"ELECTRICAL_EQUIPMENT\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcad5\",\n" +
      "      \"type\":\"ELECTRICITY_AND_GAS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcad6\",\n" +
      "      \"type\":\"FINTECH_FINANCIAL_AND_INSURANCE\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcad7\",\n" +
      "      \"type\":\"FOOD_AND_BEVERAGES\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcad8\",\n" +
      "      \"type\":\"HEALTH_CARE\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcad9\",\n" +
      "      \"type\":\"HEAVY_EQUIPMENT\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcada\",\n" +
      "      \"type\":\"HOTEL\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcadb\",\n" +
      "      \"type\":\"INFORMATION_TECHNOLOGY\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcadc\",\n" +
      "      \"type\":\"INTERNET_OF_THINGS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcadd\",\n" +
      "      \"type\":\"LEGAL_ACCOUNTING_ARCHITECTURE_AND_PROFESSIONAL_SERVICES\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcade\",\n" +
      "      \"type\":\"MACHINERY_AND_EQUIPMENT\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcadf\",\n" +
      "      \"type\":\"METAL\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcae0\",\n" +
      "      \"type\":\"MINING_AND_QUARRYING\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcae1\",\n" +
      "      \"type\":\"PETROLEUM\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcae2\",\n" +
      "      \"type\":\"PHARMACEUTICALS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcae3\",\n" +
      "      \"type\":\"PUBLISHING_AUDIOVISUAL_AND_BROADCASTING\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcae4\",\n" +
      "      \"type\":\"REAL_ESTATE\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcae5\",\n" +
      "      \"type\":\"RUBBER_AND_PLASTICS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcae6\",\n" +
      "      \"type\":\"SMART_CITIES\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcae7\",\n" +
      "      \"type\":\"SPORTS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcae8\",\n" +
      "      \"type\":\"TELECOMMUNICATIONS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcae9\",\n" +
      "      \"type\":\"TEXTILES\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcaea\",\n" +
      "      \"type\":\"TRANSPORTATION\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcaeb\",\n" +
      "      \"type\":\"TRANSPORTATION_AND_WAREHOUSING\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcaec\",\n" +
      "      \"type\":\"WATER_AND_WASTE\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcaed\",\n" +
      "      \"type\":\"WHOLESALE_AND_RETAIL\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcaee\",\n" +
      "      \"type\":\"WOOD_AND_PAPER\"\n" +
      "   }\n" +
      "]"
  }

  public static businessModel_id_get: EndpointTemplate = {
    name: "business-models/:id",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "Taxonomy businessModel = coreApi.businessModels().businessModel(app, \"61e81133a0f21a79320fcabd\").getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(businessModel);\n" +
      "System.out.println(jsonObject);",
    response: "\n{\n" +
      "   \"id\":\"61e81133a0f21a79320fcabd\",\n" +
      "   \"type\":\"TECHNOLOGY\"\n" +
      "}"
  }

  public static businessModels_get: EndpointTemplate = {
    name: "business-models",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "List<Taxonomy> businessModels = coreApi.businessModels().all(app).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(businessModels);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcabd\",\n" +
      "      \"type\":\"TECHNOLOGY\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcabe\",\n" +
      "      \"type\":\"ECOMMERCE\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcabf\",\n" +
      "      \"type\":\"WEARABLES\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcac0\",\n" +
      "      \"type\":\"AGENCY\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcac1\",\n" +
      "      \"type\":\"MARKETING\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcac2\",\n" +
      "      \"type\":\"SERVICES\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcac3\",\n" +
      "      \"type\":\"SAAS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcac4\",\n" +
      "      \"type\":\"CONSUMER_PRODUCTS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcac5\",\n" +
      "      \"type\":\"OTHER\"\n" +
      "   }\n" +
      "]"
  }

  public static socialInnovation_id_get: EndpointTemplate = {
    name: "social-innovations/:id",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "Taxonomy socialInnovation = coreApi.socialInnovations().socialInnovation(app, \"61e81134a0f21a79320fcaef\").getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(socialInnovation);\n" +
      "System.out.println(jsonObject);",
    response: "\n{\n" +
      "   \"id\":\"61e81134a0f21a79320fcaef\",\n" +
      "   \"type\":\"NO_POVERTY\"\n" +
      "}"
  }

  public static socialInnovations_get: EndpointTemplate = {
    name: "social-innovations",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "List<Taxonomy> socialInnovations = coreApi.socialInnovations().all(app).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(socialInnovations);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcaef\",\n" +
      "      \"type\":\"NO_POVERTY\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcaf0\",\n" +
      "      \"type\":\"ZERO_HUNGER\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcaf1\",\n" +
      "      \"type\":\"GOOD_HEALTH_AND_WELLBEING\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcaf2\",\n" +
      "      \"type\":\"QUALITY_EDUCATION\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcaf3\",\n" +
      "      \"type\":\"GENDER_EQUALITY\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcaf4\",\n" +
      "      \"type\":\"CLEAN_WATER_AND_SANITATION\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcaf5\",\n" +
      "      \"type\":\"AFFORDABLE_AND_CLEAN_ENERGY\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcaf6\",\n" +
      "      \"type\":\"DECENT_WORK_AND_ECONOMIC_GROWTH\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcaf7\",\n" +
      "      \"type\":\"INDUSTRY_INNOVATION_AND_INFRASTRUCTURE\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcaf8\",\n" +
      "      \"type\":\"REDUCED_INEQUALITIES\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcaf9\",\n" +
      "      \"type\":\"SUSTAINABLE_CITIES_AND_COMMUNITIES\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcafa\",\n" +
      "      \"type\":\"RESPONSABLE_CONSUMPTION_AND_PRODUCTION\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcafb\",\n" +
      "      \"type\":\"CLIMATE_ACTION\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcafc\",\n" +
      "      \"type\":\"LIFE_BELOW_WATER\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcafd\",\n" +
      "      \"type\":\"LIFE_ON_LAND\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcafe\",\n" +
      "      \"type\":\"PEACE_AND_JUSTICE_STRONG_INSTITUTIONS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81134a0f21a79320fcaff\",\n" +
      "      \"type\":\"PARTNERSHIP_FOR_THE_GOALS\"\n" +
      "   }\n" +
      "]"
  }

  public static deepTech_id_get: EndpointTemplate = {
    name: "deep-techs/:id",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "DeepTechNode deepTech = coreApi.deepTechs().deepTech(app, \"61e81133a0f21a79320fcac6\").getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(deepTech);\n" +
      "System.out.println(jsonObject);",
    response: "\n{\n" +
      "   \"cells\":[\n" +
      "      {\n" +
      " \"kets\":[\n" +
      "    \"BIOACTIVE_MATERIALS\",\n" +
      "    \"BIOCOMPATIBLE_ALLOYS_AND_POLYMERS\",\n" +
      "    \"BIOMIMETICS\",\n" +
      "    \"BIOSENSING_MATERIALS\",\n" +
      "    \"DRUG_RELEASING_POLYMERS\"\n" +
      " ],\n" +
      " \"type\":\"BIOMATERIALS\"\n" +
      "      },\n" +
      "      {\n" +
      " \"kets\":[\n" +
      "    \"ADVANCED_METALS_AND_ALLOYS\",\n" +
      "    \"ELECTROACTIVE_POLYMERS\",\n" +
      "    \"FERROELECTRIC_MATERIALS\",\n" +
      "    \"FIRE_RESISTANT_MATERIALS\",\n" +
      "    \"FUNCTIONALCOATINGS_SURFACE_TREATMENTS\",\n" +
      "    \"MAGNETOSTRICTIVE_MATERIALS\",\n" +
      "    \"METAMATERIALS\",\n" +
      "    \"PIEZOELECTRIC_MATERIALS\",\n" +
      "    \"SHAPE_MEMORY_POLYMERS_AND_ALLOYS\",\n" +
      "    \"SUPERCONDUCTIVE_MATERIALS\",\n" +
      "    \"QUANTUM_DOTS\",\n" +
      "    \"MOLECULARY_IMPRINTED_POLYMERS\"\n" +
      " ],\n" +
      " \"type\":\"FUNCTIONAL_AND_SMART_MATERIALS\"\n" +
      "      },\n" +
      "      {\n" +
      " \"kets\":[\n" +
      "    \"CARBON_NANOTUBES\",\n" +
      "    \"DATA_STORAGE\",\n" +
      "    \"ELECTROCHEMICAL_COMPONENTS\",\n" +
      "    \"GRAPHENE\",\n" +
      "    \"NANOCELLULOSE\",\n" +
      "    \"NANOCOMPOSITES\",\n" +
      "    \"NANOPOROUS_MATERIALS\",\n" +
      "    \"NANOWIRES\"\n" +
      " ],\n" +
      " \"type\":\"NANOSTRUCTURE_MATERIALS\"\n" +
      "      },\n" +
      "      {\n" +
      " \"kets\":[\n" +
      "    \"COMMERCIAL_UAVS\",\n" +
      "    \"CONDUCTIVE_POLYMERS\",\n" +
      "    \"DRONES\",\n" +
      "    \"MEMS\",\n" +
      "    \"MOLECULAR_TRANSISTORS\",\n" +
      "    \"ELECTRONIC_NANOTUBES\",\n" +
      "    \"SMART_DUST\",\n" +
      "    \"SMART_ROBOTS\",\n" +
      "    \"SMART_SENSORS_AND_MONITORING\",\n" +
      "    \"THIN_FILM_SOLAR_CELLS_OPV\",\n" +
      "    \"SOTS/SOFA\",\n" +
      "    \"TELEMATIC_AND_V2X\",\n" +
      "    \"PREDICTIVE_MAINTENANCE\",\n" +
      "    \"MANUFACTURING_EXECUTION_SYSTEM_(MES)\",\n" +
      "    \"SAFETY\",\n" +
      "    \"AUTONOMOUS_CAR\",\n" +
      "    \"AUTONOMOUS_DRIVING\",\n" +
      "    \"POWERTRAIN\",\n" +
      "    \"IOT_AND_IIOT_PLATFORMS\",\n" +
      "    \"KERFLESS_WAFER_TECHNOLOGY\"\n" +
      " ],\n" +
      " \"type\":\"ROBOTICS_SEMICONDUCTORS\"\n" +
      "      },\n" +
      "      {\n" +
      " \"kets\":[\n" +
      "    \"ADVANCED_AND_ENGINEERING_POLYMERS_TECHNICAL_THERMOPLASTIC\",\n" +
      "    \"ADVANCED_CERAMICS\",\n" +
      "    \"ADVANCED_COMPOSITES\",\n" +
      "    \"ADVANCED_METALLIC_FOAMS\",\n" +
      "    \"HIGH_PERFORMANCE_CONCRETE\",\n" +
      "    \"PLATFORM_CONSOLIDATION\"\n" +
      " ],\n" +
      " \"type\":\"STRUCTURAL_MATERIALS\"\n" +
      "      },\n" +
      "      {\n" +
      " \"kets\":[\n" +
      "    \"VAT_PHOTOPOLYMERISATION\",\n" +
      "    \"MATERIAL_JETTING\",\n" +
      "    \"BINDER_JETTING\",\n" +
      "    \"MATERIAL_EXTRUSION\",\n" +
      "    \"POWDER_BED_FUSION\",\n" +
      "    \"SHEET_LAMINATION\",\n" +
      "    \"DIRECTED_ENERGY_DEPOSITION\"\n" +
      " ],\n" +
      " \"type\":\"MANUFACTURING_ADDITIVE\"\n" +
      "      }\n" +
      "   ],\n" +
      "   \"id\":\"61e81133a0f21a79320fcac6\",\n" +
      "   \"type\":\"NANOTECH_AND_ROBOTICS\"\n" +
      "}"
  }

  public static deepTechs_get: EndpointTemplate = {
    name: "deep-techs",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "List<DeepTechNode> deepTechs = coreApi.deepTechs().all(app).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(deepTechs);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcac6\",\n" +
      "      \"type\":\"NANOTECH_AND_ROBOTICS\",\n" +
      "      \"cells\":[\n" +
      " {\n" +
      "    \"type\":\"BIOMATERIALS\",\n" +
      "    \"kets\":[\n" +
      "\"BIOACTIVE_MATERIALS\",\n" +
      "\"BIOCOMPATIBLE_ALLOYS_AND_POLYMERS\",\n" +
      "\"BIOMIMETICS\",\n" +
      "\"BIOSENSING_MATERIALS\",\n" +
      "\"DRUG_RELEASING_POLYMERS\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"FUNCTIONAL_AND_SMART_MATERIALS\",\n" +
      "    \"kets\":[\n" +
      "\"ADVANCED_METALS_AND_ALLOYS\",\n" +
      "\"ELECTROACTIVE_POLYMERS\",\n" +
      "\"FERROELECTRIC_MATERIALS\",\n" +
      "\"FIRE_RESISTANT_MATERIALS\",\n" +
      "\"FUNCTIONALCOATINGS_SURFACE_TREATMENTS\",\n" +
      "\"MAGNETOSTRICTIVE_MATERIALS\",\n" +
      "\"METAMATERIALS\",\n" +
      "\"PIEZOELECTRIC_MATERIALS\",\n" +
      "\"SHAPE_MEMORY_POLYMERS_AND_ALLOYS\",\n" +
      "\"SUPERCONDUCTIVE_MATERIALS\",\n" +
      "\"QUANTUM_DOTS\",\n" +
      "\"MOLECULARY_IMPRINTED_POLYMERS\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"NANOSTRUCTURE_MATERIALS\",\n" +
      "    \"kets\":[\n" +
      "\"CARBON_NANOTUBES\",\n" +
      "\"DATA_STORAGE\",\n" +
      "\"ELECTROCHEMICAL_COMPONENTS\",\n" +
      "\"GRAPHENE\",\n" +
      "\"NANOCELLULOSE\",\n" +
      "\"NANOCOMPOSITES\",\n" +
      "\"NANOPOROUS_MATERIALS\",\n" +
      "\"NANOWIRES\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"ROBOTICS_SEMICONDUCTORS\",\n" +
      "    \"kets\":[\n" +
      "\"COMMERCIAL_UAVS\",\n" +
      "\"CONDUCTIVE_POLYMERS\",\n" +
      "\"DRONES\",\n" +
      "\"MEMS\",\n" +
      "\"MOLECULAR_TRANSISTORS\",\n" +
      "\"ELECTRONIC_NANOTUBES\",\n" +
      "\"SMART_DUST\",\n" +
      "\"SMART_ROBOTS\",\n" +
      "\"SMART_SENSORS_AND_MONITORING\",\n" +
      "\"THIN_FILM_SOLAR_CELLS_OPV\",\n" +
      "\"SOTS/SOFA\",\n" +
      "\"TELEMATIC_AND_V2X\",\n" +
      "\"PREDICTIVE_MAINTENANCE\",\n" +
      "\"MANUFACTURING_EXECUTION_SYSTEM_(MES)\",\n" +
      "\"SAFETY\",\n" +
      "\"AUTONOMOUS_CAR\",\n" +
      "\"AUTONOMOUS_DRIVING\",\n" +
      "\"POWERTRAIN\",\n" +
      "\"IOT_AND_IIOT_PLATFORMS\",\n" +
      "\"KERFLESS_WAFER_TECHNOLOGY\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"STRUCTURAL_MATERIALS\",\n" +
      "    \"kets\":[\n" +
      "\"ADVANCED_AND_ENGINEERING_POLYMERS_TECHNICAL_THERMOPLASTIC\",\n" +
      "\"ADVANCED_CERAMICS\",\n" +
      "\"ADVANCED_COMPOSITES\",\n" +
      "\"ADVANCED_METALLIC_FOAMS\",\n" +
      "\"HIGH_PERFORMANCE_CONCRETE\",\n" +
      "\"PLATFORM_CONSOLIDATION\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"MANUFACTURING_ADDITIVE\",\n" +
      "    \"kets\":[\n" +
      "\"VAT_PHOTOPOLYMERISATION\",\n" +
      "\"MATERIAL_JETTING\",\n" +
      "\"BINDER_JETTING\",\n" +
      "\"MATERIAL_EXTRUSION\",\n" +
      "\"POWDER_BED_FUSION\",\n" +
      "\"SHEET_LAMINATION\",\n" +
      "\"DIRECTED_ENERGY_DEPOSITION\"\n" +
      "    ]\n" +
      " }\n" +
      "      ]\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcac7\",\n" +
      "      \"type\":\"CLEANTECH\",\n" +
      "      \"cells\":[\n" +
      " {\n" +
      "    \"type\":\"BUILDING_SUSTAINABLE\",\n" +
      "    \"kets\":[\n" +
      "\"ENERGY_EFFICIENCY_IN_BUILDINGS\",\n" +
      "\"GREEN_MATERIALS\",\n" +
      "\"INDOOR_AIR_QUALITY\",\n" +
      "\"RESOURCE_EFFICIENCY_IN_BUILDING\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"WATER_RESOURCES_AND_DELIVERY\",\n" +
      "    \"kets\":[\n" +
      "\"IRRIGATION\",\n" +
      "\"VALUE_ADDED_RESOURCES_FROM_WATER\",\n" +
      "\"WATER_FILTRATION\",\n" +
      "\"WATER_HARVESTING\",\n" +
      "\"WATER_INFRASTRUCTURE_AND_DISTRIBUTION\",\n" +
      "\"WATER_RESOURCE_IDENTIFICATION\",\n" +
      "\"PLASTIC_WASTE_TECHNOLOGIES\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"WASTE\",\n" +
      "    \"kets\":[\n" +
      "\"BIOREACTOR_LANDFILL\",\n" +
      "\"MECHANICAL_BIOLOGICAL_TREATMENT_OF_MUNICIPAL_SOLID_WASTE\",\n" +
      "\"PLASMA_GASIFICATION\",\n" +
      "\"WASTE_RECYCLING\",\n" +
      "\"WASTE_CONVERSION_TECHNOLOGIES\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"WATER_TREATMENT_AND_PURIFICATION\",\n" +
      "    \"kets\":[\n" +
      "\"DESALINATION\",\n" +
      "\"INDUSTRIAL_AND_PRODUCED_WATER_PROCESSES\",\n" +
      "\"POINT_OF_USE_WATER_TREATMENT\",\n" +
      "\"WASTE_WATER_TREATMENT\",\n" +
      "\"WATER_DESINFECTION\",\n" +
      "\"ELECTROLYSIS\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"AGRITECH_AND_FOOD\",\n" +
      "    \"kets\":[\n" +
      "\"AGRICULTURAL_TECHNOLOGIES\",\n" +
      "\"ANIMAL_HEALTH\",\n" +
      "\"CROP_PROTECTION\",\n" +
      "\"CULTIVATION_AND_POST_HARVEST\",\n" +
      "\"FISHERIES_AND_AQUATIC_ECOSYSTEMS_TECHNOLOGIES\",\n" +
      "\"FOOD_TECHNOLOGIES\",\n" +
      "\"GREENHOUSE\",\n" +
      "\"NEW_GENERATION_FERTILIZERS\",\n" +
      "\"SEEDS_AND_PROPAGATION\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"AIR_POLLUTION_AND_CLIMATE\",\n" +
      "    \"kets\":[\n" +
      "\"CARBON_CAPTURE_AND_STORAGE_CARBON_CAPTURE_USE_AND_STORAGE\",\n" +
      "\"CATALYTIC_CONVERTER\",\n" +
      "\"EMISSIONS_BIOLOGICAL_TREATMENT\",\n" +
      "\"EMISSION_MONITORING\",\n" +
      "\"SCRUBBING_SYSTEMS\",\n" +
      "\"AIR_PURIFICATION_TECHNOLOGIES\"\n" +
      "    ]\n" +
      " }\n" +
      "      ]\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcac8\",\n" +
      "      \"type\":\"ENERGY\",\n" +
      "      \"cells\":[\n" +
      " {\n" +
      "    \"type\":\"RENEWABLE_ENERGY\",\n" +
      "    \"kets\":[\n" +
      "\"BIOMASS\",\n" +
      "\"CONCENTRATED_SOLAR_POWER\",\n" +
      "\"GEOTHERMAL\",\n" +
      "\"HYDROGEN_FUEL_CELL\",\n" +
      "\"MARINE_RENEWABLES\",\n" +
      "\"OCEAN_AND_HYDROGEN\",\n" +
      "\"SOLAR_ENERGY\",\n" +
      "\"WIND\",\n" +
      "\"KINETIC\",\n" +
      "\"THERMAL_ENERGY\",\n" +
      "\"WASTE_HEAT_RECOVERY\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"ENERGY_EFFICIENCY\",\n" +
      "    \"kets\":[\n" +
      "\"EFFICIENT_HEATING_AND_COOLING\",\n" +
      "\"HOME_AND_FACILITIES_ENERGY_MANAGEMENT\",\n" +
      "\"INDUSTRIAL_ENERGY_MANAGEMENT\",\n" +
      "\"LIGHTING\",\n" +
      "\"SMART_APPLIANCES\",\n" +
      "\"SSL\",\n" +
      "\"LIGHT_EMITTING_DIODE\",\n" +
      "\"ORGANIC_LIGHT_EMITTING_DIODE\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"ENERGY_STORAGE\",\n" +
      "    \"kets\":[\n" +
      "\"FUEL_CELLS\",\n" +
      "\"LITHIUM_ION\",\n" +
      "\"METAL_AIR\",\n" +
      "\"REDOX_FLOW_BATTERIES\",\n" +
      "\"SUPERCAPACITORS\",\n" +
      "\"BATTERY_MANAGEMENT_SYSTEM\",\n" +
      "\"ON_BOARD_FAST_CHARGING\",\n" +
      "\"POWERTRAIN\",\n" +
      "\"NANOWIRE_BATTERIES\",\n" +
      "\"TENG_TRIBOELECTRIC_NANOGENERATOR\",\n" +
      "\"GRAPHENE_BATTERIES\",\n" +
      "\"FOAM_BATTERIES\",\n" +
      "\"SODIUM_ION_BATTERIES\",\n" +
      "\"LIQUID_FLOW_BATTERIES\",\n" +
      "\"CARBON_ION_BATTERY\",\n" +
      "\"ZINC_AIR_BATTERIES\",\n" +
      "\"STRETCHABLE_BATTERIES\",\n" +
      "\"SMART_CLOTHING_BATTERY\",\n" +
      "\"SOUND_POWERED_CHARGING\",\n" +
      "\"URINE_POWERED_BATTERIES\",\n" +
      "\"ALUMINIUM_AIR_BATTERY\",\n" +
      "\"FLASH_BATTERIES\",\n" +
      "\"ITES\",\n" +
      "\"GEOMECHANICAL_PUMPED_STORAGE\",\n" +
      "\"KINETIC_ENERGY_STORAGE\",\n" +
      "\"VANADIUM_FLOW_BATTERY\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"SMART_GRIDS\",\n" +
      "    \"kets\":[\n" +
      "\"CHARGING_INFRASTRUCTURE\",\n" +
      "\"MANAGEMENT\",\n" +
      "\"MANAGEMENT_MEASURING_AND_CONTROL\",\n" +
      "\"MICROGRIDS\",\n" +
      "\"SMART_METERS\",\n" +
      "\"OVER_THE_AIR_CHARGING\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"BIOENERGY\",\n" +
      "    \"kets\":[\n" +
      "\"BIO_HEATING\",\n" +
      "\"BIODIESEL_ADVANCED\",\n" +
      "\"CO_GENERATION\",\n" +
      "\"MICROBIOME\"\n" +
      "    ]\n" +
      " }\n" +
      "      ]\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcac9\",\n" +
      "      \"type\":\"DIGITAL_LIFE_AND_AI\",\n" +
      "      \"cells\":[\n" +
      " {\n" +
      "    \"type\":\"ARTIFICIAL_INTELLIGENCE\",\n" +
      "    \"kets\":[\n" +
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
      " },\n" +
      " {\n" +
      "    \"type\":\"BIG_DATA_AND_NEW_LANGUAGES\",\n" +
      "    \"kets\":[\n" +
      "\"BYOD_AND_BORDERLESS_APPS\",\n" +
      "\"CLOUD_COMPUTING\",\n" +
      "\"CONTEXT_BROKERING\",\n" +
      "\"DATA_ANALYTICS\",\n" +
      "\"DATA_BROKER_PAAS\",\n" +
      "\"MICRO_DATA_CENTERS\",\n" +
      "\"PERSONAL_ANALYTICS\",\n" +
      "\"SMART_DATA_DISCOVERY\",\n" +
      "\"SOFTWARE_DEFINED_ANYTHING\",\n" +
      "\"ASSET_MANAGEMENT\",\n" +
      "\"AUGMENTED_WRITING\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"BLOCKCHAIN\",\n" +
      "    \"kets\":[\n" +
      "\"PUBLIC_BLOCKCHAIN\",\n" +
      "\"PRIVATE_BLOCKCHAIN\",\n" +
      "\"CONSORTIUM_BLOCKCHAIN\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"CYBERSECURITY\",\n" +
      "    \"kets\":[\n" +
      "\"ANTIFRAUD_AND_IDENTITY_MANAGEMENT\",\n" +
      "\"AUTOMATED_SECURITY\",\n" +
      "\"BEHAVIORAL_ANALYTICS_AND_ANOMALY_DETECTION\",\n" +
      "\"CREDENTIAL_MANAGEMENT\",\n" +
      "\"CYBER_RISK_MANAGEMENT\",\n" +
      "\"DECEPTION_SECURITY\",\n" +
      "\"DEVICE_AUTHENTICATION\",\n" +
      "\"IDENTITY_AS_A_SERVICE\",\n" +
      "\"PREDICTIVE_INTELLIGENCE\",\n" +
      "\"QUANTUM_ENCRYPTION\",\n" +
      "\"THREAT_INTELLIGENCE\",\n" +
      "\"FOTA\",\n" +
      "\"MOBILITY\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"DIGITAL_LIFE\",\n" +
      "    \"kets\":[\n" +
      "\"AFFECTIVE_COMPUTING\",\n" +
      "\"AUGMENTED_REALITY\",\n" +
      "\"CONVERSATIONAL_USER_INTERFACES\",\n" +
      "\"GAMIFICATION\",\n" +
      "\"GESTURE_CONTROL_DEVICES\",\n" +
      "\"HUMAN_AUGMENTATION\",\n" +
      "\"VIRTUAL_PERSONAL_ASSISTANTS\",\n" +
      "\"VIRTUAL_REALITY\",\n" +
      "\"VOLUMETRIC_DISPLAYS\",\n" +
      "\"E_LEARNING\",\n" +
      "\"DIGITAL_TWIN\",\n" +
      "\"VEHICLE_STYLING\",\n" +
      "\"V2V\",\n" +
      "\"V2X\",\n" +
      "\"IOT\",\n" +
      "\"GERONTECHNOLOGY\",\n" +
      "\"FALL_DETECTION\",\n" +
      "\"SMART_HOME\",\n" +
      "\"LIVING_COMMUNITIES\",\n" +
      "\"END_OF_LIFE_PLANNING\",\n" +
      "\"MOBILITY_AIDS\",\n" +
      "\"DL_TELEHEALTH\",\n" +
      "\"ELDER_PLATFORMS\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"MOBILE_AND_COMMUNICATION\",\n" +
      "    \"kets\":[\n" +
      "\"5G_NETWORKS\",\n" +
      "\"GEOLOCATION\",\n" +
      "\"GEOLOCATION_INDOOR_AND_OUTDOOR_POSITIONING_AND_DIGITAL_MAPPING\",\n" +
      "\"SMART_ANTENNAS\",\n" +
      "\"TABLETS_AND_SMARTPHONES_APPS\",\n" +
      "\"WIRELESS_SENSOR_NETWORKS\",\n" +
      "\"HMI_AND_INFOTAINMENT\",\n" +
      "\"IOT_POINT_SOLUTIONS\",\n" +
      "\"IOT_PLATFORMS\",\n" +
      "\"BLUETOOTH_5_0\",\n" +
      "\"WIRELESS_TECHNOLOGIES\",\n" +
      "\"NEAR_FIELD_TECHNOLOGY\",\n" +
      "\"LIFI\",\n" +
      "\"802_11AXSDX\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"WEARABLES\",\n" +
      "    \"kets\":[\n" +
      "\"GLASSES\",\n" +
      "\"JEWELRY\",\n" +
      "\"SMART_BANDS\",\n" +
      "\"SMART_CLOTHES\",\n" +
      "\"SMART_HEADGEAR\",\n" +
      "\"WATCHES\"\n" +
      "    ]\n" +
      " }\n" +
      "      ]\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"61e81133a0f21a79320fcaca\",\n" +
      "      \"type\":\"LIFE_SCIENCE\",\n" +
      "      \"cells\":[\n" +
      " {\n" +
      "    \"type\":\"FUTURE_MEDICINE\",\n" +
      "    \"kets\":[\n" +
      "\"NEW_THERAPIES_FOR_CHRONIC_DISEASES\",\n" +
      "\"PERSONALIZED_MEDICINE\",\n" +
      "\"PLATFORMS_FOR_HEALTH\",\n" +
      "\"REGENERATIVE_MEDICINE\",\n" +
      "\"LS_TELEHEALTH\",\n" +
      "\"COGNITIVE_CARE\",\n" +
      "\"SENSORY_AIDS\",\n" +
      "\"FEMTECH\",\n" +
      "\"MENTAL_HEALTH\",\n" +
      "\"CNS\",\n" +
      "\"INFECTIOUS_DISEASE\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"MEDICAL_DEVICES\",\n" +
      "    \"kets\":[\n" +
      "\"BIO_ROBOTICS\",\n" +
      "\"BIOMEDICAL_IMAGING\",\n" +
      "\"BIONICS\",\n" +
      "\"DENTAL_TECHNOLOGIES\",\n" +
      "\"VITAL_SIGNS_TRACKING\",\n" +
      "\"PERSONAL_EMERGENCY_RESPONSE\",\n" +
      "\"MEDICATION_MANAGEMENT\",\n" +
      "\"DIAGNOSTIC\",\n" +
      "\"ORTHOPEDIC_IMPLANT\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"PHARMACEUTICAL_TECHNOLOGIES\",\n" +
      "    \"kets\":[\n" +
      "\"BIOPHARMACEUTICALS_AND_VACCINE_ENGINEERING\",\n" +
      "\"DRUG_DEVELOPMENT\",\n" +
      "\"PHARMA_NANOTECHNOLOGY\",\n" +
      "\"PHARMACEUTICAL_TOXICITY\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"BIOENGINEERING\",\n" +
      "    \"kets\":[\n" +
      "\"BIOMEDICAL_COMPUTING_AND_BIOINFORMATICS\",\n" +
      "\"GENE_AND_CELL_THERAPY\",\n" +
      "\"MICROBIOLOGY_TECHNOLOGIES\",\n" +
      "\"NANOBIOENGINEER\",\n" +
      "\"NANOBIOMATERIALS\",\n" +
      "\"OMICS_TECHNOLOGIES\",\n" +
      "\"SYNTHETIC_BIOLOGY\",\n" +
      "\"BODY_ENGINEERING\"\n" +
      "    ]\n" +
      " },\n" +
      " {\n" +
      "    \"type\":\"CANCER\",\n" +
      "    \"kets\":[\n" +
      "\"ARTIFICIAL_INTELLIGENCE_BASED_THERAPY_DESIGN\",\n" +
      "\"DNA_CAGES\",\n" +
      "\"EMBEDDED\",\n" +
      "\"EMBEDDED_IMPLANTED_AND_DIGESTIBLE_SENSORS\",\n" +
      "\"FLUID_BIOPSY\",\n" +
      "\"IMAGE_GUIDED_TECHNOLOGIES\",\n" +
      "\"IN_SILICO_TRIALS\",\n" +
      "\"MEASURING_LAB_MARKERS_AT_HOME\",\n" +
      "\"MONITORING_AND_PROVIDING_CARE\",\n" +
      "\"MONOCLONAL_ANTIBODIES\",\n" +
      "\"MULTI_FUNCTIONAL_RADIOLOGY\",\n" +
      "\"PAIN_MANAGEMENT\",\n" +
      "\"PRECISION_SURGERY\",\n" +
      "\"PREVENTION_AND_DIAGNOSIS\",\n" +
      "\"REAL_TIME_CANCER_DIAGNOSTICS\",\n" +
      "\"SMALL_MOLECULES\"\n" +
      "    ]\n" +
      " }\n" +
      "      ]\n" +
      "   }\n" +
      "]"
  }

  public static ecosystemInitialized_get: EndpointTemplate = {
    name: "ecosystem/initialized",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "Boolean initialized = coreApi.ecosystems().initialized(app).getResponse();\n" +
      "System.out.println(initialized);",
    response: "\ntrue"
  }

  public static ecosystem_get: EndpointTemplate = {
    name: "ecosystem",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "Ecosystem ecosystem = coreApi.ecosystems().current(app).getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(ecosystem);\n" +
      "System.out.println(jsonObject);",
    response: "\n{\n" +
      "   \"id\":\"60acae8f2f799d228a4d4a87\",\n" +
      "   \"type\":\"CORPORATE\",\n" +
      "   \"name\":\"DEV  Moonshot\",\n" +
      "   \"address\":\"\",\n" +
      "   \"latitude\":null,\n" +
      "   \"longitude\":null,\n" +
      "   \"city\":null,\n" +
      "   \"country\":null,\n" +
      "   \"phone\":\"+349999999999\",\n" +
      "   \"web\":\"www.mooonshot.ceo\",\n" +
      "   \"description\":\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\",\n" +
      "   \"objectives\":\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\",\n" +
      "   \"logo\":{\n" +
      "      \"original\":\"https://localhost/drive/ecosystem/profile/original/61d59e5a73384c704417d080.png\",\n" +
      "      \"thumbnail\":null,\n" +
      "      \"crop\":{\n" +
      " \"x\":0,\n" +
      " \"y\":0,\n" +
      " \"width\":200,\n" +
      " \"height\":200\n" +
      "      }\n" +
      "   },\n" +
      "   \"acceptedActors\":[\n" +
      "      \"STARTUP\",\n" +
      "      \"PUBLIC_ENTITY\",\n" +
      "      \"COMPANY\",\n" +
      "      \"NGO\",\n" +
      "      \"HUB\",\n" +
      "      \"CLUSTER\",\n" +
      "      \"EXPERT\",\n" +
      "      \"RESEARCH_GROUP\",\n" +
      "      \"MENTOR\",\n" +
      "      \"TALENT\",\n" +
      "      \"UNIVERSITY\",\n" +
      "      \"ORGANIZATION_INVESTOR\",\n" +
      "      \"PERSON_INVESTOR\"\n" +
      "   ],\n" +
      "   \"services\":[\n" +
      "      \"FINANCIAL_AND_VALUATION\",\n" +
      "      \"FACILITIES\",\n" +
      "      \"MARKETING_AND_DESIGN_THINKING\",\n" +
      "      \"COMMERCIAL_SERVICES\",\n" +
      "      \"MANAGEMENT_SERVICES\",\n" +
      "      \"PROTOTYPES_AND_TESTING\",\n" +
      "      \"BACKEND_SERVICES\",\n" +
      "      \"IP_PROTECTION_AND_PATENTS\",\n" +
      "      \"SMART_DATA_AND_AI_SERVICES\",\n" +
      "      \"BUSINESS_AND_STRATEGY\",\n" +
      "      \"CHALLENGES\",\n" +
      "      \"LEGAL_SERVICES\",\n" +
      "      \"TECHNOLOGY_ACCELERATION\"\n" +
      "   ],\n" +
      "   \"customServices\":null,\n" +
      "   \"media\":[\n" +
      "      \n" +
      "   ],\n" +
      "   \"socialNetworks\":[\n" +
      "      \"https://www.linkedin.com/in/saulo-santana-batista-678138216/\",\n" +
      "      \"https://www.instagram.com/saulo.sb/\"\n" +
      "   ],\n" +
      "   \"deepTechs\":[\n" +
      "      \"DEEP_LEARNING\",\n" +
      "      \"MACHINE_LEARNING\",\n" +
      "      \"ENTERPRISE_TAXONOMY_AND_ONTOLOGY_MANAGEMENT\"\n" +
      "   ],\n" +
      "   \"businessModels\":[\n" +
      "      \"SAAS\"\n" +
      "   ],\n" +
      "   \"industries\":[\n" +
      "      \"FINTECH_FINANCIAL_AND_INSURANCE\"\n" +
      "   ],\n" +
      "   \"socialInnovations\":[\n" +
      "      \"LIFE_BELOW_WATER\",\n" +
      "      \"CLIMATE_ACTION\",\n" +
      "      \"RESPONSABLE_CONSUMPTION_AND_PRODUCTION\",\n" +
      "      \"SUSTAINABLE_CITIES_AND_COMMUNITIES\",\n" +
      "      \"REDUCED_INEQUALITIES\"\n" +
      "   ]\n" +
      "}"
  }

  public static ecosystem_post: EndpointTemplate = {
    name: "ecosystem",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      " System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      " System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      " String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      " String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      " App app = new App(clientId, clientSecret);\n" +
      " CoreApi coreApi = new CoreApi();\n" +
      " EcosystemCreateEvent ecosystemCreateEvent = new EcosystemCreateEvent();\n" +
      " ecosystemCreateEvent.setType(EcosystemType.CORPORATE);\n" +
      " ecosystemCreateEvent.setName(\"New ecosystem\");\n" +
      " ecosystemCreateEvent.setAddress(\"Calle Poniente, 33\");\n" +
      " ecosystemCreateEvent.setLatitude(22.7);\n" +
      " ecosystemCreateEvent.setLongitude(80.9);\n" +
      " ecosystemCreateEvent.setCity(\"Madrid\");\n" +
      " ecosystemCreateEvent.setCountry(\"Spain\");\n" +
      " ecosystemCreateEvent.setPhone(\"+34666666666\");\n" +
      " ecosystemCreateEvent.setWeb(\"https://dev.moonshot.ceo\");\n" +
      " ecosystemCreateEvent.setDescription(\"Ecosystem description\");\n" +
      " ecosystemCreateEvent.setObjectives(\"Ecosystem objectives\");\n" +
      " ecosystemCreateEvent.setLogo(new Image());\n" +
      " ecosystemCreateEvent.setAcceptedActors(new ArrayList<String>());\n" +
      " ecosystemCreateEvent.setServices(new ArrayList<EcosystemServiceType>());\n" +
      " ecosystemCreateEvent.setCustomServices(new ArrayList<String>());\n" +
      " ecosystemCreateEvent.setMedia(new ArrayList<String>());\n" +
      " ecosystemCreateEvent.setSocialNetworks(new ArrayList<String>());\n" +
      " ecosystemCreateEvent.setDeepTechs(new ArrayList<String>());\n" +
      " ecosystemCreateEvent.setBusinessModels(new ArrayList<String>());\n" +
      " ecosystemCreateEvent.setIndustries(new ArrayList<String>());\n" +
      " ecosystemCreateEvent.setSocialNetworks(new ArrayList<String>());\n" +
      " coreApi.ecosystems().create(app, ecosystemCreateEvent);",
    response: null
  }

  public static ecosystem_upload_original_post: EndpointTemplate = {
    name: "ecosystems/upload/original",
    code: "\nTODO",
    response: "\nTODO"
  }

  public static ecosystem_upload_thumbnail_post: EndpointTemplate = {
    name: "ecosystems/upload/thumbnail",
    code: "\nTODO",
    response: "\nTODO"
  }

  public static ecosystem_id_upload_media_put: EndpointTemplate = {
    name: "ecosystems/:id/upload/media",
    code: "\nTODO",
    response: "\nTODO"
  }

  public static ecosystem_put: EndpointTemplate = {
    name: "ecosystems/:id",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "Ecosystem ecosystem = coreApi.ecosystems().current(app).getResponse();\n" +
      "EcosystemUpdateEvent ecosystemUpdateEvent = new EcosystemUpdateEvent();\n" +
      "ecosystemUpdateEvent.setId(ecosystem.getId());\n" +
      "ecosystemUpdateEvent.setType(ecosystem.getType());\n" +
      "ecosystemUpdateEvent.setName(ecosystem.getName());\n" +
      "ecosystemUpdateEvent.setAddress(ecosystem.getAddress());\n" +
      "ecosystemUpdateEvent.setLatitude(ecosystem.getLatitude());\n" +
      "ecosystemUpdateEvent.setLongitude(ecosystem.getLongitude());\n" +
      "ecosystemUpdateEvent.setCity(ecosystem.getCity());\n" +
      "ecosystemUpdateEvent.setCountry(\"Spain\");\n" +
      "ecosystemUpdateEvent.setPhone(ecosystem.getPhone());\n" +
      "ecosystemUpdateEvent.setWeb(ecosystem.getWeb());\n" +
      "ecosystemUpdateEvent.setDescription(\"New description\");\n" +
      "ecosystemUpdateEvent.setObjectives(ecosystem.getObjectives());\n" +
      "ecosystemUpdateEvent.setLogo(ecosystem.getLogo());\n" +
      "ecosystemUpdateEvent.setAcceptedActors(ecosystem.getAcceptedActors());\n" +
      "ecosystemUpdateEvent.setServices(ecosystem.getServices());\n" +
      "ecosystemUpdateEvent.setCustomServices(ecosystem.getCustomServices());\n" +
      "ecosystemUpdateEvent.setMedia(ecosystem.getMedia());\n" +
      "ecosystemUpdateEvent.setSocialNetworks(ecosystem.getSocialNetworks());\n" +
      "ecosystemUpdateEvent.setDeepTechs(ecosystem.getDeepTechs());\n" +
      "ecosystemUpdateEvent.setBusinessModels(ecosystem.getBusinessModels());\n" +
      "ecosystemUpdateEvent.setIndustries(ecosystem.getIndustries());\n" +
      "ecosystemUpdateEvent.setSocialNetworks(ecosystem.getSocialNetworks());\n" +
      "coreApi.ecosystems().update(app, ecosystemUpdateEvent);",
    response: null
  }

  public static invitations_get: EndpointTemplate = {
    name: "invitations",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "Invitation invitation = coreApi.invitations().paged(app, null, 0).getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(invitation);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61e92e99b05ee46d7c6e2342\",\n" +
      "      \"email\":\"saulosantanab@hotmail.com\",\n" +
      "      \"reason\":\"On behalf of DEV  Moonshot ecosystem I am pleased to invite you to participate in our Innovation Ecosystem, a digital environment for sharing ideas and disruptive projects, as well as collaborating in challenges and workshops. I look forward to having you joining our Ecosystem, with other exclusive partners, to take a close look at our common disruptive goals.\",\n" +
      "      \"notification\":true,\n" +
      "      \"createdAt\":1639590502463,\n" +
      "      \"senderName\":\"David Suriol\",\n" +
      "      \"sentOn\":1639590502463\n" +
      "   }\n" +
      "]",
  }

  public static invitations_by_email_get: EndpointTemplate = {
    name: "invitations/by/email",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "Invitation invitation = coreApi.invitations().byEmail(app, \"saulosantanab@hotmail.com\").getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(invitation);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61e92e99b05ee46d7c6e2342\",\n" +
      "      \"email\":\"saulosantanab@hotmail.com\",\n" +
      "      \"reason\":\"On behalf of DEV  Moonshot ecosystem I am pleased to invite you to participate in our Innovation Ecosystem, a digital environment for sharing ideas and disruptive projects, as well as collaborating in challenges and workshops. I look forward to having you joining our Ecosystem, with other exclusive partners, to take a close look at our common disruptive goals.\",\n" +
      "      \"notification\":true,\n" +
      "      \"createdAt\":1639590502463,\n" +
      "      \"senderName\":\"David Suriol\",\n" +
      "      \"sentOn\":1639590502463\n" +
      "   }\n" +
      "]",
  }

  public static invitation_post: EndpointTemplate = {
    name: "invitations",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "InvitationCreateEvent invitation = new InvitationCreateEvent();\n" +
      "invitation.setEmail(\"email1@gmail.com\");\n" +
      "invitation.setReason(\"You must to be an ecosystem member\");\n" +
      "invitation.setNotification(false);\n" +
      "invitation.setCreatedAt(ZonedDateTime.now());\n" +
      "invitation.setSenderId(\"1\");\n" +
      "invitation.setSentOn(ZonedDateTime.now());\n" +
      "coreApi.invitations().create(app, invitation);",
    response: null
  }

  public static invitation_put: EndpointTemplate = {
    name: "invitations/:id",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "Invitation invitation = coreApi.invitations().byEmail(app, \"saulosantanab@hotmail.com\").getResponse();\n" +
      "InvitationUpdateEvent invitationUpdateEvent = new InvitationUpdateEvent();\n" +
      "invitationUpdateEvent.setId(invitation.getId());\n" +
      "invitationUpdateEvent.setSentOn(invitation.getSentOn());\n" +
      "invitationUpdateEvent.setSenderId(\"1\");\n" +
      "coreApi.invitations().update(app, invitationUpdateEvent);",
    response: null
  }

  public static invitation_id_delete: EndpointTemplate = {
    name: "invitations/:id",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "coreApi.invitations().delete(app, \"1\");",
    response: null
  }

  public static notifications_get: EndpointTemplate = {
    name: "notifications",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "NotificationPage notificationPage = coreApi.notifications().paged(app, 1, 10).getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(notificationPage);\n" +
      "System.out.println(jsonObject);",
    response: "\n{\n" +
      "   \"numNotifications\":8,\n" +
      "   \"notifications\":[\n" +
      "      {\n" +
      " \"id\":\"61d2b45e409e37009c9cba38\",\n" +
      " \"channels\":[\n" +
      "    \"EMAIL\",\n" +
      "    \"PUSH\"\n" +
      " ],\n" +
      " \"type\":\"DIRECT_CHAT_NEW_MESSAGE\",\n" +
      " \"push\":{\n" +
      "    \"title\":\"David Suriol has sent you a direct chat message.\",\n" +
      "    \"body\":\"Good Morning Jeremy. La factura que me has enviado esta mañana ya está pagada. Lo único que deberías corregir de ella es la numeración. Al iniciar un año nuevo, la numeración comienza de cero, por tanto debería ser la 1.\",\n" +
      "    \"icon\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg\",\n" +
      "    \"fcmTokens\":[\n" +
      "       {\n" +
      "  \"tokenId\":\"e9_l7bJRgOf16Z4CtKDexa:APA91bETYNMGdo1sLyTJr9JKcqsSIH0YRdA37D9C8AWChSq6VRe5Did0rtoHEi3RT8WtNwbD92dauX5-ZUMUjnVhPfUdtxzt2I_sZc4Xn_g4EOnY3E1ubU5xxe0zJgF2bqQ636Bwu6Qu\",\n" +
      "  \"device\":\"laptop/computer\",\n" +
      "  \"timestamp\":1636537814645\n" +
      "       }\n" +
      "    ],\n" +
      "    \"parameters\":{\n" +
      "       \"action_url\":\"https://demo.moonshot.ceo/community/direct/60b5468f3a28bb702667cc15\",\n" +
      "       \"current_chat\":\"60b5468f3a28bb702667cc15\",\n" +
      "       \"action\":\"new-tab\"\n" +
      "    }\n" +
      " },\n" +
      " \"email\":{\n" +
      "    \"from\":{\n" +
      "       \"email\":null,\n" +
      "       \"name\":\"David Suriol\"\n" +
      "    },\n" +
      "    \"to\":\"trujillosanchezjeremy@gmail.com\",\n" +
      "    \"cc\":null,\n" +
      "    \"bcc\":null,\n" +
      "    \"subject\":\"You have a new message\",\n" +
      "    \"templateId\":\"direct_chat_message\",\n" +
      "    \"params\":{\n" +
      "       \"image\":\"https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg\",\n" +
      "       \"link\":\"https://demo.moonshot.ceo/community/direct/60b5468f3a28bb702667cc15\",\n" +
      "       \"actorName\":\"David Suriol\"\n" +
      "    }\n" +
      " },\n" +
      " \"readed\":true,\n" +
      " \"createdAt\":1641198686675,\n" +
      " \"owner\":{\n" +
      "    \"id\":\"60b53ce23a28bb702667cbe6\",\n" +
      "    \"image\":{\n" +
      "       \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce2f54eb87400016b07/image/fdf85852-fa7c-410e-a9f7-0c1a7f7a8894.jpg\",\n" +
      "       \"thumbnail\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg\",\n" +
      "       \"crop\":{\n" +
      "  \"x\":0,\n" +
      "  \"y\":0,\n" +
      "  \"width\":340,\n" +
      "  \"height\":340\n" +
      "       }\n" +
      "    },\n" +
      "    \"name\":\"David Suriol\"\n" +
      " },\n" +
      " \"recipients\":[\n" +
      "    {\n" +
      "       \"id\":\"60b545953a28bb702667cc0f\",\n" +
      "       \"image\":null,\n" +
      "       \"name\":null\n" +
      "    }\n" +
      " ],\n" +
      " \"followUpRoomId\":null,\n" +
      " \"directChatRoomId\":\"60b5468f3a28bb702667cc15\",\n" +
      " \"wallPostName\":null,\n" +
      " \"followUpRoomName\":null\n" +
      "      },\n" +
      "      {\n" +
      " \"id\":\"61c9a7ed409e37009c9cb9af\",\n" +
      " \"channels\":[\n" +
      "    \"EMAIL\",\n" +
      "    \"PUSH\"\n" +
      " ],\n" +
      " \"type\":\"DIRECT_CHAT_NEW_MESSAGE\",\n" +
      " \"push\":{\n" +
      "    \"title\":\"Saulo Santana has sent you a direct chat message.\",\n" +
      "    \"body\":\"Este no lo cierres\",\n" +
      "    \"icon\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/null/image/d80a8d3c-42b0-4d8d-bf1d-fda6e788eb2c.png\",\n" +
      "    \"fcmTokens\":[\n" +
      "       {\n" +
      "  \"tokenId\":\"e9_l7bJRgOf16Z4CtKDexa:APA91bETYNMGdo1sLyTJr9JKcqsSIH0YRdA37D9C8AWChSq6VRe5Did0rtoHEi3RT8WtNwbD92dauX5-ZUMUjnVhPfUdtxzt2I_sZc4Xn_g4EOnY3E1ubU5xxe0zJgF2bqQ636Bwu6Qu\",\n" +
      "  \"device\":\"laptop/computer\",\n" +
      "  \"timestamp\":1636537814645\n" +
      "       }\n" +
      "    ],\n" +
      "    \"parameters\":{\n" +
      "       \"action_url\":\"https://demo.moonshot.ceo/community/direct/6140921c8971775054ea59a3\",\n" +
      "       \"current_chat\":\"6140921c8971775054ea59a3\",\n" +
      "       \"action\":\"new-tab\"\n" +
      "    }\n" +
      " },\n" +
      " \"email\":{\n" +
      "    \"from\":{\n" +
      "       \"email\":null,\n" +
      "       \"name\":\"Saulo Santana\"\n" +
      "    },\n" +
      "    \"to\":\"trujillosanchezjeremy@gmail.com\",\n" +
      "    \"cc\":null,\n" +
      "    \"bcc\":null,\n" +
      "    \"subject\":\"You have a new message\",\n" +
      "    \"templateId\":\"direct_chat_message\",\n" +
      "    \"params\":{\n" +
      "       \"image\":\"https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg\",\n" +
      "       \"link\":\"https://demo.moonshot.ceo/community/direct/6140921c8971775054ea59a3\",\n" +
      "       \"actorName\":\"Saulo Santana\"\n" +
      "    }\n" +
      " },\n" +
      " \"readed\":true,\n" +
      " \"createdAt\":1640605677190,\n" +
      " \"owner\":{\n" +
      "    \"id\":\"60b543bd3a28bb702667cc09\",\n" +
      "    \"image\":{\n" +
      "       \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/null/image/d80a8d3c-42b0-4d8d-bf1d-fda6e788eb2c.png\",\n" +
      "       \"thumbnail\":null,\n" +
      "       \"crop\":null\n" +
      "    },\n" +
      "    \"name\":\"Saulo Santana\"\n" +
      " },\n" +
      " \"recipients\":[\n" +
      "    {\n" +
      "       \"id\":\"60b545953a28bb702667cc0f\",\n" +
      "       \"image\":null,\n" +
      "       \"name\":null\n" +
      "    }\n" +
      " ],\n" +
      " \"followUpRoomId\":null,\n" +
      " \"directChatRoomId\":\"6140921c8971775054ea59a3\",\n" +
      " \"wallPostName\":null,\n" +
      " \"followUpRoomName\":null\n" +
      "      },\n" +
      "      {\n" +
      " \"id\":\"61c9a7d8409e37009c9cb9ae\",\n" +
      " \"channels\":[\n" +
      "    \"EMAIL\",\n" +
      "    \"PUSH\"\n" +
      " ],\n" +
      " \"type\":\"DIRECT_CHAT_NEW_MESSAGE\",\n" +
      " \"push\":{\n" +
      "    \"title\":\"Saulo Santana has sent you a direct chat message.\",\n" +
      "    \"body\":\"Hola\",\n" +
      "    \"icon\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/null/image/d80a8d3c-42b0-4d8d-bf1d-fda6e788eb2c.png\",\n" +
      "    \"fcmTokens\":[\n" +
      "       {\n" +
      "  \"tokenId\":\"e9_l7bJRgOf16Z4CtKDexa:APA91bETYNMGdo1sLyTJr9JKcqsSIH0YRdA37D9C8AWChSq6VRe5Did0rtoHEi3RT8WtNwbD92dauX5-ZUMUjnVhPfUdtxzt2I_sZc4Xn_g4EOnY3E1ubU5xxe0zJgF2bqQ636Bwu6Qu\",\n" +
      "  \"device\":\"laptop/computer\",\n" +
      "  \"timestamp\":1636537814645\n" +
      "       }\n" +
      "    ],\n" +
      "    \"parameters\":{\n" +
      "       \"action_url\":\"https://demo.moonshot.ceo/community/direct/6140921c8971775054ea59a3\",\n" +
      "       \"current_chat\":\"6140921c8971775054ea59a3\",\n" +
      "       \"action\":\"new-tab\"\n" +
      "    }\n" +
      " },\n" +
      " \"email\":{\n" +
      "    \"from\":{\n" +
      "       \"email\":null,\n" +
      "       \"name\":\"Saulo Santana\"\n" +
      "    },\n" +
      "    \"to\":\"trujillosanchezjeremy@gmail.com\",\n" +
      "    \"cc\":null,\n" +
      "    \"bcc\":null,\n" +
      "    \"subject\":\"You have a new message\",\n" +
      "    \"templateId\":\"direct_chat_message\",\n" +
      "    \"params\":{\n" +
      "       \"image\":\"https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg\",\n" +
      "       \"link\":\"https://demo.moonshot.ceo/community/direct/6140921c8971775054ea59a3\",\n" +
      "       \"actorName\":\"Saulo Santana\"\n" +
      "    }\n" +
      " },\n" +
      " \"readed\":true,\n" +
      " \"createdAt\":1640605656316,\n" +
      " \"owner\":{\n" +
      "    \"id\":\"60b543bd3a28bb702667cc09\",\n" +
      "    \"image\":{\n" +
      "       \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/null/image/d80a8d3c-42b0-4d8d-bf1d-fda6e788eb2c.png\",\n" +
      "       \"thumbnail\":null,\n" +
      "       \"crop\":null\n" +
      "    },\n" +
      "    \"name\":\"Saulo Santana\"\n" +
      " },\n" +
      " \"recipients\":[\n" +
      "    {\n" +
      "       \"id\":\"60b545953a28bb702667cc0f\",\n" +
      "       \"image\":null,\n" +
      "       \"name\":null\n" +
      "    }\n" +
      " ],\n" +
      " \"followUpRoomId\":null,\n" +
      " \"directChatRoomId\":\"6140921c8971775054ea59a3\",\n" +
      " \"wallPostName\":null,\n" +
      " \"followUpRoomName\":null\n" +
      "      },\n" +
      "      {\n" +
      " \"id\":\"61bc5fd2e4d11a2c3797238b\",\n" +
      " \"channels\":[\n" +
      "    \"EMAIL\",\n" +
      "    \"PUSH\"\n" +
      " ],\n" +
      " \"type\":\"DIRECT_CHAT_NEW_MESSAGE\",\n" +
      " \"push\":{\n" +
      "    \"title\":\"David Suriol has sent you a direct chat message.\",\n" +
      "    \"body\":\"conéctate un momento\",\n" +
      "    \"icon\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg\",\n" +
      "    \"fcmTokens\":[\n" +
      "       {\n" +
      "  \"tokenId\":\"e9_l7bJRgOf16Z4CtKDexa:APA91bETYNMGdo1sLyTJr9JKcqsSIH0YRdA37D9C8AWChSq6VRe5Did0rtoHEi3RT8WtNwbD92dauX5-ZUMUjnVhPfUdtxzt2I_sZc4Xn_g4EOnY3E1ubU5xxe0zJgF2bqQ636Bwu6Qu\",\n" +
      "  \"device\":\"laptop/computer\",\n" +
      "  \"timestamp\":1636537814645\n" +
      "       }\n" +
      "    ],\n" +
      "    \"parameters\":{\n" +
      "       \"action_url\":\"https://demo.moonshot.ceo/community/direct/60b5468f3a28bb702667cc15\",\n" +
      "       \"current_chat\":\"60b5468f3a28bb702667cc15\",\n" +
      "       \"action\":\"new-tab\"\n" +
      "    }\n" +
      " },\n" +
      " \"email\":{\n" +
      "    \"from\":{\n" +
      "       \"email\":null,\n" +
      "       \"name\":\"David Suriol\"\n" +
      "    },\n" +
      "    \"to\":\"trujillosanchezjeremy@gmail.com\",\n" +
      "    \"cc\":null,\n" +
      "    \"bcc\":null,\n" +
      "    \"subject\":\"You have a new message\",\n" +
      "    \"templateId\":\"direct_chat_message\",\n" +
      "    \"params\":{\n" +
      "       \"image\":\"https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg\",\n" +
      "       \"link\":\"https://demo.moonshot.ceo/community/direct/60b5468f3a28bb702667cc15\",\n" +
      "       \"actorName\":\"David Suriol\"\n" +
      "    }\n" +
      " },\n" +
      " \"readed\":true,\n" +
      " \"createdAt\":1639735249908,\n" +
      " \"owner\":{\n" +
      "    \"id\":\"60b53ce23a28bb702667cbe6\",\n" +
      "    \"image\":{\n" +
      "       \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce2f54eb87400016b07/image/fdf85852-fa7c-410e-a9f7-0c1a7f7a8894.jpg\",\n" +
      "       \"thumbnail\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg\",\n" +
      "       \"crop\":{\n" +
      "  \"x\":0,\n" +
      "  \"y\":0,\n" +
      "  \"width\":340,\n" +
      "  \"height\":340\n" +
      "       }\n" +
      "    },\n" +
      "    \"name\":\"David Suriol\"\n" +
      " },\n" +
      " \"recipients\":[\n" +
      "    {\n" +
      "       \"id\":\"60b545953a28bb702667cc0f\",\n" +
      "       \"image\":null,\n" +
      "       \"name\":null\n" +
      "    }\n" +
      " ],\n" +
      " \"followUpRoomId\":null,\n" +
      " \"directChatRoomId\":\"60b5468f3a28bb702667cc15\",\n" +
      " \"wallPostName\":null,\n" +
      " \"followUpRoomName\":null\n" +
      "      },\n" +
      "      {\n" +
      " \"id\":\"61bc5fb2e4d11a2c37972389\",\n" +
      " \"channels\":[\n" +
      "    \"EMAIL\",\n" +
      "    \"PUSH\"\n" +
      " ],\n" +
      " \"type\":\"DIRECT_CHAT_NEW_MESSAGE\",\n" +
      " \"push\":{\n" +
      "    \"title\":\"David Suriol has sent you a direct chat message.\",\n" +
      "    \"body\":\"Muchas gracias Jeremy\",\n" +
      "    \"icon\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg\",\n" +
      "    \"fcmTokens\":[\n" +
      "       {\n" +
      "  \"tokenId\":\"e9_l7bJRgOf16Z4CtKDexa:APA91bETYNMGdo1sLyTJr9JKcqsSIH0YRdA37D9C8AWChSq6VRe5Did0rtoHEi3RT8WtNwbD92dauX5-ZUMUjnVhPfUdtxzt2I_sZc4Xn_g4EOnY3E1ubU5xxe0zJgF2bqQ636Bwu6Qu\",\n" +
      "  \"device\":\"laptop/computer\",\n" +
      "  \"timestamp\":1636537814645\n" +
      "       }\n" +
      "    ],\n" +
      "    \"parameters\":{\n" +
      "       \"action_url\":\"https://demo.moonshot.ceo/community/direct/60b5468f3a28bb702667cc15\",\n" +
      "       \"current_chat\":\"60b5468f3a28bb702667cc15\",\n" +
      "       \"action\":\"new-tab\"\n" +
      "    }\n" +
      " },\n" +
      " \"email\":{\n" +
      "    \"from\":{\n" +
      "       \"email\":null,\n" +
      "       \"name\":\"David Suriol\"\n" +
      "    },\n" +
      "    \"to\":\"trujillosanchezjeremy@gmail.com\",\n" +
      "    \"cc\":null,\n" +
      "    \"bcc\":null,\n" +
      "    \"subject\":\"You have a new message\",\n" +
      "    \"templateId\":\"direct_chat_message\",\n" +
      "    \"params\":{\n" +
      "       \"image\":\"https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg\",\n" +
      "       \"link\":\"https://demo.moonshot.ceo/community/direct/60b5468f3a28bb702667cc15\",\n" +
      "       \"actorName\":\"David Suriol\"\n" +
      "    }\n" +
      " },\n" +
      " \"readed\":true,\n" +
      " \"createdAt\":1639735218748,\n" +
      " \"owner\":{\n" +
      "    \"id\":\"60b53ce23a28bb702667cbe6\",\n" +
      "    \"image\":{\n" +
      "       \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce2f54eb87400016b07/image/fdf85852-fa7c-410e-a9f7-0c1a7f7a8894.jpg\",\n" +
      "       \"thumbnail\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg\",\n" +
      "       \"crop\":{\n" +
      "  \"x\":0,\n" +
      "  \"y\":0,\n" +
      "  \"width\":340,\n" +
      "  \"height\":340\n" +
      "       }\n" +
      "    },\n" +
      "    \"name\":\"David Suriol\"\n" +
      " },\n" +
      " \"recipients\":[\n" +
      "    {\n" +
      "       \"id\":\"60b545953a28bb702667cc0f\",\n" +
      "       \"image\":null,\n" +
      "       \"name\":null\n" +
      "    }\n" +
      " ],\n" +
      " \"followUpRoomId\":null,\n" +
      " \"directChatRoomId\":\"60b5468f3a28bb702667cc15\",\n" +
      " \"wallPostName\":null,\n" +
      " \"followUpRoomName\":null\n" +
      "      },\n" +
      "      {\n" +
      " \"id\":\"61b1d54f27bfcf6a121315a8\",\n" +
      " \"channels\":[\n" +
      "    \"EMAIL\",\n" +
      "    \"PUSH\"\n" +
      " ],\n" +
      " \"type\":\"FOLLOW_UP_ROOM_INVITED\",\n" +
      " \"push\":{\n" +
      "    \"title\":\"Jeremy, you have been invited to a follow up room.\",\n" +
      "    \"body\":\"Iñigo Aramburu has invited you to Desarrollo.\",\n" +
      "    \"icon\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60c9dd45cd028255201ad096/image/989cef10-c7cf-4ae5-9847-19a992783457.jpg\",\n" +
      "    \"fcmTokens\":[\n" +
      "       {\n" +
      "  \"tokenId\":\"e9_l7bJRgOf16Z4CtKDexa:APA91bETYNMGdo1sLyTJr9JKcqsSIH0YRdA37D9C8AWChSq6VRe5Did0rtoHEi3RT8WtNwbD92dauX5-ZUMUjnVhPfUdtxzt2I_sZc4Xn_g4EOnY3E1ubU5xxe0zJgF2bqQ636Bwu6Qu\",\n" +
      "  \"device\":\"laptop/computer\",\n" +
      "  \"timestamp\":1636537814645\n" +
      "       }\n" +
      "    ],\n" +
      "    \"parameters\":{\n" +
      "       \"action_url\":\"https://demo.moonshot.ceo/community/follow-up-rooms/61b1d54f2eb80a3bd7e718de\",\n" +
      "       \"action\":\"new-tab\"\n" +
      "    }\n" +
      " },\n" +
      " \"email\":{\n" +
      "    \"from\":{\n" +
      "       \"email\":null,\n" +
      "       \"name\":\"Iñigo Aramburu\"\n" +
      "    },\n" +
      "    \"to\":\"trujillosanchezjeremy@gmail.com\",\n" +
      "    \"cc\":null,\n" +
      "    \"bcc\":null,\n" +
      "    \"subject\":\"You have been invited to a follow up room\",\n" +
      "    \"templateId\":\"follow_up_room_invited\",\n" +
      "    \"params\":{\n" +
      "       \"furName\":\"Desarrollo\",\n" +
      "       \"image\":\"https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg\",\n" +
      "       \"link\":\"https://demo.moonshot.ceo/community/follow-up-rooms/61b1d54f2eb80a3bd7e718de\",\n" +
      "       \"memberName\":\"Iñigo Aramburu\"\n" +
      "    }\n" +
      " },\n" +
      " \"readed\":true,\n" +
      " \"createdAt\":1639044431795,\n" +
      " \"owner\":{\n" +
      "    \"id\":\"60c9dd45cd028255201ad096\",\n" +
      "    \"image\":{\n" +
      "       \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60c9dd45cd028255201ad096/image/989cef10-c7cf-4ae5-9847-19a992783457.jpg\",\n" +
      "       \"thumbnail\":null,\n" +
      "       \"crop\":null\n" +
      "    },\n" +
      "    \"name\":\"Iñigo Aramburu\"\n" +
      " },\n" +
      " \"recipients\":[\n" +
      "    {\n" +
      "       \"id\":\"60b545953a28bb702667cc0f\",\n" +
      "       \"image\":null,\n" +
      "       \"name\":null\n" +
      "    }\n" +
      " ],\n" +
      " \"followUpRoomId\":\"61b1d54f2eb80a3bd7e718de\",\n" +
      " \"directChatRoomId\":null,\n" +
      " \"wallPostName\":null,\n" +
      " \"followUpRoomName\":\"Desarrollo\"\n" +
      "      },\n" +
      "      {\n" +
      " \"id\":\"61a60711928dd85b155eab87\",\n" +
      " \"channels\":[\n" +
      "    \"EMAIL\"\n" +
      " ],\n" +
      " \"type\":\"WALL_POST_LIKE\",\n" +
      " \"push\":null,\n" +
      " \"email\":{\n" +
      "    \"from\":{\n" +
      "       \"email\":null,\n" +
      "       \"name\":\"Saulo Santana\"\n" +
      "    },\n" +
      "    \"to\":\"trujillosanchezjeremy@gmail.com\",\n" +
      "    \"cc\":null,\n" +
      "    \"bcc\":null,\n" +
      "    \"subject\":\"Your post has received a like\",\n" +
      "    \"templateId\":\"wall_post_like\",\n" +
      "    \"params\":{\n" +
      "       \"image\":\"https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg\",\n" +
      "       \"postName\":\"Post prueb...\",\n" +
      "       \"link\":\"https://demo.moonshot.ceo\",\n" +
      "       \"memberName\":\"Saulo Santana\"\n" +
      "    }\n" +
      " },\n" +
      " \"readed\":true,\n" +
      " \"createdAt\":1638270737179,\n" +
      " \"owner\":{\n" +
      "    \"id\":\"60b543bd3a28bb702667cc09\",\n" +
      "    \"image\":{\n" +
      "       \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/null/image/d80a8d3c-42b0-4d8d-bf1d-fda6e788eb2c.png\",\n" +
      "       \"thumbnail\":null,\n" +
      "       \"crop\":null\n" +
      "    },\n" +
      "    \"name\":\"Saulo Santana\"\n" +
      " },\n" +
      " \"recipients\":[\n" +
      "    {\n" +
      "       \"id\":\"60b545953a28bb702667cc0f\",\n" +
      "       \"image\":null,\n" +
      "       \"name\":null\n" +
      "    }\n" +
      " ],\n" +
      " \"followUpRoomId\":null,\n" +
      " \"directChatRoomId\":null,\n" +
      " \"wallPostName\":\"Post prueb...\",\n" +
      " \"followUpRoomName\":null\n" +
      "      },\n" +
      "      {\n" +
      " \"id\":\"61a0a53b5529493e3388bb8f\",\n" +
      " \"channels\":[\n" +
      "    \"EMAIL\"\n" +
      " ],\n" +
      " \"type\":\"DIRECT_CHAT_NEW_MESSAGE\",\n" +
      " \"push\":{\n" +
      "    \"title\":\"David Suriol has sent you a direct chat message.\",\n" +
      "    \"body\":\"https://youtu.be/csEC220rxzQ\",\n" +
      "    \"icon\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg\",\n" +
      "    \"fcmTokens\":null,\n" +
      "    \"parameters\":{\n" +
      "       \"action_url\":\"https://demo.moonshot.ceo/community/direct/60b5468f3a28bb702667cc15\",\n" +
      "       \"current_chat\":\"60b5468f3a28bb702667cc15\",\n" +
      "       \"action\":\"new-tab\"\n" +
      "    }\n" +
      " },\n" +
      " \"email\":{\n" +
      "    \"from\":{\n" +
      "       \"email\":null,\n" +
      "       \"name\":\"David Suriol\"\n" +
      "    },\n" +
      "    \"to\":\"trujillosanchezjeremy@gmail.com\",\n" +
      "    \"cc\":null,\n" +
      "    \"bcc\":null,\n" +
      "    \"subject\":\"You have a new message\",\n" +
      "    \"templateId\":\"direct_chat_message\",\n" +
      "    \"params\":{\n" +
      "       \"image\":\"https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg\",\n" +
      "       \"link\":\"https://demo.moonshot.ceo/community/direct/60b5468f3a28bb702667cc15\",\n" +
      "       \"actorName\":\"David Suriol\"\n" +
      "    }\n" +
      " },\n" +
      " \"readed\":true,\n" +
      " \"createdAt\":1637918011022,\n" +
      " \"owner\":{\n" +
      "    \"id\":\"60b53ce23a28bb702667cbe6\",\n" +
      "    \"image\":{\n" +
      "       \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce2f54eb87400016b07/image/fdf85852-fa7c-410e-a9f7-0c1a7f7a8894.jpg\",\n" +
      "       \"thumbnail\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg\",\n" +
      "       \"crop\":{\n" +
      "  \"x\":0,\n" +
      "  \"y\":0,\n" +
      "  \"width\":340,\n" +
      "  \"height\":340\n" +
      "       }\n" +
      "    },\n" +
      "    \"name\":\"David Suriol\"\n" +
      " },\n" +
      " \"recipients\":[\n" +
      "    {\n" +
      "       \"id\":\"60b545953a28bb702667cc0f\",\n" +
      "       \"image\":null,\n" +
      "       \"name\":null\n" +
      "    }\n" +
      " ],\n" +
      " \"followUpRoomId\":null,\n" +
      " \"directChatRoomId\":\"60b5468f3a28bb702667cc15\",\n" +
      " \"wallPostName\":null,\n" +
      " \"followUpRoomName\":null\n" +
      "      }\n" +
      "   ]\n" +
      "}"
  }

  public static notifications_id_get: EndpointTemplate = {
    name: "notifications/:id",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "Notification notification = coreApi.notifications().notification(app, \"61979934ff9e3333fc5d77f1\").getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(notification);\n" +
      "System.out.println(jsonObject);",
    response: "\n{\n" +
      "   \"owner\":{\n" +
      "      \"image\":{\n" +
      " \"thumbnail\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60accfeb97acf93f5f69e05d/image/c2605aaa-6856-40a4-835e-ec4ee0c2b28d.jpg\",\n" +
      " \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60accfeb97acf93f5f69e05d/image/4ce995df-491f-4f76-b685-140a63caa0d0.jpg\",\n" +
      " \"crop\":{\n" +
      "    \"width\":397,\n" +
      "    \"x\":97,\n" +
      "    \"y\":38,\n" +
      "    \"height\":396\n" +
      " }\n" +
      "      },\n" +
      "      \"name\":\"Iñigo Aramburu\",\n" +
      "      \"id\":\"60accfeb97acf93f5f69e05d\"\n" +
      "   },\n" +
      "   \"readed\":true,\n" +
      "   \"createdAt\":\"2021-11-19T12:31:48.188Z[Atlantic/Canary]\",\n" +
      "   \"channels\":[\n" +
      "      \"EMAIL\"\n" +
      "   ],\n" +
      "   \"recipients\":[\n" +
      "      {\n" +
      " \"id\":\"60d6095a71ca73649a03239b\"\n" +
      "      }\n" +
      "   ],\n" +
      "   \"id\":\"61979934ff9e3333fc5d77f1\",\n" +
      "   \"type\":\"DIRECT_CHAT_NEW_MESSAGE\",\n" +
      "   \"directChatRoomId\":\"616ea32f5f00ec19d2f0b298\",\n" +
      "   \"push\":{\n" +
      "      \"icon\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60accfeb97acf93f5f69e05d/image/c2605aaa-6856-40a4-835e-ec4ee0c2b28d.jpg\",\n" +
      "      \"body\":\"Iñigo Aramburu SYSTEM.MESSAGES.MEET_START\",\n" +
      "      \"title\":\"Iñigo Aramburu has sent you a direct chat message.\",\n" +
      "      \"parameters\":{\n" +
      " \"action_url\":\"https://localhost/community/direct/616ea32f5f00ec19d2f0b298\",\n" +
      " \"current_chat\":\"616ea32f5f00ec19d2f0b298\",\n" +
      " \"action\":\"new-tab\"\n" +
      "      }\n" +
      "   },\n" +
      "   \"email\":{\n" +
      "      \"subject\":\"You have a new message\",\n" +
      "      \"from\":{\n" +
      " \"name\":\"Iñigo Aramburu\"\n" +
      "      },\n" +
      "      \"to\":\"borja.gallifrey@gmail.com\",\n" +
      "      \"params\":{\n" +
      " \"link\":\"https://localhost/community/direct/616ea32f5f00ec19d2f0b298\",\n" +
      " \"image\":\"https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg\",\n" +
      " \"actorName\":\"Iñigo Aramburu\"\n" +
      "      },\n" +
      "      \"templateId\":\"direct_chat_message\"\n" +
      "   }\n" +
      "}"
  }

  public static notifications_pending_get: EndpointTemplate = {
    name: "notifications/pending",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "NotificationPage notificationPage = coreApi.notifications().pending(app).getResponse();\n" +
      "JSONArray jsonObject = new JSONArray(notificationPage);\n" +
      "System.out.println(jsonObject);",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61e98dd22de66b2b63905a13\",\n" +
      "      \"channels\":[\n" +
      " \"EMAIL\",\n" +
      " \"PUSH\"\n" +
      "      ],\n" +
      "      \"type\":\"DIRECT_CHAT_NEW_MESSAGE\",\n" +
      "      \"push\":{\n" +
      " \"title\":\"Jeremy Trujillo Sánchez has sent you a direct chat message.\",\n" +
      " \"body\":\"Hola\",\n" +
      " \"icon\":\"https://dev.moonshot.ceo/drive/members/profile/original/61e805dd18cf4a5c025d8a00.jpeg\",\n" +
      " \"fcmTokens\":[\n" +
      "    \n" +
      " ],\n" +
      " \"parameters\":{\n" +
      "    \"action_url\":\"https://dev.moonshot.ceo/community/direct/6140921c8971775054ea59a3\",\n" +
      "    \"current_chat\":\"6140921c8971775054ea59a3\",\n" +
      "    \"action\":\"new-tab\"\n" +
      " }\n" +
      "      },\n" +
      "      \"email\":{\n" +
      " \"from\":{\n" +
      "    \"email\":null,\n" +
      "    \"name\":\"Jeremy Trujillo Sánchez\"\n" +
      " },\n" +
      " \"to\":\"saulobach1@gmail.com\",\n" +
      " \"cc\":null,\n" +
      " \"bcc\":null,\n" +
      " \"subject\":\"You have a new message\",\n" +
      " \"templateId\":\"direct_chat_message\",\n" +
      " \"params\":{\n" +
      "    \"image\":\"https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg\",\n" +
      "    \"link\":\"https://dev.moonshot.ceo/community/direct/6140921c8971775054ea59a3\",\n" +
      "    \"actorName\":\"Jeremy Trujillo Sánchez\"\n" +
      " }\n" +
      "      },\n" +
      "      \"readed\":false,\n" +
      "      \"createdAt\":1642696146445,\n" +
      "      \"owner\":{\n" +
      " \"id\":\"60b545953a28bb702667cc0f\",\n" +
      " \"image\":{\n" +
      "    \"original\":\"https://dev.moonshot.ceo/drive/members/profile/original/61e805dd18cf4a5c025d8a00.jpeg\",\n" +
      "    \"thumbnail\":null,\n" +
      "    \"crop\":null\n" +
      " },\n" +
      " \"name\":\"Jeremy Trujillo Sánchez\"\n" +
      "      },\n" +
      "      \"recipients\":[\n" +
      " {\n" +
      "    \"id\":\"60b543bd3a28bb702667cc09\",\n" +
      "    \"image\":null,\n" +
      "    \"name\":null\n" +
      " }\n" +
      "      ],\n" +
      "      \"followUpRoomId\":null,\n" +
      "      \"directChatRoomId\":\"6140921c8971775054ea59a3\",\n" +
      "      \"wallPostName\":null,\n" +
      "      \"followUpRoomName\":null\n" +
      "   }\n" +
      "]"
  }

  public static notification_post: EndpointTemplate = {
    name: "notifications",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "Notification notification = new Notification();\n" +
      "notification.setChannels(new ArrayList<NotificationChannel>());\n" +
      "notification.setType(NotificationType.DIRECT_CHAT_NEW_MESSAGE);\n" +
      "notification.setPush(new PushData());\n" +
      "notification.setEmail(new Email());\n" +
      "notification.setReaded(false);\n" +
      "notification.setCreatedAt(ZonedDateTime.now());\n" +
      "notification.setOwner(new NotificationMember());\n" +
      "notification.setRecipients(new ArrayList<NotificationMember>());\n" +
      "notification.setFollowUpRoomId(null);\n" +
      "notification.setDirectChatRoomId(\"1\");\n" +
      "notification.setFollowUpRoomName(null);\n" +
      "notification.setWallPostName(null);\n" +
      "coreApi.notifications().create(app, notification);",
    response: null
  }

  public static notification_put: EndpointTemplate = {
    name: "notifications/:id",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "Notification notification = coreApi.notifications().notification(app, \"61979934ff9e3333fc5d77f1\").getResponse();\n" +
      "NotificationUpdateEvent notificationUpdateEvent = new NotificationUpdateEvent();\n" +
      "notificationUpdateEvent.setId(notification.getId());\n" +
      "notificationUpdateEvent.setReaded(true);\n" +
      "coreApi.notifications().update(app, notificationUpdateEvent);",
    response: null
  }

  public static notification_id_delete: EndpointTemplate = {
    name: "notifications/:id",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "coreApi.notifications().delete(app, \"61979934ff9e3333fc5d77f1\");",
    response: null
  }

  public static setting_post: EndpointTemplate = {
    name: "settings",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "SettingSaveEvent settingSaveEvent = new SettingSaveEvent();\n" +
      "settingSaveEvent.setBanner(new Image());\n" +
      "coreApi.settings().save(app, settingSaveEvent);",
    response: null
  }

  public static setting_get: EndpointTemplate = {
    name: "settings",
    code: "\nSystem.setProperty(\"CORE_HOST\", \"localhost\");\n" +
      "System.setProperty(\"CORE_PORT\", \"8082\");\n" +
      "System.setProperty(\"AUTH0_DOMAIN\", \"dev-708nr3pf.eu.auth0.com\");\n" +
      "String clientId = \"iUNFZUf83T5OazTjDv3gkjwfGMZ7fGT9\";\n" +
      "String clientSecret = \"xWJN3YO0kuJ-gD19zltey9N5R1Cz0ltQJZtad-p1YQJCh6-hckl8I_hnbMbHuSQ4\";\n" +
      "App app = new App(clientId, clientSecret);\n" +
      "CoreApi coreApi = new CoreApi();\n" +
      "Setting setting = coreApi.settings().current(app).getResponse();\n" +
      "JSONObject jsonObject = new JSONObject(setting);\n" +
      "System.out.println(jsonObject);",
    response: "\n{\n" +
      "   \"id\":1,\n" +
      "   \"banner\":{\n" +
      "      \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60d6031b0d5a16054411a570/image/44159982-303f-44ee-b903-94ca6147bbb9.jpeg\",\n" +
      "      \"thumbnail\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60d6031b0d5a16054411a570/image/44159982-303f-44ee-b903-94ca6147bbb9.jpeg\",\n" +
      "      \"crop\":{\n" +
      " \"x\":129,\n" +
      " \"y\":34,\n" +
      " \"width\":921,\n" +
      " \"height\":921\n" +
      "      }\n" +
      "   }\n" +
      "}"
  }

  public static setting_upload_original_post: EndpointTemplate = {
    name: "settings/upload/original",
    code: "\nTODO",
    response: "\nTODO"
  }

  public static setting_upload_thumbnail_post: EndpointTemplate = {
    name: "settings/upload/thumbnail",
    code: "\nTODO",
    response: "\nTODO"
  }

  public static challenge_upload_media_post: EndpointTemplate = {
    name: "challenges/upload/media",
    code: "\nTODO",
    response: "\nTODO"
  }

  public static challenge_upload_news_post: EndpointTemplate = {
    name: "challenges/upload/news",
    code: "\nTODO",
    response: "\nTODO"
  }
}
