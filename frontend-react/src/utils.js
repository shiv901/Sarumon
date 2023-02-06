// ! Fill the missing data
export function fillMissingData(data) {
  if (+data[0].number !== 1) {
    data.unshift({ number: "001" })
  }

  for (let i = 1; i <= data.length; i++) {
    if (i !== +data[i - 1].number) {
      data.splice(i - 1, 0, { number: ('00' + i).slice(-3) })
    }
  }
  return data
}

function addIndent(nSpaces) {
  var strOutput = '';
  for (var i = 0; i < nSpaces; i++) {
    strOutput += '--';
  }
  return strOutput;
}

export function parseObjToStr(oObject, nLevel) {
  var strOutput = '';
  nLevel = nLevel || 0;

  for (var oEl in oObject) {
    if (typeof oObject[oEl] === 'object' || Object.prototype.toString.call(oObject[oEl]) === '[object Array]') {
      strOutput += addIndent(nLevel) + oEl + "<br />";
      strOutput += parseObjToStr(oObject[oEl], nLevel + 1);
    }
    else {
      strOutput += addIndent(nLevel) + oEl + " = " + oObject[oEl] + "<br />";
    }
  }
  return strOutput;
}