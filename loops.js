function forLoop(myArray){
  for (var i = 1; i < 25; i++){
  if (i===0){
    myArray.push("I am 1 strange loop.")}
  else{
   myArray.push("I am " + i + " strange loops.") 
  }}
  return myArray
}

function whileLoop(number){
  
while (number>0){
        console.log(number--);
if (number===0){
  return 'done'
}
    }
}