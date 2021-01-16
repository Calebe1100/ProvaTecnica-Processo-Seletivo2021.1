import { TimeMachine } from "../entities/TimeMachine";
import calculateTimeBalance from "./CalculateTimeBalance";

const calculateTimeDifferential = (timeMachine:TimeMachine) => {
    const timeBalance = calculateTimeBalance(timeMachine);
    
    const timeDifferential = timeBalance.year * 365 * 24 + timeBalance.month * 30 * 24 + timeBalance.day * 24;

    return timeDifferential;
}

export default calculateTimeDifferential;
