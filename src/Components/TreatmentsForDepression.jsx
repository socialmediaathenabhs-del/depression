import React, { useState, useEffect } from "react";
import vector from '../assets/Depression/vector_treatments.png';
import innerBg from '../assets/Depression/treatments_innerBg.png';
import left_leaf from '../assets/Depression/left_leaf.png';
import right_leaf from '../assets/Depression/right_leaf.png';
import des_img from '../assets/Depression/treatment_img1.png';

const tabData = {
  therapies: {
    label: "Therapies",
    image: {
      src: des_img,
      alt: "Therapy session image showing three people smiling and talking in a cozy room with natural light",
    },
    content: [
      { title: "Cognitive Behavioral Therapy (CBT):", text: "Focuses on changing negative thought patterns." },
      { title: "Interpersonal Therapy (IPT):", text: "Addresses interpersonal issues contributing to depression." },
      { title: "Psychodynamic Therapy:", text: "Explores unconscious processes and past experiences." },
      { title: "Group Therapy:", text: "Provides support from others experiencing similar issues." },
      { title: "Postpartum Therapist:", text: "Specialized in treating postpartum depression." },
    ],
  },
  lifestyle: {
    label: "Lifestyle Changes",
    image: {
      src: des_img,
      alt: "Image representing lifestyle changes such as exercise, diet, and sleep",
    },
    content: [
      { title: "Regular Exercise:", text: "Helps improve mood and reduce anxiety." },
      { title: "Healthy Diet:", text: "Balanced nutrition supports brain health." },
      { title: "Adequate Sleep:", text: "Improves emotional regulation and energy." },
      { title: "Stress Management:", text: "Techniques like meditation and yoga can help." },
      { title: "Social Interaction:", text: "Maintaining relationships supports mental health." },
    ],
  },
  professional: {
    label: "Professional Help",
    image: {
      src: des_img,
      alt: "Image showing a professional counselor or therapist in session",
    },
    content: [
      { title: "Psychiatrists:", text: "Medical doctors who can prescribe medications." },
      { title: "Psychologists:", text: "Provide therapy and counseling services." },
      { title: "Counselors:", text: "Offer support and guidance for mental health." },
      { title: "Social Workers:", text: "Assist with resources and therapy." },
      { title: "Support Groups:", text: "Peer support for shared experiences." },
    ],
  },
  specialized: {
    label: "Specialized Care",
    image: {
      src: des_img,
      alt: "Image representing specialized care such as hospital or clinic",
    },
    content: [
      { title: "Inpatient Treatment:", text: "Hospital stays for severe depression." },
      { title: "Electroconvulsive Therapy (ECT):", text: "Used for treatment-resistant depression." },
      { title: "Transcranial Magnetic Stimulation (TMS):", text: "Non-invasive brain stimulation therapy." },
      { title: "Medication Management:", text: "Specialized monitoring of antidepressants." },
      { title: "Intensive Outpatient Programs:", text: "Structured therapy without hospitalization." },
    ],
  },
  help: {
    label: "Help and Support",
    image: {
      src: des_img,
      alt: "Image showing people supporting each other in a group",
    },
    content: [
      { title: "Crisis Hotlines:", text: "Immediate help for urgent situations." },
      { title: "Family Support:", text: "Involving loved ones in recovery." },
      { title: "Community Resources:", text: "Access to local mental health services." },
      { title: "Online Forums:", text: "Peer support and shared experiences." },
      { title: "Self-Help Tools:", text: "Apps and books for managing depression." },
    ],
  },
};

const TreatmentsForDepression = () => {
  const [activeTab, setActiveTab] = useState("therapies");
  const { label, image, content } = tabData[activeTab];
  const [bgSize, setBgSize] = useState('1050px 570px');



  useEffect(() => {
    const updateBgSize = () => {
      if (window.innerWidth < 640) {
        setBgSize('260px 800px'); // mobile size
      } else {
        setBgSize('1050px 570px'); // default size
      }
    };

    updateBgSize(); // run on mount
    window.addEventListener('resize', updateBgSize);

    return () => window.removeEventListener('resize', updateBgSize);
  }, []);

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-[330px] sm:max-w-[1100px] mx-auto mt-12 mb-20 bg-[#15357A] rounded-tl-[20px] rounded-tr-[100px] rounded-br-[20px] rounded-bl-[100px] px-6 py-4 relative overflow-hidden min-h-[570px] max-h-[880px] z-10">
        <div
          className="max-w-[1100px] mx-auto flex flex-col h-full"
          style={{
            backgroundImage: `url(${innerBg})`,
            backgroundSize: bgSize,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',

          }}
        >
          <div className="px-6 py-6 sm:px-10 sm:py-10">
            <h1 className="text-white font-extrabold text-[26px] sm:text-[32px] md:text-[36px] leading-tight text-center">
              TREATMENTS FOR DEPRESSION
            </h1>
            <p className="text-white text-center mt-3 max-w-[600px] mx-auto text-[14px] sm:text-[15px] md:text-[16px]">
              Treatment For Depression Often Involves A Combination Of Medications,
              Therapy, And Lifestyle Changes
            </p>

            {/* Scrollable tab nav */}
            <nav className="mt-6 flex justify-start overflow-x-auto whitespace-nowrap px-2 py-1 bg-[#2E4A8B] rounded-full text-white text-[14px] sm:text-[15px] md:text-[16px] font-normal select-none scrollbar-hide sm:justify-center sm:overflow-visible">
              {Object.keys(tabData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-1 rounded-full whitespace-nowrap transition mx-1 ${
                    activeTab === key
                      ? "bg-white text-[#15357A] font-semibold"
                      : "hover:bg-[#3B5EAE]"
                  }`}
                >
                  {tabData[key].label}
                </button>
              ))}
            </nav>

            <div className="mt-10 flex flex-col md:flex-row md:space-x-10 flex-grow">
              <div className="flex-1 max-w-[480px] overflow-auto">
                <ul className="list-disc list-inside text-white text-[14px] sm:text-[15px] md:text-[16px] space-y-3 min-h-[290px]">
                  {content.map((item, index) => (
                    <li key={index}>
                      <span className="font-semibold">{item.title}</span> {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative flex-shrink-0 mt-8 md:mt-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-[20px] object-cover w-[500px]"
                />
                <div className="absolute left-0 top-[220px] -translate-y-1/2 rounded-r-[20px] w-10 h-[200px] flex flex-col items-center justify-center">
                  <span className="text-white text-[12px] font-normal tracking-widest leading-tight origin-center rotate-90 select-none">
                    {label}
                  </span>
                  <div className="w-[1px] h-8 bg-white mt-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative images */}
      <img
        src={left_leaf}
        alt="Decorative top left"
        className="absolute -top-40 left-0 w-[600px] h-[800px] pointer-events-none select-none z-1"
      />
      <img
        src={right_leaf}
        alt="Decorative bottom right"
        className="absolute -bottom-30 right-0 sm:left-[850px] sm:w-[600px] sm:h-[900px] pointer-events-none select-none z-1"
      />
      <img
        src={vector}
        alt="Gradient divider"
        className="w-full absolute top-130 left-20"
      />
    </div>
  );
};

export default TreatmentsForDepression;







// import React, { useState } from "react";
// import vector from '../assets/Depression/vector_treatments.png';
// import innerBg from '../assets/Depression/treatments_innerBg.png';
// import left_leaf from '../assets/Depression/left_leaf.png';
// import right_leaf from '../assets/Depression/right_leaf.png';
// import des_img from '../assets/Depression/treatment_img1.png'



// const tabData = {
//   therapies: {
//     label: "Therapies",
//     image: {
//       src: des_img,
//       alt: "Therapy session image showing three people smiling and talking in a cozy room with natural light",
//     },
//     content: [
//       { title: "Cognitive Behavioral Therapy (CBT):", text: "Focuses on changing negative thought patterns." },
//       { title: "Interpersonal Therapy (IPT):", text: "Addresses interpersonal issues contributing to depression." },
//       { title: "Psychodynamic Therapy:", text: "Explores unconscious processes and past experiences." },
//       { title: "Group Therapy:", text: "Provides support from others experiencing similar issues." },
//       { title: "Postpartum Therapist:", text: "Specialized in treating postpartum depression." },
//     ],
//   },
//   lifestyle: {
//     label: "Lifestyle Changes",
//     image: {
//       src: des_img,
//       alt: "Image representing lifestyle changes such as exercise, diet, and sleep",
//     },
//     content: [
//       { title: "Regular Exercise:", text: "Helps improve mood and reduce anxiety." },
//       { title: "Healthy Diet:", text: "Balanced nutrition supports brain health." },
//       { title: "Adequate Sleep:", text: "Improves emotional regulation and energy." },
//       { title: "Stress Management:", text: "Techniques like meditation and yoga can help." },
//       { title: "Social Interaction:", text: "Maintaining relationships supports mental health." },
//     ],
//   },
//   professional: {
//     label: "Professional Help",
//     image: {
//       src: des_img,
//       alt: "Image showing a professional counselor or therapist in session",
//     },
//     content: [
//       { title: "Psychiatrists:", text: "Medical doctors who can prescribe medications." },
//       { title: "Psychologists:", text: "Provide therapy and counseling services." },
//       { title: "Counselors:", text: "Offer support and guidance for mental health." },
//       { title: "Social Workers:", text: "Assist with resources and therapy." },
//       { title: "Support Groups:", text: "Peer support for shared experiences." },
//     ],
//   },
//   specialized: {
//     label: "Specialized Care",
//     image: {
//       src: des_img,
//       alt: "Image representing specialized care such as hospital or clinic",
//     },
//     content: [
//       { title: "Inpatient Treatment:", text: "Hospital stays for severe depression." },
//       { title: "Electroconvulsive Therapy (ECT):", text: "Used for treatment-resistant depression." },
//       { title: "Transcranial Magnetic Stimulation (TMS):", text: "Non-invasive brain stimulation therapy." },
//       { title: "Medication Management:", text: "Specialized monitoring of antidepressants." },
//       { title: "Intensive Outpatient Programs:", text: "Structured therapy without hospitalization." },
//     ],
//   },
//   help: {
//     label: "Help and Support",
//     image: {
//       src: des_img,
//       alt: "Image showing people supporting each other in a group",
//     },
//     content: [
//       { title: "Crisis Hotlines:", text: "Immediate help for urgent situations." },
//       { title: "Family Support:", text: "Involving loved ones in recovery." },
//       { title: "Community Resources:", text: "Access to local mental health services." },
//       { title: "Online Forums:", text: "Peer support and shared experiences." },
//       { title: "Self-Help Tools:", text: "Apps and books for managing depression." },
//     ],
//   },
// };

// const TreatmentsForDepression = () => {
//   const [activeTab, setActiveTab] = useState("therapies");

//   const { label, image, content } = tabData[activeTab];

//   return (
//     <div className="relative bg-white overflow-hidden ">
//       <div className="max-w-[1100px] mx-auto mt-12 mb-20 bg-[#15357A] rounded-tl-[20px] rounded-tr-[100px] rounded-br-[20px] rounded-bl-[100px] px-6 py-4 relative overflow-hidden min-h-[570px] max-h-[880px] z-10">
//         <div className="max-w-[1100px] mx-auto flex flex-col h-full"
//         style={{
//             backgroundImage:`url(${innerBg})`,
//             // backgroundSize: 'contain',   
//             backgroundSize: '1050px 570px' ,    
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center top',
//         //     height: '900px',                 
//         //    width: '190%'  
            
//           }}>
            
//             <div  className="px-10 py-10">

//           <h1 className="text-white font-extrabold text-[28px] sm:text-[32px] md:text-[36px] leading-tight text-center">
//             TREATMENTS FOR DEPRESSION
//           </h1>
//           <p className="text-white text-center mt-3 max-w-[600px] mx-auto text-[14px] sm:text-[15px] md:text-[16px]">
//             Treatment For Depression Often Involves A Combination Of Medications,
//             Therapy, And Lifestyle Changes
//           </p>

//           <nav className="mt-6 flex justify-center space-x-4 bg-[#2E4A8B] rounded-full px-2 py-1 text-white text-[14px] sm:text-[15px] md:text-[16px] font-normal select-none">
//             {Object.keys(tabData).map((key) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveTab(key)}
//                 className={`px-4 py-1 rounded-full whitespace-nowrap transition ${
//                   activeTab === key
//                     ? "bg-white text-[#15357A] font-semibold"
//                     : "hover:bg-[#3B5EAE]"
//                 }`}
//               >
//                 {tabData[key].label}
//               </button>
//             ))}
//           </nav>

//           <div className="mt-10 flex flex-col md:flex-row md:space-x-10 flex-grow">
//             <div className="flex-1 max-w-[480px] overflow-auto">
//               <ul className="list-disc list-inside text-white text-[14px] sm:text-[15px] md:text-[16px] space-y-3 min-h-[290px]">
//                 {content.map((item, index) => (
//                   <li key={index}>
//                     <span className="font-semibold">{item.title}</span> {item.text}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="relative flex-shrink-0 mt-8 md:mt-0">
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="rounded-[20px] object-cover w-[500px]"
//               />
//               <div className="absolute left-0 top-[220px] -translate-y-1/2 rounded-r-[20px] w-10 h-[200px] flex flex-col items-center justify-center ">
//                 <span className="text-white text-[12px] font-normal tracking-widest leading-tight origin-center rotate-90 select-none">
//                   {label}
//                 </span>
//                 <div className="w-[1px] h-8 bg-white mt-10"></div>
//               </div>
//             </div>
//           </div>
        
//         </div>


//         </div>
//       </div>

//       {/* Decorative leaf shapes and curve */}
//       <img
//         src={left_leaf}
//         alt="Decorative top left"
//         className="absolute -top-40 left-0 w-[600px] h-[800px] pointer-events-none select-none z-1"
//       />
//       <img
//         src={right_leaf}
//         alt="Decorative bottom right"
//         className="absolute -bottom-30 right-0 sm:left-[850px] sm:w-[600px] sm:h-[900px] pointer-events-none select-none z-1"
//       />
      
//       <img
//         src={vector} 
//         alt="Gradient divider"
//         className="w-full absolute top-130 left-20"
//       />
//     </div>
//   );
// };

// export default TreatmentsForDepression;
