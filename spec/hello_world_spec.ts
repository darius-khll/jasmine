import * as request from "request";
import * as helloWorld from "../index.js"
import * as moduleLoader from "../app/module"

var base_url = "http://localhost:3000/";

describe("Hello World Server", () => {
    var moduleClass: moduleLoader.Module1;
    beforeEach(() => {
        moduleClass = new moduleLoader.Module1();
    });

    describe("GET /", () => {
        it("returns status code 200", (done) => {
            request.get(base_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("returns Hello World", (done) => {
            request.get(base_url, (error, response, body) => {
                expect(body).toBe("Hello World");
                helloWorld.closeServer();
                done();
            });
        });
    });

    //xdescribe ==> ignore test
    describe("test module", () => {

        it("test spyOn and mock something", () => {
            let x = new moduleLoader.Module1();
            let spy = (spyOn(x, "f1") as any).andReturn(20);
            expect(x.f1()).toBe(20);
        });

        it("first f1 function must return 1", () => {
            expect(moduleClass.f1()).toBe(1);
            expect(moduleClass.f1()).toBe(2);
        })

        xit("second f1 function must return 1", () => {
            expect(moduleClass.f1()).not.toBe(2);
        })
    })
});