import { classNames } from './classNames';

describe('classNames', () => {
    test('- only one param', () => {
        const cls = 'someClass';
        expect(classNames(cls)).toBe(cls);
    });

    test('- with additional class', () => {
        const cls = 'someClass';
        const clses = ['one', 'two', 'three'];
        const expected = `${cls} ${clses.join(' ')}`;
        expect(
            classNames(cls, {}, clses),
        ).toBe(expected);
    });

    test('- with mods', () => {
        const cls = 'someClass';
        const clses = ['one', 'two', 'three'];
        const mods = { hovered: true, scrollable: true };
        const expected = `${cls} ${clses.join(' ')} ${Object.keys(mods).join(' ')}`;
        expect(
            classNames(
                cls,
                mods,
                clses,
            ),
        ).toBe(expected);
    });

    test('- with mods false', () => {
        const cls = 'someClass';
        const clses = ['one', 'two', 'three'];
        const mods = { hovered: true, scrollable: false };
        const expected = `${cls} ${clses.join(' ')} ${
            Object.keys(mods).filter((key) => key !== 'scrollable').join(' ')
        }`;
        expect(
            classNames(
                cls,
                mods,
                clses,
            ),
        ).toBe(expected);
    });

    test('- with mods undefined', () => {
        const cls = 'someClass';
        const clses = ['one', 'two', 'three'];
        // @ts-ignore
        const mods = { hovered: true, scrollable: void 0 };
        const expected = `${cls} ${clses.join(' ')} ${
            Object.keys(mods).filter((key) => key !== 'scrollable').join(' ')
        }`;
        expect(
            classNames(
                cls,
                mods,
                clses,
            ),
        ).toBe(expected);
    });
});
