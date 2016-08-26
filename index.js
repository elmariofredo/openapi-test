const express = require( 'express' )
const bodyParser = require( 'body-parser' )


const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, apikey");
  next()
})

app.use( bodyParser.urlencoded({ extended: true }) )
app.use( bodyParser.json() )


const port = 8090

const router = express.Router()

function apikeyCheck(req, res, next) {

    if ( req.method === 'OPTIONS' || req.headers.apikey === 'fakeAPIkey' ) {
        return next()
    }

    var err = new Error()
    err.status = 401
    next(err)

}

app.use( apikeyCheck );

router.route( '/scoring/prescoring' )
    .post( ( req, res ) => {

        if ( req.body.firstName !== 'John' ) {

            res.status(401).send( {
                "id": "a6d1a5d6dfbc4fb1be406d1359a0e5cd",
                "resultCode": "YOUSHALLNOTPASS"
            } )

        }

        res.json( {
            "id": "a6d1a5d6dfbc4fb1be406d1359a0e5cd",
            "resultCode": "PASSED"
        } )

    })


app.use( '/', router )

app.listen( port )
console.log( `Check port ${ port }` )