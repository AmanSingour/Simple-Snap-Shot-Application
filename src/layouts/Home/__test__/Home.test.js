///import { expect } from '@jest/globals'
import { render } from "../../../utils/__test__/test-utils";
import Home from "./../Home";



describe("***Home Page running status***", () => {
  let wrapper;

  beforeEach(() => (wrapper = render(<Home />, { initialState: {} })));

  it("-Run without context", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('-run with context', ()=>{
    
  })

});
