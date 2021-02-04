import Row from './components/Row/Row'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import requests from './utils/requests'

function App() {
  return (
    <div>

      <Navbar />
      <Banner />

      <Row title='NETFLIX ORIGINALS' fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title='Trenging Now'      fetchURL={requests.fetchTrending}         isLargeRow={false}/>
      <Row title='Top Rated'         fetchURL={requests.fetchTopRated}         isLargeRow={false}/>
      <Row title='Action Movies'     fetchURL={requests.fetchActionMovies}     isLargeRow={false}/>
      <Row title='Comedy Movies'     fetchURL={requests.fetchComedyMovies}     isLargeRow={false}/>
      <Row title='Horror Movies'     fetchURL={requests.fetchHorrorMovies}     isLargeRow={false}/>
      <Row title='Romance Movies'    fetchURL={requests.fetchRomanceMovies}    isLargeRow={false}/>
      <Row title='Documentaries'     fetchURL={requests.fetchDocumentaries}    isLargeRow={false}/>
    </div>
  );
}

export default App;
