function superbowlWin(array) {
    const win = array.find( (array) => array.result === 'W'
    );
    if (win) {
    return win.year;
    } else {
        return win;
    }
}