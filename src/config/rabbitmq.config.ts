import "dotenv/config";

export default {
  rabbitMQ: {
    url: String(process.env.RabbitMQ_Link),
    queues: {
      adminQueue: "admin_queue",
      userQueue: "user_queue",
    },
  },
};
