// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    //returns number of blocks given a value
    //HQ is on 42nd Street value=42
    let result;
    if (blocks >= 42) {
        result = blocks - 42;
    } else if (blocks <= 42) {
        result = 42 - blocks;
    }
    return result;
}

function distanceFromHqInFeet(distanceInFeet) {
    const blocks = distanceFromHqInBlocks(distanceInFeet);
    //each block is 264 feet
    const distance = blocks * 264;
    return distance;
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    //each block is 264 feet
    let travel;
    if (destination < start) {
        travel = (start - destination) * 264;
    } else if (destination > start) {
        travel = (destination - start) * 264;
    }
    return travel;
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance = Math.abs((destination - start) * 264);

    if (distance <= 400) {
        return 0;
    }
    if (distance <= 2000) {
        // 2 cents per foot (264 feet/block)
        const freeDistance = distance - 400;
        const fare = freeDistance * 0.02; 
        return fare;
    } 
    if (distance > 2000 && distance <= 2500) {
        // flat fee of $25
        return 25;
    }
    if (distance > 2500) { 
        return 'cannot travel that far';
      }
}
