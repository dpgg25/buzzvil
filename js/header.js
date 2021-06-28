const html = document.querySelector('html');
const body = document.querySelector('body');
const openhamBtn = document.querySelector('.m_layout .hd_wrap .ham_menu');
const closehamBtn = document.querySelector('.m_layout .gnb_wrap .logo_wrap > img');
const gnbMenu = document.querySelector('.m_layout .gnb_wrap');
const gnbfirstUl = document.querySelector('.m_layout .gnb_wrap .gnb_menu > ul');
const gnbA = document.querySelectorAll('.m_layout .gnb_wrap .gnb_menu > ul > li > .gnb_open');
const gnbOpenUl = document.querySelectorAll('.m_layout .gnb_wrap .gnb_menu > ul > li > ul');
const headerbarPc = document.querySelector('.pc_layout .hd_wrap');
const headerbarM = document.querySelector('.m_layout .hd_wrap');
const languegeBtn = document.querySelector('.hd_wrap .gnb_menu .lang .arrow');
openhamBtn.addEventListener('click', openHam, false);
closehamBtn.addEventListener('click', closeHam, false);
gnbfirstUl.addEventListener('click', openGnb, false);
body.addEventListener('scroll', timer);


function openHam() {
  body.classList.add('menu_scroll_hidden');
  html.classList.add('menu_scroll_hidden');
  gnbMenu.classList.add('on');
}

function closeHam() {
  for (let i = 0; i < gnbA.length; i++) {
    gnbA[i].classList.remove('on');
    gnbOpenUl[i].classList.remove('on');
  }
  body.classList.remove('menu_scroll_hidden');
  html.classList.remove('menu_scroll_hidden');
  gnbMenu.classList.remove('on');
}

let alarm;
function timer() {
  var currentScroll = window.pageYOffset;
  clearTimeout(alarm);
  alarm = setTimeout(currentScroll, 30);
}

headerbarPc.addEventListener('mouseover', function() { 
  headerbarPc.classList.add('on');
});
headerbarPc.addEventListener('mouseout', function() { 
  headerbarPc.classList.remove('on');
});

function headerbarToggle() {
  var topScroll = headerbarPc.offsetTop;
  var currentScroll = window.pageYOffset;
  if (topScroll < currentScroll) {
      headerbarPc.classList.add('on');
  } else {
      headerbarPc.classList.remove('on');
  }
};

function mHeaderbarToggle() {
  var topScroll = headerbarM.offsetTop;
  var currentScroll = window.pageYOffset;
  if (topScroll < currentScroll) {
    headerbarM.classList.add('on');
  } else {
    headerbarM.classList.remove('on');
  }
};

function openGnb(e) {
  e.preventDefault();
  if (e.target.tagName !== 'A') return;
  
  if(e.target.nextElementSibling === null) {
    return;
  } else if (e.target.classList.contains('on')) {
    e.target.classList.remove('on');
    e.target.nextElementSibling.classList.remove('on');
  } else {
    for (let i = 0; i < gnbA.length; i++) {
      gnbA[i].classList.remove('on');
      gnbOpenUl[i].classList.remove('on');
    }
    e.target.classList.add('on');
    e.target.nextElementSibling.classList.add('on');
  }
}

