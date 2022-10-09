import styled, { keyframes } from 'styled-components';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

const slideDown = keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`;

const slideUp = keyframes`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`;

export const Container = styled.div`
  margin-bottom: 4rem;

  & > h3 {
    font-weight: 700;
    font-size: 1.625rem;
    line-height: 1.4;
    color: ${(props) => props.theme.colors.primary_light};
  }
`;

export const Accordion = styled(AccordionPrimitive.Root)``;

export const AccordionItem = styled(AccordionPrimitive.Item)``;

export const AccordionHeader = styled(AccordionPrimitive.Header)`
  all: unset;
  display: flex;
  margin: 1.5rem 0;
`;

export const AccordionTrigger = styled(AccordionPrimitive.Trigger)`
  all: unset;
  background: transparent;
  flex: 1;
  line-height: 1.6875;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.primary_light};
  font-size: 1.125rem;
  font-weight: 500;

  & > svg {
    width: 25px;
    height: 25px;
    color: ${(props) => props.theme.colors.primary};
    transition: transform 200ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  }

  &[data-state='open'] > svg {
    transform: rotate(180deg);
  }
`;

export const AccordionContent = styled(AccordionPrimitive.Content)`
  color: ${(props) => props.theme.colors.primary_light};
  padding-right: 2.2rem;

  &[data-state='open'] {
    animation: ${slideDown} 200ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  }

  &[data-state='closed'] {
    animation: ${slideUp} 200ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  }
`;
