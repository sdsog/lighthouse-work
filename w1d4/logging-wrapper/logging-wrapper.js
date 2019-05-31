var wrapLog = function (callback, name, x, y, z) {

  if (name === "area") {
  	var areaDone = callback(x , y);
  	console.log(name + "(" + x +", "+ y +") => " + areaDone);
  } else {
  	var areaDone = callback(x , y, z);
  	console.log(name + "(" + x +", "+ y + ", " + z + ") => "  + areaDone);
  }

}; 

var area = function (x, y) {
  return x * y;
};


wrapLog(area, "area", 5, 3); // area(5, 3) => 15
wrapLog(area, "area", 3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};

wrapLog(volume, "volume", 5, 3, 2); // volume(5, 3, 2) => 30
wrapLog(volume, "volume", 3, 2, 4); // volume(3, 2, 4) => 24