// Первая домашная работа
// Задание № 1

if(false){
	console.log('Сегодняя отличная погода')
}
if(false){
	console.log('Сегодня ужасная погода!!!')
}
// Если условие возвращает нам фолс(неправда), то действие не выполняется.

// Задание № 2
let age = prompt('Чтобы порекомендовать Вам фильм, введите Ваш возраст: ')
if(age >= 1 && age<=13){
	console.log('Я бы Вам порекомендовал мультфильм, а именно: "Tom & Jerry"')
}
else if(age>=13 && age<=17){
	console.log('Я бы Вам порекомандовал приключенченский фильм, а именно: "Круиз по джунглям"');
}
else if(age>=18){
	console.log('Я бы Вам порекомандовал хоррор фильм, а именно: "Техасская резня бензопилой"');
}

// Задание № 3
// 1. (2 < 3) && (3 > 4) || true 
// false || true
// true
// 2. !true && (!true || 100 !=  5 * 5) 
// false && (false || true)
// false && true
// false
// 3. ('123' == 123) || ((10 <= 10) && (' ' === false))
// true || (true && false)
// true || false
// true

// Вторая домашная работа
// 1)
let n = 0
for(let j=0; j<1; j++)
{
	let i = prompt('Какая наука изучает космос?')
	if(i == 'Астрономия'){
		n++
	}
	i = prompt('Спутник Земли?')
	if(i == 'Луна'){
		n++
	}
	i = prompt('Ближайшая звезда солнечной системы?')
	if(i == 'Проксима'){
		n++
	}
	i = prompt('Третья планета от Солнца?')
	if(i == 'Земля'){
		n++
	}
	i = prompt('Самая большая планета солнечной системы?')
	if(i == 'Юпитер'){
		n++
	}
}
console.log('Количество баллов: ' + n + '\nВаша итоговая оценка за экзамен: ' + n);

// 2)
let num = prompt('Введите число от 0 до 9: ');
switch(num){
	case '0':
		console.log('Нуль')
		break
	case '1':
		console.log('Один')
		break
	case '2':
		console.log('Два')
		break
	case '3':
		console.log('Три')
		break
	case '4':
		console.log('Четыре')
		break
	case '5':
		console.log('Пять')
		break
	case '6':
		console.log('Шесть')
		break
	case '7':
		console.log('Семь')
		break
	case '8':
		console.log('Восемь')
		break
	case '9':
		console.log('Девять')
		break
	default:
	console.log('Вы ввели некорректное число!')
}