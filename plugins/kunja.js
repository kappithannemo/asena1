/* Copyright (C) 2021 Vai838.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

const Language = require('../language');
const Lang = Language.getString('weather');



Asena.addCommand({pattern: 'kunja ?(.*)', fromMe: false }, async (message, match) => {   
	if (match[1] === 'xx') return await message.reply("sorry");
	const url = `https://api.simsimi.net/v1/?text=${match[1]}&lang=en&cf=false`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
	  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n```' + json.messages[0].response + '```\n\n' , MessageType.text,{quoted: message.data});
	} catch {
		return await message.client.sendMessage(message.jid, "Err..error", MessageType.text);
	}
}));
