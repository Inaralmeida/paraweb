import ReactAudioPlayer from "react-audio-player";

const Player = ({ url }: { url: string }) => {


  return (
    <div>
      <ReactAudioPlayer controls src={url} muted/>

    </div>
  );
};

export default Player;
