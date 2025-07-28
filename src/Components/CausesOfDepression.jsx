
import React from "react";
import bgImg from '../assets/Depression/vector_cause.png';
import broken_heart from '../assets/Depression/broken-heart.png';
import mental_disorder from '../assets/Depression/mental-disorder.png';
import depressed from '../assets/Depression/depressed.png';
import no_alcohol from '../assets/Depression/no-alcohol.png';




const causes = [
  {
    title: "Relationship\nIssues",
    imgSrc:broken_heart,
    alt: "Black icon of a broken heart symbolizing relationship issues",
  },
  {
    title: "Trauma",
    imgSrc:mental_disorder,
    alt: "Black line icon of a head with scribbles inside symbolizing trauma",
  },
  {
    title: "Work\nStress",
    imgSrc:depressed,
    alt: "Black line icon of a stressed person working on a laptop symbolizing work stress",
  },
  {
    title: "Substance\nAbuse",
    imgSrc:no_alcohol,
    alt: "Black line icon of a bottle and pills symbolizing substance abuse",
  },
];

const VerticalSeparator = () => (
  <div className="hidden sm:block h-30 w-[2px] bg-[linear-gradient(to_bottom,transparent_0%,transparent_12%,rgba(0,0,0,0)_12%,rgba(0,0,0,1)_50%,rgba(0,0,0,0)_88%,transparent_88%,transparent_100%)]" aria-hidden="true" />
);

const CausesOfDepression = () => {
  return (

    <div className="bg-white flex justify-center p-6 max-w-7xl mx-auto sm:h-[700px] sm:mt-20 "
    
      >
      <div className="relative max-w-7xl w-full bg-white pt-10 pb-14 px-6 sm:px-10 md:px-16 lg:px-20 rounded-tl-[100px] rounded-bl-[100px] overflow-hidden sm:h-[800px] sm:w-[1200px]"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: '1100px 600px',        
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        // height: '400px',                   
        // width: '100%'                     
      }}
      >
        <div className="relative z-10 text-center sm:mt-10">
          <h2 className="text-[#163683] font-extrabold text-2xl sm:text-[56px] leading-tight">
            CAUSES OF DEPRESSION
          </h2>
          <p className="text-black mt-2 max-w-4xl mx-auto text-sm sm:text-[22px] leading-snug">
            The Exact Causes Of Depression Are Not Fully Understood, But Several
            Factors May Contribute, Including:
          </p>

          <div className="mt-10 flex flex-wrap justify-center sm:justify-between items-center gap-6">
            {causes.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center max-w-[180px]">
                  <img
                    src={item.imgSrc}
                    alt={item.alt}
                    className="w-35 h-35"
                    loading="lazy"
                    width="64"
                    height="64"
                  />
                  <button
                    type="button"
                    className="mt-6 w-full h-[48px] border border-[#1B3A82] rounded-md py-2 text-[#1B3A82] text-center text-sm font-medium leading-tight whitespace-pre-line"
                  >
                    {item.title}
                  </button>
                </div>
                {index !== causes.length - 1 && <VerticalSeparator />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default CausesOfDepression;
