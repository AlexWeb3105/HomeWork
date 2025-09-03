//*Первое задание из ДЗ по JS*//
studentCourse = {
	name: 'Alexey',
	years: '37',
	region: 'Russia',
	city: 'Chelyabinsk',
}
console.log(studentCourse);

//**Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.(РНО) */
const testUsers = {
	petr: {
		age: 35,
		testHello(name) {
			console.log(`Hello ${name}`);//метод объекта, сюда можно задавть и функцию
		}
	}
}
testUsers.petr.testHello('Мир')


//* Создайте массив объектов с описанием пользователей(такой мы делали в уроке).
//* Объявите отдельную переменную, в которой будет храниться количество простых пользователей, начальное значение будет - 0. 
//* Обойдите массив пользователей и если пользователь не является админом - прибавьте к ранее созданной переменной единицу. 
//*После окончания работы цикла выведите в консоль переменную с количеством простых пользователей. */

//*Тебе нужно знать 1. Как написать массив объектов 2.Как написать цикл 3. Как написать условие if else   (РНО )*/

allUsers = [
	{
		name: 'Alex',
		age: 20,
		city: 'Moscow',
		isAdmin: true,
	},
	{
		name: 'Petr',
		age: 17,
		city: 'Magadan',
		isAdmin: true,
	},
	{
		name: 'Tom',
		age: 35,
		city: 'Altai',
		isAdmin: false,
	},
	{
		name: 'Pupi',
		age: 35,
		city: 'Altai',
		isAdmin: false,
	},
	{
		name: 'Max',
		age: 35,
		city: 'Altai',
		isAdmin: false,
	},
	{
		name: 'Kate',
		age: 35,
		city: 'Altai',
		isAdmin: true,
	}
]
let simpleUser = 0;

for (let i = 0; i < allUsers.length; i++) {
	if (allUsers[i].isAdmin == true) {
		simpleUser = simpleUser + 1;
	}

}

console.log('Простых пользователей ' + simpleUser);

