import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import profilepic from '../assets/images/yaknel-profilepic.jpg';
import thumb1 from '../assets/images/plumage-insta1.png';
import thumb2 from '../assets/images/plumage-insta2.jpg';
import thumb3 from '../assets/images/plumage-insta3.jpg';
import thumb4 from '../assets/images/plumage-insta4.jpg';
import thumb5 from '../assets/images/plumage-insta5.jpg';
import thumb6 from '../assets/images/plumage-insta6.png';

const About = () => (
  <section className="content about">
    <div className="about-profile">
        <div className="about-profile-bio">
        <h1>About Plumage</h1>
        <p>People get tattoos for all sorts of reasons: to remember, to belong, to be different, aesthetics, fashion, and because they love the style and art of a particular artist. Humans don’t have feathers or fur, but we still want to make ourselves pretty in different ways, whether that’s through body modification or fashion, and that’s why we chose the name Plumage. After the hours of pain of needles and ink and blood, you are left with a mark on your skin. This is your plumage. In order to recognise the artists and the stories behind the ink, we decided to create Plumage. This is where we talk to tattoo artists about their work, and to tattoo collectors about the meaning behind the ink on their skin. We love finding out about up and coming artists and we hope you’re as curious as we are about this beautiful world of ink. </p><p className="text-author">Yaknel Elorza, Plumage founder</p>
        </div>
        <div className="about-profile-picture">
          <img className="profile-pic" src={profilepic} alt="" />
            <div className="about-profile-contact">
              <h1>Contact Us</h1>
              <p>hello@plumage.io</p>
            </div>
        </div>
        <div className="about-profile-border" />
        </div>
        <div className="about-instagram">
        <h1><a href="https://www.instagram.com/yourplumage/" target="_blank">Latest on instagram</a><i class="fas fa-arrow-right"></i></h1>
        <div class="insta-grid">
          <div class="insta-thumbnail"><img src={thumb1} alt="" /></div>
          <div class="insta-thumbnail"><img src={thumb2} alt="" /></div>
          <div class="insta-thumbnail"><img src={thumb3} alt="" /></div>
          <div class="insta-thumbnail"><img src={thumb4} alt="" /></div>
          <div class="insta-thumbnail"><img src={thumb5} alt="" /></div>
          <div class="insta-thumbnail"><img src={thumb6} alt="" /></div>
        </div>
        {/*  <InstagramEmbed
          url="https://www.instagram.com/p/BedItOFFZo_/?taken-by=yourplumage"
          maxWidth={400}
          className=""
          hideCaption
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}} />*/}
        <div>
          </div>
        </div>
      </section>
    );

export default About;
