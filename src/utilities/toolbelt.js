function filterVideos(videoDataArray){
     return videoDataArray.filter((videoData) => {
        return videoData.site === "YouTube" && videoData.type === "Trailer";
        
    });
}

export default filterVideos;
