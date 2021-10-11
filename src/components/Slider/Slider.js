const sliders = document.querySelectorAll('.slider')

sliders.forEach((slider) => {
  const range = slider.querySelector('.slider__range')
  const thumb = slider.querySelector('.slider__thumb')
  const track = slider.querySelector('.slider__innerTrack')

  const sliderMax = Number(range.getAttribute('max'))

  const updateSlider = (value) => {
    const percentageValue = (Number(value) / (Number(sliderMax))) * 100

    thumb.style.left = `${percentageValue}%`
    thumb.style.transform = `translate(-${percentageValue}%, -50%)`
    track.style.width = `${percentageValue}%`
  }

  updateSlider(sliderMax / 2)
  range.addEventListener('input', (e) => updateSlider(e.target.value))
})

window.addEventListener('beforeunload', (event) => {
  event.preventDefault()

  sliders.forEach((slider) => {
    slider.removeEventListener('input', () => { })
  })
})
