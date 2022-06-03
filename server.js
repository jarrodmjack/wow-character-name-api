const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;



const wowCharacters = {
    'arthas': {
        'name': 'Arthas Menethil',
        'birthplace': 'Lordaeron',
        'living?': 'no'
    },
    'tirion': {
        'name': 'Tirion Fordring',
        'birthplace': 'Lordaeron',
        'living?': 'no'
    },
    'unknown': {
        'name': 'unknown',
        'birthplace': 'unknown',
        'living?': 'unknown'
    }
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

// :charName takes from url query parameter
app.get('/api/:charName', (req, res) => {
    const character = req.params.charName.toLowerCase()
    if(wowCharacters[character]){
        res.json(wowCharacters[character])
    }else{
        res.json(wowCharacters['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})