/* eslint-disable no-unused-vars */
import App from "@/App.vue";
import firebaseConfig from "../../firebase-config";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { render } from "@testing-library/vue";
import { setActivePinia, createPinia } from "pinia";

jest.mock("firebase/auth", () => {
  return {
    getAuth: jest.fn(),
    onAuthStateChanged: jest.fn(),
  };
});

describe("App.vue", () => {
  beforeAll(() => {
    setActivePinia(createPinia());
    initializeApp(firebaseConfig);
    const auth = getAuth();
  });
  it("display name should have length when user is authorized", () => {
    const { getByTestId } = render(App);
    const displayNameEl = getByTestId("display-name");
    const mockedGetAuth = getAuth.mockReturnValueOnce({
      currentUser: { displayName: "Aaron Happe" },
    });

    const mockedCurrentUser = mockedGetAuth();

    displayNameEl.textContent = mockedCurrentUser.currentUser.displayName;

    expect(displayNameEl.textContent.length).toBeGreaterThan(0);
  });
});

//   // Dispatch a native click event to our button element.
//   await fireEvent.click(button);
//   await fireEvent.click(button);

//   getByText("Times clicked: 2");
// });
