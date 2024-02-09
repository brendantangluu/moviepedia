function filterVideos(videoDataArray){
     return videoDataArray.filter((videoData) => {
        //filtering data.site and data.type since data from 
        //fetchTrailers returns an array of many different types of videos
        return videoData.site === "YouTube" && videoData.type === "Trailer";
        
    });
}

export default filterVideos;
