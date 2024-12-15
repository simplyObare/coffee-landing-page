const heroBtn = document.querySelector('.hero-btn')
const btnCart = document.querySelector('.btn-cart')

heroBtn.addEventListener('mouseover', () => {
  heroBtn.classList.add(
    'text-BrownTumbleweed',
    'bg-MacaroniCheese',
    'transform'
  )
  btnCart.classList.add('bg-BrownTumbleweed')
  btnCart.classList.remove('bg-MacaroniCheese')
})

heroBtn.addEventListener('mouseout', () => {
  heroBtn.classList.remove(
    'text-BrownTumbleweed',
    'bg-MacaroniCheese',
    'transform'
  )
  btnCart.classList.add('bg-MacaroniCheese')
  btnCart.classList.remove('bg-BrownTumbleweed')
})

// for mobile
heroBtn.addEventListener('click', () => {
  heroBtn.classList.add(
    'text-BrownTumbleweed',
    'bg-MacaroniCheese',
    'transform'
  )
  btnCart.classList.add('bg-BrownTumbleweed')
  btnCart.classList.remove('bg-MacaroniCheese')
})

heroBtn.addEventListener('click', () => {
  heroBtn.classList.remove(
    'text-BrownTumbleweed',
    'bg-MacaroniCheese',
    'transform'
  )
  btnCart.classList.add('bg-MacaroniCheese')
  btnCart.classList.remove('bg-BrownTumbleweed')
})

const hamburgerContainer = document.querySelector('.hamburger-container')
const mobileBar = document.querySelector('.mobile-bar')
const mobileBarBtn = document.querySelector('.mobile-bar-btn')
let barStatus = false

hamburgerContainer.addEventListener('click', () => {
  barStatus = !barStatus
  if (barStatus) {
    mobileBar.classList.add(
      'block',
      'z-50',
      'transform',
      'transition-transform',
      'duration-300',
      'translate-x-0'
    )
    mobileBar.classList.remove('-translate-x-full', 'hidden')
  }
})

mobileBarBtn.addEventListener('click', () => {
  mobileBar.classList.remove('z-50', 'block')
  mobileBar.classList.add('-translate-x-full', 'hidden')
  mobileBar.classList.remove('translate-x-0')
})
