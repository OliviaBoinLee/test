// 스크롤 애니메이션
const sections = document.querySelectorAll('.scroll-in');

function checkScroll() {
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;

    const isHalfShown = sectionTop <= (window.innerHeight + window.scrollY) - (sectionHeight / 2);
    const isNotScrolledPast = window.scrollY < sectionBottom;

    if (isHalfShown && isNotScrolledPast) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', checkScroll);
