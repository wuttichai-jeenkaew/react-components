import { render, screen } from "@testing-library/react";
import Exercise1, { Link } from "../src/components/Exercise1";
import Exercise2, { Header, Main, Footer } from "../src/components/Exercise2";
import { expect } from "vitest";

describe("Component Reusability : Exercise 1-2", () => {
  it("ยังไม่ได้สร้าง Component Link ที่มี Element <a>", () => {
    render(<Link />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("href", "https://www.techupth.com");
      expect(link).toHaveTextContent("techupth.com");
    });
  });

  it("นำ Component Link มาใช้แทน <a> ที่ซ้ำซ้อนกันอยู่ทั้ง 3 ที่บนหน้าเว็บไซต์", () => {
    render(<Exercise1 />);
    const renderedLinks = screen.getAllByText("techupth.com");
    expect(renderedLinks).toHaveLength(3);
  });

  it("ยังไม่ได้สร้าง Component Header ที่ Return HTML Element ตามที่โจทย์กำหนด ", () => {
    render(<Header />);
    const h1Role = screen.getAllByText("Website Header");
    const pRole = screen.getAllByText(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ratione ullam impedit consectetur porro sed fuga ipsa sequi, accusamus quas debitis alias, et repellat architecto magnam optio dolores commodi ipsam."
    );
    expect(h1Role.length).toBe(1);
    expect(pRole.length).toBe(1);
  });

  it("ยังไม่ได้สร้าง Component Main ที่ Return HTML Element ตามที่โจทย์กำหนด ", () => {
    render(<Main />);
    const h1Role = screen.getAllByText("Main Section");
    const buttonRole = screen.getAllByRole("button");
    expect(h1Role.length).toBe(1);
    expect(buttonRole.length).toBe(1);
  });

  it("ยังไม่ได้สร้าง Component Footer ที่ Return HTML Element ตามที่โจทย์กำหนด ", () => {
    render(<Footer />);
    const h1Role = screen.getAllByText("Website Footer");
    const linkRole = screen.getAllByRole("link");

    expect(h1Role.length).toBe(1);
    linkRole.forEach((link) => {
      expect(link).toHaveAttribute("href", "https://www.techupth.com");
      expect(link).toHaveTextContent("techupth.com");
    });
  });

  it("ยังไม่ได้นำ Component Header , Main และ Footer ไปใช้แทนโค้ดแต่ละที่แยกออกมาเป็น Component ", () => {
    render(<Exercise2 />);
    const header = document.querySelector("Header");
    const main = document.querySelector("Main");
    const footer = document.querySelector("Footer");

    expect(header).not.toBeNull();
    expect(main).not.toBeNull();
    expect(footer).not.toBeNull();
  });
});
