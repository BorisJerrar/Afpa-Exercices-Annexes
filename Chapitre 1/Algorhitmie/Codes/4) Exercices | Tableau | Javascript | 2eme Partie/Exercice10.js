function multiDimentionFinder() {
    let multiArray = [[2, 4], [6, 8], [10, 12], [9, 7], [5, 3]];
    var result = -Infinity;
    for (let i = 0; i < multiArray.length; i++) {
        for (let j = 0; j < multiArray[i].length; j++) {
            if (result < multiArray[i][j]) {
                result = multiArray[i][j];
            }
        }
    }
    console.log(result)
}
multiDimentionFinder()