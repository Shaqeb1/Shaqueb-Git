import Directory from './components/directory/directory.component'
function App() {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/YdXmrbG/hats.jpg',
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/10C9Cbv/jackets.jpg',
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/wY9WmZ5/sneakers.jpg',
    },
    {
      id: 4,
      title: 'Women',
      imageUrl: 'https://i.ibb.co/pvfZ5g8/women.jpg',
    },
    {
      id: 5,
      title: 'Men',
      imageUrl: 'https://i.ibb.co/chs52HZ/men.jpg',
    },
  ]

  return <Directory categories={categories} />
}

export default App
