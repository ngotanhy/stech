import ComponentContaier from './components/ComponentContaier';
import Footer from './components/Footer';
import Header from './components/Header';
import SectionContent from './components/SectionContent';
import SectionInformation from './components/SectionInformation';
import SectionKHCN from './components/SectionKHCN';
import SectionNext1 from './components/SectionNext1';
import SectionNext2 from './components/SectionNext2';
import SectionNext3 from './components/SectionNext3';
import SectionNext4 from './components/SectionNext4';
import SectionPhoto from './components/SectionPhoto';
import SectionPodcast from './components/SectionPodcast';
import SectionTopic from './components/SectionTopic';
import SectionVideo from './components/SectionVideo';
import TopStory from './components/TopStory';


function App() {
  return (
    <div className="App">
      <Header />
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
      <SectionPhoto/>
      <SectionNext4/>
      <Footer />
    </div>
  )
}

export default App
