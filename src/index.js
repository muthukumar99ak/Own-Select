import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import Select from "./select";
class App extends React.Component {
  render() {
    let options1 = ["apple", "banana", "orange", "strawberry"];
    let options2 = [
      { id: "jan", value: "january" },
      { id: "feb", value: "february" },
      { id: "mar", value: "march" }
    ];
    return (
      <Grid>
        <Row>
          <Col xs={6}>
            <h3>Create Select box for Arrays</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Select
              options={options1}
              defaultValue={"apple"}
              onSelect={(value) => {}}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <h3>Create Select box for Objects</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Select
              options={options2}
              defaultValue={"apple"}
              onSelect={(value) => {}}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
