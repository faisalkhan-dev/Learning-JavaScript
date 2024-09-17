// const buttons=document.querySelectorAll('.button');
// const body=document.querySelector('body')

// buttons.forEach(function(button) {
//     console.log(button);
//     button.addEventListener('click',function(e)) {
//         if(e.target.id==='grey'){
//             body.style.backgroundColor=e.target.id;
//         }
//     }
// });

console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'orange') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'black') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

