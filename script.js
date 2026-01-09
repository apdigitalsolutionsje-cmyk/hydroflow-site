const BUSINESS_PHONE = "+44XXXXXXXXXX";
const BUSINESS_EMAIL = "hydroflow@example.com";
const WHATSAPP_NUMBER = "+44XXXXXXXXXX";
const INSTAGRAM_URL = "https://instagram.com/hydroflowjersey";

const WA_MESSAGE = "Hi HydroFlow, I'd like a free quote for pressure washing / gutter cleaning. My address is:";

function initLinks(){
  const waLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g,'')}?text=${encodeURIComponent(WA_MESSAGE)}`;
  const telLink = `tel:${BUSINESS_PHONE}`;
  const mailLink = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent("Quote request")}&body=${encodeURIComponent("Hi HydroFlow,\n\nI'd like a quote for:\n- \n\nAddress:\n\nThanks")}`;

  const set = (id, href) => {
    const el = document.getElementById(id);
    if(el) el.setAttribute("href", href);
  };

  set("ctaWhatsApp", waLink);
  set("contactWhatsApp", waLink);
  set("ctaCall", telLink);
  set("contactCall", telLink);
  set("contactEmail", mailLink);
  set("igLink", INSTAGRAM_URL);
}

function initMobileMenu(){
  const burger = document.getElementById("burger");
  const menu = document.getElementById("mobileMenu");
  if(!burger || !menu) return;

  burger.addEventListener("click", ()=>{
    const open = !menu.hasAttribute("hidden");
    if(open){
      menu.setAttribute("hidden","");
      burger.setAttribute("aria-expanded","false");
    }else{
      menu.removeAttribute("hidden");
      burger.setAttribute("aria-expanded","true");
    }
  });

  menu.querySelectorAll("a").forEach(a=>{
    a.addEventListener("click", ()=>{
      menu.setAttribute("hidden","");
      burger.setAttribute("aria-expanded","false");
    });
  });
}

initLinks();
initMobileMenu();
