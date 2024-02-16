import apiData from '../services/api';
import { Route,Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function App() {
    const [characters, setCharacters] = useState([]);
    const [filterName, setFilterName] = useState('');
    const [filterHouse, setFilterHouse] = useState('Gryffindor');
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
    
      const filterCharacters = characters
        .filter((char) =>
          char.name.toLowerCase().includes(filterName.toLowerCase())
        )
        .filter((char) => {
            if (!char.house) {
              if (!char.wizard) {
                return filterHouse === 'Muggles';
              } else {
                return filterHouse === 'Otros magos';
              }
            } else {
              return char.house === filterHouse;
            }
          })
          .filter((char) => {
            if (filterGender === 'female') {
              return char.gender === 'female';
            } else if (filterGender === 'male') {
              return char.gender === 'male';
            } else {
              return true;
            }
          });
      
        const handleReset = (ev) => {
          ev.preventDefault();
          setFilterName('');
          setFilterHouse('Gryffindor');
          setFilterGender('');
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
                handleGender={handleGender}
                filterGender={filterGender}
                handleReset={handleReset}
                />
                <CharacterList data={filterCharacters} filterName={filterName} />
                </>
            }
        />
        <Route
        path="/details/:urlID"
        element={<CharcaterDetail data={characters}/>}
        />
        </Routes>
        <Footer/>
    </div>
);
}
export default App;