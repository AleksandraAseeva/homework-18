// типы данных состоящие из типов частей файла index.ts

import { Bean, Combination, Fact, History, Recipe } from ".";

type State = {
  isLoading: boolean;
  isError: boolean;
};

type Page = {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};
export type BeanState = State & {
  data: Bean | null;
};

export type BeansState = State &
  Page & {
    data: Bean[];
  };

export type CombinationsState = State &
  Page & {
    data: Combination[];
  };

export type FactsState = State &
  Page & {
    data: Fact[];
  };

export type HistoryState = State &
  Page & {
    data: History[];
  };

export type RecipesState = State &
  Page & {
    data: Recipe[];
  };
