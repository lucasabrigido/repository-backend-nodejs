module.exports = function (api) {
    api.cache(true);

    const presets = [
        [ '@babel/preset-env', { targets: { node: '12.14' }, debug: false } ],
    ];

    const plugins = ["@babel/plugin-proposal-optional-chaining"];

    return {
        presets,
        plugins,
    };
};
