import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("test cases for Header comp", () => {
  //using it instead of test
  it("Should render/load Header comp with a Login button", () => {
    //rendering on jsdom
    render(
      //given it BrowserRouter so that i can understand <Link/>
      <BrowserRouter>
        {/* wrapped in Provider and give access to store so that testing libraray know about Redux */}
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //querying - finding
    //  const loginButton = screen.getByRole("button");

    //to specify the button in multiple buttons
    const loginButton = screen.getByRole("button", { name: "Login" });

    //one more way to find/get
    // const loginButton = screen.getByText("Login");

    //Assertion
    expect(loginButton).toBeInTheDocument();
  });

  //Let's write another test case for Cart items is 0
  it("Should render/load Header comp with a Cart Items 0", () => {
    //rendering on jestdom
    render(
      //given it BrowserRouter so that i can understand <Link/>
      <BrowserRouter>
        {/* wrapped in Provider and give access to store so that testing libraray know about Redux */}
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //querying - finding
    const cartItems = screen.getByText("0");

    //Assertion
    expect(cartItems).toBeInTheDocument();
  });

  //Let's write another test case for Cart Icon is rendered with Header comp or not
  // it("Should render/load Header comp with a Cart Icon", () => {
  //   //rendering on jestdom
  //   render(
  //     //given it BrowserRouter so that i can understand <Link/>
  //     <BrowserRouter>
  //       {/* wrapped in Provider and give access to store so that testing libraray know about Redux */}
  //       <Provider store={appStore}>
  //         <Header />
  //       </Provider>
  //     </BrowserRouter>
  //   );

  //   //querying - finding
  //   const cartIcon = screen.getAllByRole("svg");

  //   //Assertion
  //   expect(cartIcon).toBeInTheDocument();
  // });

  //lets write a test case after clicking login btn it changes to logout or not
  it("Should change Login button to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //querying : finding/getting
    const loginButton = screen.getByRole("button", { name: "Login" });

    //using fireEvent from @testinglib
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    //Assertion
    expect(logoutButton).toBeInTheDocument();
  });

  //Let's write another test case for Online Status
  it("Should render/load Header comp with a Cart Items 0", () => {
    //rendering on jestdom
    render(
      //given it BrowserRouter so that i can understand <Link/>
      <BrowserRouter>
        {/* wrapped in Provider and give access to store so that testing libraray know about Redux */}
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //querying - finding
    const onlineStatus = screen.getByText("Online Status : 🟢");

    //Assertion
    expect(onlineStatus).toBeInTheDocument();
  });

  //Let's write another test case for Logo, whether logo is rendered with Header comp or not
  it("Should render/load Header comp with a Cart Items 0", () => {
    //rendering on jestdom
    render(
      //given it BrowserRouter so that i can understand <Link/>
      <BrowserRouter>
        {/* wrapped in Provider and give access to store so that testing libraray know about Redux */}
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //querying - finding
    const logo = screen.getByAltText("no img");

    //Assertion
    expect(logo).toBeInTheDocument();
  });
});
