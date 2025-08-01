


import React, { useState, useEffect } from "react";
import vector from '../assets/Depression/vector_treatments.png';
import innerBg from '../assets/Depression/treatments_innerBg.png';
import left_leaf from '../assets/Depression/left_leaf.png';
import right_leaf from '../assets/Depression/right_leaf.png';
import des_img from '../assets/Depression/treatment_img1.png';
import helpAndsupport from '../assets/Depression/medicalHelp.png';
import specialCare from '../assets/Depression/specialCare.png';
import professionalHelp from '../assets/Depression/professionalhelp.png';
import physicalActivity from '../assets/Depression/physicalActivity.png';

import mobileBg from '../assets/Depression/innerBG_mobile.png';



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
      src: physicalActivity,
      alt: "Image representing lifestyle changes such as exercise, diet, and sleep",
    },
    content: [
      { title: "Exercise:", text: "Regular physical activity can help reduce symptoms." },
      { title: "Diet:", text: "Eating a balanced diet can improve mood and energy levels." },
      { title: "Sleep:", text: "Ensuring adequate rest is crucial for mental health." },
    ],
  },
  professional: {
    label: "Professional Help",
    image: {
      src: professionalHelp,
      alt: "Image showing a professional counselor or therapist in session",
    },
    content: [
      { title: "Psychiatrists:", text: "Comprehensive care involves addressing both depression and anxiety symptoms." },
      { title: "Psychologists:", text: "For therapy and counselling, look for the best psychologist for depression and anxiety." },
      { title: "Counselors:", text: "Offer support and guidance for mental health." },
      { title: "Support Groups:", text: "Peer support for shared experiences." },
    ],
  },
  specialized: {
    label: "Specialized Care",
    image: {
      src: specialCare,
      alt: "Image representing specialized care such as hospital or clinic",
    },
    content: [
      { title: "Postpartum Depression:", text: "If you're facing symptoms, seek immediate care. Early treatment can make a big difference." },
      { title: "Clinical Depression:", text: "Also known as MDD, it needs professional help. Consult the best depression or psychiatric doctor in Delhi." },
      { title: "Persistent Depression:", text: "A long-term condition requiring ongoing care and management." },
    ],
  },
  help: {
    label: "Help and Support",
    image: {
      src: helpAndsupport,
      alt: "Image showing people supporting each other in a group",
    },
    content: [
      { title: "Depression Support:", text: "Joining support groups or forums can provide emotional backing." },
      { title: "Depression Self-Help:", text: "Incorporating self-help strategies like exercise, healthy eating, and mindfulness can aid recovery." },
      { title: "Depression Helpline:", text: "In case of an emergency, don’t hesitate to reach out to a mental hospital number or a mental hospital no. for immediate assistance." },
    ],
  },
};

const TreatmentsForDepression = () => {
  const [activeTab, setActiveTab] = useState("therapies");
  const { label, image, content } = tabData[activeTab];
  const [bgSize, setBgSize] = useState('1050px 570px');
  const [openSection, setOpenSection] = useState('lifestyle');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);


  const toggleSection = (key) => {
    setOpenSection(prev => (prev === key ? '' : key));
  };

  //Mobile view 
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 640);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    


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






  // Mobile Data 
  const sections = [
    {
      key: 'therapies',
      title: 'Therapies',
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <span className="font-semibold text-gray-300">Cognitive Behavioral Therapy (CBT)</span>:Focuses on changing negative thought patterns.
          </li>
          <li>
            <span className="font-semibold text-gray-300">Interpersonal Therapy (IPT)</span>: Addresses interpersonal issues contributing to depression.
          </li>
          <li>
            <span className="font-semibold text-gray-300">Psychodynamic Therapy</span>: Explores unconscious processes and past experiences.
          </li>
          <li>
            <span className="font-semibold text-gray-300">Group Therapy</span>: Provides support from others experiencing similar issues.
          </li>
          <li>
            <span className="font-semibold text-gray-300">Postpartum Therapist</span>: Specialized in treating postpartum depression.
          </li>
        </ul>
      ),
    },
    {
      key: 'lifestyle',
      title: 'Lifestyle Changes',
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <span className="font-semibold text-gray-300">Exercise</span>: Regular physical activity can help reduce symptoms.
          </li>
          <li>
            <span className="font-semibold text-gray-300">Diet</span>: Eating a balanced diet can improve mood and energy levels.
          </li>
          <li>
            <span className="font-semibold text-gray-300">Sleep</span>: Ensuring adequate rest is crucial for mental health.
          </li>
        </ul>
      ),
    },
    {
      key: 'professional',
      title: 'Professional Help',
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <span className="font-semibold text-gray-300">Psychiatrists</span>: Comprehensive care involves addressing both depression and anxiety symptoms.
          </li>
          <li>
            <span className="font-semibold text-gray-300">Psychologists</span>: For therapy and counselling, look for the best psychologist for depression and anxiety.
          </li>
          <li>
            <span className="font-semibold text-gray-300">Counselors</span>: Offer support and guidance for mental health.
          </li>
          <li>
            <span className="font-semibold text-gray-300">Support Groups</span>:  Peer support for shared experiences.
          </li>
        </ul>
      
      ),
    },
    {
      key: 'specialized',
      title: 'Specialized Care',
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <span className="font-semibold text-gray-300">Postpartum Depression</span>:  If you're facing symptoms, seek immediate care. Early treatment can make a big difference.
          </li>
          <li>
            <span className="font-semibold text-gray-300">Clinical Depression</span>: Also known as MDD, it needs professional help. Consult the best depression or psychiatric doctor in Delhi.
          </li>
          <li>
            <span className="font-semibold text-gray-300">Persistent Depression</span>: A long-term condition requiring ongoing care and management.
          </li>
        </ul>
      ),
    },
    {
      key: 'support',
      title: 'Help and Support',
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <span className="font-semibold text-gray-300">Depression Support</span>:  Joining support groups or forums can provide emotional backing.
          </li>
          <li>
            <span className="font-semibold text-gray-300">Depression Self-Help</span>: Incorporating self-help strategies like exercise, healthy eating, and mindfulness can aid recovery.
          </li>
          <li>
            <span className="font-semibold text-gray-300">Depression Helpline</span>: In case of an emergency, don’t hesitate to reach out to a mental hospital number or a mental hospital no. for immediate assistance.
          </li>
        </ul>
      ),
    },
    {
      key: 'readmore',
      title: 'Read More',
      content: (
        <p>
          For more info, consult medical websites or speak with a healthcare professional.
        </p>
      ),
    },
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-[330px] sm:max-w-[1100px] mx-auto sm:mt-12 sm:mb-20 bg-[#15357A] rounded-tl-[20px] rounded-tr-[100px] rounded-br-[20px] rounded-bl-[100px] px-6 py-4 relative overflow-hidden sm:min-h-[570px] sm:max-h-[880px] z-10">
        <div
          className="max-w-[1100px] mx-auto flex flex-col h-full"
          style={
            isMobile
              ? {} // No background image on mobile
              : {
                  backgroundImage: `url(${innerBg})`,
                  backgroundSize: bgSize,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                }
          }
        >
          <div className="px-6 py-10 sm:px-10 sm:py-10">
            <h1 className="text-white font-extrabold text-[26px] sm:text-[32px] md:text-[36px] leading-tight text-center">
              TREATMENTS FOR DEPRESSION
            </h1>
            <p className="text-white text-center mt-3 max-w-[600px] mx-auto text-[14px] sm:text-[15px] md:text-[16px]">
              Treatment For Depression Often Involves A Combination Of Medications,
              Therapy, And Lifestyle Changes
            </p>


            {/* Mobile View Only  */}
            {/* <div className=" sm:hidden block mt-6 mb-6 border border-white text-sm text-left">
        {sections.map(({ key, title, content }) => (
          <div key={key}>
            <div className="border-b border-white w-full">
              <button
                type="button"
                onClick={() => toggleSection(key)}
                className="w-full p-3 text-left font-semibold text-white hover:underline focus:outline-none"
                aria-expanded={openSection === key}
              >
                {title}
              </button>
            </div>
            {openSection === key && (
              <div className="border-b border-white p-3 text-gray-300">
                {content}
              </div>
            )}
          </div>
        ))}
      </div> */}


<div className="sm:hidden block mt-6 mb-6 border border-white text-sm text-left rounded-[20px]">
  {sections.map(({ key, title, content }, index) => {
    const isLast = index === sections.length - 1;
    const isOpen = openSection === key;

    return (
      <div key={key}>
        {/* Button with conditional bottom border */}
        <div
          className={`w-full ${
            !isLast || isOpen ? 'border-b border-white' : ''
          }`}
        >
          <button
            type="button"
            onClick={() => toggleSection(key)}
            className="w-full p-3 text-left font-semibold text-white hover:underline focus:outline-none"
            aria-expanded={isOpen}
          >
            {title}
          </button>
        </div>

        {/* Content without bottom border */}
        {isOpen && (
          <div
            className={`p-3 text-gray-300 ${
              !isLast ? 'border-b border-white' : ''
            }`}
          >
            {content}
          </div>
        )}
      </div>
    );
  })}
</div>


      {/* <div className="relative p-[2px] rounded-lg "
      style={{
        background: `
    radial-gradient(
      circle at center,
      rgba(255,255,255,0) 0%,
      rgba(255,255,255,0.3) 60%,
      rgba(255,255,255,0.7) 85%,
      rgba(255,255,255,1) 100%
    )
  `
      }}>
  <div className="bg-blue-900 rounded-lg p-4">
    <h1>hello</h1>
  </div>
</div> */}




            {/* Tab Navigation */}
            <div className="hidden sm:block">
            <nav className="mt-6 flex justify-start overflow-x-auto whitespace-nowrap px-2 py-1 bg-[#2E4A8B] rounded-full text-white text-[14px] sm:text-[15px] md:text-[16px] font-normal select-none scrollbar-hide sm:justify-between sm:overflow-visible">
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
            </div>

            {/* Content Area */}
            <div className="hidden sm:flex mt-10 flex flex-col md:flex-row sm:justify-between md:space-x-10 flex-grow">
              <div className="flex-1 max-w-[500px] overflow-auto">
                <ul className="space-y-4 text-white text-sm sm:text-base">
                  {content.map((item, index) => (
                    <li key={index} className="relative pl-6 list-none">
                      <span className="absolute left-0 top-0 text-white">•</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Images */}
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
        className="w-full absolute top-134 left-20"
      />
    </div>
  );
};

export default TreatmentsForDepression;


