// Code your solution in this file!
const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);

const returnLastTwoDrivers = drivers => drivers.slice(drivers.length - 2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    function fareMultiplier(fare) {
        return fare * multiplier;
    }
    return fareMultiplier;
}

const fareDoubler = fare => {
    return createFareMultiplier(fare)(2);
}

const triple = function (fare) {
    return createFareMultiplier(fare)(2);
}

const fareTripler = fare => createFareMultiplier(fare)(3);

function selectDifferentDrivers(drivers, returnedDrivers) {
    if (returnedDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    } else {
        return returnLastTwoDrivers(drivers)
    }
}

