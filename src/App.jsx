import { useState } from 'react'
import './App.css'
import Header from "./components/Navbar";
import SearchBar from './components/SearchBar';
import {BiPlay} from "react-icons/bi";
import Meaning from "./components/Meaning";
import axios from 'axios';

function App() {
const [isDark, setIsDark] = useState(false);
const [search, setSearch] = useState("");
const [result, setResult] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

const handleSubmit = async(e)=>
{
  e.preventDefault();
  setError(false);
  setLoading(true);
  try{
    let response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
    );
    setResult(response.data[0]);
  }catch(error)
  {
    setError(error?.response?.data?.message); 
  }finally{
    setLoading(false);
    setSearch("");
  }
};

const playAudio = () => {
  let phonetic = result.phonetics.find((p) =>p.audio !== undefined);
  if(phonetic?.audio)
  {
    let audio = new Audio(phonetic.audio);
    audio.play();
  }
  else{
    alert("audio not found");
  }
};

  return (
    <div className={isDark? "dark app" : "app"}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <div className="bg-transparent mx-auto pt-3 pb-5 px-4" style={{maxWidth:"700px"}}>
        <div>
          <SearchBar search={search}
          setSearch={setSearch}
          handleSubmit={handleSubmit}
          />
        </div>
        <div className="py-4" style={{}}>
          {loading ? (
            <div className="p-3 d-flex justfy-content-between align-items-center">
              <h1 
              style={{
                fontFamily:"'Noto Serif',serif",
            fontWeight:"600",
            }}
            >
              loading......
              </h1>
            </div>
          ): error ? (
            <div className="p-3 mx-1 d-flex justify-content-between align-items-center">
              <h1 
              style={{
                fontFamily:"'Noto Serif', serif",
                fontWeight:"600",
              }}
              >
                {error}
                </h1>
            </div>
          ): result ? (
            <div className="p-3 mx-1 justify-content-between d-flex align-items-center">
              <div>
                <h1
                style={{
                  fontFamily:"'Noto Serif', serif",
                fontWeight:"600",
                }}
                >
                  {result?.word}
                </h1>
                {result?.phonetic && (
                  <p style={{
                    fontSize:"18px",
                    fontWeight:"500px",
                    color:"#8000808a",
                  }}>
                    {result?.phonetic}
                  </p>
                )}
              </div>
              <div>
                <button 
                onClick={()=>playAudio()}
                style={{width:"50px",
              height:"50px",
            display:"grid",
          placeContent:"center",
          border:"none",
          borderRadius:"50%",
          outline: "none",
          backgroundColor:"#c35fc388",
        }}
                >
                  <BiPlay 
                  style={{
                    fontSize:"25px",
                    color:"#2d042dd6",
                  }}/>
                </button>
              </div>
            </div>
          ) : (
            <div className="p-3 mx-1 d-flex  justify-content-between align-items-center">
              <h1
                style={{
                  fontSize: "25px",
                  fontFamily: "'Noto Serif', serif",
                  fontWeight: "600",
                }}
              >
                Please Search Something...
              </h1>
            </div>
          ) }
          <div className="mt-4">
            {result?.meanings?.map((meaning)=>{
              return <Meaning 
              key={meaning.partOfSpeech}
              meaning={meaning}
              />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
