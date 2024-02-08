import useMediaQuery from '@mui/material/useMediaQuery';


function Trailer({ trailers }) {

    const matches = useMediaQuery('(min-width:720px)');

    return (
        <div>
            {trailers && trailers.length > 0 && (
                <iframe
                    width="100%"
                    height={`${matches ? '700' : '315'}`}
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