import AppConfig from './app.config.json'
import { setItem, getItem, STORAGE_ITEMS } from '../utilities/phone-storage'

class Config {
  APP_NAME: string
  constructor(appConfig: typeof AppConfig) {
    this.APP_NAME = appConfig.APP_NAME
  }

  /**
   *
   * @param user
   * @returns
   */
  async storeUser(user: object) {
    try {
      return await setItem(STORAGE_ITEMS.USER, user)
    } catch (error) {
      return false
    }
  }

  async getUser() {
    try {
      return await getItem(STORAGE_ITEMS.USER)
    } catch (error) {
      return false
    }
  }
}

export default new Config(AppConfig)
