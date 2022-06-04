const { getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer }= require("./p4-module.js");

const fastify = require("fastify")();
// Get route and JSON/object reply
fastify.get("/", (request, reply) => {
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(
            {test: "Welcome to the server"}
        );
});

fastify.get("/cit/question", (request, reply) => {
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(
            {test: getQuestions()}
        );
});

fastify.get("/cit/answer", (request, reply) => {
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(
            {test: getAnswers()}
        );
});

fastify.get("/cit/questionanswer", (request, reply) => {
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(
            {test: getQuestionsAnswers()}
        );
});

fastify.get("/cit/question/:number", (request, reply) => {
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(
            {test: getQuestion()}
        );
});

fastify.get("/cit/answer/:number", (request, reply) => {
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(
            {test: getAnswer()}
        );
});

fastify.get("/cit/questionanswer/:number", (request, reply) => {
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(
            {test: getQuestionAnswer()}
        );
});

fastify.get("*", (request, reply) => {
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(
            {test: {
                "error": "Route not found",
                "statusCode": 404
            }}
        );
});

// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8082;
fastify.listen(listenPort, listenIP, (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});
