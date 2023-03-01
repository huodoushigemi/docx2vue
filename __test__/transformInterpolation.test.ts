import { isSimpleIdentifier, transformInterpolation, transformInterpolation1 } from '../src/utils/transformInterpolation'

it('transformInterpolation', async () => {
  await expect(transformInterpolation(`{{ name + '_' + 1 }}`, 'data')).resolves.toBe(`{{ data.name + '_' + 1 }}`)
  await expect(transformInterpolation(`{{ new Date + time }}`, 'data')).resolves.toBe(`{{ new Date + data.time }}`)
  await expect(transformInterpolation(`{{ a.b.c }}`, 'data')).resolves.toBe(`{{ data.a.b.c }}`)
})

it('transformInterpolation1', async () => {
  await expect(transformInterpolation1(`{{ name + '_' + 1 }}`)).resolves.toBe(`{{ get('name') + '_' + 1 }}`)
  await expect(transformInterpolation1(`{{ new Date + time }}`)).resolves.toBe(`{{ new Date + get('time') }}`)
  await expect(transformInterpolation1(`{{ a.b.c }}`)).resolves.toBe(`{{ get('a.b.c') }}`)
})

it('isSimpleIdentifier', async () => {
  await expect(isSimpleIdentifier(`name`)).resolves.toBeTruthy()
  await expect(isSimpleIdentifier(`aaa`)).resolves.toBeTruthy()
  await expect(isSimpleIdentifier(`a.b.c`)).resolves.toBeTruthy()

  await expect(isSimpleIdentifier(`new Date()`)).resolves.toBeFalsy()
  await expect(isSimpleIdentifier(`a.b.c()`)).resolves.toBeFalsy()
  await expect(isSimpleIdentifier(`1234567`)).resolves.toBeFalsy()
  await expect(isSimpleIdentifier(`'xxxxx'`)).resolves.toBeFalsy()
})
