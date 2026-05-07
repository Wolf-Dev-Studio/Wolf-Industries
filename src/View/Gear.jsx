import React from 'react';
import NavbarGear from '../Component/Gear/NavbarGear';
import Gear from '../Component/Gear/HeroGear';
import SpecGridGear from '../Component/Gear/SpecGear';
import FieldReportGear from '../Component/Gear/ReportGear';
import ProductForgeGear from '../Component/Gear/ProductGear';
import FooterGear from '../Component/Gear/FooterGear';

const GearView = () => {
    return (
        <div className="bg-black min-h-screen overflow-hidden">
            <NavbarGear />
            <Gear />
            <SpecGridGear />
            <ProductForgeGear />
            <FieldReportGear />
            <FooterGear />
        </div>
    );
};

export default GearView;