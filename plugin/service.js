const http = require('http')
const fs = require('fs/promises')
const path = require('path')

class webpackServer {
    port = 81 // server listening port
    index = 'index.html' // default response file name
    matchHeader = [
        {
            test:/\.(jpg|png|jpeg|gif)$/, 
            header: {
                'Content-Type':'image/jpg'
            }
        },
    ]

    constructor(){
        console.log('☕Starting dev-server...')
        
        const baseServer = new http.createServer(async (requset, response) => {
            const url = requset.url || '/'
            const isFile = url => {
                return /\.\D+$/.test(url)
            }

            const pathToFile = path.resolve(
                    __dirname,
                    '../dist' + (isFile(url) ? url : url + '/' + this.index)
                    )
                .split('?')[0]
            
            this.setHeaderByFileExt(pathToFile, response)
            try {
                response.end(await fs.readFile(pathToFile))
            } catch(e) {
                response.end(e.toString())
            }
        })
        baseServer.listen(this.port);

        this.baseServer = baseServer
    }

    setHeaderByFileExt(pathToFile, response){
        for(const match of this.matchHeader){
            const matchResult = match.test.test(pathToFile)
            if(matchResult){
                for(const key in match.header){
                    response.setHeader(
                        key, match.header[key]
                    )
                }
            }
        }
    }

    apply(compiler){
        // compiler.hooks.compile()
        // console.log(compiler)
    }
}

module.exports = webpackServer