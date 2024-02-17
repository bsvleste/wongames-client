import Chekbox from '.'
import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from '@/utils/test/helper'
import userEvent from '@testing-library/user-event'
describe('<Chekbox />', () => {
  it('should render the Chekbox', () => {
    renderWithTheme(<Chekbox label="checkbox label" labelFor="check" />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })
  it('should render without label', () => {
    renderWithTheme(<Chekbox />)
    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })
  it('should render without black label', () => {
    renderWithTheme(<Chekbox label="checkbox label" labelFor='check' labelColor='black' />)
    expect(screen.getByText(/checkbox label/i)).toHaveStyle({ color: "#030517" })
  })
  it('should dispatch onCheck label statuy changes', async () => {
    const onCheck = jest.fn()
    renderWithTheme(<Chekbox label="Checkbox" onCheck={onCheck} />)
    expect(onCheck).not.toHaveBeenCalled()
    userEvent.click(screen.getByRole('Checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
  })
})