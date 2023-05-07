import React from "react";
import {
  Button,
  Icon,
  Container,
  Segement,
  Grid,
  Segment,
} from "semantic-ui-react";
import "semantic-ui-css/components/icon.css";
import "semantic-ui-css/components/button.css";
import "semantic-ui-css/components/grid.css";
import "semantic-ui-css/components/container.css";
import "../style/element.css";

const FloatingSocials = () => {
  return (
    <Grid
      columns={1}
      verticalAlign="middle"
      vertical
      className="floating-socials"
    >
      <Grid.Column textAlign="center">
        <Grid.Row>
          <Button animated="fade" className="scbtn ui circular     blue ">
            <Button.Content hidden className="scbtn">
              Facebook
            </Button.Content>
            <Button.Content visible className="scbtn">
              <Icon
                size="big"
                name="facebook "
                style={{ margin: 0 }}
                className="ui circular icon"
              />
            </Button.Content>
          </Button>
        </Grid.Row>
        <Grid.Row>
          <Button animated="fade" className="scbtn ui circular     blue ">
            <Button.Content hidden className="scbtn">
              Github
            </Button.Content>
            <Button.Content visible className="scbtn">
              <Icon
                size="big"
                name="github "
                style={{ margin: 0 }}
                className="ui circular icon"
              />
            </Button.Content>
          </Button>
        </Grid.Row>
        <Grid.Row>
          <Button animated="fade" className="scbtn ui circular     blue ">
            <Button.Content hidden className="scbtn">
              Twiter
            </Button.Content>
            <Button.Content visible className="scbtn">
              <Icon
                size="big"
                name="Twiter "
                style={{ margin: 0 }}
                className="ui circular icon"
              />
            </Button.Content>
          </Button>
        </Grid.Row>
        <Grid.Row>
          <Button animated="fade" className="scbtn ui circular     blue ">
            <Button.Content hidden className="scbtn">
              Linkedin
            </Button.Content>
            <Button.Content visible className="scbtn">
              <Icon
                size="big"
                name="linkedin "
                style={{ margin: 0 }}
                className="ui circular icon"
              />
            </Button.Content>
          </Button>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  );
};

export { FloatingSocials };
