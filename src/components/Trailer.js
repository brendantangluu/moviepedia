function Trailer({ trailers }) {
    return (
        <div>
            {trailers && trailers.length > 0 && (
                <iframe
                    width="100%"
                    height="315"
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