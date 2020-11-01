let config = {
    terminal: {
        title: `Terminal at i@186526.xyz`,
        prefix: `<d color="#00f501">i@186526.xyz</d><d color="white">:</d><d color="blue">~</d><d color="white">$</d> `,
        welcome: 'Welcome to <d color="#00f501">186526.xyz</d> terminal',
        actions: []
    },
    friends: [
        {
            name: 'Skrshadow',
            description: '是红雨 昆卡昆卡斯哈斯哈',
            url: 'https://blog.skrshadown.cn'
        },
        {
            name: 'Radium-Bit',
            description: '在B站py友链的朋友（',
            url: 'https://radium-bit.github.io/'
        },
        {
            name: `JimmyQin's Blog`,
            description: '是大佬的说',
            url: 'https://www.jimmyqin.cn/'
        },
        {
            name: "Lapis Apple的回收站",
            description: '又是大佬的说',
            url: 'https://laple.top/'
        }
    ],
    neofetch: [
        {
            name: 'describe',
            value: '啥都不会的屑'
        },
        {
            name: 'UseOS',
            value: 'Arch Linux x86_64'
        },
        {
            name: 'Blog',
            value: '<d href="https://blogging.186526.xyz">blogging.186526.xyz</d>'
        },
        {
            name: 'Telegram',
            value: '<d href="https://t.me/real186526">@real186526</d>'
        },
        {
            name: 'Github',
            value: '<d href="https://github.com/186526">@186526</d>'
        },
        {
            name: 'GPG',
            value: '<d href="https://i.186526.xyz/pgp_keys.asc">https://i.186526.xyz/pgp_keys.asc</d>'
        },
        {
            name: 'Shell',
            value: '<d del>nonsh 114.514</d>'
        }
    ]
};
config.friends = ((a) => {
    let b = '';
    b += `<d color="#ceedf2">My friend</d>\n`;
    for (let i in a) {
        b += `        <d color="#00cdcd">name</d>:<d color="#7f7f7f">${a[i].name}</d>\n`;
        b += `        <d color="#00cdcd">description</d>:<d color="#7f7f7f">${a[i].description}</d>\n`;
        b += `        <d color="#00cdcd">url</d>:<d color="#7f7f7f" href="${a[i].url}">${a[i].url}</d>\n`;
        b += `        ------\n`;
    }
    return b;
})(config.friends);
config.neofetch = (async (a) => {
    let b = '';
    let c = await fetch('./neofetch.output');
    if (c.status === 200) {
        b+=await c.text();
    } else {
        throw 'Server Error';
    }
    b += '--------------------------\n';
    for (let i in a) {
        b += `<d color="#7f7f7f"> ${a[i].name}</d>: ${a[i].value}\n`;
    }
    return b;
})(config.neofetch);
export { config };