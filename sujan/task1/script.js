var input = document.getElementById('myInput');
var buttonAdd = document.getElementById('buttonAdd');
var mylist = document.getElementById('listItems');
var items = document.getElementsByTagName('li');


buttonAdd.addEventListener('click', function(){
    var txt = input.value;
    if(txt == ""){
        alert('you must write something');
    }else{
        li = document.createElement('li');
        li.innerHTML = txt;
        var leng = mylist.length;
        mylist.insertBefore(li, mylist.childNodes[leng]);
        input.value = "";

    }
})


mylist.addEventListener('click', function(ev){
    ev.target.classList.toggle('checked');
})

