// Book Class 

class Book {

    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


// UI Class - handle all UI stuff

class UI {

    addBookToList(book) {
        let bodySkeleton = document.getElementById('addedBookRecord');

        //build book record row

        let tr = document.createElement('tr');
        let td = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td class="delete" ><a href="">X</a></td>`;

        tr.innerHTML = td;
        bodySkeleton.appendChild(tr);
        let hr = document.createElement('hr');
        hr.style = "width:90%";
        bodySkeleton.appendChild(hr);
    }

    clearFields() {
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('isbn').value = "";
    }

    alertMessage(msg, className) {
        let div = document.createElement('div');
        div.appendChild(document.createTextNode(msg));
        div.className = className;

        let containerDOmElem = document.querySelector('.addBookContainer');
        let formDOMElem = document.querySelector('#addBookForm');

        containerDOmElem.insertBefore(div, formDOMElem);

        setTimeout(function () {
            document.querySelector(`.${className}`).remove();
        }, 3000);

    }


}


document.getElementById('submitBookBtn').addEventListener('click', function (e) {


    let form = new FormData(document.getElementById('addBookForm'));


    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);

    const ui = new UI();
    if (title === '' || author === '' || isbn === '') {
        ui.alertMessage('All fields are mandatory', 'error');
    } else {
        ui.addBookToList(book);
        ui.clearFields();
        ui.alertMessage('Book Successfully Added !', 'success');
    }

});


//

document.getElementById("bookListTable").addEventListener('click', function (e) {
    e.target.parentElement.parentElement.nextSibling.remove();
    e.target.parentElement.parentElement.remove();

    e.preventDefault();
});
