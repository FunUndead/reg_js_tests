Feature('Test Email Gmail for companies');

Scenario('Trial tariff', ({ I }) => {
	I.amOnPage('https://www.reg.ru/web-tools/google-apps/');
	I.click('//*[@id="tariffs_table"]/div/a[1]/div/div[2]/div/span'); //Кнопка выбрать
	I.see('Бесплатно', '//span[@class="order-footer-price__price"]');
	I.seeInCurrentUrl("trial");

});
