function filterVideos(videoDataArray){
     return videoDataArray.filter((videoData) => {
        // return videoData.site === "Youtube";
        // return console.log(videoData.site, videoData.type); //this works
        return videoData.site === "YouTube" && videoData.type === "Trailer";
        
    });
}

export default filterVideos;
