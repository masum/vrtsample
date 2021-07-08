const {exec} = require("child_process");
const moment = require("moment");

const config = {
  "output_path": "output"
}

/**
 * 共通処理クラス
 *
 * @class util
 */
class util {
  /**
   * Creates an instance of util.
   * @param {*} page playwrightのPAGE
   * @memberof util
   */
  constructor(page) {
    this.page = page;
    this.lang = process.env.jest_lang;
    this.mode = process.env.jest_screenshot_mode;
    this.path_base = `${config.output_path}/screenshot/${this.lang}/${(this.mode === "master") ? "master" : moment().format("YYYY-MM-DD")}`;
    this.path_img = `${this.path_base}${(this.mode === "master") ? "" : "/img"}`;
    this.path_diff = `${this.path_base}/diff`;
  }

  /**
   * 現在表示しているページのスクリーンショットを取る
   * 保存先のパスを共通化することを目的として関数化
   *
   * @param {*} name 保存するファイル名
   * @memberof util
   */
  async screenshot(name) {
    await this.page.screenshot({path: `${this.path_img}/${name}.png`});
  }

  /**
   * 現在のフォルダと、masterフォルダとのDiff
   *
   * @memberof util
   */
  diff() {
    if (this.mode !== "master") {
      let cmd = [];
      cmd.push("npx")
      cmd.push("reg-cli");
      cmd.push(this.path_img);
      cmd.push(`${config.output_path}/screenshot/${this.lang}/master`)
      cmd.push(this.path_diff);
      cmd.push(`--report ${this.path_base}/index.html`);
      cmd.push(`--json ${this.path_base}/reg.json`);
      cmd.push("--matchingThreshold 0.05");
      exec(cmd.join(" "), (error, stdout, stderr) => {
        if (stdout.indexOf("✘") != -1) {
          throw new Error('Test failed.');
        }
      });
    }
  }
}

module.exports = util;
