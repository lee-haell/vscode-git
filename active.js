const body = document.body;
const dropDown = document.querySelector('.dropDownInner');
const dropDownBtn = document.querySelector('.dropDownInner .dropDownBtn');
const dropDownMenu = document.querySelector('.dropDownMenu');
const list = document.querySelectorAll('.lang');
const langChoose = document.querySelector('.langChoose');
const country = document.querySelector('.langList > p');
const lang = document.querySelector('.langList > span');
const passwordIcon = document.querySelector('.passwordShowHide');
const password = document.getElementById('userPassword');


dropDownBtn.addEventListener('click', () => {
    dropDownMenu.classList.toggle('on');
});

function dropDownList(){
    const activeItem = document.querySelector('.langList.on');
    if(activeItem){
        const country = activeItem.querySelector('p')?.textContent || '';
        const lang = activeItem.querySelector('span')?.textContent || '';
        dropDownBtn.innerHTML = `${country}, ${lang}`;
    }
}

dropDownList();

list.forEach(item =>{
    item.addEventListener('click', () => {
        langChoose.classList.remove('hide');
        dropDownMenu.classList.add('active');
        body.classList.add('active');
    });
});

passwordIcon.addEventListener('click', () => {
    passwordIcon.classList.toggle('active');

    if(passwordIcon.classList.contains('active')){
        password.type = 'text';
    } else {
        password.type = 'password';
    }
}); 




// console.log(password.type);