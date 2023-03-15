AOS.init();

window.addEventListener('scroll', function () {
   if (this.pageYOffset > 10) {
      this.document.querySelector('.header').classList.add('sticky')
   } else {
      this.document.querySelector('.header').classList.remove('sticky')
   }
})

const navbar = document.querySelector(".navbar__list"),
   openNav = document.querySelector(".navbar__bars"),
   closeNav = document.querySelector(".close-btn"),
   body = document.querySelector("body")

openNav.addEventListener("click", () => {
   navbar.classList.add("left-0")
   openNav.classList.add("rotate-180")
   body.classList.add("overflow-hidden")
})

closeNav.addEventListener("click", () => {
   navbar.classList.remove("left-0")
   openNav.classList.remove("rotate-180")
   body.classList.remove("overflow-hidden")
})

const navbarLink = document.querySelectorAll(".navbar__link")

navbarLink.forEach(element => {
   element.addEventListener("click", () => {
      navbar.classList.remove("left-0")
      openNav.classList.remove("rotate-180")
      body.classList.remove("overflow-hidden")
   })
});


var levelEl = document.getElementById('level');

function updateBatteryUI(battery) {
  levelEl.textContent = 'Battery level: ' + (Math.round(battery.level * 100)) + '%';
}

function monitorBattery(battery) {
  updateBatteryUI(battery);

  battery.addEventListener('levelchange',
    updateBatteryUI.bind(null, battery));
}

if ('getBattery' in navigator) {
  navigator.getBattery().then(monitorBattery);
} else {
  ChromeSamples.setStatus('The Battery Status API is not supported on ' +
    'this platform.');
}