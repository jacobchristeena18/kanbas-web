import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { Assignment } from "./AssignmentType";
const initialState = {
  assignments: assignments as Assignment[],
};

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (
      state,
      { payload: assignment }: PayloadAction<Omit<Assignment, "_id">>
    ) => {
      const newAssignment: Assignment = {
        ...assignment,
        _id: new Date().getTime().toString(),
      };

      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (
      state,
      { payload: assignmentId }: PayloadAction<string>
    ) => {
      state.assignments = state.assignments.filter(
        (a) => a._id !== assignmentId
      );
    },
    updateAssignment: (
      state,
      { payload: updatedAssignment }: PayloadAction<Assignment>
    ) => {
      state.assignments = state.assignments.map((a) =>
        a._id === updatedAssignment._id ? updatedAssignment : a
      );
    }
  },
});
export const {
    addAssignment,
    deleteAssignment,
    updateAssignment,
  } = assignmentSlice.actions;
  export default assignmentSlice.reducer;
