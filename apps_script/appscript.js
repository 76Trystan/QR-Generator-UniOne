function doGet(e) {
  var ticketId = e.parameter.id;
  if (!ticketId) {
    return HtmlService.createHtmlOutput("<h2>No ticket ID provided!</h2>");
  }
  
  var lock = LockService.getDocumentLock(); // Lock sheet for atomic access
  lock.waitLock(2000); // Wait up to 2 seconds for other processes to finish
  
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Tickets"); // Sheet name // change as needed
    var data = sheet.getDataRange().getValues();


    // these columns can be adjusted based on your sheet structure
    for (var i = 1; i < data.length; i++) {
      if (data[i][0] == ticketId) { // Ticket ID in column A
        var status = data[i][3]; // Status in column D
        if (status == "Checked In") {
          return HtmlService.createHtmlOutput("<h2>Ticket already used!</h2>");
        } else {
          sheet.getRange(i+1, 4).setValue("Checked In");
          return HtmlService.createHtmlOutput("<h2>Ticket valid! Welcome, " + data[i][1] + "</h2>");
        }
      }
    }
    return HtmlService.createHtmlOutput("<h2>Ticket not found!</h2>");
    
  } finally {
    lock.releaseLock(); // Always release lock
  }
}
