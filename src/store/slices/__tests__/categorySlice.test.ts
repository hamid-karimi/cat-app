import { CategoryState } from "@/store/types/category.types.d";
import categoryReducer, { setCategoryId } from "../categorySlice";

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
      const nextState = categoryReducer(initialState, setCategoryId(12));
      expect(nextState.id).toEqual(12);
    });
  });

  describe("actions", () => {
    it("should create an action to set the category id", () => {
      const expectedAction = { type: setCategoryId.type, payload: 12 };
      expect(setCategoryId(12)).toEqual(expectedAction);
    });
  });
});
