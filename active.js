const dropDown = document.querySelector('.dropDownInner');
const dropDownBtn = document.querySelector('.dropDownInner .dropDownBtn');
const dropDownMenu = document.querySelector('.dropDownMenu');
const list = document.querySelectorAll('.langList');
// const listOn = list.classList.('on');
const country = document.querySelector('.langList > p');
const lang = document.querySelector('.langList > span');


dropDownBtn.addEventListener('click', () => {
    dropDownMenu.classList.toggle('active');
})

function dropDownList(){
    if(listOn){
        dropDownBtn.innerHTML = country + ', ' + lang;
    }
}

console.log(dropDownBtn.innerHTML);