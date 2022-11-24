import arc from '@architect/functions'
import data from '@begin/data'
export let handler = arc.http.async(fn)

async function fn (req) {
  let result = await data.get({table: 'stuff', key: req.params.key })
  return {
    html: `
      <h1><a href=/data>back to stuff</a></h1>
      <pre>${ JSON.stringify(result, null, 2) }</pre>
      <form method=post action=/data/${ result.key }/destroy>
        <button>delete thing</button>
      </form>
    `
  }
}
