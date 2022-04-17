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
                        '</div>' +
                        '<div class="my-list1" id="my-list1">' +
                                '<ul>' +
                                    '<li><a href="#">Home</a></li>' +
                                    '<li><a href="#">Eplore</a></li>' +
                                    '<li><a href="#">Shorts</a></li>' +
                                    '<li><a href="#">subscriptions</a></li>' +
                                    '<li><a href="#">Library</a></li>' +
                                    '<li><a href="#">History</a></li>' +
                                '</ul>' +
                        '</div>';
                        
                         
    sideBar.style.border = "2px solid #a5a5cb";
    sideBar.style.height = "500px";
    sideBar.style.width = "0";
    sideBar.style.position = "absolute";
    sideBar.style.transition = "200ms";
    sideBar.style.background = "#ffffff";

    var more = document.getElementById("more");
    more.onclick = () =>{
        if (sideBar.style.width === "0") {
            sideBar.style.width = "12rem";
        }
        else {
            sideBar.style.width = "12rem";
            sideBar.style.padding = "4px 40px 0 45px";
            more.style.visibility = "hidden";

            // sideBar.innerHTML += '<div class="my-list1" id="my-list1">' +
            //                         '<ul>' +
            //                             '<li><a href="#">Home</a></li>' +
            //                             '<li><a href="#">Eplore</a></li>' +
            //                             '<li><a href="#">Shorts</a></li>' +
            //                             '<li><a href="#">subscriptions</a></li>' +
            //                             '<li><a href="#">Library</a></li>' +
            //                             '<li><a href="#">History</a></li>' +
            //                         '</ul>' +
            //                     '</div>';
        }
    };

    var more1 = document.getElementById("more1");
    more1.onclick = function () {

        if (sideBar.style.width === "12rem") {
            sideBar.style.width = "0";
            sideBar.style.padding = "0";
            more.style.visibility = "visible";
        } 
        // else {
        //     sideBar.style.width = "12rem";
        // }
    };
   
})();