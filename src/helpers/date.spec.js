import { getTs } from './date';

describe('testGetTs', () => {
    it('should get current timestamp', function () {
        expect(getTs()).toBeGreaterThanOrEqual(parseInt(+ new Date() / 1000));
    });
})