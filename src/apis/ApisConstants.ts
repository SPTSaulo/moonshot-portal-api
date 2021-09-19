export class ApisConstants {
  public static federation: Object = {
    "openapi": "3.0.1",
    "info": {
      "title": "Federation API",
      "description": "Moonshot Federation API",
      "contact": {
        "email": "saulosantanab@gmail.com"
      },
      "license": {
        "name": "Apache 2.0",
        "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
      },
      "version": "1.0.1"
    },
    "servers": [
      {
        "url": "https://dev.moonshot.ceo/api/federation"
      }
    ],
    "tags": [
      {
        "name": "UserAdministrators",
        "description": "Endpoints available to users with user management permission"
      },
      {
        "name": "NoPerms",
        "description": "Operations available to all users"
      }
    ],
    "paths": {
      "/version": {
        "get": {
          "tags": [
            "NoPerms"
          ],
          "summary": "API version",
          "description": "Return the lastest version of the API\n",
          "operationId": "apiVersion",
          "responses": {
            "200": {
              "description": "API Version",
              "content": {
                "text/plain": {
                  "schema": {
                    "type": "string",
                    "example": "1.0.25.r6-RC1"
                  }
                }
              }
            },
            "500": {
              "description": "Cannot verify the certificate"
            }
          }
        }
      },
      "/login": {
        "post": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Login endpoint",
          "description": "Introduce your credentials to authorize yourself\n",
          "operationId": "login",
          "requestBody": {
            "description": "Credentials",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Login"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Authentication successfully"
            },
            "500": {
              "description": "Invalid login params, invalid username, invalid password or user not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/LoginError"
                  }
                }
              }
            }
          }
        }
      },
      "/logout": {
        "get": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Logout endpoint",
          "description": "Remove cookies from user session\n",
          "operationId": "logout",
          "responses": {
            "200": {
              "description": "Logout sucessfully",
              "content": {}
            }
          },
          "security": [
            {
              "idToken": []
            },
            {
              "userId": []
            },
            {
              "userEmail": []
            },
            {
              "userRoles": []
            },
            {
              "userPermissions": []
            }
          ]
        }
      },
      "/token": {
        "post": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Get authentication token",
          "description": "Add authentication token to session cookies\n",
          "operationId": "token",
          "parameters": [
            {
              "name": "tokenId",
              "in": "query",
              "description": "Token authentication id",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Add authentication token to cookies successfully"
            },
            "500": {
              "description": "Cannot find the user associated to tokenId parameter",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TokenError"
                  }
                }
              }
            }
          }
        }
      },
      "/communities": {
        "get": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Get ecosystem communities",
          "description": "Get all comunities where user is logged\n",
          "operationId": "comunities",
          "responses": {
            "200": {
              "description": "Get comunities successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Community"
                    }
                  }
                }
              }
            },
            "401": {
              "description": "You must login before call this endpoint",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessUnauthorizedError"
                  }
                }
              }
            }
          }
        }
      },
      "/modules": {
        "get": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Get Moonshot modules",
          "description": "Get Moonshot modules available to the user\n",
          "operationId": "modules",
          "responses": {
            "200": {
              "description": "Get modules successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Module"
                    }
                  }
                }
              }
            },
            "400": {
              "description": "Cannot find the user associated to user email cookie",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserNotFoundError"
                  }
                }
              }
            }
          },
          "security": [
            {
              "userEmail": []
            }
          ]
        }
      },
      "/user/{id}": {
        "get": {
          "tags": [
            "UserAdministrators"
          ],
          "summary": "Get user by id",
          "description": "Find a user in the database by its identifier and get all the data associated\n",
          "operationId": "userById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "User id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get user data successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            },
            "401": {
              "description": "You must login before call this endpoint",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessUnauthorizedError"
                  }
                }
              }
            },
            "403": {
              "description": "User does not have the necessary permissions",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessForbiddenError"
                  }
                }
              }
            }
          }
        }
      },
      "/users": {
        "get": {
          "tags": [
            "UserAdministrators"
          ],
          "summary": "Get all users",
          "description": "Find all users in the database and get all the data associated\n",
          "operationId": "users",
          "responses": {
            "200": {
              "description": "Get users data successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/User"
                    }
                  }
                }
              }
            },
            "401": {
              "description": "You must login before call this endpoint",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessUnauthorizedError"
                  }
                }
              }
            },
            "403": {
              "description": "User does not have the necessary permissions",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessForbiddenError"
                  }
                }
              }
            }
          }
        }
      },
      "/users/by-roles": {
        "get": {
          "tags": [
            "UserAdministrators"
          ],
          "summary": "Get users by roles",
          "description": "Find a user in the database by roles and get all the data associated\n",
          "operationId": "usersByRoles",
          "parameters": [
            {
              "name": "roles",
              "in": "query",
              "description": "User roles",
              "required": true,
              "style": "form",
              "explode": false,
              "schema": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get users data successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/User"
                    }
                  }
                }
              }
            },
            "401": {
              "description": "You must login before call this endpoint",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessUnauthorizedError"
                  }
                }
              }
            },
            "403": {
              "description": "User does not have the necessary permissions",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessForbiddenError"
                  }
                }
              }
            }
          }
        }
      },
      "/users/perms": {
        "get": {
          "tags": [
            "UserAdministrators"
          ],
          "summary": "Get user permissions",
          "description": "Find a user in the database by id and get the permissions associated\n",
          "parameters": [
            {
              "name": "id",
              "in": "query",
              "description": "User id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get user permissions successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Permission"
                    }
                  }
                }
              }
            },
            "400": {
              "description": "User not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserNotFoundError"
                  }
                }
              }
            },
            "401": {
              "description": "You must login before call this endpoint",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessUnauthorizedError"
                  }
                }
              }
            },
            "403": {
              "description": "User does not have the necessary permissions",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessForbiddenError"
                  }
                }
              }
            }
          }
        },
        "put": {
          "tags": [
            "UserAdministrators"
          ],
          "summary": "Update user permissions",
          "description": "Update user permission in database\n",
          "requestBody": {
            "description": "Object that have user id and new user permissions",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserPermsUpdateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Empty body",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserPermsUpdateEventEmpty"
                  }
                }
              }
            },
            "401": {
              "description": "You must login before call this endpoint",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessUnauthorizedError"
                  }
                }
              }
            },
            "403": {
              "description": "User does not have the necessary permissions",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessForbiddenError"
                  }
                }
              }
            }
          }
        }
      },
      "/user/verify": {
        "put": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Verify user",
          "description": "Verify a user and allow him access to the platform\n",
          "requestBody": {
            "description": "Object that have user email and user access token",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserVerifyEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Empty body",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserVerifyEventEmpty"
                  }
                }
              }
            }
          }
        }
      },
      "/password/request": {
        "post": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Request to change a user password",
          "description": "Generate a request and a token in database to change a password\n",
          "requestBody": {
            "description": "Object that have user email",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PasswordRequestEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is not correctly defined or cannot find user associated to email",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserNotFoundError"
                  }
                }
              }
            }
          }
        }
      },
      "/password/recover": {
        "post": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Update user password",
          "description": "Find user and update the password in database \n",
          "requestBody": {
            "description": "Object that have token and password twice",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PasswordRecoverEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Empty body, token expired or token was used before",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PasswordRecoverNotFoundError"
                  }
                }
              }
            }
          }
        }
      },
      "/password/change": {
        "put": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Update user password",
          "description": "Find user and update the password in database \n",
          "requestBody": {
            "description": "Object that have password and new password twice",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PasswordChange"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Empty body, password is empty, repeat password is empty, password length is less than 6, password and repeat password does not match or is not a valid password",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PasswordChangeEmptyError"
                  }
                }
              }
            },
            "401": {
              "description": "You must login before call this endpoint",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessUnauthorizedError"
                  }
                }
              }
            }
          },
          "security": [
            {
              "userEmail": []
            }
          ]
        }
      }
    },
    "components": {
      "schemas": {
        "Login": {
          "required": [
            "password",
            "username"
          ],
          "type": "object",
          "properties": {
            "username": {
              "type": "string",
              "format": "email",
              "example": "pedrojimenez@gmail.com"
            },
            "password": {
              "type": "string",
              "example": "hola123"
            }
          }
        },
        "LoginError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "Auth0 login error."
            },
            "code": {
              "type": "string",
              "example": "SECURITY_ACCESS_AUTH0_LOGIN_ERROR"
            }
          }
        },
        "TokenError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "Cannot invoke \\\"String.split(String)\\\" because \\\"token\\\" is null"
            },
            "code": {
              "type": "string",
              "example": "INTERNAL_UNKNOWN_ERROR"
            }
          }
        },
        "Community": {
          "type": "object",
          "properties": {
            "module": {
              "type": "string",
              "example": null
            },
            "name": {
              "type": "string",
              "example": null
            }
          }
        },
        "Module": {
          "type": "string",
          "enum": [
            "COMMUNITY",
            "CONNECT",
            "DISCOVERY",
            "CHALLENGES"
          ]
        },
        "User": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "email": {
              "type": "string",
              "format": "email",
              "example": "pedrojimenez@gmail.com"
            },
            "memberId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "roles": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Role"
              }
            },
            "permissions": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Permission"
              }
            }
          }
        },
        "UserNotFoundError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "User not found."
            },
            "code": {
              "type": "string",
              "example": "USER_NOT_FOUND"
            }
          }
        },
        "Role": {
          "type": "string",
          "example": "DEV:ECOSYSTEM_MANAGER"
        },
        "Permission": {
          "type": "string",
          "example": "DEV:ONLINE_EVENT_CREATE"
        },
        "UserPermsUpdateEvent": {
          "required": [
            "id",
            "perms"
          ],
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "perms": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Permission"
              }
            }
          }
        },
        "UserPermsUpdateEventEmpty": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "The user perms update event object is empty."
            },
            "code": {
              "type": "string",
              "example": "USER_PERMS_UPDATE_EVENT_EMPTY"
            }
          }
        },
        "PasswordRequestEvent": {
          "required": [
            "email"
          ],
          "type": "object",
          "properties": {
            "email": {
              "type": "string",
              "format": "email",
              "example": "pedrojimenez@gmail.com"
            }
          }
        },
        "PasswordRecoverEvent": {
          "required": [
            "password",
            "repeatPassword",
            "token"
          ],
          "type": "object",
          "properties": {
            "token": {
              "type": "string",
              "format": "uuid",
              "example": "123e4567-e89b-12d3-a456-426614174000"
            },
            "password": {
              "type": "string",
              "example": "hola123"
            },
            "repeatPassword": {
              "type": "string",
              "example": "hola123"
            }
          }
        },
        "PasswordRecoverNotFoundError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "Recover password not found."
            },
            "code": {
              "type": "string",
              "example": "PASSWORD_RECOVER_NOT_FOUND_CODE"
            }
          }
        },
        "PasswordChange": {
          "required": [
            "newPassword",
            "newPasswordRepeat",
            "password"
          ],
          "type": "object",
          "properties": {
            "password": {
              "type": "string",
              "example": "hola123"
            },
            "newPassword": {
              "type": "string",
              "example": "nueva123"
            },
            "newPasswordRepeat": {
              "type": "string",
              "example": "hola123"
            }
          }
        },
        "PasswordChangeEmptyError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "Change password not found."
            },
            "code": {
              "type": "string",
              "example": "PASSWORD_CHANGE_NOT_FOUND_CODE"
            }
          }
        },
        "UserVerifyEvent": {
          "required": [
            "token",
            "email"
          ],
          "type": "object",
          "properties": {
            "token": {
              "type": "string",
              "example": "eyJhbGciOiJSUzI1NiIsIn"
            },
            "email": {
              "type": "string",
              "example": "pedrojimenez@gmail.com"
            }
          }
        },
        "UserVerifyEventEmpty": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "The user verify event is empty"
            },
            "code": {
              "type": "string",
              "example": "USER_VERIFY_EVENT_EMPTY_CODE"
            }
          }
        },
        "SecurityAccessUnauthorizedError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "Unauthorized."
            },
            "code": {
              "type": "string",
              "example": "SECURITY_ACCESS_UNAUTHORIZED"
            }
          }
        },
        "SecurityAccessForbiddenError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "Forbidden."
            },
            "code": {
              "type": "string",
              "example": "SECURITY_ACCESS_FORBIDDEN"
            }
          }
        }
      },
      "securitySchemes": {
        "idToken": {
          "type": "apiKey",
          "name": "COOKIE_ID_TOKEN",
          "in": "header"
        },
        "userId": {
          "type": "apiKey",
          "name": "COOKIE_USER_ID",
          "in": "header"
        },
        "userEmail": {
          "type": "apiKey",
          "name": "COOKIE_USER_EMAIL",
          "in": "header"
        },
        "userRoles": {
          "type": "apiKey",
          "name": "COOKIE_USER_ROLES",
          "in": "header"
        },
        "userPermissions": {
          "type": "apiKey",
          "name": "COOKIE_USER_PERMISSIONS",
          "in": "header"
        }
      }
    }
  }
  public static core: Object = {
    "openapi": "3.0.1",
    "info": {
      "title": "Core API",
      "description": "Moonshot Core API",
      "contact": {
        "email": "saulosantanab@gmail.com"
      },
      "license": {
        "name": "Apache 2.0",
        "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
      },
      "version": "1.0.0"
    },
    "servers": [
      {
        "description": "SwaggerHub API Auto Mocking",
        "url": "https://virtserver.swaggerhub.com/MoonshotInnovation/Core/1.0.0"
      },
      {
        "url": "https://dev.moonshot.ceo/api/core"
      }
    ],
    "tags": [
      {
        "name": "EcosystemUpdate",
        "description": "Endpoints available to users with ecosystem update permission"
      },
      {
        "name": "ActorInvite",
        "description": "Endpoints available to users with actor invite permission"
      },
      {
        "name": "NoPerms",
        "description": "Operations available to all users"
      }
    ],
    "paths": {
      "/version": {
        "get": {
          "tags": [
            "NoPerms"
          ],
          "summary": "API version",
          "description": "Return the lastest version of the API\n",
          "operationId": "apiVersion",
          "responses": {
            "200": {
              "description": "API Version",
              "content": {
                "text/plain": {
                  "schema": {
                    "type": "string",
                    "example": "1.0.25.r6-RC1"
                  }
                }
              }
            },
            "500": {
              "description": "Cannot verify the certificate"
            }
          }
        }
      },
      "/signed-url": {
        "get": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Sign a url",
          "description": "Generate a URL that provides limited permission and time to make a request.\n",
          "operationId": "signUrl",
          "parameters": [
            {
              "name": "filename",
              "in": "query",
              "description": "File which you want to sign",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "contentType",
              "in": "query",
              "description": "Content type of the file",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Generate a url successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "https://presignedurldemo.s3.eu-west-2.amazonaws.com/image.png?X-Amz-Algorithm=AWS4-HMAC-Ses=1800&51&X-Amz-SignedHeaders=host"
                  }
                }
              }
            },
            "400": {
              "description": "Cannot find filename, cannot find content type or invalid signed url",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/InvalidSignedUrlError"
                  }
                }
              }
            }
          }
        }
      },
      "/openGraph": {
        "get": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Get OG tags",
          "description": "Get all OG tags from a url\n",
          "operationId": "openGraph",
          "parameters": [
            {
              "name": "url",
              "in": "query",
              "description": "Url from you want to get OG tags",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get OG tags successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/OpenGraph"
                  }
                }
              }
            },
            "400": {
              "description": "Cannot get og tags from URL",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/OpenGraphTagsNotFoundError"
                  }
                }
              }
            },
            "401": {
              "description": "You must login before call this endpoint",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessUnauthorizedError"
                  }
                }
              }
            }
          },
          "security": [
            {
              "idToken": []
            }
          ]
        }
      },
      "/industry/{id}": {
        "get": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Get industry taxonomy by id",
          "description": "Find a industry taxonomy in the database by its identifier\n",
          "operationId": "industryById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "industry id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get taxonomy successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Taxonomy"
                  }
                }
              }
            }
          }
        }
      },
      "/industries": {
        "get": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Get all industry taxonomies",
          "description": "Find all industry taxonomies in the database\n",
          "operationId": "industries",
          "responses": {
            "200": {
              "description": "Get all taxonomies successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Taxonomy"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/business-model/{id}": {
        "get": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Get business model taxonomy by id",
          "description": "Find a business model taxonomy in the database by its identifier\n",
          "operationId": "businessModelById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "business model id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get taxonomy successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Taxonomy"
                  }
                }
              }
            }
          }
        }
      },
      "/business-models": {
        "get": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Get all business model taxonomies",
          "description": "Find all business model taxonomies in the database\n",
          "operationId": "businessModels",
          "responses": {
            "200": {
              "description": "Get all taxonomies successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Taxonomy"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/social-innovation/{id}": {
        "get": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Get social innovation taxonomy by id",
          "description": "Find a social innovation taxonomy in the database by its identifier\n",
          "operationId": "socialInnovationById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "social innovation id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get taxonomy successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Taxonomy"
                  }
                }
              }
            }
          }
        }
      },
      "/social-innovations": {
        "get": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Get all social innovation taxonomies",
          "description": "Find all social innovation taxonomies in the database\n",
          "operationId": "socialInnovations",
          "responses": {
            "200": {
              "description": "Get all taxonomies successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Taxonomy"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/deep-tech/{id}": {
        "get": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Get deep tech taxonomy by id",
          "description": "Find a deep tech taxonomy in the database by its identifier\n",
          "operationId": "deepTechById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "deep tech id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get taxonomy successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DeepTech"
                  }
                }
              }
            }
          }
        }
      },
      "/deep-techs": {
        "get": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Get all deep techs taxonomies",
          "description": "Find all deep techs taxonomies in the database\n",
          "operationId": "deepTechs",
          "responses": {
            "200": {
              "description": "Get all taxonomies successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/DeepTech"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/ecosystem/initialized": {
        "get": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Check if the ecosystem has been created",
          "description": "Check the database if there is an ecosystem to not allow creating another\n",
          "operationId": "ecosystemInitialized",
          "responses": {
            "200": {
              "description": "Get if ecosystem has been created",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "boolean",
                    "example": true
                  }
                }
              }
            }
          }
        }
      },
      "/ecosystem": {
        "get": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Get current ecosystem",
          "description": "Find current ecosystem in database and get all the data associated\n",
          "operationId": "ecosystemFind",
          "responses": {
            "200": {
              "description": "Get ecosystem data successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Ecosystem"
                  }
                }
              }
            },
            "401": {
              "description": "You must login before call this endpoint",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessUnauthorizedError"
                  }
                }
              }
            }
          },
          "security": [
            {
              "idToken": []
            }
          ]
        },
        "post": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Create new ecosystem",
          "description": "Create a new ecosystem if another has not already been created\n",
          "operationId": "ecosystemCreate",
          "requestBody": {
            "description": "Object that contain all parameters to create new ecosystem",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EcosystemCreateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, ecosystem alredy exist, ecosystem manager is empty, password is empty, repeat password is empty or password do not match",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/EcosystemAlreadyExistError"
                  }
                }
              }
            }
          }
        },
        "put": {
          "tags": [
            "EcosystemUpdate"
          ],
          "summary": "Update an ecosystem",
          "description": "Find and update an ecosystem in database\n",
          "operationId": "ecosystemUpdate",
          "requestBody": {
            "description": "Object that contain all parameters to update an ecosystem",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EcosystemUpdateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or cannot find the ecosystem",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/EcosystemNotFoundError"
                  }
                }
              }
            },
            "401": {
              "description": "You must login before call this endpoint",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessUnauthorizedError"
                  }
                }
              }
            },
            "403": {
              "description": "User does not have the necessary permissions",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessForbiddenError"
                  }
                }
              }
            }
          },
          "security": [
            {
              "idToken": []
            }
          ]
        }
      },
      "/ecosystem/invite": {
        "post": {
          "tags": [
            "ActorInvite"
          ],
          "summary": "Invite someone to your ecosystem",
          "description": "Send an email to one or more people to join your ecosystem\n",
          "operationId": "ecosystemInvitation",
          "requestBody": {
            "description": "Object that contain a list of email and a reason",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EcosystemInviteEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body or emails are null",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/EcosystemInviteEmailEmptyError"
                  }
                }
              }
            },
            "401": {
              "description": "You must login before call this endpoint",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessUnauthorizedError"
                  }
                }
              }
            },
            "403": {
              "description": "User does not have the necessary permissions",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessForbiddenError"
                  }
                }
              }
            }
          },
          "security": [
            {
              "idToken": []
            }
          ]
        }
      },
      "/notifications": {
        "get": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Get all notifications",
          "description": "Find all notifications in the database\n",
          "operationId": "notifications",
          "responses": {
            "200": {
              "description": "Get all notifications successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Notification"
                    }
                  }
                }
              }
            },
            "401": {
              "description": "You must login before call this endpoint",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessUnauthorizedError"
                  }
                }
              }
            },
            "403": {
              "description": "User does not have the necessary permissions",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessForbiddenError"
                  }
                }
              }
            }
          }
        }
      },
      "/notification/{id}": {
        "get": {
          "tags": [
            "NoPerms"
          ],
          "summary": "Get notification by id",
          "description": "Find a notification in the database by its identifier\n",
          "operationId": "notificationById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "notification id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get notification successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "$ref": "#/components/schemas/Notification"
                  }
                }
              }
            },
            "401": {
              "description": "You must login before call this endpoint",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessUnauthorizedError"
                  }
                }
              }
            },
            "403": {
              "description": "User does not have the necessary permissions",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityAccessForbiddenError"
                  }
                }
              }
            }
          }
        }
      }
    },
    "components": {
      "schemas": {
        "Taxonomy": {
          "required": [
            "id",
            "type"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "type": {
              "type": "string",
              "example": "AGRICULTURE_FORESTRY_AND_FISHING"
            }
          }
        },
        "DeepTech": {
          "required": [
            "id",
            "type",
            "cells"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "61445159784bca6ef764c6df"
            },
            "type": {
              "type": "string",
              "example": "NANOTECH_AND_ROBOTICS"
            },
            "cells": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/DeepTechCell"
              }
            }
          }
        },
        "DeepTechCell": {
          "required": [
            "type",
            "kets"
          ],
          "properties": {
            "type": {
              "type": "string",
              "example": "BIOMATERIALS"
            },
            "kets": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "BIOACTIVE_MATERIALS"
              }
            }
          }
        },
        "OpenGraph": {
          "required": [
            "title",
            "description",
            "imageURL",
            "url"
          ],
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "example": "Code Mario in JavaScript with Kaboom.js!"
            },
            "description": {
              "type": "string",
              "example": "In this video I show you how to build a Mario in JavaScript using the Kaboom.js library in my code editor of choice"
            },
            "imageURL": {
              "type": "string",
              "example": "https://i.ytimg.com/vi/2nucjefSr6I/maxresdefault.jpg"
            },
            "url": {
              "type": "string",
              "example": "https://www.youtube.com/watch?v=2nucjefSr6I"
            }
          }
        },
        "OpenGraphTagsNotFoundError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "OpenGraph tags URL not found."
            },
            "code": {
              "type": "string",
              "example": "OPENGRAPH_TAGS_URL_NOT_FOUND"
            }
          }
        },
        "InvalidSignedUrlError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "Invalid S3 signed URL."
            },
            "code": {
              "type": "string",
              "example": "S3_INVALID_SIGNED_URL"
            }
          }
        },
        "Ecosystem": {
          "required": [
            "id",
            "type",
            "name",
            "address",
            "latitude",
            "longitude",
            "city",
            "country",
            "phone",
            "web",
            "description",
            "objectives",
            "logo",
            "acceptedActors",
            "services",
            "customServices",
            "media",
            "socialNetworks",
            "deepTechs",
            "businessModels",
            "industries",
            "socialInnovations"
          ],
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "61445159784bca6ef764c6df"
            },
            "type": {
              "type": "string",
              "enum": [
                "CORPORATE",
                "SOCIAL_IMPACT",
                "THEMATIC",
                "NATIONAL_AND_REGIONAL",
                "DIGITAL_INNOVATION"
              ]
            },
            "name": {
              "type": "string",
              "example": "EcosystemCore"
            },
            "address": {
              "type": "string",
              "example": "3761 Coleman Plains Suite 604 - Las Cruces"
            },
            "latitude": {
              "type": "number",
              "example": 16.8
            },
            "longitude": {
              "type": "number",
              "example": 90.3
            },
            "city": {
              "type": "string",
              "example": "Madrid"
            },
            "country": {
              "type": "string",
              "example": "Spain"
            },
            "phone": {
              "type": "string",
              "example": 34999999999
            },
            "web": {
              "type": "string",
              "example": "www.ecosystem.com"
            },
            "description": {
              "type": "string",
              "example": "Ecosystem to test"
            },
            "objetives": {
              "type": "string",
              "example": "Increase the number of users, communicate through the platform"
            },
            "logo": {
              "$ref": "#/components/schemas/Image"
            },
            "acceptedActors": {
              "type": "array",
              "items": {
                "type": "string",
                "enum": [
                  "STARTUP",
                  "COMPANY",
                  "EXPERT",
                  "PERSON_INVESTOR",
                  "ORGANIZATION_INVESTOR",
                  "MENTOR",
                  "PUBLIC_ENTITY",
                  "RESEARCH_GROUP",
                  "TALENT",
                  "UNIVERSITY",
                  "NGO",
                  "HUB",
                  "CLUSTER"
                ]
              }
            },
            "services": {
              "type": "array",
              "items": {
                "type": "string",
                "enum": [
                  "FINANCIAL_AND_VALUATION",
                  "FACILITIES",
                  "MARKETING_AND_DESIGN_THINKING",
                  "COMMERCIAL_SERVICES",
                  "MANAGEMENT_SERVICES",
                  "PROTOTYPES_AND_TESTING",
                  "BACKEND_SERVICES",
                  "IP_PROTECTION_AND_PATENTS",
                  "SMART_DATA_AND_AI_SERVICES",
                  "BUSINESS_AND_STRATEGY",
                  "CHALLENGES",
                  "LEGAL_SERVICES",
                  "TECHNOLOGY_ACCELERATION",
                  "DEMO_DAY",
                  "ENGINEERING_SERVICES",
                  "WORKSHOPS_AND_EVENTS",
                  "OTHER"
                ]
              }
            },
            "customServices": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "SUPPLIER_OF_CONSTRUCTION_MATERIALS"
              }
            },
            "media": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png"
              }
            },
            "socialNetworks": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "https://www.instagram.com/user1, https://www.twitter.com/user1, https://www.linkedln.com/user1"
              }
            },
            "deepTechs": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/DeepTech"
              }
            },
            "businessModels": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Taxonomy"
              }
            },
            "industries": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Taxonomy"
              }
            },
            "socialInnovations": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Taxonomy"
              }
            }
          }
        },
        "EcosystemCreateEvent": {
          "required": [
            "id",
            "type",
            "name",
            "address",
            "latitude",
            "longitude",
            "city",
            "country",
            "phone",
            "web",
            "description",
            "objectives",
            "logo",
            "acceptedActors",
            "services",
            "customServices",
            "media",
            "socialNetworks",
            "deepTechs",
            "businessModels",
            "industries",
            "socialInnovations",
            "manager",
            "password",
            "repeatPassword"
          ],
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "61445159784bca6ef764c6df"
            },
            "type": {
              "type": "string",
              "enum": [
                "CORPORATE",
                "SOCIAL_IMPACT",
                "THEMATIC",
                "NATIONAL_AND_REGIONAL",
                "DIGITAL_INNOVATION"
              ]
            },
            "name": {
              "type": "string",
              "example": "EcosystemCore"
            },
            "address": {
              "type": "string",
              "example": "3761 Coleman Plains Suite 604 - Las Cruces"
            },
            "latitude": {
              "type": "number",
              "example": 16.8
            },
            "longitude": {
              "type": "number",
              "example": 90.3
            },
            "city": {
              "type": "string",
              "example": "Madrid"
            },
            "country": {
              "type": "string",
              "example": "Spain"
            },
            "phone": {
              "type": "string",
              "example": 34999999999
            },
            "web": {
              "type": "string",
              "example": "www.ecosystem.com"
            },
            "description": {
              "type": "string",
              "example": "Ecosystem to test"
            },
            "objetives": {
              "type": "string",
              "example": "Increase the number of users, communicate through the platform"
            },
            "logo": {
              "$ref": "#/components/schemas/Image"
            },
            "acceptedActors": {
              "type": "array",
              "items": {
                "type": "string",
                "enum": [
                  "STARTUP",
                  "COMPANY",
                  "EXPERT",
                  "PERSON_INVESTOR",
                  "ORGANIZATION_INVESTOR",
                  "MENTOR",
                  "PUBLIC_ENTITY",
                  "RESEARCH_GROUP",
                  "TALENT",
                  "UNIVERSITY",
                  "NGO",
                  "HUB",
                  "CLUSTER"
                ]
              }
            },
            "services": {
              "type": "array",
              "items": {
                "type": "string",
                "enum": [
                  "FINANCIAL_AND_VALUATION",
                  "FACILITIES",
                  "MARKETING_AND_DESIGN_THINKING",
                  "COMMERCIAL_SERVICES",
                  "MANAGEMENT_SERVICES",
                  "PROTOTYPES_AND_TESTING",
                  "BACKEND_SERVICES",
                  "IP_PROTECTION_AND_PATENTS",
                  "SMART_DATA_AND_AI_SERVICES",
                  "BUSINESS_AND_STRATEGY",
                  "CHALLENGES",
                  "LEGAL_SERVICES",
                  "TECHNOLOGY_ACCELERATION",
                  "DEMO_DAY",
                  "ENGINEERING_SERVICES",
                  "WORKSHOPS_AND_EVENTS",
                  "OTHER"
                ]
              }
            },
            "customServices": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "SUPPLIER_OF_CONSTRUCTION_MATERIALS"
              }
            },
            "media": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png"
              }
            },
            "socialNetworks": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "https://www.instagram.com/user1, https://www.twitter.com/user1, https://www.linkedln.com/user1"
              }
            },
            "deepTechs": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/DeepTech"
              }
            },
            "businessModels": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Taxonomy"
              }
            },
            "industries": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Taxonomy"
              }
            },
            "socialInnovations": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Taxonomy"
              }
            },
            "manager": {
              "$ref": "#/components/schemas/Member"
            },
            "password": {
              "type": "string",
              "example": "hola123"
            },
            "repeatPassword": {
              "type": "string",
              "example": "hola123"
            }
          }
        },
        "EcosystemUpdateEvent": {
          "required": [
            "id",
            "type",
            "name",
            "address",
            "latitude",
            "longitude",
            "city",
            "country",
            "phone",
            "web",
            "description",
            "objectives",
            "logo",
            "acceptedActors",
            "services",
            "customServices",
            "media",
            "socialNetworks",
            "deepTechs",
            "businessModels",
            "industries",
            "socialInnovations"
          ],
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "61445159784bca6ef764c6df"
            },
            "type": {
              "type": "string",
              "enum": [
                "CORPORATE",
                "SOCIAL_IMPACT",
                "THEMATIC",
                "NATIONAL_AND_REGIONAL",
                "DIGITAL_INNOVATION"
              ]
            },
            "name": {
              "type": "string",
              "example": "EcosystemCore"
            },
            "address": {
              "type": "string",
              "example": "3761 Coleman Plains Suite 604 - Las Cruces"
            },
            "latitude": {
              "type": "number",
              "example": 16.8
            },
            "longitude": {
              "type": "number",
              "example": 90.3
            },
            "city": {
              "type": "string",
              "example": "Madrid"
            },
            "country": {
              "type": "string",
              "example": "Spain"
            },
            "phone": {
              "type": "string",
              "example": 34999999999
            },
            "web": {
              "type": "string",
              "example": "www.ecosystem.com"
            },
            "description": {
              "type": "string",
              "example": "Ecosystem to test"
            },
            "objetives": {
              "type": "string",
              "example": "Increase the number of users, communicate through the platform"
            },
            "logo": {
              "$ref": "#/components/schemas/Image"
            },
            "acceptedActors": {
              "type": "array",
              "items": {
                "type": "string",
                "enum": [
                  "STARTUP",
                  "COMPANY",
                  "EXPERT",
                  "PERSON_INVESTOR",
                  "ORGANIZATION_INVESTOR",
                  "MENTOR",
                  "PUBLIC_ENTITY",
                  "RESEARCH_GROUP",
                  "TALENT",
                  "UNIVERSITY",
                  "NGO",
                  "HUB",
                  "CLUSTER"
                ]
              }
            },
            "services": {
              "type": "array",
              "items": {
                "type": "string",
                "enum": [
                  "FINANCIAL_AND_VALUATION",
                  "FACILITIES",
                  "MARKETING_AND_DESIGN_THINKING",
                  "COMMERCIAL_SERVICES",
                  "MANAGEMENT_SERVICES",
                  "PROTOTYPES_AND_TESTING",
                  "BACKEND_SERVICES",
                  "IP_PROTECTION_AND_PATENTS",
                  "SMART_DATA_AND_AI_SERVICES",
                  "BUSINESS_AND_STRATEGY",
                  "CHALLENGES",
                  "LEGAL_SERVICES",
                  "TECHNOLOGY_ACCELERATION",
                  "DEMO_DAY",
                  "ENGINEERING_SERVICES",
                  "WORKSHOPS_AND_EVENTS",
                  "OTHER"
                ]
              }
            },
            "customServices": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "SUPPLIER_OF_CONSTRUCTION_MATERIALS"
              }
            },
            "media": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png"
              }
            },
            "socialNetworks": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "https://www.instagram.com/user1, https://www.twitter.com/user1, https://www.linkedln.com/user1"
              }
            },
            "deepTechs": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/DeepTech"
              }
            },
            "businessModels": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Taxonomy"
              }
            },
            "industries": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Taxonomy"
              }
            },
            "socialInnovations": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Taxonomy"
              }
            }
          }
        },
        "Image": {
          "required": [
            "original",
            "thumbnail",
            "crop"
          ],
          "type": "object",
          "properties": {
            "original": {
              "type": "string",
              "example": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png"
            },
            "thumbnail": {
              "type": "string",
              "example": "https://moonshot-innovation.s3.eu-central-1.amazonaws.com/60aca5fa0565c3210a322662/image/f306ce3b-4db9-4529-9bde-fdb133bbef1f.png"
            },
            "crop": {
              "$ref": "#/components/schemas/Crop"
            }
          }
        },
        "EcosystemInviteEvent": {
          "required": [
            "emails",
            "reason"
          ],
          "properties": {
            "emails": {
              "type": "array",
              "items": {
                "type": "string",
                "format": "email",
                "example": "example1@gmail.com, example2@gmail.com, example3@gmail.com"
              }
            },
            "reason": {
              "type": "string",
              "example": "You have been invited to my ecosystem to share information"
            }
          }
        },
        "Crop": {
          "required": [
            "x",
            "y",
            "width",
            "height"
          ],
          "type": "object",
          "properties": {
            "x": {
              "type": "number",
              "example": 100
            },
            "y": {
              "type": "number",
              "example": 20
            },
            "width": {
              "type": "number",
              "example": 1750
            },
            "height": {
              "type": "number",
              "example": 500
            }
          }
        },
        "Member": {
          "required": [
            "id",
            "state",
            "name",
            "lastname",
            "address",
            "email",
            "about",
            "image",
            "socialNetworks",
            "experiences",
            "educations"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "61445159784bca6ef764c6df"
            },
            "state": {
              "type": "string",
              "enum": [
                "ACCEPTED",
                "PENDING",
                "REJECTED"
              ]
            },
            "name": {
              "type": "string",
              "example": "Carlos"
            },
            "lastname": {
              "type": "string",
              "example": "Guarin"
            },
            "address": {
              "$ref": "#/components/schemas/Address"
            },
            "email": {
              "type": "string",
              "format": "email",
              "example": "pruebaemail@gmmail.com"
            },
            "about": {
              "type": "string",
              "example": "Developer"
            },
            "socialNetworks": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "https://www.instagram.com/user1, https://www.twitter.com/user1, https://www.linkedln.com/user1"
              }
            },
            "experiences": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Experience"
              }
            },
            "educations": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Education"
              }
            }
          }
        },
        "Education": {
          "required": [
            "id",
            "school",
            "degree",
            "fieldOfStudy",
            "startDate",
            "endDate",
            "grade",
            "activitiesAndSocieties",
            "description"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "61445159784bca6ef764c6df"
            },
            "school": {
              "type": "string",
              "example": "Universidad de Navarra"
            },
            "degree": {
              "type": "string",
              "example": "Licenciado en Periodismo"
            },
            "fieldOfStudy": {
              "type": "string",
              "example": "Periodismo radiofónico"
            },
            "startDate": {
              "type": "string",
              "format": "localdate",
              "example": "2020-07-30T00:00:00.000Z"
            },
            "endDate": {
              "type": "string",
              "format": "localdate",
              "example": "2021-05-14T00:00:00.000Z"
            },
            "grade": {
              "type": "number",
              "example": 8.5
            },
            "activitiesAndSocieties": {
              "type": "string",
              "example": "Equipo de rugby universitario"
            },
            "description": {
              "type": "string",
              "example": "Cuatro años en la universidad de Navarra desarrollandome como periodista, incrementando mis capacidades comunicativas"
            }
          }
        },
        "Experience": {
          "required": [
            "id",
            "title",
            "type",
            "company",
            "location",
            "startDate",
            "endDate",
            "description"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "61445159784bca6ef764c6df"
            },
            "title": {
              "type": "string",
              "example": "University practices"
            },
            "company": {
              "type": "string",
              "example": "Moonshot Innovation"
            },
            "location": {
              "$ref": "#/components/schemas/Address"
            },
            "startDate": {
              "type": "string",
              "format": "localdate",
              "example": "2020-07-30T00:00:00.000Z"
            },
            "endDate": {
              "type": "string",
              "format": "localdate",
              "example": "2021-05-14T00:00:00.000Z"
            },
            "description": {
              "type": "string",
              "example": "I did front end development work"
            }
          }
        },
        "Address": {
          "required": [
            "lat",
            "lng",
            "formatted",
            "components"
          ],
          "properties": {
            "lat": {
              "type": "number",
              "example": 20.3
            },
            "lng": {
              "type": "number",
              "example": 14.2
            },
            "formatted": {
              "type": "string",
              "example": "3761 Coleman Plains Suite 604 - Las Cruces"
            },
            "components": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AddressComponent"
              }
            }
          }
        },
        "AddressComponent": {
          "required": [
            "name",
            "shortname",
            "type"
          ],
          "properties": {
            "name": {
              "type": "string",
              "example": "California"
            },
            "shortname": {
              "type": "string",
              "example": "CA"
            },
            "type": {
              "type": "string",
              "enum": [
                "ADMINISTRATIVE_AREA_LEVEL_1",
                "ADMINISTRATIVE_AREA_LEVEL_2",
                "ADMINISTRATIVE_AREA_LEVEL_3",
                "ADMINISTRATIVE_AREA_LEVEL_4",
                "ADMINISTRATIVE_AREA_LEVEL_5",
                "ARCHIPELAGO",
                "COLLOQUIAL_AREA",
                "CONTINENT",
                "COUNTRY",
                "ESTABLISHMENT",
                "FINANCE",
                "FLOOR",
                "FOOD",
                "GENERAL_CONTRACTOR",
                "GEOCODE",
                "HEALTH",
                "INTERSECTION",
                "LANDMARK",
                "LOCALITY",
                "NATURAL_FEATURE",
                "NEIGHBORHOOD",
                "PLACE_OF_WORSHIP",
                "PLUS_CODE",
                "POINT_OF_INTEREST",
                "POLITICAL",
                "POST_BOX",
                "POSTAL_CODE",
                "POSTAL_CODE_PREFIX",
                "POSTAL_CODE_SUFFIX",
                "POSTAL_TOWN",
                "PREMISE",
                "ROOM",
                "ROUTE",
                "STREET_ADDRESS",
                "STREET_NUMBER",
                "SUBLOCALITY",
                "SUBLOCALITY_LEVEL_1",
                "SUBLOCALITY_LEVEL_2",
                "SUBLOCALITY_LEVEL_3",
                "SUBLOCALITY_LEVEL_4",
                "SUBLOCALITY_LEVEL_5",
                "SUBPREMISE",
                "TOWN_SQUARE"
              ]
            }
          }
        },
        "EcosystemAlreadyExistError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "An ecosystem already exists."
            },
            "code": {
              "type": "string",
              "example": "ECOSYSTEM_ALREADY_EXISTS"
            }
          }
        },
        "EcosystemNotFoundError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "Ecosystem not found."
            },
            "code": {
              "type": "string",
              "example": "ECOSYSTEM_NOT_FOUND"
            }
          }
        },
        "EcosystemInviteEmailEmptyError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "The ecosystem invite event emails are empty."
            },
            "code": {
              "type": "string",
              "example": "ECOSYSTEM_INVITE_EMAILS_EMPTY"
            }
          }
        },
        "Notification": {
          "required": [
            "id",
            "channels",
            "type",
            "push",
            "email",
            "createdAt"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "61445159784bca6ef764c6df"
            },
            "channels": {
              "type": "array",
              "items": {
                "type": "string",
                "enum": [
                  "EMAIL",
                  "PUSH"
                ]
              }
            },
            "type": {
              "type": "string",
              "enum": [
                "ECOSYSTEM_ACCESS_REQUEST",
                "ECOSYSTEM_WELCOME",
                "ECOSYSTEM_INVITATION",
                "ACTOR_REJECTED",
                "EMAIL_VERIFICATION",
                "WALL_POST_LIKE",
                "WALL_POST_COMMENT",
                "EVENT_CREATE",
                "EVENT_ABOUT_TO_START",
                "FOLLOW_UP_ROOM_INVITED",
                "FOLLOW_UP_ROOM_NEWS",
                "FOLLOW_UP_ROOM_MISSED_CALL",
                "DIRECT_CHAT_NEW_MESSAGE",
                "DIRECT_CHAT_MISSED_CALL",
                "PUBLIC_CHANNEL_NEWS",
                "DISCOVERY_NEW_TIPS",
                "DISCOVERY_SEARCHES",
                "CONNECT_VIEWS",
                "RECOVER_PASSWORD"
              ]
            },
            "email": {
              "$ref": "#/components/schemas/Email"
            },
            "createdAt": {
              "type": "string",
              "format": "A date-time with a time-zone in the ISO-8601",
              "example": "2021-09-18T00:00:00.000Z"
            }
          }
        },
        "Email": {
          "required": [
            "from",
            "to",
            "cc",
            "bcc",
            "subject",
            "templateId",
            "attachments",
            "inlines",
            "params"
          ],
          "properties": {
            "from": {
              "$ref": "#/components/schemas/EmailFrom"
            },
            "to": {
              "type": "array",
              "items": {
                "type": "string",
                "format": "email",
                "example": "example1@gmail.com, example2@gmail.com"
              }
            },
            "cc": {
              "type": "array",
              "items": {
                "type": "string",
                "format": "email",
                "example": "example1@gmail.com, example2@gmail.com"
              }
            },
            "bcc": {
              "type": "array",
              "items": {
                "type": "string",
                "format": "email",
                "example": "example1@gmail.com, example2@gmail.com"
              }
            },
            "subject": {
              "type": "string",
              "example": "Ecosystem invitation"
            },
            "templateId": {
              "type": "string",
              "example": "MAIL_TEMPLATE_ECOSYSTEM_ACCESS_REQUEST"
            },
            "attachments": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/EmailAttachment"
              }
            },
            "inlines": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/EmailInline"
              }
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": "string",
                "example": {
                  "reason": "No reason",
                  "image": "https://api.moonshot.ceo/api/media/5b8c41dbefc45400015a6f9a/userAvatar.jpeg"
                }
              }
            }
          }
        },
        "EmailFrom": {
          "required": [
            "email",
            "name"
          ],
          "properties": {
            "email": {
              "type": "string",
              "format": "email",
              "example": "example1@gmail.com"
            },
            "name": {
              "type": "string",
              "example": "example1"
            }
          }
        },
        "EmailAttachment": {
          "required": [
            "name",
            "file"
          ],
          "properties": {
            "name": {
              "type": "string",
              "example": "archivo1.pdf"
            },
            "file": {
              "type": "object",
              "format": "Java File object"
            }
          }
        },
        "EmailInline": {
          "required": [
            "cid",
            "file"
          ],
          "properties": {
            "cid": {
              "type": "string",
              "example": "<foo4atfoo1atbar.net>"
            },
            "file": {
              "type": "object",
              "format": "Java File object"
            }
          }
        },
        "SecurityAccessUnauthorizedError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "Unauthorized."
            },
            "code": {
              "type": "string",
              "example": "SECURITY_ACCESS_UNAUTHORIZED"
            }
          }
        },
        "SecurityAccessForbiddenError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "Forbidden."
            },
            "code": {
              "type": "string",
              "example": "SECURITY_ACCESS_FORBIDDEN"
            }
          }
        }
      },
      "securitySchemes": {
        "idToken": {
          "type": "apiKey",
          "name": "COOKIE_ID_TOKEN",
          "in": "header"
        },
        "userId": {
          "type": "apiKey",
          "name": "COOKIE_USER_ID",
          "in": "header"
        },
        "userEmail": {
          "type": "apiKey",
          "name": "COOKIE_USER_EMAIL",
          "in": "header"
        },
        "userRoles": {
          "type": "apiKey",
          "name": "COOKIE_USER_ROLES",
          "in": "header"
        },
        "userPermissions": {
          "type": "apiKey",
          "name": "COOKIE_USER_PERMISSIONS",
          "in": "header"
        }
      }
    }
  }
  public static community: Object = {
  }
}
