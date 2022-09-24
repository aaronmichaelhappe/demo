// import App from "@/App.vue";
// // eslint-disable-next-line no-unused-vars
// import firebaseConfig from "../../firebase-config";
// import { initializeApp } from "firebase/app";
// import { render, screen, fireEvent } from "@testing-library/vue";
// import { setActivePinia, createPinia } from "pinia";

// describe("App.vue", () => {
//   beforeAll(() => {
//     initializeApp(firebaseConfig);
//     setActivePinia(createPinia());
//   });

//   it("should have a visible hamburger menu after menu button clicked open, the clicked closed again.", async () => {
//     const { getByTestId } = render(App);
//     const menuIconEl = getByTestId("menu-icon");

//     await fireEvent.click(menuIconEl);

//     const menuCloseButtonEl = getByTestId("menu-icon");

//     await screen.findByTestId("menu-close-button");

//     await fireEvent.click(menuCloseButtonEl);

//     expect(menuIconEl).not.toBeNull();
//   });
// });

//   // Dispatch a native click event to our button element.
//   await fireEvent.click(button);
//   await fireEvent.click(button);

//   getByText("Times clicked: 2");
// });
