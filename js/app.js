const answer1 = document.getElementById('answers')
const p1 = document.getElementById('p1')
const answer2 = document.getElementById('answers2')
const answer3 = document.getElementById('answers3')
const answer4 = document.getElementById('answers4')
const answer5 = document.getElementById('answers5')


const boton = document.getElementById('start')
boton.addEventListener('click', (e) =>{
    e.preventDefault();
    p1.style.display = 'none';
    answer1.style.display = 'block';
})