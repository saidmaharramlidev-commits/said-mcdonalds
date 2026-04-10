'use client'

import { TextField, MenuItem, Checkbox, FormControlLabel, Button } from '@mui/material'


import Navbar from "@/components/Navbar"
import { applyFormText } from "@/data/applyData"
import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import { useState } from 'react'
import { locations } from '@/data/locationsData'
import { formLabels } from '@/data/openDoorData'
import Footer from '@/components/Footer'

function page() {

    const { lang } = useSelector((state: RootState) => state.counter)

    const applyText = applyFormText[lang as keyof typeof applyFormText]

    const [flexible, setFlexible] = useState(false)

    const formSpans = formLabels[lang as keyof typeof formLabels]



    return (
        <div id="mainApplyPage">
            <Navbar />

            <div id="container-apply">
                <h1 className="form-title">{applyText.title}</h1>

                <h2 className="form-subtitle">{applyText.personalInfo}</h2>

                <div className='apply-col-wrapper'>
                    {/* LEFT */}
                    <div className="col">
                        <TextField
                            label={`${applyText.name}`}
                            variant="standard"
                            fullWidth
                            className='input-apply'
                        />

                        <TextField
                            label={`${applyText.surname}`}
                            variant="standard"
                            fullWidth
                            className='input-apply'
                        />

                        <TextField
                            label={`${applyText.fatherName}`}
                            variant="standard"
                            fullWidth
                            className='input-apply'
                        />



                        <TextField
                            label={`${applyText.email}`}
                            variant="standard"
                            fullWidth
                            className='input-apply'
                        />


                        <TextField
                            label={`${applyText.phone}`}
                            variant="standard"
                            fullWidth
                            className='input-apply'
                        />



                        <TextField
                            select
                            label={`${applyText.gender}`}
                            variant="standard"
                            fullWidth
                            className='input-apply'
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </TextField>

                        <TextField
                            label={applyText.birthDate}
                            type="date"
                            variant="standard"
                            fullWidth
                            className='input-apply'
                            InputLabelProps={{ shrink: true }}

                        />



                        <TextField
                            select
                            label={`${applyText.city}`}
                            variant="standard"
                            fullWidth
                            className='input-apply'
                        >
                            <MenuItem value="baku">Baku</MenuItem>
                            <MenuItem value="Xazar">Xazar Rayon</MenuItem>
                            <MenuItem value="Sabuncu">Sabuncu Rayon</MenuItem>
                            <MenuItem value="Xirdalan">Xirdalan Rayon</MenuItem>
                        </TextField>

                        <TextField
                            label={`${applyText.address}`}
                            variant="standard"
                            fullWidth
                            className='field-apply-address input-apply'
                        />
                    </div>
                </div>


                <h2 className="form-subtitle mt-10">{applyText.blackList}</h2>

                <div className='apply-col-wrapper'>
                    <div className="col">
                        <TextField
                            select
                            label={`${applyText.vacancies}`}
                            variant="standard"
                            fullWidth
                            className='input-apply'
                        >
                            <MenuItem value="cashier">Technician</MenuItem>
                            <MenuItem value="cook">Crew</MenuItem>
                        </TextField>


                        <TextField
                            label={`${applyText.startDate}`}
                            type="time"
                            variant="standard"
                            fullWidth
                            className='input-apply'
                            InputLabelProps={{ shrink: true }}
                        />
                    </div>

                </div>

                {/* Checkbox */}
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={flexible}
                            onChange={(e) => setFlexible(e.target.checked)}
                        />
                    }
                    label={applyText.flexibleHours}
                    className="checkbox"
                />

                {/* CONDITIONAL TIME FIELDS */}
                {!flexible && (
                    <>
                        <div className='apply-col-wrapper'>
                            <div className='col'>
                                <TextField
                                    label={`${applyText.startTime}`}
                                    type="time"
                                    variant="standard"
                                    className='input-apply'
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                />


                                <TextField
                                    label={`${applyText.endTime}`}
                                    type="time"
                                    variant="standard"
                                    className='input-apply'
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                />
                            </div>
                        </div>
                    </>
                )}



                <h2 className="form-subtitle mt-10">{applyText.additionalInfo}</h2>

                <div className='apply-col-wrapper'>
                    <div className='additionalInfo-col'>
                        <TextField
                            label={`${applyText.photo}`}
                            variant="standard"
                            type='file'
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            className='field-apply-address input-apply'
                        />
                        <TextField
                            label={`${applyText.healthCondition}`}
                            variant="standard"
                            fullWidth
                            className='field-apply-address input-apply'
                        />
                        <TextField
                            label={`${applyText.about}`}
                            variant="standard"
                            fullWidth
                            className='field-apply-address input-apply'
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                />
                            }
                            label={applyText.workedBefore}
                            className="checkbox"
                        />

                        <TextField
                            select
                            label={applyText.restaurant}
                            defaultValue=""
                            fullWidth
                            className="input "
                        >
                            {locations.map((location: any) => (
                                <MenuItem key={location.name[lang as keyof typeof location]} value={location.name[lang as keyof typeof location]}>
                                    {location.name[lang as keyof typeof location]}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            select
                            label={`${applyText.militaryService}`}
                            variant="standard"
                            fullWidth
                            className='input-apply'
                        >
                            <MenuItem value="cashier">Yes</MenuItem>
                            <MenuItem value="cook">No</MenuItem>
                        </TextField>


                        <p className='mt-5 note-apply'>{applyText.note}</p>


                        <Button
                            variant="contained"
                            fullWidth
                            className="submitBtn"
                            id='submitCta-apply'
                        >
                            {formSpans.submit}
                        </Button>
                    </div>

                </div>

            </div>

            <Footer />



        </div>
    )
}

export default page