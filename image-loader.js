export default function ImageLoader({ src }) {
  // return `https://winfans.github.io/resume${src}`;
  return `${process.env.IMG_BASE_URL}${src}`;
}
