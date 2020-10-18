import { AddOrphanageRepository } from '@/data/protocols/db/orphanage/add-orphanage-repository'
import { LoadOrphanageByIdRepository } from '@/data/protocols/db/orphanage/load-orphanage-by-id-repository copy'
import { OrphanageModel } from '@/domain/models/orphanage'
import { mockOrphanageModel } from '@/domain/test/mock-orphanage'
import { AddOrphanageParams } from '@/domain/usecases/orphanage/add-orphanage'

export class AddOrphanageRepositorySpy implements AddOrphanageRepository {
  orphanageModel = mockOrphanageModel()
  addOrphanageParams: AddOrphanageParams

  async add (data: AddOrphanageParams): Promise<OrphanageModel> {
    this.addOrphanageParams = data
    return this.orphanageModel
  }
}

export class LoadOrphanageByIdRepositorySpy implements LoadOrphanageByIdRepository {
  orphanageModel = mockOrphanageModel()
  id: number

  async loadById (id: number): Promise<OrphanageModel> {
    this.id = id
    return this.orphanageModel
  }
}
