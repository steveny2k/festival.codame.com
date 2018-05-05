var _radialGradient = document.querySelector('.radial-gradient')
document.onmousemove = function(e){
  mouseXpercentage = Math.round(e.pageX / window.innerWidth * 100);
  mouseYpercentage = Math.round(e.pageY / window.innerHeight * 100);
  _radialGradient.style.background = 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, transparent, rgba(39,34,123,.5))'
}

document.querySelector('[href="#nightlife"]').onclick = function(e){
  doScrolling('#nightlife', 1000)
  e.preventDefault()
  return false
}

document.querySelector('[href="#speakers"]').onclick = function(e){
  doScrolling('#speakers', 1000)
  e.preventDefault()
  return false
}

document.querySelector('[href="#workshops"]').onclick = function(e){
  doScrolling('#workshops', 1000)
  e.preventDefault()
  return false
}

document.querySelector('[href="#schedule"]').onclick = function(e){
  doScrolling('#schedule', 1000)
  e.preventDefault()
  return false
}