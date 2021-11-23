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
        "name": "Version",
        "description": "Endpoint that return Core last version"
      },
      {
        "name": "Login",
        "description": "Endpoint that allow user login in the application"
      },
      {
        "name": "Token",
        "description": "Endpoint that return user token"
      },
      {
        "name": "Logout",
        "description": "Endpoint that allow user exit from de application"
      },
      {
        "name": "Community",
        "description": "Enpoint that return all communities in your ecosystem"
      },
      {
        "name": "Module",
        "description": "Enpoint that return all modules in your ecosystem"
      },
      {
        "name": "User",
        "description": "Endpoints about User entity"
      },
      {
        "name": "Password",
        "description": "Endpoints about Password entity"
      }
    ],
    "paths": {
      "/version": {
        "get": {
          "tags": [
            "Version"
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
          },
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/federation#version_get"
          }
        }
      },
      "/login": {
        "post": {
          "tags": [
            "Login"
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
          },
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/federation#login_post"
          }
        }
      },
      "/logout": {
        "get": {
          "tags": [
            "Logout"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/federation#logout_get"
          }
        }
      },
      "/token": {
        "post": {
          "tags": [
            "Token"
          ],
          "summary": "Get authentication token",
          "description": "Add authentication token to session cookies\n",
          "operationId": "token",
          "parameters": [
            {
              "name": "tokenId",
              "in": "query",
              "required": true,
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
          },
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/federation#token_post"
          }
        }
      },
      "/communities": {
        "get": {
          "tags": [
            "Community"
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
          },
          "security": [
            {
              "userId": []
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/federation#communities_get"
          }
        }
      },
      "/modules": {
        "get": {
          "tags": [
            "Module"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/federation#modules_get"
          }
        }
      },
      "/user/{id}": {
        "get": {
          "tags": [
            "User"
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
          },
          "security": [
            {
              "userId": []
            },
            {
              "permissions": [
                "ecosystem_management"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/federation#user/:id_get"
          }
        }
      },
      "/user/by/email": {
        "get": {
          "tags": [
            "User"
          ],
          "summary": "Get user by email",
          "description": "Find a user in the database by email\n",
          "operationId": "userByEmail",
          "parameters": [
            {
              "name": "email",
              "in": "query",
              "description": "User email",
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
          },
          "security": [
            {
              "userId": []
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/federation#users/by/email_get"
          }
        }
      },
      "/users": {
        "get": {
          "tags": [
            "User"
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
          },
          "security": [
            {
              "userId": []
            },
            {
              "permissions": [
                "permission_management"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/federation#users_get"
          }
        }
      },
      "/users/by/roles": {
        "get": {
          "tags": [
            "User"
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
          },
          "security": [
            {
              "userId": []
            },
            {
              "permissions": [
                "ecosystem_management"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/federation#users/by/roles_get"
          }
        }
      },
      "/users/perms": {
        "get": {
          "tags": [
            "User"
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
          },
          "security": [
            {
              "userId": []
            },
            {
              "permissions": [
                "permission_management"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/federation#users/perms_get"
          }
        },
        "put": {
          "tags": [
            "User"
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
          },
          "security": [
            {
              "userId": []
            },
            {
              "permissions": [
                "permission_management"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/federation#users/perms_put"
          }
        }
      },
      "/user/verify": {
        "put": {
          "tags": [
            "User"
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
          },
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/federation#user/verify_put"
          }
        }
      },
      "/password/request": {
        "post": {
          "tags": [
            "Password"
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
          },
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/federation#password/request_post"
          }
        }
      },
      "/password/recover": {
        "post": {
          "tags": [
            "Password"
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
          },
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/federation#password/recover_post"
          }
        }
      },
      "/password/change": {
        "put": {
          "tags": [
            "Password"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/federation#password/change_put"
          }
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
        },
        "permissions": {
          "type": "oauth2",
          "description": "This define all permisions required in Core API",
          "flows": {
            "authorizationCode": {
              "scopes": {
                "permission_management": "Permission required to add or remove user permissions",
                "ecosystem_management": "Permission required to make any operation in the ecosystem"
              },
              "authorizationUrl": "https://dev.moonshot.ceo/api/federation/login",
              "tokenUrl": "https://dev.moonshot.ceo/api/federation/token"
            }
          }
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
      "version": "1.0.0"
    },
    "servers": [
      {
        "url": "https://dev.moonshot.ceo/api/core"
      }
    ],
    "tags": [
      {
        "name": "Version",
        "description": "Endpoint that return Core last version"
      },
      {
        "name": "Signed Url",
        "description": "Enpoint that sign a url"
      },
      {
        "name": "Open Graph",
        "description": "Endpoint that return OG Tags"
      },
      {
        "name": "Industry",
        "description": "Endpoints about Industry taxonomy"
      },
      {
        "name": "Business Model",
        "description": "Endpoints about BusinessModel taxonomy"
      },
      {
        "name": "Social Innovation",
        "description": "Endpoints about SocialInnovation taxonomy"
      },
      {
        "name": "Deep Tech",
        "description": "Endpoints about DeepTech taxonomy"
      },
      {
        "name": "Ecosystem",
        "description": "Endpoints about Ecosystem entity"
      },
      {
        "name": "Notifications",
        "description": "Endpoints about Notification entity"
      }
    ],
    "paths": {
      "/version": {
        "get": {
          "tags": [
            "Version"
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
          },
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/core#version_get"
          }
        }
      },
      "/signed-url": {
        "get": {
          "tags": [
            "Signed Url"
          ],
          "summary": "Sign a url",
          "description": "Generate a URL that provides limited permission and time to make a request.\n",
          "operationId": "signUrl",
          "parameters": [
            {
              "name": "filename",
              "in": "query",
              "description": "Filename which you want save in AWS",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "contentType",
              "in": "query",
              "description": "Content type of the file",
              "required": true,
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
                    "example": "https://presignedurldemo.s3.eu-west-2.amazonaws.com/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=%%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20180210T171315Z&X-Amz-Expires=1800&X-Amz-Signature=12b74b0788aa036bc7c3d03b3f20c61f1f91cc9ad8873e3314255dc479a25351&X-Amz-SignedHeaders=host"
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
          },
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/core#signed-url_get"
          }
        }
      },
      "/openGraph": {
        "get": {
          "tags": [
            "Open Graph"
          ],
          "summary": "Get OG tags",
          "description": "Get all OG tags from a url\n",
          "operationId": "openGraph",
          "parameters": [
            {
              "name": "url",
              "in": "query",
              "description": "Url from you want to get OG tags",
              "required": true,
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/core#openGraph_get"
          }
        }
      },
      "/industry/{id}": {
        "get": {
          "tags": [
            "Industry"
          ],
          "summary": "Get industry taxonomy by id",
          "description": "Find an industry taxonomy in the database by its identifier\n",
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
          },
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/core#industry/:id_get"
          }
        }
      },
      "/industries": {
        "get": {
          "tags": [
            "Industry"
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
          },
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/core#industries_get"
          }
        }
      },
      "/business-model/{id}": {
        "get": {
          "tags": [
            "Business Model"
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
          },
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/core#business-model/:id_get"
          }
        }
      },
      "/business-models": {
        "get": {
          "tags": [
            "Business Model"
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
          },
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/core#business-models_get"
          }
        }
      },
      "/social-innovation/{id}": {
        "get": {
          "tags": [
            "Social Innovation"
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
          },
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/core#social-innovation/:id_get"
          }
        }
      },
      "/social-innovations": {
        "get": {
          "tags": [
            "Social Innovation"
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
          },
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/core#social-innovations_get"
          }
        }
      },
      "/deep-tech/{id}": {
        "get": {
          "tags": [
            "Deep Tech"
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
          },
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/core#deep-tech/:id_get"
          }
        }
      },
      "/deep-techs": {
        "get": {
          "tags": [
            "Deep Tech"
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
          },
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/core#deep-techs_get"
          }
        }
      },
      "/ecosystem/initialized": {
        "get": {
          "tags": [
            "Ecosystem"
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
          },
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/core#ecosystem/initialized_get"
          }
        }
      },
      "/ecosystem": {
        "get": {
          "tags": [
            "Ecosystem"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/core#ecosystem_get"
          }
        },
        "post": {
          "tags": [
            "Ecosystem"
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
          },
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/core#ecosystem_post"
          }
        },
        "put": {
          "tags": [
            "Ecosystem"
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
            },
            {
              "permissions": [
                "ecosystem_update"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/core#ecosystem_put"
          }
        }
      },
      "/ecosystem/invite": {
        "post": {
          "tags": [
            "Ecosystem"
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
            },
            {
              "permissions": [
                "actor_invite"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/core#ecosystem/invite_post"
          }
        }
      },
      "/notifications": {
        "get": {
          "tags": [
            "Notifications"
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
          },
          "security": [
            {
              "idToken": []
            },
            {
              "permissions": [
                "ecosystem_update"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/core#notifications_get"
          }
        }
      },
      "/notification/{id}": {
        "get": {
          "tags": [
            "Notifications"
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
          },
          "security": [
            {
              "idToken": []
            },
            {
              "permissions": [
                "ecosystem_update"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/core#notification/:id_get"
          }
        }
      },
      "/notification": {
        "post": {
          "tags": [
            "Notifications"
          ],
          "summary": "Create a notification",
          "description": "Create and insert a notification in database\n",
          "operationId": "notification",
          "requestBody": {
            "description": "Object that contains all parameters to create a notification",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Notification"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
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
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/core#notification_post"
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
                "type": "string",
                "example": "SMART_DATA_DISCOVERY, CLOUD_COMPUTING"
              }
            },
            "businessModels": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "CONSUMER_PRODUCTS, ECOMMERCE"
              }
            },
            "industries": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "ELECTRICAL_EQUIPMENT, MACHINERY_AND_EQUIPMENT"
              }
            },
            "socialInnovations": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "PEACE_AND_JUSTICE_STRONG_INSTITUTIONS, REDUCED_INEQUALITIES, CLIMATE_ACTION, GENDER_EQUALITY, NO_POVERTY"
              }
            },
            "manager": {
              "$ref": "#/components/schemas/CreateMember"
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
                "type": "string",
                "example": "SMART_DATA_DISCOVERY, CLOUD_COMPUTING"
              }
            },
            "businessModels": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "CONSUMER_PRODUCTS, ECOMMERCE"
              }
            },
            "industries": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "ELECTRICAL_EQUIPMENT, MACHINERY_AND_EQUIPMENT"
              }
            },
            "socialInnovations": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "PEACE_AND_JUSTICE_STRONG_INSTITUTIONS, REDUCED_INEQUALITIES, CLIMATE_ACTION, GENDER_EQUALITY, NO_POVERTY"
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
        "CreateMember": {
          "required": [
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
              "example": "pruebaemail@gmail.com"
            },
            "about": {
              "type": "string",
              "example": "Developer"
            },
            "image": {
              "$ref": "#/components/schemas/Image"
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
            "createdAt",
            "owner",
            "recipients",
            "followUpRoomId",
            "directChatRoomId",
            "wallPostName",
            "followUpRoomName"
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
            },
            "owner": {
              "$ref": "#/components/schemas/NotificationMember"
            },
            "recipients": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/NotificationMember"
              }
            },
            "followUpRoomId": {
              "type": "string",
              "format": "mongo-id",
              "example": "61445159784bca6ef764c6df"
            },
            "directChatRoomId": {
              "type": "string",
              "format": "mongo-id",
              "example": "61445159784bca6ef764c6df"
            },
            "wallPostName": {
              "type": "string",
              "example": "Wall post 1"
            },
            "followUpRoomName": {
              "type": "string",
              "example": "Follow up room 1"
            }
          }
        },
        "NotificationMember": {
          "required": [
            "id",
            "image",
            "name"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "61445159784bca6ef764c6df"
            },
            "image": {
              "$ref": "#/components/schemas/Image"
            },
            "name": {
              "type": "string",
              "example": "user1"
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
        "permissions": {
          "type": "oauth2",
          "description": "This define all permisions required in Core API",
          "flows": {
            "authorizationCode": {
              "scopes": {
                "ecosystem_update": "Permission required to modify ecosystem",
                "actor_invite": "Permission required to add new actors to ecosystem"
              },
              "authorizationUrl": "https://dev.moonshot.ceo/api/federation/login",
              "tokenUrl": "https://dev.moonshot.ceo/api/federation/token"
            }
          }
        }
      }
    }
  }

  public static community: Object = {
    "openapi": "3.0.1",
    "info": {
      "title": "Community API",
      "description": "Moonshot Community API",
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
        "url": "https://dev.moonshot.ceo/api/community"
      }
    ],
    "tags": [
      {
        "name": "Version",
        "description": "Endpoint that return Community last version"
      },
      {
        "name": "OnlineEvent",
        "description": "Endpoints about OnlineEvent entity"
      },
      {
        "name": "FaceToFace",
        "description": "Endpoints about FaceToFace entity"
      },
      {
        "name": "Room",
        "description": "Endpoints about Room entity"
      },
      {
        "name": "DirectChat",
        "description": "Endpoints about DirectChat entity"
      },
      {
        "name": "FollowUpRoom",
        "description": "Endpoints about FollowUpRoom entity"
      },
      {
        "name": "PublicChannel",
        "description": "Endpoints about PublicChannel entity"
      },
      {
        "name": "WallPost",
        "description": "Endpoints about WallPost entity"
      },
      {
        "name": "Actor",
        "description": "Endpoints about Actor entity"
      },
      {
        "name": "Member",
        "description": "Endpoints about member entity"
      },
      {
        "name": "Project",
        "description": "Endpoints about Project entity"
      },
      {
        "name": "Setting",
        "description": "Endpoints about Setting entity"
      }
    ],
    "paths": {
      "/version": {
        "get": {
          "tags": [
            "Version"
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
          },
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#version_get"
          }
        }
      },
      "/online-events": {
        "get": {
          "tags": [
            "OnlineEvent"
          ],
          "summary": "Get all online events",
          "description": "Find all online events in the database\n",
          "operationId": "onlineEvents",
          "responses": {
            "200": {
              "description": "Get all online events successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/OnlineEvent"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#online-events_get"
          }
        }
      },
      "/online-event/{id}": {
        "get": {
          "tags": [
            "OnlineEvent"
          ],
          "summary": "Get an online event by id",
          "description": "Find an online event in the database by its identifier\n",
          "operationId": "onlineEventById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "online event id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get online event successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/OnlineEvent"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#online-event/:id_get"
          }
        }
      },
      "/online-event": {
        "post": {
          "tags": [
            "OnlineEvent"
          ],
          "summary": "Create an online event",
          "description": "Create and insert an online event in database\n",
          "operationId": "onlineEventCreate",
          "requestBody": {
            "description": "Object that contain all parameters to create an online event",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OnlineEventCreateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, title is empty, description is empty, timestamp is empty or you are not online event owner",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/OnlineEventEmptyBodyError"
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
            },
            {
              "permissions": [
                "online_event_create"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#online-event_post"
          }
        },
        "put": {
          "tags": [
            "OnlineEvent"
          ],
          "summary": "Update an online event",
          "description": "Find and update an online event in the database\n",
          "operationId": "onlineEventUpdate",
          "requestBody": {
            "description": "Object that contain all parameters to update an online event",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OnlineEventUpdateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, online event id is empty, title is empty, description is empty or timestamp is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/OnlineEventEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#online-event_put"
          }
        },
        "delete": {
          "tags": [
            "OnlineEvent"
          ],
          "summary": "Remove an online event",
          "description": "Remove an online event from database\n",
          "operationId": "onlineEventDelete",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or online event id is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/OnlineEventEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#online-event_delete"
          }
        }
      },
      "/online-event/admin": {
        "put": {
          "tags": [
            "OnlineEvent"
          ],
          "summary": "Update any online event",
          "description": "Find and update an online event in database\n",
          "operationId": "onlineEventUpdateAdmin",
          "requestBody": {
            "description": "Object that contain all parameters to update an online event",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OnlineEventUpdateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, online event id is empty, title is empty, description is empty or timestamp is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/OnlineEventEmptyBodyError"
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
            },
            {
              "permissions": [
                "online_event_any_update"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#online-event/admin_put"
          }
        },
        "delete": {
          "tags": [
            "OnlineEvent"
          ],
          "summary": "Delete any online event",
          "description": "Delete an online event from database\n",
          "operationId": "onlineEventDeleteAdmin",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or online event id is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/OnlineEventEmptyBodyError"
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
            },
            {
              "permissions": [
                "online_event_any_delete"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#online-event/admin_delete"
          }
        }
      },
      "/online-event/subscription": {
        "put": {
          "tags": [
            "OnlineEvent"
          ],
          "summary": "Subscribe to an online event",
          "description": "Subscribe to an online event to become a participant\n",
          "operationId": "onlineEventSuscribe",
          "requestBody": {
            "description": "Object that contain all parameters to suscribe to an online event",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OnlineEventSubscriptionEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or online event id is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/OnlineEventEmptySuscriptionError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#online-event/subscription_put"
          }
        }
      },
      "/online-event/unsubscription": {
        "put": {
          "tags": [
            "OnlineEvent"
          ],
          "summary": "Unsubcribe from an online event",
          "description": "Unsubscribe from an online event to stop being a participant\n",
          "operationId": "onlineEventUnsubscribe",
          "requestBody": {
            "description": "Object that contain all parameters to unsubscribe from an online event",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OnlineEventUnsubscriptionEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PublicChannelEventEmptySuscriptionError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#online-event/unsubscription_put"
          }
        }
      },
      "/face-to-face-events": {
        "get": {
          "tags": [
            "FaceToFace"
          ],
          "summary": "Get all face to face events",
          "description": "Find all face to face in the database\n",
          "operationId": "faceToFaceEvents",
          "responses": {
            "200": {
              "description": "Get all face to face events successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/FaceToFaceEvent"
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
          },
          "security": [
            {
              "idToken": []
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#face-to-face-events_get"
          }
        }
      },
      "/face-to-face-event/{id}": {
        "get": {
          "tags": [
            "FaceToFace"
          ],
          "summary": "Get a face to face event by id",
          "description": "Find a face to face event in the database by its identifier\n",
          "operationId": "faceToFaceEventById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "face to face event id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get face to face event successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/FaceToFaceEvent"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#face-to-face-event/:id_get"
          }
        }
      },
      "/face-to-face-event": {
        "post": {
          "tags": [
            "FaceToFace"
          ],
          "summary": "Create a face to face event",
          "description": "Create and insert a face to face event in database\n",
          "operationId": "faceToFaceEventCreate",
          "requestBody": {
            "description": "Object that contain all parameters to update an online event",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FaceToFaceEventCreateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, title is empty or description is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/FaceToFaceEventEmptyBodyError"
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
            },
            {
              "permissions": [
                "face_to_face_event_create"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#face-to-face-event_post"
          }
        },
        "put": {
          "tags": [
            "FaceToFace"
          ],
          "summary": "Update a face to face event",
          "description": "Find and update a face to face event in the database\n",
          "operationId": "faceToFaceEventUpdate",
          "requestBody": {
            "description": "Object that contain all parameters to update a face to face event",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FaceToFaceEventUpdateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, face to face event id is empty, title is empty or description is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/FaceToFaceEventEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#face-to-face-event_put"
          }
        },
        "delete": {
          "tags": [
            "FaceToFace"
          ],
          "summary": "Remove a face to face event",
          "description": "Remove a face to face event from database\n",
          "operationId": "faceToFaceEventDelete",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or face to face event id is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/FaceToFaceEventEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#face-to-face-event_delete"
          }
        }
      },
      "/face-to-face/admin": {
        "put": {
          "tags": [
            "FaceToFace"
          ],
          "summary": "Update any face to face event",
          "description": "Find and update an face to face event in database\n",
          "operationId": "faceToFaceEventUpdateAdmin",
          "requestBody": {
            "description": "Object that contain all parameters to update a face to face event",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FaceToFaceEventUpdateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, face to face event id is empty, title is empty, description is empty or timestamp is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/FaceToFaceEventEmptyBodyError"
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
            },
            {
              "permissions": [
                "face_to_face_event_any_update"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#face-to-face-event/admin_put"
          }
        },
        "delete": {
          "tags": [
            "FaceToFace"
          ],
          "summary": "Delete any face to face event",
          "description": "Delete a face to face event from database\n",
          "operationId": "faceToFaceEventDeleteAdmin",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or face to face event id is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/FaceToFaceEventEmptyBodyError"
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
            },
            {
              "permissions": [
                "face_to_face_event_any_delete"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#face-to-face-event/admin_delete"
          }
        }
      },
      "/face-to-face-event/subscription": {
        "put": {
          "tags": [
            "FaceToFace"
          ],
          "summary": "Subscribe to a face to face event",
          "description": "Subscribe to a face to face event to become a participant\n",
          "operationId": "faceToFaceEventSuscribe",
          "requestBody": {
            "description": "Object that contain all parameters to suscribe to a face to face event",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FaceToFaceEventSubscriptionEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or online event id is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/FaceToFaceEventEmptySuscriptionError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#face-to-face-event/subscription_put"
          }
        }
      },
      "/face-to-face-event/unsubscription": {
        "put": {
          "tags": [
            "FaceToFace"
          ],
          "summary": "Unsubcribe from a face to face event",
          "description": "Unsubscribe from a face to face event to stop being a participant\n",
          "operationId": "faceToFaceEventUnsubscribe",
          "requestBody": {
            "description": "Object that contain all parameters to unsubscribe from an face to face event",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FaceToFaceEventUnsubscriptionEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PublicChannelEventEmptySuscriptionError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#face-to-face-event/unsubscription_put"
          }
        }
      },
      "/room-documents/{room_id}": {
        "get": {
          "tags": [
            "Room"
          ],
          "summary": "Get all documents from the room",
          "description": "Find the room in database and return all the documents\n",
          "operationId": "roomDocuments",
          "parameters": [
            {
              "name": "room_id",
              "in": "path",
              "description": "room id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get documents successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Document"
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
          },
          "security": [
            {
              "idToken": []
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#room-documents/:room_id_get"
          }
        }
      },
      "/room-links/{room_id}": {
        "get": {
          "tags": [
            "Room"
          ],
          "summary": "Get all links from the room",
          "description": "Find the room in databse and return all the links\n",
          "parameters": [
            {
              "name": "room_id",
              "in": "path",
              "description": "room id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get links successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Link"
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
          },
          "security": [
            {
              "idToken": []
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#room-links/:room_id_get"
          }
        }
      },
      "/direct-chats": {
        "get": {
          "tags": [
            "DirectChat"
          ],
          "summary": "Get all direct chats where member is participant",
          "description": "Find all direct chats in the database where member is participant\n",
          "operationId": "directChats",
          "responses": {
            "200": {
              "description": "Get direct chats successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/DirectChat"
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
          },
          "security": [
            {
              "idToken": []
            },
            {
              "memberId": []
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#direct-chats_get"
          }
        }
      },
      "/direct-chats/all": {
        "get": {
          "tags": [
            "DirectChat"
          ],
          "summary": "Get all direct chats",
          "description": "Find all direct chats in database\n",
          "operationId": "directChatsAll",
          "responses": {
            "200": {
              "description": "Get direct chats successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/DirectChat"
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
          },
          "security": [
            {
              "idToken": []
            },
            {
              "permissions": [
                "direct_chat_any_list"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#direct-chats/all_get"
          }
        }
      },
      "/direct-chat/{id}": {
        "get": {
          "tags": [
            "DirectChat"
          ],
          "summary": "Get a direct chat by id",
          "description": "Find a direct chat in the database by its identifier\n",
          "operationId": "directChatById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "direct chat id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get direct chat successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DirectChat"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#direct-chat/:id_get"
          }
        }
      },
      "/direct-chat": {
        "post": {
          "tags": [
            "DirectChat"
          ],
          "summary": "Create a direct chat",
          "description": "Create and insert a direct chat in database\n",
          "operationId": "directChatCreate",
          "requestBody": {
            "description": "Object that contain all parameters to create a direct chat",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DirectChatCreateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#direct-chat_post"
          }
        },
        "delete": {
          "tags": [
            "DirectChat"
          ],
          "summary": "Remove a direct chat",
          "description": "Remove a direct chat from database\n",
          "operationId": "directChatDelete",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, direct chat is empty, cannot find direct chat or user is not a participant",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DirectChatEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#direct-chat_delete"
          }
        }
      },
      "/direct-chat/message": {
        "post": {
          "tags": [
            "DirectChat"
          ],
          "summary": "Send a message to the direct chat",
          "description": "Find and update a direct chat in database with the new message\n",
          "operationId": "directChatCreateMessage",
          "requestBody": {
            "description": "Object that contain all parameters to create a message",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/MessageAddEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, direct chat id is empty, message content is empty, document link is empty, document category is empty, document filename is empty or cannot find direct chat",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AddMessageEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#direct-chat/message_post"
          }
        },
        "delete": {
          "tags": [
            "DirectChat"
          ],
          "summary": "Remove a direct chat message",
          "description": "Remove a direct chat message from database\n",
          "operationId": "directChatDeleteMessage",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, direct chat message id is empty or user is not the direct chat owner",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DeleteMessageEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#direct-chat/message_delete"
          }
        }
      },
      "/direct-chat/messages/{room_id}": {
        "get": {
          "tags": [
            "DirectChat"
          ],
          "summary": "Get all messages from the direct chat",
          "description": "Find all message from the direct chat online event in the database\n",
          "operationId": "directChatMessages",
          "parameters": [
            {
              "name": "room_id",
              "in": "path",
              "description": "direct chat id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get messages successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Message"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#direct-chat/messages/:room_id_get"
          }
        }
      },
      "/follow-up-rooms": {
        "get": {
          "tags": [
            "FollowUpRoom"
          ],
          "summary": "Get all follow up rooms where member is participant",
          "description": "Find all follow up room in the database where member is participant\n",
          "operationId": "followUpRooms",
          "responses": {
            "200": {
              "description": "Get all follow up rooms successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/FollowUpRoom"
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
          },
          "security": [
            {
              "idToken": []
            },
            {
              "memberId": []
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#follow-up-rooms_get"
          }
        }
      },
      "/follow-up-rooms/all": {
        "get": {
          "tags": [
            "FollowUpRoom"
          ],
          "summary": "Get all follow up rooms",
          "description": "Find all follow up rooms in database\n",
          "operationId": "followUpRoomsAll",
          "responses": {
            "200": {
              "description": "Get follow up rooms successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/FollowUpRoom"
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
          },
          "security": [
            {
              "idToken": []
            },
            {
              "permissions": [
                "follow_up_room_any_list"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#follow-up-rooms/all_get"
          }
        }
      },
      "/follow-up-room/{id}": {
        "get": {
          "tags": [
            "FollowUpRoom"
          ],
          "summary": "Get a follow up room by id",
          "description": "Find a follow up room in the database by its identifier\n",
          "operationId": "followUpRoomById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "follow up room id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get follow up room successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/FollowUpRoom"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#follow-up-room/:id_get"
          }
        }
      },
      "/follow-up-room": {
        "post": {
          "tags": [
            "FollowUpRoom"
          ],
          "summary": "Create a follow up room",
          "description": "Create and insert a follow up room in database\n",
          "operationId": "followUpRoomCreate",
          "requestBody": {
            "description": "Object that contain all parameters to create a follow up room",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FollowUpRoomCreateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, title is empty or description is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/FollowUpRoomEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#follow-up-room_post"
          }
        },
        "put": {
          "tags": [
            "FollowUpRoom"
          ],
          "summary": "Update a follow up room",
          "description": "Find and update a follow up room in the database\n",
          "operationId": "followUpRoomUpdate",
          "requestBody": {
            "description": "Object that contain all parameters to update a follow up room",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FollowUpRoomUpdateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, user is not the follow up room owner, title is empty or description is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/FollowUpRoomEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#follow-up-room_put"
          }
        },
        "delete": {
          "tags": [
            "FollowUpRoom"
          ],
          "summary": "Remove a follow up room",
          "description": "Remove a follow up room from database\n",
          "operationId": "followUpRoomDelete",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, follow up room id is empty ir user is not the follow up room owner",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/FollowUpRoomEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#follow-up-room_delete"
          }
        }
      },
      "/follow-up-room/add-member": {
        "put": {
          "tags": [
            "FollowUpRoom"
          ],
          "summary": "Add a participant in the follow up room",
          "description": "Find and update the partcipants of the follow up room\n",
          "operationId": "folloUpRoomAddMember",
          "requestBody": {
            "description": "Object that contain all parameters to add a member in a follow up room",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FollowUpRoomAddMemberEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or user is not the the follow up room owner",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/FollowUpRoomAddMemberEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#follow-up-room/add-member_put"
          }
        }
      },
      "/follow-up-room/leave-member": {
        "put": {
          "tags": [
            "FollowUpRoom"
          ],
          "summary": "Remove a participant from the follow up room",
          "description": "Find and update the partcipants of the follow up room\n",
          "operationId": "folloUpRoomRemoveMember",
          "requestBody": {
            "description": "Object that contain all parameters to remove a member in a follow up room",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FollowUpRoomRemoveMemberEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or new owner id is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/FollowUpRoomRemoveMemberEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#follow-up-room/leave-member_put"
          }
        }
      },
      "/follow-up-room/open": {
        "put": {
          "tags": [
            "FollowUpRoom"
          ],
          "summary": "Open a follow up room",
          "description": "Find and update the follow up room state to OPEN\n",
          "operationId": "followUpRoomOpen",
          "requestBody": {
            "description": "Object that contain all parameters to open a follow up room",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FollowUpRoomOpenEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or user is not the follow up room owner",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/FollowUpRoomOpenEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#follow-up-room/open_put"
          }
        }
      },
      "/follow-up-room/close": {
        "put": {
          "tags": [
            "FollowUpRoom"
          ],
          "summary": "Close a follow up room",
          "description": "Find and update the follow up room state to CLOSE\n",
          "operationId": "followUpRoomClose",
          "requestBody": {
            "description": "Object that contain all parameters to close a follow up room",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FollowUpRoomCloseEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or user is not the follow up room owner",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/FollowUpRoomCloseEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#follow-up-room/close_put"
          }
        }
      },
      "/follow-up-room/message": {
        "post": {
          "tags": [
            "FollowUpRoom"
          ],
          "summary": "Send a message to the follow up room",
          "description": "Find and update a follow up room in database with the new message\n",
          "operationId": "followUpRoomCreateMessage",
          "requestBody": {
            "description": "Object that contain all parameters to create a message",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/MessageAddEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, follow up room id is empty, message content is empty, document link is empty, document category is empty, document filename is empty or user is not a participant",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AddMessageEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#follow-up-room/message_post"
          }
        },
        "delete": {
          "tags": [
            "FollowUpRoom"
          ],
          "summary": "Remove a follow up room message",
          "description": "Remove a follow up room message from database\n",
          "operationId": "followUpRoomDeleteMessage",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, follow up room message id is empty or user is not a follow up room participant",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DeleteMessageEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#follow-up-room/message_delete"
          }
        }
      },
      "/follow-up-room/message/admin": {
        "delete": {
          "tags": [
            "FollowUpRoom"
          ],
          "summary": "Delete any follow up room message",
          "description": "Delete a follow up room message from database\n",
          "operationId": "followUpRoomDeleteMessageAdmin",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, follow up room message id is empty or user is not the follow up room owner",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DeleteMessageEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#follow-up-room/message/admin_delete"
          }
        }
      },
      "/follow-up-room/messages/{room_id}": {
        "get": {
          "tags": [
            "FollowUpRoom"
          ],
          "summary": "Get all messages from the follow up room",
          "description": "Find the room in database and return all the messages\n",
          "operationId": "followUpRoomMessages",
          "parameters": [
            {
              "name": "room_id",
              "in": "path",
              "description": "room id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get messages successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Message"
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
          },
          "security": [
            {
              "idToken": []
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#follow-up-room/messages/:room_id_get"
          }
        }
      },
      "/public-channels": {
        "get": {
          "tags": [
            "PublicChannel"
          ],
          "summary": "Get all public channels",
          "description": "Find all public channels in the database\n",
          "operationId": "publicChannels",
          "responses": {
            "200": {
              "description": "Get public channels successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/PublicChannel"
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
          },
          "security": [
            {
              "idToken": []
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#public-channels_get"
          }
        }
      },
      "/public-channel/{id}": {
        "get": {
          "tags": [
            "PublicChannel"
          ],
          "summary": "Get a public channel by id",
          "description": "Find a public channel in the database by its identifier\n",
          "operationId": "publicChannelById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "public channel room id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get public channel room successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PublicChannel"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#public-channel/:id_get"
          }
        }
      },
      "/public-channel": {
        "post": {
          "tags": [
            "PublicChannel"
          ],
          "summary": "Create a public channel",
          "description": "Create and insert a public channel in database\n",
          "operationId": "publicChannelCreate",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PublicChannelCreateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, title is empty or description is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PublicChannelEmptyBodyError"
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
            },
            {
              "permissions": [
                "public_channel_create"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#public-channel_post"
          }
        },
        "put": {
          "tags": [
            "PublicChannel"
          ],
          "summary": "Update a public channel",
          "description": "Find and update a public channel in the database\n",
          "operationId": "publicChannelUpdate",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PublicChannelUpdateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, title is empty, description is empty, public channel id is empty or user is not public channel owner",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PublicChannelEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#public-channel_put"
          }
        },
        "delete": {
          "tags": [
            "PublicChannel"
          ],
          "summary": "Remove a public channel",
          "description": "Remove a public channel from database\n",
          "operationId": "publicChannelDelete",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, title is empty, description is empty, public channel id is empty or user is not public channel owner",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PublicChannelEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#public-channel_delete"
          }
        }
      },
      "/public-channel/admin": {
        "put": {
          "tags": [
            "PublicChannel"
          ],
          "summary": "Update any public channel",
          "description": "Find and update a public channel in database\n",
          "operationId": "publicChannelUpdateAdmin",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PublicChannelUpdateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, title is empty or description is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PublicChannelEmptyBodyError"
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
            },
            {
              "permissions": [
                "public_channel_any_update"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#public-channel/admin_put"
          }
        },
        "delete": {
          "tags": [
            "PublicChannel"
          ],
          "summary": "Remove any public channel",
          "description": "Remove a public channel from database\n",
          "operationId": "publicChannelDeleteAdmin",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, title is empty, description is empty, public channel id is empty or user is not public channel owner",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PublicChannelEmptyBodyError"
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
            },
            {
              "permissions": [
                "public_channel_any_delete"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#public-channel/admin_delete"
          }
        }
      },
      "/public-channel/subscribe": {
        "put": {
          "tags": [
            "PublicChannel"
          ],
          "summary": "Subscribe to a public channel",
          "description": "Subscribe to a public channel to become a participant\n",
          "operationId": "publicChannelSubscribe",
          "requestBody": {
            "description": "Object that contain all parameters to suscribe to a public channel",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PublicChannelSubscribeEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PublicChannelEventEmptySuscriptionError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#public-channel/subscribe_put"
          }
        }
      },
      "/public-channel/unsubscribe": {
        "put": {
          "tags": [
            "PublicChannel"
          ],
          "summary": "Unsubcribe to a public channel",
          "description": "Unsubscribe from a public channel to stop being a participant\n",
          "operationId": "publicChannelUnsubscribe",
          "requestBody": {
            "description": "Object that contain all parameters to unsubscribe to a public channel",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PublicChannelUnsubscribeEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PublicChannelEventEmptyUnsuscriptionError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#public-channel/unsubscribe_put"
          }
        }
      },
      "/public-channel/message": {
        "post": {
          "tags": [
            "PublicChannel"
          ],
          "summary": "Send a message to the public channel",
          "description": "Find and update a public channel in database with the new message\n",
          "operationId": "publicChannelCreateMessage",
          "requestBody": {
            "description": "Object that contain all parameters to create a message",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/MessageAddEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, public channel id is empty, message content is empty, document link is empty, document category is empty, document filename is empty or cannot find direct chat",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AddMessageEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#public-channel/message_post"
          }
        },
        "delete": {
          "tags": [
            "PublicChannel"
          ],
          "summary": "Remove a public channel message",
          "description": "Remove a public channel message from database\n",
          "operationId": "publicChannelDeleteMessage",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, public channel message id is empty or user is not the public channel message owner",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DeleteMessageEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#public-channel/message_delete"
          }
        }
      },
      "/public-channel/message/admin": {
        "delete": {
          "tags": [
            "PublicChannel"
          ],
          "summary": "Delete any public channel message",
          "description": "Delete a public channel message from database\n",
          "operationId": "publicChannelDeleteMessageAdmin",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, public channel message id is empty or user is not the public channel owner",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DeleteMessageEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#public-channel/message/admin_delete"
          }
        }
      },
      "/public-channel/messages/{room_id}": {
        "get": {
          "tags": [
            "PublicChannel"
          ],
          "summary": "Get all messages from the public channel",
          "description": "Find the public channel in database and return all the messages\n",
          "operationId": "publicChannelMessages",
          "parameters": [
            {
              "name": "room_id",
              "in": "path",
              "description": "room id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get messages successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Message"
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
          },
          "security": [
            {
              "idToken": []
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#public-channel/messages/:room_id_get"
          }
        }
      },
      "/wall-post": {
        "post": {
          "tags": [
            "WallPost"
          ],
          "summary": "Create a wall post",
          "description": "Create and insert a wall post in database\n",
          "operationId": "wallPostCreate",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/WallPostCreateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or wall post content is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/WallPostEmptyBodyError"
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
            },
            {
              "permissions": [
                "wall_post_create"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#wall-post_post"
          }
        },
        "put": {
          "tags": [
            "WallPost"
          ],
          "summary": "Update a wall post",
          "description": "Find and update a wall post in the database\n",
          "operationId": "wallPostUpdate",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/WallPostUpdateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, wall post id is empty, wall post content is empty or user is not the wall post owner",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/WallPostEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#wall-post_put"
          }
        },
        "delete": {
          "tags": [
            "WallPost"
          ],
          "summary": "Remove a wall post",
          "description": "Remove a wall post from database\n",
          "operationId": "wallPostDelete",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, wall post id is empty or user is not the wall post owner",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/WallPostEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#wall-post_delete"
          }
        }
      },
      "/wall-post/admin": {
        "put": {
          "tags": [
            "WallPost"
          ],
          "summary": "Update any wall post",
          "description": "Find and update any wall post\n",
          "operationId": "wallPostUpdateAdmin",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/WallPostUpdateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, wall post id is empty or wall post content is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/WallPostEmptyBodyError"
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
            },
            {
              "permissions": [
                "wall_post_any_update"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#wall-post/admin_put"
          }
        },
        "delete": {
          "tags": [
            "WallPost"
          ],
          "summary": "Remove any wall post",
          "description": "Remove any wall post from database\n",
          "operationId": "wallPostDeleteAdmin",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or wall post id is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/WallPostEmptyBodyError"
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
            },
            {
              "permissions": [
                "wall_post_any_delete"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#wall-post/admin_delete"
          }
        }
      },
      "/wall-post/like": {
        "put": {
          "tags": [
            "WallPost"
          ],
          "summary": "Give like to a wall post",
          "description": "Find and update a wall post with the new like\n",
          "operationId": "wallPostLike",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/WallPostLikeEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/WallPostEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#wall-post/like_put"
          }
        }
      },
      "/wall-post/unlike": {
        "put": {
          "tags": [
            "WallPost"
          ],
          "summary": "Delete like from a wall post",
          "description": "Find and update a wall post without the new like\n",
          "operationId": "wallPostUnlike",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/WallPostUnlikeEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/WallPostEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#wall-post/unlike_put"
          }
        }
      },
      "/wall-post/comment": {
        "post": {
          "tags": [
            "WallPost"
          ],
          "summary": "Comment a wall post",
          "description": "Find and update a wall post with the new comment\n",
          "operationId": "wallPostComment",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/WallPostCommentAddEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/WallPostEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#wall-post/comment_post"
          }
        }
      },
      "/wall-post/comment/like": {
        "put": {
          "tags": [
            "WallPost"
          ],
          "summary": "Give like to a wall post comment",
          "description": "Find and update a wall post with the new comment like\n",
          "operationId": "wallPostCommentLike",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/WallPostCommentLikeEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/WallPostEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#wall-post/comment/like_put"
          }
        }
      },
      "/wall-post/comment/unlike": {
        "put": {
          "tags": [
            "WallPost"
          ],
          "summary": "Remove like from a wall post comment",
          "description": "Find and update a wall post without the comment like\n",
          "operationId": "wallPostCommentUnlike",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/WallPostCommentUnlikeEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/WallPostEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#wall-post/comment/unlike_put"
          }
        }
      },
      "/wall-post/{id}": {
        "get": {
          "tags": [
            "WallPost"
          ],
          "summary": "Get a wall post by id",
          "description": "Find a wall post in the database by its identifier\n",
          "operationId": "wallPostById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "wall post id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get wall post successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/WallPost"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#wall-post/:id_get"
          }
        }
      },
      "/wall-posts": {
        "get": {
          "tags": [
            "WallPost"
          ],
          "summary": "Get all wall posts",
          "description": "Find all wall posts in the database\n",
          "operationId": "wallPosts",
          "parameters": [
            {
              "name": "lastId",
              "in": "query",
              "description": "Last wall post id",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Page size",
              "required": true,
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get wall posts successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/WallPost"
                    }
                  }
                }
              }
            },
            "400": {
              "description": "Invalid lastId param or invalid limit param",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/WallPostInvalidIdError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#wall-posts_get"
          }
        }
      },
      "/actors": {
        "get": {
          "tags": [
            "Actor"
          ],
          "summary": "Get all actors",
          "description": "Find all actors in the database\n",
          "operationId": "actors",
          "responses": {
            "200": {
              "description": "Get all actors successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Actor"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#actors_get"
          }
        }
      },
      "/actors/by-name-and-state": {
        "get": {
          "tags": [
            "Actor"
          ],
          "summary": "Get actors by name and state",
          "description": "Find actors in the database by name and state\n",
          "operationId": "actorsByNameAndState",
          "parameters": [
            {
              "name": "name",
              "in": "query",
              "description": "actor name",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "state",
              "in": "query",
              "description": "actor state",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get all actors successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Actor"
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
          },
          "security": [
            {
              "idToken": []
            },
            {
              "permissions": [
                "actor_management"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#actors/by-name-and-state_get"
          }
        }
      },
      "/actors/by-type": {
        "get": {
          "tags": [
            "Actor"
          ],
          "summary": "Get actors by type",
          "description": "Find actors in the database by type\n",
          "operationId": "actorsByType",
          "parameters": [
            {
              "name": "types",
              "in": "query",
              "description": "array of actor types",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get all actors successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Actor"
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
          },
          "security": [
            {
              "idToken": []
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#actors/by-type_get"
          }
        }
      },
      "/actors/by-state": {
        "get": {
          "tags": [
            "Actor"
          ],
          "summary": "Get actors by state",
          "description": "Find actors in the database by state\n",
          "operationId": "actorsByState",
          "parameters": [
            {
              "name": "state",
              "in": "query",
              "description": "actor state",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get all actors successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Actor"
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
          },
          "security": [
            {
              "idToken": []
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#actors/by-state_get"
          }
        }
      },
      "/actors/by-member": {
        "get": {
          "tags": [
            "Actor"
          ],
          "summary": "Get actors by member",
          "description": "Find actors in the database by member\n",
          "operationId": "actorsByMember",
          "parameters": [
            {
              "name": "ownerMemberId",
              "in": "query",
              "description": "actor member owner id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get all actors successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Actor"
                    }
                  }
                }
              }
            },
            "400": {
              "description": "Invalid owner member id",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/MemberInvalidIdError"
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
          },
          "security": [
            {
              "idToken": []
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#actors/by-member_get"
          }
        }
      },
      "/actor/{id}": {
        "get": {
          "tags": [
            "Actor"
          ],
          "summary": "Get an actor",
          "description": "Find an actor in the database by its identifier\n",
          "operationId": "actor",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "actor id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get an actor successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Actor"
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
          },
          "security": [
            {
              "idToken": []
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#actor/:id_get"
          }
        }
      },
      "/actor": {
        "post": {
          "tags": [
            "Actor"
          ],
          "summary": "Create an actor",
          "description": "Create and insert an actor in database\n",
          "operationId": "actorCreate",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ActorCreateEvent"
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, ownerMember is empty, invalid owner member, invalid password, invalid actor or ecosystem does not accept this type of actor",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/ActorEmptyBodyError"
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
          },
          "security": [
            {
              "idToken": []
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#actor_post"
          }
        },
        "put": {
          "tags": [
            "Actor"
          ],
          "summary": "Update an actor",
          "description": "Find and update an actor in the database\n",
          "operationId": "actorUpdate",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ActorUpdateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, invalid actor id or a required parameter is null",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ActorEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#actor_put"
          }
        },
        "delete": {
          "tags": [
            "Actor"
          ],
          "summary": "Remove an actor",
          "description": "Remove an actor from database\n",
          "operationId": "actorDelete",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or actor id is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ActorEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#actor_delete"
          }
        }
      },
      "/actor/accept": {
        "put": {
          "tags": [
            "Actor"
          ],
          "summary": "Change actor status to accept",
          "description": "Find and update the actor with the new status\n",
          "operationId": "actorAccept",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ActorAcceptEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or actor is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ActorEmptyBodyError"
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
            },
            {
              "permissions": [
                "actor_management"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#actor/accept_put"
          }
        }
      },
      "/actor/reject": {
        "put": {
          "tags": [
            "Actor"
          ],
          "summary": "Change actor status to reject",
          "description": "Find and update the actor with the new status\n",
          "operationId": "actorReject",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ActorRejectEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or actor is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ActorEmptyBodyError"
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
            },
            {
              "permissions": [
                "actor_management"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#actor/reject_put"
          }
        }
      },
      "/logged-in-member": {
        "get": {
          "tags": [
            "Member"
          ],
          "summary": "Get the member with the session open",
          "description": "Find the member with the session open in database and insert the cookie member id in session cookies\n",
          "operationId": "loggedInMember",
          "responses": {
            "200": {
              "description": "Add session cookie and return member successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UpdateMember"
                  }
                }
              }
            },
            "400": {
              "description": "Member state is reject or pending",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/MemberInvalidStateError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#logged-in-member_get"
          }
        }
      },
      "/members": {
        "get": {
          "tags": [
            "Member"
          ],
          "summary": "Get members by ids",
          "description": "Find the members in database by their identifiers\n",
          "operationId": "members",
          "parameters": [
            {
              "name": "ids",
              "in": "query",
              "description": "array of member ids",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get members successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/UpdateMember"
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
          },
          "security": [
            {
              "idToken": []
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#members_get"
          }
        }
      },
      "/member/{id}": {
        "get": {
          "tags": [
            "Member"
          ],
          "summary": "Get a member by id",
          "description": "Find a member in the database by its identifier\n",
          "operationId": "member",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "member id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get a member successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UpdateMember"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#member/:id_get"
          }
        }
      },
      "/member/{id}/marker": {
        "get": {
          "tags": [
            "Member"
          ],
          "summary": "Get a member marker by id",
          "description": "Find a member marker in the database by its identifier\n",
          "operationId": "memberMarker",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "member id",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "color",
              "in": "query",
              "description": "marker color",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get a member marker successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "type": "string",
                      "format": "byte",
                      "example": 10011110
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
          },
          "security": [
            {
              "idToken": []
            },
            {
              "userEmail": []
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#member/:id/marker_get"
          }
        }
      },
      "/member": {
        "put": {
          "tags": [
            "Member"
          ],
          "summary": "Update a member",
          "description": "Find and update a member in the database\n",
          "operationId": "memberUpdate",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/MemberUpdateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, member id is empty, a required param is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/MemberEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#member_put"
          }
        },
        "delete": {
          "tags": [
            "Member"
          ],
          "summary": "Remove a member",
          "description": "Remove a member from database\n",
          "operationId": "memberDelete",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or member id is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/MemberEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#member_delete"
          }
        }
      },
      "/education": {
        "post": {
          "tags": [
            "Member"
          ],
          "summary": "Create an education",
          "description": "Find and update a member with the new education\n",
          "operationId": "memberEducationCreate",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/MemberEducationCreateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or a required param is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/MemberEducationEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#education_post"
          }
        },
        "put": {
          "tags": [
            "Member"
          ],
          "summary": "Update an education",
          "description": "Find and update a member with the updated education\n",
          "operationId": "memberEducationUpdate",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/MemberEducationUpdateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, member education id is empty or a required param is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/MemberEducationEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#education_put"
          }
        },
        "delete": {
          "tags": [
            "Member"
          ],
          "summary": "Remove an education",
          "description": "Find and update a member without the education\n",
          "operationId": "memberEducationDelete",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, education id is empty, a required param is empty or education not exist",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/MemberEducationEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#education_delete"
          }
        }
      },
      "/experience": {
        "post": {
          "tags": [
            "Member"
          ],
          "summary": "Create an experience",
          "description": "Find and update a member with the new experience\n",
          "operationId": "memberExperienceCreate",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/MemberExperienceCreateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or a required param is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/MemberExperienceEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#experience_post"
          }
        },
        "put": {
          "tags": [
            "Member"
          ],
          "summary": "Update an experience",
          "description": "Find and update a member with the updated experience\n",
          "operationId": "memberExperienceUpdate",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/MemberExperienceUpdateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, experience id is empty, a required param is empty or experience not exist",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/MemberExperienceEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#experience_put"
          }
        },
        "delete": {
          "tags": [
            "Member"
          ],
          "summary": "Remove an experience",
          "description": "Find and update a member without the experience\n",
          "operationId": "memberExperienceDelete",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, experience id is empty, a required param is empty or experience not exist",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/MemberExperienceEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#experience_delete"
          }
        }
      },
      "/projects": {
        "get": {
          "tags": [
            "Project"
          ],
          "summary": "Get projects by actor id",
          "description": "Find projects in the database by actor id\n",
          "operationId": "projects",
          "parameters": [
            {
              "name": "actorId",
              "in": "query",
              "description": "actor id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get projects successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Project"
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
          },
          "security": [
            {
              "idToken": []
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#projects_get"
          }
        }
      },
      "/project/{id}": {
        "get": {
          "tags": [
            "Project"
          ],
          "summary": "Get project by id",
          "description": "Find a project in the database by id\n",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "project id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Get project successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Project"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#project/:id_get"
          }
        }
      },
      "/project": {
        "post": {
          "tags": [
            "Project"
          ],
          "summary": "Create a project",
          "description": "Create and insert a project in database\n",
          "operationId": "projectCreate",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProjectCreateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or a required param is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ProjectEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#project_post"
          }
        },
        "put": {
          "tags": [
            "Project"
          ],
          "summary": "Update a project",
          "description": "Find and update a project in database\n",
          "operationId": "projectUpdate",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProjectUpdateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty, project id is empty or a required param is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ProjectEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#project_put"
          }
        },
        "delete": {
          "tags": [
            "Project"
          ],
          "summary": "Remove a project",
          "description": "Remove a project in database\n",
          "operationId": "projectDelet",
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or project id is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ProjectEmptyBodyError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#project_delete"
          }
        }
      },
      "/setting": {
        "post": {
          "tags": [
            "Setting"
          ],
          "summary": "Create a setting",
          "description": "Create and insert a setting in the database\n",
          "operationId": "settingCreate",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SettingCreateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or ecosystem setting already exist",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SettingEmptyBodyError"
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
            },
            {
              "permissions": [
                "settings_update"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#setting_post"
          }
        },
        "put": {
          "tags": [
            "Setting"
          ],
          "summary": "Update a setting",
          "description": "Find and update a setting in the database\n",
          "operationId": "settingUpdate",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SettingUpdateEvent"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Body is empty or setting id is empty",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SettingEmptyBodyError"
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
            },
            {
              "permissions": [
                "settings_update"
              ]
            }
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#setting_put"
          }
        },
        "get": {
          "tags": [
            "Setting"
          ],
          "summary": "Get current ecosystem setting",
          "description": "Find current ecosystem setting in the database\n",
          "operationId": "setting",
          "responses": {
            "200": {
              "description": "Get the current setting successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Setting"
                  }
                }
              }
            },
            "400": {
              "description": "Setting is not configured",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SettingNotConfiguredError"
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
          ],
          "externalDocs": {
            "description": "Code Example",
            "url": "http://localhost:4200/code-examples/community#setting_get"
          }
        }
      }
    },
    "components": {
      "schemas": {
        "CreateMember": {
          "required": [
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
              "example": "pruebaemail@gmail.com"
            },
            "about": {
              "type": "string",
              "example": "Developer"
            },
            "image": {
              "$ref": "#/components/schemas/Image"
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
        "UpdateMember": {
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
              "example": "pruebaemail@gmail.com"
            },
            "about": {
              "type": "string",
              "example": "Developer"
            },
            "image": {
              "$ref": "#/components/schemas/Image"
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
        "Document": {
          "required": [
            "id",
            "link",
            "category",
            "roomId",
            "memberId",
            "filename",
            "createdAt"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "link": {
              "type": "string",
              "example": "https://docs.google.com/viewerng/vi54473784a6a2.xlsx"
            },
            "category": {
              "type": "string",
              "enum": [
                "PDF",
                "WORD",
                "IMAGE",
                "VIDEO",
                "OTHER"
              ]
            },
            "roomId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "memberId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "filename": {
              "type": "string",
              "example": "document1"
            },
            "createdAt": {
              "type": "string",
              "format": "ZonedDateTime",
              "example": 1624520984602
            }
          }
        },
        "Link": {
          "required": [
            "id",
            "url",
            "roomId",
            "createdAt"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "url": {
              "type": "string",
              "example": "https://docs.google.com/viewerng/vi54473784a6a2.xlsx"
            },
            "roomId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "createdAt": {
              "type": "string",
              "format": "ZonedDateTime",
              "example": 1624520984602
            }
          }
        },
        "OnlineEvent": {
          "required": [
            "id",
            "ownerMember",
            "title",
            "timestamp",
            "description",
            "imageUrl",
            "url",
            "participants"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "ownerMember": {
              "$ref": "#/components/schemas/UpdateMember"
            },
            "title": {
              "type": "string",
              "example": "Event to improve our programming skills"
            },
            "timestamp": {
              "type": "number",
              "example": 1554477388
            },
            "description": {
              "type": "string",
              "example": "Workshop given by a java expert to learn about good programming practices"
            },
            "imageUrl": {
              "type": "string",
              "example": "https://i.ytimg.com/vi/2nucjefSr6I/maxresdefault.jpg"
            },
            "url": {
              "type": "string",
              "example": "https://www.microsoft.com/es-es/microsoft-teams/log-in"
            },
            "participants": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/UpdateMember"
              }
            }
          }
        },
        "DirectChat": {
          "required": [
            "id",
            "ownerMember",
            "participants",
            "createdAt",
            "actions"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "ownerMember": {
              "$ref": "#/components/schemas/UpdateMember"
            },
            "participants": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Participant"
              }
            },
            "createdAt": {
              "type": "string",
              "format": "ZonedDateTime",
              "example": 1624520984602
            },
            "actions": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RoomAction"
              }
            }
          }
        },
        "RoomAction": {
          "required": [
            "name",
            "url"
          ],
          "properties": {
            "name": {
              "type": "string",
              "example": "Submission Form"
            },
            "url": {
              "type": "string",
              "example": "dev.moonshot.com"
            }
          }
        },
        "Participant": {
          "required": [
            "memberId",
            "state"
          ],
          "properties": {
            "memberId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "state": {
              "type": "string",
              "enum": [
                "ACTIVE",
                "INACTIVE"
              ]
            }
          }
        },
        "FaceToFaceEvent": {
          "required": [
            "id",
            "ownerMember",
            "title",
            "timestamp",
            "description",
            "imageUrl",
            "direction",
            "participants"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "ownerMember": {
              "$ref": "#/components/schemas/UpdateMember"
            },
            "title": {
              "type": "string",
              "example": "Event to improve our programming skills"
            },
            "timestamp": {
              "type": "number",
              "example": 1554477388
            },
            "description": {
              "type": "string",
              "example": "Workshop given by a java expert to learn about good programming practices"
            },
            "imageUrl": {
              "type": "string",
              "example": "https://i.ytimg.com/vi/2nucjefSr6I/maxresdefault.jpg"
            },
            "direction": {
              "type": "string",
              "example": "c/Alcala de Heranez, 17"
            },
            "participants": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/UpdateMember"
              }
            }
          }
        },
        "Message": {
          "required": [
            "id",
            "roomId",
            "authorMemberId",
            "content",
            "documents",
            "createdAt"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "roomId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "authorMemberId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "content": {
              "type": "string",
              "example": "Send a example message"
            },
            "documents": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Document"
              }
            },
            "createdAt": {
              "type": "string",
              "format": "ZonedDateTime",
              "example": 1624520984602
            }
          }
        },
        "FollowUpRoom": {
          "required": [
            "id",
            "ownerMember",
            "participants",
            "createdAt",
            "actions",
            "title",
            "description",
            "state"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "ownerMember": {
              "$ref": "#/components/schemas/UpdateMember"
            },
            "participants": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Participant"
              }
            },
            "createdAt": {
              "type": "string",
              "format": "ZonedDateTime",
              "example": 1624520984602
            },
            "actions": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RoomAction"
              }
            },
            "title": {
              "type": "string",
              "example": "Follow up room example"
            },
            "description": {
              "type": "string",
              "example": "We want to test the operation of the room"
            },
            "state": {
              "type": "string",
              "enum": [
                "OPEN",
                "CLOSED"
              ]
            }
          }
        },
        "PublicChannel": {
          "required": [
            "id",
            "ownerMember",
            "participants",
            "createdAt",
            "actions",
            "title",
            "description"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "ownerMember": {
              "$ref": "#/components/schemas/UpdateMember"
            },
            "participants": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Participant"
              }
            },
            "createdAt": {
              "type": "string",
              "format": "ZonedDateTime",
              "example": 1624520984602
            },
            "actions": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RoomAction"
              }
            },
            "title": {
              "type": "string",
              "example": "Follow up room example"
            },
            "description": {
              "type": "string",
              "example": "We want to test the operation of the room"
            }
          }
        },
        "WallPost": {
          "required": [
            "id",
            "ownerMember",
            "content",
            "hashtags",
            "attachments",
            "comments",
            "likes",
            "createdAt"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "ownerMember": {
              "$ref": "#/components/schemas/UpdateMember"
            },
            "content": {
              "type": "string",
              "example": "First wall post in this ecoystem"
            },
            "hashtags": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "#WallPost"
              }
            },
            "attachments": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/WallPostAttachment"
              }
            },
            "comments": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/CreateComment"
              }
            },
            "likes": {
              "type": "array",
              "items": {
                "type": "string",
                "format": "mongo-id",
                "example": "60acae8e2f799d228a4d4a85"
              }
            },
            "createdAt": {
              "type": "string",
              "format": "ZonedDateTime",
              "example": 1624520984602
            }
          }
        },
        "WallPostAttachment": {
          "required": [
            "link",
            "documentCategory"
          ],
          "properties": {
            "link": {
              "type": "string",
              "example": "https://docs.google.com/viewerng/vi54473784a6a2.xlsx"
            },
            "documentCategory": {
              "type": "string",
              "enum": [
                "PDF",
                "WORD",
                "IMAGE",
                "VIDEO",
                "OTHER"
              ]
            }
          }
        },
        "CreateComment": {
          "required": [
            "content",
            "authorMember",
            "likes",
            "createdAt"
          ],
          "properties": {
            "content": {
              "type": "string",
              "example": "First comment"
            },
            "authorMember": {
              "$ref": "#/components/schemas/UpdateMember"
            },
            "likes": {
              "type": "array",
              "items": {
                "type": "string",
                "format": "mongo-id",
                "example": "60acae8e2f799d228a4d4a85"
              }
            }
          }
        },
        "Actor": {
          "required": [
            "id",
            "type",
            "state",
            "ownerMember",
            "name",
            "city",
            "country",
            "address",
            "latitude",
            "longitude",
            "description",
            "phone",
            "web",
            "image",
            "myFacet",
            "questFacet",
            "investment",
            "financial",
            "socialNetworks",
            "media"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "type": {
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
            },
            "state": {
              "type": "string",
              "enum": [
                "ACCEPTED",
                "PENDING",
                "REJECTED"
              ]
            },
            "ownerMember": {
              "$ref": "#/components/schemas/UpdateMember"
            },
            "name": {
              "type": "string",
              "example": "Actor1"
            },
            "city": {
              "type": "string",
              "example": "Madrid"
            },
            "country": {
              "type": "string",
              "example": "Spain"
            },
            "address": {
              "type": "string",
              "example": "Avenida niza, 55, Madrid"
            },
            "latitude": {
              "type": "number",
              "example": 10.6
            },
            "longitude": {
              "type": "number",
              "example": 50.3
            },
            "description": {
              "type": "string",
              "example": "This is a example"
            },
            "phone": {
              "type": "string",
              "format": "telephone number",
              "example": 34999999999
            },
            "web": {
              "type": "string",
              "example": "www.example.com"
            },
            "image": {
              "$ref": "#/components/schemas/Image"
            },
            "myFacet": {
              "$ref": "#/components/schemas/Facet"
            },
            "questFacet": {
              "$ref": "#/components/schemas/Facet"
            },
            "investment": {
              "$ref": "#/components/schemas/Investment"
            },
            "financial": {
              "$ref": "#/components/schemas/Financial"
            },
            "socialNetworks": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "www.instagram.com/actor1"
              }
            },
            "media": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "www.vimeo.com/actor1"
              }
            }
          }
        },
        "Facet": {
          "required": [
            "industries",
            "businessModels",
            "socialInnovations",
            "deepTechs"
          ],
          "properties": {
            "industries": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "ELECTRICAL_EQUIPMENT, MACHINERY_AND_EQUIPMENT"
              }
            },
            "businessModels": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "CONSUMER_PRODUCTS, ECOMMERCE"
              }
            },
            "socialInnovations": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "PEACE_AND_JUSTICE_STRONG_INSTITUTIONS, REDUCED_INEQUALITIES, CLIMATE_ACTION, GENDER_EQUALITY, NO_POVERTY"
              }
            },
            "deepTechs": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "SMART_DATA_DISCOVERY, CLOUD_COMPUTING"
              }
            }
          }
        },
        "Investment": {
          "required": [
            "stage",
            "stagesInvestments",
            "numberPastExist",
            "trlStage",
            "numberCurrentInvestments",
            "countriesInteres"
          ],
          "properties": {
            "stage": {
              "type": "string",
              "enum": [
                "GOT_DECK",
                "BUSINESS_PLAN",
                "FIRST_PROTOTYPE",
                "INITIAL_INTEREST",
                "GOT_BETA",
                "VIRALITY_SCALABILITY",
                "FIXED_BETA",
                "STARTED_INVOICE",
                "RUNNING_BUSINESS"
              ]
            },
            "stagesInvestments": {
              "type": "string",
              "example": "Late Stage"
            },
            "numberPastExist": {
              "type": "number",
              "example": 2
            },
            "trlStage": {
              "type": "string",
              "enum": [
                "BASIC_PRINCIPLES_OBSERVED",
                "TECHNOLOGY_CONCEPT_FORMULATED",
                "EXPERIMENTAL_PROOF_OF_CONCEPT",
                "TECHNOLOGY_VALIDATED_IN_LAB",
                "TECHNOLOGY_VALIDATED_IN_RELEVANT_ENVIRONMENT",
                "TECHNOLOGY_DEMONSTRATED_IN_RELEVANT_ENVIRONMENT",
                "SYSTEM_PROTOTYPE_DEMONSTRATION_IN_OPERATIONAL_ENVIRONMENT",
                "SYSTEM_COMPLETE_AND_QUALIFIED",
                "ACTUAL_SYSTEM_PROVEN_IN_OPERATIONAL_ENVIRONMENT"
              ]
            },
            "numberCurrentInvestments": {
              "type": "number",
              "example": 5
            },
            "countriesInteres": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "Unite States, Spain, France"
              }
            }
          }
        },
        "Financial": {
          "required": [
            "stage",
            "seekedCapital",
            "trlStage",
            "raisedCapital",
            "totalFunding",
            "premoneyValuation",
            "fundingStage",
            "lastFunding",
            "numbersEmployees",
            "currency"
          ],
          "properties": {
            "stage": {
              "type": "string",
              "enum": [
                "GOT_DECK",
                "BUSINESS_PLAN",
                "FIRST_PROTOTYPE",
                "INITIAL_INTEREST",
                "GOT_BETA",
                "VIRALITY_SCALABILITY",
                "FIXED_BETA",
                "STARTED_INVOICE",
                "RUNNING_BUSINESS"
              ]
            },
            "seekedCapital": {
              "type": "number",
              "example": 790000
            },
            "trlStage": {
              "type": "string",
              "enum": [
                "BASIC_PRINCIPLES_OBSERVED",
                "TECHNOLOGY_CONCEPT_FORMULATED",
                "EXPERIMENTAL_PROOF_OF_CONCEPT",
                "TECHNOLOGY_VALIDATED_IN_LAB",
                "TECHNOLOGY_VALIDATED_IN_RELEVANT_ENVIRONMENT",
                "TECHNOLOGY_DEMONSTRATED_IN_RELEVANT_ENVIRONMENT",
                "SYSTEM_PROTOTYPE_DEMONSTRATION_IN_OPERATIONAL_ENVIRONMENT",
                "SYSTEM_COMPLETE_AND_QUALIFIED",
                "ACTUAL_SYSTEM_PROVEN_IN_OPERATIONAL_ENVIRONMENT"
              ]
            },
            "raisedCapital": {
              "type": "number",
              "example": 30000
            },
            "totalFunding": {
              "type": "number",
              "example": 50000
            },
            "premoneyValuation": {
              "type": "number",
              "example": 38000
            },
            "fundingStage": {
              "type": "string",
              "enum": [
                "PRE_SEED",
                "SEED",
                "GROWTH_CAPITAL",
                "SERIES_A",
                "SERIES_B",
                "SERIES_C",
                "SERIES_D_E_F",
                "GRANT"
              ]
            },
            "lastFunding": {
              "type": "string",
              "format": "LocalDate",
              "example": "2019-04-01T00:00:00.000Z"
            },
            "numberEmployees": {
              "type": "number",
              "example": 900
            },
            "currency": {
              "type": "string",
              "enum": [
                "USD",
                "EUR"
              ]
            }
          }
        },
        "LoggedMember": {
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
            "educations",
            "loggedUser"
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
              "example": "pruebaemail@gmail.com"
            },
            "about": {
              "type": "string",
              "example": "Developer"
            },
            "image": {
              "$ref": "#/components/schemas/Image"
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
            },
            "loggedUser": {
              "$ref": "#/components/schemas/User"
            }
          }
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
        "Role": {
          "type": "string",
          "example": "DEV:ECOSYSTEM_MANAGER"
        },
        "Permission": {
          "type": "string",
          "example": "DEV:ONLINE_EVENT_CREATE"
        },
        "Project": {
          "required": [
            "id",
            "actorId",
            "name",
            "description",
            "trlStage",
            "media",
            "protectionMethod",
            "projectMethod",
            "projectManager",
            "teamMembers",
            "socialNetworks",
            "deepTechs",
            "businessModels",
            "industries",
            "socialInnovation"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "actorId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "name": {
              "type": "string",
              "example": "Trade secret"
            },
            "description": {
              "type": "string",
              "example": "Trade secret"
            },
            "trlStage": {
              "type": "string",
              "enum": [
                "BASIC_PRINCIPLES_OBSERVED",
                "TECHNOLOGY_CONCEPT_FORMULATED",
                "EXPERIMENTAL_PROOF_OF_CONCEPT",
                "TECHNOLOGY_VALIDATED_IN_LAB",
                "TECHNOLOGY_VALIDATED_IN_RELEVANT_ENVIRONMENT",
                "TECHNOLOGY_DEMONSTRATED_IN_RELEVANT_ENVIRONMENT",
                "SYSTEM_PROTOTYPE_DEMONSTRATION_IN_OPERATIONAL_ENVIRONMENT",
                "SYSTEM_COMPLETE_AND_QUALIFIED",
                "ACTUAL_SYSTEM_PROVEN_IN_OPERATIONAL_ENVIRONMENT"
              ]
            },
            "media": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "www.vimeo.com/actor1"
              }
            },
            "protectionMethod": {
              "type": "string",
              "enum": [
                "PATENTS",
                "TRADE_SECRETS",
                "COMPUTER_ALGORITHMS",
                "DESIGN",
                "DATABASE",
                "TRADEMARK",
                "COPYRIGHT",
                "INDUSTRIAL_DESIGN"
              ]
            },
            "projectManager": {
              "$ref": "#/components/schemas/UpdateMember"
            },
            "teamMembers": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/UpdateMember"
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
                "type": "string",
                "example": "SMART_DATA_DISCOVERY, CLOUD_COMPUTING"
              }
            },
            "businessModels": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "CONSUMER_PRODUCTS, ECOMMERCE"
              }
            },
            "industries": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "ELECTRICAL_EQUIPMENT, MACHINERY_AND_EQUIPMENT"
              }
            },
            "socialInnovations": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "PEACE_AND_JUSTICE_STRONG_INSTITUTIONS, REDUCED_INEQUALITIES, CLIMATE_ACTION, GENDER_EQUALITY, NO_POVERTY"
              }
            }
          }
        },
        "Setting": {
          "required": [
            "id",
            "banner"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "banner": {
              "$ref": "#/components/schemas/Image"
            }
          }
        },
        "OnlineEventCreateEvent": {
          "required": [
            "title",
            "timestamp",
            "description",
            "imageUrl",
            "url"
          ],
          "properties": {
            "title": {
              "type": "string",
              "example": "Event to improve our programming skills"
            },
            "timestamp": {
              "type": "number",
              "example": 1554477388
            },
            "description": {
              "type": "string",
              "example": "Workshop given by a java expert to learn about good programming practices"
            },
            "imageUrl": {
              "type": "string",
              "example": "https://i.ytimg.com/vi/2nucjefSr6I/maxresdefault.jpg"
            },
            "url": {
              "type": "string",
              "example": "https://www.microsoft.com/es-es/microsoft-teams/log-in"
            }
          }
        },
        "OnlineEventUpdateEvent": {
          "required": [
            "id",
            "title",
            "timestamp",
            "description",
            "imageUrl",
            "url"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "title": {
              "type": "string",
              "example": "Event to improve our programming skills"
            },
            "timestamp": {
              "type": "number",
              "example": 1554477388
            },
            "description": {
              "type": "string",
              "example": "Workshop given by a java expert to learn about good programming practices"
            },
            "imageUrl": {
              "type": "string",
              "example": "https://i.ytimg.com/vi/2nucjefSr6I/maxresdefault.jpg"
            },
            "url": {
              "type": "string",
              "example": "https://www.microsoft.com/es-es/microsoft-teams/log-in"
            }
          }
        },
        "OnlineEventDeleteEvent": {
          "required": [
            "id"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            }
          }
        },
        "OnlineEventSubscriptionEvent": {
          "required": [
            "id",
            "participants"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "participants": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/UpdateMember"
              }
            }
          }
        },
        "OnlineEventUnsubscriptionEvent": {
          "required": [
            "id",
            "participants"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "participants": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/UpdateMember"
              }
            }
          }
        },
        "MemberEducationCreateEvent": {
          "required": [
            "school",
            "degree",
            "fieldOfStudy",
            "location",
            "startDate",
            "endDate",
            "grade",
            "description"
          ],
          "properties": {
            "school": {
              "type": "string",
              "example": "Hardvard University"
            },
            "degree": {
              "type": "string",
              "example": "Informatics Engineering"
            },
            "fieldOfStudy": {
              "type": "string",
              "example": "Software Engineering"
            },
            "location": {
              "$ref": "#/components/schemas/Address"
            },
            "startDate": {
              "type": "string",
              "format": "LocalDate",
              "example": "2021-03-01T00:00:00.000Z"
            },
            "endDate": {
              "type": "string",
              "format": "LocalDate",
              "example": "2021-03-01T00:00:00.000Z"
            },
            "grade": {
              "type": "number",
              "example": 8
            },
            "description": {
              "type": "string",
              "example": "Harvard University is a private institution that was founded in 1636"
            }
          }
        },
        "MemberEducationUpdateEvent": {
          "required": [
            "id",
            "school",
            "degree",
            "fieldOfStudy",
            "location",
            "startDate",
            "endDate",
            "grade",
            "description"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "school": {
              "type": "string",
              "example": "Hardvard University"
            },
            "degree": {
              "type": "string",
              "example": "Informatics Engineering"
            },
            "fieldOfStudy": {
              "type": "string",
              "example": "Software Engineering"
            },
            "location": {
              "$ref": "#/components/schemas/Address"
            },
            "startDate": {
              "type": "string",
              "format": "LocalDate",
              "example": "2021-03-01T00:00:00.000Z"
            },
            "endDate": {
              "type": "string",
              "format": "LocalDate",
              "example": "2021-03-01T00:00:00.000Z"
            },
            "grade": {
              "type": "number",
              "example": 8
            },
            "description": {
              "type": "string",
              "example": "Harvard University is a private institution that was founded in 1636"
            }
          }
        },
        "MemberExperienceCreateEvent": {
          "required": [
            "title",
            "type",
            "company",
            "location",
            "startDate",
            "endDate",
            "description"
          ],
          "properties": {
            "title": {
              "type": "string",
              "example": "Back-end developer en Moonshot Innovation"
            },
            "type": {
              "type": "string",
              "enum": [
                "FULL_TIME",
                "PART_TIME",
                "SELF_EMPLOYED",
                "FREELANCE",
                "CONTRACT",
                "INTERNSHIP",
                "APPRENTICESHIP",
                "INTERIM",
                "OFFICIAL",
                "WORK_AND_SERVICE_CONTRACT",
                "DUAL_VOCATIONAL_TRAINING"
              ]
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
              "format": "LocalDate",
              "example": "2021-03-01T00:00:00.000Z"
            },
            "endDate": {
              "type": "string",
              "format": "LocalDate",
              "example": "2021-03-01T00:00:00.000Z"
            },
            "description": {
              "type": "string",
              "example": "Scrum manager in Moonshot Innovation"
            }
          }
        },
        "MemberExperienceUpdateEvent": {
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
              "example": "60acae8e2f799d228a4d4a85"
            },
            "title": {
              "type": "string",
              "example": "Back-end developer en Moonshot Innovation"
            },
            "type": {
              "type": "string",
              "enum": [
                "FULL_TIME",
                "PART_TIME",
                "SELF_EMPLOYED",
                "FREELANCE",
                "CONTRACT",
                "INTERNSHIP",
                "APPRENTICESHIP",
                "INTERIM",
                "OFFICIAL",
                "WORK_AND_SERVICE_CONTRACT",
                "DUAL_VOCATIONAL_TRAINING"
              ]
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
              "format": "LocalDate",
              "example": "2021-03-01T00:00:00.000Z"
            },
            "endDate": {
              "type": "string",
              "format": "LocalDate",
              "example": "2021-03-01T00:00:00.000Z"
            },
            "description": {
              "type": "string",
              "example": "Scrum manager in Moonshot Innovation"
            }
          }
        },
        "FaceToFaceEventSubscriptionEvent": {
          "required": [
            "id",
            "participants"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "participants": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/UpdateMember"
              }
            }
          }
        },
        "FaceToFaceEventUnsubscriptionEvent": {
          "required": [
            "id",
            "participants"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "participants": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/UpdateMember"
              }
            }
          }
        },
        "FaceToFaceEventCreateEvent": {
          "required": [
            "title",
            "timestamp",
            "description",
            "imageUrl",
            "direction"
          ],
          "properties": {
            "title": {
              "type": "string",
              "example": "Event to improve our programming skills"
            },
            "timestamp": {
              "type": "number",
              "example": 1554477388
            },
            "description": {
              "type": "string",
              "example": "Workshop given by a java expert to learn about good programming practices"
            },
            "imageUrl": {
              "type": "string",
              "example": "https://i.ytimg.com/vi/2nucjefSr6I/maxresdefault.jpg"
            },
            "direction": {
              "type": "string",
              "example": "c/Alcala de Heranez, 17"
            }
          }
        },
        "FaceToFaceEventUpdateEvent": {
          "required": [
            "id",
            "title",
            "timestamp",
            "description",
            "imageUrl",
            "direction"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "title": {
              "type": "string",
              "example": "Event to improve our programming skills"
            },
            "timestamp": {
              "type": "number",
              "example": 1554477388
            },
            "description": {
              "type": "string",
              "example": "Workshop given by a java expert to learn about good programming practices"
            },
            "imageUrl": {
              "type": "string",
              "example": "https://i.ytimg.com/vi/2nucjefSr6I/maxresdefault.jpg"
            },
            "direction": {
              "type": "string",
              "example": "c/Alcala de Heranez, 17"
            }
          }
        },
        "PublicChannelCreateEvent": {
          "required": [
            "participants",
            "actions",
            "title",
            "description"
          ],
          "properties": {
            "participants": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ParticipantAnyEvent"
              }
            },
            "actions": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RoomAction"
              }
            },
            "title": {
              "type": "string",
              "example": "Follow up room example"
            },
            "description": {
              "type": "string",
              "example": "We want to test the operation of the room"
            }
          }
        },
        "PublicChannelUpdateEvent": {
          "required": [
            "id",
            "ownerMemberId",
            "participants",
            "actions",
            "title",
            "description"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "ownerMemberId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "participants": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ParticipantAnyEvent"
              }
            },
            "actions": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RoomAction"
              }
            },
            "title": {
              "type": "string",
              "example": "Follow up room example"
            },
            "description": {
              "type": "string",
              "example": "We want to test the operation of the room"
            }
          }
        },
        "PublicChannelSubscribeEvent": {
          "required": [
            "id",
            "memberId"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "memberId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            }
          }
        },
        "PublicChannelUnsubscribeEvent": {
          "required": [
            "id",
            "memberId"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "memberId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            }
          }
        },
        "WallPostCreateEvent": {
          "required": [
            "content",
            "attachments",
            "comments",
            "likes",
            "createdAt"
          ],
          "properties": {
            "content": {
              "type": "string",
              "example": "First wall post in this ecoystem"
            },
            "attachments": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/WallPostAttachment"
              }
            },
            "comments": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/CreateComment"
              }
            },
            "likes": {
              "type": "array",
              "items": {
                "type": "string",
                "format": "mongo-id",
                "example": "60acae8e2f799d228a4d4a85"
              }
            },
            "createdAt": {
              "type": "string",
              "format": "ZonedDateTime",
              "example": 1624520984602
            }
          }
        },
        "WallPostUpdateEvent": {
          "required": [
            "id",
            "content",
            "attachments"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "content": {
              "type": "string",
              "example": "First wall post in this ecoystem"
            },
            "attachments": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/WallPostAttachment"
              }
            }
          }
        },
        "WallPostLikeEvent": {
          "required": [
            "id"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            }
          }
        },
        "WallPostUnlikeEvent": {
          "required": [
            "id"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            }
          }
        },
        "WallPostCommentAddEvent": {
          "required": [
            "id",
            "comment"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "comment": {
              "$ref": "#/components/schemas/CreateComment"
            }
          }
        },
        "WallPostCommentLikeEvent": {
          "required": [
            "id",
            "memberId",
            "commentId"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "memberId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "commentId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            }
          }
        },
        "WallPostCommentUnlikeEvent": {
          "required": [
            "id",
            "memberId",
            "commentId"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "memberId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "commentId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            }
          }
        },
        "ActorCreateEvent": {
          "required": [
            "type",
            "state",
            "ownerMember",
            "name",
            "city",
            "country",
            "address",
            "latitude",
            "longitude",
            "description",
            "phone",
            "web",
            "image",
            "myFacet",
            "questFacet",
            "investment",
            "financial",
            "socialNetworks",
            "media",
            "password",
            "repeatPassword"
          ],
          "properties": {
            "type": {
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
            },
            "state": {
              "type": "string",
              "enum": [
                "ACCEPTED",
                "PENDING",
                "REJECTED"
              ]
            },
            "ownerMember": {
              "$ref": "#/components/schemas/CreateMember"
            },
            "name": {
              "type": "string",
              "example": "Actor1"
            },
            "city": {
              "type": "string",
              "example": "Madrid"
            },
            "country": {
              "type": "string",
              "example": "Spain"
            },
            "address": {
              "type": "string",
              "example": "Avenida niza, 55, Madrid"
            },
            "latitude": {
              "type": "number",
              "example": 10.6
            },
            "longitude": {
              "type": "number",
              "example": 50.3
            },
            "description": {
              "type": "string",
              "example": "This is a example"
            },
            "phone": {
              "type": "string",
              "format": "telephone number",
              "example": 34999999999
            },
            "web": {
              "type": "string",
              "example": "www.example.com"
            },
            "image": {
              "$ref": "#/components/schemas/Image"
            },
            "myFacet": {
              "$ref": "#/components/schemas/Facet"
            },
            "questFacet": {
              "$ref": "#/components/schemas/Facet"
            },
            "investment": {
              "$ref": "#/components/schemas/Investment"
            },
            "financial": {
              "$ref": "#/components/schemas/Financial"
            },
            "socialNetworks": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "www.instagram.com/actor1"
              }
            },
            "media": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "www.vimeo.com/actor1"
              }
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
        "ActorUpdateEvent": {
          "required": [
            "id",
            "type",
            "state",
            "name",
            "city",
            "country",
            "address",
            "latitude",
            "longitude",
            "description",
            "phone",
            "web",
            "image",
            "myFacet",
            "questFacet",
            "investment",
            "financial",
            "socialNetworks",
            "media"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "type": {
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
              "example": "Actor1"
            },
            "city": {
              "type": "string",
              "example": "Madrid"
            },
            "country": {
              "type": "string",
              "example": "Spain"
            },
            "address": {
              "type": "string",
              "example": "Avenida niza, 55, Madrid"
            },
            "latitude": {
              "type": "number",
              "example": 10.6
            },
            "longitude": {
              "type": "number",
              "example": 50.3
            },
            "description": {
              "type": "string",
              "example": "This is a example"
            },
            "phone": {
              "type": "string",
              "format": "telephone number",
              "example": 34999999999
            },
            "web": {
              "type": "string",
              "example": "www.example.com"
            },
            "image": {
              "$ref": "#/components/schemas/Image"
            },
            "myFacet": {
              "$ref": "#/components/schemas/Facet"
            },
            "questFacet": {
              "$ref": "#/components/schemas/Facet"
            },
            "investment": {
              "$ref": "#/components/schemas/Investment"
            },
            "financial": {
              "$ref": "#/components/schemas/Financial"
            },
            "socialNetworks": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "www.instagram.com/actor1"
              }
            },
            "media": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "www.vimeo.com/actor1"
              }
            }
          }
        },
        "ActorAcceptEvent": {
          "required": [
            "id"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            }
          }
        },
        "ActorRejectEvent": {
          "required": [
            "id"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            }
          }
        },
        "MemberUpdateEvent": {
          "required": [
            "id",
            "name",
            "lastname",
            "address",
            "email",
            "about",
            "image",
            "socialNetworks"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "61445159784bca6ef764c6df"
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
              "example": "pruebaemail@gmail.com"
            },
            "about": {
              "type": "string",
              "example": "Developer"
            },
            "image": {
              "$ref": "#/components/schemas/Image"
            },
            "socialNetworks": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "https://www.instagram.com/user1, https://www.twitter.com/user1, https://www.linkedln.com/user1"
              }
            }
          }
        },
        "ProjectCreateEvent": {
          "required": [
            "actorId",
            "name",
            "description",
            "trlStage",
            "media",
            "protectionMethod",
            "projectManagerId",
            "teamMembersIds",
            "socialNetworks",
            "deepTechs",
            "businessModels",
            "industries",
            "socialInnovation"
          ],
          "properties": {
            "actorId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "name": {
              "type": "string",
              "example": null
            },
            "description": {
              "type": "string",
              "example": null
            },
            "trlStage": {
              "type": "string",
              "enum": [
                "BASIC_PRINCIPLES_OBSERVED",
                "TECHNOLOGY_CONCEPT_FORMULATED",
                "EXPERIMENTAL_PROOF_OF_CONCEPT",
                "TECHNOLOGY_VALIDATED_IN_LAB",
                "TECHNOLOGY_VALIDATED_IN_RELEVANT_ENVIRONMENT",
                "TECHNOLOGY_DEMONSTRATED_IN_RELEVANT_ENVIRONMENT",
                "SYSTEM_PROTOTYPE_DEMONSTRATION_IN_OPERATIONAL_ENVIRONMENT",
                "SYSTEM_COMPLETE_AND_QUALIFIED",
                "ACTUAL_SYSTEM_PROVEN_IN_OPERATIONAL_ENVIRONMENT"
              ]
            },
            "media": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "www.vimeo.com/actor1"
              }
            },
            "protectionMethod": {
              "type": "string",
              "enum": [
                "PATENTS",
                "TRADE_SECRETS",
                "COMPUTER_ALGORITHMS",
                "DESIGN",
                "DATABASE",
                "TRADEMARK",
                "COPYRIGHT",
                "INDUSTRIAL_DESIGN"
              ]
            },
            "projectManagerId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "teamMembersIds": {
              "type": "array",
              "items": {
                "type": "string",
                "format": "mongo-id",
                "example": "60acae8e2f799d228a4d4a85"
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
                "type": "string",
                "example": "SMART_DATA_DISCOVERY, CLOUD_COMPUTING"
              }
            },
            "businessModels": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "CONSUMER_PRODUCTS, ECOMMERCE"
              }
            },
            "industries": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "ELECTRICAL_EQUIPMENT, MACHINERY_AND_EQUIPMENT"
              }
            },
            "socialInnovations": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "PEACE_AND_JUSTICE_STRONG_INSTITUTIONS, REDUCED_INEQUALITIES, CLIMATE_ACTION, GENDER_EQUALITY, NO_POVERTY"
              }
            }
          }
        },
        "ProjectUpdateEvent": {
          "required": [
            "id",
            "actorId",
            "name",
            "description",
            "trlStage",
            "media",
            "protectionMethod",
            "projectManagerId",
            "teamMembersIds",
            "socialNetworks",
            "deepTechs",
            "businessModels",
            "industries",
            "socialInnovation"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "actorId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "name": {
              "type": "string",
              "example": null
            },
            "description": {
              "type": "string",
              "example": null
            },
            "trlStage": {
              "type": "string",
              "enum": [
                "BASIC_PRINCIPLES_OBSERVED",
                "TECHNOLOGY_CONCEPT_FORMULATED",
                "EXPERIMENTAL_PROOF_OF_CONCEPT",
                "TECHNOLOGY_VALIDATED_IN_LAB",
                "TECHNOLOGY_VALIDATED_IN_RELEVANT_ENVIRONMENT",
                "TECHNOLOGY_DEMONSTRATED_IN_RELEVANT_ENVIRONMENT",
                "SYSTEM_PROTOTYPE_DEMONSTRATION_IN_OPERATIONAL_ENVIRONMENT",
                "SYSTEM_COMPLETE_AND_QUALIFIED",
                "ACTUAL_SYSTEM_PROVEN_IN_OPERATIONAL_ENVIRONMENT"
              ]
            },
            "media": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "www.vimeo.com/actor1"
              }
            },
            "protectionMethod": {
              "type": "string",
              "enum": [
                "PATENTS",
                "TRADE_SECRETS",
                "COMPUTER_ALGORITHMS",
                "DESIGN",
                "DATABASE",
                "TRADEMARK",
                "COPYRIGHT",
                "INDUSTRIAL_DESIGN"
              ]
            },
            "projectManagerId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "teamMembersIds": {
              "type": "array",
              "items": {
                "type": "string",
                "format": "mongo-id",
                "example": "60acae8e2f799d228a4d4a85"
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
                "type": "string",
                "example": "SMART_DATA_DISCOVERY, CLOUD_COMPUTING"
              }
            },
            "businessModels": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "CONSUMER_PRODUCTS, ECOMMERCE"
              }
            },
            "industries": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "ELECTRICAL_EQUIPMENT, MACHINERY_AND_EQUIPMENT"
              }
            },
            "socialInnovations": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "PEACE_AND_JUSTICE_STRONG_INSTITUTIONS, REDUCED_INEQUALITIES, CLIMATE_ACTION, GENDER_EQUALITY, NO_POVERTY"
              }
            }
          }
        },
        "SettingCreateEvent": {
          "required": [
            "banner"
          ],
          "properties": {
            "banner": {
              "$ref": "#/components/schemas/Image"
            }
          }
        },
        "SettingUpdateEvent": {
          "required": [
            "id",
            "banner"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "banner": {
              "$ref": "#/components/schemas/Image"
            }
          }
        },
        "OnlineEventEmptyBodyError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "Online event is empty."
            },
            "code": {
              "type": "string",
              "example": "ONLINE_EVENT_EMPTY"
            }
          }
        },
        "FaceToFaceEventEmptyBodyError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "Face to face event is empty."
            },
            "code": {
              "type": "string",
              "example": "FACE_TO_FACE_EVENT_EMPTY"
            }
          }
        },
        "DirectChatEmptyBodyError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "The direct chat object is empty."
            },
            "code": {
              "type": "string",
              "example": "DIRECT_CHAT_EMPTY"
            }
          }
        },
        "FollowUpRoomEmptyBodyError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "The follow-up room object is empty."
            },
            "code": {
              "type": "string",
              "example": "FOLLOW_UP_ROOM_EMPTY"
            }
          }
        },
        "DeleteMessageEmptyBodyError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "The message object is empty."
            },
            "code": {
              "type": "string",
              "example": "DELETE_MESSAGE_EMPTY"
            }
          }
        },
        "PublicChannelEmptyBodyError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "Public channel is empty."
            },
            "code": {
              "type": "string",
              "example": "PUBLIC_CHANNEL_EMPTY"
            }
          }
        },
        "OnlineEventEmptySuscriptionError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "Online event subscription is empty."
            },
            "code": {
              "type": "string",
              "example": "ONLINE_EVENT_SUBSCRIPTION_EMPTY"
            }
          }
        },
        "FaceToFaceEventEmptySuscriptionError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "Face to face subscription is empty."
            },
            "code": {
              "type": "string",
              "example": "FACE_TO_FACE_EVENT_SUBSCRIPTION_EMPTY"
            }
          }
        },
        "FollowUpRoomAddMemberEmptyBodyError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "The follow-up room add member object is empty."
            },
            "code": {
              "type": "string",
              "example": "FOLLOW_UP_ROOM_ADD_MEMBER_EMPTY"
            }
          }
        },
        "FollowUpRoomRemoveMemberEmptyBodyError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "The follow-up room leave member object is empty."
            },
            "code": {
              "type": "string",
              "example": "FOLLOW_UP_ROOM_LEAVE_MEMBER_EMPTY"
            }
          }
        },
        "FollowUpRoomOpenEmptyBodyError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "The follow-up room open event object is empty."
            },
            "code": {
              "type": "string",
              "example": "FOLLOW_UP_ROOM_OPEN_EVENT_EMPTY"
            }
          }
        },
        "FollowUpRoomCloseEmptyBodyError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "The follow-up room close event object is empty."
            },
            "code": {
              "type": "string",
              "example": "FOLLOW_UP_ROOM_CLOSE_EVENT_EMPTY"
            }
          }
        },
        "AddMessageEmptyBodyError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "The message object is empty."
            },
            "code": {
              "type": "string",
              "example": "ADD_MESSAGE_EMPTY"
            }
          }
        },
        "WallPostEmptyBodyError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "Wall post is empty."
            },
            "code": {
              "type": "string",
              "example": "WALL_POST_EMPTY"
            }
          }
        },
        "ActorEmptyBodyError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "The actor object is empty."
            },
            "code": {
              "type": "string",
              "example": "ACTOR_EMPTY"
            }
          }
        },
        "MemberEmptyBodyError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "The member object is empty."
            },
            "code": {
              "type": "string",
              "example": "MEMBER_EMPTY"
            }
          }
        },
        "MemberEducationEmptyBodyError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "The education is empty."
            },
            "code": {
              "type": "string",
              "example": "MEMBER_EDUCATION_EMPTY"
            }
          }
        },
        "MemberExperienceEmptyBodyError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "The experience is empty."
            },
            "code": {
              "type": "string",
              "example": "MEMBER_EXPERIENCE_EMPTY"
            }
          }
        },
        "ProjectEmptyBodyError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "The project object is empty."
            },
            "code": {
              "type": "string",
              "example": "PROJECT_EMPTY"
            }
          }
        },
        "SettingEmptyBodyError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "The setting object is empty."
            },
            "code": {
              "type": "string",
              "example": "SETTING_EMPTY"
            }
          }
        },
        "SettingNotConfiguredError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "Setting is not configured already."
            },
            "code": {
              "type": "string",
              "example": "SETTING_NOT_CONFIGURED"
            }
          }
        },
        "WallPostInvalidIdError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "Invalid wall post ID."
            },
            "code": {
              "type": "string",
              "example": "WALL_POST_INVALID_ID"
            }
          }
        },
        "MemberInvalidIdError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "Invalid member ID."
            },
            "code": {
              "type": "string",
              "example": "MEMBER_INVALID_ID"
            }
          }
        },
        "MemberInvalidStateError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "The member is not accept. Please, contact with the ecosystem manager."
            },
            "code": {
              "type": "string",
              "example": "MEMBER_INVALID_STATE"
            }
          }
        },
        "PublicChannelEventEmptySuscriptionError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "The public channel unsubscribe event is empty."
            },
            "code": {
              "type": "string",
              "example": "PUBLIC_CHANNEL_UNSUBSCRIBE_EVENT_EMPTY"
            }
          }
        },
        "PublicChannelEventEmptyUnsuscriptionError": {
          "required": [
            "code",
            "message"
          ],
          "type": "object",
          "properties": {
            "message": {
              "type": "string",
              "example": "The public channel unsubscribe event is empty."
            },
            "code": {
              "type": "string",
              "example": "PUBLIC_CHANNEL_UNSUBSCRIBE_EVENT_EMPTY"
            }
          }
        },
        "DirectChatCreateEvent": {
          "required": [
            "participants",
            "actions"
          ],
          "properties": {
            "participants": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ParticipantAnyEvent"
              }
            },
            "actions": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RoomAction"
              }
            }
          }
        },
        "ParticipantAnyEvent": {
          "required": [
            "memberId",
            "state"
          ],
          "properties": {
            "memberId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "state": {
              "type": "string",
              "enum": [
                "ACTIVE",
                "INACTIVE"
              ]
            }
          }
        },
        "FollowUpRoomCreateEvent": {
          "required": [
            "participants",
            "actions",
            "title",
            "description",
            "state"
          ],
          "properties": {
            "participants": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ParticipantAnyEvent"
              }
            },
            "actions": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RoomAction"
              }
            },
            "title": {
              "type": "string",
              "example": "Follow up room example"
            },
            "description": {
              "type": "string",
              "example": "We want to test the operation of the room"
            },
            "state": {
              "type": "string",
              "enum": [
                "OPEN",
                "CLOSED"
              ]
            }
          }
        },
        "FollowUpRoomUpdateEvent": {
          "required": [
            "id",
            "participants",
            "actions",
            "title",
            "description"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "participants": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ParticipantAnyEvent"
              }
            },
            "actions": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RoomAction"
              }
            },
            "title": {
              "type": "string",
              "example": "Follow up room example"
            },
            "description": {
              "type": "string",
              "example": "We want to test the operation of the room"
            }
          }
        },
        "FollowUpRoomAddMemberEvent": {
          "required": [
            "id",
            "memberIds"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "memberIds": {
              "type": "array",
              "items": {
                "type": "string",
                "format": "mongo-id",
                "example": "60acae8e2f799d228a4d4a85"
              }
            }
          }
        },
        "FollowUpRoomRemoveMemberEvent": {
          "required": [
            "id",
            "leaveMemberIds",
            "newOwnerMemberId"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "leaveMemberIds": {
              "type": "array",
              "items": {
                "type": "string",
                "format": "mongo-id",
                "example": "60acae8e2f799d228a4d4a85"
              }
            },
            "newOwnerMemberId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            }
          }
        },
        "FollowUpRoomOpenEvent": {
          "required": [
            "id"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            }
          }
        },
        "FollowUpRoomCloseEvent": {
          "required": [
            "id"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            }
          }
        },
        "MessageAddEvent": {
          "required": [
            "roomId",
            "content",
            "documents"
          ],
          "properties": {
            "roomId": {
              "type": "string",
              "format": "mongo-id",
              "example": "60acae8e2f799d228a4d4a85"
            },
            "content": {
              "type": "string",
              "example": "Hello world"
            },
            "documents": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/MessageDocumentAddEvent"
              }
            }
          }
        },
        "MessageDocumentAddEvent": {
          "required": [
            "link",
            "category",
            "filename"
          ],
          "properties": {
            "link": {
              "type": "string",
              "example": "https://docs.google.com/viewerng/vi54473784a6a2.xlsx"
            },
            "category": {
              "type": "string",
              "enum": [
                "PDF",
                "WORD",
                "IMAGE",
                "VIDEO",
                "OTHER"
              ]
            },
            "filename": {
              "type": "string",
              "example": "document1"
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
        "memberId": {
          "type": "apiKey",
          "name": "COOKIE_MEMBER_ID",
          "in": "header"
        },
        "userEmail": {
          "type": "apiKey",
          "name": "COOKIE_USER_EMAIL",
          "in": "header"
        },
        "permissions": {
          "type": "oauth2",
          "description": "This define all permisions required in Core API",
          "flows": {
            "authorizationCode": {
              "scopes": {
                "online_event_create": "Permission required to create an online event",
                "online_event_any_update": "Permission required to update any online event",
                "online_event_any_delete": "Permission required to remove any online event",
                "face_to_face_event_create": "Permission required to create a face to face event",
                "face_to_face_event_any_update": "Permission required to update any face to face event",
                "face_to_face_event_any_delete": "Permission required to remove any face to face event",
                "direct_chat_any_list": "Permission required to see all direct chats",
                "follow_up_room_any_list": "Permission required to see all direct chats",
                "public_channel_create": "Permission required to create a public channel",
                "public_channel_any_update": "Permission required to update any public channel",
                "public_channel_any_delete": "Permission required to remove any public channel",
                "wall_post_create": "Permission required to create a wall post",
                "wall_post_any_update": "Permission required to update any wall post",
                "wall_post_any_delete": "Permission required to remove any wall post",
                "actor_management": "Permission required to accept or deny actors",
                "settings_update": "Permission required to modify ecosystem settings"
              },
              "authorizationUrl": "https://dev.moonshot.ceo/api/federation/login",
              "tokenUrl": "https://dev.moonshot.ceo/api/federation/token"
            }
          }
        }
      }
    }
  }
}
