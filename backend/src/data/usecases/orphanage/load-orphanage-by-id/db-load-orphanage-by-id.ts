import { LoadOrphanageByIdRepository, LoadOrphanageById, OrphanageModel } from './db-load-orphanage-by-id-protocols'

export class DbLoadOrphanageById implements LoadOrphanageById {
  constructor (private readonly loadOrphanageByIdRepository: LoadOrphanageByIdRepository) {}

  async loadById (id: number): Promise<OrphanageModel> {
    const orphanage = await this.loadOrphanageByIdRepository.loadById(id)
    return orphanage
  }
}