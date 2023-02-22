import categoryReducer, {
  CategoryState,
  setCategoryId,
} from "../categorySlice";

describe("categorySlice", () => {
  let initialState: CategoryState;
  beforeEach(() => {
    initialState = {
      id: undefined,
    };
  });

  describe("reducer", () => {
    it("should return the initial state", () => {
      const nextState = categoryReducer(initialState, { type: "unknown" });
      expect(nextState).toEqual(initialState);
    });

    it("should handle setCategoryId", () => {
      const nextState = categoryReducer(initialState, setCategoryId("123"));
      expect(nextState.id).toEqual("123");
    });
  });

  describe("actions", () => {
    it("should create an action to set the category id", () => {
      const expectedAction = { type: setCategoryId.type, payload: "123" };
      expect(setCategoryId("123")).toEqual(expectedAction);
    });
  });
});
