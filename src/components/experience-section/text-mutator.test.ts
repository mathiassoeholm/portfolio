import { createTextMutator } from './text-mutator'

it('mutates the text', async () => {
  const delayMock = jest.fn()
  const getCurrentNonce = () => 0
  const textMutator = createTextMutator(delayMock, getCurrentNonce)

  const bobCatTexts: string[] = []
  await textMutator('Bob', 'Cat', 0, (text) => {
    bobCatTexts.push(text)
  })
  expect(bobCatTexts).toEqual([
    'Cob',
    'Cab',
    'Cat',
  ])

  const yellowRedTexts: string[] = []
  await textMutator('Yellow', 'Red', 0, (text) => {
    yellowRedTexts.push(text)
  })
  expect(yellowRedTexts).toEqual([
    'Rello',
    'Rell',
    'Red',
  ])

  const numbersTexts: string[] = []
  await textMutator('', '123456789', 0, (text) => {
    numbersTexts.push(text)
  })
  expect(numbersTexts).toEqual([
    '1',
    '12',
    '123',
    '1234',
    '12345',
    '123456',
    '1234567',
    '12345678',
    '123456789',
  ])

  const somethingToNothingText: string[] = []
  await textMutator('Something', '', 0, (text) => {
    somethingToNothingText.push(text)
  })
  expect(somethingToNothingText).toEqual([
    'Somethin',
    'Somethi',
    'Someth',
    'Somet',
    'Some',
    'Som',
    'So',
    'S',
    '',
  ])

  const equalTexts: string[] = []
  await textMutator('Equal', 'Equal', 0, (text) => {
    equalTexts.push(text)
  })
  // We decide to always emit at lease one text,
  // even if the from text didn't change
  expect(equalTexts).toEqual([
    'Equal'
  ])
})

it('stops running if nonce changes', async () => {

  const getCurrentNonce = jest.fn().mockReturnValue(0)

  let i = 0
  const delayMock = async () => {
    if (i == 2) {
      // On the third call to delay we change the nonce
      getCurrentNonce.mockReturnValue(1)
    }

    i++
  }

  const textMutator = createTextMutator(delayMock, getCurrentNonce)

  const texts: string[] = []
  await textMutator('Very Looooooong Text', 'asdf', getCurrentNonce(), (text) => {
    texts.push(text)
  })

  expect(texts).toEqual([
    'aery Looooooong Tex',
    'asry Looooooong Te',
    'asdy Looooooong T',
  ])
})
