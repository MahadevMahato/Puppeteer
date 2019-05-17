const puppeteer = require('puppeteer');
const fs = require('fs');
const request = require('request-promise');
async function main() {
	const browser = await puppeteer.launch({
		headless: false,
		devtools: true
	});
	const page = await browser.newPage();
	await page.setViewport({width: 1300, height: 720})
	await page.goto('https://www.google.com/');
	await page.type('input', 'facebook');
	await page.waitFor(1500);
	const btnNext = await page.$('.gNO89b');
	await btnNext.click();	
	await page.waitForSelector('h3.LC20lb', {timeout: 10000});
    await page.evaluate(() => {
		const iIndex='0';
		let elements = document.querySelectorAll('h3.LC20lb')
	 elements[iIndex].click();
     }, {timeout: 0, waitUntil: 'networkidle0' });
	await page.waitFor(30000);
	await page.type('#email', 'email');
	await page.type('#pass', 'password');
	await Promise.all([
          page.click('#u_0_2'),
          page.waitForNavigation({timeout: 0, waitUntil: 'networkidle0' }),
	]);
	await page.waitFor(100000);
	browser.close();
}
main();