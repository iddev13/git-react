import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatusClass from './ProfileStatusClass';

describe("ProfileStatus component", () => {
	test("status from props shold be in the state", () => {
		const component = create(< ProfileStatusClass status="PROFILE_STATUS" />);
		const instance = component.getInstance();
		expect(instance.state.status).toBe("PROFILE_STATUS");
	});
});