import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["navbar"]

  connect() {
    const navbar = this.navbarTarget
    if(this.navbarTarget){
    var last_scroll_top = 1;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
         if(scroll_top < last_scroll_top) {
              navbar.classList.remove('scrolled-down');
              navbar.classList.add('scrolled-up');
          }
          else {
              navbar.classList.remove('scrolled-up');
              navbar.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;
    });
    // window.addEventListener
  }
  }
}
