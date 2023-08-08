import React, { useState } from "react";
import Video from "./components/Video";
import Audio from "./components/Audio";
import Resume from "./components/Resume";
import Fifa from "./components/Fifa";
import records from "./data/data";
import songDB from "./data/data2";
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";

const App = () => {
  const [songs, setSongs] = useState(songDB);

  // let resum= {
  //   firstName:"Ram",
  //   lastName:"Lal",
  //   age: "20",
  //   education:"Bachelors",
  //   experience:"2 years",
  //   skills: "Node, React, Js"
  // }
  // let resum2= {
  //   firstName:"Shyam",
  //   lastName:"Lal",
  //   age: "24",
  //   education:"Masters",
  //   experience:"4 years",
  //   skills: "Node, React, Js, Python, Ruby, Php"
  // }
  // let obj = {
  //   title: "React Js tutorial",
  //   channel:"Rohan Codes",
  //   views:"100k",
  //   time:"5 months ago",
  // }
  return (
    // <div>
    //   <div>Winners</div>
    //   {
    //     records.map(record=><Fifa
    //       year={record.year}
    //       host={record.host}
    //       winner={record.winner}
    //       runnerup={record.runnerup}
    //       goldenboot={record.goldenboot}
    //       goldenball={record.goldenball}
    //       penaltyShootout={record.penaltyShootout}
    //       id={record.id}
    //     ></Fifa>)
    //   }

    // </div>
    <div>
      <div>
        <button
          onClick={() => {
            setSongs([...songs, ({
              id: songs.length+1,
              songName: "Nepali",
              singerName: "1974AD",
              year: "2008",
              label: "Music Nepal",
              solo: false,
            })]);
          }}
        >
          Add Songs
        </button>
      </div>
      {songs.map((song) => (
        <Audio
          songName={song.songName}
          singerName={song.singerName}
          year={song.year}
          label={song.label}
          solo={song.solo}
          id={song.id}
        >
          <PlayButton
            onPlay={() => console.log("Playing...", song.songName)}
            onPause={() => console.log("Paused...", song.songName)}
          >
            {song.songName}
          </PlayButton>
        </Audio>
      ))}
      <div>{/* <PlayButton  message="pause-msg">Pause</PlayButton> */}</div>

      <Counter />
    </div>

    // <div>    <Resume
    //   {...resum}>

    //   </Resume><br />
    //   <Resume
    //    {...resum2}></Resume>
    // </div>

    // <div>
    //   <div>Hello World</div>
    //   <Video
    //     {...obj}
    //   ></Video>
    //   <Video
    //     title="Node Js tutorial"
    //     views="100k"
    //     time="5 months ago"
    //   ></Video>
    // </div>
  );
};

export default App;
