let str = "Rama krishna Ram RRRRRR"

let res = {}

function occurence(data) {
    // for (let i = 0; i < data.length; i++) {
    //     console.log(data[i]);
    //     //res[data[i]] = (res[data[i]] || 0) + 1
    // }

    for (let key of data) {
        //console.log(key);
        if (res[key]) {
            res[key]++
        } else {
            res[key] = 1
        }

    }
    return res
}

console.log(occurence(str.toLocaleLowerCase()));
//console.log(occurence(str));
