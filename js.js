/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Adventure time, cmon grab your friends, well go to very distant lands. With Jake the dog and Finn the hu-man, the fun will never end, its adventure time!')
})