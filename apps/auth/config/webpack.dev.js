const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		static: './dist',
		port: 3002,
		hot: true,
		historyApiFallback: {
			index: 'index.html',
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
})
