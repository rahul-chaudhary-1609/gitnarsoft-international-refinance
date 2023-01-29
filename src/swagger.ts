export const doc={
    "swagger": "2.0",
    "info": {
      "version": "v2",
      "title": "UCRF"
    },
    "basePath": "/",
    "schemes": [
      "http",
      "https"
    ],
    "securityDefinitions":{
      "Bearer":{
        "type": "apiKey",
        "name": "Authorization",
        "in": "header"
      }

  },
    "consumes": [
      "application/json",
      "application/x-www-form-urlencoded",
      "multipart/form-data"
    ],
    "produces": [
      "application/json"
    ],
    "tags": [
      {
        "name": "Lead",
        "description": "Lead Api's"
      },
      {
        "name": "Calculator",
        "description": "Calculator Api's"
      }
      
    ],
    "paths": {
        "/lead/add-lead": {
          "post": {
            "tags": [
              "Lead"
            ],
            "description": "Api to add lead",
            "consumes": [
              "application/x-www-form-urlencoded"
            ],            
            "parameters": [
              {
                "name": "customer_name",
                "in": "formData",
                "description": "enter name",
                "required": true,
                "type": "string"
              },
              {
                "name": "customer_mobile",
                "in": "formData",
                "description": "enter name",
                "required": true,
                "type": "string"
              }
            ],
            "responses": {}
          }
        },
        "/lead/get-lead": {
          "get": {
            "tags": [
              "Lead"
            ],
            "description": "Api to get leads",
            "consumes": [
              "application/x-www-form-urlencoded"
            ],           
            "parameters": [
              {
                "name": "lead_id",
                "in": "query",
                "description": "enter lead id",
                "required": false,
                "type": "integer"
              }
            ],
            "responses": {}
          }
        }

    }
}