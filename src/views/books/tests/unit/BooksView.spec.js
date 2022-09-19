import { render } from "@testing-library/vue";

import BooksView from "@/views/books/BooksView.vue";
import { setActivePinia, createPinia } from "pinia";

describe("BooksView.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("should have 10 books", () => {
    const { getAllByTestId } = render(BooksView);

    const books = getAllByTestId("book");

    expect(books.length).toBe(10);
  });
});

// test("should have 10 books", async () => {
//   // The render method returns a collection of utilities to query your component.
//   const { getByText } = render(Component);

//   // getByText returns the first matching node for the provided text, and
//   // throws an error if no elements match or if more than one match is found.
//   getByText("Times clicked: 0");

//   const button = getByText("increment");

//   // Dispatch a native click event to our button element.
//   await fireEvent.click(button);
//   await fireEvent.click(button);

//   getByText("Times clicked: 2");
// });
