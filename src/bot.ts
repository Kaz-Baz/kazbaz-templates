import { Telegraf } from "telegraf";
import { setupLocalizationsMiddleware } from "./bot/middlewares/setup-localizations";
import { startCommandHandler } from "./bot/handlers/start";

import dotenv from 'dotenv-safe';

dotenv.config();


const bot = new Telegraf(process.env.TOKEN!);

bot.use(setupLocalizationsMiddleware());

bot.start(startCommandHandler);

export default bot;