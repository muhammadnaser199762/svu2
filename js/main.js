
const search=document.getElementById("search");
if(search){
search.addEventListener("keyup",()=>{
let v=search.value.toLowerCase();
document.querySelectorAll(".event").forEach(e=>{
e.style.display=e.innerText.toLowerCase().includes(v)?"block":"none";
});
});
}




/* عن الأيميل*/
const form=document.getElementById("contactForm");
if(form){
form.addEventListener("submit",e=>{
e.preventDefault();
let n=document.getElementById("name").value;
let em=document.getElementById("email").value;
if(!n||!em){show("خطأ","danger")}else{show("تم","success")}
});
}


/**/ 

function show(m,t){
document.getElementById("alertBox").innerHTML=`<div class="alert alert-${t}">${m}</div>`;
}


function filterEvents(type){
let items = document.querySelectorAll('.event');

items.forEach(item => {
if(type === 'all'){
item.style.display = 'block';
} else {
item.style.display = item.classList.contains(type) ? 'block' : 'none';
}
});}
let isArabic = true;

const translations = {
  ar: {
    title: "دليل الفعاليات",
    nav1: "الرئيسية",
    nav2: "الفعاليات",
    nav3: "تفاصيل الفعالية",
    nav4:"عن الدليل",
    nav5:"اتصل بنا",
    mainTitle: "أبرز الأحداث هذا الأسبوع",
    mainDesc: "تعرف على أهم الفعاليات في الجامعة الافتراضية السورية",
    slide1:"مفاضلة الخريف",
    slide2:"حفل تخرج",
    slide3:"فعالية برمجية",
    latestTitle: "أحدث الفعاليات",
    latestTitle1:"افتتاح مركز نفاذ جديد",
    latestTitle2:" في إطار تطوير البنية التعليمية، افتتحت الجامعة الافتراضية السورية مركزاً جديداً لتعزيز التعلم الإلكتروني وخدمة الطلاب",
    ss:"حفل تخرج",
    aa:"احتفال بتخرج طلاب الجامعة الافتراضية السورية مع فقرات موسيقية مميزة.",
    dd:"مسابقة برمجية",
    ff:"إحراز فريق(Watermelon Juice Tree) من الجامعة الافتراضية السورية المركزالأول في فعاليات النهائي الوطني الخامس عشر للمسابقة البرمجية السورية للجامعات. ",
    catTitle: "تصنيفات سريعة",
    allBtn: "عرض الكل",
    eBtn:"إداري",
    mBtn:"ثقافي",
    cBtn:"أكاديمي",
    rr:" تم إعداد المشروع من قبل :",
    hh:"حيدر بلقيس",
    ww:"عبد الرحمن الدعاس",
    mm:"محمد محمود",
    tt:"محمد خير مطيع",
    nn:"محمد ناصر علاء الدين",
  },
  en: {
    title: "Events Guide",
    nav1: "Home",
    nav2: "Guide",
    nav3: "Services",
    nav4:"A bout Guide",
    nav5:"Contact US",
    mainTitle: "Top Events This Week",
    mainDesc: "Discover the latest events at SVU",
    slide1:"Autumn trade-off",
     slide2:"Graduation ceremony",
    slide3:"Programmatic effectiveness",
    latestTitle:"Latest Events",
     latestTitle1:"Opening of a new access center",
    latestTitle2:"Within the framework of the educational structure, the Syrian Virtual University opened a new center to promote e-learning and serve students.",
     ss:"Graduation ceremony",
    aa:"A graduation ceremony for students of the Syrian Virtual University, featuring special musical performances.",
    dd:"Software competition",
    ff:"The Watermelon Juice Tree team from the Syrian Virtual University won first place in the 15th National Finals of the Syrian University Programming Competition. ",
    catTitle: "Quick Categories",
    allBtn: "View all",
    eBtn:"administrative",
    mBtn:"cultural",
    cBtn:"academic",
    rr:" The project was prepared by:",
    hh:"Haidar Balkis",
    ww:"Abd alrahman aldaas",
    mm:"Mohammad mahmoud",
    tt:"Mohamad kher motee",
    nn:"Mohamad naser alaa alden",
  }
};


function toggleLang() {
  isArabic = !isArabic;
  let lang = isArabic ? "ar" : "en";

  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("nav1").innerText = translations[lang].nav1;
  document.getElementById("nav2").innerText = translations[lang].nav2;
  document.getElementById("nav3").innerText = translations[lang].nav3;
  document.getElementById("nav4").innerText = translations[lang].nav4;
  document.getElementById("nav5").innerText = translations[lang].nav5;

   document.getElementById("slide1").innerText = translations[lang].slide1;
   document.getElementById("slide2").innerText = translations[lang].slide2;
   document.getElementById("slide3").innerText = translations[lang].slide3;
  document.getElementById("mainTitle").innerText = translations[lang].mainTitle;
  document.getElementById("mainDesc").innerText = translations[lang].mainDesc;
  document.getElementById("latestTitle").innerText = translations[lang].latestTitle;
  document.getElementById("latestTitle1").innerText = translations[lang].latestTitle1;
  document.getElementById("latestTitle2").innerText = translations[lang].latestTitle2;
  document.getElementById("ss").innerText = translations[lang].ss;
  document.getElementById("aa").innerText = translations[lang].aa;
  document.getElementById("dd").innerText = translations[lang].dd;
  document.getElementById("ff").innerText = translations[lang].ff;
  document.getElementById("rr").innerText = translations[lang].rr;
 document.getElementById("hh").innerText = translations[lang].hh;
 document.getElementById("ww").innerText = translations[lang].ww;
 document.getElementById("mm").innerText = translations[lang].mm;
 document.getElementById("tt").innerText = translations[lang].tt;
 document.getElementById("nn").innerText = translations[lang].nn;



   document.getElementById("catTitle").innerText = translations[lang].catTitle;

  document.getElementById("allBtn").innerText = translations[lang].allBtn;
  document.getElementById("eBtn").innerText = translations[lang].eBtn;
  document.getElementById("mBtn").innerText = translations[lang].mBtn;
  document.getElementById("cBtn").innerText = translations[lang].cBtn;
  
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  
}
function toggleDark(){
    document.body.classList.toggle("dark-mode");
}
 






document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    if (button.textContent.includes("أضف للتقويم")) {

      button.addEventListener("click", function (e) {
        e.preventDefault();

        alert("تم إضافة الحدث إلى التقويم 📅");
      });

    }
  });

});



document.addEventListener("DOMContentLoaded", function() {
    
    const actionButtons = document.querySelectorAll('.btn-primary');
    
    actionButtons.forEach(button => {
        if(button.textContent.includes('تسجيل') || button.textContent.includes('حجز') || button.textContent.includes('تأكيد')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                alert('تم تسجيل طلبك بنجاح! سيتم إرسال التفاصيل إلى بريدك الإلكتروني الجامعي.');
            });
        }
        
        
        if(button.textContent.includes('مشاركة')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                alert('تم نسخ رابط الفعالية إلى الحافظة!');
            });
        }
    });

    const shareButtons = document.querySelectorAll('.btn-outline-secondary');
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('تم نسخ رابط الفعالية للمشاركة!');
        });
    });

});






















/*

function filterEvents(){
let search = document.getElementById("search").value.toLowerCase();
let category = document.getElementById("category").value;
let events = document.querySelectorAll(".event");

events.forEach(event=>{
let text = event.innerText.toLowerCase();

let matchSearch = text.includes(search);
let matchCategory = (category=="all" || event.classList.contains(category));

event.style.display = (matchSearch && matchCategory) ? "block" : "none";
});
}

/* صفحة الدليل
function showAlert() {
    document.getElementById("alertBox").classList.remove("d-none");
}
 src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"


*/