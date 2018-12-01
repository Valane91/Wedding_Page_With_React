import React, { Fragment } from 'react'; 

import Homepage from './Homepage';
import MainPageWrapper from './MainPageWrapper'; 

import datas from '../datas'; 

import './style.css'; 


class WeddingPage extends React.Component {

    constructor(props) {
        super(props); 

        this.state = (datas); 


    
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this);  
        this.handleMenuToggle = this.handleMenuToggle.bind(this); 

    }


    handleMenuItemClick(menuItemIndex) {

        const componentToOpen = this
                                    .state
                                    .menuLinks[menuItemIndex]
                                    .openClick;

        
        if(componentToOpen === 'Homepage') {
            
            this.setState(
                {
                    isHomepageOpen: true
                }
            );
            
            this.handleMenuToggle();

        } else if(componentToOpen === 'MainPageWrapper') {

            this.setState(
                {
                    isHomepageOpen: false
                }
            );

        }

    }


    handleMenuToggle() {

        let mainPageWrapper = this.state.mainPageWrapper; 
        const isMenuOpen = mainPageWrapper.isMenuOpen;
        mainPageWrapper.isMenuOpen = !isMenuOpen; 

        this.setState(
            {
                mainPageWrapper: mainPageWrapper
            }
        )

    }


    render() {

        return(
            <Fragment>

                <Homepage
                    isHomepageOpen={this.state.isHomepageOpen}
                
                    weddingTitle={this.state.weddingTitle}                    
                    menuLinks={this.state.menuLinks}
                    
                    handleMenuItemClick={
                        (menuItemIndex) => this.handleMenuItemClick(menuItemIndex)
                    }

                    weddingLogo={this.state.homepage.weddingLogo} 
                    dateInfo={this.state.homepage.dateInfo}
                    menuFooter={this.state.homepage.menuFooter}
                    address={this.state.homepage.address}
                
                />
                
                <MainPageWrapper 

                    menuLinks={this.state.menuLinks}
                    
                    handleMenuToggle = {() => this.handleMenuToggle()}
                    isMenuOpen = {this.state.mainPageWrapper.isMenuOpen}

                    handleMenuItemClick={
                        (menuItemIndex) => this.handleMenuItemClick(menuItemIndex)
                    }
                    weddingTitle={this.state.weddingTitle}

                    bridalParty={this.state.mainPageWrapper.bridalParty}
                    venu={this.state.mainPageWrapper.venu}
                    accomodations={this.state.mainPageWrapper.accomodations}
                    faq={this.state.mainPageWrapper.faq}
                    footerContent={this.state.mainPageWrapper.footerContent}
                
                />

            </Fragment>
        );
    }
}

export default WeddingPage; 