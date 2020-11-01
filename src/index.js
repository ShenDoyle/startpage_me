import { dig, curl } from './web.js';
import Term from 'term-web';
import { config } from './startpage.config.js';
import './app.css';
var $ = function (a) {
  return document.querySelector(a);
};
let terminal = {};
var actions = [{
  input: /^dig/i,
  output(input, args) {
    if (input === 'dig') {
      return 'Usage: dig [+short] host [type]\n';
    } else {
      if (args._.includes('+short')) {
        return dig(
          args._[2],
          ((b) => {
            if (typeof b == 'undefined') {
              return 'A';
            } else {
              return b;
            }
          })(args._[3]),
          true,
        );
      } else {
        return dig(
          args._[1],
          ((b) => {
            if (typeof b == 'undefined') {
              return 'A';
            } else {
              return b;
            }
          })(args._[2]),
          false,
        );
      }
    }
  },
},
{
  input: /^curl/i,
  async output(input, args) {
    return curl(input, args);
  },
},
{
  input: /^clear/i,
  output() {
    this.clear();
    return '';
  },
},
{
  input: /^aboutme/i,
  async output() {
    return await config.neofetch;
  },
},
{
  input: /^friends/i,
  async output() {
    // let a = await fetch('./friend.output');
    // if ((await a.status) === 200) {
    //   let b = await a.text();
    //   return b;
    // } else {
    //   throw 'Server Error';
    // }
    return config.friends;
  },
},
{
  input: /^about/i,
  output() {
    let a = '';
    a +=
      "Copyright © 1919-810 <d href='https://186526.xyz' color='yellow'>186526</d>\n";
    a += "Hosted:<d href='https://vercel.com' color='yellow'>'Vercel'</d>\n";
    a +=
      `CDN Provider:\n    ["<d href='https://cloudflare.com' color='yellow'>Cloudflare</d>","<d href='https://vercel.com' color='yellow'>Vercel</d>"]\n`;
    a +=
      "Build with <d href='https://github.com/zhw2590582/term-web' color='yellow'>term-web</d> & <d href='https://snowpack.dev' color='yellow'>snowpack</d> & bug 😥\n";
    a +=
      "OpenSource with MIT Licence at <d href='https://github.com/186526/startpage_me'>186526/startpage_me</d>\n";
    a +=
      "本网站由 <d href='https://console.upyun.com/register/?invite=S1_tWzl7P' color='yellow'> 又拍云 </d> 提供CDN/云存储支持";
    return a;
  },
},
{
  input: /^help/i,
  output() {
    let a = '';
    a +=
      "<d color='#50fa7b'>dig</d>:<d color='yellow'>dig - DNS lookup utility</d>\n";
    a +=
      "<d color='#50fa7b'>curl</d>:<d color='yellow'>curl - transfer a URL</d>\n";
    return a;
  },
},
];
((a)=>{
  for(let i in a){
    actions.push(a[i]);
  }
})(config.terminal.actions);
terminal.term = new Term({
  container: '#terminal-container',
  pixelRatio: 2,
  title: config.terminal.title,
  prefix: config.terminal.prefix,
  welcome: config.terminal.welcome,
  loading: () => 'Please Wait for a moment……',
  notFound: (val) => `${val}: Command not found`,
  actions: actions});
terminal.term.type('aboutme').then(() => {
  setTimeout(() => {
    terminal.term.type('friends').then(() => {
      setTimeout(() => { terminal.term.type('about'); }, 500);
    });
  }, 500);
});
