import * as injectedModule from "../../app/module"

describe("test myModule.", () => {

    var moduleObj: injectedModule.MyModule;
    beforeEach(() => {
        moduleObj = new injectedModule.MyModule();
    });

    describe("test async.", () => {
        it("test asyncMethod using spyOn and mock it.", async (done) => {

            let mod = new injectedModule.MyModule();
            let spy = (spyOn(mod, "asyncMethod") as any).andReturn(20);
            expect(mod.asyncMethod(1)).toBe(20);
            done();
        });

        it("test asyncMethod.", async (done) => {
            let mod = new injectedModule.MyModule();;
            let data = await mod.asyncMethod(1);
            expect(data).toBe(11);
            done();
        });
    });

    //xdescribe ==> ignore test
    describe("test sync.", () => {
        it("test syncMethod using spyOn and mock it.", () => {
            let mod = new injectedModule.MyModule();
            let spy = (spyOn(mod, "syncMethod") as any).andReturn(20);
            expect(mod.syncMethod()).toBe(20);
        });

        it("first syncMethod function must return 1", () => {
            expect(moduleObj.syncMethod()).toBe(1);
            expect(moduleObj.syncMethod()).toBe(2);
        })

        xit("second syncMethod function must not return 2", () => {
            expect(moduleObj.syncMethod()).not.toBe(2);
        })
    })

});