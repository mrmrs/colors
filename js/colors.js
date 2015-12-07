(function() {
  var colors = {
    aqua:    '#7FDBFF',
    blue:    '#0074D9',
    lime:    '#01FF70',
    navy:    '#001F3F',
    teal:    '#39CCCC',
    olive:   '#3D9970',
    green:   '#2ECC40',
    red:     '#FF4136',
    maroon:  '#85144B',
    orange:  '#FF851B',
    purple:  '#B10DC9',
    yellow:  '#FFDC00',
    fuchsia: '#F012BE',
    gray:    '#AAAAAA',
    white:   '#FFFFFF',
    black:   '#111111',
    silver:  '#DDDDDD'
  };

  if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = colors;
  } else {
    window.colors = colors;
  }
})();
