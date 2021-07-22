import React from "react";
import {
  Container,
  Col,
  Row,
  Button,
  ButtonGroup,
  Image,
} from "react-bootstrap";
import Avatar from '../components/Avatar'

function HomeScreen() {
  return (
      <div>
        <Row>
          <Col md={6} lg={6} xl={6} style={{paddingLeft: '6%', paddingTop: '8%'}}>
            <div className="leftDescriptionBox">
              <div>
                <h1 className='leftTitleSection'>Post When your audience is most active.</h1>
              </div>
              <div>
                <p style={{fontSize: 'larger'}}>
                  With TimeNow, automatically schedule your posts on Twitter,
                  LinkedIn, and Instagram to post when your followers are most
                  active.
                </p>
              </div>
              <div>
                <ButtonGroup size="lg" className="mb-2">
                  <button className="scheduleBtn">Start Scheduling</button>
                  <button className="scheduleBtnTrans">View Demo</button>
                </ButtonGroup>
              </div>
              <div style={{ display: "flex" }}>
                <span>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 18 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0C5.629 2.866 3.516 3 0 3V14.535C0 19.138 3.203 20.339 9 24C14.797 20.339 18 19.138 18 14.535V3C14.484 3 12.371 2.866 9 0ZM8.452 15L5 11.638L6.237 10.399L8.452 12.522L12.834 8.047L14.072 9.285L8.452 15Z"
                      fill="#049372"
                    />
                  </svg>
                </span>
                <p className="pl-3">TimeNow does not sell your data.</p>
                <a
                  href="/"
                  className="pl-2"
                  style={{ textDecoration: "underline" }}
                >
                  {" "}
                  Learn more
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} lg={6} xl={6}>
            <Image className='rightSectionImage' src='../Assets/Mockup.png' />
          </Col>
        </Row>
        <Row style={{paddingTop: '7%', paddingBottom: '7%'}}>
          <Col xs={12} md={6} lg={6} xl={6} style={{paddingLeft: '5rem'}}>
            <h1>TimeNow is used by the most influential people.</h1>
            <div><Avatar /></div>
            
          </Col>
          <Col xs={12} md={6} lg={6} xl={6}>
            <div style={{paddingRight: '20%', paddingLeft: '10%'}}><p>The most influential people on Facebook, Twitter, and Instagram are using TweetNow to schedule posts when their followers are most active.</p>
            <p>They generally receive 23% more engagement than people who do not.</p></div>
            
          </Col>
        </Row>
        <Row className='scheduleRow'>
          <Col xs={12} md={6} lg={6} xl={6} style={{paddingLeft: '5rem'}}>
            <div>
              <p className='unifiedDashboard'>Unified Dashboard</p>
              <h2 className='dashboardTitle'>Customizable dashboard for all platforms.</h2>
              <p>Use Twitter and Instagram but not LinkedIn? You can customize your dashboard to your liking. You can even schedule the same post to individual platforms instead of all platforms.</p>
              <button className='scheduleBtn'>Start Scheduling</button>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} xl={6} style={{paddingLeft: '5rem', paddingRight: '5rem', paddingBottom: '5rem'}}>
          <div>
              <p className='unifiedDashboard'>Enchaced Analytics</p>
              <h2 className='dashboardTitle'>Real-time data that tells your everything.</h2>
              <p>Get detailed reports of what's working and what isn't. Engagement rates, impressions, views, and much more data is available to you through our in-depth dashboard tool.</p>
              <a href='/' style={{color: 'grey', fontWeight: 'bold'}}><p>View live Demo →</p></a>
            </div>
          </Col>
        </Row>
      </div>
  );
}

export default HomeScreen;
