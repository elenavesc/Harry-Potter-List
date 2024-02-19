import apiData from '../services/api';
import { Route,Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from 'react';
import  Filters from './Filters/Filters';
import CharacterList from './characters/CharacterList'
import CharacterDetail from './characters/CharacterDetail'
import '../scss/App.scss'

function App() {
    const [characters, setCharacters] = useState([]);
    const [filterName, setFilterName] = useState('');
    const [filterHouse, setFilterHouse] = useState('');
    const [filterStatus, setFilterStatus] = useState(null);
    const [filterGender, setFilterGender] = useState('');

    useEffect(() => {
        apiData().then((data) => {
          setCharacters(data);
        });
      }, []);

      const handleName = (value) => {
        setFilterName(value);
      };
    
      const handleHouse = (value) => {
        setFilterHouse(value);
      };
    
      const handleGender = (value) => {
        setFilterGender(value);
      };
      
      const handleStatus = (value) => {
        if (value=== 'alive'){setFilterStatus(true)} 
        else {setFilterStatus(false)};
      };
    
      const filterCharacters = characters
        .filter((char) =>
          char.name.toLowerCase().includes(filterName.toLowerCase())
        )
        .filter((char) => {
           return filterHouse !== '' ? char.house && char.house === filterHouse : true
          })
          .filter((char) => {
            if (filterGender === 'female') {
              return char.gender === 'female';
            } else if (filterGender === 'male') {
              return char.gender === 'male';
            } else {
              return true;
            }
          }).sort((a, b) => a.name.localeCompare(b.name))

          .filter((char) => {
            if (filterStatus != null) {
              return char.alive === filterStatus;
            }
            return true
            });
         
      
        const handleReset = (ev) => {
          ev.preventDefault();
          setFilterName('');
          setFilterHouse('');
          setFilterGender('');
          setFilterStatus(null);
        };
      
return (
    <div className="page">
        <Header/>
        <Routes>
            <Route
            path="/"
            element={
                <>
                <Filters 
                handleName={handleName}
                filterName={filterName}
                handleHouse={handleHouse}
                handleStatus={handleStatus}
                filterStatus={filterStatus}
                handleGender={handleGender}
                filterGender={filterGender}
                handleReset={handleReset}
                />
                <CharacterList data={filterCharacters} filterName={filterName} />
                </>
            }
        />
        <Route
        path="/details/:urlId"
        element={<CharacterDetail data={characters}/>}
        />
        </Routes>
        <Footer/>
    </div>
);
}
export default App;