console.log('%c HI', 'color: firebrick')
let breads = []
document.addEventListener('DOMContentLoaded',function(){
  image()
  breed()
})

function image() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(response => response.json())
    .then(results =>{
      results.message.forEach(image => addImage(image))
          });
}
function addImages(URLpic){
  let contain = document.querySelector('#dog-image-container')
  let img = document.creatElement('img')
  img.src = URLpic
  contain.appendChild(img)
}
function addbreed(breads){
  let ul = document.querySelector('#dog-breeds')
  let li = document.creatElement('li')
  li.innerText = breads
  ul.appendChild(li)

}
function breedUpdate(breads){
  let ul = document.querySelector('#dog-breeds')
  removechildren(ul)
  breads.forEach(bread => addbreed(bread) )
}
function bread(){
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(response => response.json())
  .then(res => {
    breeds = Object.keys(result,message)
    breedUpdate(breads)
    anotherBreed()
  })
}
function anotherBreed(){
  let dropBreed = document.querySelector('#breed-dropdown')
  dropBreed.addEventListener('change',function (event){
    breedUpdate(event.target.value)
  })
}
