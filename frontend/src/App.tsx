import { Component } from "react";
import { Header } from "./components/Header";
import { NavRouter } from "./routers/nav.routes";

export class App extends Component {

  render() {
    return (
      <>
        <Header />
          <NavRouter />
      </>
    )
  }
}

