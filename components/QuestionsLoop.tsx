'use client'

import { useState } from "react"

export function QuestionsList({ questions, lang }: { questions: any[], lang: any }) {
    const [visibleCount, setVisibleCount] = useState(6)
    const [search, setSearch] = useState("")

    const handleViewMore = () => {
        setVisibleCount((prev) => prev + 3)
    }

    // 🔍 FILTER FIRST
    const filteredQuestions = questions.filter((q) =>
        q[lang].question.toLowerCase().includes(search.toLowerCase())
    )

    // then slice AFTER filter
    const visibleQuestions = filteredQuestions.slice(0, visibleCount)


    const placeholders = {
        az: "Sualları axtar...",
        en: "Search questions...",
        ru: "Поиск вопросов..."
    }

    return (
        <>
            {/* SEARCH INPUT */}
            <div className="search-wrapper">
                <input
                    className="search-input"
                    type="text"
                    placeholder={placeholders[lang as keyof typeof placeholders]}
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                        setVisibleCount(6) // reset when searching
                    }}
                />
            </div>

            {/* QUESTIONS */}
            <div className="questions-container">
                {visibleQuestions.map((q: any, index: number) => (
                    <div key={index} className="question-card">
                        <h3 className="question-title">
                            {q[lang].question}
                        </h3>
                        <p className="question-answer">
                            {q[lang].answer}
                        </p>
                    </div>
                ))}
            </div>

            {/* VIEW MORE */}
            {visibleCount < filteredQuestions.length && (
                <button className="view-btn" onClick={handleViewMore}>
                    View more
                </button>
            )}
        </>
    )
}