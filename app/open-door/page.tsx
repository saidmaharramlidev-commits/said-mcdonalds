'use client'




import Navbar from "@/components/Navbar"
import SectionHero from "@/components/SectionHero"
import OpenDoor, { formLabels } from "@/data/openDoorData"
import pic from "@/public/openDoor.png"
import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import { TextField, Button, MenuItem } from "@mui/material";
import Footer from "@/components/Footer"
import { locations } from "@/data/locationsData"
import { useState } from "react"
import { navbarData } from "@/data/data"


function page() {

    const { lang } = useSelector((state: RootState) => state.counter)

    const formSpans = formLabels[lang as keyof typeof formLabels]


    const heroText = navbarData[lang as keyof typeof navbarData]

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    return (
        <div id="mainOpenDoor">
            <Navbar />
            <SectionHero text={heroText.main.openDoor.label} pic={pic} />
            <OpenDoor />


            <div className="formContainer">
                <h2 className="formTitle">
                    {formSpans.title}
                </h2>

                <form className="form">
                    <div className="formRow">
                        <TextField
                            label={formSpans.name}
                            variant="outlined"
                            fullWidth
                            className="input"
                            onChange={(e) => setName(e.target.value)}
                        />

                        <TextField
                            label={formSpans.surname}
                            variant="outlined"
                            fullWidth
                            className="input"
                            onChange={(e) => setSurname(e.target.value)}
                        />
                    </div>

                    <div className="formRow">
                        <TextField
                            label={formSpans.phone}
                            placeholder="+994 XX XXX XX XX"
                            variant="outlined"
                            fullWidth
                            className="input"
                            onChange={(e) => setPhone(e.target.value)}
                        />

                        <TextField
                            label={formSpans.email}
                            variant="outlined"
                            fullWidth
                            className="input"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="formColumn">
                        <TextField
                            select
                            label={formSpans.restaurant}
                            defaultValue=""
                            fullWidth
                            className="input"
                        >
                            {locations.map((location: any) => (
                                <MenuItem key={location.name[lang as keyof typeof location]} value={location.name[lang as keyof typeof location]}>
                                    {location.name[lang as keyof typeof location]}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            select
                            label={formSpans.time}
                            defaultValue=""
                            fullWidth
                            disabled
                            className="input"
                        >
                            <MenuItem value=""></MenuItem>

                        </TextField>
                    </div>

                    <Button
                        variant="contained"
                        fullWidth
                        className="submitBtn"
                    >
                        {formSpans.submit}
                    </Button>
                </form>
            </div>

            <Footer />

        </div>
    )
}

export default page