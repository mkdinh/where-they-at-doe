const { UserService } = require('../../services')

const mockData = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
];

const userRepoMock = {
    get: jest.fn(() => Promise.resolve(mockData)),
    single: jest.fn(() => Promise.resolve(mockData[0])),
}

describe('UserService', () => {
    let userService;

    beforeEach(() => {
        userService = new UserService(userRepoMock);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should returns list of users', async () => {
        const users = await userService.getUsers();
        expect(users.length).toEqual(mockData.length);
    });

    it('should returns a single user by id', async () => {
        const user = await userService.getUserById(1);
        expect(user).not.toBeNull();
    });
})