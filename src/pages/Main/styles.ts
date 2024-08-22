import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;

  >section {
    flex:1;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 2rem 1.875rem;

    .logo {
      width: 10rem;
      margin-botton: 2rem;
    }
  }


`
