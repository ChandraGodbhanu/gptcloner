/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:['https://Links.papareact.com/']
  },
  experimental:{
    appDir :true, 
  },
}

module.exports = nextConfig
