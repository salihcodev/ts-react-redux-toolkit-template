// utils:
import APIHandler from '../base';

// >>>> GET, fetching all data:
export const fetchAllInitial = (currPage: number) =>
  APIHandler.get(`/initial/all?page=${currPage}`);

// >>>> POST, create new initial::
export const createInitial = (initialToCreate: object) =>
  APIHandler.post('/initial', initialToCreate);

// >>>> DELETE, delete a specific initial::
export const deleteInitial = (id: string) => APIHandler.delete(`/initial/${id}`);

// >>>> UPDATE, update a specific initial::
export const updateInitial = (id: string, InitialToUpdate: object) =>
  APIHandler.patch(`/initial/${id}`, InitialToUpdate);

// SEARCHING with query params::
//  >>>> in all initials:
export const handelSearchInAll = (where: string, searchQuery: any) =>
  /* 
    - where: the route you wanna search in.
    - searchQuery: value to search with, custom it as you need.
  */

  APIHandler.get(
    `${where}?searchQuery=${searchQuery.query || 'none'}&tags=${searchQuery.tags?.join(',')}`
  );

// >>>> GET, get initial with its `id`::
export const getInitial = (id: string) => APIHandler.get(`/initial/s/${id}`);
