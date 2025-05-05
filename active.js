//변수 선언
const body = document.body;
const dropDown = document.querySelector('.dropDownInner');
const dropDownBtn = document.querySelector('.dropDownInner .dropDownBtn');
const dropDownMenu = document.querySelector('.dropDownMenu');
const dropDownListTitle = document.querySelector('.dropDownListTitle');
const list = document.querySelectorAll('.lang');
const langChoose = document.querySelector('.langChoose');
const country = document.querySelector('.langList > p');
const lang = document.querySelector('.langList > span');
const passwordIcon = document.querySelector('.passwordShowHide');
const password = document.getElementById('userPassword');


//Locale Dropdown 선택된 국가, 언어 노출
function dropDownList(){
    const activeItem = document.querySelector('.langList.on');
    if(activeItem){
        const country = activeItem.querySelector('p')?.textContent || '';
        const lang = activeItem.querySelector('span')?.textContent || '';
        dropDownBtn.innerHTML = `${country}, ${lang}`;
    }
}

dropDownList();

//Locale Dropdown 토글 클릭 이벤트
dropDownBtn.addEventListener('click', () => {
    dropDownMenu.classList.toggle('hide');
});

//Locale Dropdown 리스트 클릭 이벤트
list.forEach(item =>{
    item.addEventListener('click', () => {
        langChoose.classList.remove('hide');
        dropDownMenu.classList.add('active');
        body.classList.add('active');
    });
});

//password show, hide 아이콘 클릭 시, input type 변경
passwordIcon.addEventListener('click', () => {
    passwordIcon.classList.toggle('active');

    if(passwordIcon.classList.contains('active')){
        password.type = 'text';
    } else {
        password.type = 'password';
    }
}); 

//Locale Dropdown 창 닫기 클릭 이벤트
dropDownListTitle.addEventListener('click', () => {
    dropDownMenu.classList.add('hide');
});