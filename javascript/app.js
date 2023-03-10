window.addEventListener('scroll', function () {
   if (this.pageYOffset > 10) {
      this.document.querySelector('.header').classList.add('sticky')
   } else {
      this.document.querySelector('.header').classList.remove('sticky')
   }
})