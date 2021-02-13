import react , {Component} from 'react';

import {HomeSection, HomeInoformation, HomeTitle, HomeInfo, HomeDesk, Span, HomeBtn} from './style.js';

const Home = () => {
    return (
        <HomeSection>
            <div className="container">
                <HomeInoformation>
                    <HomeTitle class="home-title margin-bottom">Abdelrahman Saleh</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesk>
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesk>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInoformation>
            </div>
        </HomeSection>
    );
}


export default Home;