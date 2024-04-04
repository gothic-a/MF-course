const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const packageJson = require('../package.json')

const PORT = 3003

module.exports = merge(commonConfig, {
	mode: 'development',
	output: {
		publicPath: `http://localhost:${PORT}/`,
	},
	devServer: {
		static: './dist',
		port: PORT,
		hot: true,
		historyApiFallback: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'dashboard',
			filename: 'remoteEntry.js',
			exposes: {
				'./Root': './src/bootstrap',
			},
			shared: packageJson.dependencies,
		}),
	],
})
