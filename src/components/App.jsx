import apiData from '../services/api';
import { Route,Routes } from "react-router-dom";
import Header from "./Header";
import { useState, useEffect } from 'react';
import  Filters from './Filters/Filters';
import CharacterList from './characters/CharacterList'
import CharacterDetail from './characters/CharacterDetail'

function App() {
    const [characters, setCharacters] = useState([]);
    const [filterName, setFilterName] = useState('');
    const [filterHouse, setFilterHouse] = useState('');
    const [filterStatus, setFilterStatus] = useState(true);
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
            if (filterStatus === true) {
              return char.alive === true;
            } else {
              return char.alive === false;
            } 
            });
         
      
        const handleReset = (ev) => {
          ev.preventDefault();
          setFilterName('');
          setFilterHouse('');
          setFilterGender('');
          setFilterStatus('');
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
    </div>
);
}
export default App;