const path = require('path')
const globule = require('globule')
const WriteFilePlugin   = require('write-file-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isDevelopment = process.env.NODE_ENV === 'development'
const isNotProduction = process.env.NODE_ENV !== 'production'
const targetTypes = [
  { srcDir: 'src', inputExtension: 'tsx' },
]

const getEntriesList = () => {
  const entriesList = {}
  targetTypes.forEach( targetType => {
    const { srcDir, inputExtension } = targetType
    const filesMatched = globule.find(`[a-z]*.${inputExtension}`, { cwd: `./${srcDir}` })
    filesMatched.forEach( srcName => {
      targetName = srcName.replace(new RegExp(`(.*)[.]${inputExtension}$`, 'i'), '$1')
      entriesList[targetName] = `${__dirname}/${srcDir}/${srcName}`
    })
  })
  return entriesList
}

module.exports = {
  entry: getEntriesList(),
  output: {
    path: path.join(__dirname, 'dist/static'),
    publicPath: '/static/',
    filename: 'js/[name].js',
  },
  watch: isDevelopment,
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true,
        },
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png)$/,
        loaders: 'url-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.sass/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: isNotProduction,
              importLoaders: 2,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isNotProduction,
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, `.env/.${process.env.NODE_ENV}`)
    }),
    new WriteFilePlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new CopyWebpackPlugin(
      [
        {
          from: './public',
          to: '../',
          ignore: [ '.gitkeep', '.DS_Store', 'README.md' ]
        },
        {
          from: './src/assets/images',
          to: './images',
          ignore: [ '.gitkeep', '.DS_Store' ]
        }
      ],
      { copyUnmodified: true },
    ),
  ],
}

