import { useState } from 'react'

const FilterForm = ({ newSearch, handleSearch }) => (
  <div>
    filter shown with 
    <input value={newSearch} onChange={handleSearch} />
  </div>
);

const PersonForm = ({ addName, newName, handleNameChange, newNumber, handleNumberChange }) => (
  <div>
    <h2>add a new</h2>
    <form onSubmit={addName}>
      <div>
        name: 
        <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number:
        <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </div>
);

const PersonList = ({ persons }) => (
  <div>
    <h2>Numbers</h2>
    {persons.map((person) => (
      <div key={person.name}>
        {person.name} {person.number ? person.number : ''}
      </div>
    ))}
  </div>
);

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');
  const [showAll, setShowAll] = useState(true);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setNewSearch(searchValue);
    setShowAll(false);
  };

  const personsToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(newSearch.toLowerCase()));

   const addName = (event) => {
    event.preventDefault();
    const nameExists = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (!nameExists && newName !== '') {
      const person = {
        name: newName,
        number: newNumber
      };
      setPersons(persons.concat(person));
      setNewName('');
      setNewNumber('');
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <FilterForm newSearch={newSearch} handleSearch={handleSearch} />

      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <PersonList persons={personsToShow}/>
 
    </div>
  );
};

export default App