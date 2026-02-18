import Software1 from "../../assets/images/software-logos/software-logos-1.png";
import Software2 from "../../assets/images/software-logos/software-logos-2.png";
import Software3 from "../../assets/images/software-logos/software-logos-3.png";
import Software4 from "../../assets/images/software-logos/software-logos-4.png";
import Software5 from "../../assets/images/software-logos/software-logos-5.png";
import Software6 from "../../assets/images/software-logos/software-logos-6.png";
import Software7 from "../../assets/images/software-logos/software-logos-7.png";
import Software8 from "../../assets/images/software-logos/software-logos-8.png";
import Software9 from "../../assets/images/software-logos/software-logos-9.png";
import Software10 from "../../assets/images/software-logos/software-logos-10.png";
import Software11 from "../../assets/images/software-logos/software-logos-11.png";
import Software12 from "../../assets/images/software-logos/software-logos-12.png";
import Software13 from "../../assets/images/software-logos/software-logos-13.png";
import Software14 from "../../assets/images/software-logos/software-logos-14.png";
import Software15 from "../../assets/images/software-logos/software-logos-15.png";
import Software16 from "../../assets/images/software-logos/software-logos-16.png";
import Software17 from "../../assets/images/software-logos/software-logos-17.png";
import Software18 from "../../assets/images/software-logos/software-logos-18.png";
import Software19 from "../../assets/images/software-logos/software-logos-19.png";
import Software20 from "../../assets/images/software-logos/software-logos-20.png";
import Software21 from "../../assets/images/software-logos/software-logos-21.png";
import Company1 from "../../assets/images/company-logos/company-logos-1.png";
import Company2 from "../../assets/images/company-logos/company-logos-2.png";
import Company3 from "../../assets/images/company-logos/company-logos-3.png";
import Company4 from "../../assets/images/company-logos/company-logos-4.png";
import Company5 from "../../assets/images/company-logos/company-logos-5.png";
import Company6 from "../../assets/images/company-logos/company-logos-6.png";
import Company7 from "../../assets/images/company-logos/company-logos-7.png";
import Company8 from "../../assets/images/company-logos/company-logos-8.png";
import Company9 from "../../assets/images/company-logos/company-logos-9.png";
import Company10 from "../../assets/images/company-logos/company-logos-10.png";
import Company11 from "../../assets/images/company-logos/company-logos-11.png";
import Company12 from "../../assets/images/company-logos/company-logos-12.png";
import { useState } from "react";

const Expertise = () => {
  const tabMenu = [
    { title: " Design & Development", id: 1 },
    { title: " Digital Marketing", id: 2 },
    { title: "  Artificial Intelligence", id: 3 },
  ];
  const [tab, setTab] = useState(1);

  console.log(tab)

  return (
    <div className="container">
      <div className="text-center">
        <h2 className="mb-2">
          Our{" "}
          <span className="gradient-text-border heading-text b3net">
            Expertise
          </span>
        </h2>
        <p className="subheading-text">
          We innovate at the intersection of design and technology. Our team
          crafts high-performing websites, apps, and marketing strategies
          powered by creativity, precision, and cutting-edge digital trends.
        </p>
      </div>

      <div className="d-flex justify-content-center mb-3 mb-md-4">
        <ul
          className="nav nav-tabs justify-content-center mb-2 mt-4 mb-md-4"
          id="expertiseTab"
          role="tablist"
        >
          {tabMenu?.map((data, index) => {
            return (
              <li className="nav-item" role="presentation" key={data.id}>
                <button
                  className={`nav-link ${tab == data.id ? "active" : ""}`}
                //   data-bs-toggle="tab"
                //   data-bs-target="#design"
                  type="button"
                  
                  onClick={() => setTab(data.id)}
                >
                  {data.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="tab-content">
        {tab == 1 ? (
           <div className={`tab-pane fade ${tab === 1 ? "show active" : ""}`} id="design">
            <div className="skills-flex">
              {[
                Software1,
                Software2,
                Software3,
                Software4,
                Software5,
                Software6,
                Software7,
                Software8,
                Software9,
                Software10,
                Software11,
                Software12,
                Software13,
                Software14,
                Software15,
                Software16,
                Software17,
                Software18,
                Software19,
                Software20,
                Software21,
              ].map((img, i) => (
                <div className="skill-box" key={i}>
                  <img src={img} className="img-fluid" alt="" />
                </div>
              ))}
            </div>
          </div>
        ) : tab == 2 ? (
          <div className={`tab-pane fade ${tab === 2 ? "show active" : ""}`} id="marketing">
            <div className="skills-flex">
              <div className="skill-box p-2 p-md-3 border-img bg-white text-center">
                <img
                  src="https://www.b3net.com/wp-content/themes/b3net/assets/images/tools/Google-search-console.png"
                  className="img-fluid"
                />
              </div>
              <div className="skill-box p-2 p-md-3 border-img bg-white text-center">
                <img
                  src="https://www.b3net.com/wp-content/themes/b3net/assets/images/tools/Google-Analytics.png"
                  className="img-fluid"
                />
              </div>
              <div className="skill-box p-2 p-md-3 border-img bg-white text-center">
                <img
                  src="https://www.b3net.com/wp-content/themes/b3net/assets/images/tools/Semrush.png"
                  className="img-fluid"
                />
              </div>
              <div className="skill-box p-2 p-md-3 border-img bg-white text-center">
                <img
                  src="https://www.b3net.com/wp-content/themes/b3net/assets/images/tools/ahrefs.png"
                  className="img-fluid"
                />
              </div>
              <div className="skill-box p-2 p-md-3 border-img bg-white text-center">
                <img
                  src="https://www.b3net.com/wp-content/themes/b3net/assets/images/tools/HubSpot.png"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className={`tab-pane fade ${tab === 3 ? "show active" : ""}`} id="ai">
            <div className="skills-flex">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <div
                  className="skill-box p-2 p-md-3 border-img bg-white text-center"
                  key={n}
                >
                  <img
                    src={`https://www.b3net.com/wp-content/themes/b3net/assets/images/design/ai-${n}.jpg`}
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="trust-business mt-4 mt-md-5">
        <div className="container">
          <h3 className="trust-subheading text-center">
            Trusted by{" "}
            <span className="gradient-text-border heading-text">
              Businesses Nationwide
            </span>
          </h3>

          <div className="skills-flex">
            {[
              Company1,
              Company2,
              Company3,
              Company4,
              Company5,
              Company6,
              Company7,
              Company8,
              Company9,
              Company10,
              Company11,
              Company12,
            ].map((img, i) => (
              <div className="skill-box" key={i}>
                <img src={img} className="img-fluid" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
