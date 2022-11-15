import "./AboutPage.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from '@mui/icons-material/Email';
const AboutPage = () => {
  return (
    <div
      className="about"
      style={{
        backgroundImage: "url('/Images/airport-5.jpg')",
      }}
    >
      <div className="about-background">
        <div className="about-content">
          <h1>SIA Feedback System</h1>
          <p>
            It collects feedback forms of customer's satisfaction/grievance of
            different aspects of airport. Project is to collect the data
            electronically in the form of an app with selectable parameters and
            rating. The app will be available by default on the free Wi-Fi
            service that SKIT is going to provide at the airport.
          </p>
        </div>

        <h2>Designed & Developed By: </h2>
        <div className="about-developed">
          <div className="developer-div">
            <img
              className="developer-logo"
              src="/Images/sushil-dp.png"
              alt=""
            />
            <h3>Sushil Kumar Sadhnani</h3>
            <div className="about-contact-information">
              <a
                href="https://www.linkedin.com/in/sushil-kumar-sadhnani-1788a0226"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="medium" />
              </a>
              <a
                href="https://www.github.com/Sushil-Sadhnani-17/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon fontSize="medium" />
              </a>
              <a
                href="https://www.instagram.com/sushil_sadhnani_17/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon fontSize="medium" />
              </a>
              <a
                href="https://www.facebook.com/sushil.sadhnani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon fontSize="medium" />
              </a>
              <a href="mailto:sadhnani.sushil@gmail.com">
                <EmailIcon fontSize="medium" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
