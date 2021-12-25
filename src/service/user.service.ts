import axios, { AxiosResponse } from 'axios'

import { apiUrl } from '../constants'

import { IUser } from '../interfaces/user.interface'

export async function getUserToGithub(user: string) {
  try {
    const request: AxiosResponse<IUser> = await axios.get(`${apiUrl}/${user}`)
    return request.data
  } catch (error) {
    throw new Error(`whoops cannot connect to api error: ${error}`)
  }
}
