import arc from '@architect/functions'
export let handler = arc.http.async(fn)

async function fn (req) {
  let tables = await arc.tables()
  let result = !!req.query.scopeID === false ? await tables.data.scan({}) : await tables.data.query({
    KeyConditionExpression: 'scopeID= :scopeID',
    ExpressionAttributeValues: {
      ':scopeID': req.query.scopeID
    }
  })
  let reflect = await tables.reflect()
  let scopeID = result.Items[0] && result.Items[0].scopeID
  let dataID = result.Items[0] && result.Items[0].dataID
  let list = result.Items.map(d => {
    return `<li><a href=/one/${d.scopeID}/${d.dataID}>${ d.dataID }</a></li>`
  })
  return {
    html: `
      <a href=/>scan</a> | 
      <a href=/?scopeID=ping>pings</a> | 
      <a href=/?scopeID=pong>pongs</a> | 
      <a href=/asap>asap</a> | 
      <a href=/chat>chat</a> | 
      <a href=/data>data</a>

      <h1>${ process.version }</h1>
      <form method=post>
        <button formaction=/ping>ping</button>
        <button formaction=/pong>pong</button>
        <button formaction=/delete/${scopeID}/${dataID}>delete one</button>
      </form>
      <ul>${ list.join('') }</ul>
      <hr>
      <pre>${ JSON.stringify(reflect, null, 2) }</pre>
    `
  }
}
