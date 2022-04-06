import { render, act, fireEvent } from "@testing-library/react";
import ShowingData from "../ShowingData";

const mockdata = {
  id: "30802459",
  title: "How to compile SASS into CSS and watch for changes?",
  url: "https://syntackle.vercel.app/blog/how-to-compile-sass-into-css-and-watch-for-changes-5MHo7HhHUHUedZXaP62y/",
  created_at: "2022-03-25T14:18:24.000Z",
  author: "murtuzaalisurti",
};

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => jest.fn(),
  useLocation: () => ({
    state: mockdata,
  }),
}));

describe("checking Showing data component", () => {
  test("matchingSnapshot", () => {
    const test1 = render(<ShowingData />);
    expect(test1).toMatchSnapshot();
  });
  test("matchingSnapshot without crashes", () => {
    const test2 = render(<ShowingData />);
    expect(test2).toBeTruthy();
  });
  test("checking heading", () => {
    const { getByTestId } = render(<ShowingData />);
    const test3 = getByTestId("heading");
    expect(test3.textContent).toBe("PostDetails");
  });
  test("checking jsonData", () => {
    const { getByTestId } = render(<ShowingData />);
    const test4 = getByTestId("jsonData");
    expect(test4.textContent).toBe(JSON.stringify( mockdata));
  });
  test("checking heading", () => {
    const { getByTestId } = render(<ShowingData />);
    const test5 = getByTestId("button");
    expect(test5).toBeDefined()
  });

  test("back button click fire event", () => {
    const { getByTestId } = render(<ShowingData />);
    const test5 = getByTestId("button");
    act(() => {
      fireEvent.click(test5)
    })
    expect(test5).toBeTruthy()
  });
});
