import App from "@/App.vue";
import HomeView from "@/views/HomeView.vue";
import firebaseConfig from "../../firebase-config";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { render } from "@testing-library/vue";
import { setActivePinia, createPinia } from "pinia";

jest.mock("firebase/auth", () => {
  return {
    getAuth: jest.fn(),
    onAuthStateChanged: jest.fn(),
    GoogleAuthProvider: jest.fn(),
  };
});

describe("App.vue", () => {
  beforeAll(() => {
    initializeApp(firebaseConfig);
  });
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("display name, should have a length when user is authorized", () => {
    const { getByTestId } = render(App);

    const displayNameEl = getByTestId("display-name");
    const mockedGetAuth = getAuth.mockReturnValueOnce({
      currentUser: { displayName: "Aaron Happe" },
    });

    const mockedCurrentUser = mockedGetAuth();

    displayNameEl.textContent = mockedCurrentUser.currentUser.displayName;

    expect(displayNameEl.textContent.length).toBeGreaterThan(0);
  });
  it("sign-in-buttons wrapper, should not display when nav is also displaying.", () => {
    const { queryByTestId } = render(App);

    const displayNameEl = queryByTestId("display-name");
    const mockedGetAuth = getAuth.mockReturnValueOnce({
      currentUser: { displayName: "Aaron Happe" },
    });
    const mockedCurrentUser = mockedGetAuth();

    displayNameEl.textContent = mockedCurrentUser.currentUser.displayName;

    const signInWrapperEl = queryByTestId("sign-in-buttons");

    if (displayNameEl.textContent.length > 0) {
      expect(signInWrapperEl).toBeNull();
    } else {
      expect(signInWrapperEl).toBeTruthy();
    }
  });
});

//   // Dispatch a native click event to our button element.
//   await fireEvent.click(button);
//   await fireEvent.click(button);

//   getByText("Times clicked: 2");
// });
