const slides = document.querySelectorAll('.slide');


let currentIndex = 0;
function updateCarousel() {
    // Удаляем класс 'active' у всех слайдов
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
  
    // Добавляем класс 'active' к текущему слайду
    slides[currentIndex].classList.add('active');
  }
  
  function autoScroll() {
    // Увеличиваем индекс текущего слайда
    currentIndex++;
  
    // Если достигнут конец карусели, переходим к первому слайду
    if (currentIndex === slides.length) {
      currentIndex = 0;
    }
  
    // Обновляем карусель
    updateCarousel();
  }

for(const slide of slides) {
    slide.addEventListener('click', () => {
        clearAcriveClasses();
        slide.classList.add('active');
    })
}

function clearAcriveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}   
// Запускаем автоматическую прокрутку через определенный интервал времени (например, каждые 3 секунды)
setInterval(autoScroll, 3000);
updateCarousel()