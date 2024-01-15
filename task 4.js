let url = 'https://raw.githubusercontent.com/jakiichu/data/main/data.json';

async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log('Адрес: Город: ' + data.address.city + ' Улица: ' + data.address.street + ' Дом: ' + data.address.house);
				console.log('Фамилия: ' + data.person.lastName + ' Имя: ' + data.person.firstName + ' купил ' + data.productsOrder.count + ' штук товаров ' + data.productsOrder.product.name); 
    } catch (error) {
        console.error('Ошибка при выполнении fetch:', error.message);
    }
}

fetchData();