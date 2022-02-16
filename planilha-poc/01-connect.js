const {GoogleSpreadsheet} = require('google-spreadsheet')
const credentials  = require('./credentials.json')

const doc = new GoogleSpreadsheet('1tdMnOlQSbIJpxQ_jYO-8MssktVEAs1xjtE2nrNccSSw')

const run = async() => {

  try{
  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  console.log(doc.title)
  }catch(err) {
    console.log(err)
  }
}
run()