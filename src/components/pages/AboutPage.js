import React from 'react';
import HalfText from '../HalfText';
import ScrollText from '../ScrollText';
import Navigation from '../Navigation';

class AboutPage extends React.Component {
  render() {
    return (
      <Navigation one="about" two="work" three="contact" four="root">
        <div className="page"
             ref={c => this.aboutpage = c}>
           <div className="flex-wrapper about">
             <div className="flex-half center">
               <HalfText
                 className='cursor-click'>
                  Bad Apples Good Design
               </HalfText>
             </div>
             <div className="flex-half"
                  onClick={e => e.stopPropagation()}>
               <ScrollText
                 className='cursor-scroll'>
                 <p className="center rainbow"> ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏</p>
                 <p>
                   Wunder Werkz is a full service design studio based in Denver,
                   Colorado and filled with design geeks and
                   pizza 🍕 🍕 🍕 lovers.
                   We work on both self produced and commissioned projects and
                   believe in style and simplicity that isn’t afraid to have some
                   fun 🎉 🎉 🎉.
                 </p>
                 <p>
                   From posters to palaces, typography to tattoo parlors,
                   barber shops to brothels, if you want to step out of the box and
                   get a little dangerous then we are the design studio for you.
                 </p>
                 <div className="full-width-button cursor-download">
                   <button> Download a Deck </button>
                 </div>
                 <p className="center rainbow"> ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏</p>

             </ScrollText>
             </div>
           </div>
        </div>
      </Navigation>
    );
  }
}

export default AboutPage;