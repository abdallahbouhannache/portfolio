/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { InView } from "react-intersection-observer";
import backgroundImg from "./pexels-lumn-311039.jpg";
import "../style/home.css";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Flag,
  Form,
  GridRow,
  GridColumn,
  Label,
} from "semantic-ui-react";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const skills = [
  { txt: "python", icon: "code" },
  { txt: "javascript", icon: "code" },
  { txt: "java", icon: "code" },
  { txt: "node", icon: "code" },
  { txt: "express", icon: "code" },
  { txt: "jquery", icon: "code" },
  { txt: "Django", icon: "code" },
  { txt: "gatsby", icon: "code" },
  { txt: "mysql&sql", icon: "code" },
  { txt: "bootstrap", icon: "code" },
  { txt: "semantic-ui", icon: "code" },
  { txt: "react", icon: "code" },
  { txt: "css", icon: "code" },
  { txt: "NPM-YARN", icon: "terminal" },
  { txt: "webpack ", icon: "code" },
  { txt: "bash-script", icon: "code" },
  { txt: "network tools", icon: "code" },
  { txt: "bash", icon: "terminal" },
  { txt: "git@github", icon: "code branch" },
  { txt: "docker", icon: "code" },
];

const Projects = [
  {
    name: "docker",
    pic: "code",
    detail:
      "here you find project description adipiscing elit. Sed euismod ante euismod dolor hendrerit ultricies.",
  },
  {
    name: "docker",
    pic: "code",
    detail:
      "here you find project description adipiscing elit. Sed euismod ante euismod dolor hendrerit ultricies.",
  },
];

const AboutMe = ({ mobile }) => (
  <Grid container stackable centered columns={2} padded={mobile ? true : false}>
    <GridRow>
      <Container className="ui text">
        <Header as="h3">About Me</Header>
        <p>just small description of my skills</p>
      </Container>
    </GridRow>
    <GridRow>
      <GridColumn>
        <Grid className={mobile ? "centered padded " : ""}>
          <Grid.Column>
            <Segment raised>
              <Label as="a" color="black" ribbon>
                Overview
              </Label>
              <span>Academic background</span>
              <p
                className="container justified ui"
                style={{
                  fontFamily: "fangsong",
                  padding: "0.70em 0px",
                  textAlign: "justify",
                  fontSize: "1.2em",
                }}
              >
                As a computer science graduate with five years of study, I have
                gained a broad range of skills and expertise in various areas of
                computing. My education covered both general computing concepts
                and the basics of digital information, as well as more
                specialized training in software development, computer
                networking, and communications.
              </p>

              <Label as="a" color="blue" ribbon>
                Practice
              </Label>
              <span>Personal</span>
              <p
                className="container justified ui"
                style={{ fontSize: "1.33em" }}
              >
                I have completed a year-long course training on Google platform
                in automation using the Python language, which has helped me to
                develop a deep understanding of automation and scripting.
                Additionally, I have gained experience and knowledge in web
                development and full-stack development through a year of
                training and practice on freecodecamp. I have also developed
                proficiency in Linux operating system and have gained some basic
                knowledge of security. In addition, I have invested multiple
                hours in honing my skills in Docker and virtualization. Overall,
                I bring a strong set of skills and experience to any team, and I
                am eager to apply my expertise to new and exciting projects.
              </p>
            </Segment>
          </Grid.Column>
        </Grid>
      </GridColumn>
      {console.log(mobile)}
      <GridColumn>
        <Header as="h3">My Skill</Header>
        <Grid columns={mobile ? 2 : 4} rows={2}>
          {skills.map((skil) => (
            <Grid.Column key={skil.txt}>
              <Button
                style={{ margin: "0.1em", whiteSpace: "nowrap" }}
                animated="vertical"
              >
                <Button.Content visible>{skil.txt}</Button.Content>
                <Button.Content hidden>
                  <Icon name={skil.icon} />
                </Button.Content>
              </Button>
            </Grid.Column>
          ))}
        </Grid>
      </GridColumn>
    </GridRow>
  </Grid>
);

const Footer = ({ mobile }) => (
  <Segment inverted vertical style={{ padding: "5em 0em" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">Contact Us</List.Item>
              <List.Item as="a">Terms and Conditions</List.Item>
              <List.Item as="a">Privacy Policy</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as="h4" content="Footer Header" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              bibendum lectus sed justo eleifend ultricies.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

const Project = ({ mobile }) => (
  <Segment style={{ border: "0" }}>
    <Header
      as="h1"
      content="Projects"
      style={{
        fontSize: mobile ? "2em" : "3em",
        marginBottom: mobile ? "0.2em" : "0.4em",
        marginTop: mobile ? "1.5em" : "2em",
        textAlign: "center",
        textTransform: "uppercase",
      }}
    />
    <Container className="text" textAlign="justified">
      <p style={{ fontSize: "1.33em" }}>
        here you find some about Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed euismod ante euismod dolor hendrerit ultricies.
        Nunc hendrerit dolor ac faucibus blandit. Nulla facilisi. Integer eget
        enim sit amet turpis placerat maximus ac ac lorem. Donec sit amet enim
        ut nisi semper consequat vel sit amet
      </p>
      <Divider />
    </Container>

    <div size="small">
      <Grid centered stackable container columns={2}>
        {/* mobile={16} tablet={8} computer={4} */}
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <Image src={require("./dopefolio.jpeg")} />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            ProjectName
          </Header>
          <p
            className="ui text"
            style={{ fontSize: "1.33em", textAlign: "justify" }}
          >
            here you find project description adipiscing elit. Sed euismod ante
            euismod dolor hendrerit ultricies.
          </p>
        </Grid.Column>
      </Grid>

      {Projects.map((proj) => (
        <Grid centered stackable container columns={2}>
          {/* mobile={16} tablet={8} computer={4} */}
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <Image src={require("./dopefolio.jpeg")} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              {proj.name}
            </Header>
            <p
              className="ui text"
              style={{ fontSize: "1.33em", textAlign: "justify" }}
            >
              {proj.detail}
            </p>
          </Grid.Column>
        </Grid>
      ))}
      {/* {prj.map((size) => (
        <Segment key={size} size={size}>
          It's a {size} segment
        </Segment>
      ))} */}
    </div>
  </Segment>
);

const Contact = ({ mobile }) => (
  <Segment style={{ padding: "5em 0em" }} vertical>
    <Container>
      <Grid
        style={{
          borderRadius: "2em",
          backgroundColor: "rgb(144 174 197 / 5%)",
          padding: "2em",
          border: "1px solid #0000001a",
        }}
        columns={2}
        divided
        stackable
      >
        <Grid.Row>
          <Grid.Column>
            <Header as="h3" centered content="Contact Us" />
            <p
              className="text ui"
              style={{ textAlign: "justify", fontSize: "1.33em" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              bibendum lectus sed justo eleifend ultricies.
            </p>
            <Form>
              <Form.Field>
                <label>Name</label>
                <input placeholder="Name" />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input placeholder="Email" />
              </Form.Field>
              <Form.Field>
                <label>Message</label>
                <textarea placeholder="Message" />
              </Form.Field>
              <Button className=" circular" floated="left" type="submit">
                Submit
              </Button>
            </Form>
          </Grid.Column>
          <Grid.Column>
            <Header as="h3" content="Visit Us" />
            <p>
              123 Main Street
              <br />
              Anytown, USA 12345
              <br />
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@example.com
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text className="homelanding">
    <Header
      as="h1"
      content="Computer Engineer"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: mobile ? "0.2em" : "0.4em",
        marginTop: mobile ? "1.5em" : "3em",
      }}
    />
    <p className="ui text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ante
      euismod dolor hendrerit ultricies. Nunc hendrerit dolor ac faucibus
      blandit. Nulla facilisi. Integer eget enim sit amet turpis placerat
      maximus ac ac lorem. Donec sit amet enim ut nisi semper consequat vel sit
      amet
    </p>

    <Button
      style={{
        marginTop: mobile ? "1.5em" : "1.5em",
      }}
      primary
      size="huge"
    >
      Projects
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  toggleFixedMenu = (inView) => this.setState({ fixed: !inView });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <InView onChange={this.toggleFixedMenu}>
          <Segment
            textAlign="center"
            raised="true"
            style={{
              border: "0px solid",
              padding: "0px 0 10em 0",
              minHeight: "400px",
            }}
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              size="large"
              style={{
                backgroundColor: fixed ? null : "#2185d0b8",
                borderRadius: "0%",
                border: "0px solid",
                margin: "0",
              }}
              className="menuheader"
            >
              <Container inverted>
                <Menu.Item className="borderless " as="a">
                  Home
                </Menu.Item>
                <Menu.Item className="borderless" as="a">
                  Work
                </Menu.Item>
                <Menu.Item className="borderless" as="a">
                  Projects
                </Menu.Item>
                <Menu.Item className="borderless" as="a">
                  About
                </Menu.Item>
                <Menu.Item className="borderless" as="a">
                  Contact
                </Menu.Item>
                <Menu.Item className="borderless" position="right">
                  <Image
                    color="yellow"
                    avatar
                    src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                  />
                  <p
                    color="red"
                    style={{ margin: "0", padding: "0 0.4em 0 0.1em" }}
                  >
                    ABDALLAH BOUHANANCHE
                  </p>
                  <Flag name="dz" />
                </Menu.Item>
              </Container>
            </Menu>
            <div
              className="bglanding"
              style={{
                backgroundImage: `url(${backgroundImg})`,
              }}
            ></div>

            <HomepageHeading />
          </Segment>
        </InView>

        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
            className="small"
          >
            <Menu.Item
              className="borderless"
              style={{
                display: "Flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Image
                color="yellow"
                avatar
                src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
              />
              <p
                color="red"
                style={{
                  margin: "0",
                  padding: "0 0.4em 0 0.1em",
                  width: "min-content",
                }}
              >
                ABDALLAH BOUHANANCHE
              </p>
              <Flag name="dz" />
            </Menu.Item>
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Bouhannache </Menu.Item>
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Projects</Menu.Item>
            <Menu.Item as="a">About</Menu.Item>
            <Menu.Item as="a">Contact</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
               <div
              className="bglanding"
              style={{
                backgroundImage: `url(${backgroundImg})`,
              }}
            ></div>
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                </Menu>
              </Container>
             
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Project />
    <AboutMe />
    <Contact />
    <Footer />
  </ResponsiveContainer>
);

export default HomepageLayout;
