import Row from "./components/Row/Row";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import requests from "./utils/requests";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

function App() {
  const [activeRow, setActiveRow] = useState("");

  return (
    <Container>
      <Navbar />
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
        setActiveRow={setActiveRow}
        activeRow={activeRow}
      />
      <Row
        title="Trenging Now"
        fetchURL={requests.fetchTrending}
        isLargeRow={false}
        setActiveRow={setActiveRow}
        activeRow={activeRow}
      />
      <Row
        title="Top Rated"
        fetchURL={requests.fetchTopRated}
        isLargeRow={false}
        setActiveRow={setActiveRow}
        activeRow={activeRow}
      />
      <Row
        title="Action Movies"
        fetchURL={requests.fetchActionMovies}
        isLargeRow={false}
        setActiveRow={setActiveRow}
        activeRow={activeRow}
      />
      <Row
        title="Comedy Movies"
        fetchURL={requests.fetchComedyMovies}
        isLargeRow={false}
        setActiveRow={setActiveRow}
        activeRow={activeRow}
      />
      <Row
        title="Horror Movies"
        fetchURL={requests.fetchHorrorMovies}
        isLargeRow={false}
        setActiveRow={setActiveRow}
        activeRow={activeRow}
      />
      <Row
        title="Romance Movies"
        fetchURL={requests.fetchRomanceMovies}
        isLargeRow={false}
        setActiveRow={setActiveRow}
        activeRow={activeRow}
      />
      <Row
        title="Documentaries"
        fetchURL={requests.fetchDocumentaries}
        isLargeRow={false}
        setActiveRow={setActiveRow}
        activeRow={activeRow}
      />
    </Container>
  );
}

export default App;
