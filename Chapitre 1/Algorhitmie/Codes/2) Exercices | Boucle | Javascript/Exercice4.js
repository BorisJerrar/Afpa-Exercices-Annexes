function meliMelo(a,b,c){
b = b + a;
a = b - a;
b = b - a;
c = c + a;
a = c - a;
c = c - a;
console.log(a + " " + b + " " + c)
}
meliMelo(1,2,3);