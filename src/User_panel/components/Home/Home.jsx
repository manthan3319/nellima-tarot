import React from 'react'
import Top_Section from '../Top_Section/Top_Section'
import What_We_Do from '../What_We_Do/What_We_Do'
import Choose_your_future from '../Choose_your_future/Choose_your_future'
import { Neelima_Tarot } from '../Neelima_Tarot/Neelima_Tarot'
import Video_section from '../Video_section/Video_section'
import Our_Clients_Says from '../Our_Clients_Says/Our_Clients_Says'

const Home = () => {
  return (
    <div>
      <Top_Section/>
      <What_We_Do/>
      <Choose_your_future/>
      <Neelima_Tarot/>
      <Video_section/>
      <Our_Clients_Says/>
    </div>
  )
}

export default Home
