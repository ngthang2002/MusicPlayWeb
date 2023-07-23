/**
1. Render songs
2. Scroll top
3. Play/Pause/Seek
4. CD rotate
5. Next/prev
6. Random
7. Next / Repeat when ended
8. Active song
9. Scroll active song into view
10. Play song when click 
 */

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const songs = [
    {
        id: 1,
        name:"[Nightcore] DEAMN - Without You ( Lyric ) ♪ in hh.mp3",
        src: "./song/[Nightcore] DEAMN - Without You ( Lyric ) ♪ in hh.mp3",queueMicrotask 
    },
    {
        id: 2,
        name:"10  しゃろう.mp3",
        src: "./song/10  しゃろう.mp3",queueMicrotask 
    },
    {
        id: 3,
        name:"303 PM.mp3",
        src: "./song/303 PM.mp3",queueMicrotask 
    },
    {
        id: 4,
        name:"China - Rain - 我是爱音乐的徐梦圆 ♪ in hh.mp3",
        src: "./song/China - Rain - 我是爱音乐的徐梦圆 ♪ in hh.mp3",queueMicrotask 
    },
    {
        id: 5,
        name:"Counting.mp3",
        src: "./song/Counting.mp3"
    },
    {
        id: 6,
        name:"Ferst  Bittersweet feat Nila .mp3",
        src: "./song/Ferst  Bittersweet feat Nila .mp3"
    },
    {
        id: 7,
        name:"Fred Eddy  Vietnam .mp3",
        src: "./song/Fred Eddy  Vietnam .mp3"
    },
    {
        id: 8,
        name:"High (Free download) in hh.mp3",
        src: "./song/High (Free download) in hh.mp3"
    },
    {
        id: 9,
        name:"IRODUKU The World in Colors  Opening  Ending OST Full.mp3",
        src: "./song/IRODUKU The World in Colors  Opening  Ending OST Full.mp3"
    },
    {
        id: 10,
        name:"Kelfoon - Sakura in hh.mp3",
        src: "./song/Kelfoon - Sakura in hh.mp3"
    },
    {
        id: 11,
        name:"Kiichan热爱 105C 的你  阿肆 Super Idol CHNKORJPNENG 歌ってみた.mp3",
        src: "./song/Kiichan热爱 105C 的你  阿肆 Super Idol CHNKORJPNENG 歌ってみた.mp3"
    },
    {
        id: 12,
        name:"Koutetsujou no Kabaneri Tsudou Hikari Full EndingHiroyuki Sawano ft Aimer  ninelie cryv.mp3",
        src: "./song/Koutetsujou no Kabaneri Tsudou Hikari Full EndingHiroyuki Sawano ft Aimer  ninelie cryv.mp3"
    },
    {
        id: 13,
        name:"Lyric MVAmour ÉtoileMementoMori.mp3",
        src: "./song/Lyric MVAmour ÉtoileMementoMori.mp3"
    },
    {
        id: 14,
        name:"Melody in hh.mp3",
        src: "./song/Melody in hh.mp3"
    },
    {
        id: 15,
        name:"Mestie - Flowers X in hh.mp3",
        src: "./song/Mestie - Flowers X in hh.mp3"
    },
    {
        id: 16,
        name:"Mirai Adventure.mp3",
        src: "./song/Mirai Adventure.mp3"
    },
    {
        id: 17,
        name:"MV女の子になりたいまふまふ.mp3",
        src: "./song/MV女の子になりたいまふまふ.mp3"
    },
    {
        id: 18,
        name:"Porter Robinson  Madeon  Shelter Official Video Short Film with A1 Pictures  Crunchyroll.mp3",
        src: "./song/Porter Robinson  Madeon  Shelter Official Video Short Film with A1 Pictures  Crunchyroll.mp3"
    },
    {
        id: 19,
        name:"Renai Circulation恋愛サーキュレーション歌ってみたなみりん.mp3",
        src: "./song/Renai Circulation恋愛サーキュレーション歌ってみたなみりん.mp3"
    },
    {
        id: 20,
        name:"Sawano Hiroyuki  aLIEz AldnoahZero Full Lyrics.mp3",
        src: "./song/Sawano Hiroyuki  aLIEz AldnoahZero Full Lyrics.mp3"
    },
    {
        id: 21,
        name:"Starling - kawaii~ by StarlingEDM.mp3",
        src: "./song/Starling - kawaii~ by StarlingEDM.mp3"
    },
    {
        id: 22,
        name:"Stream nguyen s thang - Listen to hh playlist online for free on SoundCloud.mp3",
        src: "./song/Stream nguyen s thang - Listen to hh playlist online for free on SoundCloud.mp3"
    },
    {
        id: 23,
        name:"Tobu, Wholm & Blume - Cool in hh.mp3",
        src: "./song/Tobu, Wholm & Blume - Cool in hh.mp3"
    },
    {
        id: 24,
        name:"Vietsub  Hot Tiktok Tô Mạc Già  Trương Hiểu Đường  蘇幕遮  張曉棠.mp3",
        src: "./song/Vietsub  Hot Tiktok Tô Mạc Già  Trương Hiểu Đường  蘇幕遮  張曉棠.mp3"
    },
    {
        id: 25,
        name:"You and Me  しゃろう.mp3",
        src: "./song/You and Me  しゃろう.mp3"
    },
    {
        id: 26,
        name:"アリスダンスグリーンスクリーン.mp3",
        src: "./song/アリスダンスグリーンスクリーン.mp3"
    },
    {
        id: 27,
        name:"可愛くてごめん KJ Physical  Ruki Remix .mp3",
        src: "./song/可愛くてごめん KJ Physical  Ruki Remix .mp3"
    },
    {
        id: 28,
        name:"君がいる世界へ 一花依世界 日本語版 鹿乃.mp3",
        src: "./song/君がいる世界へ 一花依世界 日本語版 鹿乃.mp3"
    }
]

const renderSong = ()=>{
    const html = songs.map(song =>{
        return `<div class="song">
        <div class="thumb" style="background-image: url('./image/untitled.PNG')">
        </div>
        <div class="body">
          <h3 class="title">${song.name}</h3>
          <p class="author">id: ${song.id}</p>
        </div>
        <div class="option">
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>`
    })
    $('.playlist').innerHTML = html.join('\n')
}

const start = (()=>{
    renderSong()
})()
