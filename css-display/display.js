function display(prop) {
    let elem = document.getElementsByClassName('b');
    if (prop === 'disp') {
        elem[0].classList = 'myblock b none inline-block';
        document.getElementsByClassName('text')[0].innerHTML = 'display:none will remove the block from the view thereby the red box will take up the empty space. However the element exists in the HTML structure. It appears as though the element has been removed.'
    } else if (prop === 'visibility') {
        elem[0].classList = 'myblock b hidden inline-block';
        document.getElementsByClassName('text')[0].innerHTML  = 'visibility:hidden will just make the element invisible, but the space taken by the (purple) box remains as it is.'
    }
}

function changeDisplay(type){
    if(type === 'inline'){
        let elem = document.getElementsByClassName('myblock');
        for (let item of elem) {
            item.classList.remove('block');
            item.classList.remove('inline-block');
            item.classList.add('inline');
        }
        document.getElementsByClassName('text')[0].innerHTML = 'With display inline the p tags are stacked next to each other and the width and height properties take no effect.'
    }
    if(type === 'inline-block'){
        let elem = document.getElementsByClassName('myblock');
        for (let item of elem) {
            item.classList.remove('block');
            item.classList.remove('inline');
            item.classList.add('inline-block');
        }
        document.getElementsByClassName('text')[0].innerHTML = 'As we can understand from its name, display: inline-block declaration shows both the characteristics of inline and block-level elements.\
        In other words, we can think of an inline element, that width & height properties can be set, or we can think of a block-level element, that doesn’t have to start with a new line.'
    }
    if(type === 'block'){
        let elem = document.getElementsByClassName('myblock');
        for (let item of elem) {
            item.classList.remove('inline-block');
            item.classList.remove('inline');
            item.classList.add('block');
        }
        document.getElementsByClassName('text')[0].innerHTML = 'With display block property each p tags starts from a new line and the width and height properties takes effect.'
    }
}