import { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import ComponentContaier from './components/ComponentContaier';
import Footer from './components/Footer';
import Header from './components/Header';
import PopUpNav from './components/PopUpNav';
import SectionContent from './components/SectionContent';
import SectionInformation from './components/SectionInformation';
import SectionKHCN from './components/SectionKHCN';
import SectionNext1 from './components/SectionNext1';
import SectionNext2 from './components/SectionNext2';
import SectionNext3 from './components/SectionNext3';
import SectionNext4 from './components/SectionNext4';
import SectionPhoto from './components/SectionPhoto';
import SectionPodcast from './components/SectionPodcast';
import SectionSpotlight from './components/SectionSpotlight';
import SectionTopic from './components/SectionTopic';
import SectionVideo from './components/SectionVideo';
import TopStory from './components/TopStory';
import useScroll from './Hooks/UseScroll';



function App() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)
  const scroll = useScroll();
  return (
    <div className="App relative">
      <Header isOpen={isOpen} setIsOpen={setIsOpen}  />
      <TopStory />
      <SectionInformation />
      <SectionPodcast />
      <SectionTopic />
      <SectionKHCN />
      <SectionVideo />
      <SectionContent />
      <SectionNext1 />
      <SectionNext2 />
      <SectionNext3 />
      <SectionPhoto />
      <SectionSpotlight />
      <SectionNext4 />
      <Footer />
      {scroll > 200 ? <div className='fixed bottom-10 right-10 bg-slate-200 border rounded-md p-2 scroll-smooth'>
        <button onClick={()=>{ document.documentElement.scrollTop = 0}} >
          <AiOutlineArrowUp className='text-xl font-bold' />
        </button>
      </div> : ""}
     {isOpen &&  <PopUpNav isOpen={isOpen} setIsOpen={setIsOpen}/>}
    </div>
  )
}

export default App
