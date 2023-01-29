import * as dotenv from "dotenv";
dotenv.config();

export const server:any={
    PORT:process.env.SERVER_PORT,
    NAME:process.env.SERVER_NAME
}

export const responseCode={
    SUCCESS:200,
    BAD_REQUEST:400,
    UNAUTHORIZED:401,
    FORBIDDEN:403,
    NOT_FOUND:404,
    CONFLICT:409,
    INTERNAL_SERVER_ERROR:500
}

export const dbCredentials:any={
    HOST:process.env.DB_HOST,
    USER:process.env.DB_USER,
    PASSWORD:process.env.DB_PASSWORD,
    DATABSE:process.env.DB_NAME,
    PORT:process.env.DB_PORT,
    DIALECT:process.env.DB_DIALECT
}

export const admin:any={
    secrets:{
        PASS_KEY:process.env.ADMIN_PASSKEY
    }
}

export const messages ={
    common:{
        SUCCESS:"Success.",
        ERROR:"Error.",
        PERMISSION_DENIED:"You have not sufficient permission to access this API."
    }
}

export const databaseTables = {
    LEAD_TABLE:`test_lead_table`
}