// ✅ EDIT THESE DETAILS
const BUSINESS_PHONE = "+44XXXXXXXXXX";     // format: +44...
const BUSINESS_EMAIL = "hydroflow@example.com";
const WHATSAPP_NUMBER = "+44XXXXXXXXXX";    // same as phone usually
const INSTAGRAM_URL = "https://instagram.com/hydroflowjersey";

// Default message for WhatsApp
const WA_MESSAGE = "Hi HydroFlow, I'd like a free quote for pressure washing / gutter cleaning. My address is:";

function initLinks(){
  const waLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g,'')}?text=${encodeURIComponent(WA_MESSAGE)}`;
  const telLink = `tel:${BUSINESS_PHONE}`;
  const mailLink = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent("Quote request")}&&body=${encodeURIComponent("Hi HydroFlow,%0D%0A%0D%0AI'd like a quote for:%0D%0A- %0D%0A%0D%0AAddress:%0D%0A%0D%0AThanks")}`;

  const ids = {
    ctaWhatsApp: waLink,
    contactWhatsApp: waLink,
    ctaCall: telLink,
    contactCall: telLink,
    contactEmail: mailLink,
    igLink: INSTAGRAM_URL
  };

  Object.entries(ids).forEach(([id, href])=>{
    const el = document.getElementById(id);
    if(el) el.setAttribute("href", href);
  });
}

function initMobileMenu(){
  const burger = document.getElementById("burger");
  const menu = document.getElementById("mobileMenu");
  if(!burger || !menu) return;

  burger.addEventListener("click", ()=>{
    const open = menu.hasAttribute("hidden") === false;
    if(open){
      menu.setAttribute("hidden","");
      burger.setAttribute("aria-expanded","false");
    }else{
      menu.removeAttribute("hidden");
      burger.setAttribute("aria-expanded","true");
    }
  });

  // Close menu when clicking a link
  menu.querySelectorAll("a").forEach(a=>{
    a.addEventListener("click", ()=>{
      menu.setAttribute("hidden","");
      burger.setAttribute("aria-expanded","false");
    });
  });
}

initLinks();
initMobileMenu();
