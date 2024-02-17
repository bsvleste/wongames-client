import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/test/helper'
import Banner from '.'
const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    // verifique se o title existe renderizado (.toBeInTheDocument())
    // verifique se o subtitle existe renderizado
    // verifique se a imagem existe renderizado
    renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()


  })
  it('should render a Ribbon', () => {
    renderWithTheme(<Banner {...props} ribbon="My Ribbon" ribbonSize="small" ribbonColor="secondary" />)
    const ribbon = screen.getByText(/My ribbon/i)
    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ background: "#3CD3C1" });
    expect(ribbon).toHaveStyle({ height: "2.6rem", fontSize: "1.2rem" });;
  })
})