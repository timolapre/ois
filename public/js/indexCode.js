function goToOptionsPage() {
    var checkboxes = document.getElementsByClassName("checkbox");
    var companies = ""
    for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            companies += checkboxes[i].id + ",";
        }
    }
    companies = companies.substring(0, companies.length - 1);
    location.href = 'data2?companies=' + companies;
}

function goToComparePage() {
    var checkboxes = document.getElementsByClassName("checkbox");
    var options = ""
    for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            options += checkboxes[i].id + ",";
        }
    }
    options = options.substring(0, options.length - 1);
    location.href = 'data3' + window.location.search + '&options=General,Content,' + options;
}

function getCompanies() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const companies = urlParams.get('companies').split(",");
    return companies;
}

function getOptions() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const options = urlParams.get('options').split(",");
    return options;
}

function setCompanyNames() {
    var companies = getCompanies();
    var companynames = document.getElementById('companynames');
    var colsms = getColsm();
    colsm1 = colsms[0];
    colsm = colsms[1];

    div = document.createElement('div');
    div.className = "col-sm-" + colsm1;
    companynames.appendChild(div);

    for (i = 0; i < companies.length; i++) {
        div = document.createElement('div');
        div.className = "col-sm-" + colsm;
        h2 = document.createElement('h2');
        text = document.createTextNode(companies[i]);
        h2.appendChild(text);
        div.appendChild(h2);
        companynames.appendChild(div);
    }
}

function getColsm() {
    var count = getCompanies().length;
    var colsm1 = 4;
    var colsm = 4;
    if (count == 1) {
        colsm1 = 6;
    }
    else if (count > 2) {
        colsm1 = 3;
    }

    if (count == 1) {
        colsm = 5;
    } else if (count == 2) {
        colsm = 4;
    } else if (count == 3) {
        colsm = 3;
    } else if (count == 4) {
        colsm = 2;
    }
    return [colsm1, colsm];
}

function search() {
    console.log("zoeken naar niks want dit werkt nog niet joe");
}

function selectAllGeneral() {
    setTimeout(function () {
        var checked = document.getElementById("checkboxgeneralall").checked;
        var generalOptions = document.getElementsByClassName("checkboxgeneral");
        if (checked) {
            for (i = 0; i < generalOptions.length; i++) {
                generalOptions[i].checked = true;
            }
        } else {
            for (i = 0; i < generalOptions.length; i++) {
                generalOptions[i].checked = false;
            }
        }
        checkIfOptionsSelected();
    }, 1);
}

function selectAllContent() {
    setTimeout(function () {

        var checked = document.getElementById("checkboxcontentall").checked;
        var contentOptions = document.getElementsByClassName("checkboxcontent");
        if (checked) {
            for (i = 0; i < contentOptions.length; i++) {
                contentOptions[i].checked = true;
            }
        } else {
            for (i = 0; i < contentOptions.length; i++) {
                contentOptions[i].checked = false;
            }
        }
        checkIfOptionsSelected();
    }, 1);
}

function checkIfCompaniesSelected() {
    var checkboxes = document.getElementsByClassName("checkbox");
    var count = 0;
    var companies = ""
    for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            companies += checkboxes[i].id + ",";
            count++;
        }
    }
    companies = companies.substring(0, companies.length - 1);
    var button = document.getElementById("continuebutton");
    if (count > 0 && count <= 4) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

function checkIfOptionsSelected() {
    var checkboxes = document.getElementsByClassName("checkbox");
    var count = 0;
    var companies = ""
    for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            companies += checkboxes[i].id + ",";
            count++;
        }
    }
    companies = companies.substring(0, companies.length - 1);
    var button = document.getElementById("continuebutton");
    if (count > 0) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}