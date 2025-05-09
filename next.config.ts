const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/product_list_with_cart' : '',
  assetPrefix: isProd ? '/product_list_with_cart/' : '',
  output: 'export',
};

export default nextConfig;