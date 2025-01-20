const app = {
  init: function () {
    this.header = document.querySelector("header");
    this.spaceship = document.querySelector(".spaceship");
    this.closeCaps = document.querySelector(".closedCapsule");
    this.openCaps = document.querySelector(".openedCapsule");
    this.whiteHexa = document.querySelector(".video-bg-white");
    this.blackHexa = document.querySelector(".video-bg-black");
    this.wHexa = document.getElementById("video-white");
    this.bHexa = document.getElementById("video-black");
    this.whitePull = document.querySelector(".photoL");
    this.blackPull = document.querySelector(".photoN");
    this.main = document.querySelector("main");
    this.occupation = document.querySelector("occupation");
    this.wHexa.playbackRate = 0.6;
    this.bHexa.playbackRate = 1.2;
    // Event listener to toggle capsule images and apply other changes
    this.spaceship.addEventListener("click", () => this.handleToggle());
    this.header.addEventListener("mouseover", () => this.hoverCapsule());
    this.header.addEventListener("mouseout", () => this.hoverOutCapsule());
  },

  handleToggle: function () {
    this.toggleCapsule();
    this.toggleHeaderBackground();
    this.toggleVideoBackground();
    this.togglePullImage();
    this.toggleMain();
  },
  handleHover: function () {
    this.hoverCapsule();
  },
  hoverCapsule: function () {
    this.header.style.opacity = 1;
  },
  hoverOutCapsule: function () {
    this.header.style.opacity = 0.7;
  },
  toggleMain: function () {
    this.main.classList.toggle("text-dark");
    this.main.classList.toggle("text-light");
  },

  toggleCapsule: function () {
    if (this.openCaps.hasAttribute("hidden")) {
      this.closeCaps.setAttribute("hidden", "true");
      this.openCaps.removeAttribute("hidden");
    } else {
      this.openCaps.setAttribute("hidden", "true");
      this.closeCaps.removeAttribute("hidden");
    }
  },

  toggleHeaderBackground: function () {
    this.header.classList.toggle("sunrise");
    this.header.classList.toggle("night");
  },

  toggleVideoBackground: function () {
    if (this.whiteHexa.hasAttribute("hidden")) {
      this.whiteHexa.removeAttribute("hidden");
      this.blackHexa.setAttribute("hidden", "true");
      this.wHexa.play();
    } else {
      this.whiteHexa.setAttribute("hidden", "true");
      this.blackHexa.removeAttribute("hidden");
      this.bHexa.play();
    }
  },

  togglePullImage: function () {
    if (this.whitePull.hasAttribute("hidden")) {
      this.whitePull.removeAttribute("hidden");
      this.blackPull.setAttribute("hidden", "true");
    } else {
      this.whitePull.setAttribute("hidden", "true");
      this.blackPull.removeAttribute("hidden");
    }
  },
};

document.addEventListener("DOMContentLoaded", () => app.init());
