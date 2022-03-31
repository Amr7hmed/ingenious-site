import { configureStore } from "@reduxjs/toolkit";

import langSlice from "./Lang";
import StaticContent from "./StaticContent";

export const store = configureStore({
  reducer: {
    lang: langSlice,
    content: StaticContent,
  },
});
