//The function turns a number into an array of numbers
// Array length === totalPage

export const createPages = (totalPage: number) => {
    console.log(totalPage);
    
    let res = []

    for (let i = 1; i < totalPage + 1; i++) {
        res.push(i)
    }

    return res
}