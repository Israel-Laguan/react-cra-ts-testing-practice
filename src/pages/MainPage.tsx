import { useState, useEffect } from 'react'

import { fakeCall } from '../service/fakeCall'
import { useAuthContext } from '../context/AuthContext'

const MainPage = () => {
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const { isAuthenticated } = useAuthContext()

  const changeResult = async (newMessage: string) => {
    setResult(await fakeCall(newMessage))
  }

  useEffect(() => {
    ;(async () => {
      const result: string = await fakeCall('DONE!')
      setResult(result)
      setIsLoading(false)
    })()
  }, [])
  return isLoading ? (
    <div className="danger" data-testid="Div::Loading">
      Loading...
    </div>
  ) : (
    <>
      <div className="success" data-testid="Div::Result">
        {result}
      </div>
      <div>{isAuthenticated ? 'Welcome!' : 'You Are Not Logged In!'}</div>
      <div>
        {isAuthenticated && (
          <button
            onClick={(e) => {
              e.preventDefault()
              changeResult('Result has changed!')
            }}
          >
            Change Result
          </button>
        )}
      </div>
    </>
  )
}
export default MainPage
