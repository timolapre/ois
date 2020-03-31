function registered() {
    var el = document.getElementById('registered');
    var text = document.createTextNode("Succesfully registered. Now please login.")
    el.appendChild(text);

    var button = document.getElementById('registerbutton');
    button.disabled = true;
}

function toggleStar(starid) {
    var star = document.getElementById(starid);
    if (star.className == "glyphicon glyphicon-star-empty star") {
        star.className = "glyphicon glyphicon-star star";
    } else {
        star.className = "glyphicon glyphicon-star-empty star";
    }
}

function copyURL() {
    var dummy = document.createElement('input'),
        text = window.location.href;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert("Copied the url. share with anyone");
}

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function uncheck(id){
    var el = document.getElementById(id);
    el.checked = false;
}