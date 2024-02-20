import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/test/helper'
import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the texy correctly', () => {
    const { container } = renderWithTheme(<Ribbon>Best seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the primary color by default', () => {
    renderWithTheme(<Ribbon>Best seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({ background: "#F231A5" });
  })
  it('should render the secondary color when passed', () => {
    renderWithTheme(<Ribbon color='secondary'>Best seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({ background: "#3CD3C1" });
  })
  it('should render with normal size as default', () => {
    renderWithTheme(<Ribbon>Best seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({ height: "3.6rem", fontSize: "1.4rem" });
  })
  it('should render with small size when passed', () => {
    renderWithTheme(<Ribbon size='small'> Best seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({ height: "2.6rem", fontSize: "1.2rem" });
  })
})