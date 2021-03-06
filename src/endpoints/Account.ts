import Http from '../Http'
import { IAccountResult } from '../interfaces/Account'
import { ICreditCardResult, ICreditCardsResult } from '../interfaces/CreditCard'
import { IOrderResult, IOrdersResult } from '../interfaces/Order'
import { IQuery } from '../interfaces/Query'
import { IToken } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Account extends Http {
  public async accountInfo(token: IToken, params: IQuery = {}): Promise<IAccountResult> {
    return await this.spreeResponse('get', Routes.accountPath(), token, params) as IAccountResult
  }

  public async creditCardsList(token: IToken, params: IQuery = {}): Promise<ICreditCardsResult> {
    return await this.spreeResponse('get', Routes.accountCreditCardsPath(), token, params) as ICreditCardsResult
  }

  public async defaultCreditCard(token: IToken, params: IQuery = {}): Promise<ICreditCardResult> {
    return await this.spreeResponse('get', Routes.accountDefaultCreditCardPath(), token, params) as ICreditCardResult
  }

  public async completedOrdersList(token: IToken, params: IQuery = {}): Promise<IOrdersResult> {
    return await this.spreeResponse('get', Routes.accountCompletedOrdersPath(), token, params) as IOrdersResult
  }

  public async completedOrder(token: IToken, orderNumber: string, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse('get', Routes.accountCompletedOrderPath(orderNumber), token, params) as IOrderResult
  }

  public async create(params: IQuery): Promise<IAccountResult> {
    return await this.spreeResponse('post', Routes.accountPath(), {}, params) as IAccountResult
  }

  public async update(token: IToken, params: IQuery): Promise<IAccountResult> {
    return await this.spreeResponse('patch', Routes.accountPath(), token, params) as IAccountResult
  }
}
