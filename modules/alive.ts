import Strings from "../lib/db";
import fs from "fs";
import format from "string-format";
import inputSanitization from "../sidekick/input-sanitization";
import { MessageType } from "../sidekick/message-type";
import Client from "../sidekick/client";
import { proto } from "@adiwajshing/baileys";
import XA from "../sidekick/sidekick";
const alive = Strings.alive;

export = {
    name: "alive",
    description: alive.DESCRIPTION,
    extendedDescription: alive.EXTENDED_DESCRIPTION,
    demo: { isEnabled: true, text: ".alive" },
    async handle(client: Client, chat: proto.IWebMessageInfo, XA: XA, args: string[]): Promise<void> {
        try {
			client.sendMessage(
                XA.chatId,
                fs.readFileSync("./images/alivelogo.png"),
                MessageType.image,
                {
					caption: alive.ALIVE_MSG
				}
            ).catch(err => inputSanitization.handleError(err, client, XA));
        } catch (err) {await inputSanitization.handleError(err, client, XA);
        }
    },
};
