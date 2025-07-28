
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "1. What is the best treatment for depression?",
    answer:
      "The best treatment for depression often includes a combination of medication, psychotherapy, and lifestyle changes tailored to the individual's needs.",
  },
  {
    question: "2. How can I find a depression psychiatrist near me?",
    answer:
      "You can find a depression psychiatrist near you by searching online directories, asking your primary care doctor for referrals, or contacting local mental health clinics.",
  },
  {
    question: "3. What are the different types of depression?",
    answer:
      "Different types of depression include major depressive disorder, persistent depressive disorder (dysthymia), bipolar disorder, seasonal affective disorder, and postpartum depression.",
  },
  {
    question: "4. What are the signs and symptoms of major depression?",
    answer:
      "Signs and symptoms include persistent sadness, loss of interest in activities, changes in appetite or sleep, fatigue, feelings of worthlessness, and difficulty concentrating.",
  },
  {
    question: "5. How can I help someone with depression?",
    answer:
      "You can help by offering support, encouraging them to seek professional help, listening without judgment, and being patient as they recover.",
  },
  {
    question: "6. What are the best therapy options for treating depression?",
    answer:
      "Common therapy options include cognitive-behavioral therapy (CBT), interpersonal therapy (IPT), and psychodynamic therapy.",
  },
  {
    question: "7. Where can I find depression treatment centers near me?",
    answer:
      "You can find treatment centers by searching online, contacting your insurance provider, or asking your healthcare provider for recommendations.",
  },
  {
    question: "8. Can depression be treated without medication?",
    answer:
      "Yes, some people benefit from therapy, lifestyle changes, and alternative treatments without medication, but it depends on the severity of the depression.",
  },
  {
    question: "9. What are the signs of depression in teens?",
    answer:
      "Signs in teens include irritability, withdrawal from friends and activities, changes in sleep and appetite, and declining school performance.",
  },
  {
    question: "10. How do I know if I need inpatient care for depression?",
    answer:
      "Inpatient care may be needed if you have severe symptoms, suicidal thoughts, or require intensive monitoring and treatment.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-white pb-14 sm:pb-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-center text-[32px] font-extrabold text-[#183B82] mb-10">
        Curious? Start Here.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-5xl mx-auto">
        {faqs.map((faq, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              className="border border-gray-300 rounded-xl bg-white overflow-hidden transition-all duration-300"
              style={{
                height: isActive ? "180px" : "72px",
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleFAQ(index);
                  }
                }}
                aria-expanded={isActive}
                aria-controls={`faq${index}`}
                id={`faq${index}-btn`}
                className={`w-full text-left flex justify-between items-center py-4 px-6 text-base font-normal cursor-pointer h-[72px] transition-colors duration-300 ${
                  isActive ? "bg-[#183b82] text-white" : "text-black"
                }`}
              >
                <span className="w-full pr-4">{faq.question}</span>
                <span
                  className={`w-11 h-10 rounded-full bg-white ${
                    isActive ? "text-[#183b82]" : "bg-[#183b82] text-[#183b82]"
                  } flex items-center justify-center transition-transform duration-300 ${
                    isActive ? "rotate-180" : ""
                  }`}
                >
                  <FaChevronDown />
                </span>
              </button>

              <div
                id={`faq${index}`}
                role="region"
                aria-labelledby={`faq${index}-btn`}
                className={`transition-opacity duration-300 px-6 text-[15px] text-gray-700 border-t border-gray-300 ${
                  isActive ? "opacity-100 pt-4" : "opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQSection;


// import React, { useState } from "react";
// import { FaChevronDown } from "react-icons/fa";

// const faqs = [
//   {
//     question: "1. What is the best treatment for depression?",
//     answer:
//       "The best treatment for depression often includes a combination of medication, psychotherapy, and lifestyle changes tailored to the individual's needs.",
//   },
//   {
//     question: "2. How can I find a depression psychiatrist near me?",
//     answer:
//       "You can find a depression psychiatrist near you by searching online directories, asking your primary care doctor for referrals, or contacting local mental health clinics.",
//   },
//   {
//     question: "3. What are the different types of depression?",
//     answer:
//       "Different types of depression include major depressive disorder, persistent depressive disorder (dysthymia), bipolar disorder, seasonal affective disorder, and postpartum depression.",
//   },
//   {
//     question: "4. What are the signs and symptoms of major depression?",
//     answer:
//       "Signs and symptoms include persistent sadness, loss of interest in activities, changes in appetite or sleep, fatigue, feelings of worthlessness, and difficulty concentrating.",
//   },
//   {
//     question: "5. How can I help someone with depression?",
//     answer:
//       "You can help by offering support, encouraging them to seek professional help, listening without judgment, and being patient as they recover.",
//   },
//   {
//     question: "6. What are the best therapy options for treating depression?",
//     answer:
//       "Common therapy options include cognitive-behavioral therapy (CBT), interpersonal therapy (IPT), and psychodynamic therapy.",
//   },
//   {
//     question: "7. Where can I find depression treatment centers near me?",
//     answer:
//       "You can find treatment centers by searching online, contacting your insurance provider, or asking your healthcare provider for recommendations.",
//   },
//   {
//     question: "8. Can depression be treated without medication?",
//     answer:
//       "Yes, some people benefit from therapy, lifestyle changes, and alternative treatments without medication, but it depends on the severity of the depression.",
//   },
//   {
//     question: "9. What are the signs of depression in teens?",
//     answer:
//       "Signs in teens include irritability, withdrawal from friends and activities, changes in sleep and appetite, and declining school performance.",
//   },
//   {
//     question: "10. How do I know if I need inpatient care for depression?",
//     answer:
//       "Inpatient care may be needed if you have severe symptoms, suicidal thoughts, or require intensive monitoring and treatment.",
//   },
// ];

// const FAQSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <div className="bg-white  pb-14 sm:pb-20 px-6 max-w-7xl mx-auto">
//       <h1 className="text-center text-[32px] font-extrabold text-[#183B82] mb-10">
//         Curious? Start Here.
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-5xl mx-auto">
//         {faqs.map((faq, index) => {
//           const isActive = index === activeIndex;

//           return (
//             <div
//               key={index}
//               className={`border border-gray-300 rounded-xl bg-white overflow-hidden transition-all duration-300`}
//               style={{
//                 height: isActive ? "180px" : "72px",
//               }}
//             >
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" || e.key === " ") {
//                     e.preventDefault();
//                     toggleFAQ(index);
//                   }
//                 }}
//                 aria-expanded={isActive}
//                 aria-controls={`faq${index}`}
//                 id={`faq${index}-btn`}
//                 className="w-full text-left flex justify-between items-center py-4 px-6 text-base text-black font-normal cursor-pointer h-[72px]"
//               >
//                 <span className="w-full pr-4">{faq.question}</span>
//                 <span
//                   className={`w-11 h-10 rounded-full bg-[#183b82] text-white flex items-center justify-center transition-transform duration-300 ${
//                     isActive ? "rotate-180" : ""
//                   }`}
//                 >
//                   <FaChevronDown />
//                 </span>
//               </button>

//               <div
//                 id={`faq${index}`}
//                 role="region"
//                 aria-labelledby={`faq${index}-btn`}
//                 className={`transition-opacity duration-300 px-6 text-[15px] text-gray-700 border-t border-gray-300 ${
//                   isActive ? "opacity-100 pt-4" : "opacity-0"
//                 }`}
//               >
//                 {faq.answer}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default FAQSection;









// "use client";

// import React, { useState } from "react";
// import { FaChevronDown } from "react-icons/fa";

// const faqs = [
//   {
//     question: "1. What is the best treatment for depression?",
//     answer:
//       "The best treatment for depression often includes a combination of medication, psychotherapy, and lifestyle changes tailored to the individual's needs.",
//   },
//   {
//     question: "2. How can I find a depression psychiatrist near me?",
//     answer:
//       "You can find a depression psychiatrist near you by searching online directories, asking your primary care doctor for referrals, or contacting local mental health clinics.",
//   },
//   {
//     question: "3. What are the different types of depression?",
//     answer:
//       "Different types of depression include major depressive disorder, persistent depressive disorder (dysthymia), bipolar disorder, seasonal affective disorder, and postpartum depression.",
//   },
//   {
//     question: "4. What are the signs and symptoms of major depression?",
//     answer:
//       "Signs and symptoms include persistent sadness, loss of interest in activities, changes in appetite or sleep, fatigue, feelings of worthlessness, and difficulty concentrating.",
//   },
//   {
//     question: "5. How can I help someone with depression?",
//     answer:
//       "You can help by offering support, encouraging them to seek professional help, listening without judgment, and being patient as they recover.",
//   },
//   {
//     question: "6. What are the best therapy options for treating depression?",
//     answer:
//       "Common therapy options include cognitive-behavioral therapy (CBT), interpersonal therapy (IPT), and psychodynamic therapy.",
//   },
//   {
//     question: "7. Where can I find depression treatment centers near me?",
//     answer:
//       "You can find treatment centers by searching online, contacting your insurance provider, or asking your healthcare provider for recommendations.",
//   },
//   {
//     question: "8. Can depression be treated without medication?",
//     answer:
//       "Yes, some people benefit from therapy, lifestyle changes, and alternative treatments without medication, but it depends on the severity of the depression.",
//   },
//   {
//     question: "9. What are the signs of depression in teens?",
//     answer:
//       "Signs in teens include irritability, withdrawal from friends and activities, changes in sleep and appetite, and declining school performance.",
//   },
//   {
//     question: "10. How do I know if I need inpatient care for depression?",
//     answer:
//       "Inpatient care may be needed if you have severe symptoms, suicidal thoughts, or require intensive monitoring and treatment.",
//   },
// ];

// const FAQSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <div className="bg-white py-10 px-6 max-w-7xl mx-auto">
//       <h1 className="text-center text-[32px] font-extrabold text-[#183B82] mb-10">
//         Curious? Start Here.
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-5xl mx-auto">
//         {faqs.map((faq, index) => {
//           const isActive = index === activeIndex;
//           return (
//             <div
//               key={index}
//               className={`faq-item relative border rounded-xl border-gray-300 bg-white overflow-hidden transition-all duration-300 ${
//                 isActive ? "active" : ""
//               }`}
//             >
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" || e.key === " ") {
//                     e.preventDefault();
//                     toggleFAQ(index);
//                   }
//                 }}
//                 aria-expanded={isActive}
//                 aria-controls={`faq${index}`}
//                 id={`faq${index}-btn`}
//                 className="faq-question w-full text-left flex justify-between items-center py-4 px-6 text-base text-black font-normal cursor-pointer"
//               >
//                 <span className="w-full pr-4">{faq.question}</span>
//                 <span
//                   className={`arrow-circle w-10 h-10 rounded-full bg-[#183b82] text-white flex items-center justify-center transition-transform ${
//                     isActive ? "rotate-180" : ""
//                   }`}
//                 >
//                   <FaChevronDown />
//                 </span>
//               </button>

//               {isActive && (
//                 <div
//                   id={`faq${index}`}
//                   role="region"
//                   aria-labelledby={`faq${index}-btn`}
//                   className="faq-answer absolute top-full left-0 w-full bg-white border-t border-gray-300 px-6 py-6 text-[15px] text-gray-700 shadow-md z-10"
//                 >
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default FAQSection;
