const path = require("path");
const { LoaderOptionsPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/main.tsx",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "build"),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			title: "Web Interface",
			template: "./src/index.html"
		})
	],
};
