document.addEventListener('DOMContentLoaded', () => {

  const slider = document.querySelector('.slider'),
    sliderWrapper = slider.querySelector('.slider__wrapper'),
    sliderInner = sliderWrapper.querySelector('.slider__inner'),
    sliderItems = sliderInner.querySelectorAll('.slider__item'),
    sliderBtnNext = slider.querySelector('.slider__btn.next'),
    sliderBtnPrev = slider.querySelector('.slider__btn.prev'),
    sliderItemWidth = window.getComputedStyle(sliderWrapper).width;

  let slideItemIndex = 1;
  let offset = 0;

  sliderInner.style.width = 100 * sliderItems.length + '%';
  sliderItems.forEach(slide => {
    slide.style.width = sliderItemWidth;
  });

  sliderBtnNext.addEventListener('click', () => {
    if (offset == parseInt(sliderItemWidth) * (sliderItems.length - 1)) {
      offset = 0;
    } else {
      offset += parseInt(sliderItemWidth);
    }

    sliderInner.style.transform = `translateX(-${offset}px)`;
  });

  sliderBtnPrev.addEventListener('click', () => {
    if (offset == 0) {
      offset = parseInt(sliderItemWidth) * (sliderItems.length - 1);
    } else {
      offset -= parseInt(sliderItemWidth);
    }

    sliderInner.style.transform = `translateX(-${offset}px)`;
  });

  

});