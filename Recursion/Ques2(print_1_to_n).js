function printInteger(n){
    if(n<1) return
    printInteger(n-1)
    console.log(n);
}

printInteger(5)