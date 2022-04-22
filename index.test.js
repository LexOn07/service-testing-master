const testService = require('./index');


test('Не популярный магазин', (done) => {
	const result = testService([]);

	expect(result).toEqual(true);
	done();
});


test('Корректная система', (done) => {
	const result = testService([
		['Pavel', 'in'],
		['Vova', 'in'],
		['Pavel', 'out'],
		['Dmitriy', 'in'],
		['Vova', 'out'],
		['Pavel', 'in'],
		['Dmitriy', 'out'],
		['Pavel', 'out'],
	]);
	
	expect(result).toEqual(true);
	done();
});

test('Закрылось с посетителями', (done) => {
	const result = testService([
		['Pavel', 'in'],
		['Vova', 'in'],
		['Pavel', 'out'],
		['Dmitriy', 'in'],
		['Vova', 'out']
	]);
	
	expect(result).toEqual(false);
	done();
});

test('Вышел неизвестный посетитель', (done) => {
	const result = testService([
		['Pavel', 'in'],
		['Vova', 'in'],
		['Pavel', 'out'],
		['Dmitriy', 'in'],
		['Jacki', 'out'],
		['Vova', 'out'],
		['Dmitriy', 'out'],
		['Jacki', 'in']
	]);
	
	expect(result).toEqual(false);
	done();
});

test('Посетитель зашел несколько раз', (done) => {
	const result = testService([
		['Pavel', 'in'],
		['Vova', 'in'],
		['Pavel', 'out'],
		['Dmitriy', 'in'],
		['Jacki', 'in'],
		['Vova', 'in'],
		['Dmitriy', 'out'],
		['Jacki', 'out'],
		['Vova', 'out'],
		['Vova', 'out']
	]);
	
	expect(result).toEqual(false);
	done();
});

test('Посетитель вышел несколько раз', (done) => {
	const result = testService([
		['Pavel', 'in'],
		['Vova', 'in'],
		['Pavel', 'out'],
		['Dmitriy', 'in'],
		['Jacki', 'in'],
		['Vova', 'out'],
		['Dmitriy', 'out'],
		['Jacki', 'out'],
		['Vova', 'out']
	]);
	
	expect(result).toEqual(false);
	done();
});
