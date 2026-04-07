'use client'

import Navbar from "@/components/Navbar"
import SectionHero from "@/components/SectionHero"
import { navbarData } from "@/data/data"
import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import pic from '@/public/localtions.png'
import { locations } from "@/data/locationsData"
import Footer from "@/components/Footer"



function page() {
    const { lang } = useSelector((state: RootState) => state.counter)

    const endpoints = navbarData[lang as keyof typeof navbarData]


    return (
        <div id='mainLocationsPage'>
            <Navbar />
            <SectionHero pic={pic} text={endpoints.main.locations.label} />


            <div id="location-wrapper">
                {locations.map((location) => (
                    <div key={location.id} className="location">
                        <h1>{location.name[lang as keyof typeof location.name]}</h1>

                        <p className="address">
                            {location.address[lang as keyof typeof location.address]}
                        </p>

                        <span className="info">{location.phone}</span>
                        <span className="info">
                            {location.workingHours}
                        </span>

                        {location.driveThru && (
                            <span className="tag drive">
                                <p>Drive Thru:</p>
                                {location.driveThru}
                            </span>
                        )}

                        {location.delivery && (
                            <span className="tag delivery">
                                <p>Delivery: </p>
                                {location.delivery}
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <Footer />

        </div>
    )
}

export default page