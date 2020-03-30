function registered(){
    var el = document.getElementById('registered');
    var text = document.createTextNode("Succesfully registered. Now please login.")
    el.appendChild(text);

    var button = document.getElementById('registerbutton');
    button.disabled = true;
}

function toggleStar(starid){
    var star = document.getElementById(starid);
    if(star.className == "glyphicon glyphicon-star-empty star"){
        star.className = "glyphicon glyphicon-star star";
    } else{
        star.className = "glyphicon glyphicon-star-empty star";
    }
}