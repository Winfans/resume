/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";

const nextConfig = isDev
    ? {}
    : {
        distDir: "dist",
        output: "export",
        // images: {
        //     loader: "custom",
        //     loaderFile: "./image-loader.js",
        // },
    };

export default nextConfig;
