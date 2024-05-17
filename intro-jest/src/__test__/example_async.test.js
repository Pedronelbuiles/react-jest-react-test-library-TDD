//callbacks

const asyncCallback = (callback) => {
    setTimeout(() => {
       callback(true) 
    }, 1000);
};

//promises

const asyncPromise = () => new Promise((resolve) => resolve(true));


describe('async code', () => {
    test('example of async with callback', (done) => {
        asyncCallback((result) => {
            expect(result).toBe(true)
            done()
        })
    });

    test('example of async with promise', () => {
        return asyncPromise().then((result) => expect(result).toBe(true));
    });

    test('example of async await promise', async () => {
        const result = await asyncPromise();
        expect(result).toBe(true);
    });
})