// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  var i = 0;
  arr.forEach(function(element) {
    // console.log(element)
    // console.log(i);
    if (element === "Waldo") {
      var name = "Waldo"
      found(name, i);   // execute callback
    }
    i++;
  });
}
function actionWhenFound(name, i) {
  console.log("Found " + name + " at index " + i + "!");
}
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);




