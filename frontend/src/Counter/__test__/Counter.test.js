import React from "react";
import Counter from "../Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header renders with correct text", () => {
    const { getByTestId } = render(<Counter />);
    const headerEl = getByTestId("header");

    expect(headerEl.textContent).toBe("My Counter")
})

test("counter initially start with text of 0", () => {
    const { getByTestId } = render(<Counter />)
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent).toBe("0")
})

test("input initially starts at 1", () => {
    const { getByTestId } = render(<Counter />)
    const inputEl = getByTestId("input")

    expect(inputEl.value).toBe("1")
})

test("have plus button with +", () => {
    const { getByTestId } = render(<Counter />)
    const addBtnEl = getByTestId("addBtn")

    expect(addBtnEl.textContent).toBe("+")
})

test("have subtract button with -", () => {
    const { getByTestId } = render(<Counter />)
    const subtractBtnEl = getByTestId("subtractBtn")

    expect(subtractBtnEl.textContent).toBe("-")
})

test("have input value change", () => {
    const { getByTestId } = render(<Counter />)
    const inputEl = getByTestId("input")

    expect(inputEl.value).toBe("1")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    expect(inputEl.value).toBe("5")
})

test("clicking on + button add one to counter", () => {
    const { getByTestId } = render(<Counter />)
    const addBtnEl = getByTestId("addBtn")
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")

    expect(inputEl.value).toBe("1")

    expect(counterEl.textContent).toBe("0")
    fireEvent.click(addBtnEl);
    expect(counterEl.textContent).toBe("1")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addBtnEl);
    expect(counterEl.textContent).toBe("6")
})

test("clicking on - button subtract one from counter", () => {
    const { getByTestId } = render(<Counter />)
    const subtractBtnEl = getByTestId("subtractBtn")
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")

    expect(inputEl.value).toBe("1")

    expect(counterEl.textContent).toBe("0")
    fireEvent.click(subtractBtnEl);
    expect(counterEl.textContent).toBe("-1")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(subtractBtnEl);
    expect(counterEl.textContent).toBe("-6")
})

test("if the counter number is >= 100 className should be green and if the counter number is <=100 the counter number should be red", () => {
    const { getByTestId } = render(<Counter />)
    const subtractBtnEl = getByTestId("subtractBtn")
    const addBtnEl = getByTestId("addBtn")
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")

    expect(counterEl.className).toBe("")

    fireEvent.change(inputEl, {
        target: {
            value: "50"
        }
    })

    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)

    expect(counterEl.className).toBe("green")

    fireEvent.click(subtractBtnEl)
    expect(counterEl.className).toBe("")
    fireEvent.click(subtractBtnEl)
    expect(counterEl.className).toBe("")
    fireEvent.click(subtractBtnEl)
    expect(counterEl.className).toBe("")
    fireEvent.click(subtractBtnEl)

    expect(counterEl.className).toBe("red")
})