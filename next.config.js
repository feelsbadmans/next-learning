module.exports = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgoConfig: {
                            plugins: [
                                {
                                    removeViewBox: false,
                                },
                            ],
                        },
                        memo: true,
                        svgProps: {
                            width: '18px',
                            height: '18px',
                        },
                    },
                },
                'url-loader',
            ],
        });

        return config;
    },
};
