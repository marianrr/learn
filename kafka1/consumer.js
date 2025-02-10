import { Kafka } from 'kafkajs'

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['127.0.0.1:9092', '127.0.0.1:9093', '127.0.0.1:9094']
})

const consumer = kafka.consumer({ groupId: 'test-group' })

const runConsumer = async () => {
  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      })
    },
  })
}

runConsumer().catch(console.error)

// Handle graceful shutdown
process.on('SIGTERM', async () => {
  await consumer.disconnect()
})