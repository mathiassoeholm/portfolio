import { createTextMutator } from './text-mutator'

it('mutates the text', async () => {
  const sleepMock = jest.fn()
  const getCurrentNonce = () => 0
  const textMutator = createTextMutator(sleepMock, getCurrentNonce)

  const intermediateTexts: string[] = []

  await textMutator('Bob', 'Cat', 0, (text) => {
    intermediateTexts.push(text)
  })

  expect(intermediateTexts).toEqual([
    'Cob',
    'Cab',
    'Cat',
  ])
})
