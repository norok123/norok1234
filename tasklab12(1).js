// script.js

function openNewWindow() {
    // Текст, который будет отображаться в новом окне
    var newText = "Новое окно с некоторым текстом";
    
    // Открыть новое окно с текстом
    var newWindow = window.open("", "_blank", "width=400,height=200");
    newWindow.document.write("<p>" + newText + "</p>");
}
