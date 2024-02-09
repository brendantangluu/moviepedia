
function Trailer({ trailers }) {
  return (
      <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
          {trailers && trailers.length > 0 && (
              <iframe
                  style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
                  src={`https://youtube.com/embed/${trailers[0].key}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
              ></iframe>
          )}
      </div>
  );
}

export default Trailer;
  