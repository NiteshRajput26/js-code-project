# Projects related to DOM

## projects links
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-c3tpfm?file=1-colorChanger%2Fchaiaurcode.js,10-emoji%2Fchaiaurcode.js)

# project 1 js 

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  // click event use kiya hai
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

```

# project 2 

```javascript

const form = document.querySelector('form');

// submit event hai ... submit button form me hai isliye form ko select krenge...
// form jb bhi submit hota hai ya to post type se hota hai ya get type se hota hai...to jb bhi submit hota hai uski value url se server me chali jati hai..to use hme rokna padega
// default action jo bhi h usko rok do....isko rokne ke liye ek method hota h...(preventdefault)

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});




```