import arc from '@architect/functions'
import data from '@begin/data'

export let handler = arc.http.async(fn)

async function fn (req) {
  await data.destroy({
    table: 'stuff',
    key: req.params.key
  })
  return {
    location: '/data'
  }
}
