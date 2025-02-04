const config = require("../../utils/get-config");
const { MessageEmbed } = require("discord.js");

const top = new MessageEmbed({
  title: "Page(1/4)",
  fields: [
    {
      name: "基本コマンド",
      value:
        "------------------------------ \n このbotの基本的なコマンドを表示します \n コマンドは、設定したprefix + コマンド名 で動作します \n ------------------------------",
    },
    {
      name: "`omikuji`",
      value: "おみくじをします",
    },
    {
      name: "`vote [タイトル] [投票1] [投票2] ● ● ●`",
      value: "投票を行います",
    },
    {
      name: "`random [選択肢1] [選択肢2] ● ● ●`",
      value: "抽選を行います",
    },
    {
      name: "`random-num [試行回数] [選択肢1] [選択肢2] ● ● ●`",
      value: "任意の回数抽選を行います",
    },
    {
      name: "`help-(pageID)`",
      value: "指定したページID(例: 2)のhelpを表示します",
    },
    {
      name: "次のページを表示する",
      value: "`help-2`",
    },
  ],
});
const page2 = new MessageEmbed({
    title: "Page(2/4)",
    fields: [
        {
            name: "詳細コマンド",
            value: "------------------------------ \n このbotのシステムに関するコマンドを表示します \n ------------------------------",
        },
        {
            name: "`ping`",
            value: "ping値を表示します",
        },
        {
            name: "`about`",
            value: "botの情報を表示します",
        },
        {
            name: "`status`",
            value: "botのステータスを表示します",
        },
        {
            name: "`version`",
            value: "botのバージョンを表示します",
        },
        {
            name: "`license`",
            value: "このbotのライセンスを表示します",
        },
        {
            name: "`user [メンションもしくはID]`",
            value: "ユーザー情報を表示します",
        },
        {
            name: "次のページを表示する",
            value: "`help-3`",
        },
    ],
});
const page3 = new MessageEmbed({
    title: "Page(3/4)",
    fields: [
        {
            name: "設定コマンド",
            value: "------------------------------ \n このbotの設定機能に関するコマンドを表示します \n ------------------------------",
        },
        {
            name: "`one-day-kuji`",
            value: "おみくじを1日限定にするかを設定します",
        },
        {
            name: "`one-day-tawasi`",
            value: "1日1たわしさんを有効にするかを設定します",
        },
        {
            name: "`profile-update`",
            value: "profileを最新のものに更新します",
        },
        {
            name: "`set-prefix 【設定したいprefix】`",
            value: "接頭辞を設定します(設定は設定を行ったユーザーのみに)",
        },
        {
            name: "`set-twitter-url-show 【設定(true|false)】`",
            value: "Twitter投稿展開機能を設定します(設定は設定を行ったユーザーのみに)",
        },
        {
            name: "次のページを表示する",
            value: "`help-4`",
        },
    ],
});
const page4 = new MessageEmbed({
    title: "Page(4/4)",
    fields: [
        {
            name: "管理者コマンド",
            value: "------------------------------ \n このコマンドは管理者のみ実行可能です \n ------------------------------",
        },
        {
            name: "`eval 【評価するjsコード】`",
            value: "コードを評価します",
        },
        {
            name: "`shell 【実行するshellコマンド】`",
            value: "shellコマンドを実行します",
        },
        {
            name: "`reload 【コマンド名】`",
            value: "コマンドをリロードします",
        },
        {
            name: "`check 【調べるユーザーのID】`",
            value: "DBに保存されているデータを表示します",
        },
        {
            name: "`shutdown`",
            value: "botをシャットダウンします",
        },
        {
            name: "`reset-tawasi 【1日1たわしをリセットするユーザーのID】`",
            value: "ユーザーの1日1たわしをリセットします",
        },
        {
            name: "`prefix-reset 【リセットするユーザーのID】`",
            value: "prefixのリセットを行いconfigで設定されているものに強制的に置き換えます",
        },
        {
            name: "`block 【ブロックするユーザーのID】`",
            value: "ブロックを行い、指定したユーザーのコマンド実行を禁止します",
        },
        {
            name: "`unblock 【ブロックを解除するユーザーのID】`",
            value: "ユーザーのブロックを解除します",
        },
        {
            name: "`hardblock 【ハードブロックするユーザーのID】`",
            value: "前提: ユーザーのブロック \n ハードブロックを行った場合ブロックされていることを通知するメッセージを表示しません",
        },
        {
            name: "`unhardblock 【ハードブロックを解除するユーザーのID】`",
            value: "ユーザーのハードブロックを解除します",
        },
    ],
});
exports.top = top;
exports.page2 = page2;
exports.page3 = page3;
exports.page4 = page4;
