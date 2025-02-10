import { Kafka } from 'kafkajs'

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['127.0.0.1:9092', '127.0.0.1:9093', '127.0.0.1:9094']
})

const producer = kafka.producer()

const runProducer = async () => {
  await producer.connect()
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  })
  await producer.disconnect()
}

runProducer().catch(console.error)