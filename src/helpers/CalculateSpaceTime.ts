import SimpleDate from "../interfaces/SimpleDate";
import { TimeMachine } from "../entities/TimeMachine";
import calculateTimeBalance from "./CalculateTimeBalance";

const calculateSpaceTime = (timeMachine:TimeMachine) => {
    const timeBalance = calculateTimeBalance(timeMachine);
    
    const spaceTime = Math.sqrt(Math.pow(timeBalance.year, 2) + Math.pow(timeBalance.month, 2) + Math.pow(timeBalance.day, 2));

    return spaceTime;
}

export default calculateSpaceTime;
