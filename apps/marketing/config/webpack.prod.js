const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		publicPath: '/marketing/latest/',
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'marketing',
			filename: 'remoteEntry.js',
			exposes: {
				'./Root': `./src/bootstrap`,
			},
			shared: packageJson.dependencies,
		}),
	],
})
