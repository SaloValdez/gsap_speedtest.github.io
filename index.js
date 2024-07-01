const btn = document.getElementById("btn");
const path = document.querySelector(".line_descarga");

const subida = document.querySelector(".line_subida");


const tl = gsap.timeline({
  paused: true
});

tl.fromTo(
  path,
  {
    drawSVG: "0% 0%",
    immediateRender: false
  },
  {
    drawSVG: "100% 0%",
    ease: "none",
    duration: 10
  }
).progress(1);


tl.fromTo(
  subida,
  {
    drawSVG: "0% 0%",
    immediateRender: false
  },
  {
    drawSVG: "100% 0%",
    ease: "none",
    duration: 10
  }
).progress(1);










btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");

  tl.restart();
});