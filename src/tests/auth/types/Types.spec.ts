import { types } from "../../../auth/types/Types"

describe('Types', () => {
    test('should return the types', () => {
        expect(types).toEqual({
            login: '[aunt] login',
            logout: '[auth] logout'
        })
    })
})