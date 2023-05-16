import userEvent from '@testing-library/user-event';
import App from './page';
import { GetProjectDataForHomepage } from '@/src/apis/apis';
import { GetEntryFromIncludesByItem } from '@/src/apis/ContentfulService';
import {jest} from "@jest/globals";
import {render} from "@testing-library/react";

jest.mock('@/src/apis/apis');
jest.mock('@/src/apis/ContentfulService');

const mockGetProjectDataForHomepage = GetProjectDataForHomepage as jest.MockedFunction<typeof GetProjectDataForHomepage>;
const mockGetAssetByAssetId = GetEntryFromIncludesByItem as jest.MockedFunction<typeof GetEntryFromIncludesByItem>;

describe('App component', () => {
    beforeEach(() => {
        mockGetProjectDataForHomepage.mockResolvedValue(/* Provide mocked projects data */);
        mockGetAssetByAssetId.mockImplementation((assets, id) => /* Provide mocked asset */);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders header with correct text', async () => {
        render(<App />);
        const headerText = await screen.findAllByText(/Building software with|impactful designs/i);
        expect(headerText.length).toBe(2);
    });

    it('renders filter items', async () => {
        render(<App />);
        await screen.findByText(/Filter by:/i);
        expect(screen.getByText('Hannah')).toBeInTheDocument();
        expect(screen.getByText('Max')).toBeInTheDocument();
        expect(screen.getByText('Combo')).toBeInTheDocument();
    });

    it('renders project cards', async () => {
        render(<App />);
        await waitFor(() => expect(mockGetProjectDataForHomepage).toHaveBeenCalled());
        // Replace 'Mocked Project Title' with the actual title from your mocked data
        expect(screen.getByText('Mocked Project Title')).toBeInTheDocument();
    });

    it('changes filter item color on hover', async () => {
        render(<App />);
        const filterItem = await screen.findByText('Hannah');
        userEvent.hover(filterItem);
        expect(filterItem).toHaveClass('hover:text-gray-400');
        userEvent.unhover(filterItem);
    });
});
