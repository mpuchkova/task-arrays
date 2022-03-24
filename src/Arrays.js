export function arraySorting(data) {
    return data
        .split(',')
        .sort((x, y) => x - y)
        .join();
}

export function arrayFiltering(data) {
    return data.filter((number) => number <= 100);
}

export function arrayPushing(array1, array2) {
    const result = [];
    array1.forEach((element, i) => result.push(element, array2[i]));
    return result;
}
