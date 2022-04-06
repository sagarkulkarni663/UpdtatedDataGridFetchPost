import SendingData from "../SendingData";
import { render, fireEvent, act } from "@testing-library/react";

const post: any = [{
  id: '1234',
  title: "Title",
  url: "Url",
  created_at: "CreatedAt",
  author: "Author",
}]

const mockData = {
  fetching: () => jest.fn(),
  noMore: true,
  loader: "Loading...",
  dataLength: "1234",
};
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => jest.fn(),
}));


describe("checking Showing data component", () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => { });
  });
  
  test("matchingSnapshot", () => {
    const test1 = render(
      <SendingData
        post={post}
        fetching={mockData.fetching}
        noMore={mockData.noMore}
      />
    );
    expect(test1).toMatchSnapshot();
  });
  test("matchingSnapshot without crashes", () => {
    const test2 = render(
      <SendingData
        post={post}
        fetching={mockData.fetching}
        noMore={mockData.noMore}
      />
    );
    expect(test2).toBeTruthy();
  });

  test("matchingSnapshot without crashes", () => {
    const { getByTestId } = render(<SendingData post={post} fetching={mockData.fetching} noMore={mockData.noMore} />);
    const btn: any = getByTestId('search').querySelector('input');
    act(() => {
      fireEvent.change(btn, { target: { value: 'hello' } })
    })
    expect(btn).toBeTruthy();
  });

  test("matchingSnapshot without crashes", () => {
    const { getByTestId } = render(<SendingData post={post} fetching={mockData.fetching} noMore={mockData.noMore} />);
    const row: any = getByTestId('main').querySelector('.MuiDataGrid-row');
    act(() => {
      fireEvent.click(row)
    })
    expect(row).toBeTruthy();
  });


});
