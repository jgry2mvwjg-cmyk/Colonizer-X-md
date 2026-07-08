import stylizedChar from "../utils/fancy.js"

export async function pingTest(client, message) {
    const remoteJid = message.key.remoteJid
    const start = Date.now()

    await client.sendMessage(remoteJid, { text: "📡 Pinging..." }, { quoted: message })

    const latency = Date.now() - start

    await client.sendMessage(remoteJid, {
        text: stylizedChar(
            `🚀 𝑪𝒐𝒍𝒐𝒏☨𝒛𝒆𝒓-𝑿ˣ-𝒎𝒅\n\n` +
            `Latency: ${latency} ms\n\n` +
            `𝖙𝖚 𝖕𝖊𝖓𝖘𝖊𝖘 𝖈𝖔𝖓𝖙𝖗ô𝖑𝖊𝖗...𝖒𝖆𝖎𝖘 𝖙𝖚 𝖙𝖊 𝖙𝖗𝖔𝖒𝖕𝖊𝖘`
        )
    }, { quoted: message })
}