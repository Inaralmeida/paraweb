import ReactAudioPlayer from "react-audio-player";

const Player = ({ url }: { url: string }) => {
  return (
    <div>
      <ReactAudioPlayer controls src={url} />
    </div>
  );
};

export default Player;
