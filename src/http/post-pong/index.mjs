import arc from '@architect/functions'

export let handler = arc.http.async(fn)

async function fn (req) {
  await arc.queues.publish({
    name: 'pong',
    payload: req
  })
  return { location: '/' }
}
