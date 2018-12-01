import React from 'react'; 

import WeddingTitle from '../Shared/WeddingTitle';

import MainPageMenu from './MainPageMenu'; 
import BridalParty from './BridalParty';
import Venu from './Venu'; 
import Accomodations from './Accomodations'; 
import Faq from './Faq'; 
import Footer from './Footer';

import Breaker from './Breaker'; 



const MainPageWrapper = (props) => {

    return(
        <div className="mainPageWrapper" id="topOfPage">

            <MainPageMenu 
                menuLinks={props.menuLinks}
                handleMenuItemClick={
                    (menuItemIndex) => props.handleMenuItemClick(menuItemIndex)
                }
                handleMenuToggle = {() => props.handleMenuToggle()}
                isMenuOpen = {props.isMenuOpen}
            />

            <WeddingTitle 
                leftPart={props.weddingTitle.leftPart}
                middlePart={props.weddingTitle.middlePart}
                rightPart={props.weddingTitle.rightPart}
            />

            <BridalParty
                profileHolders={props.bridalParty.profileHolders}
            />

            <Breaker />

            <Venu
                halfImageTitle={props.halfImageTitle}
                image={props.venu.image}
                address={props.venu.address}
                phone={props.venu.phone}
                website={props.venu.website}
                googleMap={props.venu.googleMap}
            />

            <Breaker />

            <Accomodations
                halfImageTitle={props.halfImageTitle}
                image={props.accomodations.image}
                address={props.accomodations.address}
                phone={props.accomodations.phone}
                website={props.accomodations.website}
                googleMap={props.accomodations.googleMap}
            />

            <Breaker />

            <Faq
                answeredQuestions={props.faq}
            />

            <Breaker /> 

            <Footer 
                footerContent={props.footerContent}
            />

        </div>
    ); 

}

export default MainPageWrapper; 