import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { app } from "../app";
import request from "supertest";
import jwt from "jsonwebtoken";

jest.mock("../nats-wrapper.ts");


declare global {
  namespace NodeJS {
    interface Global {
      signin: () => string[];
    }
  }
}

let mongo: MongoMemoryServer;
beforeAll(async () => {
  jest.clearAllMocks()
  process.env.JWT_KEY = "asdfasdf";

  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let coll of collections) {
    await coll.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

global.signin = () => {
  // Build a JWT payload
  const payload = {
    id: new mongoose.Types.ObjectId().toHexString(),
    email: "foo@bar.com",
  };

  const token = jwt.sign(payload, process.env.JWT_KEY!);
  const session = { jwt: token };
  const sesionJSON = JSON.stringify(session);

  const base64 = Buffer.from(sesionJSON).toString("base64");

  return [`express:sess=${base64}`];
};
