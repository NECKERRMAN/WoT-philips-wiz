import * as mqtt from "mqtt"  // import everything inside the mqtt module and give it the namespace "mqtt"

const host = MQTT SERVER TO DO
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `mqtt://${host}:${port}`

const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'admin',
  password: '1234',
  reconnectPeriod: 1000,
})

const subTopic = 'Room/My room/Props/Box/outbox'
const pubTopic = 'Room/My room/Props/Box/inbox'

client.on('connect', () => {
  console.log('Connected')
  client.subscribe([pubTopic], () => {
    console.log(`Subscribe to topic '${pubTopic}'`)
  })
})

client.on('message', (subTopic, payload) => {
    console.log(payload.toString())

})

client.on('connect', () => {
    client.publish(subTopic, 'nodejs mqtt test', { qos: 0, retain: false }, (error) => {
      console.log('Published')
    if (error) {
        console.error(error)
    }
    })
})

/* 
const subTopic = 'Room/My room/Props/Box/outbox'
const pubTopic = 'Room/My room/Props/Box/inbox'

client.on('connect', () => {
  console.log('Connected')
  client.publish(topic, 'Hello from Node.js')
}) 

client.on('message', (pubTopic, payload) => {
  console.log('Received Message:', subTopic, payload.toString())

})

client.on('connect', () => {
  client.publish(subTopic, 'nodejs mqtt test', { qos: 0, retain: false }, (error) => {
  if (error) {
      console.error(error)
  } else {
    console.log('Message sent')
}
  })
})
 */