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
    var link = 'https://oisddd5.herokuapp.com/data3?'
    link += "companies=" + getCompanies();
    link += '&options=';

    var checkboxes = document.getElementsByClassName("checkbox");
    var options = ""
    for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            options += checkboxes[i].parentNode.id + ",";
        }
    }
    options = options.substring(0, options.length - 1);
    var tree = '';
    link += "Content,";
    link += options;

    console.log(link);

    dummy = document.createElement('input'),
        text = link;
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

    alert("Copied URL with data you want to share to clipboard. You can now share the link with anyone you want.");
}

/* Open when someone clicks on the span element */
function openNav(nav) {
    if (!nav) {
        nav = 'myNav';
    }
    document.getElementById(nav).style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav(nav) {
    document.getElementById(nav).style.width = "0%";
}

function uncheck(id) {
    var el = document.getElementById(id);
    el.checked = false;
}