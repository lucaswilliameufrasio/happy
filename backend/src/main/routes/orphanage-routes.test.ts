import request from 'supertest'
import faker from 'faker'
import app from '@/main/config/app'
import { prisma } from '@/infra/db/prisma/helpers/prisma-helper'
import { getAssetPathHelper } from '@/shared/test/helpers/get-asset-path-helper'
import { mockAddOrphanageParams } from '@/domain/test'

const mockOrphanagePrisma = (): void => {
  const orphanageParams = Object.assign({}, mockAddOrphanageParams(), { id: faker.random.number() })
  prisma.orphanage.create = jest.fn().mockReturnValueOnce(orphanageParams)
  prisma.orphanage.findOne = jest.fn().mockReturnValueOnce(orphanageParams)
}

describe('Orphanage Routes', () => {
  beforeAll(mockOrphanagePrisma)

  test('Should return 201 on add survey success', async () => {
    await request(app)
      .post('/api/orphanages')
      .attach('images', getAssetPathHelper('unsplash-chris.jpeg'))
      .field({
        name: 'Unidade de Acolhimento Institucional do Pará',
        latitude: -1.463868,
        longitude: -48.485970,
        whatsapp: '(93) 981999008',
        about: 'Acolhimento Institucional',
        instructions: 'Usar mascará.',
        open_on_weekend: true,
        approved: false
      })
      .expect(201)
  })
})