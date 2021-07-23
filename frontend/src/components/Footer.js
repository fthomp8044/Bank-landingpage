import React from 'react'
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";

function Footer() {
    return (
        <footer>
            <div style={{position: 'relative', left:'5%', paddingTop: '5%'}}><svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.009 12.3886C16.238 14.7966 13.61 17.1716 10.65 16.7846C9.849 17.9036 8.955 19.4666 7.962 21.2806L5.666 22.0006C7.609 18.2106 10.203 14.0196 12.986 10.8346C11.781 11.6196 9.801 13.3076 8.078 15.0876C6.524 11.8416 8.163 8.83461 10.536 6.53961C10.469 7.62061 10.949 8.60761 11.308 9.11461C11.246 8.21061 11.352 6.59461 12.012 5.19461C13.335 4.07861 14.504 3.27461 15.841 2.57261C15.624 3.36361 15.808 4.31161 16.063 4.90361C16.179 4.08361 16.666 2.53561 17.23 1.89361C18.897 0.818614 21.365 -0.0423855 24 0.00161449C23.709 1.62461 22.857 4.25961 21.706 5.89461C20.777 6.49161 19.549 6.84061 18.569 7.00961C19.38 7.23761 20.288 7.30262 21.078 7.24462C20.503 8.45162 19.921 9.55561 19.039 10.9106C17.823 11.5896 16.269 11.8886 15.207 11.9456C15.95 12.3346 17.304 12.5626 18.009 12.3886ZM4 21.0006H0V22.0006H4V21.0006Z" fill="#E8704A"/>
                                </svg></div>
            <Row style={{paddingLeft: '1.5rem', paddingTop: '2%'}}>
                <Col className='leftFooterCol'sm={12} md={6} lg={6} xl={6}>
                    <Col sm={6} md={2} lg={2} xl={2}>
                        <div>
                            <ul>
                                <li><h5>Product</h5></li>
                                <li>Homepage</li>
                                <li>Pricing</li>
                                <li>Features</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={6} md={2} lg={2} xl={2}>
                        <div>
                            <ul>
                            <li><h5>Help</h5></li>
                                <li>Live Chat</li>
                                <li>Send Email</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={2} lg={2} xl={2}>
                        <div>
                        <ul>
                        <li><h5>Company</h5></li>
                            <li>About</li>
                            <li>Customers</li>
                            <li>Blog</li>
                        </ul>
                        </div>
                    </Col>

                </Col>
                <Col style={{paddingLeft: '8rem', paddingTop: '1rem'}} sm={12} md={6} lg={6} xl={6}>
                <h6 style={{fontWeight: 'bold'}}>Try TweetNow</h6>
                <InputGroup size='lg' className="mb-3" style={{width: '25rem'}}>
                    <FormControl
                    placeholder="Email Address"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <button className='scheduleBtn' variant="outline-secondary" id="button-addon2">
                    Start Scheduling
                    </button>
                    </InputGroup>
                </Col>

            </Row>
        </footer>
    )
}

export default Footer
