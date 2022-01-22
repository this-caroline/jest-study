import functions from './js/functions'

test('2 + 2 is 4', () =>{
    expect(functions.add(2,2)).toBe(4)
}) 

test('2 + 2 isnt 5', () =>{
    expect(functions.add(2,2)).not.toBe(5)
}) 

test('Should be null', () =>{
    expect(functions.isNull()).toBeNull()
}) 

test('Should be falsy', () =>{
    expect(functions.checkValue(0)).toBeFalsy()
})

test('Name and lastName should be Caroline', () =>{
    expect(functions.createUser()).toEqual({firstName: 'Caroline', lastName: 'Becherovka'})
})

test('Sould be under 1600', () => {
    const load = 800
    const load2 = 700
    expect(load + load2).toBeLessThanOrEqual(1600)
})

test('There is not I in team', () => {
    expect('team').not.toMatch(/I/i)
})

test('Admin should be in username', () => {
    const usernames = ['joão', 'carina', 'admin']
    expect(usernames).toContain('admin')
})

test('Fetch username on API', async () => {
    expect.assertions(1)
    const data = await functions.fetchUser()
    expect(data.username).toEqual('Bret')
})
