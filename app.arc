@app
testfuns

@plugins
eighteen

@events
ping

@queues
pong

@http
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
