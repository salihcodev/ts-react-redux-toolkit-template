// utils:
import APIHandler from '../base';

// >>>> GET, fetching all data:
export const fetchAllInitial = (currPage: number) =>
  APIHandler.get(`/Initial/all?page=${currPage}`);

// >>>> POST, create new Initial::
export const createInitial = (InitialToCreate: object) =>
  APIHandler.post('/Initial', InitialToCreate);

// >>>> DELETE, delete a specific Initial::
export const deleteInitial = (id: string) => APIHandler.delete(`/Initial/${id}`);

// >>>> UPDATE, update a specific Initial::
export const updateInitial = (id: string, InitialToUpdate: object) =>
  APIHandler.patch(`/Initial/${id}`, InitialToUpdate);

// SEARCHING with query params::
//  >>>> in all Initials:
export const handelSearchInAll = (where: string, searchQuery: any) =>
  APIHandler.get(
    `${where}?searchQuery=${searchQuery.query || 'none'}&tags=${searchQuery.tags?.join(',')}`
  );

// >>>> GET, get Initial with its `id`::
export const getInitial = (id: string) => APIHandler.get(`/Initial/s/${id}`);
