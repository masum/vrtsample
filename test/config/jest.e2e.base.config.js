// Jest の構成はプロジェクトの package.json または jest.config.js か jest.config.ts ファイル、または
// --config < path / to / file.js | ts | cjs | mjs | json > オプションを通して設定できます。
// package.json に Jest の構成を保存する場合は、Jest が設定を見つけられるように "jest" キーを
// トップレベルに設定する必要があります：
// https://jestjs.io/ja/docs/configuration


let config = {};

config["name"] = "test-project";
config["preset"] = "jest-playwright-preset";
config["verbose"] = true;
config["testResultsProcessor"] = "jest-jenkins-reporter";

// プロジェクトのルートディレクトリ
config["rootDir"] = "../..";

// デフォルトでは、Jest はすべてのテストを実行し、完了時にすべてのエラーをコンソールに生成します。
// Bail オプションにより、指定した回数テストが失敗した場合にテストを中止することができます。
// true に設定した場合は、 1 に設定するのと同じになります。Default=0
config["bail"] = 0;

// 実行中に、テストと一緒に表示するラベル
config["displayName"] = {
  name: 'e2e-test',
  color: 'blue',
};

// 非推奨のAPI呼び出し時にエラー表示。Default=false
config["errorOnDeprecated"] = false;

// 共通のグローバル環境変数
config["globals"] = {};

// テストの起動時に実行されるモジュールです。DBのセットアップなどに利用します
config["globalSetup"] = "<rootDir>/test/config/global.setup.default.js";

// テストの終了時に実行されるモジュールです。DBのクリーンアップなどに利用します。ただし強制終了すると実行されません
config["globalTeardown"] = "<rootDir>/test/config/global.teardown.default.js";

// テストのステータスをOSの通知機能に通知してくれます。--watch オプションでバックグラウンドで実行している場合に便利です
config["notify"] = true;

// notify: true のときの通知するモード
//   always ：常に通知を送信します。
//   failure ：テストが失敗したときに通知を送信します。
//   success ：テストに合格したときに通知を送信します。
//   change ：ステータスが変更されたときに通知を送信します。
//   success - change ：テストに合格したとき、または失敗したときに1回通知を送信します。
//   failure - change ：テストが失敗したとき、またはテストが合格したときに1回通知を送信します。
config["notifyMode"] = "failure-change";

// test.concurrent を使用するときに同時に実行できるテストの数を制限する数
config["maxConcurrency"] = 5;

// 使用するファイル拡張子の配列
config["moduleFileExtensions"] = ["js", "jsx", "ts", "tsx", "json", "node"];

// 除外するモジュールのパスの配列
config["modulePathIgnorePatterns"] = [];

// カスタムレポーターをJestに追加
config["reporters"] = ["default"];

// テストファイルのglobパターン。testRegex と同時利用不可
config["testMatch"] = ['**/__tests__/**/*.js?(x)', '**/?(*.)spec.js?(x)']

// config["snapshotResolver"] = "<rootDir>/test/@config/snapshotResolver.js";

module.exports = config;
