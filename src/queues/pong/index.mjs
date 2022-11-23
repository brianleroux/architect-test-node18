import arc from '@architect/functions'

export let handler = arc.queues.subscribe(fn)

async function fn (event) {
  let tables = await arc.tables()
  return tables.data.put({
    scopeID: 'pong', 
    dataID: new Date(Date.now()).toISOString(),
  })
}
