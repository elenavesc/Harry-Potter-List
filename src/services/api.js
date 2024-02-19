const apiData = () => {
  return fetch('https://hp-api.onrender.com/api/characters/')
    .then((response) => response.json())
    .then((data) => {
      const dataChar = data.map((character) => {
        const characterData = {
          id: character.id,
          name: character.name,
          alternateNames: character.alternate_names,
          specie: character.species,
          gender: character.gender,
          house: character.house,
          alive: character.alive,
          image: character.image,
          wizard: character.wizard,
        };
        return characterData;
      });
      return dataChar;
    });
};

export default apiData;