let express = require("express"); 
let cors = require("cors");
let bodyParser = require("body-parser");
const translateAPI = require('@iamtraction/google-translate');
let app = express();

app.use(cors());
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
 

 
app.post('/translate', async (req, res) => {
    let data = req.body;

    let translatedData = await translate(data)
    res.send(JSON.stringify(translatedData));
})
 
 
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

async function translate(rawdata){
    console.log(rawdata.text)

        let translatedtext = await translateAPI(rawdata.text,{to: rawdata.translateTo});

        translatedtext = translatedtext.text;



    let translatedData = {
        text : translatedtext
    }
    return translatedData;
}