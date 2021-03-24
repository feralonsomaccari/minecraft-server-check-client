import React from "react";
import { shallow } from "enzyme";
import Form from "./Form"


describe("<Form/>", () => {

    const wrapper = shallow(<Form></Form>);

    it("Renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })

    it("The ip field should have the right text", () => {
        const ipText = wrapper.find("label#form-ip").text();
        expect(ipText).toBe("Ip")
    })

    it("the port field have the right text", () => {
        const portText = wrapper.find("label#form-port").text();
        expect(portText).toBe("Port")
    })

})