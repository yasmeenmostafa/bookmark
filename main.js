var nameinput = document.getElementById('sitename');
var linkinput = document.getElementById('siteurl');
var books = [];
if (localStorage.getItem("books") != null) {
    books = JSON.parse(localStorage.getItem("books"))
    display();
}

function add() {
    document.getElementById('nameempty').innerHTML = "";
    document.getElementById('linkempty').innerHTML = "";
    if (nameinput.value == "" && linkinput.value == "") {
        x = document.getElementById('nameempty');
        x.innerHTML = "Book Name is required"
        y = document.getElementById('linkempty');
        y.innerHTML = "Book URL is required"
    }
    
    else if (linkinput.value == "") {
        x = document.getElementById('linkempty');
        x.innerHTML = "Book URL is required"
    }
    else if (nameinput.value == "") {
        x = document.getElementById('nameempty');
        x.innerHTML = "Book Name is required"
    }
    else if (validatename() == false) {
        x = document.getElementById('nameempty');
        x.innerHTML = "Book Name is already exist"
    } 
    else if (validatelink() == false) {
        x = document.getElementById('linkempty');
        x.innerHTML = "Book URL is already exist"
    }


    else {
        var book = {
            bookname: nameinput.value,
            sitename: linkinput.value
        }
        books.push(book)


        localStorage.setItem("books", JSON.stringify(books))
        clear()
        display()

    }
}




function display() {
    cartona = ``;
    for (var i = 0; i < books.length; i++) {
        cartona += `<div class="bg-opacity-10 rounded-2 bg-black m-4 text-center text-black p-3 row align-items-center">
        <div class="col-4">
            <p>${books[i].bookname}</p>
        </div>
        <button class="btn btn-info m-3 py-2 px-3 fs-6 col-1"  onclick="visit(${i})">visit</button>
        <button class="btn btn-danger m-3 py-2 px-3 fs-6 col-1" onclick="deletebook(${i})">delete</button>

    </div>
`
    }
    document.getElementById("books").innerHTML = cartona;
}
function clear() {
    nameinput.value = "";
    linkinput.value = "";
}
function deletebook(index) {
    books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books))
    display()
}
function visit(i) {
    window.open(books[i].sitename)
}
function validatename() {
    var regex =/^[^\s]/;
    if (regex.test(nameinput.value) == true)
        return true
    else
        return false;
}
function validatelink() {
    var regex =/^[^\s]/;
    if (regex.test(linkinput.value) == true)
        return true
    else
        return false;
}