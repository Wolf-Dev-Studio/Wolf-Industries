import React from 'react';
import NavbarAltier from '../Component/Altier/NavbarAltier';
import Atelier from '../Component/Altier/HeroAltier';
import CollectionAltier from '../Component/Altier/CollectionAltier';
import SocialProof from '../Component/Altier/SocialProofAltier';
import Offer from '../Component/Altier/OfferAltier';
import Footer from '../Component/Altier/FooterAltier';

const AltierView = () => {
    return (
        <div className="bg-black min-h-screen overflow-hidden">
            <NavbarAltier />
            <Atelier />
            <SocialProof />
            <CollectionAltier />
            <Offer />
            <Footer />
        </div>
    );
};

export default AltierView;