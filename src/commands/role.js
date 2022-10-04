const logger = require('../modules/logger')
const config = require('../utils/get-config');
const check_admin = require('../utils/check-admin')
const { MessageEmbed } = require('discord.js');
const err_embed = require('../utils/error-embed');
const { resolve } = require('path');

exports.run = async (client, message, args) => {
    try {
            // 権限の確認
        var permission_check = check_admin(message, client)
        if (permission_check == ('owner: no')){
            return;
        }
        
        //vote
        const [...choices] = args
            //絵文字 ロール 
            if (choices.length < 2 || choices.length %2 != 0)
                return message.channel.send({content: `絵文字,ロールの組み合わせで入力`})
            
            var role
            var emojis
            for (let i=0; i < choices.length/2; i+=2)
                emojis[1] = choices[i]
                role[1] = choices[i+1]
                

            //絵文字押されたら反応
            //押された絵文字の番号
            client.on('messageReactionAdd', (reaction, user) => {
            var emojid = reaction.emoji.name
            })

            role[emojis.indexOf(emojid)]



            async function sent() {
                const poll = await message.channel.send({
                    embeds: [
                        {
                            title: title,
                            description: choices.map((c, i) => `${emojis[i]} ${c}`).join('\n')
                        }
                    ]
                });
            emojis.slice(0, choices.length).forEach(emoji => poll.react(emoji))
            }





    } catch (err) {
        logger.error("コマンド実行エラーが発生しました")
        logger.error(err)
        message.channel.send(({embeds: [err_embed.main]}))
        if(config.debug.enable.includes("true")){
            message.channel.send(({embeds: [err_embed.debug]}))
            message.channel.send("エラー内容: ")
            message.channel.send("```\n"+ err + "\n```")
        }
    }
}

exports.name = "role";