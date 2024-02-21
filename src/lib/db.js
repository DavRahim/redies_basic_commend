// import { createClient } from "redis";

// const client = createClient({
//   password: "pfbcOA9oYuvDvH6cebIlR7RevCTpw3Wt",
//   socket: {
//     host: "redis-12670.c267.us-east-1-4.ec2.cloud.redislabs.com",
//     port: 12670,
//   },
// });


import { createClient } from "redis";

const client = createClient({
  password: process.env.REDIS_PW,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

client.on("error", (err) => console.log(err));

if (!client.isOpen) {
  client.connect();
}

// client.set('name', 'mario')

export { client };