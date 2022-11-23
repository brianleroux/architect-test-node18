import arc from '@architect/functions'

export let handler = arc.http.async(fn)

async function fn (req) {
  return {
    html: 'hi from html'
  }
}
