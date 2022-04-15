//function for writing a comment youtube page
function getComment(){
    var inputField = document.getElementById("myInput");
    var val = inputField.value;

    inputField.onselect = () =>{
        inputField.style.borderWidth = "0 0 1px 0";
        inputField.style.fontSize = "40px";
    }

    return val;
}

document.getElementById("add").onclick = function(){
    document.getElementById("my-comment").innerHTML = getComment();
};

(function () {
    
    var sideBar = document.getElementById("side-bar");
    sideBar.innerHTML = '<div class="logo">' +
                            '<span class="more" id="more1">☰</span>' +
                            '<span class="image"><img src="/images/logo.png" alt="youtube logo" title="youtube logo"></span>' +
                        '</div>';
    sideBar.style.border = "2px solid #a5a5cb";
    sideBar.style.height = "500px";
    sideBar.style.width = "0";
    sideBar.style.position = "absolute";
    sideBar.style.transition = "200ms";
    
    sideBar.style.background = "#ffffff";

    var more1 = document.getElementById("more");
    more1.onclick = () =>{
        if (sideBar.style.width === "0") {
            sideBar.style.width = "12rem";
        }
        else {
            sideBar.style.width = "12rem";
            sideBar.style.padding = "4px 40px 0 45px";
            more1.style.visibility = "hidden";
        }
    };

    var more = document.getElementById("more1");
    more.onclick = function () {

        if (sideBar.style.width === "12rem") {
            sideBar.style.width = "0";
            sideBar.style.padding = "0";
            more1.style.visibility = "visible";
        } 
        // else {
        //     sideBar.style.width = "12rem";
        // }
    };
   
})();