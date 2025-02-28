import {firefox, devices} from 'playwright'

const link = "https://quizlet.com/class/28791976/materials";
const browser = await firefox.launch({"headless": false});
const page = await browser.newPage();
await page.goto(link)