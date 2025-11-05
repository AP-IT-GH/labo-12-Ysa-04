"use strict";

let text =
  "De winnende lottonummers van deze week: 05,09,13,18,27,44. Proficiat aan alle deelnemers.";

let startIndex = text.indexOf("05");
let endIndex = text.indexOf(".")
let formattedLottoNumbers = text.substring(startIndex,endIndex).replaceAll(",","|");
console.log(formattedLottoNumbers);
