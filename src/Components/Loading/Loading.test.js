import React from "react";
import { shallow } from "enzyme";
import Loading from "./Loading"

describe("<Loading/>", () => {
    const wrapper = shallow(<Loading></Loading>);
    it("Renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
})