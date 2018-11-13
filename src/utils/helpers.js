export function newId(){
    let text = ''
    const possible = "!@345*OLKjHYresxcfgy7890*&yhBGT543eDCFVGY7uijHgtrewsDFRTyujUYTREWQsdertyghbgvfc"
    for (let i = 0; i < 14; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text
}


export function dateTime(){
    const dateTime = Date.now();
    const timestamp = Math.floor(dateTime / 1000);
    return timestamp
}