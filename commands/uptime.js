export async function uptime(client, message) {
    const remoteJid = message.key.remoteJid
    const uptime = process.uptime()
    
    const days = Math.floor(uptime / 86400)
    const hours = Math.floor((uptime % 86400) / 3600)
    const minutes = Math.floor((uptime % 3600) / 60)
    const seconds = Math.floor(uptime % 60)
    
    const text = `┌─ 𝐋𝐞 𝐂𝐨𝐥𝐨𝐧☨𝐬𝐚𝐭𝐞𝐮𝐫 ✞ ─┐
│
│ ⏱️ Uptime: ${days}d ${hours}h ${minutes}m
│ 💾 RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(1)}MB
│
│ "𝖙𝖚 𝖕𝖊𝖓𝖘𝖊𝖘 𝖈𝖔𝖓𝖙𝖗ô𝖑𝖊𝖗...𝖒𝖆𝖎𝖘 𝖙𝖚 𝖙𝖊 𝖙𝖗𝖔𝖒𝖕𝖊𝖘."
│     - 𝑪𝒐𝒍𝒐𝒏☨𝒛𝒆𝒓-𝑿ˣ-𝒎𝒅 -
└────────────────────┘`
    
    await client.sendMessage(remoteJid, { text: text })
}

export default uptime