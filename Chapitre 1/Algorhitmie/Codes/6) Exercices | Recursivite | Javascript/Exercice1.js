function hundred(n){
    if(n===0){
        return 0
    }
    else{
        console.log(n)
        return hundred(n-1)
    }
}
console.log(hundred(100))