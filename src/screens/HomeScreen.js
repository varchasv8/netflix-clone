import  React  from "react";
import "./HomeScreen.css";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../requests";

function HomeScreen() {
    // console.log(requests.fetchNetflixOriginals);

    const Rowdata = [
        {title: "NETFLIX ORIGINALS", isLargeRow: true, fetchUrl: requests.fetchNetflixOriginals },
        {title: "Trending Now", isLargeRow: false, fetchUrl: requests.fetchTrending},
        {title: "Top Rated", isLargeRow: false, fetchUrl: requests.fetchTopRated},
        {title: "Action Movies", isLargeRow: false, fetchUrl: requests.fetchActionMovies},
        {title: "Comedy Movies", isLargeRow: false, fetchUrl: requests.fetchComedyMovies}, ,
        {title: "Horror Movies", isLargeRow: false, fetchUrl: requests.fetchHorrorMovies},
        {title: "Romance Movies", isLargeRow: false, fetchUrl: requests.fetchRomanceMovies},
        {title: "Documentaries", isLargeRow: false, fetchUrl: requests.fetchDocumentaries},
    ]
    return <div className="homeScreen">
        <NavBar/>
        <Banner />
        {Rowdata.map((data)=> { 
           return (
            <Row key={data.title} title={data.title} fetchUrl={data.fetchUrl}  isLargeRow={data.isLargeRow}/>
           )
        })}
    </div>
}

export default HomeScreen;