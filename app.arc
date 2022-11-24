@app
testfuns

@plugins
eighteen

@ws

@events
ping

@queues
pong

@http
get /chat
get /data
get /data/:key
post /data
post /data/:key
post /data/:key/destroy
get /asap
get /
get /one/:scopeID/:dataID
post /ping
post /pong
post /update
post /delete/:scopeID/:dataID

@tables
data
  scopeID *
  dataID **
  ttl TTL

@aws
region us-west-2
architecture arm64
