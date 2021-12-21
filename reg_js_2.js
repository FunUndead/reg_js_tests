Feature('Website builder rates');

Scenario('Endless tariff', async ({ I }) => {
        const assert = require('assert');
	I.amOnPage('https://www.reg.ru/web-sites/website-builder/'); 
    let page = await I.grabTextFrom('//*[@id="content"]/div[2]/form/div/div[3]/div/div[2]/p/strong');
	console.log(value);
	I.click('//*[@id="content"]/div[2]/form/div/div[3]/div/div[3]/div');
	I.wait(2);
	let page_2 = await I.grabTextFrom('//span[@class="order-footer-price__price"]');
	var value_2 = page_2.replace(/[\s.,₽]/g, '');
	var value = page.replace(/[\s.,₽]/g, '');
	assert.equal(value, value_2);
});
