const str = "bob";
console.log([...str].reverse().join("") === str)
// [...str] = ["b", "o", "b"] |-| on reverse |-| on join |-| true ou false