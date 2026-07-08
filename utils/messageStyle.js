import fs from "fs"
import stylizedChar from "./fancy.js"

export default function stylizedCardMessage(text) {
  return {
    text: stylizedChar(text),
    contextInfo: {
      externalAdReply: {
        title: "𝑪𝒐𝒍𝒐𝒏☨𝒛𝒆𝒓-𝑿ˣ-𝒎𝒅",
        body: "𝐋𝐞 𝐂𝐨𝐥𝐨𝐧☨𝐬𝐚𝐭𝐞𝐮𝐫✞",
        thumbnail: fs.readFileSync("./database/DigiX.jpg"),
        sourceUrl: "https://whatsapp.com",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }
}
