let ele = document.body

ele.addEventListener('mousedown', (event) => {

})

ele.addEventListener('touchcancel', (event) => {
  
})

let start = (point) => {
  console.log("start", point.clientX, point.clientY);
}

let move = (point) => {
  console.log("move", point.clientX, point.clientY);
}

let end = (point) => {
  console.log("end", point.clientX, point.clientY);
}

let cancel = (point) => {
  console.log('cancel')
}