const translations = {
  ko: { title:"한국 & 러시아 국제결혼", nav_home:"홈", nav_about:"소개", nav_gallery:"갤러리", nav_upload:"업로드", section_service:"우리의 서비스", section_service_text:"한국과 러시아 간 국제결혼 지원 및 커뮤니티를 제공합니다.", section_gallery:"갤러리 보기", btn_view_gallery:"사진 보기", section_upload:"사진/글 업로드", btn_upload:"업로드 하기", loading:"사진을 불러오는 중..." },
  ru: { title:"Международные браки - Корея & Россия", nav_home:"Главная", nav_about:"О нас", nav_gallery:"Галерея", nav_upload:"Загрузить", section_service:"Наши услуги", section_service_text:"Мы поддерживаем международные браки между Кореей и Россией.", section_gallery:"Посмотреть галерею", btn_view_gallery:"Смотреть фото", section_upload:"Загрузить фото/текст", btn_upload:"Загрузить", loading:"Загрузка фотографий..." },
  en: { title:"International Marriage - Korea & Russia", nav_home:"Home", nav_about:"About", nav_gallery:"Gallery", nav_upload:"Upload", section_service:"Our Services", section_service_text:"We provide support for international marriages between Korea and Russia.", section_gallery:"View Gallery", btn_view_gallery:"View Photos", section_upload:"Upload Photos/Text", btn_upload:"Upload", loading:"Loading photos..." },
  zh: { title:"国际婚姻 - 韩国 & 俄罗斯", nav_home:"首页", nav_about:"介绍", nav_gallery:"相册", nav_upload:"上传", section_service:"我们的服务", section_service_text:"我们提供韩俄国际婚姻支持及社区服务。", section_gallery:"查看相册", btn_view_gallery:"查看照片", section_upload:"上传照片/文字", btn_upload:"上传", loading:"正在加载照片..." }
};

function setLanguage(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n');
    if(translations[lang][key]) el.textContent=translations[lang][key];
  });
}

document.getElementById('langSelect').addEventListener('change', e=>{ setLanguage(e.target.value); });
setLanguage('ko');
