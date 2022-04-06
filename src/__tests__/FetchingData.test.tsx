import { render, screen, act, cleanup } from "@testing-library/react"
import FetchingData from "../FetchingData"

jest.mock("axios", () => ({
    get: jest.fn((_url, _body) => {
        console.log(_url, _body)
        return new Promise((resolve) => {
            resolve({
                status: 200,
                data: {
                    nbPages: 2,
                    hits: [{
                        id: '1234',
                        title: "Title",
                        url: "Url",
                        created_at: "CreatedAt",
                        author: "Author",
                      }]
                }
            });
        });
    }),
}));

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as any),
    useNavigate: () => jest.fn(),
}));


describe("checking Fetching data component", () => {
    afterEach(() => {
        cleanup()
    })
    
    test("matchingSnapshot",async()=>{
        await act(async() => {
            await render(<FetchingData/>)
        })
        expect(screen).toMatchSnapshot()
    })
    test("matchingSnapshot without crashes",async()=>{
        await act(async() => {
            await render(<FetchingData/>)
        })
        expect(screen).toBeTruthy()
    })
    test("checking heading",async()=>{
        await act(async() => {
            await render(<FetchingData/>)
        })
        const test3=screen.getByTestId("heading")
        expect(test3.textContent).toBe('Posts')
    })
})

