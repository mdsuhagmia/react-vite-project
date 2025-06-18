import './App.css'
import About from './components/about/About'
import Around from './components/around/Around'
import Banner from './components/benner/Banner'
import Blog from './components/blog/Blog'
import Footer from './components/footer/Footer'
import Headline from './components/headline/Headline'
import Menu from './components/menu/Menu'
import Upcoming from './components/upcoming/Upcoming'
import Watch from './components/watch/Watch'

function App() {

  return (
    <>
      <Menu/>
      <Banner/>
      <About/>
      <Headline/>
      <Watch/>
      <Upcoming/>
      <Around/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App
