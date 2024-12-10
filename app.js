const heroBtn = document.querySelector('.hero-btn')
const btnCart = document.querySelector('.btn-cart')

heroBtn.addEventListener('mouseover', () => {
  heroBtn.classList.add(
    'text-BrownTumbleweed',
    'bg-MacaroniCheese',
    'transform',
    'scale-110'
  )
  btnCart.classList.add('bg-BrownTumbleweed')
  btnCart.classList.remove('bg-MacaroniCheese')
})

heroBtn.addEventListener('mouseout', () => {
  heroBtn.classList.remove(
    'text-BrownTumbleweed',
    'bg-MacaroniCheese',
    'transform',
    'scale-110'
  )
  btnCart.classList.add('bg-MacaroniCheese')
  btnCart.classList.remove('bg-BrownTumbleweed')
})
