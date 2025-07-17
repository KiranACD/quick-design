import React from 'react';
import {render, screen} from '@testing-library/react';
import {Section, Container} from '../src/components';


describe('Section Component', () => {
    it('renders children correctly', () => {
        render(
            <Section>
                <h1>Test Content</h1>
            </Section>
        );

        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('applies default classes', () => {
        const {container} = render(
            <Section>
                <p>Content</p>
            </Section>
        );

        const section = container.querySelector('section');
        expect(section).toHaveClass('py-2', 'sm:py-4');
    });

    it('merges custom clsasName with defaults', () => {
        const {container} = render(
            <Section className="bg-gray-100">
                <p>Content</p>
            </Section>
        );

        const section = container.querySelector('section');
        expect(section).toHaveClass('py-2', 'sm:py-4', 'bg-gray-100');
    });

    it('applies custom id and style', () => {
        const customStyle = {margin: '10px'};
        const {container} = render(
            <Section id="hero" style={customStyle}>
                <p>Content</p>
            </Section>
        );

        const section = container.querySelector('section');
        expect(section).toHaveAttribute('id', 'hero');
        expect(section).toHaveStyle({margin: '10px'});
    });
});

describe('Container Component', () => {
    it('renders children correctly', () => {
        render(
            <Container>
                <h1>Test Content</h1>
            </Container>
        );

        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('applies default classes', () => {
        const {container} = render(
            <Container>
                <p>Content</p>
            </Container>
        );

        const div = container.querySelector('div');
        expect(div).toHaveClass('mx-auto', 'max-w-7xl', 'p-4', 'sm:p-6');
    });

    it('merges custom className with defaults', () => {
        const {container} = render(
            <Container className="max-w-4xl">
                <p>Content</p>
            </Container>
        );

        const div = container.querySelector('div');
        expect(div).toHaveClass('mx-auto', 'max-w-4xl', 'p-4', 'sm:p-6');
    });

    it('applies custom id and style', () => {
        const customStyle = {backgroundColor: 'red'};
        const {container} = render(
            <Container id="main-container" style={customStyle}>
                <p>Content</p>
            </Container>
        );

        const div = container.querySelector('div');
        expect(div).toHaveAttribute('id', 'main-container');
        expect(div).toHaveStyle({backgroundColor: 'red'})
    });

    it('renders as div element', () => {
        const {container} = render(
            <Container>
                <p>Content</p>
            </Container>
        );

        expect(container.querySelector('div')).toBeInTheDocument();
    });
});

describe('Component Integration', () => {
    it('works together in nested structure', () => {
        render(
            <Section>
                <Container>
                    <h1>Nested Content</h1>
                </Container>
            </Section>
        );

        expect(screen.getByText('Nested Content')).toBeInTheDocument();

        const section = screen.getByText('Nested Content').closest('section');
        const container = screen.getByText('Nested Content').closest('div');

        expect(section).toHaveClass('py-2', 'sm:py-4');
        expect(container).toHaveClass('mx-auto', 'max-w-7xl')
    });
});

