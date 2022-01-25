import unsplash from './js/axios'
import mockAxios from 'axios'

it('call axios and return images', async () =>{
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        data: {
            results: ['cute-dog.jpg']
        }
    }))
    const images = await unsplash('dogs')

    expect(images).toEqual(['cute-dog.jpg'])
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith('https://api.unsplash.com/search/photos', {
        params: {
            client_id: process.env.UNSPLASH_TOKEN, 
            query: "dogs"
        }
    })
})
