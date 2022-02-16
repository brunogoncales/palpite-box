const {GoogleSpreadsheet} = require('google-spreadsheet')
const credentials  = require('./credentials.json')

const doc = new GoogleSpreadsheet('1tdMnOlQSbIJpxQ_jYO-8MssktVEAs1xjtE2nrNccSSw')

const run = async() => {

 try{

  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  console.log(doc.title)

  const sheet = doc.sheetsByIndex[2]
  await sheet.loadCells('A2:B2')
  console.log(sheet.title)
  const mostrarPromocaoCell = sheet.getCell(1, 0)
  console.log(mostrarPromocaoCell.value)

  const textoCell = sheet.getCell(1, 1)

  console.log(textoCell.value)
 }catch(err){
   console.log(err)
 }
  }

run()