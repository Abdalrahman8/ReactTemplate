import React , {Component} from 'react';
import {ContactSection, ContactTitle, TitleSpan, Form, Input, FormInput, InputText, InputMail, InputExc, Textarea, InputSub } from './style.js';

import Footer from './../Footer'

const Contact = () => {
    return (
        <React.Fragment>
            <ContactSection>
                <div class="container">
                    <ContactTitle><TitleSpan>Drop </TitleSpan>Me A line</ContactTitle>
                    <Form action="">
                        <FormInput>
                            <InputText type="text" placeholder="Your Name"/>
                            <InputMail type="email" placeholder="Your Email"/>
                        </FormInput>
                        <InputExc type="text" class="sub" placeholder="Your Subject"/>
                        <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                        <InputSub type="submit" value="Send Message"/>
                    </Form>
                </div>
            </ContactSection>
            <Footer />

        </React.Fragment>
    );
}


export default Contact;