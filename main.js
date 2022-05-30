let copy = document.querySelectorAll(".copy")



copy.forEach( item => {
  item.addEventListener("click",()=>{
    console.log(item.nextElementSibling.innerText);
    navigator.clipboard.writeText(item.nextElementSibling.innerText)

    item.innerText = "copied !"
    item.style.backgroundColor = "blue"

    setTimeout(() => {
      item.innerText = "copy !"
      item.style.backgroundColor = "#3636abab"
    }, 2000);
  })
});



