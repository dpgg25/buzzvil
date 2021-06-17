const html = document.querySelector('html');
const body = document.querySelector('body');
const openhamBtn = document.querySelector('.m_layout .hd_wrap .ham_menu');
const closehamBtn = document.querySelector('.m_layout .gnb_wrap .ham_menu');
const gnbMenu = document.querySelector('.m_layout .gnb_wrap');
const gnbfirstUl = document.querySelector('.m_layout .gnb_wrap .gnb_menu > ul');
const gnbA = document.querySelector('.m_layout .gnb_wrap .gnb_menu > ul > li > a');
const gnbsecondUl = document.querySelector('.m_layout .gnb_wrap .gnb_menu > ul > li > ul');
const headerbar = document.querySelector(".m_layout .hd_wrap");
openhamBtn.addEventListener('click', openHam, false);
closehamBtn.addEventListener('click', closeHam, false);
gnbfirstUl.addEventListener('click', openGnb, false);

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

function headerbarToggle() {
  var topScroll = headerbar.offsetTop;
  var currentScroll = window.pageYOffset;
  if (topScroll < currentScroll) {
    headerbar.classList.add('scroll');
  } else {  
    headerbar.classList.remove('scroll');
  }
};

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