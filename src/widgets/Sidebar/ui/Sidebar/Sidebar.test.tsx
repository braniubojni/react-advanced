import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/helpers/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('- component rendered', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('- component collapsed', () => {
        const id = 'sidebar';
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId(id)).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId(id)).toHaveClass('collapsed');
    });
});
