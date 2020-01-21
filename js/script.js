let text = document.querySelector('.text');
let edit = document.querySelector('.edit');
let save = document.querySelector('.save');
let cancel = document.querySelector('.cancel');
let localText = localStorage.getItem('savedText');

if(localStorage.length != 0) {
    if(localText == ''){
        localStorage.setItem('savedText', text.innerText);
    } else {
        text.innerText = localText;
    }
}

edit.addEventListener('click', function() {
    text.setAttribute('contenteditable', 'true');
    save.removeAttribute('disabled');
    cancel.removeAttribute('disabled');
    edit.setAttribute('disabled', 'disabled');
});

save.addEventListener('click', function() {
    localStorage.removeItem('savedText');
    localStorage.setItem('savedText', text.innerText);
    edit.removeAttribute('disabled');
    save.setAttribute('disabled', 'disabled');
    cancel.setAttribute('disabled', 'disabled');
});

cancel.addEventListener('click', function() {
    text.innerText = localText;
    edit.removeAttribute('disabled');
    save.setAttribute('disabled', 'disabled');
    cancel.setAttribute('disabled', 'disabled');
});