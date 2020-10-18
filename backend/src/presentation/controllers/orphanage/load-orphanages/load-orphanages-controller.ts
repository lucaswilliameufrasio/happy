import { ok } from '@/presentation/helpers/http/http-helper'
import { LoadOrphanages,Controller, HttpRequest, HttpResponse } from './load-orphanages-controller-protocols'

export class LoadOrphanagesController implements Controller {
  constructor (
    private readonly loadOrphanages: LoadOrphanages
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const orphanages = await this.loadOrphanages.load()
    return ok(orphanages)
  }
}