// next.config.js
module.exports = {
    images: {
        domains: ['https://picsum.photos'], // Add other domains as needed
    },
};


module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
        ],
    },
}