function forLoop(myArray){
for (var i = 1; i < 100; i++){
  console.log("Hello World the " + i + " time")
}
}

function whileLoop(number){
  while (number>0){
    console.log(number--)
    if (number=0){
      return 'done'
    }
  }
}