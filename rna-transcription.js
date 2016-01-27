var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(str) {
  var finalStr = '';
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'G') {
      finalStr += 'C';
    } else if (str.charAt(i) === 'C') {
      finalStr += 'G';
    } else if (str.charAt(i) === 'T') {
      finalStr += 'A';
    } else if (str.charAt(i) === 'A') {
      finalStr += 'U';
    }
  }
  return finalStr;
};

DnaTranscriber.prototype.toDna = function(str) {
  var finalStr = '';
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'C') {
      finalStr += 'G';
    } else if (str.charAt(i) === 'G') {
      finalStr += 'C';
    } else if (str.charAt(i) === 'A') {
      finalStr += 'T';
    } else if (str.charAt(i) === 'U') {
      finalStr += 'A';
    }
  }
  return finalStr;
};


module.exports = DnaTranscriber;