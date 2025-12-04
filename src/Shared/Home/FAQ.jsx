import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How does this posture corrector work?",
            answer:
                "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain better posture naturally. Over time, this support helps reduce strain and discomfort, improving posture and confidence."
        },
        {
            question: "Is it suitable for all ages and body types?",
            answer:
                "Yes, the product is designed to be adjustable and suitable for people of different ages and body types."
        },
        {
            question: "Does it really help with back pain and posture improvement?",
            answer:
                "Consistent use improves muscle memory and can reduce pain caused by poor posture."
        },
        {
            question: "Does it cause issues because it vibrates alerts?",
            answer:
                "The vibration alerts are gentle and customizable for user comfort."
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-0 py-16 sm:py-20">

            {/* Section Header */}
            <div className="text-center mb-10 px-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                    Frequently Asked Question (FAQ)
                </h2>
                <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                    Achieve proper alignment, reduce strain, and strengthen your body with ease!
                </p>
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
                {faqs.map((item, i) => (
                    <div
                        key={i}
                        className={`border border-gray-200 shadow-sm rounded-xl transition-all duration-300 
                            ${openIndex === i ? "bg-accent text-white" : "bg-white"}
                        `}
                    >
                        <button
                            onClick={() => toggleFAQ(i)}
                            className="w-full flex justify-between items-center px-4 sm:px-5 py-3 sm:py-4 text-left"
                        >
                            <span className={`font-medium text-sm sm:text-base ${openIndex === i ? "text-white" : "text-gray-700"}`}>
                                {item.question}
                            </span>
                            <IoIosArrowDown
                                className={`transition-all text-lg 
                                    ${openIndex === i ? "rotate-180 text-white" : "rotate-0 text-gray-600"}
                                `}
                            />
                        </button>

                        {openIndex === i && (
                            <div className="px-4 sm:px-5 pb-4 text-gray-100 sm:text-sm text-xs leading-relaxed">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Optional Button */}
            {/* <div className="text-center mt-10">
                <button className="bg-secondary px-6 py-3 rounded-full text-white">
                    See More FAQ’s →
                </button>
            </div> */}
        </div>
    );
}
