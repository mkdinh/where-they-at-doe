const { UserService } = require("../../services");

const mockData = [
  { id: 1, meta: [{}], setLocation: jest.fn() },
  { id: 2, meta: [{}], setLocation: jest.fn() },
  { id: 3, meta: [{}], setLocation: jest.fn() },
];

const userRepoMock = {
  get: jest.fn(() => Promise.resolve(mockData)),
  single: jest.fn(() => Promise.resolve(mockData[0])),
};

const ipServiceMock = {
  getLocationFromIP: jest.fn(() => Promise.resolve({})),
};

describe("UserService", () => {
  let userService;

  beforeEach(() => {
    userService = new UserService(userRepoMock, ipServiceMock);
  });

  afterEach(() => {
    // jest.resetAllMocks();
  });

  it("should returns list of users", async () => {
    const users = await userService.getUsers();
    expect(users.length).toEqual(mockData.length);
  });

  it("should returns a single user by id", async () => {
    const user = await userService.getUserById(1);
    expect(user).not.toBeNull();
  });
});
