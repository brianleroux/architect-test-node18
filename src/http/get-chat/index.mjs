import arc from "@architect/functions"

export let handler = arc.http.async(fn)

async function fn (req) {
  console.log(process.env)
  return {
    html: `<!doctype html>
<html>
<body>
<h1>Web sockets echo server demo</h1>
<main>Loading...</main>
<input id=message type=text placeholder="Enter message" autofocus>
<script>
window.WS_URL = '${process.env.ARC_WSS_URL}'
</script>
<script type=module src=/_static/index.mjs></script>
</body>
</html>`
  }
}
