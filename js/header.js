const html = document.querySelector('html');
const body = document.querySelector('body');
const openhamBtn = document.querySelector('.m_layout .hd_wrap .ham_menu');
const closehamBtn = document.querySelector('.m_layout .gnb_wrap .ham_menu');
const gnbMenu = document.querySelector('.m_layout .gnb_wrap');
const gnbfirstUl = document.querySelector('.m_layout .gnb_wrap .gnb_menu > ul');
const gnbA = document.querySelector('.m_layout .gnb_wrap .gnb_menu > ul > li > a');
const gnbsecondUl = document.querySelector('.m_layout .gnb_wrap .gnb_menu > ul > li > ul');
// const header = document.querySelector(".hd_wrap");
// const headerHeight = header.getBoundingClientRect().height;
openhamBtn.addEventListener('click', openHam, false);
closehamBtn.addEventListener('click', closeHam, false);
gnbfirstUl.addEventListener('click', openGnb, false);
// window.addEventListener('scroll', scrollMenu, false);

function openHam() {
  body.classList.add('menu_scroll_hidden');
  html.classList.add('menu_scroll_hidden');
  gnbMenu.classList.add('on');
}

function closeHam() {
  body.classList.remove('menu_scroll_hidden');
  html.classList.remove('menu_scroll_hidden');
  gnbMenu.classList.remove('on');
}

// function scrollMenu() {
//   if (window.scrollY > headerHeight) {
//     header.classList.add('scroll');
//   } else {  
//     header.classList.remove('scroll');
//   }
// }; 왜 안 돼

function openGnb(e) {
  e.preventDefault();
  if (e.target.tagName !== 'A') return;

  for (let i = 0; i < gnbA.length; i++) {
    gnbA[i].classList.remove('on');
    gnbsecondUl[i].classList.remove('on');
  }

  let targetName = e.target.classList.item(0);
    e.target.classList.add('on');
    for (let i = 0; i < gnbsecondUl.length; i++) {
      if(gnbsecondUl[i].classList.contains(targetName)) {
        gnbsecondUl[i].classList.add('on');
      }
    }
}