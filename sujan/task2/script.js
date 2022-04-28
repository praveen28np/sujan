var txtName = document.getElementById('inputName');
var txtEmail = document.getElementById('inputEmail');
var radioMale = document.getElementById('radMale');
var radioFemale = document.getElementById('radFemale');
var checkHTML = document.getElementById('chkHTML');
var checkCSS = document.getElementById('chkCSS');
var checkJavascript = document.getElementById('chkJavascript');
var buttonSubmit = document.getElementById('btnSubmit');
var buttonReset = document.getElementById('btnReset');
var containOut = document.getElementById('containerOutput');

buttonReset.addEventListener('click', function(){
    txtName.value = "";
    txtEmail.value = "";
    radioMale.checked = false;
    radioFemale.checked = false;
    checkHTML.checked = false;
    checkCSS.checked = false;
    checkJavascript.checked = false;
})

buttonSubmit.addEventListener('click', function(){
    const cont = document.createElement('p');
    const contVal = document.createTextNode(txtName.value);
    cont.appendChild(contVal);
    containOut.append(cont);
    cont.setAttribute('class','name');

    const cont2 = document.createElement('p');
    const contVal2 = document.createTextNode(txtEmail.value);
    cont2.appendChild(contVal2);
    containOut.append(cont2);
    cont2.setAttribute('class','others');

    if(radioMale.checked == true){
        const cont3 = document.createElement('p');
        const contVal3 = document.createTextNode("Male");
        cont3.appendChild(contVal3);
        containOut.append(cont3);
        cont3.setAttribute('class','others');
    }
    if(radioFemale.checked == true){
        const cont3 = document.createElement('p');
        const contVal3 = document.createTextNode("Female");
        cont3.appendChild(contVal3);
        containOut.append(cont3);
        cont3.setAttribute('class','others');
    }

    if(checkHTML.checked == true){
        const cont4 = document.createElement('p');
        const contVal4 = document.createTextNode("HTML");
        cont4.appendChild(contVal4);
        containOut.append(cont4);
        cont4.setAttribute('class','others');
    }
    if(checkCSS.checked == true){
        const cont4 = document.createElement('p');
        const contVal4 = document.createTextNode("CSS");
        cont4.appendChild(contVal4);
        containOut.appendChild(cont4);
    }
    if(checkJavascript.checked == true){
        const cont4 = document.createElement('p');
        const contVal4 = document.createTextNode("Javascript");
        cont4.appendChild(contVal4);
        containOut.appendChild(cont4);
    }

    const contLine = document.createElement('hr');
    containOut.append(contLine);
})