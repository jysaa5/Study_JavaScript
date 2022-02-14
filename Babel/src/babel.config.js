export default function () {
  return {
    // plugins: ["@babel/plugin-transform-block-scoping", "@babel/plugin-transform-arrow-functions", "@babel/plugin-transform-strict-mode"],
    // presets: ["./mypreset.js"],
    // presets: ["@babel/preset-env"],
    presets: [
      [
        "@babel/preset-env",
        {
          // targets: {
          //   chrome: "79",
          //   ie: "11",
          // },
          useBuiltIns: "usage",
          corejs: {
            // 폴리필 버전 지정
            version: 2,
          },
        },
      ],
    ],
  };
}
