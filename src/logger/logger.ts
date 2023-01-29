//external modules imports
import dayjs from "dayjs";
import pino from "pino";

const Logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
        colorize: true
        }
    },
    base:{
        pid:false,
    },
    timestamp:()=>`,"time":"${dayjs().format()}"`
})


export default Logger;