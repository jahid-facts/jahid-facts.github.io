var typed = new Typed('.typing', {
  strings: [
    '',
    'Web Developer',
    'Web Designer',
    'Full Stack Web Developer',
    'Graphic Designer',
  ],
  smartBackspace: true, // Default value
  typeSpeed: 50,
  loop: true,
  showCursor: false,
});





const navTogglerBtn = document.querySelector(".nav-toggler");
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn()
})

window.addEventListener("scroll", () => {
  document.querySelector(".aside").classList.remove("open");
  document.querySelector(".nav-toggler").classList.remove("open");
})

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open")
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
const nav = document.querySelector(".nav");

nav.addEventListener("click", () => {
  // asideSectionTogglerBtn()
  if (window.innerWidth < 1200) {
    asideSectionTogglerBtn()
  }
})


// mix it ut 
let portfolioMix = mixitup('.work_container', {
  selectors: {
    target: '.work_card'
  },
  animation: {
    duration: 300
  }
});


const linkwork = document.querySelectorAll('.work_item');

function activework() {
  linkwork.forEach(l => l.classList.remove('work_active'));
  this.classList.add('work_active');
}
linkwork.forEach(l => l.addEventListener("click", activework));

// work popup 
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work_btn")) {
    togglerPortfoliobtn();
    portfolioItemDetails(e.target.parentElement);
  }
})

function togglerPortfoliobtn() {
  document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio_popup_close").addEventListener("click", togglerPortfoliobtn)

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp_thumbail img").src = portfolioItem.querySelector(".work_img").src;
  document.querySelector(".porfolio_popup_subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
  document.querySelector(".porfolio_popup_body").innerHTML = portfolioItem.querySelector(".portfolio_item_details").innerHTML;
}





// actie menu 
var header = document.getElementById("nav");
var btns = header.getElementsByClassName("menu_item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}