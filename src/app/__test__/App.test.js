///import { expect } from '@jest/globals'
import { render } from "../../utils/__test__/test-utils";
import App from "./../index";

describe("***App running status***", () => {
  let wrapper;

  beforeEach(() => (wrapper = render(<App />, { initialState: {} })));

  it("renders without crushing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("App exist", () => {
    const { getByTestId } = wrapper;
    expect(getByTestId("app")).toBeInTheDocument();
  });
});
