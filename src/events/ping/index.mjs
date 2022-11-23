import arc from '@architect/functions'

export let handler = arc.events.subscribe(fn)

async function fn (event) {
  let tables = await arc.tables()
  console.log(tables)
  return tables.data.put({
    scopeID: 'ping', 
    dataID: new Date(Date.now()).toISOString(),
  })
}
