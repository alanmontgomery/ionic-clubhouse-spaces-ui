import { createSelector } from 'reselect';

const getState = state => state;

//  General getters
export const getAllPeople = createSelector(getState, state => state.people);
export const getCategories = createSelector(getState, state => state.categories);
export const getTalks = createSelector(getState, state => state.talks);

//	Specific getters
export const getCategoryTalks = categoryId => createSelector(getState, state => state.talks.filter(talk => parseInt(talk.category_id) === parseInt(categoryId))[0]);
export const getTalk = id => createSelector(getState, state => state.talks.filter(talk => parseInt(talk.id) === parseInt(id))[0]);
export const getCategory = id => createSelector(getState, state => state.categories.filter(category => parseInt(category.id) === parseInt(id))[0]);