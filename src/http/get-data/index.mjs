import arc from '@architect/functions'
import data from '@begin/data'
export let handler = arc.http.async(fn)

async function fn (req) {
  let result = await data.get({table: 'stuff'})
  console.log(result.cursor)
  let list = result.map(d => {
    return `<li><a href=/data/${ d.key }>${ d.when }</a></li>`
  })
  return {
    html: `
      <h1>stuff</h1>
      <form method=post action=/data>
        <button>add thing</button>
      </form>
      <ul>${ list.join('') }</ul>
      <hr>
      <pre>${ JSON.stringify(result, null, 2) }</pre>
    `
  }
}
