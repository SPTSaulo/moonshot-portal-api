import { EndpointTemplate } from '../../../../app/model/EndpointTemplate';

export class CoreJavascriptTemplates {

  public static version_get: EndpointTemplate = {
    name: "version",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/version';\n\nfetch(url)\n  .then(response => response.json())\n  .then(data => console.log(JSON.stringify(data)));",
    response: "\n\"2.0.2.r13-SNAPSHOT\""
  }

  public static signedUrl_get: EndpointTemplate = {
    name: "signed-url",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/signed-url?contentType=image/jpeg&filename=descarga.jpg';\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/null/image/43b59550-750e-4592-8e32-97ad29a4025b.jpg\n?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211024T193231Z&X-Amz-SignedHeaders=host&\nX-Amz-Expires=900&X-Amz-Credential=%2F20211024%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=\n585e2c8c71e748eb6ae4cc602db86e8cfe2e45884902d97efce7bfcecba250e5\""
  }

  public static openGraph_get: EndpointTemplate = {
    name: "openGraph",
    code: "\nconst videoUrl = 'https://youtu.be/08yBlI2XT8I'\n" +
      "const url = 'https://dev.moonshot.ceo/api/core//openGraph?url=' + videoUrl;\n" +
      "\n" +
      "fetch(url, {\n" +
      "  headers: {\n" +
      "    'Content-Type': 'application/x-www-form-urlencoded'\n" +
      "  },\n" +
      "  credentials: 'include'\n" +
      "})\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n{\n" +
      "   \"title\":\"(2020) Curso de Kotlin para Android: Listas en Kotlin - Capítulo 7\",\n" +
      "   \"description\":\"Las listas son el siguiente paso que debemos conocer para el desarrollo de apps. En este capítulo aprenderemos a...\",\n" +
      "   \"imageURL\":\"https://i.ytimg.com/vi/08yBlI2XT8I/maxresdefault.jpg\",\n" +
      "   \"url\":\"https://www.youtube.com/watch?v=08yBlI2XT8I\"\n" +
      "}"
  }

  public static navbar_get: EndpointTemplate = {
    name: "navbar",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/navbar';\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
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
    name: "industry/:id",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/industry/1';\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n{\n" +
      "   \"id\":\"6166d927899c7c3640ee96a0\",\n" +
      "   \"type\":\"AGRICULTURE_FORESTRY_AND_FISHING\"\n" +
      "}"
  }

  public static industries_get: EndpointTemplate = {
    name: "industries",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/industries';\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data));",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee96a0\",\n" +
      "      \"type\":\"AGRICULTURE_FORESTRY_AND_FISHING\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee96a1\",\n" +
      "      \"type\":\"ARTS_AND_ENTERTAINMENT\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee96a2\",\n" +
      "      \"type\":\"BIOTECHNOLOGY\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee96a3\",\n" +
      "      \"type\":\"CHEMICALS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee96a4\",\n" +
      "      \"type\":\"COMPUTER_AND_ELECTRONICS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee96a5\",\n" +
      "      \"type\":\"CONSTRUCTION\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee96a6\",\n" +
      "      \"type\":\"DEFENSE_AND_SECURITY\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee96a7\",\n" +
      "      \"type\":\"DISTRIBUTION_AND_LOGISTICS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee96a8\",\n" +
      "      \"type\":\"EDUCATION\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee96a9\",\n" +
      "      \"type\":\"ELECTRICAL_EQUIPMENT\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee96aa\",\n" +
      "      \"type\":\"ELECTRICITY_AND_GAS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee96ab\",\n" +
      "      \"type\":\"FINTECH_FINANCIAL_AND_INSURANCE\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee96ac\",\n" +
      "      \"type\":\"FOOD_AND_BEVERAGES\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee96ad\",\n" +
      "      \"type\":\"HEALTH_CARE\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee96ae\",\n" +
      "      \"type\":\"HEAVY_EQUIPMENT\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee96af\",\n" +
      "      \"type\":\"HOTEL\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee96b0\",\n" +
      "      \"type\":\"INFORMATION_TECHNOLOGY\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee96b1\",\n" +
      "      \"type\":\"INTERNET_OF_THINGS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee96b2\",\n" +
      "      \"type\":\"LEGAL_ACCOUNTING_ARCHITECTURE_AND_PROFESSIONAL_SERVICES\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96b3\",\n" +
      "      \"type\":\"MACHINERY_AND_EQUIPMENT\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96b4\",\n" +
      "      \"type\":\"METAL\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96b5\",\n" +
      "      \"type\":\"MINING_AND_QUARRYING\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96b6\",\n" +
      "      \"type\":\"PETROLEUM\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96b7\",\n" +
      "      \"type\":\"PHARMACEUTICALS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96b8\",\n" +
      "      \"type\":\"PUBLISHING_AUDIOVISUAL_AND_BROADCASTING\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96b9\",\n" +
      "      \"type\":\"REAL_ESTATE\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96ba\",\n" +
      "      \"type\":\"RUBBER_AND_PLASTICS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96bb\",\n" +
      "      \"type\":\"SMART_CITIES\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96bc\",\n" +
      "      \"type\":\"SPORTS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96bd\",\n" +
      "      \"type\":\"TELECOMMUNICATIONS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96be\",\n" +
      "      \"type\":\"TEXTILES\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96bf\",\n" +
      "      \"type\":\"TRANSPORTATION\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96c0\",\n" +
      "      \"type\":\"TRANSPORTATION_AND_WAREHOUSING\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96c1\",\n" +
      "      \"type\":\"WATER_AND_WASTE\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96c2\",\n" +
      "      \"type\":\"WHOLESALE_AND_RETAIL\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96c3\",\n" +
      "      \"type\":\"WOOD_AND_PAPER\"\n" +
      "   }\n" +
      "]"
  }

  public static businessModel_id_get: EndpointTemplate = {
    name: "business-model/:id",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/business-model/1'\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n{\n" +
      "   \"id\":\"6166d926899c7c3640ee9692\",\n" +
      "   \"type\":\"TECHNOLOGY\"\n" +
      "}"
  }

  public static businessModels_get: EndpointTemplate = {
    name: "business-models",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/business-models'\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"6166d926899c7c3640ee9692\",\n" +
      "      \"type\":\"TECHNOLOGY\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d926899c7c3640ee9693\",\n" +
      "      \"type\":\"ECOMMERCE\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d926899c7c3640ee9694\",\n" +
      "      \"type\":\"WEARABLES\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d926899c7c3640ee9695\",\n" +
      "      \"type\":\"AGENCY\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d926899c7c3640ee9696\",\n" +
      "      \"type\":\"MARKETING\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d926899c7c3640ee9697\",\n" +
      "      \"type\":\"SERVICES\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d926899c7c3640ee9698\",\n" +
      "      \"type\":\"SAAS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d926899c7c3640ee9699\",\n" +
      "      \"type\":\"CONSUMER_PRODUCTS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d926899c7c3640ee969a\",\n" +
      "      \"type\":\"OTHER\"\n" +
      "   }\n" +
      "]"
  }

  public static socialInnovation_id_get: EndpointTemplate = {
    name: "social-innovation/:id",
    code: "\nconst id = '6166d928899c7c3640ee96c4'\n" +
      "const url = 'https://dev.moonshot.ceo/api/core/social-innovation/' + id\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n{\n" +
      "   \"id\":\"6166d928899c7c3640ee96c4\",\n" +
      "   \"type\":\"NO_POVERTY\"\n" +
      "}"
  }

  public static socialInnovations_get: EndpointTemplate = {
    name: "social-innovations",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/social-innovations'\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96c4\",\n" +
      "      \"type\":\"NO_POVERTY\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96c5\",\n" +
      "      \"type\":\"ZERO_HUNGER\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96c6\",\n" +
      "      \"type\":\"GOOD_HEALTH_AND_WELLBEING\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96c7\",\n" +
      "      \"type\":\"QUALITY_EDUCATION\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96c8\",\n" +
      "      \"type\":\"GENDER_EQUALITY\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96c9\",\n" +
      "      \"type\":\"CLEAN_WATER_AND_SANITATION\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96ca\",\n" +
      "      \"type\":\"AFFORDABLE_AND_CLEAN_ENERGY\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d928899c7c3640ee96cb\",\n" +
      "      \"type\":\"DECENT_WORK_AND_ECONOMIC_GROWTH\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d929899c7c3640ee96cc\",\n" +
      "      \"type\":\"INDUSTRY_INNOVATION_AND_INFRASTRUCTURE\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d929899c7c3640ee96cd\",\n" +
      "      \"type\":\"REDUCED_INEQUALITIES\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d929899c7c3640ee96ce\",\n" +
      "      \"type\":\"SUSTAINABLE_CITIES_AND_COMMUNITIES\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d929899c7c3640ee96cf\",\n" +
      "      \"type\":\"RESPONSABLE_CONSUMPTION_AND_PRODUCTION\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d929899c7c3640ee96d0\",\n" +
      "      \"type\":\"CLIMATE_ACTION\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d929899c7c3640ee96d1\",\n" +
      "      \"type\":\"LIFE_BELOW_WATER\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d929899c7c3640ee96d2\",\n" +
      "      \"type\":\"LIFE_ON_LAND\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d929899c7c3640ee96d3\",\n" +
      "      \"type\":\"PEACE_AND_JUSTICE_STRONG_INSTITUTIONS\"\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d929899c7c3640ee96d4\",\n" +
      "      \"type\":\"PARTNERSHIP_FOR_THE_GOALS\"\n" +
      "   }\n" +
      "]"
  }

  public static deepTech_id_get: EndpointTemplate = {
    name: "deep-tech/:id",
    code: "\nconst id = '6166d926899c7c3640ee969b'\n" +
      "const url = 'https://dev.moonshot.ceo/api/core/deep-tech/' + id\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n{\n" +
      "   \"id\":\"6166d926899c7c3640ee969b\",\n" +
      "   \"type\":\"NANOTECH_AND_ROBOTICS\",\n" +
      "   \"cells\":[\n" +
      "      {\n" +
      "         \"type\":\"BIOMATERIALS\",\n" +
      "         \"kets\":[\n" +
      "            \"BIOACTIVE_MATERIALS\",\n" +
      "            \"BIOCOMPATIBLE_ALLOYS_AND_POLYMERS\",\n" +
      "            \"BIOMIMETICS\",\n" +
      "            \"BIOSENSING_MATERIALS\",\n" +
      "            \"DRUG_RELEASING_POLYMERS\"\n" +
      "         ]\n" +
      "      },\n" +
      "      {\n" +
      "         \"type\":\"FUNCTIONAL_AND_SMART_MATERIALS\",\n" +
      "         \"kets\":[\n" +
      "            \"ADVANCED_METALS_AND_ALLOYS\",\n" +
      "            \"ELECTROACTIVE_POLYMERS\",\n" +
      "            \"FERROELECTRIC_MATERIALS\",\n" +
      "            \"FIRE_RESISTANT_MATERIALS\",\n" +
      "            \"FUNCTIONALCOATINGS_SURFACE_TREATMENTS\",\n" +
      "            \"MAGNETOSTRICTIVE_MATERIALS\",\n" +
      "            \"METAMATERIALS\",\n" +
      "            \"PIEZOELECTRIC_MATERIALS\",\n" +
      "            \"SHAPE_MEMORY_POLYMERS_AND_ALLOYS\",\n" +
      "            \"SUPERCONDUCTIVE_MATERIALS\",\n" +
      "            \"QUANTUM_DOTS\",\n" +
      "            \"MOLECULARY_IMPRINTED_POLYMERS\"\n" +
      "         ]\n" +
      "      },\n" +
      "      {\n" +
      "         \"type\":\"NANOSTRUCTURE_MATERIALS\",\n" +
      "         \"kets\":[\n" +
      "            \"CARBON_NANOTUBES\",\n" +
      "            \"DATA_STORAGE\",\n" +
      "            \"ELECTROCHEMICAL_COMPONENTS\",\n" +
      "            \"GRAPHENE\",\n" +
      "            \"NANOCELLULOSE\",\n" +
      "            \"NANOCOMPOSITES\",\n" +
      "            \"NANOPOROUS_MATERIALS\",\n" +
      "            \"NANOWIRES\"\n" +
      "         ]\n" +
      "      },\n" +
      "      {\n" +
      "         \"type\":\"ROBOTICS_SEMICONDUCTORS\",\n" +
      "         \"kets\":[\n" +
      "            \"COMMERCIAL_UAVS\",\n" +
      "            \"CONDUCTIVE_POLYMERS\",\n" +
      "            \"DRONES\",\n" +
      "            \"MEMS\",\n" +
      "            \"MOLECULAR_TRANSISTORS\",\n" +
      "            \"ELECTRONIC_NANOTUBES\",\n" +
      "            \"SMART_DUST\",\n" +
      "            \"SMART_ROBOTS\",\n" +
      "            \"SMART_SENSORS_AND_MONITORING\",\n" +
      "            \"THIN_FILM_SOLAR_CELLS_OPV\",\n" +
      "            \"SOTS/SOFA\",\n" +
      "            \"TELEMATIC_AND_V2X\",\n" +
      "            \"PREDICTIVE_MAINTENANCE\",\n" +
      "            \"MANUFACTURING_EXECUTION_SYSTEM_(MES)\",\n" +
      "            \"SAFETY\",\n" +
      "            \"AUTONOMOUS_CAR\",\n" +
      "            \"AUTONOMOUS_DRIVING\",\n" +
      "            \"POWERTRAIN\",\n" +
      "            \"IOT_AND_IIOT_PLATFORMS\",\n" +
      "            \"KERFLESS_WAFER_TECHNOLOGY\"\n" +
      "         ]\n" +
      "      },\n" +
      "      {\n" +
      "         \"type\":\"STRUCTURAL_MATERIALS\",\n" +
      "         \"kets\":[\n" +
      "            \"ADVANCED_AND_ENGINEERING_POLYMERS_TECHNICAL_THERMOPLASTIC\",\n" +
      "            \"ADVANCED_CERAMICS\",\n" +
      "            \"ADVANCED_COMPOSITES\",\n" +
      "            \"ADVANCED_METALLIC_FOAMS\",\n" +
      "            \"HIGH_PERFORMANCE_CONCRETE\",\n" +
      "            \"PLATFORM_CONSOLIDATION\"\n" +
      "         ]\n" +
      "      },\n" +
      "      {\n" +
      "         \"type\":\"MANUFACTURING_ADDITIVE\",\n" +
      "         \"kets\":[\n" +
      "            \"VAT_PHOTOPOLYMERISATION\",\n" +
      "            \"MATERIAL_JETTING\",\n" +
      "            \"BINDER_JETTING\",\n" +
      "            \"MATERIAL_EXTRUSION\",\n" +
      "            \"POWDER_BED_FUSION\",\n" +
      "            \"SHEET_LAMINATION\",\n" +
      "            \"DIRECTED_ENERGY_DEPOSITION\"\n" +
      "         ]\n" +
      "      }\n" +
      "   ]\n" +
      "}"
  }

  public static deepTechs_get: EndpointTemplate = {
    name: "deep-techs",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/deep-techs'\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"6166d926899c7c3640ee969b\",\n" +
      "      \"type\":\"NANOTECH_AND_ROBOTICS\",\n" +
      "      \"cells\":[\n" +
      "         {\n" +
      "            \"type\":\"BIOMATERIALS\",\n" +
      "            \"kets\":[\n" +
      "               \"BIOACTIVE_MATERIALS\",\n" +
      "               \"BIOCOMPATIBLE_ALLOYS_AND_POLYMERS\",\n" +
      "               \"BIOMIMETICS\",\n" +
      "               \"BIOSENSING_MATERIALS\",\n" +
      "               \"DRUG_RELEASING_POLYMERS\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"FUNCTIONAL_AND_SMART_MATERIALS\",\n" +
      "            \"kets\":[\n" +
      "               \"ADVANCED_METALS_AND_ALLOYS\",\n" +
      "               \"ELECTROACTIVE_POLYMERS\",\n" +
      "               \"FERROELECTRIC_MATERIALS\",\n" +
      "               \"FIRE_RESISTANT_MATERIALS\",\n" +
      "               \"FUNCTIONALCOATINGS_SURFACE_TREATMENTS\",\n" +
      "               \"MAGNETOSTRICTIVE_MATERIALS\",\n" +
      "               \"METAMATERIALS\",\n" +
      "               \"PIEZOELECTRIC_MATERIALS\",\n" +
      "               \"SHAPE_MEMORY_POLYMERS_AND_ALLOYS\",\n" +
      "               \"SUPERCONDUCTIVE_MATERIALS\",\n" +
      "               \"QUANTUM_DOTS\",\n" +
      "               \"MOLECULARY_IMPRINTED_POLYMERS\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"NANOSTRUCTURE_MATERIALS\",\n" +
      "            \"kets\":[\n" +
      "               \"CARBON_NANOTUBES\",\n" +
      "               \"DATA_STORAGE\",\n" +
      "               \"ELECTROCHEMICAL_COMPONENTS\",\n" +
      "               \"GRAPHENE\",\n" +
      "               \"NANOCELLULOSE\",\n" +
      "               \"NANOCOMPOSITES\",\n" +
      "               \"NANOPOROUS_MATERIALS\",\n" +
      "               \"NANOWIRES\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"ROBOTICS_SEMICONDUCTORS\",\n" +
      "            \"kets\":[\n" +
      "               \"COMMERCIAL_UAVS\",\n" +
      "               \"CONDUCTIVE_POLYMERS\",\n" +
      "               \"DRONES\",\n" +
      "               \"MEMS\",\n" +
      "               \"MOLECULAR_TRANSISTORS\",\n" +
      "               \"ELECTRONIC_NANOTUBES\",\n" +
      "               \"SMART_DUST\",\n" +
      "               \"SMART_ROBOTS\",\n" +
      "               \"SMART_SENSORS_AND_MONITORING\",\n" +
      "               \"THIN_FILM_SOLAR_CELLS_OPV\",\n" +
      "               \"SOTS/SOFA\",\n" +
      "               \"TELEMATIC_AND_V2X\",\n" +
      "               \"PREDICTIVE_MAINTENANCE\",\n" +
      "               \"MANUFACTURING_EXECUTION_SYSTEM_(MES)\",\n" +
      "               \"SAFETY\",\n" +
      "               \"AUTONOMOUS_CAR\",\n" +
      "               \"AUTONOMOUS_DRIVING\",\n" +
      "               \"POWERTRAIN\",\n" +
      "               \"IOT_AND_IIOT_PLATFORMS\",\n" +
      "               \"KERFLESS_WAFER_TECHNOLOGY\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"STRUCTURAL_MATERIALS\",\n" +
      "            \"kets\":[\n" +
      "               \"ADVANCED_AND_ENGINEERING_POLYMERS_TECHNICAL_THERMOPLASTIC\",\n" +
      "               \"ADVANCED_CERAMICS\",\n" +
      "               \"ADVANCED_COMPOSITES\",\n" +
      "               \"ADVANCED_METALLIC_FOAMS\",\n" +
      "               \"HIGH_PERFORMANCE_CONCRETE\",\n" +
      "               \"PLATFORM_CONSOLIDATION\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"MANUFACTURING_ADDITIVE\",\n" +
      "            \"kets\":[\n" +
      "               \"VAT_PHOTOPOLYMERISATION\",\n" +
      "               \"MATERIAL_JETTING\",\n" +
      "               \"BINDER_JETTING\",\n" +
      "               \"MATERIAL_EXTRUSION\",\n" +
      "               \"POWDER_BED_FUSION\",\n" +
      "               \"SHEET_LAMINATION\",\n" +
      "               \"DIRECTED_ENERGY_DEPOSITION\"\n" +
      "            ]\n" +
      "         }\n" +
      "      ]\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee969c\",\n" +
      "      \"type\":\"CLEANTECH\",\n" +
      "      \"cells\":[\n" +
      "         {\n" +
      "            \"type\":\"BUILDING_SUSTAINABLE\",\n" +
      "            \"kets\":[\n" +
      "               \"ENERGY_EFFICIENCY_IN_BUILDINGS\",\n" +
      "               \"GREEN_MATERIALS\",\n" +
      "               \"INDOOR_AIR_QUALITY\",\n" +
      "               \"RESOURCE_EFFICIENCY_IN_BUILDING\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"WATER_RESOURCES_AND_DELIVERY\",\n" +
      "            \"kets\":[\n" +
      "               \"IRRIGATION\",\n" +
      "               \"VALUE_ADDED_RESOURCES_FROM_WATER\",\n" +
      "               \"WATER_FILTRATION\",\n" +
      "               \"WATER_HARVESTING\",\n" +
      "               \"WATER_INFRASTRUCTURE_AND_DISTRIBUTION\",\n" +
      "               \"WATER_RESOURCE_IDENTIFICATION\",\n" +
      "               \"PLASTIC_WASTE_TECHNOLOGIES\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"WASTE\",\n" +
      "            \"kets\":[\n" +
      "               \"BIOREACTOR_LANDFILL\",\n" +
      "               \"MECHANICAL_BIOLOGICAL_TREATMENT_OF_MUNICIPAL_SOLID_WASTE\",\n" +
      "               \"PLASMA_GASIFICATION\",\n" +
      "               \"WASTE_RECYCLING\",\n" +
      "               \"WASTE_CONVERSION_TECHNOLOGIES\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"WATER_TREATMENT_AND_PURIFICATION\",\n" +
      "            \"kets\":[\n" +
      "               \"DESALINATION\",\n" +
      "               \"INDUSTRIAL_AND_PRODUCED_WATER_PROCESSES\",\n" +
      "               \"POINT_OF_USE_WATER_TREATMENT\",\n" +
      "               \"WASTE_WATER_TREATMENT\",\n" +
      "               \"WATER_DESINFECTION\",\n" +
      "               \"ELECTROLYSIS\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"AGRITECH_AND_FOOD\",\n" +
      "            \"kets\":[\n" +
      "               \"AGRICULTURAL_TECHNOLOGIES\",\n" +
      "               \"ANIMAL_HEALTH\",\n" +
      "               \"CROP_PROTECTION\",\n" +
      "               \"CULTIVATION_AND_POST_HARVEST\",\n" +
      "               \"FISHERIES_AND_AQUATIC_ECOSYSTEMS_TECHNOLOGIES\",\n" +
      "               \"FOOD_TECHNOLOGIES\",\n" +
      "               \"GREENHOUSE\",\n" +
      "               \"NEW_GENERATION_FERTILIZERS\",\n" +
      "               \"SEEDS_AND_PROPAGATION\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"AIR_POLLUTION_AND_CLIMATE\",\n" +
      "            \"kets\":[\n" +
      "               \"CARBON_CAPTURE_AND_STORAGE_CARBON_CAPTURE_USE_AND_STORAGE\",\n" +
      "               \"CATALYTIC_CONVERTER\",\n" +
      "               \"EMISSIONS_BIOLOGICAL_TREATMENT\",\n" +
      "               \"EMISSION_MONITORING\",\n" +
      "               \"SCRUBBING_SYSTEMS\",\n" +
      "               \"AIR_PURIFICATION_TECHNOLOGIES\"\n" +
      "            ]\n" +
      "         }\n" +
      "      ]\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee969d\",\n" +
      "      \"type\":\"ENERGY\",\n" +
      "      \"cells\":[\n" +
      "         {\n" +
      "            \"type\":\"RENEWABLE_ENERGY\",\n" +
      "            \"kets\":[\n" +
      "               \"BIOMASS\",\n" +
      "               \"CONCENTRATED_SOLAR_POWER\",\n" +
      "               \"GEOTHERMAL\",\n" +
      "               \"HYDROGEN_FUEL_CELL\",\n" +
      "               \"MARINE_RENEWABLES\",\n" +
      "               \"OCEAN_AND_HYDROGEN\",\n" +
      "               \"SOLAR_ENERGY\",\n" +
      "               \"WIND\",\n" +
      "               \"KINETIC\",\n" +
      "               \"THERMAL_ENERGY\",\n" +
      "               \"WASTE_HEAT_RECOVERY\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"ENERGY_EFFICIENCY\",\n" +
      "            \"kets\":[\n" +
      "               \"EFFICIENT_HEATING_AND_COOLING\",\n" +
      "               \"HOME_AND_FACILITIES_ENERGY_MANAGEMENT\",\n" +
      "               \"INDUSTRIAL_ENERGY_MANAGEMENT\",\n" +
      "               \"LIGHTING\",\n" +
      "               \"SMART_APPLIANCES\",\n" +
      "               \"SSL\",\n" +
      "               \"LIGHT_EMITTING_DIODE\",\n" +
      "               \"ORGANIC_LIGHT_EMITTING_DIODE\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"ENERGY_STORAGE\",\n" +
      "            \"kets\":[\n" +
      "               \"FUEL_CELLS\",\n" +
      "               \"LITHIUM_ION\",\n" +
      "               \"METAL_AIR\",\n" +
      "               \"REDOX_FLOW_BATTERIES\",\n" +
      "               \"SUPERCAPACITORS\",\n" +
      "               \"BATTERY_MANAGEMENT_SYSTEM\",\n" +
      "               \"ON_BOARD_FAST_CHARGING\",\n" +
      "               \"POWERTRAIN\",\n" +
      "               \"NANOWIRE_BATTERIES\",\n" +
      "               \"TENG_TRIBOELECTRIC_NANOGENERATOR\",\n" +
      "               \"GRAPHENE_BATTERIES\",\n" +
      "               \"FOAM_BATTERIES\",\n" +
      "               \"SODIUM_ION_BATTERIES\",\n" +
      "               \"LIQUID_FLOW_BATTERIES\",\n" +
      "               \"CARBON_ION_BATTERY\",\n" +
      "               \"ZINC_AIR_BATTERIES\",\n" +
      "               \"STRETCHABLE_BATTERIES\",\n" +
      "               \"SMART_CLOTHING_BATTERY\",\n" +
      "               \"SOUND_POWERED_CHARGING\",\n" +
      "               \"URINE_POWERED_BATTERIES\",\n" +
      "               \"ALUMINIUM_AIR_BATTERY\",\n" +
      "               \"FLASH_BATTERIES\",\n" +
      "               \"ITES\",\n" +
      "               \"GEOMECHANICAL_PUMPED_STORAGE\",\n" +
      "               \"KINETIC_ENERGY_STORAGE\",\n" +
      "               \"VANADIUM_FLOW_BATTERY\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"SMART_GRIDS\",\n" +
      "            \"kets\":[\n" +
      "               \"CHARGING_INFRASTRUCTURE\",\n" +
      "               \"MANAGEMENT\",\n" +
      "               \"MANAGEMENT_MEASURING_AND_CONTROL\",\n" +
      "               \"MICROGRIDS\",\n" +
      "               \"SMART_METERS\",\n" +
      "               \"OVER_THE_AIR_CHARGING\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"BIOENERGY\",\n" +
      "            \"kets\":[\n" +
      "               \"BIO_HEATING\",\n" +
      "               \"BIODIESEL_ADVANCED\",\n" +
      "               \"CO_GENERATION\",\n" +
      "               \"MICROBIOME\"\n" +
      "            ]\n" +
      "         }\n" +
      "      ]\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee969e\",\n" +
      "      \"type\":\"DIGITAL_LIFE_AND_AI\",\n" +
      "      \"cells\":[\n" +
      "         {\n" +
      "            \"type\":\"ARTIFICIAL_INTELLIGENCE\",\n" +
      "            \"kets\":[\n" +
      "               \"BRAIN_COMPUTER_INTERFACE\",\n" +
      "               \"COGNITIVE_EXPERT_ADVISORS\",\n" +
      "               \"DEEP_LEARNING\",\n" +
      "               \"EDGE_INTELLIGENCE\",\n" +
      "               \"ENTERPRISE_TAXONOMY_AND_ONTOLOGY_MANAGEMENT\",\n" +
      "               \"GENERAL_PURPOSE_MACHINE_INTELLIGENCE\",\n" +
      "               \"HUMAN_COMPUTER_INTERACTION\",\n" +
      "               \"MACHINE_LEARNING\",\n" +
      "               \"NATURAL_LANGUAGE_QUESTION_ANSWERING\",\n" +
      "               \"NEURAL_NETWORKS_AND_SEMANTIC_SEARCH_ENGINES\",\n" +
      "               \"QUANTUM_COMPUTING\",\n" +
      "               \"SENTIMENTAL_ANALYSIS\",\n" +
      "               \"CONVOLUTIONAL_NEURAL_NETWORK\",\n" +
      "               \"COMPUTER_VISION\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"BIG_DATA_AND_NEW_LANGUAGES\",\n" +
      "            \"kets\":[\n" +
      "               \"BYOD_AND_BORDERLESS_APPS\",\n" +
      "               \"CLOUD_COMPUTING\",\n" +
      "               \"CONTEXT_BROKERING\",\n" +
      "               \"DATA_ANALYTICS\",\n" +
      "               \"DATA_BROKER_PAAS\",\n" +
      "               \"MICRO_DATA_CENTERS\",\n" +
      "               \"PERSONAL_ANALYTICS\",\n" +
      "               \"SMART_DATA_DISCOVERY\",\n" +
      "               \"SOFTWARE_DEFINED_ANYTHING\",\n" +
      "               \"ASSET_MANAGEMENT\",\n" +
      "               \"AUGMENTED_WRITING\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"BLOCKCHAIN\",\n" +
      "            \"kets\":[\n" +
      "               \"PUBLIC_BLOCKCHAIN\",\n" +
      "               \"PRIVATE_BLOCKCHAIN\",\n" +
      "               \"CONSORTIUM_BLOCKCHAIN\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"CYBERSECURITY\",\n" +
      "            \"kets\":[\n" +
      "               \"ANTIFRAUD_AND_IDENTITY_MANAGEMENT\",\n" +
      "               \"AUTOMATED_SECURITY\",\n" +
      "               \"BEHAVIORAL_ANALYTICS_AND_ANOMALY_DETECTION\",\n" +
      "               \"CREDENTIAL_MANAGEMENT\",\n" +
      "               \"CYBER_RISK_MANAGEMENT\",\n" +
      "               \"DECEPTION_SECURITY\",\n" +
      "               \"DEVICE_AUTHENTICATION\",\n" +
      "               \"IDENTITY_AS_A_SERVICE\",\n" +
      "               \"PREDICTIVE_INTELLIGENCE\",\n" +
      "               \"QUANTUM_ENCRYPTION\",\n" +
      "               \"THREAT_INTELLIGENCE\",\n" +
      "               \"FOTA\",\n" +
      "               \"MOBILITY\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"DIGITAL_LIFE\",\n" +
      "            \"kets\":[\n" +
      "               \"AFFECTIVE_COMPUTING\",\n" +
      "               \"AUGMENTED_REALITY\",\n" +
      "               \"CONVERSATIONAL_USER_INTERFACES\",\n" +
      "               \"GAMIFICATION\",\n" +
      "               \"GESTURE_CONTROL_DEVICES\",\n" +
      "               \"HUMAN_AUGMENTATION\",\n" +
      "               \"VIRTUAL_PERSONAL_ASSISTANTS\",\n" +
      "               \"VIRTUAL_REALITY\",\n" +
      "               \"VOLUMETRIC_DISPLAYS\",\n" +
      "               \"E_LEARNING\",\n" +
      "               \"DIGITAL_TWIN\",\n" +
      "               \"VEHICLE_STYLING\",\n" +
      "               \"V2V\",\n" +
      "               \"V2X\",\n" +
      "               \"IOT\",\n" +
      "               \"GERONTECHNOLOGY\",\n" +
      "               \"FALL_DETECTION\",\n" +
      "               \"SMART_HOME\",\n" +
      "               \"LIVING_COMMUNITIES\",\n" +
      "               \"END_OF_LIFE_PLANNING\",\n" +
      "               \"MOBILITY_AIDS\",\n" +
      "               \"DL_TELEHEALTH\",\n" +
      "               \"ELDER_PLATFORMS\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"MOBILE_AND_COMMUNICATION\",\n" +
      "            \"kets\":[\n" +
      "               \"5G_NETWORKS\",\n" +
      "               \"GEOLOCATION\",\n" +
      "               \"GEOLOCATION_INDOOR_AND_OUTDOOR_POSITIONING_AND_DIGITAL_MAPPING\",\n" +
      "               \"SMART_ANTENNAS\",\n" +
      "               \"TABLETS_AND_SMARTPHONES_APPS\",\n" +
      "               \"WIRELESS_SENSOR_NETWORKS\",\n" +
      "               \"HMI_AND_INFOTAINMENT\",\n" +
      "               \"IOT_POINT_SOLUTIONS\",\n" +
      "               \"IOT_PLATFORMS\",\n" +
      "               \"BLUETOOTH_5_0\",\n" +
      "               \"WIRELESS_TECHNOLOGIES\",\n" +
      "               \"NEAR_FIELD_TECHNOLOGY\",\n" +
      "               \"LIFI\",\n" +
      "               \"802_11AXSDX\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"WEARABLES\",\n" +
      "            \"kets\":[\n" +
      "               \"GLASSES\",\n" +
      "               \"JEWELRY\",\n" +
      "               \"SMART_BANDS\",\n" +
      "               \"SMART_CLOTHES\",\n" +
      "               \"SMART_HEADGEAR\",\n" +
      "               \"WATCHES\"\n" +
      "            ]\n" +
      "         }\n" +
      "      ]\n" +
      "   },\n" +
      "   {\n" +
      "      \"id\":\"6166d927899c7c3640ee969f\",\n" +
      "      \"type\":\"LIFE_SCIENCE\",\n" +
      "      \"cells\":[\n" +
      "         {\n" +
      "            \"type\":\"FUTURE_MEDICINE\",\n" +
      "            \"kets\":[\n" +
      "               \"NEW_THERAPIES_FOR_CHRONIC_DISEASES\",\n" +
      "               \"PERSONALIZED_MEDICINE\",\n" +
      "               \"PLATFORMS_FOR_HEALTH\",\n" +
      "               \"REGENERATIVE_MEDICINE\",\n" +
      "               \"LS_TELEHEALTH\",\n" +
      "               \"COGNITIVE_CARE\",\n" +
      "               \"SENSORY_AIDS\",\n" +
      "               \"FEMTECH\",\n" +
      "               \"MENTAL_HEALTH\",\n" +
      "               \"CNS\",\n" +
      "               \"INFECTIOUS_DISEASE\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"MEDICAL_DEVICES\",\n" +
      "            \"kets\":[\n" +
      "               \"BIO_ROBOTICS\",\n" +
      "               \"BIOMEDICAL_IMAGING\",\n" +
      "               \"BIONICS\",\n" +
      "               \"DENTAL_TECHNOLOGIES\",\n" +
      "               \"VITAL_SIGNS_TRACKING\",\n" +
      "               \"PERSONAL_EMERGENCY_RESPONSE\",\n" +
      "               \"MEDICATION_MANAGEMENT\",\n" +
      "               \"DIAGNOSTIC\",\n" +
      "               \"ORTHOPEDIC_IMPLANT\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"PHARMACEUTICAL_TECHNOLOGIES\",\n" +
      "            \"kets\":[\n" +
      "               \"BIOPHARMACEUTICALS_AND_VACCINE_ENGINEERING\",\n" +
      "               \"DRUG_DEVELOPMENT\",\n" +
      "               \"PHARMA_NANOTECHNOLOGY\",\n" +
      "               \"PHARMACEUTICAL_TOXICITY\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"BIOENGINEERING\",\n" +
      "            \"kets\":[\n" +
      "               \"BIOMEDICAL_COMPUTING_AND_BIOINFORMATICS\",\n" +
      "               \"GENE_AND_CELL_THERAPY\",\n" +
      "               \"MICROBIOLOGY_TECHNOLOGIES\",\n" +
      "               \"NANOBIOENGINEER\",\n" +
      "               \"NANOBIOMATERIALS\",\n" +
      "               \"OMICS_TECHNOLOGIES\",\n" +
      "               \"SYNTHETIC_BIOLOGY\",\n" +
      "               \"BODY_ENGINEERING\"\n" +
      "            ]\n" +
      "         },\n" +
      "         {\n" +
      "            \"type\":\"CANCER\",\n" +
      "            \"kets\":[\n" +
      "               \"ARTIFICIAL_INTELLIGENCE_BASED_THERAPY_DESIGN\",\n" +
      "               \"DNA_CAGES\",\n" +
      "               \"EMBEDDED\",\n" +
      "               \"EMBEDDED_IMPLANTED_AND_DIGESTIBLE_SENSORS\",\n" +
      "               \"FLUID_BIOPSY\",\n" +
      "               \"IMAGE_GUIDED_TECHNOLOGIES\",\n" +
      "               \"IN_SILICO_TRIALS\",\n" +
      "               \"MEASURING_LAB_MARKERS_AT_HOME\",\n" +
      "               \"MONITORING_AND_PROVIDING_CARE\",\n" +
      "               \"MONOCLONAL_ANTIBODIES\",\n" +
      "               \"MULTI_FUNCTIONAL_RADIOLOGY\",\n" +
      "               \"PAIN_MANAGEMENT\",\n" +
      "               \"PRECISION_SURGERY\",\n" +
      "               \"PREVENTION_AND_DIAGNOSIS\",\n" +
      "               \"REAL_TIME_CANCER_DIAGNOSTICS\",\n" +
      "               \"SMALL_MOLECULES\"\n" +
      "            ]\n" +
      "         }\n" +
      "      ]\n" +
      "   }\n" +
      "]"
  }

  public static ecosystemInitialized_get: EndpointTemplate = {
    name: "ecosystem/initialized",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/ecosystem/initialized'\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\ntrue"
  }

  public static ecosystem_get: EndpointTemplate = {
    name: "ecosystem",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/ecosystem'\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n{\n" +
      "   \"id\":\"60acae8f2f799d228a4d4a87\",\n" +
      "   \"type\":\"CORPORATE\",\n" +
      "   \"name\":\"DEV  Moonshot\",\n" +
      "   \"address\":\"Calle Poniente, 33\",\n" +
      "   \"latitude\":null,\n" +
      "   \"longitude\":null,\n" +
      "   \"city\":\"Madrid\",\n" +
      "   \"country\":\"Spain\",\n" +
      "   \"phone\":\"\",\n" +
      "   \"web\":\"www.mooonshot.ceo\",\n" +
      "   \"description\":\"DEV Moonshot\",\n" +
      "   \"objectives\":\"\",\n" +
      "   \"logo\":{\n" +
      "      \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png\",\n" +
      "      \"thumbnail\":null,\n" +
      "      \"crop\":null\n" +
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
      "      \n" +
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
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/ecosystem'\n" +
      "const body = {\n" +
      "  \"type\":\"CORPORATE\",\n" +
      "  \"name\":\"DEV  Moonshot\",\n" +
      "  \"address\":\"Calle Poniente, 33\",\n" +
      "  \"latitude\":null,\n" +
      "  \"longitude\":null,\n" +
      "  \"city\":\"Madrid\",\n" +
      "  \"country\":\"Spain\",\n" +
      "  \"phone\":\"\",\"web\":\"www.mooonshot.ceo\",\n" +
      "  \"description\":\"DEV Moonshot\",\n" +
      "  \"objectives\":\"\",\n" +
      "  \"logo\":{\n" +
      "    \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png\",\n" +
      "    \"thumbnail\":null,\n" +
      "    \"crop\":null\n" +
      "  },\n" +
      "  \"acceptedActors\":[\n" +
      "    \"STARTUP\",\n" +
      "    \"PUBLIC_ENTITY\",\n" +
      "    \"COMPANY\",\n" +
      "    \"NGO\",\n" +
      "    \"HUB\",\n" +
      "    \"CLUSTER\",\n" +
      "    \"EXPERT\",\n" +
      "    \"RESEARCH_GROUP\",\n" +
      "    \"MENTOR\",\n" +
      "    \"TALENT\",\n" +
      "    \"UNIVERSITY\",\n" +
      "    \"ORGANIZATION_INVESTOR\",\n" +
      "    \"PERSON_INVESTOR\"\n" +
      "  ],\n" +
      "  \"services\":[\n" +
      "    \"FINANCIAL_AND_VALUATION\",\n" +
      "    \"FACILITIES\",\n" +
      "    \"MARKETING_AND_DESIGN_THINKING\",\n" +
      "    \"COMMERCIAL_SERVICES\",\n" +
      "    \"MANAGEMENT_SERVICES\",\n" +
      "    \"PROTOTYPES_AND_TESTING\",\n" +
      "    \"BACKEND_SERVICES\",\n" +
      "    \"IP_PROTECTION_AND_PATENTS\",\n" +
      "    \"SMART_DATA_AND_AI_SERVICES\",\n" +
      "    \"BUSINESS_AND_STRATEGY\",\n" +
      "    \"CHALLENGES\",\n" +
      "    \"LEGAL_SERVICES\",\n" +
      "    \"TECHNOLOGY_ACCELERATION\"\n" +
      "  ],\n" +
      "  \"customServices\":null,\n" +
      "  \"media\":[],\n" +
      "  \"socialNetworks\":[],\n" +
      "  \"deepTechs\":[\n" +
      "    \"DEEP_LEARNING\",\n" +
      "    \"MACHINE_LEARNING\",\n" +
      "    \"ENTERPRISE_TAXONOMY_AND_ONTOLOGY_MANAGEMENT\"\n" +
      "  ],\n" +
      "  \"businessModels\":[\n" +
      "    \"SAAS\"\n" +
      "  ],\n" +
      "  \"industries\":[\n" +
      "    \"FINTECH_FINANCIAL_AND_INSURANCE\"\n" +
      "  ],\n" +
      "  \"socialInnovations\":[\n" +
      "    \"LIFE_BELOW_WATER\",\n" +
      "    \"CLIMATE_ACTION\",\n" +
      "    \"RESPONSABLE_CONSUMPTION_AND_PRODUCTION\",\n" +
      "    \"SUSTAINABLE_CITIES_AND_COMMUNITIES\",\n" +
      "    \"REDUCED_INEQUALITIES\"\n" +
      "  ],\n" +
      "  \"manager\": {\n" +
      "    \"_id\": \"1\",\n" +
      "    \"name\": \"Iñigo\",\n" +
      "    \"lastname\": \"Aramburu\",\n" +
      "    \"address\": {\n" +
      "      \"lat\": 43.3038929,\n" +
      "      \"lng\": -1.9604012,\n" +
      "      \"formatted\": \"Wroclaw, 1, 20014 San Sebastián, Gipuzkoa, España\"\n" +
      "    },\n" +
      "    \"email\": \"iaramburu@moonshot.ceo\",\n" +
      "    \"about\": \"Experto en Ingeniería del Software.\",\n" +
      "    \"image\": null,\n" +
      "    \"socialNetworks\": [\n" +
      "      \"www.twitter.com/Iñigo\",\n" +
      "      \"www.facebook.com/Iñigo\"\n" +
      "    ],\n" +
      "  },\n" +
      "  \"password\": \"hello123\",\n" +
      "  \"repeatPassword\": \"hello123\"\n" +
      "}\n" +
      "\n" +
      "fetch(url, {\n" +
      "  method: 'POST',\n" +
      "  body: JSON.stringify(body)\n" +
      "})\n" +
      "  .then(response => response.json())" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: null
  }

  public static ecosystem_put: EndpointTemplate = {
    name: "ecosystem",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/ecosystem'\n" +
      "\nconst body = {\n" +
      "  \"id\":\"60acae8f2f799d228a4d4a87\",\n" +
      "  \"type\":\"CORPORATE\",\n" +
      "  \"name\":\"DEV  Moonshot\",\n" +
      "  \"address\":\"Calle Poniente, 33\",\n" +
      "  \"latitude\":null,\n" +
      "  \"longitude\":null,\n" +
      "  \"city\":\"Madrid\",\n" +
      "  \"country\":\"Spain\",\n" +
      "  \"phone\":\"\",\"web\":\"www.mooonshot.ceo\",\n" +
      "  \"description\":\"DEV Moonshot\",\n" +
      "  \"objectives\":\"\",\n" +
      "  \"logo\":{\n" +
      "    \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png\",\n" +
      "    \"thumbnail\":null,\n" +
      "    \"crop\":null\n" +
      "  },\n" +
      "  \"acceptedActors\":[\n" +
      "    \"STARTUP\",\n" +
      "    \"PUBLIC_ENTITY\",\n" +
      "    \"COMPANY\",\n" +
      "    \"NGO\",\n" +
      "    \"HUB\",\n" +
      "    \"CLUSTER\",\n" +
      "    \"EXPERT\",\n" +
      "    \"RESEARCH_GROUP\",\n" +
      "    \"MENTOR\",\n" +
      "    \"TALENT\",\n" +
      "    \"UNIVERSITY\",\n" +
      "    \"ORGANIZATION_INVESTOR\",\n" +
      "    \"PERSON_INVESTOR\"\n" +
      "  ],\n" +
      "  \"services\":[\n" +
      "    \"FINANCIAL_AND_VALUATION\",\n" +
      "    \"FACILITIES\",\n" +
      "    \"MARKETING_AND_DESIGN_THINKING\",\n" +
      "    \"COMMERCIAL_SERVICES\",\n" +
      "    \"MANAGEMENT_SERVICES\",\n" +
      "    \"PROTOTYPES_AND_TESTING\",\n" +
      "    \"BACKEND_SERVICES\",\n" +
      "    \"IP_PROTECTION_AND_PATENTS\",\n" +
      "    \"SMART_DATA_AND_AI_SERVICES\",\n" +
      "    \"BUSINESS_AND_STRATEGY\",\n" +
      "    \"CHALLENGES\",\n" +
      "    \"LEGAL_SERVICES\",\n" +
      "    \"TECHNOLOGY_ACCELERATION\"\n" +
      "  ],\n" +
      "  \"customServices\":null,\n" +
      "  \"media\":[],\n" +
      "  \"socialNetworks\":[],\n" +
      "  \"deepTechs\":[\n" +
      "    \"DEEP_LEARNING\",\n" +
      "    \"MACHINE_LEARNING\",\n" +
      "    \"ENTERPRISE_TAXONOMY_AND_ONTOLOGY_MANAGEMENT\"\n" +
      "  ],\n" +
      "  \"businessModels\":[\n" +
      "    \"SAAS\"\n" +
      "  ],\n" +
      "  \"industries\":[\n" +
      "    \"FINTECH_FINANCIAL_AND_INSURANCE\"\n" +
      "  ],\n" +
      "  \"socialInnovations\":[\n" +
      "    \"LIFE_BELOW_WATER\",\n" +
      "    \"CLIMATE_ACTION\",\n" +
      "    \"RESPONSABLE_CONSUMPTION_AND_PRODUCTION\",\n" +
      "    \"SUSTAINABLE_CITIES_AND_COMMUNITIES\",\n" +
      "    \"REDUCED_INEQUALITIES\"\n" +
      "  ]\n" +
      "}\n" +
      "\n" +
      "fetch(url, {\n" +
      "  method: 'PUT',\n" +
      "  body: JSON.stringify(body)\n" +
      "})\n" +
      "  .then(response => response.json())" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: null
  }

  public static invitations_get: EndpointTemplate = {
    name: "invitations",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/invitations?lastId=61b1cd9b4441d07b3246472c&limit=0';\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n[\n" +
      "   {\n" +
      "      \"id\":\"61b1cd9b4441d07b3246472c\",\n" +
      "      \"email\":\"borja-1@hotmail.es\",\n" +
      "      \"reason\":\"En nombre del ecosistema DEV  Moonshot, me complace invitarlo a participar en nuestro Ecosistema de Innovación, un entorno digital para compartir ideas y proyectos disruptivos, así como para colaborar en desafíos y talleres. Espero que se una a nuestro ecosistema, con otros socios exclusivos, para observar de cerca nuestros objetivos disruptivos comunes.\",\n" +
      "      \"notification\":true,\n" +
      "      \"createdAt\":1639042457835,\n" +
      "      \"senderName\":\"Jeremy Trujillo Sánchez\",\n" +
      "      \"lastEmail\":1639042457835\n" +
      "   }\n" +
      "]",
  }

  public static invitation_get: EndpointTemplate = {
    name: "invitation",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/invitation?email=borja-1@hotmail.es';\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n{\n" +
      "      \"id\":\"61b1cd9b4441d07b3246472c\",\n" +
      "      \"email\":\"borja-1@hotmail.es\",\n" +
      "      \"reason\":\"En nombre del ecosistema DEV  Moonshot, me complace invitarlo a participar en nuestro Ecosistema de Innovación, un entorno digital para compartir ideas y proyectos disruptivos, así como para colaborar en desafíos y talleres. Espero que se una a nuestro ecosistema, con otros socios exclusivos, para observar de cerca nuestros objetivos disruptivos comunes.\",\n" +
      "      \"notification\":true,\n" +
      "      \"createdAt\":1639042457835,\n" +
      "      \"senderName\":\"Jeremy Trujillo Sánchez\",\n" +
      "      \"lastEmail\":1639042457835\n" +
      "   }"
  }

  public static invitation_post: EndpointTemplate = {
    name: "invitation",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/invitation';\n" +
      "\n" +
      "const body = {\n" +
      "  \"email\":\"borja-1@hotmail.es\",\n" +
      "  \"reason\":\"En nombre del ecosistema DEV  Moonshot, me complace invitarlo a participar en nuestro Ecosistema de Innovación, un entorno digital para compartir ideas y proyectos disruptivos, así como para colaborar en desafíos y talleres. Espero que se una a nuestro ecosistema, con otros socios exclusivos, para observar de cerca nuestros objetivos disruptivos comunes.\",\n" +
      "  \"notification\":true,\n" +
      "  \"createdAt\":1639042457835,\n" +
      "  \"lastEmail\":1639042457835\n" +
      " }\n" +
      "\n" +
      "fetch(url, {\n" +
      "  method: 'POST',\n" +
      "  body: JSON.stringify(body)\n" +
      "})\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: null
  }

  public static invitation_put: EndpointTemplate = {
    name: "invitation",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/invitation';\n" +
      "\n" +
      "const body = {\n" +
      "  \"id\":\"61b1cd9b4441d07b3246472c\",\n" +
      "  \"lastEmail\":1639042457835\n" +
      " }\n" +
      "\n" +
      "fetch(url, {\n" +
      "  method: 'PUT',\n" +
      "  body: JSON.stringify(body)\n" +
      "})\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: null
  }

  public static invitation_id_delete: EndpointTemplate = {
    name: "invitation/:id",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/invitation/61b1cd9b4441d07b3246472c';\n" +
      "\n" +
      "fetch(url, {\n" +
      "  method: 'DELETE'\n" +
      "})\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: null
  }

  public static notifications_get: EndpointTemplate = {
    name: "notifications",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/notifications';\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n{\n" +
      "   \"numNotifications\":5,\n" +
      "   \"notifications\":[\n" +
      "      {\n" +
      "         \"id\":\"61a9e9c78eefec485375e0a1\",\n" +
      "         \"channels\":[\n" +
      "            \"EMAIL\",\n" +
      "            \"PUSH\"\n" +
      "         ],\n" +
      "         \"type\":\"DIRECT_CHAT_NEW_MESSAGE\",\n" +
      "         \"push\":{\n" +
      "            \"title\":\"David Suriol has sent you a direct chat message.\",\n" +
      "            \"body\":\"Bien!\",\n" +
      "            \"icon\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg\",\n" +
      "            \"fcmTokens\":[\n" +
      "               {\n" +
      "                  \"tokenId\":\"eL0_glBb1BMsdvVGaoMG-t:APA91bFpu39O4PRY3YJDHeRn4RI5Mtp0iDRkq_uQ-oVD4eLgHdjWaiKKI1vCus0dO7trnn7svtg2jGcqaOS67pomwDTzoDljBsACPrLRT6IWhry-dJYksFdWxzmMGQYOZY0Nwb6TFYVP\",\n" +
      "                  \"device\":\"laptop/computer\",\n" +
      "                  \"timestamp\":1636449280970\n" +
      "               },\n" +
      "               {\n" +
      "                  \"tokenId\":\"cfXVHXJ13nqzf6heSBNFBC:APA91bE1UH4habWeaBJZKwrpB2XRZShMKBxdJ_p45r4d46N5f0lT35EDpET-irLIlv9e4uQIs_M0T4KEso0CqCTwjzYM4UrFploqliO0jOvAQCkLK3vfYKxIMh_Q0Xp8aGHsA_j3tx_v\",\n" +
      "                  \"device\":\"laptop/computer\",\n" +
      "                  \"timestamp\":1638522251181\n" +
      "               }\n" +
      "            ],\n" +
      "            \"parameters\":{\n" +
      "               \"action_url\":\"https://demo.moonshot.ceo/community/direct/60c7808acb43760a967eda7c\",\n" +
      "               \"current_chat\":\"60c7808acb43760a967eda7c\",\n" +
      "               \"action\":\"new-tab\"\n" +
      "            }\n" +
      "         },\n" +
      "         \"email\":{\n" +
      "            \"from\":{\n" +
      "               \"email\":null,\n" +
      "               \"name\":\"David Suriol\"\n" +
      "            },\n" +
      "            \"to\":\"saulobach1@gmail.com\",\n" +
      "            \"cc\":null,\n" +
      "            \"bcc\":null,\n" +
      "            \"subject\":\"You have a new message\",\n" +
      "            \"templateId\":\"direct_chat_message\",\n" +
      "            \"params\":{\n" +
      "               \"image\":\"https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg\",\n" +
      "               \"link\":\"https://demo.moonshot.ceo/community/direct/60c7808acb43760a967eda7c\",\n" +
      "               \"actorName\":\"David Suriol\"\n" +
      "            }\n" +
      "         },\n" +
      "         \"readed\":true,\n" +
      "         \"createdAt\":1638525383741,\n" +
      "         \"owner\":{\n" +
      "            \"id\":\"60b53ce23a28bb702667cbe6\",\n" +
      "            \"image\":{\n" +
      "               \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce2f54eb87400016b07/image/fdf85852-fa7c-410e-a9f7-0c1a7f7a8894.jpg\",\n" +
      "               \"thumbnail\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg\",\n" +
      "               \"crop\":{\n" +
      "                  \"x\":0,\n" +
      "                  \"y\":0,\n" +
      "                  \"width\":340,\n" +
      "                  \"height\":340\n" +
      "               }\n" +
      "            },\n" +
      "            \"name\":\"David Suriol\"\n" +
      "         },\n" +
      "         \"recipients\":[\n" +
      "            {\n" +
      "               \"id\":\"60b543bd3a28bb702667cc09\",\n" +
      "               \"image\":null,\n" +
      "               \"name\":null\n" +
      "            }\n" +
      "         ],\n" +
      "         \"followUpRoomId\":null,\n" +
      "         \"directChatRoomId\":\"60c7808acb43760a967eda7c\",\n" +
      "         \"wallPostName\":null,\n" +
      "         \"followUpRoomName\":null\n" +
      "      },\n" +
      "      {\n" +
      "         \"id\":\"61a9e29a8eefec485375e099\",\n" +
      "         \"channels\":[\n" +
      "            \"EMAIL\",\n" +
      "            \"PUSH\"\n" +
      "         ],\n" +
      "         \"type\":\"DIRECT_CHAT_NEW_MESSAGE\",\n" +
      "         \"push\":{\n" +
      "            \"title\":\"David Suriol has sent you a direct chat message.\",\n" +
      "            \"body\":\"\",\n" +
      "            \"icon\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg\",\n" +
      "            \"fcmTokens\":[\n" +
      "               {\n" +
      "                  \"tokenId\":\"eL0_glBb1BMsdvVGaoMG-t:APA91bFpu39O4PRY3YJDHeRn4RI5Mtp0iDRkq_uQ-oVD4eLgHdjWaiKKI1vCus0dO7trnn7svtg2jGcqaOS67pomwDTzoDljBsACPrLRT6IWhry-dJYksFdWxzmMGQYOZY0Nwb6TFYVP\",\n" +
      "                  \"device\":\"laptop/computer\",\n" +
      "                  \"timestamp\":1636449280970\n" +
      "               },\n" +
      "               {\n" +
      "                  \"tokenId\":\"cfXVHXJ13nqzf6heSBNFBC:APA91bE1UH4habWeaBJZKwrpB2XRZShMKBxdJ_p45r4d46N5f0lT35EDpET-irLIlv9e4uQIs_M0T4KEso0CqCTwjzYM4UrFploqliO0jOvAQCkLK3vfYKxIMh_Q0Xp8aGHsA_j3tx_v\",\n" +
      "                  \"device\":\"laptop/computer\",\n" +
      "                  \"timestamp\":1638522251181\n" +
      "               }\n" +
      "            ],\n" +
      "            \"parameters\":{\n" +
      "               \"action_url\":\"https://demo.moonshot.ceo/community/direct/60c7808acb43760a967eda7c\",\n" +
      "               \"current_chat\":\"60c7808acb43760a967eda7c\",\n" +
      "               \"action\":\"new-tab\"\n" +
      "            }\n" +
      "         },\n" +
      "         \"email\":{\n" +
      "            \"from\":{\n" +
      "               \"email\":null,\n" +
      "               \"name\":\"David Suriol\"\n" +
      "            },\n" +
      "            \"to\":\"saulobach1@gmail.com\",\n" +
      "            \"cc\":null,\n" +
      "            \"bcc\":null,\n" +
      "            \"subject\":\"You have a new message\",\n" +
      "            \"templateId\":\"direct_chat_message\",\n" +
      "            \"params\":{\n" +
      "               \"image\":\"https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg\",\n" +
      "               \"link\":\"https://demo.moonshot.ceo/community/direct/60c7808acb43760a967eda7c\",\n" +
      "               \"actorName\":\"David Suriol\"\n" +
      "            }\n" +
      "         },\n" +
      "         \"readed\":true,\n" +
      "         \"createdAt\":1638523546560,\n" +
      "         \"owner\":{\n" +
      "            \"id\":\"60b53ce23a28bb702667cbe6\",\n" +
      "            \"image\":{\n" +
      "               \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce2f54eb87400016b07/image/fdf85852-fa7c-410e-a9f7-0c1a7f7a8894.jpg\",\n" +
      "               \"thumbnail\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg\",\n" +
      "               \"crop\":{\n" +
      "                  \"x\":0,\n" +
      "                  \"y\":0,\n" +
      "                  \"width\":340,\n" +
      "                  \"height\":340\n" +
      "               }\n" +
      "            },\n" +
      "            \"name\":\"David Suriol\"\n" +
      "         },\n" +
      "         \"recipients\":[\n" +
      "            {\n" +
      "               \"id\":\"60b543bd3a28bb702667cc09\",\n" +
      "               \"image\":null,\n" +
      "               \"name\":null\n" +
      "            }\n" +
      "         ],\n" +
      "         \"followUpRoomId\":null,\n" +
      "         \"directChatRoomId\":\"60c7808acb43760a967eda7c\",\n" +
      "         \"wallPostName\":null,\n" +
      "         \"followUpRoomName\":null\n" +
      "      }\n" +
      "   ]\n" +
      "}"
  }

  public static notifications_id_get: EndpointTemplate = {
    name: "notification/:id",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/notification/1';\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n{\n" +
      "   \"id\":\"61a9e9c78eefec485375e0a1\",\n" +
      "   \"channels\":[\n" +
      "      \"EMAIL\",\n" +
      "      \"PUSH\"\n" +
      "   ],\n" +
      "   \"type\":\"DIRECT_CHAT_NEW_MESSAGE\",\n" +
      "   \"push\":{\n" +
      "      \"title\":\"David Suriol has sent you a direct chat message.\",\n" +
      "      \"body\":\"Bien!\",\n" +
      "      \"icon\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg\",\n" +
      "      \"fcmTokens\":[\n" +
      "         {\n" +
      "            \"tokenId\":\"eL0_glBb1BMsdvVGaoMG-t:APA91bFpu39O4PRY3YJDHeRn4RI5Mtp0iDRkq_uQ-oVD4eLgHdjWaiKKI1vCus0dO7trnn7svtg2jGcqaOS67pomwDTzoDljBsACPrLRT6IWhry-dJYksFdWxzmMGQYOZY0Nwb6TFYVP\",\n" +
      "            \"device\":\"laptop/computer\",\n" +
      "            \"timestamp\":1636449280970\n" +
      "         },\n" +
      "         {\n" +
      "            \"tokenId\":\"cfXVHXJ13nqzf6heSBNFBC:APA91bE1UH4habWeaBJZKwrpB2XRZShMKBxdJ_p45r4d46N5f0lT35EDpET-irLIlv9e4uQIs_M0T4KEso0CqCTwjzYM4UrFploqliO0jOvAQCkLK3vfYKxIMh_Q0Xp8aGHsA_j3tx_v\",\n" +
      "            \"device\":\"laptop/computer\",\n" +
      "            \"timestamp\":1638522251181\n" +
      "         }\n" +
      "      ],\n" +
      "      \"parameters\":{\n" +
      "         \"action_url\":\"https://demo.moonshot.ceo/community/direct/60c7808acb43760a967eda7c\",\n" +
      "         \"current_chat\":\"60c7808acb43760a967eda7c\",\n" +
      "         \"action\":\"new-tab\"\n" +
      "      }\n" +
      "   },\n" +
      "   \"email\":{\n" +
      "      \"from\":{\n" +
      "         \"email\":null,\n" +
      "         \"name\":\"David Suriol\"\n" +
      "      },\n" +
      "      \"to\":\"saulobach1@gmail.com\",\n" +
      "      \"cc\":null,\n" +
      "      \"bcc\":null,\n" +
      "      \"subject\":\"You have a new message\",\n" +
      "      \"templateId\":\"direct_chat_message\",\n" +
      "      \"params\":{\n" +
      "         \"image\":\"https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg\",\n" +
      "         \"link\":\"https://demo.moonshot.ceo/community/direct/60c7808acb43760a967eda7c\",\n" +
      "         \"actorName\":\"David Suriol\"\n" +
      "      }\n" +
      "   },\n" +
      "   \"readed\":true,\n" +
      "   \"createdAt\":1638525383741,\n" +
      "   \"owner\":{\n" +
      "      \"id\":\"60b53ce23a28bb702667cbe6\",\n" +
      "      \"image\":{\n" +
      "         \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce2f54eb87400016b07/image/fdf85852-fa7c-410e-a9f7-0c1a7f7a8894.jpg\",\n" +
      "         \"thumbnail\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg\",\n" +
      "         \"crop\":{\n" +
      "            \"x\":0,\n" +
      "            \"y\":0,\n" +
      "            \"width\":340,\n" +
      "            \"height\":340\n" +
      "         }\n" +
      "      },\n" +
      "      \"name\":\"David Suriol\"\n" +
      "   },\n" +
      "   \"recipients\":[\n" +
      "      {\n" +
      "         \"id\":\"60b543bd3a28bb702667cc09\",\n" +
      "         \"image\":null,\n" +
      "         \"name\":null\n" +
      "      }\n" +
      "   ],\n" +
      "   \"followUpRoomId\":null,\n" +
      "   \"directChatRoomId\":\"60c7808acb43760a967eda7c\",\n" +
      "   \"wallPostName\":null,\n" +
      "   \"followUpRoomName\":null\n" +
      "}"
  }

  public static notifications_pending_get: EndpointTemplate = {
    name: "notifications/pending",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/notifications/pending';\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n{\n" +
      "   \"numNotifications\":5,\n" +
      "   \"notifications\":[\n" +
      "      {\n" +
      "         \"id\":\"61a9e9c78eefec485375e0a1\",\n" +
      "         \"channels\":[\n" +
      "            \"EMAIL\",\n" +
      "            \"PUSH\"\n" +
      "         ],\n" +
      "         \"type\":\"DIRECT_CHAT_NEW_MESSAGE\",\n" +
      "         \"push\":{\n" +
      "            \"title\":\"David Suriol has sent you a direct chat message.\",\n" +
      "            \"body\":\"Bien!\",\n" +
      "            \"icon\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg\",\n" +
      "            \"fcmTokens\":[\n" +
      "               {\n" +
      "                  \"tokenId\":\"eL0_glBb1BMsdvVGaoMG-t:APA91bFpu39O4PRY3YJDHeRn4RI5Mtp0iDRkq_uQ-oVD4eLgHdjWaiKKI1vCus0dO7trnn7svtg2jGcqaOS67pomwDTzoDljBsACPrLRT6IWhry-dJYksFdWxzmMGQYOZY0Nwb6TFYVP\",\n" +
      "                  \"device\":\"laptop/computer\",\n" +
      "                  \"timestamp\":1636449280970\n" +
      "               },\n" +
      "               {\n" +
      "                  \"tokenId\":\"cfXVHXJ13nqzf6heSBNFBC:APA91bE1UH4habWeaBJZKwrpB2XRZShMKBxdJ_p45r4d46N5f0lT35EDpET-irLIlv9e4uQIs_M0T4KEso0CqCTwjzYM4UrFploqliO0jOvAQCkLK3vfYKxIMh_Q0Xp8aGHsA_j3tx_v\",\n" +
      "                  \"device\":\"laptop/computer\",\n" +
      "                  \"timestamp\":1638522251181\n" +
      "               }\n" +
      "            ],\n" +
      "            \"parameters\":{\n" +
      "               \"action_url\":\"https://demo.moonshot.ceo/community/direct/60c7808acb43760a967eda7c\",\n" +
      "               \"current_chat\":\"60c7808acb43760a967eda7c\",\n" +
      "               \"action\":\"new-tab\"\n" +
      "            }\n" +
      "         },\n" +
      "         \"email\":{\n" +
      "            \"from\":{\n" +
      "               \"email\":null,\n" +
      "               \"name\":\"David Suriol\"\n" +
      "            },\n" +
      "            \"to\":\"saulobach1@gmail.com\",\n" +
      "            \"cc\":null,\n" +
      "            \"bcc\":null,\n" +
      "            \"subject\":\"You have a new message\",\n" +
      "            \"templateId\":\"direct_chat_message\",\n" +
      "            \"params\":{\n" +
      "               \"image\":\"https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg\",\n" +
      "               \"link\":\"https://demo.moonshot.ceo/community/direct/60c7808acb43760a967eda7c\",\n" +
      "               \"actorName\":\"David Suriol\"\n" +
      "            }\n" +
      "         },\n" +
      "         \"readed\":true,\n" +
      "         \"createdAt\":1638525383741,\n" +
      "         \"owner\":{\n" +
      "            \"id\":\"60b53ce23a28bb702667cbe6\",\n" +
      "            \"image\":{\n" +
      "               \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce2f54eb87400016b07/image/fdf85852-fa7c-410e-a9f7-0c1a7f7a8894.jpg\",\n" +
      "               \"thumbnail\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg\",\n" +
      "               \"crop\":{\n" +
      "                  \"x\":0,\n" +
      "                  \"y\":0,\n" +
      "                  \"width\":340,\n" +
      "                  \"height\":340\n" +
      "               }\n" +
      "            },\n" +
      "            \"name\":\"David Suriol\"\n" +
      "         },\n" +
      "         \"recipients\":[\n" +
      "            {\n" +
      "               \"id\":\"60b543bd3a28bb702667cc09\",\n" +
      "               \"image\":null,\n" +
      "               \"name\":null\n" +
      "            }\n" +
      "         ],\n" +
      "         \"followUpRoomId\":null,\n" +
      "         \"directChatRoomId\":\"60c7808acb43760a967eda7c\",\n" +
      "         \"wallPostName\":null,\n" +
      "         \"followUpRoomName\":null\n" +
      "      },\n" +
      "      {\n" +
      "         \"id\":\"61a9e29a8eefec485375e099\",\n" +
      "         \"channels\":[\n" +
      "            \"EMAIL\",\n" +
      "            \"PUSH\"\n" +
      "         ],\n" +
      "         \"type\":\"DIRECT_CHAT_NEW_MESSAGE\",\n" +
      "         \"push\":{\n" +
      "            \"title\":\"David Suriol has sent you a direct chat message.\",\n" +
      "            \"body\":\"\",\n" +
      "            \"icon\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg\",\n" +
      "            \"fcmTokens\":[\n" +
      "               {\n" +
      "                  \"tokenId\":\"eL0_glBb1BMsdvVGaoMG-t:APA91bFpu39O4PRY3YJDHeRn4RI5Mtp0iDRkq_uQ-oVD4eLgHdjWaiKKI1vCus0dO7trnn7svtg2jGcqaOS67pomwDTzoDljBsACPrLRT6IWhry-dJYksFdWxzmMGQYOZY0Nwb6TFYVP\",\n" +
      "                  \"device\":\"laptop/computer\",\n" +
      "                  \"timestamp\":1636449280970\n" +
      "               },\n" +
      "               {\n" +
      "                  \"tokenId\":\"cfXVHXJ13nqzf6heSBNFBC:APA91bE1UH4habWeaBJZKwrpB2XRZShMKBxdJ_p45r4d46N5f0lT35EDpET-irLIlv9e4uQIs_M0T4KEso0CqCTwjzYM4UrFploqliO0jOvAQCkLK3vfYKxIMh_Q0Xp8aGHsA_j3tx_v\",\n" +
      "                  \"device\":\"laptop/computer\",\n" +
      "                  \"timestamp\":1638522251181\n" +
      "               }\n" +
      "            ],\n" +
      "            \"parameters\":{\n" +
      "               \"action_url\":\"https://demo.moonshot.ceo/community/direct/60c7808acb43760a967eda7c\",\n" +
      "               \"current_chat\":\"60c7808acb43760a967eda7c\",\n" +
      "               \"action\":\"new-tab\"\n" +
      "            }\n" +
      "         },\n" +
      "         \"email\":{\n" +
      "            \"from\":{\n" +
      "               \"email\":null,\n" +
      "               \"name\":\"David Suriol\"\n" +
      "            },\n" +
      "            \"to\":\"saulobach1@gmail.com\",\n" +
      "            \"cc\":null,\n" +
      "            \"bcc\":null,\n" +
      "            \"subject\":\"You have a new message\",\n" +
      "            \"templateId\":\"direct_chat_message\",\n" +
      "            \"params\":{\n" +
      "               \"image\":\"https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg\",\n" +
      "               \"link\":\"https://demo.moonshot.ceo/community/direct/60c7808acb43760a967eda7c\",\n" +
      "               \"actorName\":\"David Suriol\"\n" +
      "            }\n" +
      "         },\n" +
      "         \"readed\":true,\n" +
      "         \"createdAt\":1638523546560,\n" +
      "         \"owner\":{\n" +
      "            \"id\":\"60b53ce23a28bb702667cbe6\",\n" +
      "            \"image\":{\n" +
      "               \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce2f54eb87400016b07/image/fdf85852-fa7c-410e-a9f7-0c1a7f7a8894.jpg\",\n" +
      "               \"thumbnail\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg\",\n" +
      "               \"crop\":{\n" +
      "                  \"x\":0,\n" +
      "                  \"y\":0,\n" +
      "                  \"width\":340,\n" +
      "                  \"height\":340\n" +
      "               }\n" +
      "            },\n" +
      "            \"name\":\"David Suriol\"\n" +
      "         },\n" +
      "         \"recipients\":[\n" +
      "            {\n" +
      "               \"id\":\"60b543bd3a28bb702667cc09\",\n" +
      "               \"image\":null,\n" +
      "               \"name\":null\n" +
      "            }\n" +
      "         ],\n" +
      "         \"followUpRoomId\":null,\n" +
      "         \"directChatRoomId\":\"60c7808acb43760a967eda7c\",\n" +
      "         \"wallPostName\":null,\n" +
      "         \"followUpRoomName\":null\n" +
      "      }\n" +
      "   ]\n" +
      "}"
  }

  public static notification_post: EndpointTemplate = {
    name: "notification",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/notification';\n" +
      "\n" +
      "const body = {\n" +
      "   \"id\":\"61a9e9c78eefec485375e0a1\",\n" +
      "   \"channels\":[\n" +
      "      \"EMAIL\",\n" +
      "      \"PUSH\"\n" +
      "   ],\n" +
      "   \"type\":\"DIRECT_CHAT_NEW_MESSAGE\",\n" +
      "   \"push\":{\n" +
      "      \"title\":\"David Suriol has sent you a direct chat message.\",\n" +
      "      \"body\":\"Bien!\",\n" +
      "      \"icon\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg\",\n" +
      "      \"fcmTokens\":[\n" +
      "         {\n" +
      "            \"tokenId\":\"eL0_glBb1BMsdvVGaoMG-t:APA91bFpu39O4PRY3YJDHeRn4RI5Mtp0iDRkq_uQ-oVD4eLgHdjWaiKKI1vCus0dO7trnn7svtg2jGcqaOS67pomwDTzoDljBsACPrLRT6IWhry-dJYksFdWxzmMGQYOZY0Nwb6TFYVP\",\n" +
      "            \"device\":\"laptop/computer\",\n" +
      "            \"timestamp\":1636449280970\n" +
      "         },\n" +
      "         {\n" +
      "            \"tokenId\":\"cfXVHXJ13nqzf6heSBNFBC:APA91bE1UH4habWeaBJZKwrpB2XRZShMKBxdJ_p45r4d46N5f0lT35EDpET-irLIlv9e4uQIs_M0T4KEso0CqCTwjzYM4UrFploqliO0jOvAQCkLK3vfYKxIMh_Q0Xp8aGHsA_j3tx_v\",\n" +
      "            \"device\":\"laptop/computer\",\n" +
      "            \"timestamp\":1638522251181\n" +
      "         }\n" +
      "      ],\n" +
      "      \"parameters\":{\n" +
      "         \"action_url\":\"https://demo.moonshot.ceo/community/direct/60c7808acb43760a967eda7c\",\n" +
      "         \"current_chat\":\"60c7808acb43760a967eda7c\",\n" +
      "         \"action\":\"new-tab\"\n" +
      "      }\n" +
      "   },\n" +
      "   \"email\":{\n" +
      "      \"from\":{\n" +
      "         \"email\":null,\n" +
      "         \"name\":\"David Suriol\"\n" +
      "      },\n" +
      "      \"to\":\"saulobach1@gmail.com\",\n" +
      "      \"cc\":null,\n" +
      "      \"bcc\":null,\n" +
      "      \"subject\":\"You have a new message\",\n" +
      "      \"templateId\":\"direct_chat_message\",\n" +
      "      \"params\":{\n" +
      "         \"image\":\"https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg\",\n" +
      "         \"link\":\"https://demo.moonshot.ceo/community/direct/60c7808acb43760a967eda7c\",\n" +
      "         \"actorName\":\"David Suriol\"\n" +
      "      }\n" +
      "   },\n" +
      "   \"readed\":true,\n" +
      "   \"createdAt\":1638525383741,\n" +
      "   \"owner\":{\n" +
      "      \"id\":\"60b53ce23a28bb702667cbe6\",\n" +
      "      \"image\":{\n" +
      "         \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce2f54eb87400016b07/image/fdf85852-fa7c-410e-a9f7-0c1a7f7a8894.jpg\",\n" +
      "         \"thumbnail\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60b53ce23a28bb702667cbe6/image/3a5b0134-a3ef-4a49-9e5a-fe4d16fbac5c.jpg\",\n" +
      "         \"crop\":{\n" +
      "            \"x\":0,\n" +
      "            \"y\":0,\n" +
      "            \"width\":340,\n" +
      "            \"height\":340\n" +
      "         }\n" +
      "      },\n" +
      "      \"name\":\"David Suriol\"\n" +
      "   },\n" +
      "   \"recipients\":[\n" +
      "      {\n" +
      "         \"id\":\"60b543bd3a28bb702667cc09\",\n" +
      "         \"image\":null,\n" +
      "         \"name\":null\n" +
      "      }\n" +
      "   ],\n" +
      "   \"followUpRoomId\":null,\n" +
      "   \"directChatRoomId\":\"60c7808acb43760a967eda7c\",\n" +
      "   \"wallPostName\":null,\n" +
      "   \"followUpRoomName\":null\n" +
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

  public static notification_put : EndpointTemplate = {
    name: "notification",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/notification';\n" +
      "\n" +
      "const body = {\n" +
      "  id: \"1\",\n" +
      "  type: \"ECOSYSTEM_ACCESS_REQUEST\",\n" +
      "  readed: \"true\"\n" +
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

  public static notification_id_delete : EndpointTemplate = {
    name: "notification/:id",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/notification/1';\n" +
      "\n" +
      "fetch(url, {\n" +
      "  method: 'DELETE'\n" +
      "})\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: null
  }

  public static setting_post: EndpointTemplate = {
    name: "setting",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/setting';\n" +
      "\n" +
      "const body = {\n" +
      "  banner:{\n" +
      "    \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60d6031b0d5a16054411a570/image/a920a411-31f2-4d13-8ebb-81c347607705.jpeg\",\n" +
      "    \"thumbnail\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60d6031b0d5a16054411a570/image/44159982-303f-44ee-b903-94ca6147bbb9.jpeg\",\n" +
      "    \"crop\":{\n" +
      "       \"x\":129,\n" +
      "       \"y\":34,\n" +
      "       \"width\":921,\n" +
      "       \"height\":921\n" +
      "    }\n" +
      "  }\n" +
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

  public static setting_put: EndpointTemplate = {
    name: "setting",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/setting';\n" +
      "\n" +
      "const body = {\n" +
      "  id: \"1\",\n" +
      "  banner:{\n" +
      "    \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60d6031b0d5a16054411a570/image/a920a411-31f2-4d13-8ebb-81c347607705.jpeg\",\n" +
      "    \"thumbnail\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60d6031b0d5a16054411a570/image/44159982-303f-44ee-b903-94ca6147bbb9.jpeg\",\n" +
      "    \"crop\":{\n" +
      "       \"x\":129,\n" +
      "       \"y\":34,\n" +
      "       \"width\":921,\n" +
      "       \"height\":921\n" +
      "    }\n" +
      "  }\n" +
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

  public static setting_get: EndpointTemplate = {
    name: "setting",
    code: "\nconst url = 'https://dev.moonshot.ceo/api/core/setting';\n" +
      "\n" +
      "fetch(url)\n" +
      "  .then(response => response.json())\n" +
      "  .then(data => console.log(JSON.stringify(data)));",
    response: "\n{\n" +
      "   \"id\":1,\n" +
      "   \"banner\":{\n" +
      "      \"original\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60d6031b0d5a16054411a570/image/44159982-303f-44ee-b903-94ca6147bbb9.jpeg\",\n" +
      "      \"thumbnail\":\"https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60d6031b0d5a16054411a570/image/44159982-303f-44ee-b903-94ca6147bbb9.jpeg\",\n" +
      "      \"crop\":{\n" +
      "         \"x\":129,\n" +
      "         \"y\":34,\n" +
      "         \"width\":921,\n" +
      "         \"height\":921\n" +
      "      }\n" +
      "   }\n" +
      "}"
  }
}
