const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'oolong tea': {
        'type': 'true tea',
        'origin': 'Fujian, Southeastern coastal province of China',
        'waterTemp': 184,
        'steepTimeSeconds': '10 seconds to 8 minutes',
        'caffinated': true,
        'flavor': 'wide variety of flavours and colours'
    },
    'matcha tea': {
        'type': 'green',
        'origin': 'Yo mommas HOuse',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': false,
        'flavor': 'delicious'
    },
    'black tea': {
        'type': 'true tea',
        'origin': 'China, and India',
        'waterTemp': 184,
        'steepTimeSeconds': '10 seconds to 8 minutes',
        'caffinated': true,
        'flavor': 'strong, bold, full body'
    },
    'green tea': {
        'type': 'true tea',
        'origin': 'China, and Japan',
        'waterTemp': 184,
        'steepTimeSeconds': '10 seconds to 8 minutes',
        'caffinated': true,
        'flavor': 'lighter, milder taste, with some hints of sweetness'
    },
    'white tea': {
        'type': 'true tea',
        'origin': 'China, and Japan',
        'waterTemp': 184,
        'steepTimeSeconds': '10 seconds to 8 minutes',
        'caffinated': true,
        'flavor': 'light with mild but crisp flavour'
    },
    'unknown': {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTimeSeconds': 0,
        'caffinated': false,
        'flavor': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const teaName = request.params.name.toLowerCase()
    if (tea[teaName]) {
        response.json(tea[teaName])
    } else {
        response.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})