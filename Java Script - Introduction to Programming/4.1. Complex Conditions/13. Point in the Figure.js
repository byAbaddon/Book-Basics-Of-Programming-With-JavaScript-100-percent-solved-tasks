function pointInFigure([...arg]) {
    let [h, x, y] = [...arg.map(Number)]

    if (x > 0 && x < 3 * h && y > 0 && y < h || x > h && x < 2 * h && y > 0 && y < 4 * h) {
        return 'inside'
    } else if (x == 0 && y >= 0 && y <= h ||
        x == 3 * h && y >= 0 && y <= h ||
        y == 0 && x >= 0 && x <= 3 * h ||
        y == h && x >= 0 && x <= 3 * h ||
        x == h && y >= 0 && y <= 4 * h ||
        x == 2 * h && y >= 0 && y <= 4 * h ||
        y == 0 && x >= h && x <= 2 * h ||
        y == 4 * h && x >= h && x <= 2 * h) {
        return 'border'
    } else {
        return 'outside'
    }
}

// console.log(pointInFigure('leap', 5, 2))