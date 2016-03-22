var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var b = new Promise(function (resolve, reject) {
    reject("1");
});
function a() {
    return __awaiter(this, void 0, void 0, function* () {
        var first = yield b;
        console.log("a - " + first);
        var second = first + " 2";
        return second;
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var r = yield a();
            return r;
        }
        catch (ex) {
            console.log("Exception: " + ex);
        }
    });
}
main().then(value => { console.log(value); });
