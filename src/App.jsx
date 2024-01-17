import './App.css';
import Topbar from './Components/topbar/Topbar';
import Intro from './Components/intro/Intro';
import Skills from './Components/skills/Skills';
import Contact from './Components/contact/Contact'
import './Generalize.css'

function App() {
  return (
    <div className='container'>
       <Topbar />
       <div className='sections'>
           <Intro />
           <Skills />
           <Contact />
       </div>
    </div>
  );
}

export default App;
