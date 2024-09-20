import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import Review from './components/Review/Review';
import Question from './components/Question/Question';

function App() {

  return (
    <div className='main'>
      <Header />
      <Hero />
      <Review />
      <Question />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
