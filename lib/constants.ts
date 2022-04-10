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
  "😊": "smile",
  "🙃": "upside_down",
  "🤪": "quirky",
  "🤓": "nerd",
  "🤯": "mind_blown",
  "😴": "sleep",
  "💩": "poop",
  "👻": "ghost",
  "👽": "alien",
  "🤖": "robot",
  "👾": "game",
  "👐": "open",
  "🖖": "vulkan",
  "✌️": "peace",
  "🤟": "love",
  "🤘": "rock",
  "🤙": "call",
  "👋": "wave",
  "🐭": "rat",
  "🦕": "dino",
  "🦖": "t_rex",
  "🐉": "dragon",
  "🤡": "clown",
  "☁️": "cloud",
  "🌈": "rainbow",
  "🌊": "ocean",
  "🌋": "volcano",
  "🌌": "mountain",
  "🌏": "earth",
  "🌑": "new_moon",
  "🌒": "waxing_crescent",
  "🌓": "first_quarter",
  "🌔": "waxing_gibbous",
  "🌕": "full_moon",
  "🌖": "waning_gibbous",
  "🌗": "last_quarter",
  "🌘": "waning_crescent",
  "🌙": "crescent",
  "🌚": "new_moon_with_face",
  "🌛": "first_quarter_moon_with_face",
  "🌜": "last_quarter_moon_with_face",
  "🌝": "full_moon_with_face",
  "🌞": "sun_with_face",
  "🌟": "star",
  "🌠": "star2",
  "😀": "grin",
  "😄": "smiley",
  "😁": "grin2",
  "😆": "laugh",
  "😅": "smile2",
  "😂": "joy",
  "🤣": "joy2",
};

export const links = [
  "ctrlalt.fun",
  "www.ctrlalt.fun",
  "ctrlaltfun.vercel.app",
  "v.myhal.club",
  "v.tinkertools.design",
  "v.zaidmukaddam.biz",
  "v.linkto.study",
];
