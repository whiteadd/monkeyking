// 언어 전환
const texts = {/* 이전 예제와 동일 */};

function setLanguage(lang){
  document.getElementById('title').innerText = texts[lang].title;
  document.querySelector('#intro h2').innerText = texts[lang].introTitle;
  document.querySelector('#intro p').innerText = texts[lang].introText;
  document.querySelector('#consultation h2').innerText = texts[lang].consultTitle;
  document.getElementById('name').placeholder = texts[lang].namePlaceholder;
  document.getElementById('contact').placeholder = texts[lang].contactPlaceholder;
  document.getElementById('message').placeholder = texts[lang].messagePlaceholder;
  document.querySelector('#consultForm button').innerText = texts[lang].submitBtn;
  const slides = document.querySelectorAll('.slide');
  slides.forEach((s,i) => s.querySelector('p').innerText = texts[lang].successText[i]);
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((f,i) => {
    f.querySelector('button').innerText = texts[lang].faqItems[i].q;
    f.querySelector('p').innerText = texts[lang].faqItems[i].a;
  });
}

// 상담 폼
document.getElementById('consultForm').addEventListener('submit', function(e){
  document.getElementById('formMsg').innerText = "상담 신청이 서버로 전송되었습니다!";
});

// 후기 슬라이더
let currentSlide=0;
function showSlide(){
  const slides=document.querySelectorAll('.slide');
  slides.forEach(s=>s.classList.remove('active'));
  slides[currentSlide].classList.add('active');
  currentSlide=(currentSlide+1)%slides.length;
}
setInterval(showSlide,4000);

// FAQ 아코디언
document.querySelectorAll('.faq-item button').forEach(btn=>{
  btn.addEventListener('click',function(){
    const p=this.nextElementSibling;
    p.style.display=(p.style.display==='block')?'none':'block';
  });
});
