import React from "react";
import { shallow } from "enzyme";
import Player from "./Player"

const playerProps =
{
    "id": "bbb25388-5322-41c7-bc72-822d20508b18",
    "name": "goozlE309"
}

describe("<Player/>", () => {

    const wrapper = shallow(<Player player={playerProps}></Player>);

    it("Player should display a valid name", () => {
        const statusText = wrapper.find("#player-name").text();
        expect(statusText).toBe("goozlE309")
    })
    it("Player should display the right status", () => {
        const statusText = wrapper.find("#player-status").text();
        expect(statusText).toBe("online")
    })


})