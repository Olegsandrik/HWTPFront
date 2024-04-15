// Возможно ли реализовать такое? 
 
var a = { 
 value:1, 
 toString: function(){ 
 return a.value++; 
 } 
}; 
 
 
 
// Проверка 
console.log(a == a); // true 
console.log(a < a); // true
