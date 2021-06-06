
import aboutReducer, { aboutAddAC, aboutRemoveAC } from "./about-reducer";

let state = {
	aboutPosts: [
		{ id: 1, message: 'message aaa' },
		{ id: 2, message: 'message bbb' },
		{ id: 3, message: 'message ccc' },
		{ id: 4, message: 'message ddd' }
	],
}

it('length aboutPost should be incremented', () => {
	let action = aboutAddAC('about test message');
	let newState = aboutReducer(state, action);
	expect(newState.aboutPosts.length).toBe(5);
});

it('length aboutPost should be corected', () => {
	let action = aboutAddAC('about test message');
	let newState = aboutReducer(state, action);
	expect(newState.aboutPosts[4].message).toBe('about test message');
});
it('after deleting length of aboutPost should be decremented', () => {
	let action = aboutRemoveAC(1);
	let newState = aboutReducer(state, action);
	expect(newState.aboutPosts.length).toBe(3);
});

