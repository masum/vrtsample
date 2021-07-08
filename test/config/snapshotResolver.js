module.exports = {
  /**
   * テストファイルのパス => スナップショットのファイルパスに変換
   * test/src/index.test.js
   * => src/index.test.snap
   */
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath.replace('dist/', '').replace('.js', '') + snapshotExtension,

  /**
   * スナップショットのファイルパス => テストのファイルパスの変換
   * src/index.test.snap
   * => dist/src/test/create.test.js
   */
  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath
      .replace('src/', 'dist/api/src/')
      .slice(0, -snapshotExtension.length) + '.js',

  /**
   * 整合性の確認のためのサンプルが必須のようです
   */
  testPathForConsistencyCheck: 'dist/src/example.test.js',
};
