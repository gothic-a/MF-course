const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const packageJson = require('../package.json')

module.exports = merge(commonConfig, {
	mode: 'development',
	devServer: {
		static: './dist',
		port: 3001,
		hot: true,
		historyApiFallback: true,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'marketing',
			filename: 'remoteEntry.js',
			exposes: {
				'./Root': './src/bootstrap',
			},
			shared: packageJson.dependencies,
		}),
	],
})
