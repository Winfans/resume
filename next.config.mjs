/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";
const basePath = process.env.BASE_PATH;
const nextConfig = isDev
    ? {}
    : {
        distDir: "dist",
        output: "export",
        basePath: basePath,
        images: {
            loader: "custom",
            loaderFile: "./image-loader.js",
        },
    };

export default Object.assign(nextConfig, {});
