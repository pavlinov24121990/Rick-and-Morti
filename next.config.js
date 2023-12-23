/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
     remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com'
      },
    ],
  },
}

module.exports = nextConfig
