var $jdxjN$stream = require("stream");
var $jdxjN$events = require("events");
var $jdxjN$buffer = require("buffer");
var $jdxjN$util = require("util");
var $jdxjN$parcelplugin = require("@parcel/plugin");
var $jdxjN$parcelutils = require("@parcel/utils");
var $jdxjN$chalk = require("chalk");
var $jdxjN$path = require("path");
var $jdxjN$termsize = require("term-size");
var $jdxjN$readline = require("readline");
var $jdxjN$assert = require("assert");

var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire0b48"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire0b48"] = parcelRequire;
}
parcelRequire.register("5sVtE", function(module, exports) {
module.exports = JSON.parse('{"dots":{"interval":80,"frames":["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"]},"dots2":{"interval":80,"frames":["⣾","⣽","⣻","⢿","⡿","⣟","⣯","⣷"]},"dots3":{"interval":80,"frames":["⠋","⠙","⠚","⠞","⠖","⠦","⠴","⠲","⠳","⠓"]},"dots4":{"interval":80,"frames":["⠄","⠆","⠇","⠋","⠙","⠸","⠰","⠠","⠰","⠸","⠙","⠋","⠇","⠆"]},"dots5":{"interval":80,"frames":["⠋","⠙","⠚","⠒","⠂","⠂","⠒","⠲","⠴","⠦","⠖","⠒","⠐","⠐","⠒","⠓","⠋"]},"dots6":{"interval":80,"frames":["⠁","⠉","⠙","⠚","⠒","⠂","⠂","⠒","⠲","⠴","⠤","⠄","⠄","⠤","⠴","⠲","⠒","⠂","⠂","⠒","⠚","⠙","⠉","⠁"]},"dots7":{"interval":80,"frames":["⠈","⠉","⠋","⠓","⠒","⠐","⠐","⠒","⠖","⠦","⠤","⠠","⠠","⠤","⠦","⠖","⠒","⠐","⠐","⠒","⠓","⠋","⠉","⠈"]},"dots8":{"interval":80,"frames":["⠁","⠁","⠉","⠙","⠚","⠒","⠂","⠂","⠒","⠲","⠴","⠤","⠄","⠄","⠤","⠠","⠠","⠤","⠦","⠖","⠒","⠐","⠐","⠒","⠓","⠋","⠉","⠈","⠈"]},"dots9":{"interval":80,"frames":["⢹","⢺","⢼","⣸","⣇","⡧","⡗","⡏"]},"dots10":{"interval":80,"frames":["⢄","⢂","⢁","⡁","⡈","⡐","⡠"]},"dots11":{"interval":100,"frames":["⠁","⠂","⠄","⡀","⢀","⠠","⠐","⠈"]},"dots12":{"interval":80,"frames":["⢀⠀","⡀⠀","⠄⠀","⢂⠀","⡂⠀","⠅⠀","⢃⠀","⡃⠀","⠍⠀","⢋⠀","⡋⠀","⠍⠁","⢋⠁","⡋⠁","⠍⠉","⠋⠉","⠋⠉","⠉⠙","⠉⠙","⠉⠩","⠈⢙","⠈⡙","⢈⠩","⡀⢙","⠄⡙","⢂⠩","⡂⢘","⠅⡘","⢃⠨","⡃⢐","⠍⡐","⢋⠠","⡋⢀","⠍⡁","⢋⠁","⡋⠁","⠍⠉","⠋⠉","⠋⠉","⠉⠙","⠉⠙","⠉⠩","⠈⢙","⠈⡙","⠈⠩","⠀⢙","⠀⡙","⠀⠩","⠀⢘","⠀⡘","⠀⠨","⠀⢐","⠀⡐","⠀⠠","⠀⢀","⠀⡀"]},"dots8Bit":{"interval":80,"frames":["⠀","⠁","⠂","⠃","⠄","⠅","⠆","⠇","⡀","⡁","⡂","⡃","⡄","⡅","⡆","⡇","⠈","⠉","⠊","⠋","⠌","⠍","⠎","⠏","⡈","⡉","⡊","⡋","⡌","⡍","⡎","⡏","⠐","⠑","⠒","⠓","⠔","⠕","⠖","⠗","⡐","⡑","⡒","⡓","⡔","⡕","⡖","⡗","⠘","⠙","⠚","⠛","⠜","⠝","⠞","⠟","⡘","⡙","⡚","⡛","⡜","⡝","⡞","⡟","⠠","⠡","⠢","⠣","⠤","⠥","⠦","⠧","⡠","⡡","⡢","⡣","⡤","⡥","⡦","⡧","⠨","⠩","⠪","⠫","⠬","⠭","⠮","⠯","⡨","⡩","⡪","⡫","⡬","⡭","⡮","⡯","⠰","⠱","⠲","⠳","⠴","⠵","⠶","⠷","⡰","⡱","⡲","⡳","⡴","⡵","⡶","⡷","⠸","⠹","⠺","⠻","⠼","⠽","⠾","⠿","⡸","⡹","⡺","⡻","⡼","⡽","⡾","⡿","⢀","⢁","⢂","⢃","⢄","⢅","⢆","⢇","⣀","⣁","⣂","⣃","⣄","⣅","⣆","⣇","⢈","⢉","⢊","⢋","⢌","⢍","⢎","⢏","⣈","⣉","⣊","⣋","⣌","⣍","⣎","⣏","⢐","⢑","⢒","⢓","⢔","⢕","⢖","⢗","⣐","⣑","⣒","⣓","⣔","⣕","⣖","⣗","⢘","⢙","⢚","⢛","⢜","⢝","⢞","⢟","⣘","⣙","⣚","⣛","⣜","⣝","⣞","⣟","⢠","⢡","⢢","⢣","⢤","⢥","⢦","⢧","⣠","⣡","⣢","⣣","⣤","⣥","⣦","⣧","⢨","⢩","⢪","⢫","⢬","⢭","⢮","⢯","⣨","⣩","⣪","⣫","⣬","⣭","⣮","⣯","⢰","⢱","⢲","⢳","⢴","⢵","⢶","⢷","⣰","⣱","⣲","⣳","⣴","⣵","⣶","⣷","⢸","⢹","⢺","⢻","⢼","⢽","⢾","⢿","⣸","⣹","⣺","⣻","⣼","⣽","⣾","⣿"]},"line":{"interval":130,"frames":["-","\\\\","|","/"]},"line2":{"interval":100,"frames":["⠂","-","–","—","–","-"]},"pipe":{"interval":100,"frames":["┤","┘","┴","└","├","┌","┬","┐"]},"simpleDots":{"interval":400,"frames":[".  ",".. ","...","   "]},"simpleDotsScrolling":{"interval":200,"frames":[".  ",".. ","..."," ..","  .","   "]},"star":{"interval":70,"frames":["✶","✸","✹","✺","✹","✷"]},"star2":{"interval":80,"frames":["+","x","*"]},"flip":{"interval":70,"frames":["_","_","_","-","`","`","\'","\xb4","-","_","_","_"]},"hamburger":{"interval":100,"frames":["☱","☲","☴"]},"growVertical":{"interval":120,"frames":["▁","▃","▄","▅","▆","▇","▆","▅","▄","▃"]},"growHorizontal":{"interval":120,"frames":["▏","▎","▍","▌","▋","▊","▉","▊","▋","▌","▍","▎"]},"balloon":{"interval":140,"frames":[" ",".","o","O","@","*"," "]},"balloon2":{"interval":120,"frames":[".","o","O","\xb0","O","o","."]},"noise":{"interval":100,"frames":["▓","▒","░"]},"bounce":{"interval":120,"frames":["⠁","⠂","⠄","⠂"]},"boxBounce":{"interval":120,"frames":["▖","▘","▝","▗"]},"boxBounce2":{"interval":100,"frames":["▌","▀","▐","▄"]},"triangle":{"interval":50,"frames":["◢","◣","◤","◥"]},"arc":{"interval":100,"frames":["◜","◠","◝","◞","◡","◟"]},"circle":{"interval":120,"frames":["◡","⊙","◠"]},"squareCorners":{"interval":180,"frames":["◰","◳","◲","◱"]},"circleQuarters":{"interval":120,"frames":["◴","◷","◶","◵"]},"circleHalves":{"interval":50,"frames":["◐","◓","◑","◒"]},"squish":{"interval":100,"frames":["╫","╪"]},"toggle":{"interval":250,"frames":["⊶","⊷"]},"toggle2":{"interval":80,"frames":["▫","▪"]},"toggle3":{"interval":120,"frames":["□","■"]},"toggle4":{"interval":100,"frames":["■","□","▪","▫"]},"toggle5":{"interval":100,"frames":["▮","▯"]},"toggle6":{"interval":300,"frames":["ဝ","၀"]},"toggle7":{"interval":80,"frames":["⦾","⦿"]},"toggle8":{"interval":100,"frames":["◍","◌"]},"toggle9":{"interval":100,"frames":["◉","◎"]},"toggle10":{"interval":100,"frames":["㊂","㊀","㊁"]},"toggle11":{"interval":50,"frames":["⧇","⧆"]},"toggle12":{"interval":120,"frames":["☗","☖"]},"toggle13":{"interval":80,"frames":["=","*","-"]},"arrow":{"interval":100,"frames":["←","↖","↑","↗","→","↘","↓","↙"]},"arrow2":{"interval":80,"frames":["⬆️ ","↗️ ","➡️ ","↘️ ","⬇️ ","↙️ ","⬅️ ","↖️ "]},"arrow3":{"interval":120,"frames":["▹▹▹▹▹","▸▹▹▹▹","▹▸▹▹▹","▹▹▸▹▹","▹▹▹▸▹","▹▹▹▹▸"]},"bouncingBar":{"interval":80,"frames":["[    ]","[=   ]","[==  ]","[=== ]","[ ===]","[  ==]","[   =]","[    ]","[   =]","[  ==]","[ ===]","[====]","[=== ]","[==  ]","[=   ]"]},"bouncingBall":{"interval":80,"frames":["( ●    )","(  ●   )","(   ●  )","(    ● )","(     ●)","(    ● )","(   ●  )","(  ●   )","( ●    )","(●     )"]},"smiley":{"interval":200,"frames":["\uD83D\uDE04 ","\uD83D\uDE1D "]},"monkey":{"interval":300,"frames":["\uD83D\uDE48 ","\uD83D\uDE48 ","\uD83D\uDE49 ","\uD83D\uDE4A "]},"hearts":{"interval":100,"frames":["\uD83D\uDC9B ","\uD83D\uDC99 ","\uD83D\uDC9C ","\uD83D\uDC9A ","❤️ "]},"clock":{"interval":100,"frames":["\uD83D\uDD5B ","\uD83D\uDD50 ","\uD83D\uDD51 ","\uD83D\uDD52 ","\uD83D\uDD53 ","\uD83D\uDD54 ","\uD83D\uDD55 ","\uD83D\uDD56 ","\uD83D\uDD57 ","\uD83D\uDD58 ","\uD83D\uDD59 ","\uD83D\uDD5A "]},"earth":{"interval":180,"frames":["\uD83C\uDF0D ","\uD83C\uDF0E ","\uD83C\uDF0F "]},"material":{"interval":17,"frames":["█▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁","██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁","███▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁","████▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁","██████▁▁▁▁▁▁▁▁▁▁▁▁▁▁","██████▁▁▁▁▁▁▁▁▁▁▁▁▁▁","███████▁▁▁▁▁▁▁▁▁▁▁▁▁","████████▁▁▁▁▁▁▁▁▁▁▁▁","█████████▁▁▁▁▁▁▁▁▁▁▁","█████████▁▁▁▁▁▁▁▁▁▁▁","██████████▁▁▁▁▁▁▁▁▁▁","███████████▁▁▁▁▁▁▁▁▁","█████████████▁▁▁▁▁▁▁","██████████████▁▁▁▁▁▁","██████████████▁▁▁▁▁▁","▁██████████████▁▁▁▁▁","▁██████████████▁▁▁▁▁","▁██████████████▁▁▁▁▁","▁▁██████████████▁▁▁▁","▁▁▁██████████████▁▁▁","▁▁▁▁█████████████▁▁▁","▁▁▁▁██████████████▁▁","▁▁▁▁██████████████▁▁","▁▁▁▁▁██████████████▁","▁▁▁▁▁██████████████▁","▁▁▁▁▁██████████████▁","▁▁▁▁▁▁██████████████","▁▁▁▁▁▁██████████████","▁▁▁▁▁▁▁█████████████","▁▁▁▁▁▁▁█████████████","▁▁▁▁▁▁▁▁████████████","▁▁▁▁▁▁▁▁████████████","▁▁▁▁▁▁▁▁▁███████████","▁▁▁▁▁▁▁▁▁███████████","▁▁▁▁▁▁▁▁▁▁██████████","▁▁▁▁▁▁▁▁▁▁██████████","▁▁▁▁▁▁▁▁▁▁▁▁████████","▁▁▁▁▁▁▁▁▁▁▁▁▁███████","▁▁▁▁▁▁▁▁▁▁▁▁▁▁██████","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█████","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█████","█▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁████","██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁███","██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁███","███▁▁▁▁▁▁▁▁▁▁▁▁▁▁███","████▁▁▁▁▁▁▁▁▁▁▁▁▁▁██","█████▁▁▁▁▁▁▁▁▁▁▁▁▁▁█","█████▁▁▁▁▁▁▁▁▁▁▁▁▁▁█","██████▁▁▁▁▁▁▁▁▁▁▁▁▁█","████████▁▁▁▁▁▁▁▁▁▁▁▁","█████████▁▁▁▁▁▁▁▁▁▁▁","█████████▁▁▁▁▁▁▁▁▁▁▁","█████████▁▁▁▁▁▁▁▁▁▁▁","█████████▁▁▁▁▁▁▁▁▁▁▁","███████████▁▁▁▁▁▁▁▁▁","████████████▁▁▁▁▁▁▁▁","████████████▁▁▁▁▁▁▁▁","██████████████▁▁▁▁▁▁","██████████████▁▁▁▁▁▁","▁██████████████▁▁▁▁▁","▁██████████████▁▁▁▁▁","▁▁▁█████████████▁▁▁▁","▁▁▁▁▁████████████▁▁▁","▁▁▁▁▁████████████▁▁▁","▁▁▁▁▁▁███████████▁▁▁","▁▁▁▁▁▁▁▁█████████▁▁▁","▁▁▁▁▁▁▁▁█████████▁▁▁","▁▁▁▁▁▁▁▁▁█████████▁▁","▁▁▁▁▁▁▁▁▁█████████▁▁","▁▁▁▁▁▁▁▁▁▁█████████▁","▁▁▁▁▁▁▁▁▁▁▁████████▁","▁▁▁▁▁▁▁▁▁▁▁████████▁","▁▁▁▁▁▁▁▁▁▁▁▁███████▁","▁▁▁▁▁▁▁▁▁▁▁▁███████▁","▁▁▁▁▁▁▁▁▁▁▁▁▁███████","▁▁▁▁▁▁▁▁▁▁▁▁▁███████","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█████","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁████","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁████","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁████","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁███","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁███","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁"]},"moon":{"interval":80,"frames":["\uD83C\uDF11 ","\uD83C\uDF12 ","\uD83C\uDF13 ","\uD83C\uDF14 ","\uD83C\uDF15 ","\uD83C\uDF16 ","\uD83C\uDF17 ","\uD83C\uDF18 "]},"runner":{"interval":140,"frames":["\uD83D\uDEB6 ","\uD83C\uDFC3 "]},"pong":{"interval":80,"frames":["▐⠂       ▌","▐⠈       ▌","▐ ⠂      ▌","▐ ⠠      ▌","▐  ⡀     ▌","▐  ⠠     ▌","▐   ⠂    ▌","▐   ⠈    ▌","▐    ⠂   ▌","▐    ⠠   ▌","▐     ⡀  ▌","▐     ⠠  ▌","▐      ⠂ ▌","▐      ⠈ ▌","▐       ⠂▌","▐       ⠠▌","▐       ⡀▌","▐      ⠠ ▌","▐      ⠂ ▌","▐     ⠈  ▌","▐     ⠂  ▌","▐    ⠠   ▌","▐    ⡀   ▌","▐   ⠠    ▌","▐   ⠂    ▌","▐  ⠈     ▌","▐  ⠂     ▌","▐ ⠠      ▌","▐ ⡀      ▌","▐⠠       ▌"]},"shark":{"interval":120,"frames":["▐|\\\\____________▌","▐_|\\\\___________▌","▐__|\\\\__________▌","▐___|\\\\_________▌","▐____|\\\\________▌","▐_____|\\\\_______▌","▐______|\\\\______▌","▐_______|\\\\_____▌","▐________|\\\\____▌","▐_________|\\\\___▌","▐__________|\\\\__▌","▐___________|\\\\_▌","▐____________|\\\\▌","▐____________/|▌","▐___________/|_▌","▐__________/|__▌","▐_________/|___▌","▐________/|____▌","▐_______/|_____▌","▐______/|______▌","▐_____/|_______▌","▐____/|________▌","▐___/|_________▌","▐__/|__________▌","▐_/|___________▌","▐/|____________▌"]},"dqpb":{"interval":100,"frames":["d","q","p","b"]},"weather":{"interval":100,"frames":["☀️ ","☀️ ","☀️ ","\uD83C\uDF24 ","⛅️ ","\uD83C\uDF25 ","☁️ ","\uD83C\uDF27 ","\uD83C\uDF28 ","\uD83C\uDF27 ","\uD83C\uDF28 ","\uD83C\uDF27 ","\uD83C\uDF28 ","⛈ ","\uD83C\uDF28 ","\uD83C\uDF27 ","\uD83C\uDF28 ","☁️ ","\uD83C\uDF25 ","⛅️ ","\uD83C\uDF24 ","☀️ ","☀️ "]},"christmas":{"interval":400,"frames":["\uD83C\uDF32","\uD83C\uDF84"]},"grenade":{"interval":80,"frames":["،   ","′   "," \xb4 "," ‾ ","  ⸌","  ⸊","  |","  ⁎","  ⁕"," ෴ ","  ⁓","   ","   ","   "]},"point":{"interval":125,"frames":["∙∙∙","●∙∙","∙●∙","∙∙●","∙∙∙"]},"layer":{"interval":150,"frames":["-","=","≡"]},"betaWave":{"interval":80,"frames":["ρββββββ","βρβββββ","ββρββββ","βββρβββ","ββββρββ","βββββρβ","ββββββρ"]},"aesthetic":{"interval":80,"frames":["▰▱▱▱▱▱▱","▰▰▱▱▱▱▱","▰▰▰▱▱▱▱","▰▰▰▰▱▱▱","▰▰▰▰▰▱▱","▰▰▰▰▰▰▱","▰▰▰▰▰▰▰","▰▱▱▱▱▱▱"]}}');

});

parcelRequire.register("9oW7Q", function(module, exports) {








if (process.env.READABLE_STREAM === "disable" && $jdxjN$stream) {
    module.exports = $jdxjN$stream.Readable;
    Object.assign(module.exports, $jdxjN$stream);
    module.exports.Stream = $jdxjN$stream;
} else {
    exports = module.exports = (parcelRequire("a2fjg"));
    exports.Stream = $jdxjN$stream || exports;
    exports.Readable = exports;
    exports.Writable = (parcelRequire("ip0PN"));
    exports.Duplex = (parcelRequire("8OgGv"));
    exports.Transform = (parcelRequire("2FMof"));
    exports.PassThrough = (parcelRequire("68KxE"));
    exports.finished = (parcelRequire("8p5Ba"));
    exports.pipeline = (parcelRequire("g1Oak"));
}

});
parcelRequire.register("a2fjg", function(module, exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
module.exports = $74e5f77c8d2571be$var$Readable;
/*<replacement>*/ var $74e5f77c8d2571be$var$Duplex;
/*</replacement>*/ $74e5f77c8d2571be$var$Readable.ReadableState = $74e5f77c8d2571be$var$ReadableState;

var $74e5f77c8d2571be$require$EE = $jdxjN$events.EventEmitter;
var $74e5f77c8d2571be$var$EElistenerCount = function EElistenerCount(emitter, type) {
    return emitter.listeners(type).length;
};

var $iIKIt = parcelRequire("iIKIt");

var $74e5f77c8d2571be$require$Buffer = $jdxjN$buffer.Buffer;
var $74e5f77c8d2571be$var$OurUint8Array = $parcel$global.Uint8Array || function() {};
function $74e5f77c8d2571be$var$_uint8ArrayToBuffer(chunk) {
    return $74e5f77c8d2571be$require$Buffer.from(chunk);
}
function $74e5f77c8d2571be$var$_isUint8Array(obj) {
    return $74e5f77c8d2571be$require$Buffer.isBuffer(obj) || obj instanceof $74e5f77c8d2571be$var$OurUint8Array;
}

var $74e5f77c8d2571be$var$debug;
if ($jdxjN$util && $jdxjN$util.debuglog) $74e5f77c8d2571be$var$debug = $jdxjN$util.debuglog("stream");
else $74e5f77c8d2571be$var$debug = function debug() {};

var $6I4r3 = parcelRequire("6I4r3");

var $aZlRl = parcelRequire("aZlRl");

var $fggOz = parcelRequire("fggOz");
var $74e5f77c8d2571be$var$getHighWaterMark = $fggOz.getHighWaterMark;

var $jotOS = parcelRequire("jotOS");
var $74e5f77c8d2571be$require$_require$codes = $jotOS.codes;
var $74e5f77c8d2571be$var$ERR_INVALID_ARG_TYPE = $74e5f77c8d2571be$require$_require$codes.ERR_INVALID_ARG_TYPE, $74e5f77c8d2571be$var$ERR_STREAM_PUSH_AFTER_EOF = $74e5f77c8d2571be$require$_require$codes.ERR_STREAM_PUSH_AFTER_EOF, $74e5f77c8d2571be$var$ERR_METHOD_NOT_IMPLEMENTED = $74e5f77c8d2571be$require$_require$codes.ERR_METHOD_NOT_IMPLEMENTED, $74e5f77c8d2571be$var$ERR_STREAM_UNSHIFT_AFTER_END_EVENT = $74e5f77c8d2571be$require$_require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.
var $74e5f77c8d2571be$var$StringDecoder;
var $74e5f77c8d2571be$var$createReadableStreamAsyncIterator;
var $74e5f77c8d2571be$var$from;

(parcelRequire("6DY6L"))($74e5f77c8d2571be$var$Readable, $iIKIt);
var $74e5f77c8d2571be$var$errorOrDestroy = $aZlRl.errorOrDestroy;
var $74e5f77c8d2571be$var$kProxyEvents = [
    "error",
    "close",
    "destroy",
    "pause",
    "resume"
];
function $74e5f77c8d2571be$var$prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
    else emitter._events[event] = [
        fn,
        emitter._events[event]
    ];
}


function $74e5f77c8d2571be$var$ReadableState(options, stream, isDuplex) {
    $74e5f77c8d2571be$var$Duplex = $74e5f77c8d2571be$var$Duplex || (parcelRequire("8OgGv"));
    options = options || {}; // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    if (typeof isDuplex !== "boolean") isDuplex = stream instanceof $74e5f77c8d2571be$var$Duplex; // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    this.highWaterMark = $74e5f77c8d2571be$var$getHighWaterMark(this, options, "readableHighWaterMark", isDuplex); // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()
    this.buffer = new $6I4r3();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    this.sync = true; // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true; // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')
    this.autoDestroy = !!options.autoDestroy; // has it been destroyed
    this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || "utf8"; // the number of writers that are awaiting a drain event in .pipe()s
    this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
        if (!$74e5f77c8d2571be$var$StringDecoder) $74e5f77c8d2571be$var$StringDecoder = (parcelRequire("aKG42")).StringDecoder;
        this.decoder = new $74e5f77c8d2571be$var$StringDecoder(options.encoding);
        this.encoding = options.encoding;
    }
}

function $74e5f77c8d2571be$var$Readable(options) {
    $74e5f77c8d2571be$var$Duplex = $74e5f77c8d2571be$var$Duplex || (parcelRequire("8OgGv"));
    if (!(this instanceof $74e5f77c8d2571be$var$Readable)) return new $74e5f77c8d2571be$var$Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside
    // the ReadableState constructor, at least with V8 6.5
    var isDuplex = this instanceof $74e5f77c8d2571be$var$Duplex;
    this._readableState = new $74e5f77c8d2571be$var$ReadableState(options, this, isDuplex); // legacy
    this.readable = true;
    if (options) {
        if (typeof options.read === "function") this._read = options.read;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
    }
    $iIKIt.call(this);
}
Object.defineProperty($74e5f77c8d2571be$var$Readable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined) return false;
        return this._readableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._readableState) return;
         // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
    }
});
$74e5f77c8d2571be$var$Readable.prototype.destroy = $aZlRl.destroy;
$74e5f77c8d2571be$var$Readable.prototype._undestroy = $aZlRl.undestroy;
$74e5f77c8d2571be$var$Readable.prototype._destroy = function(err, cb) {
    cb(err);
}; // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
$74e5f77c8d2571be$var$Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
        if (typeof chunk === "string") {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
                chunk = $74e5f77c8d2571be$require$Buffer.from(chunk, encoding);
                encoding = "";
            }
            skipChunkCheck = true;
        }
    } else skipChunkCheck = true;
    return $74e5f77c8d2571be$var$readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
}; // Unshift should *always* be something directly out of read()
$74e5f77c8d2571be$var$Readable.prototype.unshift = function(chunk) {
    return $74e5f77c8d2571be$var$readableAddChunk(this, chunk, null, true, false);
};
function $74e5f77c8d2571be$var$readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    $74e5f77c8d2571be$var$debug("readableAddChunk", chunk);
    var state = stream._readableState;
    if (chunk === null) {
        state.reading = false;
        $74e5f77c8d2571be$var$onEofChunk(stream, state);
    } else {
        var er;
        if (!skipChunkCheck) er = $74e5f77c8d2571be$var$chunkInvalid(state, chunk);
        if (er) $74e5f77c8d2571be$var$errorOrDestroy(stream, er);
        else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== $74e5f77c8d2571be$require$Buffer.prototype) chunk = $74e5f77c8d2571be$var$_uint8ArrayToBuffer(chunk);
            if (addToFront) {
                if (state.endEmitted) $74e5f77c8d2571be$var$errorOrDestroy(stream, new $74e5f77c8d2571be$var$ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
                else $74e5f77c8d2571be$var$addChunk(stream, state, chunk, true);
            } else if (state.ended) $74e5f77c8d2571be$var$errorOrDestroy(stream, new $74e5f77c8d2571be$var$ERR_STREAM_PUSH_AFTER_EOF());
            else if (state.destroyed) return false;
            else {
                state.reading = false;
                if (state.decoder && !encoding) {
                    chunk = state.decoder.write(chunk);
                    if (state.objectMode || chunk.length !== 0) $74e5f77c8d2571be$var$addChunk(stream, state, chunk, false);
                    else $74e5f77c8d2571be$var$maybeReadMore(stream, state);
                } else $74e5f77c8d2571be$var$addChunk(stream, state, chunk, false);
            }
        } else if (!addToFront) {
            state.reading = false;
            $74e5f77c8d2571be$var$maybeReadMore(stream, state);
        }
    } // We can push more data if we are below the highWaterMark.
    // Also, if we have no data yet, we can stand some more bytes.
    // This is to work around cases where hwm=0, such as the repl.
    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}
function $74e5f77c8d2571be$var$addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit("data", chunk);
    } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) $74e5f77c8d2571be$var$emitReadable(stream);
    }
    $74e5f77c8d2571be$var$maybeReadMore(stream, state);
}
function $74e5f77c8d2571be$var$chunkInvalid(state, chunk) {
    var er;
    if (!$74e5f77c8d2571be$var$_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== undefined && !state.objectMode) er = new $74e5f77c8d2571be$var$ERR_INVALID_ARG_TYPE("chunk", [
        "string",
        "Buffer",
        "Uint8Array"
    ], chunk);
    return er;
}
$74e5f77c8d2571be$var$Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
}; // backwards compatibility.

$74e5f77c8d2571be$var$Readable.prototype.setEncoding = function(enc) {
    if (!$74e5f77c8d2571be$var$StringDecoder) $74e5f77c8d2571be$var$StringDecoder = (parcelRequire("aKG42")).StringDecoder;
    var decoder = new $74e5f77c8d2571be$var$StringDecoder(enc);
    this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8
    this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:
    var p = this._readableState.buffer.head;
    var content = "";
    while(p !== null){
        content += decoder.write(p.data);
        p = p.next;
    }
    this._readableState.buffer.clear();
    if (content !== "") this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
}; // Don't raise the hwm > 1GB
var $74e5f77c8d2571be$var$MAX_HWM = 0x40000000;
function $74e5f77c8d2571be$var$computeNewHighWaterMark(n) {
    if (n >= $74e5f77c8d2571be$var$MAX_HWM) // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = $74e5f77c8d2571be$var$MAX_HWM;
    else {
        // Get the next highest power of 2 to prevent increasing hwm excessively in
        // tiny amounts
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
    }
    return n;
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.
function $74e5f77c8d2571be$var$howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;
    if (n !== n) {
        // Only flow one buffer at a time
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
    } // If we're asking for more than the current hwm, then raise the hwm.
    if (n > state.highWaterMark) state.highWaterMark = $74e5f77c8d2571be$var$computeNewHighWaterMark(n);
    if (n <= state.length) return n; // Don't have enough
    if (!state.ended) {
        state.needReadable = true;
        return 0;
    }
    return state.length;
} // you can override either this method, or the async _read(n) below.
$74e5f77c8d2571be$var$Readable.prototype.read = function(n) {
    $74e5f77c8d2571be$var$debug("read", n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        $74e5f77c8d2571be$var$debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended) $74e5f77c8d2571be$var$endReadable(this);
        else $74e5f77c8d2571be$var$emitReadable(this);
        return null;
    }
    n = $74e5f77c8d2571be$var$howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
        if (state.length === 0) $74e5f77c8d2571be$var$endReadable(this);
        return null;
    } // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.
    // if we need a readable event, then we need to do some reading.
    var doRead = state.needReadable;
    $74e5f77c8d2571be$var$debug("need readable", doRead); // if we currently have less than the highWaterMark, then also read some
    if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        $74e5f77c8d2571be$var$debug("length less than watermark", doRead);
    } // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.
    if (state.ended || state.reading) {
        doRead = false;
        $74e5f77c8d2571be$var$debug("reading or ended", doRead);
    } else if (doRead) {
        $74e5f77c8d2571be$var$debug("do read");
        state.reading = true;
        state.sync = true; // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true; // call internal read method
        this._read(state.highWaterMark);
        state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
        // and we need to re-evaluate how much data we can return to the user.
        if (!state.reading) n = $74e5f77c8d2571be$var$howMuchToRead(nOrig, state);
    }
    var ret;
    if (n > 0) ret = $74e5f77c8d2571be$var$fromList(n, state);
    else ret = null;
    if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n = 0;
    } else {
        state.length -= n;
        state.awaitDrain = 0;
    }
    if (state.length === 0) {
        // If we have nothing in the buffer, then we want to know
        // as soon as we *do* get something into the buffer.
        if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.
        if (nOrig !== n && state.ended) $74e5f77c8d2571be$var$endReadable(this);
    }
    if (ret !== null) this.emit("data", ret);
    return ret;
};
function $74e5f77c8d2571be$var$onEofChunk(stream, state) {
    $74e5f77c8d2571be$var$debug("onEofChunk");
    if (state.ended) return;
    if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
        }
    }
    state.ended = true;
    if (state.sync) // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    $74e5f77c8d2571be$var$emitReadable(stream);
    else {
        // emit 'readable' now to make sure it gets picked up.
        state.needReadable = false;
        if (!state.emittedReadable) {
            state.emittedReadable = true;
            $74e5f77c8d2571be$var$emitReadable_(stream);
        }
    }
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function $74e5f77c8d2571be$var$emitReadable(stream) {
    var state = stream._readableState;
    $74e5f77c8d2571be$var$debug("emitReadable", state.needReadable, state.emittedReadable);
    state.needReadable = false;
    if (!state.emittedReadable) {
        $74e5f77c8d2571be$var$debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        process.nextTick($74e5f77c8d2571be$var$emitReadable_, stream);
    }
}
function $74e5f77c8d2571be$var$emitReadable_(stream) {
    var state = stream._readableState;
    $74e5f77c8d2571be$var$debug("emitReadable_", state.destroyed, state.length, state.ended);
    if (!state.destroyed && (state.length || state.ended)) {
        stream.emit("readable");
        state.emittedReadable = false;
    } // The stream needs another readable event if
    // 1. It is not flowing, as the flow mechanism will take
    //    care of it.
    // 2. It is not ended.
    // 3. It is below the highWaterMark, so we can schedule
    //    another readable later.
    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    $74e5f77c8d2571be$var$flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function $74e5f77c8d2571be$var$maybeReadMore(stream, state) {
    if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick($74e5f77c8d2571be$var$maybeReadMore_, stream, state);
    }
}
function $74e5f77c8d2571be$var$maybeReadMore_(stream, state) {
    // Attempt to read more data if we should.
    //
    // The conditions for reading more data are (one of):
    // - Not enough data buffered (state.length < state.highWaterMark). The loop
    //   is responsible for filling the buffer with enough data if such data
    //   is available. If highWaterMark is 0 and we are not in the flowing mode
    //   we should _not_ attempt to buffer any extra data. We'll get more data
    //   when the stream consumer calls read() instead.
    // - No data in the buffer, and the stream is in flowing mode. In this mode
    //   the loop below is responsible for ensuring read() is called. Failing to
    //   call read here would abort the flow and there's no other mechanism for
    //   continuing the flow if the stream consumer has just subscribed to the
    //   'data' event.
    //
    // In addition to the above conditions to keep reading data, the following
    // conditions prevent the data from being read:
    // - The stream has ended (state.ended).
    // - There is already a pending 'read' operation (state.reading). This is a
    //   case where the the stream has called the implementation defined _read()
    //   method, but they are processing the call asynchronously and have _not_
    //   called push() with new data. In this case we skip performing more
    //   read()s. The execution ends in this method again after the _read() ends
    //   up calling push() with more data.
    while(!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)){
        var len = state.length;
        $74e5f77c8d2571be$var$debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length) break;
    }
    state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
$74e5f77c8d2571be$var$Readable.prototype._read = function(n) {
    $74e5f77c8d2571be$var$errorOrDestroy(this, new $74e5f77c8d2571be$var$ERR_METHOD_NOT_IMPLEMENTED("_read()"));
};
$74e5f77c8d2571be$var$Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch(state.pipesCount){
        case 0:
            state.pipes = dest;
            break;
        case 1:
            state.pipes = [
                state.pipes,
                dest
            ];
            break;
        default:
            state.pipes.push(dest);
            break;
    }
    state.pipesCount += 1;
    $74e5f77c8d2571be$var$debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted) process.nextTick(endFn);
    else src.once("end", endFn);
    dest.on("unpipe", onunpipe);
    function onunpipe(readable, unpipeInfo) {
        $74e5f77c8d2571be$var$debug("onunpipe");
        if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                unpipeInfo.hasUnpiped = true;
                cleanup();
            }
        }
    }
    function onend() {
        $74e5f77c8d2571be$var$debug("onend");
        dest.end();
    } // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.
    var ondrain = $74e5f77c8d2571be$var$pipeOnDrain(src);
    dest.on("drain", ondrain);
    var cleanedUp = false;
    function cleanup() {
        $74e5f77c8d2571be$var$debug("cleanup"); // cleanup event handlers once the pipe is broken
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true; // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    src.on("data", ondata);
    function ondata(chunk) {
        $74e5f77c8d2571be$var$debug("ondata");
        var ret = dest.write(chunk);
        $74e5f77c8d2571be$var$debug("dest.write", ret);
        if (ret === false) {
            // If the user unpiped during `dest.write()`, it is possible
            // to get stuck in a permanently paused state if that write
            // also returned false.
            // => Check whether `dest` is still a piping destination.
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && $74e5f77c8d2571be$var$indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                $74e5f77c8d2571be$var$debug("false write response, pause", state.awaitDrain);
                state.awaitDrain++;
            }
            src.pause();
        }
    } // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.
    function onerror(er) {
        $74e5f77c8d2571be$var$debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if ($74e5f77c8d2571be$var$EElistenerCount(dest, "error") === 0) $74e5f77c8d2571be$var$errorOrDestroy(dest, er);
    } // Make sure our error handler is attached before userland ones.
    $74e5f77c8d2571be$var$prependListener(dest, "error", onerror); // Both close and finish should trigger unpipe, but only once.
    function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
    }
    dest.once("close", onclose);
    function onfinish() {
        $74e5f77c8d2571be$var$debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
    }
    dest.once("finish", onfinish);
    function unpipe() {
        $74e5f77c8d2571be$var$debug("unpipe");
        src.unpipe(dest);
    } // tell the dest that it's being piped to
    dest.emit("pipe", src); // start the flow if it hasn't been started already.
    if (!state.flowing) {
        $74e5f77c8d2571be$var$debug("pipe resume");
        src.resume();
    }
    return dest;
};
function $74e5f77c8d2571be$var$pipeOnDrain(src) {
    return function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        $74e5f77c8d2571be$var$debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && $74e5f77c8d2571be$var$EElistenerCount(src, "data")) {
            state.flowing = true;
            $74e5f77c8d2571be$var$flow(src);
        }
    };
}
$74e5f77c8d2571be$var$Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
        hasUnpiped: false
    }; // if we're not piping anywhere, then do nothing.
    if (state.pipesCount === 0) return this; // just one destination.  most common case.
    if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes; // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit("unpipe", this, unpipeInfo);
        return this;
    } // slow case. multiple pipe destinations.
    if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for(var i = 0; i < len; i++)dests[i].emit("unpipe", this, {
            hasUnpiped: false
        });
        return this;
    } // try to find the right one.
    var index = $74e5f77c8d2571be$var$indexOf(state.pipes, dest);
    if (index === -1) return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];
    dest.emit("unpipe", this, unpipeInfo);
    return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something
$74e5f77c8d2571be$var$Readable.prototype.on = function(ev, fn) {
    var res = $iIKIt.prototype.on.call(this, ev, fn);
    var state = this._readableState;
    if (ev === "data") {
        // update readableListening so that resume() may be a no-op
        // a few lines down. This is needed to support once('readable').
        state.readableListening = this.listenerCount("readable") > 0; // Try start flowing on next tick if stream isn't explicitly paused
        if (state.flowing !== false) this.resume();
    } else if (ev === "readable") {
        if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.flowing = false;
            state.emittedReadable = false;
            $74e5f77c8d2571be$var$debug("on readable", state.length, state.reading);
            if (state.length) $74e5f77c8d2571be$var$emitReadable(this);
            else if (!state.reading) process.nextTick($74e5f77c8d2571be$var$nReadingNextTick, this);
        }
    }
    return res;
};
$74e5f77c8d2571be$var$Readable.prototype.addListener = $74e5f77c8d2571be$var$Readable.prototype.on;
$74e5f77c8d2571be$var$Readable.prototype.removeListener = function(ev, fn) {
    var res = $iIKIt.prototype.removeListener.call(this, ev, fn);
    if (ev === "readable") // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick($74e5f77c8d2571be$var$updateReadableListening, this);
    return res;
};
$74e5f77c8d2571be$var$Readable.prototype.removeAllListeners = function(ev) {
    var res = $iIKIt.prototype.removeAllListeners.apply(this, arguments);
    if (ev === "readable" || ev === undefined) // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick($74e5f77c8d2571be$var$updateReadableListening, this);
    return res;
};
function $74e5f77c8d2571be$var$updateReadableListening(self) {
    var state = self._readableState;
    state.readableListening = self.listenerCount("readable") > 0;
    if (state.resumeScheduled && !state.paused) // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true; // crude way to check if we should resume
    else if (self.listenerCount("data") > 0) self.resume();
}
function $74e5f77c8d2571be$var$nReadingNextTick(self) {
    $74e5f77c8d2571be$var$debug("readable nexttick read 0");
    self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
$74e5f77c8d2571be$var$Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
        $74e5f77c8d2571be$var$debug("resume"); // we flow only if there is no one listening
        // for readable, but we still have to call
        // resume()
        state.flowing = !state.readableListening;
        $74e5f77c8d2571be$var$resume(this, state);
    }
    state.paused = false;
    return this;
};
function $74e5f77c8d2571be$var$resume(stream, state) {
    if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick($74e5f77c8d2571be$var$resume_, stream, state);
    }
}
function $74e5f77c8d2571be$var$resume_(stream, state) {
    $74e5f77c8d2571be$var$debug("resume", state.reading);
    if (!state.reading) stream.read(0);
    state.resumeScheduled = false;
    stream.emit("resume");
    $74e5f77c8d2571be$var$flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
}
$74e5f77c8d2571be$var$Readable.prototype.pause = function() {
    $74e5f77c8d2571be$var$debug("call pause flowing=%j", this._readableState.flowing);
    if (this._readableState.flowing !== false) {
        $74e5f77c8d2571be$var$debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
    }
    this._readableState.paused = true;
    return this;
};
function $74e5f77c8d2571be$var$flow(stream) {
    var state = stream._readableState;
    $74e5f77c8d2571be$var$debug("flow", state.flowing);
    while(state.flowing && stream.read() !== null);
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
$74e5f77c8d2571be$var$Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on("end", function() {
        $74e5f77c8d2571be$var$debug("wrapped end");
        if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
    });
    stream.on("data", function(chunk) {
        $74e5f77c8d2571be$var$debug("wrapped data");
        if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode
        if (state.objectMode && (chunk === null || chunk === undefined)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
            paused = true;
            stream.pause();
        }
    }); // proxy all the other methods.
    // important when wrapping filters and duplexes.
    for(var i in stream)if (this[i] === undefined && typeof stream[i] === "function") this[i] = function methodWrap(method) {
        return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
        };
    }(i);
     // proxy certain important events.
    for(var n = 0; n < $74e5f77c8d2571be$var$kProxyEvents.length; n++)stream.on($74e5f77c8d2571be$var$kProxyEvents[n], this.emit.bind(this, $74e5f77c8d2571be$var$kProxyEvents[n]));
     // when we try to consume some more bytes, simply unpause the
    // underlying stream.
    this._read = function(n) {
        $74e5f77c8d2571be$var$debug("wrapped _read", n);
        if (paused) {
            paused = false;
            stream.resume();
        }
    };
    return this;
};

if (typeof Symbol === "function") $74e5f77c8d2571be$var$Readable.prototype[Symbol.asyncIterator] = function() {
    if ($74e5f77c8d2571be$var$createReadableStreamAsyncIterator === undefined) $74e5f77c8d2571be$var$createReadableStreamAsyncIterator = (parcelRequire("8HsAR"));
    return $74e5f77c8d2571be$var$createReadableStreamAsyncIterator(this);
};
Object.defineProperty($74e5f77c8d2571be$var$Readable.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.highWaterMark;
    }
});
Object.defineProperty($74e5f77c8d2571be$var$Readable.prototype, "readableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState && this._readableState.buffer;
    }
});
Object.defineProperty($74e5f77c8d2571be$var$Readable.prototype, "readableFlowing", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.flowing;
    },
    set: function set(state) {
        if (this._readableState) this._readableState.flowing = state;
    }
}); // exposed for testing purposes only.
$74e5f77c8d2571be$var$Readable._fromList = $74e5f77c8d2571be$var$fromList;
Object.defineProperty($74e5f77c8d2571be$var$Readable.prototype, "readableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.length;
    }
}); // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function $74e5f77c8d2571be$var$fromList(n, state) {
    // nothing buffered
    if (state.length === 0) return null;
    var ret;
    if (state.objectMode) ret = state.buffer.shift();
    else if (!n || n >= state.length) {
        // read it all, truncate the list
        if (state.decoder) ret = state.buffer.join("");
        else if (state.buffer.length === 1) ret = state.buffer.first();
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
    } else // read part of list
    ret = state.buffer.consume(n, state.decoder);
    return ret;
}
function $74e5f77c8d2571be$var$endReadable(stream) {
    var state = stream._readableState;
    $74e5f77c8d2571be$var$debug("endReadable", state.endEmitted);
    if (!state.endEmitted) {
        state.ended = true;
        process.nextTick($74e5f77c8d2571be$var$endReadableNT, state, stream);
    }
}
function $74e5f77c8d2571be$var$endReadableNT(state, stream) {
    $74e5f77c8d2571be$var$debug("endReadableNT", state.endEmitted, state.length); // Check that we didn't get one last unshift.
    if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
        if (state.autoDestroy) {
            // In case of duplex streams we need a way to detect
            // if the writable side is ready for autoDestroy as well
            var wState = stream._writableState;
            if (!wState || wState.autoDestroy && wState.finished) stream.destroy();
        }
    }
}

if (typeof Symbol === "function") $74e5f77c8d2571be$var$Readable.from = function(iterable, opts) {
    if ($74e5f77c8d2571be$var$from === undefined) $74e5f77c8d2571be$var$from = (parcelRequire("bmA64"));
    return $74e5f77c8d2571be$var$from($74e5f77c8d2571be$var$Readable, iterable, opts);
};
function $74e5f77c8d2571be$var$indexOf(xs, x) {
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}

});
parcelRequire.register("iIKIt", function(module, exports) {

module.exports = $jdxjN$stream;

});

parcelRequire.register("6I4r3", function(module, exports) {
"use strict";
function $4e2a4ae3f7ce2f8f$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function $4e2a4ae3f7ce2f8f$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) $4e2a4ae3f7ce2f8f$var$ownKeys(Object(source), true).forEach(function(key) {
            $4e2a4ae3f7ce2f8f$var$_defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else $4e2a4ae3f7ce2f8f$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $4e2a4ae3f7ce2f8f$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $4e2a4ae3f7ce2f8f$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $4e2a4ae3f7ce2f8f$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $4e2a4ae3f7ce2f8f$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $4e2a4ae3f7ce2f8f$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $4e2a4ae3f7ce2f8f$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}

var $4e2a4ae3f7ce2f8f$var$Buffer = $jdxjN$buffer.Buffer;

var $4e2a4ae3f7ce2f8f$var$inspect = $jdxjN$util.inspect;
var $4e2a4ae3f7ce2f8f$var$custom = $4e2a4ae3f7ce2f8f$var$inspect && $4e2a4ae3f7ce2f8f$var$inspect.custom || "inspect";
function $4e2a4ae3f7ce2f8f$var$copyBuffer(src, target, offset) {
    $4e2a4ae3f7ce2f8f$var$Buffer.prototype.copy.call(src, target, offset);
}
module.exports = /*#__PURE__*/ function() {
    function BufferList() {
        $4e2a4ae3f7ce2f8f$var$_classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    $4e2a4ae3f7ce2f8f$var$_createClass(BufferList, [
        {
            key: "push",
            value: function push(v) {
                var entry = {
                    data: v,
                    next: null
                };
                if (this.length > 0) this.tail.next = entry;
                else this.head = entry;
                this.tail = entry;
                ++this.length;
            }
        },
        {
            key: "unshift",
            value: function unshift(v) {
                var entry = {
                    data: v,
                    next: this.head
                };
                if (this.length === 0) this.tail = entry;
                this.head = entry;
                ++this.length;
            }
        },
        {
            key: "shift",
            value: function shift() {
                if (this.length === 0) return;
                var ret = this.head.data;
                if (this.length === 1) this.head = this.tail = null;
                else this.head = this.head.next;
                --this.length;
                return ret;
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.head = this.tail = null;
                this.length = 0;
            }
        },
        {
            key: "join",
            value: function join(s) {
                if (this.length === 0) return "";
                var p = this.head;
                var ret = "" + p.data;
                while(p = p.next)ret += s + p.data;
                return ret;
            }
        },
        {
            key: "concat",
            value: function concat(n) {
                if (this.length === 0) return $4e2a4ae3f7ce2f8f$var$Buffer.alloc(0);
                var ret = $4e2a4ae3f7ce2f8f$var$Buffer.allocUnsafe(n >>> 0);
                var p = this.head;
                var i = 0;
                while(p){
                    $4e2a4ae3f7ce2f8f$var$copyBuffer(p.data, ret, i);
                    i += p.data.length;
                    p = p.next;
                }
                return ret;
            } // Consumes a specified amount of bytes or characters from the buffered data.
        },
        {
            key: "consume",
            value: function consume(n, hasStrings) {
                var ret;
                if (n < this.head.data.length) {
                    // `slice` is the same for buffers and strings.
                    ret = this.head.data.slice(0, n);
                    this.head.data = this.head.data.slice(n);
                } else if (n === this.head.data.length) // First chunk is a perfect match.
                ret = this.shift();
                else // Result spans more than one buffer.
                ret = hasStrings ? this._getString(n) : this._getBuffer(n);
                return ret;
            }
        },
        {
            key: "first",
            value: function first() {
                return this.head.data;
            } // Consumes a specified amount of characters from the buffered data.
        },
        {
            key: "_getString",
            value: function _getString(n) {
                var p = this.head;
                var c = 1;
                var ret = p.data;
                n -= ret.length;
                while(p = p.next){
                    var str = p.data;
                    var nb = n > str.length ? str.length : n;
                    if (nb === str.length) ret += str;
                    else ret += str.slice(0, n);
                    n -= nb;
                    if (n === 0) {
                        if (nb === str.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = str.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            } // Consumes a specified amount of bytes from the buffered data.
        },
        {
            key: "_getBuffer",
            value: function _getBuffer(n) {
                var ret = $4e2a4ae3f7ce2f8f$var$Buffer.allocUnsafe(n);
                var p = this.head;
                var c = 1;
                p.data.copy(ret);
                n -= p.data.length;
                while(p = p.next){
                    var buf = p.data;
                    var nb = n > buf.length ? buf.length : n;
                    buf.copy(ret, ret.length - n, 0, nb);
                    n -= nb;
                    if (n === 0) {
                        if (nb === buf.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = buf.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            } // Make sure the linked list only shows the minimal necessary information.
        },
        {
            key: $4e2a4ae3f7ce2f8f$var$custom,
            value: function value(_, options) {
                return $4e2a4ae3f7ce2f8f$var$inspect(this, $4e2a4ae3f7ce2f8f$var$_objectSpread({}, options, {
                    // Only inspect one level.
                    depth: 0,
                    // It should not recurse.
                    customInspect: false
                }));
            }
        }
    ]);
    return BufferList;
}();

});

parcelRequire.register("aZlRl", function(module, exports) {
"use strict"; // undocumented cb() API, needed for core, not for public API
function $80008eb1e1eba8f1$var$destroy(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
        if (cb) cb(err);
        else if (err) {
            if (!this._writableState) process.nextTick($80008eb1e1eba8f1$var$emitErrorNT, this, err);
            else if (!this._writableState.errorEmitted) {
                this._writableState.errorEmitted = true;
                process.nextTick($80008eb1e1eba8f1$var$emitErrorNT, this, err);
            }
        }
        return this;
    } // we set destroyed to true before firing error callbacks in order
    // to make it re-entrance safe in case destroy() is called within callbacks
    if (this._readableState) this._readableState.destroyed = true;
     // if this is a duplex stream mark the writable part as destroyed as well
    if (this._writableState) this._writableState.destroyed = true;
    this._destroy(err || null, function(err) {
        if (!cb && err) {
            if (!_this._writableState) process.nextTick($80008eb1e1eba8f1$var$emitErrorAndCloseNT, _this, err);
            else if (!_this._writableState.errorEmitted) {
                _this._writableState.errorEmitted = true;
                process.nextTick($80008eb1e1eba8f1$var$emitErrorAndCloseNT, _this, err);
            } else process.nextTick($80008eb1e1eba8f1$var$emitCloseNT, _this);
        } else if (cb) {
            process.nextTick($80008eb1e1eba8f1$var$emitCloseNT, _this);
            cb(err);
        } else process.nextTick($80008eb1e1eba8f1$var$emitCloseNT, _this);
    });
    return this;
}
function $80008eb1e1eba8f1$var$emitErrorAndCloseNT(self, err) {
    $80008eb1e1eba8f1$var$emitErrorNT(self, err);
    $80008eb1e1eba8f1$var$emitCloseNT(self);
}
function $80008eb1e1eba8f1$var$emitCloseNT(self) {
    if (self._writableState && !self._writableState.emitClose) return;
    if (self._readableState && !self._readableState.emitClose) return;
    self.emit("close");
}
function $80008eb1e1eba8f1$var$undestroy() {
    if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
    }
    if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
    }
}
function $80008eb1e1eba8f1$var$emitErrorNT(self, err) {
    self.emit("error", err);
}
function $80008eb1e1eba8f1$var$errorOrDestroy(stream, err) {
    // We have tests that rely on errors being emitted
    // in the same tick, so changing this is semver major.
    // For now when you opt-in to autoDestroy we allow
    // the error to be emitted nextTick. In a future
    // semver major update we should change the default to this.
    var rState = stream._readableState;
    var wState = stream._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
    else stream.emit("error", err);
}
module.exports = {
    destroy: $80008eb1e1eba8f1$var$destroy,
    undestroy: $80008eb1e1eba8f1$var$undestroy,
    errorOrDestroy: $80008eb1e1eba8f1$var$errorOrDestroy
};

});

parcelRequire.register("fggOz", function(module, exports) {
"use strict";

var $jotOS = parcelRequire("jotOS");
var $b1c564b2f88cabc5$var$ERR_INVALID_OPT_VALUE = $jotOS.codes.ERR_INVALID_OPT_VALUE;
function $b1c564b2f88cabc5$var$highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}
function $b1c564b2f88cabc5$var$getHighWaterMark(state, options, duplexKey, isDuplex) {
    var hwm = $b1c564b2f88cabc5$var$highWaterMarkFrom(options, isDuplex, duplexKey);
    if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
            var name = isDuplex ? duplexKey : "highWaterMark";
            throw new $b1c564b2f88cabc5$var$ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
    } // Default value
    return state.objectMode ? 16 : 16384;
}
module.exports = {
    getHighWaterMark: $b1c564b2f88cabc5$var$getHighWaterMark
};

});
parcelRequire.register("jotOS", function(module, exports) {

$parcel$export(module.exports, "codes", () => $e1e763bda7a926aa$export$e45cb6485273080e, (v) => $e1e763bda7a926aa$export$e45cb6485273080e = v);
var $e1e763bda7a926aa$export$e45cb6485273080e;
"use strict";
const $e1e763bda7a926aa$var$codes = {};
function $e1e763bda7a926aa$var$createErrorType(code, message, Base) {
    if (!Base) Base = Error;
    function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") return message;
        else return message(arg1, arg2, arg3);
    }
    class NodeError extends Base {
        constructor(arg1, arg2, arg3){
            super(getMessage(arg1, arg2, arg3));
        }
    }
    NodeError.prototype.name = Base.name;
    NodeError.prototype.code = code;
    $e1e763bda7a926aa$var$codes[code] = NodeError;
}
// https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function $e1e763bda7a926aa$var$oneOf(expected, thing) {
    if (Array.isArray(expected)) {
        const len = expected.length;
        expected = expected.map((i)=>String(i));
        if (len > 2) return `one of ${thing} ${expected.slice(0, len - 1).join(", ")}, or ` + expected[len - 1];
        else if (len === 2) return `one of ${thing} ${expected[0]} or ${expected[1]}`;
        else return `of ${thing} ${expected[0]}`;
    } else return `of ${thing} ${String(expected)}`;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function $e1e763bda7a926aa$var$startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function $e1e763bda7a926aa$var$endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function $e1e763bda7a926aa$var$includes(str, search, start) {
    if (typeof start !== "number") start = 0;
    if (start + search.length > str.length) return false;
    else return str.indexOf(search, start) !== -1;
}
$e1e763bda7a926aa$var$createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
    return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
$e1e763bda7a926aa$var$createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
    // determiner: 'must be' or 'must not be'
    let determiner;
    if (typeof expected === "string" && $e1e763bda7a926aa$var$startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
    } else determiner = "must be";
    let msg;
    if ($e1e763bda7a926aa$var$endsWith(name, " argument")) // For cases like 'first argument'
    msg = `The ${name} ${determiner} ${$e1e763bda7a926aa$var$oneOf(expected, "type")}`;
    else {
        const type = $e1e763bda7a926aa$var$includes(name, ".") ? "property" : "argument";
        msg = `The "${name}" ${type} ${determiner} ${$e1e763bda7a926aa$var$oneOf(expected, "type")}`;
    }
    msg += `. Received type ${typeof actual}`;
    return msg;
}, TypeError);
$e1e763bda7a926aa$var$createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
$e1e763bda7a926aa$var$createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
    return "The " + name + " method is not implemented";
});
$e1e763bda7a926aa$var$createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
$e1e763bda7a926aa$var$createErrorType("ERR_STREAM_DESTROYED", function(name) {
    return "Cannot call " + name + " after a stream was destroyed";
});
$e1e763bda7a926aa$var$createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
$e1e763bda7a926aa$var$createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
$e1e763bda7a926aa$var$createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
$e1e763bda7a926aa$var$createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
$e1e763bda7a926aa$var$createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
    return "Unknown encoding: " + arg;
}, TypeError);
$e1e763bda7a926aa$var$createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
$e1e763bda7a926aa$export$e45cb6485273080e = $e1e763bda7a926aa$var$codes;

});


parcelRequire.register("6DY6L", function(module, exports) {


try {
    var $4d6502d158436787$var$util = $4d6502d158436787$import$2a3cc58163eb3518;
    /* istanbul ignore next */ if (typeof $4d6502d158436787$var$util.inherits !== "function") throw "";
    module.exports = $4d6502d158436787$var$util.inherits;
} catch (e) {
    /* istanbul ignore next */ module.exports = (parcelRequire("8C21j"));
}

});
parcelRequire.register("8C21j", function(module, exports) {
if (typeof Object.create === "function") // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

});


parcelRequire.register("8OgGv", function(module, exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
"use strict";
/*<replacement>*/ var $669fef6eb36b8be2$var$objectKeys = Object.keys || function(obj) {
    var keys = [];
    for(var key in obj)keys.push(key);
    return keys;
};
/*</replacement>*/ module.exports = $669fef6eb36b8be2$var$Duplex;

var $a2fjg = parcelRequire("a2fjg");

var $ip0PN = parcelRequire("ip0PN");

(parcelRequire("6DY6L"))($669fef6eb36b8be2$var$Duplex, $a2fjg);
// Allow the keys array to be GC'ed.
var $669fef6eb36b8be2$var$keys = $669fef6eb36b8be2$var$objectKeys($ip0PN.prototype);
for(var $669fef6eb36b8be2$var$v = 0; $669fef6eb36b8be2$var$v < $669fef6eb36b8be2$var$keys.length; $669fef6eb36b8be2$var$v++){
    var $669fef6eb36b8be2$var$method = $669fef6eb36b8be2$var$keys[$669fef6eb36b8be2$var$v];
    if (!$669fef6eb36b8be2$var$Duplex.prototype[$669fef6eb36b8be2$var$method]) $669fef6eb36b8be2$var$Duplex.prototype[$669fef6eb36b8be2$var$method] = $ip0PN.prototype[$669fef6eb36b8be2$var$method];
}
function $669fef6eb36b8be2$var$Duplex(options) {
    if (!(this instanceof $669fef6eb36b8be2$var$Duplex)) return new $669fef6eb36b8be2$var$Duplex(options);
    $a2fjg.call(this, options);
    $ip0PN.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
        if (options.readable === false) this.readable = false;
        if (options.writable === false) this.writable = false;
        if (options.allowHalfOpen === false) {
            this.allowHalfOpen = false;
            this.once("end", $669fef6eb36b8be2$var$onend);
        }
    }
}
Object.defineProperty($669fef6eb36b8be2$var$Duplex.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
});
Object.defineProperty($669fef6eb36b8be2$var$Duplex.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
Object.defineProperty($669fef6eb36b8be2$var$Duplex.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
}); // the no-half-open enforcer
function $669fef6eb36b8be2$var$onend() {
    // If the writable side ended, then we're ok.
    if (this._writableState.ended) return; // no more data can be written.
    // But allow more writes to happen in this tick.
    process.nextTick($669fef6eb36b8be2$var$onEndNT, this);
}
function $669fef6eb36b8be2$var$onEndNT(self) {
    self.end();
}
Object.defineProperty($669fef6eb36b8be2$var$Duplex.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined || this._writableState === undefined) return false;
        return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (this._readableState === undefined || this._writableState === undefined) return;
         // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
    }
});

});
parcelRequire.register("ip0PN", function(module, exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
"use strict";
module.exports = $d65b357d4a4d84db$var$Writable;
/* <replacement> */ function $d65b357d4a4d84db$var$WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
} // It seems a linked list but it is not
// there will be only 2 of these for each stream
function $d65b357d4a4d84db$var$CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
        $d65b357d4a4d84db$var$onCorkedFinish(_this, state);
    };
}
/* </replacement> */ /*<replacement>*/ var $d65b357d4a4d84db$var$Duplex;
/*</replacement>*/ $d65b357d4a4d84db$var$Writable.WritableState = $d65b357d4a4d84db$var$WritableState;

/*<replacement>*/ var $d65b357d4a4d84db$var$internalUtil = {
    deprecate: (parcelRequire("k6MMg"))
};

var $iIKIt = parcelRequire("iIKIt");

var $d65b357d4a4d84db$require$Buffer = $jdxjN$buffer.Buffer;
var $d65b357d4a4d84db$var$OurUint8Array = $parcel$global.Uint8Array || function() {};
function $d65b357d4a4d84db$var$_uint8ArrayToBuffer(chunk) {
    return $d65b357d4a4d84db$require$Buffer.from(chunk);
}
function $d65b357d4a4d84db$var$_isUint8Array(obj) {
    return $d65b357d4a4d84db$require$Buffer.isBuffer(obj) || obj instanceof $d65b357d4a4d84db$var$OurUint8Array;
}

var $aZlRl = parcelRequire("aZlRl");

var $fggOz = parcelRequire("fggOz");
var $d65b357d4a4d84db$var$getHighWaterMark = $fggOz.getHighWaterMark;

var $jotOS = parcelRequire("jotOS");
var $d65b357d4a4d84db$require$_require$codes = $jotOS.codes;
var $d65b357d4a4d84db$var$ERR_INVALID_ARG_TYPE = $d65b357d4a4d84db$require$_require$codes.ERR_INVALID_ARG_TYPE, $d65b357d4a4d84db$var$ERR_METHOD_NOT_IMPLEMENTED = $d65b357d4a4d84db$require$_require$codes.ERR_METHOD_NOT_IMPLEMENTED, $d65b357d4a4d84db$var$ERR_MULTIPLE_CALLBACK = $d65b357d4a4d84db$require$_require$codes.ERR_MULTIPLE_CALLBACK, $d65b357d4a4d84db$var$ERR_STREAM_CANNOT_PIPE = $d65b357d4a4d84db$require$_require$codes.ERR_STREAM_CANNOT_PIPE, $d65b357d4a4d84db$var$ERR_STREAM_DESTROYED = $d65b357d4a4d84db$require$_require$codes.ERR_STREAM_DESTROYED, $d65b357d4a4d84db$var$ERR_STREAM_NULL_VALUES = $d65b357d4a4d84db$require$_require$codes.ERR_STREAM_NULL_VALUES, $d65b357d4a4d84db$var$ERR_STREAM_WRITE_AFTER_END = $d65b357d4a4d84db$require$_require$codes.ERR_STREAM_WRITE_AFTER_END, $d65b357d4a4d84db$var$ERR_UNKNOWN_ENCODING = $d65b357d4a4d84db$require$_require$codes.ERR_UNKNOWN_ENCODING;
var $d65b357d4a4d84db$var$errorOrDestroy = $aZlRl.errorOrDestroy;

(parcelRequire("6DY6L"))($d65b357d4a4d84db$var$Writable, $iIKIt);
function $d65b357d4a4d84db$var$nop() {}

function $d65b357d4a4d84db$var$WritableState(options, stream, isDuplex) {
    $d65b357d4a4d84db$var$Duplex = $d65b357d4a4d84db$var$Duplex || (parcelRequire("8OgGv"));
    options = options || {}; // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream,
    // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.
    if (typeof isDuplex !== "boolean") isDuplex = stream instanceof $d65b357d4a4d84db$var$Duplex; // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    this.highWaterMark = $d65b357d4a4d84db$var$getHighWaterMark(this, options, "writableHighWaterMark", isDuplex); // if _final has been called
    this.finalCalled = false; // drain event flag.
    this.needDrain = false; // at the start of calling end()
    this.ending = false; // when end() has been called, and returned
    this.ended = false; // when 'finish' is emitted
    this.finished = false; // has it been destroyed
    this.destroyed = false; // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || "utf8"; // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    this.length = 0; // a flag to see when we're in the middle of a write.
    this.writing = false; // when true all writes will be buffered until .uncork() call
    this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true; // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)
    this.onwrite = function(er) {
        $d65b357d4a4d84db$var$onwrite(stream, er);
    }; // the callback that the user supplies to write(chunk,encoding,cb)
    this.writecb = null; // the amount that is being written when _write is called.
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted
    this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams
    this.prefinished = false; // True if the error was already emitted and should not be thrown again
    this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')
    this.autoDestroy = !!options.autoDestroy; // count buffered requests
    this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two
    this.corkedRequestsFree = new $d65b357d4a4d84db$var$CorkedRequest(this);
}
$d65b357d4a4d84db$var$WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while(current){
        out.push(current);
        current = current.next;
    }
    return out;
};
(function() {
    try {
        Object.defineProperty($d65b357d4a4d84db$var$WritableState.prototype, "buffer", {
            get: $d65b357d4a4d84db$var$internalUtil.deprecate(function writableStateBufferGetter() {
                return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
    } catch (_) {}
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var $d65b357d4a4d84db$var$realHasInstance;
if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
    $d65b357d4a4d84db$var$realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty($d65b357d4a4d84db$var$Writable, Symbol.hasInstance, {
        value: function value(object) {
            if ($d65b357d4a4d84db$var$realHasInstance.call(this, object)) return true;
            if (this !== $d65b357d4a4d84db$var$Writable) return false;
            return object && object._writableState instanceof $d65b357d4a4d84db$var$WritableState;
        }
    });
} else $d65b357d4a4d84db$var$realHasInstance = function realHasInstance(object) {
    return object instanceof this;
};

function $d65b357d4a4d84db$var$Writable(options) {
    $d65b357d4a4d84db$var$Duplex = $d65b357d4a4d84db$var$Duplex || (parcelRequire("8OgGv")); // Writable ctor is applied to Duplexes, too.
    // `realHasInstance` is necessary because using plain `instanceof`
    // would return false, as no `_writableState` property is attached.
    // Trying to use the custom `instanceof` for Writable here will also break the
    // Node.js LazyTransform implementation, which has a non-trivial getter for
    // `_writableState` that would lead to infinite recursion.
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the WritableState constructor, at least with V8 6.5
    var isDuplex = this instanceof $d65b357d4a4d84db$var$Duplex;
    if (!isDuplex && !$d65b357d4a4d84db$var$realHasInstance.call($d65b357d4a4d84db$var$Writable, this)) return new $d65b357d4a4d84db$var$Writable(options);
    this._writableState = new $d65b357d4a4d84db$var$WritableState(options, this, isDuplex); // legacy.
    this.writable = true;
    if (options) {
        if (typeof options.write === "function") this._write = options.write;
        if (typeof options.writev === "function") this._writev = options.writev;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
        if (typeof options.final === "function") this._final = options.final;
    }
    $iIKIt.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.
$d65b357d4a4d84db$var$Writable.prototype.pipe = function() {
    $d65b357d4a4d84db$var$errorOrDestroy(this, new $d65b357d4a4d84db$var$ERR_STREAM_CANNOT_PIPE());
};
function $d65b357d4a4d84db$var$writeAfterEnd(stream, cb) {
    var er = new $d65b357d4a4d84db$var$ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb
    $d65b357d4a4d84db$var$errorOrDestroy(stream, er);
    process.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function $d65b357d4a4d84db$var$validChunk(stream, state, chunk, cb) {
    var er;
    if (chunk === null) er = new $d65b357d4a4d84db$var$ERR_STREAM_NULL_VALUES();
    else if (typeof chunk !== "string" && !state.objectMode) er = new $d65b357d4a4d84db$var$ERR_INVALID_ARG_TYPE("chunk", [
        "string",
        "Buffer"
    ], chunk);
    if (er) {
        $d65b357d4a4d84db$var$errorOrDestroy(stream, er);
        process.nextTick(cb, er);
        return false;
    }
    return true;
}
$d65b357d4a4d84db$var$Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && $d65b357d4a4d84db$var$_isUint8Array(chunk);
    if (isBuf && !$d65b357d4a4d84db$require$Buffer.isBuffer(chunk)) chunk = $d65b357d4a4d84db$var$_uint8ArrayToBuffer(chunk);
    if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
    }
    if (isBuf) encoding = "buffer";
    else if (!encoding) encoding = state.defaultEncoding;
    if (typeof cb !== "function") cb = $d65b357d4a4d84db$var$nop;
    if (state.ending) $d65b357d4a4d84db$var$writeAfterEnd(this, cb);
    else if (isBuf || $d65b357d4a4d84db$var$validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = $d65b357d4a4d84db$var$writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
};
$d65b357d4a4d84db$var$Writable.prototype.cork = function() {
    this._writableState.corked++;
};
$d65b357d4a4d84db$var$Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) $d65b357d4a4d84db$var$clearBuffer(this, state);
    }
};
$d65b357d4a4d84db$var$Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === "string") encoding = encoding.toLowerCase();
    if (!([
        "hex",
        "utf8",
        "utf-8",
        "ascii",
        "binary",
        "base64",
        "ucs2",
        "ucs-2",
        "utf16le",
        "utf-16le",
        "raw"
    ].indexOf((encoding + "").toLowerCase()) > -1)) throw new $d65b357d4a4d84db$var$ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
};
Object.defineProperty($d65b357d4a4d84db$var$Writable.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
function $d65b357d4a4d84db$var$decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") chunk = $d65b357d4a4d84db$require$Buffer.from(chunk, encoding);
    return chunk;
}
Object.defineProperty($d65b357d4a4d84db$var$Writable.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function $d65b357d4a4d84db$var$writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
        var newChunk = $d65b357d4a4d84db$var$decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
            isBuf = true;
            encoding = "buffer";
            chunk = newChunk;
        }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.
    if (!ret) state.needDrain = true;
    if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
            chunk: chunk,
            encoding: encoding,
            isBuf: isBuf,
            callback: cb,
            next: null
        };
        if (last) last.next = state.lastBufferedRequest;
        else state.bufferedRequest = state.lastBufferedRequest;
        state.bufferedRequestCount += 1;
    } else $d65b357d4a4d84db$var$doWrite(stream, state, false, len, chunk, encoding, cb);
    return ret;
}
function $d65b357d4a4d84db$var$doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed) state.onwrite(new $d65b357d4a4d84db$var$ERR_STREAM_DESTROYED("write"));
    else if (writev) stream._writev(chunk, state.onwrite);
    else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
}
function $d65b357d4a4d84db$var$onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
        // defer the callback if we are being called synchronously
        // to avoid piling up things on the stack
        process.nextTick(cb, er); // this can emit finish, and it will always happen
        // after error
        process.nextTick($d65b357d4a4d84db$var$finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        $d65b357d4a4d84db$var$errorOrDestroy(stream, er);
    } else {
        // the caller expect this to happen before if
        // it is async
        cb(er);
        stream._writableState.errorEmitted = true;
        $d65b357d4a4d84db$var$errorOrDestroy(stream, er); // this can emit finish, but finish must
        // always follow error
        $d65b357d4a4d84db$var$finishMaybe(stream, state);
    }
}
function $d65b357d4a4d84db$var$onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
}
function $d65b357d4a4d84db$var$onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    if (typeof cb !== "function") throw new $d65b357d4a4d84db$var$ERR_MULTIPLE_CALLBACK();
    $d65b357d4a4d84db$var$onwriteStateUpdate(state);
    if (er) $d65b357d4a4d84db$var$onwriteError(stream, state, sync, er, cb);
    else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = $d65b357d4a4d84db$var$needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) $d65b357d4a4d84db$var$clearBuffer(stream, state);
        if (sync) process.nextTick($d65b357d4a4d84db$var$afterWrite, stream, state, finished, cb);
        else $d65b357d4a4d84db$var$afterWrite(stream, state, finished, cb);
    }
}
function $d65b357d4a4d84db$var$afterWrite(stream, state, finished, cb) {
    if (!finished) $d65b357d4a4d84db$var$onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    $d65b357d4a4d84db$var$finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function $d65b357d4a4d84db$var$onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
    }
} // if there's something in the buffer waiting, then process it
function $d65b357d4a4d84db$var$clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
        // Fast case, write everything using _writev()
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while(entry){
            buffer[count] = entry;
            if (!entry.isBuf) allBuffers = false;
            entry = entry.next;
            count += 1;
        }
        buffer.allBuffers = allBuffers;
        $d65b357d4a4d84db$var$doWrite(stream, state, true, state.length, buffer, "", holder.finish); // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
        } else state.corkedRequestsFree = new $d65b357d4a4d84db$var$CorkedRequest(state);
        state.bufferedRequestCount = 0;
    } else {
        // Slow case, write chunks one-by-one
        while(entry){
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            $d65b357d4a4d84db$var$doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
            // it means that we need to wait until it does.
            // also, that means that the chunk and cb are currently
            // being processed, so move the buffer counter past them.
            if (state.writing) break;
        }
        if (entry === null) state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
}
$d65b357d4a4d84db$var$Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new $d65b357d4a4d84db$var$ERR_METHOD_NOT_IMPLEMENTED("_write()"));
};
$d65b357d4a4d84db$var$Writable.prototype._writev = null;
$d65b357d4a4d84db$var$Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
    } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
    }
    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks
    if (state.corked) {
        state.corked = 1;
        this.uncork();
    } // ignore unnecessary end() calls.
    if (!state.ending) $d65b357d4a4d84db$var$endWritable(this, state, cb);
    return this;
};
Object.defineProperty($d65b357d4a4d84db$var$Writable.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
});
function $d65b357d4a4d84db$var$needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function $d65b357d4a4d84db$var$callFinal(stream, state) {
    stream._final(function(err) {
        state.pendingcb--;
        if (err) $d65b357d4a4d84db$var$errorOrDestroy(stream, err);
        state.prefinished = true;
        stream.emit("prefinish");
        $d65b357d4a4d84db$var$finishMaybe(stream, state);
    });
}
function $d65b357d4a4d84db$var$prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function" && !state.destroyed) {
            state.pendingcb++;
            state.finalCalled = true;
            process.nextTick($d65b357d4a4d84db$var$callFinal, stream, state);
        } else {
            state.prefinished = true;
            stream.emit("prefinish");
        }
    }
}
function $d65b357d4a4d84db$var$finishMaybe(stream, state) {
    var need = $d65b357d4a4d84db$var$needFinish(state);
    if (need) {
        $d65b357d4a4d84db$var$prefinish(stream, state);
        if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit("finish");
            if (state.autoDestroy) {
                // In case of duplex streams we need a way to detect
                // if the readable side is ready for autoDestroy as well
                var rState = stream._readableState;
                if (!rState || rState.autoDestroy && rState.endEmitted) stream.destroy();
            }
        }
    }
    return need;
}
function $d65b357d4a4d84db$var$endWritable(stream, state, cb) {
    state.ending = true;
    $d65b357d4a4d84db$var$finishMaybe(stream, state);
    if (cb) {
        if (state.finished) process.nextTick(cb);
        else stream.once("finish", cb);
    }
    state.ended = true;
    stream.writable = false;
}
function $d65b357d4a4d84db$var$onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while(entry){
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
    } // reuse the free corkReq.
    state.corkedRequestsFree.next = corkReq;
}
Object.defineProperty($d65b357d4a4d84db$var$Writable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._writableState === undefined) return false;
        return this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._writableState) return;
         // backward compatibility, the user is explicitly
        // managing destroyed
        this._writableState.destroyed = value;
    }
});
$d65b357d4a4d84db$var$Writable.prototype.destroy = $aZlRl.destroy;
$d65b357d4a4d84db$var$Writable.prototype._undestroy = $aZlRl.undestroy;
$d65b357d4a4d84db$var$Writable.prototype._destroy = function(err, cb) {
    cb(err);
};

});
parcelRequire.register("k6MMg", function(module, exports) {
/**
 * For Node.js, simply re-export the core `util.deprecate` function.
 */ 
module.exports = $jdxjN$util.deprecate;

});



parcelRequire.register("aKG42", function(module, exports) {

$parcel$export(module.exports, "StringDecoder", () => $7d3ed44eab56b399$export$63a7aa211a91ed69, (v) => $7d3ed44eab56b399$export$63a7aa211a91ed69 = v);
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
var $7d3ed44eab56b399$export$63a7aa211a91ed69;
"use strict";

var $6WmOD = parcelRequire("6WmOD");
var $7d3ed44eab56b399$require$Buffer = $6WmOD.Buffer;
/*</replacement>*/ var $7d3ed44eab56b399$var$isEncoding = $7d3ed44eab56b399$require$Buffer.isEncoding || function(encoding) {
    encoding = "" + encoding;
    switch(encoding && encoding.toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
            return true;
        default:
            return false;
    }
};
function $7d3ed44eab56b399$var$_normalizeEncoding(enc) {
    if (!enc) return "utf8";
    var retried;
    while(true)switch(enc){
        case "utf8":
        case "utf-8":
            return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return "utf16le";
        case "latin1":
        case "binary":
            return "latin1";
        case "base64":
        case "ascii":
        case "hex":
            return enc;
        default:
            if (retried) return; // undefined
            enc = ("" + enc).toLowerCase();
            retried = true;
    }
}
// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function $7d3ed44eab56b399$var$normalizeEncoding(enc) {
    var nenc = $7d3ed44eab56b399$var$_normalizeEncoding(enc);
    if (typeof nenc !== "string" && ($7d3ed44eab56b399$require$Buffer.isEncoding === $7d3ed44eab56b399$var$isEncoding || !$7d3ed44eab56b399$var$isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
    return nenc || enc;
}
$7d3ed44eab56b399$export$63a7aa211a91ed69 = $7d3ed44eab56b399$var$StringDecoder;
function $7d3ed44eab56b399$var$StringDecoder(encoding) {
    this.encoding = $7d3ed44eab56b399$var$normalizeEncoding(encoding);
    var nb;
    switch(this.encoding){
        case "utf16le":
            this.text = $7d3ed44eab56b399$var$utf16Text;
            this.end = $7d3ed44eab56b399$var$utf16End;
            nb = 4;
            break;
        case "utf8":
            this.fillLast = $7d3ed44eab56b399$var$utf8FillLast;
            nb = 4;
            break;
        case "base64":
            this.text = $7d3ed44eab56b399$var$base64Text;
            this.end = $7d3ed44eab56b399$var$base64End;
            nb = 3;
            break;
        default:
            this.write = $7d3ed44eab56b399$var$simpleWrite;
            this.end = $7d3ed44eab56b399$var$simpleEnd;
            return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = $7d3ed44eab56b399$require$Buffer.allocUnsafe(nb);
}
$7d3ed44eab56b399$var$StringDecoder.prototype.write = function(buf) {
    if (buf.length === 0) return "";
    var r;
    var i;
    if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === undefined) return "";
        i = this.lastNeed;
        this.lastNeed = 0;
    } else i = 0;
    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
    return r || "";
};
$7d3ed44eab56b399$var$StringDecoder.prototype.end = $7d3ed44eab56b399$var$utf8End;
// Returns only complete characters in a Buffer
$7d3ed44eab56b399$var$StringDecoder.prototype.text = $7d3ed44eab56b399$var$utf8Text;
// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
$7d3ed44eab56b399$var$StringDecoder.prototype.fillLast = function(buf) {
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
};
// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function $7d3ed44eab56b399$var$utf8CheckByte(byte) {
    if (byte <= 0x7F) return 0;
    else if (byte >> 5 === 0x06) return 2;
    else if (byte >> 4 === 0x0E) return 3;
    else if (byte >> 3 === 0x1E) return 4;
    return byte >> 6 === 0x02 ? -1 : -2;
}
// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function $7d3ed44eab56b399$var$utf8CheckIncomplete(self, buf, i) {
    var j = buf.length - 1;
    if (j < i) return 0;
    var nb = $7d3ed44eab56b399$var$utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = $7d3ed44eab56b399$var$utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = $7d3ed44eab56b399$var$utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) {
            if (nb === 2) nb = 0;
            else self.lastNeed = nb - 3;
        }
        return nb;
    }
    return 0;
}
// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function $7d3ed44eab56b399$var$utf8CheckExtraBytes(self, buf, p) {
    if ((buf[0] & 0xC0) !== 0x80) {
        self.lastNeed = 0;
        return "�";
    }
    if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 0xC0) !== 0x80) {
            self.lastNeed = 1;
            return "�";
        }
        if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 0xC0) !== 0x80) {
                self.lastNeed = 2;
                return "�";
            }
        }
    }
}
// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function $7d3ed44eab56b399$var$utf8FillLast(buf) {
    var p = this.lastTotal - this.lastNeed;
    var r = $7d3ed44eab56b399$var$utf8CheckExtraBytes(this, buf, p);
    if (r !== undefined) return r;
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p, 0, buf.length);
    this.lastNeed -= buf.length;
}
// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function $7d3ed44eab56b399$var$utf8Text(buf, i) {
    var total = $7d3ed44eab56b399$var$utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed) return buf.toString("utf8", i);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString("utf8", i, end);
}
// For UTF-8, a replacement character is added when ending on a partial
// character.
function $7d3ed44eab56b399$var$utf8End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r + "�";
    return r;
}
// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function $7d3ed44eab56b399$var$utf16Text(buf, i) {
    if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 0xD800 && c <= 0xDBFF) {
                this.lastNeed = 2;
                this.lastTotal = 4;
                this.lastChar[0] = buf[buf.length - 2];
                this.lastChar[1] = buf[buf.length - 1];
                return r.slice(0, -1);
            }
        }
        return r;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString("utf16le", i, buf.length - 1);
}
// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function $7d3ed44eab56b399$var$utf16End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
    }
    return r;
}
function $7d3ed44eab56b399$var$base64Text(buf, i) {
    var n = (buf.length - i) % 3;
    if (n === 0) return buf.toString("base64", i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) this.lastChar[0] = buf[buf.length - 1];
    else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString("base64", i, buf.length - n);
}
function $7d3ed44eab56b399$var$base64End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    return r;
}
// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function $7d3ed44eab56b399$var$simpleWrite(buf) {
    return buf.toString(this.encoding);
}
function $7d3ed44eab56b399$var$simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : "";
}

});
parcelRequire.register("6WmOD", function(module, exports) {
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ 
var $50d9db95b644025a$var$Buffer = $jdxjN$buffer.Buffer;
// alternative to using Object.keys for old browsers
function $50d9db95b644025a$var$copyProps(src, dst) {
    for(var key in src)dst[key] = src[key];
}
if ($50d9db95b644025a$var$Buffer.from && $50d9db95b644025a$var$Buffer.alloc && $50d9db95b644025a$var$Buffer.allocUnsafe && $50d9db95b644025a$var$Buffer.allocUnsafeSlow) module.exports = $jdxjN$buffer;
else {
    // Copy properties from require('buffer')
    $50d9db95b644025a$var$copyProps($jdxjN$buffer, module.exports);
    module.exports.Buffer = $50d9db95b644025a$var$SafeBuffer;
}
function $50d9db95b644025a$var$SafeBuffer(arg, encodingOrOffset, length) {
    return $50d9db95b644025a$var$Buffer(arg, encodingOrOffset, length);
}
$50d9db95b644025a$var$SafeBuffer.prototype = Object.create($50d9db95b644025a$var$Buffer.prototype);
// Copy static methods from Buffer
$50d9db95b644025a$var$copyProps($50d9db95b644025a$var$Buffer, $50d9db95b644025a$var$SafeBuffer);
$50d9db95b644025a$var$SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === "number") throw new TypeError("Argument must not be a number");
    return $50d9db95b644025a$var$Buffer(arg, encodingOrOffset, length);
};
$50d9db95b644025a$var$SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    var buf = $50d9db95b644025a$var$Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === "string") buf.fill(fill, encoding);
        else buf.fill(fill);
    } else buf.fill(0);
    return buf;
};
$50d9db95b644025a$var$SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    return $50d9db95b644025a$var$Buffer(size);
};
$50d9db95b644025a$var$SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    return $jdxjN$buffer.SlowBuffer(size);
};

});


parcelRequire.register("8HsAR", function(module, exports) {
"use strict";
var $655884f115b12cf1$var$_Object$setPrototypeO;
function $655884f115b12cf1$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

var $8p5Ba = parcelRequire("8p5Ba");
var $655884f115b12cf1$var$kLastResolve = Symbol("lastResolve");
var $655884f115b12cf1$var$kLastReject = Symbol("lastReject");
var $655884f115b12cf1$var$kError = Symbol("error");
var $655884f115b12cf1$var$kEnded = Symbol("ended");
var $655884f115b12cf1$var$kLastPromise = Symbol("lastPromise");
var $655884f115b12cf1$var$kHandlePromise = Symbol("handlePromise");
var $655884f115b12cf1$var$kStream = Symbol("stream");
function $655884f115b12cf1$var$createIterResult(value, done) {
    return {
        value: value,
        done: done
    };
}
function $655884f115b12cf1$var$readAndResolve(iter) {
    var resolve = iter[$655884f115b12cf1$var$kLastResolve];
    if (resolve !== null) {
        var data = iter[$655884f115b12cf1$var$kStream].read(); // we defer if data is null
        // we can be expecting either 'end' or
        // 'error'
        if (data !== null) {
            iter[$655884f115b12cf1$var$kLastPromise] = null;
            iter[$655884f115b12cf1$var$kLastResolve] = null;
            iter[$655884f115b12cf1$var$kLastReject] = null;
            resolve($655884f115b12cf1$var$createIterResult(data, false));
        }
    }
}
function $655884f115b12cf1$var$onReadable(iter) {
    // we wait for the next tick, because it might
    // emit an error with process.nextTick
    process.nextTick($655884f115b12cf1$var$readAndResolve, iter);
}
function $655884f115b12cf1$var$wrapForNext(lastPromise, iter) {
    return function(resolve, reject) {
        lastPromise.then(function() {
            if (iter[$655884f115b12cf1$var$kEnded]) {
                resolve($655884f115b12cf1$var$createIterResult(undefined, true));
                return;
            }
            iter[$655884f115b12cf1$var$kHandlePromise](resolve, reject);
        }, reject);
    };
}
var $655884f115b12cf1$var$AsyncIteratorPrototype = Object.getPrototypeOf(function() {});
var $655884f115b12cf1$var$ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf(($655884f115b12cf1$var$_Object$setPrototypeO = {
    get stream () {
        return this[$655884f115b12cf1$var$kStream];
    },
    next: function next() {
        var _this = this;
        // if we have detected an error in the meanwhile
        // reject straight away
        var error = this[$655884f115b12cf1$var$kError];
        if (error !== null) return Promise.reject(error);
        if (this[$655884f115b12cf1$var$kEnded]) return Promise.resolve($655884f115b12cf1$var$createIterResult(undefined, true));
        if (this[$655884f115b12cf1$var$kStream].destroyed) // We need to defer via nextTick because if .destroy(err) is
        // called, the error will be emitted via nextTick, and
        // we cannot guarantee that there is no error lingering around
        // waiting to be emitted.
        return new Promise(function(resolve, reject) {
            process.nextTick(function() {
                if (_this[$655884f115b12cf1$var$kError]) reject(_this[$655884f115b12cf1$var$kError]);
                else resolve($655884f115b12cf1$var$createIterResult(undefined, true));
            });
        });
         // if we have multiple next() calls
        // we will wait for the previous Promise to finish
        // this logic is optimized to support for await loops,
        // where next() is only called once at a time
        var lastPromise = this[$655884f115b12cf1$var$kLastPromise];
        var promise;
        if (lastPromise) promise = new Promise($655884f115b12cf1$var$wrapForNext(lastPromise, this));
        else {
            // fast path needed to support multiple this.push()
            // without triggering the next() queue
            var data = this[$655884f115b12cf1$var$kStream].read();
            if (data !== null) return Promise.resolve($655884f115b12cf1$var$createIterResult(data, false));
            promise = new Promise(this[$655884f115b12cf1$var$kHandlePromise]);
        }
        this[$655884f115b12cf1$var$kLastPromise] = promise;
        return promise;
    }
}, $655884f115b12cf1$var$_defineProperty($655884f115b12cf1$var$_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
}), $655884f115b12cf1$var$_defineProperty($655884f115b12cf1$var$_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    // destroy(err, cb) is a private API
    // we can guarantee we have that here, because we control the
    // Readable class this is attached to
    return new Promise(function(resolve, reject) {
        _this2[$655884f115b12cf1$var$kStream].destroy(null, function(err) {
            if (err) {
                reject(err);
                return;
            }
            resolve($655884f115b12cf1$var$createIterResult(undefined, true));
        });
    });
}), $655884f115b12cf1$var$_Object$setPrototypeO), $655884f115b12cf1$var$AsyncIteratorPrototype);
var $655884f115b12cf1$var$createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
    var _Object$create;
    var iterator = Object.create($655884f115b12cf1$var$ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, $655884f115b12cf1$var$_defineProperty(_Object$create, $655884f115b12cf1$var$kStream, {
        value: stream,
        writable: true
    }), $655884f115b12cf1$var$_defineProperty(_Object$create, $655884f115b12cf1$var$kLastResolve, {
        value: null,
        writable: true
    }), $655884f115b12cf1$var$_defineProperty(_Object$create, $655884f115b12cf1$var$kLastReject, {
        value: null,
        writable: true
    }), $655884f115b12cf1$var$_defineProperty(_Object$create, $655884f115b12cf1$var$kError, {
        value: null,
        writable: true
    }), $655884f115b12cf1$var$_defineProperty(_Object$create, $655884f115b12cf1$var$kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
    }), $655884f115b12cf1$var$_defineProperty(_Object$create, $655884f115b12cf1$var$kHandlePromise, {
        value: function value(resolve, reject) {
            var data = iterator[$655884f115b12cf1$var$kStream].read();
            if (data) {
                iterator[$655884f115b12cf1$var$kLastPromise] = null;
                iterator[$655884f115b12cf1$var$kLastResolve] = null;
                iterator[$655884f115b12cf1$var$kLastReject] = null;
                resolve($655884f115b12cf1$var$createIterResult(data, false));
            } else {
                iterator[$655884f115b12cf1$var$kLastResolve] = resolve;
                iterator[$655884f115b12cf1$var$kLastReject] = reject;
            }
        },
        writable: true
    }), _Object$create));
    iterator[$655884f115b12cf1$var$kLastPromise] = null;
    $8p5Ba(stream, function(err) {
        if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
            var reject = iterator[$655884f115b12cf1$var$kLastReject]; // reject if we are waiting for data in the Promise
            // returned by next() and store the error
            if (reject !== null) {
                iterator[$655884f115b12cf1$var$kLastPromise] = null;
                iterator[$655884f115b12cf1$var$kLastResolve] = null;
                iterator[$655884f115b12cf1$var$kLastReject] = null;
                reject(err);
            }
            iterator[$655884f115b12cf1$var$kError] = err;
            return;
        }
        var resolve = iterator[$655884f115b12cf1$var$kLastResolve];
        if (resolve !== null) {
            iterator[$655884f115b12cf1$var$kLastPromise] = null;
            iterator[$655884f115b12cf1$var$kLastResolve] = null;
            iterator[$655884f115b12cf1$var$kLastReject] = null;
            resolve($655884f115b12cf1$var$createIterResult(undefined, true));
        }
        iterator[$655884f115b12cf1$var$kEnded] = true;
    });
    stream.on("readable", $655884f115b12cf1$var$onReadable.bind(null, iterator));
    return iterator;
};
module.exports = $655884f115b12cf1$var$createReadableStreamAsyncIterator;

});
parcelRequire.register("8p5Ba", function(module, exports) {
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).
"use strict";

var $jotOS = parcelRequire("jotOS");
var $61e50048b99f207d$var$ERR_STREAM_PREMATURE_CLOSE = $jotOS.codes.ERR_STREAM_PREMATURE_CLOSE;
function $61e50048b99f207d$var$once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        callback.apply(this, args);
    };
}
function $61e50048b99f207d$var$noop() {}
function $61e50048b99f207d$var$isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
}
function $61e50048b99f207d$var$eos(stream, opts, callback) {
    if (typeof opts === "function") return $61e50048b99f207d$var$eos(stream, null, opts);
    if (!opts) opts = {};
    callback = $61e50048b99f207d$var$once(callback || $61e50048b99f207d$var$noop);
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;
    var onlegacyfinish = function onlegacyfinish() {
        if (!stream.writable) onfinish();
    };
    var writableEnded = stream._writableState && stream._writableState.finished;
    var onfinish = function onfinish() {
        writable = false;
        writableEnded = true;
        if (!readable) callback.call(stream);
    };
    var readableEnded = stream._readableState && stream._readableState.endEmitted;
    var onend = function onend() {
        readable = false;
        readableEnded = true;
        if (!writable) callback.call(stream);
    };
    var onerror = function onerror(err) {
        callback.call(stream, err);
    };
    var onclose = function onclose() {
        var err;
        if (readable && !readableEnded) {
            if (!stream._readableState || !stream._readableState.ended) err = new $61e50048b99f207d$var$ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
        if (writable && !writableEnded) {
            if (!stream._writableState || !stream._writableState.ended) err = new $61e50048b99f207d$var$ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
    };
    var onrequest = function onrequest() {
        stream.req.on("finish", onfinish);
    };
    if ($61e50048b99f207d$var$isRequest(stream)) {
        stream.on("complete", onfinish);
        stream.on("abort", onclose);
        if (stream.req) onrequest();
        else stream.on("request", onrequest);
    } else if (writable && !stream._writableState) {
        // legacy streams
        stream.on("end", onlegacyfinish);
        stream.on("close", onlegacyfinish);
    }
    stream.on("end", onend);
    stream.on("finish", onfinish);
    if (opts.error !== false) stream.on("error", onerror);
    stream.on("close", onclose);
    return function() {
        stream.removeListener("complete", onfinish);
        stream.removeListener("abort", onclose);
        stream.removeListener("request", onrequest);
        if (stream.req) stream.req.removeListener("finish", onfinish);
        stream.removeListener("end", onlegacyfinish);
        stream.removeListener("close", onlegacyfinish);
        stream.removeListener("finish", onfinish);
        stream.removeListener("end", onend);
        stream.removeListener("error", onerror);
        stream.removeListener("close", onclose);
    };
}
module.exports = $61e50048b99f207d$var$eos;

});


parcelRequire.register("bmA64", function(module, exports) {
"use strict";
function $845dbfe4b6506e0b$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $845dbfe4b6506e0b$var$_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $845dbfe4b6506e0b$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $845dbfe4b6506e0b$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function $845dbfe4b6506e0b$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function $845dbfe4b6506e0b$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) $845dbfe4b6506e0b$var$ownKeys(Object(source), true).forEach(function(key) {
            $845dbfe4b6506e0b$var$_defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else $845dbfe4b6506e0b$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $845dbfe4b6506e0b$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

var $jotOS = parcelRequire("jotOS");
var $845dbfe4b6506e0b$var$ERR_INVALID_ARG_TYPE = $jotOS.codes.ERR_INVALID_ARG_TYPE;
function $845dbfe4b6506e0b$var$from(Readable, iterable, opts) {
    var iterator;
    if (iterable && typeof iterable.next === "function") iterator = iterable;
    else if (iterable && iterable[Symbol.asyncIterator]) iterator = iterable[Symbol.asyncIterator]();
    else if (iterable && iterable[Symbol.iterator]) iterator = iterable[Symbol.iterator]();
    else throw new $845dbfe4b6506e0b$var$ERR_INVALID_ARG_TYPE("iterable", [
        "Iterable"
    ], iterable);
    var readable = new Readable($845dbfe4b6506e0b$var$_objectSpread({
        objectMode: true
    }, opts)); // Reading boolean to protect against _read
    // being called before last iteration completion.
    var reading = false;
    readable._read = function() {
        if (!reading) {
            reading = true;
            next();
        }
    };
    function next() {
        return _next2.apply(this, arguments);
    }
    function _next2() {
        _next2 = $845dbfe4b6506e0b$var$_asyncToGenerator(function*() {
            try {
                var _ref = yield iterator.next(), value = _ref.value, done = _ref.done;
                if (done) readable.push(null);
                else if (readable.push((yield value))) next();
                else reading = false;
            } catch (err) {
                readable.destroy(err);
            }
        });
        return _next2.apply(this, arguments);
    }
    return readable;
}
module.exports = $845dbfe4b6506e0b$var$from;

});


parcelRequire.register("2FMof", function(module, exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
"use strict";
module.exports = $1f24f25ddca5a835$var$Transform;

var $jotOS = parcelRequire("jotOS");
var $1f24f25ddca5a835$require$_require$codes = $jotOS.codes;
var $1f24f25ddca5a835$var$ERR_METHOD_NOT_IMPLEMENTED = $1f24f25ddca5a835$require$_require$codes.ERR_METHOD_NOT_IMPLEMENTED, $1f24f25ddca5a835$var$ERR_MULTIPLE_CALLBACK = $1f24f25ddca5a835$require$_require$codes.ERR_MULTIPLE_CALLBACK, $1f24f25ddca5a835$var$ERR_TRANSFORM_ALREADY_TRANSFORMING = $1f24f25ddca5a835$require$_require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING, $1f24f25ddca5a835$var$ERR_TRANSFORM_WITH_LENGTH_0 = $1f24f25ddca5a835$require$_require$codes.ERR_TRANSFORM_WITH_LENGTH_0;

var $8OgGv = parcelRequire("8OgGv");

(parcelRequire("6DY6L"))($1f24f25ddca5a835$var$Transform, $8OgGv);
function $1f24f25ddca5a835$var$afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (cb === null) return this.emit("error", new $1f24f25ddca5a835$var$ERR_MULTIPLE_CALLBACK());
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null) this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
}
function $1f24f25ddca5a835$var$Transform(options) {
    if (!(this instanceof $1f24f25ddca5a835$var$Transform)) return new $1f24f25ddca5a835$var$Transform(options);
    $8OgGv.call(this, options);
    this._transformState = {
        afterTransform: $1f24f25ddca5a835$var$afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
    }; // start out asking for a readable event once data is transformed.
    this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;
    if (options) {
        if (typeof options.transform === "function") this._transform = options.transform;
        if (typeof options.flush === "function") this._flush = options.flush;
    } // When the writable side finishes, then flush out anything remaining.
    this.on("prefinish", $1f24f25ddca5a835$var$prefinish);
}
function $1f24f25ddca5a835$var$prefinish() {
    var _this = this;
    if (typeof this._flush === "function" && !this._readableState.destroyed) this._flush(function(er, data) {
        $1f24f25ddca5a835$var$done(_this, er, data);
    });
    else $1f24f25ddca5a835$var$done(this, null, null);
}
$1f24f25ddca5a835$var$Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return $8OgGv.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
$1f24f25ddca5a835$var$Transform.prototype._transform = function(chunk, encoding, cb) {
    cb(new $1f24f25ddca5a835$var$ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
};
$1f24f25ddca5a835$var$Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
$1f24f25ddca5a835$var$Transform.prototype._read = function(n) {
    var ts = this._transformState;
    if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
};
$1f24f25ddca5a835$var$Transform.prototype._destroy = function(err, cb) {
    $8OgGv.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
    });
};
function $1f24f25ddca5a835$var$done(stream, er, data) {
    if (er) return stream.emit("error", er);
    if (data != null) stream.push(data); // TODO(BridgeAR): Write a test for these two error cases
    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided
    if (stream._writableState.length) throw new $1f24f25ddca5a835$var$ERR_TRANSFORM_WITH_LENGTH_0();
    if (stream._transformState.transforming) throw new $1f24f25ddca5a835$var$ERR_TRANSFORM_ALREADY_TRANSFORMING();
    return stream.push(null);
}

});

parcelRequire.register("68KxE", function(module, exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
"use strict";
module.exports = $478797a3565f9c7d$var$PassThrough;

var $2FMof = parcelRequire("2FMof");

(parcelRequire("6DY6L"))($478797a3565f9c7d$var$PassThrough, $2FMof);
function $478797a3565f9c7d$var$PassThrough(options) {
    if (!(this instanceof $478797a3565f9c7d$var$PassThrough)) return new $478797a3565f9c7d$var$PassThrough(options);
    $2FMof.call(this, options);
}
$478797a3565f9c7d$var$PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
};

});

parcelRequire.register("g1Oak", function(module, exports) {
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).
"use strict";
var $bab3a72efd47d991$var$eos;
function $bab3a72efd47d991$var$once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        callback.apply(void 0, arguments);
    };
}

var $jotOS = parcelRequire("jotOS");
var $bab3a72efd47d991$require$_require$codes = $jotOS.codes;
var $bab3a72efd47d991$var$ERR_MISSING_ARGS = $bab3a72efd47d991$require$_require$codes.ERR_MISSING_ARGS, $bab3a72efd47d991$var$ERR_STREAM_DESTROYED = $bab3a72efd47d991$require$_require$codes.ERR_STREAM_DESTROYED;
function $bab3a72efd47d991$var$noop(err) {
    // Rethrow the error if it exists to avoid swallowing it
    if (err) throw err;
}
function $bab3a72efd47d991$var$isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
}

function $bab3a72efd47d991$var$destroyer(stream, reading, writing, callback) {
    callback = $bab3a72efd47d991$var$once(callback);
    var closed = false;
    stream.on("close", function() {
        closed = true;
    });
    if ($bab3a72efd47d991$var$eos === undefined) $bab3a72efd47d991$var$eos = (parcelRequire("8p5Ba"));
    $bab3a72efd47d991$var$eos(stream, {
        readable: reading,
        writable: writing
    }, function(err) {
        if (err) return callback(err);
        closed = true;
        callback();
    });
    var destroyed = false;
    return function(err) {
        if (closed) return;
        if (destroyed) return;
        destroyed = true; // request.destroy just do .end - .abort is what we want
        if ($bab3a72efd47d991$var$isRequest(stream)) return stream.abort();
        if (typeof stream.destroy === "function") return stream.destroy();
        callback(err || new $bab3a72efd47d991$var$ERR_STREAM_DESTROYED("pipe"));
    };
}
function $bab3a72efd47d991$var$call(fn) {
    fn();
}
function $bab3a72efd47d991$var$pipe(from, to) {
    return from.pipe(to);
}
function $bab3a72efd47d991$var$popCallback(streams) {
    if (!streams.length) return $bab3a72efd47d991$var$noop;
    if (typeof streams[streams.length - 1] !== "function") return $bab3a72efd47d991$var$noop;
    return streams.pop();
}
function $bab3a72efd47d991$var$pipeline() {
    for(var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++)streams[_key] = arguments[_key];
    var callback = $bab3a72efd47d991$var$popCallback(streams);
    if (Array.isArray(streams[0])) streams = streams[0];
    if (streams.length < 2) throw new $bab3a72efd47d991$var$ERR_MISSING_ARGS("streams");
    var error;
    var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return $bab3a72efd47d991$var$destroyer(stream, reading, writing, function(err) {
            if (!error) error = err;
            if (err) destroys.forEach($bab3a72efd47d991$var$call);
            if (reading) return;
            destroys.forEach($bab3a72efd47d991$var$call);
            callback(error);
        });
    });
    return streams.reduce($bab3a72efd47d991$var$pipe);
}
module.exports = $bab3a72efd47d991$var$pipeline;

});


parcelRequire.register("53gZx", function(module, exports) {
"use strict";
const wrapAnsi16 = (fn, offset)=>(...args)=>{
        const code = fn(...args);
        return `\u001B[${code + offset}m`;
    };
const wrapAnsi256 = (fn, offset)=>(...args)=>{
        const code = fn(...args);
        return `\u001B[${38 + offset};5;${code}m`;
    };
const wrapAnsi16m = (fn, offset)=>(...args)=>{
        const rgb = fn(...args);
        return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    };
const ansi2ansi = (n)=>n;
const rgb2rgb = (r, g, b)=>[
        r,
        g,
        b
    ];
const setLazyProperty = (object, property, get)=>{
    Object.defineProperty(object, property, {
        get: ()=>{
            const value = get();
            Object.defineProperty(object, property, {
                value: value,
                enumerable: true,
                configurable: true
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
};
/** @type {typeof import('color-convert')} */ let colorConvert;

const makeDynamicStyles = (wrap, targetSpace, identity, isBackground)=>{
    if (colorConvert === undefined) colorConvert = (parcelRequire("iPB3J"));
    const offset = isBackground ? 10 : 0;
    const styles = {};
    for (const [sourceSpace, suite] of Object.entries(colorConvert)){
        const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
        if (sourceSpace === targetSpace) styles[name] = wrap(identity, offset);
        else if (typeof suite === "object") styles[name] = wrap(suite[targetSpace], offset);
    }
    return styles;
};
function assembleStyles() {
    const codes = new Map();
    const styles = {
        modifier: {
            reset: [
                0,
                0
            ],
            // 21 isn't widely supported and 22 does the same thing
            bold: [
                1,
                22
            ],
            dim: [
                2,
                22
            ],
            italic: [
                3,
                23
            ],
            underline: [
                4,
                24
            ],
            inverse: [
                7,
                27
            ],
            hidden: [
                8,
                28
            ],
            strikethrough: [
                9,
                29
            ]
        },
        color: {
            black: [
                30,
                39
            ],
            red: [
                31,
                39
            ],
            green: [
                32,
                39
            ],
            yellow: [
                33,
                39
            ],
            blue: [
                34,
                39
            ],
            magenta: [
                35,
                39
            ],
            cyan: [
                36,
                39
            ],
            white: [
                37,
                39
            ],
            // Bright color
            blackBright: [
                90,
                39
            ],
            redBright: [
                91,
                39
            ],
            greenBright: [
                92,
                39
            ],
            yellowBright: [
                93,
                39
            ],
            blueBright: [
                94,
                39
            ],
            magentaBright: [
                95,
                39
            ],
            cyanBright: [
                96,
                39
            ],
            whiteBright: [
                97,
                39
            ]
        },
        bgColor: {
            bgBlack: [
                40,
                49
            ],
            bgRed: [
                41,
                49
            ],
            bgGreen: [
                42,
                49
            ],
            bgYellow: [
                43,
                49
            ],
            bgBlue: [
                44,
                49
            ],
            bgMagenta: [
                45,
                49
            ],
            bgCyan: [
                46,
                49
            ],
            bgWhite: [
                47,
                49
            ],
            // Bright color
            bgBlackBright: [
                100,
                49
            ],
            bgRedBright: [
                101,
                49
            ],
            bgGreenBright: [
                102,
                49
            ],
            bgYellowBright: [
                103,
                49
            ],
            bgBlueBright: [
                104,
                49
            ],
            bgMagentaBright: [
                105,
                49
            ],
            bgCyanBright: [
                106,
                49
            ],
            bgWhiteBright: [
                107,
                49
            ]
        }
    };
    // Alias bright black as gray (and grey)
    styles.color.gray = styles.color.blackBright;
    styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
    styles.color.grey = styles.color.blackBright;
    styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
    for (const [groupName, group] of Object.entries(styles)){
        for (const [styleName, style] of Object.entries(group)){
            styles[styleName] = {
                open: `\u001B[${style[0]}m`,
                close: `\u001B[${style[1]}m`
            };
            group[styleName] = styles[styleName];
            codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
            value: group,
            enumerable: false
        });
    }
    Object.defineProperty(styles, "codes", {
        value: codes,
        enumerable: false
    });
    styles.color.close = "\x1b[39m";
    styles.bgColor.close = "\x1b[49m";
    setLazyProperty(styles.color, "ansi", ()=>makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, false));
    setLazyProperty(styles.color, "ansi256", ()=>makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, false));
    setLazyProperty(styles.color, "ansi16m", ()=>makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, false));
    setLazyProperty(styles.bgColor, "ansi", ()=>makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, true));
    setLazyProperty(styles.bgColor, "ansi256", ()=>makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, true));
    setLazyProperty(styles.bgColor, "ansi16m", ()=>makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, true));
    return styles;
}
// Make the export immutable
Object.defineProperty(module, "exports", {
    enumerable: true,
    get: assembleStyles
});

});
parcelRequire.register("iPB3J", function(module, exports) {

var $ci9uU = parcelRequire("ci9uU");

var $3sxGv = parcelRequire("3sxGv");
const $db59bc991a37d1dd$var$convert = {};
const $db59bc991a37d1dd$var$models = Object.keys($ci9uU);
function $db59bc991a37d1dd$var$wrapRaw(fn) {
    const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === undefined || arg0 === null) return arg0;
        if (arg0.length > 1) args = arg0;
        return fn(args);
    };
    // Preserve .conversion property if there is one
    if ("conversion" in fn) wrappedFn.conversion = fn.conversion;
    return wrappedFn;
}
function $db59bc991a37d1dd$var$wrapRounded(fn) {
    const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === undefined || arg0 === null) return arg0;
        if (arg0.length > 1) args = arg0;
        const result = fn(args);
        // We're assuming the result is an array here.
        // see notice in conversions.js; don't use box types
        // in conversion functions.
        if (typeof result === "object") for(let len = result.length, i = 0; i < len; i++)result[i] = Math.round(result[i]);
        return result;
    };
    // Preserve .conversion property if there is one
    if ("conversion" in fn) wrappedFn.conversion = fn.conversion;
    return wrappedFn;
}
$db59bc991a37d1dd$var$models.forEach((fromModel)=>{
    $db59bc991a37d1dd$var$convert[fromModel] = {};
    Object.defineProperty($db59bc991a37d1dd$var$convert[fromModel], "channels", {
        value: $ci9uU[fromModel].channels
    });
    Object.defineProperty($db59bc991a37d1dd$var$convert[fromModel], "labels", {
        value: $ci9uU[fromModel].labels
    });
    const routes = $3sxGv(fromModel);
    const routeModels = Object.keys(routes);
    routeModels.forEach((toModel)=>{
        const fn = routes[toModel];
        $db59bc991a37d1dd$var$convert[fromModel][toModel] = $db59bc991a37d1dd$var$wrapRounded(fn);
        $db59bc991a37d1dd$var$convert[fromModel][toModel].raw = $db59bc991a37d1dd$var$wrapRaw(fn);
    });
});
module.exports = $db59bc991a37d1dd$var$convert;

});
parcelRequire.register("ci9uU", function(module, exports) {
/* MIT license */ /* eslint-disable no-mixed-operators */ 
var $4ZbzB = parcelRequire("4ZbzB");
// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)
const $8f2e887ad5de2f78$var$reverseKeywords = {};
for (const key of Object.keys($4ZbzB))$8f2e887ad5de2f78$var$reverseKeywords[$4ZbzB[key]] = key;
const $8f2e887ad5de2f78$var$convert = {
    rgb: {
        channels: 3,
        labels: "rgb"
    },
    hsl: {
        channels: 3,
        labels: "hsl"
    },
    hsv: {
        channels: 3,
        labels: "hsv"
    },
    hwb: {
        channels: 3,
        labels: "hwb"
    },
    cmyk: {
        channels: 4,
        labels: "cmyk"
    },
    xyz: {
        channels: 3,
        labels: "xyz"
    },
    lab: {
        channels: 3,
        labels: "lab"
    },
    lch: {
        channels: 3,
        labels: "lch"
    },
    hex: {
        channels: 1,
        labels: [
            "hex"
        ]
    },
    keyword: {
        channels: 1,
        labels: [
            "keyword"
        ]
    },
    ansi16: {
        channels: 1,
        labels: [
            "ansi16"
        ]
    },
    ansi256: {
        channels: 1,
        labels: [
            "ansi256"
        ]
    },
    hcg: {
        channels: 3,
        labels: [
            "h",
            "c",
            "g"
        ]
    },
    apple: {
        channels: 3,
        labels: [
            "r16",
            "g16",
            "b16"
        ]
    },
    gray: {
        channels: 1,
        labels: [
            "gray"
        ]
    }
};
module.exports = $8f2e887ad5de2f78$var$convert;
// Hide .channels and .labels properties
for (const model of Object.keys($8f2e887ad5de2f78$var$convert)){
    if (!("channels" in $8f2e887ad5de2f78$var$convert[model])) throw new Error("missing channels property: " + model);
    if (!("labels" in $8f2e887ad5de2f78$var$convert[model])) throw new Error("missing channel labels property: " + model);
    if ($8f2e887ad5de2f78$var$convert[model].labels.length !== $8f2e887ad5de2f78$var$convert[model].channels) throw new Error("channel and label counts mismatch: " + model);
    const { channels: channels , labels: labels  } = $8f2e887ad5de2f78$var$convert[model];
    delete $8f2e887ad5de2f78$var$convert[model].channels;
    delete $8f2e887ad5de2f78$var$convert[model].labels;
    Object.defineProperty($8f2e887ad5de2f78$var$convert[model], "channels", {
        value: channels
    });
    Object.defineProperty($8f2e887ad5de2f78$var$convert[model], "labels", {
        value: labels
    });
}
$8f2e887ad5de2f78$var$convert.rgb.hsl = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
    let h;
    let s;
    if (max === min) h = 0;
    else if (r === max) h = (g - b) / delta;
    else if (g === max) h = 2 + (b - r) / delta;
    else if (b === max) h = 4 + (r - g) / delta;
    h = Math.min(h * 60, 360);
    if (h < 0) h += 360;
    const l = (min + max) / 2;
    if (max === min) s = 0;
    else if (l <= 0.5) s = delta / (max + min);
    else s = delta / (2 - max - min);
    return [
        h,
        s * 100,
        l * 100
    ];
};
$8f2e887ad5de2f78$var$convert.rgb.hsv = function(rgb) {
    let rdif;
    let gdif;
    let bdif;
    let h;
    let s;
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const v = Math.max(r, g, b);
    const diff = v - Math.min(r, g, b);
    const diffc = function(c) {
        return (v - c) / 6 / diff + 0.5;
    };
    if (diff === 0) {
        h = 0;
        s = 0;
    } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) h = bdif - gdif;
        else if (g === v) h = 1 / 3 + rdif - bdif;
        else if (b === v) h = 2 / 3 + gdif - rdif;
        if (h < 0) h += 1;
        else if (h > 1) h -= 1;
    }
    return [
        h * 360,
        s * 100,
        v * 100
    ];
};
$8f2e887ad5de2f78$var$convert.rgb.hwb = function(rgb) {
    const r = rgb[0];
    const g = rgb[1];
    let b = rgb[2];
    const h = $8f2e887ad5de2f78$var$convert.rgb.hsl(rgb)[0];
    const w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [
        h,
        w * 100,
        b * 100
    ];
};
$8f2e887ad5de2f78$var$convert.rgb.cmyk = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const k = Math.min(1 - r, 1 - g, 1 - b);
    const c = (1 - r - k) / (1 - k) || 0;
    const m = (1 - g - k) / (1 - k) || 0;
    const y = (1 - b - k) / (1 - k) || 0;
    return [
        c * 100,
        m * 100,
        y * 100,
        k * 100
    ];
};
function $8f2e887ad5de2f78$var$comparativeDistance(x, y) {
    /*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/ return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
}
$8f2e887ad5de2f78$var$convert.rgb.keyword = function(rgb) {
    const reversed = $8f2e887ad5de2f78$var$reverseKeywords[rgb];
    if (reversed) return reversed;
    let currentClosestDistance = Infinity;
    let currentClosestKeyword;
    for (const keyword of Object.keys($4ZbzB)){
        const value = $4ZbzB[keyword];
        // Compute comparative distance
        const distance = $8f2e887ad5de2f78$var$comparativeDistance(rgb, value);
        // Check if its less, if so set as closest
        if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
        }
    }
    return currentClosestKeyword;
};
$8f2e887ad5de2f78$var$convert.keyword.rgb = function(keyword) {
    return $4ZbzB[keyword];
};
$8f2e887ad5de2f78$var$convert.rgb.xyz = function(rgb) {
    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255;
    // Assume sRGB
    r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
    g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
    b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
    const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [
        x * 100,
        y * 100,
        z * 100
    ];
};
$8f2e887ad5de2f78$var$convert.rgb.lab = function(rgb) {
    const xyz = $8f2e887ad5de2f78$var$convert.rgb.xyz(rgb);
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [
        l,
        a,
        b
    ];
};
$8f2e887ad5de2f78$var$convert.hsl.rgb = function(hsl) {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t2;
    let t3;
    let val;
    if (s === 0) {
        val = l * 255;
        return [
            val,
            val,
            val
        ];
    }
    if (l < 0.5) t2 = l * (1 + s);
    else t2 = l + s - l * s;
    const t1 = 2 * l - t2;
    const rgb = [
        0,
        0,
        0
    ];
    for(let i = 0; i < 3; i++){
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) t3++;
        if (t3 > 1) t3--;
        if (6 * t3 < 1) val = t1 + (t2 - t1) * 6 * t3;
        else if (2 * t3 < 1) val = t2;
        else if (3 * t3 < 2) val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        else val = t1;
        rgb[i] = val * 255;
    }
    return rgb;
};
$8f2e887ad5de2f78$var$convert.hsl.hsv = function(hsl) {
    const h = hsl[0];
    let s = hsl[1] / 100;
    let l = hsl[2] / 100;
    let smin = s;
    const lmin = Math.max(l, 0.01);
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    const v = (l + s) / 2;
    const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [
        h,
        sv * 100,
        v * 100
    ];
};
$8f2e887ad5de2f78$var$convert.hsv.rgb = function(hsv) {
    const h = hsv[0] / 60;
    const s = hsv[1] / 100;
    let v = hsv[2] / 100;
    const hi = Math.floor(h) % 6;
    const f = h - Math.floor(h);
    const p = 255 * v * (1 - s);
    const q = 255 * v * (1 - s * f);
    const t = 255 * v * (1 - s * (1 - f));
    v *= 255;
    switch(hi){
        case 0:
            return [
                v,
                t,
                p
            ];
        case 1:
            return [
                q,
                v,
                p
            ];
        case 2:
            return [
                p,
                v,
                t
            ];
        case 3:
            return [
                p,
                q,
                v
            ];
        case 4:
            return [
                t,
                p,
                v
            ];
        case 5:
            return [
                v,
                p,
                q
            ];
    }
};
$8f2e887ad5de2f78$var$convert.hsv.hsl = function(hsv) {
    const h = hsv[0];
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const vmin = Math.max(v, 0.01);
    let sl;
    let l;
    l = (2 - s) * v;
    const lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [
        h,
        sl * 100,
        l * 100
    ];
};
// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
$8f2e887ad5de2f78$var$convert.hwb.rgb = function(hwb) {
    const h = hwb[0] / 360;
    let wh = hwb[1] / 100;
    let bl = hwb[2] / 100;
    const ratio = wh + bl;
    let f;
    // Wh + bl cant be > 1
    if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
    }
    const i = Math.floor(6 * h);
    const v = 1 - bl;
    f = 6 * h - i;
    if ((i & 0x01) !== 0) f = 1 - f;
    const n = wh + f * (v - wh); // Linear interpolation
    let r;
    let g;
    let b;
    /* eslint-disable max-statements-per-line,no-multi-spaces */ switch(i){
        default:
        case 6:
        case 0:
            r = v;
            g = n;
            b = wh;
            break;
        case 1:
            r = n;
            g = v;
            b = wh;
            break;
        case 2:
            r = wh;
            g = v;
            b = n;
            break;
        case 3:
            r = wh;
            g = n;
            b = v;
            break;
        case 4:
            r = n;
            g = wh;
            b = v;
            break;
        case 5:
            r = v;
            g = wh;
            b = n;
            break;
    }
    /* eslint-enable max-statements-per-line,no-multi-spaces */ return [
        r * 255,
        g * 255,
        b * 255
    ];
};
$8f2e887ad5de2f78$var$convert.cmyk.rgb = function(cmyk) {
    const c = cmyk[0] / 100;
    const m = cmyk[1] / 100;
    const y = cmyk[2] / 100;
    const k = cmyk[3] / 100;
    const r = 1 - Math.min(1, c * (1 - k) + k);
    const g = 1 - Math.min(1, m * (1 - k) + k);
    const b = 1 - Math.min(1, y * (1 - k) + k);
    return [
        r * 255,
        g * 255,
        b * 255
    ];
};
$8f2e887ad5de2f78$var$convert.xyz.rgb = function(xyz) {
    const x = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z = xyz[2] / 100;
    let r;
    let g;
    let b;
    r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y * -0.204 + z * 1.0570;
    // Assume sRGB
    r = r > 0.0031308 ? 1.055 * r ** (1.0 / 2.4) - 0.055 : r * 12.92;
    g = g > 0.0031308 ? 1.055 * g ** (1.0 / 2.4) - 0.055 : g * 12.92;
    b = b > 0.0031308 ? 1.055 * b ** (1.0 / 2.4) - 0.055 : b * 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [
        r * 255,
        g * 255,
        b * 255
    ];
};
$8f2e887ad5de2f78$var$convert.xyz.lab = function(xyz) {
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [
        l,
        a,
        b
    ];
};
$8f2e887ad5de2f78$var$convert.lab.xyz = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let x;
    let y;
    let z;
    y = (l + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    const y2 = y ** 3;
    const x2 = x ** 3;
    const z2 = z ** 3;
    y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
    return [
        x,
        y,
        z
    ];
};
$8f2e887ad5de2f78$var$convert.lab.lch = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let h;
    const hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;
    if (h < 0) h += 360;
    const c = Math.sqrt(a * a + b * b);
    return [
        l,
        c,
        h
    ];
};
$8f2e887ad5de2f78$var$convert.lch.lab = function(lch) {
    const l = lch[0];
    const c = lch[1];
    const h = lch[2];
    const hr = h / 360 * 2 * Math.PI;
    const a = c * Math.cos(hr);
    const b = c * Math.sin(hr);
    return [
        l,
        a,
        b
    ];
};
$8f2e887ad5de2f78$var$convert.rgb.ansi16 = function(args, saturation = null) {
    const [r, g, b] = args;
    let value = saturation === null ? $8f2e887ad5de2f78$var$convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization
    value = Math.round(value / 50);
    if (value === 0) return 30;
    let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
    if (value === 2) ansi += 60;
    return ansi;
};
$8f2e887ad5de2f78$var$convert.hsv.ansi16 = function(args) {
    // Optimization here; we already know the value and don't need to get
    // it converted for us.
    return $8f2e887ad5de2f78$var$convert.rgb.ansi16($8f2e887ad5de2f78$var$convert.hsv.rgb(args), args[2]);
};
$8f2e887ad5de2f78$var$convert.rgb.ansi256 = function(args) {
    const r = args[0];
    const g = args[1];
    const b = args[2];
    // We use the extended greyscale palette here, with the exception of
    // black and white. normal palette only has 4 greyscale shades.
    if (r === g && g === b) {
        if (r < 8) return 16;
        if (r > 248) return 231;
        return Math.round((r - 8) / 247 * 24) + 232;
    }
    const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
};
$8f2e887ad5de2f78$var$convert.ansi16.rgb = function(args) {
    let color = args % 10;
    // Handle greyscale
    if (color === 0 || color === 7) {
        if (args > 50) color += 3.5;
        color = color / 10.5 * 255;
        return [
            color,
            color,
            color
        ];
    }
    const mult = (~~(args > 50) + 1) * 0.5;
    const r = (color & 1) * mult * 255;
    const g = (color >> 1 & 1) * mult * 255;
    const b = (color >> 2 & 1) * mult * 255;
    return [
        r,
        g,
        b
    ];
};
$8f2e887ad5de2f78$var$convert.ansi256.rgb = function(args) {
    // Handle greyscale
    if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [
            c,
            c,
            c
        ];
    }
    args -= 16;
    let rem;
    const r = Math.floor(args / 36) / 5 * 255;
    const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    const b = rem % 6 / 5 * 255;
    return [
        r,
        g,
        b
    ];
};
$8f2e887ad5de2f78$var$convert.rgb.hex = function(args) {
    const integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
    const string = integer.toString(16).toUpperCase();
    return "000000".substring(string.length) + string;
};
$8f2e887ad5de2f78$var$convert.hex.rgb = function(args) {
    const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!match) return [
        0,
        0,
        0
    ];
    let colorString = match[0];
    if (match[0].length === 3) colorString = colorString.split("").map((char)=>{
        return char + char;
    }).join("");
    const integer = parseInt(colorString, 16);
    const r = integer >> 16 & 0xFF;
    const g = integer >> 8 & 0xFF;
    const b = integer & 0xFF;
    return [
        r,
        g,
        b
    ];
};
$8f2e887ad5de2f78$var$convert.rgb.hcg = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const max = Math.max(Math.max(r, g), b);
    const min = Math.min(Math.min(r, g), b);
    const chroma = max - min;
    let grayscale;
    let hue;
    if (chroma < 1) grayscale = min / (1 - chroma);
    else grayscale = 0;
    if (chroma <= 0) hue = 0;
    else if (max === r) hue = (g - b) / chroma % 6;
    else if (max === g) hue = 2 + (b - r) / chroma;
    else hue = 4 + (r - g) / chroma;
    hue /= 6;
    hue %= 1;
    return [
        hue * 360,
        chroma * 100,
        grayscale * 100
    ];
};
$8f2e887ad5de2f78$var$convert.hsl.hcg = function(hsl) {
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    const c = l < 0.5 ? 2.0 * s * l : 2.0 * s * (1.0 - l);
    let f = 0;
    if (c < 1.0) f = (l - 0.5 * c) / (1.0 - c);
    return [
        hsl[0],
        c * 100,
        f * 100
    ];
};
$8f2e887ad5de2f78$var$convert.hsv.hcg = function(hsv) {
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const c = s * v;
    let f = 0;
    if (c < 1.0) f = (v - c) / (1 - c);
    return [
        hsv[0],
        c * 100,
        f * 100
    ];
};
$8f2e887ad5de2f78$var$convert.hcg.rgb = function(hcg) {
    const h = hcg[0] / 360;
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    if (c === 0.0) return [
        g * 255,
        g * 255,
        g * 255
    ];
    const pure = [
        0,
        0,
        0
    ];
    const hi = h % 1 * 6;
    const v = hi % 1;
    const w = 1 - v;
    let mg = 0;
    /* eslint-disable max-statements-per-line */ switch(Math.floor(hi)){
        case 0:
            pure[0] = 1;
            pure[1] = v;
            pure[2] = 0;
            break;
        case 1:
            pure[0] = w;
            pure[1] = 1;
            pure[2] = 0;
            break;
        case 2:
            pure[0] = 0;
            pure[1] = 1;
            pure[2] = v;
            break;
        case 3:
            pure[0] = 0;
            pure[1] = w;
            pure[2] = 1;
            break;
        case 4:
            pure[0] = v;
            pure[1] = 0;
            pure[2] = 1;
            break;
        default:
            pure[0] = 1;
            pure[1] = 0;
            pure[2] = w;
    }
    /* eslint-enable max-statements-per-line */ mg = (1.0 - c) * g;
    return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
    ];
};
$8f2e887ad5de2f78$var$convert.hcg.hsv = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1.0 - c);
    let f = 0;
    if (v > 0.0) f = c / v;
    return [
        hcg[0],
        f * 100,
        v * 100
    ];
};
$8f2e887ad5de2f78$var$convert.hcg.hsl = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const l = g * (1.0 - c) + 0.5 * c;
    let s = 0;
    if (l > 0.0 && l < 0.5) s = c / (2 * l);
    else if (l >= 0.5 && l < 1.0) s = c / (2 * (1 - l));
    return [
        hcg[0],
        s * 100,
        l * 100
    ];
};
$8f2e887ad5de2f78$var$convert.hcg.hwb = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1.0 - c);
    return [
        hcg[0],
        (v - c) * 100,
        (1 - v) * 100
    ];
};
$8f2e887ad5de2f78$var$convert.hwb.hcg = function(hwb) {
    const w = hwb[1] / 100;
    const b = hwb[2] / 100;
    const v = 1 - b;
    const c = v - w;
    let g = 0;
    if (c < 1) g = (v - c) / (1 - c);
    return [
        hwb[0],
        c * 100,
        g * 100
    ];
};
$8f2e887ad5de2f78$var$convert.apple.rgb = function(apple) {
    return [
        apple[0] / 65535 * 255,
        apple[1] / 65535 * 255,
        apple[2] / 65535 * 255
    ];
};
$8f2e887ad5de2f78$var$convert.rgb.apple = function(rgb) {
    return [
        rgb[0] / 255 * 65535,
        rgb[1] / 255 * 65535,
        rgb[2] / 255 * 65535
    ];
};
$8f2e887ad5de2f78$var$convert.gray.rgb = function(args) {
    return [
        args[0] / 100 * 255,
        args[0] / 100 * 255,
        args[0] / 100 * 255
    ];
};
$8f2e887ad5de2f78$var$convert.gray.hsl = function(args) {
    return [
        0,
        0,
        args[0]
    ];
};
$8f2e887ad5de2f78$var$convert.gray.hsv = $8f2e887ad5de2f78$var$convert.gray.hsl;
$8f2e887ad5de2f78$var$convert.gray.hwb = function(gray) {
    return [
        0,
        100,
        gray[0]
    ];
};
$8f2e887ad5de2f78$var$convert.gray.cmyk = function(gray) {
    return [
        0,
        0,
        0,
        gray[0]
    ];
};
$8f2e887ad5de2f78$var$convert.gray.lab = function(gray) {
    return [
        gray[0],
        0,
        0
    ];
};
$8f2e887ad5de2f78$var$convert.gray.hex = function(gray) {
    const val = Math.round(gray[0] / 100 * 255) & 0xFF;
    const integer = (val << 16) + (val << 8) + val;
    const string = integer.toString(16).toUpperCase();
    return "000000".substring(string.length) + string;
};
$8f2e887ad5de2f78$var$convert.rgb.gray = function(rgb) {
    const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [
        val / 255 * 100
    ];
};

});
parcelRequire.register("4ZbzB", function(module, exports) {
"use strict";
module.exports = {
    "aliceblue": [
        240,
        248,
        255
    ],
    "antiquewhite": [
        250,
        235,
        215
    ],
    "aqua": [
        0,
        255,
        255
    ],
    "aquamarine": [
        127,
        255,
        212
    ],
    "azure": [
        240,
        255,
        255
    ],
    "beige": [
        245,
        245,
        220
    ],
    "bisque": [
        255,
        228,
        196
    ],
    "black": [
        0,
        0,
        0
    ],
    "blanchedalmond": [
        255,
        235,
        205
    ],
    "blue": [
        0,
        0,
        255
    ],
    "blueviolet": [
        138,
        43,
        226
    ],
    "brown": [
        165,
        42,
        42
    ],
    "burlywood": [
        222,
        184,
        135
    ],
    "cadetblue": [
        95,
        158,
        160
    ],
    "chartreuse": [
        127,
        255,
        0
    ],
    "chocolate": [
        210,
        105,
        30
    ],
    "coral": [
        255,
        127,
        80
    ],
    "cornflowerblue": [
        100,
        149,
        237
    ],
    "cornsilk": [
        255,
        248,
        220
    ],
    "crimson": [
        220,
        20,
        60
    ],
    "cyan": [
        0,
        255,
        255
    ],
    "darkblue": [
        0,
        0,
        139
    ],
    "darkcyan": [
        0,
        139,
        139
    ],
    "darkgoldenrod": [
        184,
        134,
        11
    ],
    "darkgray": [
        169,
        169,
        169
    ],
    "darkgreen": [
        0,
        100,
        0
    ],
    "darkgrey": [
        169,
        169,
        169
    ],
    "darkkhaki": [
        189,
        183,
        107
    ],
    "darkmagenta": [
        139,
        0,
        139
    ],
    "darkolivegreen": [
        85,
        107,
        47
    ],
    "darkorange": [
        255,
        140,
        0
    ],
    "darkorchid": [
        153,
        50,
        204
    ],
    "darkred": [
        139,
        0,
        0
    ],
    "darksalmon": [
        233,
        150,
        122
    ],
    "darkseagreen": [
        143,
        188,
        143
    ],
    "darkslateblue": [
        72,
        61,
        139
    ],
    "darkslategray": [
        47,
        79,
        79
    ],
    "darkslategrey": [
        47,
        79,
        79
    ],
    "darkturquoise": [
        0,
        206,
        209
    ],
    "darkviolet": [
        148,
        0,
        211
    ],
    "deeppink": [
        255,
        20,
        147
    ],
    "deepskyblue": [
        0,
        191,
        255
    ],
    "dimgray": [
        105,
        105,
        105
    ],
    "dimgrey": [
        105,
        105,
        105
    ],
    "dodgerblue": [
        30,
        144,
        255
    ],
    "firebrick": [
        178,
        34,
        34
    ],
    "floralwhite": [
        255,
        250,
        240
    ],
    "forestgreen": [
        34,
        139,
        34
    ],
    "fuchsia": [
        255,
        0,
        255
    ],
    "gainsboro": [
        220,
        220,
        220
    ],
    "ghostwhite": [
        248,
        248,
        255
    ],
    "gold": [
        255,
        215,
        0
    ],
    "goldenrod": [
        218,
        165,
        32
    ],
    "gray": [
        128,
        128,
        128
    ],
    "green": [
        0,
        128,
        0
    ],
    "greenyellow": [
        173,
        255,
        47
    ],
    "grey": [
        128,
        128,
        128
    ],
    "honeydew": [
        240,
        255,
        240
    ],
    "hotpink": [
        255,
        105,
        180
    ],
    "indianred": [
        205,
        92,
        92
    ],
    "indigo": [
        75,
        0,
        130
    ],
    "ivory": [
        255,
        255,
        240
    ],
    "khaki": [
        240,
        230,
        140
    ],
    "lavender": [
        230,
        230,
        250
    ],
    "lavenderblush": [
        255,
        240,
        245
    ],
    "lawngreen": [
        124,
        252,
        0
    ],
    "lemonchiffon": [
        255,
        250,
        205
    ],
    "lightblue": [
        173,
        216,
        230
    ],
    "lightcoral": [
        240,
        128,
        128
    ],
    "lightcyan": [
        224,
        255,
        255
    ],
    "lightgoldenrodyellow": [
        250,
        250,
        210
    ],
    "lightgray": [
        211,
        211,
        211
    ],
    "lightgreen": [
        144,
        238,
        144
    ],
    "lightgrey": [
        211,
        211,
        211
    ],
    "lightpink": [
        255,
        182,
        193
    ],
    "lightsalmon": [
        255,
        160,
        122
    ],
    "lightseagreen": [
        32,
        178,
        170
    ],
    "lightskyblue": [
        135,
        206,
        250
    ],
    "lightslategray": [
        119,
        136,
        153
    ],
    "lightslategrey": [
        119,
        136,
        153
    ],
    "lightsteelblue": [
        176,
        196,
        222
    ],
    "lightyellow": [
        255,
        255,
        224
    ],
    "lime": [
        0,
        255,
        0
    ],
    "limegreen": [
        50,
        205,
        50
    ],
    "linen": [
        250,
        240,
        230
    ],
    "magenta": [
        255,
        0,
        255
    ],
    "maroon": [
        128,
        0,
        0
    ],
    "mediumaquamarine": [
        102,
        205,
        170
    ],
    "mediumblue": [
        0,
        0,
        205
    ],
    "mediumorchid": [
        186,
        85,
        211
    ],
    "mediumpurple": [
        147,
        112,
        219
    ],
    "mediumseagreen": [
        60,
        179,
        113
    ],
    "mediumslateblue": [
        123,
        104,
        238
    ],
    "mediumspringgreen": [
        0,
        250,
        154
    ],
    "mediumturquoise": [
        72,
        209,
        204
    ],
    "mediumvioletred": [
        199,
        21,
        133
    ],
    "midnightblue": [
        25,
        25,
        112
    ],
    "mintcream": [
        245,
        255,
        250
    ],
    "mistyrose": [
        255,
        228,
        225
    ],
    "moccasin": [
        255,
        228,
        181
    ],
    "navajowhite": [
        255,
        222,
        173
    ],
    "navy": [
        0,
        0,
        128
    ],
    "oldlace": [
        253,
        245,
        230
    ],
    "olive": [
        128,
        128,
        0
    ],
    "olivedrab": [
        107,
        142,
        35
    ],
    "orange": [
        255,
        165,
        0
    ],
    "orangered": [
        255,
        69,
        0
    ],
    "orchid": [
        218,
        112,
        214
    ],
    "palegoldenrod": [
        238,
        232,
        170
    ],
    "palegreen": [
        152,
        251,
        152
    ],
    "paleturquoise": [
        175,
        238,
        238
    ],
    "palevioletred": [
        219,
        112,
        147
    ],
    "papayawhip": [
        255,
        239,
        213
    ],
    "peachpuff": [
        255,
        218,
        185
    ],
    "peru": [
        205,
        133,
        63
    ],
    "pink": [
        255,
        192,
        203
    ],
    "plum": [
        221,
        160,
        221
    ],
    "powderblue": [
        176,
        224,
        230
    ],
    "purple": [
        128,
        0,
        128
    ],
    "rebeccapurple": [
        102,
        51,
        153
    ],
    "red": [
        255,
        0,
        0
    ],
    "rosybrown": [
        188,
        143,
        143
    ],
    "royalblue": [
        65,
        105,
        225
    ],
    "saddlebrown": [
        139,
        69,
        19
    ],
    "salmon": [
        250,
        128,
        114
    ],
    "sandybrown": [
        244,
        164,
        96
    ],
    "seagreen": [
        46,
        139,
        87
    ],
    "seashell": [
        255,
        245,
        238
    ],
    "sienna": [
        160,
        82,
        45
    ],
    "silver": [
        192,
        192,
        192
    ],
    "skyblue": [
        135,
        206,
        235
    ],
    "slateblue": [
        106,
        90,
        205
    ],
    "slategray": [
        112,
        128,
        144
    ],
    "slategrey": [
        112,
        128,
        144
    ],
    "snow": [
        255,
        250,
        250
    ],
    "springgreen": [
        0,
        255,
        127
    ],
    "steelblue": [
        70,
        130,
        180
    ],
    "tan": [
        210,
        180,
        140
    ],
    "teal": [
        0,
        128,
        128
    ],
    "thistle": [
        216,
        191,
        216
    ],
    "tomato": [
        255,
        99,
        71
    ],
    "turquoise": [
        64,
        224,
        208
    ],
    "violet": [
        238,
        130,
        238
    ],
    "wheat": [
        245,
        222,
        179
    ],
    "white": [
        255,
        255,
        255
    ],
    "whitesmoke": [
        245,
        245,
        245
    ],
    "yellow": [
        255,
        255,
        0
    ],
    "yellowgreen": [
        154,
        205,
        50
    ]
};

});


parcelRequire.register("3sxGv", function(module, exports) {

var $ci9uU = parcelRequire("ci9uU");
/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/ function $284e1da989acc07e$var$buildGraph() {
    const graph = {};
    // https://jsperf.com/object-keys-vs-for-in-with-closure/3
    const models = Object.keys($ci9uU);
    for(let len = models.length, i = 0; i < len; i++)graph[models[i]] = {
        // http://jsperf.com/1-vs-infinity
        // micro-opt, but this is simple.
        distance: -1,
        parent: null
    };
    return graph;
}
// https://en.wikipedia.org/wiki/Breadth-first_search
function $284e1da989acc07e$var$deriveBFS(fromModel) {
    const graph = $284e1da989acc07e$var$buildGraph();
    const queue = [
        fromModel
    ]; // Unshift -> queue -> pop
    graph[fromModel].distance = 0;
    while(queue.length){
        const current = queue.pop();
        const adjacents = Object.keys($ci9uU[current]);
        for(let len = adjacents.length, i = 0; i < len; i++){
            const adjacent = adjacents[i];
            const node = graph[adjacent];
            if (node.distance === -1) {
                node.distance = graph[current].distance + 1;
                node.parent = current;
                queue.unshift(adjacent);
            }
        }
    }
    return graph;
}
function $284e1da989acc07e$var$link(from, to) {
    return function(args) {
        return to(from(args));
    };
}
function $284e1da989acc07e$var$wrapConversion(toModel, graph) {
    const path = [
        graph[toModel].parent,
        toModel
    ];
    let fn = $ci9uU[graph[toModel].parent][toModel];
    let cur = graph[toModel].parent;
    while(graph[cur].parent){
        path.unshift(graph[cur].parent);
        fn = $284e1da989acc07e$var$link($ci9uU[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
}
module.exports = function(fromModel) {
    const graph = $284e1da989acc07e$var$deriveBFS(fromModel);
    const conversion = {};
    const models = Object.keys(graph);
    for(let len = models.length, i = 0; i < len; i++){
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) continue;
        conversion[toModel] = $284e1da989acc07e$var$wrapConversion(toModel, graph);
    }
    return conversion;
};

});




$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "_report", () => $ed871dc03bbf580d$export$12358408d9820617);
$parcel$export(module.exports, "default", () => $ed871dc03bbf580d$export$2e2bcd8739ae039);





var $eabf62846bf2f2cf$exports = {};
"use strict";
var $cad1674026a68038$exports = {};
"use strict";
var $3b9ebf9cf9f7cdb0$exports = {};
"use strict";
$3b9ebf9cf9f7cdb0$exports = ({ onlyFirst: onlyFirst = false  } = {})=>{
    const pattern = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
    ].join("|");
    return new RegExp(pattern, onlyFirst ? undefined : "g");
};


$cad1674026a68038$exports = (string)=>typeof string === "string" ? string.replace($3b9ebf9cf9f7cdb0$exports(), "") : string;


var $4612d71d076b9818$exports = {};
/* eslint-disable yoda */ "use strict";
const $4612d71d076b9818$var$isFullwidthCodePoint = (codePoint)=>{
    if (Number.isNaN(codePoint)) return false;
    // Code points are derived from:
    // http://www.unix.org/Public/UNIDATA/EastAsianWidth.txt
    if (codePoint >= 0x1100 && (codePoint <= 0x115F || // Hangul Jamo
    codePoint === 0x2329 || // LEFT-POINTING ANGLE BRACKET
    codePoint === 0x232A || // RIGHT-POINTING ANGLE BRACKET
    // CJK Radicals Supplement .. Enclosed CJK Letters and Months
    0x2E80 <= codePoint && codePoint <= 0x3247 && codePoint !== 0x303F || // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
    0x3250 <= codePoint && codePoint <= 0x4DBF || // CJK Unified Ideographs .. Yi Radicals
    0x4E00 <= codePoint && codePoint <= 0xA4C6 || // Hangul Jamo Extended-A
    0xA960 <= codePoint && codePoint <= 0xA97C || // Hangul Syllables
    0xAC00 <= codePoint && codePoint <= 0xD7A3 || // CJK Compatibility Ideographs
    0xF900 <= codePoint && codePoint <= 0xFAFF || // Vertical Forms
    0xFE10 <= codePoint && codePoint <= 0xFE19 || // CJK Compatibility Forms .. Small Form Variants
    0xFE30 <= codePoint && codePoint <= 0xFE6B || // Halfwidth and Fullwidth Forms
    0xFF01 <= codePoint && codePoint <= 0xFF60 || 0xFFE0 <= codePoint && codePoint <= 0xFFE6 || // Kana Supplement
    0x1B000 <= codePoint && codePoint <= 0x1B001 || // Enclosed Ideographic Supplement
    0x1F200 <= codePoint && codePoint <= 0x1F251 || // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
    0x20000 <= codePoint && codePoint <= 0x3FFFD)) return true;
    return false;
};
$4612d71d076b9818$exports = $4612d71d076b9818$var$isFullwidthCodePoint;
$4612d71d076b9818$exports.default = $4612d71d076b9818$var$isFullwidthCodePoint;


var $2c2ef97d085ba178$exports = {};
"use strict";
$2c2ef97d085ba178$exports = function() {
    // https://mths.be/emoji
    return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
};


const $eabf62846bf2f2cf$var$stringWidth = (string)=>{
    string = string.replace($2c2ef97d085ba178$exports(), "  ");
    if (typeof string !== "string" || string.length === 0) return 0;
    string = $cad1674026a68038$exports(string);
    let width = 0;
    for(let i = 0; i < string.length; i++){
        const code = string.codePointAt(i);
        // Ignore control characters
        if (code <= 0x1F || code >= 0x7F && code <= 0x9F) continue;
        // Ignore combining characters
        if (code >= 0x300 && code <= 0x36F) continue;
        // Surrogates
        if (code > 0xFFFF) i++;
        width += $4612d71d076b9818$exports(code) ? 2 : 1;
    }
    return width;
};
$eabf62846bf2f2cf$exports = $eabf62846bf2f2cf$var$stringWidth;
// TODO: remove this in the next major version
$eabf62846bf2f2cf$exports.default = $eabf62846bf2f2cf$var$stringWidth;




let $db741814f1ec46f5$var$terminalSize = (0, ($parcel$interopDefault($jdxjN$termsize)))();
process.stdout.on("resize", function() {
    $db741814f1ec46f5$var$terminalSize = (0, ($parcel$interopDefault($jdxjN$termsize)))();
});
function $db741814f1ec46f5$export$74827651f504bd9d() {
    return $db741814f1ec46f5$var$terminalSize;
} // Pad a string with spaces on either side
function $db741814f1ec46f5$export$5d04458e2a6c373e(text, length, align = "left") {
    let pad = " ".repeat(length - (0, (/*@__PURE__*/$parcel$interopDefault($eabf62846bf2f2cf$exports)))(text));
    if (align === "right") return pad + text;
    return text + pad;
}
function $db741814f1ec46f5$export$f9e6d0654ee054e0(filename, color = (0, ($parcel$interopDefault($jdxjN$chalk))).reset) {
    let dir = (0, ($parcel$interopDefault($jdxjN$path))).relative(process.cwd(), (0, ($parcel$interopDefault($jdxjN$path))).dirname(filename));
    return (0, ($parcel$interopDefault($jdxjN$chalk))).dim(dir + (dir ? (0, ($parcel$interopDefault($jdxjN$path))).sep : "")) + color((0, ($parcel$interopDefault($jdxjN$path))).basename(filename));
}
function $db741814f1ec46f5$export$dcd94c44359f7fd4(message) {
    let { columns: columns  } = $db741814f1ec46f5$var$terminalSize;
    return (0, (/*@__PURE__*/$parcel$interopDefault($cad1674026a68038$exports)))(message).split("\n").reduce((p, line)=>p + Math.ceil(((0, (/*@__PURE__*/$parcel$interopDefault($eabf62846bf2f2cf$exports)))(line) || 1) / columns), 0);
}


const $60586aca096dbd99$var$logLevels = {
    none: 0,
    error: 1,
    warn: 2,
    info: 3,
    progress: 3,
    success: 3,
    verbose: 4
};
var $60586aca096dbd99$export$2e2bcd8739ae039 = $60586aca096dbd99$var$logLevels;



var $268fee2ba7f81d1b$exports = {};
"use strict";
/**
 * filesize
 *
 * @copyright 2020 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 6.1.0
 */ (function(global1) {
    var b = /^(b|B)$/, symbol = {
        iec: {
            bits: [
                "b",
                "Kib",
                "Mib",
                "Gib",
                "Tib",
                "Pib",
                "Eib",
                "Zib",
                "Yib"
            ],
            bytes: [
                "B",
                "KiB",
                "MiB",
                "GiB",
                "TiB",
                "PiB",
                "EiB",
                "ZiB",
                "YiB"
            ]
        },
        jedec: {
            bits: [
                "b",
                "Kb",
                "Mb",
                "Gb",
                "Tb",
                "Pb",
                "Eb",
                "Zb",
                "Yb"
            ],
            bytes: [
                "B",
                "KB",
                "MB",
                "GB",
                "TB",
                "PB",
                "EB",
                "ZB",
                "YB"
            ]
        }
    }, fullform = {
        iec: [
            "",
            "kibi",
            "mebi",
            "gibi",
            "tebi",
            "pebi",
            "exbi",
            "zebi",
            "yobi"
        ],
        jedec: [
            "",
            "kilo",
            "mega",
            "giga",
            "tera",
            "peta",
            "exa",
            "zetta",
            "yotta"
        ]
    };
    /**
   * filesize
   *
   * @method filesize
   * @param  {Mixed}   arg        String, Int or Float to transform
   * @param  {Object}  descriptor [Optional] Flags
   * @return {String}             Readable file size String
   */ function filesize(arg) {
        var descriptor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var result = [], val = 0, e = void 0, base = void 0, bits = void 0, ceil = void 0, full = void 0, fullforms = void 0, locale = void 0, localeOptions = void 0, neg = void 0, num = void 0, output = void 0, round = void 0, unix = void 0, separator = void 0, spacer = void 0, standard = void 0, symbols = void 0;
        if (isNaN(arg)) throw new TypeError("Invalid number");
        bits = descriptor.bits === true;
        unix = descriptor.unix === true;
        base = descriptor.base || 2;
        round = descriptor.round !== void 0 ? descriptor.round : unix ? 1 : 2;
        locale = descriptor.locale !== void 0 ? descriptor.locale : "";
        localeOptions = descriptor.localeOptions || {};
        separator = descriptor.separator !== void 0 ? descriptor.separator : "";
        spacer = descriptor.spacer !== void 0 ? descriptor.spacer : unix ? "" : " ";
        symbols = descriptor.symbols || {};
        standard = base === 2 ? descriptor.standard || "jedec" : "jedec";
        output = descriptor.output || "string";
        full = descriptor.fullform === true;
        fullforms = descriptor.fullforms instanceof Array ? descriptor.fullforms : [];
        e = descriptor.exponent !== void 0 ? descriptor.exponent : -1;
        num = Number(arg);
        neg = num < 0;
        ceil = base > 2 ? 1000 : 1024; // Flipping a negative number to determine the size
        if (neg) num = -num;
         // Determining the exponent
        if (e === -1 || isNaN(e)) {
            e = Math.floor(Math.log(num) / Math.log(ceil));
            if (e < 0) e = 0;
        } // Exceeding supported length, time to reduce & multiply
        if (e > 8) e = 8;
        if (output === "exponent") return e;
         // Zero is now a special case because bytes divide by 1
        if (num === 0) {
            result[0] = 0;
            result[1] = unix ? "" : symbol[standard][bits ? "bits" : "bytes"][e];
        } else {
            val = num / (base === 2 ? Math.pow(2, e * 10) : Math.pow(1000, e));
            if (bits) {
                val = val * 8;
                if (val >= ceil && e < 8) {
                    val = val / ceil;
                    e++;
                }
            }
            result[0] = Number(val.toFixed(e > 0 ? round : 0));
            if (result[0] === ceil && e < 8 && descriptor.exponent === void 0) {
                result[0] = 1;
                e++;
            }
            result[1] = base === 10 && e === 1 ? bits ? "kb" : "kB" : symbol[standard][bits ? "bits" : "bytes"][e];
            if (unix) {
                result[1] = standard === "jedec" ? result[1].charAt(0) : e > 0 ? result[1].replace(/B$/, "") : result[1];
                if (b.test(result[1])) {
                    result[0] = Math.floor(result[0]);
                    result[1] = "";
                }
            }
        } // Decorating a 'diff'
        if (neg) result[0] = -result[0];
         // Applying custom symbol
        result[1] = symbols[result[1]] || result[1];
        if (locale === true) result[0] = result[0].toLocaleString();
        else if (locale.length > 0) result[0] = result[0].toLocaleString(locale, localeOptions);
        else if (separator.length > 0) result[0] = result[0].toString().replace(".", separator);
         // Returning Array, Object, or String (default)
        if (output === "array") return result;
        if (full) result[1] = fullforms[e] ? fullforms[e] : fullform[standard][e] + (bits ? "bit" : "byte") + (result[0] === 1 ? "" : "s");
        if (output === "object") return {
            value: result[0],
            symbol: result[1],
            exponent: e
        };
        return result.join(spacer);
    } // Partial application for functional programming
    filesize.partial = function(opt) {
        return function(arg) {
            return filesize(arg, opt);
        };
    }; // CommonJS, AMD, script tag
    $268fee2ba7f81d1b$exports = filesize;
})(typeof window !== "undefined" ? window : $parcel$global);



var $381ce9441523ef0c$exports = {};
"use strict";
function $381ce9441523ef0c$var$nullthrows(x, message) {
    if (x != null) return x;
    var error = new Error(message !== undefined ? message : "Got unexpected " + x);
    error.framesToPop = 1; // Skip nullthrows's own stack frame.
    throw error;
}
$381ce9441523ef0c$exports = $381ce9441523ef0c$var$nullthrows;
$381ce9441523ef0c$exports.default = $381ce9441523ef0c$var$nullthrows;
Object.defineProperty($381ce9441523ef0c$exports, "__esModule", {
    value: true
});


var $fdf19516bfc20b1c$exports = {};

$parcel$export($fdf19516bfc20b1c$exports, "progress", () => $fdf19516bfc20b1c$export$504d7abb21fa8c9);
$parcel$export($fdf19516bfc20b1c$exports, "success", () => $fdf19516bfc20b1c$export$fe7c49d056ea1d88);
$parcel$export($fdf19516bfc20b1c$exports, "error", () => $fdf19516bfc20b1c$export$a3bc9b8ed74fc);
$parcel$export($fdf19516bfc20b1c$exports, "warning", () => $fdf19516bfc20b1c$export$491112666e282270);
$parcel$export($fdf19516bfc20b1c$exports, "info", () => $fdf19516bfc20b1c$export$a80b3bd66acc52ff);
$parcel$export($fdf19516bfc20b1c$exports, "hint", () => $fdf19516bfc20b1c$export$464c821cd4347539);
$parcel$export($fdf19516bfc20b1c$exports, "docs", () => $fdf19516bfc20b1c$export$257224358692d0e0);
// From https://github.com/sindresorhus/is-unicode-supported/blob/8f123916d5c25a87c4f966dcc248b7ca5df2b4ca/index.js
// This package is ESM-only so it has to be vendored
function $fdf19516bfc20b1c$var$isUnicodeSupported() {
    if (process.platform !== "win32") return process.env.TERM !== "linux"; // Linux console (kernel)
    return Boolean(process.env.CI) || Boolean(process.env.WT_SESSION) || // Windows Terminal
    process.env.ConEmuTask === "{cmd::Cmder}" || // ConEmu and cmder
    process.env.TERM_PROGRAM === "vscode" || process.env.TERM === "xterm-256color" || process.env.TERM === "alacritty";
}
const $fdf19516bfc20b1c$var$supportsEmoji = $fdf19516bfc20b1c$var$isUnicodeSupported(); // Fallback symbols for Windows from https://en.wikipedia.org/wiki/Code_page_437
const $fdf19516bfc20b1c$export$504d7abb21fa8c9 = $fdf19516bfc20b1c$var$supportsEmoji ? "⏳" : "∞";
const $fdf19516bfc20b1c$export$fe7c49d056ea1d88 = $fdf19516bfc20b1c$var$supportsEmoji ? "✨" : "√";
const $fdf19516bfc20b1c$export$a3bc9b8ed74fc = $fdf19516bfc20b1c$var$supportsEmoji ? "\uD83D\uDEA8" : "\xd7";
const $fdf19516bfc20b1c$export$491112666e282270 = $fdf19516bfc20b1c$var$supportsEmoji ? "⚠️" : "‼";
const $fdf19516bfc20b1c$export$a80b3bd66acc52ff = $fdf19516bfc20b1c$var$supportsEmoji ? "ℹ️" : "ℹ";
const $fdf19516bfc20b1c$export$464c821cd4347539 = $fdf19516bfc20b1c$var$supportsEmoji ? "\uD83D\uDCA1" : "ℹ";
const $fdf19516bfc20b1c$export$257224358692d0e0 = $fdf19516bfc20b1c$var$supportsEmoji ? "\uD83D\uDCDD" : "ℹ";



var $1d566199bb5a9fec$exports = {};
"use strict";


var $0850007c62626d78$export$57bf213be019eeb0;
var $0850007c62626d78$export$fe8985bb6374093c;
var $0850007c62626d78$export$e03c1c3201ee8bb7;
"use strict";
var $91fedd9f10c16964$exports = {};
"use strict";
var $d5871b408f0cd287$exports = {};
"use strict";
var $a89bfc2f1cf16564$exports = {};
"use strict";
const $a89bfc2f1cf16564$var$mimicFn = (to, from)=>{
    for (const prop of Reflect.ownKeys(from))Object.defineProperty(to, prop, Object.getOwnPropertyDescriptor(from, prop));
    return to;
};
$a89bfc2f1cf16564$exports = $a89bfc2f1cf16564$var$mimicFn;
// TODO: Remove this for the next major release
$a89bfc2f1cf16564$exports.default = $a89bfc2f1cf16564$var$mimicFn;


const $d5871b408f0cd287$var$calledFunctions = new WeakMap();
const $d5871b408f0cd287$var$oneTime = (fn, options = {})=>{
    if (typeof fn !== "function") throw new TypeError("Expected a function");
    let ret;
    let isCalled = false;
    let callCount = 0;
    const functionName = fn.displayName || fn.name || "<anonymous>";
    const onetime = function(...args) {
        $d5871b408f0cd287$var$calledFunctions.set(onetime, ++callCount);
        if (isCalled) {
            if (options.throw === true) throw new Error(`Function \`${functionName}\` can only be called once`);
            return ret;
        }
        isCalled = true;
        ret = fn.apply(this, args);
        fn = null;
        return ret;
    };
    $a89bfc2f1cf16564$exports(onetime, fn);
    $d5871b408f0cd287$var$calledFunctions.set(onetime, callCount);
    return onetime;
};
$d5871b408f0cd287$exports = $d5871b408f0cd287$var$oneTime;
// TODO: Remove this for the next major release
$d5871b408f0cd287$exports.default = $d5871b408f0cd287$var$oneTime;
$d5871b408f0cd287$exports.callCount = (fn)=>{
    if (!$d5871b408f0cd287$var$calledFunctions.has(fn)) throw new Error(`The given function \`${fn.name}\` is not wrapped by the \`onetime\` package`);
    return $d5871b408f0cd287$var$calledFunctions.get(fn);
};


var $2918e23e143a59e2$exports = {};
// Note: since nyc uses this module to output coverage, any lines
// that are in the direct sync flow of nyc's outputCoverage are
// ignored, since we can never get coverage for them.

var $0f05b97f680b8e9d$exports = {};
// This is not the set of all possible signals.
//
// It IS, however, the set of all signals that trigger
// an exit on either Linux or BSD systems.  Linux is a
// superset of the signal names supported on BSD, and
// the unknown signals just fail to register, so we can
// catch that easily enough.
//
// Don't bother with SIGKILL.  It's uncatchable, which
// means that we can't fire any callbacks anyway.
//
// If a user does happen to register a handler on a non-
// fatal signal like SIGWINCH or something, and then
// exit, it'll end up firing `process.emit('exit')`, so
// the handler will be fired anyway.
//
// SIGBUS, SIGFPE, SIGSEGV and SIGILL, when not raised
// artificially, inherently leave the process in a
// state from which it is not safe to try and enter JS
// listeners.
$0f05b97f680b8e9d$exports = [
    "SIGABRT",
    "SIGALRM",
    "SIGHUP",
    "SIGINT",
    "SIGTERM"
];
if (process.platform !== "win32") $0f05b97f680b8e9d$exports.push("SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
if (process.platform === "linux") $0f05b97f680b8e9d$exports.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT", "SIGUNUSED");


var $2918e23e143a59e2$require$signals = $0f05b97f680b8e9d$exports;

var $2918e23e143a59e2$require$EE = $jdxjN$events;
/* istanbul ignore if */ if (typeof $2918e23e143a59e2$require$EE !== "function") $2918e23e143a59e2$require$EE = $2918e23e143a59e2$require$EE.EventEmitter;
var $2918e23e143a59e2$var$emitter;
if (process.__signal_exit_emitter__) $2918e23e143a59e2$var$emitter = process.__signal_exit_emitter__;
else {
    $2918e23e143a59e2$var$emitter = process.__signal_exit_emitter__ = new $2918e23e143a59e2$require$EE();
    $2918e23e143a59e2$var$emitter.count = 0;
    $2918e23e143a59e2$var$emitter.emitted = {};
}
// Because this emitter is a global, we have to check to see if a
// previous version of this library failed to enable infinite listeners.
// I know what you're about to say.  But literally everything about
// signal-exit is a compromise with evil.  Get used to it.
if (!$2918e23e143a59e2$var$emitter.infinite) {
    $2918e23e143a59e2$var$emitter.setMaxListeners(Infinity);
    $2918e23e143a59e2$var$emitter.infinite = true;
}
$2918e23e143a59e2$exports = function(cb, opts) {
    $jdxjN$assert.equal(typeof cb, "function", "a callback must be provided for exit handler");
    if ($2918e23e143a59e2$var$loaded === false) $2918e23e143a59e2$var$load();
    var ev = "exit";
    if (opts && opts.alwaysLast) ev = "afterexit";
    var remove = function() {
        $2918e23e143a59e2$var$emitter.removeListener(ev, cb);
        if ($2918e23e143a59e2$var$emitter.listeners("exit").length === 0 && $2918e23e143a59e2$var$emitter.listeners("afterexit").length === 0) $2918e23e143a59e2$var$unload();
    };
    $2918e23e143a59e2$var$emitter.on(ev, cb);
    return remove;
};
$2918e23e143a59e2$exports.unload = $2918e23e143a59e2$var$unload;
function $2918e23e143a59e2$var$unload() {
    if (!$2918e23e143a59e2$var$loaded) return;
    $2918e23e143a59e2$var$loaded = false;
    $2918e23e143a59e2$require$signals.forEach(function(sig) {
        try {
            process.removeListener(sig, $2918e23e143a59e2$var$sigListeners[sig]);
        } catch (er) {}
    });
    process.emit = $2918e23e143a59e2$var$originalProcessEmit;
    process.reallyExit = $2918e23e143a59e2$var$originalProcessReallyExit;
    $2918e23e143a59e2$var$emitter.count -= 1;
}
function $2918e23e143a59e2$var$emit(event, code, signal) {
    if ($2918e23e143a59e2$var$emitter.emitted[event]) return;
    $2918e23e143a59e2$var$emitter.emitted[event] = true;
    $2918e23e143a59e2$var$emitter.emit(event, code, signal);
}
// { <signal>: <listener fn>, ... }
var $2918e23e143a59e2$var$sigListeners = {};
$2918e23e143a59e2$require$signals.forEach(function(sig) {
    $2918e23e143a59e2$var$sigListeners[sig] = function listener() {
        // If there are no other listeners, an exit is coming!
        // Simplest way: remove us and then re-send the signal.
        // We know that this will kill the process, so we can
        // safely emit now.
        var listeners = process.listeners(sig);
        if (listeners.length === $2918e23e143a59e2$var$emitter.count) {
            $2918e23e143a59e2$var$unload();
            $2918e23e143a59e2$var$emit("exit", null, sig);
            /* istanbul ignore next */ $2918e23e143a59e2$var$emit("afterexit", null, sig);
            /* istanbul ignore next */ process.kill(process.pid, sig);
        }
    };
});
$2918e23e143a59e2$exports.signals = function() {
    return $2918e23e143a59e2$require$signals;
};
$2918e23e143a59e2$exports.load = $2918e23e143a59e2$var$load;
var $2918e23e143a59e2$var$loaded = false;
function $2918e23e143a59e2$var$load() {
    if ($2918e23e143a59e2$var$loaded) return;
    $2918e23e143a59e2$var$loaded = true;
    // This is the number of onSignalExit's that are in play.
    // It's important so that we can count the correct number of
    // listeners on signals, and don't wait for the other one to
    // handle it instead of us.
    $2918e23e143a59e2$var$emitter.count += 1;
    $2918e23e143a59e2$require$signals = $2918e23e143a59e2$require$signals.filter(function(sig) {
        try {
            process.on(sig, $2918e23e143a59e2$var$sigListeners[sig]);
            return true;
        } catch (er) {
            return false;
        }
    });
    process.emit = $2918e23e143a59e2$var$processEmit;
    process.reallyExit = $2918e23e143a59e2$var$processReallyExit;
}
var $2918e23e143a59e2$var$originalProcessReallyExit = process.reallyExit;
function $2918e23e143a59e2$var$processReallyExit(code) {
    process.exitCode = code || 0;
    $2918e23e143a59e2$var$emit("exit", process.exitCode, null);
    /* istanbul ignore next */ $2918e23e143a59e2$var$emit("afterexit", process.exitCode, null);
    /* istanbul ignore next */ $2918e23e143a59e2$var$originalProcessReallyExit.call(process, process.exitCode);
}
var $2918e23e143a59e2$var$originalProcessEmit = process.emit;
function $2918e23e143a59e2$var$processEmit(ev, arg) {
    if (ev === "exit") {
        if (arg !== undefined) process.exitCode = arg;
        var ret = $2918e23e143a59e2$var$originalProcessEmit.apply(this, arguments);
        $2918e23e143a59e2$var$emit("exit", process.exitCode, null);
        /* istanbul ignore next */ $2918e23e143a59e2$var$emit("afterexit", process.exitCode, null);
        return ret;
    } else return $2918e23e143a59e2$var$originalProcessEmit.apply(this, arguments);
}


$91fedd9f10c16964$exports = $d5871b408f0cd287$exports(()=>{
    $2918e23e143a59e2$exports(()=>{
        process.stderr.write("\x1b[?25h");
    }, {
        alwaysLast: true
    });
});


let $0850007c62626d78$var$isHidden = false;
$0850007c62626d78$export$57bf213be019eeb0 = (writableStream = process.stderr)=>{
    if (!writableStream.isTTY) return;
    $0850007c62626d78$var$isHidden = false;
    writableStream.write("\x1b[?25h");
};
$0850007c62626d78$export$fe8985bb6374093c = (writableStream = process.stderr)=>{
    if (!writableStream.isTTY) return;
    $91fedd9f10c16964$exports();
    $0850007c62626d78$var$isHidden = true;
    writableStream.write("\x1b[?25l");
};
$0850007c62626d78$export$e03c1c3201ee8bb7 = (force, writableStream)=>{
    if (force !== undefined) $0850007c62626d78$var$isHidden = force;
    if ($0850007c62626d78$var$isHidden) $0850007c62626d78$export$57bf213be019eeb0(writableStream);
    else $0850007c62626d78$export$fe8985bb6374093c(writableStream);
};


var $705d5bb977fa4942$exports = {};
"use strict";

const $705d5bb977fa4942$var$spinners = Object.assign({}, (parcelRequire("5sVtE")));
const $705d5bb977fa4942$var$spinnersList = Object.keys($705d5bb977fa4942$var$spinners);
Object.defineProperty($705d5bb977fa4942$var$spinners, "random", {
    get () {
        const randomIndex = Math.floor(Math.random() * $705d5bb977fa4942$var$spinnersList.length);
        const spinnerName = $705d5bb977fa4942$var$spinnersList[randomIndex];
        return $705d5bb977fa4942$var$spinners[spinnerName];
    }
});
$705d5bb977fa4942$exports = $705d5bb977fa4942$var$spinners;
// TODO: Remove this for the next major release
$705d5bb977fa4942$exports.default = $705d5bb977fa4942$var$spinners;


var $0eb3dcdf0fef790a$exports = {};
"use strict";

const $0eb3dcdf0fef790a$var$isSupported = process.platform !== "win32" || process.env.CI || process.env.TERM === "xterm-256color";
const $0eb3dcdf0fef790a$var$main = {
    info: $jdxjN$chalk.blue("ℹ"),
    success: $jdxjN$chalk.green("✔"),
    warning: $jdxjN$chalk.yellow("⚠"),
    error: $jdxjN$chalk.red("✖")
};
const $0eb3dcdf0fef790a$var$fallbacks = {
    info: $jdxjN$chalk.blue("i"),
    success: $jdxjN$chalk.green("√"),
    warning: $jdxjN$chalk.yellow("‼"),
    error: $jdxjN$chalk.red("\xd7")
};
$0eb3dcdf0fef790a$exports = $0eb3dcdf0fef790a$var$isSupported ? $0eb3dcdf0fef790a$var$main : $0eb3dcdf0fef790a$var$fallbacks;



var $1a9410c46210704b$exports = {};
"use strict";
var $ca47004935a46ca9$exports = {};
var $e242248f6c6585dc$exports = {};
var $e242248f6c6585dc$var$clone = function() {
    "use strict";
    /**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
*/ function clone(parent, circular, depth, prototype) {
        var filter;
        if (typeof circular === "object") {
            depth = circular.depth;
            prototype = circular.prototype;
            filter = circular.filter;
            circular = circular.circular;
        }
        // maintain two arrays for circular references, where corresponding parents
        // and children have the same index
        var allParents = [];
        var allChildren = [];
        var useBuffer = typeof Buffer != "undefined";
        if (typeof circular == "undefined") circular = true;
        if (typeof depth == "undefined") depth = Infinity;
        // recurse this function so we don't reset allParents and allChildren
        function _clone(parent, depth) {
            // cloning null always returns null
            if (parent === null) return null;
            if (depth == 0) return parent;
            var child;
            var proto;
            if (typeof parent != "object") return parent;
            if (clone.__isArray(parent)) child = [];
            else if (clone.__isRegExp(parent)) {
                child = new RegExp(parent.source, __getRegExpFlags(parent));
                if (parent.lastIndex) child.lastIndex = parent.lastIndex;
            } else if (clone.__isDate(parent)) child = new Date(parent.getTime());
            else if (useBuffer && Buffer.isBuffer(parent)) {
                if (Buffer.allocUnsafe) // Node.js >= 4.5.0
                child = Buffer.allocUnsafe(parent.length);
                else // Older Node.js versions
                child = new Buffer(parent.length);
                parent.copy(child);
                return child;
            } else if (typeof prototype == "undefined") {
                proto = Object.getPrototypeOf(parent);
                child = Object.create(proto);
            } else {
                child = Object.create(prototype);
                proto = prototype;
            }
            if (circular) {
                var index = allParents.indexOf(parent);
                if (index != -1) return allChildren[index];
                allParents.push(parent);
                allChildren.push(child);
            }
            for(var i in parent){
                var attrs;
                if (proto) attrs = Object.getOwnPropertyDescriptor(proto, i);
                if (attrs && attrs.set == null) continue;
                child[i] = _clone(parent[i], depth - 1);
            }
            return child;
        }
        return _clone(parent, depth);
    }
    /**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */ clone.clonePrototype = function clonePrototype(parent) {
        if (parent === null) return null;
        var c = function() {};
        c.prototype = parent;
        return new c();
    };
    // private utility functions
    function __objToStr(o) {
        return Object.prototype.toString.call(o);
    }
    clone.__objToStr = __objToStr;
    function __isDate(o) {
        return typeof o === "object" && __objToStr(o) === "[object Date]";
    }
    clone.__isDate = __isDate;
    function __isArray(o) {
        return typeof o === "object" && __objToStr(o) === "[object Array]";
    }
    clone.__isArray = __isArray;
    function __isRegExp(o) {
        return typeof o === "object" && __objToStr(o) === "[object RegExp]";
    }
    clone.__isRegExp = __isRegExp;
    function __getRegExpFlags(re) {
        var flags = "";
        if (re.global) flags += "g";
        if (re.ignoreCase) flags += "i";
        if (re.multiline) flags += "m";
        return flags;
    }
    clone.__getRegExpFlags = __getRegExpFlags;
    return clone;
}();
if (0, $e242248f6c6585dc$exports) $e242248f6c6585dc$exports = $e242248f6c6585dc$var$clone;


$ca47004935a46ca9$exports = function(options, defaults) {
    options = options || {};
    Object.keys(defaults).forEach(function(key) {
        if (typeof options[key] === "undefined") options[key] = $e242248f6c6585dc$exports(defaults[key]);
    });
    return options;
};


var $4893b61f01cbf221$exports = {};
$4893b61f01cbf221$exports = [
    [
        0x0300,
        0x036F
    ],
    [
        0x0483,
        0x0486
    ],
    [
        0x0488,
        0x0489
    ],
    [
        0x0591,
        0x05BD
    ],
    [
        0x05BF,
        0x05BF
    ],
    [
        0x05C1,
        0x05C2
    ],
    [
        0x05C4,
        0x05C5
    ],
    [
        0x05C7,
        0x05C7
    ],
    [
        0x0600,
        0x0603
    ],
    [
        0x0610,
        0x0615
    ],
    [
        0x064B,
        0x065E
    ],
    [
        0x0670,
        0x0670
    ],
    [
        0x06D6,
        0x06E4
    ],
    [
        0x06E7,
        0x06E8
    ],
    [
        0x06EA,
        0x06ED
    ],
    [
        0x070F,
        0x070F
    ],
    [
        0x0711,
        0x0711
    ],
    [
        0x0730,
        0x074A
    ],
    [
        0x07A6,
        0x07B0
    ],
    [
        0x07EB,
        0x07F3
    ],
    [
        0x0901,
        0x0902
    ],
    [
        0x093C,
        0x093C
    ],
    [
        0x0941,
        0x0948
    ],
    [
        0x094D,
        0x094D
    ],
    [
        0x0951,
        0x0954
    ],
    [
        0x0962,
        0x0963
    ],
    [
        0x0981,
        0x0981
    ],
    [
        0x09BC,
        0x09BC
    ],
    [
        0x09C1,
        0x09C4
    ],
    [
        0x09CD,
        0x09CD
    ],
    [
        0x09E2,
        0x09E3
    ],
    [
        0x0A01,
        0x0A02
    ],
    [
        0x0A3C,
        0x0A3C
    ],
    [
        0x0A41,
        0x0A42
    ],
    [
        0x0A47,
        0x0A48
    ],
    [
        0x0A4B,
        0x0A4D
    ],
    [
        0x0A70,
        0x0A71
    ],
    [
        0x0A81,
        0x0A82
    ],
    [
        0x0ABC,
        0x0ABC
    ],
    [
        0x0AC1,
        0x0AC5
    ],
    [
        0x0AC7,
        0x0AC8
    ],
    [
        0x0ACD,
        0x0ACD
    ],
    [
        0x0AE2,
        0x0AE3
    ],
    [
        0x0B01,
        0x0B01
    ],
    [
        0x0B3C,
        0x0B3C
    ],
    [
        0x0B3F,
        0x0B3F
    ],
    [
        0x0B41,
        0x0B43
    ],
    [
        0x0B4D,
        0x0B4D
    ],
    [
        0x0B56,
        0x0B56
    ],
    [
        0x0B82,
        0x0B82
    ],
    [
        0x0BC0,
        0x0BC0
    ],
    [
        0x0BCD,
        0x0BCD
    ],
    [
        0x0C3E,
        0x0C40
    ],
    [
        0x0C46,
        0x0C48
    ],
    [
        0x0C4A,
        0x0C4D
    ],
    [
        0x0C55,
        0x0C56
    ],
    [
        0x0CBC,
        0x0CBC
    ],
    [
        0x0CBF,
        0x0CBF
    ],
    [
        0x0CC6,
        0x0CC6
    ],
    [
        0x0CCC,
        0x0CCD
    ],
    [
        0x0CE2,
        0x0CE3
    ],
    [
        0x0D41,
        0x0D43
    ],
    [
        0x0D4D,
        0x0D4D
    ],
    [
        0x0DCA,
        0x0DCA
    ],
    [
        0x0DD2,
        0x0DD4
    ],
    [
        0x0DD6,
        0x0DD6
    ],
    [
        0x0E31,
        0x0E31
    ],
    [
        0x0E34,
        0x0E3A
    ],
    [
        0x0E47,
        0x0E4E
    ],
    [
        0x0EB1,
        0x0EB1
    ],
    [
        0x0EB4,
        0x0EB9
    ],
    [
        0x0EBB,
        0x0EBC
    ],
    [
        0x0EC8,
        0x0ECD
    ],
    [
        0x0F18,
        0x0F19
    ],
    [
        0x0F35,
        0x0F35
    ],
    [
        0x0F37,
        0x0F37
    ],
    [
        0x0F39,
        0x0F39
    ],
    [
        0x0F71,
        0x0F7E
    ],
    [
        0x0F80,
        0x0F84
    ],
    [
        0x0F86,
        0x0F87
    ],
    [
        0x0F90,
        0x0F97
    ],
    [
        0x0F99,
        0x0FBC
    ],
    [
        0x0FC6,
        0x0FC6
    ],
    [
        0x102D,
        0x1030
    ],
    [
        0x1032,
        0x1032
    ],
    [
        0x1036,
        0x1037
    ],
    [
        0x1039,
        0x1039
    ],
    [
        0x1058,
        0x1059
    ],
    [
        0x1160,
        0x11FF
    ],
    [
        0x135F,
        0x135F
    ],
    [
        0x1712,
        0x1714
    ],
    [
        0x1732,
        0x1734
    ],
    [
        0x1752,
        0x1753
    ],
    [
        0x1772,
        0x1773
    ],
    [
        0x17B4,
        0x17B5
    ],
    [
        0x17B7,
        0x17BD
    ],
    [
        0x17C6,
        0x17C6
    ],
    [
        0x17C9,
        0x17D3
    ],
    [
        0x17DD,
        0x17DD
    ],
    [
        0x180B,
        0x180D
    ],
    [
        0x18A9,
        0x18A9
    ],
    [
        0x1920,
        0x1922
    ],
    [
        0x1927,
        0x1928
    ],
    [
        0x1932,
        0x1932
    ],
    [
        0x1939,
        0x193B
    ],
    [
        0x1A17,
        0x1A18
    ],
    [
        0x1B00,
        0x1B03
    ],
    [
        0x1B34,
        0x1B34
    ],
    [
        0x1B36,
        0x1B3A
    ],
    [
        0x1B3C,
        0x1B3C
    ],
    [
        0x1B42,
        0x1B42
    ],
    [
        0x1B6B,
        0x1B73
    ],
    [
        0x1DC0,
        0x1DCA
    ],
    [
        0x1DFE,
        0x1DFF
    ],
    [
        0x200B,
        0x200F
    ],
    [
        0x202A,
        0x202E
    ],
    [
        0x2060,
        0x2063
    ],
    [
        0x206A,
        0x206F
    ],
    [
        0x20D0,
        0x20EF
    ],
    [
        0x302A,
        0x302F
    ],
    [
        0x3099,
        0x309A
    ],
    [
        0xA806,
        0xA806
    ],
    [
        0xA80B,
        0xA80B
    ],
    [
        0xA825,
        0xA826
    ],
    [
        0xFB1E,
        0xFB1E
    ],
    [
        0xFE00,
        0xFE0F
    ],
    [
        0xFE20,
        0xFE23
    ],
    [
        0xFEFF,
        0xFEFF
    ],
    [
        0xFFF9,
        0xFFFB
    ],
    [
        0x10A01,
        0x10A03
    ],
    [
        0x10A05,
        0x10A06
    ],
    [
        0x10A0C,
        0x10A0F
    ],
    [
        0x10A38,
        0x10A3A
    ],
    [
        0x10A3F,
        0x10A3F
    ],
    [
        0x1D167,
        0x1D169
    ],
    [
        0x1D173,
        0x1D182
    ],
    [
        0x1D185,
        0x1D18B
    ],
    [
        0x1D1AA,
        0x1D1AD
    ],
    [
        0x1D242,
        0x1D244
    ],
    [
        0xE0001,
        0xE0001
    ],
    [
        0xE0020,
        0xE007F
    ],
    [
        0xE0100,
        0xE01EF
    ]
];


var $1a9410c46210704b$var$DEFAULTS = {
    nul: 0,
    control: 0
};
$1a9410c46210704b$exports = function wcwidth(str) {
    return $1a9410c46210704b$var$wcswidth(str, $1a9410c46210704b$var$DEFAULTS);
};
$1a9410c46210704b$exports.config = function(opts) {
    opts = $ca47004935a46ca9$exports(opts || {}, $1a9410c46210704b$var$DEFAULTS);
    return function wcwidth(str) {
        return $1a9410c46210704b$var$wcswidth(str, opts);
    };
};
/*
 *  The following functions define the column width of an ISO 10646
 *  character as follows:
 *  - The null character (U+0000) has a column width of 0.
 *  - Other C0/C1 control characters and DEL will lead to a return value
 *    of -1.
 *  - Non-spacing and enclosing combining characters (general category
 *    code Mn or Me in the
 *    Unicode database) have a column width of 0.
 *  - SOFT HYPHEN (U+00AD) has a column width of 1.
 *  - Other format characters (general category code Cf in the Unicode
 *    database) and ZERO WIDTH
 *    SPACE (U+200B) have a column width of 0.
 *  - Hangul Jamo medial vowels and final consonants (U+1160-U+11FF)
 *    have a column width of 0.
 *  - Spacing characters in the East Asian Wide (W) or East Asian
 *    Full-width (F) category as
 *    defined in Unicode Technical Report #11 have a column width of 2.
 *  - All remaining characters (including all printable ISO 8859-1 and
 *    WGL4 characters, Unicode control characters, etc.) have a column
 *    width of 1.
 *  This implementation assumes that characters are encoded in ISO 10646.
*/ function $1a9410c46210704b$var$wcswidth(str, opts) {
    if (typeof str !== "string") return $1a9410c46210704b$var$wcwidth(str, opts);
    var s = 0;
    for(var i = 0; i < str.length; i++){
        var n = $1a9410c46210704b$var$wcwidth(str.charCodeAt(i), opts);
        if (n < 0) return -1;
        s += n;
    }
    return s;
}
function $1a9410c46210704b$var$wcwidth(ucs, opts) {
    // test for 8-bit control characters
    if (ucs === 0) return opts.nul;
    if (ucs < 32 || ucs >= 0x7f && ucs < 0xa0) return opts.control;
    // binary search in table of non-spacing characters
    if ($1a9410c46210704b$var$bisearch(ucs)) return 0;
    // if we arrive here, ucs is not a combining or C0/C1 control character
    return 1 + (ucs >= 0x1100 && (ucs <= 0x115f || // Hangul Jamo init. consonants
    ucs == 0x2329 || ucs == 0x232a || ucs >= 0x2e80 && ucs <= 0xa4cf && ucs != 0x303f || // CJK ... Yi
    ucs >= 0xac00 && ucs <= 0xd7a3 || // Hangul Syllables
    ucs >= 0xf900 && ucs <= 0xfaff || // CJK Compatibility Ideographs
    ucs >= 0xfe10 && ucs <= 0xfe19 || // Vertical forms
    ucs >= 0xfe30 && ucs <= 0xfe6f || // CJK Compatibility Forms
    ucs >= 0xff00 && ucs <= 0xff60 || // Fullwidth Forms
    ucs >= 0xffe0 && ucs <= 0xffe6 || ucs >= 0x20000 && ucs <= 0x2fffd || ucs >= 0x30000 && ucs <= 0x3fffd));
}
function $1a9410c46210704b$var$bisearch(ucs) {
    var min = 0;
    var max = $4893b61f01cbf221$exports.length - 1;
    var mid;
    if (ucs < $4893b61f01cbf221$exports[0][0] || ucs > $4893b61f01cbf221$exports[max][1]) return false;
    while(max >= min){
        mid = Math.floor((min + max) / 2);
        if (ucs > $4893b61f01cbf221$exports[mid][1]) min = mid + 1;
        else if (ucs < $4893b61f01cbf221$exports[mid][0]) max = mid - 1;
        else return true;
    }
    return false;
}


var $fe57d935a8689362$exports = {};
"use strict";
$fe57d935a8689362$exports = ({ stream: stream = process.stdout  } = {})=>{
    return Boolean(stream && stream.isTTY && process.env.TERM !== "dumb" && true);
};


var $5d1f9affc2840efc$exports = {};
"use strict";

var $9oW7Q = parcelRequire("9oW7Q");
var $5d1f9affc2840efc$require$DuplexStream = $9oW7Q.Duplex;

var $6DY6L = parcelRequire("6DY6L");
var $cd0f3ddbfbbfd9c4$exports = {};
"use strict";

var $cd0f3ddbfbbfd9c4$require$Buffer = $jdxjN$buffer.Buffer;
const $cd0f3ddbfbbfd9c4$var$symbol = Symbol.for("BufferList");
function $cd0f3ddbfbbfd9c4$var$BufferList(buf) {
    if (!(this instanceof $cd0f3ddbfbbfd9c4$var$BufferList)) return new $cd0f3ddbfbbfd9c4$var$BufferList(buf);
    $cd0f3ddbfbbfd9c4$var$BufferList._init.call(this, buf);
}
$cd0f3ddbfbbfd9c4$var$BufferList._init = function _init(buf) {
    Object.defineProperty(this, $cd0f3ddbfbbfd9c4$var$symbol, {
        value: true
    });
    this._bufs = [];
    this.length = 0;
    if (buf) this.append(buf);
};
$cd0f3ddbfbbfd9c4$var$BufferList.prototype._new = function _new(buf) {
    return new $cd0f3ddbfbbfd9c4$var$BufferList(buf);
};
$cd0f3ddbfbbfd9c4$var$BufferList.prototype._offset = function _offset(offset) {
    if (offset === 0) return [
        0,
        0
    ];
    let tot = 0;
    for(let i = 0; i < this._bufs.length; i++){
        const _t = tot + this._bufs[i].length;
        if (offset < _t || i === this._bufs.length - 1) return [
            i,
            offset - tot
        ];
        tot = _t;
    }
};
$cd0f3ddbfbbfd9c4$var$BufferList.prototype._reverseOffset = function(blOffset) {
    const bufferId = blOffset[0];
    let offset = blOffset[1];
    for(let i = 0; i < bufferId; i++)offset += this._bufs[i].length;
    return offset;
};
$cd0f3ddbfbbfd9c4$var$BufferList.prototype.get = function get(index) {
    if (index > this.length || index < 0) return undefined;
    const offset = this._offset(index);
    return this._bufs[offset[0]][offset[1]];
};
$cd0f3ddbfbbfd9c4$var$BufferList.prototype.slice = function slice(start, end) {
    if (typeof start === "number" && start < 0) start += this.length;
    if (typeof end === "number" && end < 0) end += this.length;
    return this.copy(null, 0, start, end);
};
$cd0f3ddbfbbfd9c4$var$BufferList.prototype.copy = function copy(dst, dstStart, srcStart, srcEnd) {
    if (typeof srcStart !== "number" || srcStart < 0) srcStart = 0;
    if (typeof srcEnd !== "number" || srcEnd > this.length) srcEnd = this.length;
    if (srcStart >= this.length) return dst || $cd0f3ddbfbbfd9c4$require$Buffer.alloc(0);
    if (srcEnd <= 0) return dst || $cd0f3ddbfbbfd9c4$require$Buffer.alloc(0);
    const copy = !!dst;
    const off = this._offset(srcStart);
    const len = srcEnd - srcStart;
    let bytes = len;
    let bufoff = copy && dstStart || 0;
    let start = off[1];
    // copy/slice everything
    if (srcStart === 0 && srcEnd === this.length) {
        if (!copy) // slice, but full concat if multiple buffers
        return this._bufs.length === 1 ? this._bufs[0] : $cd0f3ddbfbbfd9c4$require$Buffer.concat(this._bufs, this.length);
        // copy, need to copy individual buffers
        for(let i = 0; i < this._bufs.length; i++){
            this._bufs[i].copy(dst, bufoff);
            bufoff += this._bufs[i].length;
        }
        return dst;
    }
    // easy, cheap case where it's a subset of one of the buffers
    if (bytes <= this._bufs[off[0]].length - start) return copy ? this._bufs[off[0]].copy(dst, dstStart, start, start + bytes) : this._bufs[off[0]].slice(start, start + bytes);
    if (!copy) // a slice, we need something to copy in to
    dst = $cd0f3ddbfbbfd9c4$require$Buffer.allocUnsafe(len);
    for(let i = off[0]; i < this._bufs.length; i++){
        const l = this._bufs[i].length - start;
        if (bytes > l) {
            this._bufs[i].copy(dst, bufoff, start);
            bufoff += l;
        } else {
            this._bufs[i].copy(dst, bufoff, start, start + bytes);
            bufoff += l;
            break;
        }
        bytes -= l;
        if (start) start = 0;
    }
    // safeguard so that we don't return uninitialized memory
    if (dst.length > bufoff) return dst.slice(0, bufoff);
    return dst;
};
$cd0f3ddbfbbfd9c4$var$BufferList.prototype.shallowSlice = function shallowSlice(start, end) {
    start = start || 0;
    end = typeof end !== "number" ? this.length : end;
    if (start < 0) start += this.length;
    if (end < 0) end += this.length;
    if (start === end) return this._new();
    const startOffset = this._offset(start);
    const endOffset = this._offset(end);
    const buffers = this._bufs.slice(startOffset[0], endOffset[0] + 1);
    if (endOffset[1] === 0) buffers.pop();
    else buffers[buffers.length - 1] = buffers[buffers.length - 1].slice(0, endOffset[1]);
    if (startOffset[1] !== 0) buffers[0] = buffers[0].slice(startOffset[1]);
    return this._new(buffers);
};
$cd0f3ddbfbbfd9c4$var$BufferList.prototype.toString = function toString(encoding, start, end) {
    return this.slice(start, end).toString(encoding);
};
$cd0f3ddbfbbfd9c4$var$BufferList.prototype.consume = function consume(bytes) {
    // first, normalize the argument, in accordance with how Buffer does it
    bytes = Math.trunc(bytes);
    // do nothing if not a positive number
    if (Number.isNaN(bytes) || bytes <= 0) return this;
    while(this._bufs.length)if (bytes >= this._bufs[0].length) {
        bytes -= this._bufs[0].length;
        this.length -= this._bufs[0].length;
        this._bufs.shift();
    } else {
        this._bufs[0] = this._bufs[0].slice(bytes);
        this.length -= bytes;
        break;
    }
    return this;
};
$cd0f3ddbfbbfd9c4$var$BufferList.prototype.duplicate = function duplicate() {
    const copy = this._new();
    for(let i = 0; i < this._bufs.length; i++)copy.append(this._bufs[i]);
    return copy;
};
$cd0f3ddbfbbfd9c4$var$BufferList.prototype.append = function append(buf) {
    if (buf == null) return this;
    if (buf.buffer) // append a view of the underlying ArrayBuffer
    this._appendBuffer($cd0f3ddbfbbfd9c4$require$Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength));
    else if (Array.isArray(buf)) for(let i = 0; i < buf.length; i++)this.append(buf[i]);
    else if (this._isBufferList(buf)) // unwrap argument into individual BufferLists
    for(let i = 0; i < buf._bufs.length; i++)this.append(buf._bufs[i]);
    else {
        // coerce number arguments to strings, since Buffer(number) does
        // uninitialized memory allocation
        if (typeof buf === "number") buf = buf.toString();
        this._appendBuffer($cd0f3ddbfbbfd9c4$require$Buffer.from(buf));
    }
    return this;
};
$cd0f3ddbfbbfd9c4$var$BufferList.prototype._appendBuffer = function appendBuffer(buf) {
    this._bufs.push(buf);
    this.length += buf.length;
};
$cd0f3ddbfbbfd9c4$var$BufferList.prototype.indexOf = function(search, offset, encoding) {
    if (encoding === undefined && typeof offset === "string") {
        encoding = offset;
        offset = undefined;
    }
    if (typeof search === "function" || Array.isArray(search)) throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
    else if (typeof search === "number") search = $cd0f3ddbfbbfd9c4$require$Buffer.from([
        search
    ]);
    else if (typeof search === "string") search = $cd0f3ddbfbbfd9c4$require$Buffer.from(search, encoding);
    else if (this._isBufferList(search)) search = search.slice();
    else if (Array.isArray(search.buffer)) search = $cd0f3ddbfbbfd9c4$require$Buffer.from(search.buffer, search.byteOffset, search.byteLength);
    else if (!$cd0f3ddbfbbfd9c4$require$Buffer.isBuffer(search)) search = $cd0f3ddbfbbfd9c4$require$Buffer.from(search);
    offset = Number(offset || 0);
    if (isNaN(offset)) offset = 0;
    if (offset < 0) offset = this.length + offset;
    if (offset < 0) offset = 0;
    if (search.length === 0) return offset > this.length ? this.length : offset;
    const blOffset = this._offset(offset);
    let blIndex = blOffset[0] // index of which internal buffer we're working on
    ;
    let buffOffset = blOffset[1] // offset of the internal buffer we're working on
    ;
    // scan over each buffer
    for(; blIndex < this._bufs.length; blIndex++){
        const buff = this._bufs[blIndex];
        while(buffOffset < buff.length){
            const availableWindow = buff.length - buffOffset;
            if (availableWindow >= search.length) {
                const nativeSearchResult = buff.indexOf(search, buffOffset);
                if (nativeSearchResult !== -1) return this._reverseOffset([
                    blIndex,
                    nativeSearchResult
                ]);
                buffOffset = buff.length - search.length + 1 // end of native search window
                ;
            } else {
                const revOffset = this._reverseOffset([
                    blIndex,
                    buffOffset
                ]);
                if (this._match(revOffset, search)) return revOffset;
                buffOffset++;
            }
        }
        buffOffset = 0;
    }
    return -1;
};
$cd0f3ddbfbbfd9c4$var$BufferList.prototype._match = function(offset, search) {
    if (this.length - offset < search.length) return false;
    for(let searchOffset = 0; searchOffset < search.length; searchOffset++){
        if (this.get(offset + searchOffset) !== search[searchOffset]) return false;
    }
    return true;
};
(function() {
    const methods = {
        readDoubleBE: 8,
        readDoubleLE: 8,
        readFloatBE: 4,
        readFloatLE: 4,
        readInt32BE: 4,
        readInt32LE: 4,
        readUInt32BE: 4,
        readUInt32LE: 4,
        readInt16BE: 2,
        readInt16LE: 2,
        readUInt16BE: 2,
        readUInt16LE: 2,
        readInt8: 1,
        readUInt8: 1,
        readIntBE: null,
        readIntLE: null,
        readUIntBE: null,
        readUIntLE: null
    };
    for(const m in methods)(function(m) {
        if (methods[m] === null) $cd0f3ddbfbbfd9c4$var$BufferList.prototype[m] = function(offset, byteLength) {
            return this.slice(offset, offset + byteLength)[m](0, byteLength);
        };
        else $cd0f3ddbfbbfd9c4$var$BufferList.prototype[m] = function(offset) {
            return this.slice(offset, offset + methods[m])[m](0);
        };
    })(m);
})();
// Used internally by the class and also as an indicator of this object being
// a `BufferList`. It's not possible to use `instanceof BufferList` in a browser
// environment because there could be multiple different copies of the
// BufferList class and some `BufferList`s might be `BufferList`s.
$cd0f3ddbfbbfd9c4$var$BufferList.prototype._isBufferList = function _isBufferList(b) {
    return b instanceof $cd0f3ddbfbbfd9c4$var$BufferList || $cd0f3ddbfbbfd9c4$var$BufferList.isBufferList(b);
};
$cd0f3ddbfbbfd9c4$var$BufferList.isBufferList = function isBufferList(b) {
    return b != null && b[$cd0f3ddbfbbfd9c4$var$symbol];
};
$cd0f3ddbfbbfd9c4$exports = $cd0f3ddbfbbfd9c4$var$BufferList;


function $5d1f9affc2840efc$var$BufferListStream(callback) {
    if (!(this instanceof $5d1f9affc2840efc$var$BufferListStream)) return new $5d1f9affc2840efc$var$BufferListStream(callback);
    if (typeof callback === "function") {
        this._callback = callback;
        const piper = (function piper(err) {
            if (this._callback) {
                this._callback(err);
                this._callback = null;
            }
        }).bind(this);
        this.on("pipe", function onPipe(src) {
            src.on("error", piper);
        });
        this.on("unpipe", function onUnpipe(src) {
            src.removeListener("error", piper);
        });
        callback = null;
    }
    $cd0f3ddbfbbfd9c4$exports._init.call(this, callback);
    $5d1f9affc2840efc$require$DuplexStream.call(this);
}
$6DY6L($5d1f9affc2840efc$var$BufferListStream, $5d1f9affc2840efc$require$DuplexStream);
Object.assign($5d1f9affc2840efc$var$BufferListStream.prototype, $cd0f3ddbfbbfd9c4$exports.prototype);
$5d1f9affc2840efc$var$BufferListStream.prototype._new = function _new(callback) {
    return new $5d1f9affc2840efc$var$BufferListStream(callback);
};
$5d1f9affc2840efc$var$BufferListStream.prototype._write = function _write(buf, encoding, callback) {
    this._appendBuffer(buf);
    if (typeof callback === "function") callback();
};
$5d1f9affc2840efc$var$BufferListStream.prototype._read = function _read(size) {
    if (!this.length) return this.push(null);
    size = Math.min(size, this.length);
    this.push(this.slice(0, size));
    this.consume(size);
};
$5d1f9affc2840efc$var$BufferListStream.prototype.end = function end(chunk) {
    $5d1f9affc2840efc$require$DuplexStream.prototype.end.call(this, chunk);
    if (this._callback) {
        this._callback(null, this.slice());
        this._callback = null;
    }
};
$5d1f9affc2840efc$var$BufferListStream.prototype._destroy = function _destroy(err, cb) {
    this._bufs.length = 0;
    this.length = 0;
    cb(err);
};
$5d1f9affc2840efc$var$BufferListStream.prototype._isBufferList = function _isBufferList(b) {
    return b instanceof $5d1f9affc2840efc$var$BufferListStream || b instanceof $cd0f3ddbfbbfd9c4$exports || $5d1f9affc2840efc$var$BufferListStream.isBufferList(b);
};
$5d1f9affc2840efc$var$BufferListStream.isBufferList = $cd0f3ddbfbbfd9c4$exports.isBufferList;
$5d1f9affc2840efc$exports = $5d1f9affc2840efc$var$BufferListStream;
$5d1f9affc2840efc$exports.BufferListStream = $5d1f9affc2840efc$var$BufferListStream;
$5d1f9affc2840efc$exports.BufferList = $cd0f3ddbfbbfd9c4$exports;


var $1d566199bb5a9fec$require$BufferListStream = $5d1f9affc2840efc$exports.BufferListStream;
const $1d566199bb5a9fec$var$TEXT = Symbol("text");
const $1d566199bb5a9fec$var$PREFIX_TEXT = Symbol("prefixText");
const $1d566199bb5a9fec$var$ASCII_ETX_CODE = 0x03; // Ctrl+C emits this code
class $1d566199bb5a9fec$var$StdinDiscarder {
    constructor(){
        this.requests = 0;
        this.mutedStream = new $1d566199bb5a9fec$require$BufferListStream();
        this.mutedStream.pipe(process.stdout);
        const self = this;
        this.ourEmit = function(event, data, ...args) {
            const { stdin: stdin  } = process;
            if (self.requests > 0 || stdin.emit === self.ourEmit) {
                if (event === "keypress") return;
                if (event === "data" && data.includes($1d566199bb5a9fec$var$ASCII_ETX_CODE)) process.emit("SIGINT");
                Reflect.apply(self.oldEmit, this, [
                    event,
                    data,
                    ...args
                ]);
            } else Reflect.apply(process.stdin.emit, this, [
                event,
                data,
                ...args
            ]);
        };
    }
    start() {
        this.requests++;
        if (this.requests === 1) this.realStart();
    }
    stop() {
        if (this.requests <= 0) throw new Error("`stop` called more times than `start`");
        this.requests--;
        if (this.requests === 0) this.realStop();
    }
    realStart() {
        // No known way to make it work reliably on Windows
        if (process.platform === "win32") return;
        this.rl = $jdxjN$readline.createInterface({
            input: process.stdin,
            output: this.mutedStream
        });
        this.rl.on("SIGINT", ()=>{
            if (process.listenerCount("SIGINT") === 0) process.emit("SIGINT");
            else {
                this.rl.close();
                process.kill(process.pid, "SIGINT");
            }
        });
    }
    realStop() {
        if (process.platform === "win32") return;
        this.rl.close();
        this.rl = undefined;
    }
}
let $1d566199bb5a9fec$var$stdinDiscarder;
class $1d566199bb5a9fec$var$Ora {
    constructor(options){
        if (!$1d566199bb5a9fec$var$stdinDiscarder) $1d566199bb5a9fec$var$stdinDiscarder = new $1d566199bb5a9fec$var$StdinDiscarder();
        if (typeof options === "string") options = {
            text: options
        };
        this.options = {
            text: "",
            color: "cyan",
            stream: process.stderr,
            discardStdin: true,
            ...options
        };
        this.spinner = this.options.spinner;
        this.color = this.options.color;
        this.hideCursor = this.options.hideCursor !== false;
        this.interval = this.options.interval || this.spinner.interval || 100;
        this.stream = this.options.stream;
        this.id = undefined;
        this.isEnabled = typeof this.options.isEnabled === "boolean" ? this.options.isEnabled : $fe57d935a8689362$exports({
            stream: this.stream
        });
        this.isSilent = typeof this.options.isSilent === "boolean" ? this.options.isSilent : false;
        // Set *after* `this.stream`
        this.text = this.options.text;
        this.prefixText = this.options.prefixText;
        this.linesToClear = 0;
        this.indent = this.options.indent;
        this.discardStdin = this.options.discardStdin;
        this.isDiscardingStdin = false;
    }
    get indent() {
        return this._indent;
    }
    set indent(indent = 0) {
        if (!(indent >= 0 && Number.isInteger(indent))) throw new Error("The `indent` option must be an integer from 0 and up");
        this._indent = indent;
    }
    _updateInterval(interval) {
        if (interval !== undefined) this.interval = interval;
    }
    get spinner() {
        return this._spinner;
    }
    set spinner(spinner) {
        this.frameIndex = 0;
        if (typeof spinner === "object") {
            if (spinner.frames === undefined) throw new Error("The given spinner must have a `frames` property");
            this._spinner = spinner;
        } else if (process.platform === "win32") this._spinner = $705d5bb977fa4942$exports.line;
        else if (spinner === undefined) // Set default spinner
        this._spinner = $705d5bb977fa4942$exports.dots;
        else if ($705d5bb977fa4942$exports[spinner]) this._spinner = $705d5bb977fa4942$exports[spinner];
        else throw new Error(`There is no built-in spinner named '${spinner}'. See https://github.com/sindresorhus/cli-spinners/blob/master/spinners.json for a full list.`);
        this._updateInterval(this._spinner.interval);
    }
    get text() {
        return this[$1d566199bb5a9fec$var$TEXT];
    }
    set text(value) {
        this[$1d566199bb5a9fec$var$TEXT] = value;
        this.updateLineCount();
    }
    get prefixText() {
        return this[$1d566199bb5a9fec$var$PREFIX_TEXT];
    }
    set prefixText(value) {
        this[$1d566199bb5a9fec$var$PREFIX_TEXT] = value;
        this.updateLineCount();
    }
    get isSpinning() {
        return this.id !== undefined;
    }
    getFullPrefixText(prefixText = this[$1d566199bb5a9fec$var$PREFIX_TEXT], postfix = " ") {
        if (typeof prefixText === "string") return prefixText + postfix;
        if (typeof prefixText === "function") return prefixText() + postfix;
        return "";
    }
    updateLineCount() {
        const columns = this.stream.columns || 80;
        const fullPrefixText = this.getFullPrefixText(this.prefixText, "-");
        this.lineCount = 0;
        for (const line of $cad1674026a68038$exports(fullPrefixText + "--" + this[$1d566199bb5a9fec$var$TEXT]).split("\n"))this.lineCount += Math.max(1, Math.ceil($1a9410c46210704b$exports(line) / columns));
    }
    get isEnabled() {
        return this._isEnabled && !this.isSilent;
    }
    set isEnabled(value) {
        if (typeof value !== "boolean") throw new TypeError("The `isEnabled` option must be a boolean");
        this._isEnabled = value;
    }
    get isSilent() {
        return this._isSilent;
    }
    set isSilent(value) {
        if (typeof value !== "boolean") throw new TypeError("The `isSilent` option must be a boolean");
        this._isSilent = value;
    }
    frame() {
        const { frames: frames  } = this.spinner;
        let frame = frames[this.frameIndex];
        if (this.color) frame = $jdxjN$chalk[this.color](frame);
        this.frameIndex = ++this.frameIndex % frames.length;
        const fullPrefixText = typeof this.prefixText === "string" && this.prefixText !== "" ? this.prefixText + " " : "";
        const fullText = typeof this.text === "string" ? " " + this.text : "";
        return fullPrefixText + frame + fullText;
    }
    clear() {
        if (!this.isEnabled || !this.stream.isTTY) return this;
        for(let i = 0; i < this.linesToClear; i++){
            if (i > 0) this.stream.moveCursor(0, -1);
            this.stream.clearLine();
            this.stream.cursorTo(this.indent);
        }
        this.linesToClear = 0;
        return this;
    }
    render() {
        if (this.isSilent) return this;
        this.clear();
        this.stream.write(this.frame());
        this.linesToClear = this.lineCount;
        return this;
    }
    start(text) {
        if (text) this.text = text;
        if (this.isSilent) return this;
        if (!this.isEnabled) {
            if (this.text) this.stream.write(`- ${this.text}\n`);
            return this;
        }
        if (this.isSpinning) return this;
        if (this.hideCursor) $0850007c62626d78$export$fe8985bb6374093c(this.stream);
        if (this.discardStdin && process.stdin.isTTY) {
            this.isDiscardingStdin = true;
            $1d566199bb5a9fec$var$stdinDiscarder.start();
        }
        this.render();
        this.id = setInterval(this.render.bind(this), this.interval);
        return this;
    }
    stop() {
        if (!this.isEnabled) return this;
        clearInterval(this.id);
        this.id = undefined;
        this.frameIndex = 0;
        this.clear();
        if (this.hideCursor) $0850007c62626d78$export$57bf213be019eeb0(this.stream);
        if (this.discardStdin && process.stdin.isTTY && this.isDiscardingStdin) {
            $1d566199bb5a9fec$var$stdinDiscarder.stop();
            this.isDiscardingStdin = false;
        }
        return this;
    }
    succeed(text) {
        return this.stopAndPersist({
            symbol: $0eb3dcdf0fef790a$exports.success,
            text: text
        });
    }
    fail(text) {
        return this.stopAndPersist({
            symbol: $0eb3dcdf0fef790a$exports.error,
            text: text
        });
    }
    warn(text) {
        return this.stopAndPersist({
            symbol: $0eb3dcdf0fef790a$exports.warning,
            text: text
        });
    }
    info(text) {
        return this.stopAndPersist({
            symbol: $0eb3dcdf0fef790a$exports.info,
            text: text
        });
    }
    stopAndPersist(options = {}) {
        if (this.isSilent) return this;
        const prefixText = options.prefixText || this.prefixText;
        const text = options.text || this.text;
        const fullText = typeof text === "string" ? " " + text : "";
        this.stop();
        this.stream.write(`${this.getFullPrefixText(prefixText, " ")}${options.symbol || " "}${fullText}\n`);
        return this;
    }
}
const $1d566199bb5a9fec$var$oraFactory = function(options) {
    return new $1d566199bb5a9fec$var$Ora(options);
};
$1d566199bb5a9fec$exports = $1d566199bb5a9fec$var$oraFactory;
$1d566199bb5a9fec$exports.promise = (action, options)=>{
    // eslint-disable-next-line promise/prefer-await-to-then
    if (typeof action.then !== "function") throw new TypeError("Parameter `action` must be a Promise");
    const spinner = new $1d566199bb5a9fec$var$Ora(options);
    spinner.start();
    (async ()=>{
        try {
            await action;
            spinner.succeed();
        } catch  {
            spinner.fail();
        }
    })();
    return spinner;
};





const $d343103e1b904ed9$export$e0d6e0edafcff892 = process.env.NODE_ENV !== "test" && process.stdout.isTTY;
let $d343103e1b904ed9$var$stdout = process.stdout;
let $d343103e1b904ed9$var$stderr = process.stderr; // Some state so we clear the output properly
let $d343103e1b904ed9$var$lineCount = 0;
let $d343103e1b904ed9$var$errorLineCount = 0;
let $d343103e1b904ed9$var$statusPersisted = false;
function $d343103e1b904ed9$export$b61e603a0dd88d70(stdoutLike, stderrLike) {
    $d343103e1b904ed9$var$stdout = stdoutLike;
    $d343103e1b904ed9$var$stderr = stderrLike;
}
let $d343103e1b904ed9$var$spinner = (0, (/*@__PURE__*/$parcel$interopDefault($1d566199bb5a9fec$exports)))({
    color: "green",
    stream: $d343103e1b904ed9$var$stdout,
    discardStdin: false
});
let $d343103e1b904ed9$var$persistedMessages = [];
function $d343103e1b904ed9$export$884654df4f63b5f8(message, isError = false) {
    let processedMessage = message + "\n";
    let hasSpinner = $d343103e1b904ed9$var$spinner.isSpinning; // Stop spinner so we don't duplicate it
    if (hasSpinner) $d343103e1b904ed9$var$spinner.stop();
    let lines = (0, $db741814f1ec46f5$export$dcd94c44359f7fd4)(message);
    if (isError) {
        $d343103e1b904ed9$var$stderr.write(processedMessage);
        $d343103e1b904ed9$var$errorLineCount += lines;
    } else {
        $d343103e1b904ed9$var$stdout.write(processedMessage);
        $d343103e1b904ed9$var$lineCount += lines;
    } // Restart the spinner
    if (hasSpinner) $d343103e1b904ed9$var$spinner.start();
}
function $d343103e1b904ed9$export$36031eac94ca622d(message) {
    if ($d343103e1b904ed9$var$persistedMessages.includes(message)) return;
    $d343103e1b904ed9$var$persistedMessages.push(message);
    $d343103e1b904ed9$export$884654df4f63b5f8(message);
}
function $d343103e1b904ed9$export$4d1e990956674874(message) {
    // This helps the spinner play well with the tests
    if (!$d343103e1b904ed9$export$e0d6e0edafcff892) {
        $d343103e1b904ed9$export$884654df4f63b5f8(message);
        return;
    }
    $d343103e1b904ed9$var$spinner.text = message + "\n";
    if (!$d343103e1b904ed9$var$spinner.isSpinning) $d343103e1b904ed9$var$spinner.start();
}
function $d343103e1b904ed9$export$82e857520ce3d14e(name, status, message) {
    $d343103e1b904ed9$var$spinner.stopAndPersist({
        symbol: $fdf19516bfc20b1c$exports[status],
        text: message
    });
    $d343103e1b904ed9$var$statusPersisted = true;
}
function $d343103e1b904ed9$var$clearStream(stream, lines) {
    if (!$d343103e1b904ed9$export$e0d6e0edafcff892) return;
    (0, ($parcel$interopDefault($jdxjN$readline))).moveCursor(stream, 0, -lines);
    (0, ($parcel$interopDefault($jdxjN$readline))).clearScreenDown(stream);
} // Reset the window's state
function $d343103e1b904ed9$export$f47d848b64c9655() {
    if (!$d343103e1b904ed9$export$e0d6e0edafcff892) return; // If status has been persisted we add a line
    // Otherwise final states would remain in the terminal for rebuilds
    if ($d343103e1b904ed9$var$statusPersisted) {
        $d343103e1b904ed9$var$lineCount++;
        $d343103e1b904ed9$var$statusPersisted = false;
    }
    $d343103e1b904ed9$var$clearStream($d343103e1b904ed9$var$stderr, $d343103e1b904ed9$var$errorLineCount);
    $d343103e1b904ed9$var$errorLineCount = 0;
    $d343103e1b904ed9$var$clearStream($d343103e1b904ed9$var$stdout, $d343103e1b904ed9$var$lineCount);
    $d343103e1b904ed9$var$lineCount = 0;
    for (let m of $d343103e1b904ed9$var$persistedMessages)$d343103e1b904ed9$export$884654df4f63b5f8(m);
}
function $d343103e1b904ed9$export$9852986a3ec5f6a0(columns, table) {
    // Measure column widths
    let colWidths = [];
    for (let row of table){
        let i = 0;
        for (let item of row){
            colWidths[i] = Math.max(colWidths[i] || 0, (0, (/*@__PURE__*/$parcel$interopDefault($eabf62846bf2f2cf$exports)))(item));
            i++;
        }
    } // Render rows
    for (let row of table){
        let items = row.map((item, i)=>{
            // Add padding between columns unless the alignment is the opposite to the
            // next column and pad to the column width.
            let padding = !columns[i + 1] || columns[i + 1].align === columns[i].align ? 4 : 0;
            return (0, $db741814f1ec46f5$export$5d04458e2a6c373e)(item, colWidths[i] + padding, columns[i].align);
        });
        $d343103e1b904ed9$export$884654df4f63b5f8(items.join(""));
    }
}



const $1f32bb6e5f908018$var$LARGE_BUNDLE_SIZE = 1048576;
const $1f32bb6e5f908018$var$COLUMNS = [
    {
        align: "left"
    },
    {
        align: "right"
    },
    {
        align: "right"
    } // time
];
async function $1f32bb6e5f908018$export$2e2bcd8739ae039(bundleGraph, fs, projectRoot, assetCount = 0) {
    let bundleList = bundleGraph.getBundles(); // Get a list of bundles sorted by size
    let { bundles: bundles  } = assetCount > 0 ? await (0, $jdxjN$parcelutils.generateBuildMetrics)(bundleList, fs, projectRoot) : {
        bundles: bundleList.map((b)=>{
            return {
                filePath: (0, (/*@__PURE__*/$parcel$interopDefault($381ce9441523ef0c$exports)))(b.filePath),
                size: b.stats.size,
                time: b.stats.time,
                assets: []
            };
        })
    };
    let rows = [];
    for (let bundle of bundles){
        // Add a row for the bundle
        rows.push([
            (0, $db741814f1ec46f5$export$f9e6d0654ee054e0)(bundle.filePath || "", (0, ($parcel$interopDefault($jdxjN$chalk))).cyan.bold),
            (0, ($parcel$interopDefault($jdxjN$chalk))).bold($1f32bb6e5f908018$var$prettifySize(bundle.size, bundle.size > $1f32bb6e5f908018$var$LARGE_BUNDLE_SIZE)),
            (0, ($parcel$interopDefault($jdxjN$chalk))).green.bold((0, $jdxjN$parcelutils.prettifyTime)(bundle.time))
        ]);
        if (assetCount > 0) {
            let largestAssets = bundle.assets.slice(0, assetCount);
            for (let asset of largestAssets){
                let columns = [
                    asset == largestAssets[largestAssets.length - 1] ? "└── " : "├── ",
                    (0, ($parcel$interopDefault($jdxjN$chalk))).dim($1f32bb6e5f908018$var$prettifySize(asset.size)),
                    (0, ($parcel$interopDefault($jdxjN$chalk))).dim((0, ($parcel$interopDefault($jdxjN$chalk))).green((0, $jdxjN$parcelutils.prettifyTime)(asset.time)))
                ];
                if (asset.filePath !== "") columns[0] += (0, $db741814f1ec46f5$export$f9e6d0654ee054e0)(asset.filePath, (0, ($parcel$interopDefault($jdxjN$chalk))).reset);
                else columns[0] += "Code from unknown sourcefiles";
                 // Add a row for the asset.
                rows.push(columns);
            }
            if (bundle.assets.length > largestAssets.length) rows.push([
                "└── " + (0, ($parcel$interopDefault($jdxjN$chalk))).dim(`+ ${bundle.assets.length - largestAssets.length} more assets`)
            ]);
             // If this isn't the last bundle, add an empty row before the next one
            if (bundle !== bundles[bundles.length - 1]) rows.push([]);
        }
    } // Render table
    (0, $d343103e1b904ed9$export$884654df4f63b5f8)("");
    (0, $d343103e1b904ed9$export$9852986a3ec5f6a0)($1f32bb6e5f908018$var$COLUMNS, rows);
}
function $1f32bb6e5f908018$var$prettifySize(size, isLarge) {
    let res = (0, (/*@__PURE__*/$parcel$interopDefault($268fee2ba7f81d1b$exports)))(size);
    if (isLarge) return (0, ($parcel$interopDefault($jdxjN$chalk))).yellow($fdf19516bfc20b1c$export$491112666e282270 + "  " + res);
    return (0, ($parcel$interopDefault($jdxjN$chalk))).magenta(res);
}




var $1bd02e8efd8068e4$exports = {};
"use strict";



var $53gZx = parcelRequire("53gZx");
const $1bd02e8efd8068e4$var$ESCAPES = new Set([
    "\x1b",
    "\x9b"
]);
const $1bd02e8efd8068e4$var$END_CODE = 39;
const $1bd02e8efd8068e4$var$ANSI_ESCAPE_BELL = "\x07";
const $1bd02e8efd8068e4$var$ANSI_CSI = "[";
const $1bd02e8efd8068e4$var$ANSI_OSC = "]";
const $1bd02e8efd8068e4$var$ANSI_SGR_TERMINATOR = "m";
const $1bd02e8efd8068e4$var$ANSI_ESCAPE_LINK = `${$1bd02e8efd8068e4$var$ANSI_OSC}8;;`;
const $1bd02e8efd8068e4$var$wrapAnsi = (code)=>`${$1bd02e8efd8068e4$var$ESCAPES.values().next().value}${$1bd02e8efd8068e4$var$ANSI_CSI}${code}${$1bd02e8efd8068e4$var$ANSI_SGR_TERMINATOR}`;
const $1bd02e8efd8068e4$var$wrapAnsiHyperlink = (uri)=>`${$1bd02e8efd8068e4$var$ESCAPES.values().next().value}${$1bd02e8efd8068e4$var$ANSI_ESCAPE_LINK}${uri}${$1bd02e8efd8068e4$var$ANSI_ESCAPE_BELL}`;
// Calculate the length of words split on ' ', ignoring
// the extra characters added by ansi escape codes
const $1bd02e8efd8068e4$var$wordLengths = (string)=>string.split(" ").map((character)=>$eabf62846bf2f2cf$exports(character));
// Wrap a long word across multiple rows
// Ansi escape codes do not count towards length
const $1bd02e8efd8068e4$var$wrapWord = (rows, word, columns)=>{
    const characters = [
        ...word
    ];
    let isInsideEscape = false;
    let isInsideLinkEscape = false;
    let visible = $eabf62846bf2f2cf$exports($cad1674026a68038$exports(rows[rows.length - 1]));
    for (const [index, character] of characters.entries()){
        const characterLength = $eabf62846bf2f2cf$exports(character);
        if (visible + characterLength <= columns) rows[rows.length - 1] += character;
        else {
            rows.push(character);
            visible = 0;
        }
        if ($1bd02e8efd8068e4$var$ESCAPES.has(character)) {
            isInsideEscape = true;
            isInsideLinkEscape = characters.slice(index + 1).join("").startsWith($1bd02e8efd8068e4$var$ANSI_ESCAPE_LINK);
        }
        if (isInsideEscape) {
            if (isInsideLinkEscape) {
                if (character === $1bd02e8efd8068e4$var$ANSI_ESCAPE_BELL) {
                    isInsideEscape = false;
                    isInsideLinkEscape = false;
                }
            } else if (character === $1bd02e8efd8068e4$var$ANSI_SGR_TERMINATOR) isInsideEscape = false;
            continue;
        }
        visible += characterLength;
        if (visible === columns && index < characters.length - 1) {
            rows.push("");
            visible = 0;
        }
    }
    // It's possible that the last row we copy over is only
    // ansi escape characters, handle this edge-case
    if (!visible && rows[rows.length - 1].length > 0 && rows.length > 1) rows[rows.length - 2] += rows.pop();
};
// Trims spaces from a string ignoring invisible sequences
const $1bd02e8efd8068e4$var$stringVisibleTrimSpacesRight = (string)=>{
    const words = string.split(" ");
    let last = words.length;
    while(last > 0){
        if ($eabf62846bf2f2cf$exports(words[last - 1]) > 0) break;
        last--;
    }
    if (last === words.length) return string;
    return words.slice(0, last).join(" ") + words.slice(last).join("");
};
// The wrap-ansi module can be invoked in either 'hard' or 'soft' wrap mode
//
// 'hard' will never allow a string to take up more than columns characters
//
// 'soft' allows long words to expand past the column length
const $1bd02e8efd8068e4$var$exec = (string, columns, options = {})=>{
    if (options.trim !== false && string.trim() === "") return "";
    let returnValue = "";
    let escapeCode;
    let escapeUrl;
    const lengths = $1bd02e8efd8068e4$var$wordLengths(string);
    let rows = [
        ""
    ];
    for (const [index, word] of string.split(" ").entries()){
        if (options.trim !== false) rows[rows.length - 1] = rows[rows.length - 1].trimStart();
        let rowLength = $eabf62846bf2f2cf$exports(rows[rows.length - 1]);
        if (index !== 0) {
            if (rowLength >= columns && (options.wordWrap === false || options.trim === false)) {
                // If we start with a new word but the current row length equals the length of the columns, add a new row
                rows.push("");
                rowLength = 0;
            }
            if (rowLength > 0 || options.trim === false) {
                rows[rows.length - 1] += " ";
                rowLength++;
            }
        }
        // In 'hard' wrap mode, the length of a line is never allowed to extend past 'columns'
        if (options.hard && lengths[index] > columns) {
            const remainingColumns = columns - rowLength;
            const breaksStartingThisLine = 1 + Math.floor((lengths[index] - remainingColumns - 1) / columns);
            const breaksStartingNextLine = Math.floor((lengths[index] - 1) / columns);
            if (breaksStartingNextLine < breaksStartingThisLine) rows.push("");
            $1bd02e8efd8068e4$var$wrapWord(rows, word, columns);
            continue;
        }
        if (rowLength + lengths[index] > columns && rowLength > 0 && lengths[index] > 0) {
            if (options.wordWrap === false && rowLength < columns) {
                $1bd02e8efd8068e4$var$wrapWord(rows, word, columns);
                continue;
            }
            rows.push("");
        }
        if (rowLength + lengths[index] > columns && options.wordWrap === false) {
            $1bd02e8efd8068e4$var$wrapWord(rows, word, columns);
            continue;
        }
        rows[rows.length - 1] += word;
    }
    if (options.trim !== false) rows = rows.map($1bd02e8efd8068e4$var$stringVisibleTrimSpacesRight);
    const pre = [
        ...rows.join("\n")
    ];
    for (const [index, character] of pre.entries()){
        returnValue += character;
        if ($1bd02e8efd8068e4$var$ESCAPES.has(character)) {
            const { groups: groups  } = new RegExp(`(?:\\${$1bd02e8efd8068e4$var$ANSI_CSI}(?<code>\\d+)m|\\${$1bd02e8efd8068e4$var$ANSI_ESCAPE_LINK}(?<uri>.*)${$1bd02e8efd8068e4$var$ANSI_ESCAPE_BELL})`).exec(pre.slice(index).join("")) || {
                groups: {}
            };
            if (groups.code !== undefined) {
                const code = Number.parseFloat(groups.code);
                escapeCode = code === $1bd02e8efd8068e4$var$END_CODE ? undefined : code;
            } else if (groups.uri !== undefined) escapeUrl = groups.uri.length === 0 ? undefined : groups.uri;
        }
        const code = $53gZx.codes.get(Number(escapeCode));
        if (pre[index + 1] === "\n") {
            if (escapeUrl) returnValue += $1bd02e8efd8068e4$var$wrapAnsiHyperlink("");
            if (escapeCode && code) returnValue += $1bd02e8efd8068e4$var$wrapAnsi(code);
        } else if (character === "\n") {
            if (escapeCode && code) returnValue += $1bd02e8efd8068e4$var$wrapAnsi(escapeCode);
            if (escapeUrl) returnValue += $1bd02e8efd8068e4$var$wrapAnsiHyperlink(escapeUrl);
        }
    }
    return returnValue;
};
// For each newline, invoke the method separately
$1bd02e8efd8068e4$exports = (string, columns, options)=>{
    return String(string).normalize().replace(/\r\n/g, "\n").split("\n").map((line)=>$1bd02e8efd8068e4$var$exec(line, columns, options)).join("\n");
};


const $ed871dc03bbf580d$var$THROTTLE_DELAY = 100;
const $ed871dc03bbf580d$var$seenWarnings = new Set();
const $ed871dc03bbf580d$var$seenPhases = new Set();
let $ed871dc03bbf580d$var$statusThrottle = (0, $jdxjN$parcelutils.throttle)((message)=>{
    (0, $d343103e1b904ed9$export$4d1e990956674874)(message);
}, $ed871dc03bbf580d$var$THROTTLE_DELAY); // Exported only for test
async function $ed871dc03bbf580d$export$12358408d9820617(event, options) {
    let logLevelFilter = (0, $60586aca096dbd99$export$2e2bcd8739ae039)[options.logLevel || "info"];
    switch(event.type){
        case "buildStart":
            $ed871dc03bbf580d$var$seenWarnings.clear();
            $ed871dc03bbf580d$var$seenPhases.clear();
            if (logLevelFilter < (0, $60586aca096dbd99$export$2e2bcd8739ae039).info) break;
             // Clear any previous output
            (0, $d343103e1b904ed9$export$f47d848b64c9655)();
            var _options_serveOptions_host;
            if (options.serveOptions) (0, $d343103e1b904ed9$export$36031eac94ca622d)((0, ($parcel$interopDefault($jdxjN$chalk))).blue.bold(`Server running at ${options.serveOptions.https ? "https" : "http"}://${(_options_serveOptions_host = options.serveOptions.host) !== null && _options_serveOptions_host !== void 0 ? _options_serveOptions_host : "localhost"}:${options.serveOptions.port}`));
            break;
        case "buildProgress":
            {
                if (logLevelFilter < (0, $60586aca096dbd99$export$2e2bcd8739ae039).info) break;
                if (!(0, $d343103e1b904ed9$export$e0d6e0edafcff892) && logLevelFilter != (0, $60586aca096dbd99$export$2e2bcd8739ae039).verbose) {
                    if (event.phase == "transforming" && !$ed871dc03bbf580d$var$seenPhases.has("transforming")) (0, $d343103e1b904ed9$export$4d1e990956674874)("Building...");
                    else if (event.phase == "bundling" && !$ed871dc03bbf580d$var$seenPhases.has("bundling")) (0, $d343103e1b904ed9$export$4d1e990956674874)("Bundling...");
                    else if ((event.phase == "packaging" || event.phase == "optimizing") && !$ed871dc03bbf580d$var$seenPhases.has("packaging") && !$ed871dc03bbf580d$var$seenPhases.has("optimizing")) (0, $d343103e1b904ed9$export$4d1e990956674874)("Packaging & Optimizing...");
                    $ed871dc03bbf580d$var$seenPhases.add(event.phase);
                    break;
                }
                let message = (0, $jdxjN$parcelutils.getProgressMessage)(event);
                if (message != null) {
                    if (0, $d343103e1b904ed9$export$e0d6e0edafcff892) $ed871dc03bbf580d$var$statusThrottle((0, ($parcel$interopDefault($jdxjN$chalk))).gray.bold(message));
                    else (0, $d343103e1b904ed9$export$4d1e990956674874)(message);
                }
                break;
            }
        case "buildSuccess":
            var _options_detailedReport;
            if (logLevelFilter < (0, $60586aca096dbd99$export$2e2bcd8739ae039).info) break;
            (0, $d343103e1b904ed9$export$82e857520ce3d14e)("buildProgress", "success", (0, ($parcel$interopDefault($jdxjN$chalk))).green.bold(`Built in ${(0, $jdxjN$parcelutils.prettifyTime)(event.buildTime)}`));
            if (options.mode === "production") await (0, $1f32bb6e5f908018$export$2e2bcd8739ae039)(event.bundleGraph, options.outputFS, options.projectRoot, (_options_detailedReport = options.detailedReport) === null || _options_detailedReport === void 0 ? void 0 : _options_detailedReport.assetsPerBundle);
            break;
        case "buildFailure":
            if (logLevelFilter < (0, $60586aca096dbd99$export$2e2bcd8739ae039).error) break;
            (0, $d343103e1b904ed9$export$f47d848b64c9655)();
            (0, $d343103e1b904ed9$export$82e857520ce3d14e)("buildProgress", "error", (0, ($parcel$interopDefault($jdxjN$chalk))).red.bold("Build failed."));
            await $ed871dc03bbf580d$var$writeDiagnostic(options, event.diagnostics, "red", true);
            break;
        case "log":
            if (logLevelFilter < (0, $60586aca096dbd99$export$2e2bcd8739ae039)[event.level]) break;
            switch(event.level){
                case "success":
                    (0, $d343103e1b904ed9$export$884654df4f63b5f8)((0, ($parcel$interopDefault($jdxjN$chalk))).green(event.message));
                    break;
                case "progress":
                    (0, $d343103e1b904ed9$export$884654df4f63b5f8)(event.message);
                    break;
                case "verbose":
                case "info":
                    await $ed871dc03bbf580d$var$writeDiagnostic(options, event.diagnostics, "blue");
                    break;
                case "warn":
                    if (event.diagnostics.some((diagnostic)=>!$ed871dc03bbf580d$var$seenWarnings.has(diagnostic.message))) {
                        await $ed871dc03bbf580d$var$writeDiagnostic(options, event.diagnostics, "yellow", true);
                        for (let diagnostic of event.diagnostics)$ed871dc03bbf580d$var$seenWarnings.add(diagnostic.message);
                    }
                    break;
                case "error":
                    await $ed871dc03bbf580d$var$writeDiagnostic(options, event.diagnostics, "red", true);
                    break;
                default:
                    throw new Error("Unknown log level " + event.level);
            }
    }
}
async function $ed871dc03bbf580d$var$writeDiagnostic(options, diagnostics, color, isError = false) {
    let columns = (0, $db741814f1ec46f5$export$74827651f504bd9d)().columns;
    let indent = 2;
    let spaceAfter = isError;
    for (let diagnostic of diagnostics){
        let { message: message , stack: stack , codeframe: codeframe , hints: hints , documentation: documentation  } = await (0, $jdxjN$parcelutils.prettyDiagnostic)(diagnostic, options, columns - indent); // $FlowFixMe[incompatible-use]
        message = (0, ($parcel$interopDefault($jdxjN$chalk)))[color](message);
        if (spaceAfter) (0, $d343103e1b904ed9$export$884654df4f63b5f8)("");
        if (message) (0, $d343103e1b904ed9$export$884654df4f63b5f8)($ed871dc03bbf580d$var$wrapWithIndent(message), isError);
        if (stack || codeframe) (0, $d343103e1b904ed9$export$884654df4f63b5f8)("");
        if (stack) (0, $d343103e1b904ed9$export$884654df4f63b5f8)((0, ($parcel$interopDefault($jdxjN$chalk))).gray($ed871dc03bbf580d$var$wrapWithIndent(stack, indent)), isError);
        if (codeframe) (0, $d343103e1b904ed9$export$884654df4f63b5f8)($ed871dc03bbf580d$var$indentString(codeframe, indent), isError);
        if ((stack || codeframe) && (hints.length > 0 || documentation)) (0, $d343103e1b904ed9$export$884654df4f63b5f8)("");
         // Write hints
        let hintIndent = stack || codeframe ? indent : 0;
        for (let hint of hints)(0, $d343103e1b904ed9$export$884654df4f63b5f8)($ed871dc03bbf580d$var$wrapWithIndent(`${$fdf19516bfc20b1c$export$464c821cd4347539} ${(0, ($parcel$interopDefault($jdxjN$chalk))).blue.bold(hint)}`, hintIndent + 3, hintIndent));
        if (documentation) (0, $d343103e1b904ed9$export$884654df4f63b5f8)($ed871dc03bbf580d$var$wrapWithIndent(`${$fdf19516bfc20b1c$export$257224358692d0e0} ${(0, ($parcel$interopDefault($jdxjN$chalk))).magenta.bold(documentation)}`, hintIndent + 3, hintIndent));
        spaceAfter = stack || codeframe || hints.length > 0 || documentation;
    }
    if (spaceAfter) (0, $d343103e1b904ed9$export$884654df4f63b5f8)("");
}
function $ed871dc03bbf580d$var$wrapWithIndent(string, indent = 0, initialIndent = indent) {
    let width = (0, $db741814f1ec46f5$export$74827651f504bd9d)().columns;
    return $ed871dc03bbf580d$var$indentString((0, (/*@__PURE__*/$parcel$interopDefault($1bd02e8efd8068e4$exports)))(string.trimEnd(), width - indent, {
        trim: false
    }), indent, initialIndent);
}
function $ed871dc03bbf580d$var$indentString(string, indent = 0, initialIndent = indent) {
    return " ".repeat(initialIndent) + string.replace(/\n/g, "\n" + " ".repeat(indent));
}
var $ed871dc03bbf580d$export$2e2bcd8739ae039 = new (0, $jdxjN$parcelplugin.Reporter)({
    report ({ event: event , options: options  }) {
        return $ed871dc03bbf580d$export$12358408d9820617(event, options);
    }
});


//# sourceMappingURL=CLIReporter.js.map
