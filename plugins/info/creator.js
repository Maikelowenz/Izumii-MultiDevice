export default {
    command: ["owner", "creator"],
    description: "Nomor owner atau creator yang membuat bot ini",
    example: "",
    name: "owner",
    tags: "info",

    run: async(m, { conn }) => {
    await conn.sendContact(m.chat, global.owner, m);
    func.delay(1000)
        m.reply("That is my owner's number, don't forget to chat.")
    }
}