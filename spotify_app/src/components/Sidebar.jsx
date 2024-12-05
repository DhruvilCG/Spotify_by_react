import './sidebar.css'

function Sidebar () {
    return (
        <>
        <div className="sideBar">
          <div className="logo">
            <img src={"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Spotify%20logo.png?raw=true"} alt="" />
          </div>
          <div className="home">
            <img src={"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true"} alt="" /> &nbsp;  Home
          </div>
          <div className="sidebarelement">
            <img src={"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true"} alt="" /> &nbsp;  Search
          </div>
          <div className="sidebarelement">
            <img src={"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true"} alt="" /> &nbsp;  YourLibrary
          </div>
          <div className="sidebarelement2">
            <img src={"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Create.png?raw=true"} alt="" /> 
            <p>Create Playlist</p>
          </div>
          <div className="sidebarelement21">
            <img src={"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true"} alt="" /> 
            <p>Liked Songs</p>
          </div>
          <div className="sidebarelement21">
            <img src={"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/your%20episodes.png?raw=true"} alt="" /> 
            <p>Your Episodes</p>
          </div>
          <div className="fav">
            <p className='fav1'>FAV</p>
            <p>Daily Mix 1</p>
            <p>Discivr Weekly</p>
            <p>Malayalam</p>
            <p>Dance/Electronix Mix</p>
            <p>EDM/Popular</p>
          </div>
          <div className="install">
            <img src={"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/grommet-icons_install-option.png?raw=true"} alt="" />
            <p>Install App</p>
          </div>
        </div>
        </>
    )    
}

export default Sidebar