import arc from '@architect/functions'

export let handler = arc.http.async(fn)

async function fn (req) {
  await arc.events.publish({
    name: 'ping',
    payload: req
  })
  return { location: '/' }
}
