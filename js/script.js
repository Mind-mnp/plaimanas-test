//hover menu
const menu_item = document.querySelector('.menu-item');
const bg = document.querySelector('.background-overlay');
const navbar = document.querySelector('.navbar .container');
const currency = document.querySelector('.currency');


menu_item.addEventListener("mouseenter", () => {
  navbar.style.backgroundColor = "black";  
  bg.style.display = "block";
  currency.style.visibility = "hidden";
});
menu_item.addEventListener("mouseleave", () => {
  bg.style.display = "none";
  navbar.style.backgroundColor = "white"; 
  currency.style.visibility = "visible";
});

//auto-vedo
const videos = document.querySelectorAll(".auto-video");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play().catch(() => {});
      } else {
        entry.target.pause();
      }
    });
  },
  { threshold: 0.5 },
);

videos.forEach((video) => {
  video.muted = true;
  observer.observe(video);
});
// Menu
const toggleBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");

  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");

  document.body.classList.toggle("no-scroll");
});

//open submenu
const menu_btn = document.querySelector(".menu-btn");

menu_btn.addEventListener("click", function () {
    this.closest(".menu-item").classList.toggle("active");

  console.log("clicked");
});

// Title Sticky scroll
const header = document.querySelector(".navbar");
const logo = document.querySelector(".plaimanas-logo");
const cards = document.querySelectorAll(".media-card");

function updatePosition() {
  if (!logo) return;
  const logoBottom = window.scrollY + logo.getBoundingClientRect().bottom;

  cards.forEach((card) => {
    const overlay = card.querySelector(".media-overlay");
    if (!overlay) return;

    const rect = card.getBoundingClientRect();
    const overlayHeight = overlay.offsetHeight;
    const cardHeight = card.offsetHeight;

    const cardTop = rect.top + window.scrollY;
    // const adjustedScroll = window.scrollY + startPoint;

    const centerStart = cardTop;
    // console.log(`cardTop: ${cardTop} | cardHeight: ${cardHeight} | overlayHeight: ${overlayHeight}`)

    let translateY = cardHeight / 2 - overlayHeight / 2;

    // console.log(`logoBottom ${logoBottom} `);
    // console.log(`cardTop: ${cardTop}`);
    if (logoBottom > centerStart) {
      translateY += logoBottom - cardTop;
      // console.log(`เลยแล้ว❄️`);
    }

    if (translateY > cardHeight - overlayHeight) {
      translateY = cardHeight - overlayHeight;
    }

    overlay.style.transform = `translate(-50%, ${translateY}px)`;
  });
}

window.addEventListener("scroll", updatePosition);
window.addEventListener("load", updatePosition);

// Tabs FAQs
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-answer");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((btn) => btn.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// Accordion
document.querySelectorAll(".faq-question").forEach((q) => {
  q.addEventListener("click", () => {
    q.parentElement.classList.toggle("active");
  });
});
