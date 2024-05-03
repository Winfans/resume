/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";

const nextConfig = isDev
    ? {}
    : {
        distDir: "dist",
        output: "export",
        basePath: '/resume',
        // images: {
        //     loader: "custom",
        //     loaderFile: "./image-loader.js",
        // },
    };

export default Object.assign(nextConfig, {});
