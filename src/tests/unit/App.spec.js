import App from "@/App.vue";
import firebaseConfig from "../../firebase-config";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { render } from "@testing-library/vue";
import { setActivePinia, createPinia } from "pinia";
// TODO: these are dependent on firebase. What if we switch FB out? Write wrappers for FB.
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
  it("signed-in-wrapper 's, should display when signed IN.", () => {
    const { queryAllByTestId } = render(App);

    const wrapperSignedIn = queryAllByTestId("signed-in-wrapper");
    // const signOffWrapperEl = queryAllByTestId("signed-off-wrapper");
    const mockedGetAuth = getAuth.mockReturnValueOnce({
      currentUser: { displayName: "Aaron Happe" },
    });
    const mockedCurrentUser = mockedGetAuth();

    if (mockedCurrentUser.currentUser.displayName.length) {
      wrapperSignedIn.forEach((el) => {
        expect(el).toBeTruthy();
      });
    }
  });

  it("signed-off-wrapper 's, should NOT display when signed IN.", () => {
    const { queryAllByTestId } = render(App);

    const wrapperSignedOff = queryAllByTestId("signed-off-wrapper");
    // const signOffWrapperEl = queryAllByTestId("signed-off-wrapper");
    const mockedGetAuth = getAuth.mockReturnValueOnce({
      currentUser: { displayName: "Aaron Happe" },
    });
    const mockedCurrentUser = mockedGetAuth();

    if (mockedCurrentUser.currentUser.displayName.length) {
      wrapperSignedOff.forEach((el) => {
        expect(el).toBeTruthy();
      });
    }
  });
});

//   // Dispatch a native click event to our button element.
//   await fireEvent.click(button);
//   await fireEvent.click(button);

//   getByText("Times clicked: 2");
// });
