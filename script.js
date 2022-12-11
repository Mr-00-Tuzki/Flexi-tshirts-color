const color_btn=document.querySelectorAll('.color');
color_btn.forEach(color => {
  color.addEventListener('click',()=>{
    let colorNameClass=color.className;
    if(!color.classList.contains('active-color')){
      let colorName=colorNameClass.slice(colorNameClass.indexOf('-') + 1,colorNameClass.length);
      color.classList.add('active-color');
      resetActiveBtns();
      setNewColor(colorName);
    }
  });
});

//resettting all color buttons
function resetActiveBtns(){
  color_btn.forEach(color => {
    color.classList.remove('active-color');
  });
}

//setting new color
function setNewColor(color){
document.querySelector('.banner-right img').src=`images/tshirt_${color}.png`;
}
