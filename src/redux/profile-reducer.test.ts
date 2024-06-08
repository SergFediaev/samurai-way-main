import {addPostActionCreator, deletePost, profileReducer} from './profile-reducer'
import {PostPropsType} from '../components/Profile/Posts/Post/Post'

const state = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'It\'s my first post.', likesCount: 30},
        {id: 3, message: 'Bla.', likesCount: 50},
        {id: 4, message: 'Da.', likesCount: 0},
    ] as PostPropsType[],
    profile: null,
    status: '',
}

it('Length of posts should be incremented', () => {
    // 1. Test data.
    const action = addPostActionCreator('it-kamasutra.com')

    // 2. Action.
    const newState = profileReducer(state, action)

    // 3. Expectation.
    expect(newState.posts.length).toBe(5)
})

it('Message of new post should be correct', () => {
    // 1. Test data.
    const action = addPostActionCreator('it-kamasutra.com')

    // 2. Action.
    const newState = profileReducer(state, action)

    // 3. Expectation.
    expect(newState.posts[4].message).toBe('it-kamasutra.com')
})

it('After deleting length of messages should be decremented', () => {
    // 1. Test data.
    const action = deletePost(1)

    // 2. Action.
    const newState = profileReducer(state, action)

    // 3. Expectation.
    expect(newState.posts.length).toBe(3)
})

it(`After deleting length of messages shouldn't be decremented if id is incorrect`, () => {
    // 1. Test data.
    const action = deletePost(1_000)

    // 2. Action.
    const newState = profileReducer(state, action)

    // 3. Expectation.
    expect(newState.posts.length).toBe(4)
})