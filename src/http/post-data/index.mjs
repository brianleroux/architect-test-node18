import arc from '@architect/functions'
import data from '@begin/data'

export let handler = arc.http.async(fn)

async function fn (req) {
  let result = await data.set({
    table: 'stuff',
    when: new Date(Date.now()).toISOString()
  })
  console.log(result)
  return {
    location: '/data'
  }
}
