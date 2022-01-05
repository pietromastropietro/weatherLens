/*  Convert angle wind value from API to geographic direction.

    We have 16 directions, and maximum 360° angle. By dividing 360/16 we get 22.5, 
    that's the range of any single direction.
    "N" direction spans approx. from 349 to 11, "NNE" spans approx. from 11 to 33 etc.

    So we divide the angle by 22.5, add 0.5 to break the tie between change threshold, 
    and apply flooring to get the largest integer less than or equal to the result.
    Then we apply the modulo operation to handle angles from 349 to 360,
    because any floored value in this range divided by 22.5 and added to 0.5 would result 16, 
    causing an array index error.
    Considering that 349 to 360 is "N" again, applying the modulo to the result ( that will be 16) 
    will result in 0, corresponding to "N".
*/
export function degToDirection(deg) {
    const directionIndex = Math.floor((deg / 22.5) + 0.5) % 16;
    var directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return directions[directionIndex];
}