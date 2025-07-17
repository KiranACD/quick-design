import {cn} from "../../src/lib/utils";

describe('cn utility function', () => {
    it('should merge classes correctly', () => {
        const result = cn('px-4', 'py-2');
        expect(result).toContain('px-4');
        expect(result).toContain('py-2');
    });

    it('should handle conditional classes', () => {
        const result = cn('px-4', true && 'py-2', false && 'hidden');
        expect(result).toContain('px-4');
        expect(result).toContain('py-2');
        expect(result).not.toContain('hidden');
    });

    it('should resolve Tailwind conflicts', () => {
        const result = cn('p-4', 'p-6');
        expect(result).toBe('p-6');
    });

    it('should handle empty inputs', () => {
        const result = cn();
        expect(result).toBe('');
    });

    it('should handle undefined and null values', () => {
        const result = cn('px-4', undefined, null, 'py-2');
        expect(result).toContain('px-4');
        expect(result).toContain('py-2');
    });

    it('should handle objects with boolean values', () => {
        const result = cn({
            'px-4': true,
            'py-2': false,
            'bg-blue-500': true
        });

        expect(result).toContain('px-4');
        expect(result).toContain('bg-blue-500');
        expect(result).not.toContain('py-2');
    });
});