// TC -: O(n)
// SC -: O(n)

function printName(num,str){
    if(num < 1) return

    console.log(str);
    printName(num-1,str)
}

printName(3,"Abhijit")