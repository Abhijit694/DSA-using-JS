function printIntegerRev(n){
    if(n<1) return

    console.log(n);
    printIntegerRev(n-1)
}

printIntegerRev(5)