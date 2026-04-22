'use client'


import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { QuestionsList } from "@/components/QuestionsLoop"
import SectionHero from "@/components/SectionHero"
import { questions } from "@/data/quizData"
import pic from '@/public/quiz.jpg'
import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"


function page() {

    const { lang } = useSelector((state: RootState) => state.counter)




    return (
        <div id="mainQuestions">
            <Navbar />
            <SectionHero text="Questions" pic={pic} />





            <QuestionsList questions={questions} lang={lang} />

            <Footer />
        </div>
    )
}

export default page