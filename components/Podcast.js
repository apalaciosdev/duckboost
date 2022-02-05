const SIZES = {
  normal: "232",
  compact: "152",
};

export const Podcast = ({ episode, size }) => {
  return (
    <iframe
      src={`https://open.spotify.com/embed/episode/${episode}`}
      width="100%"
     
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
}