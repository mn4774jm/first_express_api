// telling api developer server that any requests need to be sent to this address (The express server)
module.exports = {
    devServer: {
        proxy: 'http://127.0.0.1:3000'
    }
}