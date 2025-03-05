document.getElementById("test").addEventListener("click", e => {
    alert("Hello world");
    browser.runtime.sendMessage({action: "greet"}, response => {
        console.log("Response from the background: " + response);
        
    })
});