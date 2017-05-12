let writtenKeyCodes = {
  3 : "break",
  8 : "backspace / delete",
  9 : "tab",
  12 : 'clear',
  13 : "enter",
  16 : "shift",
  17 : "ctrl",
  18 : "alt",
  19 : "pause/break",
  20 : "caps lock",
  27 : "escape",
  32 : "spacebar",
  33 : "page up",
  34 : "page down",
  35 : "end",
  36 : "home ",
  37 : "left arrow ",
  38 : "up arrow ",
  39 : "right arrow",
  40 : "down arrow ",
  41 : "select",
  42 : "print",
  43 : "execute",
  44 : "Print Screen",
  45 : "insert ",
  46 : "delete",
  // 48 : "0",
  // 49 : "1",
  // 50 : "2",
  // 51 : "3",
  // 52 : "4",
  // 53 : "5",
  // 54 : "6",
  // 55 : "7",
  // 56 : "8",
  // 57 : "9",
  // 58 : ":",
  59 : "semicolon (firefox), equals",
  60 : "<",
  61 : "equals (firefox)",
  63 : "ß",
  64 : "@ (firefox)",
  // 65 : "a",
  // 66 : "b",
  // 67 : "c",
  // 68 : "d",
  // 69 : "e",
  // 70 : "f",
  // 71 : "g",
  // 72 : "h",
  // 73 : "i",
  // 74 : "j",
  // 75 : "k",
  // 76 : "l",
  // 77 : "m",
  // 78 : "n",
  // 79 : "o",
  // 80 : "p",
  // 81 : "q",
  // 82 : "r",
  // 83 : "s",
  // 84 : "t",
  // 85 : "u",
  // 86 : "v",
  // 87 : "w",
  // 88 : "x",
  // 89 : "y",
  // 90 : "z",
  91 : "Windows Key / Left ⌘ / Chromebook Search key",
  92 : "right window key ",
  93 : "Windows Menu / Right ⌘",
  96 : "numpad 0 ",
  97 : "numpad 1 ",
  98 : "numpad 2 ",
  99 : "numpad 3 ",
  100 : "numpad 4 ",
  101 : "numpad 5 ",
  102 : "numpad 6 ",
  103 : "numpad 7 ",
  104 : "numpad 8 ",
  105 : "numpad 9 ",
  106 : "multiply ",
  107 : "add",
  108 : "numpad period (firefox)",
  109 : "subtract ",
  110 : "decimal point",
  111 : "divide ",
  112 : "F1 ",
  113 : "F2 ",
  114 : "F3 ",
  115 : "F4 ",
  116 : "F5 ",
  117 : "F6 ",
  118 : "F7 ",
  119 : "F8 ",
  120 : "F9 ",
  121 : "F10",
  122 : "F11",
  123 : "F12",
  124 : "F13",
  125 : "F14",
  126 : "F15",
  127 : "F16",
  128 : "F17",
  129 : "F18",
  130 : "F19",
  131 : "F20",
  132 : "F21",
  133 : "F22",
  134 : "F23",
  135 : "F24",
  144 : "num lock ",
  145 : "scroll lock",
  160 : "^",
  161: '!',
  163 : "#",
  164: '$',
  165: 'ù',
  166 : "page backward",
  167 : "page forward",
  169 : "closing paren (AZERTY)",
  170: '*',
  171 : "~ + * key",
  173 : "minus (firefox), mute/unmute",
  174 : "decrease volume level",
  175 : "increase volume level",
  176 : "next",
  177 : "previous",
  178 : "stop",
  179 : "play/pause",
  180 : "e-mail",
  181 : "mute/unmute (firefox)",
  182 : "decrease volume level (firefox)",
  183 : "increase volume level (firefox)",
  // 186 : "semi-colon / ñ",
  // 187 : "equal sign ",
  // 188 : "comma",
  // 189 : "dash ",
  // 190 : "period ",
  // 191 : "forward slash / ç",
  // 192 : "grave accent / ñ / æ",
  193 : "?, / or °",
  194 : "numpad period (chrome)",
  // 219 : "open bracket ",
  // 220 : "back slash ",
  // 221 : "close bracket / å",
  // 222 : "single quote / ø",
  223 : "`",
  224 : "left or right ⌘ key (firefox)",
  225 : "altgr",
  226 : "< /git >",
  230 : "GNOME Compose Key",
  231 : "ç",
  233 : "XF86Forward",
  234 : "XF86Back",
  255 : "toggle touchpad"
};

// variable created to check if keypress event is fired
let keypress = false;

// keydown event
document.addEventListener("keydown", function(e) {
  // temp fix to prevent tab
  if (e.which === 9) {
    e.preventDefault();
  }

  console.log(`keydown : keycode is ${e.which} & key is ${e.key}`);

  document.querySelector('.keycode-display').innerHTML = e.which;
  document.querySelector('.text-display').innerHTML = writtenKeyCodes[e.which] || e.key;
  // may want to add the keypress check here, so it renders at the same speed
});

// keypress event
// only fires when the 'keypressed' is a character key aka has a charcode
document.addEventListener("keypress", function(e) {
  keypress = true;
  console.log(`keypress : charcode is ${e.which}`);
  document.querySelector('.charcode-display').innerHTML = e.which;
});

// keyup event
document.addEventListener("keyup", function(e) {
  // handle unfired keypress event
  if (keypress) {
    keypress = false;
  } else if (keypress === false) {
    // change this to "" after css styling
    document.querySelector('.charcode-display').innerHTML = "n/a";
  }

  // edge case for caps lock - only fires a keyup upon "releasing caps lock"
  if (e.which === 20) {
    document.querySelector('.keycode-display').innerHTML = e.which;
    document.querySelector('.text-display').innerHTML = writtenKeyCodes[e.which] || e.key;
  }
  console.log(`keyup : keycode is ${e.which} & key is ${e.key}`);
});
