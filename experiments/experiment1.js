process.env.UV_THREADPOOL_SIZE = 12;
import crypto from "crypto";
import os from 'os'
console.log(os.availableParallelism());

// let start=Date.now()
// crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512')
// crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512')
// crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512')
// crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512')
// console.log("time consumed",Date.now()-start);

let MAX_CALLS = 6;

let start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", () => {
    console.log(`call number ${i + 1}`, Date.now() - start);
  });
}
