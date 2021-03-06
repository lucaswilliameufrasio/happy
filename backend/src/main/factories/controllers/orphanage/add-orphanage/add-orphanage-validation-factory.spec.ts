import { makeAddOrphanageValidation } from './add-orphanage-validation-factory'
import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols/validation'

jest.mock('@/validation/validators/validation-composite')

describe('AddOrphanage Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeAddOrphanageValidation()

    const validations: Validation[] = []

    for (const field of [
      'name',
      'latitude',
      'longitude',
      'about',
      'instructions',
      'opening_hours',
      'open_on_weekend',
      'whatsapp',
      'images'
    ]) {
      validations.push(new RequiredFieldValidation(field))
    }

    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
