const express = require('express')
const app = express()
// hier schauen wir ob es eine Variable PORT bei Heroku / in unserer process.env gibt. Ansonsten nehmen wir den festen Port!
const PORT = process.env.PORT || 5000
// nächste Änderung in package.json!
// Wir fügen in unserer package Json, unter scripts, den Befehl hinzu, mit dem wir den Server starten wollen:
// "scripts": { "start": "node index.js"}

// heroku login
// im Browser einloggen.
// => console zeigt deine emailadresse
// heroku create 
// erstellt ein neues Projekt auf Heroku
// unter deploy suchen wir die Zeile heroku git:remote ...
// Damit setzen wir heroku als einen upstream
// ganz normal git add . git commit ...
// aber dann 
// git push heroku master
// um  es auf Heroku zu pushen, dort wird es compilt
// mit heroku open öffnet sich das veröffentlkichte Projekt

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})



app.listen(PORT, () => console.log(`http://localhost:${PORT}`))