const arrObjectsInitialAside = [
  {
    image: './assets/icons-bar/star.svg',
    name: 'Trending',
  },
  {
    image: './assets/icons-bar/clock.svg',
    name: 'Latest',
  },
  {
    image: './assets/icons-bar/fame.svg',
    name: 'Hall of Fame',
  },
  {
    image: './assets/icons-bar/wordcup.webp',
    name: 'World Cup',
  },
  {
    image: './assets/icons-bar/mbti.webp',
    name: 'MBTI',
  },
  {
    image: './assets/icons-bar/balance.svg',
    name: 'Balance Game',
  },
  {
    image: './assets/icons-bar/category_music_quiz.png',
    name: 'Guess The Song',
  },
]

const arrObjectCategoryLinksAside = [
  {
    image: './assets/icons-bar/category_kpop.png',
    name: 'K-POP',
  },
  {
    image: './assets/icons-bar/category_lol.png',
    name: 'LOL',
  },
  {
    image: './assets/icons-bar/category_streamer.png',
    name: 'Influencer',
  },
  {
    image: './assets/icons-bar/category_food.png',
    name: 'Food',
  },
  {
    image: './assets/icons-bar/category_anime.png',
    name: 'Anime',
  },
  {
    image: './assets/icons-bar/category_sports.png',
    name: 'Sports',
  },
  {
    image: './assets/icons-bar/category_game.png',
    name: 'Gaming',
  },
  {
    image: './assets/icons-bar/category_crypto.png',
    name: 'Crypto',
  },
  {
    image: './assets/icons-bar/category_entertainment.png',
    name: 'Entertainment',
  },
  {
    image: './assets/icons-bar/category_music.png',
    name: 'Music',
  },
  {
    image: './assets/icons-bar/category_movie.png',
    name: 'Movies',
  },
  {
    image: './assets/icons-bar/category_etc.png',
    name: 'ETC',
  },
  {
    image: './assets/icons-bar/category_nsfw.png',
    name: 'NSFW',
  },
  {
    image: './assets/icons-bar/category_animals.png',
    name: 'Animals',
  },
  {
    image: './assets/icons-bar/category_science.png',
    name: 'Science',
  },
  {
    image: './assets/icons-bar/category_cat.png',
    name: 'Cat',
  },
  {
    image: './assets/icons-bar/category_lifestyle.png',
    name: 'Lifestyle',
  },
  {
    image: './assets/icons-bar/category_love.png',
    name: 'Love',
  },
  {
    image: './assets/icons-bar/category_ask.png',
    name: 'Ask or Tell',
  },
  {
    image: './assets/icons-bar/category_fashion.png',
    name: 'Fashion',
  },
  {
    image: './assets/icons-bar/category_beauty.png',
    name: 'Beauty',
  },
  {
    image: './assets/icons-bar/nature.svg',
    name: 'Nature',
  },
  {
    image: './assets/icons-bar/tech.svg',
    name: 'Tech',
  },
  {
    image: './assets/icons-bar/store.svg',
    name: 'Shopping',
  },
  {
    image: './assets/icons-bar/work.svg',
    name: 'Work',
  },
  {
    image: './assets/icons-bar/money.svg',
    name: 'Money',
  },
  {
    image: './assets/icons-bar/history.svg',
    name: 'History',
  },
  {
    image: './assets/icons-bar/politic.svg',
    name: 'Politics',
  },
  {
    image: './assets/icons-bar/usera.svg',
    name: 'WTF',
  },
  {
    image: './assets/icons-bar/uwfu.svg',
    name: 'UwU',
  },
]

function generateLinks(array) {
  array.forEach(element => {
    const a = document.createElement('a')
    const img = document.createElement('img')
    img.src = element.image
    a.appendChild(img)

    const text = document.createTextNode(element.name)
    a.appendChild(text)

    document.querySelector('aside').append(a)
  })
}

generateLinks(arrObjectsInitialAside)

const h2 = document.createElement('h2')

h2.textContent = 'Category'

document.querySelector('aside').append(h2)

generateLinks(arrObjectCategoryLinksAside)
