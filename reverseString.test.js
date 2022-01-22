import reverseString from './js/reverseString'

test('reverseString function works', () => {
    expect(reverseString).toBeDefined()
})

test('String reverse', () => {
    expect(reverseString('ola')).toEqual('alo')
})

test('String reverse to Uppercase', () => {
    expect(reverseString('Ola')).toEqual('alo')
})