import { storage } from "../lib/storage";
import { getUsername, saveUsername } from "../user";

//mock a modulos propios
jest.mock('../lib/storage.js')

test('First example', () => {
    const myMock = jest.fn();

    myMock();

    expect(myMock).toHaveBeenCalled()
});

test('Second example', () => {
    const myMock2 = jest.fn();

    myMock2();
    myMock2();
    myMock2();

    expect(myMock2).toHaveBeenCalledTimes(3);
});

test('Third example', () => {
    const myMock = jest.fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce('hello world')
    .mockReturnValueOnce(5);
    
    const result1 = myMock();
    const result2 = myMock();
    const result3 = myMock();

    expect(myMock).toHaveBeenCalledTimes(3);
    expect(result1).toBe(true);
    expect(result2).toBe('hello world');
    expect(result3).toBe(5);
});

describe('mock a modulos propios', () => {

    test('Four example', () => {
        const username = 'Josh eod';
        saveUsername(username);
        expect(storage.save).toHaveBeenCalledTimes(1);
        expect(storage.save).toHaveBeenLastCalledWith({ key:'username', value: username });
    });

    test('five example', () => {
        const username = 'Josh eod';
        storage.get.mockReturnValueOnce(username);

        const result  = getUsername();

        expect(result).toBe(username);
        expect(storage.get).toHaveBeenCalledTimes(1);
        expect(storage.get).toHaveBeenLastCalledWith({ key:'username' });
    });
});
