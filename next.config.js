/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       include: path.join(__dirname, "src/components"),
  //       use: [
  //         "style-loader",
  //         {
  //           loader: "typings-for-css-modules-loader",
  //           options: {
  //             modules: true,
  //             namedExport: true,
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
