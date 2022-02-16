const {GoogleSpreadsheet} = require('google-spreadsheet')
const credentials  = require('./credentials.json')

const doc = new GoogleSpreadsheet('1tdMnOlQSbIJpxQ_jYO-8MssktVEAs1xjtE2nrNccSSw')

const run = async() => {

  try{
  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[1]
  // Nome 	Email 	Whatsapp	Cupom 	Promo
  await sheet.addRow({
    Nome: 'Bruno Goncales', 
    Email: 'goncales_b@yahoo.com',
    Whatsapp: '15 98172-1501',
    Cupom:'aaa111', 
    Promo: 'adsadsf'
  })

  console.log(doc.title)
  }catch(err) {
    console.log(err)
  }
}
run()