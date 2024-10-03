function lowerCaseWords(mixedArray){
    return new Promise((resolve,reject) => { 
       const newArray = mixedArray.filter(arr => typeof arr == 'string')
        .map (arr => arr.toLowerCase());
        if(newArray.length > 0){
            resolve(newArray);
        }else{
            reject("No Strings")
        }
    })
}
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
lowerCaseWords(mixedArray)
    .then(result => {
        console.log(result)
        })
    .catch(e => {
        console.error(e)
})