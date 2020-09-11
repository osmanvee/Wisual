/*
@param: hex string value including '#'
@return: console log of R, G, B values
**/
function HextoRGBvalues(hex) {
  //Output format: RRRGGGBBB
 var char1 = hex[0];
 var r1 = hex[1];
 var r2= hex[2];
 var g1 = hex[3];
 var g2 = hex[4];
 var b1 = hex[5];
 var b2 = hex[6]; 

 var rTotal = (convertToDecimal(r1) * 16 ) + convertToDecimal(r2);



 var gTotal = (convertToDecimal(g1) * 16 ) + convertToDecimal(g2);

 var bTotal = (convertToDecimal(b1) * 16 ) + convertToDecimal(b2);


 return "rgb("+rTotal+","+gTotal+","+bTotal+")"
 



}
/*
@param: hex string value including '#'
@return: Red decimal value 
**/
function convertHexToRed(hex) {
  var r1 = hex[1];
  var r2= hex[2];

  var rTotal = (convertToDecimal(r1) * 16 ) + convertToDecimal(r2);

  return rTotal;
}

/*
@param: hex string value including '#'
@return: Green decimal value 
**/
function convertHexToGreen(hex) {
  var g1 = hex[3];
  var g2 = hex[4];

  var gTotal = (convertToDecimal(g1) * 16 ) + convertToDecimal(g2);

  return gTotal;
}

/*
@param: hex string value including '#'
@return: Blue decimal value 
**/
function convertHexToBlue(hex) {
  var b1 = hex[5];
  var b2 = hex[6]; 

  var bTotal = (convertToDecimal(b1) * 16 ) + convertToDecimal(b2);

  return bTotal;
}

function checkHighestVal(hex) {
  var r = convertHexToRed(hex);
  var g = convertHexToGreen(hex);
  var b = convertHexToBlue(hex);

  if ( Math.max(r, g, b) == r) {
    return 1;
  } else if ( Math.max(r, g, b) == g) {
    return 2;
  } else if (Math.max(r, g, b) == b) {
    return 3;
  }
}

/*
@param: hexadecimal value
@return: decimal value 
**/
function convertToDecimal(val) {
  return  parseInt(val, 16);
}


/*
Testing Examples:
HextoRGBvalues('#825959');

console.log("--Red Value is: "+convertHexToRed('#825959') );

HextoRGBvalues('#825959');
console.log("Hex Value is:"+ rgbToHex(130, 89, 89));
**/

//Converts RGB to Hex String
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}



export {
  convertHexToRed,
  convertHexToGreen,
  convertHexToBlue,
  rgbToHex,
  HextoRGBvalues,
  checkHighestVal
};