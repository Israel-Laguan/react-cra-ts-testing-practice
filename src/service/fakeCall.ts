export const fakeCall = (message: string): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(message)
    }, 4000)
  })
