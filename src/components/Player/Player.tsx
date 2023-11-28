import MuiAudioPlayer from 'mui-audio-player-plus';
const Player = ({ url }: { url: string }) => {


  return (
    <div>
      {/* <ReactAudioPlayer controls src={url} muted/> */}
      <MuiAudioPlayer id="inline-timeline" display="timeline" containerWidth={300} inline src={url} />
    </div>
  );
};

export default Player;
