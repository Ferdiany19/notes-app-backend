const amqp = require('amqplib');

const ProducerService = {
  // async function untuk mengirim pesan ke queue
  sendMessage: async (queue, message) => {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue(queue, {
      durable: true,
    });

    // kirim pesan ke queue
    await channel.sendToQueue(queue, Buffer.from(message));

    // jangan lupa tutup koneksi, beri jeda 1 detik
    setTimeout(() => {
      connection.close();
    }, 1000);
  },
};

module.exports = ProducerService;
