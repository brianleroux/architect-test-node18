import arc from '@architect/functions'
export let handler = arc.http.async(fn)

async function fn (req) {
  let tables = await arc.tables()
  let {dataID, scopeID} = req.params
  let result = await tables.data.get({dataID, scopeID})
  return {
    html: `
      <form method=post action=/update>
        <input type=hidden name=dataID value=${dataID}>
        <input type=hidden name=scopeID value=${scopeID}>
        <textarea name=note></textarea>
        <button>save</button>
      </form>
      <pre>${ JSON.stringify(result, null, 2) }</pre>
    `
  }
}
