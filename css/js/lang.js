const translations = {
  ko: {
    title:"국제결혼 매칭 서비스",
    nav_home:"홈", nav_about:"회사소개", nav_services:"서비스", nav_profiles:"프로필", nav_contact:"문의",
    hero_title:"당신의 인연, 지금 찾아보세요",
    hero_text:"한국과 러시아를 연결하는 안전하고 신뢰할 수 있는 국제결혼 매칭 서비스",
    btn_get_started:"상담 신청",
    section_benefits:"우리 서비스의 특징",
    benefit1:"신뢰할 수 있는 프로필 검증",
    benefit2:"맞춤형 매칭 서비스",
    benefit3:"전문 상담 지원",
    benefit4:"안전한 결혼 절차 안내",
    about_title:"우리는 누구인가?",
    about_text:"저희는 한국과 러시아 간 국제결혼 매칭 서비스를 전문으로 하는 기업입니다. 신뢰할 수 있는 정보와 안전한 절차를 기반으로, 진정한 인연을 만날 수 있도록 돕습니다.",
    services_process:"매칭 절차",
    step1:"상담 신청 및 기본 프로필 작성",
    step2:"맞춤형 매칭 후보 제안",
    step3:"온라인/오프라인 만남",
    step4:"법적·행정 절차 지원",
    services_support:"지원 서비스",
    support1:"전문 통역 지원",
    support2:"비자 및 서류 준비",
    support3:"문화 적응 프로그램",
    profiles_intro:"매칭 후보 예시",
    profile1:"30세, 러시아, 교사",
    profile2:"32세, 한국, 엔지니어",
    contact_title:"상담 신청",
    btn_send:"보내기"
  },
  ru: {
    title:"Сервис международных браков",
    nav_home:"Главная", nav_about:"О компании", nav_services:"Сервисы", nav_profiles:"Профили", nav_contact:"Контакты",
    hero_title:"Найдите свою половинку прямо сейчас",
    hero_text:"Надежный сервис международных браков между Кореей и Россией",
    btn_get_started:"Запрос консультации",
    section_benefits:"Особенности сервиса",
    benefit1:"Проверка достоверности профилей",
    benefit2:"Индивидуальный подбор пары",
    benefit3:"Поддержка профессиональных консультантов",
    benefit4:"Безопасная процедура брака",
    about_title:"Кто мы?",
    about_text:"Мы специализируемся на международных браках между Кореей и Россией. Наш сервис основан на надежной информации и безопасных процедурах.",
    services_process:"Процесс подбора",
    step1:"Заявка и заполнение профиля",
    step2:"Индивидуальные предложения кандидатов",
    step3:"Онлайн/оффлайн встречи",
    step4:"Юридическая и административная поддержка",
    services_support:"Сопровождение",
    support1:"Профессиональный перевод",
    support2:"Подготовка виз и документов",
    support3:"Программы культурной адаптации",
    profiles_intro:"Примеры кандидатов",
    profile1:"30 лет, Россия, учитель",
    profile2:"32 года, Корея, инженер",
    contact_title:"Запрос консультации",
    btn_send:"Отправить"
  },
  en: {
    title:"International Marriage Matching Service",
    nav_home:"Home", nav_about:"About", nav_services:"Services", nav_profiles:"Profiles", nav_contact:"Contact",
    hero_title:"Find your match today",
    hero_text:"Reliable international marriage matching service connecting Korea and Russia",
    btn_get_started:"Request Consultation",
    section_benefits:"Service Features",
    benefit1:"Verified profiles",
    benefit2:"Customized matchmaking",
    benefit3:"Professional consultation support",
    benefit4:"Safe marriage procedures",
    about_title:"Who we are?",
    about_text:"We specialize in international marriage matchmaking between Korea and Russia. Based on reliable information and safe processes, we help you find your true partner.",
    services_process:"Matching Process",
    step1:"Consultation request & profile setup",
    step2:"Personalized candidate suggestions",
    step3:"Online/offline meetings",
    step4:"Legal and administrative support",
    services_support:"Support Services",
    support1:"Professional interpretation",
    support2:"Visa & document preparation",
    support3:"Cultural adaptation programs",
    profiles_intro:"Sample Candidates",
    profile1:"30 years old, Russia, Teacher",
    profile2:"32 years old, Korea, Engineer",
    contact_title:"Request Consultation",
    btn_send:"Send"
  },
  zh: {
    title:"国际婚姻匹配服务",
    nav_home:"首页", nav_about:"公司介绍", nav_services:"服务", nav_profiles:"个人资料", nav_contact:"联系",
    hero_title:"立即寻找你的缘分",
    hero_text:"连接韩国和俄罗斯的安全可靠国际婚姻匹配服务",
    btn_get_started:"申请咨询",
    section_benefits:"服务特色",
    benefit1:"可靠的资料验证",
    benefit2:"量身定制匹配",
    benefit3:"专业咨询支持",
    benefit4:"安全的结婚流程",
    about_title:"我们是谁?",
    about_text:"我们专注于韩俄国际婚姻匹配服务。基于可靠信息和安全流程，帮助您找到真正的伴侣。",
    services_process:"匹配流程",
    step1:"申请咨询并填写基本资料",
    step2:"推荐定制候选人",
    step3:"线上/线下见面",
    step4:"法律与行政手续支持",
    services_support:"支持服务",
    support1:"专业口译",
    support2:"签证与文件准备",
    support3:"文化适应课程",
    profiles_intro:"候选人示例",
    profile1:"30岁, 俄罗斯, 教师",
    profile2:"32岁, 韩国, 工程师",
    contact_title:"申请咨询",
    btn_send:"发送"
  }
};

function setLanguage(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n');
    if(translations[lang] && translations[lang][key]){
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  const langSelect=document.getElementById('langSelect');
  if(langSelect){
    langSelect.addEventListener('change', e=> setLanguage(e.target.value));
    setLanguage('ko'); // 기본 한국어
  }
});
