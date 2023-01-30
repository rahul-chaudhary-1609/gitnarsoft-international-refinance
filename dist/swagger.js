const swaggerDocument = {
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
    "securityDefinitions": {
        "Bearer": {
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
            "name": "Finance",
            "description": "Finance Api's"
        },
        {
            "name": "Config",
            "description": "Config Api's"
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
        },
        "/lead/save-lead": {
            "post": {
                "tags": [
                    "Lead"
                ],
                "description": "Api to save lead",
                "consumes": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "Authorization",
                        "in": "header",
                        "description": "Enter jwt token for authentication",
                        "required": true,
                        "type": "string"
                    },
                    {
                        "name": "body",
                        "in": "body",
                        "description": "1. When you will pass id then it will be update otherwise it will be create\n2. Required Fields are:\n\tname,\n\temail,\n\tcountry_code,\n\tphone_number,\n\tdescription, and coach_charge is required\n3. Multiple coach specialization category ids can be added in coach_specialization_category_ids array like: prev_employers:[1,2,3,...]\n4. Multiple employee rank ids can be added in employee_rank_ids array like: prev_employers:[1,2,3,...]",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "string"
                                },
                                "name": {
                                    "type": "string"
                                },
                                "email": {
                                    "type": "string"
                                },
                                "country_code": {
                                    "type": "string"
                                },
                                "phone_number": {
                                    "type": "string"
                                },
                                "description": {
                                    "type": "string"
                                },
                                "image": {
                                    "type": "string"
                                },
                                "fileName": {
                                    "type": "string"
                                },
                                "coach_specialization_category_ids": {
                                    "type": "array",
                                    "items": {
                                        "type": "number"
                                    }
                                },
                                "employee_rank_ids": {
                                    "type": "array",
                                    "items": {
                                        "type": "number"
                                    }
                                },
                                "coach_charge": {
                                    "type": "number"
                                },
                                "social_media_handles": {
                                    "type": "object",
                                    "properties": {
                                        "facebook": {
                                            "type": "string"
                                        },
                                        "twitter": {
                                            "type": "string"
                                        },
                                        "linkedin": {
                                            "type": "string"
                                        },
                                        "instagram": {
                                            "type": "string"
                                        },
                                        "google": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "website": {
                                    "type": "string"
                                },
                                "document_url": {
                                    "type": "string"
                                },
                                "documentFileName": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                ],
                "responses": {}
            }
        },
        "/finance/get-all": {
            "get": {
                "tags": [
                    "Finance"
                ],
                "description": "Api to get all data",
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
        },
        "/config/get-config": {
            "get": {
                "tags": [
                    "Config"
                ],
                "description": "Api to get config",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "parameters": [
                    {
                        "name": "financer_id",
                        "in": "query",
                        "description": "enter financer_id",
                        "required": false,
                        "type": "integer"
                    },
                    {
                        "name": "config_data",
                        "in": "query",
                        "description": "enter config_data",
                        "required": false,
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    {
                        "name": "status",
                        "in": "formData",
                        "description": "0=>inactive,1=>active",
                        "required": false,
                        "type": "number",
                        "enum": [
                            0,
                            1
                        ]
                    }
                ],
                "responses": {}
            }
        },
        "/calculator/get-mmv": {
            "get": {
                "tags": [
                    "Calculator"
                ],
                "description": "Api to get config",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "parameters": [
                    {
                        "name": "financer_id",
                        "in": "query",
                        "description": "enter financer_id",
                        "required": false,
                        "type": "integer"
                    }
                ],
                "responses": {}
            }
        }
    }
};
export default swaggerDocument;
