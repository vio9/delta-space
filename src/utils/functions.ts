export const dateToString = (date:Date):string => {
    return date.toISOString().split("T")[0]; //date iso format
}

// prend un nombre et donne la date ajd 
export const numberToDate = (number:number):string => {
    const today = new Date();
    if(number===0){
        return dateToString(today)
    } else {
        return dateToString(new Date(today.setDate(today.getDate() - number)));
    }
}