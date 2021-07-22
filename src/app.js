import React, { useState, useEffect } from 'react';


const App = ({ data }) => {

  const [list, setList] = useState(data);
  const [word, setWord] = useState('');
  const [inValidInputErr, setinValidInputErr] = useState(false)
  const [noMatch, setNoMatch] = useState(false)
  const [wordsToShow, setwordsToShow] = useState([]);

  useEffect(() => {
    if (word) {
      validateInput();
      if (!inValidInputErr) {
        setwordsToShow(list.filter((item) => {
          return item.toUpperCase().startsWith(word.toUpperCase())
        }));
      }
    } else {
      setwordsToShow([]);
    }
  }, [word])

  useEffect(() => {
     wordsToShow.length > 0 ? setNoMatch(false) : setNoMatch(true);
  }, [wordsToShow])


  const validateInput = () => {
    word.match(/^\w+$/) ? setinValidInputErr(false) : setinValidInputErr(true);
  }

  const inputHandler = (e) => {
    setWord(e.target.value);
  }

  const clickHandler = (e) => {
    setWord(e.target.innerText)
  }


  return (
    <>
      {inValidInputErr && <p className='error'>Invalid Input</p>}
      {noMatch && <p className='error'>No Match found</p>}
      <Input type="text" inputHandler={inputHandler} word={word} ></Input>
      {!inValidInputErr && <List wordsToShow={wordsToShow} clickHandler={clickHandler} word={word}></List>}
    </>
  );
};

function Input({ inputHandler, word }) {

  return (
    <input type="text" onChange={inputHandler} value={word} ></input>
  )
};

function List({ wordsToShow, clickHandler, word }) {

  useEffect(() => {


  }, [wordsToShow])


  return (
    <ul>
      {wordsToShow && wordsToShow.map((wordItem, index) => {
        return <li tabIndex="0" key={index} onClick={clickHandler}>
          <span>{wordItem.slice(0, word.length)}</span>{wordItem.slice(word.length, wordItem.length)}
        </li>
      })}
    </ul>
  )
}

export default App;
