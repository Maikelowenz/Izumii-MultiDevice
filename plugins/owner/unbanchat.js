export default {
    command: ["unbanchat"],
    description: "Unbanned chat di group",
    example: "",
    name: "unbanchat",
    tags: "owner",

    owner: true,

    run: async(m, { conn, command }) => {
			m.reply("*Success* Unbanned Chat")
			db.chats[m.chat].isBanned = false
	} 
}