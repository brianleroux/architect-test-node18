import arc from '@architect/functions'

export let handler = arc.http.async(fn)

async function fn (req) {
  let tables = await arc.tables()
  await tables.data.delete(req.params)
  return { location: '/' }
}
