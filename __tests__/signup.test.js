import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignupSection from '../src/app/ui/SignupSection.jsx';

const mockText = "Did we peak your enthusiasm? Great! You can sign up with your team. Don't have a team yet? Don't worry, we can match you to an awesome team! If the current edition has already started, you can sign up for the next one.";

const makeMockData = (signupPossible) => ({
    content: { content: [ { content: [ { value: mockText } ] } ] },
    signupButtonLabels: ["Sign up", "Sign up next year!"],
    signupPossible
});

describe('SignupSection', () => {
    test('shows content and primary sign up button when signupPossible is true', () => {
        render(<SignupSection data={makeMockData(true)} />);
        expect(screen.getByText(mockText)).toBeInTheDocument();
        const signupButton = screen.getByRole('button', { name: /Sign up$/i });
        expect(signupButton).toBeInTheDocument();
    });

    test('shows content and sign up next year button when signupPossible is false', () => {
        render(<SignupSection data={makeMockData(false)} />);
        expect(screen.getByText(mockText)).toBeInTheDocument();
        const signupNextYearButton = screen.getByRole('button', { name: /Sign up next year!/i });
        expect(signupNextYearButton).toBeInTheDocument();
    });
});
