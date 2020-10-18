import { AddOrphanage } from '@/domain/usecases/orphanage/add-orphanage'
import { badRequest, serverError, created } from '@/presentation/helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse, Validation } from './add-orphanage-controller-protocols'

export class AddOrphanageController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addOrphanage: AddOrphanage
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const fields = httpRequest.files?.length === 0 ? httpRequest.body : { ...httpRequest.body, images: httpRequest.files }
      const error = this.validation.validate(fields)

      if (error) {
        return badRequest(error)
      }

      const { name, latitude, longitude, whatsapp, about, instructions, open_on_weekend: OpenOnWeekend, approved } = httpRequest.body

      const images = httpRequest.files.map(file => ({
        name: file.filename
      }))

      const orphanage = await this.addOrphanage.add({
        name,
        latitude: Number(latitude),
        longitude: Number(longitude),
        whatsapp,
        about,
        instructions,
        open_on_weekend: Boolean(OpenOnWeekend),
        approved: Boolean(approved),
        images
      })

      return created(orphanage)
    } catch (error) {
      console.error(error)
      return serverError(error)
    }
  }
}
