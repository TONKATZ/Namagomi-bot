const logger = require('../modules/logger')
const err_embed = require('../utils/error-embed')

exports.run = (client, message, args) => {
    try{
        function bukkubukku(){
        let arr = ["ﾌﾞｯｸﾌﾞｯｸ", "本が溺れた。ﾌﾞｯｸﾌﾞｯｸｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗ"];
        var random = Math.floor(Math.random() * arr.length);
        var result = arr[random];
        message.channel.send({content: result});
        }

        let arr = ["大吉", "中吉", "小吉", "吉", "凶", "大凶", "ﾌﾞｯｸﾌﾞｯｸ(大吉)", "超大吉", "超大凶"];
        var random = Math.floor(Math.random() * arr.length);
        var result = arr[random];
        message.channel.send({content: result});
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

exports.name = "omikuji";