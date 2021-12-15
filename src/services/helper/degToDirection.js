export function degToDirection(deg) {
    const directionIndex = Math.floor((deg / 22.5) + 0.5) % 16;
    var directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return directions[directionIndex];
}