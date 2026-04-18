"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"


import { categories, products } from "@/data/menuData"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

export default function Page() {
    const [activeCategory, setActiveCategory] = useState("breakfast")
    const router = useRouter()

    const { lang } = useSelector((state: RootState) => state.counter)

    const filteredProducts = products.filter(
        (p) => p.category === activeCategory
    )

    return (
        <div id="mainMenuPage">
            <Navbar />
            <div className="menu-container">
                {/* Sidebar */}
                <div className="menu-sidebar">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className={`menu-category ${activeCategory === cat.id ? "active" : ""
                                }`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            <Image src={cat.icon} alt={cat.name[lang as keyof typeof cat.name]} />
                            <span>{cat.name[lang as keyof typeof cat.name]}</span>
                        </div>
                    ))}
                </div>

                {/* Products */}
                <div className="menu-content">
                    {filteredProducts.map((item) => (
                        <div
                            key={item.id}
                            className="menu-card"
                            onClick={() => router.push(`/menu/${item.id}`)}
                        >
                            <Image className="menu-card-img" src={item.image} alt={item.name[lang as keyof typeof item.name]} />
                            <p>{item.name[lang as keyof typeof item.name]}</p>
                        </div>
                    ))}
                </div>




            </div>

            <Footer />
        </div>
    )
}