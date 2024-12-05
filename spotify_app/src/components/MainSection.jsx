import './mainSection.css'

function MainSection () {
            
  const data = [
    {id:1 ,img_url : "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true" , text : 'Liked Songs'} ,
    {id:2 ,img_url : "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true" , text : 'Neffex Playlist'} ,
    {id:3 ,img_url : "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true" , text : 'K/DA'} ,
    {id:4 ,img_url : "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true" , text : 'Liked Songs'} ,
    {id:5 ,img_url : "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true" , text : 'Liked Songs'} ,
  ]

  const data1 = [
    {id:1 , img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true" , text1:'Weekly Motivation...' , text2:'Lorem ipsum Lorem.'} ,
    {id:1 , img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true" , text1:'Weekly Motivation...' , text2:'Lorem ipsum Lorem.'} ,
    {id:2 , img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true" , text1:'Weekly Motivation...' , text2:'Lorem ipsum Lorem.'} ,
    {id:3 , img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true" , text1:'Weekly Motivation...' , text2:'Lorem ipsum Lorem.'} ,
    {id:4 , img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true" , text1:'Weekly Motivation...' , text2:'Lorem ipsum Lorem.'} ,
    {id:5 , img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true" , text1:'Weekly Motivation...' , text2:'Lorem ipsum Lorem.'} 

  ]

    return (
        <>
        <div className="mainContent">
          <div className="navbar">
            <img className='img1' src={"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true"} alt="" />
            <img className='img2' src={"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true"} alt="" />
          </div>
          <h2>Good morning</h2>
          <div className="gridContent">
            {data.map((i,id) => (

            <div className="cont">
              <img src={i.img_url} alt="" />
              <p>{i.text}</p>
            </div>
            ))}
          </div>
          
          <div className="mightLike">
            <h2 style={{fontSize: 22}} >Shows you might like</h2>
            <p>SEE ALL</p>
          </div>
          <div className="grid2">
          {data1.map((i,id) => (
            <div className="cont2">
              <img src={i.img_url} alt="" />
              <p className='p1'>{i.text1}</p>
              <p className='p2'>{i.text2}</p>
            </div>
            ))}
          </div>
        </div>
        </>
    )    
}

export default MainSection