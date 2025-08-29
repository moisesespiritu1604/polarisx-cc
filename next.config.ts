/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.0.189', 'localhost'],
  images: {
    domains: [], // agrega dominios si cargas imágenes externas
  },
}

module.exports = nextConfig