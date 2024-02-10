
import Header from '../component/Header';
import Jumbotron from '../component/Jumbotron';
import About from '../component/About';
import ProductAndServices from '../component/Product';
import Footer from '../component/Footer';
import Contact from '../component/Contact';

function App() {
  return (
    <>
      <div className="h-72  bg-gradient-to-br from-indigo-300 via-transparent">
        <div className={`dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] `}>
          <Header />
          <br />
          <Jumbotron />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <About />
          <br />
          <ProductAndServices />
          <br />
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App;
