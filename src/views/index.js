import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  CardText,
} from "reactstrap";

// Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNetworkWired,
  faFileContract,
  faAddressBook,
  faCube,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center" id="what">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title font-weight-bold">
                  What is blockchain technology?
                </h2>
                <h5>
                  The blockchain is simply a public, immutable ledger that is
                  used for processing, tracking, and managing assets. These
                  assets can be digital (music, pictures, copyrights, etc.), or
                  they can be physical (houses, cars, clothes, etc.). This
                  public ledger is highly secure due to it being immutable and
                  the use of advanced cryptography.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Key aspects of the blockchain
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <FontAwesomeIcon icon={faNetworkWired}></FontAwesomeIcon>
                  </div>
                  <div>
                    <h4 className="info-title pb-3 font-weight-bold">
                      Distributed Technology
                    </h4>
                    <p className="text-center">
                      Anybody who wants access to the ledger is able to see
                      every transactions that has taken place. The blockchain
                      program is run by millions of computers on the network,
                      all running the same program. When a transaction takes
                      place, it only ever happens once on the network, meaning
                      there is no duplication. Every computer on the network has
                      to verify a transaction before its accepted.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
                  </div>
                  <div>
                    <h4 className="info-title pb-3 font-weight-bold">
                      The Immutable Ledger
                    </h4>
                    <p className="text-center">
                      This the most powerful aspect of the blockchain. Once
                      there is any changes to the ledger, it is permanent. Any
                      attempts to change the ledger will result in the network
                      canceling the attempt. If there was a previous mistake in
                      a transaction, a new one has to be issued as the old one
                      can not be changed. The old one is still viewable as it is
                      forever public on the chain.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <FontAwesomeIcon icon={faFileContract}></FontAwesomeIcon>
                  </div>
                  <div>
                    <h4 className="info-title pb-3 font-weight-bold">
                      Smart Contracts
                    </h4>
                    <p className="text-center">
                      Smart contracts are essentiality a set of rules stored on
                      the blockchain that are executed automatically. These
                      contracts are how people, companies, and organizations
                      communicate with the blockchain. They are written in a
                      specific programming language that allow complex tasks to
                      take place. These smart contracts are what allow the
                      highly advanced applications of the blockchain to be
                      possible.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section bg-info" id="how">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center title font-weight-bold">How does blockchain work?</h2>
                <br />
              </Col>
            </Row>
            <Row>
              <img
                src="https://img.icons8.com/ios-filled/50/000000/chain-start.png"
                className="mx-auto"
                alt=""
              />
            </Row>
            <Row className="text-center mt-3">
              <div className="mx-auto">
                <Card style={{height: "15rem" }}>
                  <CardBody>
                    <div className="icon">
                      <FontAwesomeIcon
                        className="h1"
                        icon={faCube}
                      ></FontAwesomeIcon>
                    </div>
                    <CardTitle className="h3 font-weight-bold pb-3">
                      Creation of the block
                    </CardTitle>
                    <CardText>
                      When a transaction happens, the data of the transaction gets but into a "block". The data that is in the block
                      can be any type of data as long it can be represented in some way 
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </Row>
            <Row>
              <img
                src="https://img.icons8.com/ios-filled/50/000000/chain-intermidiate.png"
                className="mx-auto"
                alt=""
              />
            </Row>
            <Row className="mt-3 text-center">
              <div className="mx-auto">
                <Card className="" style={{height: "15rem" }}>
                  <CardBody>
                    <div className="icon">
                      <FontAwesomeIcon
                        className="h1"
                        icon={faCubes}
                      ></FontAwesomeIcon>
                    </div>
                    <CardTitle className="h3 font-weight-bold pb-3">
                      Linking the blocks
                    </CardTitle>
                    <CardText>
                      After a block is created, it is then linked the previous link, and then later linked to the block in front of it. Each 
                      blocks contains the exact time and transactions that took place. 
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </Row>
            <Row>
              <img
                src="https://img.icons8.com/ios-filled/50/000000/chain-intermidiate.png"
                className="mx-auto"
                alt=""
              />
            </Row>
            <Row className="mt-3 text-center">
              <div className="info mx-auto">
                <Card className="" style={{height: "15rem" }}>
                  <CardBody>
                    <div className="icon">
                      <img
                        src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-blockchain-fintech-becris-lineal-becris.png"
                        alt=""
                      />
                    </div>
                    <CardTitle className="h3 font-weight-bold pb-3">
                      The chain is formed
                    </CardTitle>
                    <CardText>
                      The continuous and constant action of linking blocks creates the blockchain. As the blockchain grows, it gets even more secure as
                      each block is a layer of verification and tamper protection. 
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </Row>
            <Row>
              <img
                src="https://img.icons8.com/ios-filled/50/000000/chain-end.png"
                className="mx-auto"
                alt=""
              />
            </Row>
          </Container>
        </div>
        <div className="section text-center" id="uses">
          <Container>
            <h2 className="title font-weight-bold">Uses of blockchain technology</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img src="https://img.icons8.com/fluency/96/000000/ethereum.png" alt=''/>
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4" className='font-weight-bold'>Cryptocurrency</CardTitle>
                        <h6 className="card-category">
                          Bitcoin, Ether, DaiCoin, Etc.
                        </h6>
                      </div>
                    </a>
                    <p className="text-center">
                      Cryptocurrencies are the most popular use of the blockchain. Many people mistake cryptocurrencies as the block chain, but in truth,
                      the blockchain is what enables cryptocurrencies. Cryptocurrencies are used like regular currency, however, their prices fluctuate more than
                      physical currency. 
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src="https://img.icons8.com/nolan/96/bank-building.png" alt=''/>
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4" className='font-weight-bold'>Decentralized Finance</CardTitle>
                        <h6 className="card-category">Banking, Exchanges, Investing, Etc.</h6>
                      </div>
                    </a>
                    <p className="text-center">
                      As one would need a bank to store their wealth, cryptocurrencies can be stored in decentralized applications. These applications
                      act like an actual bank with the ability to get loans and earn interest. All their actions are public on the blockchain so users
                      can see and verify how their money is being handled. 
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src="https://img.icons8.com/nolan/96/supplier.png" alt=''/>
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4" className='font-weight-bold'>Supply Chain</CardTitle>
                        <h6 className="card-category">
                          Connecting suppliers worldwide
                        </h6>
                      </div>
                    </a>
                    <p className="text-center">
                      The blockchain does a great job of tracking history. Due to his fact, many industries are using the blockchain
                      to know where supplies came from and when. Using this information, they can verify the quality of products and have proof
                      of purchase in case of a dispute with a supplier. 
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section bg-info text-center" id='quotes'>
          <Container>
            <h2 className="title font-weight-bold">Quotes from professionals</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img src='https://images.huffingtonpost.com/2017-01-05-1483625642-9743081-13419266_878318540481_5832556764925168795_n.jpg' alt=''></img>
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4" className='font-weight-bold'>Don & Alex Tapscott</CardTitle>
                        <h6 className="card-category">Experts in blockchain technology</h6>
                      </div>
                    </a>
                    <p className="text-center">
                    “The blockchain is an incorruptible digital ledger of economic transactions that can be programmed to record not just financial transactions but virtually everything of value.”
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img src='https://informationcradle.com/wp-content/uploads/2020/05/Patrick-Byrne-Photo.jpg' alt=''></img>
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4" className='font-weight-bold'>Patrick M. Byrne</CardTitle>
                        <h6 className="card-category">Former CEO of Overstock.com</h6>
                      </div>
                    </a>
                    <p className="text-center">
                    “There is an opportunity to recreate the financial world as we know it in the parallel universe that is the blockchain. We are writing rules for this whole new universe.”
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img src='https://d.ibtimes.co.uk/en/full/1477489/wm.gif' alt=''></img>
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4" className='font-weight-bold'>William Mougayar</CardTitle>
                        <h6 className="card-category">Author of The Business Blockchain</h6>
                      </div>
                    </a>
                    <p className="text-center">
                    “You have to think of the blockchain as a new utility. It is a new utility network for moving value, moving assets.”
                    </p>
                  </CardBody>\
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default Index;
