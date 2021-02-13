import React, {Component} from 'react';
import { SocialSection, Social, SocialIcon, SocialDesc, Span, SpanInfo } from './style.js';

import axios from 'axios'

class SocialMedia extends Component {

    state = {
        social: []
    } 
    
    componentDidMount () {
        axios.get('js/data.json').then(res => this.setState({social: res.data.social})
        )
    }


    render() {

        const{ social} = this.state

        const socialList = social.map( (socialItem) => {
            return (
            
            <Social item={socialItem.id} key={socialItem.id}>
                <SocialIcon className={socialItem.icon}></SocialIcon>
                <SocialDesc>
                    <Span>{socialItem.title}</Span>
                    <SpanInfo>{socialItem.body}</SpanInfo>
                </SocialDesc>
            </Social>

            )
        })

        return (

        <SocialSection> 
            {socialList}
        </SocialSection>
        
        );
    }
}


export default SocialMedia;