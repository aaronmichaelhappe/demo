/* eslint-disable no-undef */
import HeaderLoggedInPartial from "@/views/partials/HeaderLoggedInPartial.vue";
// eslint-disable-next-line no-unused-vars
import firebaseConfig from "../../../../firebase-config";
import { initializeApp } from "firebase/app";
import { render, screen, fireEvent } from "@testing-library/vue";
import { setActivePinia, createPinia } from "pinia";

describe("HeaderLoggedInPartial.vue", () => {
  beforeAll(() => {
    initializeApp(firebaseConfig);
    setActivePinia(createPinia());
  });

  it("Should have a visible hamburger menu after menu button clicked open, the clicked closed again.", async () => {
    const { getByTestId } = render(HeaderLoggedInPartial);
    const menuIconEl = getByTestId("menu-icon");

    await fireEvent.click(menuIconEl);

    const menuCloseButtonEl = getByTestId("menu-close-button");

    await fireEvent.click(menuCloseButtonEl);

    expect(menuIconEl).not.toBeNull();
  });

  it("Should not have a display of none on the main menu after hamburger menu is clicked", async () => {
    // eslint-disable-next-line no-unused-vars
    const { getByTestId } = render(HeaderLoggedInPartial);
    const menuIconEl = getByTestId("menu-icon");

    await fireEvent.click(menuIconEl);

    const menuMainEl = screen.getByTestId("menu-main-component");

    expect(menuMainEl.style.display).not.toBe("none");
  });
});

it("Should have a display of none by default", async () => {
  // eslint-disable-next-line no-unused-vars
  render(HeaderLoggedInPartial);

  const menuMainEl = screen.getByTestId("menu-main-component");

  expect(menuMainEl.style.display).toBe("none");
});

//   // Dispatch a native click event to our button element.
//   await fireEvent.click(button);
//   await fireEvent.click(button);

//   getByText("Times clicked: 2");
// });
