import { makeRequest } from './apiModule';

function create(formData: FormData) {
  return makeRequest('/mail/job-application', 'POST', {}, formData);
}

function findJobPositions() {
  return makeRequest('/mail/job-position', 'GET');
}

export { create, findJobPositions };
