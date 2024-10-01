import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import Home from './containers/pages/Home';
import Error404 from './containers/errors/Error404';
import Cases from './containers/pages/Cases';
import Services from './containers/pages/Services';
import About_Us from './containers/pages/About_Us';
import Careers from './containers/pages/Careers';
import Blog from './containers/pages/Blog';
import Contact from './containers/pages/Contact';



function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        { /*Error Display */ }
        <Route path="*" element={<Error404 />} />

        {/* Home Page */}
        <Route path="/" element={<Home />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About_Us />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
   </Router>


    </Provider>
   
  );
}

export default App;
