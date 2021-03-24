import React from "react";
import { shallow } from "enzyme";
import ListContainer from "./ListContainer"

describe("<ListContainer/>", () => {
    const wrapper = shallow(<ListContainer></ListContainer>);
    it("Renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
})