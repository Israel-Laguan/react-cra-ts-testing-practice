/* eslint-disable */
import MainPage from './MainPage'
import { useAuthContext, AuthProvider } from '../context/AuthContext'

import { fakeCall } from '../service/fakeCall'
import { render, act } from '@testing-library/react'
import React from 'react'

jest.mock('../service/fakeCall', () => ({
  fakeCall: jest.fn(),
}))

jest.mock('../context/AuthContext', () => ({
  ...jest.requireActual('../context/AuthContext'),
  AuthProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  useAuthContext: jest.fn(),
}))

describe('Test Main Page', () => {
  it('Match snapshot', () => {
    const { asFragment } = render(<MainPage />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Verify if text exists', () => {
    const { getByText } = render(<MainPage />)
    const text = getByText(/Loading.../)
    expect(text).toBeInTheDocument()
  })

  it('Verify if data test id exists', () => {
    const { getByTestId } = render(<MainPage />)
    const element = getByTestId(/Div::Loading/)
    expect(element).toBeInTheDocument()
  })

  it('Verify if loaded', () => {
    const { getByTestId } = render(<MainPage />)
    const element = getByTestId(/Div::Result/)
    expect(element).toBeInTheDocument()
  })

  it('Verify if authenticated', () => {
    const { getByText } = render(<MainPage />)
    const element = getByText(/Welcome/)
    expect(element).toBeInTheDocument()
  })

  it('Verify call fetch result', () => {
    const { getByText } = render(<MainPage />)
    const element = getByText(/DONE!/)
    expect(element).toBeInTheDocument()
  })

  it('Wait state change', async () => {
    useAuthContext.mockReturnValue({
      isAuthenticated: false,
    })
    let component: any
    await act(async () => {
      component = render(<MainPage />)
    })
    const element = component.getByTestId(/Div::Result/)
    expect(element).toBeInTheDocument()
  })

  it('Context value', async () => {
    useAuthContext.mockReturnValue({
      isAuthenticated: true,
    })
    let component: any
    await act(async () => {
      component = render(<MainPage />)
    })
    const element = component.getByText(/Welcome!/)
    expect(element).toBeInTheDocument()
  })

  it('Async promises resolve', async () => {
    useAuthContext.mockReturnValue({
      isAuthenticated: true,
    })
    fakeCall.mockResolvedValue('TEST!')

    let component: any
    await act(async () => {
      component = render(<MainPage />)
    })
    const element = component.getByText(/TEST!/)
    expect(element).toBeInTheDocument()
  })
})
