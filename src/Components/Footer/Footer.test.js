import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer"


describe("<Footer/>", () => {

    const wrapper = shallow(<Footer></Footer>);

    it("Renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })

    it("The author name should have my name :)", () => {
        const authorText = wrapper.find("#footer-author").text();
        expect(authorText).toBe("Made by Fer Alonso Maccari🦉GitHub")
    })
    it("github link should have correct href attribute", () => {
        const link = wrapper.find("a").prop("href");
        expect(link).toBe("https://github.com/feralonsomaccari/minecraft-server-check-client")
    })
})