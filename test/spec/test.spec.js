const playwright = require("playwright");
const utility = require("../lib/util.js");

let target = "chromium"; // or 'chromium', 'firefox'
let browser;
let context;
let page;
let util;

describe("screenshot", () => {
  // このテストファイルのすべてのテストが実行される前1回だけ実行される
  beforeAll(async () => {
    browser = await playwright[target].launch({headless: true});
    context = await browser.newContext()
    page = await context.newPage()
    util = new utility(page);
  });

  // このテストファイルのすべてのテストが実行された後1回だけ実行される
  afterAll(async () => {
    await page.close();
    await context.close();
    await browser.close();
    util.diff();
  });

  // このテストファイルにあるテスト(it)が実行される前に毎回実行される
  beforeEach(() => {
  });

  // このテストファイルにあるテスト(it)が実行された後に毎回実行される
  afterEach(() => {
  });

  it("1", async () => {
    await page.goto("http://www.yahoo.co.jp/");
    await util.screenshot("yahoo");
  });

  it("2", async () => {
    await page.goto("http://www.google.co.jp/");
    await util.screenshot("google");
  });

  it("3", async () => {
    await page.goto("https://weather.yahoo.co.jp/weather/zoomradar/");
    await util.screenshot("weather");
  });

});
