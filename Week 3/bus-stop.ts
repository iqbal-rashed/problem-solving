function distanceBetweenBusStops(
    distance: number[],
    start: number,
    destination: number
): number {
    const lastIndex = distance.length - 1;
    if (start === 0 && lastIndex === destination) return distance[lastIndex];

    let sliceArr: number[] = [];

    if (start < destination) {
        sliceArr = distance.slice(start, destination);
        distance.splice(start, destination - start);
    } else {
        sliceArr = distance.slice(destination, start);
        distance.splice(destination, start - destination);
    }

    let one = sliceArr.reduce((a, b) => a + b, 0);
    let two = distance.reduce((a, b) => a + b, 0);

    return Math.min(one, two);
}

console.log(distanceBetweenBusStops([14, 13, 4, 7, 10, 17, 8, 3, 2, 13], 2, 9));
