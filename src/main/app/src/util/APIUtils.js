import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const request = async (options) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  })

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  try {
    const result = await fetch(options.url, options)
      .then(response =>
        response.json().then(json => {
          return json;
        })
      );
      console.log('result');
      console.log(result)
    return result
  } catch (error) {
    console.log('error in request');
    console.log(error);
    return {error: error}
  }
};

// Question methods

export const deleteQuestion = async (questionId) => {
  const result = await request({
    url: API_BASE_URL + "/question",
    method: 'DELETE'
  })
  return result
}

export const editQuestion = async (questionRequest) => {
  const result = await request({
    url: API_BASE_URL + "/question",
    method: 'PUT',
    body: JSON.stringify(questionRequest)
  })
  return result
}

export const getQuestions = async () => {
  const result = await request({
    url: API_BASE_URL + "/question",
    method: 'GET',
  })
  return result
}

export async function createQuestion(questionRequest) {

  const theRequest = await request({
    url: API_BASE_URL + "/question",
    method: 'POST',
    body: JSON.stringify(questionRequest)
  })
  return theRequest
}

// Auth methods

export function login(loginRequest) {
  return request({
    url: API_BASE_URL + "/auth/signin",
    method: 'POST',
    body: JSON.stringify(loginRequest)
  });
}


export function signup(signupRequest) {
  return request({
    url: API_BASE_URL + "/auth/signup",
    method: 'POST',
    body: JSON.stringify(signupRequest)
  });
}

export function getCurrentUser() {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: API_BASE_URL + "/user/me",
    method: 'GET'
  });
}