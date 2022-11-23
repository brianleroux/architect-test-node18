import arc from '@architect/functions'

export let handler = arc.http.async(fn)

async function fn (req) {
  let {dataID, scopeID} = req.body
  let tables = await arc.tables()
  await tables.data.update({
    Key: {dataID, scopeID},
    UpdateExpression: `SET note = :note`,
    ExpressionAttributeValues: {
      ':note': req.body.note
    }
  })
  return { location: '/' }
}
