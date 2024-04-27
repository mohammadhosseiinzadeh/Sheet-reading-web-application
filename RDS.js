//This code receives the row and column values ​​and reads the corresponding data from the sheet and returns it to the Jason form.

function doGet(request) {
  var num1 = request.parameter.num1;
  var num2 = request.parameter.num2;
  var resulti=0
  var resultj=0

  var ss = SpreadsheetApp;
  var ass = ss.getActiveSpreadsheet();
  var as = ass.getActiveSheet();
  var j = 1;

  for (var i = 2; i < 16; i++) {
    if ((num1 >= as.getRange(i,j).getValue()) && (num1 < as.getRange(i+1,j).getValue())){
          resulti=i;
          break;
    }   
  }

  i=1;
  
  for (var j = 2; i < 12; j++) {
    if ((num2 >= as.getRange(i,j).getValue()) && (num2 < as.getRange(i,j+1).getValue())){
          resultj=j;
          break;
    }   
  }

//  return ContentService.createTextOutput(as.getRange(resulti,resultj).getValue().toString());
/*  Logger.log(num1);
  Logger.log(num2);
  Logger.log(resulti);
  Logger.log(resultj);
  console.log('number1', num1);
  console.log('number2', num2);
  console.log('resulti', resulti);
  console.log('resultj', resultj); */

  var response = {
    'dosage':as.getRange(resulti,resultj).getValue()
  };
/*
  var response = {
    'num1':num1,
    'num2':num2
  };
*/
  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}





/*
function doGet(request) {
  var num1 = Number(request.parameters.num1);
  var num2 = Number(request.parameters.num2);
  
  var sum = num1 + num2;
  
  var response = {
    sum: sum
  };
  
return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}
*/