let { Scraper, Uploader } = require("akiraa-wb");
let fs = require("fs");
let fetch = require("node-fetch");
let moment = require("moment-timezone");
let cp = require("child_process");
let { promisify } = require("util");
let scrap = require(process.cwd() + "/scrape");

global.owner = ["33392090534"];
global.mods = ["33392090534"]; // Moderator
global.prems = ["6285731251154", "33392090534"]; // Premium
// YANG ATAS ITU UBAH JADI NOMOR LU
// & YG BAWAH INI, NOMOR,NAMA,EMAIL LU
global.fsizedoc = "45000000000"; // default 10TB
global.fpagedoc = "19";
global.numberbot = "6285179956361";
global.namedoc = "Kimoo";
global.nameowner = "Irull";
global.nomorown = "33392090534";

/*=====[ PAYMENT SETTING ]==========*/
global.dana = "-"; //kalo ga punya ubah jadi "-" aja
global.gopay = "-";
global.ovo = "-";
global.saweria = "https://saweria.co";
/*====[ PAYMENT SETTING ]==========*/
global.namebot = "Kimoo Bot";
global.sgc = "https://chat.whatsapp.com/K8soBg4gyExBfMqTQXRxpg";
global.packname = "By Kimoo";
global.sig = "https://chat.whatsapp.com/K8soBg4gyExBfMqTQXRxpg";
global.dash = "✧────···[ *Fiestaa* ]···────✧";
global.htki = "*––––––『"; // Hiasan Titile (KIRI)
global.htka = "』––––––*"; // Hiasan Title  (KANAN)
global.swa = "wa.me/6285731251154";
global.gif = "https://pomf2.lain.la/f/36vn2gpt.mp4"; //Ini buat gif yang di menu
global.deniedthumb = "https://pomf2.lain.la/f/opjqrt.jpg"
global.icon = "https://telegra.ph/file/65cf50ef0526f6b3348e6.jpg";
global.thumb = "https://telegra.ph/file/65cf50ef0526f6b3348e6.jpg";
global.version = "X-1";
global.wm = "Kimoo bot";
global.wmpanel = "Fiesta Panel"
global.watermark = wm;
global.lann = "p8ADYJib";
global.wm2 = "Kimoo";
global.menu = "button";
global.wm3 = namebot;
global.namanews = "K I M O O"
global.idgc = "120363310058214167@g.us"; //isi pake id gc lu
global.isPairing = true;
global.wm4 = namebot;
global.fla =
  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=";
global.wait = "*Loading...*";
global.eror = "*[ SYSTEM ERROR ]*";
global.done = "```By kimoo```";
global.salah = "Salah\n";
global.web = global.sourceUrl;
global.APIs = {};
global.APIKeys = {};
global.packname = "Sticker ini dibuat oleh kimo";
global.author = `🍁`;

/*--------[ API SETTING ]------------*/
global.domain = "https://example.panel.com";
global.apikey = "ptla_XXXXXXXXXXXXXX";

global.groq = {
  key: "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",
};
global.smtp = {
  email: "denjivenrier@gmail.com", //ganti pake email lu
  pass: "dzbx hpre kxve moqi", //ganti pake app password lu
  url: "https://myaccount.google.com/apppasswords", //ambil app password nya disini, tutorial banyak di YouTube
};
global.hf = {
  key: "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",
  url: "https://api-inference.huggingface.co",
};
global.prodia = {
  key: "dc80a8a4-0b98-4d54-b3e4-b7c797bc2527",
  url: "https://api.prodia.com",
};
//Login : https://maupedia.com
global.maupedia = {
  key: "FBwdVOx2iuOJvLtsmmbTYz7vLUoVnevebwPPhCrNqqWOE8IwhjsKxp01dYXmxxWp",
  signature: "0a294c50a283acae3169984591ff75580aba4518",
  secret: "pedia",
};

global.lolhuman = "Akiraa";
global.multiplier = 15000;
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      exp: "✉️",
      money: "💵",
      potion: "🥤",
      diamond: "💎",
      common: "📦",
      uncommon: "🎁",
      mythic: "🗳️",
      legendary: "🗃️",
      pet: "🎁",
      sampah: "🗑",
      armor: "🥼",
      sword: "⚔️",
      kayu: "🪵",
      batu: "🪨",
      string: "🕸️",
      kuda: "🐎",
      kucing: "🐈",
      anjing: "🐕",
      petFood: "🍖",
      gold: "👑",
      emerald: "💚",
    };
    let results = Object.keys(emot)
      .map((v) => [v, new RegExp(v, "gi")])
      .filter((v) => v[1].test(string));
    if (!results.length) return "";
    else return emot[results[0][0]];
  },
};

global.rose =
  "J8rLad2TXRKdqfVC3ToqxJy5zEqmtzI3b5y6yjzC1IIYAXl7hfhWoxtU9siJ4GU6";
global.btc = "Lio";
global.doc = pickRandom([
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/msword",
  "application/pdf",
]);
global.fetch = require("node-fetch");
global.Func = new (require(process.cwd() + "/lib/func"))();
// global.botdate = b.tanggal(new Date());
global.axios = require("axios");
global.Uploader = Uploader;
global.cheerio = require("cheerio");

const _uptime = process.uptime() * 1000;

global.fkontak = {
  key: {
    remoteJid: "0@s.whatsapp.net",
    participant: "0@s.whatsapp.net",
    id: "",
  },
  message: {
    conversation: `Բ ɿ ȝ Տ Ե Թ - 𝘉𝘰𝘵 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱  🎨`,
  },
};
global.tanggal = async (numer) => {
  const myMonths = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const myDays = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
  ];

  const tgl = new Date(numer);
  const day = tgl.getDate();
  const bulan = tgl.getMonth();
  const thisDay = tgl.getDay();
  const thisDayName = myDays[thisDay];
  const yy = tgl.getYear();
  const year = yy < 1000 ? yy + 1900 : yy;
  const time = require("moment").tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
  const d = new Date();
  const locale = "id";
  const gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
  const weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
    Math.floor((d * 1 + gmt) / 84600000) % 5
  ];

  return `${thisDayName}, ${day} - ${myMonths[bulan]} - ${year}`;
};
global.fakestatus = (txt) => {
  return {
    key: {
      remoteJid: "0@s.whatsapp.net",
      participant: "0@s.whatsapp.net",
      id: "",
    },
    message: {
      conversation: txt,
    },
  };
};

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log("Update config.js");
  delete require.cache[file];
  require(file);
});
