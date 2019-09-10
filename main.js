const SongsManager = function(){
   _list={};
    const addSong =function(name,identity){
        id=identity.slice(32)
        _list[name]=id
        // console.log(_list)
    }
    const getSong= function(key){
            console.log("https://www.youtube.com/watch?v="+_list[key])
            // console.log(_list)
    }

return{
    addSong:addSong,
    getSong:getSong
}
}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ


