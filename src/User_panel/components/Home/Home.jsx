import React from 'react';
import Top_Section from '../Top_Section/Top_Section';
import What_We_Do from '../What_We_Do/What_We_Do';
import Choose_your_future from '../Choose_your_future/Choose_your_future';
import { Neelima_Tarot } from '../Neelima_Tarot/Neelima_Tarot';
import Video_section from '../Video_section/Video_section';
import Our_Clients_Says from '../Our_Clients_Says/Our_Clients_Says';
import Navbar from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div id="Top_Section">
                <Top_Section />
            </div>
            <div id="What_We_Do">
                <What_We_Do />
            </div>
            <div id="Choose_your_future">
                <Choose_your_future />
            </div>
            <div id="Neelima_Tarot">
                <Neelima_Tarot />
            </div>
            <Video_section />
            <Our_Clients_Says />
            <Footer />
        </div>
    );
}

export default Home;
