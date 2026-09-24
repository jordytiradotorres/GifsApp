import {describe, expect, test} from 'vitest'
import {render, screen} from "@testing-library/react";
import {CustomHeader} from "./CustomHeader.tsx";

describe('CustomHeader ', () => {
  const title = "Test title"

  test('should render the title correctly', () => {
    render(<CustomHeader title={title}/>)
    expect(screen.getByText(title)).toBeDefined()
  })

  test('should not render the description when it is not provided.', () => {
    const {container} = render(<CustomHeader title={title}/>);
    const p = container.querySelector("p");
    expect(p).toBeNull();
  });

  test('should render the description when provided', () => {
    const description = "Test description"
    render(<CustomHeader title={title} description={description}/>)
    expect(screen.getByText(description)).toBeDefined()
    expect(screen.getByRole("paragraph")).toBeDefined()
  })

  test('should renders the description when provided', () => {
    const description = "Test description";
    render(<CustomHeader title={title} description={description}/>);
    const p = screen.getByText(description);
    expect(p).toBeDefined();
  });

  test('should render the description when not provided', async () => {
    const {container} = render(<CustomHeader title={title}/>)
    const divElement = container.querySelector(".content-center")

    const p = divElement?.querySelector("p")
    expect(p?.innerHTML).not.toBeDefined()
  })

  test('should does not render the description when it is not provided', () => {
    const {container} = render(<CustomHeader title={title}/>);
    const divContent = container.querySelector('.content-center');
    if (divContent) {
      const p = divContent.querySelector('p');
      expect(p).toBeNull(); // No debe existir
    }
  });
})
