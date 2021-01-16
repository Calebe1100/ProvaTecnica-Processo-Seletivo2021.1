import SimpleDate from "../interfaces/SimpleDate";
import { TimeMachine } from "../entities/TimeMachine";

const calculateTimeBalance = (timeMachine:TimeMachine)=>{

    const balance = {
        year: 0,
        month: 0,
        day: 0
    };

    balance.year = timeMachine.targetDate.year - timeMachine.currentDate.year;
    balance.month = timeMachine.targetDate.month - timeMachine.currentDate.month;
    balance.day = timeMachine.targetDate.day - timeMachine.currentDate.day;

    return balance;
}

export default calculateTimeBalance;
