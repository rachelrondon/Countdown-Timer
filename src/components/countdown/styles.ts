import styled from 'styled-components';

export const StyledCountdown = styled.div`
  align-items: center;
  background: ${props => props.theme.global.body_color};
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.primary_font_family.regular};
  height: 100vh;
  padding: 5rem;
  justify-content: center;
  text-align: center;

  @media(max-width: 768px) {
    padding: 3rem;
  }
`;

export const StyledButton = styled.button`
  background: ${props => props.theme.buttons.primary_button_background_color};
  border-color: ${props => props.theme.buttons.primary_button_border_color};
  border-radius: ${props => props.theme.buttons.primary_button_border_radius}px;
  color: ${props => props.theme.buttons.primary_button_text_color};
  height: 2rem;
  margin: 0.5rem;
  width: 2rem;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: center;
  width: 100%;
`

export const StyledForm = styled.form`
  background: ${props => props.theme.forms.background_color};
  border-color: ${props => props.theme.forms.border_color};
  border-radius: ${props => props.theme.forms.border_radius};
  color: ${props => props.theme.forms.font_color};
`

export const StyledImg = styled.img`
  @media(max-width: 768px) {
    width: 100%;
    height: auto;
  }
`

export const StyledInput = styled.input`
  background: '#EFEFEF';
  border: '5px solid gray';
  border-radius: '3px';
  height: auto;
  margin: 0.25rem;
  padding: 3;
  width: 50;
`
