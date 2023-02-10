import Footer from './components/Footer';
import Header from './components/Header';
import SectionContent from './components/SectionContent';
import SectionInformation from './components/SectionInformation';
import SectionKHCN from './components/SectionKHCN';
import SectionPodcast from './components/SectionPodcast';
import SectionTopic from './components/SectionTopic';
import SectionVideo from './components/SectionVideo';
import TopStory from './components/TopStory';
function App() {
  return (
    <div className="App">
      <Header />
      <TopStory/>
      <SectionInformation/>
      <SectionPodcast/>
      <SectionTopic/>
      <SectionKHCN/>
      <SectionVideo/>
      <SectionContent/>
      <Footer/>
    </div>
  )
}

export default App
