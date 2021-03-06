export const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
export const NEXT_PUBLIC_SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const pattern = new RegExp(
  "^(?!.*[Hh][Tt][Tt][Pp][Ss]?:\\/\\/)" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$",
  "i"
); // fragment locator

export const emojis: { [index: string]: string } = {
  "ð": "smile",
  "ð": "upside_down",
  "ðĪŠ": "quirky",
  "ðĪ": "nerd",
  "ðĪŊ": "mind_blown",
  "ðī": "sleep",
  "ðĐ": "poop",
  "ðŧ": "ghost",
  "ð―": "alien",
  "ðĪ": "robot",
  "ðū": "game",
  "ð": "open",
  "ð": "vulkan",
  "âïļ": "peace",
  "ðĪ": "love",
  "ðĪ": "rock",
  "ðĪ": "call",
  "ð": "wave",
  "ð­": "rat",
  "ðĶ": "dino",
  "ðĶ": "t_rex",
  "ð": "dragon",
  "ðĪĄ": "clown",
  "âïļ": "cloud",
  "ð": "rainbow",
  "ð": "ocean",
  "ð": "volcano",
  "ð": "mountain",
  "ð": "earth",
  "ð": "new_moon",
  "ð": "waxing_crescent",
  "ð": "first_quarter",
  "ð": "waxing_gibbous",
  "ð": "full_moon",
  "ð": "waning_gibbous",
  "ð": "last_quarter",
  "ð": "waning_crescent",
  "ð": "crescent",
  "ð": "new_moon_with_face",
  "ð": "first_quarter_moon_with_face",
  "ð": "last_quarter_moon_with_face",
  "ð": "full_moon_with_face",
  "ð": "sun_with_face",
  "ð": "star",
  "ð ": "star2",
  "ð": "grin",
  "ð": "smiley",
  "ð": "grin2",
  "ð": "laugh",
  "ð": "smile2",
  "ð": "joy",
  "ðĪĢ": "joy2",
};

export const links = [
  "ctrlalt.fun",
  "www.ctrlalt.fun",
  "ctrlaltfun.vercel.app",
  "v.myhal.club",
  "v.tinkertools.design",
  "v.zaidmukaddam.biz",
  "v.linkto.study",
  "v.boringstonks.live",
  "v.zaidmkz.xyz",
];
