
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                // protocol: 'http',
                // hostname: '127.0.0.1',
                // port: '8000',
                // pathname: '/media/**',

                protocol: 'https',
                hostname: 'fixworks-paquet.com',
                port: '',
                pathname: '/media/**',
            },
        ],
    },
    env: {
        // API_URL: "http://127.0.0.1:8000",
        HostName: "https://fixworks-paquet.com",
        API_URL: "https://fixworks-paquet.com",
    },
}

module.exports = nextConfig
