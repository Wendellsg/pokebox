import "./Home.css";
import Card from "../../components/cards/card";
import { useEffect, useState } from "react";

function Home() {
  const [pokemonList, setPokemonList] = useState(null);
  const [myDeck, setMyDeck] = useState(null); 
  const [founds, setFounds] = useState(0)

  const List = []
  
    useEffect(()=>{
        let myLocalDeck = JSON.parse(localStorage.getItem('@Mydeck'));
        let myLocalFound = JSON.parse(localStorage.getItem('@MyFounds'));
        setMyDeck(myLocalDeck||[])
        setFounds(myLocalFound||300)

    },[])

    useEffect(()=>{
        localStorage.setItem('@Mydeck', JSON.stringify(myDeck))
        localStorage.setItem('@MyFounds', JSON.stringify(founds))
    },[myDeck,founds])

  async function sortearCarta(){
    setPokemonList(null)

    setFounds(founds=> founds-30)

    for(let i =  0;  i <= 4; i++){
        let sorted = Math.random() * (905 - 1) + 1;
        List.push(parseInt(sorted))
    }
    setTimeout(() => {
        setPokemonList(List)
    }, 1000);

  }

  function getCard(cardID){
    setFounds(founds=> founds-10)
    setMyDeck(myDeck => [...myDeck, cardID])
    setPokemonList(pokemonList.filter(item => item !==cardID))
  }

  function removeCard(cardID){
    setFounds(founds=> founds+10)
    setMyDeck(myDeck.filter(item => item !==cardID))
  }


  return (
    <div className="Home">
        <div className="Header">
        <div className="Founds">Pokemon Gatcha!</div>
        <div>
            <span className="Founds">  💰 {founds}</span>
        </div>
        </div>
        {pokemonList
          ?
      <div className="PokemonList">
         {pokemonList.map((number, index) => {
              return <Card getCard={getCard} key={index} index={index} number={number} pokemonUrl={`https://pokeapi.co/api/v2/pokemon/${number}/`} />;
            })}
          
      </div>
      : null}
      <div>
        <h2>Tente a sorte</h2>
        <div className="RandomizeButtom" onClick={()=>sortearCarta()}>Sortear 🎲</div>
      </div>
      <h2>Meu Deck</h2>
      {myDeck?
      <div className="PokemonList">
        
           {myDeck.map((number, index) => {
              return <Card removeCard={removeCard} localDeck={true} key={index} index={index} number={number} pokemonUrl={`https://pokeapi.co/api/v2/pokemon/${number}/`} />;
            })}
          
      </div>
      : null}
    </div>
  );
}

export default Home;
