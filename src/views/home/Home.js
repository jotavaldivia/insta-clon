import Navbar from '../../components/navbar/navbar.js'
import Histories from '../../components/histories/Histories.js'
import SuggestionsForYou from '../../components/sugerencias-para-ti/SuggestionsForYou.js'
import Post from '../../components/post/Post.js'
import './Home.css'
import React from 'react'
import UserContext from '../../context/UserContext.js'
import userdata from '../../services/data.js'


function Home() {
  return (
    <>
      <UserContext.Provider value={userdata}>
        < Navbar />
        <div className="App">
          <section className='container__histories__suggestions'>
            < Histories />
            <SuggestionsForYou />
          </section>
          <Post />
          <Post />
          <Post />

        </div>
      </UserContext.Provider>
    </>
  )
}

export default Home