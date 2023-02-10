// Listen for messages


chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    console.log(msg);
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        var tablesObj = document.getElementsByTagName("table");
        var tableObj = tablesObj[0];
        var tableInfo = ""
        for (var i = 0; i < tableObj.rows.length; i++) {    //遍历Table的所有Row
            for (var j = 0; j < tableObj.rows[i].cells.length; j++) {   //遍历Row中的每一列
                tableInfo += tableObj.rows[i].cells[j].innerText;   //获取Table中单元格的内容
                tableInfo += "   ";
            }
            tableInfo += "\n";
        }
        console.log(tableInfo);
        sendResponse(tableInfo);
    }
});